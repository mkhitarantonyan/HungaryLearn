import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import { build } from 'esbuild';
import {
  accountDeletionKey,
  billingStatusBlocksAccountDeletion,
  subscriptionBlocksAccountDeletion,
} from '../functions/src/auth/accountDeletionPolicy.ts';

test('account deletion policy blocks renewable billing states and pseudonymises its marker', () => {
  for (const status of ['active', 'past_due', 'paused']) {
    assert.equal(billingStatusBlocksAccountDeletion(status), true);
    assert.equal(subscriptionBlocksAccountDeletion({
      provider: 'lemonsqueezy', lemonSubscriptionId: 'sub-1', subscriptionStatus: status as 'active',
    }), true);
  }
  for (const status of ['cancelled', 'expired', 'unpaid', undefined]) {
    assert.equal(billingStatusBlocksAccountDeletion(status), false);
  }
  assert.equal(subscriptionBlocksAccountDeletion({
    provider: 'lemonsqueezy', subscriptionStatus: 'active', lemonSubscriptionId: null,
  }), false);

  const uid = 'firebase-user-to-delete';
  const marker = accountDeletionKey(uid);
  assert.equal(marker.length, 64);
  assert.doesNotMatch(marker, new RegExp(uid));
  assert.equal(marker, accountDeletionKey(uid));
});

interface DocumentRef { path: string }
interface QueryRef { collection: string; field: string; value: unknown }
interface DeletionExports {
  deleteUserAccount(uid: string): Promise<{ retainedBillingRecords: number }>;
}

const require = createRequire(new URL('../functions/package.json', import.meta.url));
const compiled = await build({
  entryPoints: [fileURLToPath(new URL('../functions/src/auth/accountDeletion.ts', import.meta.url))],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'cjs',
  packages: 'external',
  plugins: [{
    name: 'account-deletion-boundaries',
    setup(builder) {
      builder.onResolve({ filter: /firebase\/admin\.js$/ }, () => ({ path: 'test-admin', external: true }));
    },
  }],
});

function deletionHarness(initial: Record<string, Record<string, unknown>>, authDeleteErrorCode?: string) {
  const documents = new Map(Object.entries(initial));
  const deletedAuthUsers: string[] = [];
  const deleteField = Symbol('delete-field');
  const snapshot = (ref: DocumentRef) => ({
    exists: documents.has(ref.path),
    data: () => documents.get(ref.path),
    ref,
  });
  const firestore = {
    collection: (collection: string) => ({
      doc: (id: string): DocumentRef => ({ path: `${collection}/${id}` }),
      where: (field: string, _operator: string, value: unknown): QueryRef => ({ collection, field, value }),
    }),
    runTransaction: async (operation: (transaction: Record<string, unknown>) => Promise<void>) => operation({
      get: async (target: DocumentRef | QueryRef) => {
        if ('collection' in target) {
          const docs = [...documents.entries()]
            .filter(([path, data]) => path.startsWith(`${target.collection}/`) && data[target.field] === target.value)
            .map(([path]) => snapshot({ path }));
          return { docs, size: docs.length };
        }
        return snapshot(target);
      },
      delete: (ref: DocumentRef) => documents.delete(ref.path),
      set: (ref: DocumentRef, data: Record<string, unknown>, options?: { merge?: boolean }) => {
        const next = options?.merge ? { ...(documents.get(ref.path) || {}) } : {};
        for (const [key, value] of Object.entries(data)) {
          if (value === deleteField) delete next[key];
          else next[key] = value;
        }
        documents.set(ref.path, next);
      },
    }),
  };
  const module = { exports: {} as DeletionExports };
  runInNewContext(compiled.outputFiles[0].text, {
    module,
    exports: module.exports,
    require: (id: string) => {
      if (id === 'test-admin') {
        return { firestore, adminAuth: { deleteUser: async (uid: string) => {
          deletedAuthUsers.push(uid);
          if (authDeleteErrorCode) throw Object.assign(new Error('auth deletion failed'), { code: authDeleteErrorCode });
        } } };
      }
      if (id === 'firebase-admin/firestore') {
        return { FieldValue: { delete: () => deleteField, serverTimestamp: () => 'server-time' } };
      }
      return require(id);
    },
  });
  return { documents, deletedAuthUsers, api: module.exports };
}

test('account deletion removes learner data and anonymises retained billing records', async () => {
  const uid = 'alice';
  const harness = deletionHarness({
    [`users/${uid}`]: { email: 'alice@example.com' },
    [`progress/${uid}`]: { viewedSlides: ['l1_s1'], reviewCards: { one: {} }, settings: { autoplay: true } },
    [`entitlements/${uid}`]: {
      provider: 'lemonsqueezy', lemonSubscriptionId: 'sub-cancelled', subscriptionStatus: 'cancelled',
    },
    'billingSubscriptions/sub-cancelled': {
      firebaseUid: uid, customerId: 'customer-1', orderId: 'order-1', status: 'cancelled',
    },
    'billingWebhookEvents/event-1': { eventName: 'subscription_cancelled', objectId: 'sub-cancelled' },
  });

  assert.equal((await harness.api.deleteUserAccount(uid)).retainedBillingRecords, 1);
  assert.deepEqual(harness.deletedAuthUsers, [uid]);
  for (const collection of ['users', 'progress', 'entitlements']) {
    assert.equal(harness.documents.has(`${collection}/${uid}`), false);
  }
  const billingRecord = harness.documents.get('billingSubscriptions/sub-cancelled')!;
  assert.equal('firebaseUid' in billingRecord, false);
  assert.equal(billingRecord.accountDeletionKey, accountDeletionKey(uid));
  assert.equal(billingRecord.customerId, 'customer-1');
  assert.equal(billingRecord.orderId, 'order-1');
  assert.equal(harness.documents.has('billingWebhookEvents/event-1'), true);
  const markers = [...harness.documents.keys()].filter(path => path.startsWith('accountDeletions/'));
  assert.equal(markers.length, 1);
  assert.doesNotMatch(markers[0], /alice/);
});

test('account deletion refuses an active billing relationship before touching data', async () => {
  const harness = deletionHarness({
    'users/alice': { email: 'alice@example.com' },
    'progress/alice': { viewedSlides: [] },
    'entitlements/alice': { subscriptionStatus: 'unpaid' },
    'billingSubscriptions/sub-active': { firebaseUid: 'alice', status: 'active' },
  });
  await assert.rejects(harness.api.deleteUserAccount('alice'), /must be cancelled/);
  assert.equal(harness.documents.has('users/alice'), true);
  assert.equal(harness.documents.has('progress/alice'), true);
  assert.deepEqual(harness.deletedAuthUsers, []);
});

test('admin cleanup succeeds when the Firebase Auth user was already removed', async () => {
  const harness = deletionHarness({
    'users/orphan': { email: 'orphan@example.com' },
    'progress/orphan': { viewedSlides: [] },
    'entitlements/orphan': { subscriptionStatus: 'unpaid' },
  }, 'auth/user-not-found');
  assert.equal((await harness.api.deleteUserAccount('orphan')).retainedBillingRecords, 0);
  assert.equal(harness.documents.has('users/orphan'), false);
  assert.equal(harness.documents.has('progress/orphan'), false);
  assert.equal(harness.documents.has('entitlements/orphan'), false);
});

test('account deletion requires password reauthentication and documents retained billing data', () => {
  const store = readFileSync(new URL('../src/utils/userStore.ts', import.meta.url), 'utf8');
  const modal = readFileSync(new URL('../src/components/UserAuthModal.tsx', import.meta.url), 'utf8');
  const privacy = readFileSync(new URL('../src/pages/LegalPages.tsx', import.meta.url), 'utf8');
  const authRoutes = readFileSync(new URL('../functions/src/auth/routes.ts', import.meta.url), 'utf8');
  assert.match(store, /reauthenticateWithCredential\(firebaseUser, EmailAuthProvider\.credential/);
  assert.match(store, /apiJson\('\/api\/auth\/account', \{ method: 'DELETE' \}\)/);
  assert.match(store, /removeItem\(progressCacheKey\(ownerId\)\)/);
  assert.match(authRoutes, /delete\('\/api\/auth\/account', requireAuth/);
  assert.match(authRoutes, /authAgeSeconds > 300/);
  assert.match(modal, /Безвозвратное удаление аккаунта/);
  assert.match(modal, /Открыть Customer Portal/);
  assert.match(privacy, /minimal pseudonymous deletion marker/);
  assert.match(privacy, /account-specific progress cache/);
});
