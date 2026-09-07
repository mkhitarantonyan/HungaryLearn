import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const compiled = await build({
  entryPoints: [fileURLToPath(new URL('../src/utils/userStore.ts', import.meta.url))],
  bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external',
  plugins: [{ name: 'mock-client-auth', setup(builder) {
    builder.onResolve({ filter: /\/firebase$/ }, () => ({ path: 'test-client-auth', external: true }));
  } }],
});

test('frontend checkout sends only the selected plan with JSON and bearer token; 503 message survives', async () => {
  const requests: Array<{ url: string; init: RequestInit }> = [];
  let unavailable = false;
  const module = { exports: {} as { createLemonCheckout: (plan: unknown) => Promise<{ success: boolean; url?: string; message?: string }> } };
  const context: Record<string, unknown> = {
    module, exports: module.exports, Headers, AbortController, console,
    require: (id: string) => id === 'test-client-auth'
      ? { getFirebaseAuth: () => ({ currentUser: { getIdToken: async () => 'verified-token' } }) }
      : require(id),
    fetch: async (url: string, init: RequestInit) => {
      requests.push({ url, init });
      return new Response(JSON.stringify(unavailable
        ? { success: false, message: 'Этот тариф пока недоступен для оформления.' }
        : { success: true, url: 'https://example.com/checkout' }), { status: unavailable ? 503 : 200 });
    },
  };
  runInNewContext(compiled.outputFiles[0].text, context);
  context.window = { setTimeout, clearTimeout };
  for (const plan of ['monthly', 'quarterly', 'yearly']) {
    assert.equal((await module.exports.createLemonCheckout(plan)).success, true);
    const request = requests.at(-1)!;
    assert.equal(request.url, '/api/billing/create-checkout');
    assert.equal(request.init.method, 'POST');
    assert.deepEqual(JSON.parse(String(request.init.body)), { plan });
    assert.equal(new Headers(request.init.headers).get('Content-Type'), 'application/json');
    assert.equal(new Headers(request.init.headers).get('Authorization'), 'Bearer verified-token');
  }
  unavailable = true;
  const result = await module.exports.createLemonCheckout('quarterly');
  assert.equal(result.success, false);
  assert.equal(result.message, 'Этот тариф пока недоступен для оформления.');
  assert.equal(result.url, undefined);
  const before = requests.length;
  for (const invalid of ['invalid', '__proto__', { variantId: '22' }, undefined]) {
    assert.equal((await module.exports.createLemonCheckout(invalid)).success, false);
  }
  assert.equal(requests.length, before);
});

const modalCompiled = await build({
  entryPoints: [fileURLToPath(new URL('../src/components/UserAuthModal.tsx', import.meta.url))],
  bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external',
  plugins: [{ name: 'mock-account-profile', setup(builder) {
    builder.onResolve({ filter: /\/userStore$/ }, () => ({ path: 'test-user-store', external: true }));
  } }],
});

test('account renders quarterly selection by default and preserves portal and privileged flows', () => {
  const React = require('react');
  const { renderToStaticMarkup } = require('react-dom/server');
  function render(profile: Record<string, unknown>) {
    const module = { exports: {} as Pick<typeof import('../src/components/UserAuthModal.tsx'), 'UserAuthModal'> };
    runInNewContext(modalCompiled.outputFiles[0].text, {
      module, exports: module.exports,
      require: (id: string) => id === 'test-user-store' ? {
        getCurrentUser: () => ({ id: 'fixture-user', email: 'fixture@example.com', paidAccess: false, subscriptionStatus: 'unpaid', ...profile }),
        isUserAuthReady: () => true,
      } : require(id),
    });
    return renderToStaticMarkup(React.createElement(module.exports.UserAuthModal, { isOpen: true, onClose() {} }));
  }
  const unpaid = render({});
  assert.equal((unpaid.match(/type="radio"/g) || []).length, 3);
  assert.match(unpaid, /checked="" value="quarterly"/);
  assert.match(unpaid, /Оформить за 22\s990 Ft/);
  assert.match(unpaid, /Самый популярный/);
  for (const price of [/8\s990 Ft/, /22\s990 Ft/, /64\s990 Ft/]) assert.match(unpaid, price);
  for (const subscriptionStatus of ['active', 'cancelled', 'past_due', 'paused']) {
    const existing = render({ provider: 'lemonsqueezy', subscriptionStatus, accessUntil: '2000-01-01T00:00:00Z' });
    assert.match(existing, /Управлять подпиской/);
    assert.doesNotMatch(existing, /type="radio"|Оформить за/);
  }
  const privileged = render({ isPrivileged: true });
  assert.match(privileged, /Доступ предоставлен администратором/);
  assert.doesNotMatch(privileged, /type="radio"|Оформить за/);
});

const legalCompiled = await build({
  entryPoints: [fileURLToPath(new URL('../src/pages/LegalPages.tsx', import.meta.url))],
  bundle: true, write: false, platform: 'node', format: 'cjs', packages: 'external',
});

test('terms and refund pages display the same three current prices and periods as pricing and account', () => {
  const React = require('react');
  const { renderToStaticMarkup } = require('react-dom/server');
  const { MemoryRouter } = require('react-router-dom');
  const module = { exports: {} as Pick<typeof import('../src/pages/LegalPages.tsx'), 'TermsPage' | 'PrivacyPage' | 'RefundPage'> };
  runInNewContext(legalCompiled.outputFiles[0].text, { module, exports: module.exports, require });
  for (const Component of [module.exports.TermsPage, module.exports.RefundPage]) {
    const markup = renderToStaticMarkup(React.createElement(MemoryRouter, null, React.createElement(Component)));
    for (const price of [/8\s990 Ft/, /22\s990 Ft/, /64\s990 Ft/]) assert.match(markup, price);
    for (const period of ['1 month', '3 months', '1 year']) assert.ok(markup.includes(period));
    assert.doesNotMatch(markup, /44[ ,.\u00a0]?500|7[ ,.\u00a0]990|19[ ,.\u00a0]990|59[ ,.\u00a0]990/);
  }
});
