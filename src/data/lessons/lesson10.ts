import type { Lesson, LessonActivity } from '../../types';

const L10_CP_MEANING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l10-cp-meaning',
  title: 'Контекстная практика: Hol? Hová? Honnan?',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l10-meaning-1', prompt: 'Péter a házban van. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l10-meaning-2', prompt: 'Anna bemegy az iskolába. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-meaning-3', prompt: 'Márk kijön a boltból. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l10-meaning-4', prompt: 'Ты работаешь внутри офиса.', options: ['Az irodában dolgozom.', 'Az irodába dolgozom.', 'Az irodából dolgozom.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l10-meaning-5', prompt: 'Ты идёшь внутрь кафе.', options: ['A kávézóban megyek.', 'A kávézóba megyek.', 'A kávézóból megyek.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-meaning-6', prompt: 'Ты выходишь из библиотеки.', options: ['Kijövök a könyvtárban.', 'Kijövök a könyvtárba.', 'Kijövök a könyvtárból.'], correctIndex: 2 },
    { kind: 'textInput', id: 'l10-meaning-7', prompt: 'ház → Hol?', accept: ['házban'] },
    { kind: 'textInput', id: 'l10-meaning-8', prompt: 'iskola → Hová?', accept: ['iskolába'] },
    { kind: 'textInput', id: 'l10-meaning-9', prompt: 'bolt → Honnan?', accept: ['boltból'] },
    { kind: 'singleChoice', id: 'l10-meaning-10', prompt: 'Мини-диалог: — Hol vagy? — ___', options: ['A könyvtárban vagyok.', 'A könyvtárba megyek.', 'A könyvtárból jövök.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l10-meaning-11', prompt: 'Мини-диалог: — Hová mész? — ___', options: ['Az étteremben vagyok.', 'Az étterembe megyek.', 'Az étteremből jövök.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l10-meaning-12', prompt: 'Мини-диалог: — Honnan jössz? — ___', options: ['Az iskolában vagyok.', 'Az iskolába megyek.', 'Az iskolából jövök.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l10-meaning-13', prompt: 'Сначала человек внутри магазина, затем выходит.', options: ['A boltban van, majd kijön a boltból.', 'A boltba van, majd a boltban jön.', 'A boltból van, majd a boltba kijön.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l10-meaning-14', prompt: 'Мы меняем место встречи и идём внутрь кафе.', options: ['A kávézóban találkozunk, oda bemegyünk.', 'A kávézóba találkozunk, ott kijövünk.', 'A kávézóból találkozunk.'], correctIndex: 0 },
  ],
};

const L10_READING: LessonActivity = {
  kind: 'reading',
  id: 'l10-reading-dialogue',
  title: 'Чтение: несколько мест за одно утро',
  instructions: 'Проследи путь Анны: где она находится, куда входит, что делает внутри и откуда выходит.',
  passCount: 6,
  content: {
    type: 'prose',
    title: 'Egy délelőtt több helyen',
    paragraphs: [
      'Anna szerda reggel otthon van. Fél nyolckor a konyhában reggelizik, majd bemegy a szobába a táskájáért. Nyolc órakor kijön a házból, és először egy kis kávézóba megy. A kávézóban kér egy teát és egy szendvicset. Ott találkozik a barátjával, Dórával, aki egy könyvet ad neki. A kávézóban sok ember van, de van egy szabad hely is.',
      'Fél kilenckor Anna kijön a kávézóból, és bemegy egy boltba. A boltban almát és vizet vesz. Ezután az iskolába megy, mert tíz órakor magyarórája van. Az iskolában a második teremben tanul. Anna új szavakat ír és rövid magyar mondatokat olvas. Az óra után beszél a tanárával, majd délben kijön az épületből.',
      'Anna ezután a könyvtárba megy. A könyvtárban visszaad két régi könyvet, és keres egy könnyű magyar történetet. A barátja már ott várja. Együtt olvasnak és tanulnak. A könyvtár csendes, ezért ott könnyű együtt tanulni. Anna délután kettőkor jön ki a könyvtárból. Végül hazamegy, és a szobájában pihen.',
    ],
  },
  questions: [
    { id: 'l10-reading-q1', question: 'Где Анна завтракает?', options: ['на кухне', 'в кафе', 'в школе'], correctIndex: 0 },
    { id: 'l10-reading-q2', question: 'Куда она идёт после дома сначала?', options: ['в библиотеку', 'в кафе', 'в школу'], correctIndex: 1 },
    { id: 'l10-reading-q3', question: 'Что Анна делает в кафе?', options: ['просит чай и бутерброд', 'покупает яблоки', 'возвращает книги'], correctIndex: 0 },
    { id: 'l10-reading-q4', question: 'Откуда она выходит в половине девятого?', options: ['из кафе', 'из школы', 'из библиотеки'], correctIndex: 0 },
    { id: 'l10-reading-q5', question: 'Зачем Анна идёт в школу?', options: ['у неё урок венгерского', 'она встречает Дору', 'она покупает воду'], correctIndex: 0 },
    { id: 'l10-reading-q6', question: 'С кем Анна встречается в библиотеке?', options: ['с учителем', 'с другом', 'с продавцом'], correctIndex: 1 },
    { id: 'l10-reading-q7', question: 'Где заканчивается её путь?', options: ['дома, в комнате', 'в магазине', 'в кафе'], correctIndex: 0 },
  ],
};

const L10_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l10-listening-inner-locations',
  title: 'Аудирование: маршрут Марка',
  assetId: 'l10_listening_inner_locations',
  audioStatus: 'published',
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

const L10_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l10-roleplay-meeting-place', title: 'Ролевая игра: где встретимся?', partnerLabel: 'Barát', completionMessage: 'Egyeztettétek a találkozó helyét.', startTurnId: 'l10-rp-s1',
  turns: [
    { id: 'l10-rp-s1', speaker: 'waiter', prompt: 'Szia! Hol vagy most?', next: 'l10-rp-l1' },
    { id: 'l10-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови текущее место внутри здания.', model: 'Szia! A könyvtárban vagyok.', next: 'l10-rp-s2' },
    { id: 'l10-rp-s2', speaker: 'waiter', prompt: 'Hová mész innen?', next: 'l10-rp-l2' },
    { id: 'l10-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови следующую цель.', model: 'Innen egy kávézóba megyek.', next: 'l10-rp-s3' },
    { id: 'l10-rp-s3', speaker: 'waiter', prompt: 'Honnan jössz a kávézóba?', next: 'l10-rp-l3' },
    { id: 'l10-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови исходную точку.', model: 'A könyvtárból jövök.', next: 'l10-rp-s4' },
    { id: 'l10-rp-s4', speaker: 'waiter', prompt: 'Találkozzunk a kávézóban háromkor!', next: 'l10-rp-l4' },
    { id: 'l10-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди место и время.', model: 'Rendben, háromkor a kávézóban találkozunk.', next: 'l10-rp-s5' },
    { id: 'l10-rp-s5', speaker: 'waiter', prompt: 'Változás: a kávézó zárva van. Menjünk inkább az étterembe.', next: 'l10-rp-l5' },
    { id: 'l10-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Отреагируй на изменение места.', model: 'Jó, akkor bemegyek az étterembe.', next: 'l10-rp-s6' },
    { id: 'l10-rp-s6', speaker: 'waiter', prompt: 'Mikor érsz oda?', next: 'l10-rp-l6' },
    { id: 'l10-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови время прибытия.', model: 'Három óra előtt odaérek.', next: 'l10-rp-s7' },
    { id: 'l10-rp-s7', speaker: 'waiter', prompt: 'Hol találkozunk pontosan?', next: 'l10-rp-l7' },
    { id: 'l10-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Окончательно подтверди место.', model: 'Az étteremben találkozunk háromkor.', next: 'l10-rp-s8' },
    { id: 'l10-rp-s8', speaker: 'waiter', prompt: 'Rendben, várlak!', next: 'l10-rp-l8' },
    { id: 'l10-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Заверши разговор.', model: 'Köszönöm, hamarosan találkozunk!', next: 'l10-rp-s9' },
    { id: 'l10-rp-s9', speaker: 'waiter', prompt: 'Szia!' },
  ],
};

const L10_WRITING: LessonActivity = {
  kind: 'writing', id: 'l10-writing-morning-route', title: 'Письмо: вымышленное утро',
  prompt: 'Напиши 70–90 слов о вымышленном утре. Объясни, где начинаешь день, куда идёшь, что делаешь внутри, откуда выходишь, какова следующая цель и где заканчиваешь. Используй только внутреннее семейство L10.',
  modelAnswer: ['Reggel hétkor otthon, a konyhában reggelizem. Utána bemegyek a szobába a táskámért. Nyolckor kijövök a házból, és egy kávézóba megyek. A kávézóban teát iszom és találkozom Annával. Fél kilenckor kijövök a kávézóból, majd bemegyek az iskolába. Az iskolában magyarul tanulok. Délben kijövök az épületből, és a könyvtárba megyek. Ott könyvet olvasok. Délután a könyvtárból egyenesen hazamegyek, és végül a szobámban pihenek. A nap végén már nagyon fáradt vagyok, de elégedett.'],
  rubric: ['70–90 слов', 'начальная и конечная точки', 'несколько внутренних мест', 'корректные Hol? / Hová? / Honnan? формы', 'понятная последовательность'],
};

const L10_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори 1–1.5 минуты о местах дня: где находишься, куда входишь и откуда выходишь. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Назови несколько знакомых внутренних мест и свяжи их в короткий маршрут.',
  rubric: ['место', 'цель', 'исходная точка', 'понятная последовательность'],
};

const L10_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l10-exit-check',
  title: 'Проверка целей урока 10',
  checks: [
    { objectiveId: 'l10_distinguish-inner-cases', activityId: 'l10-cp-meaning', evidenceKind: 'grammar' },
    { objectiveId: 'l10_form-inessive', activityId: 'l10-cp-meaning', evidenceKind: 'grammar' },
    { objectiveId: 'l10_form-illative', activityId: 'l10-cp-meaning', evidenceKind: 'grammar' },
    { objectiveId: 'l10_form-elative', activityId: 'l10-cp-meaning', evidenceKind: 'grammar' },
    {
      objectiveId: 'l10_use-inner-cases',
      activityId: 'l10-reading-dialogue',
      evidenceKind: 'reading',
      evidenceComponents: [
        { activityId: 'l10-listening-inner-locations', evidenceKind: 'listening' },
        { activityId: 'l10-roleplay-meeting-place', evidenceKind: 'interaction' },
        { activityId: 'l10-writing-morning-route', evidenceKind: 'writing' },
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
      eyebrow: 'УРОК 10 · 7/11 · ЧТЕНИЕ',
      title: 'Egy délelőtt több helyen',
      subtitle: 'Несколько внутренних мест за одно утро',
      body: `
        <p>Прочитай связный маршрут Анны и следи за смыслом: где она находится, куда входит и откуда выходит.</p>
        <div class="note">Все продуктивные формы здесь относятся только к внутренней семье L10. Другие модели местных форм начинаются в следующих уроках.</div>
      `,
      activities: [L10_READING],
    },
    {
      id: 8,
      eyebrow: 'УРОК 10 · 8/11 · АУДИРОВАНИЕ',
      title: 'Márk útvonala',
      subtitle: 'Существующая синхронизированная запись',
      body: `
        <p>Прослушай существующую запись о маршруте Марка, ответь на вопросы и только после отправки проверь транскрипт.</p>
      `,
      activities: [L10_LISTENING],
    },
    {
      id: 9,
      eyebrow: 'УРОК 10 · 9/11 · ВЗАИМОДЕЙСТВИЕ',
      title: 'Hol találkozunk?',
      subtitle: 'Координация и смена места встречи',
      body: `
        <p>Договорись с другом о встрече, отреагируй на закрытое кафе и подтверди новое место. Ответы остаются самопрактикой с частичным свидетельством.</p>
      `,
      activities: [L10_ROLEPLAY],
    },
    {
      id: 10,
      eyebrow: 'УРОК 10 · 10/11 · ПИСЬМО И САМОПРАКТИКА',
      title: 'Egy kitalált délelőtt',
      subtitle: 'Связный маршрут 70–90 слов',
      body: `
        <p>Свяжи несколько внутренних мест в маршрут на 70–90 слов. После письма можно устно повторить похожий маршрут без микрофона, баллов и evidence.</p>
      `,
      activities: [L10_WRITING], optionalSpeaking: L10_SPEAKING,
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
