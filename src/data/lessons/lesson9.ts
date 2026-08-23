import type { Lesson, LessonActivity } from '../../types';

const ATTRIBUTIVE_ADJECTIVES: LessonActivity = {
  kind: 'controlledPractice', id: 'l9-cp-attributive-adjectives', title: 'Прилагательное перед существительным', passCount: 5,
  exercises: [
    { kind: 'singleChoice', id: 'l9-attributive-1', prompt: 'большие дома', options: ['nagy házak', 'nagyabb házak', 'nagy ház'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-attributive-2', prompt: 'большой дом (винительный падеж)', options: ['nagy ház', 'nagy házat', 'nagyot ház'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l9-attributive-3', prompt: 'новая книга', options: ['újabb könyv', 'új könyv', 'újak könyv'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l9-attributive-4', prompt: 'красные машины', options: ['piros autó', 'pirosabb autók', 'piros autók'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l9-attributive-5', prompt: 'дорогой кофе (винительный падеж)', options: ['drága kávét', 'drágát kávé', 'drágább kávét'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-attributive-6', prompt: 'красивые города', options: ['szépek város', 'szép városok', 'szebb városok'], correctIndex: 1 },
  ],
};

const COMPARATIVE_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l9-cp-comparative-forms', title: 'Частые сравнительные формы', passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l9-comparative-1', prompt: 'nagy → больше', accept: ['nagyobb'] },
    { kind: 'textInput', id: 'l9-comparative-2', prompt: 'kicsi → меньше', accept: ['kisebb'] },
    { kind: 'textInput', id: 'l9-comparative-3', prompt: 'szép → красивее', accept: ['szebb'] },
    { kind: 'textInput', id: 'l9-comparative-4', prompt: 'jó → лучше', accept: ['jobb'] },
    { kind: 'textInput', id: 'l9-comparative-5', prompt: 'drága → дороже', accept: ['drágább'] },
    { kind: 'textInput', id: 'l9-comparative-6', prompt: 'olcsó → дешевле', accept: ['olcsóbb'] },
    { kind: 'textInput', id: 'l9-comparative-7', prompt: 'új → новее', accept: ['újabb'] },
    { kind: 'textInput', id: 'l9-comparative-8', prompt: 'gyors → быстрее', accept: ['gyorsabb'] },
    { kind: 'textInput', id: 'l9-comparative-9', prompt: 'lassú → медленнее', accept: ['lassabb'] },
    { kind: 'textInput', id: 'l9-comparative-10', prompt: 'nehéz → труднее / тяжелее', accept: ['nehezebb'] },
  ],
};

const SUPERLATIVE_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l9-cp-superlative-forms', title: 'Сравнительная → превосходная', passCount: 5,
  exercises: [
    { kind: 'textInput', id: 'l9-superlative-1', prompt: 'nagyobb → самый большой', accept: ['legnagyobb'] },
    { kind: 'textInput', id: 'l9-superlative-2', prompt: 'kisebb → самый маленький', accept: ['legkisebb'] },
    { kind: 'textInput', id: 'l9-superlative-3', prompt: 'szebb → самый красивый', accept: ['legszebb'] },
    { kind: 'textInput', id: 'l9-superlative-4', prompt: 'jobb → лучший', accept: ['legjobb'] },
    { kind: 'textInput', id: 'l9-superlative-5', prompt: 'drágább → самый дорогой', accept: ['legdrágább'] },
    { kind: 'textInput', id: 'l9-superlative-6', prompt: 'olcsóbb → самый дешёвый', accept: ['legolcsóbb'] },
  ],
};

const MINT_COMPARISONS: LessonActivity = {
  kind: 'controlledPractice', id: 'l9-cp-mint-comparisons', title: 'Сравнения с mint', passCount: 4,
  exercises: [
    { kind: 'singleChoice', id: 'l9-mint-1', prompt: 'Этот дом больше, чем тот дом.', options: ['Ez a ház nagyobb, mint az a ház.', 'Ez a ház nagy, az a ház.', 'Az a ház nagyobb, mint ez a ház.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-mint-2', prompt: 'Кофе лучше, чем чай.', options: ['A tea jobb, mint a kávé.', 'A kávé jobb, mint a tea.', 'A kávé a legjobb tea.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l9-mint-3', prompt: 'Поезд быстрее, чем автобус.', options: ['A busz gyorsabb, mint a vonat.', 'A vonat a leggyorsabb busz.', 'A vonat gyorsabb, mint a busz.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l9-mint-4', prompt: 'Это пальто дешевле, чем чёрное пальто.', options: ['Ez a kabát olcsóbb, mint a fekete kabát.', 'A fekete kabát olcsóbb, mint ez a kabát.', 'Ez a kabát a legolcsóbb fekete kabát.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-mint-5', prompt: 'Венгерский язык труднее, чем английский.', options: ['Az angol nehezebb, mint a magyar nyelv.', 'A magyar nyelv nehezebb, mint az angol.', 'A magyar nyelv a legnehezebb angol.'], correctIndex: 1 },
  ],
};

const WRITING_COMPARISON: LessonActivity = {
  kind: 'writing', id: 'l9-writing-comparison', title: 'Письмо: сравни два объекта',
  prompt: 'Напиши 3–5 связанных предложений о двух людях, местах или предметах. Используй минимум две сравнительные формы и минимум одно сравнение с mint. Превосходную форму можно добавить, если она уместна.',
  modelAnswer: ['A piros kabát szép.', 'A kék kabát szebb, mint a piros kabát.', 'A kék kabát olcsóbb is.', 'Szerintem a kék kabát a legjobb választás.'],
  rubric: ['Написано 3–5 связанных предложений', 'Есть минимум две сравнительные формы', 'Есть минимум одно осмысленное сравнение с mint'],
};

const RECORD_COMPARISON: LessonActivity = {
  kind: 'recording', id: 'l9-record-comparison', title: 'Говорение: короткое сравнение',
  instructions: 'Запиши короткое сравнение двух людей, мест или предметов. Сам факт записи остаётся PARTIAL evidence и не подтверждает языковую правильность без проверки.',
  targetText: 'A kék kabát szebb, mint a piros kabát. A kék kabát olcsóbb is. Szerintem ez a legjobb választás.',
  targetTranslation: 'Синее пальто красивее красного. Синее пальто также дешевле. По-моему, это лучший выбор.',
  rubric: ['Есть минимум две сравнительные формы', 'Есть осмысленная конструкция с mint', 'Сравнение состоит из нескольких связанных фраз'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l9-exit-check', title: 'Exit check — цели урока 9', checks: [
    { objectiveId: 'l9_use-adjectives', activityId: 'l9-cp-attributive-adjectives', evidenceKind: 'grammar' },
    { objectiveId: 'l9_form-comparative', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_form-superlative', activityId: 'l9-cp-superlative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_use-mint', activityId: 'l9-cp-mint-comparisons', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l9-record-comparison', evidenceKind: 'speaking' }] },
    { objectiveId: 'l9_compare-people', activityId: 'l9-writing-comparison', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l9-record-comparison', evidenceKind: 'speaking' }] },
  ],
};

export const LESSON_9: Lesson = {
  id: 9,
  number: 9,
  level: 'A1',
  title: 'Урок 9 · Melléknevek & Összehasonlítás',
  subtitle: 'Прилагательные и степени сравнения',
  description: 'Прилагательные перед существительным, частые сравнительные формы, конструкции с mint, превосходная степень и короткие практические сравнения.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 9 · 1/11 · ПРИЛАГАТЕЛЬНЫЕ",
      title: "Melléknevek",
      subtitle: "Прилагательные — основы",
      body: `
   <p>В обычной атрибутивной позиции прилагательное стоит <b>перед</b> существительным и не получает суффиксы числа или падежа: их несёт существительное.</p>
   <p><button class="speak-btn" data-speak-text="nagy ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy ház</button> <span style="color:#8a7a68">(большой дом)</span></p>
   <p><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy házak</button> <span style="color:#8a7a68">(большие дома)</span> — <i>обратите внимание: «nagy» не получило суффикс множественного числа -k!</i></p>
   <p><button class="speak-btn" data-speak-text="nagy házat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy házat</button> <span style="color:#8a7a68">(большой дом - винительный)</span> — <i>«nagy» не получило суффикс -t!</i></p>
   <div class="note">Модель урока: <b>nagy ház — nagy házak — nagy házat</b>. Перед существительным форма прилагательного обычно остаётся той же.</div>
 `,
      activities: [ATTRIBUTIVE_ADJECTIVES]
    },
    {
      id: 2,
      eyebrow: "УРОК 9 · 2/11 · ПАРЫ ПРОТИВОПОЛОЖНОСТЕЙ",
      title: "Ellentétek",
      subtitle: "Частые прилагательные парами",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy</button> (большой) ↔ <button class="speak-btn" data-speak-text="kis / kicsi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kis / kicsi</button> (маленький)</p>
       <p><button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> jó</button> (хороший) ↔ <button class="speak-btn" data-speak-text="rossz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> rossz</button> (плохой)</p>
       <p><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szép</button> (красивый) ↔ <button class="speak-btn" data-speak-text="csúnya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> csúnya</button> (уродливый)</p>
       <p><button class="speak-btn" data-speak-text="új" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> új</button> (новый) ↔ <button class="speak-btn" data-speak-text="régi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> régi</button> (старый)</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="meleg" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> meleg</button> (тёплый) ↔ <button class="speak-btn" data-speak-text="hideg" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hideg</button> (холодный)</p>
       <p><button class="speak-btn" data-speak-text="drága" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> drága</button> (дорогой) ↔ <button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olcsó</button> (дешёвый)</p>
       <p><button class="speak-btn" data-speak-text="könnyű" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> könnyű</button> (лёгкий) ↔ <button class="speak-btn" data-speak-text="nehéz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nehéz</button> (трудный/тяжёлый)</p>
       <p><button class="speak-btn" data-speak-text="gyors" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gyors</button> (быстрый) ↔ <button class="speak-btn" data-speak-text="lassú" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lassú</button> (медленный)</p>
     </div>
   </div>
   <div class="note"><b>kis</b> — обычная форма перед существительным: <b>kis ház</b>. Форма <b>kicsi</b> тоже возможна перед существительным: <b>kicsi ház</b>, а также часто употребляется самостоятельно или как сказуемое: <b>A ház kicsi.</b></div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 9 · 3/11 · ЦВЕТА",
      title: "Színek",
      subtitle: "Названия цветов",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="piros / vörös" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> piros / vörös</button> — красный</p>
       <p><button class="speak-btn" data-speak-text="kék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kék</button> — синий / голубой</p>
       <p><button class="speak-btn" data-speak-text="zöld" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> zöld</button> — зелёный</p>
       <p><button class="speak-btn" data-speak-text="sárga" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> sárga</button> — жёлтый</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="fehér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fehér</button> — белый</p>
       <p><button class="speak-btn" data-speak-text="fekete" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fekete</button> — чёрный</p>
       <p><button class="speak-btn" data-speak-text="szürke" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szürke</button> — серый</p>
       <p><button class="speak-btn" data-speak-text="barna" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> barna</button> — коричневый</p>
     </div>
   </div>
   <div class="note">Для активного словаря используй <b>piros</b>. Слово <b>vörös</b> встречается в отдельных устойчивых сочетаниях, например <b>vörösbor</b> и <b>vöröshagyma</b>; это не универсальное различие оттенков.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 9 · 4/11 · СРАВНИТЕЛЬНАЯ СТЕПЕНЬ",
      title: "Középfok (-bb)",
      subtitle: "Как сказать «больше», «красивее»",
      body: `
   <p>Сравнительная степень часто содержит суффикс <span class="hu-word">-bb</span>, но конкретную форму лучше учить по частым моделям: основа и связующая гласная могут меняться.</p>
   <p><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagy</button> → <button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nagyobb</button> <span style="color:#8a7a68">(больше)</span></p>
   <p><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szép</button> → <button class="speak-btn" data-speak-text="szebb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szebb</button> <span style="color:#8a7a68">(красивее)</span></p>
   <p><button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olcsó</button> → <button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olcsóbb</button> <span style="color:#8a7a68">(дешевле)</span></p>
   <p><button class="speak-btn" data-speak-text="drága" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> drága</button> → <button class="speak-btn" data-speak-text="drágább" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> drágább</button> <span style="color:#8a7a68">(дороже)</span></p>
   <div class="note">Запомни частые модели: <b>nagy → nagyobb, szép → szebb, jó → jobb, drága → drágább, olcsó → olcsóbb, új → újabb, kicsi → kisebb</b>. У <b>régi</b> возможны формы <b>régibb</b> и <b>régebbi</b>, поэтому здесь она не проверяется как единственный точный ответ.</div>
 `,
      activities: [COMPARATIVE_FORMS]
    },
    {
      id: 5,
      eyebrow: "УРОК 9 · 5/11 · СРАВНЕНИЕ «MINT»",
      title: "Összehasonlítás (mint)",
      subtitle: "Как сказать «чем» при сравнении",
      body: `
   <p>Слово «чем» передаётся союзом <b>mint</b>:</p>
   <p><button class="speak-btn" data-speak-text="Ez a ház nagyobb, mint az a ház." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ez a ház nagyobb, mint az a ház.</button> <span style="color:#8a7a68">(Этот дом больше, чем тот дом)</span></p>
   <p><button class="speak-btn" data-speak-text="A kávé jobb, mint a tea." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A kávé jobb, mint a tea.</button> <span style="color:#8a7a68">(Кофе лучше, чем чай)</span></p>
   <p><button class="speak-btn" data-speak-text="A magyar nyelv nehezebb, mint az angol." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A magyar nyelv nehezebb, mint az angol.</button> <span style="color:#8a7a68">(Венгерский язык труднее, чем английский)</span></p>
 `,
      activities: [MINT_COMPARISONS]
    },
    {
      id: 6,
      eyebrow: "УРОК 9 · 6/11 · ПРЕВОСХОДНАЯ СТЕПЕНЬ",
      title: "Felsőfok (leg-)",
      subtitle: "Как сказать «самый большой»",
      body: `
   <p>Превосходная степень строится от сравнительной: <b>сравнительная форма → leg- + сравнительная форма</b>.</p>
   <p><button class="speak-btn" data-speak-text="legnagyobb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legnagyobb</button> <span style="color:#8a7a68">(самый большой)</span></p>
   <p><button class="speak-btn" data-speak-text="legszebb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legszebb</button> <span style="color:#8a7a68">(самый красивый)</span></p>
   <p><button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legjobb</button> <span style="color:#8a7a68">(лучший)</span></p>
   <div class="note"><b>jobb = лучше; legjobb = лучший.</b> Сначала вспомни сравнительную форму, затем добавь <b>leg-</b>.</div>
 `,
      activities: [SUPERLATIVE_FORMS]
    },
    {
      id: 7,
      eyebrow: "УРОК 9 · 7/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "В магазине одежды",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Tetszik ez a piros kabát?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tetszik ez a piros kabát?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szép, de a kék kabát szebb és olcsóbb." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szép, de a kék kabát szebb és olcsóbb.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Tényleg? És a fekete kabát?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tényleg? És a fekete kabát?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Az a legdrágább. A kék a legjobb választás." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Az a legdrágább. A kék a legjobb választás.</button></p>
   <div class="note">Диалог даёт контекст, но само чтение вслух не считается доказательством владения материалом.</div>
 `,
      activities: [RECORD_COMPARISON]
    },
    {
      id: 8,
      eyebrow: "УРОК 9 · 8/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      body: `
   <p>Теперь свяжи изученные формы в короткий текст: выбери двух людей, два места или два предмета и сравни их.</p>
   <div class="note">Нужны 3–5 предложений, минимум две сравнительные формы и минимум одна конструкция с <b>mint</b>.</div>
 `,
      activities: [WRITING_COMPARISON]
    },
    {
      id: 9,
      eyebrow: "УРОК 9 · 9/11 · РАСШИРЕННЫЙ СЛОВАРЬ",
      title: "Kiegészítő szókincs",
      subtitle: "Дополнительные прилагательные",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="magas" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> magas</button> (высокий) ↔ <button class="speak-btn" data-speak-text="alacsony" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> alacsony</button> (низкий)</p>
       <p><button class="speak-btn" data-speak-text="fiatal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fiatal</button> (молодой) ↔ <button class="speak-btn" data-speak-text="öreg / idős" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> öreg / idős</button> (пожилой/старый)</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="gazdag" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> gazdag</button> (богатый) ↔ <button class="speak-btn" data-speak-text="szegény" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szegény</button> (бедный)</p>
       <p><button class="speak-btn" data-speak-text="okos" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> okos</button> (умный) ↔ <button class="speak-btn" data-speak-text="buta" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> buta</button> (глупый)</p>
     </div>
   </div>
   <div class="note">Для людей вместо „öreg“ вежливее использовать слово <button class="speak-btn" data-speak-text="idős" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> idős</button> (в преклонном возрасте).</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 9 · 10/11 · ДОПОЛНИТЕЛЬНОЕ РАСПОЗНАВАНИЕ",
      title: "Melléknév mint állítmány",
      subtitle: "Необязательное расширение",
      body: `
   <p><b>Дополнительно, только для распознавания:</b> прилагательное-сказуемое во множественном числе имеет форму множественного числа.</p>
   <p><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A ház nagy.</button> <span style="color:#8a7a68">(Дом большой — ед.ч.)</span></p>
   <p><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A házak nagyok.</button> <span style="color:#8a7a68">(Дома большие — мн.ч.: nagy + ok!)</span></p>
   <div class="warn">Сравни: <b>a nagy házak</b> (прилагательное перед существительным) и <b>A házak nagyok.</b> (прилагательное-сказуемое). Эта тема не входит в тест, практику или ExitCheck урока 9.</div>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 9 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 9-го урока",
      body: `
   <ul class="tick">
     <li>Перед существительным прилагательное обычно не получает суффиксы числа и падежа: их несёт существительное</li>
     <li>Частые сравнительные формы нужно узнавать и образовывать по изученным моделям</li>
     <li>Стабильная конструкция сравнения: X + сравнительная форма + <b>mint</b> + Y</li>
     <li>Превосходная степень: <b>leg-</b> + сравнительная форма (jobb → legjobb)</li>
     <li>Коротко сравнивай людей, места и предметы в устной и письменной речи</li>
   </ul>
   <div class="note">В следующем уроке начнётся новая тема — выражение местоположения и направления.</div>
 `,
      activities: [EXIT_CHECK]
    }
  ],
  vocabulary: [
    { id: 'l9_v1', hu: 'nagy', ru: 'большой', category: 'Прилагательные' },
    { id: 'l9_v2', hu: 'kicsi', ru: 'маленький', category: 'Прилагательные' },
    { id: 'l9_v3', hu: 'jó', ru: 'хороший', category: 'Прилагательные' },
    { id: 'l9_v4', hu: 'rossz', ru: 'плохой', category: 'Прилагательные' },
    { id: 'l9_v5', hu: 'szép', ru: 'красивый', category: 'Прилагательные' },
    { id: 'l9_v6', hu: 'új', ru: 'новый', category: 'Прилагательные' },
    { id: 'l9_v7', hu: 'régi', ru: 'старый', category: 'Прилагательные' },
    { id: 'l9_v8', hu: 'drága', ru: 'дорогой', category: 'Прилагательные' },
    { id: 'l9_v9', hu: 'olcsó', ru: 'дешёвый', category: 'Прилагательные' },
    { id: 'l9_v10', hu: 'gyors', ru: 'быстрый', category: 'Прилагательные' },
    { id: 'l9_v11', hu: 'lassú', ru: 'медленный', category: 'Прилагательные' },
    { id: 'l9_v12', hu: 'mint', ru: 'чем (при сравнении)', category: 'Сравнение' },
    { id: 'l9_v13', hu: 'piros', ru: 'красный', category: 'Цвета' },
    { id: 'l9_v14', hu: 'kék', ru: 'синий', category: 'Цвета' },
    { id: 'l9_v15', hu: 'nagyobb', ru: 'больше', category: 'Сравнительная степень' },
    { id: 'l9_v16', hu: 'legjobb', ru: 'лучший', category: 'Превосходная степень' },
  ],
    quiz: [
    {
      id: 901,
      question: 'Как сказать "большие дома" по-венгерски?',
      options: [
        'nagy házak',
        'nagyobb házak',
        'nagy ház',
        'legnagyobb házak'
      ],
      correctIndex: 0,
      explanation: 'В сочетании nagy házak суффикс множественного числа получает существительное ház → házak, а прилагательное nagy остаётся в атрибутивной форме.'
    },
    {
      id: 902,
      question: 'Как по-венгерски сказать "красивее"?',
      options: ['szép', 'szebb', 'legszebb', 'szépen'],
      correctIndex: 1,
      explanation: 'Сравнительная степень образуется суффиксом -bb: szép → szebb. "legszebb" – это превосходная степень (самый красивый), "szépen" – наречие (красиво).'
    },
    {
      id: 903,
      question: 'Как сказать "лучший" по-венгерски?',
      options: ['jó', 'legjobb', 'legszebb', 'jobb'],
      correctIndex: 1,
      explanation: 'Частую цепочку нужно запомнить: jó → jobb → legjobb. Jobb означает «лучше», legjobb — «лучший».'
    },
    {
      id: 904,
      question: 'Как переводится предложение "A kávé jobb, mint a tea."?',
      options: [
        'Кофе лучше, чем чай',
        'Чай лучше, чем кофе',
        'Кофе такой же, как чай',
        'Кофе хуже, чем чай'
      ],
      correctIndex: 0,
      explanation: 'Союз "mint" означает "чем" при сравнении. "jobb" – сравнительная степень от "jó" (хороший → лучше). Правильный перевод: "Кофе лучше, чем чай" (урок 9, слайд 5).'
    },
    {
      id: 905,
      question: 'Как сказать «Этот поезд быстрее, чем автобус»?',
      options: [
        'A busz gyorsabb, mint ez a vonat.',
        'Ez a vonat gyorsabb, mint a busz.',
        'Ez a vonat gyors és a busz.',
        'Ez a vonat a leglassabb.'
      ],
      correctIndex: 1,
      explanation: 'Модель сравнения: X + сравнительная форма + mint + Y: Ez a vonat gyorsabb, mint a busz.'
    },
    {
      id: 906,
      question: 'Какая форма является превосходной степенью от olcsó?',
      options: [
        'olcsó',
        'olcsóbb',
        'legolcsóbb',
        'legolcsó'
      ],
      correctIndex: 2,
      explanation: 'Сначала образуется сравнительная форма olcsóbb, затем добавляется leg-: legolcsóbb.'
    }
  ],
  objectives: [
    { id: 'l9_use-adjectives', text: 'Правильно употреблять прилагательные перед существительным без согласования по числу и падежу.', skills: ['grammar', 'writing'] },
    { id: 'l9_form-comparative', text: 'Образовывать частые сравнительные формы с -bb по изученным моделям основы и связующих гласных.', skills: ['grammar', 'writing'] },
    { id: 'l9_form-superlative', text: 'Образовывать превосходную степень по модели: сравнительная форма → leg- + сравнительная форма.', skills: ['grammar', 'writing'] },
    { id: 'l9_use-mint', text: 'Строить сравнительные конструкции со словом mint.', skills: ['grammar', 'speaking'] },
    { id: 'l9_compare-people', text: 'Кратко сравнивать людей, места и предметы в устной и письменной речи.', skills: ['speaking', 'writing'] },
  ],
};
