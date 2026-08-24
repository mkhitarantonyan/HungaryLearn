import { Lesson, LessonActivity } from '../../types';

const L6_READING_A0_PROFILE: LessonActivity = {
  kind: 'reading',
  id: 'l6-reading-a0-profile',
  title: 'Чтение: A0-профиль Анны',
  instructions: 'Прочитай короткий профиль и ответь на вопросы по содержанию.',
  content: {
    type: 'prose',
    title: 'Anna profilja',
    paragraphs: [
      'A nevem Anna. Magyar vagyok. Budapesten élek.',
      'Hétfőn nyolckor dolgozom.',
      'Kedden öt órakor magyarul tanulok.',
      'Szerdán háromkor olvasok.',
    ],
  },
  passCount: 4,
  questions: [
    { id: 'l6-reading-q1', question: 'Как зовут говорящего?', options: ['Péter', 'Anna', 'Mária'], correctIndex: 1, explanation: 'В тексте сказано: A nevem Anna.' },
    { id: 'l6-reading-q2', question: 'Кто говорящий по национальности?', options: ['magyar', 'orosz', 'örmény'], correctIndex: 0, explanation: 'Magyar vagyok — говорящий венгр/венгерка.' },
    { id: 'l6-reading-q3', question: 'В какой день говорящий работает?', options: ['kedden', 'szerdán', 'hétfőn'], correctIndex: 2, explanation: 'Hétfőn nyolckor dolgozom — работа в понедельник.' },
    { id: 'l6-reading-q4', question: 'Во сколько говорящий занимается венгерским?', options: ['nyolckor', 'öt órakor', 'háromkor'], correctIndex: 1, explanation: 'Kedden öt órakor magyarul tanulok — учёба в пять часов.' },
    { id: 'l6-reading-q5', question: 'Что говорящий делает в среду?', options: ['dolgozik', 'tanul', 'olvas'], correctIndex: 2, explanation: 'Szerdán háromkor olvasok — чтение в среду.' },
  ],
};

const L6_CP_DECODING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l6-cp-decoding',
  title: 'Станция 1 · Декодирование: звук и чтение',
  passCount: 8,
  exercises: [
    { kind: 'singleChoice', id: 'l6-decode-1', prompt: 'В слове szép буквосочетание sz обозначает…', options: ['/s/', '/ʃ/', '/ʒ/'], correctIndex: 0, explanation: 'sz обозначает /s/: szép — /seːp/.' },
    { kind: 'singleChoice', id: 'l6-decode-2', prompt: 'В слове sok начальная s обозначает…', options: ['/s/', '/ʃ/', '/t͡ʃ/'], correctIndex: 1, explanation: 's обозначает /ʃ/: sok — /ʃok/.' },
    { kind: 'singleChoice', id: 'l6-decode-3', prompt: 'В слове gyár буквосочетание gy обозначает…', options: ['/ɟ/', '/g/', '/c/'], correctIndex: 0, explanation: 'gy обозначает /ɟ/.' },
    { kind: 'singleChoice', id: 'l6-decode-4', prompt: 'В слове kutya буквосочетание ty обозначает…', options: ['/tʲ/', '/c/', '/ɲ/'], correctIndex: 1, explanation: 'ty обозначает /c/: kutya — /kucɒ/.' },
    { kind: 'singleChoice', id: 'l6-decode-5', prompt: 'В слове nyár буквосочетание ny обозначает…', options: ['/nʲ/', '/ŋ/', '/ɲ/'], correctIndex: 2, explanation: 'ny обозначает /ɲ/: nyár — /ɲaːr/.' },
    { kind: 'singleChoice', id: 'l6-decode-6', prompt: 'Как произносится ly в слове hely в современном стандарте?', options: ['/lʲ/', '/j/', '/ʎ/'], correctIndex: 1, explanation: 'j и ly передают один звук /j/: hely — /hɛj/.' },
    { kind: 'singleChoice', id: 'l6-decode-7', prompt: 'Выбери правильное написание слова /jaːteːk/ (игра).', options: ['játék', 'játik', 'játok'], correctIndex: 0, explanation: 'Правильно: játék (j, á, t, é, k).' },
    { kind: 'singleChoice', id: 'l6-decode-8', prompt: 'В изолированном слове magyar основное ударение падает на…', options: ['второй слог', 'первый слог', 'последний слог'], correctIndex: 1, explanation: 'Основное лексическое ударение падает на первый слог: magyar.' },
    { kind: 'singleChoice', id: 'l6-decode-9', prompt: 'Выбери слово с долгим гласным ú (как в út).', options: ['út', 'ut', 'üt'], correctIndex: 0, explanation: 'út — «дорога», с долгим ú.' },
    { kind: 'singleChoice', id: 'l6-decode-10', prompt: 'В слове tűz гласная ű — это…', options: ['краткий ü', 'долгий ű', 'звук /i/'], correctIndex: 1, explanation: 'ű — долгий вариант ü: tűz — /tyːz/.' },
  ],
};

const L6_CP_A0_FUNCTIONS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l6-cp-a0-functions',
  title: 'Станция 2 · Функциональный A0',
  passCount: 5,
  exercises: [
    { kind: 'singleChoice', id: 'l6-function-1', prompt: 'Неофициальное приветствие для знакомого ровесника.', options: ['Jó napot!', 'Szia!', 'Viszlát!'], correctIndex: 1, explanation: 'Szia — неофициальное приветствие и прощание.' },
    { kind: 'singleChoice', id: 'l6-function-2', prompt: 'Официальное приветствие для незнакомого взрослого.', options: ['Jó napot!', 'Szia!', 'Szevasz!'], correctIndex: 0, explanation: 'Jó napot — вежливое официальное приветствие.' },
    { kind: 'singleChoice', id: 'l6-function-3', prompt: 'Какая формула представляет имя по модели «A nevem…»?', options: ['Anna vagyok van.', 'A nevem Anna.', 'Én Anna vagy.'], correctIndex: 1, explanation: 'A nevem Anna — «Меня зовут Анна».' },
    { kind: 'singleChoice', id: 'l6-function-4', prompt: 'Какая форма lenni сочетается с местоимением mi?', options: ['vagyunk', 'vagy', 'vagytok'], correctIndex: 0, explanation: 'mi vagyunk — «мы есть».' },
    { kind: 'singleChoice', id: 'l6-function-5', prompt: 'Как сказать «я студент»?', options: ['Diák van.', 'Diák vagyunk.', 'Diák vagyok.'], correctIndex: 2, explanation: 'Diák vagyok — «я студент».' },
    { kind: 'singleChoice', id: 'l6-function-6', prompt: 'Подходящий ответ на вопрос «Hogy vagy?»', options: ['Péter vagyok.', 'Jól vagyok, köszönöm.', 'Budapesten élek.'], correctIndex: 1, explanation: 'Jól vagyok, köszönöm — «Хорошо, спасибо».' },
  ],
};

const L6_CP_PLURAL_ARTICLES: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l6-cp-plural-articles',
  title: 'Станция 3 · Множественное число и артикли',
  passCount: 8,
  exercises: [
    { kind: 'singleChoice', id: 'l6-plural-article-1', prompt: '___ ablak (окно)', options: ['a', 'az'], correctIndex: 1, explanation: 'ablak начинается с гласного → az ablak.' },
    { kind: 'singleChoice', id: 'l6-plural-article-2', prompt: 'Речь о конкретной, уже известной книге.', options: ['a könyv', 'egy könyv'], correctIndex: 0, explanation: 'Конкретный известный предмет → a könyv.' },
    { kind: 'singleChoice', id: 'l6-plural-article-3', prompt: 'В комнате есть один / какой-то стол.', options: ['az asztal', 'egy asztal'], correctIndex: 1, explanation: 'Один или пока не определённый предмет → egy asztal.' },
    { kind: 'textInput', id: 'l6-plural-4', prompt: 'alma → множественное число', accept: ['almák'], explanation: 'a → á перед -k: almák.' },
    { kind: 'textInput', id: 'l6-plural-5', prompt: 'kert → множественное число', accept: ['kertek'], explanation: 'kert + -ek → kertek.' },
    { kind: 'textInput', id: 'l6-plural-6', prompt: 'ház → множественное число', accept: ['házak'], explanation: 'Частотная форма -ak: házak.' },
    { kind: 'textInput', id: 'l6-plural-7', prompt: 'asztal → множественное число', accept: ['asztalok'], explanation: 'asztal + -ok → asztalok.' },
    { kind: 'singleChoice', id: 'l6-plural-article-8', prompt: 'két ___ (две книги) — выбери правильную форму', options: ['könyv', 'könyvek'], correctIndex: 0, explanation: 'После числа существительное в единственном числе: két könyv.' },
    { kind: 'textInput', id: 'l6-plural-9', prompt: 'kutya → множественное число', accept: ['kutyák'], explanation: 'a → á: kutyák.' },
    { kind: 'singleChoice', id: 'l6-plural-article-10', prompt: '___ óra (час / часы)', options: ['a', 'az'], correctIndex: 1, explanation: 'óra начинается с гласного → az óra.' },
  ],
};

const L6_CP_PRESENT_VERBS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l6-cp-present-verbs',
  title: 'Станция 4 · Глаголы в настоящем времени',
  passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l6-present-1', prompt: 'én + tanul → ?', accept: ['tanulok'], explanation: 'tanul + -ok → tanulok.' },
    { kind: 'textInput', id: 'l6-present-2', prompt: 'mi + beszél → ?', accept: ['beszélünk'], explanation: 'Передние гласные: beszél + -ünk → beszélünk.' },
    { kind: 'singleChoice', id: 'l6-present-3', prompt: 'Какая форма верна для «они читают»?', options: ['olvasok', 'olvasnak', 'olvasol'], correctIndex: 1, explanation: 'ők olvasnak.' },
    { kind: 'singleChoice', id: 'l6-present-4', prompt: 'Сделай отрицательным: Tanulok.', options: ['Nem tanulok.', 'Tanulok nem.', 'Nincs tanulok.'], correctIndex: 0, explanation: 'nem ставится перед глаголом: Nem tanulok.' },
    { kind: 'textInput', id: 'l6-present-5', prompt: 'ők + dolgozik → ?', accept: ['dolgoznak'], explanation: 'Форма ők от dolgozik: dolgoznak.' },
    { kind: 'singleChoice', id: 'l6-present-6', prompt: 'Выбери форму: «Они пишут».', options: ['írok', 'írnak', 'írsz'], correctIndex: 1, explanation: 'ők írnak.' },
    { kind: 'textInput', id: 'l6-present-7', prompt: 'Mi diákok ___. (lenni)', accept: ['vagyunk'], explanation: 'mi vagyunk.' },
    { kind: 'singleChoice', id: 'l6-present-8', prompt: 'Какая форма соответствует «ti» глагола tanul?', options: ['tanulnak', 'tanultok', 'tanulunk'], correctIndex: 1, explanation: 'ti tanultok.' },
    { kind: 'textInput', id: 'l6-present-9', prompt: 'te + olvas → ?', accept: ['olvasol'], explanation: 'Основа на s: -ol → olvasol.' },
    { kind: 'singleChoice', id: 'l6-present-10', prompt: 'Ő minden nap ___. (dolgozik)', options: ['dolgozom', 'dolgozik', 'dolgozol'], correctIndex: 1, explanation: 'ő dolgozik.' },
  ],
};

const L6_LISTENING_A0_REVIEW: LessonActivity = {
  kind: 'listening',
  id: 'l6-listening-a0-review',
  title: 'Аудирование: знакомство и расписание',
  assetId: 'l6_listening_a0_review',
  audioStatus: 'published',
  transcript: 'A: Szia! A nevem Anna. Hogy hívnak?\nB: Szia! Péter vagyok.\nA: Hogy vagy?\nB: Jól vagyok, köszönöm.\nA: Mikor tanulsz magyarul?\nB: Kedden öt órakor tanulok. Csütörtökön nyolckor dolgozom. Szombaton háromkor olvasok.\nA: Köszönöm. Szia!\nB: Szia!',
  passCount: 4,
  questions: [
    { id: 'l6-listen-q1', question: 'О чём этот короткий разговор?', options: ['покупки в магазине', 'знакомство и расписание', 'погода'], correctIndex: 1, explanation: 'Собеседники знакомятся и обсуждают расписание.' },
    { id: 'l6-listen-q2', question: 'Как зовут второго собеседника?', options: ['Péter', 'Anna', 'Mária'], correctIndex: 0, explanation: 'Второй собеседник отвечает: Péter vagyok.' },
    { id: 'l6-listen-q3', question: 'В какой день собеседник занимается венгерским?', options: ['csütörtökön', 'kedden', 'szombaton'], correctIndex: 1, explanation: 'Kedden öt órakor tanulok — учёба во вторник.' },
    { id: 'l6-listen-q4', question: 'Во сколько собеседник занимается венгерским?', options: ['nyolckor', 'öt órakor', 'háromkor'], correctIndex: 1, explanation: 'Öt órakor — в пять часов.' },
    { id: 'l6-listen-q5', question: 'Что собеседник делает в субботу?', options: ['dolgozik', 'tanul', 'olvas'], correctIndex: 2, explanation: 'Szombaton háromkor olvasok — чтение в субботу.' },
  ],
};

const L6_RECORD_PRONUNCIATION_REVIEW: LessonActivity = {
  kind: 'recording',
  id: 'l6-record-pronunciation-review',
  title: 'Запись: повторение произношения',
  instructions: 'Прочитай шесть слов, повторяя изученные звуки, затем сравни запись с моделями.',
  targetText: 'szép, sok, magyar, kutya, nyár, hely',
  targetPhonetic: '/seːp/ · /ʃok/ · /mɒɟɒr/ · /kucɒ/ · /ɲaːr/ · /hɛj/',
  targetTranslation: 'красивый · много · венгр · собака · лето · место',
  rubric: [
    'Произнесены все шесть слов.',
    's (sok) и sz (szép) различаются.',
    'gy /ɟ/, ty /c/, ny /ɲ/ различимы в magyar, kutya, nyár.',
    'j/ly реализуется как /j/ в hely.',
    'Долгие гласные (szép, nyár) сохраняются.',
    'Основное словесное ударение начинается на первом слоге.',
  ],
};

const L6_ROLEPLAY_SCHEDULE: LessonActivity = {
  kind: 'rolePlay',
  id: 'l6-roleplay-schedule',
  title: 'Говорение: расписание в мини-диалоге',
  partnerLabel: 'Partner · Собеседник',
  completionMessage: 'Оба ответа о расписании записаны. Прослушай их и проверь, понятны ли день и время.',
  startTurnId: 'l6-rp-start',
  turns: [
    { id: 'l6-rp-start', speaker: 'stage', stageLabel: 'Короткий диалог о расписании', next: 'l6-rp-q1' },
    { id: 'l6-rp-q1', speaker: 'waiter', prompt: 'Mikor tanulsz magyarul?', next: 'l6-rp-a1' },
    { id: 'l6-rp-a1', speaker: 'learner', responseMode: 'recorded', prompt: 'Ответь, назвав день и время учёбы, затем сравни с моделью.', model: 'Kedden öt órakor tanulok.', next: 'l6-rp-q2' },
    { id: 'l6-rp-q2', speaker: 'waiter', prompt: 'Mikor dolgozol?', next: 'l6-rp-a2' },
    { id: 'l6-rp-a2', speaker: 'learner', responseMode: 'recorded', prompt: 'Ответь, назвав день и время работы, затем сравни с моделью.', model: 'Csütörtökön nyolckor dolgozom.', next: 'l6-rp-end' },
    { id: 'l6-rp-end', speaker: 'stage', stageLabel: 'Диалог завершён' },
  ],
};

const L6_WRITING_PROFILE: LessonActivity = {
  kind: 'writing',
  id: 'l6-writing-profile',
  title: 'Письмо: мой A0-профиль',
  prompt: 'Напиши 4–6 коротких предложений о себе. Обязательно укажи четыре факта: 1) имя (A nevem…), 2) национальность или происхождение (… vagyok), 3) одно текущее действие (учёба/работа), 4) один день и время (…-n … órakor …). Используй только структуры уроков 1–5; формы страны (например, Örményországból) считай готовыми выражениями и не оценивай их падежи.',
  modelAnswer: ['A nevem Anna.', 'Magyar vagyok.', 'Magyarul tanulok.', 'Hétfőn nyolckor dolgozom.'],
  rubric: [
    'Указано имя (A nevem… или … vagyok).',
    'Указана национальность или происхождение.',
    'Есть одно текущее действие в настоящем времени.',
    'Есть один день и время с формой -n … órakor.',
    'Использованы только структуры уроков 1–5 без новой грамматики A1.',
  ],
};

const L6_RECORD_PROFILE: LessonActivity = {
  kind: 'recording',
  id: 'l6-record-profile',
  title: 'Запись: рассказ о себе',
  instructions: 'Сначала заполни письменный профиль, затем расскажи те же сведения о себе короткими фразами и прослушай запись.',
  targetText: 'A nevem … … vagyok. Magyarul tanulok / dolgozom. …-n … órakor …',
  targetTranslation: 'Меня зовут … Я … Я учу венгерский / работаю. В … в … часов …',
  rubric: [
    'Названо имя.',
    'Названа национальность или происхождение.',
    'Названо одно текущее действие.',
    'Назван один день и время.',
    'Речь понятна при повторном прослушивании.',
  ],
};

const L6_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l6-exit-check',
  title: 'Проверка целей урока 6',
  checks: [
    { objectiveId: 'l6_review-alphabet', activityId: 'l6-cp-decoding', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l6-record-pronunciation-review', evidenceKind: 'pronunciation' }] },
    { objectiveId: 'l6_review-verb-conj', activityId: 'l6-cp-present-verbs', evidenceKind: 'grammar' },
    { objectiveId: 'l6_review-numbers', activityId: 'l6-listening-a0-review', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l6-roleplay-schedule', evidenceKind: 'interaction' }] },
    { objectiveId: 'l6_review-plural', activityId: 'l6-cp-plural-articles', evidenceKind: 'grammar' },
    { objectiveId: 'l6_self-assess', activityId: 'l6-writing-profile', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l6-record-profile', evidenceKind: 'speaking' }] },
  ],
};

export const LESSON_6: Lesson = {
  id: 6,
  number: 6,
  level: 'A0',
  title: 'Урок 6 · A0 összefoglaló',
  subtitle: 'Повторение и закрепление уровня A0',
  description: 'Спокойное повторение A0: чтение, четыре короткие станции, мини-аудирование, личный профиль и итоговая самопроверка. Без новой грамматики A1.',
  slidesCount: 10,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 6 · 1/10 · ОБЗОР A0',
      title: 'A0 összefoglaló',
      subtitle: 'Повторение звуков, форм, чисел и представления себя',
      body: `
        <p>Это итоговое повторение уровня A0: объединяем чтение, произношение, формы, числа и представление о себе.</p>
        <div class="note">Это низкострессовое повторение, а не экзамен и не сертификация. Новой грамматики A1 здесь нет — только материал уроков 1–5.</div>
      `,
      activities: [L6_READING_A0_PROFILE],
    },
    {
      id: 2,
      eyebrow: 'УРОК 6 · 2/10 · СТАНЦИЯ 1 · ДЕКОДИРОВАНИЕ',
      title: 'Kiejtés és olvasás',
      subtitle: 'Звуки и чтение из урока 1',
      body: `
        <p>Повтори: <b>s = /ʃ/</b>, <b>sz = /s/</b>, <b>gy = /ɟ/</b>, <b>ty = /c/</b>, <b>ny = /ɲ/</b>, <b>j = ly = /j/</b>. Долгие гласные значимы, а основное ударение падает на первый слог.</p>
      `,
      activities: [L6_CP_DECODING, L6_RECORD_PRONUNCIATION_REVIEW],
    },
    {
      id: 3,
      eyebrow: 'УРОК 6 · 3/10 · СТАНЦИЯ 2 · ФУНКЦИИ A0',
      title: 'Funkcionális A0',
      subtitle: 'Приветствия, lenni и представление из урока 2',
      body: `
        <p>Повтори: <b>Szia!</b> / <b>Jó napot!</b>, местоимения, <b>lenni</b> (vagyok, vagy, van…), <b>A nevem…</b> и <b>Hogy vagy?</b></p>
      `,
      activities: [L6_CP_A0_FUNCTIONS],
    },
    {
      id: 4,
      eyebrow: 'УРОК 6 · 4/10 · СТАНЦИЯ 3 · МНОЖЕСТВЕННОЕ ЧИСЛО',
      title: 'Többes szám és névelők',
      subtitle: 'Артикли a/az/egy и множественное число из урока 3',
      body: `
        <p>Повтори: <b>a</b> перед согласным, <b>az</b> перед гласным, <b>egy</b> для «один / какой-то»; множественное число <b>-k</b>; после числа существительное остаётся в единственном числе.</p>
      `,
      activities: [L6_CP_PLURAL_ARTICLES],
    },
    {
      id: 5,
      eyebrow: 'УРОК 6 · 5/10 · СТАНЦИЯ 4 · ГЛАГОЛЫ',
      title: 'Jelen idő',
      subtitle: 'Спряжение в настоящем времени из урока 4',
      body: `
        <p>Повтори неопределённое спряжение: <b>-ok/-ek/-ök, -sz, —, -unk/-ünk, -tok/-tek/-tök, -nak/-nek</b> и отрицание <b>nem</b>.</p>
      `,
      activities: [L6_CP_PRESENT_VERBS],
    },
    {
      id: 6,
      eyebrow: 'УРОК 6 · 6/10 · МИНИ-АУДИРОВАНИЕ',
      title: 'Hallás utáni ismétlés',
      subtitle: 'Короткое знакомство и расписание',
      body: `
        <p>Прослушай мини-диалог и ответь на пять вопросов, затем выполни ролевой диалог о расписании.</p>
        <div class="note">Аудирование станет доступно после публикации отдельной записи. Текст диалога можно использовать для подготовки.</div>
      `,
      activities: [L6_LISTENING_A0_REVIEW, L6_ROLEPLAY_SCHEDULE],
    },
    {
      id: 7,
      eyebrow: 'УРОК 6 · 7/10 · ЛИЧНЫЙ ПРОФИЛЬ',
      title: 'Az én profilom',
      subtitle: 'Письменный и устный рассказ о себе',
      body: `
        <p>Сначала напиши короткий профиль, затем запиши те же данные устно. Используй только структуры уроков 1–5.</p>
      `,
      activities: [L6_WRITING_PROFILE, L6_RECORD_PROFILE],
    },
    {
      id: 8,
      eyebrow: 'УРОК 6 · 8/10 · РЕФЛЕКСИЯ',
      title: 'Mit mutat az ExitCheck?',
      subtitle: 'Что уже получается и что повторить',
      body: `
        <p>Посмотри на результаты и отметь, что уже можно проверить прямо сейчас:</p>
        <ul class="tick">
          <li><b>Проверено в уроке</b> — спряжение, множественное число, артикли и чтение слов.</li>
          <li><b>Для самопроверки</b> — произношение, письмо и говорение; их полезно переслушать или показать преподавателю.</li>
          <li><b>MISSING</b> — например, ещё не опубликованное аудио для аудирования.</li>
        </ul>
        <p>Ответь себе на три вопроса: какие две области ощущаются сильными? какую одну область повторить? какое одно следующее действие выбрать?</p>
        <div class="note">Эта рефлексия — не оценка мастерства: галочки и самооценка никогда не повышают уровень владения языком.</div>
      `,
    },
    {
      id: 9,
      eyebrow: 'УРОК 6 · 9/10 · ДАЛЬШЕ',
      title: 'Mi következik?',
      subtitle: 'Короткий мост к уровню A1',
      body: `
        <p>В следующем уроке начнётся уровень A1 и винительный падеж -t. Сейчас достаточно завершить повторение A0.</p>
      `,
    },
    {
      id: 10,
      eyebrow: 'УРОК 6 · 10/10 · ИТОГ',
      title: 'Az A0 ismétlés vége',
      subtitle: 'Честное завершение обзора A0',
      body: `
        <p>Ты завершил обзор материала A0. ExitCheck показывает, какие компоненты подтверждены напрямую, какие требуют проверки и что стоит повторить.</p>
        <ul class="tick">
          <li><b>Автоматически проверяется</b>: чтение слов, спряжение, множественное число и артикли.</li>
          <li><b>Проверь самостоятельно</b>: произношение, письмо и говорение.</li>
          <li><b>MISSING</b>: аудирование остаётся открытым до публикации MP3.</li>
        </ul>
      `,
      activities: [L6_EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l6_v1', hu: 'Szia!', ru: 'Привет! / Пока!', category: 'Review · Functional chunk', exampleSentence: 'Szia! Hogy vagy?', relatedLessonId: 2 },
    { id: 'l6_v2', hu: 'Hogy vagy?', ru: 'Как ты?', category: 'Review · Functional chunk', exampleSentence: 'Szia! Hogy vagy?', relatedLessonId: 2 },
    { id: 'l6_v3', hu: 'könyv', ru: 'книга', category: 'Review · Noun', exampleSentence: 'A könyv itt van.', relatedLessonId: 3 },
    { id: 'l6_v4', hu: 'tanulok', ru: 'я учусь', category: 'Review · Verb', exampleSentence: 'Magyarul tanulok.', baseWord: 'tanul', relatedLessonId: 4 },
    { id: 'l6_v5', hu: 'hétfő', ru: 'понедельник', category: 'Review · Number/time', exampleSentence: 'Hétfőn tanulok.', relatedLessonId: 5 },
    { id: 'l6_v6', hu: 'dolgozik', ru: 'работать (он/она)', category: 'Review · Verb', exampleSentence: 'Péter dolgozik.', baseWord: 'dolgozik', relatedLessonId: 4 },
  ],
  quiz: [
    { id: 601, question: 'Как произносится отдельная буква s в венгерском?', options: ['/s/', '/ʃ/', '/z/', '/ʒ/'], correctIndex: 1, explanation: 'В стандартном венгерском s обозначает /ʃ/; звук /s/ записывается диграфом sz.' },
    { id: 602, question: 'Какое приветствие используется в официальной обстановке с незнакомым человеком?', options: ['Szia', 'Jó napot', 'Szevasz', 'Cső'], correctIndex: 1, explanation: 'Jó napot — официальное приветствие, используется с незнакомыми и в формальных ситуациях (урок 2).' },
    { id: 603, question: 'Какой определённый артикль ставится перед словом «ablak» (окно)?', options: ['a', 'az', 'egy', 'не ставится'], correctIndex: 1, explanation: 'Перед словами, начинающимися с гласного звука, используется артикль az: az ablak (урок 3).' },
    { id: 604, question: 'Как образуется множественное число от слова «alma» (яблоко)?', options: ['almak', 'almák', 'almaok', 'almék'], correctIndex: 1, explanation: 'Слова на -a удлиняют её в -á перед добавлением -k: alma → almák (урок 3).' },
    { id: 605, question: 'Какое окончание у глагола «tanul» в 1-м лице единственного числа (én) в настоящем времени?', options: ['-ok', '-ek', '-ök', '-om'], correctIndex: 0, explanation: 'Для задних гласных (a, o, u) используется окончание -ok: tanul + ok = tanulok (урок 4).' },
    { id: 606, question: 'Как сказать «в три часа» по-венгерски?', options: ['három óra', 'három órakor', 'három órán', 'három órában'], correctIndex: 1, explanation: 'Для указания точного времени используется -kor: három órakor (урок 5).' },
    { id: 607, question: 'Как сказать «в среду» по-венгерски?', options: ['szerda', 'szerdán', 'szerdában', 'szerdakor'], correctIndex: 1, explanation: 'В расписании используется готовая функциональная форма szerdán; полная система падежей изучается позже.' },
    { id: 608, question: 'Какая форма глагола «tanul» соответствует местоимению mi?', options: ['tanulunk', 'tanultok', 'tanulnak', 'tanulok'], correctIndex: 0, explanation: 'mi tanulunk — «мы учим». Это повторение неопределённого спряжения (урок 4).' },
  ],
  objectives: [
    { id: 'l6_review-alphabet', text: 'Применять правила чтения и произношения уровня A0 без ошибок.', skills: ['pronunciation', 'reading'] },
    { id: 'l6_review-verb-conj', text: 'Спрягать глаголы в настоящем времени и строить с ними предложения.', skills: ['grammar', 'writing'] },
    { id: 'l6_review-numbers', text: 'Использовать числа, время и дни недели в мини-диалогах.', skills: ['speaking', 'listening'] },
    { id: 'l6_review-plural', text: 'Образовывать множественное число и правильно выбирать артикли a/az/egy.', skills: ['grammar', 'writing'] },
    { id: 'l6_self-assess', text: 'Строить короткие монологи о себе, объединяя материал уровня A0.', skills: ['speaking', 'writing'] },
  ],
};
