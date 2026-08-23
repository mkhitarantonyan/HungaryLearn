import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_10 } from '../src/data/lessons/lesson10.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  controlledEvidence,
  describeExitCheckStatus,
  listeningEvidence,
  recordingCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
} from '../src/utils/activityUtils.ts';

const L10_ACTIVITIES = LESSON_10.slides.flatMap((slide) => slide.activities ?? []);

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind
): Extract<LessonActivity, { kind: TKind }> {
  const activity = L10_ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing L10 activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string): ActivityEvidence {
  return { activityId, attempted: true, completed: true, evidenceMode: 'direct', passed: true };
}

test('L10 preserves identity, narration IDs, five objective IDs, and quiz IDs', () => {
  assert.equal(LESSON_10.id, 10);
  assert.equal(LESSON_10.number, 10);
  assert.equal(LESSON_10.level, 'A1');
  assert.equal(LESSON_10.slidesCount, 11);
  assert.deepEqual(LESSON_10.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.deepEqual(LESSON_10.objectives?.map((objective) => objective.id), [
    'l10_distinguish-inner-cases',
    'l10_form-inessive',
    'l10_form-illative',
    'l10_form-elative',
    'l10_use-inner-cases',
  ]);
  assert.deepEqual(LESSON_10.quiz?.map((question) => question.id), [1001, 1002, 1003, 1004, 1005, 1006]);
  for (const slide of LESSON_10.slides) {
    assert.equal(existsSync(new URL(`../public/audio/10.${slide.id}.mp3`, import.meta.url)), true);
  }
});

test('L10 uses ten unique, structurally valid generic activities with a resolvable ExitCheck', () => {
  assert.equal(L10_ACTIVITIES.length, 10);
  assert.deepEqual(
    L10_ACTIVITIES.map((activity) => activity.kind).sort(),
    [
      'controlledPractice',
      'controlledPractice',
      'controlledPractice',
      'controlledPractice',
      'controlledPractice',
      'controlledPractice',
      'exitCheck',
      'listening',
      'reading',
      'recording',
    ].sort()
  );
  assert.equal(new Set(L10_ACTIVITIES.map((activity) => activity.id)).size, L10_ACTIVITIES.length);
  for (const activity of L10_ACTIVITIES) {
    assert.deepEqual(validateActivity(activity), []);
  }
  assert.deepEqual(validateLessonQuestionIds(L10_ACTIVITIES), []);

  const exit = findActivity('l10-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_10.objectives?.map((objective) => objective.id));
  assert.deepEqual(validateExitCheckReferences(
    exit,
    LESSON_10.objectives?.map((objective) => objective.id) ?? [],
    L10_ACTIVITIES.map((activity) => activity.id)
  ), []);
});

test('Hol/Hová/Honnan meaning practice is direct and context-driven', () => {
  const meaning = findActivity('l10-cp-meaning', 'controlledPractice');
  assert.equal(meaning.exercises.length, 10);
  assert.equal(meaning.passCount, 8);
  const answerOptions = meaning.exercises.flatMap((exercise) =>
    exercise.kind === 'singleChoice' ? exercise.options : [],
  );
  for (const questionWord of ['Hol?', 'Hová?', 'Honnan?']) {
    assert.ok(answerOptions.includes(questionWord), `missing ${questionWord} answer option`);
  }
  assert.deepEqual(controlledEvidence(true, 8, 10, 8), {
    completed: true,
    passed: true,
    evidenceMode: 'direct',
    score: 8,
    total: 10,
  });
});

test('each inner-case form objective has six exact inputs and a 5/6 DIRECT threshold', () => {
  const expected = {
    'l10-cp-inessive': ['házban', 'szobában', 'kertben', 'épületben', 'boltban', 'iskolában'],
    'l10-cp-illative': ['házba', 'szobába', 'kertbe', 'épületbe', 'boltba', 'iskolába'],
    'l10-cp-elative': ['házból', 'szobából', 'kertből', 'épületből', 'boltból', 'iskolából'],
  };
  for (const [id, answers] of Object.entries(expected)) {
    const activity = findActivity(id, 'controlledPractice');
    assert.equal(activity.exercises.length, 6);
    assert.equal(activity.passCount, 5);
    assert.ok(activity.exercises.every((exercise) => exercise.kind === 'textInput'));
    assert.deepEqual(
      activity.exercises.map((exercise) => 'accept' in exercise ? exercise.accept[0] : ''),
      answers
    );
    assert.equal(controlledEvidence(true, 5, 6, 5).evidenceMode, 'direct');
    assert.equal(controlledEvidence(true, 5, 6, 5).passed, true);
  }
});

test('context practice and ReadingTask test spatial relations rather than suffix spotting', () => {
  const context = findActivity('l10-cp-context', 'controlledPractice');
  assert.equal(context.exercises.length, 6);
  assert.equal(context.passCount, 5);
  assert.match(context.exercises.map((exercise) => exercise.prompt).join(' '), /внутри|входит|выходит/);

  const reading = findActivity('l10-reading-dialogue', 'reading');
  assert.ok(reading.content);
  assert.equal(reading.content.type, 'prose');
  assert.equal(reading.questions.length, 5);
  assert.equal(reading.passCount, 4);
  assert.match(reading.questions.map((question) => question.question).join(' '), /Где|Куда|Откуда/);
  assert.doesNotMatch(reading.instructions ?? '', /найди.*суффикс/i);
});

test('missing assessment MP3 stays NONE and narration is never substituted', () => {
  const listening = findActivity('l10-listening-inner-locations', 'listening');
  assert.equal(listening.assetId, 'l10_listening_inner_locations');
  assert.equal(listening.audioStatus, 'missing');
  assert.equal(existsSync(new URL('../public/audio/l10_listening_inner_locations.mp3', import.meta.url)), false);
  assert.deepEqual(listeningEvidence(listening, 5, 5), {
    passed: false,
    evidenceMode: 'none',
    score: 5,
    total: 5,
  });
  const source = readFileSync(new URL('../src/data/lessons/lesson10.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|SpeechSynthesisUtterance|getVoices|voiceschanged|browser TTS/i);
});

test('use-inner-cases remains overall PARTIAL with direct writing, missing listening, and recorded speech', () => {
  const exit = findActivity('l10-exit-check', 'exitCheck');
  const listening = findActivity('l10-listening-inner-locations', 'listening');
  const listeningScore = listeningEvidence(listening, 5, 5);
  const evidence: Record<string, ActivityEvidence> = {
    'l10-cp-meaning': directEvidence('l10-cp-meaning'),
    'l10-cp-inessive': directEvidence('l10-cp-inessive'),
    'l10-cp-illative': directEvidence('l10-cp-illative'),
    'l10-cp-elative': directEvidence('l10-cp-elative'),
    'l10-cp-context-writing': directEvidence('l10-cp-context-writing'),
    'l10-listening-inner-locations': {
      activityId: 'l10-listening-inner-locations',
      attempted: true,
      completed: true,
      ...listeningScore,
    },
    'l10-record-inner-locations': recordingCompletionEvidence('l10-record-inner-locations'),
  };
  const statuses = Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ]));
  assert.deepEqual(statuses, {
    'l10_distinguish-inner-cases': 'direct-met',
    'l10_form-inessive': 'direct-met',
    'l10_form-illative': 'direct-met',
    'l10_form-elative': 'direct-met',
    'l10_use-inner-cases': 'partial-review',
  });
});

test('Q1005 is unambiguous, Q1006 is objective-linked, and quiz keys are unique', () => {
  const q1005 = LESSON_10.quiz?.find((question) => question.id === 1005);
  const q1006 = LESSON_10.quiz?.find((question) => question.id === 1006);
  assert.ok(q1005);
  assert.ok(q1006);
  assert.equal(q1005.options[q1005.correctIndex], 'Péter az iskolában tanul.');
  assert.match(q1005.question, /находится внутри школы/);
  assert.equal(q1006.options[q1006.correctIndex], 'épületből');
  assert.doesNotMatch(q1006.question, /урок|lesson/i);
  for (const question of LESSON_10.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
});

test('language cleanup removes the false motion rule, Cyrillic typo, stale export, IPA, and later-case teaching', () => {
  const source = readFileSync(new URL('../src/data/lessons/lesson10.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /Кérsz|LESSON_8_3/);
  assert.doesNotMatch(source, /глагол движения[^<]*(требует|нужен)|Если[^<]*глагол движения/i);
  assert.match(source, /A boltban megyek/);
  assert.match(source, /тоже может быть грамматически правильно/);
  assert.doesNotMatch(source, /-n\s*\/\s*-on|-on\s*\/\s*-en|-ra\s*\/\s*-re|-ról\s*\/\s*-ről|-nál\s*\/\s*-nél|-hoz\s*\/\s*-hez|-tól\s*\/\s*-től/);
  assert.ok((LESSON_10.vocabulary ?? []).every((item) => item.ipa === undefined));
});

test('L10 metadata is exact and frozen L15 remains byte-for-byte unchanged', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 10);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_10.title);
  assert.equal(meta.subtitle, LESSON_10.subtitle);
  assert.equal(meta.description, LESSON_10.description);
  assert.equal(meta.level, LESSON_10.level);
  assert.equal(meta.slidesCount, LESSON_10.slidesCount);
  assert.equal(
    sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)),
    '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586'
  );
});
