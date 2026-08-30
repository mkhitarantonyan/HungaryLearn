import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_12 } from '../src/data/lessons/lesson12.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity, ProseReadingContent } from '../src/types.ts';
import { describeExitCheckStatus, listeningEvidence, rolePlayCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const activities = LESSON_12.slides.flatMap((slide) => slide.activities ?? []);
const source = readFileSync(new URL('../src/data/lessons/lesson12.ts', import.meta.url), 'utf8');
function find<K extends LessonActivity['kind']>(id: string, kind: K): Extract<LessonActivity, { kind: K }> {
  const activity = activities.find((candidate) => candidate.id === id); assert.ok(activity, `missing ${id}`); assert.equal(activity.kind, kind); return activity as Extract<LessonActivity, { kind: K }>;
}
function proseContent(reading: Extract<LessonActivity, { kind: 'reading' }>): ProseReadingContent {
  assert.ok(reading.content); assert.equal(reading.content.type, 'prose'); if (reading.content.type !== 'prose') assert.fail(); return reading.content;
}
const direct = (activityId: string): ActivityEvidence => ({ activityId, attempted: true, completed: true, passed: true, evidenceMode: 'direct' });

test('L12 preserves identity, exact objective IDs, quiz IDs, and eleven narration slots', () => {
  assert.deepEqual([LESSON_12.id, LESSON_12.number, LESSON_12.level, LESSON_12.slidesCount], [12,12,'A1',11]);
  assert.deepEqual(LESSON_12.objectives?.map((o) => o.id), ['l12_distinguish-near-cases','l12_form-adessive','l12_form-allative','l12_form-ablative','l12_use-near-cases']);
  assert.deepEqual(LESSON_12.quiz?.map((q) => q.id), [1201,1202,1203,1204,1205,1206]);
  for (let slide = 1; slide <= 11; slide += 1) assert.equal(existsSync(new URL(`../public/audio/12.${slide}.mp3`, import.meta.url)), true);
});

test('L12 has the complete valid activity sequence and resolvable ExitCheck', () => {
  assert.deepEqual(activities.map((a) => a.kind), ['controlledPractice','reading','listening','rolePlay','writing','exitCheck']);
  assert.equal(new Set(activities.map((a) => a.id)).size, activities.length); assert.deepEqual(activities.flatMap(validateActivity), []); assert.deepEqual(validateLessonQuestionIds(activities), []);
  const exit = find('l12-exit-check','exitCheck'); const objectiveIds = LESSON_12.objectives?.map((o) => o.id) ?? [];
  assert.deepEqual(exit.checks.map((c) => c.objectiveId), objectiveIds); assert.deepEqual(validateExitCheckReferences(exit, objectiveIds, activities.map((a) => a.id)), []);
});

test('L12 contextual practice has 14 items and covers forms, transport, directions, transfer, and repair', () => {
  const cp = find('l12-cp-near-meanings','controlledPractice'); assert.equal(cp.exercises.length,14); assert.equal(cp.passCount,11);
  const text = JSON.stringify(cp);
  for (const token of ['orvosnál','Annához','Pétertől','Melyik busszal','Szálljon fel','Szálljon le','Át kell szállni','még egyszer','Jól értem']) assert.ok(text.includes(token), token);
});

test('L12 Reading integrates a 160–190 word route with eight meaning questions and repair', () => {
  const reading = find('l12-reading-library-route','reading'); const content = proseContent(reading);
  const words = content.paragraphs.join(' ').trim().split(/\s+/u).length; assert.ok(words >= 160 && words <= 190, `words=${words}`);
  assert.equal(reading.questions.length,8); assert.equal(reading.passCount,6); assert.match(content.title ?? '', /Hogyan jut el Anna a könyvtárba/);
  assert.match(content.paragraphs.join(' '), /9-es buszra.*harmadik.*egy megállóval korábban.*második utcánál balra/s);
});

test('L12 preserves the exact published Listening contract and DIRECT load-aware evidence', () => {
  const listening = find('l12-listening-near-locations','listening');
  assert.equal(listening.assetId,'l12_listening_near_locations'); assert.equal(listening.audioStatus,'published'); assert.equal(listening.passCount,4); assert.equal(listening.questions.length,5);
  assert.equal(listening.transcript,'Anna Péterhez megy. Péter most az orvosnál van. Az orvostól jön, utána Annához megy egy könyvért.');
  assert.equal(existsSync(new URL('../public/audio/l12_listening_near_locations.mp3', import.meta.url)),true);
  assert.equal(listeningEvidence(listening,4,5,true).evidenceMode,'direct'); assert.equal(listeningEvidence(listening,4,5,false).evidenceMode,'none');
});

test('L12 RolePlay has eight learner turns and an explicit misunderstanding repair', () => {
  const rolePlay = find('l12-roleplay-public-route','rolePlay'); assert.equal(rolePlay.turns.length,17); assert.equal(rolePlay.turns.filter((t) => t.speaker === 'learner').length,8);
  assert.ok(rolePlay.turns.filter((t) => t.speaker === 'learner').every((t) => t.responseMode === 'selfPractice'));
  assert.match(JSON.stringify(rolePlay), /Hogyan jutok el.*Hol kell leszállnom.*nem értettem.*negyedik megállónál.*Jól értem.*pékségtől/s);
  assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode,'partial');
});

test('L12 Writing is 70–90 words and optional Speaking remains text-only with no evidence', () => {
  const writing = find('l12-writing-near-exchange','writing'); const words = writing.modelAnswer.join(' ').trim().split(/\s+/u).length;
  assert.ok(words >= 70 && words <= 90, `words=${words}`); assert.match(writing.prompt,/70–90 слов/); assert.equal(writingEvidence(writing.modelAnswer.join(' '),true).evidenceMode,'partial');
  const speaking = LESSON_12.slides.find((slide) => slide.optionalSpeaking)?.optionalSpeaking; assert.ok(speaking); assert.match(speaking.instructions,/1\.5 минуты.*без микрофона.*evidence/s);
});

test('L12 ExitCheck preserves direct auto-checks and partial communicative production', () => {
  const exit = find('l12-exit-check','exitCheck'); const listening = find('l12-listening-near-locations','listening');
  const evidence: Record<string,ActivityEvidence> = {
    'l12-cp-near-meanings': direct('l12-cp-near-meanings'), 'l12-reading-library-route': direct('l12-reading-library-route'),
    'l12-listening-near-locations': { activityId:'l12-listening-near-locations',attempted:true,completed:true,...listeningEvidence(listening,4,5,true) },
    'l12-roleplay-public-route': rolePlayCompletionEvidence('l12-roleplay-public-route'),
    'l12-writing-near-exchange': { activityId:'l12-writing-near-exchange',attempted:true,selfReviewed:true,...writingEvidence('A sufficiently developed route description.',true) },
  };
  const statuses = Object.fromEntries(exit.checks.map((check) => [check.objectiveId,describeExitCheckStatus(check,evidence[check.activityId],evidence).kind]));
  assert.deepEqual(statuses,{ 'l12_distinguish-near-cases':'direct-met','l12_form-adessive':'direct-met','l12_form-allative':'direct-met','l12_form-ablative':'direct-met','l12_use-near-cases':'partial-review' });
});

test('L12 theory stays bounded, quiz and vocabulary IDs remain stable, and metadata matches', () => {
  assert.match(source, /учебная модель, а не полное описание/); assert.match(source, /Императивные формы здесь используются как готовые маршрутные chunks/);
  assert.doesNotMatch(source,/полная система всех|B1|vágány|menetjegy|SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask/);
  for (const question of LESSON_12.quiz ?? []) assert.equal(new Set(question.options).size,question.options.length);
  assert.deepEqual(LESSON_12.vocabulary?.map((v) => v.id),Array.from({length:16},(_,i)=>`l12_v${i+1}`));
  const meta=LESSONS_META.find((item)=>item.id===12); assert.ok(meta); assert.equal(meta.description,LESSON_12.description);
});
