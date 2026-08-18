import { Lesson, LessonActivity } from '../../types';

const L15_CP_DATIVE: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l15-cp-dative',
  title: 'Отработка: дательный падеж и обладание',
  passCount: 7,
  exercises: [
    { kind: 'singleChoice', id: 'l15-cp-dative-1', prompt: 'Выбери правильный суффикс дательного падежа: ház → ?', options: ['-nak', '-nek'], correctIndex: 0, explanation: 'ház — заднеязычное слово → -nak.' },
    { kind: 'singleChoice', id: 'l15-cp-dative-2', prompt: 'Выбери правильный суффикс: kert → ?', options: ['-nak', '-nek'], correctIndex: 1, explanation: 'kert — переднеязычное слово → -nek.' },
    { kind: 'singleChoice', id: 'l15-cp-dative-3', prompt: 'Выбери правильный суффикс: anya → ?', options: ['-nak', '-nek'], correctIndex: 0, explanation: 'anya — заднеязычное слово → anyának.' },
    { kind: 'fillGap', id: 'l15-cp-dative-4', prompt: '«Nekem van egy ___» (könyv → притяжательная форма 1-го лица)', accept: ['könyvem'], explanation: 'könyv + -em → könyvem.' },
    { kind: 'fillGap', id: 'l15-cp-dative-5', prompt: '«Neked van egy ___» (autó → притяжательная форма 2-го лица)', accept: ['autód'], explanation: 'autó + -d → autód (долгота ó сохраняется).' },
    { kind: 'fillGap', id: 'l15-cp-dative-6', prompt: '«___ autóm» — «у меня нет машины»', accept: ['nincs', 'Nincs'], explanation: 'Отрицание van — особое слово nincs.' },
    { kind: 'textInput', id: 'l15-cp-dative-7', prompt: 'Переведи: «У меня нет времени»', accept: ['Nincs időm.', 'Nincs időm', 'nincs időm'], explanation: 'nincs + idő + -m → Nincs időm.' },
    { kind: 'textInput', id: 'l15-cp-dative-8', prompt: 'Переведи: «Я даю кофе маме»', accept: ['Adok egy kávét anyámnak.', 'Adok egy kávét az anyámnak.', 'adok egy kávét anyámnak', 'adok egy kávét az anyámnak'], explanation: 'Косвенное дополнение → anyámnak (нейтрально: «Adok egy kávét anyámnak.»).' },
  ],
};

const L15_READING_MENU: LessonActivity = {
  kind: 'reading',
  id: 'l15-reading-menu',
  title: 'Чтение: меню (étlap)',
  instructions: 'Изучи меню и ответь на вопросы. Меню — это чтение, а не аудирование.',
  legend: '🌱 = vegetáriánus',
  passCount: 3,
  sections: [
    { id: 'levesek', title: 'Levesek', items: [
      { id: 'gulyasleves', name: 'Gulyásleves', price: 1850 },
      { id: 'zoldsegleves', name: 'Zöldségleves', price: 1250, vegetarian: true },
    ]},
    { id: 'foetelek', title: 'Főételek', items: [
      { id: 'rantottsajt', name: 'Rántott sajt', price: 2200, vegetarian: true },
      { id: 'sultcsirke', name: 'Sült csirke', price: 2600 },
      { id: 'grillezetthal', name: 'Grillezett hal', price: 2900 },
    ]},
    { id: 'italok', title: 'Italok', items: [
      { id: 'asvanyviz', name: 'Ásványvíz', price: 550 },
      { id: 'kave', name: 'Kávé', price: 700 },
      { id: 'narancsle', name: 'Narancslé', price: 800 },
    ]},
  ],
  questions: [
    { id: 'l15-menu-q1', question: 'Melyik kategóriában van az ásványvíz?', options: ['Levesek', 'Főételek', 'Italok'], correctIndex: 2, explanation: 'Ásványvíz — в разделе Italok.' },
    { id: 'l15-menu-q2', question: 'Mennyibe kerül a gulyásleves?', options: ['1250 Ft', '1850 Ft', '2200 Ft'], correctIndex: 1, explanation: 'Gulyásleves стоит 1850 Ft.' },
    { id: 'l15-menu-q3', question: 'Mit rendelhet egy vegetáriánus vendég?', options: ['Sült csirke', 'Rántott sajt és zöldségleves', 'Grillezett hal'], correctIndex: 1, explanation: 'Позиции с 🌱 — вегетарианские: rántott sajt и zöldségleves.' },
    { id: 'l15-menu-q4', question: 'Melyik olcsóbb: a kávé vagy a narancslé?', options: ['A kávé', 'A narancslé', 'Ugyanannyi'], correctIndex: 0, explanation: 'Kávé — 700 Ft, narancslé — 800 Ft.' },
  ],
};

const L15_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l15-listening-restaurant',
  title: 'Аудирование: диалог в ресторане',
  assetId: 'l15_listening_restaurant',
  audioStatus: 'missing',
  passCount: 3,
  transcript: 'Pincér: Jó estét! Mit kér?\nVendég: Szeretnék egy gulyáslevest és egy limonádét.\nPincér: Sajnos nincs limonádé, csak narancslé van.\nVendég: Rendben, akkor egy narancslevet kérek.\nPincér: És főételt?\nVendég: Igen, egy rántott sajtot kérek.\nPincér: Rendben, hozom rögtön.',
  questions: [
    { id: 'l15-list-q1', question: 'Hol játszódik a párbeszéd?', options: ['A boltban', 'Az étteremben', 'A vasútállomáson'], correctIndex: 1, explanation: 'Это заказ в ресторане.' },
    { id: 'l15-list-q2', question: 'Mit szeretne inni a vendég?', options: ['Limonádét', 'Kávét', 'Narancslevet'], correctIndex: 0, explanation: 'Vendég просит limonádét.' },
    { id: 'l15-list-q3', question: 'Mi nincs az étteremben?', options: ['Narancslé', 'Limonádé', 'Rántott sajt'], correctIndex: 1, explanation: 'Limonádé нет — есть только narancslé.' },
    { id: 'l15-list-q4', question: 'Milyen főételt kér a vendég?', options: ['Grillezett halat', 'Sült csirkét', 'Rántott sajtot'], correctIndex: 2, explanation: 'Главное блюдо — rántott sajt.' },
  ],
};

const L15_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay',
  id: 'l15-roleplay-restaurant',
  title: 'Ролевая игра: заказ в ресторане',
  startTurnId: 'l15-rp-g1',
  turns: [
    { id: 'l15-rp-g1', speaker: 'learner', responseMode: 'recorded', prompt: 'Шаг 1 (model): повтори модель.', model: 'Kérek egy levest.', next: 'l15-rp-g2' },
    { id: 'l15-rp-g2', speaker: 'learner', responseMode: 'choice', prompt: 'Шаг 2 (substitution): «Kérek egy ______.» Выбери правильную форму.', options: ['Kérek egy salátát.', 'Kérek egy saláta.', 'Kérek egy kávé.'], branches: [
      { choice: 'Kérek egy salátát.', correct: true, nextTurnId: 'l15-rp-g3' },
      { choice: 'Kérek egy saláta.', correct: false, feedback: 'Нужен винительный падеж: saláta → salátát.', nextTurnId: 'l15-rp-g2' },
      { choice: 'Kérek egy kávé.', correct: false, feedback: 'Нужен винительный падеж: kávé → kávét.', nextTurnId: 'l15-rp-g2' },
    ]},
    { id: 'l15-rp-g3', speaker: 'learner', responseMode: 'recorded', prompt: 'Шаг 3 (guided): «Mit kér inni?» — ответь по образцу.', model: 'Egy ásványvizet kérek.', next: 'l15-rp-g4' },
    { id: 'l15-rp-g4', speaker: 'learner', responseMode: 'choice', prompt: 'Шаг 4 (preference): выбери, что сказать о еде.', options: ['Szeretem a gulyáslevest.', 'Ízlik nekem a leves.', 'Nem ízlik nekem a hal.'], branches: [
      { choice: 'Szeretem a gulyáslevest.', correct: true, nextTurnId: 'l15-rp-g5' },
      { choice: 'Ízlik nekem a leves.', correct: true, nextTurnId: 'l15-rp-g5' },
      { choice: 'Nem ízlik nekem a hal.', correct: true, nextTurnId: 'l15-rp-g5' },
    ]},
    { id: 'l15-rp-g5', speaker: 'learner', responseMode: 'recorded', prompt: 'Mondd el, mit szeretsz vagy mi ízlik neked.', model: 'Szeretem a gulyáslevest. (vagy: Nekem ízlik a leves.)', next: 'l15-rp-w1' },
    { id: 'l15-rp-w1', speaker: 'waiter', prompt: 'Ügyes! Most próbáld egyedül. Jó estét! Mit kér?', next: 'l15-rp-l1' },
    { id: 'l15-rp-l1', speaker: 'learner', responseMode: 'recorded', prompt: 'Закажи блюдо (запиши свой ответ).', model: 'Kérek egy gulyáslevest.', next: 'l15-rp-w2' },
    { id: 'l15-rp-w2', speaker: 'waiter', prompt: 'És mit kér inni?', next: 'l15-rp-drink' },
    { id: 'l15-rp-drink', speaker: 'learner', responseMode: 'choice', prompt: 'Что будешь пить? (structured choice)', options: ['Egy limonádét kérek.', 'Egy narancslevet kérek.', 'Egy ásványvizet kérek.'], branches: [
      { choice: 'Egy limonádét kérek.', correct: true, nextTurnId: 'l15-rp-w3' },
      { choice: 'Egy narancslevet kérek.', correct: true, nextTurnId: 'l15-rp-w4' },
      { choice: 'Egy ásványvizet kérek.', correct: true, nextTurnId: 'l15-rp-w4' },
    ]},
    { id: 'l15-rp-w3', speaker: 'waiter', prompt: 'Sajnos nincs limonádé, csak narancslé van.', next: 'l15-rp-l3' },
    { id: 'l15-rp-l3', speaker: 'learner', responseMode: 'choice', prompt: 'Как отреагируешь?', options: ['Rendben, akkor narancslevet kérek.', 'Nem kérek semmit.'], branches: [
      { choice: 'Rendben, akkor narancslevet kérek.', correct: true, nextTurnId: 'l15-rp-w4' },
      { choice: 'Nem kérek semmit.', correct: true, nextTurnId: 'l15-rp-w4' },
    ]},
    { id: 'l15-rp-w4', speaker: 'waiter', prompt: 'Rendben, hozom rögtön.', next: 'l15-rp-stage' },
    { id: 'l15-rp-stage', speaker: 'stage', stageLabel: 'Később, az étkezés után…', prompt: 'ПОЗЖЕ · ПОСЛЕ ЕДЫ', next: 'l15-rp-w5' },
    { id: 'l15-rp-w5', speaker: 'waiter', prompt: 'Kér még valamit?', next: 'l15-rp-l5' },
    { id: 'l15-rp-l5', speaker: 'learner', responseMode: 'recorded', prompt: 'Попроси счёт (запиши свой ответ).', model: 'Nem, köszönöm. A számlát kérem.', next: 'l15-rp-w6' },
    { id: 'l15-rp-w6', speaker: 'waiter', prompt: 'Természetesen, azonnal hozom.' },
  ],
};

const L15_WRITING: LessonActivity = {
  kind: 'writing',
  id: 'l15-writing-preferences',
  title: 'Письмо: сообщение другу',
  prompt: 'Напиши короткое сообщение другу перед походом в ресторан (3–4 фразы): что ты любишь/не любишь и что хотел бы заказать.',
  modelAnswer: [
    'Szeretem a gulyáslevest.',
    'A halat nem szeretem.',
    'Szeretnék egy salátát.',
    'Egy ásványvizet kérek.',
  ],
  rubric: [
    'task completion — все требуемые элементы есть (люблю/не люблю + заказ)',
    'clarity — текст понятен другу',
    'target grammar — Szeretem + винительный, Szeretnék + винительный, вежливые chunks',
    'vocabulary — еда и напитки из урока',
    'communicative adequacy — сообщение достигает цели',
  ],
};

const L15_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l15-exit-check',
  title: 'Exit check — достижение целей урока',
  checks: [
    { objectiveId: 'l15_name-food', activityId: 'l15-reading-menu', evidenceKind: 'reading' },
    { objectiveId: 'l15_name-food', activityId: 'l15-roleplay-restaurant', evidenceKind: 'speaking' },
    { objectiveId: 'l15_form-dative', activityId: 'l15-cp-dative', evidenceKind: 'grammar' },
    { objectiveId: 'l15_use-have-construction', activityId: 'l15-cp-dative', evidenceKind: 'grammar' },
    { objectiveId: 'l15_express-likes', activityId: 'l15-writing-preferences', evidenceKind: 'writing' },
    { objectiveId: 'l15_express-likes', activityId: 'l15-roleplay-restaurant', evidenceKind: 'speaking' },
    { objectiveId: 'l15_order-food', activityId: 'l15-roleplay-restaurant', evidenceKind: 'interaction' },
    { objectiveId: 'l15_understand-restaurant-dialogue', activityId: 'l15-listening-restaurant', evidenceKind: 'listening' },
  ],
};

export const LESSON_15: Lesson = {
  id: 15,
  number: 15,
  level: 'A2',
  title: 'Урок 15 · Ételek és étterem',
  subtitle: 'Еда и дательный падеж (-nak / -nek)',
  description: 'Дательный падеж (-nak/-nek), конструкция «у меня есть» (nekem van), отрицание обладания (nincs), словарь блюд и заказ в ресторане.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 15 · 1/12 · ДАТЕЛЬНЫЙ ПАДЕЖ",
      title: "A részes eset",
      subtitle: "-nak/-nek — «кому», «для кого»",
      body: `
   <p>Суффикс <span class="hu-word">-nak/-nek</span> соответствует русскому дательному падежу («кому?», «для кого?»). Присоединяется напрямую, без соединительной гласной (гласная уже есть в самом суффиксе).</p>
   <table class="conj">
     <tr><th>Слово</th><th>+ -nak/-nek</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button></td><td><button class="speak-btn" data-speak-text="háznak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> háznak</button></td><td>дому/для дома</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kert</button></td><td><button class="speak-btn" data-speak-text="kertnek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertnek</button></td><td>саду/для сада</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="anya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anya</button></td><td><button class="speak-btn" data-speak-text="anyának" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyának</button></td><td>маме/для мамы</td></tr>
   </table>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 15 · 2/12 · МЕСТОИМЕНИЯ",
      title: "Névmások részes esete",
      subtitle: "«Мне», «тебе», «ему»...",
      body: `
   <table class="conj">
     <tr><th>Именительный</th><th>Дательный</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="nekem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekem</button></td><td>мне</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="neked" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> neked</button></td><td>тебе</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="neki" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> neki</button></td><td>ему/ей</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="nekünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekünk</button></td><td>нам</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="nektek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nektek</button></td><td>вам</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="nekik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekik</button></td><td>им</td></tr>
   </table>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 15 · 3/12 · ГЛАВНОЕ ПРИМЕНЕНИЕ",
      title: "„Nekem van...”",
      subtitle: "Как сказать «у меня есть» — вспоминаем 8-й урок",
      body: `
   <p>В венгерском нет отдельного глагола «иметь». Обладание выражается конструкцией <b>[дательный падеж владельца] + van/vannak + [существительное с притяжательным суффиксом]</b>:</p>
   <p><button class="speak-btn" data-speak-text="Nekem van egy házam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nekem van egy házam.</button> <span style="color:#8a7a68">(У меня есть дом — дословно «мне есть дом-мой»)</span></p>
   <p><button class="speak-btn" data-speak-text="Neked van egy autód." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Neked van egy autód.</button> <span style="color:#8a7a68">(У тебя есть машина)</span></p>
   <p><button class="speak-btn" data-speak-text="Neki van egy testvére." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Neki van egy testvére.</button> <span style="color:#8a7a68">(У него есть сестра/брат)</span></p>
   <div class="note">Заметьте: сочетаются сразу две темы курса — дательный падеж (этот урок) и притяжательный суффикс (8-й урок). Именно так и работает венгерская грамматика — темы постоянно комбинируются друг с другом.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 15 · 4/12 · ОТРИЦАНИЕ",
      title: "„Nincs”",
      subtitle: "«У меня нет...»",
      body: `
   <p>Отрицательная форма van — не „nem van“, а особое слово <span class="hu-word">nincs</span> (ед. ч.) / <span class="hu-word">nincsenek</span> (мн. ч.):</p>
   <p><button class="speak-btn" data-speak-text="Nincs autóm." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincs autóm.</button> <span style="color:#8a7a68">(У меня нет машины)</span></p>
   <p><button class="speak-btn" data-speak-text="Nincsenek gyerekei." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincsenek gyerekei.</button> <span style="color:#8a7a68">(У неё нет детей)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 15 · 5/12 · КОСВЕННОЕ ДОПОЛНЕНИЕ",
      title: "Adok valamit valakinek",
      subtitle: "«Даю кому-то что-то»",
      activities: [L15_CP_DATIVE],
      body: `
   <p>Классическое применение дательного падежа — глаголы передачи (давать, показывать, говорить кому-то):</p>
   <p><button class="speak-btn" data-speak-text="Adok egy könyvet a barátomnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Adok egy könyvet a barátomnak.</button> <span style="color:#8a7a68">(Даю книгу другу)</span></p>
   <p><button class="speak-btn" data-speak-text="Megmutatom a fényképet anyámnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Megmutatom a fényképet anyámnak.</button> <span style="color:#8a7a68">(Показываю фотографию маме)</span></p>
   <div class="note">Порядок обычно такой: Подлежащее – глагол – прямое дополнение (винительный) – косвенное дополнение (дательный), но венгерский допускает и другой порядок ради выделения нужного слова.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 15 · 6/12 · СЛОВАРЬ",
      title: "Ételek",
      subtitle: "Еда — базовый словарь",
      activities: [L15_READING_MENU],
      note: 'Szeretem a gulyáslevest. — люблю / мне вообще нравится гуляшевый суп (gulyáslevest — винительный падеж, объект). Nekem ízlik a gulyásleves. — гуляшевый суп нравится мне на вкус (gulyásleves — подлежащее, nekem — experiencer). Nem ízlik nekem a hal. — рыба мне не по вкусу.',
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="leves" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> leves</button> — суп</p>
       <p><button class="speak-btn" data-speak-text="hús" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hús</button> — мясо</p>
       <p><button class="speak-btn" data-speak-text="hal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hal</button> — рыба</p>
       <p><button class="speak-btn" data-speak-text="zöldség" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> zöldség</button> — овощи</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="sajt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> sajt</button> — сыр</p>
       <p><button class="speak-btn" data-speak-text="saláta" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> saláta</button> — салат</p>
       <p><button class="speak-btn" data-speak-text="desszert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> desszert</button> — десерт</p>
       <p><button class="speak-btn" data-speak-text="víz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> víz</button> — вода</p>
     </div>
   </div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 15 · 7/12 · В РЕСТОРАНЕ",
      title: "Az étteremben",
      subtitle: "Полезные фразы для заказа",
      activities: [L15_LISTENING],
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretnék ezt rendelni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék ezt rendelni.</button> <span style="color:#8a7a68">(Я хотел бы это заказать)</span></p>
   <p><button class="speak-btn" data-speak-text="Mit ajánl?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit ajánl?</button> <span style="color:#8a7a68">(Что вы посоветуете?)</span></p>
   <p><button class="speak-btn" data-speak-text="Kérem a számlát." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kérem a számlát.</button> <span style="color:#8a7a68">(Принесите мне, пожалуйста, счёт)</span></p>
   <div class="note"><button class="speak-btn" data-speak-text="Szeretnék ezt rendelni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék ezt rendelni.</button> использует условное наклонение („szeretnék“ — «я хотел бы») — вежливая форма заказа. Условное наклонение целиком разберём в 23-м уроке, а пока просто выучите эту фразу как готовый блок.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 15 · 8/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Заказ в ресторане",
      activities: [L15_ROLEPLAY],
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot! Mit ajánl?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot! Mit ajánl?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="A leves nagyon finom ma, és van friss hal is." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A leves nagyon finom ma, és van friss hal is.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Akkor kérek egy levest és egy halat." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Akkor kérek egy levest és egy halat.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Rendben, hozom rögtön." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Rendben, hozom rögtön.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух, затем составьте свой заказ из 3 блюд.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 15 · 9/12 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Собираем всё вместе",
      body: `
   <p><button class="speak-btn" data-speak-text="Van egy barátom Budapesten." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Van egy barátom Budapesten.</button> <span style="color:#8a7a68">(У меня есть друг в Будапеште)</span></p>
   <p><button class="speak-btn" data-speak-text="Ajándékot adok anyámnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ajándékot adok anyámnak.</button> <span style="color:#8a7a68">(Я даю подарок маме)</span></p>
   <p><button class="speak-btn" data-speak-text="Nincs időnk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincs időnk.</button> <span style="color:#8a7a68">(У нас нет времени)</span></p>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 15 · 10/12 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: [L15_WRITING],
      body: `
   <ol class="tasklist">
     <li>Переведите: «У меня есть книга» и «У меня нет книги»</li>
     <li>Поставьте „barát“ (друг) в дательный падеж</li>
     <li>Составьте предложение «Я даю яблоко другу», используя винительный и дательный падежи вместе</li>
     <li>Закажите в ресторане 2 блюда и напиток, используя фразы из этого урока</li>
     <li>Объясните разницу между „nem van“ и „nincs“</li>
   </ol>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 15 · 11/12 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Дательный падеж ещё не раз встретится — особенно в конструкциях с „kell“ (нужно) в 18-м уроке: „nekem kell“ (мне нужно). В следующем уроке — покупки и творительный падеж -val/-vel, у которого есть очень необычная фонетическая особенность.</p>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 15 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 15-го урока",
      activities: [L15_EXIT_CHECK],
      body: `
   <ul class="tick">
     <li>-nak/-nek — дательный падеж, «кому/для кого», присоединяется напрямую</li>
     <li>Обладание: [дательный] + van/vannak + [существительное с притяжательным суффиксом]</li>
     <li>Отрицание обладания — особое слово nincs/nincsenek, а не „nem van“</li>
     <li>Косвенное дополнение при глаголах передачи (давать, показывать)</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Составьте список из 5 вещей, которые у вас есть, и 3, которых у вас нет, используя конструкцию с дательным падежом. В следующем уроке — покупки и творительный падеж.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l15_v1", hu: "leves", ru: "суп", category: "Food Core", exampleSentence: "A leves nagyon finom.", ipa: "[ˈlɛvɛʃ]" },
    { id: "l15_v2", hu: "hús", ru: "мясо", category: "Food Core", exampleSentence: "Friss hús.", ipa: "[ˈhuːʃ]" },
    { id: "l15_v3", hu: "hal", ru: "рыба", category: "Food Core", exampleSentence: "A hal egészséges.", ipa: "[ˈhɒl]" },
    { id: "l15_v4", hu: "zöldség", ru: "овощи", category: "Food Core", exampleSentence: "Sok zöldséget eszem.", ipa: "[ˈzøltʃeːɡ]" },
    { id: "l15_v5", hu: "sajt", ru: "сыр", category: "Food Core", exampleSentence: "A finom sajt.", ipa: "[ˈʃɒjt]" },
    { id: "l15_v6", hu: "saláta", ru: "салат", category: "Food Core", exampleSentence: "Friss saláta.", ipa: "[ˈʃɒlaːtɒ]" },
    { id: "l15_v7", hu: "desszert", ru: "десерт", category: "Food Core", exampleSentence: "A desszert édes.", ipa: "[ˈdɛsːɛrt]" },
    { id: "l15_v8", hu: "víz", ru: "вода", category: "Food Core", exampleSentence: "Egy üveg víz.", ipa: "[ˈviːz]" },
    { id: "l15_v9", hu: "kér", ru: "просить / заказывать", category: "Functional Core", exampleSentence: "Kérek egy levest.", baseWord: "kér" },
    { id: "l15_v10", hu: "számla", ru: "счёт", category: "Functional Core", exampleSentence: "A számlát kérem." },
    { id: "l15_v11", hu: "nekem", ru: "мне", category: "Supporting Grammar", exampleSentence: "Nekem van egy könyvem." },
    { id: "l15_v12", hu: "nincs", ru: "нет (отрицание van)", category: "Supporting Grammar", exampleSentence: "Nincs autóm." },
    { id: "l15_v13", hu: "étlap", ru: "меню", category: "Passive Menu", exampleSentence: "Az étlap az asztalon van." },
    { id: "l15_v14", hu: "ital", ru: "напиток", category: "Passive Menu", exampleSentence: "Milyen italt kér?" },
    { id: "l15_v15", hu: "főétel", ru: "основное блюдо", category: "Passive Menu", exampleSentence: "A főétel nagyon finom." },
    { id: "l15_v16", hu: "ízlik", ru: "нравиться (на вкус)", category: "Functional Core", exampleSentence: "Nekem ízlik a leves.", ipa: "[ˈiːzlik]" }
  ],
  quiz: [
    {
      id: 1501,
      question: 'Какой суффикс выражает дательный падеж («кому / для кого»)?',
      options: ['-ban / -ben', '-nak / -nek', '-ba / -be', '-val / -vel'],
      correctIndex: 1,
      explanation: 'Дательный падеж в венгерском образуется с помощью суффиксов -nak (для задних гласных) и -nek (для передних гласных).'
    },
    {
      id: 1502,
      question: 'Как по-венгерски сказать «У меня есть машина»?',
      options: ['Én van autó', 'Nekem van egy autóm', 'Nekem autó van', 'Van én autóm'],
      correctIndex: 1,
      explanation: 'Конструкция обладания: [Дательный падеж] + van + [Существительное с притяжательным суффиксом] → Nekem van egy autóm.'
    },
    {
      id: 1503,
      question: 'Какое слово используется для отрицания обладания («У меня нет...») вместо «nem van»?',
      options: ['nem', 'nincs', 'semmi', 'soha'],
      correctIndex: 1,
      explanation: 'В венгерском языке отрицанием van является особое слово nincs (или nincsenek для множественного числа).'
    },
    {
      id: 1504,
      question: 'Как попросить счёт в ресторане по-венгерски?',
      options: ['Kérem a számlát', 'A számla van', 'Mit ajánl?', 'Szeretnék fizetni nem'],
      correctIndex: 0,
      explanation: 'Фраза «Kérem a számlát» переводится как «Принесите мне, пожалуйста, счёт».'
    },
    {
      id: 1505,
      question: 'Как сказать «я даю подарок маме» по-венгерски?',
      options: [
        'Ajándékot adok anyámnak',
        'Ajándékot adok anyám',
        'Ajándékot adok anyámhoz',
        'Ajándékot adok anyámnál'
      ],
      correctIndex: 0,
      explanation: 'Косвенное дополнение (кому?) требует дательного падежа: anya → anyának → anyámnak (моей маме). Правильный порядок: Ajándékot adok anyámnak.'
    },
    {
      id: 1506,
      question: 'Заполните пропуск: «Nekem van egy ___» (от слова ház — «дом»).',
      options: [
        'ház',
        'házam',
        'háznak',
        'házat'
      ],
      correctIndex: 1,
      explanation: 'В конструкции обладания существительное получает притяжательный суффикс 1-го лица: ház → házam («мой дом»). Nekem van egy házam = «У меня есть дом».'
    }
  ],
  objectives: [
    { id: 'l15_name-food', text: 'Называть продукты питания и блюда по-венгерски.', skills: ['speaking', 'reading', 'writing'] },
    { id: 'l15_form-dative', text: 'Образовывать дательный падеж с помощью -nak/-nek.', skills: ['grammar', 'writing'] },
    { id: 'l15_use-have-construction', text: 'Выражать обладание конструкцией «nekem van …» (у меня есть).', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l15_express-likes', text: 'Выражать предпочтения в еде (szeretem, ízlik).', skills: ['speaking', 'writing'] },
    { id: 'l15_order-food', text: 'Делать заказ в кафе или ресторане.', skills: ['speaking', 'interaction'] },
    { id: 'l15_understand-restaurant-dialogue', text: 'Понимать основную информацию и детали короткого диалога в ресторане.', skills: ['listening'] },
  ],
};
