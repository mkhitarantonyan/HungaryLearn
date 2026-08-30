import test from 'node:test';
import assert from 'node:assert/strict';
import type { LessonActivity } from '../src/types.ts';
import { LESSON_17 } from '../src/data/lessons/lesson17.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import { validateActivity, validateExitCheckReferences, validateLessonQuestionIds } from '../src/utils/activityUtils.ts';

const activities: LessonActivity[] = LESSON_17.slides.flatMap((slide) => slide.activities ?? []);
const find = <K extends LessonActivity['kind']>(kind: K) => {
  const activity = activities.find((candidate) => candidate.kind === kind);
  assert.ok(activity);
  return activity as Extract<LessonActivity, { kind: K }>;
};

test('L17 P4 identity and activity graph are valid', () => {
  assert.deepEqual([LESSON_17.id, LESSON_17.number, LESSON_17.level, LESSON_17.slidesCount], [17, 17, 'A2', 11]);
  assert.deepEqual(LESSON_17.objectives?.map((objective) => objective.id), ['l17_describe-weather', 'l17_name-seasons', 'l17_use-seasonal-adverbials', 'l17_compare-seasons', 'l17_understand-forecast']);
  assert.deepEqual(LESSON_17.quiz?.map((question) => question.id), [1701, 1702, 1703, 1704, 1705, 1706]);
  assert.deepEqual(activities.map((activity) => activity.kind), ['controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck']);
  assert.deepEqual(activities.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('exitCheck');
  assert.deepEqual(validateExitCheckReferences(exit, LESSON_17.objectives?.map((objective) => objective.id) ?? [], activities.map((activity) => activity.id)), []);
});

test('L17 preserves the published Listening A contract', () => {
  const listening = find('listening');
  assert.equal(listening.id, 'l17-listening-weather');
  assert.equal(listening.assetId, 'l17_listening_weather');
  assert.equal(listening.audioStatus, 'published');
  assert.equal(listening.passCount, 4);
  assert.equal(listening.questions.length, 5);
  assert.equal(listening.transcript, 'Időjárás-jelentés. Ma Budapesten felhős az ég, tizenöt fok van. Délután esik az eső, este fúj a szél. Holnap napos idő lesz, húsz fok lesz.');
});

test('L17 vocabulary, quiz, and text-only speaking compatibility remain stable', () => {
  assert.deepEqual(LESSON_17.vocabulary?.map((item) => item.id), Array.from({ length: 8 }, (_, index) => `l17_v${index + 1}`));
  assert.ok(LESSON_17.slides.some((slide) => slide.optionalSpeaking));
  assert.equal(activities.some((activity) => (activity as { kind: string }).kind === 'recording'), false);
  for (const question of LESSON_17.quiz ?? []) assert.equal(new Set(question.options).size, question.options.length);
});

test('L17 metadata matches the lesson', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 17);
  assert.ok(meta);
  assert.deepEqual(meta, { id: LESSON_17.id, number: LESSON_17.number, level: LESSON_17.level, title: LESSON_17.title, subtitle: LESSON_17.subtitle, description: LESSON_17.description, slidesCount: LESSON_17.slidesCount });
});
