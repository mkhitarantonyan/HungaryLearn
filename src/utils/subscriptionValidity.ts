export type SubscriptionStatus =
  | 'trial'
  | 'active'
  | 'past_due'
  | 'canceled'
  | 'incomplete'
  | 'unpaid';

export interface SubscriptionCheckInput {
  isPrivileged?: boolean;
  subscriptionStatus: SubscriptionStatus;
  subscriptionEnd?: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
}

const ACCESS_GRANTING_STATUSES: ReadonlySet<SubscriptionStatus> = new Set([
  'trial',
  'active',
  'past_due',
]);

export function isSubscriptionValid(user: SubscriptionCheckInput): boolean {
  if (user.isPrivileged) return true;
  if (!user.subscriptionEnd) return false;
  if (ACCESS_GRANTING_STATUSES.has(user.subscriptionStatus)) {
    return new Date(user.subscriptionEnd).getTime() > Date.now();
  }
  return false;
}