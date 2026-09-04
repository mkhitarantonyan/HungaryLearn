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
  const expected:Record<number,string>={15:'bcd1d4e37188314d4ce6683ff4c1c3264dc5b4f582e95ce0e830ad738a00fd10',16:'f66f5adfb9abfb3e179ba10642d39f6e89390de01e495a344d137b33adecf657',17:'c46096bd93fdba90a71eb4dabec4558bc78ba2543d95c3d7ce09c8e59ae03a3e',18:'dc5729fb6d2ba0bf2d4ea8d48e5f8437858e5a52a2e9de0e319d56bd045ab7cf',19:'85c857d5601a80697d67cdfc962218dc6265e12937d282f4c9e0eff64cf8c325',20:'7805292794411d967f82f14198542122f611b10861a21935dd6a9b1b9c611138',21:'970477dfcfa7481ad1e8c7aecb1ad9adf9c5218dac3814a4be15e18f79a0c0b1',22:'c31bca32416e054cd9156dfbed0387a1f5b87d3c5bb4410661923c5b4d318c8c',23:'a5faee5ae85818a524f94f8f5ee78f50b661cad5df89602c35b127f45f993daa',24:'84047edb1c03f73b3b7e3eb8668e9a5ac8fa2df3008213601873819d6cd90d15',25:'94dfc11633622c67447973b10ca3fc3c70c8f6ed298ed454af979996ecdffc74',26:'fb9572913f6caaf591e3d11ed7420674ca567932c8478f0d3e1d70d2db5f39ee',27:'a265e3a27e9faf15188596a7f6f00dbb955231830b6f81d641c74536a9982af2'};
  for(const [n,hash] of Object.entries(expected))assert.equal(sha256(new URL(`../src/data/lessons/lesson${n}.ts`,import.meta.url)),hash,`L${n}`);
  for(const asset of ['l21_listening_b_film_choice','l22_listening_b_office_instructions','l23_listening_b_free_week','l24_listening_b_city_or_suburbs'])assert.equal(existsSync(new URL(`../public/audio/${asset}.mp3`,import.meta.url)),true);
});

test('P3 leaves L28 byte-identical',()=>{assert.equal(sha256(new URL('../src/data/lessons/lesson28.ts',import.meta.url)),'617f7df1bbd486161a0dba0f63ae0be08011eeacd2b69a060d282ea3e7de2fcc');});

test('P3 vocabulary audit classifies selective content without runtime or audio expansion',()=>{
  const audit=readFileSync(new URL('../docs/P3_VOCABULARY_AUDIT.md',import.meta.url),'utf8');for(const label of ['CORE','FUNCTIONAL CHUNK','RECEPTIVE','RECYCLED'])assert.match(audit,new RegExp(label));for(const row of ['| L11 | 16 | 8 | 10 | 8 | 12 |','| L12 | 16 | 8 | 14 | 8 | 14 |','| L13 | 16 | 10 | 11 | 8 | 12 |','| L14 | 14 | 10 | 12 | 8 | 18 |'])assert.ok(audit.includes(row));assert.match(audit,/adds no runtime vocabulary card.*wordAudioMap.*word MP3/s);assert.match(audit,/L11 intentionally has no learner-facing Listening/);
});
