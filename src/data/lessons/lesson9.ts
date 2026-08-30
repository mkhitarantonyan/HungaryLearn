import type { Lesson, LessonActivity } from '../../types';

const COMPARATIVE_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l9-cp-comparative-forms', title: 'Контекстная практика: описание, сравнение и выбор', passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l9-comparative-1', prompt: 'Квартира A просторная, квартира B маленькая.', options: ['Az A lakás nagy, a B lakás kicsi.', 'Az A lakás olcsó, a B gyors.', 'Az A lakás nehéz, a B szép.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-2', prompt: 'Выбери естественную пару противоположностей.', options: ['olcsó ↔ drága', 'gyors ↔ szép', 'nagy ↔ kényelmes'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-3', prompt: 'Новая квартира больше.', options: ['Az új lakás nagyobb.', 'Az új lakás nagybb.', 'Az új lakás legnagy.'], correctIndex: 0 },
    { kind: 'textInput', id: 'l9-comparative-4', prompt: 'kicsi → меньше', accept: ['kisebb'] },
    { kind: 'textInput', id: 'l9-comparative-5', prompt: 'jó → лучше', accept: ['jobb'] },
    { kind: 'textInput', id: 'l9-comparative-6', prompt: 'szép → красивее', accept: ['szebb'] },
    { kind: 'singleChoice', id: 'l9-comparative-7', prompt: 'Квартира B дешевле квартиры A.', options: ['A B lakás olcsóbb, mint az A lakás.', 'Az A lakás olcsóbb, mint a B lakás.', 'A B lakás a legolcsóbb A.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-8', prompt: 'Автобус медленный, метро быстрее.', options: ['A busz lassú, a metró gyorsabb.', 'A busz gyorsabb, a metró lassúbb.', 'A metró leggyors busz.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-9', prompt: 'Как выразить предпочтение меньшему варианту?', options: ['Nekem a kisebb tetszik.', 'Nekem kisebb mint.', 'Én legkisebb jobb.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-10', prompt: 'Выбери вариант с простой причиной.', options: ['Ezt választom, mert olcsóbb.', 'Ezt választom, mint olcsó.', 'Ezt olcsóbb választás mert.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-11', prompt: 'Как сказать «это лучший вариант»?', options: ['Ez a jobb választás.', 'Ez a legjobb választás.', 'Ez jóbb választás.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l9-comparative-12', prompt: 'Телефон A дешевле, но телефон B лучше.', options: ['Az A telefon olcsóbb, de a B jobb.', 'Az A telefon drágább, és a B rosszabb.', 'Az A telefon olcsó mint legjobb.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-13', prompt: 'В каком варианте прилагательное перед существительным не согласуется?', options: ['nagy házak', 'nagyok házak', 'nagyot házak'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-14', prompt: 'Ты узнал, что квартира B очень шумная. Как отреагировать?', options: ['Ez hátrány, de még mindig olcsóbb.', 'Ez gyorsabb, mert zaj.', 'Ez a legzajos mint.'], correctIndex: 0 },
  ],
};

const APARTMENT_READING: LessonActivity = {
  kind: 'reading', id: 'l9-reading-apartments', title: 'Чтение: выбор квартиры', instructions: 'Сравни две квартиры по размеру, цене, месту, транспорту, шуму и состоянию.', passCount: 6,
  content: { type: 'prose', title: 'Melyik lakás jobb?', paragraphs: [
    'Dávid új lakást keres, és szombaton két lakást néz meg. Az A lakás a város központjában van. Hatvan négyzetméteres, világos és szép. Két nagy szobája van, és a bútorok újak. A metró csak három perc gyalog, ezért Dávid gyorsan beér a munkahelyére. A lakás azonban drága, és az utca este nagyon zajos.',
    'A B lakás kisebb: negyvenöt négyzetméteres. A város szélén van, ezért messzebb van Dávid munkahelyétől. Nincs metró a közelben, de két busz is jár arra. A ház és a bútorok régebbiek, viszont a lakás csendesebb és sokkal olcsóbb. Van egy kis erkélye is, ahol Dávid reggel kávézhat.',
    'Dávid sokáig gondolkodik, és minden fontos részletet pontosan leír. Szerinte az A lakás kényelmesebb a közlekedés miatt, de túl drága és zajos. A B lakás nem olyan nagy és nem olyan modern, de nyugodtabb. Végül a B lakást választja, mert az alacsonyabb ár fontosabb neki. A régi bútorokat később lassan kicseréli.',
  ] },
  questions: [
    { id: 'l9-reading-q1', question: 'Какая квартира больше?', options: ['A', 'B', 'они одинаковые'], correctIndex: 0 },
    { id: 'l9-reading-q2', question: 'Какая квартира дешевле?', options: ['A', 'B', 'не сказано'], correctIndex: 1 },
    { id: 'l9-reading-q3', question: 'Где находится квартира A?', options: ['в центре', 'на окраине', 'рядом с деревней'], correctIndex: 0 },
    { id: 'l9-reading-q4', question: 'Какое транспортное различие названо?', options: ['у A метро, у B автобусы', 'у обеих метро', 'у B только поезд'], correctIndex: 0 },
    { id: 'l9-reading-q5', question: 'Какой недостаток квартиры A?', options: ['она маленькая', 'она дорогая и шумная', 'в ней нет мебели'], correctIndex: 1 },
    { id: 'l9-reading-q6', question: 'Какой недостаток квартиры B?', options: ['она меньше и дальше от работы', 'она самая дорогая', 'она шумнее'], correctIndex: 0 },
    { id: 'l9-reading-q7', question: 'Что выбирает Давид?', options: ['квартиру A', 'квартиру B', 'ни одну'], correctIndex: 1 },
    { id: 'l9-reading-q8', question: 'Почему он делает такой выбор?', options: ['для него важнее низкая цена и спокойствие', 'ему нужен новый диван', 'он не пользуется транспортом'], correctIndex: 0 },
  ],
};

const COMPARISON_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l9-roleplay-apartment-choice', title: 'Ролевая игра: выбор квартиры', partnerLabel: 'Ingatlanos', completionMessage: 'Kiválasztottad a megfelelő lakást.', startTurnId: 'l9-rp-s1',
  turns: [
    { id: 'l9-rp-s1', speaker: 'waiter', prompt: 'Két lakást tudok mutatni. Mit szeretne tudni?', next: 'l9-rp-l1' },
    { id: 'l9-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси о цене.', model: 'Melyik lakás olcsóbb?', next: 'l9-rp-s2' },
    { id: 'l9-rp-s2', speaker: 'waiter', prompt: 'A B lakás olcsóbb, de kisebb.', next: 'l9-rp-l2' },
    { id: 'l9-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси о транспорте.', model: 'Melyik lakásnál jobb a közlekedés?', next: 'l9-rp-s3' },
    { id: 'l9-rp-s3', speaker: 'waiter', prompt: 'Az A lakás közelebb van a metróhoz.', next: 'l9-rp-l3' },
    { id: 'l9-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Сравни размер.', model: 'Az A lakás nagyobb, mint a B lakás.', next: 'l9-rp-s4' },
    { id: 'l9-rp-s4', speaker: 'waiter', prompt: 'Igen, viszont az A lakás utcája zajosabb.', next: 'l9-rp-l4' },
    { id: 'l9-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови один недостаток.', model: 'A zajos utca nekem nagy hátrány.', next: 'l9-rp-s5' },
    { id: 'l9-rp-s5', speaker: 'waiter', prompt: 'A B lakás csendesebb, és van erkélye.', next: 'l9-rp-l5' },
    { id: 'l9-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вырази предпочтение и причину.', model: 'Nekem a B lakás tetszik, mert olcsóbb és csendesebb.', next: 'l9-rp-s6' },
    { id: 'l9-rp-s6', speaker: 'waiter', prompt: 'Új információ: a B lakás bútorai régiek.', next: 'l9-rp-l6' },
    { id: 'l9-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Отреагируй на новую деталь.', model: 'Értem. Ez hátrány, de az ár fontosabb nekem.', next: 'l9-rp-s7' },
    { id: 'l9-rp-s7', speaker: 'waiter', prompt: 'Akkor melyiket választja?', next: 'l9-rp-l7' },
    { id: 'l9-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди окончательный выбор.', model: 'A B lakást választom. Szerintem ez jobb nekem.', next: 'l9-rp-s8' },
    { id: 'l9-rp-s8', speaker: 'waiter', prompt: 'Rendben. Megnézzük még egyszer?', next: 'l9-rp-l8' },
    { id: 'l9-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вежливо согласись и заверши.', model: 'Igen, köszönöm. Nézzük meg!', next: 'l9-rp-s9' },
    { id: 'l9-rp-s9', speaker: 'waiter', prompt: 'Menjünk!' },
  ],
};

const WRITING_COMPARISON: LessonActivity = {
  kind: 'writing', id: 'l9-writing-comparison', title: 'Письмо: сравни два объекта',
  prompt: 'Напиши 70–90 слов и сравни два вымышленных варианта. Укажи минимум три характеристики, три сравнительные формы, преимущество каждого варианта, один недостаток, окончательный выбор и простую причину.',
  modelAnswer: ['Két telefont hasonlítok össze. Az A telefon nagyobb és újabb, mint a B telefon. A képernyője szebb, ezért könnyebb rajta filmet nézni. Viszont az A telefon sokkal drágább, és nehezebb is. A B telefon kisebb és olcsóbb. Nem olyan gyors, de kényelmesebb a kezemben, és az akkumulátora jobb. Az A telefon előnye a nagy képernyő, a B telefon előnye az alacsonyabb ár. Én a B telefont választom, mert nekem az ár fontosabb.'],
  rubric: ['70–90 слов', 'минимум три характеристики', 'минимум три сравнительные формы', 'преимущества и недостаток', 'выбор и причина'],
};

const SPEAKING_COMPARISON = {
  title: 'Говорение: короткое сравнение',
  instructions: 'Говори 1–1.5 минуты и сравни два места или продукта. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Назови характеристики, преимущества, один недостаток и объясни предпочтение.',
  rubric: ['характеристики', 'сравнительные формы', 'предпочтение', 'простая причина'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l9-exit-check', title: 'Проверка целей урока 9', checks: [
    { objectiveId: 'l9_use-adjectives', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_form-comparative', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_form-superlative', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_use-mint', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_compare-people', activityId: 'l9-writing-comparison', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l9-roleplay-apartment-choice', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_9: Lesson = {
  id: 9,
  number: 9,
  level: 'A1',
  title: 'Урок 9 · Melléknevek & Összehasonlítás',
  subtitle: 'Прилагательные и степени сравнения',
  description: 'Прилагательные и сравнение в раннем A1: понятные характеристики, выбор между двумя вариантами, причина предпочтения и открытая текстовая практика.',
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
      activities: [COMPARATIVE_FORMS]
    },
    {
      id: 7,
      eyebrow: "УРОК 9 · 7/11 · ЧТЕНИЕ",
      title: "Melyik lakás jobb?",
      subtitle: "Сравнение двух квартир",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Tetszik ez a piros kabát?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tetszik ez a piros kabát?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szép, de a kék kabát szebb és olcsóbb." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szép, de a kék kabát szebb és olcsóbb.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Tényleg? És a fekete kabát?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tényleg? És a fekete kabát?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Az a legdrágább. A kék a legjobb választás." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Az a legdrágább. A kék a legjobb választás.</button></p>
   <div class="note">Диалог даёт контекст, но само чтение вслух не считается доказательством владения материалом.</div>
 `,
      activities: [APARTMENT_READING]
    },
    {
      id: 8,
      eyebrow: "УРОК 9 · 8/11 · ВЗАИМОДЕЙСТВИЕ",
      title: "Melyiket választja?",
      subtitle: "Выбор между двумя квартирами",
      body: `
   <p>Спроси о цене и характеристиках, назови недостаток, отреагируй на новую деталь и объясни окончательный выбор.</p>
   <div class="note">RolePlay остаётся PARTIAL.</div>
 `,
      activities: [COMPARISON_ROLEPLAY]
    },
    {
      id: 9,
      eyebrow: "УРОК 9 · 9/11 · ПИСЬМО",
      title: "Két lehetőség összehasonlítása",
      subtitle: "Связное сравнение 70–90 слов",
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
   <div class="note">Для людей вместо „öreg“ вежливее использовать <b>idős</b>. В письменном задании сравни характеристики, преимущества и недостатки двух вариантов.</div>
 `,
      activities: [WRITING_COMPARISON]
    },
    {
      id: 10,
      eyebrow: "УРОК 9 · 10/11 · САМОПРАКТИКА И AUDIO GAP",
      title: "Melléknév mint állítmány",
      subtitle: "Необязательное расширение",
      body: `
   <p><b>Дополнительно, только для распознавания:</b> прилагательное-сказуемое во множественном числе имеет форму множественного числа.</p>
   <p><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A ház nagy.</button> <span style="color:#8a7a68">(Дом большой — ед.ч.)</span></p>
   <p><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A házak nagyok.</button> <span style="color:#8a7a68">(Дома большие — мн.ч.: nagy + ok!)</span></p>
   <div class="warn">Сравни: <b>a nagy házak</b> и <b>A házak nagyok.</b>. Эта тема не входит в scoring L9.</div>
   <div class="note">В L9 намеренно нет learner-facing Listening и отдельного MP3. Narration, word audio и browser TTS не используются как замена.</div>
 `,
      optionalSpeaking: SPEAKING_COMPARISON
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
