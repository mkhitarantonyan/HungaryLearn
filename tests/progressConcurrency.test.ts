import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeProgressState, replaceReviewCard } from '../functions/src/progress/model.ts';

const initial = { viewedSlides: ['l1_s1'], passedQuizzes: [1], reviewCards: { old: { reps: 2 } }, customNotes: 'keep' };
test('parallel slide/quiz merge cannot erase SRS or notes', () => {
  const merged = mergeProgressState(initial, { viewedSlides: ['l1_s2'], quiz: { lessonNumber: 2, score: 4, total: 5 } });
  assert.deepEqual(merged.viewedSlides, ['l1_s1', 'l1_s2']);
  assert.deepEqual(merged.passedQuizzes, [1, 2]);
  assert.deepEqual(merged.reviewCards, initial.reviewCards);
  assert.equal(merged.customNotes, 'keep');
});
test('quiz below 80 percent does not pass', () => {
  assert.deepEqual(mergeProgressState(initial, { quiz: { lessonNumber: 2, score: 3, total: 5 } }).passedQuizzes, [1]);
});
test('SRS update cannot erase slides, quizzes or notes', () => {
  const merged = replaceReviewCard(initial, 'new', { reps: 1 });
  assert.deepEqual(merged.viewedSlides, initial.viewedSlides);
  assert.deepEqual(merged.passedQuizzes, initial.passedQuizzes);
  assert.equal(merged.customNotes, 'keep');
});
