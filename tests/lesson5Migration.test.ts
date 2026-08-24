import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LESSON_2 } from '../src/data/lessons/lesson2.ts';
import { LESSON_4 } from '../src/data/lessons/lesson4.ts';
import { LESSON_5, L5_LISTENING_TRANSCRIPT } from '../src/data/lessons/lesson5.ts';
import { LESSON_15 } from '../src/data/lessons/lesson15.ts';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import {
  describeExitCheckStatus,
  clearActivityEvidence,
  isListeningQuestionAnswerCorrect,
  listeningEvidence,
  rolePlayCompletionEvidence,
  validateActivity,
  validateLessonQuestionIds,
} from '../src/utils/activityUtils.ts';
import {
  QuestionSet,
  TextInputQuestionFeedback,
} from '../src/components/activities/QuestionSet.tsx';

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

const L5_ACTIVITIES = LESSON_5.slides.flatMap((slide) => slide.activities ?? []);

function findActivity<TKind extends LessonActivity['kind']>(
  id: string,
  kind: TKind
): Extract<LessonActivity, { kind: TKind }> {
  const activity = L5_ACTIVITIES.find((candidate) => candidate.id === id);
  assert.ok(activity, `missing activity ${id}`);
  assert.equal(activity.kind, kind);
  return activity as Extract<LessonActivity, { kind: TKind }>;
}

function directEvidence(activityId: string, passed = true): ActivityEvidence {
  return {
    activityId,
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed,
  };
}

test('L5 identity, physical slide IDs, objectives, and quiz IDs stay frozen', () => {
  assert.equal(LESSON_5.id, 5);
  assert.equal(LESSON_5.number, 5);
  assert.equal(LESSON_5.level, 'A0');
  assert.equal(LESSON_5.slidesCount, 12);
  assert.deepEqual(LESSON_5.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  assert.deepEqual(LESSON_5.objectives?.map((objective) => objective.id), [
    'l5_count-1-100',
    'l5_tell-time',
    'l5_name-days',
    'l5_write-numbers',
    'l5_use-time-in-speech',
  ]);
  assert.deepEqual(LESSON_5.quiz?.map((question) => question.id), [501, 502, 503, 504, 505, 506]);
});

test('curriculum remains exactly 139 objectives', async () => {
  let objectiveCount = 0;
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.id);
    objectiveCount += lesson?.objectives?.length ?? 0;
  }
  assert.equal(objectiveCount, 139);
});

test('L2, L3, L4, and L15 approved lesson modules remain byte-for-byte frozen', () => {
  assert.equal(sha256(new URL('../src/data/lessons/lesson2.ts', import.meta.url)), '67DA2EB242DA8ABFC63513CF5F55D2DFEE15332D38BC842F9B38C070F95AB6F0');
  assert.equal(sha256(new URL('../src/data/lessons/lesson3.ts', import.meta.url)), 'D49F879B23FD7DF22E51340AB98ABF35E9BB658C881DFCFD429C184DBFC6124C');
  assert.equal(sha256(new URL('../src/data/lessons/lesson4.ts', import.meta.url)), 'A1B0A9AB5CD01BA2AB7253B29FB42D7FA5E9490349170EB7CC5A5FF315A3009C');
  assert.equal(sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), 'A7A143F7E0D5B029D3F1788868A839516D2C1C373BF7EE31C36C91DCCA15ED85');
});

test('L1 migration is present while frozen planning/translation files stay unchanged', async () => {
  const lesson1 = await loadLesson(1);
  assert.ok(lesson1);
  assert.equal(lesson1.slides.some((slide) => (slide.activities?.length ?? 0) > 0), true);
  assert.equal(sha256(new URL('../docs/LESSON_MIGRATION_MATRIX.md', import.meta.url)), '59F6519EEEE5EF4D48978DC0409145F2DC35CF59787AC05B00E31AC36BF91DDE');
  assert.equal(sha256(new URL('../docs/CURRICULUM_BLUEPRINT.md', import.meta.url)), '55936516561233D3D1AEC5E6D1EF21F32750A8B533AA470D098481743E39D923');
  assert.equal(sha256(new URL('../docs/MODEL_LESSON_L15_SPEC.md', import.meta.url)), '5235B352C368ECD97FBB78C5C4B5CB35515FD41763409ABC588F33A216B5154D');
  assert.equal(sha256(new URL('../src/data/lessonTranslations.ts', import.meta.url)), '3A3B8155BDB0CA11D0EB04031E9F7E83E79CDA73902EE96C77B31EB0FC76900D');
});

test('L5 supplies every required activity kind and every activity validates', () => {
  assert.ok(L5_ACTIVITIES.some((activity) => activity.kind === 'reading'));
  assert.equal(L5_ACTIVITIES.filter((activity) => activity.kind === 'listening').length, 2);
  assert.ok(L5_ACTIVITIES.some((activity) => activity.kind === 'controlledPractice'));
  assert.ok(L5_ACTIVITIES.some((activity) => activity.kind === 'rolePlay'));
  assert.ok(L5_ACTIVITIES.some((activity) => activity.kind === 'writing'));
  assert.ok(L5_ACTIVITIES.some((activity) => activity.kind === 'exitCheck'));
  assert.deepEqual(L5_ACTIVITIES.flatMap(validateActivity), []);
  assert.deepEqual(validateLessonQuestionIds(L5_ACTIVITIES), []);
});

test('generic listening exact-entry support contains no L5 branch', () => {
  for (const relativePath of [
    '../src/types.ts',
    '../src/components/activities/QuestionSet.tsx',
    '../src/components/activities/ListeningTask.tsx',
    '../src/utils/activityUtils.ts',
  ]) {
    const source = readFileSync(new URL(relativePath, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /lesson\s*===?\s*5|lesson5|l5[-_]/i, relativePath);
  }
});

test('legacy L2/L4/L15 listening questions remain choice-shaped and unchanged', () => {
  for (const lesson of [LESSON_2, LESSON_4, LESSON_15]) {
    const listening = lesson.slides
      .flatMap((slide) => slide.activities ?? [])
      .filter((activity): activity is Extract<LessonActivity, { kind: 'listening' }> => activity.kind === 'listening');
    assert.ok(listening.length > 0);
    for (const activity of listening) {
      assert.ok(activity.questions.every((question) => !('kind' in question)));
      assert.deepEqual(validateActivity(activity), []);
    }
  }
});

test('number dictation has ten exact inputs, 8/10 threshold, and one published shared asset', () => {
  const dictation = findActivity('l5-listening-number-dictation', 'listening');
  assert.equal(dictation.questions.length, 10);
  assert.ok(dictation.questions.every((question) => 'kind' in question && question.kind === 'textInput'));
  assert.equal(dictation.passCount, 8);
  assert.equal(dictation.assetId, 'l5_listening_time');
  assert.equal(dictation.audioStatus, 'published');
  assert.equal(existsSync(new URL('../public/audio/l5_listening_time.mp3', import.meta.url)), true);
  assert.deepEqual(listeningEvidence(dictation, 10, 10), {
    passed: true,
    evidenceMode: 'direct',
    score: 10,
    total: 10,
  });
});

test('listening text input uses narrow normalization and preserves diacritics', () => {
  const dictation = findActivity('l5-listening-number-dictation', 'listening');
  const question = dictation.questions[2];
  assert.ok('kind' in question && question.kind === 'textInput');
  assert.equal(isListeningQuestionAnswerCorrect(question, '  HÚSZ. '), true);
  assert.equal(isListeningQuestionAnswerCorrect(question, 'husz'), false);
});

test('text-input QuestionSet is accessible and does not reveal the answer initially', () => {
  const question = {
    kind: 'textInput' as const,
    id: 'generic-listening-input',
    question: 'Введи услышанное слово.',
    accept: ['húsz'],
  };
  const markup = renderToStaticMarkup(React.createElement(QuestionSet, { questions: [question] }));
  assert.match(markup, /<input/);
  assert.match(markup, /aria-labelledby="generic-listening-input-prompt"/);
  const checkButton = markup.match(/<button[^>]*>Проверить<\/button>/)?.[0];
  assert.ok(checkButton);
  assert.match(checkButton, /aria-describedby="generic-listening-input-prompt"/);
  assert.match(markup, /focus-visible:ring-2/);
  assert.doesNotMatch(markup, /Правильный ответ/);
  const feedback = renderToStaticMarkup(React.createElement(TextInputQuestionFeedback, {
    question,
    answer: 'husz',
    feedbackId: 'generic-listening-input-feedback',
  }));
  assert.match(feedback, /Неверно\. Правильный ответ: húsz\./);
  assert.match(feedback, /role="status"/);
});

test('listening retry resets transcript state and parent evidence generically', () => {
  const listeningSource = readFileSync(new URL('../src/components/activities/ListeningTask.tsx', import.meta.url), 'utf8');
  const questionSetSource = readFileSync(new URL('../src/components/activities/QuestionSet.tsx', import.meta.url), 'utf8');
  assert.match(listeningSource, /setSubmitted\(false\)/);
  assert.match(listeningSource, /onResetEvidence\?\.\(data\.id\)/);
  assert.match(questionSetSource, /setSelected\(\{\}\)/);
  assert.match(questionSetSource, /setInputs\(\{\}\)/);
  assert.match(questionSetSource, /onKeyDown/);
});

test('one transcript and asset serve both L5 listening tasks with gated disclosure', () => {
  const dictation = findActivity('l5-listening-number-dictation', 'listening');
  const schedule = findActivity('l5-listening-time-schedule', 'listening');
  assert.equal(dictation.assetId, schedule.assetId);
  assert.equal(dictation.transcript, L5_LISTENING_TRANSCRIPT);
  assert.equal(schedule.transcript, L5_LISTENING_TRANSCRIPT);
  const source = readFileSync(new URL('../src/components/activities/ListeningTask.tsx', import.meta.url), 'utf8');
  assert.match(source, /submitted &&/);
  assert.match(source, /Transcript \(после ответа\)/);
});

test('time/schedule listening has five genuine detail questions and a 4/5 threshold', () => {
  const schedule = findActivity('l5-listening-time-schedule', 'listening');
  assert.equal(schedule.questions.length, 5);
  assert.equal(schedule.passCount, 4);
  assert.ok(schedule.questions.every((question) => !('kind' in question)));
  assert.match(schedule.transcript, /augusztus harmadika/);
  assert.match(schedule.transcript, /Hétfőn nyolckor/);
  assert.match(schedule.transcript, /Szerdán háromkor/);
  assert.match(schedule.transcript, /Pénteken öt órakor/);
  assert.match(schedule.transcript, /Szombaton tízkor/);
});

test('weekday and month controlled components enforce 7/7 plus 10/12', () => {
  const weekdays = findActivity('l5-cp-weekday-order', 'controlledPractice');
  const months = findActivity('l5-cp-month-order', 'controlledPractice');
  assert.equal(weekdays.exercises.length, 7);
  assert.equal(weekdays.passCount, 7);
  assert.deepEqual(weekdays.exercises.map((exercise) => exercise.kind === 'singleChoice' ? '' : exercise.accept[0]), [
    'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat', 'vasárnap',
  ]);
  assert.equal(months.exercises.length, 12);
  assert.equal(months.passCount, 10);
  assert.deepEqual(months.exercises.map((exercise) => exercise.kind === 'singleChoice' ? '' : exercise.accept[0]), [
    'január', 'február', 'március', 'április', 'május', 'június',
    'július', 'augusztus', 'szeptember', 'október', 'november', 'december',
  ]);
});

test('name-days ExitCheck requires weekdays, months, and partial speech together', () => {
  const exit = findActivity('l5-exit-check', 'exitCheck');
  const check = exit.checks.find((candidate) => candidate.objectiveId === 'l5_name-days');
  assert.ok(check);
  assert.equal(check.activityId, 'l5-cp-weekday-order');
  assert.deepEqual(check.evidenceComponents?.map((component) => component.activityId), [
    'l5-cp-month-order',
    'l5-roleplay-schedule',
  ]);
  const evidence = {
    'l5-cp-weekday-order': directEvidence('l5-cp-weekday-order'),
    'l5-cp-month-order': directEvidence('l5-cp-month-order'),
    'l5-roleplay-schedule': rolePlayCompletionEvidence('l5-roleplay-schedule', true),
  };
  assert.equal(describeExitCheckStatus(check, evidence[check.activityId], evidence).kind, 'partial-review');
});

test('L5 count and name-days remain incomplete until every required producer starts', () => {
  const exit = findActivity('l5-exit-check', 'exitCheck');
  const countCheck = exit.checks.find((candidate) => candidate.objectiveId === 'l5_count-1-100');
  const daysCheck = exit.checks.find((candidate) => candidate.objectiveId === 'l5_name-days');
  assert.ok(countCheck);
  assert.ok(daysCheck);

  const listening = directEvidence('l5-listening-number-dictation');
  const weekdays = directEvidence('l5-cp-weekday-order');
  const recognition = directEvidence('l5-cp-number-recognition');
  const months = directEvidence('l5-cp-month-order');
  const speaking = rolePlayCompletionEvidence('l5-roleplay-schedule', true);

  const countIncomplete = describeExitCheckStatus(countCheck, listening, {
    [speaking.activityId]: speaking,
  });
  assert.deepEqual(countIncomplete, {
    kind: 'composite-incomplete',
    label: 'INCOMPLETE · не все обязательные компоненты подтверждены',
  });

  const daysIncomplete = describeExitCheckStatus(daysCheck, weekdays, {
    [speaking.activityId]: speaking,
  });
  assert.deepEqual(daysIncomplete, {
    kind: 'composite-incomplete',
    label: 'INCOMPLETE · не все обязательные компоненты подтверждены',
  });

  assert.equal(describeExitCheckStatus(countCheck, listening, {
    [recognition.activityId]: recognition,
    [speaking.activityId]: speaking,
  }).kind, 'partial-review');
  assert.equal(describeExitCheckStatus(daysCheck, weekdays, {
    [months.activityId]: months,
    [speaking.activityId]: speaking,
  }).kind, 'partial-review');

  const failedListening = directEvidence('l5-listening-number-dictation', false);
  assert.equal(describeExitCheckStatus(countCheck, failedListening).kind, 'direct-not-met');
});

test('L2 not-started interaction is incomplete while missing audio plus completed interaction stays PARTIAL', () => {
  const exit = LESSON_2.slides.flatMap((slide) => slide.activities ?? [])
    .find((activity): activity is Extract<LessonActivity, { kind: 'exitCheck' }> => activity.id === 'l2-exit-check' && activity.kind === 'exitCheck');
  assert.ok(exit);
  const check = exit.checks.find((candidate) => candidate.objectiveId === 'l2_greet-introduce');
  assert.ok(check);

  const directListening = directEvidence('l2-listening-introduction');
  const incomplete = describeExitCheckStatus(check, directListening);
  assert.deepEqual(incomplete, {
    kind: 'composite-incomplete',
    label: 'INCOMPLETE · не все обязательные компоненты подтверждены',
  });
  assert.doesNotMatch(incomplete.label, /DIRECT-компоненты/);

  const missingListening: ActivityEvidence = {
    activityId: 'l2-listening-introduction',
    attempted: true,
    completed: true,
    evidenceMode: 'none',
    passed: false,
  };
  const interaction = rolePlayCompletionEvidence('l2-roleplay-greetings', true);
  const partial = describeExitCheckStatus(check, missingListening, {
    [interaction.activityId]: interaction,
  });
  assert.equal(partial.kind, 'partial-review');
  assert.match(partial.label, /обязательный DIRECT-компонент отсутствует/);
});

test('L5 listening retries remain isolated by activity ID', () => {
  const dictation = findActivity('l5-listening-number-dictation', 'listening');
  const schedule = findActivity('l5-listening-time-schedule', 'listening');
  const store: Record<string, ActivityEvidence> = {
    [dictation.id]: directEvidence(dictation.id),
    [schedule.id]: directEvidence(schedule.id),
  };
  const reset = clearActivityEvidence(store, dictation.id);
  assert.equal(reset[dictation.id], undefined);
  assert.deepEqual(reset[schedule.id], store[schedule.id]);
  assert.notEqual(dictation.id, schedule.id);
});

test('number writing is ten exact inputs across multiple ranges with an 8/10 threshold', () => {
  const writing = findActivity('l5-cp-write-numbers', 'controlledPractice');
  assert.equal(writing.exercises.length, 10);
  assert.equal(writing.passCount, 8);
  assert.ok(writing.exercises.every((exercise) => exercise.kind === 'textInput'));
  const prompts = writing.exercises.map((exercise) => exercise.prompt).join(' ');
  for (const numeral of ['7', '11', '18', '20', '24', '30', '45', '62', '90', '100']) {
    assert.match(prompts, new RegExp(`\\b${numeral}\\b`));
  }
});

test('reading is real schedule comprehension but is not a listening substitute', () => {
  const reading = findActivity('l5-reading-weekly-schedule', 'reading');
  const exit = findActivity('l5-exit-check', 'exitCheck');
  assert.ok(reading.content);
  assert.equal(reading.content.type, 'prose');
  assert.equal(reading.questions.length, 5);
  assert.equal(reading.passCount, 4);
  assert.match(JSON.stringify(reading.content), /szeptember 7/);
  assert.match(JSON.stringify(reading.content), /kilenckor/);
  assert.ok(exit.checks.every((check) => check.activityId !== reading.id));
  assert.ok(exit.checks.flatMap((check) => check.evidenceComponents ?? []).every((component) => component.activityId !== reading.id));
});

test('open schedule writing remains PARTIAL and uses only L4-compatible production', () => {
  const writing = findActivity('l5-writing-schedule', 'writing');
  assert.equal(writing.modelAnswer.length, 4);
  assert.ok(writing.modelAnswer.every((line) => /kor/.test(line)));
  assert.doesNotMatch(JSON.stringify(writing), /-tól|-től|jó lenne|találkozzunk/i);
});

test('RolePlay records bounded samples including two time answers and two exchanges', () => {
  const rolePlay = findActivity('l5-roleplay-schedule', 'rolePlay');
  const recordedTurns = rolePlay.turns.filter((turn) => turn.responseMode === 'recorded');
  assert.equal(recordedTurns.length, 6);
  assert.equal(recordedTurns.filter((turn) => turn.id.startsWith('l5-record-time-')).length, 2);
  assert.equal(recordedTurns.filter((turn) => turn.id.startsWith('l5-record-schedule-')).length, 2);
  assert.equal(recordedTurns.filter((turn) => turn.id === 'l5-record-number-sample').length, 1);
  assert.equal(recordedTurns.filter((turn) => turn.id === 'l5-record-calendar-sample').length, 1);
  assert.deepEqual(rolePlayCompletionEvidence(rolePlay.id, true), {
    activityId: rolePlay.id,
    attempted: true,
    completed: true,
    evidenceMode: 'partial',
    passed: false,
    recordingCompleted: true,
  });
});

test('all five ExitCheck rows preserve honest DIRECT/PARTIAL/NONE semantics', () => {
  const exit = findActivity('l5-exit-check', 'exitCheck');
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), LESSON_5.objectives?.map((objective) => objective.id));
  const partial = rolePlayCompletionEvidence('l5-roleplay-schedule', true);
  const missingListening = (activityId: string): ActivityEvidence => ({
    activityId,
    attempted: true,
    completed: true,
    evidenceMode: 'none',
    passed: false,
    score: 10,
    total: 10,
  });
  const evidence: Record<string, ActivityEvidence> = {
    'l5-listening-number-dictation': missingListening('l5-listening-number-dictation'),
    'l5-listening-time-schedule': missingListening('l5-listening-time-schedule'),
    'l5-cp-number-recognition': directEvidence('l5-cp-number-recognition'),
    'l5-cp-weekday-order': directEvidence('l5-cp-weekday-order'),
    'l5-cp-month-order': directEvidence('l5-cp-month-order'),
    'l5-cp-write-numbers': directEvidence('l5-cp-write-numbers'),
    'l5-roleplay-schedule': partial,
  };
  const statusByObjective = Object.fromEntries(exit.checks.map((check) => [
    check.objectiveId,
    describeExitCheckStatus(check, evidence[check.activityId], evidence).kind,
  ]));
  assert.deepEqual(statusByObjective, {
    'l5_count-1-100': 'partial-review',
    'l5_tell-time': 'partial-review',
    'l5_name-days': 'partial-review',
    'l5_write-numbers': 'direct-met',
    'l5_use-time-in-speech': 'partial-review',
  });
});

test('L4 mixed recognition objective keeps DIRECT text evidence as PARTIAL when listening is missing', () => {
  const exit = LESSON_4.slides.flatMap((slide) => slide.activities ?? [])
    .find((activity): activity is Extract<LessonActivity, { kind: 'exitCheck' }> => activity.id === 'l4-exit-check' && activity.kind === 'exitCheck');
  assert.ok(exit);
  const check = exit.checks.find((candidate) => candidate.objectiveId === 'l4_recognize-forms');
  assert.ok(check);
  const none: ActivityEvidence = { activityId: check.activityId, attempted: true, completed: true, evidenceMode: 'none', passed: false };
  const evidence = {
    [check.activityId]: none,
    'l4-cp-recognize-text': directEvidence('l4-cp-recognize-text'),
  };
  assert.equal(describeExitCheckStatus(check, none, evidence).kind, 'partial-review');
});

test('date guidance is bounded, accurate, and contains no ISO shortcut', () => {
  const lessonText = LESSON_5.slides.map((slide) => slide.body ?? '').join('\n');
  assert.doesNotMatch(lessonText, /ISO/i);
  assert.match(lessonText, /год → месяц → день/);
  assert.match(lessonText, /augusztus harmadika/);
  assert.match(lessonText, /В этом уроке полную систему порядковых числительных не изучаем/);
  assert.match(lessonText, /Для даты пока используй этот готовый образец/);
  assert.doesNotMatch(lessonText, /будет позже/i);
  assert.doesNotMatch(lessonText, /első, második|первый, второй, третий/i);
});

test('kettő/két and perc/másodperc are taught accurately', () => {
  const lessonText = LESSON_5.slides.map((slide) => slide.body ?? '').join('\n');
  assert.match(lessonText, /самостоятельно[^<]*—[^<]*<span class="hu-word">kettő/);
  assert.match(lessonText, /перед существительным или единицей[^<]*—[^<]*<span class="hu-word">két/);
  assert.match(lessonText, /perc<\/span> — минута/);
  assert.match(lessonText, /másodperc<\/span> — секунда/);
  assert.match(lessonText, /perc<\/span> не означает «секунда»/);
});

test('Q506 is objective-aligned and all quiz options are unique', () => {
  const quiz = LESSON_5.quiz ?? [];
  const q506 = quiz.find((question) => question.id === 506);
  assert.ok(q506);
  assert.doesNotMatch(q506.question, /урок|lesson/i);
  assert.match(q506.question, /пятниц|пять/i);
  for (const question of quiz) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
  }
});

test('bounded L5 vocabulary distinguishes lexemes, patterns, and chunks', () => {
  const vocabulary = LESSON_5.vocabulary ?? [];
  assert.equal(vocabulary.length, 13);
  assert.ok(vocabulary.some((item) => item.hu === 'tizen-' && item.category === 'Number Pattern'));
  assert.ok(vocabulary.some((item) => item.hu === 'Hány óra van?' && item.category === 'Time Chunk'));
  assert.ok(vocabulary.some((item) => item.hu === 'Mikor érsz rá?' && item.category === 'Schedule Chunk'));
  assert.ok(vocabulary.some((item) => item.hu === 'perc' && item.ru === 'минута'));
  assert.ok(vocabulary.some((item) => item.hu === 'másodperc' && item.ru === 'секунда'));
});

test('LESSONS_META L5 matches the migrated lesson module exactly', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 5);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_5.title);
  assert.equal(meta.subtitle, LESSON_5.subtitle);
  assert.equal(meta.description, LESSON_5.description);
  assert.equal(meta.slidesCount, LESSON_5.slidesCount);
  assert.equal(meta.level, LESSON_5.level);
});
