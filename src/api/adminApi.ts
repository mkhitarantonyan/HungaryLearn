import type { AdminLesson, AdminUser, AdminUsersPage } from '../admin/types';

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
    response = await fetch(url, { credentials: 'include', ...options });
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
