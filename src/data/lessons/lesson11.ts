import type { Lesson, LessonActivity } from '../../types';

const L11_CP_MEANING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l11-cp-meaning-family',
  title: 'Контекстная практика: где, куда и откуда?',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l11-meaning-1', prompt: 'Ты уже находишься на почте. Что скажешь?', options: ['A postán vagyok.', 'A postára megyek.', 'A postáról jövök.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-2', prompt: 'Ты направляешься на почту.', options: ['A postán vagyok.', 'A postára megyek.', 'A postáról jövök.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-meaning-3', prompt: 'Ты возвращаешься с почты.', options: ['A postán vagyok.', 'A postára megyek.', 'A postáról jövök.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-meaning-4', prompt: 'A bankban vagyok. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-5', prompt: 'A bankba megyek. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-meaning-6', prompt: 'A bankból jövök. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 2 },
    { kind: 'fillGap', id: 'l11-meaning-7', prompt: 'A könyv az ___ van. (asztal)', accept: ['asztalon'], explanation: 'Местонахождение на поверхности: asztalon.' },
    { kind: 'fillGap', id: 'l11-meaning-8', prompt: 'A táskát a ___ teszem. (szék)', accept: ['székre'], explanation: 'Цель движения: székre.' },
    { kind: 'fillGap', id: 'l11-meaning-9', prompt: 'Leveszem a kabátot a ___. (bőrönd)', accept: ['bőröndről'], explanation: 'Источник движения: bőröndről.' },
    { kind: 'singleChoice', id: 'l11-meaning-10', prompt: 'Где встречаемся?', options: ['A főtéren találkozunk.', 'A főtérre találkozunk.', 'A főtérről találkozunk.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-11', prompt: 'Куда ты идёшь после работы?', options: ['A piacra megyek.', 'A piacon megyek.', 'A piacról megyek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-12', prompt: 'Откуда приезжает Петер?', options: ['Péter Budapesten jön.', 'Péter Budapestre jön.', 'Péter Budapestről jön.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-meaning-13', prompt: 'Ты спрашиваешь местного жителя, где находится почта.', options: ['Hol van a posta?', 'Hová van a posta?', 'Honnan van a posta?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-14', prompt: 'Собеседник уточняет конечную цель. Как подтвердить?', options: ['Igen, a főtérre megyek.', 'Igen, a főtéren jövök.', 'Igen, a főtérről vagyok.'], correctIndex: 0 },
  ],
};

const L11_READING: LessonActivity = {
  kind: 'reading',
  id: 'l11-reading-budapest-route',
  title: 'Чтение: дела в городе',
  instructions: 'Прочитай связный рассказ и ответь по смыслу: куда идёт Дора, где находятся места и откуда приезжает Петер.',
  passCount: 6,
  content: {
    type: 'prose',
    title: 'Egy délután a városban',
    paragraphs: [
      'Dóra péntek délután a munkahelyén van. Három órakor elindul, mert több dolga van a városban. Először a postára megy, mert levelet szeretne küldeni a testvérének. A posta a főtéren van, a városháza közelében. Dóra busszal érkezik a térre, de először nem látja a postát. Egy járókelőt kérdez. A férfi megmutatja, hogy a posta a tér másik oldalán van. Azt is mondja: a szökőkút után balra kell menni. Dóra megköszöni a segítséget, és két perc múlva megtalálja a bejáratot.',
      'A postáról Dóra a piacra megy. A piac közel van, ezért gyalog megy. Ott almát, kenyeret és sajtot vásárol. Ezután bemegy egy kis könyvesboltba, mert ajándékot keres. A boltban talál egy magyar mesekönyvet, és azt is megveszi.',
      'Öt órakor Dóra a pályaudvaron találkozik a barátjával, Péterrel. Péter Budapestről jön, és a pályaudvarról egyenesen a találkozóhelyre sétál. Csak egy órát marad a városban. Együtt isznak egy kávét. A találkozó után Dóra végül a könyvtárba megy, mert este ott tanul.',
    ],
  },
  questions: [
    { id: 'l11-reading-q1', question: 'Где Дора находится в начале рассказа?', options: ['на работе', 'на рынке', 'на вокзале'], correctIndex: 0 },
    { id: 'l11-reading-q2', question: 'Куда она идёт сначала?', options: ['в библиотеку', 'на почту', 'на вокзал'], correctIndex: 1 },
    { id: 'l11-reading-q3', question: 'Зачем Дора идёт туда?', options: ['отправить письмо', 'купить кофе', 'встретить Петера'], correctIndex: 0 },
    { id: 'l11-reading-q4', question: 'Где находится почта?', options: ['на главной площади', 'в библиотеке', 'на рынке'], correctIndex: 0 },
    { id: 'l11-reading-q5', question: 'Откуда Дора идёт на рынок?', options: ['с почты', 'с вокзала', 'из Будапешта'], correctIndex: 0 },
    { id: 'l11-reading-q6', question: 'Где Дора встречается с Петером?', options: ['на почте', 'на вокзале', 'в книжном магазине'], correctIndex: 1 },
    { id: 'l11-reading-q7', question: 'Какова последняя цель Доры?', options: ['библиотека', 'рынок', 'главная площадь'], correctIndex: 0 },
  ],
};

const L11_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l11-roleplay-town-route', title: 'Ролевая игра: найти почту', partnerLabel: 'Helyi lakos', completionMessage: 'Megtaláltad az utat a postához.', startTurnId: 'l11-rp-s1',
  turns: [
    { id: 'l11-rp-s1', speaker: 'waiter', prompt: 'Jó napot kívánok! Segíthetek?', next: 'l11-rp-l1' },
    { id: 'l11-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поприветствуй и спроси, где находится почта.', model: 'Jó napot! Elnézést, hol van a posta?', next: 'l11-rp-s2' },
    { id: 'l11-rp-s2', speaker: 'waiter', prompt: 'A posta a főtéren van, innen nincs messze.', next: 'l11-rp-l2' },
    { id: 'l11-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси, как пройти на главную площадь.', model: 'Hogyan jutok el a főtérre?', next: 'l11-rp-s3' },
    { id: 'l11-rp-s3', speaker: 'waiter', prompt: 'Menjen egyenesen, azután az első utcánál forduljon jobbra.', next: 'l11-rp-l3' },
    { id: 'l11-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Проверь одну деталь маршрута.', model: 'A második utcánál forduljak jobbra?', next: 'l11-rp-s4' },
    { id: 'l11-rp-s4', speaker: 'waiter', prompt: 'Nem, az első utcánál. Ott lát majd egy bankot.', next: 'l11-rp-l4' },
    { id: 'l11-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Уточни, находится ли почта около банка.', model: 'A posta a bank közelében van?', next: 'l11-rp-s5' },
    { id: 'l11-rp-s5', speaker: 'waiter', prompt: 'Nem egészen. A bank a sarkon van, a posta pedig tovább, a főtéren.', next: 'l11-rp-l5' },
    { id: 'l11-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди направление к площади.', model: 'Értem. Tehát a sarokról továbbmegyek a főtérre.', next: 'l11-rp-s6' },
    { id: 'l11-rp-s6', speaker: 'waiter', prompt: 'Igen, pontosan. A téren a posta balra lesz.', next: 'l11-rp-l6' },
    { id: 'l11-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Уточни, далеко ли это.', model: 'Messze van innen?', next: 'l11-rp-s7' },
    { id: 'l11-rp-s7', speaker: 'waiter', prompt: 'Nem, csak körülbelül öt perc gyalog.', next: 'l11-rp-l7' },
    { id: 'l11-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Кратко повтори конечную цель.', model: 'Rendben. Akkor a főtérre megyek, és ott balra keresem a postát.', next: 'l11-rp-s8' },
    { id: 'l11-rp-s8', speaker: 'waiter', prompt: 'Pontosan, így könnyen megtalálja.', next: 'l11-rp-l8' },
    { id: 'l11-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поблагодари и попрощайся.', model: 'Köszönöm szépen a segítséget. Viszontlátásra!', next: 'l11-rp-s9' },
    { id: 'l11-rp-s9', speaker: 'waiter', prompt: 'Nagyon szívesen. Viszontlátásra!' },
  ],
};

const L11_WRITING: LessonActivity = {
  kind: 'writing', id: 'l11-writing-city-route', title: 'Письмо: мои дела в городе',
  prompt: 'Напиши 70–90 слов. Объясни, где ты находишься, куда тебе нужно пойти, какие два или три места ты посетишь, где они находятся, откуда ты идёшь дальше и куда направишься в конце. Используй несколько осмысленных форм Hol? / Hová? / Honnan?.',
  modelAnswer: ['Délután a munkahelyemen vagyok, de három órakor elindulok. Először a postára megyek, mert levelet küldök. A posta a főtéren van. A postáról a piacra megyek, és ott gyümölcsöt veszek. Ezután a pályaudvarra sétálok. A pályaudvaron találkozom egy barátommal, aki Budapestről jön. Együtt kávézunk a téren. Végül a könyvtárba megyek, mert este magyarul tanulok. A könyvtár a parkban, az egyetem közelében van. Ott két órát maradok. A könyvtárból busszal megyek haza.'],
  rubric: ['70–90 слов', 'начальная и конечная точки', 'два или три места', 'несколько корректных Hol? / Hová? / Honnan? форм', 'понятная последовательность'],
};

const L11_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори 1–1.5 минуты о простом маршруте по городу. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Назови начальную точку, две цели, где находятся места и куда ты пойдёшь после них.',
  rubric: ['начальная точка', 'две цели', 'местонахождение', 'следующий пункт'],
};

const L11_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l11-exit-check',
  title: 'Проверка целей урока 11',
  checks: [
    { objectiveId: 'l11_distinguish-surface-cases', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-superessive', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-sublative', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-delative', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    {
      objectiveId: 'l11_use-surface-cases',
      activityId: 'l11-reading-budapest-route',
      evidenceKind: 'reading',
      evidenceComponents: [
        { activityId: 'l11-roleplay-town-route', evidenceKind: 'interaction' },
        { activityId: 'l11-writing-city-route', evidenceKind: 'writing' },
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
  description: 'Модель Hol? / Hová? / Honnan? для поверхностной и конвенциональной семьи, городских дел, простого маршрута и уточнения местоположения.',
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
    },
    {
      id: 4,
      eyebrow: 'УРОК 11 · 4/11 · HOVÁ? ÉS HONNAN?',
      title: '-ra/-re és -ról/-ről',
      subtitle: 'Цель и источник',
      body: `
        <p><span class="hu-word">A könyvet az asztalra teszem.</span> — Я кладу книгу на стол.</p>
        <p><span class="hu-word">A táskát a székre teszem.</span> — Я кладу сумку на стул. <span class="hu-word">Budapestre utazom.</span> — Я еду в Будапешт.</p>
        <p><span class="hu-word">Leveszem a könyvet az asztalról.</span> — Я снимаю книгу со стола.</p>
        <p><span class="hu-word">Leveszem a táskát a székről.</span> — Я снимаю сумку со стула. <span class="hu-word">Budapestről jövök.</span> — Я приезжаю из Будапешта.</p>
        <div class="note">В географических и институциональных названиях учи стандартное употребление как готовый паттерн. В <b>-ról/-ről</b> гласные ó/ő долгие.</div>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 11 · 5/11 · КОНТЕКСТ',
      title: 'Не поверхность буквально, а стандартное употребление',
      subtitle: 'Места, цели и источники в городе',
      body: `
        <p><span class="hu-word">A könyv az asztalon van.</span> — книга на столе. <span class="hu-word">A postán vagyok.</span> — я на почте.</p>
        <p><span class="hu-word">Anna a szobában van.</span> — Анна находится внутри комнаты: это корректная внутренняя семья из урока 10.</p>
        <p><b>A főtéren találkozunk. A főtérre megyek. A főtérről jövök.</b></p>
        <div class="note">Обе семьи грамматичны. Контекст и принятое употребление конкретного места определяют выбор.</div>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 11 · 6/11 · КОНТРОЛИРУЕМАЯ ПРАКТИКА',
      title: 'Hely és mozgás a városban',
      subtitle: 'Значение важнее механического суффикса',
      body: `<p>Выбирай форму по ситуации: местонахождение, цель или источник. В заданиях соединены знакомая внутренняя семья L10 и основная поверхностная семья L11.</p>`,
      activities: [L11_CP_MEANING],
    },
    {
      id: 7,
      eyebrow: 'УРОК 11 · 7/11 · ЧТЕНИЕ',
      title: 'Egy délután a városban',
      subtitle: 'Несколько дел и одна проблема с маршрутом',
      body: `<p>Вопросы проверяют цели, последовательность, место встречи и финальный пункт, а не поиск окончаний.</p>`,
      activities: [L11_READING],
    },
    {
      id: 8,
      eyebrow: 'УРОК 11 · 8/11 · ВЗАИМОДЕЙСТВИЕ',
      title: 'Hol van a posta?',
      subtitle: 'Спросить дорогу и проверить деталь',
      body: `<p>Ты ищешь почту. Местный житель объясняет маршрут и исправляет одно неверно понятое указание.</p>`,
      activities: [L11_ROLEPLAY],
    },
    {
      id: 9,
      eyebrow: 'УРОК 11 · 9/11 · ПИСЬМО',
      title: 'Merre megyek délután?',
      subtitle: 'Связный план дел в городе',
      body: `<p>Открытый текст оценивается по рубрике и остаётся PARTIAL до квалифицированной проверки.</p>`,
      activities: [L11_WRITING],
    },
    {
      id: 10,
      eyebrow: 'УРОК 11 · 10/11 · УСТНАЯ САМОПРАКТИКА',
      title: 'Egy rövid útvonal',
      subtitle: 'Только текстовая инструкция',
      body: `<p>Опиши короткий маршрут по желанию. В L11 нет отдельного опубликованного Listening: это намеренный текущий пробел, а не повод использовать narration или TTS.</p>`,
      optionalSpeaking: L11_SPEAKING,
    },
    {
      id: 11,
      eyebrow: 'УРОК 11 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Пять целей без автоматического вывода о mastery',
      body: `
        <ul class="tick">
          <li><b>Hol?</b> — место: <b>-n/-on/-en/-ön</b>.</li>
          <li><b>Hová?</b> — цель: <b>-ra/-re</b>.</li>
          <li><b>Honnan?</b> — источник: <b>-ról/-ről</b>.</li>
          <li>Сначала выбирай отношение и пространственную семью, затем формируй слово.</li>
          <li>Reading может дать DIRECT после порога; RolePlay и Writing остаются PARTIAL.</li>
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
