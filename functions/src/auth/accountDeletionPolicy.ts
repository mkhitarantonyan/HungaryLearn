import { createHash } from 'node:crypto';
import type { Entitlement } from '../domain/entitlements.js';

const BLOCKING_SUBSCRIPTION_STATUSES = new Set(['active', 'past_due', 'paused']);

export function accountDeletionKey(uid: string): string {
  return createHash('sha256').update(uid).digest('hex');
}

export function billingStatusBlocksAccountDeletion(status: unknown): boolean {
  return typeof status === 'string' && BLOCKING_SUBSCRIPTION_STATUSES.has(status);
}

export function subscriptionBlocksAccountDeletion(entitlement: Entitlement | null | undefined): boolean {
  return entitlement?.provider === 'lemonsqueezy'
    && Boolean(entitlement.lemonSubscriptionId)
    && billingStatusBlocksAccountDeletion(entitlement.subscriptionStatus);
}
