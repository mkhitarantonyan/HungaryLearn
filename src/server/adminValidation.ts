export interface AdminUserListQuery {
  limit: number;
  offset: number;
  search?: string;
  sort: 'createdAt' | 'email';
  direction: 'asc' | 'desc';
}

export function parseAdminUserListQuery(query: Record<string, unknown>): AdminUserListQuery {
  const limit = query.limit === undefined ? 50 : Number(query.limit);
  const offset = query.offset === undefined ? 0 : Number(query.offset);
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
    throw new Error('limit должен быть целым числом от 1 до 100');
  }
  if (!Number.isInteger(offset) || offset < 0 || offset > 1_000_000) {
    throw new Error('offset должен быть целым неотрицательным числом');
  }
  const search = typeof query.search === 'string' ? query.search.trim() : '';
  if (search.length > 200) throw new Error('search не должен превышать 200 символов');
  const sort = query.sort === undefined ? 'createdAt' : query.sort;
  if (sort !== 'createdAt' && sort !== 'email') throw new Error('Недопустимое поле сортировки');
  const direction = query.direction === undefined ? 'desc' : query.direction;
  if (direction !== 'asc' && direction !== 'desc') throw new Error('Недопустимое направление сортировки');
  return { limit, offset, ...(search ? { search } : {}), sort, direction };
}

export function parsePrivilegeUpdate(body: unknown): boolean {
  if (!body || typeof body !== 'object' || !('privileged' in body)) {
    throw new Error('Поле privileged обязательно');
  }
  const privileged = (body as { privileged?: unknown }).privileged;
  if (typeof privileged !== 'boolean') throw new Error('Поле privileged должно быть boolean');
  return privileged;
}

export async function isAuthorizedAdminSession(
  token: string | undefined,
  validate: (candidate: string | undefined) => Promise<boolean>
): Promise<boolean> {
  if (!token) return false;
  return validate(token);
}
