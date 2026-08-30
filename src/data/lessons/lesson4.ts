import { Lesson, LessonActivity } from '../../types';

const L4_CP_RECOGNIZE_TEXT: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-recognize-text',
  title: 'Распознавание форм в тексте',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l4-recognize-text-1', prompt: 'tanulunk → напиши местоимение лица', accept: ['mi'], explanation: '-unk обозначает mi: tanulunk.' },
    { kind: 'textInput', id: 'l4-recognize-text-2', prompt: 'olvasol → напиши местоимение лица', accept: ['te'], explanation: 'После основы на s форма te получает -ol: olvasol.' },
    { kind: 'textInput', id: 'l4-recognize-text-3', prompt: 'írnak → напиши местоимение лица', accept: ['ők'], explanation: '-nak обозначает ők: írnak.' },
    { kind: 'textInput', id: 'l4-recognize-text-4', prompt: 'kérek → напиши местоимение лица', accept: ['én'], explanation: '-ek обозначает én: kérek.' },
    { kind: 'textInput', id: 'l4-recognize-text-5', prompt: 'vár → напиши местоимение лица', accept: ['ő'], explanation: 'У обычного глагола vár форма ő совпадает с основой.' },
  ],
};

const L4_CP_CONJUGATION: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-conjugation',
  title: 'Спряжение: лицо + глагол',
  passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l4-conjugation-1', prompt: 'én + tanul → ?', accept: ['tanulok'], explanation: 'tanul + -ok → tanulok.' },
    { kind: 'textInput', id: 'l4-conjugation-2', prompt: 'te + olvas → ?', accept: ['olvasol'], explanation: 'После основы на s форма te получает -ol: olvasol.' },
    { kind: 'textInput', id: 'l4-conjugation-3', prompt: 'ő + ír → ?', accept: ['ír'], explanation: 'У обычного глагола форма ő совпадает с основой: ír.' },
    { kind: 'textInput', id: 'l4-conjugation-4', prompt: 'mi + beszél → ?', accept: ['beszélünk'], explanation: 'Передние гласные требуют -ünk: beszélünk.' },
    { kind: 'textInput', id: 'l4-conjugation-5', prompt: 'ti + tanul → ?', accept: ['tanultok'], explanation: 'tanul + -tok → tanultok.' },
    { kind: 'textInput', id: 'l4-conjugation-6', prompt: 'ők + olvas → ?', accept: ['olvasnak'], explanation: 'Форма ők получает -nak: olvasnak.' },
    { kind: 'textInput', id: 'l4-conjugation-7', prompt: 'én + kér → ?', accept: ['kérek'], explanation: 'Передняя неогублённая основа: kér + -ek → kérek.' },
    { kind: 'textInput', id: 'l4-conjugation-8', prompt: 'mi + köt → ?', accept: ['kötünk'], explanation: 'Передняя огублённая основа: köt + -ünk → kötünk.' },
    { kind: 'textInput', id: 'l4-conjugation-9', prompt: 'ők + vár → ?', accept: ['várnak'], explanation: 'vár + -nak → várnak.' },
    { kind: 'textInput', id: 'l4-conjugation-10', prompt: 'te + ír → ?', accept: ['írsz'], explanation: 'ír + -sz → írsz.' },
  ],
};

const L4_CP_NEGATION: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-negation',
  title: 'Утверждение → отрицание с nem',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l4-negation-1', prompt: 'Сделай отрицательным: Tanulok.', accept: ['Nem tanulok.', 'nem tanulok'], explanation: 'nem ставится перед спрягаемым глаголом: Nem tanulok.' },
    { kind: 'textInput', id: 'l4-negation-2', prompt: 'Сделай отрицательным: Olvasol.', accept: ['Nem olvasol.', 'nem olvasol'], explanation: 'Nem olvasol.' },
    { kind: 'textInput', id: 'l4-negation-3', prompt: 'Сделай отрицательным: Péter ír.', accept: ['Péter nem ír.', 'péter nem ír'], explanation: 'Подлежащее сохраняется, nem стоит перед глаголом: Péter nem ír.' },
    { kind: 'textInput', id: 'l4-negation-4', prompt: 'Сделай отрицательным: Beszélünk.', accept: ['Nem beszélünk.', 'nem beszélünk'], explanation: 'Nem beszélünk.' },
    { kind: 'textInput', id: 'l4-negation-5', prompt: 'Сделай отрицательным: Ők dolgoznak.', accept: ['Ők nem dolgoznak.', 'ők nem dolgoznak', 'Nem dolgoznak.', 'nem dolgoznak'], explanation: 'nem ставится перед глаголом: Ők nem dolgoznak.' },
  ],
};

const L4_LISTENING_PRESENT_FORMS: LessonActivity = {
  kind: 'listening',
  id: 'l4-listening-present-forms',
  title: 'Аудирование: кто что делает?',
  assetId: 'l4_listening_present_forms',
  audioStatus: 'published',
  passCount: 4,
  transcript: 'Én minden nap magyarul tanulok.\nTe reggel otthon sokat olvasol.\nPéter most ír, Anna pedig olvas.\nMi magyarul beszélünk és együtt tanulunk.\nŐk minden nap dolgoznak.',
  questions: [
    { id: 'l4-listen-q1', question: 'Какое лицо выражено в первой реплике?', options: ['én', 'te', 'mi'], correctIndex: 0, explanation: 'В первой реплике слышно tanulok — форма én.' },
    { id: 'l4-listen-q2', question: 'Какое действие названо во второй реплике?', options: ['учиться — tanul', 'читать — olvas', 'писать — ír'], correctIndex: 1, explanation: 'Во второй реплике слышно olvasol — «ты читаешь».' },
    { id: 'l4-listen-q3', question: 'Какое лицо выражают формы глаголов в третьей реплике?', options: ['én', 'ő', 'ők'], correctIndex: 1, explanation: 'Péter ír и Anna olvas — обе формы относятся к ő.' },
    { id: 'l4-listen-q4', question: 'Какое лицо выражено в четвёртой реплике?', options: ['ő', 'mi', 'ti'], correctIndex: 1, explanation: 'В четвёртой реплике слышно beszélünk — форма mi.' },
    { id: 'l4-listen-q5', question: 'Какое лицо выражено в пятой реплике?', options: ['te', 'ti', 'ők'], correctIndex: 2, explanation: 'В пятой реплике слышно dolgoznak — форма ők.' },
  ],
};

const L4_CP_QUESTIONS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-questions',
  title: 'Построй общий вопрос',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l4-question-1', prompt: 'Te magyarul tanulsz. → ?', accept: ['Magyarul tanulsz?', 'Te magyarul tanulsz?', 'magyarul tanulsz', 'te magyarul tanulsz'], explanation: 'В общем вопросе инверсия не нужна; местоимение te можно опустить: Magyarul tanulsz?' },
    { kind: 'textInput', id: 'l4-question-2', prompt: 'Péter olvas. → ?', accept: ['Péter olvas?', 'péter olvas'], explanation: 'Порядок слов сохраняется, а в речи вопрос передаёт интонация: Péter olvas?' },
    { kind: 'textInput', id: 'l4-question-3', prompt: 'Ti magyarul beszéltek. → ?', accept: ['Magyarul beszéltek?', 'Ti magyarul beszéltek?', 'magyarul beszéltek', 'ti magyarul beszéltek'], explanation: 'Местоимение ti можно опустить: Magyarul beszéltek?' },
    { kind: 'textInput', id: 'l4-question-4', prompt: 'Anna ír. → ?', accept: ['Anna ír?', 'anna ír'], explanation: 'Anna ír? — тот же порядок слов, вопросительная интонация.' },
    { kind: 'textInput', id: 'l4-question-5', prompt: 'Ők dolgoznak. → ?', accept: ['Dolgoznak?', 'Ők dolgoznak?', 'dolgoznak', 'ők dolgoznak'], explanation: 'Местоимение ők можно опустить: Dolgoznak?' },
  ],
};

const L4_CP_CONTEXT: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-context',
  title: 'Глаголы в простых ситуациях',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l4-context-1', prompt: 'Напиши: «Я учу венгерский».', accept: ['Magyarul tanulok.', 'magyarul tanulok'], explanation: 'Magyarul tanulok.' },
    { kind: 'textInput', id: 'l4-context-2', prompt: 'Напиши: «Ты читаешь».', accept: ['Olvasol.', 'olvasol'], explanation: 'Olvasol.' },
    { kind: 'textInput', id: 'l4-context-3', prompt: 'Напиши: «Мы пишем».', accept: ['Írunk.', 'írunk'], explanation: 'Írunk.' },
    { kind: 'textInput', id: 'l4-context-4', prompt: 'Напиши: «Они говорят по-венгерски».', accept: ['Ők magyarul beszélnek.', 'ők magyarul beszélnek', 'Magyarul beszélnek.', 'magyarul beszélnek'], explanation: 'Ők magyarul beszélnek.' },
    { kind: 'textInput', id: 'l4-context-5', prompt: 'Напиши: «Петер работает».', accept: ['Péter dolgozik.', 'péter dolgozik'], explanation: 'Péter dolgozik.' },
  ],
};

const L4_WRITING_ACTIONS: LessonActivity = {
  kind: 'writing',
  id: 'l4-writing-actions',
  title: 'Письмо: мои простые действия',
  prompt: 'Напиши 3–4 коротких предложения о простых действиях. Используй глаголы урока и сделай хотя бы одно предложение отрицательным с nem.',
  modelAnswer: [
    'Magyarul tanulok.',
    'Sokat olvasok.',
    'Nem dolgozom ma.',
    'Péter magyarul beszél.',
  ],
  rubric: [
    'Есть 3–4 законченных предложения',
    'Использованы формы настоящего времени из урока',
    'Хотя бы одно предложение содержит nem перед глаголом',
    'Текст понятен читателю',
  ],
};

const L4_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l4-exit-check',
  title: 'Проверка целей урока 4',
  checks: [
    { objectiveId: 'l4_conjugate-present', activityId: 'l4-cp-conjugation', evidenceKind: 'grammar' },
    {
      objectiveId: 'l4_use-verbs-context',
      activityId: 'l4-cp-context',
      evidenceKind: 'writing',
      evidenceComponents: [{ activityId: 'l4-cp-context', evidenceKind: 'grammar' }],
      practiceComponents: ['speaking'],
    },
    {
      objectiveId: 'l4_recognize-forms',
      activityId: 'l4-listening-present-forms',
      evidenceKind: 'listening',
      evidenceComponents: [{ activityId: 'l4-cp-recognize-text', evidenceKind: 'reading' }],
    },
    {
      objectiveId: 'l4_build-sentences',
      activityId: 'l4-cp-negation',
      evidenceKind: 'writing',
      evidenceComponents: [{ activityId: 'l4-cp-negation', evidenceKind: 'grammar' }],
      practiceComponents: ['speaking'],
    },
    {
      objectiveId: 'l4_ask-questions',
      activityId: 'l4-cp-questions',
      evidenceKind: 'grammar',
      practiceComponents: ['speaking'],
    },
  ],
};

export const LESSON_4: Lesson = {
  id: 4,
  number: 4,
  level: 'A0',
  title: 'Урок 4 · Jelen idő',
  subtitle: 'Спряжение глаголов в настоящем времени',
  description: 'Неопределённое спряжение (alanyi ragozás) в настоящем времени, утвердительные и отрицательные предложения с nem, простые общие вопросы и ограниченное знакомство с частотными -ik глаголами.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 4 · 1/12 · НАСТОЯЩЕЕ ВРЕМЯ",
      title: "A jelen idő",
      subtitle: "Спряжение в настоящем времени — введение",
      body: `
   <p>Венгерский глагол имеет <b>две разные системы спряжения</b>, которые применяются в зависимости от того, является ли прямое дополнение определенным или нет:</p>
   <ul class="tick">
     <li><b>Неопределенное спряжение (alanyi ragozás)</b> — когда нет прямого дополнения, или оно неопределенное («Я читаю» / «Я читаю какую-то книгу»)</li>
     <li><b>Определенное спряжение (tárgyas ragozás)</b> — когда прямое дополнение конкретно/известно («Я читаю эту книгу»)</li>
   </ul>
   <p>В этом уроке мы проходим только <b>неопределённое спряжение</b>. Определённое спряжение не входит в текущую проверку: курс начнёт знакомство с ним позже и будет возвращаться к контрасту поэтапно.</p>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 4 · 2/12 · ОКОНЧАНИЯ",
      title: "Személyragok",
      subtitle: "Окончания неопределенного спряжения",
      body: `
   <table class="conj">
     <tr><th>Местоимение</th><th>Задние гласные</th><th>Передние неогубленные</th><th>Передние огубленные</th></tr>
     <tr><td>én</td><td>-ok</td><td>-ek</td><td>-ök</td></tr>
     <tr><td>te</td><td>-sz</td><td>-sz</td><td>-sz</td></tr>
     <tr><td>ő</td><td>—</td><td>—</td><td>—</td></tr>
     <tr><td>mi</td><td>-unk</td><td>-ünk</td><td>-ünk</td></tr>
     <tr><td>ti</td><td>-tok</td><td>-tek</td><td>-tök</td></tr>
     <tr><td>ők</td><td>-nak</td><td>-nek</td><td>-nek</td></tr>
   </table>
   <div class="note">Внимание: у изучаемых обычных глаголов в 3-м лице (ő) <b>нет отдельного личного окончания</b>: <span class="hu-word">vár</span> = «он/она ждёт». Частотные -ik глаголы рассматриваются отдельно как предварительное знакомство.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 4 · 3/12 · ПРИМЕР I.",
      title: "A vár ige",
      subtitle: "Спряжение — задние гласные (vár, ждать)",
      body: `
   <table class="conj">
     <tr><th>Местоимение</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="várok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várok</button></td><td>я жду</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="vársz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vársz</button></td><td>ты ждешь</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vár</button></td><td>он/она ждет</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="várunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várunk</button></td><td>мы ждем</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="vártok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártok</button></td><td>вы ждете</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="várnak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várnak</button></td><td>они ждут</td></tr>
   </table>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 4 · 4/12 · ПРИМЕР II.",
      title: "A kér ige",
      subtitle: "Спряжение — передние неогубленные гласные (kér, просить)",
      body: `
   <table class="conj">
     <tr><th>Местоимение</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="kérek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérek</button></td><td>я прошу</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="kérsz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérsz</button></td><td>ты просишь</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kér</button></td><td>он/она просит</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="kérünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérünk</button></td><td>мы просим</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="kértek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértek</button></td><td>вы просите</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="kérnek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnek</button></td><td>они просят</td></tr>
   </table>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 4 · 5/12 · ПРИМЕР III.",
      title: "A köt ige",
      subtitle: "Спряжение — передние огубленные гласные (köt, вязать/связывать)",
      activities: [L4_CP_RECOGNIZE_TEXT, L4_CP_CONJUGATION],
      body: `
   <table class="conj">
     <tr><th>Местоимение</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="kötök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötök</button></td><td>я вяжу/связываю</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="kötsz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötsz</button></td><td>ты вяжешь/связываешь</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="köt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köt</button></td><td>он/она вяжет/связывает</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="kötünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötünk</button></td><td>мы вяжем/связываем</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="köttök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köttök</button></td><td>вы вяжете/связываете</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="kötnek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötnek</button></td><td>они вяжут/связывают</td></tr>
   </table>
   <div class="note">Обратите внимание на форму «ti»: <span class="hu-word">köt</span> + <span class="hu-word">-tök</span> = <button class="speak-btn" data-speak-text="köttök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köttök</button> (двойная «t»). Когда основа глагола заканчивается на «t», а окончание начинается на «t», они сливаются в удвоенную согласную.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 4 · 6/12 · ШИПЯЩИЕ/СВИСТЯЩИЕ ОСНОВЫ",
      title: "Sziszegő tövek",
      subtitle: "Когда -sz для «te» заменяется на -ol/-el/-öl",
      body: `
   <p>Если основа глагола заканчивается на шипящий/свистящий звук (<span class="hu-word">s, sz, z, dz</span>), то просто добавить -sz в форме «te» было бы трудно произнести (например, «olvassz»). Вместо этого используется <span class="hu-word">-ol / -el / -öl</span>.</p>
   <table class="conj">
     <tr><th>Глагол</th><th>Форма te</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olvas</button></td><td><button class="speak-btn" data-speak-text="olvasol" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olvasol</button></td><td>ты читаешь</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="mos" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mos</button></td><td><button class="speak-btn" data-speak-text="mosol" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosol</button></td><td>ты моешь</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="néz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> néz</button></td><td><button class="speak-btn" data-speak-text="nézel" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nézel</button></td><td>ты смотришь</td></tr>
   </table>
   <div class="warn">Это частое исключение, встречающееся в большом количестве глаголов (olvas, néz, mos, öltözik...) — будьте внимательны при изучении новых глаголов.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 4 · 7/12 · ГЛАГОЛЫ НА -ik",
      title: "Ikes igék",
      subtitle: "Глаголы на «-ik» — частично неправильные, но очень частые",
      body: `
   <p>Это только <b>первое знакомство</b> с частотными глаголами, словарная форма которых (для ő) заканчивается на <span class="hu-word">-ik</span>. В изучаемых примерах формы «én» — <span class="hu-word">dolgozom</span> и <span class="hu-word">lakom</span>.</p>
   <table class="conj">
     <tr><th>Местоимение</th><th>dolgozik (работать)</th><th>lakik (жить)</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="dolgozom" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozom</button></td><td><button class="speak-btn" data-speak-text="lakom" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lakom</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="dolgozol" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozol</button></td><td><button class="speak-btn" data-speak-text="laksz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> laksz</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozik</button></td><td><button class="speak-btn" data-speak-text="lakik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lakik</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="dolgozunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozunk</button></td><td><button class="speak-btn" data-speak-text="lakunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> lakunk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="dolgoztok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgoztok</button></td><td><button class="speak-btn" data-speak-text="laktok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> laktok</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="dolgoznak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgoznak</button></td><td><button class="speak-btn" data-speak-text="laknak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> laknak</button></td></tr>
   </table>
   <div class="note"><b>Не превращайте это в универсальную формулу.</b> Форму каждого нового -ik глагола нужно проверять: например, частотный особый глагол <span class="hu-word">eszik</span> имеет форму <span class="hu-word">eszem</span>. В уроке 14 мы вернёмся к -ik глаголам распорядка дня и возвратным моделям и систематизируем их подробнее.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 4 · 8/12 · СЛОВАРНЫЙ ЗАПАС",
      title: "Gyakori igék",
      subtitle: "Часто используемые правильные глаголы",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanul</button> — учить/изучать</p>
       <p><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ír</button> — писать</p>
       <p><button class="speak-btn" data-speak-text="beszél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> beszél</button> — говорить</p>
       <p><button class="speak-btn" data-speak-text="él" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> él</button> — жить (в общем смысле)</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="szeret" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeret</button> — любить</p>
       <p><button class="speak-btn" data-speak-text="ért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ért</button> — понимать</p>
       <p><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozik</button> — работать (общ.)</p>
       <p><button class="speak-btn" data-speak-text="játszik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> játszik</button> — играть</p>
     </div>
   </div>
   <div class="task">Задание 1. Проспрягайте глагол <button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanul</button> (tanul) во всех 6 лицах самостоятельно, не заглядывая в таблицу.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 4 · 9/12 · ПРЕДЛОЖЕНИЕ",
      title: "Szórend",
      subtitle: "Порядок слов в простом предложении",
      activities: [L4_CP_NEGATION],
      body: `
   <p>«Нейтральный» порядок слов в венгерском языке — примерно Подлежащее–Сказуемое–Дополнение (как в русском), но элемент, на который обращается внимание (фокус), всегда ставится непосредственно перед глаголом.</p>
   <p><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Magyarul tanulok.</button> <span style="color:#8a7a68">(Я изучаю венгерский язык)</span></p>
   <p><button class="speak-btn" data-speak-text="Minden nap magyarul tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Minden nap magyarul tanulok.</button> <span style="color:#8a7a68">(Я изучаю венгерский каждый день — подчеркивается «каждый день»)</span></p>
   <p>Для простого отрицания поставьте <span class="hu-word">nem</span> непосредственно перед спрягаемым глаголом: <button class="speak-btn" data-speak-text="Nem tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem tanulok.</button></p>
   <div class="note">Сейчас достаточно запомнить основной порядок: Подлежащее–Глагол–Дополнение. К тонкостям фокуса мы вернемся в следующих уроках.</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 4 · 10/12 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Что ты делаешь?",
      activities: [L4_LISTENING_PRESENT_FORMS, L4_CP_QUESTIONS],
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Mit csinálsz most?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Mit csinálsz most?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szia! Magyarul tanulok és olvasok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Magyarul tanulok és olvasok.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Nehéz a magyar?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nehéz a magyar?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Nem, de minden nap tanulok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem, de minden nap tanulok.</button></p>
   <div class="note"><b>Общий вопрос:</b> венгерский обычно сохраняет порядок слов утверждения и опирается на вопросительную интонацию. Английская инверсия не нужна: <span class="hu-word">Te magyarul tanulsz.</span> → <span class="hu-word">Magyarul tanulsz?</span> Местоимение часто опускается, потому что лицо видно по окончанию.</div>
`
    },
    {
      id: 11,
      eyebrow: "УРОК 4 · 11/12 · УПРАЖНЕНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверь себя",
      activities: [L4_CP_CONTEXT, L4_WRITING_ACTIONS],
      body: `
   <ol class="tasklist">
     <li>Проспрягайте глагол «szeret» (любить) во всех 6 лицах</li>
     <li>Какая форма правильная: «te olvassz» или «te olvasol»? Объясните почему</li>
     <li>Образуйте форму «én» от глагола «lakik»</li>
     <li>Переведите: «Мы каждый день учим венгерский»</li>
     <li>Выберите правильное окончание: «Mi ott __ (dolgoz-)»</li>
   </ol>
 `
    },
    {
      id: 12,
      eyebrow: "УРОК 4 · 12/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Краткое содержание 4-го урока",
      type: 'sentence-reading',
      targetText: 'Magyarul tanulok. Nem olvasok. Tanulsz magyarul?',
      targetPhonetic: '[мадьярул танулок. нэм олвашок. танулс мадьярул?]',
      targetTranslation: 'Я учу венгерский. Я не читаю. Ты учишь венгерский?',
      task: 'Устная практика (необязательно): произнеси утверждение, отрицание и вопрос, затем сравни формулировки с образцом.',
      activities: [L4_EXIT_CHECK],
      body: `
   <ul class="tick">
     <li>Окончания неопределенного спряжения: -ok/-ek/-ök, -sz, —, -unk/-ünk, -tok/-tek/-tök, -nak/-nek</li>
     <li>В 3-м лице (ő) нет никаких окончаний</li>
     <li>В основах на шипящие/свистящие -sz для «te» становится -ol/-el/-öl</li>
     <li>-ik глаголы здесь только предварительно: в изучаемых примерах én dolgozom / lakom; особые формы нужно проверять, а систематизация продолжится в уроке 14</li>
   </ul>
   <div class="note"><b>Домашнее задание:</b> выберите 5 новых глаголов, письменно проспрягайте каждый из них во всех 6 лицах. В следующем уроке мы перейдем к числам, времени и дням недели — вы научитесь говорить о том, когда вы что-либо делаете.</div>
 `
    }
  ],
  vocabulary: [
    { id: 'l4_v1', hu: 'tanul', ru: 'учиться / изучать', category: 'Core Verbs', exampleSentence: 'Magyarul tanulok.', grammaticalTag: 'alanyi-ragozas-jelen', relatedLessonId: 4 },
    { id: 'l4_v2', hu: 'olvas', ru: 'читать', category: 'Core Verbs', exampleSentence: 'Péter olvas.' },
    { id: 'l4_v3', hu: 'ír', ru: 'писать', category: 'Core Verbs', exampleSentence: 'Anna ír.' },
    { id: 'l4_v4', hu: 'beszél', ru: 'говорить', category: 'Core Verbs', exampleSentence: 'Magyarul beszélünk.' },
    { id: 'l4_v5', hu: 'dolgozik', ru: 'работать', category: '-ik · знакомство', exampleSentence: 'Péter dolgozik.', baseWord: 'dolgozik' },
    { id: 'l4_v6', hu: 'lakik', ru: 'жить / проживать', category: '-ik · знакомство', exampleSentence: 'Budapesten lakom.', baseWord: 'lakik' },
    { id: 'l4_v7', hu: 'nem', ru: 'не (отрицательная частица)', category: 'Functional Core', exampleSentence: 'Nem tanulok.' },
  ],
  quiz: [
    {
      id: 401,
      question: 'Какая форма обычного глагола "vár" соответствует 3-му лицу единственного числа (ő)?',
      options: ['várt', 'vársz', 'vár', 'várik'],
      correctIndex: 2,
      explanation: 'У изучаемого обычного глагола форма ő совпадает с основой: ő vár. Частотные -ik глаголы рассматриваются отдельно как предварительное знакомство.'
    },
    {
      id: 402,
      question: 'Какое окончание используется для 1-го лица единственного числа (én) у глаголов с задними гласными (например, vár)?',
      options: ['-ok', '-ek', '-ök', '-om'],
      correctIndex: 0,
      explanation: 'Для задних гласных (a, o, u) используется окончание -ok: vár + ok = várok.'
    },
    {
      id: 403,
      question: 'Как правильно сказать "ты читаешь" от глагола "olvas"?',
      options: ['olvassz', 'olvasol', 'olvasa', 'olvas'],
      correctIndex: 1,
      explanation: 'Основа оканчивается на шипящий "s", поэтому вместо -sz используется -ol: olvas + ol = olvasol.'
    },
    {
      id: 404,
      question: 'Какая форма глагола "lakik" (жить) соответствует 1-му лицу единственного числа (én)?',
      options: ['lakok', 'lakom', 'lakik', 'laksz'],
      correctIndex: 1,
      explanation: 'В изучаемом примере правильно: én lakom. Это предварительное знакомство, а не универсальная формула для всех -ik глаголов; например, eszik → eszem.'
    },
    {
      id: 405,
      question: 'Что из перечисленного НЕ является окончанием неопределенного спряжения?',
      options: ['-ok', '-sz', '-unk', '-ja'],
      correctIndex: 3,
      explanation: 'Окончание "-ja" используется в определённом спряжении (tárgyas ragozás). В неопределённом спряжении таких окончаний нет.'
    },
    {
      id: 406,
      question: 'Как правильно сделать отрицательным предложение «Magyarul tanulunk»?',
      options: ['Magyarul nem tanulunk.', 'Magyarul tanulunk nem.', 'Nem magyarul tanulunkok.', 'Magyarul nincs tanulunk.'],
      correctIndex: 0,
      explanation: 'Для простого отрицания nem ставится перед спрягаемым глаголом: Magyarul nem tanulunk.'
    }
  ],
  objectives: [
    { id: 'l4_conjugate-present', text: 'Спрягать правильные глаголы в настоящем времени (неопределённое спряжение).', skills: ['grammar', 'writing'] },
    { id: 'l4_use-verbs-context', text: 'Употреблять изученные глаголы (olvas, ír, beszél, tanul) в простых предложениях.', skills: ['speaking', 'writing'] },
    { id: 'l4_recognize-forms', text: 'Распознавать формы настоящего времени на слух и в тексте.', skills: ['listening', 'reading'] },
    { id: 'l4_build-sentences', text: 'Составлять простые утвердительные и отрицательные предложения с nem.', skills: ['writing', 'grammar', 'speaking'] },
    { id: 'l4_ask-questions', text: 'Строить общие вопросы с помощью интонации и порядка слов.', skills: ['speaking', 'grammar'] },
  ],
};
