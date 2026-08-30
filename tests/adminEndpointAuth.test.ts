import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('admin client sends Firebase bearer tokens rather than trusting a UI boolean', () => {
  const client = readFileSync(new URL('../src/lib/apiClient.ts', import.meta.url), 'utf8');
  const routes = readFileSync(new URL('../functions/src/admin/routes.ts', import.meta.url), 'utf8');
  assert.match(client, /getIdToken\(\)/);
  assert.match(client, /Authorization/);
  assert.match(routes, /requireAuth, requireAdmin/);
});
