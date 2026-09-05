import { Lesson, LessonActivity } from '../../types';
import { P1_L3_PRACTICE, P1_L3_READING, P1_L3_ROLEPLAY, P1_L3_SPEAKING, P1_L3_WRITING } from './p1FoundationActivities';

const L3_CP_ARTICLES: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l3-cp-articles',
  title: 'Определённый артикль: a или az',
  passCount: 10,
  exercises: [
    { kind: 'singleChoice', id: 'l3-article-1', prompt: '___ ház (конкретный дом)', options: ['a', 'az'], correctIndex: 0, explanation: 'ház начинается с согласного звука h → a ház.' },
    { kind: 'singleChoice', id: 'l3-article-2', prompt: '___ alma (конкретное яблоко)', options: ['a', 'az'], correctIndex: 1, explanation: 'alma начинается с гласного звука a → az alma.' },
    { kind: 'singleChoice', id: 'l3-article-3', prompt: '___ könyv (конкретная книга)', options: ['a', 'az'], correctIndex: 0, explanation: 'könyv начинается с согласного звука k → a könyv.' },
    { kind: 'singleChoice', id: 'l3-article-4', prompt: '___ asztal (конкретный стол)', options: ['a', 'az'], correctIndex: 1, explanation: 'asztal начинается с гласного звука a → az asztal.' },
    { kind: 'singleChoice', id: 'l3-article-5', prompt: '___ szék (конкретный стул)', options: ['a', 'az'], correctIndex: 0, explanation: 'szék начинается с согласного звука sz → a szék.' },
    { kind: 'singleChoice', id: 'l3-article-6', prompt: '___ ablak (конкретное окно)', options: ['a', 'az'], correctIndex: 1, explanation: 'ablak начинается с гласного звука a → az ablak.' },
    { kind: 'singleChoice', id: 'l3-article-7', prompt: '___ gyerek (конкретный ребёнок)', options: ['a', 'az'], correctIndex: 0, explanation: 'gyerek начинается с согласного звука gy → a gyerek.' },
    { kind: 'singleChoice', id: 'l3-article-8', prompt: '___ autó (конкретная машина)', options: ['a', 'az'], correctIndex: 1, explanation: 'autó начинается с гласного звука a → az autó.' },
    { kind: 'singleChoice', id: 'l3-article-9', prompt: '___ könyvek (конкретные книги)', options: ['a', 'az'], correctIndex: 0, explanation: 'Число не влияет на выбор: könyvek начинается с согласного звука k → a könyvek.' },
    { kind: 'singleChoice', id: 'l3-article-10', prompt: '___ almák (конкретные яблоки)', options: ['a', 'az'], correctIndex: 1, explanation: 'Число не влияет на выбор: almák начинается с гласного звука a → az almák.' },
    { kind: 'singleChoice', id: 'l3-article-11', prompt: '___ nagy alma (конкретное большое яблоко)', options: ['a', 'az'], correctIndex: 0, explanation: 'Сразу после артикля стоит nagy, начинающееся с согласного звука n → a nagy alma.' },
    { kind: 'singleChoice', id: 'l3-article-12', prompt: '___ új ház (конкретный новый дом)', options: ['a', 'az'], correctIndex: 1, explanation: 'Сразу после артикля стоит új, начинающееся с гласного звука ú → az új ház.' },
    { kind: 'singleChoice', id: 'l3-article-13', prompt: '___ szép autó (конкретная красивая машина)', options: ['a', 'az'], correctIndex: 0, explanation: 'Выбор определяется словом szép, а не существительным autó → a szép autó.' },
    { kind: 'singleChoice', id: 'l3-article-14', prompt: '___ érdekes könyv (конкретная интересная книга)', options: ['a', 'az'], correctIndex: 1, explanation: 'Выбор определяется словом érdekes, начинающимся с гласного звука é → az érdekes könyv.' },
  ],
};

const L3_CP_EGY: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l3-cp-egy',
  title: 'Egy: один предмет или новый неопределённый предмет',
  passCount: 8,
  exercises: [
    {
      kind: 'singleChoice',
      id: 'l3-egy-1',
      prompt: 'Вы впервые упоминаете какой-то дом.',
      options: ['a ház', 'egy ház'],
      correctIndex: 1,
      explanation: 'Новый, пока не определённый предмет → egy ház.'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-2',
      prompt: 'Речь о конкретном доме, который уже известен собеседнику.',
      options: ['a ház', 'egy ház'],
      correctIndex: 0,
      explanation: 'Конкретный известный предмет → a ház.'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-3',
      prompt: 'На столе есть одна / какая-то книга.',
      options: ['Van egy könyv az asztalon.', 'A könyv az asztalon van.'],
      correctIndex: 0,
      explanation: 'Предмет вводится в разговор впервые → Van egy könyv az asztalon.'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-4',
      prompt: 'Конкретная книга находится на столе.',
      options: ['Van egy könyv az asztalon.', 'A könyv az asztalon van.'],
      correctIndex: 1,
      explanation: 'Книга уже определена → A könyv az asztalon van.'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-5',
      prompt: 'Подчеркните количество: одна книга, не две.',
      options: ['Egy könyv, nem kettő.', 'A könyv, nem kettő.'],
      correctIndex: 0,
      explanation: 'Здесь egy является числительным «один»: Egy könyv, nem kettő.'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-6',
      prompt: 'Нейтрально: «На столе есть книги».',
      options: ['Vannak könyvek az asztalon.', 'Vannak egy könyvek az asztalon.'],
      correctIndex: 0,
      explanation: 'Egy не употребляется с множественным числом: Vannak könyvek az asztalon.'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-7',
      prompt: 'Речь о конкретных книгах, уже известных собеседнику.',
      options: ['A könyvek az asztalon vannak.', 'Egy könyvek az asztalon vannak.'],
      correctIndex: 0,
      explanation: 'Конкретное множественное число использует a/az, но не egy: A könyvek az asztalon vannak.'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-8',
      prompt: 'Как сказать «Это дом» при классификации предмета?',
      options: ['Ez egy ház.', 'Ez a ház.'],
      correctIndex: 0,
      explanation: 'Ez egy ház = «Это дом». Ez a ház = «Этот дом».'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-9',
      prompt: 'Как сказать «Этот дом большой»?',
      options: ['Ez egy ház nagy.', 'Ez a ház nagy.'],
      correctIndex: 1,
      explanation: 'Указательная конструкция «этот дом» → ez a ház.'
    },
    {
      kind: 'singleChoice',
      id: 'l3-egy-10',
      prompt: 'Где egy является числом «один»?',
      options: ['Egy almát kérek, nem kettőt.', 'Van egy alma az asztalon.'],
      correctIndex: 0,
      explanation: 'Контраст «один, не два» показывает числительное. Вторая фраза вводит один / какой-то предмет.'
    },
  ],
};

const L3_CP_PLURALS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l3-cp-plurals',
  title: 'Образуй множественное число',
  passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l3-plural-1', prompt: 'asztal → ? (столы)', accept: ['asztalok'], explanation: 'asztal + -ok → asztalok.' },
    { kind: 'textInput', id: 'l3-plural-2', prompt: 'kert → ? (сады)', accept: ['kertek'], explanation: 'kert + -ek → kertek.' },
    { kind: 'textInput', id: 'l3-plural-3', prompt: 'gyümölcs → ? (фрукты)', accept: ['gyümölcsök'], explanation: 'gyümölcs + -ök → gyümölcsök.' },
    { kind: 'textInput', id: 'l3-plural-4', prompt: 'kutya → ? (собаки)', accept: ['kutyák'], explanation: 'Конечная a удлиняется: kutya → kutyák.' },
    { kind: 'textInput', id: 'l3-plural-5', prompt: 'alma → ? (яблоки)', accept: ['almák'], explanation: 'Конечная a удлиняется: alma → almák.' },
    { kind: 'textInput', id: 'l3-plural-6', prompt: 'kefe → ? (щётки)', accept: ['kefék'], explanation: 'Конечная e удлиняется: kefe → kefék.' },
    { kind: 'textInput', id: 'l3-plural-7', prompt: 'autó → ? (машины)', accept: ['autók'], explanation: 'После ó добавляется -k: autók.' },
    { kind: 'textInput', id: 'l3-plural-8', prompt: 'ház → ? (дома)', accept: ['házak'], explanation: 'Эту частотную форму учим вместе со словом: házak.' },
    { kind: 'textInput', id: 'l3-plural-9', prompt: 'láb → ? (ноги)', accept: ['lábak'], explanation: 'Эту частотную форму учим вместе со словом: lábak.' },
    { kind: 'textInput', id: 'l3-plural-10', prompt: 'nap → ? (дни)', accept: ['napok'], explanation: 'nap + -ok → napok.' },
  ],
};

const L3_READING_ROOM: LessonActivity = {
  kind: 'reading',
  id: 'l3-reading-room',
  title: 'Чтение: Szoba',
  instructions: 'Прочитай короткий текст и ответь на вопросы о смысле и предметах во множественном числе.',
  content: {
    type: 'prose',
    title: 'Szoba',
    paragraphs: [
      'Ez egy szoba. Itt van egy asztal és egy lámpa.',
      'Itt vannak a könyvek, az almák és a székek. Az ablakok nagyok. Két ajtó van.',
    ],
  },
  passCount: 4,
  questions: [
    { id: 'l3-reading-q1', question: 'Что обозначает форма könyvek в тексте?', options: ['книги', 'яблоки', 'стулья'], correctIndex: 0, explanation: 'könyvek — множественное число от könyv: «книги».' },
    { id: 'l3-reading-q2', question: 'Что обозначает форма almák в тексте?', options: ['яблоки', 'окна', 'лампы'], correctIndex: 0, explanation: 'almák — множественное число от alma: «яблоки».' },
    { id: 'l3-reading-q3', question: 'Что обозначает форма székek в тексте?', options: ['стулья', 'столы', 'двери'], correctIndex: 0, explanation: 'székek — множественное число от szék: «стулья».' },
    { id: 'l3-reading-q4', question: 'Какое утверждение о форме ablakok соответствует тексту?', options: ['Окна большие.', 'Окна маленькие.', 'Окно одно.'], correctIndex: 0, explanation: 'ablakok — «окна»; в тексте сказано: Az ablakok nagyok.' },
    { id: 'l3-reading-q5', question: 'Какая группа из текста целиком состоит из форм множественного числа?', options: ['könyvek, almák, székek, ablakok', 'szoba, asztal, lámpa, ajtó', 'asztal, könyvek, lámpa, ablakok'], correctIndex: 0, explanation: 'könyvek, almák, székek и ablakok называют несколько предметов.' },
  ],
};

const L3_CP_WRITTEN_PHRASES: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l3-cp-written-phrases',
  title: 'Письмо: определённый артикль и множественное число',
  passCount: 6,
  exercises: [
    {
      kind: 'textInput',
      id: 'l3-phrase-1',
      prompt: 'Напиши: «конкретные дома»',
      accept: ['a házak'],
      explanation: 'házak начинается с согласного звука h → a házak.'
    },
    {
      kind: 'textInput',
      id: 'l3-phrase-2',
      prompt: 'Напиши: «конкретные книги»',
      accept: ['a könyvek'],
      explanation: 'könyvek начинается с согласного звука k → a könyvek.'
    },
    {
      kind: 'textInput',
      id: 'l3-phrase-3',
      prompt: 'Напиши: «конкретные яблоки»',
      accept: ['az almák'],
      explanation: 'almák начинается с гласного звука a → az almák.'
    },
    {
      kind: 'textInput',
      id: 'l3-phrase-4',
      prompt: 'Напиши: «конкретные столы»',
      accept: ['az asztalok'],
      explanation: 'asztalok начинается с гласного звука a → az asztalok.'
    },
    {
      kind: 'textInput',
      id: 'l3-phrase-5',
      prompt: 'Напиши: «конкретные большие яблоки»',
      accept: ['a nagy almák'],
      explanation: 'После артикля стоит nagy, начинающееся с согласного n → a nagy almák.'
    },
    {
      kind: 'textInput',
      id: 'l3-phrase-6',
      prompt: 'Напиши: «конкретные новые машины»',
      accept: ['az új autók'],
      explanation: 'После артикля стоит új, начинающееся с гласного ú → az új autók.'
    },
    {
      kind: 'textInput',
      id: 'l3-phrase-7',
      prompt: 'Напиши: «на столе две книги»',
      accept: ['két könyv van az asztalon', 'két könyv van az asztalon.'],
      explanation: 'После két существительное остаётся в единственном числе, поэтому két könyv van.'
    },
    {
      kind: 'textInput',
      id: 'l3-phrase-8',
      prompt: 'Напиши: «в комнате есть стулья»',
      accept: ['vannak székek a szobában', 'vannak székek a szobában.'],
      explanation: 'Неопределённое множество: Vannak székek a szobában.'
    },
  ],
};

const L3_WRITING_ROOM: LessonActivity = {
  kind: 'writing',
  id: 'l3-writing-room',
  title: 'Письмо: пять фраз о комнате',
  prompt: 'Напишите минимум пять коротких предложений: один новый предмет с Van egy…, неопределённое множество с Vannak…, место конкретного предмета с a/az + van/vannak, количество по модели число + существительное в единственном числе + van и одно предложение о качестве без van.',
  modelAnswer: [
    'Van egy asztal a szobában.',
    'Vannak székek a szobában.',
    'A könyvek az asztalon vannak.',
    'Két lámpa van az asztalon.',
    'Az ablakok nagyok.',
  ],
  rubric: [
    'Есть минимум пять самостоятельных предложений',
    'Есть правильная модель Van egy + существительное',
    'Есть неопределённое множество с Vannak без определённого артикля',
    'Есть местонахождение конкретного предмета с a/az',
    'После числа существительное осталось в единственном числе и использовано van',
    'Качество выражено без van/vannak',
  ],
};

const L3_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l3-exit-check',
  title: 'Проверка целей урока 3',
  checks: [
    { objectiveId: 'l3_choose-article', activityId: 'l3-cp-articles', evidenceKind: 'grammar' },
    { objectiveId: 'l3_form-plural', activityId: 'l3-cp-plurals', evidenceKind: 'grammar' },
    { objectiveId: 'l3_use-egy', activityId: 'l3-cp-egy', evidenceKind: 'grammar', practiceComponents: ['speaking'] },
    { objectiveId: 'l3_plural-nouns-reading', activityId: 'l3-reading-room', evidenceKind: 'reading' },
    { objectiveId: 'l3_write-plural', activityId: 'l3-cp-written-phrases', evidenceKind: 'writing' },
  ],
};

export const LESSON_3: Lesson = {
  id: 3,
  number: 3,
  level: 'A0',
  title: 'Урок 3 · Főnév, névelő, többes szám',
  subtitle: 'Существительное, артикли (a/az/egy), множественное число (-k)',
  description: 'Отсутствие рода, определенные (a/az) и неопределенные (egy) артикли, правила образования множественного числа (-k) и правило о числах.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 3 · 1/11 · СУЩЕСТВИТЕЛЬНОЕ',
      title: 'A főnév',
      subtitle: 'Что такое существительное и как к нему присоединяются окончания',
      type: 'info',
      note: 'В венгерском нет грамматического рода существительных. Одно и то же слово может обозначать мужчину или женщину: tanár — учитель / учительница, orvos — врач. Пол при необходимости уточняется контекстом или отдельным словом.',
      warn: 'Фраза «прилагательное не изменяется» требует уточнения. Перед существительным прилагательное действительно остаётся в основной форме: nagy ház, nagy házak. Но в роли сказуемого оно может получать множественное число: A házak nagyok.',
      task: 'Прочитайте примеры и определите: где находится основа существительного, какое значение добавляет каждый суффикс и находится ли прилагательное перед существительным или в сказуемом.',
      body: `
        <p><strong>Főnév</strong> означает «существительное». Существительное называет человека, животное, предмет, место или понятие и отвечает на вопросы <b>ki?</b> — «кто?» и <b>mi?</b> — «что?».</p>

        <table class="conj">
          <tr><th>Венгерское слово</th><th>Перевод</th><th>Что называет</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU">tanár</button></td>
            <td>учитель / учительница, преподаватель</td>
            <td>человек</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU">kutya</button></td>
            <td>собака</td>
            <td>животное</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button></td>
            <td>книга</td>
            <td>предмет</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Budapest" data-speak-lang="hu-HU">Budapest</button></td>
            <td>Будапешт</td>
            <td>место, имя собственное</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szeretet" data-speak-lang="hu-HU">szeretet</button></td>
            <td>любовь</td>
            <td>понятие</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Нет грамматического рода</h4>
        <p>Венгерские существительные не делятся на мужской, женский и средний род. Поэтому не нужно запоминать род слова и согласовывать с ним артикль или прилагательное.</p>

        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th><th>Что важно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Péter tanár. Anna tanár." data-speak-lang="hu-HU">Péter tanár. Anna tanár.</button></td>
            <td>Петер — учитель. Анна — учительница.</td>
            <td>слово tanár не меняется по полу</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Péter orvos. Anna orvos." data-speak-lang="hu-HU">Péter orvos. Anna orvos.</button></td>
            <td>Петер — врач. Анна — врач.</td>
            <td>слово orvos одинаково для мужчины и женщины</td>
          </tr>
        </table>

        <div class="note">
          <b>Отсутствие грамматического рода не означает отсутствие биологического пола.</b>
          При необходимости пол можно уточнить именем, контекстом или отдельным словом, но форма самого существительного обычно от этого не меняется.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Прилагательное перед существительным</h4>
        <p>Когда прилагательное стоит <strong>перед существительным</strong>, оно обычно не получает окончание множественного числа или падежное окончание существительного.</p>

        <table class="conj">
          <tr><th>Единственное число</th><th>Множественное число</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy ház" data-speak-lang="hu-HU">nagy ház</button></td>
            <td><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button></td>
            <td>большой дом — большие дома</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép kert" data-speak-lang="hu-HU">szép kert</button></td>
            <td><button class="speak-btn" data-speak-text="szép kertek" data-speak-lang="hu-HU">szép kertek</button></td>
            <td>красивый сад — красивые сады</td>
          </tr>
        </table>

        <p>Окончание множественного числа находится на существительном: <b>házak</b>, <b>kertek</b>. Прилагательные <b>nagy</b> и <b>szép</b> перед ними остаются в основной форме.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Прилагательное в сказуемом</h4>
        <p>Когда прилагательное сообщает признак после подлежащего, во множественном числе оно получает форму множественного числа.</p>

        <table class="conj">
          <tr><th>Единственное число</th><th>Множественное число</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU">A ház nagy.</button></td>
            <td><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button></td>
            <td>Дом большой. — Дома большие.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A kert szép." data-speak-lang="hu-HU">A kert szép.</button></td>
            <td><button class="speak-btn" data-speak-text="A kertek szépek." data-speak-lang="hu-HU">A kertek szépek.</button></td>
            <td>Сад красивый. — Сады красивые.</td>
          </tr>
        </table>

        <div class="note">
          <b>Сравните:</b><br>
          <span class="hu-word">nagy házak</span> — большие дома: прилагательное стоит перед существительным и не меняется;<br>
          <span class="hu-word">A házak nagyok</span> — дома большие: прилагательное является сказуемым и получает множественное число.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Агглютинация: основа + суффиксы</h4>
        <p>Венгерский — агглютинативный язык. Грамматические значения часто выражаются суффиксами, которые присоединяются к основе слова в определённом порядке.</p>

        <table class="conj">
          <tr><th>Форма</th><th>Строение</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button></td>
            <td>основа</td>
            <td>книга</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyvek" data-speak-lang="hu-HU">könyv + ek = könyvek</button></td>
            <td>основа + показатель множественного числа</td>
            <td>книги</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="házban" data-speak-lang="hu-HU">ház + ban = házban</button></td>
            <td>основа + окончание «внутри / в»</td>
            <td>в доме</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="házakban" data-speak-lang="hu-HU">ház + ak + ban = házakban</button></td>
            <td>основа + множественное число + «в»</td>
            <td>в домах</td>
          </tr>
        </table>

        <div class="note">
          <b>Не воспринимайте суффиксы как полностью механические наклейки.</b>
          Их форма зависит от гармонии гласных, а некоторые основы немного изменяются. На этом уроке важно понять общий принцип; конкретные окончания будут изучаться по отдельности.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что нужно запомнить сейчас</h4>
        <ul class="tick">
          <li>существительное называет человека, животное, предмет, место или понятие;</li>
          <li>грамматического рода нет;</li>
          <li>перед существительным прилагательное обычно не согласуется с ним;</li>
          <li>в сказуемом прилагательное может получать множественное число;</li>
          <li>множественное число и другие значения выражаются окончаниями после основы;</li>
          <li>окончания добавляются в определённом порядке и подчиняются гармонии гласных.</li>
        </ul>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 3 · 2/11 · ОПРЕДЕЛЁННЫЙ АРТИКЛЬ',
      title: 'A határozott névelő',
      subtitle: 'A и az: один артикль, две формы',
      type: 'info',
      note: 'A/az показывает, что речь идёт о конкретном, известном из ситуации или уже упомянутом предмете. В русском отдельное слово часто не переводится, поэтому a ház — это не обязательно «этот дом», а чаще просто «дом» в конкретном контексте.',
      warn: 'Выбирайте форму по первому произносимому звуку слова сразу после артикля. Если между артиклем и существительным стоит прилагательное, ориентируйтесь на прилагательное: a nagy alma, но az új ház.',
      task: 'Определите, является ли предмет конкретным, затем посмотрите на первый звук следующего слова и выберите a или az. После таблиц выполните упражнение.',
      activities: [L3_CP_ARTICLES],
      body: `
        <p><strong>Határozott névelő</strong> означает «определённый артикль». В венгерском это один артикль с двумя формами: <b>a</b> и <b>az</b>.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-4 mb-2">1. Что означает определённость</h4>
        <p>Артикль показывает, что собеседнику понятно, о каком человеке или предмете идёт речь. Предмет может быть уже упомянут, виден в ситуации, известен обоим собеседникам или единственный в данном контексте.</p>

        <table class="conj">
          <tr><th>Без контекста / новый предмет</th><th>Конкретный предмет</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy ház" data-speak-lang="hu-HU">egy ház</button></td>
            <td><button class="speak-btn" data-speak-text="a ház" data-speak-lang="hu-HU">a ház</button></td>
            <td>один / какой-то дом — конкретный, известный дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy alma" data-speak-lang="hu-HU">egy alma</button></td>
            <td><button class="speak-btn" data-speak-text="az alma" data-speak-lang="hu-HU">az alma</button></td>
            <td>одно / какое-то яблоко — конкретное яблоко</td>
          </tr>
        </table>

        <div class="note">
          <b>Перевод зависит от контекста:</b> <span class="hu-word">a ház</span> может переводиться как «дом», «этот конкретный дом» или английское <i>the house</i>. Сам артикль не является указательным словом «этот».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. A перед согласным звуком</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Первый звук</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a ház" data-speak-lang="hu-HU">a ház</button></td>
            <td>h — согласный</td>
            <td>конкретный дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a szék" data-speak-lang="hu-HU">a szék</button></td>
            <td>sz — согласный звук</td>
            <td>конкретный стул</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a gyerek" data-speak-lang="hu-HU">a gyerek</button></td>
            <td>gy — согласный звук</td>
            <td>конкретный ребёнок</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a könyvek" data-speak-lang="hu-HU">a könyvek</button></td>
            <td>k — согласный</td>
            <td>конкретные книги</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Az перед гласным звуком</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Первый звук</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az alma" data-speak-lang="hu-HU">az alma</button></td>
            <td>a — гласный</td>
            <td>конкретное яблоко</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az iskola" data-speak-lang="hu-HU">az iskola</button></td>
            <td>i — гласный</td>
            <td>конкретная школа</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az autó" data-speak-lang="hu-HU">az autó</button></td>
            <td>a — гласный</td>
            <td>конкретная машина</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az almák" data-speak-lang="hu-HU">az almák</button></td>
            <td>a — гласный</td>
            <td>конкретные яблоки</td>
          </tr>
        </table>

        <div class="note">
          <b>Единственное или множественное число не влияет на выбор:</b><br>
          <span class="hu-word">a könyv — a könyvek</span>;<br>
          <span class="hu-word">az alma — az almák</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Смотрите на слово сразу после артикля</h4>
        <p>Если перед существительным стоит прилагательное, выбор определяется первым звуком прилагательного, а не существительного.</p>

        <table class="conj">
          <tr><th>Фраза</th><th>Почему</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a nagy alma" data-speak-lang="hu-HU">a nagy alma</button></td>
            <td>nagy начинается с согласного n</td>
            <td>конкретное большое яблоко</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az új ház" data-speak-lang="hu-HU">az új ház</button></td>
            <td>új начинается с гласного ú</td>
            <td>конкретный новый дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a szép autó" data-speak-lang="hu-HU">a szép autó</button></td>
            <td>szép начинается с согласного sz</td>
            <td>конкретная красивая машина</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az érdekes könyv" data-speak-lang="hu-HU">az érdekes könyv</button></td>
            <td>érdekes начинается с гласного é</td>
            <td>конкретная интересная книга</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Артикль не означает «этот»</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Значение</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a ház" data-speak-lang="hu-HU">a ház</button></td>
            <td>определённый артикль + дом</td>
            <td>конкретный дом / дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ez a ház" data-speak-lang="hu-HU">ez a ház</button></td>
            <td>указательное слово + артикль + дом</td>
            <td>этот дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az a ház" data-speak-lang="hu-HU">az a ház</button></td>
            <td>указательное слово + артикль + дом</td>
            <td>тот дом</td>
          </tr>
        </table>

        <div class="note">
          В сочетании <span class="hu-word">az a ház</span> первое <b>az</b> означает «тот», а второе <b>a</b> является определённым артиклем. Указательные слова подробно изучаются позже.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Примеры в предложениях</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU">A ház nagy.</button></td>
            <td>Дом большой. Речь о конкретном доме.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Az alma piros." data-speak-lang="hu-HU">Az alma piros.</button></td>
            <td>Яблоко красное. Речь о конкретном яблоке.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A könyvek az asztalon vannak." data-speak-lang="hu-HU">A könyvek az asztalon vannak.</button></td>
            <td>Книги находятся на столе.</td>
          </tr>
        </table>

        <div class="note">
          <b>Имена и названия городов:</b> в нейтральных предложениях перед личными именами и названиями городов артикль обычно не ставится:
          <span class="hu-word">Anna itt van</span> — Анна здесь;
          <span class="hu-word">Budapest nagy város</span> — Будапешт — большой город.
          Другие типы собственных имён будут изучаться позже.
        </div>

        <div class="note">
          <b>Быстрая проверка:</b><br>
          1. Предмет конкретный или известный? Тогда нужен определённый артикль.<br>
          2. Следующее слово начинается с согласного звука? Используйте <b>a</b>.<br>
          3. Следующее слово начинается с гласного звука? Используйте <b>az</b>.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 3 · 3/11 · EGY',
      title: 'Az egy',
      subtitle: 'Одно слово: число «один» и неопределённый артикль',
      type: 'info',
      note: 'Egy имеет две близкие функции. Оно может точно обозначать количество «один» или вводить в разговор один пока не определённый предмет. На письме форма одинакова, а значение определяется контекстом.',
      warn: 'Egy не используется с существительным во множественном числе. Нельзя говорить egy könyvek. Для неопределённого множества используйте könyvek без egy, а для конкретного множества — a/az + множественное число.',
      task: 'Сравните пары примеров и определите функцию egy: точное количество или новый неопределённый предмет. Затем выполните упражнение и назовите два предмета вокруг себя.',
      activities: [L3_CP_EGY],
      body: `
        <p><strong>Egy</strong> произносится как одно венгерское слово, но может выполнять две функции:</p>

        <table class="conj">
          <tr><th>Функция</th><th>Что означает</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>Числительное</td>
            <td>точно один, не два и не три</td>
            <td><button class="speak-btn" data-speak-text="Egy könyv, nem kettő." data-speak-lang="hu-HU">Egy könyv, nem kettő.</button></td>
            <td>Одна книга, не две.</td>
          </tr>
          <tr>
            <td>Неопределённый артикль</td>
            <td>один / какой-то предмет вводится в разговор</td>
            <td><button class="speak-btn" data-speak-text="Van egy könyv az asztalon." data-speak-lang="hu-HU">Van egy könyv az asztalon.</button></td>
            <td>На столе есть одна / какая-то книга.</td>
          </tr>
        </table>

        <div class="note">
          <b>Произношение и ударение:</b> когда подчёркивается точное количество, <span class="hu-word">egy</span> получает смысловое выделение:
          «одна, не две». В функции артикля оно обычно не является главным словом фразы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Новый предмет и уже известный предмет</h4>
        <table class="conj">
          <tr><th>Новый / неопределённый</th><th>Конкретный / известный</th><th>Разница</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy ház" data-speak-lang="hu-HU">egy ház</button></td>
            <td><button class="speak-btn" data-speak-text="a ház" data-speak-lang="hu-HU">a ház</button></td>
            <td>какой-то / один дом — конкретный дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU">egy könyv</button></td>
            <td><button class="speak-btn" data-speak-text="a könyv" data-speak-lang="hu-HU">a könyv</button></td>
            <td>какая-то / одна книга — конкретная книга</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy alma" data-speak-lang="hu-HU">egy alma</button></td>
            <td><button class="speak-btn" data-speak-text="az alma" data-speak-lang="hu-HU">az alma</button></td>
            <td>какое-то / одно яблоко — конкретное яблоко</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Как предмет вводится в разговор</h4>
        <table class="conj">
          <tr><th>Первое упоминание</th><th>Следующее упоминание</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Van egy könyv az asztalon." data-speak-lang="hu-HU">
                Van egy könyv az asztalon.
              </button>
              <br>На столе есть одна / какая-то книга.
            </td>
            <td>
              <button class="speak-btn" data-speak-text="A könyv piros." data-speak-lang="hu-HU">
                A könyv piros.
              </button>
              <br>Книга красная.
            </td>
          </tr>
        </table>

        <p>Сначала книга является новой информацией и получает <b>egy</b>. После первого упоминания собеседник уже понимает, о какой книге идёт речь, поэтому используется <b>a könyv</b>.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Ez egy… и ez a… — разные конструкции</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Перевод</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez egy ház." data-speak-lang="hu-HU">Ez egy ház.</button></td>
            <td>Это дом.</td>
            <td>мы определяем, к какому классу относится предмет</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez a ház." data-speak-lang="hu-HU">Ez a ház.</button></td>
            <td>Этот дом.</td>
            <td>мы указываем на конкретный дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez a ház nagy." data-speak-lang="hu-HU">Ez a ház nagy.</button></td>
            <td>Этот дом большой.</td>
            <td>указательная конструкция + определённый артикль</td>
          </tr>
        </table>

        <div class="note">
          <b>Не смешивайте:</b> <span class="hu-word">Ez egy ház</span> — «Это дом», но
          <span class="hu-word">Ez a ház</span> — «Этот дом».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Egy и множественное число</h4>
        <p>В изучаемом значении <b>egy</b> употребляется только с существительным в единственном числе.</p>

        <table class="conj">
          <tr><th>Значение</th><th>Правильно</th><th>Неправильно</th></tr>
          <tr>
            <td>одна / какая-то книга</td>
            <td><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU">egy könyv</button></td>
            <td><s>egy könyvek</s></td>
          </tr>
          <tr>
            <td>есть неопределённые книги</td>
            <td><button class="speak-btn" data-speak-text="Vannak könyvek az asztalon." data-speak-lang="hu-HU">Vannak könyvek az asztalon.</button></td>
            <td><s>Vannak egy könyvek az asztalon.</s></td>
          </tr>
          <tr>
            <td>конкретные книги на столе</td>
            <td><button class="speak-btn" data-speak-text="A könyvek az asztalon vannak." data-speak-lang="hu-HU">A könyvek az asztalon vannak.</button></td>
            <td><s>Egy könyvek az asztalon vannak.</s></td>
          </tr>
        </table>

        <div class="note">
          <b>Порядок слов:</b> для нейтрального сообщения о наличии используйте
          <span class="hu-word">Vannak könyvek az asztalon</span> — «На столе есть книги».
          Фраза <span class="hu-word">A könyvek az asztalon vannak</span> говорит о конкретных книгах и сообщает, где они находятся.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Egy употребляется не в каждом русском «один»</h4>
        <p>Неопределённый артикль в венгерском употребляется не полностью так же, как английские a/an. Его не следует автоматически добавлять перед каждой профессией или характеристикой.</p>

        <table class="conj">
          <tr><th>Правильно</th><th>Перевод</th><th>Комментарий</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tanár vagyok." data-speak-lang="hu-HU">Tanár vagyok.</button></td>
            <td>Я учитель / учительница.</td>
            <td>перед профессией в этой модели egy не требуется</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez egy tanár." data-speak-lang="hu-HU">Ez egy tanár.</button></td>
            <td>Это учитель.</td>
            <td>мы классифицируем человека или изображение</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Устная практика</h4>
        <ol class="tasklist">
          <li>Оглянитесь вокруг и назовите два предмета по модели <b>egy + существительное</b>.</li>
          <li>Составьте предложение <b>Van egy …</b> — «Есть один / какой-то …».</li>
          <li>Затем представьте, что предмет уже известен, и замените <b>egy</b> на <b>a/az</b>.</li>
        </ol>

        <div class="note">
          <b>Пример:</b><br>
          <span class="hu-word">Van egy szék a szobában.</span> — В комнате есть один / какой-то стул.<br>
          <span class="hu-word">A szék barna.</span> — Стул коричневый.
        </div>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 3 · 4/11 · МНОЖЕСТВЕННОЕ ЧИСЛО',
      title: 'A többes szám',
      subtitle: 'Как образуется множественное число существительных',
      type: 'info',
      note: 'Основной показатель множественного числа — конечная буква k. Но фактическая форма может быть -k, -ok, -ak, -ek или -ök, а иногда меняется и основа слова.',
      warn: 'Не выбирайте соединительную гласную только по простой таблице. Гармония гласных помогает, но не всегда полностью предсказывает форму: asztalok, házak, kertek, gyümölcsök. Новое существительное полезно учить вместе с его множественным числом.',
      task: 'Разделите примеры на четыре группы: слово заканчивается на согласную; на a/e; на другую гласную; форма с изменением основы. Затем произнесите каждую пару в единственном и множественном числе.',
      body: `
        <p><strong>Többes szám</strong> означает «множественное число». Оно показывает, что речь идёт более чем об одном человеке, животном, предмете или понятии.</p>

        <table class="conj">
          <tr><th>Единственное число</th><th>Множественное число</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button></td>
            <td><button class="speak-btn" data-speak-text="könyvek" data-speak-lang="hu-HU">könyvek</button></td>
            <td>книга — книги</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU">alma</button></td>
            <td><button class="speak-btn" data-speak-text="almák" data-speak-lang="hu-HU">almák</button></td>
            <td>яблоко — яблоки</td>
          </tr>
        </table>

        <div class="note">
          <b>Главная идея:</b> все формы множественного числа оканчиваются показателем <b>-k</b>, но перед ним может появиться соединительная гласная, а основа слова иногда изменяется.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Слова, оканчивающиеся на согласную</h4>
        <p>Перед конечной <b>k</b> обычно появляется соединительная гласная. Получаются формы <b>-ok, -ak, -ek</b> или <b>-ök</b>.</p>

        <table class="conj">
          <tr><th>Слово</th><th>Строение формы</th><th>Множественное число</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU">asztal</button></td>
            <td>asztal + ok</td>
            <td><button class="speak-btn" data-speak-text="asztalok" data-speak-lang="hu-HU">asztalok</button></td>
            <td>стол — столы</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">ház</button></td>
            <td>ház + ak</td>
            <td><button class="speak-btn" data-speak-text="házak" data-speak-lang="hu-HU">házak</button></td>
            <td>дом — дома</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU">kert</button></td>
            <td>kert + ek</td>
            <td><button class="speak-btn" data-speak-text="kertek" data-speak-lang="hu-HU">kertek</button></td>
            <td>сад — сады</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyümölcs" data-speak-lang="hu-HU">gyümölcs</button></td>
            <td>gyümölcs + ök</td>
            <td><button class="speak-btn" data-speak-text="gyümölcsök" data-speak-lang="hu-HU">gyümölcsök</button></td>
            <td>фрукт — фрукты</td>
          </tr>
        </table>

        <div class="note">
          <b>Гармония гласных помогает:</b> слова с задними гласными часто получают <b>-ok</b> или <b>-ak</b>; слова с передними гласными часто получают <b>-ek</b> или <b>-ök</b>. Но выбор между вариантами не всегда полностью предсказуем.
        </div>

        <div class="note">
          <b>Не выводите форму по последней гласной:</b><br>
          <span class="hu-word">asztal → asztalok</span>, но
          <span class="hu-word">ház → házak</span>;<br>
          <span class="hu-word">kert → kertek</span>, но
          <span class="hu-word">gyümölcs → gyümölcsök</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Конечные a и e удлиняются</h4>
        <p>Если существительное заканчивается на короткую <b>a</b> или <b>e</b>, перед показателем множественного числа эта гласная становится долгой:</p>

        <table class="conj">
          <tr><th>Изменение</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>a → á + k</td>
            <td><button class="speak-btn" data-speak-text="kutya, kutyák" data-speak-lang="hu-HU">kutya → kutyák</button></td>
            <td>собака — собаки</td>
          </tr>
          <tr>
            <td>a → á + k</td>
            <td><button class="speak-btn" data-speak-text="alma, almák" data-speak-lang="hu-HU">alma → almák</button></td>
            <td>яблоко — яблоки</td>
          </tr>
          <tr>
            <td>e → é + k</td>
            <td><button class="speak-btn" data-speak-text="kefe, kefék" data-speak-lang="hu-HU">kefe → kefék</button></td>
            <td>щётка — щётки</td>
          </tr>
          <tr>
            <td>e → é + k</td>
            <td><button class="speak-btn" data-speak-text="mese, mesék" data-speak-lang="hu-HU">mese → mesék</button></td>
            <td>сказка — сказки</td>
          </tr>
        </table>

        <div class="note">
          Краткая и долгая гласная различаются и на письме, и в произношении:
          <span class="hu-word">alma → almák</span>, а не <s>almak</s>;
          <span class="hu-word">kefe → kefék</span>, а не <s>kefek</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. После многих других гласных добавляется только k</h4>
        <table class="conj">
          <tr><th>Единственное</th><th>Множественное</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button></td>
            <td><button class="speak-btn" data-speak-text="autók" data-speak-lang="hu-HU">autók</button></td>
            <td>машина — машины</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kocsi" data-speak-lang="hu-HU">kocsi</button></td>
            <td><button class="speak-btn" data-speak-text="kocsik" data-speak-lang="hu-HU">kocsik</button></td>
            <td>машина / вагон — машины / вагоны</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nő" data-speak-lang="hu-HU">nő</button></td>
            <td><button class="speak-btn" data-speak-text="nők" data-speak-lang="hu-HU">nők</button></td>
            <td>женщина — женщины</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kapu" data-speak-lang="hu-HU">kapu</button></td>
            <td><button class="speak-btn" data-speak-text="kapuk" data-speak-lang="hu-HU">kapuk</button></td>
            <td>ворота / калитка — ворота / калитки</td>
          </tr>
        </table>

        <div class="warn">
          <b>Это не абсолютное правило.</b> Некоторые частотные слова на гласную меняют основу:
          <span class="hu-word">ló → lovak</span> — лошадь → лошади;
          <span class="hu-word">szó → szavak</span> — слово → слова.
          Такие формы нужно учить вместе со словом.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Иногда изменяется основа слова</h4>
        <table class="conj">
          <tr><th>Единственное</th><th>Множественное</th><th>Что изменилось</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tükör" data-speak-lang="hu-HU">tükör</button></td>
            <td><button class="speak-btn" data-speak-text="tükrök" data-speak-lang="hu-HU">tükrök</button></td>
            <td>внутренняя гласная основы выпала</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="terem" data-speak-lang="hu-HU">terem</button></td>
            <td><button class="speak-btn" data-speak-text="termek" data-speak-lang="hu-HU">termek</button></td>
            <td>основа сократилась</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ló" data-speak-lang="hu-HU">ló</button></td>
            <td><button class="speak-btn" data-speak-text="lovak" data-speak-lang="hu-HU">lovak</button></td>
            <td>появилась изменённая основа lov-</td>
          </tr>
        </table>

        <p>На уровне A0 не нужно угадывать такие изменения. Записывайте словарную пару целиком: <b>tükör — tükrök</b>, <b>terem — termek</b>, <b>ló — lovak</b>.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Артикль и число</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Перевод</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU">egy könyv</button></td>
            <td>одна / какая-то книга</td>
            <td>единственное число</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyvek" data-speak-lang="hu-HU">könyvek</button></td>
            <td>книги</td>
            <td>неопределённое множество</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a könyvek" data-speak-lang="hu-HU">a könyvek</button></td>
            <td>конкретные книги</td>
            <td>определённое множество</td>
          </tr>
        </table>

        <div class="note">
          <b>После точного числа существительное обычно остаётся в единственном числе:</b>
          <span class="hu-word">két könyv</span> — две книги, а не <s>két könyvek</s>.
          Это правило подробно рассматривается на отдельном слайде.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Быстрая стратегия</h4>
        <ol class="tasklist">
          <li>Посмотрите, на согласную или гласную заканчивается слово.</li>
          <li>Для конечных a/e удлините гласную: a→á, e→é.</li>
          <li>Для согласной ожидайте соединительную гласную перед конечной k.</li>
          <li>Не угадывайте полностью форму -ok/-ak/-ek/-ök: проверьте словарь или изученный список.</li>
          <li>Если меняется основа, запомните единственное и множественное число как пару.</li>
        </ol>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 3 · 5/11 · СЛОВАРНЫЕ ФОРМЫ',
      title: 'Szótári alakok',
      subtitle: 'Когда множественное число нужно запоминать вместе со словом',
      type: 'info',
      note: 'Форма -ak сама по себе не является исключением. -ok и -ak — нормальные варианты множественного числа для слов с задними гласными. Трудность в том, что точный выбор не всегда можно надёжно вычислить.',
      warn: 'Не применяйте правило «односложное слово всегда получает -ak». Сравните: ház → házak, láb → lábak, но nap → napok. Кроме того, некоторые слова меняют основу: ló → lovak, tükör → tükrök, kéz → kezek.',
      task: 'Прочитайте пары вслух, распределите их по типам изменения и выполните самопроверку. Записывайте новое существительное в формате: единственное число — множественное число — перевод.',
      body: `
        <p>На предыдущем слайде вы увидели общую систему множественного числа. Теперь рассмотрим формы, которые нельзя надёжно получить по одному короткому правилу.</p>

        <div class="note">
          <b>Главный принцип:</b> гармония гласных помогает выбрать общую группу окончания, но точная форма слова может зависеть от словарной модели и от особенностей основы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. -ok или -ak после задних гласных</h4>
        <p>Оба варианта являются нормальными. Некоторые слова получают <b>-ak</b>, другие — <b>-ok</b>. Безопасного правила, которое покрывает все слова, нет.</p>

        <table class="conj">
          <tr><th>Форма с -ak</th><th>Перевод</th><th>Форма с -ok</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ház, házak" data-speak-lang="hu-HU">ház → házak</button></td>
            <td>дом → дома</td>
            <td><button class="speak-btn" data-speak-text="nap, napok" data-speak-lang="hu-HU">nap → napok</button></td>
            <td>день → дни</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="láb, lábak" data-speak-lang="hu-HU">láb → lábak</button></td>
            <td>нога → ноги</td>
            <td><button class="speak-btn" data-speak-text="asztal, asztalok" data-speak-lang="hu-HU">asztal → asztalok</button></td>
            <td>стол → столы</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fal, falak" data-speak-lang="hu-HU">fal → falak</button></td>
            <td>стена → стены</td>
            <td><button class="speak-btn" data-speak-text="ablak, ablakok" data-speak-lang="hu-HU">ablak → ablakok</button></td>
            <td>окно → окна</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nyár, nyarak" data-speak-lang="hu-HU">nyár → nyarak</button></td>
            <td>лето → лета</td>
            <td><button class="speak-btn" data-speak-text="vonat, vonatok" data-speak-lang="hu-HU">vonat → vonatok</button></td>
            <td>поезд → поезда</td>
          </tr>
        </table>

        <div class="note">
          <b>Nap:</b> слово означает «день» и «солнце». Форма <span class="hu-word">napok</span> в обычной речи чаще переводится как «дни». Значение «солнца» возможно только в подходящем астрономическом контексте.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Основа на гласную может измениться</h4>
        <p>Некоторые короткие слова не просто получают окончание: перед ним появляется изменённая основа.</p>

        <table class="conj">
          <tr><th>Единственное</th><th>Множественное</th><th>Перевод</th><th>Изменение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ló" data-speak-lang="hu-HU">ló</button></td>
            <td><button class="speak-btn" data-speak-text="lovak" data-speak-lang="hu-HU">lovak</button></td>
            <td>лошадь → лошади</td>
            <td>основа lov-</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tó" data-speak-lang="hu-HU">tó</button></td>
            <td><button class="speak-btn" data-speak-text="tavak" data-speak-lang="hu-HU">tavak</button></td>
            <td>озеро → озёра</td>
            <td>основа tav-</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szó" data-speak-lang="hu-HU">szó</button></td>
            <td><button class="speak-btn" data-speak-text="szavak" data-speak-lang="hu-HU">szavak</button></td>
            <td>слово → слова</td>
            <td>основа szav-</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kő" data-speak-lang="hu-HU">kő</button></td>
            <td><button class="speak-btn" data-speak-text="kövek" data-speak-lang="hu-HU">kövek</button></td>
            <td>камень → камни</td>
            <td>основа köv-</td>
          </tr>
        </table>

        <div class="warn">
          Не применяйте к этим словам простую модель «гласная + k»: формы <s>lók</s>, <s>tók</s>, <s>szók</s> и <s>kők</s> не являются обычными формами множественного числа этих существительных.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Внутренняя гласная иногда выпадает</h4>
        <table class="conj">
          <tr><th>Единственное</th><th>Множественное</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tükör, tükrök" data-speak-lang="hu-HU">tükör → tükrök</button></td>
            <td>tükör → tükrök</td>
            <td>зеркало → зеркала</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="terem, termek" data-speak-lang="hu-HU">terem → termek</button></td>
            <td>terem → termek</td>
            <td>зал / кабинет → залы / кабинеты</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="bokor, bokrok" data-speak-lang="hu-HU">bokor → bokrok</button></td>
            <td>bokor → bokrok</td>
            <td>куст → кусты</td>
          </tr>
        </table>

        <p>В этих формах соединительное окончание присоединяется к сокращённой основе. На начальном уровне такую основу лучше не угадывать.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Долгая гласная основы иногда сокращается</h4>
        <table class="conj">
          <tr><th>Единственное</th><th>Множественное</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kéz, kezek" data-speak-lang="hu-HU">kéz → kezek</button></td>
            <td>kéz → kezek</td>
            <td>рука / кисть → руки / кисти</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="víz, vizek" data-speak-lang="hu-HU">víz → vizek</button></td>
            <td>víz → vizek</td>
            <td>вода → воды / виды воды</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="út, utak" data-speak-lang="hu-HU">út → utak</button></td>
            <td>út → utak</td>
            <td>дорога / путь → дороги / пути</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="híd, hidak" data-speak-lang="hu-HU">híd → hidak</button></td>
            <td>híd → hidak</td>
            <td>мост → мосты</td>
          </tr>
        </table>

        <div class="note">
          <b>Не все долгие гласные сокращаются:</b>
          <span class="hu-word">ház → házak</span> и
          <span class="hu-word">láb → lábak</span> сохраняют долгую á.
          Поэтому изменение основы является словарным свойством конкретного слова.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как правильно учить такие слова</h4>
        <table class="conj">
          <tr><th>Неэффективная запись</th><th>Полезная словарная запись</th></tr>
          <tr>
            <td>ház — дом</td>
            <td><b>ház — házak — дом / дома</b></td>
          </tr>
          <tr>
            <td>ló — лошадь</td>
            <td><b>ló — lovak — лошадь / лошади</b></td>
          </tr>
          <tr>
            <td>tükör — зеркало</td>
            <td><b>tükör — tükrök — зеркало / зеркала</b></td>
          </tr>
          <tr>
            <td>kéz — рука</td>
            <td><b>kéz — kezek — рука / руки</b></td>
          </tr>
        </table>

        <ol class="tasklist">
          <li>Прочитайте единственное число.</li>
          <li>Закройте множественную форму и попробуйте её вспомнить.</li>
          <li>Проверьте не только окончание, но и основу слова.</li>
          <li>Если учебник или словарь показывает форму множественного числа, запишите её вместе со словом.</li>
        </ol>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Самопроверка: образуйте множественное число</summary>
          <table class="conj mt-3">
            <tr><th>Задание</th><th>Ответ</th></tr>
            <tr><td>ház</td><td><button class="speak-btn" data-speak-text="házak" data-speak-lang="hu-HU">házak</button></td></tr>
            <tr><td>nap</td><td><button class="speak-btn" data-speak-text="napok" data-speak-lang="hu-HU">napok</button></td></tr>
            <tr><td>ló</td><td><button class="speak-btn" data-speak-text="lovak" data-speak-lang="hu-HU">lovak</button></td></tr>
            <tr><td>tükör</td><td><button class="speak-btn" data-speak-text="tükrök" data-speak-lang="hu-HU">tükrök</button></td></tr>
            <tr><td>kéz</td><td><button class="speak-btn" data-speak-text="kezek" data-speak-lang="hu-HU">kezek</button></td></tr>
          </table>
        </details>

        <div class="note">
          <b>Итог:</b> запоминайте не «какое окончание является исключением», а полную форму слова. Трудность может находиться в выборе -ok/-ak, в выпадении гласной, в сокращении долгой гласной или в другой основе.
        </div>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 3 · 6/11 · ЧИСЛА И СУЩЕСТВИТЕЛЬНОЕ',
      title: 'Számok és a főnév',
      subtitle: 'После количественного числительного существительное остаётся в единственном числе',
      type: 'info',
      note: 'Основное правило относится к количественным числительным внутри именной группы: két könyv, három ház, öt alma. Число уже выражает количество, поэтому показатель множественного числа на существительном не ставится.',
      warn: 'Не переносите русскую форму множественного числа в венгерский: не két könyvek и не három házak. Также сказуемое при таком подлежащем обычно стоит в единственном числе: Két könyv van az asztalon.',
      task: 'Прочитайте все модели, затем замените числа и существительные. Проверяйте три элемента: форму числа, единственное число существительного и форму van/ige в единственном числе.',
      body: `
        <p>В венгерском количественное числительное уже показывает, сколько предметов имеется. Поэтому следующее за ним существительное употребляется в <strong>единственном числе</strong>.</p>

        <table class="conj">
          <tr><th>Венгерский</th><th>Дословная структура</th><th>Естественный перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU">egy könyv</button></td>
            <td>один + книга</td>
            <td>одна книга</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
            <td>два + книга</td>
            <td>две книги</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="három ház" data-speak-lang="hu-HU">három ház</button></td>
            <td>три + дом</td>
            <td>три дома</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="öt alma" data-speak-lang="hu-HU">öt alma</button></td>
            <td>пять + яблоко</td>
            <td>пять яблок</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tíz szék" data-speak-lang="hu-HU">tíz szék</button></td>
            <td>десять + стул</td>
            <td>десять стульев</td>
          </tr>
        </table>

        <div class="note">
          <b>Правильно:</b> <span class="hu-word">két könyv</span>, <span class="hu-word">három ház</span>, <span class="hu-word">öt alma</span>.<br>
          <b>Неправильно:</b> <s>két könyvek</s>, <s>három házak</s>, <s>öt almák</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Két и kettő</h4>
        <p>Число «два» имеет две частотные формы. Перед существительным обычно используется <b>két</b>. Самостоятельно, когда существительное не произносится, используется <b>kettő</b>.</p>

        <table class="conj">
          <tr><th>Форма</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>перед существительным</td>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
            <td>две книги</td>
          </tr>
          <tr>
            <td>самостоятельный ответ</td>
            <td><button class="speak-btn" data-speak-text="Hány könyv van? Kettő." data-speak-lang="hu-HU">— Hány könyv van?<br>— Kettő.</button></td>
            <td>— Сколько книг есть?<br>— Две.</td>
          </tr>
        </table>

        <div class="note">
          На начальном уровне используйте безопасную модель:
          <span class="hu-word">két + существительное</span>;
          <span class="hu-word">kettő</span> — отдельный ответ без существительного.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Прилагательное тоже остаётся в основной форме</h4>
        <p>Порядок группы: <b>число + прилагательное + существительное</b>. Перед существительным прилагательное не получает показатель множественного числа.</p>

        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="két nagy ház" data-speak-lang="hu-HU">két nagy ház</button></td>
            <td>два больших дома</td>
            <td><s>két nagyok házak</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="három szép alma" data-speak-lang="hu-HU">három szép alma</button></td>
            <td>три красивых яблока</td>
            <td><s>három szépek almák</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="öt új könyv" data-speak-lang="hu-HU">öt új könyv</button></td>
            <td>пять новых книг</td>
            <td><s>öt újak könyvek</s></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Определённый артикль ставится перед всей группой</h4>
        <p>Если речь идёт о конкретных предметах, определённый артикль ставится перед числом:</p>

        <table class="conj">
          <tr><th>Неопределённая группа</th><th>Определённая группа</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
            <td><button class="speak-btn" data-speak-text="a két könyv" data-speak-lang="hu-HU">a két könyv</button></td>
            <td>две книги — эти / конкретные две книги</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="három alma" data-speak-lang="hu-HU">három alma</button></td>
            <td><button class="speak-btn" data-speak-text="a három alma" data-speak-lang="hu-HU">a három alma</button></td>
            <td>три яблока — конкретные три яблока</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="öt új könyv" data-speak-lang="hu-HU">öt új könyv</button></td>
            <td><button class="speak-btn" data-speak-text="az öt új könyv" data-speak-lang="hu-HU">az öt új könyv</button></td>
            <td>пять новых книг — конкретные пять новых книг</td>
          </tr>
        </table>

        <div class="note">
          Выбор <b>a/az</b> определяется первым звуком следующего слова:
          <span class="hu-word">a két könyv</span>, но
          <span class="hu-word">az öt könyv</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. В предложении сказуемое обычно стоит в единственном числе</h4>
        <p>Именная группа с точным числом грамматически ведёт себя как единая количественная группа. Поэтому употребляется <b>van</b>, а не <b>vannak</b>, и глагол обычно имеет форму единственного числа.</p>

        <table class="conj">
          <tr><th>Предложение</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két könyv van az asztalon." data-speak-lang="hu-HU">Két könyv van az asztalon.</button></td>
            <td>На столе две книги.</td>
            <td><s>Két könyv vannak az asztalon.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Három gyerek játszik." data-speak-lang="hu-HU">Három gyerek játszik.</button></td>
            <td>Трое детей играют.</td>
            <td><s>Három gyerek játszanak.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Öt autó áll az utcán." data-speak-lang="hu-HU">Öt autó áll az utcán.</button></td>
            <td>На улице стоят пять машин.</td>
            <td><s>Öt autó állnak az utcán.</s></td>
          </tr>
        </table>

        <div class="note">
          Сравните:<br>
          <span class="hu-word">A könyvek az asztalon vannak.</span> — Конкретные книги находятся на столе: существительное во множественном числе, поэтому <b>vannak</b>.<br>
          <span class="hu-word">Két könyv van az asztalon.</span> — На столе две книги: после числа существительное в единственном числе, поэтому <b>van</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Вопрос Hány? — «сколько?»</h4>
        <p>После вопросительного слова <b>hány</b> существительное также остаётся в единственном числе.</p>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány könyv van az asztalon?" data-speak-lang="hu-HU">Hány könyv van az asztalon?</button></td>
            <td><button class="speak-btn" data-speak-text="Két könyv." data-speak-lang="hu-HU">Két könyv.</button></td>
            <td>Сколько книг на столе? — Две книги.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány szoba van?" data-speak-lang="hu-HU">Hány szoba van?</button></td>
            <td><button class="speak-btn" data-speak-text="Három szoba." data-speak-lang="hu-HU">Három szoba.</button></td>
            <td>Сколько комнат? — Три комнаты.</td>
          </tr>
        </table>

        <div class="note">
          <b>Неправильно:</b> <s>Hány könyvek?</s>, <s>Hány szobák?</s>.<br>
          <b>Правильно:</b> <span class="hu-word">Hány könyv?</span>, <span class="hu-word">Hány szoba?</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Другие слова количества</h4>
        <p>Та же модель единственного числа используется после многих слов количества:</p>

        <table class="conj">
          <tr><th>Фраза</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="sok könyv" data-speak-lang="hu-HU">sok könyv</button></td>
            <td>много книг</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kevés szék" data-speak-lang="hu-HU">kevés szék</button></td>
            <td>мало стульев</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="néhány alma" data-speak-lang="hu-HU">néhány alma</button></td>
            <td>несколько яблок</td>
          </tr>
        </table>

        <div class="note">
          На этом слайде главное — точные числа и <span class="hu-word">hány</span>. Формы <span class="hu-word">sok</span>, <span class="hu-word">kevés</span> и <span class="hu-word">néhány</span> приведены как дополнительная закономерность.
        </div>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>две книги → <b>két könyv</b></li>
            <li>три больших дома → <b>három nagy ház</b></li>
            <li>конкретные пять яблок → <b>az öt alma</b></li>
            <li>На столе четыре книги. → <b>Négy könyv van az asztalon.</b></li>
            <li>Сколько комнат? → <b>Hány szoba van?</b></li>
          </ol>
        </details>

        <div class="note">
          <b>Итоговая формула:</b><br>
          <span class="hu-word">число + прилагательное + существительное в единственном числе</span>;<br>
          при конкретной группе: <span class="hu-word">a/az + число + прилагательное + существительное</span>.
        </div>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 3 · 7/11 · ДОМАШНИЕ ПРЕДМЕТЫ',
      title: 'Otthoni tárgyak',
      subtitle: 'Домашние предметы: артикль, единственное и множественное число',
      type: 'vocabulary',
      note: 'Учите существительное не отдельно, а тройкой: артикль + единственное число + множественное число. Например: az asztal — asztalok.',
      warn: 'Не образуйте множественное число механически. Сравните: ajtó → ajtók, lámpa → lámpák, ágy → ágyak, tükör → tükrök. У этих слов разные модели.',
      task: 'Прослушайте каждую словарную пару. Затем закройте колонку множественного числа, восстановите формы самостоятельно и проверьте себя в раскрываемом блоке.',
      activities: [L3_CP_PLURALS],
      body: `
        <p><strong>Otthoni tárgyak</strong> означает «домашние предметы». Слово <b>tárgy</b> — предмет, а <b>tárgyak</b> — предметы.</p>

        <div class="note">
          <b>Формат запоминания:</b><br>
          <span class="hu-word">артикль + существительное → множественное число → перевод</span><br>
          Например: <span class="hu-word">az asztal → asztalok</span> — стол → столы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Основные предметы комнаты</h4>
        <table class="conj">
          <tr>
            <th>С артиклем</th>
            <th>Множественное число</th>
            <th>Перевод</th>
            <th>Модель</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az asztal" data-speak-lang="hu-HU">az asztal</button></td>
            <td><button class="speak-btn" data-speak-text="asztalok" data-speak-lang="hu-HU">asztalok</button></td>
            <td>стол — столы</td>
            <td>asztal + ok</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a szék" data-speak-lang="hu-HU">a szék</button></td>
            <td><button class="speak-btn" data-speak-text="székek" data-speak-lang="hu-HU">székek</button></td>
            <td>стул — стулья</td>
            <td>szék + ek</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az ablak" data-speak-lang="hu-HU">az ablak</button></td>
            <td><button class="speak-btn" data-speak-text="ablakok" data-speak-lang="hu-HU">ablakok</button></td>
            <td>окно — окна</td>
            <td>ablak + ok</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az ajtó" data-speak-lang="hu-HU">az ajtó</button></td>
            <td><button class="speak-btn" data-speak-text="ajtók" data-speak-lang="hu-HU">ajtók</button></td>
            <td>дверь — двери</td>
            <td>после ó добавляется k</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az ágy" data-speak-lang="hu-HU">az ágy</button></td>
            <td><button class="speak-btn" data-speak-text="ágyak" data-speak-lang="hu-HU">ágyak</button></td>
            <td>кровать — кровати</td>
            <td>словарная форма с -ak</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a lámpa" data-speak-lang="hu-HU">a lámpa</button></td>
            <td><button class="speak-btn" data-speak-text="lámpák" data-speak-lang="hu-HU">lámpák</button></td>
            <td>лампа — лампы</td>
            <td>a → á + k</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a tükör" data-speak-lang="hu-HU">a tükör</button></td>
            <td><button class="speak-btn" data-speak-text="tükrök" data-speak-lang="hu-HU">tükrök</button></td>
            <td>зеркало — зеркала</td>
            <td>в основе выпадает гласная</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a szőnyeg" data-speak-lang="hu-HU">a szőnyeg</button></td>
            <td><button class="speak-btn" data-speak-text="szőnyegek" data-speak-lang="hu-HU">szőnyegek</button></td>
            <td>ковёр — ковры</td>
            <td>szőnyeg + ek</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Ещё четыре полезных слова</h4>
        <table class="conj">
          <tr><th>С артиклем</th><th>Множественное число</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a polc" data-speak-lang="hu-HU">a polc</button></td>
            <td><button class="speak-btn" data-speak-text="polcok" data-speak-lang="hu-HU">polcok</button></td>
            <td>полка — полки</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a szekrény" data-speak-lang="hu-HU">a szekrény</button></td>
            <td><button class="speak-btn" data-speak-text="szekrények" data-speak-lang="hu-HU">szekrények</button></td>
            <td>шкаф — шкафы</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a párna" data-speak-lang="hu-HU">a párna</button></td>
            <td><button class="speak-btn" data-speak-text="párnák" data-speak-lang="hu-HU">párnák</button></td>
            <td>подушка — подушки</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a függöny" data-speak-lang="hu-HU">a függöny</button></td>
            <td><button class="speak-btn" data-speak-text="függönyök" data-speak-lang="hu-HU">függönyök</button></td>
            <td>занавеска / штора — занавески / шторы</td>
          </tr>
        </table>

        <div class="note">
          <b>Артикль:</b> перед гласным звуком используется <b>az</b>:
          <span class="hu-word">az asztal, az ablak, az ajtó, az ágy</span>.
          Перед согласным звуком используется <b>a</b>:
          <span class="hu-word">a szék, a lámpa, a tükör, a szőnyeg</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Предметы в предложениях</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Перевод</th><th>Что повторяем</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van egy asztal a szobában." data-speak-lang="hu-HU">Van egy asztal a szobában.</button></td>
            <td>В комнате есть один / какой-то стол.</td>
            <td>первое упоминание с egy</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két szék van az asztal mellett." data-speak-lang="hu-HU">Két szék van az asztal mellett.</button></td>
            <td>Рядом со столом стоят два стула.</td>
            <td>после числа — szék, не székek; сказуемое van</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Az ablakok nagyok." data-speak-lang="hu-HU">Az ablakok nagyok.</button></td>
            <td>Окна большие.</td>
            <td>существительное и сказуемое во множественном числе</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Az ajtó nyitva van." data-speak-lang="hu-HU">Az ajtó nyitva van.</button></td>
            <td>Дверь открыта.</td>
            <td>конкретный предмет с az</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Az ágy a fal mellett van." data-speak-lang="hu-HU">Az ágy a fal mellett van.</button></td>
            <td>Кровать находится рядом со стеной.</td>
            <td>местонахождение с van</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A lámpák az asztalon vannak." data-speak-lang="hu-HU">A lámpák az asztalon vannak.</button></td>
            <td>Лампы находятся на столе.</td>
            <td>множественное число с vannak</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A tükör a falon van." data-speak-lang="hu-HU">A tükör a falon van.</button></td>
            <td>Зеркало находится на стене.</td>
            <td>единственное число с van</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A szőnyeg a padlón van." data-speak-lang="hu-HU">A szőnyeg a padlón van.</button></td>
            <td>Ковёр находится на полу.</td>
            <td>готовая фраза о местонахождении</td>
          </tr>
        </table>

        <div class="note">
          Формы <span class="hu-word">a szobában</span> — «в комнате»,
          <span class="hu-word">az asztalon</span> — «на столе»,
          <span class="hu-word">a falon</span> — «на стене» и
          <span class="hu-word">a padlón</span> — «на полу»
          пока запоминайте как готовые выражения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Устная практика</h4>
        <ol class="tasklist">
          <li>Назовите четыре предмета в своей комнате с правильным артиклем.</li>
          <li>Образуйте множественное число каждого слова.</li>
          <li>Скажите, где находится один предмет: <b>A … van.</b></li>
          <li>Назовите количество другого предмета: <b>Két / három … van.</b></li>
        </ol>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Открыть ключ множественного числа</summary>
          <table class="conj mt-3">
            <tr><th>Единственное число</th><th>Ответ</th></tr>
            <tr><td>asztal</td><td><button class="speak-btn" data-speak-text="asztalok" data-speak-lang="hu-HU">asztalok</button></td></tr>
            <tr><td>szék</td><td><button class="speak-btn" data-speak-text="székek" data-speak-lang="hu-HU">székek</button></td></tr>
            <tr><td>ablak</td><td><button class="speak-btn" data-speak-text="ablakok" data-speak-lang="hu-HU">ablakok</button></td></tr>
            <tr><td>ajtó</td><td><button class="speak-btn" data-speak-text="ajtók" data-speak-lang="hu-HU">ajtók</button></td></tr>
            <tr><td>ágy</td><td><button class="speak-btn" data-speak-text="ágyak" data-speak-lang="hu-HU">ágyak</button></td></tr>
            <tr><td>lámpa</td><td><button class="speak-btn" data-speak-text="lámpák" data-speak-lang="hu-HU">lámpák</button></td></tr>
            <tr><td>tükör</td><td><button class="speak-btn" data-speak-text="tükrök" data-speak-lang="hu-HU">tükrök</button></td></tr>
            <tr><td>szőnyeg</td><td><button class="speak-btn" data-speak-text="szőnyegek" data-speak-lang="hu-HU">szőnyegek</button></td></tr>
            <tr><td>polc</td><td><button class="speak-btn" data-speak-text="polcok" data-speak-lang="hu-HU">polcok</button></td></tr>
            <tr><td>szekrény</td><td><button class="speak-btn" data-speak-text="szekrények" data-speak-lang="hu-HU">szekrények</button></td></tr>
            <tr><td>párna</td><td><button class="speak-btn" data-speak-text="párnák" data-speak-lang="hu-HU">párnák</button></td></tr>
            <tr><td>függöny</td><td><button class="speak-btn" data-speak-text="függönyök" data-speak-lang="hu-HU">függönyök</button></td></tr>
          </table>
        </details>

        <div class="note">
          <b>Итог:</b> цель этого слайда — не просто узнать перевод слова, а уметь использовать его с артиклем, образовать множественное число и поставить в короткое предложение.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 3 · 8/11 · ПРОСТЫЕ ПРЕДЛОЖЕНИЯ',
      title: 'Egyszerű mondatok',
      subtitle: 'Van и vannak: наличие и местонахождение',
      type: 'info',
      note: 'Van и vannak — формы глагола lenni в третьем лице настоящего времени. Van относится к одному предмету, vannak — к нескольким. В русском они переводятся по ситуации: «есть», «находится», «стоит», «лежит» или не передаются отдельным словом.',
      warn: 'Определённый артикль a/az не означает «этот». A könyv az asztalon van — «Книга находится на столе» или естественно «Книга на столе». Для «эта книга» нужно ez a könyv.',
      task: 'Сравните наличие нового предмета и местонахождение известного предмета. Затем составьте четыре предложения о комнате: с egy, с a/az, с множественным числом и с точным числом.',
      body: `
        <p><strong>Egyszerű mondatok</strong> означает «простые предложения». На этом слайде соединяются артикли, единственное и множественное число, слова комнаты и формы <b>van/vannak</b>.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-4 mb-2">1. Van и vannak — формы глагола, а не знак равенства</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Число</th><th>Возможный перевод</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="van" data-speak-lang="hu-HU">van</button></td>
            <td>единственное</td>
            <td>есть / находится / стоит / лежит</td>
            <td><button class="speak-btn" data-speak-text="A könyv itt van." data-speak-lang="hu-HU">A könyv itt van.</button> — Книга здесь.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vannak" data-speak-lang="hu-HU">vannak</button></td>
            <td>множественное</td>
            <td>есть / находятся / стоят / лежат</td>
            <td><button class="speak-btn" data-speak-text="A könyvek itt vannak." data-speak-lang="hu-HU">A könyvek itt vannak.</button> — Книги здесь.</td>
          </tr>
        </table>

        <div class="note">
          Не переводите <b>van</b> механически словом «равно есть», а <b>vannak</b> — «равно имеются». Выбирайте естественную русскую конструкцию.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Наличие: вводим новый предмет</h4>
        <p>Когда сообщается, что где-то есть новый или пока не определённый предмет, используется модель:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">Van + egy + существительное + место</div>
        </div>

        <table class="conj">
          <tr><th>Предложение</th><th>Перевод</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Itt van egy asztal." data-speak-lang="hu-HU">Itt van egy asztal.</button></td>
            <td>Здесь есть стол. / Вот стол.</td>
            <td>вводится один новый предмет</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van egy könyv az asztalon." data-speak-lang="hu-HU">Van egy könyv az asztalon.</button></td>
            <td>На столе есть одна / какая-то книга.</td>
            <td>книга упоминается впервые</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van egy lámpa a szobában." data-speak-lang="hu-HU">Van egy lámpa a szobában.</button></td>
            <td>В комнате есть лампа.</td>
            <td>наличие одного предмета</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Неопределённое и определённое множество</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Перевод</th><th>Что означает</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Vannak székek a szobában." data-speak-lang="hu-HU">Vannak székek a szobában.</button></td>
            <td>В комнате есть стулья.</td>
            <td>сообщается наличие неопределённых стульев</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Itt vannak a székek." data-speak-lang="hu-HU">Itt vannak a székek.</button></td>
            <td>Стулья здесь. / Вот стулья.</td>
            <td>речь о конкретных, уже известных стульях</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A székek a szobában vannak." data-speak-lang="hu-HU">A székek a szobában vannak.</button></td>
            <td>Стулья находятся в комнате.</td>
            <td>сообщается место конкретных стульев</td>
          </tr>
        </table>

        <div class="note">
          <span class="hu-word">Itt vannak a székek</span> не является нейтральным переводом «Здесь есть стулья»: артикль <b>a</b> показывает, что стулья уже определены.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Местонахождение известного предмета</h4>
        <p>Если предмет уже известен, безопасная нейтральная модель:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">a/az + предмет + место + van/vannak</div>
        </div>

        <table class="conj">
          <tr><th>Предложение</th><th>Естественный перевод</th><th>Число</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button></td>
            <td>Книга находится на столе. / Книга на столе.</td>
            <td>одна книга → van</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A könyvek az asztalon vannak." data-speak-lang="hu-HU">A könyvek az asztalon vannak.</button></td>
            <td>Книги находятся на столе. / Книги на столе.</td>
            <td>несколько книг → vannak</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A tükör a falon van." data-speak-lang="hu-HU">A tükör a falon van.</button></td>
            <td>Зеркало находится на стене.</td>
            <td>один предмет → van</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A lámpák az asztalon vannak." data-speak-lang="hu-HU">A lámpák az asztalon vannak.</button></td>
            <td>Лампы находятся на столе.</td>
            <td>множественное число → vannak</td>
          </tr>
        </table>

        <div class="note">
          <b>A könyv</b> означает «конкретная книга», а не обязательно «эта книга». Сравните:
          <span class="hu-word">a könyv</span> — книга;
          <span class="hu-word">ez a könyv</span> — эта книга.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. После точного числа используется van</h4>
        <p>После количественного числительного существительное остаётся в единственном числе. Поэтому сказуемое обычно тоже имеет форму единственного числа.</p>

        <table class="conj">
          <tr><th>Правильно</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két könyv van az asztalon." data-speak-lang="hu-HU">Két könyv van az asztalon.</button></td>
            <td>На столе две книги.</td>
            <td><s>Két könyvek vannak az asztalon.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Három szék van a szobában." data-speak-lang="hu-HU">Három szék van a szobában.</button></td>
            <td>В комнате три стула.</td>
            <td><s>Három székek vannak a szobában.</s></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Itt и ott</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Перевод</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="itt" data-speak-lang="hu-HU">itt</button></td>
            <td>здесь</td>
            <td><button class="speak-btn" data-speak-text="A könyv itt van." data-speak-lang="hu-HU">A könyv itt van.</button> — Книга здесь.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ott" data-speak-lang="hu-HU">ott</button></td>
            <td>там</td>
            <td><button class="speak-btn" data-speak-text="A szék ott van." data-speak-lang="hu-HU">A szék ott van.</button> — Стул там.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="itt vannak" data-speak-lang="hu-HU">itt vannak</button></td>
            <td>находятся здесь</td>
            <td><button class="speak-btn" data-speak-text="A könyvek itt vannak." data-speak-lang="hu-HU">A könyvek itt vannak.</button> — Книги здесь.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Когда van/vannak не нужны</h4>
        <p>При профессии, национальности или качестве в третьем лице настоящего времени связка опускается:</p>

        <table class="conj">
          <tr><th>Правильно</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A szék nagy." data-speak-lang="hu-HU">A szék nagy.</button></td>
            <td>Стул большой.</td>
            <td><s>A szék nagy van.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A székek nagyok." data-speak-lang="hu-HU">A székek nagyok.</button></td>
            <td>Стулья большие.</td>
            <td><s>A székek nagyok vannak.</s></td>
          </tr>
        </table>

        <div class="note">
          <b>Сравните функции:</b><br>
          <span class="hu-word">A szék nagy.</span> — Стул большой: качество, без van.<br>
          <span class="hu-word">A szék a szobában van.</span> — Стул находится в комнате: место, с van.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Готовые выражения места</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Перевод</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="az asztalon" data-speak-lang="hu-HU">az asztalon</button></td><td>на столе</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="a szobában" data-speak-lang="hu-HU">a szobában</button></td><td>в комнате</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="a falon" data-speak-lang="hu-HU">a falon</button></td><td>на стене</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="az ágy mellett" data-speak-lang="hu-HU">az ágy mellett</button></td><td>рядом с кроватью</td></tr>
        </table>

        <div class="note">
          Эти формы пока используйте как готовые выражения. Системное образование окончаний места изучается позже.
        </div>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Открыть самопроверку</summary>
          <ol class="tasklist mt-3">
            <li>В комнате есть лампа. → <b>Van egy lámpa a szobában.</b></li>
            <li>Книга на столе. → <b>A könyv az asztalon van.</b></li>
            <li>В комнате есть стулья. → <b>Vannak székek a szobában.</b></li>
            <li>Стулья здесь. → <b>Itt vannak a székek.</b></li>
            <li>На столе две книги. → <b>Két könyv van az asztalon.</b></li>
            <li>Стулья большие. → <b>A székek nagyok.</b></li>
          </ol>
        </details>

        <div class="note">
          <b>Итог:</b> сначала определите функцию предложения. Наличие нового предмета — <span class="hu-word">Van egy…</span>. Наличие нескольких неопределённых предметов — <span class="hu-word">Vannak…</span>. Место известного предмета — <span class="hu-word">A/az… helyen van/vannak</span>. Качество — без van/vannak.
        </div>
      `,
    },
    {
      id: 9,
      eyebrow: 'УРОК 3 · 9/11 · ДИАЛОГ',
      title: 'Párbeszéd a lakásban',
      subtitle: 'Разговор о квартире: комнаты, окна и количество',
      type: 'dialogue',
      note: 'В диалоге после числительных существительные стоят в единственном числе: két szoba, három ablak. Формы van также остаются в единственном числе.',
      warn: 'Не путайте конечную k основы со множественным числом. В слове ablak буква k является частью самого слова «окно». Множественное число — ablakok. В сочетании három ablak слово остаётся в единственном числе.',
      task: 'Сначала прослушайте весь диалог. Затем прочитайте его по ролям, поменяйтесь ролями и составьте собственную версию, заменив количество комнат, окон и описание квартиры.',
      activities: [P1_L3_READING, P1_L3_ROLEPLAY, L3_READING_ROOM],
      body: `
        <p>Это неофициальный разговор двух знакомых. Они обсуждают квартиру, количество комнат и окон.</p>

        <table class="conj">
          <tr>
            <th>Кто говорит</th>
            <th>Венгерская реплика</th>
            <th>Перевод</th>
            <th>Что тренируем</th>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Szia! Milyen szép a lakásod!" data-speak-lang="hu-HU">Szia! Milyen szép a lakásod!</button></td>
            <td>Привет! Какая у тебя красивая квартира!</td>
            <td>неофициальное приветствие и восклицание</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Köszönöm!" data-speak-lang="hu-HU">Köszönöm!</button></td>
            <td>Спасибо!</td>
            <td>короткая реакция</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Hány szoba van a lakásban?" data-speak-lang="hu-HU">Hány szoba van a lakásban?</button></td>
            <td>Сколько комнат в квартире?</td>
            <td>hány + существительное в единственном числе</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Két szoba van. Van még egy konyha és egy fürdőszoba." data-speak-lang="hu-HU">Két szoba van. Van még egy konyha és egy fürdőszoba.</button></td>
            <td>Есть две комнаты. Ещё есть кухня и ванная комната.</td>
            <td>после két используется szoba, а не szobák</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Milyen a nappali?" data-speak-lang="hu-HU">Milyen a nappali?</button></td>
            <td>Какая гостиная?</td>
            <td>вопрос о качестве или характеристике</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Nagy és világos." data-speak-lang="hu-HU">Nagy és világos.</button></td>
            <td>Большая и светлая.</td>
            <td>прилагательные без van</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Hány ablak van a nappaliban?" data-speak-lang="hu-HU">Hány ablak van a nappaliban?</button></td>
            <td>Сколько окон в гостиной?</td>
            <td>hány ablak, не hány ablakok</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Három nagy ablak van, ezért nagyon világos a nappali." data-speak-lang="hu-HU">Három nagy ablak van, ezért nagyon világos a nappali.</button></td>
            <td>Есть три больших окна, поэтому гостиная очень светлая.</td>
            <td>число + прилагательное + существительное в единственном числе</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Van erkély is?" data-speak-lang="hu-HU">Van erkély is?</button></td>
            <td>Есть ещё и балкон?</td>
            <td>вопрос о наличии</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Igen, van egy kis erkély." data-speak-lang="hu-HU">Igen, van egy kis erkély.</button></td>
            <td>Да, есть небольшой балкон.</td>
            <td>van egy + новый предмет</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Nagyon tetszik a lakásod." data-speak-lang="hu-HU">Nagyon tetszik a lakásod.</button></td>
            <td>Мне очень нравится твоя квартира.</td>
            <td>естественное завершение разговора</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Köszönöm." data-speak-lang="hu-HU">Köszönöm.</button></td>
            <td>Спасибо.</td>
            <td>заключительная реакция</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Milyen в вопросе и в восклицании</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Функция</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen a nappali?" data-speak-lang="hu-HU">Milyen a nappali?</button></td>
            <td>вопрос</td>
            <td>Какая гостиная?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen szép a lakásod!" data-speak-lang="hu-HU">Milyen szép a lakásod!</button></td>
            <td>восклицание</td>
            <td>Какая у тебя красивая квартира!</td>
          </tr>
        </table>

        <div class="note">
          В вопросе <span class="hu-word">milyen</span> означает «какой / какая». В конструкции
          <span class="hu-word">Milyen szép…!</span> оно усиливает восклицание: «Какой красивый…!» или «Какая красивая…!».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. После hány и числительного — единственное число</h4>
        <table class="conj">
          <tr><th>Правильно</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány szoba van?" data-speak-lang="hu-HU">Hány szoba van?</button></td>
            <td>Сколько комнат?</td>
            <td><s>Hány szobák vannak?</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két szoba van." data-speak-lang="hu-HU">Két szoba van.</button></td>
            <td>Есть две комнаты.</td>
            <td><s>Két szobák vannak.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány ablak van?" data-speak-lang="hu-HU">Hány ablak van?</button></td>
            <td>Сколько окон?</td>
            <td><s>Hány ablakok vannak?</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Három nagy ablak van." data-speak-lang="hu-HU">Három nagy ablak van.</button></td>
            <td>Есть три больших окна.</td>
            <td><s>Három nagy ablakok vannak.</s></td>
          </tr>
        </table>

        <div class="warn">
          <b>Особенно важно:</b> в слове <span class="hu-word">ablak</span> конечная <b>k</b> принадлежит основе.
          Единственное число — <span class="hu-word">ablak</span>, множественное число —
          <span class="hu-word">ablakok</span>. Поэтому <span class="hu-word">három ablak</span>
          является формой единственного числа после числительного.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Комнаты и другие помещения</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Перевод</th><th>Форма в диалоге</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lakás" data-speak-lang="hu-HU">lakás</button></td>
            <td>квартира / жильё</td>
            <td><button class="speak-btn" data-speak-text="a lakásban" data-speak-lang="hu-HU">a lakásban</button> — в квартире</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szoba" data-speak-lang="hu-HU">szoba</button></td>
            <td>комната</td>
            <td><button class="speak-btn" data-speak-text="két szoba" data-speak-lang="hu-HU">két szoba</button> — две комнаты</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nappali" data-speak-lang="hu-HU">nappali</button></td>
            <td>гостиная</td>
            <td><button class="speak-btn" data-speak-text="a nappaliban" data-speak-lang="hu-HU">a nappaliban</button> — в гостиной</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="konyha" data-speak-lang="hu-HU">konyha</button></td>
            <td>кухня</td>
            <td><button class="speak-btn" data-speak-text="egy konyha" data-speak-lang="hu-HU">egy konyha</button> — одна кухня</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fürdőszoba" data-speak-lang="hu-HU">fürdőszoba</button></td>
            <td>ванная комната</td>
            <td><button class="speak-btn" data-speak-text="egy fürdőszoba" data-speak-lang="hu-HU">egy fürdőszoba</button> — одна ванная</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="erkély" data-speak-lang="hu-HU">erkély</button></td>
            <td>балкон</td>
            <td><button class="speak-btn" data-speak-text="egy kis erkély" data-speak-lang="hu-HU">egy kis erkély</button> — небольшой балкон</td>
          </tr>
        </table>

        <div class="note">
          В ответе на <span class="hu-word">Hány szoba van?</span> комнаты считаются отдельно.
          Кухня и ванная называются дополнительными помещениями:
          <span class="hu-word">Két szoba van. Van még egy konyha és egy fürdőszoba.</span>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Прилагательные в диалоге</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Перевод</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU">szép</button></td>
            <td>красивый / красивая</td>
            <td><button class="speak-btn" data-speak-text="szép lakás" data-speak-lang="hu-HU">szép lakás</button> — красивая квартира</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU">nagy</button></td>
            <td>большой / большая</td>
            <td><button class="speak-btn" data-speak-text="három nagy ablak" data-speak-lang="hu-HU">három nagy ablak</button> — три больших окна</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="világos" data-speak-lang="hu-HU">világos</button></td>
            <td>светлый / светлая</td>
            <td><button class="speak-btn" data-speak-text="A nappali világos." data-speak-lang="hu-HU">A nappali világos.</button> — Гостиная светлая.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kis" data-speak-lang="hu-HU">kis</button></td>
            <td>маленький / небольшой</td>
            <td><button class="speak-btn" data-speak-text="egy kis erkély" data-speak-lang="hu-HU">egy kis erkély</button> — небольшой балкон</td>
          </tr>
        </table>

        <div class="note">
          После числа порядок такой:
          <span class="hu-word">число + прилагательное + существительное</span>:
          <span class="hu-word">három nagy ablak</span>.
          И прилагательное, и существительное остаются в основной форме.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как читать диалог по ролям</h4>
        <ol class="tasklist">
          <li>Первый раз прочитайте только роль A.</li>
          <li>Второй раз прочитайте только роль B.</li>
          <li>Третий раз прочитайте весь диалог без русского перевода.</li>
          <li>Замените két и három другими числами.</li>
          <li>Замените nagy, világos и kis другими знакомыми прилагательными.</li>
        </ol>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Шаблон собственного диалога</summary>
          <p class="mt-3">
            <b>A:</b> Szia! Milyen szép a lakásod! Hány szoba van a lakásban?<br>
            <b>B:</b> Köszönöm! [число] szoba van. Van még egy konyha és egy fürdőszoba.<br>
            <b>A:</b> Milyen a nappali?<br>
            <b>B:</b> [прилагательное] és [прилагательное].<br>
            <b>A:</b> Hány ablak van a nappaliban?<br>
            <b>B:</b> [число] [прилагательное] ablak van.
          </p>
        </details>

        <div class="note">
          <b>Итог:</b> этот диалог тренирует не суффикс множественного числа, а правило
          <span class="hu-word">hány / число + существительное в единственном числе + van</span>.
        </div>
      `,
    },
    {
      id: 10,
      eyebrow: 'УРОК 3 · 10/11 · УПРАЖНЕНИЯ',
      title: 'Gyakorlatok',
      subtitle: 'Итоговая самопроверка по артиклям, множественному числу и van/vannak',
      type: 'practice',
      note: 'Сначала выполните все задания письменно. Только после этого откройте ключ. Проверяйте не только перевод, но и определённость предмета, число существительного, форму van/vannak и порядок слов.',
      warn: 'Не путайте русское множественное число с венгерской формой после числительного. «Три стула» — három szék, а не három székek. Определённый артикль также не означает автоматически «этот».',
      task: 'Выполните шесть блоков. За каждый правильный отдельный ответ поставьте себе один балл. После проверки исправьте ошибки полным предложением.',
      activities: [P1_L3_PRACTICE, P1_L3_WRITING, L3_CP_WRITTEN_PHRASES, L3_WRITING_ROOM],
      optionalSpeaking: P1_L3_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Выберите a или az</h4>
        <p>Вставьте определённый артикль. Смотрите на первый произносимый звук слова сразу после артикля.</p>
        <ol class="tasklist">
          <li>___ ablak — конкретное окно</li>
          <li>___ szék — конкретный стул</li>
          <li>___ nagy alma — конкретное большое яблоко</li>
          <li>___ új ház — конкретный новый дом</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Образуйте множественное число</h4>
        <p>Запишите полные формы, включая долгие гласные и изменения основы.</p>
        <table class="conj">
          <tr><th>Единственное число</th><th>Множественное число</th><th>Перевод</th></tr>
          <tr><td>kert</td><td>________________</td><td>сад → сады</td></tr>
          <tr><td>alma</td><td>________________</td><td>яблоко → яблоки</td></tr>
          <tr><td>autó</td><td>________________</td><td>машина → машины</td></tr>
          <tr><td>ház</td><td>________________</td><td>дом → дома</td></tr>
          <tr><td>tükör</td><td>________________</td><td>зеркало → зеркала</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Наличие или местонахождение</h4>
        <p>Переведите на венгерский. Определите, новый предмет или уже конкретный.</p>
        <ol class="tasklist">
          <li>В комнате есть лампа.</li>
          <li>Книга находится на столе.</li>
          <li>В комнате есть стулья.</li>
          <li>Стулья здесь.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Число + существительное</h4>
        <p>Переведите. После числа и hány существительное должно остаться в единственном числе.</p>
        <ol class="tasklist">
          <li>Здесь три стула.</li>
          <li>На столе две книги.</li>
          <li>Сколько окон в комнате?</li>
          <li>В комнате четыре окна.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Объясните правило</h4>
        <p>Ответьте по-русски и приведите правильный венгерский пример.</p>
        <ol class="tasklist">
          <li>Почему говорят <b>két könyv</b>, а не <s>két könyvek</s>?</li>
          <li>Почему говорят <b>A székek nagyok</b> без <i>vannak</i>?</li>
          <li>Почему в предложении <b>A székek a szobában vannak</b> форма <i>vannak</i> необходима?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Опишите комнату</h4>
        <p>Напишите 5–7 предложений. Обязательно включите:</p>
        <ul class="tick">
          <li>один новый предмет с <b>Van egy…</b>;</li>
          <li>неопределённое множество с <b>Vannak…</b>;</li>
          <li>место конкретного предмета с <b>a/az + van/vannak</b>;</li>
          <li>точное количество по модели <b>число + существительное в единственном числе + van</b>;</li>
          <li>одно качество без <b>van/vannak</b>.</li>
        </ul>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Открыть ключ самопроверки</summary>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">1. Артикли</h4>
          <ol class="tasklist">
            <li><button class="speak-btn" data-speak-text="az ablak" data-speak-lang="hu-HU">az ablak</button></li>
            <li><button class="speak-btn" data-speak-text="a szék" data-speak-lang="hu-HU">a szék</button></li>
            <li><button class="speak-btn" data-speak-text="a nagy alma" data-speak-lang="hu-HU">a nagy alma</button></li>
            <li><button class="speak-btn" data-speak-text="az új ház" data-speak-lang="hu-HU">az új ház</button></li>
          </ol>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">2. Множественное число</h4>
          <p class="font-mono font-bold">
            kert → kertek · alma → almák · autó → autók · ház → házak · tükör → tükrök
          </p>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">3. Наличие и место</h4>
          <ol class="tasklist">
            <li><button class="speak-btn" data-speak-text="Van egy lámpa a szobában." data-speak-lang="hu-HU">Van egy lámpa a szobában.</button></li>
            <li><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button></li>
            <li><button class="speak-btn" data-speak-text="Vannak székek a szobában." data-speak-lang="hu-HU">Vannak székek a szobában.</button></li>
            <li><button class="speak-btn" data-speak-text="Itt vannak a székek." data-speak-lang="hu-HU">Itt vannak a székek.</button></li>
          </ol>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">4. Числа</h4>
          <ol class="tasklist">
            <li><button class="speak-btn" data-speak-text="Három szék van itt." data-speak-lang="hu-HU">Három szék van itt.</button></li>
            <li><button class="speak-btn" data-speak-text="Két könyv van az asztalon." data-speak-lang="hu-HU">Két könyv van az asztalon.</button></li>
            <li><button class="speak-btn" data-speak-text="Hány ablak van a szobában?" data-speak-lang="hu-HU">Hány ablak van a szobában?</button></li>
            <li><button class="speak-btn" data-speak-text="Négy ablak van a szobában." data-speak-lang="hu-HU">Négy ablak van a szobában.</button></li>
          </ol>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">5. Объяснения</h4>
          <ul class="tick">
            <li>После количественного числительного существительное остаётся в единственном числе: <b>két könyv</b>.</li>
            <li><b>A székek nagyok</b> сообщает качество; в третьем лице настоящего времени связка с прилагательным не ставится.</li>
            <li><b>A székek a szobában vannak</b> сообщает местонахождение нескольких предметов, поэтому требуется <b>vannak</b>.</li>
          </ul>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">6. Возможный образец</h4>
          <button class="speak-btn" data-speak-text="Ez egy világos szoba. Van egy asztal a szobában. Vannak székek az asztal mellett. A könyvek az asztalon vannak. Két lámpa van az asztalon. Az ablakok nagyok." data-speak-lang="hu-HU">
            Ez egy világos szoba. Van egy asztal a szobában. Vannak székek az asztal mellett.
            A könyvek az asztalon vannak. Két lámpa van az asztalon. Az ablakok nagyok.
          </button>
        </details>

        <div class="note">
          <b>Оценка:</b> 16–20 правильных элементов — материал усвоен; 12–15 — повторите один проблемный слайд; меньше 12 — снова пройдите артикли, множественное число и van/vannak перед итогами урока.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: 'УРОК 3 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Контрольная карта третьего урока',
      note: 'Цель итогов — не запомнить названия правил, а уметь выбрать правильную форму в контексте: новый или известный предмет, один или несколько предметов, наличие, местонахождение, качество или точное количество.',
      warn: 'Форма -ak не является отдельной группой «неправильного множественного числа». -ok, -ak, -ek и -ök — нормальные варианты. Словарными могут быть точный выбор окончания и изменение основы: ház → házak, nap → napok, ló → lovak, tükör → tükrök.',
      task: 'Пройдите шесть итоговых блоков. Возвращайтесь к следующему уроку только после того, как можете самостоятельно составить примеры для каждого правила.',
      activities: [L3_EXIT_CHECK],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Существительное и род</h4>
        <ul class="tick">
          <li>Венгерское существительное не имеет грамматического мужского, женского или среднего рода.</li>
          <li>Одно слово может обозначать человека любого пола: <b>tanár</b> — учитель или учительница.</li>
          <li>Прилагательное перед существительным обычно остаётся в основной форме.</li>
        </ul>

        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th><th>Правило</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy ház" data-speak-lang="hu-HU">nagy ház</button></td>
            <td>большой дом</td>
            <td>прилагательное перед существительным не изменяется</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button></td>
            <td>большие дома</td>
            <td>множественное число выражено существительным</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button></td>
            <td>Дома большие.</td>
            <td>прилагательное-сказуемое получает множественную форму</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. A, az и egy</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Когда используется</th><th>Пример</th></tr>
          <tr>
            <td><b>a</b></td>
            <td>перед согласным звуком следующего слова</td>
            <td><button class="speak-btn" data-speak-text="a ház" data-speak-lang="hu-HU">a ház</button> — конкретный дом</td>
          </tr>
          <tr>
            <td><b>az</b></td>
            <td>перед гласным звуком следующего слова</td>
            <td><button class="speak-btn" data-speak-text="az alma" data-speak-lang="hu-HU">az alma</button> — конкретное яблоко</td>
          </tr>
          <tr>
            <td><b>egy</b></td>
            <td>число «один» или один новый неопределённый предмет</td>
            <td><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU">egy könyv</button> — одна / какая-то книга</td>
          </tr>
        </table>

        <div class="note">
          Смотрите на слово сразу после артикля:
          <span class="hu-word">a nagy alma</span>, но
          <span class="hu-word">az új ház</span>.
          Определённый артикль не означает автоматически «этот»:
          <span class="hu-word">a ház</span> — конкретный дом,
          <span class="hu-word">ez a ház</span> — этот дом.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Множественное число</h4>
        <p>Все формы множественного числа содержат конечный показатель <b>k</b>, но перед ним может появиться соединительная гласная, а основа иногда изменяется.</p>

        <table class="conj">
          <tr><th>Тип</th><th>Примеры</th><th>Что запомнить</th></tr>
          <tr>
            <td>после согласной</td>
            <td>
              <button class="speak-btn" data-speak-text="asztalok, házak, kertek, gyümölcsök" data-speak-lang="hu-HU">
                asztalok · házak · kertek · gyümölcsök
              </button>
            </td>
            <td>возможны варианты -ok, -ak, -ek, -ök</td>
          </tr>
          <tr>
            <td>конечные a и e</td>
            <td>
              <button class="speak-btn" data-speak-text="almák, kefék" data-speak-lang="hu-HU">
                alma → almák · kefe → kefék
              </button>
            </td>
            <td>a и e удлиняются</td>
          </tr>
          <tr>
            <td>после многих других гласных</td>
            <td>
              <button class="speak-btn" data-speak-text="autók, kocsik" data-speak-lang="hu-HU">
                autó → autók · kocsi → kocsik
              </button>
            </td>
            <td>часто добавляется только конечный k</td>
          </tr>
          <tr>
            <td>изменение основы</td>
            <td>
              <button class="speak-btn" data-speak-text="lovak, tükrök, kezek" data-speak-lang="hu-HU">
                ló → lovak · tükör → tükrök · kéz → kezek
              </button>
            </td>
            <td>учить единственное и множественное число парой</td>
          </tr>
        </table>

        <div class="warn">
          Не называйте все формы с <b>-ak</b> исключениями. Сравните:
          <span class="hu-word">ház → házak</span>,
          <span class="hu-word">láb → lábak</span>, но
          <span class="hu-word">nap → napok</span>.
          Непредсказуемым может быть точный вариант окончания или изменение основы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. После числа и hány — единственное число</h4>
        <table class="conj">
          <tr><th>Правильно</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
            <td>две книги</td>
            <td><s>két könyvek</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="három nagy ablak" data-speak-lang="hu-HU">három nagy ablak</button></td>
            <td>три больших окна</td>
            <td><s>három nagy ablakok</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hány szoba van?" data-speak-lang="hu-HU">Hány szoba van?</button></td>
            <td>Сколько комнат?</td>
            <td><s>Hány szobák vannak?</s></td>
          </tr>
        </table>

        <div class="note">
          При количественной группе сказуемое обычно тоже стоит в единственном числе:
          <span class="hu-word">Két könyv van az asztalon</span>,
          а не <s>Két könyv vannak…</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Van и vannak</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>один новый предмет</td>
            <td><button class="speak-btn" data-speak-text="Van egy könyv az asztalon." data-speak-lang="hu-HU">Van egy könyv az asztalon.</button></td>
            <td>На столе есть одна / какая-то книга.</td>
          </tr>
          <tr>
            <td>неопределённое множество</td>
            <td><button class="speak-btn" data-speak-text="Vannak könyvek az asztalon." data-speak-lang="hu-HU">Vannak könyvek az asztalon.</button></td>
            <td>На столе есть книги.</td>
          </tr>
          <tr>
            <td>место одного известного предмета</td>
            <td><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button></td>
            <td>Книга находится на столе.</td>
          </tr>
          <tr>
            <td>место нескольких известных предметов</td>
            <td><button class="speak-btn" data-speak-text="A könyvek az asztalon vannak." data-speak-lang="hu-HU">A könyvek az asztalon vannak.</button></td>
            <td>Книги находятся на столе.</td>
          </tr>
          <tr>
            <td>качество</td>
            <td><button class="speak-btn" data-speak-text="A könyvek újak." data-speak-lang="hu-HU">A könyvek újak.</button></td>
            <td>Книги новые. Van/vannak не ставятся.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Проверка готовности</h4>
        <p>Переходите к уроку 4, если можете без подсказки:</p>
        <ul class="tick">
          <li>выбрать <b>a</b> или <b>az</b> перед существительным и прилагательным;</li>
          <li>объяснить различие <b>egy könyv</b> и <b>a könyv</b>;</li>
          <li>образовать изученные формы множественного числа;</li>
          <li>построить фразу после числа и вопрос с <b>hány</b>;</li>
          <li>различить наличие, местонахождение и качество;</li>
          <li>описать комнату пятью самостоятельными предложениями.</li>
        </ul>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Финальная самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>конкретное новое окно → <b>az új ablak</b></li>
            <li>зеркало → зеркала → <b>tükör → tükrök</b></li>
            <li>В комнате есть стулья. → <b>Vannak székek a szobában.</b></li>
            <li>Стулья находятся в комнате. → <b>A székek a szobában vannak.</b></li>
            <li>Стулья большие. → <b>A székek nagyok.</b></li>
            <li>В комнате три стула. → <b>Három szék van a szobában.</b></li>
          </ol>
        </details>

        <div class="note">
          <b>Домашнее задание:</b> выберите 10 предметов дома. Для каждого запишите артикль, единственное и множественное число. Затем составьте минимум шесть предложений: с <b>egy</b>, с неопределённым множеством, с местонахождением, с качеством и с двумя разными числительными.
        </div>

        <div class="note">
          <b>Дальше:</b> урок 4 — <span class="hu-word">Jelen idő</span>, настоящее время и неопределённое спряжение глаголов.
        </div>
      `,
    }
  ],
  vocabulary: [
    { id: 'l3_v1', hu: 'a', ru: 'определённый артикль (перед согласной)', phonetic: '[а]', category: 'Артикли', exampleSentence: 'a ház' },
    { id: 'l3_v2', hu: 'az', ru: 'определённый артикль (перед гласной)', phonetic: '[аз]', category: 'Артикли', exampleSentence: 'az alma' },
    { id: 'l3_v3', hu: 'egy', ru: 'неопределённый артикль / один', phonetic: '[эдь]', category: 'Артикли', exampleSentence: 'egy könyv' },
    { id: 'l3_v4', hu: 'ház', ru: 'дом', phonetic: '[ха̄з]', category: 'Предметы', exampleSentence: 'A házak nagyok.', grammaticalTag: 'tobbes-szam-k', relatedLessonId: 3 },
    { id: 'l3_v5', hu: 'könyv', ru: 'книга', phonetic: '[кёнйв]', category: 'Предметы', exampleSentence: 'A könyvek itt vannak.' },
    { id: 'l3_v6', hu: 'asztal', ru: 'стол', phonetic: '[астал]', category: 'Предметы', exampleSentence: 'Az asztalok nagyok.' },
  ],
    quiz: [
    {
      id: 301,
      question: 'Какой определенный артикль ставится перед словом "ablak" (окно)?',
      options: ['a', 'az', 'egy', 'артикль не ставится'],
      correctIndex: 1,
      explanation: 'Перед словами, начинающимися с гласной буквы, используется артикль "az": az ablak.'
    },
    {
      id: 302,
      question: 'Какой суффикс образует множественное число венгерских существительных?',
      options: ['-s', '-t', '-k', '-n'],
      correctIndex: 2,
      explanation: 'Множественное число образуется прибавлением суффикса "-k" к основе слова (например, ház → házak, asztal → asztalok).'
    },
    {
      id: 303,
      question: 'Как образуется множественное число от слова "alma" (яблоко)?',
      options: ['almak', 'almák', 'almaok', 'almék'],
      correctIndex: 1,
      explanation: 'Слова, оканчивающиеся на "-a", удлиняют её в "-á" перед добавлением "-k": alma → almák.'
    },
    {
      id: 304,
      question: 'Как по-венгерски сказать "5 книг"?',
      options: ['öt könyvek', 'öt könyv', 'öt könyvet', 'könyv öt'],
      correctIndex: 1,
      explanation: 'После количественного числительного существительное остаётся в единственном числе: öt könyv — пять книг.'
    },
    {
      id: 305,
      question: 'Что из перечисленного НЕ является особенностью венгерского существительного?',
      options: [
        'Нет грамматического рода',
        'Прилагательное перед существительным не изменяется',
        'Существительные изменяются по родам (мужской, женский, средний)',
        'Множественное число и падежи добавляются в конец слова'
      ],
      correctIndex: 2,
      explanation: 'В венгерском языке НЕТ грамматического рода. Существительные не делятся на мужской, женский и средний род – в отличие от русского или немецкого языков.'
    },
    {
      id: 306,
      question: 'Как сказать «Здесь есть один / какой-то студент»?',
      options: ['Itt van egy diák.', 'Itt van a diák.', 'Itt vannak egy diák.', 'Itt van diákok.'],
      correctIndex: 0,
      explanation: 'Для одного или пока не определённого предмета используется egy: Itt van egy diák.'
    }
  ],
  objectives: [
    { id: 'l3_choose-article', text: 'Выбирать определённый артикль a или az перед словами, начинающимися с гласной или согласной.', skills: ['grammar', 'writing'] },
    { id: 'l3_form-plural', text: 'Образовывать множественное число существительных с помощью -k и связующих гласных.', skills: ['grammar', 'writing'] },
    { id: 'l3_use-egy', text: 'Употреблять неопределённый артикль egy для обозначения одного предмета.', skills: ['grammar', 'speaking'] },
    { id: 'l3_plural-nouns-reading', text: 'Читать и понимать существительные во множественном числе в коротком тексте.', skills: ['reading'] },
    { id: 'l3_write-plural', text: 'Писать короткие фразы с артиклями и существительными во множественном числе.', skills: ['writing', 'grammar'] },
  ],
};
