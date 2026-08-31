import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import type { Entitlement } from '../domain/entitlements.js';
import type { StoredActivityEvidence } from '../progress/model.js';
import { firestore } from '../firebase/admin.js';
import { sanitizePassedQuizzes } from '../progress/model.js';

export interface ProgressData {
  viewedSlides: string[];
  passedQuizzes: number[];
  activityEvidence: Record<string, StoredActivityEvidence>;
  reviewCards: Record<string, unknown>;
  customNotes?: string;
}

export function isoValue(value: unknown): string | null {
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (typeof value === 'string' && Number.isFinite(Date.parse(value))) return new Date(value).toISOString();
  return null;
}

export async function getEntitlement(uid: string): Promise<Entitlement | null> {
  const snapshot = await firestore.collection('entitlements').doc(uid).get();
  if (!snapshot.exists) return null;
  const data = snapshot.data() || {};
  return {
    subscriptionStatus: data.subscriptionStatus || 'unpaid',
    accessUntil: isoValue(data.accessUntil),
    isPrivileged: data.isPrivileged === true,
    provider: data.provider === 'lemonsqueezy' ? 'lemonsqueezy' : null,
    lemonCustomerId: data.lemonCustomerId || null,
    lemonSubscriptionId: data.lemonSubscriptionId || null,
    lemonOrderId: data.lemonOrderId || null,
    lemonVariantId: data.lemonVariantId || null,
    cancelAtPeriodEnd: data.cancelAtPeriodEnd === true,
    rawProviderStatus: data.rawProviderStatus || null,
    testMode: data.testMode === true,
  };
}

export async function ensureUserProfile(uid: string, email: string): Promise<void> {
  const userRef = firestore.collection('users').doc(uid);
  const entitlementRef = firestore.collection('entitlements').doc(uid);
  await firestore.runTransaction(async (transaction) => {
    const [userSnapshot, entitlementSnapshot] = await Promise.all([
      transaction.get(userRef),
      transaction.get(entitlementRef),
    ]);
    const timestamp = FieldValue.serverTimestamp();
    if (userSnapshot.exists) {
      transaction.set(userRef, { email, updatedAt: timestamp }, { merge: true });
    } else {
      transaction.create(userRef, {
        email,
        displayName: '',
        createdAt: timestamp,
        updatedAt: timestamp,
      });
    }
    if (!entitlementSnapshot.exists) {
      transaction.create(entitlementRef, {
        subscriptionStatus: 'unpaid',
        isPrivileged: false,
        provider: null,
        accessUntil: null,
        updatedAt: timestamp,
      });
    }
  });
}

export async function getProgress(uid: string): Promise<ProgressData> {
  const snapshot = await firestore.collection('progress').doc(uid).get();
  const data = snapshot.data() || {};
  return {
    viewedSlides: Array.isArray(data.viewedSlides) ? data.viewedSlides : [],
    passedQuizzes: sanitizePassedQuizzes(data.passedQuizzes),
    activityEvidence: data.activityEvidence && typeof data.activityEvidence === 'object' ? data.activityEvidence : {},
    reviewCards: data.reviewCards && typeof data.reviewCards === 'object' ? data.reviewCards : {},
    ...(typeof data.customNotes === 'string' ? { customNotes: data.customNotes } : {}),
  };
}
