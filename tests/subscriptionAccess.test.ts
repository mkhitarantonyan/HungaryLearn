import test from 'node:test';
import assert from 'node:assert/strict';
import { hasPaidAccess, normalizeLemonStatus } from '../functions/src/domain/entitlements.ts';

const now = new Date('2026-08-26T12:00:00.000Z');
const future = '2026-09-26T12:00:00.000Z';
const past = '2026-07-26T12:00:00.000Z';

test('privileged access wins', () => assert.equal(hasPaidAccess({ subscriptionStatus: 'expired', isPrivileged: true }, now), true));
test('active future access is allowed', () => assert.equal(hasPaidAccess({ subscriptionStatus: 'active', accessUntil: future }, now), true));
test('active expired access is denied', () => assert.equal(hasPaidAccess({ subscriptionStatus: 'active', accessUntil: past }, now), false));
test('cancelled access lasts through paid endsAt', () => assert.equal(hasPaidAccess({ subscriptionStatus: 'cancelled', accessUntil: future }, now), true));
test('cancelled after endsAt is denied', () => assert.equal(hasPaidAccess({ subscriptionStatus: 'cancelled', accessUntil: past }, now), false));
test('expired, past_due, unpaid and paused are denied', () => {
  for (const subscriptionStatus of ['expired', 'past_due', 'unpaid', 'paused'] as const) {
    assert.equal(hasPaidAccess({ subscriptionStatus, accessUntil: future }, now), false);
  }
});
test('on_trial is normalized to unpaid and never grants access', () => {
  assert.equal(normalizeLemonStatus('on_trial'), 'unpaid');
  assert.equal(hasPaidAccess({ subscriptionStatus: normalizeLemonStatus('on_trial'), accessUntil: future }, now), false);
});
