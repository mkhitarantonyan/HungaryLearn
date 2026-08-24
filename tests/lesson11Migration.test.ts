import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_10 } from '../src/data/lessons/lesson10.ts';
import { LESSON_11 } from '../src/data/lessons/lesson11.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  controlledEvidence,
  describeExitCheckStatus,
  recordingCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
} from '../src/utils/activityUtils.ts';

const L11_ACTIVITIES = LESSON_11.slides.flatMap((slide) => slide.activities ?? []);

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind,
): Extract<LessonActivity, { kind: TKind }> {
  const activity = L11_ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing L11 activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string): ActivityEvidence {
  return { activityId, attempted: true, completed: true, evidenceMode: 'direct', passed: true };
}

test('L11 preserves identity, narration IDs, objective IDs, and quiz IDs', () => {
  assert.equal(LESSON_11.id, 11);
  assert.equal(LESSON_11.number, 11);
  assert.equal(LESSON_11.level, 'A1');
  assert.equal(LESSON_11.slidesCount, 11);
  assert.deepEqual(LESSON_11.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.deepEqual(LESSON_11.objectives?.map((objective) => objective.id), [
    'l11_distinguish-surface-cases',
    'l11_form-superessive',
    'l11_form-sublative',
    'l11_form-delative',
    'l11_use-surface-cases',
  ]);
  assert.deepEqual(LESSON_11.quiz?.map((question) => question.id), [1101, 1102, 1103, 1104, 1105, 1106]);
  for (const slide of LESSON_11.slides) {
    assert.equal(existsSync(new URL(`../public/audio/11.${slide.id}.mp3`, import.meta.url)), true);
  }
});

test('L11 uses nine unique generic activities and a complete ExitCheck', () => {
  assert.equal(L11_ACTIVITIES.length, 9);
  assert.deepEqual(
    L11_ACTIVITIES.map((activity) => activity.kind).sort(),
    [
      'controlledPractice',
      'controlledPractice',
      'controlledPractice',
      'controlledPractice',
      'controlledPractice',
      'controlledPractice',
      'exitCheck',
      'reading',
      'recording',
    ].sort(),
  );
  assert.equal(new Set(L11_ACTIVITIES.map((activity) => activity.id)).size, L11_ACTIVITIES.length);
  for (const activity of L11_ACTIVITIES) assert.deepEqual(validateActivity(activity), []);
  assert.deepEqual(validateLessonQuestionIds(L11_ACTIVITIES), []);

  const exit = findActivity('l11-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_11.objectives?.map((objective) => objective.id));
  assert.deepEqual(validateExitCheckReferences(
    exit,
    LESSON_11.objectives?.map((objective) => objective.id) ?? [],
    L11_ACTIVITIES.map((activity) => activity.id),
  ), []);
});

test('meaning and family contrast reuse the L10 interaction model with DIRECT evidence', () => {
  const meaning = findActivity('l11-cp-meaning-family', 'controlledPractice');
  assert.equal(meaning.exercises.length, 10);
  assert.equal(meaning.passCount, 8);
  const text = JSON.stringify(meaning.exercises);
  assert.match(text, /Hol\?/);
  assert.match(text, /Hová\?/);
  assert.match(text, /Honnan\?/);
  assert.match(text, /внутренняя/);
  assert.match(text, /поверхностная\/конвенциональная/);
  assert.deepEqual(controlledEvidence(true, 8, 10, 8), {
    completed: true,
    passed: true,
    evidenceMode: 'direct',
    score: 8,
    total: 10,
  });
});

test('each surface form objective has six exact inputs and a 5/6 DIRECT threshold', () => {
  const expected = {
    'l11-cp-superessive': ['asztalon', 'széken', 'bőröndön', 'utcán', 'Budapesten', 'Magyarországon'],
    'l11-cp-sublative': ['asztalra', 'székre', 'bőröndre', 'utcára', 'Budapestre', 'Magyarországra'],
    'l11-cp-delative': ['asztalról', 'székről', 'bőröndről', 'utcáról', 'Budapestről', 'Magyarországról'],
  };
  for (const [id, answers] of Object.entries(expected)) {
    const activity = findActivity(id, 'controlledPractice');
    assert.equal(activity.exercises.length, 6);
    assert.equal(activity.passCount, 5);
    assert.ok(activity.exercises.every((exercise) => exercise.kind === 'textInput'));
    assert.deepEqual(
      activity.exercises.map((exercise) => 'accept' in exercise ? exercise.accept[0] : ''),
      answers,
    );
    assert.equal(controlledEvidence(true, 5, 6, 5).passed, true);
    assert.equal(controlledEvidence(true, 5, 6, 5).evidenceMode, 'direct');
  }
});

test('context, geography, reading, and constrained writing test meaning rather than suffix spotting', () => {
  const context = findActivity('l11-cp-context-selection', 'controlledPractice');
  assert.equal(context.exercises.length, 8);
  assert.equal(context.passCount, 7);
  assert.match(context.exercises.map((exercise) => exercise.prompt).join(' '), /лежит|кладу|снимаю|живёт|едем|приезжает/);

  const reading = findActivity('l11-reading-budapest-route', 'reading');
  const readingContent = reading.content;
  assert.ok(readingContent);
  assert.equal(readingContent.type, 'prose');
  if (readingContent.type !== 'prose') assert.fail('L11 reading content must be prose');
  assert.equal(reading.questions.length, 5);
  assert.equal(reading.passCount, 4);
  assert.match(readingContent.paragraphs.join(' '), /Péter és Anna.*utaznak haza/);
  assert.match(reading.questions.map((question) => question.question).join(' '), /Куда|Откуда|Где/);
  assert.doesNotMatch(reading.instructions ?? '', /найди.*суффикс/i);

  const writing = findActivity('l11-cp-context-writing', 'controlledPractice');
  assert.equal(writing.exercises.length, 5);
  assert.equal(writing.passCount, 4);
  assert.ok(writing.exercises.every((exercise) => exercise.kind === 'textInput'));
});

test('ExitCheck makes four objectives DIRECT and keeps use-surface-cases PARTIAL', () => {
  const exit = findActivity('l11-exit-check', 'exitCheck');
  const evidence: Record<string, ActivityEvidence> = {
    'l11-cp-meaning-family': directEvidence('l11-cp-meaning-family'),
    'l11-cp-superessive': directEvidence('l11-cp-superessive'),
    'l11-cp-sublative': directEvidence('l11-cp-sublative'),
    'l11-cp-delative': directEvidence('l11-cp-delative'),
    'l11-cp-context-writing': directEvidence('l11-cp-context-writing'),
    'l11-record-surface-locations': recordingCompletionEvidence('l11-record-surface-locations'),
  };
  const statuses = Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ]));
  assert.deepEqual(statuses, {
    'l11_distinguish-surface-cases': 'direct-met',
    'l11_form-superessive': 'direct-met',
    'l11_form-sublative': 'direct-met',
    'l11_form-delative': 'direct-met',
    'l11_use-surface-cases': 'partial-review',
  });
});

test('L11 adds no listening assessment, synthesized fallback, IPA, or out-of-scope teaching', () => {
  assert.equal(L11_ACTIVITIES.some((activity) => activity.kind === 'listening'), false);
  const source = readFileSync(new URL('../src/data/lessons/lesson11.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|SpeechSynthesisUtterance|getVoices|voiceschanged|browser TTS/i);
  assert.doesNotMatch(source, /\bHova\?/);
  assert.doesNotMatch(source, /ipa\s*:/);
  assert.doesNotMatch(source, /Puszta|открыт(?:ая|ые).*поверх|исторически.*восприним/i);
  assert.doesNotMatch(source, /на Венгрии|на Будапеште/);
  assert.doesNotMatch(source, /hétfőre|Magyarországról beszélünk/);
  assert.doesNotMatch(source, /-nál\/-nél|-hoz\/-hez\/-höz|-tól\/-től|postposition|послелог/i);
  assert.ok((LESSON_11.vocabulary ?? []).every((item) => item.ipa === undefined && !/[А-Яа-яЁё]/.test(item.hu)));

  const foterRule = source.split('\n').find((line) => line.includes('<b>-en</b>') && line.includes('főtéren'));
  assert.ok(foterRule);
  assert.doesNotMatch(foterRule, /<b>-n<\/b>/);
});

test('Q1101–Q1106 are language retrieval with one intended answer and no false claims', () => {
  const quiz = LESSON_11.quiz ?? [];
  for (const question of quiz) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
  assert.equal(quiz.find((question) => question.id === 1101)?.options[0], 'asztalon');
  assert.match(quiz.find((question) => question.id === 1102)?.explanation ?? '', /Hová\?/);
  assert.doesNotMatch(quiz.find((question) => question.id === 1103)?.explanation ?? '', /не существует/i);
  assert.equal(quiz.find((question) => question.id === 1104)?.options[0], 'Péter Budapestre utazik.');
  assert.doesNotMatch(JSON.stringify(quiz.find((question) => question.id === 1104)), /истор|открыт|Puszta/i);
  assert.match(quiz.find((question) => question.id === 1105)?.explanation ?? '', /грамматичен.*другую ситуацию/);
  assert.doesNotMatch(quiz.find((question) => question.id === 1106)?.question ?? '', /урок|lesson/i);
});

test('L11 metadata matches while migrated L10 and frozen L15 remain unchanged', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 11);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_11.title);
  assert.equal(meta.subtitle, LESSON_11.subtitle);
  assert.equal(meta.description, LESSON_11.description);
  assert.equal(meta.level, LESSON_11.level);
  assert.equal(meta.slidesCount, LESSON_11.slidesCount);
  assert.equal(LESSON_10.id, 10);
  assert.equal(sha256(new URL('../src/data/lessons/lesson10.ts', import.meta.url)), 'D57C22E3D7DE3D307AFF59646952D9A4C643F877CE31B98206C84D6B8C145045');
  assert.equal(sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), 'A7A143F7E0D5B029D3F1788868A839516D2C1C373BF7EE31C36C91DCCA15ED85');
});
