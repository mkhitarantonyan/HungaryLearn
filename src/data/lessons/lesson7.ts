import type { Lesson, LessonActivity } from '../../types';

const L7_CP_FORMS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l7-cp-accusative-forms',
  title: 'Контекстная практика: что видим, покупаем и просим?',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l7-form-1', prompt: 'Какой вопрос задаёт продавец об объекте?', options: ['Mi ez?', 'Mit kérsz?', 'Ki vagy?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-form-2', prompt: 'Это кофе: ___', options: ['Ez egy kávé.', 'Ez egy kávét.', 'Ezt egy kávé.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-3', prompt: 'Ты заказываешь кофе.', options: ['Kávé kérek.', 'Kávét kérek.', 'Kávén kérek.'], correctIndex: 1 },
    { kind: 'textInput', id: 'l7-form-4', prompt: 'alma → винительный падеж', accept: ['almát'] },
    { kind: 'textInput', id: 'l7-form-5', prompt: 'könyv → винительный падеж', accept: ['könyvet'] },
    { kind: 'textInput', id: 'l7-form-6', prompt: 'asztal → винительный падеж', accept: ['asztalt'] },
    { kind: 'singleChoice', id: 'l7-form-7', prompt: 'Что покупает говорящий?', options: ['Kenyeret veszek.', 'Kenyér veszek.', 'Kenyerem veszek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-8', prompt: 'Автобус уже виден.', options: ['Látom a busz.', 'Látok a buszt.', 'Látom a buszt.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l7-form-9', prompt: 'Выбери естественную фразу о предпочтении.', options: ['Szeretem ezt a filmet.', 'Szeretek ezt a film.', 'Szeretem ez film.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-10', prompt: 'Ты читаешь какую-то одну книгу.', options: ['Olvasok egy könyvet.', 'Olvasom egy könyv.', 'Olvasok a könyv.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-11', prompt: 'Кто выполняет действие?', options: ['A fiú olvas.', 'A fiú könyvet olvas.', 'Könyvet.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-12', prompt: 'Что читает мальчик?', options: ['A fiú.', 'Könyvet.', 'Olvas.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-form-13', prompt: 'Ты видишь Анну.', options: ['Látom Anna.', 'Látom Annát.', 'Látok Anná.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-form-14', prompt: 'Как попросить одну воду?', options: ['Kérek egy vizet.', 'Kérem egy víz.', 'Kér egy vizet én.'], correctIndex: 0 },
  ],
};

const L7_READING: LessonActivity = {
  kind: 'reading',
  id: 'l7-reading-bookshop',
  title: 'Чтение: покупки для ужина',
  instructions: 'Прочитай рассказ и ответь по смыслу: что уже есть у Норы, что она покупает и чем заменяет отсутствующий продукт.',
  passCount: 6,
  content: {
    type: 'prose',
    title: 'Bevásárlás vacsorához',
    paragraphs: [
      'Nóra péntek este vacsorát készít két barátjának. Otthon már van rizs, só, hagyma és egy kis sajt, de nincs elég zöldség. Munka után bemegy egy kis boltba. Először paradicsomot, paprikát és két répát tesz a kosarába. Kenyeret is szeretne venni, ezért választ egy barna kenyeret. Tejet nem vesz, mert azt senki sem kéri a vacsorához.',
      'Nóra csirkét keres, de nem talál a hűtőben. Megkérdez egy eladót: „Elnézést, hol találok csirkét?” Az eladó azt mondja, hogy ma már nincs csirke. Pulykát ajánl helyette. Nóra megnézi a pulykát, és vesz egy kis csomagot. Még egy üveg vizet és almát is vásárol.',
      'Otthon Nóra megmossa és felvágja a zöldséget. Rizzsel és pulykával meleg vacsorát készít. A barátai hét órakor érkeznek. Együtt eszik a vacsorát, utána pedig almát és sajtot kérnek. Mindenkinek ízlik az étel.',
    ],
  },
  questions: [
    { id: 'l7-reading-q1', question: 'Какой приём пищи готовит Нора?', options: ['завтрак', 'обед', 'ужин'], correctIndex: 2 },
    { id: 'l7-reading-q2', question: 'Что у неё уже есть дома?', options: ['рис, соль, лук и сыр', 'курица и хлеб', 'молоко и яблоки'], correctIndex: 0 },
    { id: 'l7-reading-q3', question: 'Что Нора сначала кладёт в корзину?', options: ['овощи', 'сыр', 'молоко'], correctIndex: 0 },
    { id: 'l7-reading-q4', question: 'Какой продукт она не может найти?', options: ['рис', 'курицу', 'хлеб'], correctIndex: 1 },
    { id: 'l7-reading-q5', question: 'Кого Нора спрашивает?', options: ['друга', 'продавца', 'соседа'], correctIndex: 1 },
    { id: 'l7-reading-q6', question: 'Что она выбирает вместо курицы?', options: ['индейку', 'рыбу', 'сыр'], correctIndex: 0 },
    { id: 'l7-reading-q7', question: 'Что Нора в итоге готовит?', options: ['тёплый ужин с рисом, индейкой и овощами', 'только бутерброды', 'яблочный пирог'], correctIndex: 0 },
  ],
};

const L7_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l7-roleplay-shop', title: 'Ролевая игра: покупка в маленьком магазине', partnerLabel: 'Eladó', completionMessage: 'Sikeresen befejezted a vásárlást.', startTurnId: 'l7-rp-s1',
  turns: [
    { id: 'l7-rp-s1', speaker: 'waiter', prompt: 'Jó napot! Mit kér?', next: 'l7-rp-l1' },
    { id: 'l7-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поприветствуй и попроси хлеб.', model: 'Jó napot! Egy kenyeret kérek.', next: 'l7-rp-s2' },
    { id: 'l7-rp-s2', speaker: 'waiter', prompt: 'Egy vagy két kenyeret kér?', next: 'l7-rp-l2' },
    { id: 'l7-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови количество.', model: 'Egy kenyeret kérek.', next: 'l7-rp-s3' },
    { id: 'l7-rp-s3', speaker: 'waiter', prompt: 'Rendben. Kér még valamit?', next: 'l7-rp-l3' },
    { id: 'l7-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Добавь кофе и воду.', model: 'Igen, kérek egy kávét és egy vizet is.', next: 'l7-rp-s4' },
    { id: 'l7-rp-s4', speaker: 'waiter', prompt: 'Sajnos kávé nincs. Teát tudok adni.', next: 'l7-rp-l4' },
    { id: 'l7-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Выбери предложенную замену.', model: 'Rendben, akkor egy teát kérek.', next: 'l7-rp-s5' },
    { id: 'l7-rp-s5', speaker: 'waiter', prompt: 'Kér almát vagy sajtot?', next: 'l7-rp-l5' },
    { id: 'l7-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Добавь один продукт и откажись от другого.', model: 'Kérek két almát, de sajtot nem kérek.', next: 'l7-rp-s6' },
    { id: 'l7-rp-s6', speaker: 'waiter', prompt: 'Tehát egy kenyér, egy víz, egy tea és két alma.', next: 'l7-rp-l6' },
    { id: 'l7-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди заказ.', model: 'Igen, ezt kérem.', next: 'l7-rp-s7' },
    { id: 'l7-rp-s7', speaker: 'waiter', prompt: 'Mást nem kér?', next: 'l7-rp-l7' },
    { id: 'l7-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Заверши покупку.', model: 'Nem, köszönöm. Ennyit kérek.', next: 'l7-rp-s8' },
    { id: 'l7-rp-s8', speaker: 'waiter', prompt: 'Köszönöm. Viszontlátásra!', next: 'l7-rp-l8' },
    { id: 'l7-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вежливо попрощайся.', model: 'Köszönöm szépen. Viszontlátásra!', next: 'l7-rp-s9' },
    { id: 'l7-rp-s9', speaker: 'waiter', prompt: 'Viszontlátásra!' },
  ],
};

const L7_WRITING: LessonActivity = {
  kind: 'writing', id: 'l7-writing-shopping-note', title: 'Письмо: сообщение о покупках',
  prompt: 'Напиши 60–80 слов: что тебе нужно, что уже есть дома, что ты хочешь купить, чего не хочешь и что приготовишь или используешь. Включи несколько естественных форм винительного падежа.',
  modelAnswer: ['Ma vacsorát készítek a barátaimnak. Otthon már van rizs, só és egy kis sajt. A boltban paradicsomot, paprikát, kenyeret és két almát szeretnék venni. Tejet nem kérek, mert senki sem iszik tejet. Csirkét is keresek, de ha nincs, pulykát veszek. Még egy üveg vizet kérek. Este a rizst, a húst és a zöldséget együtt készítem el. Utána együtt almát eszünk.'],
  rubric: ['60–80 слов', 'что нужно и что уже есть', 'покупки и один отказ', 'несколько осмысленных форм винительного падежа', 'понятный итог'],
};

const L7_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори около 1 минуты о том, что ты обычно ешь, пьёшь, покупаешь, читаешь или смотришь. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Назови несколько предметов и используй их как прямые дополнения.',
  rubric: ['еда и напитки', 'покупки', 'чтение или фильм', 'несколько объектов'],
};

const L7_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l7-listening-accusative',
  title: 'Аудирование: формы дополнения',
  assetId: 'l7_listening_accusative',
  audioStatus: 'published',
  transcript: 'Egy magyar könyvet keresek. Az eladó ezt a könyvet ajánlja. Kérek egy kávét is. Az ablakból látom a házat. A barátomnak azt mondom: „Látlak.”',
  passCount: 4,
  questions: [
    { id: 'l7-listening-q1', question: 'Что ищет говорящий?', options: ['egy magyar könyvet', 'egy magyar újságot', 'egy szótárt'], correctIndex: 0 },
    { id: 'l7-listening-q2', question: 'Что ему рекомендуют?', options: ['ezt a könyvet', 'azt a házat', 'egy kávét'], correctIndex: 0 },
    { id: 'l7-listening-q3', question: 'Что ещё просит говорящий?', options: ['egy kávét', 'egy almát', 'egy autót'], correctIndex: 0 },
    { id: 'l7-listening-q4', question: 'Что он видит из окна?', options: ['a kertet', 'a házat', 'az autót'], correctIndex: 1 },
    { id: 'l7-listening-q5', question: 'Какую форму он говорит другу?', options: ['Látlak.', 'Látom őt.', 'Látsz engem.'], correctIndex: 0 },
  ],
};

const L7_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l7-exit-check',
  title: 'Проверка целей урока 7',
  checks: [
    { objectiveId: 'l7_form-accusative', activityId: 'l7-cp-accusative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l7_use-accusative-object', activityId: 'l7-cp-accusative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l7_distinguish-nom-acc', activityId: 'l7-reading-bookshop', evidenceKind: 'reading' },
    { objectiveId: 'l7_listen-accusative', activityId: 'l7-listening-accusative', evidenceKind: 'listening' },
    { objectiveId: 'l7_translate-acc', activityId: 'l7-writing-shopping-note', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l7-roleplay-shop', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_7: Lesson = {
  id: 7,
  number: 7,
  level: 'A1',
  title: 'Урок 7 · A tárgyeset',
  subtitle: 'Винительный падеж — суффикс -t',
  description: 'Прямое дополнение с -t в бытовых ситуациях: предметы, покупки, просьбы, доступное чтение и текстовая практика без преждевременной полной системы спряжения.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 7 · 1/11 · ПОНЯТИЕ',
      title: 'A tárgyeset',
      subtitle: 'Кого? Что?',
      body: `
        <p>Прямое дополнение отвечает на вопросы «кого?» или «что?». В венгерском его обычно отмечает суффикс <span class="hu-word">-t</span>.</p>
        <p><span class="hu-word">Látom a házat.</span> — Я вижу дом. Словарная форма <span class="hu-word">ház</span>, форма дополнения <span class="hu-word">házat</span>.</p>
        <div class="note">Именно окончание показывает роль слова: <span class="hu-word">A ház nagy.</span> — Дом большой; <span class="hu-word">Látom a házat.</span> — Я вижу дом.</div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 7 · 2/11 · ОБРАЗОВАНИЕ',
      title: 'Hogyan képezzük?',
      subtitle: 'Надёжные модели и словарные формы',
      body: `
        <ul class="tick">
          <li>После большинства гласных добавляется <b>-t</b>: <span class="hu-word">autó → autót</span>, <span class="hu-word">kávé → kávét</span>.</li>
          <li>Конечные <b>-a/-e</b> удлиняются: <span class="hu-word">alma → almát</span>, <span class="hu-word">mese → mesét</span>.</li>
          <li>После согласной встречается и голое <b>-t</b>, и соединительная гласная: <span class="hu-word">asztal → asztalt</span>, но <span class="hu-word">kert → kertet</span>.</li>
        </ul>
        <div class="warn">Выбор соединительной гласной частично лексический. На начальном уровне учи частые формы вместе с существительным: <span class="hu-word">könyv — könyvet</span>, <span class="hu-word">ház — házat</span>.</div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 7 · 3/11 · ЧАСТЫЕ ФОРМЫ',
      title: 'Alakok együtt',
      subtitle: 'Учим парами',
      body: `
        <table class="conj">
          <tr><th>Словарная форма</th><th>Дополнение</th><th>Значение</th></tr>
          <tr><td>autó</td><td>autót</td><td>машина</td></tr>
          <tr><td>alma</td><td>almát</td><td>яблоко</td></tr>
          <tr><td>kert</td><td>kertet</td><td>сад</td></tr>
          <tr><td>könyv</td><td>könyvet</td><td>книга</td></tr>
          <tr><td>ház</td><td>házat</td><td>дом</td></tr>
          <tr><td>asztal</td><td>asztalt</td><td>стол</td></tr>
        </table>
      `,
      activities: [L7_CP_FORMS],
    },
    {
      id: 4,
      eyebrow: 'УРОК 7 · 4/11 · МЕСТОИМЕНИЯ',
      title: 'Névmások tárgyesete',
      subtitle: 'Особые формы',
      body: `
        <p>Формы личных местоимений нужно запомнить отдельно.</p>
        <table class="conj">
          <tr><th>Кто?</th><th>Кого?</th><th>Значение</th></tr>
          <tr><td>én</td><td>engem</td><td>меня</td></tr>
          <tr><td>te</td><td>téged</td><td>тебя</td></tr>
          <tr><td>ő</td><td>őt</td><td>его / её</td></tr>
          <tr><td>mi</td><td>minket</td><td>нас</td></tr>
          <tr><td>ti</td><td>titeket</td><td>вас</td></tr>
          <tr><td>ők</td><td>őket</td><td>их</td></tr>
        </table>
        <p><span class="hu-word">Szeretsz engem?</span> — Ты любишь меня? <span class="hu-word">Látom őt.</span> — Я вижу его / её.</p>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 7 · 5/11 · УЗКИЙ ПРЕДПРОСМОТР',
      title: 'Látlak',
      subtitle: 'Я → тебя: -lak/-lek',
      body: `
        <p>Когда подлежащее — <span class="hu-word">én</span> («я»), а дополнение — грамматическое 2-е лицо <span class="hu-word">téged</span> («тебя»), у глагола есть особая форма <b>-lak/-lek</b>.</p>
        <p><span class="hu-word">Látlak.</span> — Я вижу тебя. Можно уточнить или подчеркнуть: <span class="hu-word">Látlak téged.</span></p>
        <p><span class="hu-word">Szeretlek.</span> — Я люблю тебя.</p>
        <div class="note">Формальное <span class="hu-word">Ön</span> грамматически ведёт себя как 3-е лицо: <span class="hu-word">Látom Önt.</span> — Я вижу Вас. Здесь изучаем только одну модель 1-го лица с объектом 2-го лица, а не полную парадигму <b>-lak/-lek</b>.</div>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 7 · 6/11 · ПОРЯДОК СЛОВ',
      title: 'A tárgy a mondatban',
      subtitle: 'Окончание сохраняет роль слова',
      body: `
        <p>В венгерском порядок слов зависит от контекста и фокуса. Для начала используй надёжные нейтральные образцы:</p>
        <p><span class="hu-word">Keresek egy könyvet.</span> — Я ищу книгу. <span class="hu-word">Látom a házat.</span> — Я вижу дом.</p>
        <p>Неопределённое дополнение сочетается с формой вроде <span class="hu-word">keresek</span>, а определённое — с формой вроде <span class="hu-word">látom</span>. Полную систему спряжения изучим отдельно.</p>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 7 · 7/11 · ЧТЕНИЕ',
      title: 'Bevásárlás vacsorához',
      subtitle: 'Покупки и дополнения в естественном контексте',
      body: `
        <p>Проследи, что уже есть у Норы, какие продукты она покупает и чем заменяет отсутствующую курицу.</p>
      `,
      activities: [L7_READING],
    },
    {
      id: 8,
      eyebrow: 'УРОК 7 · 8/11 · АУДИРОВАНИЕ',
      title: 'Hallásértés',
      subtitle: 'Только по существующей реальной записи',
      body: `
        <p>Прослушай запись и ответь на вопросы по содержанию. Транскрипт открывается только после отправки ответов.</p>
      `,
      activities: [L7_LISTENING],
    },
    {
      id: 9,
      eyebrow: 'УРОК 7 · 9/11 · ВЗАИМОДЕЙСТВИЕ',
      title: 'Mit kér?',
      subtitle: 'Покупка и замена отсутствующего товара',
      body: `
        <p>Попроси товары, уточни количество, выбери замену и подтверди заказ. RolePlay остаётся PARTIAL.</p>
      `,
      activities: [L7_ROLEPLAY],
    },
    {
      id: 10,
      eyebrow: 'УРОК 7 · 10/11 · ПИСЬМО И САМОПРАКТИКА',
      title: 'Bevásárló üzenet',
      subtitle: 'Связный текст о покупках',
      body: `
        <p>Напиши сообщение на 60–80 слов. Optional Speaking — только текстовая инструкция, без микрофона, score и evidence.</p>
      `,
      activities: [L7_WRITING], optionalSpeaking: L7_SPEAKING,
    },
    {
      id: 11,
      eyebrow: 'УРОК 7 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что подтверждено',
      body: `
        <ul class="tick">
          <li>Прямое дополнение обычно получает окончание <b>-t</b>.</li>
          <li>После согласных выбор голого <b>-t</b> или соединительной гласной частично лексический: учи частые пары.</li>
          <li><span class="hu-word">Látlak.</span> — основная форма «Я вижу тебя».</li>
          <li>Controlled Practice, Reading и загруженный Listening могут дать DIRECT только после порога.</li>
          <li>Writing и RolePlay остаются PARTIAL; optional Speaking не создаёт evidence.</li>
        </ul>
      `,
      activities: [L7_EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l7_v1', hu: 'házat', ru: 'дом (вин. падеж)', phonetic: '[ха̄зат]', category: 'Винительный падеж -t', exampleSentence: 'Látom a házat.', baseWord: 'ház', grammaticalTag: 'targyeset-t', relatedLessonId: 7 },
    { id: 'l7_v2', hu: 'kávét', ru: 'кофе (вин. падеж)', phonetic: '[ка̄вэ̄т]', category: 'Винительный падеж -t', exampleSentence: 'Szeretem a kávét.', baseWord: 'kávé' },
    { id: 'l7_v3', hu: 'könyvet', ru: 'книгу (вин. падеж)', phonetic: '[кёнйвэт]', category: 'Винительный падеж -t', baseWord: 'könyv' },
    { id: 'l7_v4', hu: 'látom', ru: 'я вижу (его/её/это)', phonetic: '[ла̄том]', category: 'Определённое спряжение', baseWord: 'lát' },
    { id: 'l7_v5', hu: 'szeretem', ru: 'я люблю (его/её/это)', phonetic: '[сэретэм]', category: 'Определённое спряжение', baseWord: 'szeret' },
    { id: 'l7_v6', hu: 'almát', ru: 'яблоко (вин. падеж)', phonetic: '[алма̄т]', category: 'Винительный падеж -t', baseWord: 'alma' },
  ],
  quiz: [
    {
      id: 701,
      question: 'Как образуется винительный падеж от слова «autó»?',
      options: ['autót', 'autó', 'autóat', 'autóet'],
      correctIndex: 0,
      explanation: 'После этой конечной гласной добавляется -t: autó → autót.',
    },
    {
      id: 702,
      question: 'Как будет винительный падеж слова «ház»?',
      options: ['házot', 'házat', 'ház', 'házt'],
      correctIndex: 1,
      explanation: 'Частую пару ház → házat лучше учить вместе: выбор соединительной гласной частично лексический.',
    },
    {
      id: 703,
      question: 'Как сказать «Я вижу тебя» по-венгерски?',
      options: ['Látlak.', 'Látok.', 'Látom őt.', 'Látsz engem.'],
      correctIndex: 0,
      explanation: 'При подлежащем «я» и дополнении «тебя» используется особая форма 1-го лица с объектом 2-го лица: Látlak. При необходимости можно сказать Látlak téged.',
    },
    {
      id: 704,
      question: 'Как сказать «Я прошу один кофе»?',
      options: ['Kérek egy kávét.', 'Kérem egy kávé.', 'Kérsz egy kávét.', 'Kérek egy kávé.'],
      correctIndex: 0,
      explanation: 'Неопределённое дополнение egy kávét сочетается здесь с формой kérek.',
    },
    {
      id: 705,
      question: 'Что из перечисленного НЕ является формой винительного падежа?',
      options: ['könyvet', 'kutyát', 'ember', 'házat'],
      correctIndex: 2,
      explanation: 'ember — словарная форма; винительный падеж — embert.',
    },
    {
      id: 706,
      question: 'В каком варианте сначала дана словарная форма, затем винительный падеж?',
      options: ['kert → kertet', 'házat → ház', 'könyvet → könyv', 'almát → alma'],
      correctIndex: 0,
      explanation: 'kert — словарная форма, kertet — форма прямого дополнения.',
    },
  ],
  objectives: [
    { id: 'l7_form-accusative', text: 'Образовывать винительный падеж с помощью -t и связующих гласных.', skills: ['grammar', 'writing'] },
    { id: 'l7_use-accusative-object', text: 'Употреблять прямое дополнение в винительном падеже в предложении.', skills: ['grammar', 'speaking'] },
    { id: 'l7_distinguish-nom-acc', text: 'Различать именительный и винительный падеж в тексте.', skills: ['reading', 'grammar'] },
    { id: 'l7_listen-accusative', text: 'Понимать формы винительного падежа на слух.', skills: ['listening'] },
    { id: 'l7_translate-acc', text: 'Переводить простые фразы с винительным падежом.', skills: ['writing', 'reading'] },
  ],
};
