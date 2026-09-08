import { FieldValue } from 'firebase-admin/firestore';
import { adminAuth, firestore } from '../firebase/admin.js';
import type { Entitlement } from '../domain/entitlements.js';
import {
  accountDeletionKey,
  billingStatusBlocksAccountDeletion,
  subscriptionBlocksAccountDeletion,
} from './accountDeletionPolicy.js';

export class ActiveSubscriptionError extends Error {
  constructor() {
    super('Active Lemon Squeezy subscription must be cancelled before account deletion');
    this.name = 'ActiveSubscriptionError';
  }
}

function deletionMarker(uid: string) {
  return firestore.collection('accountDeletions').doc(accountDeletionKey(uid));
}

export async function isAccountDeletionMarked(uid: string): Promise<boolean> {
  return (await deletionMarker(uid).get()).exists;
}

export async function deleteUserAccount(uid: string): Promise<{ retainedBillingRecords: number }> {
  const pseudonymousKey = accountDeletionKey(uid);
  const userRef = firestore.collection('users').doc(uid);
  const progressRef = firestore.collection('progress').doc(uid);
  const entitlementRef = firestore.collection('entitlements').doc(uid);
  const linkedBillingRecords = firestore.collection('billingSubscriptions').where('firebaseUid', '==', uid);
  let retainedBillingRecords = 0;

  await firestore.runTransaction(async transaction => {
    const [entitlementSnapshot, billingSnapshot] = await Promise.all([
      transaction.get(entitlementRef),
      transaction.get(linkedBillingRecords),
    ]);
    const entitlement = entitlementSnapshot.exists ? entitlementSnapshot.data() as Entitlement : null;
    if (subscriptionBlocksAccountDeletion(entitlement)
      || billingSnapshot.docs.some(document => billingStatusBlocksAccountDeletion(document.data().status))) {
      throw new ActiveSubscriptionError();
    }

    retainedBillingRecords = billingSnapshot.size;
    transaction.set(deletionMarker(uid), {
      deletedAt: FieldValue.serverTimestamp(),
      purpose: 'prevent-billing-relink',
    });
    transaction.delete(userRef);
    transaction.delete(progressRef);
    transaction.delete(entitlementRef);
    for (const document of billingSnapshot.docs) {
      transaction.set(document.ref, {
        firebaseUid: FieldValue.delete(),
        accountDeletionKey: pseudonymousKey,
        accountDeletedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
    }
  });

  try {
    await adminAuth.deleteUser(uid);
  } catch (error) {
    const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : '';
    if (code !== 'auth/user-not-found') throw error;
  }
  return { retainedBillingRecords };
}
