import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { initializeTestEnvironment, assertFails, assertSucceeds, type RulesTestEnvironment } from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc } from 'firebase/firestore';

let environment: RulesTestEnvironment | undefined;

async function env(): Promise<RulesTestEnvironment> {
  if (!environment) environment = await initializeTestEnvironment({
    projectId: 'hungarylearn-rules-test',
    firestore: { rules: readFileSync(new URL('../../firestore.rules', import.meta.url), 'utf8') },
  });
  return environment;
}

async function seed(): Promise<void> {
  await (await env()).withSecurityRulesDisabled(async (context) => {
    await setDoc(doc(context.firestore(), 'users/alice'), { email: 'alice@example.com' });
    await setDoc(doc(context.firestore(), 'entitlements/alice'), { subscriptionStatus: 'unpaid', isPrivileged: false });
    await setDoc(doc(context.firestore(), 'progress/alice'), { viewedSlides: [], passedQuizzes: [], reviewCards: {} });
  });
}

after(async () => { await environment?.cleanup(); });

test('unauthenticated clients cannot read private account or progress documents', async () => {
  await seed();
  const db = (await env()).unauthenticatedContext().firestore();
  await assertFails(getDoc(doc(db, 'users/alice')));
  await assertFails(getDoc(doc(db, 'entitlements/alice')));
  await assertFails(getDoc(doc(db, 'progress/alice')));
});

test('client cannot modify entitlement or make itself admin', async () => {
  const db = (await env()).authenticatedContext('alice').firestore();
  await assertFails(setDoc(doc(db, 'entitlements/alice'), { subscriptionStatus: 'active', isPrivileged: true }));
  await assertFails(setDoc(doc(db, 'users/alice'), { admin: true }));
});

test('client cannot access another user progress but can write its own validated progress', async () => {
  const db = (await env()).authenticatedContext('alice').firestore();
  await assertFails(getDoc(doc(db, 'progress/bob')));
  await assertFails(setDoc(doc(db, 'progress/bob'), { viewedSlides: [], passedQuizzes: [], reviewCards: {} }));
  await assertSucceeds(setDoc(doc(db, 'progress/alice'), { viewedSlides: ['l1_s1'], passedQuizzes: [], reviewCards: {} }));
  assert.ok(true);
});

test('admin custom claim can read account data but still cannot write entitlement directly', async () => {
  await seed();
  const db = (await env()).authenticatedContext('admin-user', { admin: true }).firestore();
  await assertSucceeds(getDoc(doc(db, 'users/alice')));
  await assertSucceeds(getDoc(doc(db, 'entitlements/alice')));
  await assertFails(setDoc(doc(db, 'entitlements/alice'), { subscriptionStatus: 'active' }));
});
