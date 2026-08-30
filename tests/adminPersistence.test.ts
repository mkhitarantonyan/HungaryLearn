import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseAdminUserListQuery, parsePrivilegeUpdate } from '../src/server/adminValidation.ts';

test('admin query and privilege payload are allowlisted', () => {
  assert.deepEqual(parseAdminUserListQuery({}), { limit: 50, offset: 0, sort: 'createdAt', direction: 'desc' });
  assert.throws(() => parseAdminUserListQuery({ limit: 101 }), /limit/);
  assert.throws(() => parseAdminUserListQuery({ sort: 'passwordHash' }), /сортировки/);
  assert.equal(parsePrivilegeUpdate({ privileged: true }), true);
  assert.throws(() => parsePrivilegeUpdate({ privileged: 'true' }), /boolean/);
});
test('admin mutation is protected by verified token claim and uses server timestamp', () => {
  const routes = readFileSync(new URL('../functions/src/admin/routes.ts', import.meta.url), 'utf8');
  assert.match(routes, /requireAuth, requireAdmin/);
  assert.match(routes, /isPrivileged: privileged/);
  assert.match(routes, /FieldValue\.serverTimestamp\(\)/);
  assert.match(routes, /lemonCustomerId/);
  assert.match(routes, /lemonSubscriptionId/);
  assert.match(routes, /lemonVariantId/);
  assert.doesNotMatch(routes, /req\.body\.(?:subscriptionStatus|accessUntil|admin)/);
});
