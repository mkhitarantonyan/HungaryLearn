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

function refundPayload({
  eventName = 'order_refunded',
  type = 'orders',
  refundedAmount = 1000,
  total = 1000,
  refunded = true,
  status = 'refunded',
}: {
  eventName?: string;
  type?: string;
  refundedAmount?: number;
  total?: number;
  refunded?: boolean;
  status?: string;
} = {}): Buffer {
  return Buffer.from(JSON.stringify({
    meta: { event_name: eventName, custom_data: { firebase_uid: 'firebase-user-1' } },
    data: { id: type === 'orders' ? 'order_44' : 'invoice_55', type, attributes: {
      store_id: 11,
      customer_id: 33,
      subscription_id: type === 'subscription-invoices' ? 77 : undefined,
      status,
      refunded,
      refunded_amount: refundedAmount,
      total,
      first_order_item: type === 'orders' ? { variant_id: 22 } : undefined,
      test_mode: true,
    } },
  }));
}

const hydratedSubscription = {
  id: '77',
  type: 'subscriptions',
  attributes: {
    store_id: 11,
    variant_id: 22,
    customer_id: 33,
    order_id: 44,
    status: 'active',
    cancelled: false,
    renews_at: '2026-10-01T00:00:00Z',
    ends_at: null,
    test_mode: true,
  },
};

test('invalid signature is rejected and valid exact-body signature passes', () => {
  const raw = payload();
  assert.equal(verifyLemonSignature(raw, '0'.repeat(64), secret), false);
  assert.equal(verifyLemonSignature(raw, createHmac('sha256', secret).update(raw).digest('hex'), secret), true);
  assert.equal(verifyLemonSignature(Buffer.concat([raw, Buffer.from(' ')]), createHmac('sha256', secret).update(raw).digest('hex'), secret), false);
  assert.equal(verifyLemonSignature(raw, createHmac('sha256', '').update(raw).digest('hex'), ''), false);
});

test('valid allowed store, variant and environment create active entitlement', () => {
  const update = buildWebhookUpdate(parseWebhook(payload()), '11', '22', true);
  assert.equal(update?.uid, 'firebase-user-1');
  assert.equal(update?.entitlement.subscriptionStatus, 'active');
  assert.equal(update?.entitlement.accessUntil, '2026-10-01T00:00:00.000Z');
});

test('wrong store, variant, environment, or missing environment metadata cannot create entitlement', () => {
  assert.equal(buildWebhookUpdate(parseWebhook(payload()), '999', '22', true), null);
  assert.equal(buildWebhookUpdate(parseWebhook(payload()), '11', '999', true), null);
  assert.equal(buildWebhookUpdate(parseWebhook(payload()), '11', '22', false), null);
  assert.equal(buildWebhookUpdate(parseWebhook(payload({ test_mode: undefined })), '11', '22', false), null);
});

test('cancelled retains endsAt while expired closes access', () => {
  const cancelledPayload = payload({ status: 'cancelled', cancelled: true, ends_at: '2026-09-01T00:00:00Z' });
  const cancelled = buildWebhookUpdate(parseWebhook(cancelledPayload), '11', '22', true);
  assert.equal(cancelled?.entitlement.subscriptionStatus, 'cancelled');
  assert.equal(cancelled?.entitlement.accessUntil, '2026-09-01T00:00:00.000Z');
  const expiredPayload = payload({ status: 'expired', renews_at: '2026-10-01T00:00:00Z' });
  const expired = buildWebhookUpdate(parseWebhook(expiredPayload), '11', '22', true);
  assert.equal(expired?.entitlement.subscriptionStatus, 'expired');
  assert.equal(expired?.entitlement.accessUntil, null);
});

test('partial initial-order refund is ignored while full refund revokes access', () => {
  const partial = refundPayload({ refundedAmount: 250, total: 1000, refunded: false, status: 'partial_refund' });
  assert.equal(buildWebhookUpdate(parseWebhook(partial), '11', '22', true), null);

  const full = buildWebhookUpdate(parseWebhook(refundPayload()), '11', '22', true);
  assert.equal(full?.entitlement.subscriptionStatus, 'expired');
  assert.equal(full?.entitlement.accessUntil, null);
});

test('partial renewal refund is ignored while full renewal refund removes paid access', () => {
  const partial = refundPayload({
    eventName: 'subscription_payment_refunded',
    type: 'subscription-invoices',
    refundedAmount: 250,
    total: 1000,
    refunded: false,
    status: 'partial_refund',
  });
  assert.equal(buildWebhookUpdate(parseWebhook(partial), '11', '22', true, hydratedSubscription), null);

  const full = refundPayload({ eventName: 'subscription_payment_refunded', type: 'subscription-invoices' });
  const update = buildWebhookUpdate(parseWebhook(full), '11', '22', true, hydratedSubscription);
  assert.equal(update?.entitlement.subscriptionStatus, 'unpaid');
  assert.equal(update?.entitlement.accessUntil, null);
  assert.equal(update?.entitlement.lemonSubscriptionId, '77');
});

test('subscription-invoice webhooks can recover Firebase UID from stored subscription mapping', () => {
  const raw = refundPayload({ eventName: 'subscription_payment_refunded', type: 'subscription-invoices' });
  const parsed = parseWebhook(raw);
  if (parsed.meta) delete parsed.meta.custom_data;
  assert.throws(() => buildWebhookUpdate(parsed, '11', '22', true, hydratedSubscription), /Missing Firebase UID/);
  const update = buildWebhookUpdate(parsed, '11', '22', true, hydratedSubscription, 'firebase-user-1');
  assert.equal(update?.uid, 'firebase-user-1');
  assert.equal(update?.entitlement.lemonSubscriptionId, '77');
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
    'subscription_payment_failed', 'subscription_payment_recovered', 'subscription_payment_refunded', 'order_refunded']) {
    assert.equal(SUPPORTED_LEMON_EVENTS.has(event), true, event);
  }
});
