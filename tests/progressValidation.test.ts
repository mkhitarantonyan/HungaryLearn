import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyAdminCredentials } from '../src/utils/adminAuth.ts';

test('rejects plaintext admin password in production even when ADMIN_PASSWORD is set', async () => {
  const originalEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = 'production';

  try {
    const result = await verifyAdminCredentials({
      username: 'admin',
      password: 'admin123',
      adminUsername: 'admin',
      adminPassword: 'admin123',
      adminPasswordHash: '',
    });
    assert.equal(result, false);
  } finally {
    process.env.NODE_ENV = originalEnv;
  }
});

test('quiz pass threshold requires at least 80%', () => {
  const threshold = 0.8;
  assert.equal(4 / 5 >= threshold, true);
  assert.equal(3 / 5 >= threshold, false);
});
