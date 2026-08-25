import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_12 } from '../src/data/lessons/lesson12.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity } from '../src/types.ts';
import { describeExitCheckStatus, listeningEvidence, recordingCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const activities = LESSON_12.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson12.ts', import.meta.url), 'utf8');
const hash = (url: URL) => createHash('sha256').update(readFileSync(url)).digest('hex').toUpperCase();
function find<T extends LessonActivity['kind']>(id: string, kind: T): Extract<LessonActivity, { kind: T }> {
  const item = activities.find((activity) => activity.id === id); assert.ok(item, `missing ${id}`); assert.equal(item.kind, kind);
  return item as Extract<LessonActivity, { kind: T }>;
}
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });

test('L12 preserves identity and exact five objective IDs', () => {
  assert.deepEqual([LESSON_12.id, LESSON_12.number, LESSON_12.level, LESSON_12.slidesCount], [12, 12, 'A1', 11]);
  assert.deepEqual(LESSON_12.objectives?.map((objective) => objective.id), ['l12_distinguish-near-cases', 'l12_form-adessive', 'l12_form-allative', 'l12_form-ablative', 'l12_use-near-cases']);
  assert.deepEqual(LESSON_12.quiz?.map((question) => question.id), [1201, 1202, 1203, 1204, 1205, 1206]);
  for (let slide = 1; slide <= 11; slide += 1) assert.equal(existsSync(new URL(`../public/audio/12.${slide}.mp3`, import.meta.url)), true);
});

test('L12 has exactly eight valid unique activities and no ReadingTask', () => {
  assert.deepEqual(activities.map((activity) => activity.id), ['l12-cp-near-meanings', 'l12-cp-adessive-forms', 'l12-cp-allative-forms', 'l12-cp-ablative-forms', 'l12-listening-near-locations', 'l12-writing-near-exchange', 'l12-recording-near-exchange', 'l12-exit-check']);
  assert.deepEqual(Object.fromEntries(['controlledPractice', 'reading', 'listening', 'writing', 'recording', 'exitCheck'].map((kind) => [kind, activities.filter((activity) => activity.kind === kind).length])), { controlledPractice: 4, reading: 0, listening: 1, writing: 1, recording: 1, exitCheck: 1 });
  assert.equal(new Set(activities.map((activity) => activity.id)).size, 8);
  assert.deepEqual(activities.flatMap(validateActivity), []); assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('l12-exit-check', 'exitCheck'); const objectives = LESSON_12.objectives?.map((objective) => objective.id) ?? [];
  assert.deepEqual(exit.checks.map((check) => check.objectiveId), objectives); assert.equal(new Set(exit.checks.map((check) => check.objectiveId)).size, 5);
  assert.deepEqual(validateExitCheckReferences(exit, objectives, activities.map((activity) => activity.id)), []);
});

test('four core practices have exact thresholds and bounded accepted forms', () => {
  const meaning = find('l12-cp-near-meanings', 'controlledPractice'); assert.equal(meaning.exercises.length, 10); assert.equal(meaning.passCount, 8);
  const expected: Record<string, string[]> = {
    'l12-cp-adessive-forms': ['orvosnál', 'asztalnál', 'Péternél', 'testvérnél', 'Annánál', 'elnöknél'],
    'l12-cp-allative-forms': ['orvoshoz', 'baráthoz', 'Péterhez', 'testvérhez', 'elnökhöz', 'Annához'],
    'l12-cp-ablative-forms': ['orvostól', 'baráttól', 'Pétertől', 'testvértől', 'Annától', 'elnöktől'],
  };
  for (const [id, answers] of Object.entries(expected)) {
    const practice = find(id, 'controlledPractice'); assert.equal(practice.exercises.length, 6); assert.equal(practice.passCount, 5);
    assert.deepEqual(practice.exercises.map((exercise) => exercise.kind === 'textInput' ? exercise.accept[0] : ''), answers);
  }
});

test('objective and 3x3 copy are semantically bounded', () => {
  assert.match(LESSON_12.objectives?.find((objective) => objective.id === 'l12_distinguish-near-cases')?.text ?? '', /местонахождения.*направления к цели.*от источника/);
  assert.match(source, /учебная модель, а не полное описание/); assert.match(source, /три часто используемые пространственные группы/);
  assert.doesNotMatch(source, /ВСЕГДА|все 9 местных падеж|любое местоположение без ошибок|полная система всех 9|Aproximatív/);
  assert.match(source, /Другие отношения с людьми/);
});

test('postpositions, personal forms, and temporal chunks stay unscored enrichment', () => {
  assert.match(source, /БЛОК B · ДОПОЛНИТЕЛЬНО/); assert.match(source, /не универсальное правило и не оцениваемая цель L12/);
  assert.match(source, /hozzám\/<b>hozzád<\/b>\/hozzá/); assert.doesNotMatch(source, /data-speak-text="hozzád"[^>]*>.*hozzá</s);
  assert.match(source, /testvér.*брат или сестра/s); assert.doesNotMatch(source, /testvérnél.*\(у брата\)|testvérhez.*\(к брату\)|testvértől.*\(от брата\)/s);
  assert.doesNotMatch(source, /három óra előtt/); assert.match(source, /ebéd előtt/);
  const scored = JSON.stringify({ activities, quiz: LESSON_12.quiz });
  assert.doesNotMatch(scored, /alatt|alá|alól|felett|fölött|mellett|előtt|mögött|között|nálam|hozzám|tőlem|ebéd után|kilenctől/);
});

test('dialogue is present-based and Hová terminology is consistent', () => {
  assert.match(source, /Hová mész\?/); assert.match(source, /Az orvostól jövök/); assert.match(source, /Utána Péterhez megyek/); assert.match(source, /Péternél vagyok/);
  assert.doesNotMatch(source, /\bHova\b|Péternél leszek|\bleszek\b/);
});

test('published dedicated listening is DIRECT and production remains PARTIAL', () => {
  const listening = find('l12-listening-near-locations', 'listening'); assert.equal(listening.assetId, 'l12_listening_near_locations'); assert.equal(listening.audioStatus, 'published');
  assert.equal(existsSync(new URL('../public/audio/l12_listening_near_locations.mp3', import.meta.url)), true); assert.equal(listeningEvidence(listening, 5, 5).evidenceMode, 'direct');
  assert.doesNotMatch(source, /SpeechSynthesis|speechSynthesis|browser TTS/i); assert.doesNotMatch(listening.assetId, /^12\./);
  const writing = find('l12-writing-near-exchange', 'writing'); const recording = find('l12-recording-near-exchange', 'recording');
  assert.equal(writingEvidence(writing.modelAnswer.join(' '), true).evidenceMode, 'partial'); assert.equal(recordingCompletionEvidence(recording.id).evidenceMode, 'partial'); assert.equal(recordingCompletionEvidence(recording.id).passed, false);
});

test('ExitCheck resolves DIRECT DIRECT DIRECT DIRECT PARTIAL', () => {
  const exit = find('l12-exit-check', 'exitCheck'); const listening = find('l12-listening-near-locations', 'listening'); const written = writingEvidence('Hová mész? Péterhez megyek. Honnan jössz? Az orvostól jövök.', true);
  const evidence: Record<string, ActivityEvidence> = {
    'l12-cp-near-meanings': direct('l12-cp-near-meanings'), 'l12-cp-adessive-forms': direct('l12-cp-adessive-forms'), 'l12-cp-allative-forms': direct('l12-cp-allative-forms'), 'l12-cp-ablative-forms': direct('l12-cp-ablative-forms'),
    'l12-listening-near-locations': { activityId: 'l12-listening-near-locations', attempted: true, completed: true, ...listeningEvidence(listening, 5, 5) },
    'l12-writing-near-exchange': { activityId: 'l12-writing-near-exchange', attempted: true, selfReviewed: true, ...written }, 'l12-recording-near-exchange': recordingCompletionEvidence('l12-recording-near-exchange'),
  };
  assert.deepEqual(Object.fromEntries(exit.checks.map((check) => [check.objectiveId, describeExitCheckStatus(check, evidence[check.activityId], evidence).kind])), { 'l12_distinguish-near-cases': 'direct-met', 'l12_form-adessive': 'direct-met', 'l12_form-allative': 'direct-met', 'l12_form-ablative': 'direct-met', 'l12_use-near-cases': 'partial-review' });
});

test('quiz is core, contextual, unique, and metadata matches', () => {
  for (const question of LESSON_12.quiz ?? []) { assert.equal(new Set(question.options).size, question.options.length, `quiz ${question.id}`); assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length); assert.doesNotMatch(question.question, /В каких уроках|НЕ относится|послелог|alatt/i); }
  assert.equal(LESSON_12.quiz?.find((q) => q.id === 1201)?.options[0], 'orvosnál'); assert.equal(LESSON_12.quiz?.find((q) => q.id === 1202)?.options[1], 'Péterhez'); assert.equal(LESSON_12.quiz?.find((q) => q.id === 1203)?.options[2], 'orvostól');
  assert.match(LESSON_12.quiz?.find((q) => q.id === 1204)?.question ?? '', /находишься у Анны/); assert.match(LESSON_12.quiz?.find((q) => q.id === 1205)?.question ?? '', /идёшь к брату или сестре/); assert.match(LESSON_12.quiz?.find((q) => q.id === 1206)?.question ?? '', /Honnan jössz/);
  assert.ok((LESSON_12.vocabulary ?? []).every((item) => item.ipa === undefined));
  const meta = LESSONS_META.find((candidate) => candidate.id === 12); assert.ok(meta); assert.equal(meta.title, LESSON_12.title); assert.equal(meta.subtitle, LESSON_12.subtitle); assert.equal(meta.description, LESSON_12.description);
});

test('frozen L11, L13, L14, and L15 remain byte-identical', () => {
  assert.equal(hash(new URL('../src/data/lessons/lesson11.ts', import.meta.url)), '6CD30773439EFEDCABDE47DE30316711BC6908BEDFEFA615359D9A3AD619ADF9');
  assert.equal(hash(new URL('../src/data/lessons/lesson13.ts', import.meta.url)), '7C9958E5E4C96B0B26BBC921B814EEED9BBED4902B912C7D437A6922903E43BC');
  assert.equal(hash(new URL('../src/data/lessons/lesson14.ts', import.meta.url)), 'B7D78CBE218F2D3E378C5653FE32B300CEF93EB5C003D7E3857FA9D4C2A8558F');
  assert.equal(hash(new URL('../src/data/lessons/lesson15.ts', import.meta.url)), 'A7A143F7E0D5B029D3F1788868A839516D2C1C373BF7EE31C36C91DCCA15ED85');
});
