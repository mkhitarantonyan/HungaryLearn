import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { buildWebhookUpdate, parseWebhook, verifyLemonSignature, webhookHash, SUPPORTED_LEMON_EVENTS } from '../functions/src/billing/webhook.ts';

const secret = 'test-only-webhook-secret';
function payload(overrides: Record<string, unknown> = {}): Buffer {
  return Buffer.from(JSON.stringify({
    meta: { event_name: 'subscription_updated', custom_data: { firebase_uid: 'firebase-user-1' } },
    data: { id: 'sub_1', type: 'subscriptions', attributes: {
      store_id: 11, variant_id: 22, customer_id: 33, order_id: 44,
      status: 'active', cancelled: false, renews_at: '2026-10-01T00:00:00Z', ends_at: null, test_mode: true,
      ...overrides,
    } },
  }));
}

test('invalid signature is rejected and valid exact-body signature passes', () => {
  const raw = payload();
  assert.equal(verifyLemonSignature(raw, '0'.repeat(64), secret), false);
  assert.equal(verifyLemonSignature(raw, createHmac('sha256', secret).update(raw).digest('hex'), secret), true);
  assert.equal(verifyLemonSignature(Buffer.concat([raw, Buffer.from(' ')]), createHmac('sha256', secret).update(raw).digest('hex'), secret), false);
});
test('valid allowed store and variant create active entitlement', () => {
  const update = buildWebhookUpdate(parseWebhook(payload()), '11', '22');
  assert.equal(update?.uid, 'firebase-user-1');
  assert.equal(update?.entitlement.subscriptionStatus, 'active');
  assert.equal(update?.entitlement.accessUntil, '2026-10-01T00:00:00.000Z');
});
test('wrong store or variant cannot create entitlement', () => {
  assert.equal(buildWebhookUpdate(parseWebhook(payload()), '999', '22'), null);
  assert.equal(buildWebhookUpdate(parseWebhook(payload()), '11', '999'), null);
});
test('cancelled retains endsAt while expired closes access', () => {
  const cancelledPayload = payload({ status: 'cancelled', cancelled: true, ends_at: '2026-09-01T00:00:00Z' });
  const cancelled = buildWebhookUpdate(parseWebhook(cancelledPayload), '11', '22');
  assert.equal(cancelled?.entitlement.subscriptionStatus, 'cancelled');
  assert.equal(cancelled?.entitlement.accessUntil, '2026-09-01T00:00:00.000Z');
  const expiredPayload = payload({ status: 'expired', renews_at: '2026-10-01T00:00:00Z' });
  const expired = buildWebhookUpdate(parseWebhook(expiredPayload), '11', '22');
  assert.equal(expired?.entitlement.subscriptionStatus, 'expired');
  assert.equal(expired?.entitlement.accessUntil, null);
});
test('same raw event has one deterministic idempotency key', () => {
  const raw = payload();
  const processed = new Set<string>();
  let mutations = 0;
  for (const attempt of [raw, raw]) {
    const key = webhookHash(attempt);
    if (!processed.has(key)) { processed.add(key); mutations += 1; }
  }
  assert.equal(mutations, 1);
});
test('all required Lemon lifecycle events are handled', () => {
  for (const event of ['subscription_created', 'subscription_updated', 'subscription_cancelled', 'subscription_resumed',
    'subscription_expired', 'subscription_paused', 'subscription_unpaused', 'subscription_payment_success',
    'subscription_payment_failed', 'subscription_payment_recovered', 'order_refunded']) {
    assert.equal(SUPPORTED_LEMON_EVENTS.has(event), true, event);
  }
});
