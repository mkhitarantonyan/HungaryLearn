import { Lesson, LessonActivity } from '../../types';

export const L5_LISTENING_TRANSCRIPT = `Négy. Tizenhárom. Húsz. Huszonkettő. Harmincnyolc. Negyvenhét. Ötvenhat. Hatvankilenc. Nyolcvannégy. Száz.

A dátum: kétezer-huszonhat augusztus harmadika. Ma hétfő van. Hétfőn nyolckor magyarul tanulok. Szerdán háromkor dolgozom. Pénteken öt órakor olvasok. Szombaton tízkor írok.`;

const L5_CP_NUMBER_RECOGNITION: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l5-cp-number-recognition',
  title: 'Число ↔ венгерское слово',
  passCount: 4,
  exercises: [
    { kind: 'singleChoice', id: 'l5-recognition-1', prompt: '2 = ?', options: ['két', 'kettő', 'hét'], correctIndex: 1, explanation: 'Самостоятельное название числа 2 — kettő; két ставится перед существительным или единицей.' },
    { kind: 'singleChoice', id: 'l5-recognition-2', prompt: '12 = ?', options: ['tizenkettő', 'tizenhárom', 'huszonkettő'], correctIndex: 0, explanation: '12: tizen- + kettő → tizenkettő.' },
    { kind: 'singleChoice', id: 'l5-recognition-3', prompt: '29 = ?', options: ['huszonkilenc', 'húszkilenc', 'harminckilenc'], correctIndex: 0, explanation: '29: huszon- + kilenc → huszonkilenc.' },
    { kind: 'singleChoice', id: 'l5-recognition-4', prompt: '50 = ?', options: ['ötven', 'ötvenöt', 'öt'], correctIndex: 0, explanation: '50 — ötven.' },
    { kind: 'singleChoice', id: 'l5-recognition-5', prompt: '73 = ?', options: ['hetvenhárom', 'hétvenhárom', 'harminchét'], correctIndex: 0, explanation: '73: hetven + három → hetvenhárom.' },
  ],
};

const L5_CP_WRITE_NUMBERS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l5-cp-write-numbers',
  title: 'Запиши числа словами',
  passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l5-write-number-1', prompt: '7 → напиши по-венгерски', accept: ['hét'] },
    { kind: 'textInput', id: 'l5-write-number-2', prompt: '11 → напиши по-венгерски', accept: ['tizenegy'] },
    { kind: 'textInput', id: 'l5-write-number-3', prompt: '18 → напиши по-венгерски', accept: ['tizennyolc'] },
    { kind: 'textInput', id: 'l5-write-number-4', prompt: '20 → напиши по-венгерски', accept: ['húsz'], explanation: 'Долгая ú обязательна: húsz.' },
    { kind: 'textInput', id: 'l5-write-number-5', prompt: '24 → напиши по-венгерски', accept: ['huszonnégy'] },
    { kind: 'textInput', id: 'l5-write-number-6', prompt: '30 → напиши по-венгерски', accept: ['harminc'] },
    { kind: 'textInput', id: 'l5-write-number-7', prompt: '45 → напиши по-венгерски', accept: ['negyvenöt'] },
    { kind: 'textInput', id: 'l5-write-number-8', prompt: '62 → напиши по-венгерски', accept: ['hatvankettő'] },
    { kind: 'textInput', id: 'l5-write-number-9', prompt: '90 → напиши по-венгерски', accept: ['kilencven'] },
    { kind: 'textInput', id: 'l5-write-number-10', prompt: '100 → напиши по-венгерски', accept: ['száz'] },
  ],
};

const L5_CP_WEEKDAYS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l5-cp-weekday-order',
  title: 'Дни недели: полный порядок',
  passCount: 7,
  exercises: [
    { kind: 'textInput', id: 'l5-weekday-1', prompt: '1-й день последовательности', accept: ['hétfő'] },
    { kind: 'textInput', id: 'l5-weekday-2', prompt: '2-й день последовательности', accept: ['kedd'] },
    { kind: 'textInput', id: 'l5-weekday-3', prompt: '3-й день последовательности', accept: ['szerda'] },
    { kind: 'textInput', id: 'l5-weekday-4', prompt: '4-й день последовательности', accept: ['csütörtök'] },
    { kind: 'textInput', id: 'l5-weekday-5', prompt: '5-й день последовательности', accept: ['péntek'] },
    { kind: 'textInput', id: 'l5-weekday-6', prompt: '6-й день последовательности', accept: ['szombat'] },
    { kind: 'textInput', id: 'l5-weekday-7', prompt: '7-й день последовательности', accept: ['vasárnap'] },
  ],
};

const L5_CP_MONTHS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l5-cp-month-order',
  title: 'Месяцы: порядок от января до декабря',
  passCount: 10,
  exercises: [
    { kind: 'textInput', id: 'l5-month-1', prompt: '1-й месяц', accept: ['január'] },
    { kind: 'textInput', id: 'l5-month-2', prompt: '2-й месяц', accept: ['február'] },
    { kind: 'textInput', id: 'l5-month-3', prompt: '3-й месяц', accept: ['március'] },
    { kind: 'textInput', id: 'l5-month-4', prompt: '4-й месяц', accept: ['április'] },
    { kind: 'textInput', id: 'l5-month-5', prompt: '5-й месяц', accept: ['május'] },
    { kind: 'textInput', id: 'l5-month-6', prompt: '6-й месяц', accept: ['június'] },
    { kind: 'textInput', id: 'l5-month-7', prompt: '7-й месяц', accept: ['július'] },
    { kind: 'textInput', id: 'l5-month-8', prompt: '8-й месяц', accept: ['augusztus'] },
    { kind: 'textInput', id: 'l5-month-9', prompt: '9-й месяц', accept: ['szeptember'] },
    { kind: 'textInput', id: 'l5-month-10', prompt: '10-й месяц', accept: ['október'] },
    { kind: 'textInput', id: 'l5-month-11', prompt: '11-й месяц', accept: ['november'] },
    { kind: 'textInput', id: 'l5-month-12', prompt: '12-й месяц', accept: ['december'] },
  ],
};

const L5_READING_SCHEDULE: LessonActivity = {
  kind: 'reading',
  id: 'l5-reading-weekly-schedule',
  title: 'Чтение: недельный календарь',
  instructions: 'Прочитай дату и расписание, затем ответь на вопросы.',
  passCount: 4,
  content: {
    type: 'prose',
    title: 'Heti program',
    paragraphs: [
      '2026. szeptember 7., hétfő.',
      'Hétfőn kilenckor magyarul tanulok.',
      'Kedden négykor olvasok.',
      'Csütörtökön hatkor írok.',
      'Vasárnap tízkor dolgozom.',
    ],
  },
  questions: [
    { id: 'l5-reading-schedule-q1', question: 'Какая дата указана в календаре?', options: ['2026. augusztus 7.', '2026. szeptember 7.', '2026. szeptember 9.'], correctIndex: 1 },
    { id: 'l5-reading-schedule-q2', question: 'Когда ученик занимается венгерским?', options: ['hétfőn kilenckor', 'kedden négykor', 'vasárnap tízkor'], correctIndex: 0 },
    { id: 'l5-reading-schedule-q3', question: 'Что ученик делает во вторник?', options: ['dolgozik', 'olvas', 'ír'], correctIndex: 1 },
    { id: 'l5-reading-schedule-q4', question: 'Когда ученик пишет?', options: ['csütörtökön hatkor', 'hétfőn kilenckor', 'vasárnap tízkor'], correctIndex: 0 },
    { id: 'l5-reading-schedule-q5', question: 'В какой день ученик работает?', options: ['hétfőn', 'csütörtökön', 'vasárnap'], correctIndex: 2 },
  ],
};

const L5_LISTENING_NUMBER_DICTATION: LessonActivity = {
  kind: 'listening',
  id: 'l5-listening-number-dictation',
  title: 'Аудирование A: диктант чисел',
  assetId: 'l5_listening_time',
  audioStatus: 'published',
  transcript: L5_LISTENING_TRANSCRIPT,
  passCount: 8,
  questions: [
    { kind: 'textInput', id: 'l5-listen-number-1', question: 'Запись 1: введи услышанное число по-венгерски.', accept: ['négy'] },
    { kind: 'textInput', id: 'l5-listen-number-2', question: 'Запись 2: введи услышанное число по-венгерски.', accept: ['tizenhárom'] },
    { kind: 'textInput', id: 'l5-listen-number-3', question: 'Запись 3: введи услышанное число по-венгерски.', accept: ['húsz'] },
    { kind: 'textInput', id: 'l5-listen-number-4', question: 'Запись 4: введи услышанное число по-венгерски.', accept: ['huszonkettő'] },
    { kind: 'textInput', id: 'l5-listen-number-5', question: 'Запись 5: введи услышанное число по-венгерски.', accept: ['harmincnyolc'] },
    { kind: 'textInput', id: 'l5-listen-number-6', question: 'Запись 6: введи услышанное число по-венгерски.', accept: ['negyvenhét'] },
    { kind: 'textInput', id: 'l5-listen-number-7', question: 'Запись 7: введи услышанное число по-венгерски.', accept: ['ötvenhat'] },
    { kind: 'textInput', id: 'l5-listen-number-8', question: 'Запись 8: введи услышанное число по-венгерски.', accept: ['hatvankilenc'] },
    { kind: 'textInput', id: 'l5-listen-number-9', question: 'Запись 9: введи услышанное число по-венгерски.', accept: ['nyolcvannégy'] },
    { kind: 'textInput', id: 'l5-listen-number-10', question: 'Запись 10: введи услышанное число по-венгерски.', accept: ['száz'] },
  ],
};

const L5_LISTENING_TIME_SCHEDULE: LessonActivity = {
  kind: 'listening',
  id: 'l5-listening-time-schedule',
  title: 'Аудирование B: дата и расписание',
  assetId: 'l5_listening_time',
  audioStatus: 'published',
  transcript: L5_LISTENING_TRANSCRIPT,
  passCount: 4,
  questions: [
    { id: 'l5-listen-schedule-q1', question: 'Какая дата звучит после диктанта чисел?', options: ['2026. augusztus 3.', '2026. augusztus 13.', '2026. szeptember 3.'], correctIndex: 0 },
    { id: 'l5-listen-schedule-q2', question: 'Когда говорящий занимается венгерским?', options: ['hétfőn nyolckor', 'szerdán háromkor', 'pénteken ötkor'], correctIndex: 0 },
    { id: 'l5-listen-schedule-q3', question: 'Когда говорящий работает?', options: ['hétfőn nyolckor', 'szerdán háromkor', 'szombaton tízkor'], correctIndex: 1 },
    { id: 'l5-listen-schedule-q4', question: 'Когда говорящий читает?', options: ['pénteken öt órakor', 'szerdán háromkor', 'szombaton tízkor'], correctIndex: 0 },
    { id: 'l5-listen-schedule-q5', question: 'Когда говорящий пишет?', options: ['pénteken ötkor', 'szombaton tízkor', 'hétfőn nyolckor'], correctIndex: 1 },
  ],
};

const L5_ROLEPLAY_SCHEDULE: LessonActivity = {
  kind: 'rolePlay',
  id: 'l5-roleplay-schedule',
  title: 'Говорение: числа, календарь и встреча',
  partnerLabel: 'Partner · Собеседник',
  completionMessage: 'Все шесть коротких образцов отработаны. Сравни свои ответы с моделями урока.',
  startTurnId: 'l5-stage-number-sample',
  turns: [
    { id: 'l5-stage-number-sample', speaker: 'stage', stageLabel: 'Короткий образец чисел', next: 'l5-record-number-sample' },
    { id: 'l5-record-number-sample', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови четыре числа.', model: 'tizenhárom, huszonnyolc, negyvenhat, száz', next: 'l5-stage-calendar-sample' },
    { id: 'l5-stage-calendar-sample', speaker: 'stage', stageLabel: 'Дни недели и выбранные месяцы', next: 'l5-record-calendar-sample' },
    { id: 'l5-record-calendar-sample', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови дни по порядку и четыре месяца.', model: 'hétfő, kedd, szerda, csütörtök, péntek, szombat, vasárnap; január, április, augusztus, december', next: 'l5-stage-time-sample' },
    { id: 'l5-stage-time-sample', speaker: 'stage', stageLabel: 'Два ответа о времени', next: 'l5-partner-time-1' },
    { id: 'l5-partner-time-1', speaker: 'waiter', prompt: 'Hány óra van?', next: 'l5-record-time-1' },
    { id: 'l5-record-time-1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь: «Сейчас три часа».', model: 'Három óra van.', next: 'l5-partner-time-2' },
    { id: 'l5-partner-time-2', speaker: 'waiter', prompt: 'Hány óra van?', next: 'l5-record-time-2' },
    { id: 'l5-record-time-2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь: «Сейчас пять часов».', model: 'Öt óra van.', next: 'l5-stage-schedule-exchange' },
    { id: 'l5-stage-schedule-exchange', speaker: 'stage', stageLabel: 'Два коротких обмена о встрече', next: 'l5-partner-schedule-1' },
    { id: 'l5-partner-schedule-1', speaker: 'waiter', prompt: 'Szerda jó? Háromkor jó?', next: 'l5-record-schedule-1' },
    { id: 'l5-record-schedule-1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Согласись с днём и временем.', model: 'Igen, szerda jó. Háromkor jó.', next: 'l5-partner-schedule-2' },
    { id: 'l5-partner-schedule-2', speaker: 'waiter', prompt: 'Csütörtök jó? Négykor jó?', next: 'l5-record-schedule-2' },
    { id: 'l5-record-schedule-2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Не согласись и предложи пятницу в пять.', model: 'Nem, pénteken ötkor jó.' },
  ],
};

const L5_WRITING_SCHEDULE: LessonActivity = {
  kind: 'writing',
  id: 'l5-writing-schedule',
  title: 'Письмо: моё простое расписание',
  prompt: 'Напиши 3–4 короткие строки о расписании. В каждой строке укажи день, время и простое действие из урока 4.',
  modelAnswer: [
    'Hétfőn nyolckor magyarul tanulok.',
    'Kedden négykor olvasok.',
    'Csütörtökön hatkor írok.',
    'Pénteken ötkor dolgozom.',
  ],
  rubric: [
    'Есть 3–4 законченные строки или предложения',
    'В каждой строке есть день недели',
    'В каждой строке есть целый час с -kor',
    'Использованы простые формы настоящего времени из урока 4',
  ],
};

const L5_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l5-exit-check',
  title: 'Проверка целей урока 5',
  checks: [
    {
      objectiveId: 'l5_count-1-100',
      activityId: 'l5-listening-number-dictation',
      evidenceKind: 'listening',
      evidenceComponents: [{ activityId: 'l5-cp-number-recognition', evidenceKind: 'reading' }, { activityId: 'l5-roleplay-schedule', evidenceKind: 'speaking' }],
    },
    {
      objectiveId: 'l5_tell-time',
      activityId: 'l5-listening-time-schedule',
      evidenceKind: 'listening',
      evidenceComponents: [{ activityId: 'l5-roleplay-schedule', evidenceKind: 'speaking' }],
    },
    {
      objectiveId: 'l5_name-days',
      activityId: 'l5-cp-weekday-order',
      evidenceKind: 'writing',
      evidenceComponents: [{ activityId: 'l5-cp-month-order', evidenceKind: 'reading' }, { activityId: 'l5-roleplay-schedule', evidenceKind: 'speaking' }],
    },
    {
      objectiveId: 'l5_write-numbers',
      activityId: 'l5-cp-write-numbers',
      evidenceKind: 'writing',
    },
    {
      objectiveId: 'l5_use-time-in-speech',
      activityId: 'l5-listening-time-schedule',
      evidenceKind: 'listening',
      evidenceComponents: [{ activityId: 'l5-roleplay-schedule', evidenceKind: 'interaction' }],
    },
  ],
};

export const LESSON_5: Lesson = {
  id: 5,
  number: 5,
  level: 'A0',
  title: 'Урок 5 · Számok, idő, napok',
  subtitle: 'Числа 1–100, время, дни недели, месяцы и даты',
  description: 'Числа 1-100, выражение времени (Hány óra van?), -kor суффикс, дни недели, 12 месяцев, формат даты Год-Месяц-День и распорядок дня.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 5 · 1/12 · ЧИСЛА',
      title: 'Számok 1–10',
      subtitle: 'Самостоятельное число и число перед существительным',
      body: `
        <p><span class="hu-word">egy, kettő, három, négy, öt, hat, hét, nyolc, kilenc, tíz</span></p>
        <div class="note"><b>2:</b> самостоятельно — <span class="hu-word">kettő</span>; перед существительным или единицей — <span class="hu-word">két</span>: <span class="hu-word">két könyv</span>, <span class="hu-word">két óra</span>. После числительного существительное остаётся в единственном числе.</div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 5 · 2/12 · ЧИСЛА 11–100',
      title: 'Tizen-, huszon- és a tízesek',
      subtitle: 'Продуктивные модели до 100',
      body: `
        <p><b>11–19:</b> <span class="hu-word">tizen-</span> + число: <span class="hu-word">tizenegy, tizenkettő, tizennyolc</span>.</p>
        <p><b>20:</b> <span class="hu-word">húsz</span>; <b>21–29:</b> <span class="hu-word">huszon-</span> + число: <span class="hu-word">huszonegy, huszonkettő</span>.</p>
        <p><b>Десятки:</b> <span class="hu-word">harminc, negyven, ötven, hatvan, hetven, nyolcvan, kilencven</span>. Единица присоединяется слитно: <span class="hu-word">negyvenhét</span>.</p>
        <p><b>100:</b> <span class="hu-word">száz</span>. В этом уроке не выходим за пределы 100.</p>
      `,
      activities: [L5_CP_NUMBER_RECOGNITION],
    },
    {
      id: 3,
      eyebrow: 'УРОК 5 · 3/12 · ПИСЬМО',
      title: 'Számok betűvel',
      subtitle: 'Точное написание чисел',
      body: `
        <p>Венгерские долгие гласные значимы: <span class="hu-word">húsz</span> — правильная форма, <s>husz</s> — нет. Пиши составные числа слитно.</p>
      `,
      activities: [L5_CP_WRITE_NUMBERS],
    },
    {
      id: 4,
      eyebrow: 'УРОК 5 · 4/12 · ДНИ НЕДЕЛИ',
      title: 'A hét napjai',
      subtitle: 'Семь дней в правильном порядке',
      body: `
        <p><span class="hu-word">hétfő → kedd → szerda → csütörtök → péntek → szombat → vasárnap</span></p>
        <div class="note">Для расписания запоминай готовые формы: <span class="hu-word">hétfőn, kedden, szerdán, csütörtökön, pénteken, szombaton, vasárnap</span>. Это функциональные формы; полная система местных падежей изучается позже.</div>
      `,
      activities: [L5_CP_WEEKDAYS],
    },
    {
      id: 5,
      eyebrow: 'УРОК 5 · 5/12 · МЕСЯЦЫ',
      title: 'A hónapok',
      subtitle: 'Двенадцать месяцев со строчной буквы',
      body: `
        <p><span class="hu-word">január, február, március, április, május, június, július, augusztus, szeptember, október, november, december</span></p>
        <div class="note">Названия месяцев по-венгерски пишутся со строчной буквы.</div>
      `,
      activities: [L5_CP_MONTHS],
    },
    {
      id: 6,
      eyebrow: 'УРОК 5 · 6/12 · ДАТА И КАЛЕНДАРЬ',
      title: 'A dátum és a heti program',
      subtitle: 'Венгерская запись даты и чтение расписания',
      body: `
        <p>Венгерская письменная дата следует порядку <b>год → месяц → день</b>: <span class="hu-word">2026. augusztus 3.</span></p>
        <p>При произнесении день месяца обычно получает порядковую форму. Здесь запомни один опорный chunk: <span class="hu-word">kétezer-huszonhat augusztus harmadika</span>. В этом уроке полную систему порядковых числительных не изучаем. Для даты пока используй этот готовый образец.</p>
      `,
      activities: [L5_READING_SCHEDULE],
    },
    {
      id: 7,
      eyebrow: 'УРОК 5 · 7/12 · ВРЕМЯ',
      title: 'Hány óra van?',
      subtitle: 'Который час и во сколько',
      body: `
        <p><span class="hu-word">Hány óra van?</span> — Который час?</p>
        <p><span class="hu-word">Három óra van.</span> / <span class="hu-word">Öt óra van.</span> — Сейчас три / пять часов.</p>
        <p><span class="hu-word">háromkor</span> или <span class="hu-word">három órakor</span> — в три часа: <span class="hu-word">Háromkor tanulok.</span></p>
        <div class="note"><b>-kor</b> выражает «в такое-то время»; оно не нужно в простом ответе <span class="hu-word">Három óra van.</span></div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 5 · 8/12 · АУДИРОВАНИЕ A',
      title: 'Hallás utáni számok',
      subtitle: 'Десять услышанных чисел',
      body: '<p>Прослушай блок A и введи каждое число по-венгерски. Задание станет доступно после публикации отдельной записи.</p>',
      activities: [L5_LISTENING_NUMBER_DICTATION],
    },
    {
      id: 9,
      eyebrow: 'УРОК 5 · 9/12 · АУДИРОВАНИЕ B',
      title: 'Dátum és program',
      subtitle: 'Дата, день и время в одном расписании',
      body: '<p>Прослушай блок B и выбери точные детали даты и расписания. Ответы нужно найти именно в аудиозаписи, а не в календаре.</p>',
      activities: [L5_LISTENING_TIME_SCHEDULE],
    },
    {
      id: 10,
      eyebrow: 'УРОК 5 · 10/12 · ГОВОРЕНИЕ',
      title: 'Rövid időpont-egyeztetés',
      subtitle: 'Числа, время и два обмена о встрече',
      body: '<p>Запиши короткие образцы, затем прослушай их и сравни с моделями урока.</p>',
      activities: [L5_ROLEPLAY_SCHEDULE],
    },
    {
      id: 11,
      eyebrow: 'УРОК 5 · 11/12 · ПИСЬМО И СЛОВАРЬ',
      title: 'Az én programom',
      subtitle: 'Простое расписание из форм урока 4',
      body: `
        <p><span class="hu-word">perc</span> — минута; <span class="hu-word">másodperc</span> — секунда. Фраза <span class="hu-word">egy perc</span> может значить «одну минуту / один момент», но <span class="hu-word">perc</span> не означает «секунда».</p>
      `,
      activities: [L5_WRITING_SCHEDULE],
    },
    {
      id: 12,
      eyebrow: 'УРОК 5 · 12/12 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Числа, календарь, время и evidence',
      body: `
        <ul class="tick">
          <li>Числа 1–100: kettő / két, tizen-, huszon-, десятки, száz</li>
          <li>Дни недели и месяцы в последовательности</li>
          <li>Венгерская письменная дата и один spoken-date chunk</li>
          <li>Hány óra van? / óra van / -kor для времени действия</li>
          <li><span class="hu-word">perc</span> = минута; <span class="hu-word">másodperc</span> = секунда</li>
        </ul>
      `,
      activities: [L5_EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l5_v1', hu: 'kettő', ru: 'два (самостоятельно)', category: 'Number Lexeme', exampleSentence: 'Kettő.' },
    { id: 'l5_v2', hu: 'két', ru: 'два (перед существительным/единицей)', category: 'Number Form', exampleSentence: 'két könyv; két óra', baseWord: 'kettő' },
    { id: 'l5_v3', hu: 'tizen-', ru: 'основа чисел 11–19', category: 'Number Pattern', exampleSentence: 'tizenhárom' },
    { id: 'l5_v4', hu: 'huszon-', ru: 'основа чисел 21–29', category: 'Number Pattern', exampleSentence: 'huszonkettő' },
    { id: 'l5_v5', hu: 'száz', ru: 'сто', category: 'Number Lexeme' },
    { id: 'l5_v6', hu: 'hétfő', ru: 'понедельник', category: 'Calendar Lexeme', exampleSentence: 'Hétfőn tanulok.' },
    { id: 'l5_v7', hu: 'Hány óra van?', ru: 'Который час?', category: 'Time Chunk' },
    { id: 'l5_v8', hu: 'háromkor', ru: 'в три часа', category: 'Schedule Chunk', exampleSentence: 'Háromkor dolgozom.' },
    { id: 'l5_v9', hu: 'hónap', ru: 'месяц', category: 'Calendar Lexeme' },
    { id: 'l5_v10', hu: 'dátum', ru: 'дата', category: 'Calendar Lexeme' },
    { id: 'l5_v11', hu: 'perc', ru: 'минута', category: 'Time Lexeme', exampleSentence: 'Egy perc.' },
    { id: 'l5_v12', hu: 'másodperc', ru: 'секунда', category: 'Time Lexeme' },
    { id: 'l5_v13', hu: 'Mikor érsz rá?', ru: 'Когда ты свободен / свободна?', category: 'Schedule Chunk' },
  ],
  quiz: [
    { id: 501, question: 'Как по-венгерски будет число 5?', options: ['hét', 'hat', 'öt', 'négy'], correctIndex: 2, explanation: 'Число 5 по-венгерски — öt.' },
    { id: 502, question: 'Как правильно сказать число 21 по-венгерски?', options: ['huszonegy', 'huszonkettő', 'tizenegy', 'húszegy'], correctIndex: 0, explanation: '21 образуется как huszon- + egy: huszonegy.' },
    { id: 503, question: 'Как спросить «Который час?» по-венгерски?', options: ['Hány óra van?', 'Hány nap van?', 'Milyen nap van?', 'Hol van az óra?'], correctIndex: 0, explanation: 'Изучаемый нейтральный вопрос — Hány óra van?' },
    { id: 504, question: 'Как сказать «в три часа» по-венгерски?', options: ['három óra', 'három órakor', 'három órán', 'három órában'], correctIndex: 1, explanation: '-kor указывает время действия: három órakor.' },
    { id: 505, question: 'Как сказать «в понедельник» в простом расписании?', options: ['hétfőn', 'hétfő', 'hétfőben', 'hétfőkor'], correctIndex: 0, explanation: 'Функциональная форма расписания — hétfőn; полная система падежей изучается позже.' },
    { id: 506, question: 'Какое предложение правильно сообщает действие в пятницу в пять часов?', options: ['Pénteken ötkor olvasok.', 'Péntek öt óra van olvasok.', 'Pénteken öt olvas.', 'Ötkor péntek olvasok van.'], correctIndex: 0, explanation: 'Pénteken называет день, ötkor — время действия, olvasok — действие говорящего.' },
  ],
  objectives: [
    { id: 'l5_count-1-100', text: 'Называть числа от 1 до 100 и понимать их на слух.', skills: ['speaking', 'listening', 'reading'] },
    { id: 'l5_tell-time', text: 'Сообщать время (Hány óra van?) и понимать указание времени на слух.', skills: ['speaking', 'listening'] },
    { id: 'l5_name-days', text: 'Называть дни недели и месяцы в правильной последовательности.', skills: ['speaking', 'reading', 'writing'] },
    { id: 'l5_write-numbers', text: 'Записывать числа словами.', skills: ['writing', 'grammar'] },
    { id: 'l5_use-time-in-speech', text: 'Употреблять числа, дни недели и время в коротких диалогах.', skills: ['speaking', 'listening'] },
  ],
};
