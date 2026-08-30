import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('checkout identity comes from verified token rather than request body', () => {
  const source = readFileSync(new URL('../functions/src/billing/routes.ts', import.meta.url), 'utf8');
  assert.match(source, /createCheckout\(config\(\), req\.auth!\.uid, email\)/);
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
