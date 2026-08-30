import { Lesson, LessonActivity } from '../../types';

const L2_CP_PRONOUN_REFERENTS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l2-cp-pronoun-referents',
  title: 'Местоимение по участникам ситуации',
  passCount: 5,
  exercises: [
    { kind: 'singleChoice', id: 'l2-pronoun-referent-1', prompt: 'Говорящий указывает на себя: «я».', options: ['én', 'te', 'ő'], correctIndex: 0, explanation: 'én — «я».' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-2', prompt: 'Говорящий обращается к одному собеседнику: «ты».', options: ['én', 'te', 'mi'], correctIndex: 1, explanation: 'te — «ты».' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-3', prompt: 'Говорят об одном человеке: «он / она».', options: ['ő', 'ti', 'ők'], correctIndex: 0, explanation: 'ő означает и «он», и «она».' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-4', prompt: 'Говорящий включает себя в группу: «мы».', options: ['mi', 'ti', 'ők'], correctIndex: 0, explanation: 'mi — «мы».' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-5', prompt: 'Говорящий обращается к нескольким людям: «вы».', options: ['mi', 'ti', 'ők'], correctIndex: 1, explanation: 'ti — «вы» при обращении к нескольким людям.' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-6', prompt: 'Говорят о нескольких людях: «они».', options: ['ő', 'ti', 'ők'], correctIndex: 2, explanation: 'ők — «они».' },
  ],
};

const L2_CP_PRONOUN_CONTEXT: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l2-cp-pronoun-context',
  title: 'Местоимение в короткой реплике',
  passCount: 4,
  exercises: [
    { kind: 'singleChoice', id: 'l2-pronoun-context-1', prompt: '___ diák vagyok. — Я студент.', options: ['Én', 'Te', 'Ő'], correctIndex: 0, explanation: 'vagyok — форма én.' },
    { kind: 'singleChoice', id: 'l2-pronoun-context-2', prompt: '___ magyar vagy? — Ты венгр / венгерка?', options: ['Én', 'Te', 'Mi'], correctIndex: 1, explanation: 'vagy — форма te.' },
    { kind: 'singleChoice', id: 'l2-pronoun-context-3', prompt: '___ itt van. — Он / она здесь.', options: ['Ő', 'Ti', 'Ők'], correctIndex: 0, explanation: 'ő обозначает одного человека: «он / она».' },
    { kind: 'singleChoice', id: 'l2-pronoun-context-4', prompt: '___ diákok vagyunk. — Мы студенты.', options: ['Mi', 'Ti', 'Ők'], correctIndex: 0, explanation: 'vagyunk — форма mi.' },
    { kind: 'singleChoice', id: 'l2-pronoun-context-5', prompt: '___ itt vannak. — Они здесь.', options: ['Ő', 'Ti', 'Ők'], correctIndex: 2, explanation: 'vannak — форма ők.' },
  ],
};

const L2_CP_LENNI: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l2-cp-lenni',
  title: 'Lenni: все шесть форм',
  passCount: 6,
  exercises: [
    { kind: 'textInput', id: 'l2-lenni-1', prompt: 'én + lenni → ?', accept: ['vagyok'], explanation: 'én vagyok.' },
    { kind: 'textInput', id: 'l2-lenni-2', prompt: 'te + lenni → ?', accept: ['vagy'], explanation: 'te vagy.' },
    { kind: 'textInput', id: 'l2-lenni-3', prompt: 'ő + lenni → ?', accept: ['van'], explanation: 'ő van.' },
    { kind: 'textInput', id: 'l2-lenni-4', prompt: 'mi + lenni → ?', accept: ['vagyunk'], explanation: 'mi vagyunk.' },
    { kind: 'textInput', id: 'l2-lenni-5', prompt: 'ti + lenni → ?', accept: ['vagytok'], explanation: 'ti vagytok.' },
    { kind: 'textInput', id: 'l2-lenni-6', prompt: 'ők + lenni → ?', accept: ['vannak'], explanation: 'ők vannak.' },
  ],
};

const L2_LISTENING_INTRODUCTION: LessonActivity = {
  kind: 'listening',
  id: 'l2-listening-introduction',
  title: 'Аудирование: первое знакомство',
  assetId: 'l2_listening_introduction',
  audioStatus: 'published',
  passCount: 4,
  transcript: 'A: Szia! A nevem Anna. Ki vagy te?\nB: Szia! Én Péter vagyok.\nA: Magyar vagy?\nB: Igen, magyar vagyok. Budapesten élek. És te?\nA: Anna vagyok. Örmény vagyok. Budapesten élek.\nB: Nagyon örülök. Hogy vagy?\nA: Jól vagyok, köszönöm. Hogy vagy?\nB: Jól vagyok, köszönöm.\nA: Viszlát!\nB: Viszlát!',
  questions: [
    { id: 'l2-listen-q1', question: 'Какой регистр общения используют собеседники?', options: ['неофициальный', 'официальный', 'неясно'], correctIndex: 0, explanation: 'Они начинают с Szia — неофициального приветствия.' },
    { id: 'l2-listen-q2', question: 'На вопрос «Ki vagy te?» что отвечает второй собеседник?', options: ['Péter vagyok.', 'Magyar vagy?', 'Jól vagyok, köszönöm.'], correctIndex: 0, explanation: 'На вопрос «Кто ты?» второй собеседник отвечает: Péter vagyok. — «Я Петер».' },
    { id: 'l2-listen-q3', question: 'Что второй собеседник сообщает о себе?', options: ['Он венгр.', 'Он студент.', 'Он врач.'], correctIndex: 0, explanation: 'Он отвечает: Igen, magyar vagyok.' },
    { id: 'l2-listen-q4', question: 'Как первый собеседник отвечает на вопрос о самочувствии?', options: ['Хорошо, спасибо.', 'Плохо.', 'Не отвечает.'], correctIndex: 0, explanation: 'Ответ Jól vagyok, köszönöm означает «Хорошо, спасибо».' },
    { id: 'l2-listen-q5', question: 'Чем заканчивается разговор?', options: ['прощанием', 'новым вопросом', 'формальным приветствием'], correctIndex: 0, explanation: 'Оба собеседника говорят Viszlát.' },
  ],
};

const L2_ROLEPLAY_GREETINGS: LessonActivity = {
  kind: 'rolePlay',
  id: 'l2-roleplay-greetings',
  title: 'Ролевая игра: неофициально и вежливо',
  partnerLabel: 'Beszélgetőpartner · Партнёр',
  completionMessage: 'Готово: ты выбрал(а) подходящие приветствия и прощания и отработал(а) короткие ответы по моделям.',
  startTurnId: 'l2-rp-informal-stage',
  turns: [
    { id: 'l2-rp-informal-stage', speaker: 'stage', stageLabel: 'Ситуация 1 · знакомый ровесник', next: 'l2-rp-informal-open' },
    {
      id: 'l2-rp-informal-open', speaker: 'learner', responseMode: 'choice', prompt: 'Выбери неофициальное приветствие.',
      options: ['Szia!', 'Jó napot!', 'Viszlát!'],
      branches: [
        { choice: 'Szia!', correct: true, feedback: 'Подходит для знакомого.', nextTurnId: 'l2-rp-informal-open-record' },
        { choice: 'Jó napot!', correct: false, feedback: 'Это вежливое формальное приветствие. Здесь выбери Szia!', nextTurnId: 'l2-rp-informal-open' },
        { choice: 'Viszlát!', correct: false, feedback: 'Это прощание. Здесь сначала поздоровайся.', nextTurnId: 'l2-rp-informal-open' },
      ],
    },
    { id: 'l2-rp-informal-open-record', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Запиши неофициальное приветствие и сравни с моделью.', model: 'Szia!', next: 'l2-rp-informal-partner' },
    { id: 'l2-rp-informal-partner', speaker: 'waiter', prompt: 'Szia! Hogy vagy?', next: 'l2-rp-how-are-you' },
    { id: 'l2-rp-how-are-you', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь, запиши реплику и сравни с моделью.', model: 'Jól vagyok, köszönöm.', next: 'l2-rp-partner-question' },
    { id: 'l2-rp-partner-question', speaker: 'waiter', prompt: 'Ki vagy te?', next: 'l2-rp-self-intro' },
    { id: 'l2-rp-self-intro', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови своё имя и национальность, подставив свои данные.', model: 'A nevem Anna. Magyar vagyok.', next: 'l2-rp-informal-close' },
    {
      id: 'l2-rp-informal-close', speaker: 'learner', responseMode: 'choice', prompt: 'Выбери короткое неофициальное прощание.',
      options: ['Szia!', 'Jó napot!', 'Hogy vagy?'],
      branches: [
        { choice: 'Szia!', correct: true, feedback: 'Szia можно использовать и при прощании.', nextTurnId: 'l2-rp-informal-close-record' },
        { choice: 'Jó napot!', correct: false, feedback: 'Это приветствие, а не прощание.', nextTurnId: 'l2-rp-informal-close' },
        { choice: 'Hogy vagy?', correct: false, feedback: 'Это вопрос «Как ты?». Выбери прощание.', nextTurnId: 'l2-rp-informal-close' },
      ],
    },
    { id: 'l2-rp-informal-close-record', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Запиши выбранное неофициальное прощание и сравни с моделью.', model: 'Szia!', next: 'l2-rp-formal-stage' },
    { id: 'l2-rp-formal-stage', speaker: 'stage', stageLabel: 'Ситуация 2 · незнакомый взрослый', next: 'l2-rp-formal-open' },
    {
      id: 'l2-rp-formal-open', speaker: 'learner', responseMode: 'choice', prompt: 'Выбери вежливое приветствие.',
      options: ['Jó napot!', 'Szia!', 'Viszlát!'],
      branches: [
        { choice: 'Jó napot!', correct: true, feedback: 'Подходит для вежливой ситуации.', nextTurnId: 'l2-rp-formal-open-record' },
        { choice: 'Szia!', correct: false, feedback: 'Szia здесь слишком неформально. Выбери Jó napot!', nextTurnId: 'l2-rp-formal-open' },
        { choice: 'Viszlát!', correct: false, feedback: 'Это прощание. Сначала выбери приветствие.', nextTurnId: 'l2-rp-formal-open' },
      ],
    },
    { id: 'l2-rp-formal-open-record', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Запиши вежливое приветствие и сравни с моделью.', model: 'Jó napot!', next: 'l2-rp-formal-partner' },
    { id: 'l2-rp-formal-partner', speaker: 'waiter', prompt: 'Jó napot!', next: 'l2-rp-formal-close' },
    {
      id: 'l2-rp-formal-close', speaker: 'learner', responseMode: 'choice', prompt: 'Заверши короткий разговор вежливым прощанием.',
      options: ['Viszlát!', 'Jó napot!', 'Hogy vagy?'],
      branches: [
        { choice: 'Viszlát!', correct: true, feedback: 'Верно.', nextTurnId: 'l2-rp-formal-close-record' },
        { choice: 'Jó napot!', correct: false, feedback: 'Это приветствие. Для прощания выбери Viszlát!', nextTurnId: 'l2-rp-formal-close' },
        { choice: 'Hogy vagy?', correct: false, feedback: 'Это вопрос. Для прощания выбери Viszlát!', nextTurnId: 'l2-rp-formal-close' },
      ],
    },
    { id: 'l2-rp-formal-close-record', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Запиши вежливое прощание и сравни с моделью.', model: 'Viszlát!', next: 'l2-rp-end' },
    { id: 'l2-rp-end', speaker: 'stage', stageLabel: 'Диалог завершён' },
  ],
};

const L2_WRITING_SELF_INTRODUCTION: LessonActivity = {
  kind: 'writing',
  id: 'l2-writing-self-introduction',
  title: 'Письмо: имя и происхождение',
  prompt: 'Напиши минимум два полных предложения: назови имя с «A nevem…» и национальность с «… vagyok». Если используешь форму страны, например «Örményországból vagyok», считай её готовым цельным выражением: падежные правила здесь не проверяются.',
  modelAnswer: ['A nevem Anna.', 'Magyar vagyok.'],
  rubric: [
    'Есть полное предложение с именем: A nevem…',
    'Есть полное предложение с национальностью или готовым выражением происхождения',
    'Написаны минимум два самостоятельных предложения',
    'Формы страны оцениваются только как готовые выражения, без вывода падежной парадигмы',
  ],
};

const L2_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l2-exit-check',
  title: 'Проверка целей урока 2',
  checks: [
    { objectiveId: 'l2_greet-introduce', activityId: 'l2-listening-introduction', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l2-roleplay-greetings', evidenceKind: 'interaction' }] },
    { objectiveId: 'l2_use-pronouns', activityId: 'l2-cp-pronoun-referents', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l2-cp-pronoun-context', evidenceKind: 'grammar' }] },
    { objectiveId: 'l2_conjugate-lenni', activityId: 'l2-cp-lenni', evidenceKind: 'grammar' },
    { objectiveId: 'l2_introduce-self', activityId: 'l2-writing-self-introduction', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l2-roleplay-greetings', evidenceKind: 'speaking' }] },
    { objectiveId: 'l2_ask-answer-questions', activityId: 'l2-listening-introduction', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l2-roleplay-greetings', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_2: Lesson = {
  id: 2,
  number: 2,
  level: 'A0',
  title: 'Урок 2 · Köszönés & lenni',
  subtitle: 'Приветствия, личные местоимения, глагол «быть»',
  description: 'Официальные и неофициальные приветствия (Szia, Jó napot), личные местоимения (én, te, ő...), спряжение глагола lenni (vagyok, vagy, van) и первое знакомство.',
  slidesCount: 10,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 2 · 1/10 · ПРИВЕТСТВИЯ",
      title: "Köszönések",
      subtitle: "Приветствия: официальные и неофициальные",
      body: `
   <p>В венгерском языке, как и в русском, есть разница между официальными и дружескими приветствиями.</p>
   <table class="conj">
     <tr><th>Венгерский</th><th>Значение</th><th>Когда использовать</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="Szia" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia</button></td><td>Привет / Пока</td><td>с друзьями, ровесниками (обоюдно)</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Jó napot" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot</button></td><td>Добрый день</td><td>официально, с незнакомыми</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Jó estét" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó estét</button></td><td>Добрый вечер</td><td>официально, вечером</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Viszontlátásra" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Viszontlátásra</button></td><td>До свидания</td><td>официальное прощание</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Viszlát" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Viszlát!</button></td><td>До свидания / Пока</td><td>обычное нейтральное прощание</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Szevasz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szevasz</button></td><td>Пока / Привет</td><td>очень неформально, с близкими</td></tr>
   </table>
   <div class="note"><button class="speak-btn" data-speak-text="Szia" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia</button> — одно из самых часто используемых слов в венгерском: оно используется и при приветствии, и при прощании, как итальянское «ciao».</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 2 · 2/10 · МЕСТОИМЕНИЯ",
      title: "Személyes névmások",
      subtitle: "Личные местоимения",
      activities: [L2_CP_PRONOUN_REFERENTS, L2_CP_PRONOUN_CONTEXT],
      body: `
   <table class="conj">
     <tr><th>Венгерский</th><th>Русский</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> én</button></td><td>я</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="te" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> te</button></td><td>ты</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ő</button></td><td>он / она</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="mi" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mi</button></td><td>мы</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ti" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ti</button></td><td>вы</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ők" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ők</button></td><td>они</td></tr>
   </table>
   <div class="note">Важно: в венгерском <b>нет</b> родовых различий в местоимении 3-го лица (он/она) — <button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ő</button> означает и «он» (мужчина), и «она» (женщина). Род вообще не выражен грамматически в венгерском языке.</div>
   <div class="warn">В венгерском языке местоимение часто <b>опускается</b>, так как окончание глагола уже указывает на того, кто совершает действие (как в русском). Местоимение используется в основном для логического выделения (эмфазы).</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 2 · 3/10 · ГЛАГОЛ",
      title: "A lenni ige",
      subtitle: "Глагол «быть» в настоящем времени",
      activities: [L2_CP_LENNI],
      body: `
   <p>«Lenni» (быть) — самый важный и часто используемый глагол венгерского языка.</p>
   <table class="conj">
     <tr><th>Местоимение</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="vagyok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagyok</button></td><td>я есть</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagy</button></td><td>ты есть</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="van" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> van</button></td><td>он/она есть</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="vagyunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagyunk</button></td><td>мы есть</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="vagytok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagytok</button></td><td>вы есть</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="vannak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vannak</button></td><td>они есть</td></tr>
   </table>
   <div class="warn">В настоящем времени в 3-м лице, когда мы говорим, <b>кто или что человек</b> либо <b>какой он</b>, связка обычно опускается: «Ő diák» (Он / она студент), «Ő magyar» (Он венгр / она венгерка), «Ő szép» (Он / она красивый / красивая). Для местонахождения или наличия <b>van/vannak сохраняется</b>: «Ő itt van» (Он / она здесь), «Ők itt vannak» (Они здесь). На этом этапе достаточно различать эти готовые модели.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 2 · 4/10 · ПРЕДСТАВЛЕНИЕ",
      title: "Bemutatkozás",
      subtitle: "Как представить себя",
      body: `
   <p>Основная формула:</p>
   <p><button class="speak-btn" data-speak-text="Szia, ... vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia, ... vagyok.</button> <span style="color:#8a7a68">(Привет, я [имя])</span></p>
   <p><button class="speak-btn" data-speak-text="Örülök, hogy megismertelek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örülök, hogy megismertelek.</button> <span style="color:#8a7a68">(Приятно познакомиться)</span></p>
   <p><button class="speak-btn" data-speak-text="Örményországból vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örményországból vagyok.</button> <span style="color:#8a7a68">(Я из Армении)</span></p>
   <p><button class="speak-btn" data-speak-text="Budapesten élek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Budapesten élek.</button> <span style="color:#8a7a68">(Я живу в Будапеште)</span></p>
   <div class="note"><b>Граница урока:</b> формы <b>Örményországból vagyok</b> и <b>Budapesten élek</b> пока запоминайте как готовые цельные выражения. Падежные окончания и их парадигмы будут изучаться позже.</div>
   <div class="task">Задание 1. Представьтесь по двум основным моделям: «A nevem…» и «… vagyok». Форму страны можно добавить только как готовое выражение.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 2 · 5/10 · НАЦИОНАЛЬНОСТЬ",
      title: "Nemzetiségek",
      subtitle: "Национальности и страны",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="Örményország" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örményország</button> — Армения</p>
       <p><button class="speak-btn" data-speak-text="örmény" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> örmény</button> — армянин (человек) / армянский</p>
       <p><button class="speak-btn" data-speak-text="Magyarország" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Magyarország</button> — Венгрия</p>
       <p><button class="speak-btn" data-speak-text="magyar" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> magyar</button> — венгерский / венгр</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="Oroszország" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Oroszország</button> — Россия</p>
       <p><button class="speak-btn" data-speak-text="orosz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> orosz</button> — русский</p>
       <p><button class="speak-btn" data-speak-text="Amerika" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Amerika</button> — Америка</p>
       <p><button class="speak-btn" data-speak-text="amerikai" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> amerikai</button> — американец / американский</p>
     </div>
   </div>
   <div class="note">Название страны пишется с большой буквы, а национальность — со строчной. На этом этапе слова стран, национальностей и выражения вроде <b>Örményországból vagyok</b> учим как готовые речевые блоки; правила падежных окончаний здесь не выводим и не проверяем.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 2 · 6/10 · ПРОФЕССИЯ",
      title: "Foglalkozások",
      subtitle: "Основные профессии",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="programozó" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> programozó</button> — программист</p>
       <p><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanár</button> — учитель</p>
       <p><button class="speak-btn" data-speak-text="orvos" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> orvos</button> — врач</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="designer" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> designer</button> — дизайнер</p>
       <p><button class="speak-btn" data-speak-text="diák" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> diák</button> — студент / ученик</p>
       <p><button class="speak-btn" data-speak-text="ügyvéd" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ügyvéd</button> — юрист / адвокат</p>
     </div>
   </div>
   <p><button class="speak-btn" data-speak-text="Fullstack programozó vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Fullstack programozó vagyok.</button> <span style="color:#8a7a68">(Я fullstack программист)</span></p>
   <div class="task">Задание 2. Скажите вслух, какая у вас профессия, используя шаблон «<button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> én</button> ... vagyok».</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 2 · 7/10 · ВОПРОС И ОТРИЦАНИЕ",
      title: "Kérdés és tagadás",
      subtitle: "Вопросы «да/нет» и отрицание",
      activities: [L2_LISTENING_INTRODUCTION],
      body: `
   <p>В венгерском языке вопрос «да/нет» образуется <b>без</b> специального вопросительного слова, только с помощью интонации (повышение голоса в конце предложения) или на письме — вопросительного знака:</p>
   <p><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Magyar vagy?</button> <span style="color:#8a7a68">(Ты венгр?)</span></p>
   <p>Отрицание образуется с помощью слова <button class="speak-btn" data-speak-text="nem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nem</button>, которое ставится перед глаголом:</p>
   <p><button class="speak-btn" data-speak-text="Nem vagyok magyar." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem vagyok magyar.</button> <span style="color:#8a7a68">(Я не венгр)</span></p>
   <p><button class="speak-btn" data-speak-text="Ő nincs itt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ő nincs itt.</button> <span style="color:#8a7a68">(Его/её здесь нет)</span></p>
   <div class="note">Для утвердительного ответа вы говорите <button class="speak-btn" data-speak-text="igen" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> igen</button> (да), для отрицательного — <button class="speak-btn" data-speak-text="nem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nem</button> (нет).</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 2 · 8/10 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Первый диалог",
      activities: [L2_ROLEPLAY_GREETINGS],
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Hogy hívnak?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Hogy hívnak?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Szia! Annának hívnak. És téged?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szia! Annának hívnak. És téged?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Engem Mkhitárnak hívnak. Honnan vagy?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Engem Mkhitárnak hívnak. Honnan vagy?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Örményországból vagyok, de Budapesten élek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Örményországból vagyok, de Budapesten élek.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Nagyon örülök! Mi a foglalkozásod?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nagyon örülök! Mi a foglalkozásod?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Programozó vagyok. És te?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Programozó vagyok. És te?</button></p>
   <div class="note"><b>Готовые блоки:</b> Honnan vagy?, Örményországból vagyok и Budapesten élek используйте целиком. Формальные правила падежных форм будут позже.</div>
   <div class="task">Задание 3. Прочитайте диалог вслух 2 раза: один раз за A, один раз за B.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 2 · 9/10 · УПРАЖНЕНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверь себя",
      activities: [L2_WRITING_SELF_INTRODUCTION],
      body: `
   <ol class="tasklist">
     <li>Переведите на венгерский: «Привет, я Анна, я из Армении»</li>
     <li>Проспрягайте глагол «lenni» во всех 6 лицах, не глядя в таблицу</li>
     <li>Составьте отрицательное предложение: «Я не врач»</li>
     <li>Составьте вопросительное предложение: «Ты студент?»</li>
     <li>Скажите вслух 3 разных способа поприветствовать кого-то в зависимости от ситуации (друг, незнакомец, вечером)</li>
   </ol>
   <div class="note">Проверьте свои ответы в начале следующего урока — в 3-м уроке мы перейдем к существительным, артиклям и множественному числу.</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 2 · 10/10 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Краткое содержание 2-го урока",
      activities: [L2_EXIT_CHECK],
      body: `
   <ul class="tick">
     <li>Основные приветствия: официальные и неофициальные</li>
     <li>Личные местоимения: én, te, ő, mi, ti, ők</li>
     <li>Глагол «lenni» в настоящем времени: vagyok, vagy, van, vagyunk, vagytok, vannak</li>
     <li>При описании с помощью прилагательного в 3-м лице «van/vannak» опускается</li>
     <li>Вопрос — интонацией, отрицание — с помощью «nem»</li>
   </ul>
   <div class="note"><b>Домашнее задание:</b> напишите рассказ о себе из 5 предложений на венгерском языке и читайте его вслух каждый день, пока произношение не станет плавным.</div>
 `
    }
  ],
  vocabulary: [
    { id: 'l2-vocab-szia', hu: 'Szia!', ru: 'Привет! / Пока!', category: 'Functional Chunks', exampleSentence: 'Szia! Hogy vagy?', audioText: 'Szia' },
    { id: 'l2-vocab-jo-napot', hu: 'Jó napot!', ru: 'Добрый день!', category: 'Functional Chunks', exampleSentence: 'Jó napot kívánok!', audioText: 'Jó napot' },
    { id: 'l2-vocab-viszlat', hu: 'Viszlát!', ru: 'До свидания! / Пока!', category: 'Functional Chunks', exampleSentence: 'Viszlát!', audioText: 'Viszlát' },
    { id: 'l2-vocab-koszonom', hu: 'köszönöm', ru: 'спасибо', category: 'Functional Core', exampleSentence: 'Jól vagyok, köszönöm.', baseWord: 'köszönöm' },
    { id: 'l2-vocab-hogy-vagy', hu: 'Hogy vagy?', ru: 'Как ты?', category: 'Functional Chunks', exampleSentence: 'Szia! Hogy vagy?', audioText: 'Hogy vagy' },
    { id: 'l2-vocab-a-nevem', hu: 'A nevem…', ru: 'Меня зовут…', category: 'Functional Chunks', exampleSentence: 'A nevem Anna.', audioText: 'A nevem Anna' },
    { id: 'l2-vocab-lenni', hu: 'lenni', ru: 'быть', category: 'Grammar Core', exampleSentence: 'Diák vagyok.', baseWord: 'lenni' },
    { id: 'l2-vocab-en', hu: 'én', ru: 'я', category: 'Grammar Core', exampleSentence: 'Én diák vagyok.', baseWord: 'én' },
    { id: 'l2-vocab-magyar', hu: 'magyar', ru: 'венгр / венгерский', category: 'Personal Info', exampleSentence: 'Magyar vagyok.', baseWord: 'magyar' },
  ],
  quiz: [
    {
      id: 201,
      question: 'Какое приветствие используется в официальной обстановке с незнакомым человеком?',
      options: ['Szia', 'Jó napot', 'Szevasz', 'Cső'],
      correctIndex: 1,
      explanation: '«Jó napot» (Добрый день) – это официальное вежливое приветствие. «Szia» и «Szevasz» используются только с друзьями и близкими.'
    },
    {
      id: 202,
      question: 'Как переводится местоимение "ő" в венгерском языке?',
      options: ['Только "он"', 'Только "она"', 'И "он", и "она" (род не различается)', 'Только "оно"'],
      correctIndex: 2,
      explanation: 'В венгерском языке нет грамматического рода. "Ő" означает и "он", и "она" – род определяется только по контексту.'
    },
    {
      id: 203,
      question: 'Как по-венгерски сказать «Я студент»?',
      options: ['Diák vagyok', 'Én diák', 'Diák van', 'Vagyok diák'],
      correctIndex: 0,
      explanation: 'Правильная конструкция: [существительное] + vagyok (1-е лицо глагола lenni). Например: Diák vagyok.'
    },
    {
      id: 204,
      question: 'Как спросить по-венгерски «Ты венгр?»?',
      options: ['Magyar vagy?', 'Magyar van?', 'Te magyar?', 'Magyar vagyok?'],
      correctIndex: 0,
      explanation: 'Вопрос "Ты венгр?" строится как "Magyar vagy?" – существительное + форма глагола lenni для 2-го лица (vagy).'
    },
    {
      id: 205,
      question: 'Какое из утверждений о венгерском языке НЕВЕРНО?',
      options: [
        'Местоимение часто опускается, так как окончание глагола указывает на лицо',
        'В 3-м лице при обозначении профессии, национальности или качества связка обычно опускается',
        'В венгерском есть отдельные местоимения для мужского и женского рода',
        'Отрицание образуется с помощью слова "nem"'
      ],
      correctIndex: 2,
      explanation: 'В венгерском нет разделения на мужской и женский род в местоимениях – "ő" означает и "он", и "она".'
    },
    {
      id: 206,
      question: 'Какая форма lenni завершает предложение «Mi diákok …»?',
      options: ['vagyunk', 'vagytok', 'vannak', 'vagyok'],
      correctIndex: 0,
      explanation: 'Для mi используется форма vagyunk: Mi diákok vagyunk. — Мы студенты.'
    }
  ],
  objectives: [
    { id: 'l2_greet-introduce', text: 'Употреблять приветствия и прощания (Szia!, Jó napot!, Viszlát!) в коротком диалоге.', skills: ['speaking', 'listening'] },
    { id: 'l2_use-pronouns', text: 'Узнавать и использовать личные местоимения én, te, ő, mi, ti, ők.', skills: ['grammar', 'reading', 'writing'] },
    { id: 'l2_conjugate-lenni', text: 'Спрягать глагол lenni (vagyok, vagy, van, vagyunk, vagytok, vannak) в настоящем времени.', skills: ['grammar', 'writing'] },
    { id: 'l2_introduce-self', text: 'Представляться: называть имя и страну по образцу «A nevem…», «Magyar vagyok».', skills: ['speaking', 'writing'] },
    { id: 'l2_ask-answer-questions', text: 'Задавать и отвечать на простые вопросы (Hogy vagy?, Ki vagy te?).', skills: ['speaking', 'listening'] },
  ],
};
