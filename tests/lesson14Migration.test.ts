import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_14 } from '../src/data/lessons/lesson14.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity, ProseReadingContent } from '../src/types.ts';
import { describeExitCheckStatus, listeningEvidence, rolePlayCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const activities=LESSON_14.slides.flatMap((slide)=>slide.activities??[]);const source=readFileSync(new URL('../src/data/lessons/lesson14.ts',import.meta.url),'utf8');
function find<K extends LessonActivity['kind']>(id:string,kind:K):Extract<LessonActivity,{kind:K}>{const a=activities.find((x)=>x.id===id);assert.ok(a,`missing ${id}`);assert.equal(a.kind,kind);return a as Extract<LessonActivity,{kind:K}>;}
function proseContent(reading:Extract<LessonActivity,{kind:'reading'}>):ProseReadingContent{assert.ok(reading.content);assert.equal(reading.content.type,'prose');if(reading.content.type!=='prose')assert.fail();return reading.content;}
const direct=(activityId:string):ActivityEvidence=>({activityId,attempted:true,completed:true,passed:true,evidenceMode:'direct'});

test('L14 preserves identity, exact objective and quiz IDs, and eleven narration slots',()=>{
  assert.deepEqual([LESSON_14.id,LESSON_14.number,LESSON_14.level,LESSON_14.slidesCount],[14,14,'A1',11]);assert.deepEqual(LESSON_14.slides.map((s)=>s.id),[1,2,3,4,5,6,7,8,9,10,11]);
  assert.deepEqual(LESSON_14.objectives?.map((o)=>o.id),['l14_describe-routine','l14_form-reflexive','l14_use-reflexive','l14_tell-routine-time']);assert.deepEqual(LESSON_14.quiz?.map((q)=>q.id),[1401,1402,1403,1404,1405,1406]);for(let slide=1;slide<=11;slide+=1)assert.equal(existsSync(new URL(`../public/audio/14.${slide}.mp3`,import.meta.url)),true);
});

test('L14 exposes the complete valid checkpoint activity sequence',()=>{
  assert.deepEqual(activities.map((a)=>a.kind),['controlledPractice','reading','listening','rolePlay','writing','exitCheck']);assert.equal(new Set(activities.map((a)=>a.id)).size,activities.length);assert.deepEqual(activities.flatMap(validateActivity),[]);assert.deepEqual(validateLessonQuestionIds(activities),[]);
  const exit=find('l14-exit-check','exitCheck');const objectives=LESSON_14.objectives?.map((o)=>o.id)??[];assert.deepEqual(exit.checks.map((c)=>c.objectiveId),objectives);assert.deepEqual(validateExitCheckReferences(exit,objectives,activities.map((a)=>a.id)),[]);
});

test('L14 controlled practice integrates 16 routine, time, frequency, and earlier-A1 contexts',()=>{
  const cp=find('l14-cp-routine-forms','controlledPractice');assert.equal(cp.exercises.length,16);assert.equal(cp.passCount,13);const text=JSON.stringify(cp);
  for(const token of ['mosakodom','felöltözöm','lefekszem','eszem','Hét órakor','Nyolcra','Általában','Munka után','kávét','iskolában','hétvégén'])assert.ok(text.includes(token),token);
});

test('L14 Reading compares routines in 190–220 words with eight meaning questions',()=>{
  const reading=find('l14-reading-daily-routine','reading');const content=proseContent(reading);const words=content.paragraphs.join(' ').trim().split(/\s+/u).length;assert.ok(words>=190&&words<=220,`words=${words}`);assert.equal(reading.questions.length,8);assert.equal(reading.passCount,6);assert.match(content.title??'',/Két különböző hétköznap/);assert.match(content.paragraphs.join(' '),/Anna.*Bence.*busszal.*kerékpárral.*Hétvégén/s);
});

test('L14 published Listening remains exact and load-aware DIRECT',()=>{
  const listening=find('l14-listening-routine','listening');assert.equal(listening.assetId,'l14_listening_routine');assert.equal(listening.audioStatus,'published');assert.equal(listening.passCount,4);assert.equal(listening.questions.length,5);assert.equal(listening.transcript,'Anna reggel fél hétkor felébred. Hét órakor reggelizik. Nyolckor dolgozni megy. Délben ebédel. Este hatkor hazamegy, és tizenegykor lefekszik.');assert.equal(existsSync(new URL('../public/audio/l14_listening_routine.mp3',import.meta.url)),true);assert.equal(listeningEvidence(listening,4,5,true).evidenceMode,'direct');assert.equal(listeningEvidence(listening,4,5,false).evidenceMode,'none');
});

test('L14 RolePlay, Writing, and optional Speaking keep honest open-production semantics',()=>{
  const rolePlay=find('l14-roleplay-routine-comparison','rolePlay');assert.equal(rolePlay.turns.filter((t)=>t.speaker==='learner').length,8);assert.match(JSON.stringify(rolePlay),/Mikor kelsz.*Mit reggelizel.*busszal.*Te hol ebédelsz.*Munka után.*Hétvégén/s);assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode,'partial');
  const writing=find('l14-writing-daily-routine','writing');const words=writing.modelAnswer.join(' ').trim().split(/\s+/u).length;assert.ok(words>=90&&words<=110,`words=${words}`);assert.equal(writingEvidence(writing.modelAnswer.join(' '),true).evidenceMode,'partial');const speaking=LESSON_14.slides.find((s)=>s.optionalSpeaking)?.optionalSpeaking;assert.ok(speaking);assert.match(speaking.instructions,/2 минут.*без микрофона.*evidence/s);
});

test('L14 checkpoint keeps Language Use Reading Listening direct but Writing Interaction partial',()=>{
  const exit=find('l14-exit-check','exitCheck');const listening=find('l14-listening-routine','listening');const evidence:Record<string,ActivityEvidence>={
    'l14-cp-routine-forms':direct('l14-cp-routine-forms'),'l14-reading-daily-routine':direct('l14-reading-daily-routine'),'l14-listening-routine':{activityId:'l14-listening-routine',attempted:true,completed:true,...listeningEvidence(listening,4,5,true)},
    'l14-roleplay-routine-comparison':rolePlayCompletionEvidence('l14-roleplay-routine-comparison'),'l14-writing-daily-routine':{activityId:'l14-writing-daily-routine',attempted:true,selfReviewed:true,...writingEvidence('A developed routine text for review.',true)},};
  assert.deepEqual(Object.fromEntries(exit.checks.map((c)=>[c.objectiveId,describeExitCheckStatus(c,evidence[c.activityId],evidence).kind])),{'l14_describe-routine':'partial-review','l14_form-reflexive':'direct-met','l14_use-reflexive':'direct-met','l14_tell-routine-time':'partial-review'});
  assert.match(source,/Language Use.*DIRECT.*Reading.*DIRECT.*Listening.*DIRECT.*Writing.*PARTIAL.*Interaction.*PARTIAL.*Optional Speaking.*NO evidence/s);assert.match(source,/не означает автоматически «A1 achieved».*не является CEFR-сертификацией/s);
});

test('L14 keeps accurate -ik boundaries, stable vocabulary and quiz IDs, and aligned metadata',()=>{
  assert.match(source,/-ik-глаголы, но не возвратные действия/);assert.match(source,/не являются формулой/);assert.match(source,/разговорные варианты.*не объявляются «невозможным венгерским»/i);assert.match(source,/eszik/);assert.doesNotMatch(source,/szoktam\s+lefeküdni|SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask/);
  for(const q of LESSON_14.quiz??[])assert.equal(new Set(q.options).size,q.options.length);assert.deepEqual(LESSON_14.vocabulary?.map((v)=>v.id),Array.from({length:14},(_,i)=>`l14_v${i+1}`));const meta=LESSONS_META.find((x)=>x.id===14);assert.ok(meta);assert.equal(meta.description,LESSON_14.description);assert.equal(meta.slidesCount,11);
});
