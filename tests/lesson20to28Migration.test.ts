import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
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
const activitiesOf = (lesson: Lesson): LessonActivity[] => lesson.slides.flatMap((slide) => slide.activities ?? []);

for (const lesson of lessons) {
  test(`L${lesson.number} migration preserves identity and objective coverage`, () => {
    assert.equal(lesson.id, lesson.number);
    assert.equal(lesson.slidesCount, lesson.slides.length);
    assert.deepEqual(lesson.slides.map((slide) => slide.id), Array.from({ length: lesson.slidesCount }, (_, index) => index + 1));

    const activities = activitiesOf(lesson);
    assert.equal(activities.length, 6);
    assert.deepEqual(activities.map((activity) => activity.kind), [
      'controlledPractice', 'reading', 'listening', 'writing', 'recording', 'exitCheck',
    ]);
    assert.equal(new Set(activities.map((activity) => activity.id)).size, activities.length);
    assert.deepEqual(activities.flatMap(validateActivity), []);
    assert.deepEqual(validateLessonQuestionIds(activities), []);

    const exit = activities.find((activity): activity is Extract<LessonActivity, { kind: 'exitCheck' }> => activity.kind === 'exitCheck');
    assert.ok(exit);
    const objectiveIds = lesson.objectives?.map((objective) => objective.id) ?? [];
    assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectiveIds);
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

test('L15 remains byte-for-byte frozen after L20–L28 migration', () => {
  const bytes = readFileSync(new URL('../src/data/lessons/lesson15.ts', import.meta.url));
  assert.equal(createHash('sha256').update(bytes).digest('hex').toUpperCase(), 'A7A143F7E0D5B029D3F1788868A839516D2C1C373BF7EE31C36C91DCCA15ED85');
});
