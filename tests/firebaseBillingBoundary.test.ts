import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('checkout identity comes from verified token rather than request body', () => {
  const source = readFileSync(new URL('../functions/src/billing/routes.ts', import.meta.url), 'utf8');
  assert.match(source, /createCheckout\(lemonConfig, req\.auth!\.uid, email\)/);
  assert.doesNotMatch(source, /req\.body\.(?:uid|firebase_uid)/);
});
test('payment success redirect is display-only and cannot mutate entitlement', () => {
  const source = readFileSync(new URL('../src/components/UserAuthModal.tsx', import.meta.url), 'utf8');
  assert.match(source, /params\.get\('payment'\) !== 'success'/);
  assert.match(source, /Платёж обрабатывается/);
  assert.doesNotMatch(source, /payment[\s\S]{0,500}(?:subscriptionStatus\s*=|paidAccess\s*=|isPrivileged\s*=)/);
});
test('webhook uses Firebase rawBody and a Firestore transaction marker', () => {
  const source = readFileSync(new URL('../functions/src/billing/routes.ts', import.meta.url), 'utf8');
  assert.match(source, /req\.rawBody/);
  assert.match(source, /runTransaction/);
  assert.match(source, /transaction\.create\(eventRef/);
});

test('production access decisions are bound to the configured Lemon test/live environment', () => {
  const authRoutes = readFileSync(new URL('../functions/src/auth/routes.ts', import.meta.url), 'utf8');
  const lessonRoutes = readFileSync(new URL('../functions/src/lessons/routes.ts', import.meta.url), 'utf8');
  const entitlementDomain = readFileSync(new URL('../functions/src/domain/entitlements.ts', import.meta.url), 'utf8');
  assert.match(authRoutes, /lemonTestMode\.value\(\)/);
  assert.match(lessonRoutes, /lemonTestMode\.value\(\)/);
  assert.match(entitlementDomain, /entitlement\.testMode !== expectedTestMode/);
});

test('checkout refuses to create a duplicate live subscription when a manageable subscription already exists', () => {
  const source = readFileSync(new URL('../functions/src/billing/routes.ts', import.meta.url), 'utf8');
  assert.match(source, /existingSubscriptionBlocksCheckout/);
  assert.match(source, /\['active', 'cancelled', 'past_due', 'paused'\]/);
  assert.match(source, /res\.status\(409\)/);
});


test('subscription invoice webhooks can recover Firebase UID from the stored subscription mapping', () => {
  const source = readFileSync(new URL('../functions/src/billing/routes.ts', import.meta.url), 'utf8');
  assert.match(source, /billingSubscriptions/);
  assert.match(source, /mapped\.data\(\)\?\.firebaseUid/);
  assert.match(source, /getWebhookSubscriptionId/);
});

