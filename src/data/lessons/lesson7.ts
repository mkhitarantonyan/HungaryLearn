import type { Lesson, LessonActivity } from '../../types';

const L7_CP_FORMS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l7-cp-accusative-forms',
  title: 'Форма винительного падежа',
  passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l7-form-1', prompt: 'autó → ?', accept: ['autót'] },
    { kind: 'textInput', id: 'l7-form-2', prompt: 'alma → ?', accept: ['almát'] },
    { kind: 'textInput', id: 'l7-form-3', prompt: 'kert → ?', accept: ['kertet'] },
    { kind: 'textInput', id: 'l7-form-4', prompt: 'könyv → ?', accept: ['könyvet'] },
    { kind: 'textInput', id: 'l7-form-5', prompt: 'ház → ?', accept: ['házat'] },
    { kind: 'textInput', id: 'l7-form-6', prompt: 'asztal → ?', accept: ['asztalt'] },
    { kind: 'textInput', id: 'l7-form-7', prompt: 'szék → ?', accept: ['széket'] },
    { kind: 'textInput', id: 'l7-form-8', prompt: 'ember → ?', accept: ['embert'] },
    { kind: 'textInput', id: 'l7-form-9', prompt: 'táska → ?', accept: ['táskát'] },
    { kind: 'textInput', id: 'l7-form-10', prompt: 'kávé → ?', accept: ['kávét'] },
  ],
};

const L7_CP_OBJECTS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l7-cp-object-sentences',
  title: 'Дополнение в предложении',
  passCount: 7,
  exercises: [
    { kind: 'singleChoice', id: 'l7-object-1', prompt: 'Kérek egy ___.', options: ['kávé', 'kávét', 'kávék'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-object-2', prompt: 'Látom a ___.', options: ['ház', 'házat', 'házak'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-object-3', prompt: 'Az új ___ az asztalon van.', options: ['könyv', 'könyvet', 'könyvek'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-object-4', prompt: 'Egy magyar ___ keresek.', options: ['nyelvkönyv', 'nyelvkönyvet', 'nyelvkönyvek'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-object-5', prompt: 'Megnézem az ___.', options: ['autó', 'autót', 'autók'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-object-6', prompt: 'Szeretsz ___?', options: ['én', 'engem', 'nekem'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-object-7', prompt: 'Látom ___.', options: ['ő', 'őt', 'neki'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-object-8', prompt: '___ egy almát.', options: ['Veszek', 'Veszem', 'Veszed'], correctIndex: 0 },
  ],
};

const L7_READING: LessonActivity = {
  kind: 'reading',
  id: 'l7-reading-bookshop',
  title: 'Чтение: в книжном магазине',
  instructions: 'Прочитай диалог и различи формы подлежащего/словарной формы и прямого дополнения.',
  passCount: 4,
  content: {
    type: 'prose',
    title: 'A könyvesboltban',
    paragraphs: [
      'Eladó: Jó napot! Mit keres?',
      'Vásárló: Egy magyar nyelvkönyvet keresek.',
      'Eladó: Ezt a könyvet ajánlom. Kéri ezt a szótárt is?',
      'Vásárló: Nem, köszönöm. Csak a könyvet kérem.',
      'Az új könyv az asztalon van.',
    ],
  },
  questions: [
    { id: 'l7-reading-q1', question: 'Что ищет покупатель?', options: ['egy magyar nyelvkönyvet', 'egy szótárt', 'egy újságot'], correctIndex: 0 },
    { id: 'l7-reading-q2', question: 'Какое слово дано в именительном падеже?', options: ['könyvet', 'szótárt', 'könyv'], correctIndex: 2 },
    { id: 'l7-reading-q3', question: 'Какое слово является дополнением в фразе «Ezt a könyvet ajánlom»?', options: ['ezt a könyvet', 'eladó', 'az asztalon'], correctIndex: 0 },
    { id: 'l7-reading-q4', question: 'От чего покупатель отказывается?', options: ['от словаря', 'от книги', 'от кофе'], correctIndex: 0 },
    { id: 'l7-reading-q5', question: 'Какая пара показывает именительный → винительный?', options: ['könyv → könyvet', 'könyvet → könyv', 'szótárt → szótár'], correctIndex: 0 },
  ],
};

const L7_CP_TRANSLATION: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l7-cp-translation',
  title: 'Перевод: пять коротких фраз',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l7-translate-1', prompt: '«Я ищу одну венгерскую книгу.»', accept: ['Egy magyar könyvet keresek.', 'Keresek egy magyar könyvet.'] },
    { kind: 'textInput', id: 'l7-translate-2', prompt: '«Я вижу этот дом.»', accept: ['Látom ezt a házat.'] },
    { kind: 'textInput', id: 'l7-translate-3', prompt: '«Я вижу тебя.»', accept: ['Látlak.', 'Látlak téged.'] },
    { kind: 'textInput', id: 'l7-translate-4', prompt: '«Я прошу один кофе.»', accept: ['Kérek egy kávét.', 'Egy kávét kérek.'] },
    { kind: 'textInput', id: 'l7-translate-5', prompt: '«Я читаю одну газету.»', accept: ['Olvasok egy újságot.', 'Egy újságot olvasok.'] },
  ],
};

const L7_RECORDING: LessonActivity = {
  kind: 'recording',
  id: 'l7-record-object-sentences',
  title: 'Говорение: три коротких дополнения',
  instructions: 'Прочитай три предложения вслух, прослушай запись и сравни её с образцом.',
  targetText: 'Kérek egy kávét. Látom ezt a házat. Látlak.',
  targetTranslation: 'Я прошу один кофе. Я вижу этот дом. Я вижу тебя.',
  rubric: [
    'Произнесены все три предложения',
    'Слышны окончания дополнений -t',
    'В последней фразе использовано Látlak',
  ],
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
    {
      objectiveId: 'l7_use-accusative-object',
      activityId: 'l7-cp-object-sentences',
      evidenceKind: 'grammar',
      evidenceComponents: [{ activityId: 'l7-record-object-sentences', evidenceKind: 'speaking' }],
    },
    { objectiveId: 'l7_distinguish-nom-acc', activityId: 'l7-reading-bookshop', evidenceKind: 'reading' },
    { objectiveId: 'l7_listen-accusative', activityId: 'l7-listening-accusative', evidenceKind: 'listening' },
    { objectiveId: 'l7_translate-acc', activityId: 'l7-cp-translation', evidenceKind: 'writing' },
  ],
};

export const LESSON_7: Lesson = {
  id: 7,
  number: 7,
  level: 'A1',
  title: 'Урок 7 · A tárgyeset',
  subtitle: 'Винительный падеж — суффикс -t',
  description: 'Прямое дополнение с -t: надёжные модели образования, частые словарные формы, личные местоимения и узкая модель 1-го лица с объектом «ты».',
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
      activities: [L7_CP_OBJECTS],
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
      title: 'A könyvesboltban',
      subtitle: 'Именительный и винительный в контексте',
      body: `
        <p>В диалоге ищи дополнения по окончанию <b>-t</b>. Отдельная последняя строка показывает словарную форму <span class="hu-word">könyv</span>.</p>
      `,
      activities: [L7_READING],
    },
    {
      id: 8,
      eyebrow: 'УРОК 7 · 8/11 · ПРОДУКЦИЯ',
      title: 'Fordítás és beszéd',
      subtitle: 'Точные фразы и запись',
      body: `
        <p>Сначала введи пять коротких переводов. Затем запиши три модели и сравни речь с написанными формами.</p>
      `,
      activities: [L7_CP_TRANSLATION, L7_RECORDING],
    },
    {
      id: 9,
      eyebrow: 'УРОК 7 · 9/11 · СЛОВАРЬ',
      title: 'Hasznos tárgyak',
      subtitle: 'Полезные пары',
      body: `
        <div class="grid2">
          <div><p><span class="hu-word">kávé — kávét</span> — кофе</p><p><span class="hu-word">tea — teát</span> — чай</p></div>
          <div><p><span class="hu-word">újság — újságot</span> — газета</p><p><span class="hu-word">film — filmet</span> — фильм</p></div>
        </div>
        <p><span class="hu-word">Kérek egy teát.</span> — Я прошу чай. <span class="hu-word">Nézem a filmet.</span> — Я смотрю фильм.</p>
      `,
    },
    {
      id: 10,
      eyebrow: 'УРОК 7 · 10/11 · АУДИРОВАНИЕ',
      title: 'Hallásértés',
      subtitle: 'Только по реальной записи',
      body: `
        <p>Прослушайте запись и ответьте на вопросы по содержанию.</p>
      `,
      activities: [L7_LISTENING],
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
          <li>Письменные формы проверяются в уроке; устную запись сравни с образцом. Аудирование откроется после публикации записи.</li>
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
