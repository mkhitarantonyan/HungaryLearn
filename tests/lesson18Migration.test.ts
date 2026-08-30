import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { LESSON_18 } from '../src/data/lessons/lesson18.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
  rolePlayCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
  writingEvidence,
} from '../src/utils/activityUtils.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';

const activities = LESSON_18.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson18.ts', import.meta.url), 'utf8');
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });
const activity = <K extends LessonActivity['kind']>(kind: K) => {
  const found = activities.find((candidate) => candidate.kind === kind);
  assert.ok(found);
  return found as Extract<LessonActivity, { kind: K }>;
};

test('P5 L18 preserves IDs, quiz identity, objectives, and 11-slide course identity', () => {
  assert.deepEqual([LESSON_18.id, LESSON_18.number, LESSON_18.level, LESSON_18.slidesCount], [18, 18, 'A2', 11]);
  assert.deepEqual(LESSON_18.slides.map((slide) => slide.id), Array.from({ length: 11 }, (_, index) => index + 1));
  assert.deepEqual(LESSON_18.objectives?.map((objective) => objective.id), [
    'l18_form-infinitive', 'l18_use-modal-verbs', 'l18_express-necessity', 'l18_express-desire', 'l18_understand-modals',
  ]);
  assert.deepEqual(LESSON_18.quiz?.map((question) => question.id), [1801, 1802, 1803, 1804, 1805, 1806]);
});

test('P5 L18 follows communication sequence with valid unique activities', () => {
  assert.deepEqual(activities.map((item) => item.kind), ['controlledPractice', 'reading', 'listening', 'rolePlay', 'writing', 'exitCheck']);
  assert.equal(new Set(activities.map((item) => item.id)).size, activities.length);
  assert.deepEqual(activities.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = activity('exitCheck');
  const objectives = LESSON_18.objectives?.map((objective) => objective.id) ?? [];
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectives);
  assert.deepEqual(validateExitCheckReferences(exit, objectives, activities.map((item) => item.id)), []);
});

test('P5 L18 contextual modal practice covers five functional blocks at 11/14', () => {
  const controlled = activity('controlledPractice');
  assert.equal(controlled.exercises.length, 14);
  assert.equal(controlled.passCount, 11);
  const text = JSON.stringify(controlled.exercises);
  for (const marker of ['A ·', 'B ·', 'C ·', 'D ·', 'E ·', 'Tudok vezetni', 'nem szabad parkolni', 'Szeretnék időpontot kérni', 'El akarok']) {
    assert.ok(text.includes(marker), marker);
  }
});

test('P5 L18 reading is a connected 170–220-word workplace text with seven meaning questions', () => {
  const reading = activity('reading');
  assert.equal(reading.title, 'Az első nap egy új munkahelyen');
  assert.equal(reading.questions.length, 7);
  assert.equal(reading.passCount, 6);
  assert.ok(reading.content?.type === 'prose');
  const words = reading.content.paragraphs.join(' ').trim().split(/\s+/u).length;
  assert.ok(words >= 170 && words <= 220, `words=${words}`);
  assert.match(JSON.stringify(reading), /meg kell érkeznie|nem szabad|nem tud|szeretné megtanulni|kérdezhet/);
});

test('P5 L18 RolePlay practises rules and alternative arrangements without auto mastery', () => {
  const rolePlay = activity('rolePlay');
  assert.ok(rolePlay.turns.length >= 14);
  assert.ok(rolePlay.turns.filter((turn) => turn.speaker === 'learner').length >= 7);
  assert.ok(rolePlay.turns.filter((turn) => turn.responseMode === 'selfPractice').length >= 7);
  assert.match(JSON.stringify(rolePlay), /kell|lehet|szabad|tud/);
  assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode, 'partial');
  assert.equal(rolePlayCompletionEvidence(rolePlay.id).passed, false);
});

test('P5 L18 writing target is 80–100 words and optional speaking is non-evidentiary text-only practice', () => {
  const writing = activity('writing');
  assert.match(`${writing.prompt} ${writing.rubric.join(' ')}`, /80–100/);
  assert.match(writing.prompt, /не можешь|другое время|практический вопрос|вежливо/);
  assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial');
  const speaking = LESSON_18.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking;
  assert.ok(speaking);
  assert.match(speaking.instructions, /1\.5–2 минуты/);
  assert.match(speaking.instructions, /без записи и оценки/);
  assert.equal(activities.some((item) => (item as { kind: string }).kind === 'recording'), false);
});

test('P5 L18 published Listening contract and MP3 hash remain unchanged', () => {
  const listening = activity('listening');
  assert.equal(listening.assetId, 'l18_listening_modals');
  assert.equal(listening.audioStatus, 'published');
  assert.equal(listening.transcript, 'A: Ma este szeretnék moziba menni, de előbb dolgoznom kell. Holnap tudok veled találkozni.\nB: Jó. Lehet a parkban sétálni?\nA: Igen. Péter nem tud jönni, mert tanulnia kell. Anna otthon akar maradni.');
  const bytes = readFileSync(new URL('../public/audio/l18_listening_modals.mp3', import.meta.url));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), '317030dbf7b76393416c0cc6785f8e4bfd7f445688741ea1db1a6f2b9f8caec1');
  assert.equal(listeningEvidence(listening, 5, 5).evidenceMode, 'direct');
});

test('P5 L18 ExitCheck reports direct auto-checks and partial open production honestly', () => {
  const controlled = activity('controlledPractice');
  const reading = activity('reading');
  const listening = activity('listening');
  const rolePlay = activity('rolePlay');
  const writing = activity('writing');
  const evidence: Record<string, ActivityEvidence> = {
    [controlled.id]: direct(controlled.id), [reading.id]: direct(reading.id),
    [listening.id]: { activityId: listening.id, attempted: true, completed: true, ...listeningEvidence(listening, 5, 5) },
    [rolePlay.id]: rolePlayCompletionEvidence(rolePlay.id),
    [writing.id]: { activityId: writing.id, attempted: true, ...writingEvidence(writing.modelAnswer.join(' '), true) },
  };
  assert.deepEqual(activity('exitCheck').checks.map((check) => describeExitCheckStatus(check, evidence[check.activityId], evidence).kind),
    ['direct-met', 'partial-review', 'partial-review', 'partial-review', 'direct-met']);
});

test('P5 L18 keeps boundaries, metadata, and excludes browser TTS/learner recording', () => {
  assert.match(source, /правило не сводится к механическому «добавь -ni/);
  assert.match(source, /Lehet, hogy\.\.\..*другая конструкция/s);
  assert.match(source, /полная условная парадигма будет в L23/);
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask|recordingCompleted|responseMode:\s*['"]recorded['"]/i);
  const meta = LESSONS_META.find((candidate) => candidate.id === 18);
  assert.ok(meta);
  assert.equal(meta.description, LESSON_18.description);
});
