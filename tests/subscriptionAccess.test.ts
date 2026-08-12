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

test('trial within period grants access', () => {
  const future = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();
  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'trial',
    subscriptionEnd: future,
  }), true);
});

test('trial past period denies access', () => {
  const past = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();
  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'trial',
    subscriptionEnd: past,
  }), false);
});

test('canceled subscription denies access even with future end date', () => {
  const future = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'canceled',
    subscriptionEnd: future,
  }), false);
});

test('missing subscriptionEnd denies access', () => {
  assert.equal(isSubscriptionValid({
    subscriptionStatus: 'active',
    subscriptionEnd: undefined,
  }), false);
});

test('non-privileged user with no subscription data denies access', () => {
  assert.equal(isSubscriptionValid({
    isPrivileged: false,
    subscriptionStatus: 'trial',
    subscriptionEnd: undefined,
  }), false);
});