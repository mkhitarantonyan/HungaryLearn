export type SubscriptionStatus =
  | 'active'
  | 'cancelled'
  | 'expired'
  | 'past_due'
  | 'paused'
  | 'unpaid';

export interface AdminUser {
  id: string;
  email: string;
  createdAt: string;
  subscriptionStatus: SubscriptionStatus;
  accessUntil?: string;
  isPrivileged: boolean;
  provider?: 'lemonsqueezy' | null;
  lemonCustomerId?: string | null;
  lemonSubscriptionId?: string | null;
  lemonVariantId?: string | null;
  testMode?: boolean;
}

export interface AdminLesson {
  id: number;
  number: number;
  title: string;
  level: 'A0' | 'A1' | 'A2' | 'B1';
  description: string;
  slidesCount: number;
}

export interface AdminUsersPage {
  users: AdminUser[];
  total: number;
  limit: number;
  offset: number;
}
