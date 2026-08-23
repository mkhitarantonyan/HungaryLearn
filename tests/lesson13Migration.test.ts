import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_13 } from '../src/data/lessons/lesson13.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import { describeExitCheckStatus, listeningEvidence, recordingCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const activities = LESSON_13.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson13.ts', import.meta.url), 'utf8');
const hash = (url: URL) => createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
function find<T extends LessonActivity['kind']>(id: string, kind: T): Extract<LessonActivity, { kind: T }> {
  const item = activities.find((activity) => activity.id === id); assert.ok(item); assert.equal(item.kind, kind);
  return item as Extract<LessonActivity, { kind: T }>;
}
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });

test('L13 identity and exact objective IDs stay stable', () => {
  assert.deepEqual([LESSON_13.id, LESSON_13.number, LESSON_13.level, LESSON_13.slidesCount], [13, 13, 'A1', 12]);
  assert.deepEqual(LESSON_13.objectives?.map((objective) => objective.id), ['l13_form-past', 'l13_use-volt', 'l13_distinguish-present-past', 'l13_tell-past']);
  assert.deepEqual(LESSON_13.quiz?.map((question) => question.id), [1301, 1302, 1303, 1304, 1305, 1306]);
  for (let slide = 1; slide <= 12; slide += 1) assert.equal(existsSync(new URL(`../public/audio/13.${slide}.mp3`, import.meta.url)), true);
});

test('L13 has exactly seven valid unique activities and four ExitCheck rows', () => {
  assert.deepEqual(activities.map((activity) => activity.id), ['l13-cp-past-forms', 'l13-cp-volt-contexts', 'l13-reading-tense-contrast', 'l13-listening-tense-contrast', 'l13-writing-past-story', 'l13-recording-past-story', 'l13-exit-check']);
  assert.deepEqual(Object.fromEntries(['controlledPractice', 'reading', 'listening', 'writing', 'recording', 'exitCheck'].map((kind) => [kind, activities.filter((activity) => activity.kind === kind).length])), { controlledPractice: 2, reading: 1, listening: 1, writing: 1, recording: 1, exitCheck: 1 });
  assert.equal(new Set(activities.map((activity) => activity.id)).size, 7);
  assert.deepEqual(activities.flatMap(validateActivity), []); assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('l13-exit-check', 'exitCheck'); const objectives = LESSON_13.objectives?.map((objective) => objective.id) ?? [];
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectives);
  assert.deepEqual(validateExitCheckReferences(exit, objectives, activities.map((activity) => activity.id)), []);
});

test('bounded forms, volt contexts, and reading use approved thresholds', () => {
  const forms = find('l13-cp-past-forms', 'controlledPractice'); assert.equal(forms.exercises.length, 10); assert.equal(forms.passCount, 8);
  assert.deepEqual(forms.exercises.map((exercise) => exercise.kind === 'textInput' ? exercise.accept[0] : ''), ['vártam', 'mondtam', 'nyitottam', 'futottam', 'tanultam', 'tanultál', 'tanult', 'dolgoztam', 'dolgozott', 'sétáltam']);
  const volt = find('l13-cp-volt-contexts', 'controlledPractice'); assert.equal(volt.exercises.length, 6); assert.equal(volt.passCount, 5);
  assert.deepEqual(volt.exercises.map((exercise) => exercise.kind === 'singleChoice' ? exercise.options[exercise.correctIndex] : ''), ['voltam', 'voltál', 'volt', 'voltunk', 'voltatok', 'voltak']);
  const reading = find('l13-reading-tense-contrast', 'reading'); assert.equal(reading.questions.length, 6); assert.equal(reading.passCount, 5);
  const readingText = JSON.stringify(reading);
  for (const marker of ['Ma', 'most', 'Tegnap', 'volt', 'dolgozott']) assert.match(readingText, new RegExp(marker));
  assert.doesNotMatch(reading.instructions ?? '', /вслух|суффикс/i);
});

test('missing dedicated audio stays NONE without narration or TTS fallback', () => {
  const listening = find('l13-listening-tense-contrast', 'listening');
  assert.equal(listening.assetId, 'l13_listening_tense_contrast'); assert.equal(listening.audioStatus, 'missing');
  assert.equal(existsSync(new URL('../public/audio/l13_listening_tense_contrast.mp3', import.meta.url)), false);
  assert.equal(listeningEvidence(listening, 5, 5).evidenceMode, 'none'); assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i); assert.doesNotMatch(listening.assetId, /^13\./);
});

test('production is connected and review-only', () => {
  const writing = find('l13-writing-past-story', 'writing'); const recording = find('l13-recording-past-story', 'recording');
  assert.match(writing.prompt, /4–5.*связан.*маркер/s); assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial');
  assert.match(recording.instructions ?? '', /PARTIAL evidence/); assert.equal(recordingCompletionEvidence(recording.id).evidenceMode, 'partial'); assert.equal(recordingCompletionEvidence(recording.id).passed, false);
});

test('ExitCheck resolves DIRECT DIRECT PARTIAL PARTIAL', () => {
  const exit = find('l13-exit-check', 'exitCheck'); const listening = find('l13-listening-tense-contrast', 'listening');
  const written = writingEvidence('Tegnap otthon voltam. Reggel dolgoztam. Délután sétáltam. Este filmet néztem.', true);
  const evidence: Record<string, ActivityEvidence> = {
    'l13-cp-past-forms': direct('l13-cp-past-forms'), 'l13-cp-volt-contexts': direct('l13-cp-volt-contexts'), 'l13-reading-tense-contrast': direct('l13-reading-tense-contrast'),
    'l13-listening-tense-contrast': { activityId: 'l13-listening-tense-contrast', attempted: true, completed: true, ...listeningEvidence(listening, 5, 5) },
    'l13-writing-past-story': { activityId: 'l13-writing-past-story', attempted: true, selfReviewed: true, ...written }, 'l13-recording-past-story': recordingCompletionEvidence('l13-recording-past-story'),
  };
  assert.deepEqual(Object.fromEntries(exit.checks.map((check) => [check.objectiveId, describeExitCheckStatus(check, evidence[check.activityId], evidence).kind])), { 'l13_form-past': 'direct-met', 'l13_use-volt': 'direct-met', 'l13_distinguish-present-past': 'partial-review', 'l13_tell-past': 'partial-review' });
});

test('copy is bounded, qualified, preview-only, and linguistically corrected', () => {
  assert.match(LESSON_13.objectives?.find((objective) => objective.id === 'l13_form-past')?.text ?? '', /частотные базовые формы.*изученным моделям -t\/-tt/);
  assert.match(source, /одно продуктивное морфологическое прошедшее время/); assert.match(source, /сам глагол, глагольные приставки и контекст/);
  assert.match(source, /не правило.*любого глагола/s); assert.match(source, /Полная система.*урок(?:е|у) 20/i);
  assert.doesNotMatch(source, /ТРИ ТИПА|всего ОДНО|покрывает все оттенки|ОБЯЗАТЕЛЬНО присутствует всегда/);
  assert.match(source, /Предварительный обзор, вне оцениваемых целей/); assert.doesNotMatch(JSON.stringify({ activities, quiz: LESSON_13.quiz }), /Olvastam egy könyvet|Olvastam a könyvet|határozott/i);
  assert.match(source, /A moziban voltam a barátaimmal/); assert.doesNotMatch(source, /mozinál/);
  assert.doesNotMatch(source, /финальный урок уровня A1|Вы завершили уровень A1|15 предложений|будущем|21-м уроке/); assert.match(source, /Урок 14 завершит уровень A1/);
  assert.ok((LESSON_13.vocabulary ?? []).every((item) => item.ipa === undefined));
});

test('quiz options are unique and L13 metadata is aligned', () => {
  for (const question of LESSON_13.quiz ?? []) { assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`); assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length); assert.doesNotMatch(question.question, /В каком уроке|-ban\/-ben/i); }
  assert.equal(LESSON_13.quiz?.find((q) => q.id === 1301)?.options[0], 'vártam'); assert.equal(LESSON_13.quiz?.find((q) => q.id === 1302)?.options[2], 'dolgozott'); assert.equal(LESSON_13.quiz?.find((q) => q.id === 1304)?.options[0], 'Nem voltam otthon.');
  const meta = LESSONS_META.find((candidate) => candidate.id === 13); assert.ok(meta); assert.equal(meta.title, LESSON_13.title); assert.equal(meta.subtitle, LESSON_13.subtitle); assert.equal(meta.description, LESSON_13.description);
});

test('frozen L14, frozen L15, and later L20 remain byte-identical', () => {
  assert.equal(hash(new URL('../src/data/lessons/lesson14.ts', import.meta.url)), '53AC1D1CBB63F7938F2423574F99ED43202C4089F6FEF8D5020A3D58251FB705');
  assert.equal(hash(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), '022977AD8EAAAE2A14FDDEF2FF792FA35D5A0A882EDF66E93BFF5B68B9D9E586');
  assert.equal(hash(new URL('../src/data/lessons/lesson20.ts', import.meta.url)), '73ED8495F9D6732BCC71F0A8CA7BAE3274949943DA5357F42BF0EB7AD1144D48');
});
