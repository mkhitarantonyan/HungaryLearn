import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_11 } from '../src/data/lessons/lesson11.ts';
import { LESSON_12 } from '../src/data/lessons/lesson12.ts';
import { LESSON_13 } from '../src/data/lessons/lesson13.ts';
import { LESSON_14 } from '../src/data/lessons/lesson14.ts';
import type { Lesson, LessonActivity, ProseReadingContent } from '../src/types.ts';
import { rolePlayCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const lessons=[LESSON_11,LESSON_12,LESSON_13,LESSON_14];
const activitiesOf=(lesson:Lesson)=>lesson.slides.flatMap((slide)=>slide.activities??[]);
function find<K extends LessonActivity['kind']>(lesson:Lesson,kind:K):Extract<LessonActivity,{kind:K}>{const activity=activitiesOf(lesson).find((a)=>a.kind===kind);assert.ok(activity,`L${lesson.number} missing ${kind}`);return activity as Extract<LessonActivity,{kind:K}>;}
function proseContent(reading:Extract<LessonActivity,{kind:'reading'}>):ProseReadingContent{assert.ok(reading.content);assert.equal(reading.content.type,'prose');if(reading.content.type!=='prose')assert.fail();return reading.content;}
const sha256=(url:URL)=>createHash('sha256').update(readFileSync(url)).digest('hex');

test('P3 preserves exact lesson, objective, quiz, vocabulary, and eleven-slide identities',()=>{
  const objectives=[
    ['l11_distinguish-surface-cases','l11_form-superessive','l11_form-sublative','l11_form-delative','l11_use-surface-cases'],
    ['l12_distinguish-near-cases','l12_form-adessive','l12_form-allative','l12_form-ablative','l12_use-near-cases'],
    ['l13_form-past','l13_use-volt','l13_distinguish-present-past','l13_tell-past'],
    ['l14_describe-routine','l14_form-reflexive','l14_use-reflexive','l14_tell-routine-time'],
  ];
  for(const [index,lesson] of lessons.entries()){const n=index+11;assert.deepEqual([lesson.id,lesson.number,lesson.slidesCount,lesson.slides.length],[n,n,11,11]);assert.deepEqual(lesson.objectives?.map((o)=>o.id),objectives[index]);assert.deepEqual(lesson.quiz?.map((q)=>q.id),Array.from({length:6},(_,i)=>n*100+i+1));assert.deepEqual(lesson.vocabulary?.map((v)=>v.id),Array.from({length:n===14?14:16},(_,i)=>`l${n}_v${i+1}`));}
});

test('P3 lessons use valid communication sequences and honest ExitCheck references',()=>{
  for(const lesson of lessons){const activities=activitiesOf(lesson);const expected=lesson.number===11?['controlledPractice','reading','rolePlay','writing','exitCheck']:['controlledPractice','reading','listening','rolePlay','writing','exitCheck'];assert.deepEqual(activities.map((a)=>a.kind),expected);assert.deepEqual(activities.flatMap(validateActivity),[]);assert.deepEqual(validateLessonQuestionIds(activities),[]);const exit=find(lesson,'exitCheck');assert.deepEqual(validateExitCheckReferences(exit,lesson.objectives?.map((o)=>o.id)??[],activities.map((a)=>a.id)),[]);}
});

test('P3 controlled practice, Reading, RolePlay, and Writing meet requested counts',()=>{
  const contracts=new Map([[11,[14,11,150,180,7,70,90,8]],[12,[14,11,160,190,8,70,90,8]],[13,[14,11,170,200,8,80,100,7]],[14,[16,13,190,220,8,90,110,8]]]);
  for(const lesson of lessons){const [cpN,cpPass,minR,maxR,qN,minW,maxW,learnerN]=contracts.get(lesson.number)!;const cp=find(lesson,'controlledPractice');const reading=find(lesson,'reading');const rolePlay=find(lesson,'rolePlay');const writing=find(lesson,'writing');const content=proseContent(reading);assert.deepEqual([cp.exercises.length,cp.passCount],[cpN,cpPass]);const rw=content.paragraphs.join(' ').trim().split(/\s+/u).length;assert.ok(rw>=minR&&rw<=maxR,`L${lesson.number} reading=${rw}`);assert.equal(reading.questions.length,qN);const ww=writing.modelAnswer.join(' ').trim().split(/\s+/u).length;assert.ok(ww>=minW&&ww<=maxW,`L${lesson.number} writing=${ww}`);assert.equal(rolePlay.turns.filter((t)=>t.speaker==='learner').length,learnerN);}
});

test('P3 preserves byte-identical L12–L14 Listening MP3 and adds no MP3',()=>{
  const contracts=[
    ['l12_listening_near_locations','456b316f2a22a07b863baa77b253b733d4d4b7c5175db983b7ed3882ff08e4c0'],
    ['l13_listening_tense_contrast','4708e9caadb8585a12881a222223ee2caced5ec501346d1a698d979e575bee03'],
    ['l14_listening_routine','309ed8e4dc1db2f9832c69543c5213377238919b95baec70481bd2957e4b3a25'],
  ];
  for(const [asset,hash] of contracts){const url=new URL(`../public/audio/${asset}.mp3`,import.meta.url);assert.equal(existsSync(url),true);assert.equal(sha256(url),hash);}
  assert.equal(readdirSync(new URL('../public/audio/',import.meta.url)).filter((name)=>name.endsWith('.mp3')).length,1123);
  assert.equal(activitiesOf(LESSON_11).some((activity)=>activity.kind==='listening'),false);assert.equal(existsSync(new URL('../public/audio/l11_listening_context.mp3',import.meta.url)),false);
});

test('P3 keeps published Listening identity, transcripts, status, and questions unchanged',()=>{
  const contracts=new Map<number,[string,string,number,number]>([
    [12,['l12_listening_near_locations','Anna Péterhez megy. Péter most az orvosnál van. Az orvostól jön, utána Annához megy egy könyvért.',5,4]],
    [13,['l13_listening_tense_contrast','Ma Péter otthon dolgozik. Tegnap nem dolgozott: délelőtt a parkban sétált, délután pedig a barátaival volt. Este filmet néztek.',5,4]],
    [14,['l14_listening_routine','Anna reggel fél hétkor felébred. Hét órakor reggelizik. Nyolckor dolgozni megy. Délben ebédel. Este hatkor hazamegy, és tizenegykor lefekszik.',5,4]],
  ]);
  for(const lesson of [LESSON_12,LESSON_13,LESSON_14]){const listening=find(lesson,'listening');const [asset,transcript,questions,pass]=contracts.get(lesson.number)!;assert.deepEqual([listening.assetId,listening.audioStatus,listening.transcript,listening.questions.length,listening.passCount],[asset,'published',transcript,questions,pass]);}
});

test('P3 open production remains PARTIAL and optional Speaking produces no activity evidence',()=>{
  for(const lesson of lessons){const rolePlay=find(lesson,'rolePlay');const writing=find(lesson,'writing');assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode,'partial');assert.equal(writingEvidence(writing.modelAnswer.join(' '),true).evidenceMode,'partial');const speaking=lesson.slides.find((slide)=>slide.optionalSpeaking)?.optionalSpeaking;assert.ok(speaking);assert.match(speaking.instructions,/без микрофона.*evidence/s);assert.equal(activitiesOf(lesson).some((a)=>(a as {kind:string}).kind==='recording'),false);}
});

test('P3 contains no learner Recording, microphone flow, or browser TTS',()=>{
  for(const n of [11,12,13,14]){const source=readFileSync(new URL(`../src/data/lessons/lesson${n}.ts`,import.meta.url),'utf8');assert.doesNotMatch(source,/SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask|recordingCompleted|responseMode:\s*['"]recorded['"]|kind:\s*['"]recording['"]|MediaRecorder|getUserMedia/i);}
});

test('P3 leaves L15–L27 and P6B lesson sources byte-identical',()=>{
  const expected:Record<number,string>={15:'c820df7585f1f1f8e33b988c4f96ef9cff4c2121c838a233fafe85730fd29676',16:'b6cdb88db966a799f1dd5b5c2d3df2000c6d0512b265879217b29fab9a9bb8d3',17:'9e996bc1dd7815971427b9861e0b82097508ec4b24b1b00e4fde35586ea91a15',18:'6d3bcc9fd606567332633891a79b83ac84b70c564e1494e4619d828997bd5b29',19:'67a371a32e0da1bb3de20d505a84b72461125393613e5b5d0d1dd1490a91c858',20:'7805292794411d967f82f14198542122f611b10861a21935dd6a9b1b9c611138',21:'844da631c8d56cf5cb1bdac950b247b7cf1042789d34f2ea17d86b72b17fafc9',22:'60e96dd75c3e8c21334a2c8d4e78838ab1cdcad0c559ada940e85782c54eb1f8',23:'9a8866b28e94d0bb97f7d400491e60674c88791ab7b60f7f99dcf05a611ceb85',24:'9f286e89efb21d5e214731f001e96333d24353c739a961dd190a5e6f59b4c8d2',25:'6ac306dfd9074787d7ee225b2f190a1da1b2099ade65a596120c5ebe6c7aae4b',26:'d587d82110db092ec162ee1fa969b4c97f2108fad399174278b10da2feb4ae25',27:'a265e3a27e9faf15188596a7f6f00dbb955231830b6f81d641c74536a9982af2'};
  for(const [n,hash] of Object.entries(expected))assert.equal(sha256(new URL(`../src/data/lessons/lesson${n}.ts`,import.meta.url)),hash,`L${n}`);
  for(const asset of ['l21_listening_b_film_choice','l22_listening_b_office_instructions','l23_listening_b_free_week','l24_listening_b_city_or_suburbs'])assert.equal(existsSync(new URL(`../public/audio/${asset}.mp3`,import.meta.url)),true);
});

test('P3 leaves L28 byte-identical',()=>{assert.equal(sha256(new URL('../src/data/lessons/lesson28.ts',import.meta.url)),'617f7df1bbd486161a0dba0f63ae0be08011eeacd2b69a060d282ea3e7de2fcc');});

test('P3 vocabulary audit classifies selective content without runtime or audio expansion',()=>{
  const audit=readFileSync(new URL('../docs/P3_VOCABULARY_AUDIT.md',import.meta.url),'utf8');for(const label of ['CORE','FUNCTIONAL CHUNK','RECEPTIVE','RECYCLED'])assert.match(audit,new RegExp(label));for(const row of ['| L11 | 16 | 8 | 10 | 8 | 12 |','| L12 | 16 | 8 | 14 | 8 | 14 |','| L13 | 16 | 10 | 11 | 8 | 12 |','| L14 | 14 | 10 | 12 | 8 | 18 |'])assert.ok(audit.includes(row));assert.match(audit,/adds no runtime vocabulary card.*wordAudioMap.*word MP3/s);assert.match(audit,/L11 intentionally has no learner-facing Listening/);
});
