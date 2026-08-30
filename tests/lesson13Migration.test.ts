import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_13 } from '../src/data/lessons/lesson13.ts';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import type { ActivityEvidence, LessonActivity, ProseReadingContent } from '../src/types.ts';
import { describeExitCheckStatus, listeningEvidence, rolePlayCompletionEvidence, validateActivity, validateExitCheckReferences, validateLessonQuestionIds, writingEvidence } from '../src/utils/activityUtils.ts';

const activities=LESSON_13.slides.flatMap((slide)=>slide.activities??[]); const source=readFileSync(new URL('../src/data/lessons/lesson13.ts',import.meta.url),'utf8');
function find<K extends LessonActivity['kind']>(id:string,kind:K):Extract<LessonActivity,{kind:K}>{const a=activities.find((x)=>x.id===id);assert.ok(a,`missing ${id}`);assert.equal(a.kind,kind);return a as Extract<LessonActivity,{kind:K}>;}
function proseContent(reading:Extract<LessonActivity,{kind:'reading'}>):ProseReadingContent{assert.ok(reading.content);assert.equal(reading.content.type,'prose');if(reading.content.type!=='prose')assert.fail();return reading.content;}
const direct=(activityId:string):ActivityEvidence=>({activityId,attempted:true,completed:true,passed:true,evidenceMode:'direct'});

test('L13 preserves identity, exact objective and quiz IDs, and adopts eleven-slide identity',()=>{
  assert.deepEqual([LESSON_13.id,LESSON_13.number,LESSON_13.level,LESSON_13.slidesCount],[13,13,'A1',11]); assert.deepEqual(LESSON_13.slides.map((s)=>s.id),[1,2,3,4,5,6,7,8,9,10,11]);
  assert.deepEqual(LESSON_13.objectives?.map((o)=>o.id),['l13_form-past','l13_use-volt','l13_distinguish-present-past','l13_tell-past']); assert.deepEqual(LESSON_13.quiz?.map((q)=>q.id),[1301,1302,1303,1304,1305,1306]);
  for(let slide=1;slide<=11;slide+=1)assert.equal(existsSync(new URL(`../public/audio/13.${slide}.mp3`,import.meta.url)),true);
});

test('L13 has the complete valid communicative activity sequence',()=>{
  assert.deepEqual(activities.map((a)=>a.kind),['controlledPractice','reading','listening','rolePlay','writing','exitCheck']); assert.equal(new Set(activities.map((a)=>a.id)).size,activities.length);
  assert.deepEqual(activities.flatMap(validateActivity),[]);assert.deepEqual(validateLessonQuestionIds(activities),[]);const exit=find('l13-exit-check','exitCheck');const objectives=LESSON_13.objectives?.map((o)=>o.id)??[];assert.deepEqual(validateExitCheckReferences(exit,objectives,activities.map((a)=>a.id)),[]);
});

test('L13 contextual practice has 14 bounded introductory past-tense items at 11/14',()=>{
  const cp=find('l13-cp-past-forms','controlledPractice');assert.equal(cp.exercises.length,14);assert.equal(cp.passCount,11);const text=JSON.stringify(cp);
  for(const token of ['voltam','dolgoztam','sétáltam','Mit csináltál tegnap','Nem dolgoztam','boltba mentem','találkoztam','Utána','Végül'])assert.ok(text.includes(token),token);
  assert.doesNotMatch(text,/határozott|tárgyas ragozás|teljes paradigma/i);
});

test('L13 Reading is a 170–200 word A1 narrative with eight meaning questions',()=>{
  const reading=find('l13-reading-tense-contrast','reading');const content=proseContent(reading);const words=content.paragraphs.join(' ').trim().split(/\s+/u).length;
  assert.ok(words>=170&&words<=200,`words=${words}`);assert.equal(reading.questions.length,8);assert.equal(reading.passCount,6);assert.match(content.title??'',/Egy mozgalmas szombat/);assert.match(content.paragraphs.join(' '),/Reggel.*piacra.*Gáborral.*nem kaptunk jegyet.*Este/s);
});

test('L13 published Listening remains exact and load-aware DIRECT',()=>{
  const listening=find('l13-listening-tense-contrast','listening');assert.equal(listening.assetId,'l13_listening_tense_contrast');assert.equal(listening.audioStatus,'published');assert.equal(listening.passCount,4);assert.equal(listening.questions.length,5);
  assert.equal(listening.transcript,'Ma Péter otthon dolgozik. Tegnap nem dolgozott: délelőtt a parkban sétált, délután pedig a barátaival volt. Este filmet néztek.');assert.equal(existsSync(new URL('../public/audio/l13_listening_tense_contrast.mp3',import.meta.url)),true);assert.equal(listeningEvidence(listening,4,5,true).evidenceMode,'direct');assert.equal(listeningEvidence(listening,4,5,false).evidenceMode,'none');
});

test('L13 RolePlay and Writing provide connected but PARTIAL production, Speaking provides none',()=>{
  const rolePlay=find('l13-roleplay-weekend','rolePlay');assert.equal(rolePlay.turns.filter((t)=>t.speaker==='learner').length,7);assert.match(JSON.stringify(rolePlay),/Mit csináltál.*Hol voltál.*Kivel találkoztál.*Volt valami probléma.*És te/s);assert.equal(rolePlayCompletionEvidence(rolePlay.id).evidenceMode,'partial');
  const writing=find('l13-writing-past-story','writing');const words=writing.modelAnswer.join(' ').trim().split(/\s+/u).length;assert.ok(words>=80&&words<=100,`words=${words}`);assert.equal(writingEvidence(writing.modelAnswer.join(' '),true).evidenceMode,'partial');
  const speaking=LESSON_13.slides.find((s)=>s.optionalSpeaking)?.optionalSpeaking;assert.ok(speaking);assert.match(speaking.instructions,/1\.5–2 минуты.*без микрофона.*evidence/s);
});

test('L13 ExitCheck keeps auto-checkable comprehension direct and connected production partial',()=>{
  const exit=find('l13-exit-check','exitCheck');const listening=find('l13-listening-tense-contrast','listening');const evidence:Record<string,ActivityEvidence>={
    'l13-cp-past-forms':direct('l13-cp-past-forms'),'l13-reading-tense-contrast':direct('l13-reading-tense-contrast'),'l13-listening-tense-contrast':{activityId:'l13-listening-tense-contrast',attempted:true,completed:true,...listeningEvidence(listening,4,5,true)},
    'l13-roleplay-weekend':rolePlayCompletionEvidence('l13-roleplay-weekend'),'l13-writing-past-story':{activityId:'l13-writing-past-story',attempted:true,selfReviewed:true,...writingEvidence('A developed past narrative for review.',true)},};
  assert.deepEqual(Object.fromEntries(exit.checks.map((c)=>[c.objectiveId,describeExitCheckStatus(c,evidence[c.activityId],evidence).kind])),{'l13_form-past':'direct-met','l13_use-volt':'direct-met','l13_distinguish-present-past':'direct-met','l13_tell-past':'partial-review'});
});

test('L13 remains an introduction rather than importing L20, while quiz and metadata stay stable',()=>{
  assert.match(source,/ограниченное введение/);assert.match(source,/Полная система.*L20|полная система.*уроке 20/i);assert.doesNotMatch(source,/покрывает все оттенки|полная система всех|SpeechSynthesis|speechSynthesis|AudioRecorder|RecordingTask/);
  for(const q of LESSON_13.quiz??[])assert.equal(new Set(q.options).size,q.options.length);assert.deepEqual(LESSON_13.vocabulary?.map((v)=>v.id),Array.from({length:16},(_,i)=>`l13_v${i+1}`));const meta=LESSONS_META.find((x)=>x.id===13);assert.ok(meta);assert.equal(meta.slidesCount,11);assert.equal(meta.description,LESSON_13.description);
});
