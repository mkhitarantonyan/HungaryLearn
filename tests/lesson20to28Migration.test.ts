import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import type { Lesson, LessonActivity } from '../src/types.ts';
import { LESSON_20 } from '../src/data/lessons/lesson20.ts';
import { LESSON_21 } from '../src/data/lessons/lesson21.ts';
import { LESSON_22 } from '../src/data/lessons/lesson22.ts';
import { LESSON_23 } from '../src/data/lessons/lesson23.ts';
import { LESSON_24 } from '../src/data/lessons/lesson24.ts';
import { LESSON_25 } from '../src/data/lessons/lesson25.ts';
import { LESSON_26 } from '../src/data/lessons/lesson26.ts';
import { LESSON_27 } from '../src/data/lessons/lesson27.ts';
import { LESSON_28 } from '../src/data/lessons/lesson28.ts';
import {
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
} from '../src/utils/activityUtils.ts';

const lessons = [LESSON_20, LESSON_22, LESSON_23, LESSON_21, LESSON_24, LESSON_25, LESSON_26, LESSON_27, LESSON_28];
const p6aLessonNumbers = new Set([21, 22, 23, 24]);
const activitiesOf = (lesson: Lesson): LessonActivity[] => lesson.slides.flatMap((slide) => slide.activities ?? []);

const expectedActivityKinds = (lessonNumber: number): LessonActivity['kind'][] => {
  if (lessonNumber === 20) {
    return ['controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck'];
  }
  if (p6aLessonNumbers.has(lessonNumber)) {
    return ['controlledPractice', 'reading', 'listening', 'listening', 'rolePlay', 'writing', 'exitCheck'];
  }
  if (lessonNumber === 25) {
    return ['reading', 'controlledPractice', 'listening', 'rolePlay', 'writing', 'exitCheck'];
  }
  if (lessonNumber === 26 || lessonNumber === 27) {
    return ['reading', 'controlledPractice', 'listening', 'rolePlay', 'rolePlay', 'writing', 'exitCheck'];
  }
  return ['controlledPractice', 'reading', 'listening', 'writing', 'exitCheck'];
};

for (const lesson of lessons) {
  test(`L${lesson.number} migration preserves identity and objective coverage`, () => {
    assert.equal(lesson.id, lesson.number);
    assert.equal(lesson.slidesCount, lesson.slides.length);
    assert.deepEqual(lesson.slides.map((slide) => slide.id), Array.from({ length: lesson.slidesCount }, (_, index) => index + 1));

    const activities = activitiesOf(lesson);
    const expectedKinds = expectedActivityKinds(lesson.number);
    assert.equal(activities.length, expectedKinds.length);
    assert.deepEqual(activities.map((activity) => activity.kind), expectedKinds);
    assert.equal(new Set(activities.map((activity) => activity.id)).size, activities.length);
    assert.deepEqual(activities.flatMap(validateActivity), []);
    assert.deepEqual(validateLessonQuestionIds(activities), []);

    const exit = activities.find((activity): activity is Extract<LessonActivity, { kind: 'exitCheck' }> => activity.kind === 'exitCheck');
    assert.ok(exit);
    const objectiveIds = lesson.objectives?.map((objective) => objective.id) ?? [];
    assert.ok(exit.checks.every((check) => objectiveIds.includes(check.objectiveId)));
    assert.deepEqual(validateExitCheckReferences(exit, objectiveIds, activities.map((activity) => activity.id)), []);
  });

  test(`L${lesson.number} uses dedicated published listening audio without TTS fallback`, () => {
    const activities = activitiesOf(lesson);
    const listening = activities.find((activity): activity is Extract<LessonActivity, { kind: 'listening' }> => activity.kind === 'listening');
    assert.ok(listening);
    assert.equal(listening.assetId, `l${lesson.number}_listening_context`);
    assert.equal(listening.audioStatus, 'published');
    assert.equal(listening.questions.length, 3);
    const source = readFileSync(new URL(`../src/data/lessons/lesson${lesson.number}.ts`, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i);
  });
}

test('L15 keeps its lesson, objective, and quiz identities after global learner-recording removal', async () => {
  const { LESSON_15 } = await import('../src/data/lessons/lesson15.ts');
  assert.equal(LESSON_15.id, 15);
  assert.deepEqual(LESSON_15.objectives?.map((objective) => objective.id), [
    'l15_name-food', 'l15_form-dative', 'l15_use-have-construction', 'l15_express-likes', 'l15_order-food', 'l15_understand-restaurant-dialogue',
  ]);
  assert.deepEqual(LESSON_15.quiz?.map((question) => question.id), [1501, 1502, 1503, 1504, 1505, 1506]);
});
