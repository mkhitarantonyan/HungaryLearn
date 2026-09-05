import { Lesson, LessonActivity } from '../../types';
import { P1_L5_PRACTICE, P1_L5_READING, P1_L5_ROLEPLAY, P1_L5_SPEAKING, P1_L5_WRITING } from './p1FoundationActivities';

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
      subtitle: 'Базовый счёт, két / kettő и существительное после числа',
      type: 'info',
      note: 'Для числа 2: kettő употребляется самостоятельно, két — перед существительным или единицей.',
      warn: 'После количественного числительного существительное остаётся в единственном числе: két könyv, három szék, tíz ablak.',
      task: 'Прочитай ряд 1–10 вслух и проверь две модели: Hány? — Kettő. / két könyv.',
      body: `
        <div class="grid2">
          <table class="conj">
            <tr><th>1–5</th><th>Венгерский</th></tr>
            <tr><td>1</td><td><b>egy</b></td></tr>
            <tr><td>2</td><td><b>kettő</b></td></tr>
            <tr><td>3</td><td><b>három</b></td></tr>
            <tr><td>4</td><td><b>négy</b></td></tr>
            <tr><td>5</td><td><b>öt</b></td></tr>
          </table>
          <table class="conj">
            <tr><th>6–10</th><th>Венгерский</th></tr>
            <tr><td>6</td><td><b>hat</b></td></tr>
            <tr><td>7</td><td><b>hét</b></td></tr>
            <tr><td>8</td><td><b>nyolc</b></td></tr>
            <tr><td>9</td><td><b>kilenc</b></td></tr>
            <tr><td>10</td><td><b>tíz</b></td></tr>
          </table>
        </div>
        <div class="note"><b>kettő</b> = самостоятельное число: <b>Hány? — Kettő.</b> · <b>két</b> = перед словом: <b>két könyv, két óra</b>.</div>
        <div class="warn">Не говори <s>két könyvek</s>. После числа: <b>két könyv</b>.</div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 5 · 2/12 · ЧИСЛА 11–100',
      title: 'Tizen-, huszon- és a tízesek',
      subtitle: 'Три модели вместо длинного списка',
      type: 'info',
      note: 'До 100 составные числа пишутся одним словом.',
      warn: 'Самостоятельно: húsz, но 21–29: huszon-. Самостоятельно: tíz, но 11–19: tizen-.',
      task: 'Пойми три модели и затем выполни существующую тренировку распознавания чисел.',
      activities: [L5_CP_NUMBER_RECOGNITION],
      body: `
        <table class="conj">
          <tr><th>Диапазон</th><th>Модель</th><th>Примеры</th></tr>
          <tr><td>11–19</td><td><b>tizen- + единица</b></td><td>tizenegy · tizenhárom · tizennyolc</td></tr>
          <tr><td>21–29</td><td><b>huszon- + единица</b></td><td>huszonegy · huszonkettő · huszonnyolc</td></tr>
          <tr><td>30–99</td><td><b>десяток + единица</b></td><td>harmincegy · negyvenhét · nyolcvannégy</td></tr>
        </table>
        <p><b>Опорные десятки:</b> harminc · negyven · ötven · hatvan · hetven · nyolcvan · kilencven · száz.</p>
        <div class="note">Составное число до 100 — одно слово: <b>negyvenöt</b>, не <s>negyven öt</s>.</div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 5 · 3/12 · ПИСЬМО',
      title: 'Számok betűvel',
      subtitle: 'Только орфографические места, где легко ошибиться',
      type: 'info',
      note: 'Этот слайд не повторяет весь счёт: он фиксирует только трудные написания.',
      warn: 'Запоминай форму целиком: tíz → tizen-, húsz → huszon-, négy → negyven, hét → hetven.',
      task: 'Выполни существующий диктант чисел; остальные примеры используй как справку.',
      activities: [L5_CP_WRITE_NUMBERS],
      body: `
        <table class="conj">
          <tr><th>Что проверить</th><th>Правильно</th></tr>
          <tr><td>долгая гласная</td><td><b>négy · hét · tíz · húsz · száz</b></td></tr>
          <tr><td>изменённая основа</td><td><b>tizen- · huszon- · negyven · hetven</b></td></tr>
          <tr><td>удвоение</td><td><b>tizennégy · tizennyolc · huszonnégy</b></td></tr>
          <tr><td>2 внутри числа</td><td><b>huszonkettő</b>, но <b>huszonkét perc</b></td></tr>
        </table>
        <div class="note">Цель A0 — правильно узнавать и писать частые формы, а не анализировать каждое фонетическое изменение.</div>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 5 · 4/12 · ДНИ НЕДЕЛИ',
      title: 'A hét napjai',
      subtitle: 'Название дня и форма «когда?»',
      type: 'info',
      note: 'Для расписания учи пары как готовые формы.',
      warn: 'В нейтральном расписании: vasárnap, без обязательного дополнительного окончания.',
      task: 'Назови дни по порядку и затем выполни тренировку порядка дней.',
      activities: [L5_CP_WEEKDAYS],
      body: `
        <table class="conj">
          <tr><th>День</th><th>Mikor? — когда?</th></tr>
          <tr><td><b>hétfő</b></td><td><b>hétfőn</b></td></tr>
          <tr><td><b>kedd</b></td><td><b>kedden</b></td></tr>
          <tr><td><b>szerda</b></td><td><b>szerdán</b></td></tr>
          <tr><td><b>csütörtök</b></td><td><b>csütörtökön</b></td></tr>
          <tr><td><b>péntek</b></td><td><b>pénteken</b></td></tr>
          <tr><td><b>szombat</b></td><td><b>szombaton</b></td></tr>
          <tr><td><b>vasárnap</b></td><td><b>vasárnap</b></td></tr>
        </table>
        <p><b>Ma hétfő van.</b> — Сегодня понедельник. · <b>Hétfőn dolgozom.</b> — Я работаю в понедельник.</p>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 5 · 5/12 · МЕСЯЦЫ',
      title: 'A hónapok',
      subtitle: '12 названий без лишней грамматики',
      type: 'info',
      note: 'На A0 достаточно уверенно узнавать и называть месяцы.',
      task: 'Прочитай месяцы по порядку и выполни тренировку порядка.',
      activities: [L5_CP_MONTHS],
      body: `
        <div class="grid2">
          <div>
            <button class="speak-btn" data-speak-text="január" data-speak-lang="hu-HU">január</button> — январь<br>
            <button class="speak-btn" data-speak-text="február" data-speak-lang="hu-HU">február</button> — февраль<br>
            <button class="speak-btn" data-speak-text="március" data-speak-lang="hu-HU">március</button> — март<br>
            <button class="speak-btn" data-speak-text="április" data-speak-lang="hu-HU">április</button> — апрель<br>
            <button class="speak-btn" data-speak-text="május" data-speak-lang="hu-HU">május</button> — май<br>
            <button class="speak-btn" data-speak-text="június" data-speak-lang="hu-HU">június</button> — июнь
          </div>
          <div>
            <button class="speak-btn" data-speak-text="július" data-speak-lang="hu-HU">július</button> — июль<br>
            <button class="speak-btn" data-speak-text="augusztus" data-speak-lang="hu-HU">augusztus</button> — август<br>
            <button class="speak-btn" data-speak-text="szeptember" data-speak-lang="hu-HU">szeptember</button> — сентябрь<br>
            <button class="speak-btn" data-speak-text="október" data-speak-lang="hu-HU">október</button> — октябрь<br>
            <button class="speak-btn" data-speak-text="november" data-speak-lang="hu-HU">november</button> — ноябрь<br>
            <button class="speak-btn" data-speak-text="december" data-speak-lang="hu-HU">december</button> — декабрь
          </div>
        </div>
        <div class="note">Названия месяцев обычно пишутся со строчной буквы. Не путай <b>június</b> — июнь и <b>július</b> — июль.</div>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 5 · 6/12 · ВРЕМЯ',
      title: 'Hány óra van?',
      subtitle: 'Целый час и -kor',
      type: 'info',
      note: 'В этом уроке работаем только с целыми часами — этого достаточно для первого расписания.',
      warn: 'Не добавляй более сложные разговорные модели времени: здесь нужна только ясная базовая схема.',
      task: 'Различи «который час?» и «во сколько?», затем составь три короткие фразы.',
      body: `
        <table class="conj">
          <tr><th>Функция</th><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>который час?</td>
            <td><button class="speak-btn" data-speak-text="Hány óra van?" data-speak-lang="hu-HU">Hány óra van?</button></td>
            <td><button class="speak-btn" data-speak-text="Három óra van." data-speak-lang="hu-HU">Három óra van.</button></td>
          </tr>
          <tr>
            <td>во сколько?</td>
            <td><b>Mikor?</b></td>
            <td><button class="speak-btn" data-speak-text="háromkor" data-speak-lang="hu-HU">háromkor</button></td>
          </tr>
          <tr>
            <td>день + время</td>
            <td><b>форма дня + время с -kor</b></td>
            <td><button class="speak-btn" data-speak-text="Hétfőn nyolckor tanulok." data-speak-lang="hu-HU">Hétfőn nyolckor tanulok.</button></td>
          </tr>
        </table>
        <div class="note">
          Важный контраст с числом 2:
          <button class="speak-btn" data-speak-text="Két óra van." data-speak-lang="hu-HU">Két óra van.</button>
          — сейчас два часа;
          <button class="speak-btn" data-speak-text="kettőkor" data-speak-lang="hu-HU">kettőkor</button>
          / <button class="speak-btn" data-speak-text="két órakor" data-speak-lang="hu-HU">két órakor</button>
          — в два часа.
        </div>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 5 · 7/12 · ДАТА',
      title: 'A dátum',
      subtitle: 'Год → месяц → день',
      type: 'info',
      note: 'В письменной дате после года и цифры дня ставится точка. При произнесении день месяца получает специальную форму даты.',
      warn: 'Не нужно сейчас учить все порядковые формы дней месяца: достаточно понять модель на нескольких частых примерах.',
      task: 'Прочитай образец и запиши сегодняшнюю дату по венгерскому порядку.',
      body: `
        <div class="p-4 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold">2026. szeptember 7.</div>
          <div class="mt-2">порядок: <b>год → месяц → день</b></div>
        </div>
        <p>
          Цифра дня при произнесении получает <b>специальную форму дня месяца</b>.
          Опорный пример:
          <button class="speak-btn" data-speak-text="kétezer-huszonhat augusztus harmadika" data-speak-lang="hu-HU">
            2026. augusztus 3. → kétezer-huszonhat augusztus harmadika
          </button>.
        </p>
        <div class="note">На A0 не нужно выводить все формы самостоятельно. Сейчас запомни модель и несколько частых форм, а полная система будет позже.</div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 5 · 8/12 · ЧТЕНИЕ',
      title: 'Heti program',
      subtitle: 'Дата, день, время и действие в одном контексте',
      type: 'info',
      note: 'Сначала пройди короткое чтение. Более длинный текст оставь как дополнительное закрепление, если материал уже понятен.',
      task: 'Найди в тексте четыре вещи: дату, день, время и действие.',
      activities: [L5_READING_SCHEDULE, P1_L5_READING],
      body: `
        <p>Чтение связывает уже изученные элементы в одну модель расписания:</p>
        <div class="grid2">
          <div class="note"><b>Hétfőn kilenckor magyarul tanulok.</b></div>
          <div class="note"><b>Csütörtökön hatkor írok.</b></div>
        </div>
        <p><b>Основной маршрут:</b> сначала короткий календарь и вопросы. Расширенное чтение используй для дополнительной практики, а не как новую грамматику.</p>
      `,
    },
    {
      id: 9,
      eyebrow: 'УРОК 5 · 9/12 · АУДИРОВАНИЕ',
      title: 'Hallás után',
      subtitle: 'Числа, дата и расписание',
      type: 'info',
      note: 'Одна запись используется в двух задачах: сначала числа, затем дата и расписание.',
      task: 'Первое прослушивание — общий смысл; второе — точные числа и время.',
      activities: [L5_LISTENING_NUMBER_DICTATION, L5_LISTENING_TIME_SCHEDULE],
      body: `
        <ol class="tasklist">
          <li><b>Часть A:</b> запиши услышанные числа словами.</li>
          <li><b>Часть B:</b> определи дату, дни, время и действия.</li>
        </ol>
        <div class="note">Не читай transcript до первой попытки. Сначала работай только на слух.</div>
      `,
    },
    {
      id: 10,
      eyebrow: 'УРОК 5 · 10/12 · ГОВОРЕНИЕ',
      title: 'Találkozunk...?',
      subtitle: 'Договориться о дне и времени',
      type: 'info',
      note: 'Главная функция — предложить время, принять его или предложить другое.',
      task: 'Пройди одну ролевую цепочку как основной маршрут; вторую используй для повторения.',
      activities: [P1_L5_ROLEPLAY, L5_ROLEPLAY_SCHEDULE],
      optionalSpeaking: P1_L5_SPEAKING,
      body: `
        <table class="conj">
          <tr><th>Функция</th><th>Модель</th></tr>
          <tr><td>предложить</td><td><button class="speak-btn" data-speak-text="Jó neked kedden háromkor?" data-speak-lang="hu-HU">Jó neked kedden háromkor?</button></td></tr>
          <tr><td>согласиться</td><td><button class="speak-btn" data-speak-text="Igen, jó." data-speak-lang="hu-HU">Igen, jó.</button></td></tr>
          <tr><td>вежливо отказаться</td><td><button class="speak-btn" data-speak-text="Sajnos nem jó." data-speak-lang="hu-HU">Sajnos nem jó.</button></td></tr>
          <tr><td>спросить альтернативу</td><td><button class="speak-btn" data-speak-text="Mikor jó neked?" data-speak-lang="hu-HU">Mikor jó neked?</button></td></tr>
          <tr><td>предложить другое время</td><td><button class="speak-btn" data-speak-text="Szerdán ötkor jó." data-speak-lang="hu-HU">Szerdán ötkor jó.</button></td></tr>
          <tr><td>подтвердить</td><td><button class="speak-btn" data-speak-text="Rendben. Találkozunk szerdán ötkor." data-speak-lang="hu-HU">Rendben. Találkozunk szerdán ötkor.</button></td></tr>
        </table>
        <div class="note"><b>Találkozunk…</b> здесь учится как готовая реплика договорённости. Для A0 достаточно дня, целого часа и короткого ответа.</div>
      `,
    },
    {
      id: 11,
      eyebrow: 'УРОК 5 · 11/12 · ПРАКТИКА И ПИСЬМО',
      title: 'Az én hetem',
      subtitle: 'Короткий основной маршрут + расширение по желанию',
      type: 'info',
      note: 'Чтобы не растягивать урок, различай основной минимум и дополнительное закрепление.',
      task: 'Сначала выполни контекстную практику до порога и короткое расписание. Расширенное письмо 50–70 слов оставь на закрепление.',
      activities: [P1_L5_PRACTICE, L5_WRITING_SCHEDULE, P1_L5_WRITING],
      body: `
        <div class="grid2">
          <div class="note"><b>Основной минимум</b><br>контекстная практика до проходного порога + 3–4 строки собственного расписания.</div>
          <div class="note"><b>Расширение</b><br>текст 50–70 слов с несколькими днями, временем, встречей и вопросом.</div>
        </div>
        <p>Опорная модель: <b>Hétfőn nyolckor dolgozom. Kedden ötkor magyarul tanulok.</b></p>
      `,
    },
    {
      id: 12,
      eyebrow: 'УРОК 5 · 12/12 · ИТОГ',
      title: 'Összefoglalás',
      subtitle: 'Пять целей без новой информации',
      type: 'info',
      note: 'Если эти пять действий получаются, переходи к уроку 6 — повторению A0.',
      activities: [L5_EXIT_CHECK],
      body: `
        <ul class="tick">
          <li>узнаю и называю числа 1–100;</li>
          <li>пишу частые числа словами;</li>
          <li>называю дни недели и месяцы;</li>
          <li>понимаю целый час и использую <b>-kor</b>;</li>
          <li>читаю дату и составляю простое недельное расписание.</li>
        </ul>
        <div class="note"><b>Ключевые модели:</b> két könyv · huszonkettő · Hétfőn nyolckor tanulok. · 2026. szeptember 7.</div>
      `,
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
