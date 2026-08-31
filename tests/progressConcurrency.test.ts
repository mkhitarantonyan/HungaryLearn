import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeActivityEvidence, mergeProgressState, replaceReviewCard } from '../functions/src/progress/model.ts';

const passed = { activityId: 'l1-cp', attempted: true, completed: true, evidenceMode: 'direct' as const, passed: true, score: 4, total: 5 };
const initial = { viewedSlides: ['l1_s1'], passedQuizzes: [1], activityEvidence: { 'l1-cp': passed }, reviewCards: { old: { reps: 2 } }, customNotes: 'keep' };
test('parallel slide/quiz merge cannot erase SRS or notes', () => {
  const merged = mergeProgressState(initial, { viewedSlides: ['l1_s2'], quiz: { lessonNumber: 2, score: 4, total: 5 } });
  assert.deepEqual(merged.viewedSlides, ['l1_s1', 'l1_s2']);
  assert.deepEqual(merged.passedQuizzes, [1, 2]);
  assert.deepEqual(merged.reviewCards, initial.reviewCards);
  assert.equal(merged.customNotes, 'keep');
  assert.deepEqual(merged.activityEvidence, initial.activityEvidence);
});
test('server activity merge upgrades attempts and never regresses a passed result', () => {
  const failed = { ...passed, passed: false, score: 2 };
  assert.equal(mergeActivityEvidence({ 'l1-cp': failed }, { 'l1-cp': passed })['l1-cp'].passed, true);
  assert.deepEqual(mergeActivityEvidence({ 'l1-cp': passed }, { 'l1-cp': failed })['l1-cp'], passed);
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
