import type { Lesson, LessonActivity } from '../../types';

const ROUTINE_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l14-cp-routine-forms', title: 'Формы изученных глаголов распорядка дня', passCount: 5,
  exercises: [
    { kind: 'textInput', id: 'l14-forms-1', prompt: 'mosakodik → én', accept: ['mosakodom'] },
    { kind: 'textInput', id: 'l14-forms-2', prompt: 'felöltözik → én (стандартная форма курса)', accept: ['felöltözöm'] },
    { kind: 'textInput', id: 'l14-forms-3', prompt: 'lefekszik → én', accept: ['lefekszem'] },
    { kind: 'textInput', id: 'l14-forms-4', prompt: 'eszik → én', accept: ['eszem'] },
    { kind: 'textInput', id: 'l14-forms-5', prompt: 'mosakodik → te', accept: ['mosakodsz'] },
    { kind: 'textInput', id: 'l14-forms-6', prompt: 'felöltözik → ő', accept: ['felöltözik'] },
  ],
};

const ROUTINE_CONTEXT: LessonActivity = {
  kind: 'controlledPractice', id: 'l14-cp-routine-context', title: 'Глаголы распорядка дня в контексте', passCount: 4,
  exercises: [
    { kind: 'singleChoice', id: 'l14-context-1', prompt: 'Reggel megmosom az arcomat: __.', options: ['Mosakodom', 'Vacsorázom', 'Elalszom'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-context-2', prompt: 'Felveszem a ruháimat: __.', options: ['Felkelek', 'Felöltözöm', 'Felébredek'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l14-context-3', prompt: 'Este ágyba megyek: __.', options: ['Lefekszem', 'Reggelizem', 'Fésülködöm'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-context-4', prompt: 'Reggel ételt eszem: __.', options: ['Ebédelünk', 'Reggelizem', 'Hazamegyek'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l14-context-5', prompt: 'Fésűvel rendezem a hajamat: __.', options: ['Fogat mosok', 'Fésülködöm', 'Felkelek'], correctIndex: 1 },
  ],
};

const DAILY_ROUTINE_READING: LessonActivity = {
  kind: 'reading', id: 'l14-reading-daily-routine', title: 'Чтение: один обычный день',
  instructions: 'Прочитай связный распорядок дня и ответь на вопросы о последовательности, действиях и времени.', passCount: 4,
  content: { type: 'prose', title: 'Egy nap', paragraphs: [
    'Reggel hét órakor felébredek. Utána mosakodom és felöltözöm.',
    'Fél nyolckor reggelizem, majd dolgozni megyek.',
    'Délben ebédelek, este pedig hazamegyek.',
    'Vacsora után magyarul tanulok, és este tizenegykor lefekszem.',
  ] },
  questions: [
    { id: 'l14-reading-q1', question: 'Во сколько рассказчик просыпается?', options: ['hét órakor', 'fél nyolckor', 'tizenegykor'], correctIndex: 0 },
    { id: 'l14-reading-q2', question: 'Что он делает после пробуждения?', options: ['ebédel', 'mosakodik és felöltözik', 'hazamegy'], correctIndex: 1 },
    { id: 'l14-reading-q3', question: 'Когда он завтракает?', options: ['délben', 'este', 'fél nyolckor'], correctIndex: 2 },
    { id: 'l14-reading-q4', question: 'Что происходит раньше?', options: ['hazamegy', 'ebédel', 'lefekszik'], correctIndex: 1 },
    { id: 'l14-reading-q5', question: 'Что он делает после ужина?', options: ['magyarul tanul', 'dolgozni megy', 'felöltözik'], correctIndex: 0 },
  ],
};

const ROUTINE_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l14-listening-routine', title: 'Аудирование: распорядок Анны',
  assetId: 'l14_listening_routine', audioStatus: 'published',
  transcript: 'Anna reggel fél hétkor felébred. Hét órakor reggelizik. Nyolckor dolgozni megy. Délben ebédel. Este hatkor hazamegy, és tizenegykor lefekszik.',
  passCount: 4,
  questions: [
    { id: 'l14-listening-q1', question: 'Когда Анна просыпается?', options: ['fél hétkor', 'hét órakor', 'nyolckor'], correctIndex: 0 },
    { id: 'l14-listening-q2', question: 'Что она делает в семь?', options: ['reggelizik', 'ebédel', 'hazamegy'], correctIndex: 0 },
    { id: 'l14-listening-q3', question: 'Куда она идёт в восемь?', options: ['haza', 'dolgozni', 'aludni'], correctIndex: 1 },
    { id: 'l14-listening-q4', question: 'Когда она возвращается домой?', options: ['délben', 'este hatkor', 'tizenegykor'], correctIndex: 1 },
    { id: 'l14-listening-q5', question: 'Какое действие завершает распорядок?', options: ['felébred', 'reggelizik', 'lefekszik'], correctIndex: 2 },
  ],
};

const DAILY_ROUTINE_WRITING: LessonActivity = {
  kind: 'writing', id: 'l14-writing-daily-routine', title: 'Письмо: мой распорядок дня',
  prompt: 'Напиши 6–8 связанных предложений о своём обычном дне. Укажи минимум шесть действий в понятном порядке и минимум три выражения времени.',
  modelAnswer: [
    'Reggel hét órakor felébredek.', 'Utána felkelek, mosakodom és felöltözöm.',
    'Fél nyolckor reggelizem.', 'Nyolc órakor dolgozni megyek.',
    'Délben ebédelek, este pedig hazamegyek.', 'Este tizenegykor lefekszem.',
  ],
  rubric: ['Есть 6–8 связанных предложений', 'Названы минимум шесть действий в логичном порядке', 'Использованы минимум три выражения времени'],
};

const DAILY_ROUTINE_RECORDING: LessonActivity = {
  kind: 'recording', id: 'l14-record-daily-routine', title: 'Говорение: мой день и расписание',
  instructions: 'Запиши короткий рассказ о своём обычном дне: назови несколько действий и минимум два времени. Затем проверь последовательность и формы глаголов.',
  targetText: 'Reggel hét órakor felébredek. Utána mosakodom és felöltözöm. Fél nyolckor reggelizem. Este tizenegykor lefekszem.',
  targetTranslation: 'Утром я просыпаюсь в семь. Затем умываюсь и одеваюсь. В половине восьмого завтракаю. Вечером ложусь в одиннадцать.',
  rubric: ['Названы несколько последовательных действий', 'Есть минимум два выражения времени', 'Использована хотя бы одна изученная форма routine/-ik глагола'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l14-exit-check', title: 'Проверка целей урока 14', checks: [
    { objectiveId: 'l14_describe-routine', activityId: 'l14-writing-daily-routine', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l14-record-daily-routine', evidenceKind: 'speaking' }] },
    { objectiveId: 'l14_form-reflexive', activityId: 'l14-cp-routine-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l14_use-reflexive', activityId: 'l14-cp-routine-context', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l14-record-daily-routine', evidenceKind: 'speaking' }] },
    { objectiveId: 'l14_tell-routine-time', activityId: 'l14-listening-routine', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l14-record-daily-routine', evidenceKind: 'speaking' }] },
  ],
};

export const LESSON_14: Lesson = {
  id: 14, number: 14, level: 'A1',
  title: 'Урок 14 · Napi rutin',
  subtitle: 'Распорядок дня, частые -ik-глаголы и время',
  description: 'Распорядок дня, частые формы настоящего времени routine/-ik-глаголов, выражения времени и короткий связный рассказ о своём дне.',
  slidesCount: 11,
  slides: [
    { id: 1, eyebrow: 'УРОК 14 · 1/11 · УРОВЕНЬ A1 · ВВЕДЕНИЕ', title: 'Napi rutin', subtitle: 'Распорядок дня и знакомый класс -ik', body: `
   <p>Из урока 4 мы помним: глагол с формой на <b>-ik</b> в 3-м лице относится к особому классу спряжения. Это характеристика формы, а не готовое значение «делать с собой».</p>
   <p><b>reggelizik</b> (завтракать), <b>vacsorázik</b> (ужинать) и <b>eszik</b> (есть) — -ik-глаголы, но не возвратные действия.</p>
   <p>Некоторые изучаемые глаголы распорядка дня по словарному значению соответствуют русским глаголам с «-ся»: <b>mosakodik</b>, <b>fésülködik</b>, <b>felöltözik</b>.</p>
   <div class="note">Учим эти глаголы как готовые слова и их формы. Окончания <b>-kodik/-kedik/-ködik</b> не являются формулой, по которой на уровне A1 можно самостоятельно создавать новые глаголы.</div>` },
    { id: 2, eyebrow: 'УРОК 14 · 2/11 · СЛОВАРЬ', title: 'Napi cselekvések', subtitle: 'Основные действия дня', body: `
   <div class="grid2"><div><p><b>felébred</b> — просыпаться</p><p><b>felkel</b> — вставать</p><p><b>mosakodik</b> — умываться / мыться</p><p><b>fésülködik</b> — причёсываться</p><p><b>felöltözik</b> — одеться / завершить одевание</p><p><b>fogat mos</b> — чистить зубы</p></div><div><p><b>reggelizik</b> — завтракать</p><p><b>ebédel</b> — обедать</p><p><b>vacsorázik</b> — ужинать</p><p><b>hazamegy</b> — идти домой</p><p><b>lefekszik</b> — ложиться спать</p><p><b>elalszik</b> — засыпать</p></div></div>` },
    { id: 3, eyebrow: 'УРОК 14 · 3/11 · ФОРМЫ', title: 'Ikes igék — én', subtitle: 'Небольшое продолжение урока 4', body: `
   <p>В качестве стандартных форм курса используй: <b>mosakodom, felöltözöm, lefekszem, eszem</b>.</p>
   <p><b>eszik → eszem</b> — частый особый глагол из урока 4. Он показывает, что принадлежность к классу -ik ничего сама по себе не говорит о возвратном значении.</p>
   <div class="note">В современной речи у многих -ik-глаголов встречаются варианты 1-го лица с <b>-k</b>. Здесь мы тренируем стандартные формы с <b>-m</b> и не объявляем разговорные варианты «невозможным венгерским».</div>`, activities: [ROUTINE_FORMS] },
    { id: 4, eyebrow: 'УРОК 14 · 4/11 · ВРЕМЯ + ДЕЙСТВИЕ', title: 'Mikor csinálom?', subtitle: 'Возвращаемся к времени из урока 5', body: `
   <p><b>Hét órakor felébredek.</b> — Я просыпаюсь в семь часов.</p><p><b>Fél nyolckor reggelizem.</b> — Я завтракаю в половине восьмого.</p><p><b>Este tizenegykor lefekszem.</b> — Вечером я ложусь спать в одиннадцать.</p>
   <div class="note"><b>reggel</b> — утром, <b>délben</b> — в полдень, <b>este</b> — вечером, <b>éjfél körül</b> — около полуночи.</div>`, activities: [ROUTINE_CONTEXT] },
    { id: 5, eyebrow: 'УРОК 14 · 5/11 · ЧТЕНИЕ', title: 'Egy nap', subtitle: 'Один обычный день', body: `<p>Прочитай рассказ как связную последовательность действий. Понимание проверяют вопросы; само чтение вслух не доказывает правильность или понимание.</p>`, activities: [DAILY_ROUTINE_READING] },
    { id: 6, eyebrow: 'УРОК 14 · 6/11 · ДОПОЛНИТЕЛЬНО', title: 'Magam és magamat', subtitle: 'Необязательное распознавание', body: `
   <p><b>Дополнительно, вне целей и проходных заданий урока:</b> формы <b>magam, magad, maga</b> могут означать «сам / себя» в зависимости от конструкции. В винительном падеже полные формы: <b>magamat, magadat, magát</b>.</p>
   <p><b>Látom magamat a tükörben.</b> — Я вижу себя в зеркале.</p><div class="note">Этот блок служит только для распознавания и не входит в Quiz или ExitCheck урока 14.</div>` },
    { id: 7, eyebrow: 'УРОК 14 · 7/11 · ДИАЛОГ И АУДИРОВАНИЕ', title: 'Mikor kelsz fel?', subtitle: 'Расписание в вопросах и ответах', body: `
   <p><b>A:</b> Hány órakor kelsz fel általában?</p><p><b>B:</b> Általában hét órakor kelek fel.</p><p><b>A:</b> És mikor fekszel le?</p><p><b>B:</b> Általában éjfél körül fekszem le.</p>
   <div class="note">Отдельная запись для аудирования ещё не опубликована, поэтому задание пока недоступно.</div>`, activities: [ROUTINE_LISTENING, DAILY_ROUTINE_RECORDING] },
    { id: 8, eyebrow: 'УРОК 14 · 8/11 · ПИСЬМО', title: 'Az én napom', subtitle: 'Связный рассказ о своём дне', body: `<p>Собери знакомые действия и время в один короткий рассказ. Открытый текст проверяется по рубрике и остаётся материалом для последующей проверки.</p>`, activities: [DAILY_ROUTINE_WRITING] },
    { id: 9, eyebrow: 'УРОК 14 · 9/11 · РАСШИРЕННЫЙ СЛОВАРЬ', title: 'Kiegészítő szókincs', subtitle: 'Необязательные бытовые глаголы', body: `
   <div class="grid2"><div><p><b>zuhanyozik</b> — принимать душ</p><p><b>pihen</b> — отдыхать</p></div><div><p><b>sétál</b> — гулять</p><p><b>takarít</b> — убираться</p></div></div>
   <div class="note"><b>öltözködik</b> может обозначать процесс или манеру одеваться в зависимости от контекста. Это обогащение; в основных заданиях используется <b>felöltözik</b>.</div>` },
    { id: 10, eyebrow: 'УРОК 14 · 10/11 · ГРАНИЦА УРОКА', title: 'Az A1 vége', subtitle: 'Завершение уровня A1', body: `<p>В этом уроке остаёмся в настоящем времени и описываем обычный день. Следующий урок открывает уровень A2 новой темой.</p>` },
    { id: 11, eyebrow: 'УРОК 14 · 11/11 · ИТОГИ', title: 'Összefoglalás', subtitle: 'Итоги урока 14', body: `<ul class="tick"><li>-ik обозначает класс глагола, а не автоматическое возвратное значение</li><li>Формы изученных routine-глаголов употребляются как готовые словарные модели</li><li>Время и последовательность связывают действия в рассказ о дне</li></ul>`, activities: [EXIT_CHECK] },
  ],
  vocabulary: [
    { id: 'l14_v1', hu: 'napi rutin', ru: 'ежедневный распорядок', category: 'Тема урока' },
    { id: 'l14_v2', hu: 'felébred', ru: 'просыпаться', category: 'Глаголы дня' },
    { id: 'l14_v3', hu: 'felkel', ru: 'вставать', category: 'Глаголы дня' },
    { id: 'l14_v4', hu: 'mosakodik', ru: 'умываться / мыться', category: 'Глаголы дня' },
    { id: 'l14_v5', hu: 'fésülködik', ru: 'причёсываться', category: 'Глаголы дня' },
    { id: 'l14_v6', hu: 'felöltözik', ru: 'одеться / одеваться', category: 'Глаголы дня' },
    { id: 'l14_v7', hu: 'fogat mos', ru: 'чистить зубы', category: 'Глаголы дня' },
    { id: 'l14_v8', hu: 'reggelizik', ru: 'завтракать', category: 'Глаголы дня' },
    { id: 'l14_v9', hu: 'ebédel', ru: 'обедать', category: 'Глаголы дня' },
    { id: 'l14_v10', hu: 'vacsorázik', ru: 'ужинать', category: 'Глаголы дня' },
    { id: 'l14_v11', hu: 'hazamegy', ru: 'идти домой', category: 'Глаголы дня' },
    { id: 'l14_v12', hu: 'lefekszik', ru: 'ложиться спать', category: 'Глаголы дня' },
    { id: 'l14_v13', hu: 'elalszik', ru: 'засыпать', category: 'Глаголы дня' },
    { id: 'l14_v14', hu: 'eszik', ru: 'есть', category: 'Повторение -ik' },
  ],
  quiz: [
    { id: 1401, question: 'Какая стандартная форма курса означает «я умываюсь»?', options: ['mosakodom', 'mosakodik', 'mosakodsz', 'mosakodunk'], correctIndex: 0, explanation: 'Изученная форма: mosakodik → én mosakodom.' },
    { id: 1402, question: 'Какая стандартная форма курса означает «я ем»?', options: ['eszik', 'eszem', 'eszel', 'eszünk'], correctIndex: 1, explanation: 'Частый -ik-глагол имеет изученную форму eszik → eszem. Его значение не является возвратным.' },
    { id: 1403, question: 'Как сказать «Я просыпаюсь в семь часов»?', options: ['Hét órakor felébredek.', 'Hét órán felébredek.', 'Hét órában felébredek.', 'Hét órára felébredek.'], correctIndex: 0, explanation: 'Точное время действия выражается формой hét órakor; felébred → felébredek.' },
    { id: 1404, question: 'Как сказать «Утром я одеваюсь» стандартной формой курса?', options: ['Reggel felöltözik.', 'Reggel felöltözöm.', 'Reggel felöltözünk.', 'Reggel felöltözöl.'], correctIndex: 1, explanation: 'Для én используется изученная стандартная форма felöltözöm.' },
    { id: 1405, question: 'Как сказать «Я завтракаю в половине восьмого»?', options: ['Fél nyolckor reggelizem.', 'Fél nyolcban reggelizem.', 'Fél nyolcra ebédelek.', 'Nyolc félkor reggelizem.'], correctIndex: 0, explanation: 'По-венгерски 7:30 — fél nyolc; время действия получает -kor: fél nyolckor.' },
    { id: 1406, question: 'Как естественно сказать «Обычно я ложусь около полуночи»?', options: ['Általában éjfél körül fekszem le.', 'Általában éjfél körül fekszik le.', 'Általában éjfél körül kelek fel.', 'Éjfél körül reggelizem.'], correctIndex: 0, explanation: 'Простая модель настоящего времени: általában + время + fekszem le.' },
  ],
  objectives: [
    { id: 'l14_describe-routine', text: 'Описывать распорядок дня с временными выражениями.', skills: ['speaking', 'writing'] },
    { id: 'l14_form-reflexive', text: 'Правильно образовывать формы изученных возвратных/средних глаголов распорядка дня в настоящем времени.', skills: ['grammar', 'writing'] },
    { id: 'l14_use-reflexive', text: 'Употреблять изученные возвратные/средние глаголы распорядка дня в контексте настоящего времени.', skills: ['grammar', 'speaking'] },
    { id: 'l14_tell-routine-time', text: 'Сообщать, во сколько и что делает человек, используя время и действие.', skills: ['speaking', 'listening'] },
  ],
};
