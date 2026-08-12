export interface SubscriptionCheckInput {
  isPrivileged?: boolean;
  subscriptionStatus: 'trial' | 'active' | 'canceled';
  subscriptionEnd?: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
}

export function isSubscriptionValid(user: SubscriptionCheckInput): boolean {
  if (user.isPrivileged) return true;
  if (!user.subscriptionEnd) return false;
  if (user.subscriptionStatus === 'active' || user.subscriptionStatus === 'trial') {
    return new Date(user.subscriptionEnd).getTime() > Date.now();
  }
  return false;
}