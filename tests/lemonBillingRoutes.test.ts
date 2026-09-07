import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { createHmac } from 'node:crypto';
import { readFileSync } from 'node:fs';

interface JsonResult { success?: boolean; url?: string; message?: string; duplicate?: boolean; ignored?: boolean }
interface RouteLayer { handle: (req: unknown, res: unknown, next: () => void) => void | Promise<void> }
interface BillingExports {
  billingRouter: { stack: Array<{ route?: { path: string; stack: RouteLayer[] } }> };
  lemonWebhookHandler: (req: unknown, res: unknown) => Promise<void>;
}

const require = createRequire(new URL('../functions/package.json', import.meta.url));
const compiled = await build({
  entryPoints: [fileURLToPath(new URL('../functions/src/billing/routes.ts', import.meta.url))],
  bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external',
  plugins: [{ name: 'test-boundaries', setup(builder) {
    builder.onResolve({ filter: /firebase\/admin\.js$/ }, () => ({ path: 'test-admin', external: true }));
    builder.onResolve({ filter: /^\.\/params\.js$/ }, args => args.importer.replaceAll('\\', '/').endsWith('/billing/routes.ts')
      ? { path: 'test-params', external: true } : undefined);
  } }],
});

function harness(overrides: Record<string, string | boolean> = {}) {
  const params: Record<string, string | boolean> = {
    appUrl: 'https://example.com', lemonApiKey: 'fixture-api-key', lemonStoreId: '11', lemonTestMode: false,
    lemonLegacyVariantId: '99', lemonVariantIdMonthly: '22', lemonVariantIdQuarterly: '23', lemonVariantIdYearly: '24',
    lemonWebhookSecret: 'fixture-signing-secret',
    ...overrides,
  };
  const documents = new Map<string, Record<string, unknown>>();
  const writes: string[] = [];
  const requests: Array<{ url: string; init: RequestInit }> = [];
  let responseAttributes: Record<string, unknown> = { url: 'https://example.com/checkout' };
  const snapshot = (path: string) => ({ exists: documents.has(path), data: () => documents.get(path) });
  const firestore = {
    collection: (collection: string) => ({ doc: (id: string) => ({ path: `${collection}/${id}`, get: async () => snapshot(`${collection}/${id}`) }) }),
    runTransaction: async (fn: (transaction: unknown) => Promise<void>) => fn({
      get: async (ref: { path: string }) => snapshot(ref.path),
      set: (ref: { path: string }, data: Record<string, unknown>) => { documents.set(ref.path, { ...documents.get(ref.path), ...data }); writes.push(ref.path); },
      create: (ref: { path: string }, data: Record<string, unknown>) => { assert.equal(documents.has(ref.path), false); documents.set(ref.path, data); writes.push(ref.path); },
    }),
  };
  const module = { exports: {} as BillingExports };
  runInNewContext(compiled.outputFiles[0].text, {
    module, exports: module.exports, Buffer, URL, Headers, Response,
    console: { error() {}, warn() {}, log() {} },
    fetch: async (url: string, init: RequestInit) => {
      requests.push({ url, init });
      return new Response(JSON.stringify({ data: { attributes: responseAttributes } }), { status: 200 });
    },
    require: (id: string) => {
      if (id === 'test-admin') return { firestore, adminAuth: { verifyIdToken: async (token: string, revoked: boolean) => {
        assert.equal(revoked, true);
        if (token !== 'valid-token') throw new Error('invalid');
        return { uid: 'verified-user', email: 'verified@example.com' };
      } } };
      if (id === 'test-params') return Object.fromEntries(Object.keys(params).map(key => [key, { value: () => params[key] }]));
      return require(id);
    },
  });
  async function request(path: string, body: unknown, token: string | null = 'valid-token') {
    let status = 200;
    let json: JsonResult = {};
    const req = { body, header: (name: string) => name === 'authorization' && token ? `Bearer ${token}` : undefined };
    const res = { status: (code: number) => { status = code; return res; }, json: (value: unknown) => { json = value as JsonResult; return res; } };
    const route = module.exports.billingRouter.stack.find(entry => entry.route?.path === path)!.route!;
    for (const layer of route.stack) {
      let next = false;
      await layer.handle(req, res, () => { next = true; });
      if (!next) break;
    }
    return { status, json };
  }
  async function webhook(attributes: Record<string, unknown>, options: { signature?: string; event?: string; type?: string } = {}) {
    const rawBody = Buffer.from(JSON.stringify({
      meta: { event_name: options.event || 'subscription_updated', custom_data: { firebase_uid: 'verified-user' } },
      data: { type: options.type || 'subscriptions', id: 'sub-fixture', attributes: {
        store_id: 11, variant_id: 22, test_mode: false, status: 'active', renews_at: '2099-01-01T00:00:00Z', ...attributes,
      } },
    }));
    const signature = options.signature ?? createHmac('sha256', String(params.lemonWebhookSecret)).update(rawBody).digest('hex');
    let status = 200;
    let json: JsonResult = {};
    const res = { status: (code: number) => { status = code; return res; }, json: (value: unknown) => { json = value as JsonResult; return res; } };
    await module.exports.lemonWebhookHandler({ rawBody, header: () => signature }, res);
    return { status, json };
  }
  return { params, documents, requests, writes, request, webhook, respond: (attributes: Record<string, unknown>) => { responseAttributes = attributes; } };
}

const checkout = '/api/billing/create-checkout';
const portal = '/api/billing/customer-portal';

test('checkout route requires verified auth and rejects arbitrary plans and client variant IDs with 400', async () => {
  const h = harness();
  assert.equal((await h.request(checkout, { plan: 'monthly' }, null)).status, 401);
  assert.equal((await h.request(checkout, { plan: 'monthly' }, 'invalid-token')).status, 401);
  for (const body of [null, {}, { plan: 'invalid' }, { plan: '__proto__' }, { plan: 'constructor' }, { variantId: '22' }, { plan: 'monthly', variantId: '22' }]) {
    assert.equal((await h.request(checkout, body)).status, 400);
  }
  assert.equal(h.requests.length, 0);
});

test('checkout route maps all three plans and binds identity to verified token', async () => {
  const h = harness();
  for (const [plan, id] of [['monthly', '22'], ['quarterly', '23'], ['yearly', '24']]) {
    assert.equal((await h.request(checkout, { plan })).status, 200);
    const payload = JSON.parse(String(h.requests.at(-1)?.init.body));
    assert.equal(payload.data.relationships.variant.data.id, id);
    assert.equal(payload.data.relationships.store.data.id, '11');
    assert.equal(payload.data.attributes.checkout_data.custom.firebase_uid, 'verified-user');
    assert.equal(payload.data.attributes.checkout_data.email, 'verified@example.com');
    assert.equal(payload.data.attributes.test_mode, false);
  }
});

test('empty/malformed selected variants fail with 503 and no Lemon request even when legacy exists', async () => {
  for (const [plan, param] of [['monthly', 'lemonVariantIdMonthly'], ['quarterly', 'lemonVariantIdQuarterly'], ['yearly', 'lemonVariantIdYearly']]) {
    for (const value of ['', ' ', 'TODO_ID', '1']) {
      const h = harness(); h.params[param] = value;
      const result = await h.request(checkout, { plan });
      assert.equal(result.status, 503);
      assert.equal(result.json.message, 'Этот тариф пока недоступен для оформления.');
      assert.equal(h.requests.length, 0);
    }
  }
});

test('existing subscriptions block every plan, including legacy and elapsed active access', async () => {
  const h = harness();
  for (const subscriptionStatus of ['active', 'cancelled', 'past_due', 'paused']) {
    h.documents.set('entitlements/verified-user', { provider: 'lemonsqueezy', testMode: false, lemonSubscriptionId: 'existing-sub', lemonVariantId: '99', subscriptionStatus, accessUntil: '2000-01-01T00:00:00Z' });
    for (const plan of ['monthly', 'quarterly', 'yearly']) assert.equal((await h.request(checkout, { plan })).status, 409);
  }
  assert.equal(h.requests.length, 0);
});

test('portal works for an existing legacy subscription even with all new variants empty', async () => {
  const h = harness();
  h.params.lemonVariantIdMonthly = h.params.lemonVariantIdQuarterly = h.params.lemonVariantIdYearly = '';
  h.documents.set('entitlements/verified-user', { provider: 'lemonsqueezy', testMode: false, lemonSubscriptionId: 'owned-sub', subscriptionStatus: 'active' });
  h.respond({ store_id: 11, variant_id: 99, test_mode: false, urls: { customer_portal: 'https://example.com/portal' } });
  assert.equal((await h.request(portal, {})).json.url, 'https://example.com/portal');
  assert.match(h.requests[0].url, /subscriptions\/owned-sub$/);
  assert.equal((await h.request(portal, {}, null)).status, 401);
  h.documents.set('entitlements/verified-user', { provider: 'lemonsqueezy', testMode: true, lemonSubscriptionId: 'test-sub' });
  assert.equal((await h.request(portal, {})).status, 404);
  h.documents.clear();
  assert.equal((await h.request(portal, {})).status, 404);
});

test('signed webhook accepts exactly three variants and deduplicates actual transaction writes', async () => {
  for (const variant_id of [22, 23, 24]) {
    const h = harness();
    h.documents.set('entitlements/verified-user', { isPrivileged: true });
    const first = await h.webhook({ variant_id });
    assert.equal(first.status, 200); assert.equal(first.json.duplicate, false);
    const count = h.writes.length;
    assert.equal((await h.webhook({ variant_id })).json.duplicate, true);
    assert.equal(h.writes.length, count);
    assert.equal(h.documents.get('entitlements/verified-user')?.lemonVariantId, String(variant_id));
    assert.equal(h.documents.get('entitlements/verified-user')?.isPrivileged, true);
    assert.equal(h.documents.get('billingSubscriptions/sub-fixture')?.firebaseUid, 'verified-user');
  }
});

test('webhook rejects bad signatures and ignores unknown/legacy variants, wrong store and environment', async () => {
  const h = harness();
  assert.equal((await h.webhook({}, { signature: '0'.repeat(64) })).status, 401);
  for (const attributes of [{ variant_id: 99 }, { variant_id: 98 }, { store_id: 12 }, { test_mode: true }, { test_mode: undefined }]) {
    assert.equal((await h.webhook(attributes)).json.ignored, true);
  }
  h.params.lemonVariantIdMonthly = h.params.lemonVariantIdQuarterly = h.params.lemonVariantIdYearly = '';
  assert.equal((await h.webhook({})).json.ignored, true);
  assert.equal(h.writes.length, 0);
});

// Read the actual dotenv literals written by the deployment workflow. No live API calls.
const productionWorkflow = readFileSync(new URL('../.github/workflows/firebase-hosting-merge.yml', import.meta.url), 'utf8');
const productionStep = productionWorkflow.split('- name: Configure Functions production parameters')[1]?.split('- name: Deploy Firebase Functions')[0] ?? '';
const productionEnv = Object.fromEntries([...productionStep.matchAll(/'([A-Z_]+)=([^']*)'/g)].map(match => [match[1], match[2]]));
function productionHarness() {
  return harness({
    appUrl: productionEnv.APP_URL,
    lemonStoreId: productionEnv.LEMONSQUEEZY_STORE_ID,
    lemonTestMode: productionEnv.LEMONSQUEEZY_TEST_MODE === 'true',
    lemonVariantIdMonthly: productionEnv.LEMONSQUEEZY_VARIANT_ID_MONTHLY,
    lemonVariantIdQuarterly: productionEnv.LEMONSQUEEZY_VARIANT_ID_QUARTERLY,
    lemonVariantIdYearly: productionEnv.LEMONSQUEEZY_VARIANT_ID_YEARLY,
    lemonLegacyVariantId: productionEnv.LEMONSQUEEZY_VARIANT_ID,
  });
}

test('production workflow supplies the approved LIVE parameters without embedding billing secrets', () => {
  assert.deepEqual(productionEnv, {
    LEMONSQUEEZY_TEST_MODE: 'false', LEMONSQUEEZY_STORE_ID: '461197',
    LEMONSQUEEZY_VARIANT_ID_MONTHLY: '2100676', LEMONSQUEEZY_VARIANT_ID_QUARTERLY: '2097546',
    LEMONSQUEEZY_VARIANT_ID_YEARLY: '2100672', LEMONSQUEEZY_VARIANT_ID: '2097546',
    APP_URL: 'https://hungarylearn.web.app',
  });
  assert.doesNotMatch(productionWorkflow, /LEMONSQUEEZY_API_KEY|LEMONSQUEEZY_WEBHOOK_SECRET/);
  assert.match(productionStep, /> functions\/\.env\.hungarylearn/);
  const params = readFileSync(new URL('../functions/src/billing/params.ts', import.meta.url), 'utf8');
  assert.match(params, /defineSecret\('LEMONSQUEEZY_API_KEY'\)/);
  assert.match(params, /defineSecret\('LEMONSQUEEZY_WEBHOOK_SECRET'\)/);
  for (const name of ['plans', 'params', 'routes', 'webhook']) {
    assert.doesNotMatch(readFileSync(new URL(`../functions/src/billing/${name}.ts`, import.meta.url), 'utf8'), /2100676|2097546|2100672/);
  }
});

test('production checkout maps plan to its configured LIVE variant and rejects client overrides', async () => {
  const h = productionHarness();
  for (const [plan, variant] of [['monthly', '2100676'], ['quarterly', '2097546'], ['yearly', '2100672']]) {
    assert.equal((await h.request(checkout, { plan })).status, 200);
    const payload = JSON.parse(String(h.requests.at(-1)?.init.body));
    assert.equal(payload.data.relationships.variant.data.id, variant);
    assert.equal(payload.data.relationships.store.data.id, '461197');
    assert.equal(payload.data.attributes.test_mode, false);
    const count = h.requests.length;
    assert.equal((await h.request(checkout, { plan, variantId: '2100676' })).status, 400);
    assert.equal((await h.request(checkout, { variantId: variant })).status, 400);
    assert.equal(h.requests.length, count);
  }
});

test('production webhook grants access to all three configured IDs including reused quarterly ID', async () => {
  for (const variant_id of [2100676, 2097546, 2100672]) {
    const h = productionHarness();
    const result = await h.webhook({ store_id: 461197, variant_id });
    assert.equal(result.status, 200);
    assert.equal(result.json.ignored, undefined);
    const entitlement = h.documents.get('entitlements/verified-user');
    assert.equal(entitlement?.subscriptionStatus, 'active');
    assert.equal(entitlement?.testMode, false);
    assert.equal(entitlement?.lemonVariantId, String(variant_id));
    assert.equal(entitlement?.isPrivileged, false);
  }
  for (const attributes of [
    { store_id: 461197, variant_id: 2100675 },
    { store_id: 461197, variant_id: 99 },
    { store_id: 461198, variant_id: 2100676 },
    { store_id: 461197, variant_id: 2100676, test_mode: true },
  ]) {
    const h = productionHarness();
    assert.equal((await h.webhook(attributes)).json.ignored, true);
    assert.equal(h.writes.length, 0);
  }
});
