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
  disabled: boolean;
  authExists: boolean;
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

export type OrganizationStatus = 'active' | 'inactive';
export type OrganizationLicenseStatus = 'scheduled' | 'active' | 'paused' | 'cancelled';
export type EffectiveOrganizationLicenseStatus = OrganizationLicenseStatus | 'expired';

export interface AdminOrganizationSummary {
  id: string;
  name: string;
  status: OrganizationStatus;
  contactName: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  notes: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  licensesCount: number;
  activeLicenses: number;
  totalSeats: number;
  usedSeats: number;
  availableSeats: number;
  nearestExpiry: string | null;
}

export interface AdminOrganizationLicense {
  id: string;
  organizationId: string;
  displayName: string;
  status: OrganizationLicenseStatus;
  effectiveStatus: EffectiveOrganizationLicenseStatus;
  seatsTotal: number;
  seatsUsed: number;
  seatsAvailable: number;
  availableKeys: number;
  startsAt: string;
  expiresAt: string;
  durationMonths: number | null;
  paymentReceivedAt: string | null;
  paymentReference: string | null;
  internalNotes: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface AdminOrganizationSeat {
  id: string;
  uid: string | null;
  email: string;
  displayName: string;
  licenseId: string;
  licenseName: string;
  status: 'active' | 'released' | 'expired' | 'revoked';
  assignedAt: string | null;
  releasedAt: string | null;
  accessUntil: string | null;
}

export interface AdminOrganizationAccessKey {
  id: string;
  licenseId: string;
  licenseName: string;
  maskedKey: string;
  status: 'available' | 'redeemed' | 'revoked' | 'expired';
  createdAt: string | null;
  redeemedAt: string | null;
  redeemedByUid: string | null;
  redeemedByEmail: string;
  revokedAt: string | null;
}

export interface AdminOrganizationAuditLog {
  id: string;
  licenseId: string | null;
  actorUid: string;
  action: string;
  targetUid: string | null;
  metadata: Record<string, unknown>;
  createdAt: string | null;
}

export interface AdminOrganizationDetail {
  organization: Omit<AdminOrganizationSummary, 'licensesCount' | 'activeLicenses' | 'totalSeats' | 'usedSeats' | 'availableSeats' | 'nearestExpiry'>;
  summary: Pick<AdminOrganizationSummary, 'licensesCount' | 'activeLicenses' | 'totalSeats' | 'usedSeats' | 'availableSeats' | 'nearestExpiry'>;
  licenses: AdminOrganizationLicense[];
  seats: AdminOrganizationSeat[];
  accessKeys: AdminOrganizationAccessKey[];
  auditLogs: AdminOrganizationAuditLog[];
}
