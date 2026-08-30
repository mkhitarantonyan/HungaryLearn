import test from 'node:test';
import assert from 'node:assert/strict';
import type { LessonActivity } from '../src/types.ts';
import { LESSON_16 } from '../src/data/lessons/lesson16.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import { validateActivity, validateExitCheckReferences, validateLessonQuestionIds } from '../src/utils/activityUtils.ts';

const activities: LessonActivity[] = LESSON_16.slides.flatMap((slide) => slide.activities ?? []);
const find = <K extends LessonActivity['kind']>(kind: K) => {
  const activity = activities.find((candidate) => candidate.kind === kind);
  assert.ok(activity);
  return activity as Extract<LessonActivity, { kind: K }>;
};

test('L16 P4 identity and activity graph are valid', () => {
  assert.deepEqual([LESSON_16.id, LESSON_16.number, LESSON_16.level, LESSON_16.slidesCount], [16, 16, 'A2', 11]);
  assert.deepEqual(LESSON_16.objectives?.map((objective) => objective.id), ['l16_form-instrumental', 'l16_apply-assimilation', 'l16_use-instrumental', 'l16_shop-dialogue', 'l16_count-money']);
  assert.deepEqual(LESSON_16.quiz?.map((question) => question.id), [1601, 1602, 1603, 1604, 1605, 1606]);
  assert.deepEqual(activities.map((activity) => activity.kind), ['controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck']);
  assert.deepEqual(activities.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('exitCheck');
  assert.deepEqual(validateExitCheckReferences(exit, LESSON_16.objectives?.map((objective) => objective.id) ?? [], activities.map((activity) => activity.id)), []);
});

test('L16 preserves the published Listening A contract', () => {
  const listening = find('listening');
  assert.equal(listening.id, 'l16-listening-shopping');
  assert.equal(listening.assetId, 'l16_listening_shopping');
  assert.equal(listening.audioStatus, 'published');
  assert.equal(listening.passCount, 3);
  assert.equal(listening.questions.length, 4);
  assert.match(listening.transcript, /Egy pulóvert kérek/);
});

test('L16 vocabulary and quiz compatibility remain stable', () => {
  assert.deepEqual(LESSON_16.vocabulary?.map((item) => item.id), Array.from({ length: 8 }, (_, index) => `l16_v${index + 1}`));
  for (const question of LESSON_16.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
});

test('L16 metadata matches the lesson', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 16);
  assert.ok(meta);
  assert.deepEqual(meta, { id: LESSON_16.id, number: LESSON_16.number, level: LESSON_16.level, title: LESSON_16.title, subtitle: LESSON_16.subtitle, description: LESSON_16.description, slidesCount: LESSON_16.slidesCount });
});
