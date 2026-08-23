import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LESSON_3 } from '../src/data/lessons/lesson3.ts';
import { LESSON_4 } from '../src/data/lessons/lesson4.ts';
import { LESSON_15 } from '../src/data/lessons/lesson15.ts';
import { LESSON_2 } from '../src/data/lessons/lesson2.ts';
import { LESSON_16 } from '../src/data/lessons/lesson16.ts';
import { LESSON_28 } from '../src/data/lessons/lesson28.ts';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations.ts';
import { normalizeAnswer, isAnswerAccepted } from '../src/utils/answerNormalization.ts';
import {
  getVegetarianItemNames,
  canProduceDirectListeningEvidence,
  shouldShowTranscript,
  validateRolePlayGraph,
  validateActivity,
  validateExitCheckReferences,
  readingEvidence,
  controlledEvidence,
  listeningEvidence,
  writingEvidence,
  canAdvanceRecordedTurn,
  rolePlayChoiceResult,
  advancesRolePlay,
  clearActivityEvidence,
  isWritingLocked,
  restoreRolePlayTurnId,
  rolePlayCompletionEvidence,
  rolePlayRecordingRequirementMet,
  describeEvidenceStatus,
  describeExitCheckStatus,
  resolveReadingContent,
  validateReadingContent,
  validateLessonQuestionIds,
  isListeningTextInputQuestion,
} from '../src/utils/activityUtils.ts';
import { getLessonQuiz, getLessonVocabulary } from '../src/utils/lessonQuizAndVocab.ts';
import { audioUrl } from '../src/utils/audioConfig.ts';
import { ReadingTask } from '../src/components/activities/ReadingTask.tsx';
import { LessonActivityRenderer } from '../src/components/activities/LessonActivityRenderer.tsx';
import {
  getQuestionOptionFeedbackId,
  QuestionFeedback,
} from '../src/components/activities/QuestionSet.tsx';
import { PROSE_READING_FIXTURE } from './fixtures/readingTaskFixtures.ts';
import type { ActivityEvidence, ExitCheckItem, LessonActivity, ReadingQuestion } from '../src/types.ts';

const l15Activities = (): LessonActivity[] =>
  LESSON_15.slides.flatMap((s) => s.activities ?? []);

const l3Activities = (): LessonActivity[] =>
  LESSON_3.slides.flatMap((slide) => slide.activities ?? []);

const l4Activities = (): LessonActivity[] =>
  LESSON_4.slides.flatMap((slide) => slide.activities ?? []);

const l2Activities = (): LessonActivity[] =>
  LESSON_2.slides.flatMap((slide) => slide.activities ?? []);

function legacyChoiceQuestions(
  listening: Extract<LessonActivity, { kind: 'listening' }>
): ReadingQuestion[] {
  const questions = listening.questions.filter(
    (question): question is ReadingQuestion => !isListeningTextInputQuestion(question)
  );
  assert.equal(questions.length, listening.questions.length);
  return questions;
}

function sha256(url: URL): string {
  return createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
}

function findActivity<T extends LessonActivity['kind']>(kind: T): Extract<LessonActivity, { kind: T }> {
  const activity = l15Activities().find((a) => a.kind === kind);
  assert.ok(activity, `activity of kind ${kind} not found`);
  return activity as Extract<LessonActivity, { kind: T }>;
}

function findL3Activity<T extends LessonActivity['kind']>(
  id: string,
  kind: T
): Extract<LessonActivity, { kind: T }> {
  const activity = l3Activities().find((candidate) => candidate.id === id && candidate.kind === kind);
  assert.ok(activity, `L3 activity ${id} (${kind}) not found`);
  return activity as Extract<LessonActivity, { kind: T }>;
}

function findL4Activity<T extends LessonActivity['kind']>(
  id: string,
  kind: T
): Extract<LessonActivity, { kind: T }> {
  const activity = l4Activities().find((candidate) => candidate.id === id && candidate.kind === kind);
  assert.ok(activity, `L4 activity ${id} (${kind}) not found`);
  return activity as Extract<LessonActivity, { kind: T }>;
}

function findL2Activity<T extends LessonActivity['kind']>(
  id: string,
  kind: T
): Extract<LessonActivity, { kind: T }> {
  const activity = l2Activities().find((candidate) => candidate.id === id && candidate.kind === kind);
  assert.ok(activity, `L2 activity ${id} (${kind}) not found`);
  return activity as Extract<LessonActivity, { kind: T }>;
}

test('unmigrated lesson 28 has no interactive activities', () => {
  for (const lesson of [LESSON_28]) {
    const hasActivities = lesson.slides.some((s) => s.activities && s.activities.length > 0);
    assert.equal(hasActivities, false, `lesson ${lesson.number} unexpectedly has activities`);
  }
});

test('migrated L16 exposes its exact activity inventory', () => {
  const activities = LESSON_16.slides.flatMap((slide) => slide.activities ?? []);
  assert.deepEqual(activities.map((activity) => activity.id), [
    'l16-cp-val-vel-forms', 'l16-cp-assimilation', 'l16-cp-means-companionship', 'l16-cp-prices',
    'l16-listening-shopping', 'l16-roleplay-shopping', 'l16-recording-means-companionship', 'l16-exit-check',
  ]);
  assert.equal(new Set(activities.map((activity) => activity.id)).size, 8);
});

test('L15 keeps exactly slide IDs 1..12 in order', () => {
  assert.deepEqual(
    LESSON_15.slides.map((s) => s.id),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  );
});

test('L15 slidesCount matches slides.length', () => {
  assert.equal(LESSON_15.slidesCount, LESSON_15.slides.length);
});

test('L15 activities have unique IDs', () => {
  const ids = l15Activities().map((a) => a.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('all L15 activities pass structural validation', () => {
  for (const activity of l15Activities()) {
    assert.deepEqual(validateActivity(activity), [], `activity ${activity.id} has errors`);
  }
});

test('normalizeAnswer preserves Hungarian diacritics', () => {
  assert.equal(normalizeAnswer('Árvíz'), 'árvíz');
  assert.notEqual(normalizeAnswer('a'), normalizeAnswer('á'));
  assert.notEqual(normalizeAnswer('e'), normalizeAnswer('é'));
  assert.notEqual(normalizeAnswer('o'), normalizeAnswer('ö'));
  assert.notEqual(normalizeAnswer('ö'), normalizeAnswer('ő'));
  assert.notEqual(normalizeAnswer('u'), normalizeAnswer('ü'));
  assert.notEqual(normalizeAnswer('ü'), normalizeAnswer('ű'));
});

test('normalizeAnswer trims, lowercases hu-HU, collapses spaces, ignores trailing punctuation', () => {
  assert.equal(normalizeAnswer('  Nincs   Időm.  '), 'nincs időm');
  assert.equal(normalizeAnswer('Adok egy kávét!'), 'adok egy kávét');
  assert.equal(normalizeAnswer('könyvem'), 'könyvem');
});

test('isAnswerAccepted treats diacritics as part of correctness', () => {
  assert.equal(isAnswerAccepted('könyvem', ['könyvem']), true);
  assert.equal(isAnswerAccepted('konyvem', ['könyvem']), false);
  assert.equal(isAnswerAccepted('  Nincs időm. ', ['Nincs időm.']), true);
});

test('reading menu answers match menu data', () => {
  const reading = findActivity('reading');
  const q1 = reading.questions.find((q) => q.id === 'l15-menu-q2');
  assert.ok(q1);
  assert.equal(q1.options[q1.correctIndex], '1850 Ft');
});

test('vegetarian answer is derived from 🌱 menu data', () => {
  const reading = findActivity('reading');
  assert.deepEqual(getVegetarianItemNames(reading), ['Zöldségleves', 'Rántott sajt']);
});

test('ListeningTask missing-audio state: no direct evidence', () => {
  const listening = findActivity('listening');
  assert.equal(listening.audioStatus, 'missing');
  assert.equal(canProduceDirectListeningEvidence(listening), false);
});

test('transcript hidden before submit, available after submit', () => {
  assert.equal(shouldShowTranscript(false), false);
  assert.equal(shouldShowTranscript(true), true);
});

test('listening without real audio cannot produce direct mastery evidence', () => {
  const listening = findActivity('listening');
  assert.equal(canProduceDirectListeningEvidence(listening), false);
});

test('RolePlay branching graph resolves (every nextTurnId exists)', () => {
  const rolePlay = findActivity('rolePlay');
  assert.deepEqual(validateRolePlayGraph(rolePlay), []);
});

test('role-play contains post-meal transition before the bill request', () => {
  const rolePlay = findActivity('rolePlay');
  const turns = rolePlay.turns;
  const stage = turns.find((t) => t.speaker === 'stage');
  const afterMealWaiter = turns.find((t) => t.speaker === 'waiter' && t.prompt === 'Kér még valamit?');
  const billLearner = turns.find((t) => t.speaker === 'learner' && t.model?.includes('A számlát kérem'));
  assert.ok(stage, 'stage transition missing');
  assert.ok(afterMealWaiter, 'waiter bill-prompt missing');
  assert.ok(billLearner, 'learner bill turn missing');
  assert.ok(turns.indexOf(stage) < turns.indexOf(afterMealWaiter));
  assert.ok(turns.indexOf(afterMealWaiter) < turns.indexOf(billLearner));
});

test('learner, not waiter, asks for the bill', () => {
  const rolePlay = findActivity('rolePlay');
  const waiterSaysBill = rolePlay.turns.some(
    (t) => t.speaker === 'waiter' && (t.prompt?.includes('A számlát kérem') ?? false)
  );
  assert.equal(waiterSaysBill, false);
  const learnerSaysBill = rolePlay.turns.some(
    (t) => t.speaker === 'learner' && (t.model?.includes('A számlát kérem') ?? false)
  );
  assert.equal(learnerSaysBill, true);
});

test('Q1506 is a language task (rewritten), correctIndex valid', () => {
  const q1506 = (LESSON_15.quiz ?? []).find((q) => q.id === 1506);
  assert.ok(q1506);
  assert.ok(q1506.question.includes('Nekem van egy'));
  assert.equal(q1506.options[q1506.correctIndex], 'házam');
});

test('ExitCheck objective IDs and activity IDs resolve in L15', () => {
  const exitCheck = findActivity('exitCheck');
  const objectiveIds = (LESSON_15.objectives ?? []).map((o) => o.id);
  const activityIds = l15Activities().map((a) => a.id);
  assert.deepEqual(validateExitCheckReferences(exitCheck, objectiveIds, activityIds), []);
});

test('old quiz behavior remains compatible (6 inline questions)', () => {
  const quiz = getLessonQuiz(LESSON_15);
  assert.equal(quiz.length, 6);
  assert.deepEqual(
    quiz.map((q) => q.id),
    [1501, 1502, 1503, 1504, 1505, 1506]
  );
});

test('all lessons outside migrated L1-L16 have no activities', async () => {
  for (const meta of LESSONS_META) {
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].includes(meta.id)) continue;
    const lesson = await loadLesson(meta.id);
    assert.ok(lesson, `lesson ${meta.id} failed to load`);
    const hasActivities = lesson.slides.some((s) => s.activities && s.activities.length > 0);
    assert.equal(hasActivities, false, `lesson ${lesson.number} unexpectedly has activities`);
  }
});

test('reading 0/4 and 2/4 do NOT pass; 3/4 passes (L15 rule)', () => {
  assert.equal(readingEvidence(0, 4, 3).passed, false);
  assert.equal(readingEvidence(2, 4, 3).passed, false);
  assert.equal(readingEvidence(3, 4, 3).passed, true);
});

test('controlled 0/8 completed but NOT passed; >=7/8 passes', () => {
  const low = controlledEvidence(true, 0, 8, 7);
  assert.equal(low.completed, true);
  assert.equal(low.passed, false);
  assert.equal(controlledEvidence(true, 6, 8, 7).passed, false);
  assert.equal(controlledEvidence(true, 7, 8, 7).passed, true);
});

test('writing empty cannot complete; requires self-review and minimum length', () => {
  assert.equal(writingEvidence('', false).completed, false);
  assert.equal(writingEvidence('Szeretem a levest.', false).completed, false);
  assert.equal(writingEvidence('rövid', true).completed, false);
  assert.equal(writingEvidence('Szeretem a levest és a salátát.', true).completed, true);
});

test('recorded roleplay cannot advance before recording', () => {
  assert.equal(canAdvanceRecordedTurn(false), false);
  assert.equal(canAdvanceRecordedTurn(true), true);
});

test('wrong substitution choice does not advance; correct advances', () => {
  const rolePlay = findActivity('rolePlay');
  const g2 = rolePlay.turns.find((t) => t.id === 'l15-rp-g2');
  assert.ok(g2);
  const wrong = rolePlayChoiceResult(g2, 'Kérek egy saláta.');
  assert.equal(advancesRolePlay(wrong), false);
  assert.ok(wrong.feedback);
  const right = rolePlayChoiceResult(g2, 'Kérek egy salátát.');
  assert.equal(advancesRolePlay(right), true);
  assert.equal(right.nextTurnId, 'l15-rp-g3');
});

test('unavailable lemonade branch follows a lemonade choice', () => {
  const rolePlay = findActivity('rolePlay');
  const drink = rolePlay.turns.find((t) => t.id === 'l15-rp-drink');
  assert.ok(drink);
  const lemonBranch = drink.branches?.find((b) => b.choice === 'Egy limonádét kérek.');
  assert.ok(lemonBranch);
  const target = rolePlay.turns.find((t) => t.id === lemonBranch.nextTurnId);
  assert.ok(target);
  assert.equal(target.prompt, 'Sajnos nincs limonádé, csak narancslé van.');
});

test('missing listening audio = evidence NONE (not passed)', () => {
  const listening = findActivity('listening');
  const result = listeningEvidence(listening, 4, 4);
  assert.equal(result.evidenceMode, 'none');
  assert.equal(result.passed, false);
});

test('published listening + wrong answers != passed', () => {
  const listening = findActivity('listening');
  const published = { ...listening, audioStatus: 'published' as const };
  const result = listeningEvidence(published, 1, 4);
  assert.equal(result.evidenceMode, 'direct');
  assert.equal(result.passed, false);
});

test('vegetarian item has accessible text (legend + marked items)', () => {
  const reading = findActivity('reading');
  assert.ok(reading.legend?.includes('vegetáriánus'));
  assert.ok(getVegetarianItemNames(reading).length > 0);
});

// =====================================================================
// FINAL L15 PILOT CLEANUP regression tests
// =====================================================================

test('retry reading invalidates previous passed evidence', () => {
  const store: Record<string, ActivityEvidence> = {
    'l15-reading-menu': {
      activityId: 'l15-reading-menu',
      attempted: true,
      completed: true,
      evidenceMode: 'direct',
      passed: true,
      score: 4,
      total: 4,
    },
  };
  const next = clearActivityEvidence(store, 'l15-reading-menu');
  assert.equal(next['l15-reading-menu'], undefined);
});

test('retry controlled practice invalidates previous passed evidence', () => {
  const store: Record<string, ActivityEvidence> = {
    'l15-cp-dative': {
      activityId: 'l15-cp-dative',
      attempted: true,
      completed: true,
      evidenceMode: 'direct',
      passed: true,
      score: 8,
      total: 8,
    },
  };
  const next = clearActivityEvidence(store, 'l15-cp-dative');
  assert.equal(next['l15-cp-dative'], undefined);
});

test('writing locks after submit and unlocks after reset', () => {
  const submitted: ActivityEvidence = {
    activityId: 'l15-writing-preferences',
    attempted: true,
    completed: true,
    evidenceMode: 'partial',
    passed: false,
    selfReviewed: true,
  };
  assert.equal(isWritingLocked(submitted), true);
  assert.equal(isWritingLocked(undefined), false);
  assert.equal(isWritingLocked({ ...submitted, completed: false }), false);
});

test('roleplay unfinished turn restores after session restore', () => {
  const rolePlay = findActivity('rolePlay');
  assert.equal(restoreRolePlayTurnId(rolePlay), rolePlay.startTurnId);
  assert.equal(
    restoreRolePlayTurnId(rolePlay, { rolePlayCurrentTurnId: 'l15-rp-drink' }),
    'l15-rp-drink'
  );
  // An unknown id falls back to the start turn instead of crashing.
  assert.equal(
    restoreRolePlayTurnId(rolePlay, { rolePlayCurrentTurnId: 'does-not-exist' }),
    rolePlay.startTurnId
  );
});

test('express-likes speaking evidence requires a recorded learner turn', () => {
  const rolePlay = findActivity('rolePlay');
  const g4 = rolePlay.turns.find((t) => t.id === 'l15-rp-g4');
  assert.ok(g4);
  assert.equal(g4.responseMode, 'choice');
  const targets = new Set((g4.branches ?? []).map((b) => b.nextTurnId));
  assert.ok(targets.size > 0);
  for (const targetId of targets) {
    const target = rolePlay.turns.find((t) => t.id === targetId);
    assert.ok(target, `branch target ${targetId} missing`);
    assert.equal(target.speaker, 'learner', `target ${targetId} must be a learner turn`);
    assert.equal(target.responseMode, 'recorded', `target ${targetId} must be a recorded turn`);
  }
});

test('order objective is separated from the listening objective', () => {
  const objectives = LESSON_15.objectives ?? [];
  const order = objectives.find((o) => o.id === 'l15_order-food');
  const understand = objectives.find((o) => o.id === 'l15_understand-restaurant-dialogue');
  assert.ok(order);
  assert.ok(understand);
  assert.ok(order.skills.includes('interaction'));
  assert.ok(order.skills.includes('speaking'));
  assert.equal(order.skills.includes('listening'), false);
  assert.deepEqual(understand.skills, ['listening']);

  const exitCheck = findActivity('exitCheck');
  assert.ok(
    exitCheck.checks.some(
      (c) => c.objectiveId === 'l15_order-food' && c.activityId === 'l15-roleplay-restaurant' && c.evidenceKind === 'interaction'
    )
  );
  assert.ok(
    exitCheck.checks.some(
      (c) =>
        c.objectiveId === 'l15_understand-restaurant-dialogue' &&
        c.activityId === 'l15-listening-restaurant' &&
        c.evidenceKind === 'listening'
    )
  );
  // The listening activity is no longer credited to the order objective.
  assert.equal(
    exitCheck.checks.some(
      (c) => c.objectiveId === 'l15_order-food' && c.activityId === 'l15-listening-restaurant'
    ),
    false
  );
});

test('roleplay does not call the soup a main course', () => {
  const rolePlay = findActivity('rolePlay');
  const l1 = rolePlay.turns.find((t) => t.id === 'l15-rp-l1');
  assert.ok(l1);
  assert.equal(l1.prompt?.includes('основное блюдо'), false);
  assert.equal(l1.model, 'Kérek egy gulyáslevest.');
  const anyMainCourse = rolePlay.turns.some((t) => t.prompt?.includes('основное блюдо'));
  assert.equal(anyMainCourse, false);
});

test('L15 vocabulary contains ízlik', () => {
  const vocab = LESSON_15.vocabulary ?? [];
  const izlik = vocab.find((v) => v.hu === 'ízlik');
  assert.ok(izlik);
  assert.equal(izlik.category, 'Functional Core');
});

test('L15 IPA does not contain known invalid forms', () => {
  const vocab = LESSON_15.vocabulary ?? [];
  const allIpa = vocab.map((v) => v.ipa ?? '').join(' ');
  for (const invalid of ['[lˈ', '[hˈ', '[vˈ', '[dˈ', '[zˈ', '[ʃˈ']) {
    assert.equal(allIpa.includes(invalid), false, `invalid stress form ${invalid} found`);
  }
  const byWord = new Map(vocab.map((v) => [v.hu, v.ipa]));
  assert.equal(byWord.get('leves'), '[ˈlɛvɛʃ]');
  assert.equal(byWord.get('hús'), '[ˈhuːʃ]');
  assert.equal(byWord.get('víz'), '[ˈviːz]');
  assert.equal(byWord.get('desszert'), '[ˈdɛsːɛrt]');
});

test('passCount validator rejects invalid thresholds', () => {
  const q = (id: string) => ({ id, question: 'Q', options: ['a', 'b'], correctIndex: 0 });
  const badReading: LessonActivity = {
    kind: 'reading',
    id: 'bad-reading',
    sections: [],
    questions: [q('r1'), q('r2')],
    passCount: 5,
  };
  assert.ok(validateActivity(badReading).some((e) => e.includes('passCount')));

  const badListening: LessonActivity = {
    kind: 'listening',
    id: 'bad-listening',
    assetId: 'x',
    audioStatus: 'missing',
    transcript: 't',
    questions: [q('l1')],
    passCount: 0,
  };
  assert.ok(validateActivity(badListening).some((e) => e.includes('passCount')));

  const badControlled: LessonActivity = {
    kind: 'controlledPractice',
    id: 'bad-controlled',
    exercises: [
      { kind: 'singleChoice', id: 'e1', prompt: 'p', options: ['a', 'b'], correctIndex: 0 },
    ],
    passCount: 3,
  };
  assert.ok(validateActivity(badControlled).some((e) => e.includes('passCount')));

  // Valid thresholds produce no passCount errors.
  const okReading: LessonActivity = {
    kind: 'reading',
    id: 'ok-reading',
    sections: [],
    questions: [q('r1'), q('r2'), q('r3')],
    passCount: 3,
  };
  assert.equal(validateActivity(okReading).some((e) => e.includes('passCount')), false);
});

// =====================================================================
// FINAL L15 FREEZE PATCH regression tests
// =====================================================================

test('RolePlay completion is PARTIAL, completed, not passed', () => {
  const ev = rolePlayCompletionEvidence('l15-roleplay-restaurant');
  assert.equal(ev.evidenceMode, 'partial');
  assert.equal(ev.completed, true);
  assert.equal(ev.passed, false);
});

test('L15 completed RolePlay sets recordingCompleted === true', () => {
  const rolePlay = findActivity('rolePlay');
  const recordedIds = rolePlay.turns
    .filter((t) => t.responseMode === 'recorded')
    .map((t) => t.id);
  assert.ok(recordedIds.length > 0, 'L15 role-play must contain recorded turns');

  const allDone = new Set(recordedIds);
  assert.equal(rolePlayRecordingRequirementMet(rolePlay, allDone), true);
  const ev = rolePlayCompletionEvidence(rolePlay.id, rolePlayRecordingRequirementMet(rolePlay, allDone));
  assert.equal(ev.recordingCompleted, true);
  assert.equal(ev.passed, false);
  assert.equal(ev.evidenceMode, 'partial');
});

test('generic/choice-only RolePlay completion has no recordingCompleted', () => {
  // No recording requirement → the flag must not be fabricated.
  const ev = rolePlayCompletionEvidence('choice-only-roleplay');
  assert.equal(ev.recordingCompleted === true, false);
  assert.equal('recordingCompleted' in ev, false);
  assert.equal(ev.passed, false);
  assert.equal(ev.evidenceMode, 'partial');
});

test('recording requirement is false when no recorded turn was completed', () => {
  const rolePlay = findActivity('rolePlay');
  assert.equal(rolePlayRecordingRequirementMet(rolePlay, new Set()), false);

  // A choice-only role-play has no recording requirement.
  const choiceOnly = {
    kind: 'rolePlay' as const,
    id: 'choice-only',
    startTurnId: 'c1',
    turns: [
      { id: 'c1', speaker: 'learner' as const, responseMode: 'choice' as const, options: ['A', 'B'], branches: [{ choice: 'A', nextTurnId: 'c2' }, { choice: 'B', nextTurnId: 'c2' }] },
      { id: 'c2', speaker: 'waiter' as const, prompt: 'done' },
    ],
  };
  assert.equal(rolePlayRecordingRequirementMet(choiceOnly, new Set()), false);
});

test('RolePlay without explicit self-review does not fabricate selfReviewed', () => {
  const ev = rolePlayCompletionEvidence('l15-roleplay-restaurant');
  assert.equal(ev.selfReviewed === true, false);
  assert.equal('selfReviewed' in ev, false);
});

test('ExitCheck never shows PARTIAL completed as met', () => {
  const partialCompleted: ActivityEvidence = {
    activityId: 'x',
    attempted: true,
    completed: true,
    evidenceMode: 'partial',
    passed: false,
    recordingCompleted: true,
  };
  const status = describeEvidenceStatus(partialCompleted);
  assert.equal(status.kind, 'partial-review');
  assert.equal(status.label.includes('met'), false);
  assert.ok(status.label.includes('требует проверки'));

  // Direct + passed is the only way to show "met".
  const directPassed: ActivityEvidence = {
    activityId: 'y',
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed: true,
    score: 4,
    total: 4,
  };
  assert.equal(describeEvidenceStatus(directPassed).kind, 'direct-met');
});

test('ExitCheck aggregation preserves the approved mixed-objective truth table and hard gates', () => {
  const direct = (activityId: string, passed = true): ActivityEvidence => ({
    activityId, attempted: true, completed: true, evidenceMode: 'direct', passed,
  });
  const partial = (activityId: string): ActivityEvidence => ({
    activityId, attempted: true, completed: true, evidenceMode: 'partial', passed: false,
  });
  const none = (activityId: string): ActivityEvidence => ({
    activityId, attempted: true, completed: true, evidenceMode: 'none', passed: false,
  });
  const mixed = (...componentKinds: ExitCheckItem['evidenceKind'][]): ExitCheckItem => ({
    objectiveId: 'mixed',
    activityId: 'primary',
    evidenceKind: 'grammar',
    evidenceComponents: componentKinds.map((evidenceKind, index) => ({
      activityId: `component-${index + 1}`,
      evidenceKind,
    })),
  });
  const status = (
    check: ExitCheckItem,
    primary: ActivityEvidence | undefined,
    components: ActivityEvidence[] = []
  ) => describeExitCheckStatus(check, primary, Object.fromEntries(
    components.map((component) => [component.activityId, component])
  )).kind;

  const twoKinds = mixed('listening');
  assert.equal(status(twoKinds, direct('primary'), [direct('component-1')]), 'direct-met');
  assert.equal(status(twoKinds, direct('primary'), [partial('component-1')]), 'partial-review');
  assert.equal(status(twoKinds, partial('primary'), [partial('component-1')]), 'partial-review');
  assert.equal(status(twoKinds, partial('primary'), [none('component-1')]), 'partial-review');
  assert.equal(status(twoKinds, none('primary'), [none('component-1')]), 'none');
  assert.equal(status(twoKinds, undefined), 'composite-incomplete');
  assert.equal(status(twoKinds, direct('primary'), [none('component-1')]), 'partial-review');

  const threeKinds = mixed('listening', 'reading');
  assert.equal(status(threeKinds, direct('primary'), [direct('component-1'), direct('component-2')]), 'direct-met');
  assert.equal(status(threeKinds, direct('primary'), [direct('component-1'), none('component-2')]), 'partial-review');
  assert.equal(status(threeKinds, direct('primary'), [none('component-1'), none('component-2')]), 'partial-review');
  assert.equal(status(threeKinds, direct('primary'), [partial('component-1'), none('component-2')]), 'partial-review');
  assert.equal(status(threeKinds, partial('primary'), [none('component-1'), none('component-2')]), 'partial-review');
  assert.equal(status(threeKinds, none('primary'), [none('component-1'), none('component-2')]), 'none');

  assert.equal(status(twoKinds, direct('primary'), [direct('component-1', false)]), 'direct-not-met');
  assert.equal(status(threeKinds, direct('primary'), [direct('component-1', false), none('component-2')]), 'direct-not-met');

  const pureListening: ExitCheckItem = {
    objectiveId: 'pure-listening', activityId: 'primary', evidenceKind: 'listening',
  };
  assert.equal(status(pureListening, none('primary')), 'none');
  const pureListeningComposite: ExitCheckItem = {
    ...pureListening,
    evidenceComponents: [{ activityId: 'component-1', evidenceKind: 'listening' }],
  };
  assert.equal(status(pureListeningComposite, direct('primary'), [none('component-1')]), 'none');

  const withPractice: ExitCheckItem = {
    objectiveId: 'practice', activityId: 'primary', evidenceKind: 'grammar', practiceComponents: ['speaking'],
  };
  assert.equal(status(withPractice, direct('primary')), 'partial-components');
});

test('L15 has exactly 6 objectives', () => {
  assert.equal((LESSON_15.objectives ?? []).length, 6);
});

test('whole curriculum has exactly 139 objectives', async () => {
  let total = 0;
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.id);
    assert.ok(lesson, `lesson ${meta.id} failed to load`);
    total += (lesson.objectives ?? []).length;
  }
  assert.equal(total, 139);
});

// =====================================================================
// PHASE 3A shared ReadingTask generalization regression tests
// =====================================================================

test('frozen L15 activity and menu-question identities remain exact', () => {
  assert.deepEqual(
    l15Activities().map((activity) => activity.id),
    [
      'l15-cp-dative',
      'l15-reading-menu',
      'l15-listening-restaurant',
      'l15-roleplay-restaurant',
      'l15-writing-preferences',
      'l15-exit-check',
    ]
  );

  const reading = findActivity('reading');
  assert.deepEqual(
    reading.questions.map((question) => question.id),
    ['l15-menu-q1', 'l15-menu-q2', 'l15-menu-q3', 'l15-menu-q4']
  );

  const exitCheck = findActivity('exitCheck');
  assert.ok(
    exitCheck.checks.some(
      (check) =>
        check.objectiveId === 'l15_name-food' &&
        check.activityId === 'l15-reading-menu' &&
        check.evidenceKind === 'reading'
    )
  );
});

test('frozen L15 legacy menu remains structurally valid through the shared adapter', () => {
  const reading = findActivity('reading');
  assert.deepEqual(validateActivity(reading), []);

  const content = resolveReadingContent(reading);
  assert.equal(content.type, 'menu');
  if (content.type === 'menu') {
    assert.equal(content.sections.length, 3);
    assert.equal(content.legend, '🌱 = vegetáriánus');
  }
});

test('menu rendering keeps vegetarian meaning available to assistive technology', () => {
  const reading = findActivity('reading');
  const markup = renderToStaticMarkup(
    createElement(ReadingTask, {
      data: reading,
      onEvidence: () => undefined,
      onResetEvidence: () => undefined,
    })
  );

  assert.match(markup, /aria-label="Étlap"/);
  assert.match(markup, /aria-hidden="true"/);
  assert.match(markup, /<span class="sr-only">vegetáriánus<\/span>/);
  assert.match(markup, /l15-menu-q3-prompt/);
});

test('generic prose fixture validates with non-empty paragraphs and questions', () => {
  assert.deepEqual(validateActivity(PROSE_READING_FIXTURE), []);
  assert.deepEqual(validateReadingContent(PROSE_READING_FIXTURE.content, PROSE_READING_FIXTURE.id), []);

  const content = resolveReadingContent(PROSE_READING_FIXTURE);
  assert.equal(content.type, 'prose');
  if (content.type === 'prose') {
    assert.equal(content.paragraphs.length, 2);
    assert.ok(content.paragraphs.every((paragraph) => paragraph.trim().length > 0));
  }
});

test('prose reading score, total, and explicit pass threshold drive direct evidence', () => {
  const selectedAnswers = [1, 0, 0];
  const score = PROSE_READING_FIXTURE.questions.reduce(
    (total, question, index) => total + Number(selectedAnswers[index] === question.correctIndex),
    0
  );
  const result = readingEvidence(
    score,
    PROSE_READING_FIXTURE.questions.length,
    PROSE_READING_FIXTURE.passCount
  );

  assert.deepEqual(result, {
    score: 2,
    total: 3,
    passed: true,
    evidenceMode: 'direct',
  });
});

test('prose reading validator accepts valid threshold and rejects zero or above total', () => {
  assert.equal(
    validateActivity(PROSE_READING_FIXTURE).some((error) => error.includes('passCount')),
    false
  );
  assert.ok(
    validateActivity({ ...PROSE_READING_FIXTURE, passCount: 0 }).some((error) =>
      error.includes('passCount')
    )
  );
  assert.ok(
    validateActivity({ ...PROSE_READING_FIXTURE, passCount: 4 }).some((error) =>
      error.includes('passCount')
    )
  );
});

test('prose retry clears stale evidence for the generic activity ID', () => {
  const store: Record<string, ActivityEvidence> = {
    [PROSE_READING_FIXTURE.id]: {
      activityId: PROSE_READING_FIXTURE.id,
      attempted: true,
      completed: true,
      evidenceMode: 'direct',
      passed: true,
      score: 3,
      total: 3,
    },
  };

  assert.equal(clearActivityEvidence(store, PROSE_READING_FIXTURE.id)[PROSE_READING_FIXTURE.id], undefined);
});

test('reading content validator rejects unsupported content kinds', () => {
  assert.ok(
    validateReadingContent(
      { type: 'timeline', entries: ['unsupported'] },
      'fixture-unsupported-reading'
    ).some((error) => error.includes('unsupported reading content type'))
  );
});

test('reading validator rejects empty prose and missing comprehension questions', () => {
  assert.ok(
    validateReadingContent(
      { type: 'prose', title: 'Empty notice', paragraphs: ['   '] },
      'fixture-empty-prose'
    ).some((error) => error.includes('paragraph 1 is empty'))
  );
  assert.ok(
    validateActivity({ ...PROSE_READING_FIXTURE, questions: [] }).some((error) =>
      error.includes('comprehension question')
    )
  );
});

test('menu and prose both render through the same generic ReadingTask entry point', () => {
  const menuMarkup = renderToStaticMarkup(
    createElement(ReadingTask, {
      data: findActivity('reading'),
      onEvidence: () => undefined,
    })
  );
  const proseMarkup = renderToStaticMarkup(
    createElement(ReadingTask, {
      data: PROSE_READING_FIXTURE,
      onEvidence: () => undefined,
    })
  );

  assert.match(menuMarkup, /role="region"/);
  assert.match(proseMarkup, /<article/);
  assert.match(proseMarkup, /Library notice/);
  assert.match(proseMarkup, /The library opens at nine/);
  assert.match(proseMarkup, /fixture-prose-q1-prompt/);
});

test('generic ReadingTask source contains no lesson-specific branching', () => {
  const source = readFileSync(
    new URL('../src/components/activities/ReadingTask.tsx', import.meta.url),
    'utf8'
  );

  assert.doesNotMatch(source, /lesson\s*15|lesson15|l15[-_]/i);
  assert.doesNotMatch(source, /data\.id\s*===|data\.id\.includes|data\.id\.startsWith/);
});

test('prose renderer exposes responsive wrapping and keyboard focus hooks', () => {
  const markup = renderToStaticMarkup(
    createElement(ReadingTask, {
      data: PROSE_READING_FIXTURE,
      onEvidence: () => undefined,
    })
  );

  assert.match(markup, /max-w-\[70ch\]/);
  assert.match(markup, /\[overflow-wrap:anywhere\]/);
  assert.match(markup, /focus-visible:ring-2/);
  assert.match(markup, /type="button"/);
  assert.match(markup, /aria-labelledby="fixture-prose-q1-prompt"/);
});

// =====================================================================
// PHASE 3A final QuestionSet accessibility micro-patch regressions
// =====================================================================

const accessibilityQuestion: ReadingQuestion = {
  id: 'accessibility-q1',
  question: 'Какой ответ правильный?',
  options: ['Неправильный вариант', 'Правильный вариант'],
  correctIndex: 1,
  explanation: 'Пояснение к ответу.',
};

test('wrong selected option references its feedback', () => {
  assert.equal(
    getQuestionOptionFeedbackId(0, 0, 'accessibility-q1-feedback'),
    'accessibility-q1-feedback'
  );
});

test('unselected correct option does not reference wrong-answer feedback', () => {
  assert.equal(
    getQuestionOptionFeedbackId(0, accessibilityQuestion.correctIndex, 'accessibility-q1-feedback'),
    undefined
  );
});

test('incorrect feedback names the correct answer textually and appends explanation', () => {
  const markup = renderToStaticMarkup(
    createElement(QuestionFeedback, {
      question: accessibilityQuestion,
      chosen: 0,
      feedbackId: 'accessibility-q1-feedback',
    })
  );

  assert.match(markup, /Неверно\. Правильный ответ: Правильный вариант\./);
  assert.match(markup, /Пояснение к ответу\./);
});

test('correct feedback contains the textual verdict and explanation', () => {
  const markup = renderToStaticMarkup(
    createElement(QuestionFeedback, {
      question: accessibilityQuestion,
      chosen: accessibilityQuestion.correctIndex,
      feedbackId: 'accessibility-q1-feedback',
    })
  );

  assert.match(markup, /Верно\./);
  assert.match(markup, /Пояснение к ответу\./);
  assert.doesNotMatch(markup, /Правильный ответ:/);
});

test('correctness is exposed as live text while correctness icons remain decorative', () => {
  const feedbackMarkup = renderToStaticMarkup(
    createElement(QuestionFeedback, {
      question: accessibilityQuestion,
      chosen: 0,
      feedbackId: 'accessibility-q1-feedback',
    })
  );
  const source = readFileSync(
    new URL('../src/components/activities/QuestionSet.tsx', import.meta.url),
    'utf8'
  );

  assert.match(feedbackMarkup, /role="status"/);
  assert.match(feedbackMarkup.replace(/<[^>]+>/g, ''), /Неверно\. Правильный ответ:/);
  assert.match(source, /CheckCircle2 aria-hidden="true"/);
  assert.match(source, /XCircle aria-hidden="true"/);
});

test('duplicate question IDs across reading and listening activities are rejected', () => {
  const reading: LessonActivity = {
    ...PROSE_READING_FIXTURE,
    id: 'reading-a',
    questions: [{ ...PROSE_READING_FIXTURE.questions[0], id: 'q1' }],
    passCount: 1,
  };
  const listening: LessonActivity = {
    kind: 'listening',
    id: 'listening-a',
    assetId: 'fixture-listening',
    audioStatus: 'missing',
    transcript: 'Fixture transcript.',
    questions: [{ ...accessibilityQuestion, id: 'q1' }],
  };

  assert.deepEqual(validateLessonQuestionIds([reading, listening]), [
    'duplicate lesson question id q1 in activities reading-a and listening-a',
  ]);
});

test('frozen L15 question IDs remain exact and valid at lesson scope', () => {
  const questionBearingActivities = l15Activities().filter(
    (activity) => activity.kind === 'reading' || activity.kind === 'listening'
  );
  assert.deepEqual(
    questionBearingActivities.flatMap((activity) => activity.questions.map((question) => question.id)),
    [
      'l15-menu-q1',
      'l15-menu-q2',
      'l15-menu-q3',
      'l15-menu-q4',
      'l15-list-q1',
      'l15-list-q2',
      'l15-list-q3',
      'l15-list-q4',
    ]
  );
  assert.deepEqual(validateLessonQuestionIds(l15Activities()), []);
});

test('prose fixture remains valid with lesson-level question ID validation', () => {
  assert.deepEqual(validateActivity(PROSE_READING_FIXTURE), []);
  assert.deepEqual(validateLessonQuestionIds([PROSE_READING_FIXTURE]), []);
});

// =====================================================================
// LESSON 3 MIGRATION — A0 noun, article, and plural regressions
// =====================================================================

test('L3 preserves lesson identity, physical slides, and exactly five objective IDs', () => {
  const lessonMeta = LESSONS_META.find((lesson) => lesson.id === 3);

  assert.equal(LESSON_3.id, 3);
  assert.equal(LESSON_3.number, 3);
  assert.equal(LESSON_3.level, 'A0');
  assert.equal(LESSON_3.slidesCount, 11);
  assert.equal(lessonMeta?.title, LESSON_3.title);
  assert.equal(lessonMeta?.subtitle, LESSON_3.subtitle);
  assert.equal(lessonMeta?.description, LESSON_3.description);
  assert.equal(lessonMeta?.slidesCount, LESSON_3.slidesCount);
  assert.deepEqual(LESSON_3.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  assert.deepEqual(
    (LESSON_3.objectives ?? []).map((objective) => objective.id),
    [
      'l3_choose-article',
      'l3_form-plural',
      'l3_use-egy',
      'l3_plural-nouns-reading',
      'l3_write-plural',
    ]
  );
});

test('L3 removes the false plural article rule and keeps bounded safe examples', () => {
  const slide = LESSON_3.slides.find((candidate) => candidate.id === 3);
  assert.ok(slide);
  assert.ok(slide.body);
  assert.doesNotMatch(slide.body, /Когда говорят в общем или во множественном смысле/i);
  assert.doesNotMatch(slide.body, /артикль вообще не ставится/i);
  assert.match(slide.body, /egy[\s\S]*только с существительным в единственном числе/i);
  assert.match(slide.body, /множественное число = без артикля/);
  assert.match(slide.body, /Vannak könyvek\./);
  assert.match(slide.body, /A könyvek az asztalon vannak\./);
  assert.match(slide.body, /Szeretem a könyveket\./);
});

test('L3 adds only the approved activity sequence and every activity validates', () => {
  assert.deepEqual(
    l3Activities().map((activity) => activity.id),
    [
      'l3-cp-articles',
      'l3-cp-egy',
      'l3-cp-plurals',
      'l3-reading-room',
      'l3-cp-written-phrases',
      'l3-writing-room',
      'l3-exit-check',
    ]
  );
  for (const activity of l3Activities()) {
    assert.deepEqual(validateActivity(activity), [], `L3 activity ${activity.id} has errors`);
  }
});

test('L3 prose ReadingTask is non-empty, valid, and renders through the shared renderer', () => {
  const reading = findL3Activity('l3-reading-room', 'reading');
  assert.deepEqual(validateActivity(reading), []);
  const content = resolveReadingContent(reading);
  assert.equal(content.type, 'prose');
  if (content.type === 'prose') {
    assert.ok(content.paragraphs.length > 0);
    assert.ok(content.paragraphs.every((paragraph) => paragraph.trim().length > 0));
  }

  const markup = renderToStaticMarkup(
    createElement(LessonActivityRenderer, {
      activity: reading,
      objectives: LESSON_3.objectives,
      onEvidence: () => undefined,
    })
  );
  assert.match(markup, /data-lesson-activity/);
  assert.match(markup, /<article/);
  assert.match(markup, /Ez egy szoba\./);
  assert.match(markup, /l3-reading-q1-prompt/);
});

test('L3 ReadingTask question IDs are unique at lesson scope', () => {
  const questionIds = l3Activities().flatMap((activity) =>
    activity.kind === 'reading' || activity.kind === 'listening'
      ? activity.questions.map((question) => question.id)
      : []
  );
  assert.equal(new Set(questionIds).size, questionIds.length);
  assert.deepEqual(validateLessonQuestionIds(l3Activities()), []);
});

test('l3_choose-article has balanced 8/10 DIRECT controlled evidence', () => {
  const activity = findL3Activity('l3-cp-articles', 'controlledPractice');
  assert.equal(activity.exercises.length, 10);
  assert.equal(activity.passCount, 8);
  const correctAnswers = activity.exercises.map((exercise) => {
    assert.equal(exercise.kind, 'singleChoice');
    if (exercise.kind !== 'singleChoice') return '';
    return exercise.options[exercise.correctIndex];
  });
  assert.equal(correctAnswers.filter((answer) => answer === 'a').length, 5);
  assert.equal(correctAnswers.filter((answer) => answer === 'az').length, 5);
  assert.deepEqual(controlledEvidence(true, 8, 10, 8), {
    completed: true,
    passed: true,
    evidenceMode: 'direct',
    score: 8,
    total: 10,
  });
});

test('l3_form-plural has bounded exact-input 8/10 DIRECT evidence with diacritics preserved', () => {
  const activity = findL3Activity('l3-cp-plurals', 'controlledPractice');
  assert.equal(activity.exercises.length, 10);
  assert.equal(activity.passCount, 8);
  assert.ok(activity.exercises.every((exercise) => exercise.kind === 'textInput'));
  assert.equal(isAnswerAccepted(' ALMÁK. ', ['almák']), true);
  assert.equal(isAnswerAccepted('almak', ['almák']), false);
  assert.equal(controlledEvidence(true, 8, 10, 8).evidenceMode, 'direct');
  assert.equal(controlledEvidence(true, 8, 10, 8).passed, true);
});

test('l3_plural-nouns-reading DIRECT evidence uses five plural-focused questions at 4/5', () => {
  const activity = findL3Activity('l3-reading-room', 'reading');
  const pluralForms = ['könyvek', 'almák', 'székek', 'ablakok'];
  const expectedAnswers = ['книги', 'яблоки', 'стулья', 'Окна большие.', 'könyvek, almák, székek, ablakok'];
  const nonPluralQuestions = activity.questions.filter((question) => {
    const scoredContent = [question.question, ...question.options, question.explanation ?? ''].join(' ');
    return !pluralForms.some((form) => scoredContent.includes(form));
  });

  assert.equal(activity.questions.length, 5);
  assert.equal(activity.passCount, 4);
  assert.equal(nonPluralQuestions.length, 0, 'generic questions must not substitute for plural comprehension');
  assert.deepEqual(
    activity.questions.map((question) => question.options[question.correctIndex]),
    expectedAnswers
  );
  assert.deepEqual(readingEvidence(4, 5, activity.passCount), {
    passed: true,
    evidenceMode: 'direct',
    score: 4,
    total: 5,
  });
  assert.equal(readingEvidence(3, 5, activity.passCount).passed, false);
});

test('l3_write-plural has valid constrained 4/5 DIRECT written evidence', () => {
  const activity = findL3Activity('l3-cp-written-phrases', 'controlledPractice');
  assert.equal(activity.exercises.length, 5);
  assert.equal(activity.passCount, 4);
  assert.ok(activity.exercises.every((exercise) => exercise.kind === 'textInput'));
  const applePhrase = activity.exercises.find((exercise) => exercise.id === 'l3-phrase-3');
  assert.ok(applePhrase && applePhrase.kind === 'textInput');
  assert.equal(isAnswerAccepted(' Az almák. ', applePhrase.accept), true);
  assert.equal(isAnswerAccepted('az almak', applePhrase.accept), false);
  assert.equal(controlledEvidence(true, 4, 5, 4).passed, true);
  assert.equal(controlledEvidence(true, 4, 5, 4).evidenceMode, 'direct');

  const exitCheck = findL3Activity('l3-exit-check', 'exitCheck');
  assert.deepEqual(
    exitCheck.checks.filter((check) => check.objectiveId === 'l3_write-plural'),
    [
      {
        objectiveId: 'l3_write-plural',
        activityId: 'l3-cp-written-phrases',
        evidenceKind: 'writing',
      },
    ]
  );
});

test('L3 open WritingTask remains PARTIAL practice outside ExitCheck mastery mapping', () => {
  const activity = findL3Activity('l3-writing-room', 'writing');
  const result = writingEvidence(activity.modelAnswer.join(' '), true);
  assert.equal(result.completed, true);
  assert.equal(result.evidenceMode, 'partial');
  assert.equal(result.passed, false);
  const exitCheck = findL3Activity('l3-exit-check', 'exitCheck');
  assert.equal(exitCheck.checks.some((check) => check.activityId === activity.id), false);
});

test('l3_use-egy stays overall PARTIAL when only grammar has DIRECT evidence', () => {
  const activity = findL3Activity('l3-cp-egy', 'controlledPractice');
  assert.equal(activity.exercises.length, 6);
  assert.equal(activity.passCount, 5);
  assert.equal(controlledEvidence(true, 5, 6, 5).evidenceMode, 'direct');

  const exitCheck = findL3Activity('l3-exit-check', 'exitCheck');
  const egyChecks = exitCheck.checks.filter((check) => check.objectiveId === 'l3_use-egy');
  assert.deepEqual(egyChecks, [
    {
      objectiveId: 'l3_use-egy',
      activityId: 'l3-cp-egy',
      evidenceKind: 'grammar',
      practiceComponents: ['speaking'],
    },
  ]);
  assert.equal(egyChecks.some((check) => check.evidenceKind === 'speaking'), false);
  assert.deepEqual(egyChecks[0].practiceComponents, ['speaking']);

  const grammarEvidence: ActivityEvidence = {
    activityId: activity.id,
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed: true,
    score: 5,
    total: 6,
  };
  assert.deepEqual(describeExitCheckStatus(egyChecks[0], grammarEvidence), {
    kind: 'partial-components',
    label: 'PARTIAL · не все компоненты подтверждены',
  });

  const markup = renderToStaticMarkup(
    createElement(LessonActivityRenderer, {
      activity: exitCheck,
      evidence: { [activity.id]: grammarEvidence },
      objectives: LESSON_3.objectives,
    })
  );
  const row = markup.match(/<li[^>]*data-objective-id="l3_use-egy"[\s\S]*?<\/li>/)?.[0];
  assert.ok(row);
  const rowText = row.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  assert.match(rowText, /Грамматика · 5\/6 · DIRECT · met/);
  assert.match(rowText, /Говорение · PRACTICE · not qualified/);
  assert.match(rowText, /Итог: PARTIAL · не все компоненты подтверждены/);
  assert.doesNotMatch(rowText, /Итог: .*DIRECT · met/);
});

test('L3 ExitCheck covers all five objectives and every reference resolves', () => {
  const exitCheck = findL3Activity('l3-exit-check', 'exitCheck');
  const objectiveIds = (LESSON_3.objectives ?? []).map((objective) => objective.id);
  const coveredObjectiveIds = new Set(exitCheck.checks.map((check) => check.objectiveId));
  assert.deepEqual([...coveredObjectiveIds].sort(), [...objectiveIds].sort());
  assert.deepEqual(
    validateExitCheckReferences(exitCheck, objectiveIds, l3Activities().map((activity) => activity.id)),
    []
  );
});

test('L3 ExitCheck evidence kinds match the actual generic activity producers', () => {
  const exitCheck = findL3Activity('l3-exit-check', 'exitCheck');
  const activityById = new Map(l3Activities().map((activity) => [activity.id, activity]));
  for (const check of exitCheck.checks) {
    const producer = activityById.get(check.activityId);
    assert.ok(producer, `missing producer ${check.activityId}`);
    if (check.evidenceKind === 'reading') {
      assert.equal(producer.kind, 'reading');
    } else if (check.evidenceKind === 'grammar') {
      assert.equal(producer.kind, 'controlledPractice');
    } else if (check.evidenceKind === 'writing') {
      assert.ok(
        producer.kind === 'controlledPractice' || producer.kind === 'writing',
        `${producer.id} cannot produce writing evidence`
      );
    } else {
      assert.fail(`unexpected L3 evidence kind ${check.evidenceKind}`);
    }
  }
});

test('L3 Q303 has unique options and one intended answer', () => {
  const q303 = (LESSON_3.quiz ?? []).find((question) => question.id === 303);
  assert.ok(q303);
  assert.equal(new Set(q303.options).size, q303.options.length);
  assert.equal(q303.options[q303.correctIndex], 'almák');
  assert.equal(q303.options.filter((option) => option === 'almák').length, 1);
});

test('all L3 retrieval questions have unique options and the intended in-scope answer', () => {
  const expectedAnswers = new Map<number, string>([
    [301, 'az'],
    [302, '-k'],
    [303, 'almák'],
    [304, 'öt könyv'],
    [305, 'Существительные изменяются по родам (мужской, женский, средний)'],
    [306, 'Itt van egy diák.'],
  ]);
  const quiz = getLessonQuiz(LESSON_3);
  assert.deepEqual(quiz.map((question) => question.id), [301, 302, 303, 304, 305, 306]);
  for (const question of quiz) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.equal(question.options[question.correctIndex], expectedAnswers.get(question.id));
  }
  assert.doesNotMatch(quiz.find((question) => question.id === 306)?.question ?? '', /урок[ае]?\s+\d/i);
});

test('L3 introduces neither ListeningTask nor RolePlay', () => {
  const kinds = l3Activities().map((activity) => activity.kind);
  assert.equal(kinds.includes('listening'), false);
  assert.equal(kinds.includes('rolePlay'), false);
});

test('L3 vocabulary keeps articles and base lexemes instead of counting plural forms as lexemes', () => {
  const vocabulary = getLessonVocabulary(LESSON_3);
  assert.deepEqual(vocabulary.map((item) => item.hu), ['a', 'az', 'egy', 'ház', 'könyv', 'asztal']);
  assert.equal(vocabulary.some((item) => ['házak', 'könyvek', 'asztalok'].includes(item.hu)), false);
  assert.ok(vocabulary.slice(3).every((item) => item.category === 'Предметы'));
});

test('L3 prose and questions expose responsive wrapping and keyboard focus hooks', () => {
  const reading = findL3Activity('l3-reading-room', 'reading');
  const markup = renderToStaticMarkup(
    createElement(ReadingTask, {
      data: reading,
      onEvidence: () => undefined,
      onResetEvidence: () => undefined,
    })
  );
  assert.match(markup, /min-w-0/);
  assert.match(markup, /max-w-\[70ch\]/);
  assert.match(markup, /\[overflow-wrap:anywhere\]/);
  assert.match(markup, /focus-visible:ring-2/);
  assert.match(markup, /type="button"/);
  assert.match(markup, /aria-labelledby="l3-reading-q1-prompt"/);
});

// =====================================================================
// LESSON 4 MIGRATION — A0 present tense regressions
// =====================================================================

test('L4 preserves lesson identity, 12 physical slides, and all five objective IDs', () => {
  assert.equal(LESSON_4.id, 4);
  assert.equal(LESSON_4.number, 4);
  assert.equal(LESSON_4.level, 'A0');
  assert.equal(LESSON_4.slidesCount, 12);
  assert.deepEqual(LESSON_4.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  assert.deepEqual(
    (LESSON_4.objectives ?? []).map((objective) => objective.id),
    [
      'l4_conjugate-present',
      'l4_use-verbs-context',
      'l4_recognize-forms',
      'l4_build-sentences',
      'l4_ask-questions',
    ]
  );
});

test('frozen L3 and L15 lesson files remain byte-for-byte unchanged', () => {
  assert.equal(
    sha256(new URL('../src/data/lessons/lesson3.ts', import.meta.url)),
    '7FF81838BB2610D46A5B1F93408A419D7D668287388F705D75F3AAF3D0F898BF'
  );
  assert.equal(
    sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)),
    '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586'
  );
});

test('L4 adds only the approved generic activity kinds and every activity validates', () => {
  assert.deepEqual(
    l4Activities().map((activity) => activity.id),
    [
      'l4-cp-recognize-text',
      'l4-cp-conjugation',
      'l4-cp-negation',
      'l4-listening-present-forms',
      'l4-cp-questions',
      'l4-cp-context',
      'l4-writing-actions',
      'l4-exit-check',
    ]
  );
  for (const activity of l4Activities()) {
    assert.deepEqual(validateActivity(activity), [], `L4 activity ${activity.id} has errors`);
  }
  assert.equal(l4Activities().some((activity) => activity.kind === 'rolePlay'), false);
  assert.equal(l4Activities().some((activity) => activity.kind === 'reading'), false);
});

test('l4_conjugate-present has 8/10 DIRECT exact-form evidence', () => {
  const activity = findL4Activity('l4-cp-conjugation', 'controlledPractice');
  assert.equal(activity.exercises.length, 10);
  assert.equal(activity.passCount, 8);
  assert.ok(activity.exercises.every((exercise) => exercise.kind === 'textInput'));
  assert.deepEqual(controlledEvidence(true, 8, 10, 8), {
    completed: true,
    passed: true,
    evidenceMode: 'direct',
    score: 8,
    total: 10,
  });
  assert.equal(controlledEvidence(true, 7, 10, 8).passed, false);
});

test('L4 conjugation practice covers all six persons and multiple verbs/vowel patterns', () => {
  const activity = findL4Activity('l4-cp-conjugation', 'controlledPractice');
  const persons = new Set(activity.exercises.map((exercise) => exercise.prompt.split('+')[0].trim()));
  const verbs = new Set(
    activity.exercises.map((exercise) => exercise.prompt.split('+')[1]?.split('→')[0].trim())
  );
  const accepted = activity.exercises.flatMap((exercise) =>
    exercise.kind === 'singleChoice' ? [exercise.options[exercise.correctIndex]] : exercise.accept
  );

  assert.deepEqual([...persons].sort(), ['mi', 'te', 'ti', 'én', 'ők', 'ő'].sort());
  assert.ok(verbs.size >= 6);
  assert.ok(accepted.includes('tanulok'));
  assert.ok(accepted.includes('kérek'));
  assert.ok(accepted.includes('kötünk'));
  assert.equal(isAnswerAccepted('kotunk', ['kötünk']), false);
});

test('L4 frames -ik as a preview linked to L14, not as complete mastery', () => {
  const preview = LESSON_4.slides.find((slide) => slide.id === 7);
  const summary = LESSON_4.slides.find((slide) => slide.id === 12);
  assert.ok(preview?.body);
  assert.ok(summary?.body);
  assert.match(preview.body, /только <b>первое знакомство<\/b>/i);
  assert.match(preview.body, /уроке 14/i);
  assert.match(summary.body, /предварительно/i);
  assert.match(summary.body, /уроке 14/i);
});

test('eszik is explicitly special and never supports a false universal -ik rule', () => {
  const source = readFileSync(new URL('../src/data/lessons/lesson4.ts', import.meta.url), 'utf8');
  assert.match(source, /eszik<\/span> имеет форму <span class="hu-word">eszem/);
  assert.match(source, /не универсальная формула/i);
  assert.doesNotMatch(source, /удал(?:ить|яем)\s+-?ik[\s\S]{0,80}добав/i);

  const conjugation = findL4Activity('l4-cp-conjugation', 'controlledPractice');
  assert.equal(conjugation.exercises.some((exercise) => exercise.prompt.includes('eszik')), false);
});

test('l4_build-sentences has explicit 4/5 controlled writing evidence using nem', () => {
  const activity = findL4Activity('l4-cp-negation', 'controlledPractice');
  assert.equal(activity.exercises.length, 5);
  assert.equal(activity.passCount, 4);
  assert.ok(activity.exercises.every((exercise) => exercise.kind === 'textInput'));
  for (const exercise of activity.exercises) {
    assert.ok(exercise.kind === 'textInput');
    assert.ok(exercise.accept.every((answer) => /\bnem\b/iu.test(answer)));
  }
  assert.equal(controlledEvidence(true, 4, 5, 4).passed, true);
  assert.equal(controlledEvidence(true, 3, 5, 4).passed, false);
});

test('l4_build-sentences is overall PARTIAL after qualified grammar/writing evidence', () => {
  const exitCheck = findL4Activity('l4-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l4_build-sentences');
  assert.ok(check);
  assert.deepEqual(check.practiceComponents, ['speaking']);
  assert.deepEqual(check.evidenceComponents, [
    { activityId: 'l4-cp-negation', evidenceKind: 'grammar' },
  ]);
  const direct: ActivityEvidence = {
    activityId: 'l4-cp-negation',
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed: true,
    score: 4,
    total: 5,
  };
  assert.equal(describeExitCheckStatus(check, direct, { [direct.activityId]: direct }).kind, 'partial-components');
});

test('l4_use-verbs-context has qualified constrained contextual evidence', () => {
  const activity = findL4Activity('l4-cp-context', 'controlledPractice');
  assert.equal(activity.exercises.length, 5);
  assert.equal(activity.passCount, 4);
  assert.ok(activity.exercises.every((exercise) => exercise.kind === 'textInput'));
  const prompts = activity.exercises.map((exercise) => exercise.prompt).join(' ');
  for (const meaning of ['учу венгерский', 'читаешь', 'пишем', 'говорят', 'работает']) {
    assert.match(prompts, new RegExp(meaning, 'i'));
  }
  assert.equal(controlledEvidence(true, 4, 5, 4).evidenceMode, 'direct');
});

test('l4_use-verbs-context keeps direct grammar/writing plus unqualified speaking overall PARTIAL', () => {
  const exitCheck = findL4Activity('l4-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l4_use-verbs-context');
  assert.ok(check);
  assert.equal(check.evidenceKind, 'writing');
  assert.deepEqual(check.evidenceComponents, [
    { activityId: 'l4-cp-context', evidenceKind: 'grammar' },
  ]);
  assert.deepEqual(check.practiceComponents, ['speaking']);
  const direct: ActivityEvidence = {
    activityId: 'l4-cp-context',
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed: true,
    score: 4,
    total: 5,
  };
  assert.equal(describeExitCheckStatus(check, direct, { [direct.activityId]: direct }).kind, 'partial-components');
});

test('L4 open WritingTask remains self-reviewed PARTIAL and is not the sole direct source', () => {
  const writing = findL4Activity('l4-writing-actions', 'writing');
  assert.match(writing.prompt, /3–4/);
  assert.match(writing.prompt, /отрицательным с nem/);
  const result = writingEvidence(writing.modelAnswer.join(' '), true);
  assert.equal(result.completed, true);
  assert.equal(result.evidenceMode, 'partial');
  assert.equal(result.passed, false);
  const exitCheck = findL4Activity('l4-exit-check', 'exitCheck');
  assert.equal(exitCheck.checks.some((check) => check.activityId === writing.id), false);
});

test('l4_ask-questions has 4/5 written grammar evidence without English-style inversion', () => {
  const activity = findL4Activity('l4-cp-questions', 'controlledPractice');
  assert.equal(activity.exercises.length, 5);
  assert.equal(activity.passCount, 4);
  assert.ok(activity.exercises.every((exercise) => exercise.kind === 'textInput'));
  assert.ok(activity.exercises.every((exercise) => exercise.prompt.includes('→ ?')));
  assert.ok(activity.exercises.some((exercise) => exercise.explanation?.includes('инверсия не нужна')));
  assert.ok(activity.exercises.some((exercise) => exercise.explanation?.includes('интонация')));
  assert.equal(controlledEvidence(true, 4, 5, 4).passed, true);
});

test('l4_ask-questions remains overall PARTIAL because speaking/intonation is practice-only', () => {
  const exitCheck = findL4Activity('l4-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l4_ask-questions');
  assert.ok(check);
  assert.equal(check.activityId, 'l4-cp-questions');
  assert.equal(check.evidenceKind, 'grammar');
  assert.deepEqual(check.practiceComponents, ['speaking']);
  const direct: ActivityEvidence = {
    activityId: check.activityId,
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed: true,
    score: 4,
    total: 5,
  };
  assert.equal(describeExitCheckStatus(check, direct).kind, 'partial-components');
});

test('L4 short spoken recorder practice is explicit and never claims automatic scoring', () => {
  const slide = LESSON_4.slides.find((candidate) => candidate.id === 12);
  assert.ok(slide);
  assert.equal(slide.type, 'sentence-reading');
  assert.match(slide.targetText ?? '', /tanulok/);
  assert.match(slide.targetText ?? '', /Nem olvasok/);
  assert.match(slide.targetText ?? '', /Tanulsz magyarul\?/);
  assert.match(slide.targetPhonetic ?? '', /танулок/);
  assert.doesNotMatch(slide.targetPhonetic ?? '', /будапэштэн/i);
  assert.match(slide.task ?? '', /не оценивается автоматически/i);
  assert.match(slide.task ?? '', /не является доказательством mastery/i);

  const recorderSource = readFileSync(
    new URL('../src/components/AudioRecorder.tsx', import.meta.url),
    'utf8'
  );
  assert.match(
    recorderSource,
    /Не удалось получить доступ к микрофону\. Проверьте разрешения браузера\./
  );
});

test('L4 ListeningTask and required asset IDs are exact', () => {
  const listening = findL4Activity('l4-listening-present-forms', 'listening');
  assert.equal(listening.id, 'l4-listening-present-forms');
  assert.equal(listening.assetId, 'l4_listening_present_forms');
  assert.equal(listening.questions.length, 5);
  assert.equal(listening.passCount, 4);
  assert.ok(listening.transcript.trim().length > 0);
});

test('L4 missing listening asset produces NONE and can never pass', () => {
  const listening = findL4Activity('l4-listening-present-forms', 'listening');
  assert.equal(listening.audioStatus, 'missing');
  assert.equal(canProduceDirectListeningEvidence(listening), false);
  assert.deepEqual(listeningEvidence(listening, 5, 5), {
    passed: false,
    evidenceMode: 'none',
    score: 5,
    total: 5,
  });
});

test('published L4 listening state requires a real asset through the configured path', () => {
  const listening = findL4Activity('l4-listening-present-forms', 'listening');
  if (listening.audioStatus === 'published') {
    const localAsset = new URL(`../public/audio/${listening.assetId}.mp3`, import.meta.url);
    assert.equal(existsSync(localAsset), true);
    assert.match(audioUrl(`${listening.assetId}.mp3`), /l4_listening_present_forms\.mp3$/);
  } else {
    assert.equal(existsSync(new URL(`../public/audio/${listening.assetId}.mp3`, import.meta.url)), false);
  }
});

test('L4 listening transcript stays post-answer and questions map heard forms to person/action', () => {
  const listening = findL4Activity('l4-listening-present-forms', 'listening');
  const questions = legacyChoiceQuestions(listening);
  assert.equal(shouldShowTranscript(false), false);
  assert.equal(shouldShowTranscript(true), true);
  const visibleBeforeAnswer = questions
    .flatMap((question) => [question.question, ...question.options])
    .join(' ');
  assert.doesNotMatch(visibleBeforeAnswer, /tanulok|olvasol|beszélünk|dolgoznak/);
  assert.deepEqual(
    questions.map((question) => question.options[question.correctIndex]),
    ['én', 'читать — olvas', 'ő', 'mi', 'ők']
  );
});

test('L4 has parallel 4/5 written person-form recognition', () => {
  const recognition = findL4Activity('l4-cp-recognize-text', 'controlledPractice');
  assert.equal(recognition.exercises.length, 5);
  assert.equal(recognition.passCount, 4);
  assert.ok(recognition.exercises.every((exercise) => exercise.kind === 'textInput'));
  assert.deepEqual(
    recognition.exercises.map((exercise) => exercise.kind === 'textInput' ? exercise.accept[0] : ''),
    ['mi', 'te', 'ők', 'én', 'ő']
  );
  assert.equal(controlledEvidence(true, 4, 5, 4).passed, true);
});

test('written recognition preserves PARTIAL mixed-objective evidence when listening is missing', () => {
  const exitCheck = findL4Activity('l4-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l4_recognize-forms');
  assert.ok(check);
  const textEvidence: ActivityEvidence = {
    activityId: 'l4-cp-recognize-text',
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed: true,
    score: 4,
    total: 5,
  };
  assert.equal(
    describeExitCheckStatus(check, undefined, { [textEvidence.activityId]: textEvidence }).kind,
    'composite-incomplete'
  );
  const missingListening: ActivityEvidence = {
    activityId: 'l4-listening-present-forms',
    attempted: true,
    completed: true,
    evidenceMode: 'none',
    passed: false,
    score: 5,
    total: 5,
  };
  assert.equal(
    describeExitCheckStatus(check, missingListening, {
      [textEvidence.activityId]: textEvidence,
      [missingListening.activityId]: missingListening,
    }).kind,
    'partial-review'
  );
});

test('L4 ExitCheck has one row per objective and every composite reference resolves', () => {
  const exitCheck = findL4Activity('l4-exit-check', 'exitCheck');
  const objectiveIds = (LESSON_4.objectives ?? []).map((objective) => objective.id);
  assert.equal(exitCheck.checks.length, objectiveIds.length);
  assert.deepEqual(exitCheck.checks.map((check) => check.objectiveId), objectiveIds);
  assert.deepEqual(
    validateExitCheckReferences(exitCheck, objectiveIds, l4Activities().map((activity) => activity.id)),
    []
  );
});

test('L4 composite ExitCheck remains readable and exposes each component textually', () => {
  const exitCheck = findL4Activity('l4-exit-check', 'exitCheck');
  const textEvidence: ActivityEvidence = {
    activityId: 'l4-cp-recognize-text',
    attempted: true,
    completed: true,
    evidenceMode: 'direct',
    passed: true,
    score: 4,
    total: 5,
  };
  const markup = renderToStaticMarkup(
    createElement(LessonActivityRenderer, {
      activity: exitCheck,
      evidence: { [textEvidence.activityId]: textEvidence },
      objectives: LESSON_4.objectives,
    })
  );
  const row = markup.match(/<li[^>]*data-objective-id="l4_recognize-forms"[\s\S]*?<\/li>/)?.[0];
  assert.ok(row);
  const rowText = row.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  assert.match(rowText, /Аудирование/);
  assert.match(rowText, /Чтение · l4-cp-recognize-text · 4\/5 · DIRECT · met/);
  assert.match(rowText, /Итог: INCOMPLETE · не все обязательные компоненты подтверждены/);
});

test('L4 listening question IDs are unique lesson-wide', () => {
  const questionIds = l4Activities().flatMap((activity) =>
    activity.kind === 'reading' || activity.kind === 'listening'
      ? activity.questions.map((question) => question.id)
      : []
  );
  assert.equal(new Set(questionIds).size, questionIds.length);
  assert.deepEqual(validateLessonQuestionIds(l4Activities()), []);
});

test('all L4 retrieval questions have unique options and one intended in-scope answer', () => {
  const expectedAnswers = new Map<number, string>([
    [401, 'vár'],
    [402, '-ok'],
    [403, 'olvasol'],
    [404, 'lakom'],
    [405, '-ja'],
    [406, 'Magyarul nem tanulunk.'],
  ]);
  const quiz = getLessonQuiz(LESSON_4);
  assert.deepEqual(quiz.map((question) => question.id), [401, 402, 403, 404, 405, 406]);
  for (const question of quiz) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.equal(question.options[question.correctIndex], expectedAnswers.get(question.id));
    assert.doesNotMatch(question.question, /в каком уроке|номер урока/i);
  }
});

test('changed L4 quiz items preserve the bounded regular/-ik/negation scope', () => {
  const quiz = getLessonQuiz(LESSON_4);
  const q401 = quiz.find((question) => question.id === 401);
  const q404 = quiz.find((question) => question.id === 404);
  const q406 = quiz.find((question) => question.id === 406);
  assert.ok(q401 && q404 && q406);
  assert.equal(q401.options[q401.correctIndex], 'vár');
  assert.match(q401.explanation, /обычного глагола/i);
  assert.equal(q404.options[q404.correctIndex], 'lakom');
  assert.match(q404.explanation, /eszik → eszem/);
  assert.match(q404.explanation, /не универсальная формула/i);
  assert.equal(q406.options[q406.correctIndex], 'Magyarul nem tanulunk.');
  assert.match(q406.explanation, /nem ставится перед спрягаемым глаголом/i);
});

test('L4 lesson-local vocabulary is rebalanced to base verbs plus functional nem', () => {
  const vocabulary = getLessonVocabulary(LESSON_4);
  assert.deepEqual(
    vocabulary.map((item) => item.hu),
    ['tanul', 'olvas', 'ír', 'beszél', 'dolgozik', 'lakik', 'nem']
  );
  assert.equal(vocabulary.some((item) => ['tanulok', 'olvasol', 'tanulunk'].includes(item.hu)), false);
  assert.equal(vocabulary.find((item) => item.hu === 'nem')?.category, 'Functional Core');
  assert.ok(vocabulary.filter((item) => item.category === '-ik Preview').every((item) => item.baseWord === item.hu));
});

test('LESSONS_META L4 matches the migrated lesson module exactly', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 4);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_4.title);
  assert.equal(meta.subtitle, LESSON_4.subtitle);
  assert.equal(meta.description, LESSON_4.description);
  assert.equal(meta.slidesCount, LESSON_4.slidesCount);
  assert.equal(meta.level, LESSON_4.level);
});

// =====================================================================
// LESSON 2 MIGRATION — A0 greetings, pronouns, and lenni regressions
// =====================================================================

test('L2 preserves lesson identity and light A0 architecture', () => {
  assert.equal(LESSON_2.id, 2);
  assert.equal(LESSON_2.number, 2);
  assert.equal(LESSON_2.level, 'A0');
  assert.equal(LESSON_2.slidesCount, 10);
});

test('L2 physical slide IDs remain exactly 1..10', () => {
  assert.deepEqual(LESSON_2.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('L2 preserves all five objective IDs exactly', () => {
  assert.deepEqual(
    (LESSON_2.objectives ?? []).map((objective) => objective.id),
    [
      'l2_greet-introduce',
      'l2_use-pronouns',
      'l2_conjugate-lenni',
      'l2_introduce-self',
      'l2_ask-answer-questions',
    ]
  );
});

test('L2 migration keeps the curriculum at exactly 139 objectives', async () => {
  let objectiveCount = 0;
  for (const meta of LESSONS_META) {
    objectiveCount += (await loadLesson(meta.id))?.objectives?.length ?? 0;
  }
  assert.equal(objectiveCount, 139);
});

test('L3, L4, and L15 lesson files remain byte-for-byte frozen through L2 migration', () => {
  assert.equal(
    sha256(new URL('../src/data/lessons/lesson3.ts', import.meta.url)),
    '7FF81838BB2610D46A5B1F93408A419D7D668287388F705D75F3AAF3D0F898BF'
  );
  assert.equal(
    sha256(new URL('../src/data/lessons/lesson4.ts', import.meta.url)),
    'E44AFA95D968A513F649C3B193AE2CEED588596DA53EEFB1008132ED1A3D4852'
  );
  assert.equal(
    sha256(new URL('../src/data/lessons/lesson15.ts', import.meta.url)),
    '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586'
  );
});

test('frozen planning documents remain byte-for-byte unchanged through L2 migration', () => {
  assert.equal(
    sha256(new URL('../docs/LESSON_MIGRATION_MATRIX.md', import.meta.url)),
    '59F6519EEEE5EF4D48978DC0409145F2DC35CF59787AC05B00E31AC36BF91DDE'
  );
  assert.equal(
    sha256(new URL('../docs/CURRICULUM_BLUEPRINT.md', import.meta.url)),
    'B8F4165A237CC7B511D3AA108F5418CE2BAB2DB8DD39E3A394013B0F6491FC2E'
  );
  assert.equal(
    sha256(new URL('../docs/MODEL_LESSON_L15_SPEC.md', import.meta.url)),
    '94FB08607855A6A7759916AFA8E8424FDEB136F241ADC7020FBDD9339E86AD30'
  );
});

test('L2 adds the approved activity sequence and every activity validates generically', () => {
  assert.deepEqual(
    l2Activities().map((activity) => activity.id),
    [
      'l2-cp-pronoun-referents',
      'l2-cp-pronoun-context',
      'l2-cp-lenni',
      'l2-listening-introduction',
      'l2-roleplay-greetings',
      'l2-writing-self-introduction',
      'l2-exit-check',
    ]
  );
  assert.equal(new Set(l2Activities().map((activity) => activity.id)).size, 7);
  for (const activity of l2Activities()) {
    assert.deepEqual(validateActivity(activity), [], `L2 activity ${activity.id} has errors`);
  }
});

test('L2 adds no optional ReadingTask merely to increase component count', () => {
  assert.equal(l2Activities().some((activity) => activity.kind === 'reading'), false);
});

test('shared activity logic contains no L2-specific branch', () => {
  for (const path of [
    '../src/utils/activityUtils.ts',
    '../src/components/activities/RolePlay.tsx',
  ]) {
    const source = readFileSync(new URL(path, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /LESSON_2|l2-|lesson(?:Id)?\s*===\s*2/i, path);
  }
});

test('L2 pronoun referent control requires at least 5/6 DIRECT grammar evidence', () => {
  const activity = findL2Activity('l2-cp-pronoun-referents', 'controlledPractice');
  assert.equal(activity.exercises.length, 6);
  assert.equal(activity.passCount, 5);
  assert.equal(controlledEvidence(true, 4, 6, 5).passed, false);
  assert.equal(controlledEvidence(true, 5, 6, 5).passed, true);
});

test('L2 sentence pronoun control requires at least 4/5 DIRECT grammar evidence', () => {
  const activity = findL2Activity('l2-cp-pronoun-context', 'controlledPractice');
  assert.equal(activity.exercises.length, 5);
  assert.equal(activity.passCount, 4);
  assert.equal(controlledEvidence(true, 3, 5, 4).passed, false);
  assert.equal(controlledEvidence(true, 4, 5, 4).passed, true);
});

test('L2 pronoun control covers én, te, ő, mi, ti, ők', () => {
  const activity = findL2Activity('l2-cp-pronoun-referents', 'controlledPractice');
  const answers = activity.exercises.map((exercise) => {
    assert.equal(exercise.kind, 'singleChoice');
    return exercise.options[exercise.correctIndex];
  });
  assert.deepEqual(answers, ['én', 'te', 'ő', 'mi', 'ti', 'ők']);
});

test('both L2 pronoun components are required before the objective is DIRECT met', () => {
  const exitCheck = findL2Activity('l2-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l2_use-pronouns');
  assert.ok(check);
  const referents: ActivityEvidence = {
    activityId: 'l2-cp-pronoun-referents', attempted: true, completed: true,
    evidenceMode: 'direct', passed: true, score: 5, total: 6,
  };
  const context: ActivityEvidence = {
    activityId: 'l2-cp-pronoun-context', attempted: true, completed: true,
    evidenceMode: 'direct', passed: true, score: 4, total: 5,
  };
  assert.equal(describeExitCheckStatus(check, referents).kind, 'composite-incomplete');
  assert.equal(
    describeExitCheckStatus(check, referents, { [context.activityId]: context }).kind,
    'direct-met'
  );
});

test('L2 lenni control covers exactly the required six forms', () => {
  const activity = findL2Activity('l2-cp-lenni', 'controlledPractice');
  const accepted = activity.exercises.map((exercise) => {
    assert.equal(exercise.kind, 'textInput');
    return exercise.accept[0];
  });
  assert.deepEqual(accepted, ['vagyok', 'vagy', 'van', 'vagyunk', 'vagytok', 'vannak']);
});

test('L2 lenni criterion requires all 6/6 correct', () => {
  const activity = findL2Activity('l2-cp-lenni', 'controlledPractice');
  assert.equal(activity.passCount, 6);
  assert.equal(controlledEvidence(true, 5, 6, activity.passCount).passed, false);
  assert.equal(controlledEvidence(true, 6, 6, activity.passCount).passed, true);
});

test('L2 third-person lenni explanation covers noun, nationality, and adjective predicates', () => {
  const slide = LESSON_2.slides.find((candidate) => candidate.id === 3);
  assert.ok(slide?.body);
  assert.match(slide.body, /кто или что человек/);
  assert.match(slide.body, /какой он/);
  for (const example of ['Ő diák', 'Ő magyar', 'Ő szép']) {
    assert.match(slide.body, new RegExp(example));
  }
});

test('L2 location examples retain van and vannak', () => {
  const slide = LESSON_2.slides.find((candidate) => candidate.id === 3);
  assert.ok(slide?.body);
  assert.match(slide.body, /van\/vannak сохраняется/);
  assert.match(slide.body, /Ő itt van/);
  assert.match(slide.body, /Ők itt vannak/);
});

test('L2 keeps the third-person rule bounded without a copula or location grammar detour', () => {
  const slide = LESSON_2.slides.find((candidate) => candidate.id === 3);
  assert.ok(slide?.body);
  const warning = slide.body.match(/<div class="warn">([\s\S]*?)<\/div>/)?.[1] ?? '';
  assert.ok(warning.length > 0 && warning.length < 900);
  assert.doesNotMatch(warning, /парадигм|экзистенциаль|copula|existential|синтаксис/i);
  assert.match(warning, /достаточно различать эти готовые модели/);
  const q205 = getLessonQuiz(LESSON_2).find((question) => question.id === 205);
  assert.ok(q205);
  assert.ok(q205.options.some((option) => /профессии, национальности или качества/.test(option)));
});

test('L2 labels case-marked country and location forms as whole chunks', () => {
  const source = readFileSync(new URL('../src/data/lessons/lesson2.ts', import.meta.url), 'utf8');
  assert.match(source, /Örményországból vagyok[\s\S]{0,800}готовые цельные выражения/);
  assert.match(source, /Budapesten élek[\s\S]{0,800}Падежные окончания/);
  assert.match(source, /Формальные правила падежных форм будут позже/);
});

test('L2 does not introduce elative or superessive paradigms or case tables', () => {
  const source = readFileSync(new URL('../src/data/lessons/lesson2.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /-ból\s*\/\s*-ből|-n\s*\/\s*-on\s*\/\s*-en\s*\/\s*-ön/i);
  assert.doesNotMatch(source, /<th>[^<]*(элатив|суперессив|elative|superessive)/i);
  assert.match(source, /падежные правила здесь не проверяются/);
});

test('L2 ListeningTask identity, asset, question count, and threshold are stable', () => {
  const listening = findL2Activity('l2-listening-introduction', 'listening');
  assert.equal(listening.id, 'l2-listening-introduction');
  assert.equal(listening.assetId, 'l2_listening_introduction');
  assert.equal(listening.questions.length, 5);
  assert.equal(listening.passCount, 4);
  assert.match(listening.transcript, /^A:/);
  assert.match(listening.transcript, /\nB:/);
  const spokenWords = listening.transcript.replace(/\b[AB]:/g, '').trim().split(/\s+/);
  assert.ok(spokenWords.length >= 40 && spokenWords.length <= 60, `${spokenWords.length} words`);
});

test('absent L2 MP3 is represented honestly as audioStatus missing', () => {
  const listening = findL2Activity('l2-listening-introduction', 'listening');
  const path = new URL('../public/audio/l2_listening_introduction.mp3', import.meta.url);
  assert.equal(existsSync(path), false);
  assert.equal(listening.audioStatus, 'missing');
});

test('missing L2 audio produces NONE and cannot pass even at 5/5', () => {
  const listening = findL2Activity('l2-listening-introduction', 'listening');
  assert.equal(canProduceDirectListeningEvidence(listening), false);
  assert.deepEqual(listeningEvidence(listening, 5, 5), {
    passed: false,
    evidenceMode: 'none',
    score: 5,
    total: 5,
  });
});

test('L2 missing MP3 remains unavailable and cannot fall back to browser speech', () => {
  const listening = findL2Activity('l2-listening-introduction', 'listening');
  const source = readFileSync(
    new URL('../src/components/activities/ListeningTask.tsx', import.meta.url),
    'utf8'
  );
  assert.equal(canProduceDirectListeningEvidence(listening), false);
  assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance|speakText|TTS-превью/);
  assert.match(source, /До публикации записанного MP3 аудио недоступно/);
});

test('L2 listening questions test register, identity, basic detail, response, and closing', () => {
  const listening = findL2Activity('l2-listening-introduction', 'listening');
  const questions = legacyChoiceQuestions(listening);
  assert.deepEqual(
    questions.map((question) => question.options[question.correctIndex]),
    ['неофициальный', 'Péter vagyok.', 'Он венгр.', 'Хорошо, спасибо.', 'прощанием']
  );
  const prompts = questions.map((question) => question.question).join(' ');
  for (const target of ['регистр', 'Ki vagy te', 'сообщает о себе', 'самочувстви', 'заканчивается']) {
    assert.match(prompts, new RegExp(target, 'i'));
  }
});

test('L2 listening contains both taught prompts and directly scores Ki vagy te comprehension', () => {
  const listening = findL2Activity('l2-listening-introduction', 'listening');
  const questions = legacyChoiceQuestions(listening);
  assert.match(listening.transcript, /Hogy vagy\?/);
  assert.match(listening.transcript, /Ki vagy te\?/);
  const identityQuestion = questions.find((question) => /Ki vagy te/.test(question.question));
  assert.ok(identityQuestion);
  assert.equal(identityQuestion.options[identityQuestion.correctIndex], 'Péter vagyok.');
  assert.match(identityQuestion.explanation ?? '', /Кто ты/);
});

test('L2 listening transcript is gated until after submission', () => {
  assert.equal(shouldShowTranscript(false), false);
  assert.equal(shouldShowTranscript(true), true);
  const listening = findL2Activity('l2-listening-introduction', 'listening');
  const markup = renderToStaticMarkup(
    createElement(LessonActivityRenderer, { activity: listening, evidence: {}, objectives: LESSON_2.objectives })
  );
  assert.doesNotMatch(markup, /A: Szia! A nevem Anna/);
  const source = readFileSync(
    new URL('../src/components/activities/ListeningTask.tsx', import.meta.url),
    'utf8'
  );
  assert.match(source, /submitLabel="Ответить и показать transcript"/);
});

test('l2_greet-introduce remains overall PARTIAL with receptive DIRECT plus interaction', () => {
  const exitCheck = findL2Activity('l2-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l2_greet-introduce');
  assert.ok(check);
  const listening: ActivityEvidence = {
    activityId: 'l2-listening-introduction', attempted: true, completed: true,
    evidenceMode: 'direct', passed: true, score: 4, total: 5,
  };
  const interaction = rolePlayCompletionEvidence('l2-roleplay-greetings', true);
  assert.equal(
    describeExitCheckStatus(check, listening, { [interaction.activityId]: interaction }).kind,
    'partial-review'
  );
});

test('completed L2 interaction stays PARTIAL while required listening is missing', () => {
  const exitCheck = findL2Activity('l2-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l2_greet-introduce');
  assert.ok(check);
  const missing: ActivityEvidence = {
    activityId: 'l2-listening-introduction', attempted: true, completed: true,
    evidenceMode: 'none', passed: false, score: 5, total: 5,
  };
  const interaction = rolePlayCompletionEvidence('l2-roleplay-greetings', true);
  const status = describeExitCheckStatus(check, missing, { [interaction.activityId]: interaction });
  assert.equal(status.kind, 'partial-review');
  assert.match(status.label, /обязательный DIRECT-компонент отсутствует/);
});

test('mixed NONE plus DIRECT handling preserves valid L4 text evidence as PARTIAL', () => {
  const exitCheck = findL4Activity('l4-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l4_recognize-forms');
  assert.ok(check);
  const missing: ActivityEvidence = {
    activityId: 'l4-listening-present-forms', attempted: true, completed: true,
    evidenceMode: 'none', passed: false, score: 5, total: 5,
  };
  const textEvidence: ActivityEvidence = {
    activityId: 'l4-cp-recognize-text', attempted: true, completed: true,
    evidenceMode: 'direct', passed: true, score: 4, total: 5,
  };
  assert.equal(
    describeExitCheckStatus(check, missing, { [textEvidence.activityId]: textEvidence }).kind,
    'partial-review'
  );
});

test('L2 RolePlay contains compact informal and formal greeting contexts', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const stages = rolePlay.turns
    .filter((turn) => turn.speaker === 'stage')
    .map((turn) => turn.stageLabel ?? '')
    .join(' ');
  assert.match(stages, /Ситуация 1 · знакомый ровесник/);
  assert.match(stages, /Ситуация 2 · незнакомый взрослый/);
  assert.ok(rolePlay.turns.some((turn) => turn.options?.includes('Szia!')));
  assert.ok(rolePlay.turns.some((turn) => turn.options?.includes('Jó napot!')));
  assert.ok(rolePlay.turns.some((turn) => turn.options?.includes('Viszlát!')));
});

test('L2 RolePlay graph is deterministic and incorrect choices never advance', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  assert.deepEqual(validateRolePlayGraph(rolePlay), []);
  for (const turn of rolePlay.turns.filter((candidate) => candidate.responseMode === 'choice')) {
    for (const branch of turn.branches?.filter((candidate) => candidate.correct === false) ?? []) {
      assert.equal(branch.nextTurnId, turn.id);
    }
  }
});

test('L2 RolePlay recording completion never auto-promotes correctness', () => {
  const result = rolePlayCompletionEvidence('l2-roleplay-greetings', true);
  assert.equal(result.completed, true);
  assert.equal(result.recordingCompleted, true);
  assert.equal(result.evidenceMode, 'partial');
  assert.equal(result.passed, false);
});

test('L2 RolePlay records the informal Szia opening', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const turn = rolePlay.turns.find((candidate) => candidate.id === 'l2-rp-informal-open-record');
  assert.ok(turn);
  assert.equal(turn.responseMode, 'recorded');
  assert.equal(turn.model, 'Szia!');
});

test('L2 RolePlay records the informal Szia closing', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const turn = rolePlay.turns.find((candidate) => candidate.id === 'l2-rp-informal-close-record');
  assert.ok(turn);
  assert.equal(turn.responseMode, 'recorded');
  assert.equal(turn.model, 'Szia!');
});

test('L2 RolePlay records the formal Jó napot opening', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const turn = rolePlay.turns.find((candidate) => candidate.id === 'l2-rp-formal-open-record');
  assert.ok(turn);
  assert.equal(turn.responseMode, 'recorded');
  assert.equal(turn.model, 'Jó napot!');
});

test('L2 RolePlay records the formal Viszlát closing', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const turn = rolePlay.turns.find((candidate) => candidate.id === 'l2-rp-formal-close-record');
  assert.ok(turn);
  assert.equal(turn.responseMode, 'recorded');
  assert.equal(turn.model, 'Viszlát!');
});

test('L2 RolePlay retains the recorded Hogy vagy response', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const turn = rolePlay.turns.find((candidate) => candidate.id === 'l2-rp-how-are-you');
  assert.ok(turn);
  assert.equal(turn.responseMode, 'recorded');
  assert.equal(turn.model, 'Jól vagyok, köszönöm.');
});

test('L2 RolePlay retains the recorded self-introduction', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const turn = rolePlay.turns.find((candidate) => candidate.id === 'l2-rp-self-intro');
  assert.ok(turn);
  assert.equal(turn.responseMode, 'recorded');
  assert.equal(turn.model, 'A nevem Anna. Magyar vagyok.');
});

test('all six L2 RolePlay recordings are required before recordingCompleted can be true', () => {
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const recordedIds = rolePlay.turns
    .filter((turn) => turn.responseMode === 'recorded')
    .map((turn) => turn.id);
  assert.deepEqual(recordedIds, [
    'l2-rp-informal-open-record',
    'l2-rp-how-are-you',
    'l2-rp-self-intro',
    'l2-rp-informal-close-record',
    'l2-rp-formal-open-record',
    'l2-rp-formal-close-record',
  ]);
  for (const missingId of recordedIds) {
    const incomplete = new Set(recordedIds.filter((id) => id !== missingId));
    assert.equal(rolePlayRecordingRequirementMet(rolePlay, incomplete), false, missingId);
    assert.equal(
      rolePlayCompletionEvidence(
        rolePlay.id,
        rolePlayRecordingRequirementMet(rolePlay, incomplete)
      ).recordingCompleted,
      undefined,
      missingId
    );
  }
  const completed = new Set(recordedIds);
  assert.equal(rolePlayRecordingRequirementMet(rolePlay, completed), true);
  const evidence = rolePlayCompletionEvidence(
    rolePlay.id,
    rolePlayRecordingRequirementMet(rolePlay, completed)
  );
  assert.equal(evidence.recordingCompleted, true);
  assert.equal(evidence.evidenceMode, 'partial');
  assert.equal(evidence.passed, false);
});

test('L2 open self-introduction WritingTask remains PARTIAL', () => {
  const writing = findL2Activity('l2-writing-self-introduction', 'writing');
  assert.deepEqual(writing.modelAnswer, ['A nevem Anna.', 'Magyar vagyok.']);
  assert.match(writing.prompt, /минимум два полных предложения/i);
  const result = writingEvidence(writing.modelAnswer.join(' '), true);
  assert.equal(result.completed, true);
  assert.equal(result.evidenceMode, 'partial');
  assert.equal(result.passed, false);
});

test('l2_introduce-self combines PARTIAL writing and PARTIAL speaking honestly', () => {
  const exitCheck = findL2Activity('l2-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l2_introduce-self');
  assert.ok(check);
  const writing: ActivityEvidence = {
    activityId: 'l2-writing-self-introduction', attempted: true, completed: true,
    evidenceMode: 'partial', passed: false, selfReviewed: true,
  };
  const speaking = rolePlayCompletionEvidence('l2-roleplay-greetings', true);
  assert.equal(
    describeExitCheckStatus(check, writing, { [speaking.activityId]: speaking }).kind,
    'partial-review'
  );
});

test('l2_ask-answer-questions stays PARTIAL after listening plus recorded responses', () => {
  const exitCheck = findL2Activity('l2-exit-check', 'exitCheck');
  const check = exitCheck.checks.find((candidate) => candidate.objectiveId === 'l2_ask-answer-questions');
  assert.ok(check);
  const listening: ActivityEvidence = {
    activityId: 'l2-listening-introduction', attempted: true, completed: true,
    evidenceMode: 'direct', passed: true, score: 4, total: 5,
  };
  const interaction = rolePlayCompletionEvidence('l2-roleplay-greetings', true);
  assert.equal(
    describeExitCheckStatus(check, listening, { [interaction.activityId]: interaction }).kind,
    'partial-review'
  );
});

test('L2 ExitCheck has one resolvable composite row per objective', () => {
  const exitCheck = findL2Activity('l2-exit-check', 'exitCheck');
  const objectiveIds = (LESSON_2.objectives ?? []).map((objective) => objective.id);
  assert.deepEqual(exitCheck.checks.map((check) => check.objectiveId), objectiveIds);
  assert.deepEqual(
    validateExitCheckReferences(exitCheck, objectiveIds, l2Activities().map((activity) => activity.id)),
    []
  );
});

test('L2 Q206 is an in-scope lenni retrieval item, not course metadata', () => {
  const q206 = getLessonQuiz(LESSON_2).find((question) => question.id === 206);
  assert.ok(q206);
  assert.equal(q206.options[q206.correctIndex], 'vagyunk');
  assert.match(q206.question, /Mi diákok/);
  assert.doesNotMatch(q206.question, /урок[ае]?\s*\d|номер урока|в каком уроке/i);
});

test('all six L2 retrieval questions have unique options and one intended answer', () => {
  const expectedAnswers = new Map<number, string>([
    [201, 'Jó napot'],
    [202, 'И "он", и "она" (род не различается)'],
    [203, 'Diák vagyok'],
    [204, 'Magyar vagy?'],
    [205, 'В венгерском есть отдельные местоимения для мужского и женского рода'],
    [206, 'vagyunk'],
  ]);
  const quiz = getLessonQuiz(LESSON_2);
  assert.deepEqual(quiz.map((question) => question.id), [201, 202, 203, 204, 205, 206]);
  for (const question of quiz) {
    assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`);
    assert.equal(question.options[question.correctIndex], expectedAnswers.get(question.id));
    assert.doesNotMatch(question.question, /в каком уроке|номер урока/i);
  }
});

test('L2 lesson-local vocabulary is a bounded functional core', () => {
  const vocabulary = getLessonVocabulary(LESSON_2);
  assert.deepEqual(
    vocabulary.map((item) => item.hu),
    ['Szia!', 'Jó napot!', 'Viszlát!', 'köszönöm', 'Hogy vagy?', 'A nevem…', 'lenni', 'én', 'magyar']
  );
  assert.equal(vocabulary.length, 9);
  assert.ok(vocabulary.filter((item) => item.hu.endsWith('!')).every((item) => item.category === 'Functional Chunks'));
  assert.equal(vocabulary.some((item) => ['vagy', 'van', 'vagyunk', 'vagytok', 'vannak'].includes(item.hu)), false);
});

test('existing L2 translation cards remain exact and unchanged', () => {
  assert.deepEqual(LESSON_TRANSLATION_MAP[2], [
    {
      id: 'l2_t1', lessonNumber: 2, direction: 'hu-to-ru',
      sourceText: 'Diák vagyok.', targetText: 'Я студент.',
    },
    {
      id: 'l2_t2', lessonNumber: 2, direction: 'ru-to-hu',
      sourceText: 'Я не венгр.', targetText: 'Nem vagyok magyar.',
      grammaticalTag: 'lenni-jelen-1sg-negation', relatedLessonId: 2,
    },
  ]);
  assert.equal(
    sha256(new URL('../src/data/lessonTranslations.ts', import.meta.url)),
    '3A3B8155BDB0CA11D0EB04031E9F7E83E79CDA73902EE96C77B31EB0FC76900D'
  );
});

test('LESSONS_META L2 matches the migrated lesson module exactly', () => {
  const meta = LESSONS_META.find((candidate) => candidate.id === 2);
  assert.ok(meta);
  assert.equal(meta.title, LESSON_2.title);
  assert.equal(meta.subtitle, LESSON_2.subtitle);
  assert.equal(meta.description, LESSON_2.description);
  assert.equal(meta.slidesCount, LESSON_2.slidesCount);
  assert.equal(meta.level, LESSON_2.level);
});

test('RolePlay generic labels, wrapping, and keyboard focus hooks remain lesson-neutral', () => {
  const source = readFileSync(
    new URL('../src/components/activities/RolePlay.tsx', import.meta.url),
    'utf8'
  );
  assert.match(source, /data\.partnerLabel \?\? 'Pincér · Официант'/);
  assert.match(source, /data\.completionMessage \?\?/);
  assert.match(source, /\[overflow-wrap:anywhere\]/);
  assert.match(source, /focus-visible:ring-2/);
});

test('L2 activity markup exposes textual states and usable writing/microphone fallbacks', () => {
  const writing = findL2Activity('l2-writing-self-introduction', 'writing');
  const rolePlay = findL2Activity('l2-roleplay-greetings', 'rolePlay');
  const writingMarkup = renderToStaticMarkup(
    createElement(LessonActivityRenderer, { activity: writing, evidence: {}, objectives: LESSON_2.objectives })
  );
  const completedRolePlayMarkup = renderToStaticMarkup(
    createElement(LessonActivityRenderer, {
      activity: rolePlay,
      evidence: { [rolePlay.id]: rolePlayCompletionEvidence(rolePlay.id, true) },
      objectives: LESSON_2.objectives,
    })
  );
  const recorderSource = readFileSync(
    new URL('../src/components/AudioRecorder.tsx', import.meta.url),
    'utf8'
  );
  assert.match(writingMarkup, /<textarea/);
  assert.match(writingMarkup, /aria-label=/);
  assert.match(completedRolePlayMarkup, /completed · PARTIAL/);
  assert.match(completedRolePlayMarkup, /не оценивается автоматически/);
  assert.match(recorderSource, /Не удалось получить доступ к микрофону\. Проверьте разрешения браузера\./);
});

test('slide audio manifest remains unchanged by the L2 activity migration', () => {
  assert.equal(
    sha256(new URL('../src/data/slideAudioManifest.ts', import.meta.url)),
    '4D3C6CCEBE42C4C7EC8358F15C46233AC0BDE3C04799BB95DB7C345EF5C03281'
  );
});

test('Lesson 1 migration is present without changing its physical slide identity', async () => {
  const lesson1 = await loadLesson(1);
  assert.ok(lesson1);
  assert.equal(lesson1.slides.some((slide) => (slide.activities?.length ?? 0) > 0), true);
  assert.deepEqual(lesson1.slides.map((slide) => slide.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
