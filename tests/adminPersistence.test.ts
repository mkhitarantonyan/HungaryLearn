import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import type { QueryResultRow } from 'pg';
import {
  listUsersForAdmin,
  updateUserPrivilege,
  type AppUserRow,
} from '../src/server/db.ts';
import {
  isAuthorizedAdminSession,
  parseAdminUserListQuery,
  parsePrivilegeUpdate,
} from '../src/server/adminValidation.ts';
import { serializeAdminUser } from '../src/server/adminUsers.ts';
import { AdminApiError, updateAdminUserPrivilege } from '../src/api/adminApi.ts';

const USER_ID = '2c13f58d-0e4f-4d44-8b7b-a8f4fc446a92';

function row(overrides: Partial<AppUserRow> = {}): AppUserRow {
  return {
    id: USER_ID,
    email: 'learner@example.com',
    password_hash: 'bcrypt-secret',
    created_at: '2026-08-22T10:00:00.000Z',
    subscription_status: 'unpaid',
    subscription_end: null,
    stripe_customer_id: 'cus_secret_reference',
    stripe_subscription_id: 'sub_secret_reference',
    is_privileged: false,
    ...overrides,
  };
}

class FakeAdminDatabase {
  rows: AppUserRow[];
  queries: Array<{ text: string; values: unknown[] }> = [];
  failUpdates = false;

  constructor(rows: AppUserRow[]) {
    this.rows = rows.map((candidate) => ({ ...candidate }));
  }

  async query<Row extends QueryResultRow = QueryResultRow>(
    text: string,
    values: unknown[] = []
  ): Promise<{ rows: Row[]; rowCount: number }> {
    this.queries.push({ text, values });
    const normalized = text.replace(/\s+/g, ' ').trim().toLowerCase();
    if (normalized.startsWith('update public.app_users')) {
      if (this.failUpdates) throw new Error('database unavailable');
      const [id, privileged] = values as [string, boolean];
      const found = this.rows.find((candidate) => candidate.id === id);
      if (!found) return { rows: [], rowCount: 0 };
      found.is_privileged = privileged;
      return { rows: [{ ...found } as unknown as Row], rowCount: 1 };
    }
    const search = typeof values[0] === 'string' ? values[0].toLowerCase() : '';
    const matches = this.rows.filter((candidate) => candidate.email.toLowerCase().includes(search));
    if (normalized.startsWith('select count')) {
      return { rows: [{ count: String(matches.length) } as unknown as Row], rowCount: 1 };
    }
    const limit = Number(values[1]);
    const offset = Number(values[2]);
    return {
      rows: matches.slice(offset, offset + limit).map((candidate) => ({ ...candidate } as unknown as Row)),
      rowCount: matches.length,
    };
  }
}

test('admin authentication rejects missing/non-admin sessions and allows admin session', async () => {
  const validator = async (token: string | undefined) => token === 'admin-token';
  assert.equal(await isAuthorizedAdminSession(undefined, validator), false);
  assert.equal(await isAuthorizedAdminSession('student-token', validator), false);
  assert.equal(await isAuthorizedAdminSession('admin-token', validator), true);
});

test('admin user query validates pagination, search, and sorting allowlists', () => {
  assert.deepEqual(parseAdminUserListQuery({}), { limit: 50, offset: 0, sort: 'createdAt', direction: 'desc' });
  assert.deepEqual(parseAdminUserListQuery({ limit: '25', offset: '5', search: ' learner ', sort: 'email', direction: 'asc' }), {
    limit: 25, offset: 5, search: 'learner', sort: 'email', direction: 'asc',
  });
  assert.throws(() => parseAdminUserListQuery({ limit: 101 }), /limit/);
  assert.throws(() => parseAdminUserListQuery({ sort: 'password_hash' }), /сортировки/);
});

test('privilege update rejects missing and non-boolean input', () => {
  assert.equal(parsePrivilegeUpdate({ privileged: true }), true);
  assert.equal(parsePrivilegeUpdate({ privileged: false }), false);
  assert.throws(() => parsePrivilegeUpdate({}), /обязательно/);
  assert.throws(() => parsePrivilegeUpdate({ privileged: 'true' }), /boolean/);
});

test('admin GET reads real users and supports an empty database', async () => {
  const populated = await listUsersForAdmin(
    { limit: 50, offset: 0, search: 'learner', sort: 'email', direction: 'asc' },
    new FakeAdminDatabase([row()])
  );
  assert.equal(populated.total, 1);
  assert.equal(populated.users[0].email, 'learner@example.com');
  const empty = await listUsersForAdmin(
    { limit: 50, offset: 0, sort: 'createdAt', direction: 'desc' },
    new FakeAdminDatabase([])
  );
  assert.deepEqual(empty, { users: [], total: 0 });
});

test('admin mutation persists and a subsequent DB read returns the saved change', async () => {
  const database = new FakeAdminDatabase([row()]);
  const saved = await updateUserPrivilege(USER_ID, true, database);
  assert.equal(saved?.isPrivileged, true);

  const subsequentRead = await listUsersForAdmin(
    { limit: 50, offset: 0, sort: 'createdAt', direction: 'desc' },
    database
  );
  assert.equal(subsequentRead.users[0].isPrivileged, true);
  const mutation = database.queries.find((query) => /update public\.app_users/i.test(query.text));
  assert.deepEqual(mutation?.values, [USER_ID, true]);
  assert.doesNotMatch(mutation?.text ?? '', new RegExp(USER_ID));
});

test('unknown admin user is not updated', async () => {
  const database = new FakeAdminDatabase([row()]);
  assert.equal(await updateUserPrivilege('00000000-0000-4000-8000-000000000000', true, database), null);
});

test('database mutation failure is propagated and does not change cached DB state', async () => {
  const database = new FakeAdminDatabase([row()]);
  database.failUpdates = true;
  await assert.rejects(() => updateUserPrivilege(USER_ID, true, database), /database unavailable/);
  assert.equal(database.rows[0].is_privileged, false);
});

test('admin DTO never exposes password, Stripe references, or session secrets', () => {
  const dto = serializeAdminUser({
    id: USER_ID,
    email: 'learner@example.com',
    passwordHash: 'bcrypt-secret',
    createdAt: '2026-08-22T10:00:00.000Z',
    subscriptionStatus: 'active',
    stripeCustomerId: 'cus_secret_reference',
    stripeSubscriptionId: 'sub_secret_reference',
    isPrivileged: true,
  });
  assert.deepEqual(Object.keys(dto).sort(), ['createdAt', 'email', 'id', 'isPrivileged', 'subscriptionEnd', 'subscriptionStatus'].sort());
  assert.equal(JSON.stringify(dto).includes('secret'), false);
});

test('production AdminDataContext uses the typed API and never imports mock data', () => {
  const contextSource = readFileSync(new URL('../src/admin/AdminDataContext.tsx', import.meta.url), 'utf8');
  const usersSource = readFileSync(new URL('../src/pages/admin/AdminUsers.tsx', import.meta.url), 'utf8');
  assert.match(contextSource, /getAdminUsers|getAdminLessons|updateAdminUserPrivilege/);
  assert.doesNotMatch(contextSource, /mockData|initialUsers|initialLessons|makeId/);
  assert.doesNotMatch(usersSource, /\bfetch\s*\(/);
  assert.doesNotMatch(usersSource, /addUser|deleteUser|subscription\s*:/);
});

test('new admin read and mutation routes enforce the existing admin session check', () => {
  const serverSource = readFileSync(new URL('../server.ts', import.meta.url), 'utf8');
  for (const route of [
    'app.get("/api/admin/users"',
    'app.get("/api/admin/lessons"',
    'const updatePrivilegeHandler',
  ]) {
    const start = serverSource.indexOf(route);
    assert.notEqual(start, -1, route);
    assert.match(serverSource.slice(start, start + 350), /if \(!await isAdminRequest\(req\)\)[\s\S]*status\(401\)/);
  }
});

test('frontend admin API rejects server failures instead of reporting success', { concurrency: false }, async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(JSON.stringify({ message: 'DB write failed' }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  });
  try {
    await assert.rejects(
      () => updateAdminUserPrivilege(USER_ID, true),
      (error: unknown) => error instanceof AdminApiError && error.status === 500 && /DB write failed/.test(error.message)
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});
