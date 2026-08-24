import type { StudentUser } from './db';

export interface AdminUserDto {
  id: string;
  email: string;
  createdAt: string;
  subscriptionStatus: StudentUser['subscriptionStatus'];
  subscriptionEnd?: string;
  isPrivileged: boolean;
}

export function serializeAdminUser(user: StudentUser): AdminUserDto {
  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    subscriptionStatus: user.subscriptionStatus,
    subscriptionEnd: user.subscriptionEnd,
    isPrivileged: user.isPrivileged === true,
  };
}
