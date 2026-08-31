import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeProgressState } from '../functions/src/progress/model.ts';

const empty = { viewedSlides: [], passedQuizzes: [], activityEvidence: {}, reviewCards: {} };
test('quiz pass threshold is exactly 80 percent', () => {
  assert.deepEqual(mergeProgressState(empty, { quiz: { lessonNumber: 1, score: 4, total: 5 } }).passedQuizzes, [1]);
  assert.deepEqual(mergeProgressState(empty, { quiz: { lessonNumber: 1, score: 3, total: 5 } }).passedQuizzes, []);
});
