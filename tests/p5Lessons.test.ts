import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import { LESSON_18 } from '../src/data/lessons/lesson18.ts';
import { LESSON_19 } from '../src/data/lessons/lesson19.ts';
import { LESSON_20 } from '../src/data/lessons/lesson20.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
  rolePlayCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
  writingEvidence,
} from '../src/utils/activityUtils.ts';
import { hasCompleteDirectObjectiveEvidence } from '../src/utils/lessonProgress.ts';

const lessons = [LESSON_18, LESSON_19, LESSON_20];
const activitiesOf = (lesson: typeof LESSON_18): LessonActivity[] => lesson.slides.flatMap((slide) => slide.activities ?? []);
const activityOf = <K extends LessonActivity['kind']>(lesson: typeof LESSON_18, kind: K) => {
  const found = activitiesOf(lesson).find((activity) => activity.kind === kind);
  assert.ok(found);
  return found as Extract<LessonActivity, { kind: K }>;
};
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });

test('P5 identity contract keeps exact objective and quiz IDs with eleven slides', () => {
  const objectives = new Map([
    [18, ['l18_form-infinitive', 'l18_use-modal-verbs', 'l18_express-necessity', 'l18_express-desire', 'l18_understand-modals']],
    [19, ['l19_form-future', 'l19_conjugate-fog', 'l19_use-future-plans', 'l19_distinguish-tenses', 'l19_make-predictions']],
    [20, ['l20_form-past-regular', 'l20_form-past-irregular', 'l20_use-definite-indefinite', 'l20_narrate-past', 'l20_understand-past-texts']],
  ]);
  for (const lesson of lessons) {
    assert.equal(lesson.id, lesson.number);
    assert.equal(lesson.slidesCount, 11);
    assert.deepEqual(lesson.slides.map((slide) => slide.id), Array.from({ length: 11 }, (_, index) => index + 1));
    assert.deepEqual(lesson.objectives?.map((objective) => objective.id), objectives.get(lesson.number));
    assert.deepEqual(lesson.quiz?.map((question) => question.id), Array.from({ length: 6 }, (_, index) => lesson.number * 100 + index + 1));
  }
});

test('P5 L18–L20 all use grammar → comprehension → interaction → connected production activities', () => {
  for (const lesson of lessons) {
    const activities = activitiesOf(lesson);
    assert.deepEqual(activities.map((activity) => activity.kind), ['controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck']);
    assert.deepEqual(activities.flatMap(validateActivity), []);
    assert.deepEqual(validateLessonQuestionIds(activities), []);
    const exit = activityOf(lesson, 'exitCheck');
    const objectiveIds = lesson.objectives?.map((objective) => objective.id) ?? [];
    assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectiveIds);
    assert.deepEqual(validateExitCheckReferences(exit, objectiveIds, activities.map((activity) => activity.id)), []);
  }
});

test('P5 L20 integrated practice and reading meet checkpoint depth', () => {
  const controlled = activityOf(LESSON_20, 'controlledPractice');
  assert.equal(controlled.exercises.length, 16);
  assert.equal(controlled.passCount, 13);
  const controlledText = JSON.stringify(controlled);
  for (const marker of ['dolgoztam', 'ment', 'evett', 'ivott', 'nem voltam', 'nem tudtam', 'Először', 'Végül', 'étterembe', 'pályaudvaron']) {
    assert.match(controlledText, new RegExp(marker));
  }
  const reading = activityOf(LESSON_20, 'reading');
  assert.equal(reading.title, 'Egy nap, ami nem a tervek szerint alakult');
  assert.equal(reading.questions.length, 8);
  assert.equal(reading.passCount, 6);
  assert.ok(reading.content?.type === 'prose');
  const words = reading.content.paragraphs.join(' ').trim().split(/\s+/u).length;
  assert.ok(words >= 220 && words <= 280, `words=${words}`);
});

test('P5 L20 narrative RolePlay and writing satisfy connected-production targets but remain PARTIAL', () => {
  const rolePlay = activityOf(LESSON_20, 'rolePlay');
  assert.equal(rolePlay.turns.length, 16);
  assert.equal(rolePlay.turns.filter((turn) => turn.speaker === 'learner').length, 8);
  assert.match(JSON.stringify(rolePlay), /Hova mentél|Mi történt először|Miért késtél|Felhívtál vagy írtál|megoldódott|másképp legközelebb/);
  assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode, 'partial');
  const writing = activityOf(LESSON_20, 'writing');
  assert.match(`${writing.prompt} ${writing.rubric.join(' ')}`, /100–120/);
  assert.match(writing.prompt, /исходный план|минимум два события|проблему|решение|хронологические|результат/);
  assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial');
  const speaking = LESSON_20.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking;
  assert.ok(speaking);
  assert.match(speaking.instructions, /2–2\.5 минуты/);
  assert.match(speaking.instructions, /без микрофона, score и evidence/);
});

test('P5 L20 A2 checkpoint exposes DIRECT auto-checks and PARTIAL open production without certification', () => {
  const controlled = activityOf(LESSON_20, 'controlledPractice');
  const reading = activityOf(LESSON_20, 'reading');
  const listening = activityOf(LESSON_20, 'listening');
  const rolePlay = activityOf(LESSON_20, 'rolePlay');
  const writing = activityOf(LESSON_20, 'writing');
  const exit = activityOf(LESSON_20, 'exitCheck');
  const evidence: Record<string, ActivityEvidence> = {
    [controlled.id]: direct(controlled.id), [reading.id]: direct(reading.id),
    [listening.id]: { activityId: listening.id, attempted: true, completed: true, ...listeningEvidence(listening, 3, 3) },
    [rolePlay.id]: rolePlayCompletionEvidence(rolePlay.id),
    [writing.id]: { activityId: writing.id, attempted: true, ...writingEvidence(writing.modelAnswer.join(' '), true) },
  };
  assert.deepEqual(exit.checks.map((check) => describeExitCheckStatus(check, evidence[check.activityId], evidence).kind),
    ['direct-met', 'direct-met', 'direct-met', 'partial-review', 'direct-met']);
  assert.equal(hasCompleteDirectObjectiveEvidence({
    objectiveIds: LESSON_20.objectives?.map((objective) => objective.id) ?? [], checks: exit.checks, evidence,
  }), false);
  const source = readFileSync(new URL('../src/data/lessons/lesson20.ts', import.meta.url), 'utf8');
  assert.match(source, /не автоматическое утверждение «A2 достигнут»/);
  assert.match(source, /не выдают CEFR-сертификацию/);
});

test('P5 preserves exact L18–L20 Listening transcripts, assets, and SHA-256', () => {
  const contracts = new Map([
    [18, ['l18_listening_modals', '317030dbf7b76393416c0cc6785f8e4bfd7f445688741ea1db1a6f2b9f8caec1']],
    [19, ['l19_listening_future', '8ff5642e9f61d6e26562020ee2e841c0e1d417657bd5e70b7db19633c3fe58b0']],
    [20, ['l20_listening_context', 'ad0b3d9f1b5748b21b4d17c09630c083f7e701ae65831fda1f22e069ba2adf74']],
  ]);
  for (const lesson of lessons) {
    const listening = activityOf(lesson, 'listening');
    const [assetId, sha256] = contracts.get(lesson.number) ?? [];
    assert.equal(listening.assetId, assetId);
    assert.equal(listening.audioStatus, 'published');
    const bytes = readFileSync(new URL(`../public/audio/${assetId}.mp3`, import.meta.url));
    assert.ok(bytes.length > 0);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), sha256);
  }
  const mp3Count = readdirSync(new URL('../public/audio/', import.meta.url)).filter((name) => name.toLowerCase().endsWith('.mp3')).length;
  assert.equal(mp3Count, 1123);
});

test('P5 does not reintroduce learner recording or browser TTS', () => {
  for (const lesson of lessons) {
    const source = readFileSync(new URL(`../src/data/lessons/lesson${lesson.number}.ts`, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask|recordingCompleted|responseMode:\s*['"]recorded['"]|kind:\s*['"]recording['"]/i);
    assert.equal(activitiesOf(lesson).some((activity) => (activity as { kind: string }).kind === 'recording'), false);
  }
});

test('P5 leaves P6/P7 L21–L27 and L28 source files byte-identical', () => {
  const contracts = new Map([
    [21, '970477dfcfa7481ad1e8c7aecb1ad9adf9c5218dac3814a4be15e18f79a0c0b1'],
    [22, 'c31bca32416e054cd9156dfbed0387a1f5b87d3c5bb4410661923c5b4d318c8c'],
    [23, 'a5faee5ae85818a524f94f8f5ee78f50b661cad5df89602c35b127f45f993daa'],
    [24, '84047edb1c03f73b3b7e3eb8668e9a5ac8fa2df3008213601873819d6cd90d15'],
    [25, '94dfc11633622c67447973b10ca3fc3c70c8f6ed298ed454af979996ecdffc74'],
    [26, 'fb9572913f6caaf591e3d11ed7420674ca567932c8478f0d3e1d70d2db5f39ee'],
    [27, 'a265e3a27e9faf15188596a7f6f00dbb955231830b6f81d641c74536a9982af2'],
    [28, '617f7df1bbd486161a0dba0f63ae0be08011eeacd2b69a060d282ea3e7de2fcc'],
  ]);
  for (const [lesson, expected] of contracts) {
    const bytes = readFileSync(new URL(`../src/data/lessons/lesson${lesson}.ts`, import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, `L${lesson}`);
  }
});

test('P5 vocabulary audit is selective and makes no runtime/audio promises', () => {
  assert.deepEqual(lessons.map((lesson) => lesson.vocabulary?.length), [8, 5, 5]);
  const docs = readFileSync(new URL('../docs/P5_VOCABULARY_AUDIT.md', import.meta.url), 'utf8');
  assert.match(docs, /\| L18 \| 8 \| 6 \| 10 \| 5 \| 8 \|/);
  assert.match(docs, /\| L19 \| 5 \| 5 \| 9 \| 5 \| 8 \|/);
  assert.match(docs, /\| L20 \| 5 \| 5 \| 10 \| 5 \| 10 \|/);
  assert.match(docs, /No new runtime card, vocabulary ID, alias, `wordAudioMap` entry, or MP3/);
});
