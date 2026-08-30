import test from 'node:test';
import assert from 'node:assert/strict';
import { isAdminToken } from '../functions/src/auth/middleware.ts';

test('only an exact Firebase admin custom claim passes', () => {
  assert.equal(isAdminToken(undefined), false);
  assert.equal(isAdminToken({ admin: false } as never), false);
  assert.equal(isAdminToken({ admin: 'true' } as never), false);
  assert.equal(isAdminToken({ admin: true } as never), true);
});
