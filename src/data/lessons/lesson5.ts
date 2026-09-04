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
      subtitle: 'Числа от одного до десяти и различие két / kettő',
      type: 'info',
      note: 'Для числа 2 используются две формы: kettő — самостоятельный ответ или название числа; két — перед существительным и единицей измерения.',
      warn: 'После любого количественного числительного венгерское существительное остаётся в единственном числе: két könyv, három szék, tíz ablak. Не добавляйте показатель множественного числа.',
      task: 'Произнесите числа вперёд и назад, затем выполните три тренировки: распознавание, két/kettő и числительное с существительным.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Числа от 1 до 10</h4>

        <table class="conj">
          <tr><th>Цифра</th><th>Венгерский</th><th>На что обратить внимание</th></tr>
          <tr>
            <td>1</td>
            <td><button class="speak-btn" data-speak-text="egy" data-speak-lang="hu-HU">egy</button></td>
            <td>gy обозначает один венгерский согласный звук</td>
          </tr>
          <tr>
            <td>2</td>
            <td><button class="speak-btn" data-speak-text="kettő" data-speak-lang="hu-HU">kettő</button></td>
            <td>двойная t и долгая ő</td>
          </tr>
          <tr>
            <td>3</td>
            <td><button class="speak-btn" data-speak-text="három" data-speak-lang="hu-HU">három</button></td>
            <td>долгая á</td>
          </tr>
          <tr>
            <td>4</td>
            <td><button class="speak-btn" data-speak-text="négy" data-speak-lang="hu-HU">négy</button></td>
            <td>долгая é и конечный gy</td>
          </tr>
          <tr>
            <td>5</td>
            <td><button class="speak-btn" data-speak-text="öt" data-speak-lang="hu-HU">öt</button></td>
            <td>короткая ö, не русское «о»</td>
          </tr>
          <tr>
            <td>6</td>
            <td><button class="speak-btn" data-speak-text="hat" data-speak-lang="hu-HU">hat</button></td>
            <td>короткие гласные</td>
          </tr>
          <tr>
            <td>7</td>
            <td><button class="speak-btn" data-speak-text="hét" data-speak-lang="hu-HU">hét</button></td>
            <td>долгая é</td>
          </tr>
          <tr>
            <td>8</td>
            <td><button class="speak-btn" data-speak-text="nyolc" data-speak-lang="hu-HU">nyolc</button></td>
            <td>ny — один согласный звук</td>
          </tr>
          <tr>
            <td>9</td>
            <td><button class="speak-btn" data-speak-text="kilenc" data-speak-lang="hu-HU">kilenc</button></td>
            <td>ударение на первом слоге</td>
          </tr>
          <tr>
            <td>10</td>
            <td><button class="speak-btn" data-speak-text="tíz" data-speak-lang="hu-HU">tíz</button></td>
            <td>долгая í</td>
          </tr>
        </table>

        <div class="note">
          Во всех венгерских словах основное ударение падает на первый слог:
          <span class="hu-word">KET-tő</span>,
          <span class="hu-word">HÁ-rom</span>,
          <span class="hu-word">KI-lenc</span>.
          Долгота гласной при этом сохраняется.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Счёт вперёд и назад</h4>

        <p>
          <button class="speak-btn" data-speak-text="egy, kettő, három, négy, öt, hat, hét, nyolc, kilenc, tíz" data-speak-lang="hu-HU">
            egy · kettő · három · négy · öt · hat · hét · nyolc · kilenc · tíz
          </button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="tíz, kilenc, nyolc, hét, hat, öt, négy, három, kettő, egy" data-speak-lang="hu-HU">
            tíz · kilenc · nyolc · hét · hat · öt · négy · három · kettő · egy
          </button>
        </p>

        <div class="note">
          Сначала считайте медленно, затем произнесите весь ряд без остановки.
          После этого назовите только нечётные числа:
          <span class="hu-word">egy, három, öt, hét, kilenc</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Kettő и két</h4>

        <table class="conj">
          <tr><th>Позиция</th><th>Форма</th><th>Пример</th></tr>
          <tr>
            <td>число названо самостоятельно</td>
            <td><b>kettő</b></td>
            <td>
              <button class="speak-btn" data-speak-text="Hány könyv van? Kettő." data-speak-lang="hu-HU">
                Hány könyv van? — Kettő.
              </button>
            </td>
          </tr>
          <tr>
            <td>перед существительным</td>
            <td><b>két</b></td>
            <td>
              <button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">
                két könyv
              </button>
            </td>
          </tr>
          <tr>
            <td>перед единицей</td>
            <td><b>két</b></td>
            <td>
              <button class="speak-btn" data-speak-text="két óra, két perc, két kiló" data-speak-lang="hu-HU">
                két óra · két perc · két kiló
              </button>
            </td>
          </tr>
        </table>

        <div class="warn">
          Нейтрально перед существительным используется <b>két</b>:
          <span class="hu-word">két könyv</span>, не <s>kettő könyv</s>.
          В самостоятельном ответе используйте <b>kettő</b>:
          <span class="hu-word">Hány? — Kettő.</span>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Egy: число и неопределённый артикль</h4>

        <table class="conj">
          <tr><th>Пример</th><th>Возможный смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU">egy könyv</button></td>
            <td>одна книга или какая-то книга</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy könyv van az asztalon." data-speak-lang="hu-HU">Egy könyv van az asztalon.</button></td>
            <td>На столе есть одна / какая-то книга.</td>
          </tr>
        </table>

        <div class="note">
          Контекст показывает, означает ли <span class="hu-word">egy</span>
          точное число «один» или неопределённый артикль.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. После числа — единственное число</h4>

        <table class="conj">
          <tr><th>Правильно</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
            <td>две книги</td>
            <td><s>két könyvek</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="három szék" data-speak-lang="hu-HU">három szék</button></td>
            <td>три стула</td>
            <td><s>három székek</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="öt alma" data-speak-lang="hu-HU">öt alma</button></td>
            <td>пять яблок</td>
            <td><s>öt almák</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tíz ablak" data-speak-lang="hu-HU">tíz ablak</button></td>
            <td>десять окон</td>
            <td><s>tíz ablakok</s></td>
          </tr>
        </table>

        <p>В полном предложении группа с точным числом обычно требует форму <b>van</b>:</p>

        <p>
          <button class="speak-btn" data-speak-text="Három szék van a szobában." data-speak-lang="hu-HU">
            Három szék van a szobában.
          </button>
          — В комнате три стула.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Тренировка распознавания</h4>

        <p>Закройте ответы и назовите услышанное число цифрой:</p>

        <ol class="tasklist">
          <li><button class="speak-btn" data-speak-text="hét" data-speak-lang="hu-HU">hét</button> → ___</li>
          <li><button class="speak-btn" data-speak-text="kettő" data-speak-lang="hu-HU">kettő</button> → ___</li>
          <li><button class="speak-btn" data-speak-text="kilenc" data-speak-lang="hu-HU">kilenc</button> → ___</li>
          <li><button class="speak-btn" data-speak-text="négy" data-speak-lang="hu-HU">négy</button> → ___</li>
          <li><button class="speak-btn" data-speak-text="öt" data-speak-lang="hu-HU">öt</button> → ___</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <p class="mt-3"><b>7 · 2 · 9 · 4 · 5</b></p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Быстрая самопроверка</h4>

        <ol class="tasklist">
          <li>2 как самостоятельное число → <b>kettő</b></li>
          <li>две книги → <b>két könyv</b></li>
          <li>четыре стула → <b>négy szék</b></li>
          <li>семь яблок → <b>hét alma</b></li>
          <li>десять окон → <b>tíz ablak</b></li>
          <li>Сколько книг? — Две. → <b>Hány könyv? — Kettő.</b></li>
        </ol>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 5 · 2/12 · ЧИСЛА 11–100',
      title: 'Tizen-, huszon- és a tízesek',
      subtitle: 'Как образуются числа от 11 до 100',
      type: 'info',
      note: 'В венгерском нет отдельного слова «и» между десятком и единицей. Число образуется как одно цельное слово: harmincegy, negyvenhét, hatvankilenc.',
      warn: 'Не путайте самостоятельную форму kettő и форму két перед существительным. Это правило сохраняется внутри составных чисел: tizenkettő, но tizenkét könyv; huszonkettő, но huszonkét perc.',
      task: 'Прочитайте модели 11–19, 21–29 и десятки. Затем образуйте десять чисел без подсказки и выполните тренировку két/kettő внутри составных чисел.',
      activities: [L5_CP_NUMBER_RECOGNITION],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Числа от 11 до 19</h4>

        <p>Числа 11–19 образуются от основы <b>tizen-</b> и единицы:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">tizen- + единица → одно слово</div>
          <div class="mt-2">
            <span class="hu-word">tizen + egy → tizenegy</span>
          </div>
        </div>

        <table class="conj">
          <tr><th>Число</th><th>Венгерский</th><th>Строение</th></tr>
          <tr><td>11</td><td><button class="speak-btn" data-speak-text="tizenegy" data-speak-lang="hu-HU">tizenegy</button></td><td>tizen + egy</td></tr>
          <tr><td>12</td><td><button class="speak-btn" data-speak-text="tizenkettő" data-speak-lang="hu-HU">tizenkettő</button></td><td>tizen + kettő</td></tr>
          <tr><td>13</td><td><button class="speak-btn" data-speak-text="tizenhárom" data-speak-lang="hu-HU">tizenhárom</button></td><td>tizen + három</td></tr>
          <tr><td>14</td><td><button class="speak-btn" data-speak-text="tizennégy" data-speak-lang="hu-HU">tizennégy</button></td><td>tizen + négy → nn</td></tr>
          <tr><td>15</td><td><button class="speak-btn" data-speak-text="tizenöt" data-speak-lang="hu-HU">tizenöt</button></td><td>tizen + öt</td></tr>
          <tr><td>16</td><td><button class="speak-btn" data-speak-text="tizenhat" data-speak-lang="hu-HU">tizenhat</button></td><td>tizen + hat</td></tr>
          <tr><td>17</td><td><button class="speak-btn" data-speak-text="tizenhét" data-speak-lang="hu-HU">tizenhét</button></td><td>tizen + hét</td></tr>
          <tr><td>18</td><td><button class="speak-btn" data-speak-text="tizennyolc" data-speak-lang="hu-HU">tizennyolc</button></td><td>tizen + nyolc → nny</td></tr>
          <tr><td>19</td><td><button class="speak-btn" data-speak-text="tizenkilenc" data-speak-lang="hu-HU">tizenkilenc</button></td><td>tizen + kilenc</td></tr>
        </table>

        <div class="note">
          Самостоятельное число 10 — <span class="hu-word">tíz</span> с долгой í,
          но в числах 11–19 используется основа
          <span class="hu-word">tizen-</span> с короткой i.
        </div>

        <div class="note">
          В <span class="hu-word">tizennégy</span> и
          <span class="hu-word">tizennyolc</span> на границе частей появляются удвоенные согласные:
          <b>n + n → nn</b> и <b>n + ny → nny</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Числа от 20 до 29</h4>

        <p>Самостоятельное число 20 — <span class="hu-word">húsz</span>. Для 21–29 используется основа <b>huszon-</b>:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">huszon- + единица → одно слово</div>
          <div class="mt-2">
            <span class="hu-word">huszon + egy → huszonegy</span>
          </div>
        </div>

        <table class="conj">
          <tr><th>Число</th><th>Венгерский</th><th>Строение</th></tr>
          <tr><td>20</td><td><button class="speak-btn" data-speak-text="húsz" data-speak-lang="hu-HU">húsz</button></td><td>самостоятельная форма</td></tr>
          <tr><td>21</td><td><button class="speak-btn" data-speak-text="huszonegy" data-speak-lang="hu-HU">huszonegy</button></td><td>huszon + egy</td></tr>
          <tr><td>22</td><td><button class="speak-btn" data-speak-text="huszonkettő" data-speak-lang="hu-HU">huszonkettő</button></td><td>huszon + kettő</td></tr>
          <tr><td>23</td><td><button class="speak-btn" data-speak-text="huszonhárom" data-speak-lang="hu-HU">huszonhárom</button></td><td>huszon + három</td></tr>
          <tr><td>24</td><td><button class="speak-btn" data-speak-text="huszonnégy" data-speak-lang="hu-HU">huszonnégy</button></td><td>huszon + négy → nn</td></tr>
          <tr><td>25</td><td><button class="speak-btn" data-speak-text="huszonöt" data-speak-lang="hu-HU">huszonöt</button></td><td>huszon + öt</td></tr>
          <tr><td>26</td><td><button class="speak-btn" data-speak-text="huszonhat" data-speak-lang="hu-HU">huszonhat</button></td><td>huszon + hat</td></tr>
          <tr><td>27</td><td><button class="speak-btn" data-speak-text="huszonhét" data-speak-lang="hu-HU">huszonhét</button></td><td>huszon + hét</td></tr>
          <tr><td>28</td><td><button class="speak-btn" data-speak-text="huszonnyolc" data-speak-lang="hu-HU">huszonnyolc</button></td><td>huszon + nyolc → nny</td></tr>
          <tr><td>29</td><td><button class="speak-btn" data-speak-text="huszonkilenc" data-speak-lang="hu-HU">huszonkilenc</button></td><td>huszon + kilenc</td></tr>
        </table>

        <div class="note">
          Самостоятельное число 20 — <span class="hu-word">húsz</span> с долгой ú,
          но в числах 21–29 пишется
          <span class="hu-word">huszon-</span> с короткой u.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Десятки от 30 до 90</h4>

        <table class="conj">
          <tr><th>Число</th><th>Венгерский</th><th>Пример с единицей</th></tr>
          <tr>
            <td>30</td>
            <td><button class="speak-btn" data-speak-text="harminc" data-speak-lang="hu-HU">harminc</button></td>
            <td><button class="speak-btn" data-speak-text="harmincegy" data-speak-lang="hu-HU">31 — harmincegy</button></td>
          </tr>
          <tr>
            <td>40</td>
            <td><button class="speak-btn" data-speak-text="negyven" data-speak-lang="hu-HU">negyven</button></td>
            <td><button class="speak-btn" data-speak-text="negyvenhét" data-speak-lang="hu-HU">47 — negyvenhét</button></td>
          </tr>
          <tr>
            <td>50</td>
            <td><button class="speak-btn" data-speak-text="ötven" data-speak-lang="hu-HU">ötven</button></td>
            <td><button class="speak-btn" data-speak-text="ötvenhat" data-speak-lang="hu-HU">56 — ötvenhat</button></td>
          </tr>
          <tr>
            <td>60</td>
            <td><button class="speak-btn" data-speak-text="hatvan" data-speak-lang="hu-HU">hatvan</button></td>
            <td><button class="speak-btn" data-speak-text="hatvankilenc" data-speak-lang="hu-HU">69 — hatvankilenc</button></td>
          </tr>
          <tr>
            <td>70</td>
            <td><button class="speak-btn" data-speak-text="hetven" data-speak-lang="hu-HU">hetven</button></td>
            <td><button class="speak-btn" data-speak-text="hetvenhárom" data-speak-lang="hu-HU">73 — hetvenhárom</button></td>
          </tr>
          <tr>
            <td>80</td>
            <td><button class="speak-btn" data-speak-text="nyolcvan" data-speak-lang="hu-HU">nyolcvan</button></td>
            <td><button class="speak-btn" data-speak-text="nyolcvannégy" data-speak-lang="hu-HU">84 — nyolcvannégy</button></td>
          </tr>
          <tr>
            <td>90</td>
            <td><button class="speak-btn" data-speak-text="kilencven" data-speak-lang="hu-HU">kilencven</button></td>
            <td><button class="speak-btn" data-speak-text="kilencvenöt" data-speak-lang="hu-HU">95 — kilencvenöt</button></td>
          </tr>
          <tr>
            <td>100</td>
            <td><button class="speak-btn" data-speak-text="száz" data-speak-lang="hu-HU">száz</button></td>
            <td>в этом уроке предел — 100</td>
          </tr>
        </table>

        <div class="warn">
          Между десятком и единицей нет отдельного союза или частицы.
          Неверно представлять <span class="hu-word">huszonegy</span> как «двадцать плюс иже».
          Это одно венгерское слово: <b>huszonegy</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Написание составных чисел</h4>

        <ul class="tick">
          <li>В пределах этого урока составные числа пишутся слитно: <b>tizenhárom, huszonnyolc, harminckettő, nyolcvannégy</b>.</li>
          <li>Не ставьте пробел: <s>harminc egy</s>.</li>
          <li>Не ставьте дефис: <s>harminc-egy</s>.</li>
          <li>Сохраняйте долгие гласные единиц: <b>harminchét, negyvennégy, ötvenöt</b>.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Kettő / két внутри составного числа</h4>

        <table class="conj">
          <tr><th>Самостоятельное число</th><th>Перед существительным или единицей</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tizenkettő" data-speak-lang="hu-HU">12 — tizenkettő</button></td>
            <td><button class="speak-btn" data-speak-text="tizenkét könyv" data-speak-lang="hu-HU">tizenkét könyv</button> — двенадцать книг</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="huszonkettő" data-speak-lang="hu-HU">22 — huszonkettő</button></td>
            <td><button class="speak-btn" data-speak-text="huszonkét perc" data-speak-lang="hu-HU">huszonkét perc</button> — двадцать две минуты</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="harminckettő" data-speak-lang="hu-HU">32 — harminckettő</button></td>
            <td><button class="speak-btn" data-speak-text="harminckét ember" data-speak-lang="hu-HU">harminckét ember</button> — тридцать два человека</td>
          </tr>
        </table>

        <div class="note">
          После всего составного числительного существительное остаётся в единственном числе:
          <span class="hu-word">huszonkét perc</span>,
          <span class="hu-word">harminckét ember</span>,
          не <s>percek</s> и не <s>emberek</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Образуйте числа</h4>

        <p>Запишите словами:</p>

        <ol class="tasklist">
          <li>11 → ____________</li>
          <li>14 → ____________</li>
          <li>18 → ____________</li>
          <li>22 → ____________</li>
          <li>28 → ____________</li>
          <li>31 → ____________</li>
          <li>47 → ____________</li>
          <li>56 → ____________</li>
          <li>73 → ____________</li>
          <li>84 → ____________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <p class="mt-3">
            <b>tizenegy · tizennégy · tizennyolc · huszonkettő · huszonnyolc · harmincegy · negyvenhét · ötvenhat · hetvenhárom · nyolcvannégy</b>
          </p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Выберите két или kettő</h4>

        <ol class="tasklist">
          <li>12 как самостоятельное число → tizen________</li>
          <li>12 книг → tizen________ könyv</li>
          <li>22 как самостоятельное число → huszon________</li>
          <li>22 минуты → huszon________ perc</li>
          <li>32 человека → harminc________ ember</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>tizenkettő</b></li>
            <li><b>tizenkét könyv</b></li>
            <li><b>huszonkettő</b></li>
            <li><b>huszonkét perc</b></li>
            <li><b>harminckét ember</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Слуховая самопроверка</h4>

        <p>Запишите цифрами:</p>

        <p>
          <button class="speak-btn" data-speak-text="tizenhárom, húsz, huszonkettő, harmincnyolc, negyvenhét, ötvenhat, hatvankilenc, nyolcvannégy, száz" data-speak-lang="hu-HU">
            Прослушать девять чисел
          </button>
        </p>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <p class="mt-3"><b>13 · 20 · 22 · 38 · 47 · 56 · 69 · 84 · 100</b></p>
        </details>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 5 · 3/12 · ПИСЬМО',
      title: 'Számok betűvel',
      subtitle: 'Как правильно писать числа словами',
      type: 'info',
      note: 'В венгерских числительных важны долгие гласные, двойные согласные и точная форма основы. До 100 составные числа пишутся слитно.',
      warn: 'Не восстанавливайте написание составного числа механически из самостоятельной формы: tíz → tizen-, húsz → huszon-, négy → negyven, hét → hetven. Эти основы нужно запомнить.',
      task: 'Перепишите опорные числа, затем выполните диктант из десяти чисел и проверьте долгие гласные, удвоения и слитное написание.',
      activities: [L5_CP_WRITE_NUMBERS],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Почему написание важно</h4>

        <p>В венгерском долгота гласной является частью правильного написания слова:</p>

        <table class="conj">
          <tr><th>Правильно</th><th>Неправильно</th><th>Что проверить</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="négy" data-speak-lang="hu-HU">négy</button></td>
            <td><s>negy</s></td>
            <td>долгая é</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hét" data-speak-lang="hu-HU">hét</button></td>
            <td><s>het</s></td>
            <td>долгая é</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tíz" data-speak-lang="hu-HU">tíz</button></td>
            <td><s>tiz</s></td>
            <td>долгая í</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="húsz" data-speak-lang="hu-HU">húsz</button></td>
            <td><s>husz</s></td>
            <td>долгая ú</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="száz" data-speak-lang="hu-HU">száz</button></td>
            <td><s>szaz</s></td>
            <td>долгая á</td>
          </tr>
        </table>

        <div class="warn">
          Запись <s>husz</s> вместо <b>húsz</b> — орфографическая ошибка.
          То же относится к <s>tiz</s>, <s>het</s>, <s>negy</s>, <s>szaz</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Самостоятельное число и основа составного числа</h4>

        <p>Некоторые формы меняются внутри составных чисел:</p>

        <table class="conj">
          <tr><th>Самостоятельно</th><th>Основа</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tíz" data-speak-lang="hu-HU">10 — tíz</button></td>
            <td><b>tizen-</b></td>
            <td><button class="speak-btn" data-speak-text="tizenhárom" data-speak-lang="hu-HU">13 — tizenhárom</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="húsz" data-speak-lang="hu-HU">20 — húsz</button></td>
            <td><b>huszon-</b></td>
            <td><button class="speak-btn" data-speak-text="huszonöt" data-speak-lang="hu-HU">25 — huszonöt</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="négy" data-speak-lang="hu-HU">4 — négy</button></td>
            <td><b>negyven</b></td>
            <td><button class="speak-btn" data-speak-text="negyven" data-speak-lang="hu-HU">40 — negyven</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hét" data-speak-lang="hu-HU">7 — hét</button></td>
            <td><b>hetven</b></td>
            <td><button class="speak-btn" data-speak-text="hetven" data-speak-lang="hu-HU">70 — hetven</button></td>
          </tr>
        </table>

        <div class="note">
          Поэтому неверно писать <s>tízenegy</s>, <s>húszonegy</s>, <s>négyven</s> или <s>hétven</s>.
          Правильно:
          <span class="hu-word">tizenegy, huszonegy, negyven, hetven</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Все составные числа до 100 — одним словом</h4>

        <table class="conj">
          <tr><th>Число</th><th>Правильно</th><th>Неправильно</th></tr>
          <tr>
            <td>13</td>
            <td><button class="speak-btn" data-speak-text="tizenhárom" data-speak-lang="hu-HU">tizenhárom</button></td>
            <td><s>tizen három</s></td>
          </tr>
          <tr>
            <td>24</td>
            <td><button class="speak-btn" data-speak-text="huszonnégy" data-speak-lang="hu-HU">huszonnégy</button></td>
            <td><s>huszon négy</s></td>
          </tr>
          <tr>
            <td>38</td>
            <td><button class="speak-btn" data-speak-text="harmincnyolc" data-speak-lang="hu-HU">harmincnyolc</button></td>
            <td><s>harminc nyolc</s></td>
          </tr>
          <tr>
            <td>45</td>
            <td><button class="speak-btn" data-speak-text="negyvenöt" data-speak-lang="hu-HU">negyvenöt</button></td>
            <td><s>negyven öt</s></td>
          </tr>
          <tr>
            <td>62</td>
            <td><button class="speak-btn" data-speak-text="hatvankettő" data-speak-lang="hu-HU">hatvankettő</button></td>
            <td><s>hatvan kettő</s></td>
          </tr>
        </table>

        <div class="note">
          В пределах 1–100 не используйте пробел и дефис внутри числа:
          <span class="hu-word">negyvenöt</span>, не <s>negyven öt</s> и не <s>negyven-öt</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Удвоение согласных на границе частей</h4>

        <p>Когда последняя согласная первой части встречается с такой же или связанной начальной согласной второй части, написание отражает соединение:</p>

        <table class="conj">
          <tr><th>Строение</th><th>Результат</th><th>Что появляется</th></tr>
          <tr>
            <td>tizen + négy</td>
            <td><button class="speak-btn" data-speak-text="tizennégy" data-speak-lang="hu-HU">tizennégy</button></td>
            <td>nn</td>
          </tr>
          <tr>
            <td>tizen + nyolc</td>
            <td><button class="speak-btn" data-speak-text="tizennyolc" data-speak-lang="hu-HU">tizennyolc</button></td>
            <td>nny</td>
          </tr>
          <tr>
            <td>huszon + négy</td>
            <td><button class="speak-btn" data-speak-text="huszonnégy" data-speak-lang="hu-HU">huszonnégy</button></td>
            <td>nn</td>
          </tr>
          <tr>
            <td>huszon + nyolc</td>
            <td><button class="speak-btn" data-speak-text="huszonnyolc" data-speak-lang="hu-HU">huszonnyolc</button></td>
            <td>nny</td>
          </tr>
          <tr>
            <td>nyolcvan + négy</td>
            <td><button class="speak-btn" data-speak-text="nyolcvannégy" data-speak-lang="hu-HU">nyolcvannégy</button></td>
            <td>nn</td>
          </tr>
        </table>

        <div class="warn">
          Не упрощайте эти формы:
          <s>tizenégy</s>,
          <s>tizenyolc</s>,
          <s>huszonégy</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Kettő и két при письме</h4>

        <table class="conj">
          <tr><th>Ситуация</th><th>Правильно</th></tr>
          <tr>
            <td>самостоятельное число 2</td>
            <td><button class="speak-btn" data-speak-text="kettő" data-speak-lang="hu-HU">kettő</button></td>
          </tr>
          <tr>
            <td>самостоятельное число 22</td>
            <td><button class="speak-btn" data-speak-text="huszonkettő" data-speak-lang="hu-HU">huszonkettő</button></td>
          </tr>
          <tr>
            <td>две книги</td>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
          </tr>
          <tr>
            <td>22 книги</td>
            <td><button class="speak-btn" data-speak-text="huszonkét könyv" data-speak-lang="hu-HU">huszonkét könyv</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Опорные десятки</h4>

        <p>Напишите эти формы без подсказки:</p>

        <p>
          <button class="speak-btn" data-speak-text="tíz, húsz, harminc, negyven, ötven, hatvan, hetven, nyolcvan, kilencven, száz" data-speak-lang="hu-HU">
            tíz · húsz · harminc · negyven · ötven · hatvan · hetven · nyolcvan · kilencven · száz
          </button>
        </p>

        <div class="note">
          Особое внимание:
          <span class="hu-word">negyven</span> с короткой e и
          <span class="hu-word">hetven</span> с короткой e.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Диктант: десять чисел</h4>

        <p>Прослушайте и запишите каждое число словами:</p>

        <ol class="tasklist">
          <li>7 → ____________</li>
          <li>11 → ____________</li>
          <li>18 → ____________</li>
          <li>20 → ____________</li>
          <li>24 → ____________</li>
          <li>30 → ____________</li>
          <li>45 → ____________</li>
          <li>62 → ____________</li>
          <li>90 → ____________</li>
          <li>100 → ____________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ключ</summary>
          <ol class="tasklist mt-3">
            <li><b>hét</b></li>
            <li><b>tizenegy</b></li>
            <li><b>tizennyolc</b></li>
            <li><b>húsz</b></li>
            <li><b>huszonnégy</b></li>
            <li><b>harminc</b></li>
            <li><b>negyvenöt</b></li>
            <li><b>hatvankettő</b></li>
            <li><b>kilencven</b></li>
            <li><b>száz</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Проверка ошибок</h4>

        <p>После диктанта проверьте каждое слово по четырём пунктам:</p>

        <ul class="tick">
          <li>правильная ли долгая гласная: í, ú, é, á, ő;</li>
          <li>нет ли лишнего пробела или дефиса;</li>
          <li>правильная ли основа: tizen-, huszon-, negyven, hetven;</li>
          <li>не потеряна ли двойная согласная: nn / nny.</li>
        </ul>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 5 · 4/12 · ДНИ НЕДЕЛИ',
      title: 'A hét napjai',
      subtitle: 'Названия дней и формы для расписания',
      type: 'info',
      note: 'Сначала выучите семь основных названий, затем их готовые временные формы. Не пытайтесь вывести каждую форму только по одному универсальному окончанию.',
      warn: 'Для воскресенья в обычном расписании используется vasárnap без дополнительного окончания: Vasárnap nem dolgozom. Форму vasárnapon на уровне A0 не используем как основную модель.',
      task: 'Назовите дни по порядку и в обратном порядке. Затем преобразуйте шесть названий в формы расписания и составьте недельный план из семи предложений.',
      activities: [L5_CP_WEEKDAYS],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Семь дней недели</h4>

        <table class="conj">
          <tr><th>Порядок</th><th>Венгерский</th><th>Перевод</th><th>Произношение</th></tr>
          <tr>
            <td>1</td>
            <td><button class="speak-btn" data-speak-text="hétfő" data-speak-lang="hu-HU">hétfő</button></td>
            <td>понедельник</td>
            <td>долгие é и ő</td>
          </tr>
          <tr>
            <td>2</td>
            <td><button class="speak-btn" data-speak-text="kedd" data-speak-lang="hu-HU">kedd</button></td>
            <td>вторник</td>
            <td>двойная d</td>
          </tr>
          <tr>
            <td>3</td>
            <td><button class="speak-btn" data-speak-text="szerda" data-speak-lang="hu-HU">szerda</button></td>
            <td>среда</td>
            <td>ударение на первом слоге</td>
          </tr>
          <tr>
            <td>4</td>
            <td><button class="speak-btn" data-speak-text="csütörtök" data-speak-lang="hu-HU">csütörtök</button></td>
            <td>четверг</td>
            <td>cs — один звук; три ö/ü-гласные</td>
          </tr>
          <tr>
            <td>5</td>
            <td><button class="speak-btn" data-speak-text="péntek" data-speak-lang="hu-HU">péntek</button></td>
            <td>пятница</td>
            <td>долгая é</td>
          </tr>
          <tr>
            <td>6</td>
            <td><button class="speak-btn" data-speak-text="szombat" data-speak-lang="hu-HU">szombat</button></td>
            <td>суббота</td>
            <td>sz — один звук</td>
          </tr>
          <tr>
            <td>7</td>
            <td><button class="speak-btn" data-speak-text="vasárnap" data-speak-lang="hu-HU">vasárnap</button></td>
            <td>воскресенье</td>
            <td>долгая á</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="hétfő, kedd, szerda, csütörtök, péntek, szombat, vasárnap" data-speak-lang="hu-HU">
            hétfő → kedd → szerda → csütörtök → péntek → szombat → vasárnap
          </button>
        </p>

        <div class="note">
          В венгерском названия дней обычно пишутся со строчной буквы:
          <span class="hu-word">hétfő, kedd, szerda</span>.
          С прописной буквы слово начинается только в начале предложения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Как спросить, какой сегодня день</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen nap van ma?" data-speak-lang="hu-HU">Milyen nap van ma?</button></td>
            <td><button class="speak-btn" data-speak-text="Ma hétfő van." data-speak-lang="hu-HU">Ma hétfő van.</button></td>
            <td>Какой сегодня день? — Сегодня понедельник.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen nap van ma?" data-speak-lang="hu-HU">Milyen nap van ma?</button></td>
            <td><button class="speak-btn" data-speak-text="Ma péntek van." data-speak-lang="hu-HU">Ma péntek van.</button></td>
            <td>Сегодня пятница.</td>
          </tr>
        </table>

        <div class="note">
          В конструкции <span class="hu-word">Ma hétfő van</span> название дня остаётся в основной форме.
          Здесь мы определяем, какой сегодня день, а не сообщаем время действия.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Формы дней в расписании</h4>

        <p>Когда день отвечает на вопрос <b>Mikor?</b> — «когда?», используются готовые формы:</p>

        <table class="conj">
          <tr><th>Основная форма</th><th>Когда?</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hétfő" data-speak-lang="hu-HU">hétfő</button></td>
            <td><button class="speak-btn" data-speak-text="hétfőn" data-speak-lang="hu-HU">hétfőn</button></td>
            <td><button class="speak-btn" data-speak-text="Hétfőn dolgozom." data-speak-lang="hu-HU">Hétfőn dolgozom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kedd" data-speak-lang="hu-HU">kedd</button></td>
            <td><button class="speak-btn" data-speak-text="kedden" data-speak-lang="hu-HU">kedden</button></td>
            <td><button class="speak-btn" data-speak-text="Kedden olvasok." data-speak-lang="hu-HU">Kedden olvasok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szerda" data-speak-lang="hu-HU">szerda</button></td>
            <td><button class="speak-btn" data-speak-text="szerdán" data-speak-lang="hu-HU">szerdán</button></td>
            <td><button class="speak-btn" data-speak-text="Szerdán magyarul tanulok." data-speak-lang="hu-HU">Szerdán magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="csütörtök" data-speak-lang="hu-HU">csütörtök</button></td>
            <td><button class="speak-btn" data-speak-text="csütörtökön" data-speak-lang="hu-HU">csütörtökön</button></td>
            <td><button class="speak-btn" data-speak-text="Csütörtökön írok." data-speak-lang="hu-HU">Csütörtökön írok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="péntek" data-speak-lang="hu-HU">péntek</button></td>
            <td><button class="speak-btn" data-speak-text="pénteken" data-speak-lang="hu-HU">pénteken</button></td>
            <td><button class="speak-btn" data-speak-text="Pénteken dolgozom." data-speak-lang="hu-HU">Pénteken dolgozom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szombat" data-speak-lang="hu-HU">szombat</button></td>
            <td><button class="speak-btn" data-speak-text="szombaton" data-speak-lang="hu-HU">szombaton</button></td>
            <td><button class="speak-btn" data-speak-text="Szombaton játszom." data-speak-lang="hu-HU">Szombaton játszom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vasárnap" data-speak-lang="hu-HU">vasárnap</button></td>
            <td><button class="speak-btn" data-speak-text="vasárnap" data-speak-lang="hu-HU">vasárnap</button></td>
            <td><button class="speak-btn" data-speak-text="Vasárnap nem dolgozom." data-speak-lang="hu-HU">Vasárnap nem dolgozom.</button></td>
          </tr>
        </table>

        <div class="warn">
          Не стройте формы механически:
          <s>szerdaan</s>, <s>pénteken</s> с неправильной гласной или <s>vasárnapon</s> как единственный вариант.
          Для активного уровня запомните готовый ряд:
          <span class="hu-word">hétfőn, kedden, szerdán, csütörtökön, pénteken, szombaton, vasárnap</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Что происходит внутри формы</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Наблюдение</th></tr>
          <tr>
            <td><b>hétfőn</b></td>
            <td>после гласной добавляется n</td>
          </tr>
          <tr>
            <td><b>kedden</b></td>
            <td>в основе kedd уже пишется двойная d</td>
          </tr>
          <tr>
            <td><b>szerdán</b></td>
            <td>конечная a перед окончанием удлиняется: a → á</td>
          </tr>
          <tr>
            <td><b>csütörtökön</b></td>
            <td>используется вариант с ö</td>
          </tr>
          <tr>
            <td><b>pénteken</b></td>
            <td>используется вариант с e</td>
          </tr>
          <tr>
            <td><b>szombaton</b></td>
            <td>используется вариант с o</td>
          </tr>
          <tr>
            <td><b>vasárnap</b></td>
            <td>в нейтральном расписании обычно остаётся без окончания</td>
          </tr>
        </table>

        <div class="note">
          Эти формы связаны с венгерской системой временных и пространственных окончаний.
          Полную систему изучим позже; сейчас важнее уверенно использовать готовые формы дней.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Один раз и регулярно</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Возможный смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hétfőn dolgozom." data-speak-lang="hu-HU">Hétfőn dolgozom.</button></td>
            <td>Я работаю в понедельник / по понедельникам — значение уточняет контекст.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Minden hétfőn dolgozom." data-speak-lang="hu-HU">Minden hétfőn dolgozom.</button></td>
            <td>Я работаю каждый понедельник.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Minden vasárnap olvasok." data-speak-lang="hu-HU">Minden vasárnap olvasok.</button></td>
            <td>Я читаю каждое воскресенье.</td>
          </tr>
        </table>

        <div class="note">
          <span class="hu-word">minden</span> делает регулярность явной:
          <span class="hu-word">minden kedden</span>,
          <span class="hu-word">minden pénteken</span>,
          <span class="hu-word">minden vasárnap</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Вопросы о расписании</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor dolgozol?" data-speak-lang="hu-HU">Mikor dolgozol?</button></td>
            <td><button class="speak-btn" data-speak-text="Hétfőn dolgozom." data-speak-lang="hu-HU">Hétfőn dolgozom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor tanulsz magyarul?" data-speak-lang="hu-HU">Mikor tanulsz magyarul?</button></td>
            <td><button class="speak-btn" data-speak-text="Szerdán tanulok magyarul." data-speak-lang="hu-HU">Szerdán tanulok magyarul.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor nem dolgozol?" data-speak-lang="hu-HU">Mikor nem dolgozol?</button></td>
            <td><button class="speak-btn" data-speak-text="Vasárnap nem dolgozom." data-speak-lang="hu-HU">Vasárnap nem dolgozom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Преобразуйте формы</h4>

        <p>Напишите форму для ответа на вопрос <b>Mikor?</b>:</p>

        <ol class="tasklist">
          <li>hétfő → ____________</li>
          <li>kedd → ____________</li>
          <li>szerda → ____________</li>
          <li>csütörtök → ____________</li>
          <li>péntek → ____________</li>
          <li>szombat → ____________</li>
          <li>vasárnap → ____________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <p class="mt-3">
            <b>hétfőn · kedden · szerdán · csütörtökön · pénteken · szombaton · vasárnap</b>
          </p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Собственное недельное расписание</h4>

        <p>Составьте семь предложений по модели:</p>

        <ul class="tick">
          <li><b>Hétfőn dolgozom.</b></li>
          <li><b>Kedden olvasok.</b></li>
          <li><b>Szerdán magyarul tanulok.</b></li>
          <li><b>Csütörtökön írok.</b></li>
          <li><b>Pénteken dolgozom.</b></li>
          <li><b>Szombaton játszom.</b></li>
          <li><b>Vasárnap nem dolgozom.</b></li>
        </ul>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 5 · 5/12 · МЕСЯЦЫ',
      title: 'A hónapok',
      subtitle: 'Двенадцать месяцев: порядок, написание и формы времени',
      type: 'info',
      note: 'Названия месяцев в венгерском обычно пишутся со строчной буквы. Сначала выучите основной порядок, затем готовые формы с -ban/-ben для ответа на вопрос Mikor? — «когда?».',
      warn: 'Не путайте június и július. Június — июнь, július — июль. В слове augusztus обязательно сохраняется сочетание szt.',
      task: 'Назовите двенадцать месяцев по порядку и в обратном порядке. Затем восстановите пропуски, выберите правильные формы -ban/-ben и составьте три собственных предложения.',
      activities: [L5_CP_MONTHS],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Двенадцать месяцев по порядку</h4>

        <table class="conj">
          <tr><th>№</th><th>Венгерский</th><th>Перевод</th><th>Что проверить</th></tr>
          <tr>
            <td>1</td>
            <td><button class="speak-btn" data-speak-text="január" data-speak-lang="hu-HU">január</button></td>
            <td>январь</td>
            <td>долгая á</td>
          </tr>
          <tr>
            <td>2</td>
            <td><button class="speak-btn" data-speak-text="február" data-speak-lang="hu-HU">február</button></td>
            <td>февраль</td>
            <td>долгая á</td>
          </tr>
          <tr>
            <td>3</td>
            <td><button class="speak-btn" data-speak-text="március" data-speak-lang="hu-HU">március</button></td>
            <td>март</td>
            <td>долгая á</td>
          </tr>
          <tr>
            <td>4</td>
            <td><button class="speak-btn" data-speak-text="április" data-speak-lang="hu-HU">április</button></td>
            <td>апрель</td>
            <td>долгая á в начале</td>
          </tr>
          <tr>
            <td>5</td>
            <td><button class="speak-btn" data-speak-text="május" data-speak-lang="hu-HU">május</button></td>
            <td>май</td>
            <td>долгая á</td>
          </tr>
          <tr>
            <td>6</td>
            <td><button class="speak-btn" data-speak-text="június" data-speak-lang="hu-HU">június</button></td>
            <td>июнь</td>
            <td>jú + n</td>
          </tr>
          <tr>
            <td>7</td>
            <td><button class="speak-btn" data-speak-text="július" data-speak-lang="hu-HU">július</button></td>
            <td>июль</td>
            <td>jú + l</td>
          </tr>
          <tr>
            <td>8</td>
            <td><button class="speak-btn" data-speak-text="augusztus" data-speak-lang="hu-HU">augusztus</button></td>
            <td>август</td>
            <td>пишется szt</td>
          </tr>
          <tr>
            <td>9</td>
            <td><button class="speak-btn" data-speak-text="szeptember" data-speak-lang="hu-HU">szeptember</button></td>
            <td>сентябрь</td>
            <td>sz в начале</td>
          </tr>
          <tr>
            <td>10</td>
            <td><button class="speak-btn" data-speak-text="október" data-speak-lang="hu-HU">október</button></td>
            <td>октябрь</td>
            <td>долгая ó</td>
          </tr>
          <tr>
            <td>11</td>
            <td><button class="speak-btn" data-speak-text="november" data-speak-lang="hu-HU">november</button></td>
            <td>ноябрь</td>
            <td>без диакритики</td>
          </tr>
          <tr>
            <td>12</td>
            <td><button class="speak-btn" data-speak-text="december" data-speak-lang="hu-HU">december</button></td>
            <td>декабрь</td>
            <td>c произносится как ц</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="január, február, március, április, május, június, július, augusztus, szeptember, október, november, december" data-speak-lang="hu-HU">
            Прослушать все месяцы по порядку
          </button>
        </p>

        <div class="note">
          Основное ударение всегда падает на первый слог:
          <span class="hu-word">JA-nu-ár, FEB-ru-ár, SZEP-tem-ber</span>.
          Долгая гласная сохраняет свою долготу, даже если она не находится под ударением.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Június и július</h4>

        <table class="conj">
          <tr><th>Месяц</th><th>Опорная буква</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="június" data-speak-lang="hu-HU">június</button></td>
            <td><b>n</b></td>
            <td>июнь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="július" data-speak-lang="hu-HU">július</button></td>
            <td><b>l</b></td>
            <td>июль</td>
          </tr>
        </table>

        <div class="warn">
          Не переставляйте эти месяцы:
          <span class="hu-word">május → június → július → augusztus</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Строчная буква</h4>

        <table class="conj">
          <tr><th>Правильно</th><th>Неправильно</th><th>Контекст</th></tr>
          <tr>
            <td><b>szeptember</b></td>
            <td><s>Szeptember</s></td>
            <td>название месяца внутри предложения</td>
          </tr>
          <tr>
            <td><b>2026. szeptember 7.</b></td>
            <td><s>2026. Szeptember 7.</s></td>
            <td>дата</td>
          </tr>
          <tr>
            <td><b>Szeptember van.</b></td>
            <td>—</td>
            <td>прописная допустима в начале предложения</td>
          </tr>
        </table>

        <div class="note">
          Прописная буква появляется не потому, что это месяц, а только потому, что слово стоит в начале предложения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как спросить о текущем месяце</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik hónap van most?" data-speak-lang="hu-HU">Melyik hónap van most?</button></td>
            <td><button class="speak-btn" data-speak-text="Most szeptember van." data-speak-lang="hu-HU">Most szeptember van.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik az első hónap?" data-speak-lang="hu-HU">Melyik az első hónap?</button></td>
            <td><button class="speak-btn" data-speak-text="Január." data-speak-lang="hu-HU">Január.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik az utolsó hónap?" data-speak-lang="hu-HU">Melyik az utolsó hónap?</button></td>
            <td><button class="speak-btn" data-speak-text="December." data-speak-lang="hu-HU">December.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Когда? Формы с -ban / -ben</h4>

        <p>Для ответа на вопрос <b>Mikor?</b> используйте готовые формы месяцев:</p>

        <table class="conj">
          <tr><th>-ban</th><th>-ben</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="januárban, februárban, márciusban, áprilisban, májusban, júniusban, júliusban, augusztusban" data-speak-lang="hu-HU">
                januárban · februárban · márciusban · áprilisban · májusban · júniusban · júliusban · augusztusban
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="szeptemberben, októberben, novemberben, decemberben" data-speak-lang="hu-HU">
                szeptemberben · októberben · novemberben · decemberben
              </button>
            </td>
          </tr>
        </table>

        <div class="note">
          Пока учите эти формы как готовые единицы. Полное правило гармонии для -ban/-ben будет систематизировано позже.
        </div>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor van a születésnapod?" data-speak-lang="hu-HU">Mikor van a születésnapod?</button></td>
            <td><button class="speak-btn" data-speak-text="Májusban." data-speak-lang="hu-HU">Májusban.</button></td>
            <td>Когда у тебя день рождения? — В мае.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor kezdődik az iskola?" data-speak-lang="hu-HU">Mikor kezdődik az iskola?</button></td>
            <td><button class="speak-btn" data-speak-text="Szeptemberben." data-speak-lang="hu-HU">Szeptemberben.</button></td>
            <td>Когда начинается школа? — В сентябре.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. До и после</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik hónap jön március után?" data-speak-lang="hu-HU">Melyik hónap jön március után?</button></td>
            <td><button class="speak-btn" data-speak-text="Április." data-speak-lang="hu-HU">Április.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik hónap van július előtt?" data-speak-lang="hu-HU">Melyik hónap van július előtt?</button></td>
            <td><button class="speak-btn" data-speak-text="Június." data-speak-lang="hu-HU">Június.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik hónap jön november után?" data-speak-lang="hu-HU">Melyik hónap jön november után?</button></td>
            <td><button class="speak-btn" data-speak-text="December." data-speak-lang="hu-HU">December.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Восстановите порядок</h4>

        <ol class="tasklist">
          <li>január → február → __________ → április</li>
          <li>május → __________ → július → augusztus</li>
          <li>augusztus → __________ → október</li>
          <li>október → __________ → december</li>
          <li>Какой месяц перед május? → __________</li>
          <li>Какой месяц после szeptember? → __________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>március</b></li>
            <li><b>június</b></li>
            <li><b>szeptember</b></li>
            <li><b>november</b></li>
            <li><b>április</b></li>
            <li><b>október</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Собственные предложения</h4>

        <p>Составьте три фразы:</p>

        <ul class="tick">
          <li><b>Most ______ van.</b> — Сейчас ______.</li>
          <li><b>A születésnapom ______ban / ______ben van.</b> — Мой день рождения в ______.</li>
          <li><b>______ után ______ jön.</b> — После ______ идёт ______.</li>
        </ul>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 5 · 6/12 · ДАТА И КАЛЕНДАРЬ',
      title: 'A dátum',
      subtitle: 'Как записать и прочитать венгерскую дату',
      type: 'info',
      note: 'Венгерская письменная дата строится в порядке год → месяц → день. Цифра дня пишется с точкой, а при чтении превращается в специальную порядковую форму: 3. → harmadika.',
      warn: 'Нельзя читать 2026. augusztus 3. как kétezer-huszonhat augusztus három. Правильно: kétezer-huszonhat augusztus harmadika.',
      task: 'Сначала научитесь записывать дату, затем прочитайте пять контролируемых примеров. Собственную дату рождения пока запишите цифрами; полное произнесение произвольного года и всех дней месяца изучим постепенно.',
      activities: [P1_L5_READING, L5_READING_SCHEDULE],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Порядок элементов</h4>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">год → месяц → день</div>
          <div class="mt-2">
            <span class="hu-word">2026. augusztus 3.</span>
          </div>
        </div>

        <table class="conj">
          <tr><th>Элемент</th><th>Форма</th><th>Замечание</th></tr>
          <tr>
            <td>год</td>
            <td><b>2026.</b></td>
            <td>после года ставится точка</td>
          </tr>
          <tr>
            <td>месяц</td>
            <td><b>augusztus</b></td>
            <td>название месяца пишется со строчной буквы</td>
          </tr>
          <tr>
            <td>день</td>
            <td><b>3.</b></td>
            <td>после цифры дня тоже ставится точка</td>
          </tr>
        </table>

        <div class="note">
          Венгерский порядок совпадает с логикой международной записи «от большего к меньшему»,
          но обычная венгерская запись с названием месяца —
          <span class="hu-word">2026. augusztus 3.</span> —
          не является буквальной копией формата ISO.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Цифровая и словесная запись</h4>

        <table class="conj">
          <tr><th>Вид записи</th><th>Пример</th></tr>
          <tr>
            <td>с названием месяца</td>
            <td><b>2026. augusztus 3.</b></td>
          </tr>
          <tr>
            <td>полностью цифровая</td>
            <td><b>2026. 08. 03.</b></td>
          </tr>
          <tr>
            <td>произнесение</td>
            <td>
              <button class="speak-btn" data-speak-text="kétezer-huszonhat augusztus harmadika" data-speak-lang="hu-HU">
                kétezer-huszonhat augusztus harmadika
              </button>
            </td>
          </tr>
        </table>

        <div class="warn">
          При чтении дата не заканчивается обычным количественным числом:
          <s>augusztus három</s>.
          Используется форма дня месяца:
          <span class="hu-word">augusztus harmadika</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Как читается год 2026</h4>

        <table class="conj">
          <tr><th>Часть</th><th>Венгерский</th></tr>
          <tr>
            <td>2000</td>
            <td><button class="speak-btn" data-speak-text="kétezer" data-speak-lang="hu-HU">kétezer</button></td>
          </tr>
          <tr>
            <td>26</td>
            <td><button class="speak-btn" data-speak-text="huszonhat" data-speak-lang="hu-HU">huszonhat</button></td>
          </tr>
          <tr>
            <td>2026</td>
            <td><button class="speak-btn" data-speak-text="kétezer-huszonhat" data-speak-lang="hu-HU">kétezer-huszonhat</button></td>
          </tr>
        </table>

        <div class="note">
          В этом уроке <span class="hu-word">kétezer-huszonhat</span> изучается как готовая форма.
          Полное образование и написание больших чисел будет систематизировано отдельно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Дни месяца от 1 до 10</h4>

        <p>В записи используется цифра, а при назывании даты — специальная форма:</p>

        <table class="conj">
          <tr><th>Запись</th><th>Чтение в дате</th><th>Пример</th></tr>
          <tr>
            <td>1.</td>
            <td><button class="speak-btn" data-speak-text="elseje" data-speak-lang="hu-HU">elseje</button></td>
            <td><button class="speak-btn" data-speak-text="január elseje" data-speak-lang="hu-HU">január elseje</button></td>
          </tr>
          <tr>
            <td>2.</td>
            <td><button class="speak-btn" data-speak-text="másodika" data-speak-lang="hu-HU">másodika</button></td>
            <td><button class="speak-btn" data-speak-text="február másodika" data-speak-lang="hu-HU">február másodika</button></td>
          </tr>
          <tr>
            <td>3.</td>
            <td><button class="speak-btn" data-speak-text="harmadika" data-speak-lang="hu-HU">harmadika</button></td>
            <td><button class="speak-btn" data-speak-text="augusztus harmadika" data-speak-lang="hu-HU">augusztus harmadika</button></td>
          </tr>
          <tr>
            <td>4.</td>
            <td><button class="speak-btn" data-speak-text="negyedike" data-speak-lang="hu-HU">negyedike</button></td>
            <td><button class="speak-btn" data-speak-text="szeptember negyedike" data-speak-lang="hu-HU">szeptember negyedike</button></td>
          </tr>
          <tr>
            <td>5.</td>
            <td><button class="speak-btn" data-speak-text="ötödike" data-speak-lang="hu-HU">ötödike</button></td>
            <td><button class="speak-btn" data-speak-text="május ötödike" data-speak-lang="hu-HU">május ötödike</button></td>
          </tr>
          <tr>
            <td>6.</td>
            <td><button class="speak-btn" data-speak-text="hatodika" data-speak-lang="hu-HU">hatodika</button></td>
            <td><button class="speak-btn" data-speak-text="június hatodika" data-speak-lang="hu-HU">június hatodika</button></td>
          </tr>
          <tr>
            <td>7.</td>
            <td><button class="speak-btn" data-speak-text="hetedike" data-speak-lang="hu-HU">hetedike</button></td>
            <td><button class="speak-btn" data-speak-text="szeptember hetedike" data-speak-lang="hu-HU">szeptember hetedike</button></td>
          </tr>
          <tr>
            <td>8.</td>
            <td><button class="speak-btn" data-speak-text="nyolcadika" data-speak-lang="hu-HU">nyolcadika</button></td>
            <td><button class="speak-btn" data-speak-text="október nyolcadika" data-speak-lang="hu-HU">október nyolcadika</button></td>
          </tr>
          <tr>
            <td>9.</td>
            <td><button class="speak-btn" data-speak-text="kilencedike" data-speak-lang="hu-HU">kilencedike</button></td>
            <td><button class="speak-btn" data-speak-text="november kilencedike" data-speak-lang="hu-HU">november kilencedike</button></td>
          </tr>
          <tr>
            <td>10.</td>
            <td><button class="speak-btn" data-speak-text="tizedike" data-speak-lang="hu-HU">tizedike</button></td>
            <td><button class="speak-btn" data-speak-text="december tizedike" data-speak-lang="hu-HU">december tizedike</button></td>
          </tr>
        </table>

        <div class="note">
          Эти формы не совпадают с обычными количественными числами:
          <span class="hu-word">három</span> — три,
          но <span class="hu-word">harmadika</span> — третье число месяца.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как спросить дату</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th><th>Что спрашивается</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mi a mai dátum?" data-speak-lang="hu-HU">Mi a mai dátum?</button></td>
            <td><button class="speak-btn" data-speak-text="Kétezer-huszonhat augusztus harmadika." data-speak-lang="hu-HU">Kétezer-huszonhat augusztus harmadika.</button></td>
            <td>полная дата</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hányadika van ma?" data-speak-lang="hu-HU">Hányadika van ma?</button></td>
            <td><button class="speak-btn" data-speak-text="Augusztus harmadika van." data-speak-lang="hu-HU">Augusztus harmadika van.</button></td>
            <td>число месяца</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen nap van ma?" data-speak-lang="hu-HU">Milyen nap van ma?</button></td>
            <td><button class="speak-btn" data-speak-text="Ma hétfő van." data-speak-lang="hu-HU">Ma hétfő van.</button></td>
            <td>день недели</td>
          </tr>
        </table>

        <div class="warn">
          Не смешивайте:
          <span class="hu-word">Hányadika van ma?</span> — какое сегодня число;
          <span class="hu-word">Milyen nap van ma?</span> — какой сегодня день недели.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Прочитайте даты</h4>

        <ol class="tasklist">
          <li>2026. január 1. → ______________________________</li>
          <li>2026. február 2. → ______________________________</li>
          <li>2026. augusztus 3. → ______________________________</li>
          <li>2026. szeptember 4. → ______________________________</li>
          <li>2026. december 10. → ______________________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>kétezer-huszonhat január elseje</b></li>
            <li><b>kétezer-huszonhat február másodika</b></li>
            <li><b>kétezer-huszonhat augusztus harmadika</b></li>
            <li><b>kétezer-huszonhat szeptember negyedike</b></li>
            <li><b>kétezer-huszonhat december tizedike</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Исправьте ошибки</h4>

        <ol class="tasklist">
          <li><s>2026 augusztus 3</s> → ______________________________</li>
          <li><s>2026. Augusztus 3.</s> → ______________________________</li>
          <li><s>kétezer-huszonhat augusztus három</s> → ______________________________</li>
          <li><s>2026. 8. 3</s> → ______________________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>2026. augusztus 3.</b></li>
            <li><b>2026. augusztus 3.</b></li>
            <li><b>kétezer-huszonhat augusztus harmadika</b></li>
            <li><b>2026. 08. 03.</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Контролируемое домашнее задание</h4>

        <ul class="tick">
          <li>Запишите свою дату рождения в венгерском порядке цифрами: <b>год. месяц. день.</b></li>
          <li>Не пытайтесь самостоятельно читать незнакомый год или день месяца, если его формы ещё не было в уроке.</li>
          <li>Для устной тренировки используйте только пять дат из блока 6.</li>
        </ul>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 5 · 7/12 · ВРЕМЯ',
      title: 'Hány óra van?',
      subtitle: 'Который час и во сколько происходит действие',
      type: 'info',
      note: 'Различайте два вопроса: Hány óra van? спрашивает текущее время; Mikor...? спрашивает, когда происходит действие. В ответах используются разные конструкции.',
      warn: 'Не добавляйте -kor к простому ответу о текущем времени: Három óra van. И не используйте van в расписании: Háromkor tanulok.',
      task: 'Отработайте полные часы, формы с -kor и различие két / kettő. Затем выполните перевод, выберите правильную конструкцию и составьте четыре строки собственного расписания.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Как спросить текущее время</h4>

        <p>
          <button class="speak-btn" data-speak-text="Hány óra van?" data-speak-lang="hu-HU">
            Hány óra van?
          </button>
          — Который час?
        </p>

        <table class="conj">
          <tr><th>Часть</th><th>Значение</th></tr>
          <tr><td><b>hány</b></td><td>сколько</td></tr>
          <tr><td><b>óra</b></td><td>час</td></tr>
          <tr><td><b>van</b></td><td>есть / сейчас имеется</td></tr>
        </table>

        <div class="warn">
          Правильно: <span class="hu-word">Hány óra van?</span><br>
          Не добавляйте лишнюю гласную и не произносите <s>hányi óra</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Как назвать полный час</h4>

        <table class="conj">
          <tr><th>Время</th><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td>1:00</td>
            <td><button class="speak-btn" data-speak-text="Egy óra van." data-speak-lang="hu-HU">Egy óra van.</button></td>
            <td>Сейчас час.</td>
          </tr>
          <tr>
            <td>2:00</td>
            <td><button class="speak-btn" data-speak-text="Két óra van." data-speak-lang="hu-HU">Két óra van.</button></td>
            <td>Сейчас два часа.</td>
          </tr>
          <tr>
            <td>3:00</td>
            <td><button class="speak-btn" data-speak-text="Három óra van." data-speak-lang="hu-HU">Három óra van.</button></td>
            <td>Сейчас три часа.</td>
          </tr>
          <tr>
            <td>5:00</td>
            <td><button class="speak-btn" data-speak-text="Öt óra van." data-speak-lang="hu-HU">Öt óra van.</button></td>
            <td>Сейчас пять часов.</td>
          </tr>
          <tr>
            <td>8:00</td>
            <td><button class="speak-btn" data-speak-text="Nyolc óra van." data-speak-lang="hu-HU">Nyolc óra van.</button></td>
            <td>Сейчас восемь часов.</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td><button class="speak-btn" data-speak-text="Tíz óra van." data-speak-lang="hu-HU">Tíz óra van.</button></td>
            <td>Сейчас десять часов.</td>
          </tr>
        </table>

        <div class="note">
          После числительного существительное остаётся в единственном числе:
          <span class="hu-word">három óra</span>, не <s>három órák</s>.
          Перед <span class="hu-word">óra</span> используется
          <span class="hu-word">két</span>, не <s>kettő óra</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Полдень и полночь</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Dél van." data-speak-lang="hu-HU">Dél van.</button></td>
            <td>Полдень.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Éjfél van." data-speak-lang="hu-HU">Éjfél van.</button></td>
            <td>Полночь.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Во сколько? Формы с -kor</h4>

        <p>Если время отвечает на вопрос <b>Mikor?</b> — «когда?», используется <b>-kor</b>:</p>

        <table class="conj">
          <tr><th>Короткая форма</th><th>Полная форма</th><th>Перевод</th></tr>
          <tr>
            <td>—</td>
            <td><button class="speak-btn" data-speak-text="egy órakor" data-speak-lang="hu-HU">egy órakor</button></td>
            <td>в час</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kettőkor" data-speak-lang="hu-HU">kettőkor</button></td>
            <td><button class="speak-btn" data-speak-text="két órakor" data-speak-lang="hu-HU">két órakor</button></td>
            <td>в два часа</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="háromkor" data-speak-lang="hu-HU">háromkor</button></td>
            <td><button class="speak-btn" data-speak-text="három órakor" data-speak-lang="hu-HU">három órakor</button></td>
            <td>в три часа</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ötkor" data-speak-lang="hu-HU">ötkor</button></td>
            <td><button class="speak-btn" data-speak-text="öt órakor" data-speak-lang="hu-HU">öt órakor</button></td>
            <td>в пять часов</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nyolckor" data-speak-lang="hu-HU">nyolckor</button></td>
            <td><button class="speak-btn" data-speak-text="nyolc órakor" data-speak-lang="hu-HU">nyolc órakor</button></td>
            <td>в восемь часов</td>
          </tr>
        </table>

        <div class="note">
          <b>-kor</b> не меняется по гармонии гласных и пишется слитно:
          <span class="hu-word">kettőkor, háromkor, ötkor, nyolckor</span>.
        </div>

        <div class="warn">
          Для «в два часа»:
          <span class="hu-word">kettőkor</span> — короткая форма;
          <span class="hu-word">két órakor</span> — полная форма.
          Перед существительным <span class="hu-word">óra</span> всегда используется <b>két</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Две конструкции нельзя смешивать</h4>

        <table class="conj">
          <tr><th>Значение</th><th>Правильно</th><th>Неправильно</th></tr>
          <tr>
            <td>Сейчас три часа.</td>
            <td><button class="speak-btn" data-speak-text="Három óra van." data-speak-lang="hu-HU">Három óra van.</button></td>
            <td><s>Háromkor van.</s></td>
          </tr>
          <tr>
            <td>Я занимаюсь в три часа.</td>
            <td><button class="speak-btn" data-speak-text="Háromkor tanulok." data-speak-lang="hu-HU">Háromkor tanulok.</button></td>
            <td><s>Három óra van tanulok.</s></td>
          </tr>
          <tr>
            <td>Сейчас пять часов.</td>
            <td><button class="speak-btn" data-speak-text="Öt óra van." data-speak-lang="hu-HU">Öt óra van.</button></td>
            <td><s>Ötkor van.</s></td>
          </tr>
          <tr>
            <td>Я работаю в пять часов.</td>
            <td><button class="speak-btn" data-speak-text="Ötkor dolgozom." data-speak-lang="hu-HU">Ötkor dolgozom.</button></td>
            <td><s>Öt óra van dolgozom.</s></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Hány óra van? и Mikor...?</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány óra van?" data-speak-lang="hu-HU">Hány óra van?</button></td>
            <td><button class="speak-btn" data-speak-text="Három óra van." data-speak-lang="hu-HU">Három óra van.</button></td>
            <td>текущее время</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor tanulsz?" data-speak-lang="hu-HU">Mikor tanulsz?</button></td>
            <td><button class="speak-btn" data-speak-text="Háromkor tanulok." data-speak-lang="hu-HU">Háromkor tanulok.</button></td>
            <td>время действия</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor dolgozol?" data-speak-lang="hu-HU">Mikor dolgozol?</button></td>
            <td><button class="speak-btn" data-speak-text="Ötkor dolgozom." data-speak-lang="hu-HU">Ötkor dolgozom.</button></td>
            <td>время действия</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor olvasol?" data-speak-lang="hu-HU">Mikor olvasol?</button></td>
            <td><button class="speak-btn" data-speak-text="Nyolckor olvasok." data-speak-lang="hu-HU">Nyolckor olvasok.</button></td>
            <td>время действия</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Выберите правильную конструкцию</h4>

        <ol class="tasklist">
          <li>Сейчас два часа. → <b>Két óra van.</b> или <b>Kettőkor van.</b>?</li>
          <li>Я читаю в два часа. → <b>Kettőkor olvasok.</b> или <b>Két óra van olvasok.</b>?</li>
          <li>Сейчас восемь часов. → <b>Nyolc óra van.</b> или <b>Nyolckor van.</b>?</li>
          <li>Я работаю в три часа. → <b>Három óra van.</b> или <b>Háromkor dolgozom.</b>?</li>
          <li>Полночь. → <b>Éjfél van.</b> или <b>Éjfélkor van.</b>?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>Két óra van.</b></li>
            <li><b>Kettőkor olvasok.</b></li>
            <li><b>Nyolc óra van.</b></li>
            <li><b>Háromkor dolgozom.</b></li>
            <li><b>Éjfél van.</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Собственное расписание</h4>

        <p>Составьте четыре предложения:</p>

        <ul class="tick">
          <li><b>Hétfőn nyolckor magyarul tanulok.</b></li>
          <li><b>Szerdán háromkor dolgozom.</b></li>
          <li><b>Pénteken öt órakor olvasok.</b></li>
          <li><b>Szombaton tízkor írok.</b></li>
        </ul>

        <div class="note">
          Загруженные слова
          <span class="hu-word">ma, tegnap, holnap, minden nap, most, később</span>
          полезны, но относятся к отдельной теме временных обстоятельств.
          Они не заменяют материал слайда <span class="hu-word">Hány óra van?</span>.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 5 · 8/12 · АУДИРОВАНИЕ A',
      title: 'Hallás utáni számok',
      subtitle: 'Диктант: десять чисел от 1 до 100',
      type: 'info',
      note: 'Вводите услышанное число венгерским словом, а не цифрами. Например, если слышите 20, пишите húsz.',
      warn: 'Не восстанавливайте ответ по русскому переводу и не открывайте ключ до двух прослушиваний. Проверяются одновременно распознавание, долгие гласные, слитное написание и формы kettő / két.',
      task: 'Первое прослушивание — запишите то, что успели распознать. Второе — дополните и исправьте ответы. Затем сравните с ключом и повторите вслух только ошибочные числа.',
      activities: [L5_LISTENING_NUMBER_DICTATION],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Инструкция</h4>

        <p>Вы услышите десять венгерских чисел. Для каждого номера запишите <b>полное венгерское слово</b>.</p>

        <table class="conj">
          <tr><th>Слышите</th><th>Пишете</th><th>Не пишете</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="húsz" data-speak-lang="hu-HU">húsz</button></td>
            <td><b>húsz</b></td>
            <td><s>20</s>, <s>husz</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="huszonkettő" data-speak-lang="hu-HU">huszonkettő</button></td>
            <td><b>huszonkettő</b></td>
            <td><s>22</s>, <s>huszon kettő</s></td>
          </tr>
        </table>

        <div class="note">
          Самостоятельное число 22 заканчивается на
          <span class="hu-word">kettő</span>:
          <span class="hu-word">huszonkettő</span>.
          Форма <span class="hu-word">huszonkét</span> нужна только перед существительным:
          <span class="hu-word">huszonkét könyv</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Бланк ответов</h4>

        <table class="conj">
          <tr><th>№</th><th>Первое прослушивание</th><th>Второе прослушивание</th></tr>
          <tr><td>1</td><td>________________</td><td>________________</td></tr>
          <tr><td>2</td><td>________________</td><td>________________</td></tr>
          <tr><td>3</td><td>________________</td><td>________________</td></tr>
          <tr><td>4</td><td>________________</td><td>________________</td></tr>
          <tr><td>5</td><td>________________</td><td>________________</td></tr>
          <tr><td>6</td><td>________________</td><td>________________</td></tr>
          <tr><td>7</td><td>________________</td><td>________________</td></tr>
          <tr><td>8</td><td>________________</td><td>________________</td></tr>
          <tr><td>9</td><td>________________</td><td>________________</td></tr>
          <tr><td>10</td><td>________________</td><td>________________</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Что именно проверяется</h4>

        <ul class="tick">
          <li><b>долгие гласные:</b> húsz, negyvenhét, nyolcvannégy, száz;</li>
          <li><b>слитное написание:</b> tizenhárom, huszonkettő, harmincnyolc;</li>
          <li><b>правильные основы:</b> huszon-, harminc-, negyven-, hatvan-, nyolcvan-;</li>
          <li><b>самостоятельная форма 2:</b> kettő внутри huszonkettő;</li>
          <li><b>удвоение:</b> nyolcvannégy с двойной n.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Первый диктант — медленно</h4>

        <p>Прослушайте аудио слайда. Каждое число произносится отдельно. Не открывайте ключ.</p>

        <div class="warn">
          Если одно число не распознано, оставьте пропуск и продолжайте. Не задерживайтесь на одном ответе.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Второй диктант — естественнее</h4>

        <p>Во второй части аудио те же десять чисел звучат повторно и немного быстрее. Используйте её только для проверки и дополнения.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Полный ключ</h4>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Открыть после двух прослушиваний</summary>

          <table class="conj mt-3">
            <tr><th>№</th><th>Ответ</th><th>Цифра</th><th>Главная проверка</th></tr>
            <tr><td>1</td><td><b>négy</b></td><td>4</td><td>долгая é</td></tr>
            <tr><td>2</td><td><b>tizenhárom</b></td><td>13</td><td>слитно; á</td></tr>
            <tr><td>3</td><td><b>húsz</b></td><td>20</td><td>долгая ú</td></tr>
            <tr><td>4</td><td><b>huszonkettő</b></td><td>22</td><td>kettő; ő</td></tr>
            <tr><td>5</td><td><b>harmincnyolc</b></td><td>38</td><td>слитно; ny</td></tr>
            <tr><td>6</td><td><b>negyvenhét</b></td><td>47</td><td>negyven; é</td></tr>
            <tr><td>7</td><td><b>ötvenhat</b></td><td>56</td><td>ötven + hat</td></tr>
            <tr><td>8</td><td><b>hatvankilenc</b></td><td>69</td><td>hatvan + kilenc</td></tr>
            <tr><td>9</td><td><b>nyolcvannégy</b></td><td>84</td><td>двойная n; é</td></tr>
            <tr><td>10</td><td><b>száz</b></td><td>100</td><td>долгая á</td></tr>
          </table>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Анализ ошибок</h4>

        <p>Для каждого неправильного ответа отметьте причину:</p>

        <table class="conj">
          <tr><th>Код</th><th>Тип ошибки</th><th>Пример</th></tr>
          <tr><td>A</td><td>не распознал число</td><td>оставлен пропуск</td></tr>
          <tr><td>B</td><td>потеряна долгая гласная</td><td><s>husz</s> вместо húsz</td></tr>
          <tr><td>C</td><td>поставлен пробел</td><td><s>tizen három</s></td></tr>
          <tr><td>D</td><td>неправильная основа</td><td><s>hétven</s> вместо hetven</td></tr>
          <tr><td>E</td><td>ошибка kettő / két</td><td><s>huszonkét</s> как самостоятельное число</td></tr>
          <tr><td>F</td><td>потеряно удвоение</td><td><s>nyolcvanégy</s></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Критерий прохождения</h4>

        <ul class="tick">
          <li><b>9–10 правильных:</b> упражнение пройдено;</li>
          <li><b>7–8:</b> повторите ошибочные числа и прослушайте ещё раз;</li>
          <li><b>5–6:</b> вернитесь к слайдам 5.2 и 5.3;</li>
          <li><b>0–4:</b> сначала повторите десятки и правила написания.</li>
        </ul>

        <div class="note">
          После проверки произнесите вслух только те числа, в которых была ошибка, три раза:
          медленно, по частям и затем целым словом.
        </div>
      `,
    },
    {
      id: 9,
      eyebrow: 'УРОК 5 · 9/12 · АУДИРОВАНИЕ B',
      title: 'Dátum és program',
      subtitle: 'Дата, день недели и время в одном расписании',
      type: 'info',
      note: 'Все ответы нужно извлечь из аудиозаписи. Не подменяйте аудирование догадкой по календарю: сначала запишите услышанное, затем проверяйте логику даты и расписания.',
      warn: 'Не смешивайте три разных вида информации: дата — 2026. augusztus 3.; день недели — hétfő; время действия — nyolckor, háromkor, öt órakor, tízkor.',
      task: 'Прослушайте блок два раза. После первого раза заполните только то, что уверенно услышали. После второго уточните дату, день недели, четыре действия и четыре времени.',
      activities: [L5_LISTENING_TIME_SCHEDULE],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что нужно услышать</h4>

        <table class="conj">
          <tr><th>Категория</th><th>Сколько деталей</th></tr>
          <tr><td>полная дата</td><td>1</td></tr>
          <tr><td>день недели</td><td>1</td></tr>
          <tr><td>дни расписания</td><td>4</td></tr>
          <tr><td>время действий</td><td>4</td></tr>
          <tr><td>действия</td><td>4</td></tr>
        </table>

        <div class="note">
          В записи используется согласованная дата:
          <span class="hu-word">2026. augusztus 3.</span> действительно приходится на понедельник.
          Но ответ всё равно нужно брать из аудио.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Бланк первого прослушивания</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ваш ответ</th></tr>
          <tr><td>Какая дата?</td><td>____________________________</td></tr>
          <tr><td>Какой день недели?</td><td>____________________________</td></tr>
          <tr><td>Когда учат венгерский?</td><td>____________________________</td></tr>
          <tr><td>Когда работают?</td><td>____________________________</td></tr>
          <tr><td>Когда читают?</td><td>____________________________</td></tr>
          <tr><td>Когда пишут?</td><td>____________________________</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Полезные опоры перед прослушиванием</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Что обозначает</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="augusztus harmadika" data-speak-lang="hu-HU">augusztus harmadika</button></td>
            <td>третье августа</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hétfőn" data-speak-lang="hu-HU">hétfőn</button></td>
            <td>в понедельник</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nyolckor" data-speak-lang="hu-HU">nyolckor</button></td>
            <td>в восемь часов</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="öt órakor" data-speak-lang="hu-HU">öt órakor</button></td>
            <td>в пять часов</td>
          </tr>
        </table>

        <div class="warn">
          Эти примеры помогают распознать форму, но не раскрывают всё расписание. Не заполняйте ответы до прослушивания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Блок B</h4>

        <p>В аудио прозвучит:</p>

        <ul class="tick">
          <li>сначала полная дата;</li>
          <li>затем сегодняшний день недели;</li>
          <li>после этого четыре пункта недельного расписания.</li>
        </ul>

        <p>Первое прослушивание идёт в естественном темпе. Второе — по предложениям и немного медленнее.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Вопросы после второго прослушивания</h4>

        <ol class="tasklist">
          <li>Какая дата прозвучала?</li>
          <li>Какой сегодня день недели?</li>
          <li>В какой день и во сколько человек учит венгерский?</li>
          <li>В какой день и во сколько человек работает?</li>
          <li>В какой день и во сколько человек читает?</li>
          <li>В какой день и во сколько человек пишет?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Полный ключ</h4>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Открыть только после двух прослушиваний</summary>

          <table class="conj mt-3">
            <tr><th>Деталь</th><th>Ответ</th></tr>
            <tr>
              <td>дата</td>
              <td><b>2026. augusztus 3.</b></td>
            </tr>
            <tr>
              <td>день недели</td>
              <td><b>hétfő</b></td>
            </tr>
            <tr>
              <td>венгерский</td>
              <td><b>hétfőn nyolckor</b></td>
            </tr>
            <tr>
              <td>работа</td>
              <td><b>szerdán háromkor</b></td>
            </tr>
            <tr>
              <td>чтение</td>
              <td><b>pénteken öt órakor</b></td>
            </tr>
            <tr>
              <td>письмо</td>
              <td><b>szombaton tízkor</b></td>
            </tr>
          </table>

          <p class="mt-3"><b>Полная расшифровка:</b></p>

          <p>
            <button class="speak-btn" data-speak-text="A dátum: kétezer-huszonhat augusztus harmadika. Ma hétfő van. Hétfőn nyolckor magyarul tanulok. Szerdán háromkor dolgozom. Pénteken öt órakor olvasok. Szombaton tízkor írok." data-speak-lang="hu-HU">
              A dátum: kétezer-huszonhat augusztus harmadika. Ma hétfő van. Hétfőn nyolckor magyarul tanulok. Szerdán háromkor dolgozom. Pénteken öt órakor olvasok. Szombaton tízkor írok.
            </button>
          </p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Не перепутайте формы</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Функция</th></tr>
          <tr><td><b>hétfő</b></td><td>понедельник как название дня</td></tr>
          <tr><td><b>hétfőn</b></td><td>в понедельник</td></tr>
          <tr><td><b>nyolc óra van</b></td><td>сейчас восемь часов</td></tr>
          <tr><td><b>nyolckor</b></td><td>в восемь часов</td></tr>
          <tr><td><b>augusztus 3.</b></td><td>письменная дата</td></tr>
          <tr><td><b>augusztus harmadika</b></td><td>произнесённая дата</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Критерий прохождения</h4>

        <ul class="tick">
          <li><b>6 из 6:</b> упражнение пройдено;</li>
          <li><b>4–5:</b> повторите только предложения с ошибками;</li>
          <li><b>2–3:</b> вернитесь к слайдам 5.4, 5.6 и 5.7;</li>
          <li><b>0–1:</b> сначала повторите дни недели, дату и полные часы.</li>
        </ul>
      `,
    },
    {
      id: 10,
      eyebrow: 'УРОК 5 · 10/12 · ТЕКСТОВЫЙ ДИАЛОГ',
      title: 'Rövid időpont-egyeztetés',
      subtitle: 'Как коротко договориться о дне и времени встречи',
      type: 'info',
      note: 'Практика выполняется письменно. Микрофон и запись не используются: ученик вводит короткие реплики и сравнивает их с моделями.',
      warn: 'Не смешивайте название дня и форму расписания: hétfő — понедельник, hétfőn — в понедельник. Не смешивайте текущее время и время встречи: három óra van — сейчас три часа, háromkor — в три часа.',
      task: 'Разберите два диалога: принятие предложенного времени и отказ со встречным предложением. Затем составьте два собственных обмена по тем же моделям.',
      activities: [P1_L5_ROLEPLAY, L5_ROLEPLAY_SCHEDULE],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Минимальный набор реплик</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó neked hétfőn háromkor?" data-speak-lang="hu-HU">Jó neked hétfőn háromkor?</button></td>
            <td>Тебе удобно в понедельник в три?</td>
            <td>предложить время</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Igen, jó." data-speak-lang="hu-HU">Igen, jó.</button></td>
            <td>Да, подходит.</td>
            <td>принять предложение</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Sajnos nem jó." data-speak-lang="hu-HU">Sajnos nem jó.</button></td>
            <td>К сожалению, не подходит.</td>
            <td>вежливо отказаться</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor jó neked?" data-speak-lang="hu-HU">Mikor jó neked?</button></td>
            <td>Когда тебе удобно?</td>
            <td>спросить альтернативу</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nekem pénteken nyolckor jó." data-speak-lang="hu-HU">Nekem pénteken nyolckor jó.</button></td>
            <td>Мне удобно в пятницу в восемь.</td>
            <td>предложить другое время</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Rendben." data-speak-lang="hu-HU">Rendben.</button></td>
            <td>Хорошо / договорились.</td>
            <td>подтвердить</td>
          </tr>
        </table>

        <div class="note">
          <span class="hu-word">jó neked?</span> буквально означает «хорошо для тебя?»,
          но в договорённости переводится как «тебе удобно / подходит?».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Диалог A: время подходит</h4>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p>
            <b>A:</b>
            <button class="speak-btn" data-speak-text="Szia! Jó neked hétfőn háromkor?" data-speak-lang="hu-HU">
              Szia! Jó neked hétfőn háromkor?
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Привет! Тебе удобно в понедельник в три?</p>

          <p>
            <b>B:</b>
            <button class="speak-btn" data-speak-text="Igen, jó." data-speak-lang="hu-HU">
              Igen, jó.
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Да, подходит.</p>

          <p>
            <b>A:</b>
            <button class="speak-btn" data-speak-text="Rendben. Találkozunk hétfőn háromkor." data-speak-lang="hu-HU">
              Rendben. Találkozunk hétfőn háromkor.
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Хорошо. Встречаемся в понедельник в три.</p>
        </div>

        <div class="note">
          <span class="hu-word">Találkozunk...</span> — готовая реплика «встречаемся / встретимся».
          Здесь настоящее время используется для согласованного будущего действия.
          Полное спряжение глагола <span class="hu-word">találkozik</span> сейчас не требуется.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Диалог B: встречное предложение</h4>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p>
            <b>A:</b>
            <button class="speak-btn" data-speak-text="Jó neked szerdán ötkor?" data-speak-lang="hu-HU">
              Jó neked szerdán ötkor?
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Тебе удобно в среду в пять?</p>

          <p>
            <b>B:</b>
            <button class="speak-btn" data-speak-text="Sajnos nem jó." data-speak-lang="hu-HU">
              Sajnos nem jó.
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">К сожалению, не подходит.</p>

          <p>
            <b>A:</b>
            <button class="speak-btn" data-speak-text="Mikor jó neked?" data-speak-lang="hu-HU">
              Mikor jó neked?
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Когда тебе удобно?</p>

          <p>
            <b>B:</b>
            <button class="speak-btn" data-speak-text="Nekem pénteken nyolckor jó." data-speak-lang="hu-HU">
              Nekem pénteken nyolckor jó.
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Мне удобно в пятницу в восемь.</p>

          <p>
            <b>A:</b>
            <button class="speak-btn" data-speak-text="Rendben. Találkozunk pénteken nyolckor." data-speak-lang="hu-HU">
              Rendben. Találkozunk pénteken nyolckor.
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Хорошо. Встречаемся в пятницу в восемь.</p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Формула реплики</h4>

        <table class="conj">
          <tr><th>Часть</th><th>Модель</th><th>Примеры для замены</th></tr>
          <tr>
            <td>вопрос</td>
            <td><b>Jó neked + день + время?</b></td>
            <td>kedden kettőkor; csütörtökön hatkor; szombaton tízkor</td>
          </tr>
          <tr>
            <td>принятие</td>
            <td><b>Igen, jó.</b></td>
            <td>можно добавить: Rendben.</td>
          </tr>
          <tr>
            <td>отказ</td>
            <td><b>Sajnos nem jó.</b></td>
            <td>не используйте одно резкое Nem.</td>
          </tr>
          <tr>
            <td>альтернатива</td>
            <td><b>Nekem + день + время + jó.</b></td>
            <td>Nekem kedden négykor jó.</td>
          </tr>
          <tr>
            <td>подтверждение</td>
            <td><b>Találkozunk + день + время.</b></td>
            <td>Találkozunk szombaton tízkor.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Проверка форм дня и времени</h4>

        <table class="conj">
          <tr><th>Нужно сказать</th><th>Правильно</th><th>Неправильно</th></tr>
          <tr>
            <td>в понедельник</td>
            <td><b>hétfőn</b></td>
            <td><s>hétfő</s></td>
          </tr>
          <tr>
            <td>в среду</td>
            <td><b>szerdán</b></td>
            <td><s>szerda</s></td>
          </tr>
          <tr>
            <td>в пятницу</td>
            <td><b>pénteken</b></td>
            <td><s>péntek</s></td>
          </tr>
          <tr>
            <td>в два часа</td>
            <td><b>kettőkor</b></td>
            <td><s>kétkor</s></td>
          </tr>
          <tr>
            <td>в три часа</td>
            <td><b>háromkor</b></td>
            <td><s>három óra van</s></td>
          </tr>
        </table>

        <div class="warn">
          В полной форме можно сказать
          <span class="hu-word">két órakor</span>,
          но в короткой форме нужно
          <span class="hu-word">kettőkor</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Дополните диалоги</h4>

        <p><b>Диалог 1</b></p>
        <ol class="tasklist">
          <li>A: Szia! Jó neked kedden __________?</li>
          <li>B: Igen, __________.</li>
          <li>A: Rendben. Találkozunk kedden __________.</li>
        </ol>

        <p><b>Диалог 2</b></p>
        <ol class="tasklist">
          <li>A: Jó neked csütörtökön hatkor?</li>
          <li>B: Sajnos __________.</li>
          <li>A: Mikor jó neked?</li>
          <li>B: Nekem szombaton __________ jó.</li>
          <li>A: Rendben. Találkozunk __________.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Один возможный ключ</summary>

          <p class="mt-3"><b>Диалог 1:</b></p>
          <p>A: Szia! Jó neked kedden <b>négykor</b>?</p>
          <p>B: Igen, <b>jó</b>.</p>
          <p>A: Rendben. Találkozunk kedden <b>négykor</b>.</p>

          <p class="mt-3"><b>Диалог 2:</b></p>
          <p>B: Sajnos <b>nem jó</b>.</p>
          <p>B: Nekem szombaton <b>tízkor</b> jó.</p>
          <p>A: Rendben. Találkozunk <b>szombaton tízkor</b>.</p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Напишите два собственных обмена</h4>

        <p><b>Обмен A — согласие:</b></p>
        <ol class="tasklist">
          <li>предложите день и время;</li>
          <li>ответьте согласием;</li>
          <li>подтвердите встречу.</li>
        </ol>

        <p><b>Обмен B — отказ и новая дата:</b></p>
        <ol class="tasklist">
          <li>предложите день и время;</li>
          <li>вежливо откажитесь;</li>
          <li>спросите альтернативу;</li>
          <li>предложите другой день и время;</li>
          <li>подтвердите встречу.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Самопроверка текста</h4>

        <ul class="tick">
          <li>использована форма дня: <b>hétfőn / kedden / szerdán...</b>;</li>
          <li>время действия заканчивается на <b>-kor</b>;</li>
          <li>в короткой форме «в два» написано <b>kettőkor</b>;</li>
          <li>отказ сформулирован вежливо: <b>Sajnos nem jó</b>;</li>
          <li>последняя реплика повторяет согласованный день и время;</li>
          <li>каждая реплика начинается с прописной буквы и заканчивается знаком препинания.</li>
        </ul>

        <div class="note">
          Микрофон не нужен. Цель — сначала научиться строить точные короткие сообщения.
          После проверки прочитайте оба диалога вслух самостоятельно.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: 'УРОК 5 · 11/12 · ПИСЬМО И СЛОВАРЬ',
      title: 'Az én programom',
      subtitle: 'Полезные слова времени и моё простое расписание',
      type: 'info',
      note: 'Слова nap, hét, hónap, év, óra, perc и másodperc обозначают разные единицы времени. После точного числа существительное остаётся в единственном числе: két hét, három hónap, tíz perc.',
      warn: 'Perc означает только «минута». Секунда — másodperc. Фраза Egy perc! может передавать «одну минуту / один момент», но слово perc из-за этого не приобретает значение «секунда».',
      task: 'Выучите семь единиц времени, различите hét как число и как неделю, исправьте ошибочные переводы и напишите собственное расписание из четырёх строк.',
      activities: [P1_L5_PRACTICE, P1_L5_WRITING, L5_WRITING_SCHEDULE],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Основные единицы времени</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nap" data-speak-lang="hu-HU">nap</button></td>
            <td>день</td>
            <td><button class="speak-btn" data-speak-text="egy nap" data-speak-lang="hu-HU">egy nap</button> — один день</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hét" data-speak-lang="hu-HU">hét</button></td>
            <td>неделя</td>
            <td><button class="speak-btn" data-speak-text="két hét" data-speak-lang="hu-HU">két hét</button> — две недели</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hónap" data-speak-lang="hu-HU">hónap</button></td>
            <td>месяц</td>
            <td><button class="speak-btn" data-speak-text="három hónap" data-speak-lang="hu-HU">három hónap</button> — три месяца</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="év" data-speak-lang="hu-HU">év</button></td>
            <td>год</td>
            <td><button class="speak-btn" data-speak-text="négy év" data-speak-lang="hu-HU">négy év</button> — четыре года</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="óra" data-speak-lang="hu-HU">óra</button></td>
            <td>час</td>
            <td><button class="speak-btn" data-speak-text="öt óra" data-speak-lang="hu-HU">öt óra</button> — пять часов</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="perc" data-speak-lang="hu-HU">perc</button></td>
            <td>минута</td>
            <td><button class="speak-btn" data-speak-text="tíz perc" data-speak-lang="hu-HU">tíz perc</button> — десять минут</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="másodperc" data-speak-lang="hu-HU">másodperc</button></td>
            <td>секунда</td>
            <td><button class="speak-btn" data-speak-text="harminc másodperc" data-speak-lang="hu-HU">harminc másodperc</button> — тридцать секунд</td>
          </tr>
        </table>

        <div class="note">
          После числительного все эти слова остаются в единственном числе:
          <span class="hu-word">két hét, három hónap, négy év, tíz perc</span>.
          Не добавляйте показатель множественного числа.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Hét: «семь» или «неделя»</h4>

        <p>Слово <b>hét</b> имеет два значения. Контекст показывает нужное:</p>

        <table class="conj">
          <tr><th>Пример</th><th>Значение hét</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hét könyv" data-speak-lang="hu-HU">hét könyv</button></td>
            <td>число 7</td>
            <td>семь книг</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy hét" data-speak-lang="hu-HU">egy hét</button></td>
            <td>неделя</td>
            <td>одна неделя</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="két hét" data-speak-lang="hu-HU">két hét</button></td>
            <td>неделя</td>
            <td>две недели</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hét nap" data-speak-lang="hu-HU">hét nap</button></td>
            <td>число 7</td>
            <td>семь дней</td>
          </tr>
        </table>

        <div class="warn">
          <span class="hu-word">hét nap</span> — семь дней,
          а <span class="hu-word">egy hét</span> — одна неделя.
          Нельзя переводить hét автоматически без контекста.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Perc и másodperc</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Точный смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy perc" data-speak-lang="hu-HU">egy perc</button></td>
            <td>одна минута</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy másodperc" data-speak-lang="hu-HU">egy másodperc</button></td>
            <td>одна секунда</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy perc!" data-speak-lang="hu-HU">Egy perc!</button></td>
            <td>Одну минуту! / Один момент!</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy pillanat!" data-speak-lang="hu-HU">Egy pillanat!</button></td>
            <td>Одну секунду! / Один момент!</td>
          </tr>
        </table>

        <div class="note">
          <span class="hu-word">Egy perc!</span> — разговорная просьба немного подождать.
          Это не означает, что <span class="hu-word">perc</span> переводится как «секунда».
          Для единицы времени «секунда» используется <span class="hu-word">másodperc</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Óra: час, время и занятие</h4>

        <table class="conj">
          <tr><th>Пример</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két óra van." data-speak-lang="hu-HU">Két óra van.</button></td>
            <td>Сейчас два часа.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="két óra" data-speak-lang="hu-HU">két óra</button></td>
            <td>два часа как продолжительность</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="magyaróra" data-speak-lang="hu-HU">magyaróra</button></td>
            <td>урок венгерского языка</td>
          </tr>
        </table>

        <div class="note">
          В этом уроке активная модель времени:
          <span class="hu-word">Két óra van</span> — сейчас два часа;
          <span class="hu-word">kettőkor</span> — в два часа.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Полезные готовые сочетания</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="minden nap" data-speak-lang="hu-HU">minden nap</button></td>
            <td>каждый день</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="minden héten" data-speak-lang="hu-HU">minden héten</button></td>
            <td>каждую неделю</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ebben a hónapban" data-speak-lang="hu-HU">ebben a hónapban</button></td>
            <td>в этом месяце</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ebben az évben" data-speak-lang="hu-HU">ebben az évben</button></td>
            <td>в этом году</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tíz perc múlva" data-speak-lang="hu-HU">tíz perc múlva</button></td>
            <td>через десять минут</td>
          </tr>
        </table>

        <div class="note">
          Эти сочетания пока используйте как готовые фразы.
          Их внутренние окончания будут систематизированы в следующих уроках.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Моё расписание</h4>

        <p>Модель строки:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">день + время + действие</div>
          <div class="mt-2">
            <span class="hu-word">Hétfőn nyolckor magyarul tanulok.</span>
          </div>
        </div>

        <table class="conj">
          <tr><th>День</th><th>Время</th><th>Действие</th><th>Полная строка</th></tr>
          <tr>
            <td>hétfőn</td>
            <td>nyolckor</td>
            <td>magyarul tanulok</td>
            <td><button class="speak-btn" data-speak-text="Hétfőn nyolckor magyarul tanulok." data-speak-lang="hu-HU">Hétfőn nyolckor magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>kedden</td>
            <td>négykor</td>
            <td>olvasok</td>
            <td><button class="speak-btn" data-speak-text="Kedden négykor olvasok." data-speak-lang="hu-HU">Kedden négykor olvasok.</button></td>
          </tr>
          <tr>
            <td>csütörtökön</td>
            <td>hatkor</td>
            <td>írok</td>
            <td><button class="speak-btn" data-speak-text="Csütörtökön hatkor írok." data-speak-lang="hu-HU">Csütörtökön hatkor írok.</button></td>
          </tr>
          <tr>
            <td>vasárnap</td>
            <td>tízkor</td>
            <td>dolgozom</td>
            <td><button class="speak-btn" data-speak-text="Vasárnap tízkor dolgozom." data-speak-lang="hu-HU">Vasárnap tízkor dolgozom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Исправьте значения</h4>

        <ol class="tasklist">
          <li><b>perc</b> — секунда → __________________</li>
          <li><b>másodperc</b> — минута → __________________</li>
          <li><b>hét nap</b> — одна неделя → __________________</li>
          <li><b>egy hét</b> — семь → __________________</li>
          <li><b>két hónapok</b> → __________________</li>
          <li><b>három évek</b> → __________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>perc — минута</b></li>
            <li><b>másodperc — секунда</b></li>
            <li><b>hét nap — семь дней</b></li>
            <li><b>egy hét — одна неделя</b></li>
            <li><b>két hónap</b></li>
            <li><b>három év</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Письменное задание</h4>

        <p>Напишите четыре строки собственного расписания. В каждой строке должны быть:</p>

        <ul class="tick">
          <li>форма дня недели;</li>
          <li>точное время с <b>-kor</b>;</li>
          <li>одно действие из урока 4;</li>
          <li>точка в конце предложения.</li>
        </ul>

        <p>Затем добавьте две отдельные фразы с единицами времени:</p>

        <ul class="tick">
          <li>одно предложение с <b>perc</b>;</li>
          <li>одно предложение с <b>hét / hónap / év</b>.</li>
        </ul>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Образец</summary>
          <p class="mt-3"><b>Hétfőn nyolckor magyarul tanulok.</b></p>
          <p><b>Kedden négykor olvasok.</b></p>
          <p><b>Csütörtökön hatkor írok.</b></p>
          <p><b>Vasárnap tízkor nem dolgozom.</b></p>
          <p><b>Tíz perc múlva olvasok.</b></p>
          <p><b>Minden héten magyarul tanulok.</b></p>
        </details>
      `,
    },
    {
      id: 12,
      eyebrow: 'УРОК 5 · 12/12 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Числа, календарь, дата, время и расписание',
      type: 'info',
      note: 'Итог проверяет не отдельные слова, а умение различать функции: самостоятельное число и число перед существительным, название дня и форму расписания, текущее время и время действия, письменную и произнесённую дату.',
      warn: 'Не смешивайте пары: kettő / két; hétfő / hétfőn; két óra van / kettőkor; augusztus 3. / augusztus harmadika; perc / másodperc.',
      task: 'Пройдите восемь итоговых блоков. Сначала отвечайте без ключа, затем исправьте ошибки полными венгерскими формами и повторите только проблемные темы.',
      activities: [L5_EXIT_CHECK],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Числа от 1 до 100</h4>

        <table class="conj">
          <tr><th>Тема</th><th>Правило</th><th>Пример</th></tr>
          <tr>
            <td>самостоятельное число 2</td>
            <td><b>kettő</b></td>
            <td><button class="speak-btn" data-speak-text="Hány könyv van? Kettő." data-speak-lang="hu-HU">Hány könyv van? — Kettő.</button></td>
          </tr>
          <tr>
            <td>2 перед существительным</td>
            <td><b>két</b></td>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
          </tr>
          <tr>
            <td>11–19</td>
            <td><b>tizen-</b> + единица</td>
            <td><button class="speak-btn" data-speak-text="tizenhárom" data-speak-lang="hu-HU">tizenhárom</button></td>
          </tr>
          <tr>
            <td>21–29</td>
            <td><b>huszon-</b> + единица</td>
            <td><button class="speak-btn" data-speak-text="huszonnyolc" data-speak-lang="hu-HU">huszonnyolc</button></td>
          </tr>
          <tr>
            <td>30–90</td>
            <td>десяток + единица, одним словом</td>
            <td><button class="speak-btn" data-speak-text="negyvenhét" data-speak-lang="hu-HU">negyvenhét</button></td>
          </tr>
          <tr>
            <td>100</td>
            <td><b>száz</b></td>
            <td><button class="speak-btn" data-speak-text="száz" data-speak-lang="hu-HU">száz</button></td>
          </tr>
        </table>

        <div class="note">
          До 100 составные числа пишутся слитно:
          <span class="hu-word">tizennyolc, huszonnégy, harmincnyolc, nyolcvannégy</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Дни недели и месяцы</h4>

        <p><b>Дни недели:</b></p>
        <p>
          <button class="speak-btn" data-speak-text="hétfő, kedd, szerda, csütörtök, péntek, szombat, vasárnap" data-speak-lang="hu-HU">
            hétfő · kedd · szerda · csütörtök · péntek · szombat · vasárnap
          </button>
        </p>

        <p><b>Формы расписания:</b></p>
        <p>
          <button class="speak-btn" data-speak-text="hétfőn, kedden, szerdán, csütörtökön, pénteken, szombaton, vasárnap" data-speak-lang="hu-HU">
            hétfőn · kedden · szerdán · csütörtökön · pénteken · szombaton · vasárnap
          </button>
        </p>

        <p><b>Месяцы:</b></p>
        <p>
          <button class="speak-btn" data-speak-text="január, február, március, április, május, június, július, augusztus, szeptember, október, november, december" data-speak-lang="hu-HU">
            január · február · március · április · május · június · július · augusztus · szeptember · október · november · december
          </button>
        </p>

        <div class="warn">
          Название дня и форма расписания — не одно и то же:
          <span class="hu-word">hétfő</span> — понедельник;
          <span class="hu-word">hétfőn</span> — в понедельник.
          Для воскресенья в активной модели используется
          <span class="hu-word">vasárnap</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Письменная и произнесённая дата</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Форма</th></tr>
          <tr>
            <td>письменная дата</td>
            <td><b>2026. augusztus 3.</b></td>
          </tr>
          <tr>
            <td>произнесённая дата</td>
            <td>
              <button class="speak-btn" data-speak-text="kétezer-huszonhat augusztus harmadika" data-speak-lang="hu-HU">
                kétezer-huszonhat augusztus harmadika
              </button>
            </td>
          </tr>
          <tr>
            <td>вопрос о полной дате</td>
            <td><button class="speak-btn" data-speak-text="Mi a mai dátum?" data-speak-lang="hu-HU">Mi a mai dátum?</button></td>
          </tr>
          <tr>
            <td>вопрос о числе месяца</td>
            <td><button class="speak-btn" data-speak-text="Hányadika van ma?" data-speak-lang="hu-HU">Hányadika van ma?</button></td>
          </tr>
        </table>

        <div class="warn">
          Нельзя читать дату как
          <s>kétezer-huszonhat augusztus három</s>.
          Для третьего числа месяца используется
          <span class="hu-word">harmadika</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Текущее время и время действия</h4>

        <table class="conj">
          <tr><th>Вопрос или значение</th><th>Правильная форма</th></tr>
          <tr>
            <td>Который час?</td>
            <td><button class="speak-btn" data-speak-text="Hány óra van?" data-speak-lang="hu-HU">Hány óra van?</button></td>
          </tr>
          <tr>
            <td>Сейчас два часа.</td>
            <td><button class="speak-btn" data-speak-text="Két óra van." data-speak-lang="hu-HU">Két óra van.</button></td>
          </tr>
          <tr>
            <td>Сейчас три часа.</td>
            <td><button class="speak-btn" data-speak-text="Három óra van." data-speak-lang="hu-HU">Három óra van.</button></td>
          </tr>
          <tr>
            <td>в два часа</td>
            <td><button class="speak-btn" data-speak-text="kettőkor, két órakor" data-speak-lang="hu-HU">kettőkor / két órakor</button></td>
          </tr>
          <tr>
            <td>в три часа</td>
            <td><button class="speak-btn" data-speak-text="háromkor, három órakor" data-speak-lang="hu-HU">háromkor / három órakor</button></td>
          </tr>
          <tr>
            <td>полдень / полночь</td>
            <td><button class="speak-btn" data-speak-text="Dél van. Éjfél van." data-speak-lang="hu-HU">Dél van. / Éjfél van.</button></td>
          </tr>
        </table>

        <div class="note">
          <span class="hu-word">óra van</span> сообщает текущее время.
          Форма с <span class="hu-word">-kor</span> отвечает на вопрос
          <span class="hu-word">Mikor?</span> — когда происходит действие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Единицы времени</h4>

        <table class="conj">
          <tr><th>Слово</th><th>Значение</th><th>Пример</th></tr>
          <tr><td><b>nap</b></td><td>день</td><td>egy nap</td></tr>
          <tr><td><b>hét</b></td><td>неделя</td><td>két hét</td></tr>
          <tr><td><b>hónap</b></td><td>месяц</td><td>három hónap</td></tr>
          <tr><td><b>év</b></td><td>год</td><td>négy év</td></tr>
          <tr><td><b>óra</b></td><td>час</td><td>öt óra</td></tr>
          <tr><td><b>perc</b></td><td>минута</td><td>tíz perc</td></tr>
          <tr><td><b>másodperc</b></td><td>секунда</td><td>harminc másodperc</td></tr>
        </table>

        <div class="warn">
          <span class="hu-word">perc</span> не означает секунду.
          Секунда — <span class="hu-word">másodperc</span>.
          После точного числа существительное остаётся в единственном числе:
          <span class="hu-word">két hét, három hónap, tíz perc</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Простое расписание</h4>

        <table class="conj">
          <tr><th>Структура</th><th>Пример</th></tr>
          <tr>
            <td>день + время + действие</td>
            <td><button class="speak-btn" data-speak-text="Hétfőn nyolckor magyarul tanulok." data-speak-lang="hu-HU">Hétfőn nyolckor magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>день + время + действие</td>
            <td><button class="speak-btn" data-speak-text="Szerdán háromkor dolgozom." data-speak-lang="hu-HU">Szerdán háromkor dolgozom.</button></td>
          </tr>
          <tr>
            <td>день + время + действие</td>
            <td><button class="speak-btn" data-speak-text="Pénteken öt órakor olvasok." data-speak-lang="hu-HU">Pénteken öt órakor olvasok.</button></td>
          </tr>
          <tr>
            <td>день + время + действие</td>
            <td><button class="speak-btn" data-speak-text="Szombaton tízkor írok." data-speak-lang="hu-HU">Szombaton tízkor írok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Итоговая самостоятельная проверка</h4>

        <ol class="tasklist">
          <li>22 как самостоятельное число → __________________</li>
          <li>22 книги → __________________</li>
          <li>в понедельник → __________________</li>
          <li>третий месяц года → __________________</li>
          <li>3 августа 2026 года письменно → __________________</li>
          <li>3 августа 2026 года устно → __________________</li>
          <li>Сейчас два часа. → __________________</li>
          <li>Я читаю в два часа. → __________________</li>
          <li>десять минут → __________________</li>
          <li>одна секунда → __________________</li>
          <li>В среду в три я работаю. → __________________</li>
          <li>Когда тебе удобно? → __________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ключ</summary>
          <ol class="tasklist mt-3">
            <li><b>huszonkettő</b></li>
            <li><b>huszonkét könyv</b></li>
            <li><b>hétfőn</b></li>
            <li><b>március</b></li>
            <li><b>2026. augusztus 3.</b></li>
            <li><b>kétezer-huszonhat augusztus harmadika</b></li>
            <li><b>Két óra van.</b></li>
            <li><b>Kettőkor olvasok.</b></li>
            <li><b>tíz perc</b></li>
            <li><b>egy másodperc</b></li>
            <li><b>Szerdán háromkor dolgozom.</b></li>
            <li><b>Mikor jó neked?</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Критерий готовности</h4>

        <ul class="tick">
          <li><b>11–12 правильных:</b> урок усвоен;</li>
          <li><b>8–10:</b> повторите только блоки с ошибками;</li>
          <li><b>5–7:</b> повторите слайды 5.2, 5.4, 5.6 и 5.7;</li>
          <li><b>0–4:</b> снова пройдите числа, календарь и время по порядку.</li>
        </ul>

        <div class="note">
          Перед завершением урока напишите четыре строки собственного расписания и одну дату.
          Проверьте форму дня, время с <b>-kor</b>, форму глагола и точки в письменной дате.
        </div>
      `,
    }
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
