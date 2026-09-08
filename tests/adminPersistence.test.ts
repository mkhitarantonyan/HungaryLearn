import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseAdminUserListQuery, parseBlockUpdate, parsePrivilegeUpdate } from '../src/server/adminValidation.ts';

test('admin query and privilege payload are allowlisted', () => {
  assert.deepEqual(parseAdminUserListQuery({}), { limit: 50, offset: 0, sort: 'createdAt', direction: 'desc' });
  assert.throws(() => parseAdminUserListQuery({ limit: 101 }), /limit/);
  assert.throws(() => parseAdminUserListQuery({ sort: 'passwordHash' }), /сортировки/);
  assert.equal(parsePrivilegeUpdate({ privileged: true }), true);
  assert.throws(() => parsePrivilegeUpdate({ privileged: 'true' }), /boolean/);
  assert.equal(parseBlockUpdate({ blocked: true }), true);
  assert.equal(parseBlockUpdate({ blocked: false }), false);
  assert.throws(() => parseBlockUpdate({ blocked: 'true' }), /boolean/);
  assert.throws(() => parseBlockUpdate({}), /обязательно/);
});
test('admin mutations are protected and block or delete only through Firebase Admin', () => {
  const routes = readFileSync(new URL('../functions/src/admin/routes.ts', import.meta.url), 'utf8');
  const api = readFileSync(new URL('../src/api/adminApi.ts', import.meta.url), 'utf8');
  const usersPage = readFileSync(new URL('../src/pages/admin/AdminUsers.tsx', import.meta.url), 'utf8');
  assert.match(routes, /requireAuth, requireAdmin/);
  assert.match(routes, /isPrivileged: privileged/);
  assert.match(routes, /FieldValue\.serverTimestamp\(\)/);
  assert.match(routes, /lemonCustomerId/);
  assert.match(routes, /lemonSubscriptionId/);
  assert.match(routes, /lemonVariantId/);
  assert.match(routes, /adminAuth\.updateUser\(req\.params\.uid, \{ disabled: blocked \}\)/);
  assert.match(routes, /adminAuth\.revokeRefreshTokens\(req\.params\.uid\)/);
  assert.match(routes, /deleteUserAccount\(req\.params\.uid\)/);
  assert.match(routes, /req\.params\.uid !== req\.auth!\.uid/);
  assert.doesNotMatch(routes, /req\.body\.(?:subscriptionStatus|accessUntil|admin)/);
  assert.match(api, /method: 'DELETE'/);
  assert.match(api, /JSON\.stringify\(\{ blocked \}\)/);
  assert.match(usersPage, /Заблокировать/);
  assert.match(usersPage, /Удалить аккаунт/);
  assert.match(usersPage, /Действие нельзя отменить/);
});
