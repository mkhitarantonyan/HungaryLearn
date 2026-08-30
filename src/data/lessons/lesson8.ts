import type { Lesson, LessonActivity } from '../../types';

const SINGULAR_POSSESSIVES: LessonActivity = {
  kind: 'controlledPractice', id: 'l8-cp-singular-possessives', title: 'Контекстная практика: семья и принадлежность', passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l8-possessive-1', prompt: 'Кто такой testvér?', options: ['брат или сестра', 'родитель', 'супруг'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-2', prompt: 'Представь свою мать.', options: ['Ez az anyukám.', 'Ez az anyukád.', 'Ez az anyja.'], correctIndex: 0 },
    { kind: 'textInput', id: 'l8-possessive-3', prompt: 'ház → мой дом', accept: ['házam'] },
    { kind: 'textInput', id: 'l8-possessive-4', prompt: 'ház → твой дом', accept: ['házad'] },
    { kind: 'textInput', id: 'l8-possessive-5', prompt: 'ház → его/её дом', accept: ['háza'] },
    { kind: 'singleChoice', id: 'l8-possessive-6', prompt: 'У меня есть брат или сестра.', options: ['Van egy testvérem.', 'Nincs testvérem.', 'Ez Anna testvére.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-7', prompt: 'У меня нет брата или сестры.', options: ['Van egy testvérem.', 'Nincs testvérem.', 'A testvéred neve?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-possessive-8', prompt: 'Моя мать — учительница.', options: ['Anyám tanár.', 'Anyád tanár.', 'Anyja tanár.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-9', prompt: 'Брат/сестра собеседника живёт в Будапеште.', options: ['A testvérem Budapesten lakik.', 'A testvéred Budapesten lakik.', 'A testvére Budapest.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-possessive-10', prompt: 'Спроси имя брата или сестры.', options: ['Mi a testvéred neve?', 'Hol a testvérem?', 'Ki neve testvér?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-11', prompt: 'Спроси, где живут родители.', options: ['Hol laknak a szüleid?', 'Hány éves a szüleid?', 'Mi a szülők?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-12', prompt: 'Спроси возраст сына.', options: ['Hol lakik a fiad?', 'Hány éves a fiad?', 'Mi a fiad dolgozik?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-possessive-13', prompt: 'Чья это книга?', options: ['Ez a könyvem.', 'Ez Anna könyve.', 'Оба варианта выражают владельца.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l8-possessive-14', prompt: 'У Анны есть дочь; назови её.', options: ['Ő Anna lánya.', 'Ő Anna lányom.', 'Ő Anna lányod.'], correctIndex: 0 },
  ],
};

const FAMILY_READING: LessonActivity = {
  kind: 'reading', id: 'l8-reading-family-profile', title: 'Чтение: две соседские семьи',
  instructions: 'Прочитай описание и сравни две вымышленные семьи: отношения, возраст, работу, место и общие занятия.', passCount: 6,
  content: { type: 'prose', title: 'Két család egy házban', paragraphs: [
    'Budapesten, egy nagy házban két család lakik. A második emeleten lakik a Kovács család. Az apa neve Gábor, negyvenkét éves, és egy iskolában tanár. A felesége, Éva, negyvenéves és orvos. Két gyerekük van. A fiuk, Marci, tizennégy éves, a lányuk, Lili, tízéves. Marci szeret olvasni és focizni, Lili pedig gyakran rajzol és zenét hallgat. A család kutyájának neve Mázli.',
    'A harmadik emeleten Anna és a testvére, Péter lakik. Anna huszonöt éves és egy irodában dolgozik. Péter huszonkét éves egyetemista. A szüleik nem Budapesten laknak, hanem egy kis városban. Anna lakása kisebb, mint a Kovács család lakása, de világos és kényelmes. Péter kerékpárja az udvaron van.',
    'A két család szombaton gyakran együtt reggelizik az udvaron. Gábor kávét készít, Anna süteményt hoz, a gyerekek pedig Mázlival játszanak. A Kovács család nagyobb, Anna családja kisebb, de jó szomszédok és sok időt töltenek együtt.',
  ] },
  questions: [
    { id: 'l8-reading-q1', question: 'Сколько детей в семье Ковач?', options: ['один', 'два', 'три'], correctIndex: 1 },
    { id: 'l8-reading-q2', question: 'Кем Лили приходится Марци?', options: ['сестрой', 'матерью', 'женой'], correctIndex: 0 },
    { id: 'l8-reading-q3', question: 'Кем работает Ева?', options: ['учительницей', 'врачом', 'в офисе'], correctIndex: 1 },
    { id: 'l8-reading-q4', question: 'Сколько лет Петеру?', options: ['22', '25', '42'], correctIndex: 0 },
    { id: 'l8-reading-q5', question: 'Где живут родители Анны и Петера?', options: ['в Будапеште', 'в маленьком городе', 'в школе'], correctIndex: 1 },
    { id: 'l8-reading-q6', question: 'Что семьи часто делают вместе по субботам?', options: ['завтракают во дворе', 'работают в офисе', 'ездят в университет'], correctIndex: 0 },
    { id: 'l8-reading-q7', question: 'Какое различие названо в тексте?', options: ['семья Ковач больше', 'у Анны три ребёнка', 'обе семьи одинакового размера'], correctIndex: 0 },
  ],
};

const POSSESSIVE_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l8-listening-possessives', title: 'Аудирование: кто владелец?',
  assetId: 'l8_listening_possessives', audioStatus: 'published', passCount: 4,
  transcript: 'Az én nevem Anna. Anyám tanár, apám orvos. Péter a testvérem. Péter háza nagy, az én házam kicsi. A te családod nagy?',
  questions: [
    { id: 'l8-listening-q1', question: 'Чья мать — учительница?', options: ['Анны', 'Петера', 'слушателя'], correctIndex: 0 },
    { id: 'l8-listening-q2', question: 'Кто врач?', options: ['отец Анны', 'брат Анны', 'отец слушателя'], correctIndex: 0 },
    { id: 'l8-listening-q3', question: 'Чей дом большой?', options: ['Анны', 'Петера', 'слушателя'], correctIndex: 1 },
    { id: 'l8-listening-q4', question: 'О чьей семье спрашивает Анна?', options: ['о своей', 'о семье Петера', 'о семье слушателя'], correctIndex: 2 },
  ],
};


const FAMILY_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l8-roleplay-family-talk', title: 'Ролевая игра: знакомство и семья', partnerLabel: 'Új osztálytárs', completionMessage: 'Bemutattátok a családotokat.', startTurnId: 'l8-rp-s1',
  turns: [
    { id: 'l8-rp-s1', speaker: 'waiter', prompt: 'Szia! Van testvéred?', next: 'l8-rp-l1' },
    { id: 'l8-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь, есть ли у тебя брат или сестра.', model: 'Igen, van egy testvérem.', next: 'l8-rp-s2' },
    { id: 'l8-rp-s2', speaker: 'waiter', prompt: 'Mi a testvéred neve?', next: 'l8-rp-l2' },
    { id: 'l8-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови имя и возраст.', model: 'A testvérem neve Dóra, és húszéves.', next: 'l8-rp-s3' },
    { id: 'l8-rp-s3', speaker: 'waiter', prompt: 'Mit csinál Dóra?', next: 'l8-rp-l3' },
    { id: 'l8-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови занятие или работу.', model: 'Dóra egyetemista.', next: 'l8-rp-s4' },
    { id: 'l8-rp-s4', speaker: 'waiter', prompt: 'Hol lakik a testvéred?', next: 'l8-rp-l4' },
    { id: 'l8-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови место.', model: 'A testvérem Budapesten lakik.', next: 'l8-rp-s5' },
    { id: 'l8-rp-s5', speaker: 'waiter', prompt: 'És mit csinálnak a szüleid?', next: 'l8-rp-l5' },
    { id: 'l8-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Кратко расскажи о родителях.', model: 'Anyám tanár, apám pedig orvos.', next: 'l8-rp-s6' },
    { id: 'l8-rp-s6', speaker: 'waiter', prompt: 'Mit csináltok együtt?', next: 'l8-rp-l6' },
    { id: 'l8-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови совместное занятие.', model: 'Vasárnap együtt ebédelünk és sétálunk.', next: 'l8-rp-s7' },
    { id: 'l8-rp-s7', speaker: 'waiter', prompt: 'Érdekes család!', next: 'l8-rp-l7' },
    { id: 'l8-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Задай хотя бы один вопрос о семье собеседника.', model: 'És neked van testvéred?', next: 'l8-rp-s8' },
    { id: 'l8-rp-s8', speaker: 'waiter', prompt: 'Nincs testvérem, de nagy a családom.', next: 'l8-rp-l8' },
    { id: 'l8-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Отреагируй и заверши разговор.', model: 'Értem. Köszönöm a beszélgetést!', next: 'l8-rp-s9' },
    { id: 'l8-rp-s9', speaker: 'waiter', prompt: 'Én is köszönöm. Szia!' },
  ],
};

const FAMILY_WRITING: LessonActivity = {
  kind: 'writing', id: 'l8-writing-family-description', title: 'Письмо: моя семья',
  prompt: 'Напиши 60–80 слов о вымышленной семье. Представь 3–5 человек, их отношения, возраст или работу, место жизни/работы/учёбы, одну принадлежность и одно совместное занятие.',
  modelAnswer: ['A Szabó családban öten vannak. Az apa neve Tamás, negyvenéves és szakács. Az anya, Júlia, harmincnyolc éves és tanár. Két lányuk és egy fiuk van. A nagyobb lányuk Budapesten tanul, a fiú még iskolás. A kisebb lányuk nyolcéves. A család háza egy kis városban van, és van egy kutyájuk is. Vasárnap együtt ebédelnek, délután pedig gyakran sétálnak. Mindannyian nagyon kedvesek.'],
  rubric: ['60–80 слов', '3–5 членов семьи', 'отношения и возраст или работа', 'место и одна принадлежность', 'одно совместное занятие'],
};

const FAMILY_SPEAKING = {
  title: 'Говорение: коротко о семье',
  instructions: 'Говори 1–1.5 минуты о вымышленной семье: отношения, возраст или работа и место. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Представь 3–5 человек и объясни, кто кому приходится родственником.',
  rubric: ['отношения', 'возраст или работа', 'место', 'понятное описание'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l8-exit-check', title: 'Проверка целей урока 8', checks: [
    { objectiveId: 'l8_name-family', activityId: 'l8-cp-singular-possessives', evidenceKind: 'grammar' },
    { objectiveId: 'l8_form-possessive', activityId: 'l8-cp-singular-possessives', evidenceKind: 'grammar' },
    { objectiveId: 'l8_use-possessive', activityId: 'l8-cp-singular-possessives', evidenceKind: 'grammar' },
    { objectiveId: 'l8_distinguish-possessors', activityId: 'l8-listening-possessives', evidenceKind: 'listening' },
    { objectiveId: 'l8_describe-family', activityId: 'l8-writing-family-description', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l8-roleplay-family-talk', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_8: Lesson = {
  id: 8,
  number: 8,
  level: 'A1',
  title: 'Урок 8 · A család & Birtokos ragozás',
  subtitle: 'Семья и притяжательные формы: én, te, ő',
  description: 'Семья и принадлежность в раннем A1: формы одного обладаемого предмета для én/te/ő, понятное чтение, разговор и связное описание.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 8 · 1/11 · СЕМЬЯ',
      title: 'A család',
      subtitle: 'Базовая лексика семьи',
      body: `
        <p><b>apa</b> — отец; <b>anya</b> — мать; <b>fiú</b> — сын / мальчик; <b>lány</b> — дочь / девочка.</p>
        <p><b>testvér</b> — брат / сестра; sibling без указания пола. Для уточнения: <b>fiútestvér</b>, <b>lánytestvér</b>.</p>
        <p><b>nagymama</b> — бабушка; <b>nagypapa</b> — дедушка; <b>feleség</b> — жена; <b>férj</b> — муж; <b>gyerek</b> — ребёнок.</p>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 8 · 2/11 · МОДЕЛЬ',
      title: 'A birtokos személyrag',
      subtitle: 'Владелец отмечается на существительном',
      body: `
        <p>Венгерский показывает владельца прежде всего суффиксом на существительном: <b>ház → házam / házad / háza</b>.</p>
        <p>Обычно достаточно <b>házam</b>. Явные местоимения служат главным образом контрасту: <b>az én házam</b>, <b>a te házad</b>, <b>az ő háza</b>.</p>
        <div class=note>Не добавляй én, te или ő автоматически: суффикс уже сообщает владельца.</div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 8 · 3/11 · ФОРМЫ',
      title: 'Egy birtok: én, te, ő',
      subtitle: 'Один предмет и три владельца',
      body: `
        <table class=conj><tr><th>Владелец</th><th>ház</th><th>Значение</th></tr><tr><td>én</td><td>házam</td><td>мой дом</td></tr><tr><td>te</td><td>házad</td><td>твой дом</td></tr><tr><td>ő</td><td>háza</td><td>его/её дом</td></tr></table>
        <p>У слов на согласный бывают разные соединительные гласные: <b>házam/házad</b>, но <b>testvérem/testvéred</b>. Учи их как проверенные модели.</p>
        <div class=note>Нельзя вывести все формы из одного механического правила.</div>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 8 · 4/11 · СЕМЕЙНЫЕ ФОРМЫ',
      title: 'Anya, apa, testvér',
      subtitle: 'Частые проверенные модели',
      body: `
        <table class=conj><tr><th>Владелец</th><th>anya</th><th>apa</th><th>testvér</th></tr><tr><td>én</td><td>anyám</td><td>apám</td><td>testvérem</td></tr><tr><td>te</td><td>anyád</td><td>apád</td><td>testvéred</td></tr><tr><td>ő</td><td>anyja</td><td>apja</td><td>testvére</td></tr></table>
        <p>Конечные a/e перед многими окончаниями удлиняются: <b>apa → apám/apád</b>, <b>anya → anyám/anyád</b>.</p>
        <p>В 3-м лице встречаются <b>-a/-e</b> и <b>-ja/-je</b>: <b>háza, testvére, anyja, apja</b>. На A1 запоминай эти частые формы.</p>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 8 · 5/11 · КОНТЕКСТНАЯ ПРАКТИКА',
      title: 'Kié?',
      subtitle: 'Семья, владелец, van/nincs и бытовые вопросы',
      body: `
        <p><b>anyám</b> указывает на én, <b>anyád</b> — на te, <b>anyja</b> — на ő.</p>
        <p>Контраст: <b>Az én házam nagy, a te házad kicsi.</b> — Мой дом большой, а твой маленький.</p>
      `,
      activities: [SINGULAR_POSSESSIVES],
    },
    {
      id: 6,
      eyebrow: 'УРОК 8 · 6/11 · ЧТЕНИЕ',
      title: 'Két család egy házban',
      subtitle: 'Две соседские семьи',
      body: '<p>Определи родственников и владельцев по смыслу, а не просто по окончаниям.</p>',
      activities: [FAMILY_READING],
    },
    {
      id: 7,
      eyebrow: 'УРОК 8 · 7/11 · АУДИРОВАНИЕ',
      title: 'Hallásértés',
      subtitle: 'Существующая специальная запись',
      body: `
        <p>Прослушай описание семьи и определи родственников и владельцев. Asset, transcript и вопросы сохранены.</p>
      `,
      activities: [POSSESSIVE_LISTENING],
    },
    {
      id: 8,
      eyebrow: 'УРОК 8 · 8/11 · ВЗАИМОДЕЙСТВИЕ',
      title: 'Beszélgetés a családról',
      subtitle: 'Разговор с новым знакомым',
      body: '<p>Ответь о вымышленной семье и задай собеседнику встречный вопрос. RolePlay остаётся PARTIAL.</p>',
      activities: [FAMILY_ROLEPLAY],
    },
    {
      id: 9,
      eyebrow: 'УРОК 8 · 9/11 · ПИСЬМО',
      title: 'Írás: egy kitalált család',
      subtitle: 'Связное описание 60–80 слов',
      body: '<p>Опиши отношения, возраст или работу, место, принадлежность и совместное занятие. Writing остаётся PARTIAL.</p>',
      activities: [FAMILY_WRITING],
    },
    {
      id: 10,
      eyebrow: 'УРОК 8 · 10/11 · УСТНАЯ САМОПРАКТИКА',
      title: 'Beszéd: egy család',
      subtitle: 'Только текстовая инструкция',
      body: '<p>Необязательная практика не использует микрофон, не оценивается и не создаёт evidence.</p>',
      optionalSpeaking: FAMILY_SPEAKING,
    },
    {
      id: 11,
      eyebrow: 'УРОК 8 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Проверь пять целей',
      body: '<ul class=tick><li>Продуктивная тема: один предмет и владельцы én/te/ő.</li><li>Владелец отмечается на существительном: házam, házad, háza.</li><li>Семейные формы: anyám/anyád/anyja, apám/apád/apja, testvérem/testvéred/testvére.</li><li>Множественное обладаемое <b>házaim</b> остаётся только необязательным распознаванием и не входит в scoring.</li><li>Controlled Practice, Reading и Listening могут быть DIRECT; Writing и RolePlay остаются PARTIAL.</li></ul>',
      activities: [EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l8_v1', hu: 'apa', ru: 'отец', category: 'Семья' },
    { id: 'l8_v2', hu: 'anya', ru: 'мать', category: 'Семья' },
    { id: 'l8_v3', hu: 'fiú', ru: 'сын / мальчик', category: 'Семья' },
    { id: 'l8_v4', hu: 'lány', ru: 'дочь / девочка', category: 'Семья' },
    { id: 'l8_v5', hu: 'testvér', ru: 'брат / сестра; sibling', category: 'Семья' },
    { id: 'l8_v6', hu: 'nagymama', ru: 'бабушка', category: 'Семья' },
    { id: 'l8_v7', hu: 'nagypapa', ru: 'дедушка', category: 'Семья' },
    { id: 'l8_v8', hu: 'feleség', ru: 'жена', category: 'Семья' },
    { id: 'l8_v9', hu: 'férj', ru: 'муж', category: 'Семья' },
    { id: 'l8_v10', hu: 'gyerek', ru: 'ребёнок', category: 'Семья' },
  ],
  quiz: [
    { id: 801, question: 'Как сказать «мой дом»?', options: ['házam', 'házad', 'háza', 'házem'], correctIndex: 0, explanation: 'Для én используется форма házam. Явное én обычно не требуется.' },
    { id: 802, question: 'Как сказать «твой отец»?', options: ['apám', 'apád', 'apja', 'apa'], correctIndex: 1, explanation: 'Форма для te — apád: apa → apád. Конечная a удлиняется: a → á.' },
    { id: 803, question: 'Как сказать «его/её мать»?', options: ['anyám', 'anyád', 'anyja', 'anya'], correctIndex: 2, explanation: 'Форма 3-го лица единственного числа anyja означает «его/её мать».' },
    { id: 804, question: 'Как подчеркнуть: именно МОЙ дом?', options: ['házam', 'az én házam', 'én házam', 'az én háza'], correctIndex: 1, explanation: 'Для контраста добавляется az én: az én házam. Обычно достаточно házam; суффикс сохраняется.' },
    { id: 805, question: 'Какая форма означает «твой брат / твоя сестра»?', options: ['testvérem', 'testvéred', 'testvére', 'testvér'], correctIndex: 1, explanation: 'Для te используется testvéred.' },
    { id: 806, question: 'Какое слово означает «брат / сестра» без указания пола?', options: ['testvér', 'fiú', 'lány', 'gyerek'], correctIndex: 0, explanation: 'Testvér — брат или сестра; само слово не указывает пол.' },
  ],
  objectives: [
    { id: 'l8_name-family', text: 'Называть членов семьи по-венгерски.', skills: ['speaking', 'reading', 'writing'] },
    { id: 'l8_form-possessive', text: 'Образовывать притяжательные формы 1-го, 2-го и 3-го лица единственного числа (házam, házad, háza).', skills: ['grammar', 'writing'] },
    { id: 'l8_use-possessive', text: 'Употреблять притяжательные суффиксы «мой», «твой», «его» в описании семьи.', skills: ['speaking', 'writing'] },
    { id: 'l8_distinguish-possessors', text: 'Различать на слух и в тексте, к какому лицу относится притяжательная форма.', skills: ['listening', 'reading', 'grammar'] },
    { id: 'l8_describe-family', text: 'Составлять связное описание своей семьи с притяжательными формами.', skills: ['speaking', 'writing'] },
  ],
};
