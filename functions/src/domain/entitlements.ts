export type SubscriptionStatus =
  | 'active'
  | 'cancelled'
  | 'expired'
  | 'past_due'
  | 'paused'
  | 'unpaid';

export type BillingProvider = 'lemonsqueezy' | null;

export interface Entitlement {
  subscriptionStatus: SubscriptionStatus;
  accessUntil?: string | null;
  isPrivileged?: boolean;
  provider?: BillingProvider;
  lemonCustomerId?: string | null;
  lemonSubscriptionId?: string | null;
  lemonOrderId?: string | null;
  lemonVariantId?: string | null;
  cancelAtPeriodEnd?: boolean;
  rawProviderStatus?: string | null;
  testMode?: boolean;
}

function isFuture(value: string | null | undefined, now: Date): boolean {
  if (!value) return false;
  const time = Date.parse(value);
  return Number.isFinite(time) && time > now.getTime();
}

/** The only commercial-access decision. Call this on trusted server data only. */
export function hasPaidAccess(
  entitlement: Entitlement | null | undefined,
  now = new Date(),
  expectedTestMode?: boolean,
): boolean {
  if (!entitlement) return false;
  if (entitlement.isPrivileged === true) return true;
  // A Test-mode Lemon purchase must never unlock Live production content, and
  // vice versa. Older Lemon entitlements without an explicit testMode are also
  // rejected when the server declares its expected billing environment.
  if (entitlement.provider === 'lemonsqueezy' && typeof expectedTestMode === 'boolean'
    && entitlement.testMode !== expectedTestMode) return false;
  if (entitlement.subscriptionStatus === 'active') return isFuture(entitlement.accessUntil, now);
  if (entitlement.subscriptionStatus === 'cancelled') return isFuture(entitlement.accessUntil, now);
  return false;
}

export function normalizeLemonStatus(rawStatus: string, cancelled = false): SubscriptionStatus {
  if (rawStatus === 'on_trial') return 'unpaid';
  if (cancelled || rawStatus === 'cancelled') return 'cancelled';
  if (rawStatus === 'active') return 'active';
  if (rawStatus === 'expired') return 'expired';
  if (rawStatus === 'past_due') return 'past_due';
  if (rawStatus === 'paused') return 'paused';
  return 'unpaid';
}
