import type { Lesson, LessonActivity } from '../../types';

const L11_CP_MEANING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l11-cp-meaning-family',
  title: 'Hol? Hová? Honnan? — выбери отношение и семью',
  passCount: 8,
  exercises: [
    { kind: 'singleChoice', id: 'l11-meaning-1', prompt: 'A könyv az asztalon van. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-2', prompt: 'A könyvet az asztalra teszem. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-meaning-3', prompt: 'Leveszem a könyvet az asztalról. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-meaning-4', prompt: 'Anna Budapesten lakik. Это…', options: ['место', 'цель', 'источник'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-5', prompt: 'Péter Budapestre utazik. Это…', options: ['место', 'цель', 'источник'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-meaning-6', prompt: 'Márk Budapestről jön. Это…', options: ['место', 'цель', 'источник'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-meaning-7', prompt: 'A könyv az asztalon van. Какая семья используется?', options: ['внутренняя: -ban/-ben', 'поверхностная/конвенциональная: -n/-on/-en/-ön'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-meaning-8', prompt: 'Anna a szobában van. Какая семья используется?', options: ['внутренняя: -ban/-ben', 'поверхностная/конвенциональная: -n/-on/-en/-ön'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-9', prompt: 'Magyarországra utazunk. Какое отношение выражено?', options: ['место', 'цель', 'источник'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-meaning-10', prompt: 'Magyarországról jövünk. Какое отношение выражено?', options: ['место', 'цель', 'источник'], correctIndex: 2 },
  ],
};

const L11_CP_SUPERESSIVE: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l11-cp-superessive',
  title: 'Hol? — точные формы -n/-on/-en/-ön',
  passCount: 5,
  exercises: [
    { kind: 'textInput', id: 'l11-superessive-1', prompt: 'asztal → Hol?', accept: ['asztalon'] },
    { kind: 'textInput', id: 'l11-superessive-2', prompt: 'szék → Hol?', accept: ['széken'] },
    { kind: 'textInput', id: 'l11-superessive-3', prompt: 'bőrönd → Hol?', accept: ['bőröndön'] },
    { kind: 'textInput', id: 'l11-superessive-4', prompt: 'utca → Hol?', accept: ['utcán'] },
    { kind: 'textInput', id: 'l11-superessive-5', prompt: 'Budapest → Hol?', accept: ['Budapesten'] },
    { kind: 'textInput', id: 'l11-superessive-6', prompt: 'Magyarország → Hol?', accept: ['Magyarországon'] },
  ],
};

const L11_CP_SUBLATIVE: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l11-cp-sublative',
  title: 'Hová? — точные формы -ra/-re',
  passCount: 5,
  exercises: [
    { kind: 'textInput', id: 'l11-sublative-1', prompt: 'asztal → Hová?', accept: ['asztalra'] },
    { kind: 'textInput', id: 'l11-sublative-2', prompt: 'szék → Hová?', accept: ['székre'] },
    { kind: 'textInput', id: 'l11-sublative-3', prompt: 'bőrönd → Hová?', accept: ['bőröndre'] },
    { kind: 'textInput', id: 'l11-sublative-4', prompt: 'utca → Hová?', accept: ['utcára'] },
    { kind: 'textInput', id: 'l11-sublative-5', prompt: 'Budapest → Hová?', accept: ['Budapestre'] },
    { kind: 'textInput', id: 'l11-sublative-6', prompt: 'Magyarország → Hová?', accept: ['Magyarországra'] },
  ],
};

const L11_CP_DELATIVE: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l11-cp-delative',
  title: 'Honnan? — точные формы -ról/-ről',
  passCount: 5,
  exercises: [
    { kind: 'textInput', id: 'l11-delative-1', prompt: 'asztal → Honnan?', accept: ['asztalról'] },
    { kind: 'textInput', id: 'l11-delative-2', prompt: 'szék → Honnan?', accept: ['székről'] },
    { kind: 'textInput', id: 'l11-delative-3', prompt: 'bőrönd → Honnan?', accept: ['bőröndről'] },
    { kind: 'textInput', id: 'l11-delative-4', prompt: 'utca → Honnan?', accept: ['utcáról'] },
    { kind: 'textInput', id: 'l11-delative-5', prompt: 'Budapest → Honnan?', accept: ['Budapestről'] },
    { kind: 'textInput', id: 'l11-delative-6', prompt: 'Magyarország → Honnan?', accept: ['Magyarországról'] },
  ],
};

const L11_CP_CONTEXT: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l11-cp-context-selection',
  title: 'Выбери форму по реальной ситуации',
  passCount: 7,
  exercises: [
    { kind: 'singleChoice', id: 'l11-context-1', prompt: 'Книга уже лежит на столе: A könyv az __ van.', options: ['asztalra', 'asztalon', 'asztalról'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-context-2', prompt: 'Я кладу сумку на стул: A táskát a __ teszem.', options: ['széken', 'székről', 'székre'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-context-3', prompt: 'Я снимаю пальто с чемодана: Leveszem a kabátot a __.', options: ['bőröndről', 'bőröndön', 'bőröndre'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-context-4', prompt: 'Анна живёт в Будапеште: Anna __ lakik.', options: ['Budapestre', 'Budapestről', 'Budapesten'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-context-5', prompt: 'Мы едем в Венгрию: __ utazunk.', options: ['Magyarországra', 'Magyarországon', 'Magyarországról'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-context-6', prompt: 'Петер приезжает из Будапешта: Péter __ jön.', options: ['Budapesten', 'Budapestre', 'Budapestről'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-context-7', prompt: 'Я нахожусь на почте: A __ vagyok.', options: ['postán', 'postára', 'postáról'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-context-8', prompt: 'Анна находится внутри комнаты: Anna a __ van.', options: ['szobán', 'szobában', 'szobára'], correctIndex: 1 },
  ],
};

const L11_READING: LessonActivity = {
  kind: 'reading',
  id: 'l11-reading-budapest-route',
  title: 'Чтение: встреча в Будапеште',
  instructions: 'Прочитай маршрут и ответь по смыслу: где, куда и откуда движутся участники.',
  passCount: 4,
  content: {
    type: 'prose',
    title: 'Találkozás Budapesten',
    paragraphs: [
      'Délután Péter Budapestre utazik. A pályaudvarról a főtérre megy.',
      'A főtéren Anna a padon ül. A könyve a széken van.',
      'Péter és Anna este Budapestről utaznak haza.',
    ],
  },
  questions: [
    { id: 'l11-reading-q1', question: 'Куда Петер едет днём?', options: ['Budapesten', 'Budapestre', 'Budapestről'], correctIndex: 1 },
    { id: 'l11-reading-q2', question: 'Откуда Петер идёт на главную площадь?', options: ['a pályaudvarról', 'a főtérről', 'a székről'], correctIndex: 0 },
    { id: 'l11-reading-q3', question: 'Где сидит Анна?', options: ['a pályaudvaron', 'a főtéren', 'Budapestre'], correctIndex: 1 },
    { id: 'l11-reading-q4', question: 'Где находится книга Анны?', options: ['a széken', 'a székre', 'a székről'], correctIndex: 0 },
    { id: 'l11-reading-q5', question: 'Откуда Петер и Анна едут домой?', options: ['Budapestre', 'Budapesten', 'Budapestről'], correctIndex: 2 },
  ],
};

const L11_CP_WRITING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l11-cp-context-writing',
  title: 'Короткие предложения: место, цель, источник',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l11-writing-1', prompt: 'Книга находится на столе.', accept: ['A könyv az asztalon van.', 'Az asztalon van a könyv.'] },
    { kind: 'textInput', id: 'l11-writing-2', prompt: 'Я кладу книгу на стул.', accept: ['A könyvet a székre teszem.', 'A székre teszem a könyvet.'] },
    { kind: 'textInput', id: 'l11-writing-3', prompt: 'Я снимаю книгу со стола.', accept: ['Leveszem a könyvet az asztalról.', 'A könyvet leveszem az asztalról.'] },
    { kind: 'textInput', id: 'l11-writing-4', prompt: 'Я живу в Будапеште.', accept: ['Budapesten lakom.'] },
    { kind: 'textInput', id: 'l11-writing-5', prompt: 'Я еду в Венгрию, затем возвращаюсь домой из Венгрии.', accept: ['Magyarországra utazom, majd Magyarországról jövök haza.'] },
  ],
};

const L11_RECORDING: LessonActivity = {
  kind: 'recording',
  id: 'l11-record-surface-locations',
  title: 'Говорение: где, куда, откуда',
  instructions: 'Ответь тремя короткими фразами на Hol? Hová? Honnan? Наличие записи означает только выполнение; speaking evidence остаётся PARTIAL до проверки человеком.',
  targetText: 'Budapesten vagyok. Budapestre utazom. Budapestről jövök.',
  targetTranslation: 'Я нахожусь в Будапеште. Я еду в Будапешт. Я приезжаю из Будапешта.',
  rubric: [
    'Произнесены все три пространственные формы',
    'Различимы место, цель и источник',
    'Сохранены долгие ó/ő в -ról/-ről',
  ],
};

const L11_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l11-exit-check',
  title: 'Exit check — цели урока 11',
  checks: [
    { objectiveId: 'l11_distinguish-surface-cases', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-superessive', activityId: 'l11-cp-superessive', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-sublative', activityId: 'l11-cp-sublative', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-delative', activityId: 'l11-cp-delative', evidenceKind: 'grammar' },
    {
      objectiveId: 'l11_use-surface-cases',
      activityId: 'l11-cp-context-writing',
      evidenceKind: 'writing',
      evidenceComponents: [
        { activityId: 'l11-record-surface-locations', evidenceKind: 'speaking' },
      ],
    },
  ],
};

export const LESSON_11: Lesson = {
  id: 11,
  number: 11,
  level: 'A1',
  title: 'Урок 11 · Helyhatározók II',
  subtitle: 'Поверхностная и конвенциональная местная семья: где, куда, откуда',
  description: 'Продолжение модели Hol? / Hová? / Honnan?: формы -n/-on/-en/-ön, -ra/-re и -ról/-ről для предметов, мест и частых географических названий.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 11 · 1/11 · СВЯЗЬ С УРОКОМ 10',
      title: 'Сначала смысл, затем семья и форма',
      subtitle: 'Одна модель выбора для двух местных семей',
      body: `
        <ol class="tasklist">
          <li>Определи отношение: <b>Hol?</b>, <b>Hová?</b> или <b>Honnan?</b>.</li>
          <li>Определи семью: внутреннюю из урока 10 или поверхностную/конвенциональную из урока 11.</li>
          <li>Выбери гармонический вариант суффикса.</li>
          <li>Используй готовую форму в контексте.</li>
        </ol>
        <p><span class="hu-word">A szobában vagyok.</span> — внутри комнаты. <span class="hu-word">A széken ülök.</span> — на стуле.</p>
        <div class="note">Форма выбирается по принятому пространственному употреблению слова, а не по воображаемой физической истории места.</div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 11 · 2/11 · ЕДИНАЯ МАТРИЦА',
      title: 'Hol? Hová? Honnan?',
      subtitle: 'Поверхностная и конвенциональная местная семья',
      body: `
        <table class="conj">
          <tr><th>Отношение</th><th>Вопрос</th><th>Суффикс</th><th>asztal</th><th>szék</th></tr>
          <tr><td>место</td><td>Hol?</td><td>-n/-on/-en/-ön</td><td>asztalon</td><td>széken</td></tr>
          <tr><td>цель</td><td>Hová?</td><td>-ra/-re</td><td>asztalra</td><td>székre</td></tr>
          <tr><td>источник</td><td>Honnan?</td><td>-ról/-ről</td><td>asztalról</td><td>székről</td></tr>
        </table>
      `,
      activities: [L11_CP_MEANING],
    },
    {
      id: 3,
      eyebrow: 'УРОК 11 · 3/11 · HOL?',
      title: '-n / -on / -en / -ön',
      subtitle: 'Место: где?',
      body: `
        <p><b>-on</b>: <span class="hu-word">asztalon</span>. <b>-en</b>: <span class="hu-word">széken</span>, <span class="hu-word">főtéren</span>. <b>-ön</b>: <span class="hu-word">bőröndön</span>.</p>
        <p>После конечной гласной часто виден вариант <b>-n</b>: <span class="hu-word">utca → utcán</span>, <span class="hu-word">posta → postán</span>. Конечные <b>a/e</b> перед суффиксом удлиняются.</p>
      `,
      activities: [L11_CP_SUPERESSIVE],
    },
    {
      id: 4,
      eyebrow: 'УРОК 11 · 4/11 · HOVÁ?',
      title: '-ra / -re',
      subtitle: 'Цель: куда?',
      body: `
        <p><span class="hu-word">A könyvet az asztalra teszem.</span> — Я кладу книгу на стол.</p>
        <p><span class="hu-word">A táskát a székre teszem.</span> — Я кладу сумку на стул. <span class="hu-word">Budapestre utazom.</span> — Я еду в Будапешт.</p>
        <div class="note">В географических и институциональных названиях учи стандартное употребление как готовый паттерн; русский перевод не обязан повторять венгерскую морфологию.</div>
      `,
      activities: [L11_CP_SUBLATIVE],
    },
    {
      id: 5,
      eyebrow: 'УРОК 11 · 5/11 · HONNAN?',
      title: '-ról / -ről',
      subtitle: 'Источник: откуда?',
      body: `
        <p><span class="hu-word">Leveszem a könyvet az asztalról.</span> — Я снимаю книгу со стола.</p>
        <p><span class="hu-word">Leveszem a táskát a székről.</span> — Я снимаю сумку со стула. <span class="hu-word">Budapestről jövök.</span> — Я приезжаю из Будапешта.</p>
        <div class="note">В суффиксах <b>-ról/-ről</b> гласные ó/ő долгие.</div>
      `,
      activities: [L11_CP_DELATIVE],
    },
    {
      id: 6,
      eyebrow: 'УРОК 11 · 6/11 · КОНТЕКСТ',
      title: 'Не поверхность буквально, а стандартное употребление',
      subtitle: 'Предметы, учреждения и контраст с внутренней семьёй',
      body: `
        <p><span class="hu-word">A könyv az asztalon van.</span> — книга на столе. <span class="hu-word">A postán vagyok.</span> — я на почте.</p>
        <p><span class="hu-word">Anna a szobában van.</span> — Анна находится внутри комнаты: это корректная внутренняя семья из урока 10.</p>
        <div class="note">Обе семьи грамматичны. Контекст и принятое употребление конкретного места определяют выбор.</div>
      `,
      activities: [L11_CP_CONTEXT],
    },
    {
      id: 7,
      eyebrow: 'УРОК 11 · 7/11 · ГЕОГРАФИЯ',
      title: 'Budapest és Magyarország',
      subtitle: 'Частые стандартные формы',
      body: `
        <table class="conj">
          <tr><th>Место</th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr>
          <tr><td>Budapest</td><td>Budapesten</td><td>Budapestre</td><td>Budapestről</td></tr>
          <tr><td>Magyarország</td><td>Magyarországon</td><td>Magyarországra</td><td>Magyarországról</td></tr>
        </table>
        <p><span class="hu-word">Magyarországon élek.</span> — Я живу в Венгрии. <span class="hu-word">Magyarországra utazom.</span> — Я еду в Венгрию. <span class="hu-word">Magyarországról jövök.</span> — Я приезжаю из Венгрии.</p>
        <p><span class="hu-word">Budapesten lakom.</span> — Я живу в Будапеште. <span class="hu-word">Budapestre utazom.</span> — Я еду в Будапешт. <span class="hu-word">Budapestről jövök.</span> — Я приезжаю из Будапешта.</p>
        <div class="note">Для обычного пространственного значения «в Будапеште» стандартный венгерский использует <b>Budapesten</b>, а не <b>*Budapestben</b>. Это современный паттерн употребления, который лучше учить целиком.</div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 11 · 8/11 · ЧТЕНИЕ',
      title: 'Találkozás Budapesten',
      subtitle: 'Понимание места, цели, источника и деталей',
      body: `
        <p>Прочитай короткий маршрут. Вопросы проверяют содержание, а не поиск окончаний.</p>
      `,
      activities: [L11_READING],
    },
    {
      id: 9,
      eyebrow: 'УРОК 11 · 9/11 · ПРОДУКЦИЯ',
      title: 'Írás és beszéd',
      subtitle: 'Точные предложения и запись для проверки',
      body: `
        <p>Пять ограниченных письменных контекстов проверяются автоматически. Запись трёх ответов подтверждает выполнение, но не правильность произношения и остаётся PARTIAL evidence.</p>
      `,
      activities: [L11_CP_WRITING, L11_RECORDING],
    },
    {
      id: 10,
      eyebrow: 'УРОК 11 · 10/11 · ЦЕПОЧКИ',
      title: 'Три отношения — одна семья',
      subtitle: 'Повтори формы как связанные тройки',
      body: `
        <div class="grid2">
          <div><p><b>asztal</b><br><span class="hu-word">asztalon → asztalra → asztalról</span></p><p><b>szék</b><br><span class="hu-word">széken → székre → székről</span></p></div>
          <div><p><b>Budapest</b><br><span class="hu-word">Budapesten → Budapestre → Budapestről</span></p><p><b>Magyarország</b><br><span class="hu-word">Magyarországon → Magyarországra → Magyarországról</span></p></div>
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: 'УРОК 11 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Проверь пять целей',
      body: `
        <ul class="tick">
          <li><b>Hol?</b> — место: <b>-n/-on/-en/-ön</b>.</li>
          <li><b>Hová?</b> — цель: <b>-ra/-re</b>.</li>
          <li><b>Honnan?</b> — источник: <b>-ról/-ről</b>.</li>
          <li>Сначала выбирай отношение и пространственную семью, затем формируй слово.</li>
        </ul>
      `,
      activities: [L11_EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l11_v1', hu: 'asztalon', ru: 'на столе', category: 'Местные падежи' },
    { id: 'l11_v2', hu: 'asztalra', ru: 'на стол', category: 'Местные падежи' },
    { id: 'l11_v3', hu: 'asztalról', ru: 'со стола', category: 'Местные падежи' },
    { id: 'l11_v4', hu: 'széken', ru: 'на стуле', category: 'Местные падежи' },
    { id: 'l11_v5', hu: 'székre', ru: 'на стул', category: 'Местные падежи' },
    { id: 'l11_v6', hu: 'székről', ru: 'со стула', category: 'Местные падежи' },
    { id: 'l11_v7', hu: 'Magyarországon', ru: 'в Венгрии', category: 'География' },
    { id: 'l11_v8', hu: 'Magyarországra', ru: 'в Венгрию', category: 'География' },
    { id: 'l11_v9', hu: 'Magyarországról', ru: 'из Венгрии', category: 'География' },
    { id: 'l11_v10', hu: 'Budapesten', ru: 'в Будапеште', category: 'Города' },
    { id: 'l11_v11', hu: 'Budapestre', ru: 'в Будапешт', category: 'Города' },
    { id: 'l11_v12', hu: 'Budapestről', ru: 'из Будапешта', category: 'Города' },
    { id: 'l11_v13', hu: 'posta', ru: 'почта', category: 'Лексика' },
    { id: 'l11_v14', hu: 'egyetem', ru: 'университет', category: 'Лексика' },
    { id: 'l11_v15', hu: 'piac', ru: 'рынок', category: 'Лексика' },
    { id: 'l11_v16', hu: 'pályaudvar', ru: 'вокзал', category: 'Лексика' },
  ],
  quiz: [
    {
      id: 1101,
      question: 'Книга уже лежит на столе. Какая форма завершает предложение «A könyv az ___ van»?',
      options: ['asztalon', 'asztalra', 'asztalról', 'asztalban'],
      correctIndex: 0,
      explanation: 'Здесь выражено место — Hol?: A könyv az asztalon van.',
    },
    {
      id: 1102,
      question: 'Как правильно сказать «Я кладу книгу на стул»?',
      options: ['A könyvet a székre teszem.', 'A könyvet a széken teszem.', 'A könyvet a székről teszem.', 'A könyvet a székbe teszem.'],
      correctIndex: 0,
      explanation: 'Стул является целью — Hová?: a székre. Здесь проверяется стандартное пространственное употребление.',
    },
    {
      id: 1103,
      question: 'Как выразить обычное пространственное значение «Я живу в Будапеште»?',
      options: ['Budapesten lakom.', 'Budapestre lakom.', 'Budapestről lakom.', 'Budapestben lakom.'],
      correctIndex: 0,
      explanation: 'Для обычного значения местонахождения в городе стандартная форма — Budapesten lakom; не *Budapestben lakom.',
    },
    {
      id: 1104,
      question: 'Петер направляется в Будапешт. Какое предложение выражает эту цель?',
      options: ['Péter Budapestre utazik.', 'Péter Budapesten utazik.', 'Péter Budapestről utazik.', 'Péter Budapestben utazik.'],
      correctIndex: 0,
      explanation: 'Будапешт — цель поездки, поэтому используется Hová?: Budapestre.',
    },
    {
      id: 1105,
      question: 'Анна снимает книгу со стула. Какое предложение точно передаёт эту ситуацию?',
      options: ['Anna leveszi a könyvet a székről.', 'Anna leveszi a könyvet a székre.', 'Anna leveszi a könyvet a széken.', 'Anna a szobában van.'],
      correctIndex: 0,
      explanation: 'Источник — стул, поэтому нужен Honnan?: a székről. Последний вариант грамматичен, но описывает другую ситуацию внутренней семьи.',
    },
    {
      id: 1106,
      question: 'Какая форма Magyarország отвечает на вопрос Honnan? в пространственном значении?',
      options: ['Magyarországon', 'Magyarországra', 'Magyarországról', 'Magyarországban'],
      correctIndex: 2,
      explanation: 'Пространственный источник выражается формой Magyarországról — из Венгрии.',
    },
  ],
  objectives: [
    { id: 'l11_distinguish-surface-cases', text: 'Различать значения «где?», «куда?» и «откуда?» для падежей поверхности.', skills: ['grammar'] },
    { id: 'l11_form-superessive', text: 'Образовывать падеж -n/-on/-en/-ön для ответа на вопрос «где?».', skills: ['grammar', 'writing'] },
    { id: 'l11_form-sublative', text: 'Образовывать падеж -ra/-re для ответа на вопрос «куда?».', skills: ['grammar', 'writing'] },
    { id: 'l11_form-delative', text: 'Образовывать падеж -ról/-ről для ответа на вопрос «откуда?».', skills: ['grammar', 'writing'] },
    { id: 'l11_use-surface-cases', text: 'Описывать расположение предметов на поверхности в устной и письменной речи.', skills: ['speaking', 'writing'] },
  ],
};
