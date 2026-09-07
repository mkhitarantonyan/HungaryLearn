import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { BILLING_PLANS, formatHuf } from '../src/config/pricing.ts';
import { checkoutConfig, checkoutPlan, configuredVariantIds } from '../functions/src/billing/plans.ts';
import { buildCheckoutPayload, getCustomerPortalUrl } from '../functions/src/billing/lemon.ts';
import { hasPaidAccess } from '../functions/src/domain/entitlements.ts';

// Synthetic test fixtures only; these are never deployed as configuration.
const variants = { monthly: '22', quarterly: '23', yearly: '24' };
const base = { apiKey: 'test-only-key', storeId: '11', appUrl: 'https://example.com', testMode: false };

test('all prices, equivalents, savings and default recommendation are correct', () => {
  assert.deepEqual(BILLING_PLANS.map(p => [p.key, p.priceHuf, p.monthlyEquivalentHuf, p.savingsHuf]), [
    ['monthly', 7990, 7990, 0], ['quarterly', 19990, 6663, 3980], ['yearly', 59990, 4999, 35890],
  ]);
  assert.deepEqual(BILLING_PLANS.filter(p => p.recommended).map(p => p.key), ['quarterly']);
  for (const plan of BILLING_PLANS) assert.equal(plan.formattedPrice, formatHuf(plan.priceHuf));
});

test('server accepts only plan keys and rejects client-controlled fields', () => {
  for (const plan of BILLING_PLANS) assert.equal(checkoutPlan({ plan: plan.key }), plan.key);
  for (const body of [undefined, null, [], 'monthly', {}, { plan: '' }, { plan: 'invalid' }, { plan: '__proto__' },
    { plan: 'constructor' }, { plan: ['monthly'] }, { plan: { monthly: true } },
    { variantId: '22' }, { plan: 'monthly', variantId: '22' }, { plan: 'monthly', uid: 'other-user' }]) {
    assert.equal(checkoutPlan(body), null);
  }
});

test('each server plan maps to its own checkout relationship and blank values never fall back', () => {
  for (const { key } of BILLING_PLANS) {
    const config = checkoutConfig(base, variants, key);
    assert.equal(buildCheckoutPayload(config, 'user', 'user@example.com').data.relationships.variant.data.id, variants[key]);
    for (const value of ['', ' ', '1', 'TODO_ID', base.storeId]) {
      assert.throws(() => checkoutConfig(base, { ...variants, [key]: value }, key), /недоступен/);
    }
  }
  assert.deepEqual(configuredVariantIds({ monthly: '', quarterly: ' 23 ', yearly: 'TODO_ID' }), ['23']);
});

test('Customer Portal validates every new variant, store and strict test/live metadata', async () => {
  const fetchFor = (attributes: Record<string, unknown>) => async () => new Response(JSON.stringify({ data: { attributes } }));
  const attributes = { store_id: 11, variant_id: 22, test_mode: false, urls: { customer_portal: 'https://example.com/portal' } };
  for (const id of Object.values(variants)) {
    assert.equal(await getCustomerPortalUrl(base, 'subscription', Object.values(variants), fetchFor({ ...attributes, variant_id: id })), 'https://example.com/portal');
  }
  for (const patch of [{ store_id: 99 }, { variant_id: 99 }, { test_mode: true }, { test_mode: undefined }, { test_mode: 'false' }]) {
    await assert.rejects(() => getCustomerPortalUrl(base, 'subscription', Object.values(variants), fetchFor({ ...attributes, ...patch })), /environment/);
  }
});

test('selecting a plan cannot grant lesson access; all plans use trusted entitlement', () => {
  for (const { key } of BILLING_PLANS) {
    const selectedOnly = { plan: key, subscriptionStatus: 'unpaid' as const };
    assert.equal(hasPaidAccess(selectedOnly), false);
    assert.equal(hasPaidAccess({ ...selectedOnly, provider: 'lemonsqueezy', testMode: false, subscriptionStatus: 'active', accessUntil: '2099-01-01T00:00:00Z' }, new Date(), false), true);
  }
});

test('commercial UI uses shared pricing and has no legacy price; portal uses provider status', () => {
  const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
  const pricing = read('src/pages/PricingPage.tsx');
  const modal = read('src/components/UserAuthModal.tsx');
  assert.doesNotMatch(pricing + modal + read('src/pages/LegalPages.tsx'), /44[, .]?500|44500|One simple Premium plan/);
  assert.match(pricing, /BILLING_PLANS\.map/);
  assert.match(pricing, /lg:grid-cols-3/);
  assert.match(modal, /useState<BillingPlanKey>\('quarterly'\)/);
  assert.match(modal, /createLemonCheckout\(selectedPlan\)/);
  assert.match(modal, /user\.subscriptionStatus === 'active'/);
  assert.match(modal, /subscription\?\.status === 'privileged'/);
});
