import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_11 } from '../src/data/lessons/lesson11.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity, ProseReadingContent } from '../src/types.ts';
import { controlledEvidence, describeExitCheckStatus, rolePlayCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const activities = LESSON_11.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson11.ts', import.meta.url), 'utf8');
function find<K extends LessonActivity['kind']>(id: string, kind: K): Extract<LessonActivity, { kind: K }> {
  const activity = activities.find((candidate) => candidate.id === id); assert.ok(activity, `missing ${id}`); assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: K }>;
}
function proseContent(reading: Extract<LessonActivity, { kind: 'reading' }>): ProseReadingContent {
  assert.ok(reading.content); assert.equal(reading.content.type, 'prose');
  if (reading.content.type !== 'prose') assert.fail();
  return reading.content;
}
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });

test('L11 preserves identity, objective IDs, quiz IDs, and eleven narration slots', () => {
  assert.deepEqual([LESSON_11.id, LESSON_11.number, LESSON_11.level, LESSON_11.slidesCount], [11, 11, 'A1', 11]);
  assert.deepEqual(LESSON_11.slides.map((slide) => slide.id), [1,2,3,4,5,6,7,8,9,10,11]);
  assert.deepEqual(LESSON_11.objectives?.map((o) => o.id), ['l11_distinguish-surface-cases','l11_form-superessive','l11_form-sublative','l11_form-delative','l11_use-surface-cases']);
  assert.deepEqual(LESSON_11.quiz?.map((q) => q.id), [1101,1102,1103,1104,1105,1106]);
  for (let slide = 1; slide <= 11; slide += 1) assert.equal(existsSync(new URL(`../public/audio/11.${slide}.mp3`, import.meta.url)), true);
});

test('L11 exposes the communication sequence with valid unique activities and ExitCheck references', () => {
  assert.deepEqual(activities.map((a) => a.kind), ['controlledPractice','reading','rolePlay','writing','exitCheck']);
  assert.equal(new Set(activities.map((a) => a.id)).size, activities.length);
  assert.deepEqual(activities.flatMap(validateActivity), []); assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('l11-exit-check', 'exitCheck'); const objectiveIds = LESSON_11.objectives?.map((o) => o.id) ?? [];
  assert.deepEqual(exit.checks.map((c) => c.objectiveId), objectiveIds);
  assert.deepEqual(validateExitCheckReferences(exit, objectiveIds, activities.map((a) => a.id)), []);
});

test('L11 controlled practice integrates surface forms with Hol Hová Honnan meaning at 11/14', () => {
  const cp = find('l11-cp-meaning-family', 'controlledPractice');
  assert.equal(cp.exercises.length, 14); assert.equal(cp.passCount, 11);
  const text = JSON.stringify(cp.exercises);
  for (const token of ['Hol?', 'Hová?', 'Honnan?', 'asztalon', 'székre', 'bőröndről', 'postán', 'postára', 'postáról']) assert.ok(text.includes(token));
  assert.deepEqual(controlledEvidence(true, 11, 14, 11), { completed: true, passed: true, evidenceMode: 'direct', score: 11, total: 14 });
});

test('L11 reading is a 150–180 word practical city narrative with seven meaning questions', () => {
  const reading = find('l11-reading-budapest-route', 'reading'); const content = proseContent(reading);
  const words = content.paragraphs.join(' ').trim().split(/\s+/u).length;
  assert.ok(words >= 150 && words <= 180, `words=${words}`); assert.equal(reading.questions.length, 7); assert.equal(reading.passCount, 6);
  assert.match(content.title ?? '', /Egy délután a városban/); assert.match(content.paragraphs.join(' '), /munkahelyén.*postára.*piacra.*pályaudvaron.*könyvtárba/s);
});

test('L11 RolePlay implements route clarification in eight text-only learner turns', () => {
  const rolePlay = find('l11-roleplay-town-route', 'rolePlay');
  assert.equal(rolePlay.turns.length, 17); assert.equal(rolePlay.turns.filter((t) => t.speaker === 'learner').length, 8);
  assert.ok(rolePlay.turns.filter((t) => t.speaker === 'learner').every((t) => t.responseMode === 'selfPractice'));
  assert.match(JSON.stringify(rolePlay), /hol van a posta.*Hogyan jutok el.*második utcánál.*Nem, az első.*Köszönöm/is);
  assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode, 'partial');
});

test('L11 Writing meets 70–90 words while optional Speaking is text-only and non-evidentiary', () => {
  const writing = find('l11-writing-city-route', 'writing'); const words = writing.modelAnswer.join(' ').trim().split(/\s+/u).length;
  assert.ok(words >= 70 && words <= 90, `words=${words}`); assert.match(writing.prompt, /70–90 слов/);
  assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial');
  const speaking = LESSON_11.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking; assert.ok(speaking); assert.match(speaking.instructions, /1–1\.5 минуты.*без микрофона.*evidence/s);
});

test('L11 ExitCheck keeps auto-checkable grammar direct and open production partial', () => {
  const exit = find('l11-exit-check', 'exitCheck');
  const evidence: Record<string, ActivityEvidence> = {
    'l11-cp-meaning-family': direct('l11-cp-meaning-family'), 'l11-reading-budapest-route': direct('l11-reading-budapest-route'),
    'l11-roleplay-town-route': rolePlayCompletionEvidence('l11-roleplay-town-route'),
    'l11-writing-city-route': { activityId: 'l11-writing-city-route', attempted: true, selfReviewed: true, ...writingEvidence('A sufficiently developed route description for review.', true) },
  };
  const statuses = Object.fromEntries(exit.checks.map((check) => [check.objectiveId, describeExitCheckStatus(check, evidence[check.activityId], evidence).kind]));
  assert.deepEqual(statuses, { 'l11_distinguish-surface-cases':'direct-met','l11_form-superessive':'direct-met','l11_form-sublative':'direct-met','l11_form-delative':'direct-met','l11_use-surface-cases':'partial-review' });
});

test('L11 keeps the exact surface-case scope and documents the intentional Listening gap', () => {
  assert.equal(activities.some((activity) => activity.kind === 'listening'), false);
  assert.match(source, /поверхностн.*конвенциональн/s); assert.match(source, /В L11 нет отдельного опубликованного Listening/i);
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask|MediaRecorder|getUserMedia|kind:\s*['"]recording/i);
  assert.doesNotMatch(source, /полная система всех|Aproximatív|Puszta/);
});

test('L11 quiz remains unambiguous, vocabulary IDs stay stable, and metadata matches', () => {
  for (const question of LESSON_11.quiz ?? []) { assert.equal(new Set(question.options).size, question.options.length); assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length); }
  assert.deepEqual(LESSON_11.vocabulary?.map((v) => v.id), Array.from({ length: 16 }, (_, i) => `l11_v${i + 1}`));
  const meta = LESSONS_META.find((item) => item.id === 11); assert.ok(meta); assert.equal(meta.description, LESSON_11.description); assert.equal(meta.slidesCount, 11);
});
