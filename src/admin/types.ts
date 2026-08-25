export type SubscriptionStatus =
  | 'active'
  | 'past_due'
  | 'canceled'
  | 'incomplete'
  | 'unpaid';

export interface AdminUser {
  id: string;
  email: string;
  createdAt: string;
  subscriptionStatus: SubscriptionStatus;
  subscriptionEnd?: string;
  isPrivileged: boolean;
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
