import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_7 } from '../src/data/lessons/lesson7.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
  recordingCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
} from '../src/utils/activityUtils.ts';

const L7_ACTIVITIES = LESSON_7.slides.flatMap((slide) => slide.activities ?? []);

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind
): Extract<LessonActivity, { kind: TKind }> {
  const activity = L7_ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing L7 activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string): ActivityEvidence {
  return { activityId, attempted: true, completed: true, evidenceMode: 'direct', passed: true };
}

test('L7 preserves identity, slide/narration IDs, objective IDs, and quiz IDs', () => {
  assert.equal(LESSON_7.id, 7);
  assert.equal(LESSON_7.number, 7);
  assert.equal(LESSON_7.level, 'A1');
  assert.equal(LESSON_7.slidesCount, 11);
  assert.deepEqual(LESSON_7.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.deepEqual(LESSON_7.objectives?.map((objective) => objective.id), [
    'l7_form-accusative',
    'l7_use-accusative-object',
    'l7_distinguish-nom-acc',
    'l7_listen-accusative',
    'l7_translate-acc',
  ]);
  assert.deepEqual(LESSON_7.quiz?.map((question) => question.id), [701, 702, 703, 704, 705, 706]);
  for (const slide of LESSON_7.slides) {
    assert.equal(existsSync(new URL(`../public/audio/7.${slide.id}.mp3`, import.meta.url)), true);
  }
});

test('L7 has seven unique, structurally valid generic activities and resolvable evidence references', () => {
  assert.equal(L7_ACTIVITIES.length, 7);
  assert.deepEqual(
    L7_ACTIVITIES.map((activity) => activity.kind).sort(),
    ['controlledPractice', 'controlledPractice', 'controlledPractice', 'exitCheck', 'listening', 'reading', 'recording'].sort()
  );
  assert.equal(new Set(L7_ACTIVITIES.map((activity) => activity.id)).size, L7_ACTIVITIES.length);
  for (const activity of L7_ACTIVITIES) {
    assert.deepEqual(validateActivity(activity), []);
  }
  assert.deepEqual(validateLessonQuestionIds(L7_ACTIVITIES), []);

  const exit = findActivity('l7-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_7.objectives?.map((objective) => objective.id));
  assert.deepEqual(validateExitCheckReferences(
    exit,
    LESSON_7.objectives?.map((objective) => objective.id) ?? [],
    L7_ACTIVITIES.map((activity) => activity.id)
  ), []);
});

test('formation teaching is beginner-safe and the exact practice covers ten frequent forms', () => {
  const lessonText = LESSON_7.slides.map((slide) => slide.body ?? '').join('\n');
  assert.match(lessonText, /частично лексический/);
  assert.doesNotMatch(lessonText, /мягк(?:ий|ого) согласн/i);
  for (const pair of ['autó → autót', 'alma → almát', 'kert → kertet', 'könyv — könyvet', 'ház — házat']) {
    assert.match(lessonText, new RegExp(pair));
  }

  const forms = findActivity('l7-cp-accusative-forms', 'controlledPractice');
  assert.equal(forms.exercises.length, 10);
  assert.equal(forms.passCount, 8);
  assert.ok(forms.exercises.every((exercise) => exercise.kind === 'textInput'));
  assert.deepEqual(
    forms.exercises.map((exercise) => 'accept' in exercise ? exercise.accept[0] : ''),
    ['autót', 'almát', 'kertet', 'könyvet', 'házat', 'asztalt', 'széket', 'embert', 'táskát', 'kávét']
  );
});

test('Q703 and all learner-facing “I see you” evidence use Látlak', () => {
  const q703 = LESSON_7.quiz?.find((question) => question.id === 703);
  assert.ok(q703);
  assert.equal(q703.options[q703.correctIndex], 'Látlak.');
  assert.match(q703.explanation, /Látlak téged/);
  assert.doesNotMatch(JSON.stringify(LESSON_7), /Látom téged/);
  for (const question of LESSON_7.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
  }
});

test('reading directly checks nominative/accusative contrast and translation has five constrained inputs', () => {
  const reading = findActivity('l7-reading-bookshop', 'reading');
  assert.ok(reading.content);
  assert.equal(reading.content.type, 'prose');
  assert.equal(reading.questions.length, 5);
  assert.equal(reading.passCount, 4);
  assert.match(JSON.stringify(reading.content), /Az új könyv az asztalon van/);
  assert.match(reading.questions.map((question) => question.question).join(' '), /именительном|дополнением/);

  const translation = findActivity('l7-cp-translation', 'controlledPractice');
  assert.equal(translation.exercises.length, 5);
  assert.equal(translation.passCount, 4);
  assert.ok(translation.exercises.every((exercise) => exercise.kind === 'textInput'));
  assert.match(JSON.stringify(translation), /Látlak/);
});

test('missing L7 listening asset remains NONE and lesson data contains no TTS fallback reference', () => {
  const listening = findActivity('l7-listening-accusative', 'listening');
  assert.equal(listening.assetId, 'l7_listening_accusative');
  assert.equal(listening.audioStatus, 'missing');
  assert.equal(existsSync(new URL('../public/audio/l7_listening_accusative.mp3', import.meta.url)), false);
  assert.deepEqual(listeningEvidence(listening, 5, 5), {
    passed: false,
    evidenceMode: 'none',
    score: 5,
    total: 5,
  });
  const lessonSource = readFileSync(new URL('../src/data/lessons/lesson7.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(lessonSource, /SpeechSynthesis|speechSynthesis|SpeechSynthesisUtterance|getVoices|voiceschanged|browser TTS/i);
});

test('L7 ExitCheck reports DIRECT, PARTIAL, and NONE without overclaiming', () => {
  const exit = findActivity('l7-exit-check', 'exitCheck');
  const listening = findActivity('l7-listening-accusative', 'listening');
  const listeningScore = listeningEvidence(listening, 5, 5);
  const evidence: Record<string, ActivityEvidence> = {
    'l7-cp-accusative-forms': directEvidence('l7-cp-accusative-forms'),
    'l7-cp-object-sentences': directEvidence('l7-cp-object-sentences'),
    'l7-record-object-sentences': recordingCompletionEvidence('l7-record-object-sentences'),
    'l7-reading-bookshop': directEvidence('l7-reading-bookshop'),
    'l7-listening-accusative': {
      activityId: 'l7-listening-accusative',
      attempted: true,
      completed: true,
      ...listeningScore,
    },
    'l7-cp-translation': directEvidence('l7-cp-translation'),
  };
  const statusByObjective = Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ]));
  assert.deepEqual(statusByObjective, {
    'l7_form-accusative': 'direct-met',
    'l7_use-accusative-object': 'partial-review',
    'l7_distinguish-nom-acc': 'direct-met',
    'l7_listen-accusative': 'none',
    'l7_translate-acc': 'direct-met',
  });
});

test('L7 catalog metadata matches the lesson and frozen L15 remains byte-for-byte unchanged', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 7);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_7.title);
  assert.equal(meta.subtitle, LESSON_7.subtitle);
  assert.equal(meta.description, LESSON_7.description);
  assert.equal(meta.level, LESSON_7.level);
  assert.equal(meta.slidesCount, LESSON_7.slidesCount);
  assert.equal(
    sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)),
    '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586'
  );
});
