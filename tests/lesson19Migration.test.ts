import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { LESSON_19 } from '../src/data/lessons/lesson19.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { LessonActivity } from '../src/types.ts';
import { listeningEvidence, rolePlayCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const activities = LESSON_19.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson19.ts', import.meta.url), 'utf8');
const activity = <K extends LessonActivity['kind']>(kind: K) => {
  const found = activities.find((candidate) => candidate.kind === kind);
  assert.ok(found);
  return found as Extract<LessonActivity, { kind: K }>;
};

test('P5 L19 preserves lesson, objective, quiz, and 11-slide identities', () => {
  assert.deepEqual([LESSON_19.id, LESSON_19.number, LESSON_19.level, LESSON_19.slidesCount], [19, 19, 'A2', 11]);
  assert.deepEqual(LESSON_19.slides.map((slide) => slide.id), Array.from({ length: 11 }, (_, index) => index + 1));
  assert.deepEqual(LESSON_19.objectives?.map((objective) => objective.id), [
    'l19_form-future', 'l19_conjugate-fog', 'l19_use-future-plans', 'l19_distinguish-tenses', 'l19_make-predictions',
  ]);
  assert.deepEqual(LESSON_19.quiz?.map((question) => question.id), [1901, 1902, 1903, 1904, 1905, 1906]);
});

test('P5 L19 uses the complete communication activity sequence', () => {
  assert.deepEqual(activities.map((item) => item.kind), ['controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck']);
  assert.equal(new Set(activities.map((item) => item.id)).size, activities.length);
  assert.deepEqual(activities.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = activity('exitCheck');
  const objectives = LESSON_19.objectives?.map((objective) => objective.id) ?? [];
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectives);
  assert.deepEqual(validateExitCheckReferences(exit, objectives, activities.map((item) => item.id)), []);
});

test('P5 L19 controlled practice contrasts scheduled present, fog future, predictions, and changed plans at 11/14', () => {
  const controlled = activity('controlledPractice');
  assert.equal(controlled.exercises.length, 14);
  assert.equal(controlled.passCount, 11);
  const text = JSON.stringify(controlled);
  assert.match(text, /Holnap dolgozom/);
  assert.match(text, /Szerintem holnap sokat fogok dolgozni/);
  assert.match(text, /Majd felhívlak/);
  assert.match(text, /Mikor tudunk találkozni/);
  assert.match(text, /kettőkor találkozunk a pályaudvarnál/);
});

test('P5 L19 reading is a connected 180–230-word changed-weekend narrative with eight questions', () => {
  const reading = activity('reading');
  assert.equal(reading.title, 'Egy sűrű hétvége');
  assert.equal(reading.questions.length, 8);
  assert.equal(reading.passCount, 6);
  assert.ok(reading.content?.type === 'prose');
  const words = reading.content.paragraphs.join(' ').trim().split(/\s+/u).length;
  assert.ok(words >= 180 && words <= 230, `words=${words}`);
  assert.match(JSON.stringify(reading), /Péntek este|szombaton délig dolgoznia kell|kettőkor találkoznak|esni fog|Vasárnap/);
});

test('P5 L19 changed-plan RolePlay reaches a final time/place arrangement and remains PARTIAL', () => {
  const rolePlay = activity('rolePlay');
  assert.ok(rolePlay.turns.length >= 14);
  assert.ok(rolePlay.turns.filter((turn) => turn.speaker === 'learner').length >= 7);
  const text = JSON.stringify(rolePlay);
  assert.match(text, /délig dolgoznom kell/);
  assert.match(text, /Mikor tudunk akkor találkozni/);
  assert.match(text, /vonattal|autóval/);
  assert.match(text, /esni fog/);
  assert.match(text, /kettőkor találkozunk a pályaudvar főbejáratánál/);
  assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode, 'partial');
  assert.equal(rolePlayCompletionEvidence(rolePlay.id).passed, false);
});

test('P5 L19 writing is 90–110 words and optional speaking has no evidence', () => {
  const writing = activity('writing');
  assert.match(`${writing.prompt} ${writing.rubric.join(' ')}`, /90–110/);
  assert.match(writing.prompt, /пятницу, субботу и воскресенье|фиксированную договорённость|прогноз|изменение|вопросом другу/);
  assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial');
  const speaking = LESSON_19.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking;
  assert.ok(speaking);
  assert.match(speaking.instructions, /около 2 минут/);
  assert.match(speaking.instructions, /без микрофона, score и evidence/);
  assert.equal(activities.some((item) => (item as { kind: string }).kind === 'recording'), false);
});

test('P5 L19 preserves present-for-future truth and recognition-only definite fog boundary', () => {
  assert.match(source, /Holnap Budapestre megyek/);
  assert.match(source, /Holnap Budapestre fogok menni/);
  assert.match(source, /не утверждает, что каждое будущее предложение требует fog/);
  assert.match(source, /порядок слов зависит от фокуса/);
  for (const form of ['fogom', 'fogod', 'fogja', 'fogjuk', 'fogjátok', 'fogják']) assert.match(source, new RegExp(form));
  assert.match(source, /не является условием прохождения L19/);
});

test('P5 L19 published Listening transcript and MP3 hash remain byte-identical', () => {
  const listening = activity('listening');
  assert.equal(listening.assetId, 'l19_listening_future');
  assert.equal(listening.audioStatus, 'published');
  assert.equal(listening.transcript, 'Tegnap Ádám otthon dolgozott. Ma a könyvtárban tanul. Holnap Budapestre fog utazni. A hétvégén pihenni fog. Szerinte vasárnap esni fog. Jövő héten a barátai is dolgozni fognak.');
  const bytes = readFileSync(new URL('../public/audio/l19_listening_future.mp3', import.meta.url));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), '8ff5642e9f61d6e26562020ee2e841c0e1d417657bd5e70b7db19633c3fe58b0');
  assert.equal(listeningEvidence(listening, 5, 5).evidenceMode, 'direct');
});

test('P5 L19 metadata is synchronized and no TTS/learner recording is introduced', () => {
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask|recordingCompleted|responseMode:\s*['"]recorded['"]/i);
  const meta = LESSONS_META.find((candidate) => candidate.id === 19);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_19.title);
  assert.equal(meta.description, LESSON_19.description);
});
