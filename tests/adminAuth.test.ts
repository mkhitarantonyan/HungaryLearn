import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyAdminCredentials } from '../src/utils/adminAuth.ts';

test('accepts plaintext admin password from env', async () => {
  const result = await verifyAdminCredentials({
    username: 'admin',
    password: 'admin123',
    adminUsername: 'admin',
    adminPassword: 'admin123',
    adminPasswordHash: '',
  });

  assert.equal(result, true);
});

test('accepts bcrypt-hash admin password from env', async () => {
  const result = await verifyAdminCredentials({
    username: 'admin',
    password: 'admin123',
    adminUsername: 'admin',
    adminPassword: '',
    adminPasswordHash: '$2b$10$j1uKFbRTnCM/ayD8alS/vusIPF5Zy3UpCnHWw4pBG.LpCxqVFb9Dq',
  });

  assert.equal(result, true);
});

test('rejects wrong password', async () => {
  const result = await verifyAdminCredentials({
    username: 'admin',
    password: 'wrong',
    adminUsername: 'admin',
    adminPassword: 'admin123',
    adminPasswordHash: '',
  });

  assert.equal(result, false);
});
