import { Lesson, LessonActivity } from '../../types';

const L3_CP_ARTICLES: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l3-cp-articles',
  title: 'Отработка: a или az',
  passCount: 8,
  exercises: [
    { kind: 'singleChoice', id: 'l3-article-1', prompt: '___ ház (дом)', options: ['a', 'az'], correctIndex: 0, explanation: 'ház начинается с согласного звука → a ház.' },
    { kind: 'singleChoice', id: 'l3-article-2', prompt: '___ alma (яблоко)', options: ['a', 'az'], correctIndex: 1, explanation: 'alma начинается с гласного звука → az alma.' },
    { kind: 'singleChoice', id: 'l3-article-3', prompt: '___ könyv (книга)', options: ['a', 'az'], correctIndex: 0, explanation: 'könyv начинается с согласного звука → a könyv.' },
    { kind: 'singleChoice', id: 'l3-article-4', prompt: '___ asztal (стол)', options: ['a', 'az'], correctIndex: 1, explanation: 'asztal начинается с гласного звука → az asztal.' },
    { kind: 'singleChoice', id: 'l3-article-5', prompt: '___ szék (стул)', options: ['a', 'az'], correctIndex: 0, explanation: 'szék начинается с согласного звука → a szék.' },
    { kind: 'singleChoice', id: 'l3-article-6', prompt: '___ ablak (окно)', options: ['a', 'az'], correctIndex: 1, explanation: 'ablak начинается с гласного звука → az ablak.' },
    { kind: 'singleChoice', id: 'l3-article-7', prompt: '___ kert (сад)', options: ['a', 'az'], correctIndex: 0, explanation: 'kert начинается с согласного звука → a kert.' },
    { kind: 'singleChoice', id: 'l3-article-8', prompt: '___ ajtó (дверь)', options: ['a', 'az'], correctIndex: 1, explanation: 'ajtó начинается с гласного звука → az ajtó.' },
    { kind: 'singleChoice', id: 'l3-article-9', prompt: '___ kutya (собака)', options: ['a', 'az'], correctIndex: 0, explanation: 'kutya начинается с согласного звука → a kutya.' },
    { kind: 'singleChoice', id: 'l3-article-10', prompt: '___ autó (машина)', options: ['a', 'az'], correctIndex: 1, explanation: 'autó начинается с гласного звука → az autó.' },
  ],
};

const L3_CP_EGY: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l3-cp-egy',
  title: 'Значение: определённый предмет или egy',
  passCount: 5,
  exercises: [
    { kind: 'singleChoice', id: 'l3-egy-1', prompt: 'Речь о конкретном доме, уже известном собеседнику.', options: ['a ház', 'egy ház'], correctIndex: 0, explanation: 'Для конкретного известного предмета нужен определённый артикль: a ház.' },
    { kind: 'singleChoice', id: 'l3-egy-2', prompt: 'В комнате есть один / какой-то стол.', options: ['az asztal', 'egy asztal'], correctIndex: 1, explanation: 'Один или пока не определённый предмет: egy asztal.' },
    { kind: 'singleChoice', id: 'l3-egy-3', prompt: 'Речь о конкретном яблоке, которое уже показывали.', options: ['az alma', 'egy alma'], correctIndex: 0, explanation: 'Конкретный известный предмет: az alma.' },
    { kind: 'singleChoice', id: 'l3-egy-4', prompt: 'В комнате есть одна / какая-то лампа.', options: ['a lámpa', 'egy lámpa'], correctIndex: 1, explanation: 'Один или пока не определённый предмет: egy lámpa.' },
    { kind: 'singleChoice', id: 'l3-egy-5', prompt: 'Речь о конкретной книге, уже известной собеседнику.', options: ['a könyv', 'egy könyv'], correctIndex: 0, explanation: 'Конкретный известный предмет: a könyv.' },
    { kind: 'singleChoice', id: 'l3-egy-6', prompt: 'Речь о конкретном окне, которое уже упоминали.', options: ['az ablak', 'egy ablak'], correctIndex: 0, explanation: 'Конкретный известный предмет: az ablak.' },
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
  title: 'Письмо: артикль + существительное во множественном числе',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l3-phrase-1', prompt: 'Напиши: «эти / конкретные дома»', accept: ['a házak'], explanation: 'házak начинается с согласного звука → a házak.' },
    { kind: 'textInput', id: 'l3-phrase-2', prompt: 'Напиши: «эти / конкретные книги»', accept: ['a könyvek'], explanation: 'könyvek начинается с согласного звука → a könyvek.' },
    { kind: 'textInput', id: 'l3-phrase-3', prompt: 'Напиши: «эти / конкретные яблоки»', accept: ['az almák'], explanation: 'almák начинается с гласного звука → az almák.' },
    { kind: 'textInput', id: 'l3-phrase-4', prompt: 'Напиши: «эти / конкретные столы»', accept: ['az asztalok'], explanation: 'asztalok начинается с гласного звука → az asztalok.' },
    { kind: 'textInput', id: 'l3-phrase-5', prompt: 'Напиши: «эти / конкретные машины»', accept: ['az autók'], explanation: 'autók начинается с гласного звука → az autók.' },
  ],
};

const L3_WRITING_ROOM: LessonActivity = {
  kind: 'writing',
  id: 'l3-writing-room',
  title: 'Письмо: три фразы о комнате',
  prompt: 'Напиши три короткие фразы: назови один предмет с egy, группу предметов с a/az + множественное число и количество предметов по модели «два + существительное в единственном числе».',
  modelAnswer: [
    'Itt van egy asztal.',
    'Itt vannak a székek.',
    'Két ablak van.',
  ],
  rubric: [
    'Есть одна фраза с egy + существительное в единственном числе',
    'Есть одна фраза с a/az + существительное во множественном числе',
    'После числа существительное осталось в единственном числе',
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
      eyebrow: "УРОК 3 · 1/11 · СУЩЕСТВИТЕЛЬНОЕ",
      title: "A főnév",
      subtitle: "Основы венгерского существительного",
      body: `
   <p>Хорошая новость: венгерское существительное гораздо проще, чем, например, немецкое или русское.</p>
   <ul class="tick">
     <li><b>Нет грамматического рода</b> — ни одно существительное не является «женским» или «мужским»</li>
     <li>Существительные не изменяются в зависимости от прилагательного (прилагательное остается неизменным)</li>
     <li>Множественное число и падежи добавляются к концу слова (агглютинация)</li>
   </ul>
   <div class="note">Венгерский — «агглютинативный» язык. Это значит, что к слову «приклеиваются» суффиксы в ряд, каждый со своим четким значением. Этот принцип нам очень пригодится в последующих уроках о падежах.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 3 · 2/11 · ОПРЕДЕЛЕННЫЙ АРТИКЛЬ",
      title: "A határozott névelő",
      subtitle: "«a» и «az» — определенный артикль",
      activities: [L3_CP_ARTICLES],
      body: `
   <p>В венгерском языке есть определенный артикль, эквивалент английского «the», который ставится <b>перед</b> существительным.</p>
   <table class="conj">
     <tr><th>Правило</th><th>Пример</th></tr>
     <tr><td><b>a</b> — перед словом, начинающимся с согласной</td><td><button class="speak-btn" data-speak-text="a ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> a ház</button> (этот дом)</td></tr>
     <tr><td><b>az</b> — перед словом, начинающимся с гласной</td><td><button class="speak-btn" data-speak-text="az alma" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> az alma</button> (это яблоко)</td></tr>
   </table>
   <p><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A ház nagy.</button> <span style="color:#8a7a68">(Этот дом большой)</span></p>
   <div class="note">Выбор зависит от <b>первого звука следующего слова</b>, а не от грамматического признака слова — это очень простое и механическое правило.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 3 · 3/11 · НЕОПРЕДЕЛЕННЫЙ АРТИКЛЬ",
      title: "Az egy",
      subtitle: "«egy» — и «один», и неопределенный артикль",
      activities: [L3_CP_EGY],
      task: 'Устная практика: оглянись вокруг и назови два предмета по модели «egy + существительное». Запись не требуется.',
      body: `
   <p><span class="hu-word">egy</span> означает и число «один», и служит в качестве неопределенного артикля («a/an» в английском).</p>
   <p><button class="speak-btn" data-speak-text="egy ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> egy ház</button> <span style="color:#8a7a68">(какой-то дом / один дом)</span></p>
   <p><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> egy könyv</button> <span style="color:#8a7a68">(какая-то книга)</span></p>
   <div class="note">
     <p><b>Важно:</b> в изучаемом значении <span class="hu-word">egy</span> употребляется только с существительным в единственном числе. С формами множественного числа <span class="hu-word">egy</span> не используется.</p>
     <p>Наличие или отсутствие <b>a/az</b> перед существительным во множественном числе зависит от определённости и контекста. Не применяйте правило «множественное число = без артикля».</p>
     <p><button class="speak-btn" data-speak-text="Vannak könyvek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Vannak könyvek.</button> <span style="color:#8a7a68">(Есть книги.)</span></p>
     <p><button class="speak-btn" data-speak-text="A könyvek az asztalon vannak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A könyvek az asztalon vannak.</button> <span style="color:#8a7a68">(Книги находятся на столе.)</span></p>
     <p><button class="speak-btn" data-speak-text="Szeretem a könyveket." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretem a könyveket.</button> <span style="color:#8a7a68">(Я люблю книги.)</span></p>
   </div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 3 · 4/11 · МНОЖЕСТВЕННОЕ ЧИСЛО",
      title: "A többes szám",
      subtitle: "Множественное число — основная закономерность",
      body: `
   <p>Множественное число образуется с помощью суффикса <span class="hu-word">-k</span>. В словах, оканчивающихся на согласную, часто нужна соединительная гласная (по гармонии): <span class="hu-word">-ok / -ek / -ök</span>.</p>
   <table class="conj">
     <tr><th>Единственное</th><th>Множественное</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> asztal</button></td><td><button class="speak-btn" data-speak-text="asztalok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> asztalok</button></td><td>стол(ы)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kert</button></td><td><button class="speak-btn" data-speak-text="kertek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertek</button></td><td>сад(ы)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="gyümölcs" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyümölcs</button></td><td><button class="speak-btn" data-speak-text="gyümölcsök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyümölcsök</button></td><td>фрукт(ы)</td></tr>
   </table>
   <p>Если слово оканчивается на <b>гласную a или e</b>, то эта гласная удлиняется (a→á, e→é) и просто добавляется -k.</p>
   <table class="conj">
     <tr><th>Единственное</th><th>Множественное</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutya</button></td><td><button class="speak-btn" data-speak-text="kutyák" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kutyák</button></td><td>собака(и)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alma</button></td><td><button class="speak-btn" data-speak-text="almák" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> almák</button></td><td>яблоко(и)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kefe" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kefe</button></td><td><button class="speak-btn" data-speak-text="kefék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kefék</button></td><td>щетка(и)</td></tr>
   </table>
   <p>К словам, оканчивающимся на другие гласные (i, í, o, ó, u, ú, ö, ő, ü, ű), просто добавляется -k, без изменений.</p>
   <p><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autó</button> → <button class="speak-btn" data-speak-text="autók" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> autók</button> <span style="color:#8a7a68">(машина(ы))</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 3 · 5/11 · ИСКЛЮЧЕНИЯ",
      title: "Kivételek",
      subtitle: "Когда вместо -ok ставится -ak",
      body: `
   <p>Для слов с задними гласными (a, á, o, u), оканчивающихся на согласную, выбор между <b>-ok</b> и <b>-ak</b> не всегда предсказуем — некоторые часто используемые, особенно односложные, слова принимают -ak.</p>
   <table class="conj">
     <tr><th>Единственное</th><th>Множественное</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button></td><td><button class="speak-btn" data-speak-text="házak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> házak</button></td><td>дом(а)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="láb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> láb</button></td><td><button class="speak-btn" data-speak-text="lábak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lábak</button></td><td>нога(и)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="nap" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nap</button></td><td><button class="speak-btn" data-speak-text="napok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> napok</button></td><td>день(дни) / солнце(а)</td></tr>
   </table>
   <div class="warn">Множественное число слов этой группы лучше всего учить как словарный запас — вместе со словом, а не вычислять по правилу. Смотря в словарь, всегда обращайте внимание на форму множественного числа.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 3 · 6/11 · ЧИСЛА И МНОЖЕСТВЕННОЕ ЧИСЛО",
      title: "Számok és a főnév",
      subtitle: "Важное правило: после числительного существительное остается в единственном числе",
      body: `
   <div class="warn"><b>Один из главных сюрпризов:</b> когда перед существительным стоит конкретное число, существительное остается в <b>ЕДИНСТВЕННОМ ЧИСЛЕ</b>, а не во множественном — в отличие от русского и английского.</p>
   <p><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> két könyv</button> <span style="color:#8a7a68">(две книги — не «книг»)</span></p>
   <p><button class="speak-btn" data-speak-text="három ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> három ház</button> <span style="color:#8a7a68">(три дома — не «домов»)</span></p>
   <div class="note">Логика: само число уже указывает на количество, поэтому суффикс множественного числа был бы излишним. Это очень последовательное правило: оно работает всегда, без исключений.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 3 · 7/11 · СЛОВАРНЫЙ ЗАПАС",
      title: "Otthoni tárgyak",
      subtitle: "Домашние предметы — словарный запас",
      activities: [L3_CP_PLURALS],
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> asztal</button> — стол</p>
       <p><button class="speak-btn" data-speak-text="szék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szék</button> — стул</p>
       <p><button class="speak-btn" data-speak-text="ablak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ablak</button> — окно</p>
       <p><button class="speak-btn" data-speak-text="ajtó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ajtó</button> — дверь</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="ágy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ágy</button> — кровать</p>
       <p><button class="speak-btn" data-speak-text="lámpa" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lámpa</button> — лампа</p>
       <p><button class="speak-btn" data-speak-text="tükör" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tükör</button> — зеркало</p>
       <p><button class="speak-btn" data-speak-text="szőnyeg" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szőnyeg</button> — ковер</p>
     </div>
   </div>
   <div class="task">Задание 1. Образуйте множественное число для каждого из 6 слов выше (не подглядывая), затем проверьте себя с помощью кнопок 🔊.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 3 · 8/11 · ПРЕДЛОЖЕНИЯ",
      title: "Egyszerű mondatok",
      subtitle: "Простые предложения с «van/vannak»",
      body: `
   <p><button class="speak-btn" data-speak-text="Itt van egy asztal." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Itt van egy asztal.</button> <span style="color:#8a7a68">(Здесь есть стол)</span></p>
   <p><button class="speak-btn" data-speak-text="Itt vannak a székek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Itt vannak a székek.</button> <span style="color:#8a7a68">(Здесь есть стулья)</span></p>
   <p><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A könyv az asztalon van.</button> <span style="color:#8a7a68">(Эта книга на столе — падеж «-on» мы изучим в 11-м уроке)</span></p>
   <div class="note"><b>van</b> = «есть» (ед.ч.), <b>vannak</b> = «есть/имеются» (мн.ч.) — согласуется с числом подлежащего, как в русском.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 3 · 9/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "В квартире",
      activities: [L3_READING_ROOM],
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Milyen szép a lakásod! Hány szoba van?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Milyen szép a lakásod! Hány szoba van?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Köszönöm! Két szoba van, egy konyha és egy fürdőszoba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Köszönöm! Két szoba van, egy konyha és egy fürdőszoba.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="És hány ablak van a nappaliban?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> És hány ablak van a nappaliban?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Három nagy ablak van, nagyon világos a szoba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Három nagy ablak van, nagyon világos a szoba.</button></p>
   <div class="task">Задание 2. Прочитайте диалог вслух, обращая внимание на произношение множественного числа (окончание -k часто приглушается в быстрой речи, но должно оставаться четко слышимым).</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 3 · 10/11 · УПРАЖНЕНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверь себя",
      activities: [L3_CP_WRITTEN_PHRASES, L3_WRITING_ROOM],
      body: `
   <ol class="tasklist">
     <li>Поставьте правильный артикль (a/az): ___ ablak (окно), ___ szék (стул)</li>
     <li>Образуйте множественное число: „kert“, „alma“, „autó“, „ház“</li>
     <li>Переведите: «Здесь есть три стула» (помните: после числа — единственное число!)</li>
     <li>Объясните на русском, почему говорят „két könyv“, а не „két könyvek“</li>
     <li>Составьте 3 предложения с «van/vannak» о предметах в вашей комнате</li>
   </ol>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 3 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Краткое содержание 3-го урока",
      activities: [L3_EXIT_CHECK],
      body: `
   <ul class="tick">
     <li>Венгерское существительное не имеет рода</li>
     <li>Определенный артикль: <b>a</b> (перед согласной) / <b>az</b> (перед гласной)</li>
     <li>Неопределенный артикль: <b>egy</b> (также «один»)</li>
     <li>Множественное число: <b>-k</b>, с соединительной гласной (-ok/-ek/-ök) или с удлинением a→á/e→é</li>
     <li>Некоторые слова имеют неправильное множественное число (группа -ak) — учить отдельно</li>
     <li>После числа существительное остается в <b>единственном числе</b></li>
   </ul>
   <div class="note"><b>Домашнее задание:</b> запишите 10 предметов из вашего дома в единственном и множественном числе, рядом друг с другом. В следующем уроке мы перейдем к спряжению в настоящем времени — это первый шаг к построению полноценных предложений.</div>
 `
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
      explanation: 'После числительного существительное остается в ЕДИНСТВЕННОМ числе: öt könyv (пять книг).'
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
