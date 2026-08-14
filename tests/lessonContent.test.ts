import test from 'node:test';
import assert from 'node:assert/strict';
import { LESSONS_META } from '../src/data/lessons/index.ts';

test('lesson metadata slidesCount matches declared values for lesson 8', () => {
  const lesson8 = LESSONS_META.find((lesson) => lesson.id === 8);
  assert.ok(lesson8);
  assert.equal(lesson8!.slidesCount, 12);
});

test('all lesson ids are unique', () => {
  const ids = LESSONS_META.map((lesson) => lesson.id);
  assert.equal(new Set(ids).size, ids.length);
});
