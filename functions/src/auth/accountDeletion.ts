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
  const organizationSeats = firestore.collection('organizationSeats').where('uid', '==', uid);
  const organizationKeys = firestore.collection('organizationAccessKeys').where('redeemedByUid', '==', uid);
  const organizationTargetLogs = firestore.collection('organizationAuditLogs').where('targetUid', '==', uid);
  const organizationActorLogs = firestore.collection('organizationAuditLogs').where('actorUid', '==', uid);
  const redeemLimitRef = firestore.collection('organizationRedeemLimits').doc(pseudonymousKey);
  let retainedBillingRecords = 0;

  await firestore.runTransaction(async transaction => {
    const [entitlementSnapshot, billingSnapshot, seatSnapshot, keySnapshot, targetAuditSnapshot, actorAuditSnapshot] = await Promise.all([
      transaction.get(entitlementRef),
      transaction.get(linkedBillingRecords),
      transaction.get(organizationSeats),
      transaction.get(organizationKeys),
      transaction.get(organizationTargetLogs),
      transaction.get(organizationActorLogs),
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
    transaction.delete(redeemLimitRef);
    transaction.delete(firestore.collection('organizationSeatGuards').doc(pseudonymousKey));
    for (const document of billingSnapshot.docs) {
      transaction.set(document.ref, {
        firebaseUid: FieldValue.delete(),
        accountDeletionKey: pseudonymousKey,
        accountDeletedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
    }
    const affectedOrganizations = new Set<string>();
    for (const document of seatSnapshot.docs) {
      const organizationId = String(document.data().organizationId || '');
      if (organizationId) affectedOrganizations.add(organizationId);
      transaction.set(document.ref, {
        uid: FieldValue.delete(),
        formerAccountKey: pseudonymousKey,
        status: document.data().status === 'active' ? 'released' : document.data().status,
        releasedAt: document.data().status === 'active' ? FieldValue.serverTimestamp() : document.data().releasedAt ?? null,
        releasedBy: document.data().status === 'active' ? 'account-deletion' : document.data().releasedBy ?? null,
      }, { merge: true });
    }
    const affectedLicenses = new Set(
      seatSnapshot.docs.map(document => String(document.data().licenseId || '')).filter(Boolean),
    );
    for (const licenseId of affectedLicenses) {
      transaction.set(firestore.collection('organizationLicenses').doc(licenseId), {
        capacityRevision: FieldValue.increment(1),
      }, { merge: true });
    }
    for (const document of keySnapshot.docs) {
      transaction.set(document.ref, {
        redeemedByUid: FieldValue.delete(),
        redeemedByDeletionKey: pseudonymousKey,
      }, { merge: true });
    }
    const auditDocuments = new Map(
      [...targetAuditSnapshot.docs, ...actorAuditSnapshot.docs].map(document => [document.ref.path, document]),
    );
    for (const document of auditDocuments.values()) {
      const auditData = document.data();
      const anonymizedFields: Record<string, unknown> = {};
      if (auditData.targetUid === uid) {
        anonymizedFields.targetUid = FieldValue.delete();
        anonymizedFields.targetAccountDeletionKey = pseudonymousKey;
      }
      if (auditData.actorUid === uid) {
        anonymizedFields.actorUid = 'system:deleted-account';
        anonymizedFields.actorAccountDeletionKey = pseudonymousKey;
      }
      transaction.set(document.ref, anonymizedFields, { merge: true });
    }
    for (const organizationId of affectedOrganizations) {
      transaction.set(firestore.collection('organizationAuditLogs').doc(`${pseudonymousKey}-${organizationId}`), {
        organizationId,
        licenseId: null,
        actorUid: 'system:account-deletion',
        action: 'seat.released_on_account_deletion',
        targetUid: null,
        metadata: { accountDeletionKey: pseudonymousKey },
        createdAt: FieldValue.serverTimestamp(),
      });
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
