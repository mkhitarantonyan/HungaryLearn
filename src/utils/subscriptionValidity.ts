export type SubscriptionStatus =
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

export function isSubscriptionValid(user: SubscriptionCheckInput): boolean {
  if (user.isPrivileged) return true;

  if (user.subscriptionStatus !== 'active') {
    return false;
  }

  if (!user.subscriptionEnd) {
    return false;
  }

  return new Date(user.subscriptionEnd).getTime() > Date.now();
}