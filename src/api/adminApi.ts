import type {
  AdminLesson,
  AdminOrganizationDetail,
  AdminOrganizationLicense,
  AdminOrganizationSummary,
  AdminUser,
  AdminUsersPage,
} from '../admin/types';
import { apiFetch } from '../lib/apiClient';

interface ApiErrorBody { message?: unknown }

export class AdminApiError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
    this.name = 'AdminApiError';
  }
}

async function requestJson<T>(url: string, options?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await apiFetch(url, options);
  } catch {
    throw new AdminApiError('Не удалось соединиться с сервером.', 0);
  }
  let body: unknown;
  try {
    body = await response.json();
  } catch {
    throw new AdminApiError('Сервер вернул некорректный ответ.', response.status);
  }
  if (!response.ok) {
    const message = typeof (body as ApiErrorBody)?.message === 'string'
      ? (body as { message: string }).message
      : `Ошибка сервера (${response.status})`;
    throw new AdminApiError(message, response.status);
  }
  return body as T;
}

export async function getAdminUsers(): Promise<AdminUsersPage> {
  const data = await requestJson<{ users?: unknown; pagination?: unknown }>(
    '/api/admin/users?limit=100&offset=0&sort=createdAt&direction=desc'
  );
  if (!Array.isArray(data.users) || !data.pagination || typeof data.pagination !== 'object') {
    throw new AdminApiError('Сервер вернул некорректный список пользователей.', 200);
  }
  const page = data.pagination as { total?: unknown; limit?: unknown; offset?: unknown };
  if (![page.total, page.limit, page.offset].every(Number.isInteger)) {
    throw new AdminApiError('Сервер вернул некорректную пагинацию.', 200);
  }
  return { users: data.users as AdminUser[], total: page.total as number, limit: page.limit as number, offset: page.offset as number };
}

export async function getAdminLessons(): Promise<AdminLesson[]> {
  const data = await requestJson<{ lessons?: unknown }>('/api/admin/lessons');
  if (!Array.isArray(data.lessons)) throw new AdminApiError('Сервер вернул некорректный каталог уроков.', 200);
  return data.lessons as AdminLesson[];
}

export async function updateAdminUserPrivilege(id: string, privileged: boolean): Promise<AdminUser> {
  const data = await requestJson<{ user?: unknown }>(`/api/admin/users/${encodeURIComponent(id)}/privilege`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ privileged }),
  });
  if (!data.user || typeof data.user !== 'object') {
    throw new AdminApiError('Сервер не вернул сохранённого пользователя.', 200);
  }
  return data.user as AdminUser;
}

export async function updateAdminUserBlocked(id: string, blocked: boolean): Promise<AdminUser> {
  const data = await requestJson<{ user?: unknown }>(`/api/admin/users/${encodeURIComponent(id)}/block`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ blocked }),
  });
  if (!data.user || typeof data.user !== 'object') {
    throw new AdminApiError('Сервер не вернул сохранённого пользователя.', 200);
  }
  return data.user as AdminUser;
}

export async function deleteAdminUser(id: string): Promise<{ retainedBillingRecords: number }> {
  return requestJson<{ success: true; retainedBillingRecords: number }>(
    `/api/admin/users/${encodeURIComponent(id)}`,
    { method: 'DELETE' },
  );
}

export interface OrganizationInput {
  name: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  notes?: string;
}

export interface OrganizationLicenseInput {
  displayName: string;
  seatsTotal: number;
  startsAt: string;
  durationMonths: number | 'custom';
  expiresAt?: string;
  paymentReceivedAt?: string;
  paymentReference?: string;
  internalNotes?: string;
}

export async function getAdminOrganizations(): Promise<AdminOrganizationSummary[]> {
  const data = await requestJson<{ organizations?: unknown }>('/api/admin/organizations');
  if (!Array.isArray(data.organizations)) throw new AdminApiError('Сервер вернул некорректный список организаций.', 200);
  return data.organizations as AdminOrganizationSummary[];
}

export async function getAdminOrganization(id: string): Promise<AdminOrganizationDetail> {
  const data = await requestJson<AdminOrganizationDetail & { success: true }>(`/api/admin/organizations/${encodeURIComponent(id)}`);
  if (!data.organization || !Array.isArray(data.licenses)) throw new AdminApiError('Сервер вернул некорректную организацию.', 200);
  return data;
}

export async function createAdminOrganization(input: OrganizationInput): Promise<AdminOrganizationSummary> {
  const data = await requestJson<{ organization: AdminOrganizationSummary }>('/api/admin/organizations', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input),
  });
  return data.organization;
}

export async function updateAdminOrganization(id: string, input: Partial<OrganizationInput> & { status?: 'active' | 'inactive' }): Promise<void> {
  await requestJson(`/api/admin/organizations/${encodeURIComponent(id)}`, {
    method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input),
  });
}

export async function createAdminOrganizationLicense(organizationId: string, input: OrganizationLicenseInput): Promise<AdminOrganizationLicense> {
  const data = await requestJson<{ license: AdminOrganizationLicense }>(`/api/admin/organizations/${encodeURIComponent(organizationId)}/licenses`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input),
  });
  return data.license;
}

export async function generateAdminOrganizationKeys(licenseId: string, quantity: number): Promise<Array<{ id: string; key: string }>> {
  const data = await requestJson<{ keys: Array<{ id: string; key: string }> }>(`/api/admin/licenses/${encodeURIComponent(licenseId)}/keys`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ quantity }),
  });
  return data.keys;
}

export async function revokeAdminOrganizationKey(keyId: string): Promise<void> {
  await requestJson(`/api/admin/keys/${encodeURIComponent(keyId)}/revoke`, { method: 'POST' });
}

export async function assignAdminOrganizationUser(licenseId: string, email: string): Promise<void> {
  await requestJson(`/api/admin/licenses/${encodeURIComponent(licenseId)}/assign-user`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }),
  });
}

export async function releaseAdminOrganizationSeat(seatId: string): Promise<void> {
  await requestJson(`/api/admin/seats/${encodeURIComponent(seatId)}/release`, { method: 'POST' });
}

export async function changeAdminLicenseSeats(licenseId: string, seatsTotal: number): Promise<void> {
  await requestJson(`/api/admin/licenses/${encodeURIComponent(licenseId)}/seats`, {
    method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ seatsTotal }),
  });
}

export async function extendAdminLicense(licenseId: string, input: { months?: number; expiresAt?: string }): Promise<void> {
  await requestJson(`/api/admin/licenses/${encodeURIComponent(licenseId)}/extend`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input),
  });
}

export async function setAdminLicenseLifecycle(licenseId: string, action: 'pause' | 'resume' | 'cancel'): Promise<void> {
  await requestJson(`/api/admin/licenses/${encodeURIComponent(licenseId)}/${action}`, { method: 'POST' });
}
