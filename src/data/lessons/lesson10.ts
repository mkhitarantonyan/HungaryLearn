import type { Lesson, LessonActivity } from '../../types';

const L10_CP_MEANING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l10-cp-meaning',
  title: 'Hol? Hová? Honnan?',
  passCount: 8,
  exercises: [
    { kind: 'singleChoice', id: 'l10-meaning-1', prompt: 'Péter a házban van. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l10-meaning-2', prompt: 'Anna bemegy az iskolába. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-meaning-3', prompt: 'Márk kijön a boltból. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l10-meaning-4', prompt: 'Bemegyek a szobába. Это…', options: ['место внутри', 'цель движения внутрь', 'источник движения наружу'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-meaning-5', prompt: 'A kertben olvasok. Это…', options: ['место внутри', 'цель движения внутрь', 'источник движения наружу'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l10-meaning-6', prompt: 'Kijövök az épületből. Это…', options: ['место внутри', 'цель движения внутрь', 'источник движения наружу'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l10-meaning-7', prompt: 'Az irodában dolgozom. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l10-meaning-8', prompt: 'A kertbe megyünk. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-meaning-9', prompt: 'Az iskolából jövök. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l10-meaning-10', prompt: 'A boltban vagyunk. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 0 },
  ],
};

const L10_CP_INESSIVE: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l10-cp-inessive',
  title: 'Hol? — точные формы -ban/-ben',
  passCount: 5,
  exercises: [
    { kind: 'textInput', id: 'l10-inessive-1', prompt: 'ház → Hol?', accept: ['házban'] },
    { kind: 'textInput', id: 'l10-inessive-2', prompt: 'szoba → Hol?', accept: ['szobában'] },
    { kind: 'textInput', id: 'l10-inessive-3', prompt: 'kert → Hol?', accept: ['kertben'] },
    { kind: 'textInput', id: 'l10-inessive-4', prompt: 'épület → Hol?', accept: ['épületben'] },
    { kind: 'textInput', id: 'l10-inessive-5', prompt: 'bolt → Hol?', accept: ['boltban'] },
    { kind: 'textInput', id: 'l10-inessive-6', prompt: 'iskola → Hol?', accept: ['iskolában'] },
  ],
};

const L10_CP_ILLATIVE: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l10-cp-illative',
  title: 'Hová? — точные формы -ba/-be',
  passCount: 5,
  exercises: [
    { kind: 'textInput', id: 'l10-illative-1', prompt: 'ház → Hová?', accept: ['házba'] },
    { kind: 'textInput', id: 'l10-illative-2', prompt: 'szoba → Hová?', accept: ['szobába'] },
    { kind: 'textInput', id: 'l10-illative-3', prompt: 'kert → Hová?', accept: ['kertbe'] },
    { kind: 'textInput', id: 'l10-illative-4', prompt: 'épület → Hová?', accept: ['épületbe'] },
    { kind: 'textInput', id: 'l10-illative-5', prompt: 'bolt → Hová?', accept: ['boltba'] },
    { kind: 'textInput', id: 'l10-illative-6', prompt: 'iskola → Hová?', accept: ['iskolába'] },
  ],
};

const L10_CP_ELATIVE: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l10-cp-elative',
  title: 'Honnan? — точные формы -ból/-ből',
  passCount: 5,
  exercises: [
    { kind: 'textInput', id: 'l10-elative-1', prompt: 'ház → Honnan?', accept: ['házból'] },
    { kind: 'textInput', id: 'l10-elative-2', prompt: 'szoba → Honnan?', accept: ['szobából'] },
    { kind: 'textInput', id: 'l10-elative-3', prompt: 'kert → Honnan?', accept: ['kertből'] },
    { kind: 'textInput', id: 'l10-elative-4', prompt: 'épület → Honnan?', accept: ['épületből'] },
    { kind: 'textInput', id: 'l10-elative-5', prompt: 'bolt → Honnan?', accept: ['boltból'] },
    { kind: 'textInput', id: 'l10-elative-6', prompt: 'iskola → Honnan?', accept: ['iskolából'] },
  ],
};

const L10_CP_CONTEXT: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l10-cp-context',
  title: 'Выбери форму по ситуации',
  passCount: 5,
  exercises: [
    { kind: 'singleChoice', id: 'l10-context-1', prompt: 'Анна уже внутри дома: Anna a __ van.', options: ['házba', 'házban', 'házból'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-context-2', prompt: 'Петер входит в школу: Péter bemegy az __.', options: ['iskolából', 'iskolába', 'iskolában'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-context-3', prompt: 'Марк выходит из магазина: Márk kijön a __.', options: ['boltban', 'boltba', 'boltból'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l10-context-4', prompt: 'Эва работает внутри офиса: Éva az __ dolgozik.', options: ['irodából', 'irodában', 'irodába'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-context-5', prompt: 'Мы входим в комнату: Bemegyünk a __.', options: ['szobába', 'szobából', 'szobában'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l10-context-6', prompt: 'Они выходят из здания: Kijönnek az __.', options: ['épületben', 'épületből', 'épületbe'], correctIndex: 1 },
  ],
};

const L10_READING: LessonActivity = {
  kind: 'reading',
  id: 'l10-reading-dialogue',
  title: 'Чтение: где, куда и откуда',
  instructions: 'Прочитай диалог и ответь по смыслу пространственных отношений.',
  passCount: 4,
  content: {
    type: 'prose',
    title: 'Hol vagy most?',
    paragraphs: [
      'A: Szia! Hol vagy most?',
      'B: A házban vagyok, a szobámban.',
      'A: Én most a boltba megyek. Kérsz valamit?',
      'B: Egy kávét, kérlek! Utána kijössz a kertbe?',
      'A: Igen. Fél óra múlva kijövök a boltból, és bemegyek a kertbe.',
    ],
  },
  questions: [
    { id: 'l10-reading-q1', question: 'Где находится B в начале?', options: ['a házban, a szobájában', 'a boltba', 'a kertből'], correctIndex: 0 },
    { id: 'l10-reading-q2', question: 'Куда идёт A?', options: ['a boltból', 'a boltban', 'a boltba'], correctIndex: 2 },
    { id: 'l10-reading-q3', question: 'Что просит B?', options: ['egy könyvet', 'egy kávét', 'egy almát'], correctIndex: 1 },
    { id: 'l10-reading-q4', question: 'Откуда позже выходит A?', options: ['a boltból', 'a kertből', 'a házból'], correctIndex: 0 },
    { id: 'l10-reading-q5', question: 'Куда A идёт после магазина?', options: ['a kertben', 'a kertbe', 'a kertből'], correctIndex: 1 },
  ],
};

const L10_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l10-listening-inner-locations',
  title: 'Аудирование: маршрут Марка',
  assetId: 'l10_listening_inner_locations',
  audioStatus: 'missing',
  transcript: 'Márk reggel a szobában van. Kilenc órakor bemegy az iskolába. Délután kijön az iskolából. Utána bemegy a boltba. A boltban találkozik Annával. Végül kijön a boltból.',
  passCount: 4,
  questions: [
    { id: 'l10-listening-q1', question: 'Где Марк утром?', options: ['a szobában', 'az iskolába', 'a boltból'], correctIndex: 0 },
    { id: 'l10-listening-q2', question: 'Куда он входит в девять?', options: ['az iskolából', 'az iskolában', 'az iskolába'], correctIndex: 2 },
    { id: 'l10-listening-q3', question: 'Откуда он выходит днём?', options: ['a boltból', 'az iskolából', 'a szobából'], correctIndex: 1 },
    { id: 'l10-listening-q4', question: 'Где он встречает Анну?', options: ['a boltba', 'a boltban', 'a boltból'], correctIndex: 1 },
    { id: 'l10-listening-q5', question: 'Откуда он выходит в конце?', options: ['a boltból', 'a boltba', 'a boltban'], correctIndex: 0 },
  ],
};

const L10_CP_WRITING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l10-cp-context-writing',
  title: 'Короткие предложения по ситуации',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l10-writing-1', prompt: 'Петер находится в доме.', accept: ['Péter a házban van.', 'A házban van Péter.'] },
    { kind: 'textInput', id: 'l10-writing-2', prompt: 'Анна входит в школу.', accept: ['Anna bemegy az iskolába.', 'Az iskolába megy be Anna.'] },
    { kind: 'textInput', id: 'l10-writing-3', prompt: 'Марк выходит из магазина.', accept: ['Márk kijön a boltból.', 'A boltból jön ki Márk.'] },
    { kind: 'textInput', id: 'l10-writing-4', prompt: 'Я читаю в саду.', accept: ['A kertben olvasok.', 'Olvasok a kertben.'] },
    { kind: 'textInput', id: 'l10-writing-5', prompt: 'Я вхожу в комнату, затем выхожу из комнаты.', accept: ['Bemegyek a szobába, majd kijövök a szobából.'] },
  ],
};

const L10_RECORDING: LessonActivity = {
  kind: 'recording',
  id: 'l10-record-inner-locations',
  title: 'Говорение: где, куда, откуда',
  instructions: 'Запиши три коротких ответа. Запись остаётся PARTIAL evidence и требует проверки человеком.',
  targetText: 'A házban vagyok. Bemegyek a boltba. Kijövök a boltból.',
  targetTranslation: 'Я нахожусь в доме. Я вхожу в магазин. Я выхожу из магазина.',
  rubric: [
    'Произнесены все три предложения',
    'Различимы отношения Hol, Hová и Honnan',
    'Сохранены долгие гласные в -ból/-ből',
  ],
};

const L10_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l10-exit-check',
  title: 'Exit check — цели урока 10',
  checks: [
    { objectiveId: 'l10_distinguish-inner-cases', activityId: 'l10-cp-meaning', evidenceKind: 'grammar' },
    { objectiveId: 'l10_form-inessive', activityId: 'l10-cp-inessive', evidenceKind: 'grammar' },
    { objectiveId: 'l10_form-illative', activityId: 'l10-cp-illative', evidenceKind: 'grammar' },
    { objectiveId: 'l10_form-elative', activityId: 'l10-cp-elative', evidenceKind: 'grammar' },
    {
      objectiveId: 'l10_use-inner-cases',
      activityId: 'l10-cp-context-writing',
      evidenceKind: 'writing',
      evidenceComponents: [
        { activityId: 'l10-listening-inner-locations', evidenceKind: 'listening' },
        { activityId: 'l10-record-inner-locations', evidenceKind: 'speaking' },
      ],
    },
  ],
};

export const LESSON_10: Lesson = {
  id: 10,
  number: 10,
  level: 'A1',
  title: 'Урок 10 · Helyhatározók I',
  subtitle: 'Внутренние местные падежи: где, куда, откуда',
  description: 'Единая система внутренних местных падежей: Hol? (-ban/-ben), Hová? (-ba/-be), Honnan? (-ból/-ből).',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 10 · 1/11 · СМЫСЛ',
      title: 'Hol? Hová? Honnan?',
      subtitle: 'Сначала отношение, затем суффикс',
      body: `
        <div class="grid3">
          <div><b>HOL?</b><br>Где?<br><span class="hu-word">-ban/-ben</span><br>место внутри</div>
          <div><b>HOVÁ?</b><br>Куда?<br><span class="hu-word">-ba/-be</span><br>цель внутрь</div>
          <div><b>HONNAN?</b><br>Откуда?<br><span class="hu-word">-ból/-ből</span><br>источник изнутри</div>
        </div>
        <p><span class="hu-word">A házban vagyok.</span> — Я нахожусь в доме. <span class="hu-word">Bemegyek a házba.</span> — Я вхожу в дом. <span class="hu-word">Kijövök a házból.</span> — Я выхожу из дома.</p>
        <div class="note">Выбирай форму по пространственному отношению: место, цель или источник. Сам по себе глагол движения не определяет падеж.</div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 10 · 2/11 · ЕДИНАЯ МАТРИЦА',
      title: 'A belső helyviszonyok',
      subtitle: 'Одна система внутренних отношений',
      body: `
        <table class="conj">
          <tr><th>Смысл</th><th>Вопрос</th><th>Суффикс</th><th>ház</th><th>iskola</th></tr>
          <tr><td>место внутри</td><td>Hol?</td><td>-ban/-ben</td><td>házban</td><td>iskolában</td></tr>
          <tr><td>цель внутрь</td><td>Hová?</td><td>-ba/-be</td><td>házba</td><td>iskolába</td></tr>
          <tr><td>источник изнутри</td><td>Honnan?</td><td>-ból/-ből</td><td>házból</td><td>iskolából</td></tr>
        </table>
        <p>Задние гласные выбирают варианты с <b>a/á/ó</b>, передние — с <b>e/é/ő</b>. Конечные <b>-a/-e</b> перед суффиксом удлиняются: <span class="hu-word">iskola → iskolában</span>.</p>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 10 · 3/11 · HOL?',
      title: '-ban / -ben',
      subtitle: 'Где внутри?',
      body: `
        <p><span class="hu-word">Péter a szobában van.</span> — Петер находится в комнате. <span class="hu-word">A kertben olvasok.</span> — Я читаю в саду.</p>
        <p>Частые пары: <span class="hu-word">házban, szobában, kertben, épületben, boltban, iskolában</span>.</p>
      `,
      activities: [L10_CP_INESSIVE],
    },
    {
      id: 4,
      eyebrow: 'УРОК 10 · 4/11 · HOVÁ?',
      title: '-ba / -be',
      subtitle: 'Куда внутрь?',
      body: `
        <p><span class="hu-word">Péter bemegy a szobába.</span> — Петер входит в комнату. <span class="hu-word">Anna bemegy az épületbe.</span> — Анна входит в здание.</p>
        <p>Частые пары: <span class="hu-word">házba, szobába, kertbe, épületbe, boltba, iskolába</span>.</p>
      `,
      activities: [L10_CP_ILLATIVE],
    },
    {
      id: 5,
      eyebrow: 'УРОК 10 · 5/11 · HONNAN?',
      title: '-ból / -ből',
      subtitle: 'Откуда изнутри?',
      body: `
        <p><span class="hu-word">Péter kijön a szobából.</span> — Петер выходит из комнаты. <span class="hu-word">Anna kijön az épületből.</span> — Анна выходит из здания.</p>
        <p>Частые пары: <span class="hu-word">házból, szobából, kertből, épületből, boltból, iskolából</span>.</p>
      `,
      activities: [L10_CP_ELATIVE],
    },
    {
      id: 6,
      eyebrow: 'УРОК 10 · 6/11 · КОНТРАСТ',
      title: 'От смысла к вопросу',
      subtitle: 'Место → цель → источник',
      body: `
        <p>Сначала реши, что сообщает ситуация: где кто-то находится, куда направляется или откуда выходит. Только потом выбирай суффикс.</p>
        <p><span class="hu-word">A boltban vagyok.</span> — Hol? <span class="hu-word">A boltba megyek.</span> — Hová? <span class="hu-word">A boltból jövök.</span> — Honnan?</p>
      `,
      activities: [L10_CP_MEANING],
    },
    {
      id: 7,
      eyebrow: 'УРОК 10 · 7/11 · КОНТЕКСТ',
      title: 'A térbeli kapcsolat számít',
      subtitle: 'Важно пространственное отношение',
      body: `
        <p><span class="hu-word">A boltba megyek.</span> означает, что магазин — цель: я иду в магазин.</p>
        <p><span class="hu-word">A boltban megyek.</span> тоже может быть грамматически правильно: движение происходит внутри магазина.</p>
        <div class="note">Некоторые венгерские географические названия используют другую модель местных форм; её изучим в уроке 11. В этом уроке продуктивно используем только внутреннюю семью.</div>
        <p><span class="hu-word">Németországban élek.</span> — Я живу в Германии. <span class="hu-word">Örményországból jöttem.</span> — Я приехал из Армении. <span class="hu-word">Berlinbe utazom.</span> — Я еду в Берлин.</p>
      `,
      activities: [L10_CP_CONTEXT],
    },
    {
      id: 8,
      eyebrow: 'УРОК 10 · 8/11 · ЧТЕНИЕ',
      title: 'Hol vagy most?',
      subtitle: 'Диалог как evidence понимания',
      body: `
        <p>Прочитай диалог и проследи три отношения: место внутри, цель внутрь и источник изнутри.</p>
      `,
      activities: [L10_READING],
    },
    {
      id: 9,
      eyebrow: 'УРОК 10 · 9/11 · ПРОДУКЦИЯ',
      title: 'Írás és beszéd',
      subtitle: 'Точные предложения и короткая запись',
      body: `
        <p>Письменная часть проверяет пять ограниченных контекстов автоматически. Запись трёх ответов остаётся PARTIAL и не оценивается как произносительное мастерство.</p>
      `,
      activities: [L10_CP_WRITING, L10_RECORDING],
    },
    {
      id: 10,
      eyebrow: 'УРОК 10 · 10/11 · АУДИРОВАНИЕ',
      title: 'Hallásértés',
      subtitle: 'Только по реальной записи',
      body: `
        <p>Задание использует только настоящий файл <span class="hu-word">l10_listening_inner_locations.mp3</span>. Сейчас он отсутствует, поэтому аудио недоступно, а listening evidence остаётся NONE.</p>
      `,
      activities: [L10_LISTENING],
    },
    {
      id: 11,
      eyebrow: 'УРОК 10 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Проверь пять целей',
      body: `
        <ul class="tick">
          <li><b>Hol?</b> — место внутри: <b>-ban/-ben</b>.</li>
          <li><b>Hová?</b> — цель внутрь: <b>-ba/-be</b>.</li>
          <li><b>Honnan?</b> — источник изнутри: <b>-ból/-ből</b>.</li>
          <li>Падеж выбирается по пространственному отношению, а не просто по типу глагола.</li>
        </ul>
      `,
      activities: [L10_EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l10_v1', hu: 'hol', ru: 'где?', category: 'Вопросы места' },
    { id: 'l10_v2', hu: 'hová', ru: 'куда?', category: 'Вопросы места' },
    { id: 'l10_v3', hu: 'honnan', ru: 'откуда?', category: 'Вопросы места' },
    { id: 'l10_v4', hu: 'házban', ru: 'в доме', category: 'Местные падежи' },
    { id: 'l10_v5', hu: 'házba', ru: 'в дом', category: 'Местные падежи' },
    { id: 'l10_v6', hu: 'házból', ru: 'из дома', category: 'Местные падежи' },
    { id: 'l10_v7', hu: 'szobában', ru: 'в комнате', category: 'Местные падежи' },
    { id: 'l10_v8', hu: 'szobába', ru: 'в комнату', category: 'Местные падежи' },
    { id: 'l10_v9', hu: 'szobából', ru: 'из комнаты', category: 'Местные падежи' },
    { id: 'l10_v10', hu: 'bolt', ru: 'магазин', category: 'Лексика' },
    { id: 'l10_v11', hu: 'iskola', ru: 'школа', category: 'Лексика' },
    { id: 'l10_v12', hu: 'étterem', ru: 'ресторан', category: 'Лексика' },
    { id: 'l10_v13', hu: 'iroda', ru: 'офис', category: 'Лексика' },
    { id: 'l10_v14', hu: 'Németországban', ru: 'в Германии', category: 'Страны' },
    { id: 'l10_v15', hu: 'Berlinbe', ru: 'в Берлин', category: 'Города' },
    { id: 'l10_v16', hu: 'Örményországból', ru: 'из Армении', category: 'Страны' },
  ],
  quiz: [
    {
      id: 1001,
      question: 'Какие суффиксы отвечают на вопрос Hol? в семье внутренних местных падежей?',
      options: ['-ban/-ben', '-ba/-be', '-ból/-ből', '-ban/-be'],
      correctIndex: 0,
      explanation: 'Hol? обозначает место внутри: -ban/-ben.',
    },
    {
      id: 1002,
      question: 'Какие суффиксы отвечают на вопрос Hová? в семье внутренних местных падежей?',
      options: ['-ban/-ben', '-ba/-be', '-ból/-ből', '-ba/-ből'],
      correctIndex: 1,
      explanation: 'Hová? обозначает цель движения внутрь: -ba/-be.',
    },
    {
      id: 1003,
      question: 'Как сказать «Я живу в Германии»?',
      options: ['Németországban élek.', 'Németországba megyek.', 'Németországból jöttem.', 'Németországben élek.'],
      correctIndex: 0,
      explanation: 'Здесь спрашивается место проживания — Hol?: Németországban élek.',
    },
    {
      id: 1004,
      question: 'Как сказать «Я иду в магазин»?',
      options: ['A boltban vagyok.', 'A boltba megyek.', 'A boltból jövök.', 'A boltbe megyek.'],
      correctIndex: 1,
      explanation: 'Магазин является целью — Hová?: A boltba megyek. Выбор определяется отношением цели, а не одним лишь глаголом движения.',
    },
    {
      id: 1005,
      question: 'Петер уже находится внутри школы и там учится. Какое предложение выражает эту ситуацию?',
      options: ['Péter az iskolába megy.', 'Péter az iskolából jön.', 'Péter az iskolában tanul.', 'Péter az iskolaben tanul.'],
      correctIndex: 2,
      explanation: 'Петер находится внутри школы — Hol?: Péter az iskolában tanul.',
    },
    {
      id: 1006,
      question: 'Какая форма слова épület правильно отвечает на вопрос Honnan?',
      options: ['épületben', 'épületbe', 'épületből', 'épületból'],
      correctIndex: 2,
      explanation: 'Honnan? требует -ból/-ből; передние гласные слова épület выбирают -ből: épületből.',
    },
  ],
  objectives: [
    { id: 'l10_distinguish-inner-cases', text: 'Различать значения «где?», «куда?» и «откуда?» для внутренних падежей.', skills: ['grammar'] },
    { id: 'l10_form-inessive', text: 'Образовывать падеж -ban/-ben для ответа на вопрос «где?».', skills: ['grammar', 'writing'] },
    { id: 'l10_form-illative', text: 'Образовывать падеж -ba/-be для ответа на вопрос «куда?».', skills: ['grammar', 'writing'] },
    { id: 'l10_form-elative', text: 'Образовывать падеж -ból/-ből для ответа на вопрос «откуда?».', skills: ['grammar', 'writing'] },
    { id: 'l10_use-inner-cases', text: 'Употреблять внутренние падежи при описании местоположения и движения.', skills: ['speaking', 'writing', 'listening'] },
  ],
};
