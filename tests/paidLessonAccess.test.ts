import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolveLessonRequest } from '../src/server/lessonAccess.ts';
import { loadServerLesson } from '../src/server/lessonLoader.ts';

test('L1 and L2 remain free', async () => {
  for (const number of ['1', '2']) assert.equal((await resolveLessonRequest(number, null, loadServerLesson)).status, 200);
});
test('L3 unauthenticated is 401', async () => {
  assert.equal((await resolveLessonRequest('3', null, loadServerLesson)).status, 401);
});
test('L3 authenticated but unpaid is 403', async () => {
  assert.equal((await resolveLessonRequest('3', { paidAccess: false }, loadServerLesson)).status, 403);
});
test('L3 trusted paid decision is 200', async () => {
  assert.equal((await resolveLessonRequest('3', { paidAccess: true }, loadServerLesson)).status, 200);
});
test('invalid lesson numbers never load a module', async () => {
  for (const value of ['0', '29', '3.0', '03', '../3']) {
    let loaded = false;
    const result = await resolveLessonRequest(value, null, async () => { loaded = true; return null; });
    assert.equal(result.status, 400); assert.equal(loaded, false);
  }
});
test('browser loader has no paid module imports and uses authenticated API client', async () => {
  const source = await readFile(new URL('../src/data/lessons/index.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /(?:import\s*\(|from\s+)[^\n]*['"]\.\/lesson(?:[3-9]|1\d|2[0-8])['"]/);
  assert.match(source, /apiFetch\(endpoint/);
});
