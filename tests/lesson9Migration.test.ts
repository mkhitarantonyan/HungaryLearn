import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

import { LESSONS_META } from '../src/data/lessons/index.ts';
import { LESSON_9 } from '../src/data/lessons/lesson9.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  describeExitCheckStatus,
  recordingCompletionEvidence,
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
  writingEvidence,
} from '../src/utils/activityUtils.ts';

const ACTIVITIES = LESSON_9.slides.flatMap((slide) => slide.activities ?? []);

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind
): Extract<LessonActivity, { kind: TKind }> {
  const activity = ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `Missing activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string): ActivityEvidence {
  return { activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' };
}

test('L9 preserves identity, objective IDs, quiz IDs, and narration slots', () => {
  assert.equal(LESSON_9.id, 9);
  assert.equal(LESSON_9.number, 9);
  assert.equal(LESSON_9.level, 'A1');
  assert.equal(LESSON_9.slidesCount, 11);
  assert.deepEqual(LESSON_9.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.deepEqual(LESSON_9.objectives?.map((objective) => objective.id), [
    'l9_use-adjectives',
    'l9_form-comparative',
    'l9_form-superlative',
    'l9_use-mint',
    'l9_compare-people',
  ]);
  assert.deepEqual(LESSON_9.quiz?.map((question) => question.id), [901, 902, 903, 904, 905, 906]);
  for (let slide = 1; slide <= 11; slide += 1) {
    assert.equal(existsSync(new URL(`../public/audio/9.${slide}.mp3`, import.meta.url)), true);
  }
});

test('L9 has exactly the approved seven-activity graph', () => {
  assert.equal(ACTIVITIES.length, 7);
  assert.equal(new Set(ACTIVITIES.map((activity) => activity.id)).size, 7);
  assert.deepEqual(ACTIVITIES.map((activity) => activity.id), [
    'l9-cp-attributive-adjectives',
    'l9-cp-comparative-forms',
    'l9-cp-mint-comparisons',
    'l9-cp-superlative-forms',
    'l9-record-comparison',
    'l9-writing-comparison',
    'l9-exit-check',
  ]);
  assert.deepEqual(
    Object.fromEntries(['controlledPractice', 'writing', 'recording', 'exitCheck'].map((kind) => [
      kind,
      ACTIVITIES.filter((activity) => activity.kind === kind).length,
    ])),
    { controlledPractice: 4, writing: 1, recording: 1, exitCheck: 1 }
  );
  assert.equal(ACTIVITIES.some((activity) => activity.kind === 'reading' || activity.kind === 'listening'), false);
  assert.deepEqual(ACTIVITIES.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(ACTIVITIES), []);

  const exit = findActivity('l9-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_9.objectives?.map((objective) => objective.id));
  assert.equal(new Set(exit.checks.map((check) => check.objectiveId)).size, 5);
  assert.deepEqual(validateExitCheckReferences(
    exit,
    LESSON_9.objectives?.map((objective) => objective.id) ?? [],
    ACTIVITIES.map((activity) => activity.id)
  ), []);
});

test('L9 direct form practice has the approved thresholds and exact core answers', () => {
  const expected = {
    'l9-cp-attributive-adjectives': {
      length: 6,
      passCount: 5,
      answers: ['nagy házak', 'nagy házat', 'új könyv', 'piros autók', 'drága kávét', 'szép városok'],
    },
    'l9-cp-comparative-forms': {
      length: 10,
      passCount: 8,
      answers: ['nagyobb', 'kisebb', 'szebb', 'jobb', 'drágább', 'olcsóbb', 'újabb', 'gyorsabb', 'lassabb', 'nehezebb'],
    },
    'l9-cp-mint-comparisons': {
      length: 5,
      passCount: 4,
      answers: [
        'Ez a ház nagyobb, mint az a ház.',
        'A kávé jobb, mint a tea.',
        'A vonat gyorsabb, mint a busz.',
        'Ez a kabát olcsóbb, mint a fekete kabát.',
        'A magyar nyelv nehezebb, mint az angol.',
      ],
    },
    'l9-cp-superlative-forms': {
      length: 6,
      passCount: 5,
      answers: ['legnagyobb', 'legkisebb', 'legszebb', 'legjobb', 'legdrágább', 'legolcsóbb'],
    },
  } as const;

  for (const [id, specification] of Object.entries(expected)) {
    const activity = findActivity(id, 'controlledPractice');
    assert.equal(activity.exercises.length, specification.length);
    assert.equal(activity.passCount, specification.passCount);
    assert.deepEqual(activity.exercises.map((exercise) => {
      if (exercise.kind === 'singleChoice') return exercise.options[exercise.correctIndex];
      return exercise.accept[0];
    }), specification.answers);
  }
});

test('L9 productive tasks require connected comparison and remain review evidence', () => {
  const writing = findActivity('l9-writing-comparison', 'writing');
  const recording = findActivity('l9-record-comparison', 'recording');
  assert.ok(writing.prompt);
  assert.match(writing.prompt, /3–5.*минимум две сравнительные.*mint/s);
  assert.equal(writing.modelAnswer?.length, 4);
  assert.equal(writing.rubric?.length, 3);
  assert.ok(recording.instructions);
  assert.match(recording.instructions, /PARTIAL evidence/);
  assert.match(recording.targetText ?? '', /szebb.*mint.*olcsóbb.*legjobb/s);
  assert.equal(recording.rubric?.length, 3);

  const writingScore = writingEvidence(writing.modelAnswer?.join(' ') ?? '', true);
  assert.equal(writingScore.evidenceMode, 'partial');
  assert.equal(writingScore.completed, true);
  assert.equal(writingScore.passed, false);
  assert.deepEqual(recordingCompletionEvidence(recording.id), {
    activityId: recording.id,
    attempted: true,
    completed: true,
    passed: false,
    evidenceMode: 'partial',
    recordingCompleted: true,
  });
});

test('L9 ExitCheck resolves three DIRECT goals and two PARTIAL productive goals', () => {
  const exit = findActivity('l9-exit-check', 'exitCheck');
  const writing = writingEvidence('A kék kabát szebb, mint a piros kabát. A kék kabát olcsóbb is.', true);
  const evidence: Record<string, ActivityEvidence> = {
    'l9-cp-attributive-adjectives': directEvidence('l9-cp-attributive-adjectives'),
    'l9-cp-comparative-forms': directEvidence('l9-cp-comparative-forms'),
    'l9-cp-superlative-forms': directEvidence('l9-cp-superlative-forms'),
    'l9-cp-mint-comparisons': directEvidence('l9-cp-mint-comparisons'),
    'l9-writing-comparison': {
      activityId: 'l9-writing-comparison', attempted: true, selfReviewed: true, ...writing,
    },
    'l9-record-comparison': recordingCompletionEvidence('l9-record-comparison'),
  };
  const statuses = Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ]));
  assert.deepEqual(statuses, {
    'l9_use-adjectives': 'direct-met',
    'l9_form-comparative': 'direct-met',
    'l9_form-superlative': 'direct-met',
    'l9_use-mint': 'partial-review',
    'l9_compare-people': 'partial-review',
  });
});

test('predicate-adjective plural is optional recognition only and excluded from scoring', () => {
  const optionalSlide = LESSON_9.slides.find((slide) => slide.id === 10);
  assert.ok(optionalSlide);
  assert.ok(optionalSlide.subtitle);
  assert.ok(optionalSlide.body);
  assert.match(optionalSlide.subtitle, /Необязательное/);
  assert.match(optionalSlide.body, /только для распознавания/);
  assert.match(optionalSlide.body, /A házak nagyok/);
  assert.equal(optionalSlide.activities, undefined);
  assert.doesNotMatch(JSON.stringify(ACTIVITIES), /A házak nagyok|nagyok/);
  assert.doesNotMatch(JSON.stringify(LESSON_9.quiz), /A házak nagyok|nagyok/);
});

test('L9 language and quiz cleanup keep morphology bounded and questions objective-linked', () => {
  const source = readFileSync(new URL('../src/data/lessons/lesson9.ts', import.meta.url), 'utf8');
  assert.match(source, /kicsi<\/b> тоже возможна перед существительным/);
  assert.match(source, /vörösbor.*vöröshagyma.*не универсальное различие оттенков/s);
  assert.match(source, /régi.*régibb.*régebbi.*не проверяется как единственный точный ответ/s);
  assert.doesNotMatch(source, /Единственное «неправильное»|Всё остальное регулярно|глубокого\/благородного красного/);
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|SpeechSynthesisUtterance|getVoices|voiceschanged|browser TTS/i);
  assert.ok((LESSON_9.vocabulary ?? []).every((item) => item.ipa === undefined));

  for (const question of LESSON_9.quiz ?? []) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
    assert.doesNotMatch(question.question, /урок|lesson/i);
  }
  assert.equal(LESSON_9.quiz?.find((question) => question.id === 905)?.options[1], 'Ez a vonat gyorsabb, mint a busz.');
  assert.equal(LESSON_9.quiz?.find((question) => question.id === 906)?.options[2], 'legolcsóbb');
});

test('L9 metadata is exact and frozen L15 remains byte-for-byte unchanged', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 9);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_9.title);
  assert.equal(meta.subtitle, LESSON_9.subtitle);
  assert.equal(meta.description, LESSON_9.description);
  assert.equal(meta.level, LESSON_9.level);
  assert.equal(meta.slidesCount, LESSON_9.slidesCount);
  assert.equal(
    sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)),
    '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586'
  );
});
