import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolveLessonRequest } from '../src/server/lessonAccess.ts';
import { loadServerLesson } from '../src/server/lessonLoader.ts';

const future = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

test('paid lesson request rejects an unauthenticated user with 401', async () => {
  const result = await resolveLessonRequest('3', null, loadServerLesson);
  assert.equal(result.status, 401);
  assert.equal(result.body.lesson, undefined);
});

test('paid lesson request rejects an authenticated user without entitlement with 403', async () => {
  const result = await resolveLessonRequest('3', {
    subscriptionStatus: 'canceled',
    subscriptionEnd: future,
  }, loadServerLesson);
  assert.equal(result.status, 403);
  assert.equal(result.body.lesson, undefined);
});

test('paid lesson request returns the lesson for an entitled user', async () => {
  const result = await resolveLessonRequest('3', {
    subscriptionStatus: 'active',
    subscriptionEnd: future,
  }, loadServerLesson);
  assert.equal(result.status, 200);
  assert.equal(result.body.lesson?.number, 3);
});

test('paid lesson request rejects an unpaid user', async () => {
  const result = await resolveLessonRequest('3', {
    subscriptionStatus: 'unpaid',
  }, loadServerLesson);
  assert.equal(result.status, 403);
  assert.equal(result.body.lesson, undefined);
});

test('paid lesson request returns the lesson for a privileged user', async () => {
  const result = await resolveLessonRequest('28', {
    isPrivileged: true,
    subscriptionStatus: 'canceled',
  }, loadServerLesson);
  assert.equal(result.status, 200);
  assert.equal(result.body.lesson?.number, 28);
});

test('free lesson request remains public and valid', async () => {
  const result = await resolveLessonRequest('2', null, loadServerLesson);
  assert.equal(result.status, 200);
  assert.equal(result.body.lesson?.number, 2);
});

test('invalid lesson numbers are rejected before loading a module', async () => {
  for (const value of ['0', '29', '3.0', '03', '../3', 'lesson3']) {
    let loaded = false;
    const result = await resolveLessonRequest(value, null, async () => {
      loaded = true;
      return null;
    });
    assert.equal(result.status, 400, value);
    assert.equal(loaded, false, value);
  }
});

test('browser lesson loader contains no imports of paid lesson modules', async () => {
  const loaderPath = fileURLToPath(new URL('../src/data/lessons/index.ts', import.meta.url));
  const source = await readFile(loaderPath, 'utf8');
  assert.doesNotMatch(source, /(?:import\s*\(|from\s+)[^\n]*['"]\.\/lesson(?:[3-9]|1\d|2[0-8])['"]/);
  assert.match(source, /fetch\(endpoint/);
  assert.match(source, /\/api\/lessons\/\$\{id\}/);
});
