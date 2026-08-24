import test from 'node:test';
import assert from 'node:assert/strict';

interface ProcessedStripeEvent {
  eventId: string;
  type: string;
  processedAt: string;
}

function isDuplicateStripeEvent(
  processed: Map<string, ProcessedStripeEvent>,
  eventId: string
): boolean {
  return processed.has(eventId);
}

function shouldExtendSubscription(billingReason: string | null): boolean {
  return billingReason === 'subscription_cycle';
}

test('stripe webhook skips duplicate event ids', () => {
  const processed = new Map<string, ProcessedStripeEvent>();
  processed.set('evt_123', {
    eventId: 'evt_123',
    type: 'checkout.session.completed',
    processedAt: new Date().toISOString(),
  });

  assert.equal(isDuplicateStripeEvent(processed, 'evt_123'), true);
  assert.equal(isDuplicateStripeEvent(processed, 'evt_456'), false);
});

test('invoice.payment_succeeded should not extend on subscription_create', () => {
  assert.equal(shouldExtendSubscription('subscription_create'), false);
});

test('invoice.payment_succeeded should extend on subscription_cycle', () => {
  assert.equal(shouldExtendSubscription('subscription_cycle'), true);
});
