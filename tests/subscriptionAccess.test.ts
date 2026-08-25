import test from 'node:test';
import assert from 'node:assert/strict';
import { isSubscriptionValid } from '../src/utils/subscriptionValidity.ts';

test('privileged user always has access regardless of subscription state', () => {
  assert.equal(isSubscriptionValid({
    isPrivileged: true,
    subscriptionStatus: 'canceled',
    subscriptionEnd: undefined,
  }), true);
});

test('active subscription within period grants access', () => {
  const future = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'active',
    subscriptionEnd: future,
  }), true);
});

test('active subscription past period denies access', () => {
  const past = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'active',
    subscriptionEnd: past,
  }), false);
});

test('past_due subscription denies access even with future end date', () => {
  const future = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'past_due',
    subscriptionEnd: future,
  }), false);
});

test('canceled subscription denies access even with future end date', () => {
  const future = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'canceled',
    subscriptionEnd: future,
  }), false);
});

test('incomplete subscription denies access', () => {
  const future = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'incomplete',
    subscriptionEnd: future,
  }), false);
});

test('unpaid subscription denies access', () => {
  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'unpaid',
    subscriptionEnd: undefined,
  }), false);
});

test('active subscription without subscriptionEnd denies access', () => {
  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'active',
    subscriptionEnd: undefined,
  }), false);
});