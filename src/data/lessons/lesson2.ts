import { Lesson, LessonActivity } from '../../types';
import { P1_L2_PRACTICE, P1_L2_READING, P1_L2_ROLEPLAY, P1_L2_SPEAKING, P1_L2_WRITING } from './p1FoundationActivities';

const L2_CP_PRONOUN_REFERENTS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l2-cp-pronoun-referents',
  title: 'Выбираем личное местоимение',
  passCount: 5,
  exercises: [
    { kind: 'singleChoice', id: 'l2-pronoun-referent-1', prompt: 'Говорящий указывает на себя: «я».', options: ['én', 'te', 'ő'], correctIndex: 0, explanation: 'én — «я».' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-2', prompt: 'Говорящий обращается к одному собеседнику: «ты».', options: ['én', 'te', 'mi'], correctIndex: 1, explanation: 'te — «ты».' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-3', prompt: 'Говорят об одном человеке: «он / она».', options: ['ő', 'ti', 'ők'], correctIndex: 0, explanation: 'ő означает и «он», и «она».' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-4', prompt: 'Говорящий включает себя в группу: «мы».', options: ['mi', 'ti', 'ők'], correctIndex: 0, explanation: 'mi — «мы».' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-5', prompt: 'Говорящий обращается к нескольким людям: «вы».', options: ['mi', 'ti', 'ők'], correctIndex: 1, explanation: 'ti — неофициальное «вы» при обращении к нескольким людям; это не вежливое «Вы» одному человеку.' },
    { kind: 'singleChoice', id: 'l2-pronoun-referent-6', prompt: 'Говорят о нескольких людях: «они».', options: ['ő', 'ti', 'ők'], correctIndex: 2, explanation: 'ők — «они».' },
  ],
};

const L2_CP_PRONOUN_CONTEXT: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l2-cp-pronoun-context',
  title: 'Личные местоимения в предложениях',
  passCount: 4,
  exercises: [
    { kind: 'singleChoice', id: 'l2-pronoun-context-1', prompt: '___ diák vagyok. — Я студент / студентка.', options: ['Én', 'Te', 'Ő'], correctIndex: 0, explanation: 'vagyok — форма én.' },
    { kind: 'singleChoice', id: 'l2-pronoun-context-2', prompt: '___ magyar vagy? — Ты венгр / венгерка?', options: ['Én', 'Te', 'Mi'], correctIndex: 1, explanation: 'vagy — форма te.' },
    { kind: 'singleChoice', id: 'l2-pronoun-context-3', prompt: '___ itt van. — Он / она здесь.', options: ['Ő', 'Ti', 'Ők'], correctIndex: 0, explanation: 'ő обозначает одного человека: «он / она».' },
    { kind: 'singleChoice', id: 'l2-pronoun-context-4', prompt: '___ diákok vagyunk. — Мы студенты / студентки.', options: ['Mi', 'Ti', 'Ők'], correctIndex: 0, explanation: 'vagyunk — форма mi.' },
    { kind: 'singleChoice', id: 'l2-pronoun-context-5', prompt: '___ itt vannak. — Они здесь.', options: ['Ő', 'Ti', 'Ők'], correctIndex: 2, explanation: 'vannak — форма ők.' },
  ],
};

const L2_CP_LENNI: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l2-cp-lenni',
  title: 'Lenni: шесть форм настоящего времени',
  passCount: 6,
  exercises: [
    { kind: 'textInput', id: 'l2-lenni-1', prompt: 'Форма lenni для én в настоящем времени:', accept: ['vagyok'], explanation: 'én vagyok.' },
    { kind: 'textInput', id: 'l2-lenni-2', prompt: 'Форма lenni для te в настоящем времени:', accept: ['vagy'], explanation: 'te vagy.' },
    { kind: 'textInput', id: 'l2-lenni-3', prompt: 'Какая форма нужна в модели «Ő itt ___»?', accept: ['van'], explanation: 'Для местонахождения одного человека: Ő itt van.' },
    { kind: 'textInput', id: 'l2-lenni-4', prompt: 'Форма lenni для mi в настоящем времени:', accept: ['vagyunk'], explanation: 'mi vagyunk.' },
    { kind: 'textInput', id: 'l2-lenni-5', prompt: 'Форма lenni для ti в настоящем времени:', accept: ['vagytok'], explanation: 'ti vagytok.' },
    { kind: 'textInput', id: 'l2-lenni-6', prompt: 'Какая форма нужна в модели «Ők itt ___»?', accept: ['vannak'], explanation: 'Для местонахождения нескольких людей: Ők itt vannak.' },
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
    { id: 'l2-rp-informal-open-record', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Введи неофициальное приветствие и сравни с моделью.', model: 'Szia!', next: 'l2-rp-informal-partner' },
    { id: 'l2-rp-informal-partner', speaker: 'waiter', prompt: 'Szia! Hogy vagy?', next: 'l2-rp-how-are-you' },
    { id: 'l2-rp-how-are-you', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Введи ответ и сравни реплику с моделью.', model: 'Jól vagyok, köszönöm.', next: 'l2-rp-partner-question' },
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
    { id: 'l2-rp-informal-close-record', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Введи выбранное неофициальное прощание и сравни с моделью.', model: 'Szia!', next: 'l2-rp-formal-stage' },
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
    { id: 'l2-rp-formal-open-record', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Введи вежливое приветствие и сравни с моделью.', model: 'Jó napot!', next: 'l2-rp-formal-partner' },
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
    { id: 'l2-rp-formal-close-record', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Введи вежливое прощание и сравни с моделью.', model: 'Viszlát!', next: 'l2-rp-end' },
    { id: 'l2-rp-end', speaker: 'stage', stageLabel: 'Диалог завершён' },
  ],
};

const L2_WRITING_SELF_INTRODUCTION: LessonActivity = {
  kind: 'writing',
  id: 'l2-writing-self-introduction',
  title: 'Письмо: краткое представление',
  prompt: 'Напишите минимум пять коротких предложений: приветствие, имя, национальность или происхождение, место жительства, профессию или статус обучения. Добавьте один вопрос собеседнику и прощание.',
  modelAnswer: [
    'Szia!',
    'Anna vagyok.',
    'Örmény vagyok.',
    'Örményországból vagyok, de Budapesten élek.',
    'Grafikus vagyok.',
    'És te? Honnan vagy?',
    'Viszlát!',
  ],
  rubric: [
    'Есть приветствие и прощание',
    'Имя оформлено полной конструкцией с vagyok или A nevem…',
    'Есть национальность или готовая форма происхождения',
    'Есть место жительства и профессия либо статус обучения',
    'Есть хотя бы один правильно построенный вопрос',
    'Написаны минимум пять самостоятельных предложений',
  ],
};

const L2_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l2-exit-check',
  title: 'Итоговая проверка урока 2',
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
      eyebrow: 'УРОК 2 · 1/10 · ПРИВЕТСТВИЯ',
      title: 'Köszönések',
      subtitle: 'Как поздороваться и попрощаться в разных ситуациях',
      type: 'info',
      note: 'Для начинающего безопасное правило: с друзьями, детьми и людьми, с которыми принято обращение на «ты», используйте Szia. С незнакомым взрослым или в официальной ситуации начните с Jó napot kívánok.',
      warn: 'Формальность зависит не только от знакомства, но и от принятого способа обращения. Если собеседник первым говорит Szia, обычно можно ответить Szia. Если вы не уверены, выбирайте вежливую форму.',
      task: 'Прослушайте каждую формулу, прочитайте ситуацию употребления и повторите короткие диалоги. Обратите внимание: некоторые выражения используются и при встрече, и при прощании.',
      body: `
        <p>В венгерском языке выбор приветствия зависит от <strong>ситуации</strong>, <strong>количества собеседников</strong> и того, общаетесь ли вы неофициально на «ты» или вежливо.</p>

        <div class="grid2 my-3">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#7A1E2B]">Неофициальное общение</div>
            <p class="text-sm mt-2">Друзья, родственники, дети, знакомые ровесники и люди, с которыми уже принято обращение на «ты».</p>
            <div class="font-mono font-bold mt-2">Szia! · Sziasztok!</div>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58]">Вежливое общение</div>
            <p class="text-sm mt-2">Незнакомый взрослый, преподаватель, врач, сотрудник учреждения или другая официальная ситуация.</p>
            <div class="font-mono font-bold mt-2">Jó napot kívánok! · Viszontlátásra!</div>
          </div>
        </div>

        <table class="conj">
          <tr>
            <th>Формула</th>
            <th>Перевод</th>
            <th>Когда использовать</th>
            <th>Важная деталь</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szia!" data-speak-lang="hu-HU">Szia!</button></td>
            <td>Привет! / Пока!</td>
            <td>Неофициально, при обращении к одному человеку</td>
            <td>Используется и при встрече, и при прощании</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Sziasztok!" data-speak-lang="hu-HU">Sziasztok!</button></td>
            <td>Привет всем! / Пока всем!</td>
            <td>Неофициально, при обращении к нескольким людям</td>
            <td>Множественная форма от Szia</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó reggelt kívánok!" data-speak-lang="hu-HU">Jó reggelt kívánok!</button></td>
            <td>Доброе утро!</td>
            <td>Вежливое утреннее приветствие</td>
            <td>Короткая форма: Jó reggelt!</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok!" data-speak-lang="hu-HU">Jó napot kívánok!</button></td>
            <td>Добрый день!</td>
            <td>Универсальное вежливое приветствие днём</td>
            <td>Короткая форма Jó napot! очень распространена</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó estét kívánok!" data-speak-lang="hu-HU">Jó estét kívánok!</button></td>
            <td>Добрый вечер!</td>
            <td>Вежливое приветствие вечером</td>
            <td>Короткая форма: Jó estét!</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Viszlát!" data-speak-lang="hu-HU">Viszlát!</button></td>
            <td>До свидания! / Пока!</td>
            <td>Короткое распространённое прощание</td>
            <td>Подходит во многих нейтральных и вежливых ситуациях</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Viszontlátásra!" data-speak-lang="hu-HU">Viszontlátásra!</button></td>
            <td>До свидания!</td>
            <td>Полная вежливая формула прощания</td>
            <td>Безопасный выбор в официальной ситуации</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szervusz!" data-speak-lang="hu-HU">Szervusz!</button></td>
            <td>Привет! / Пока!</td>
            <td>Неофициально, обычно с одним человеком</td>
            <td>Существует разговорный вариант Szevasz; начинающему проще использовать Szia</td>
          </tr>
        </table>

        <div class="note">
          <b>Не путайте:</b> <span class="hu-word">Jó éjszakát!</span> означает «Спокойной ночи!» и обычно говорится при прощании перед сном, а не как обычное вечернее приветствие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Короткие модели</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Мини-диалог</th><th>Перевод</th></tr>
          <tr>
            <td>Один знакомый</td>
            <td><button class="speak-btn" data-speak-text="Szia! Szia!" data-speak-lang="hu-HU">— Szia!<br>— Szia!</button></td>
            <td>— Привет!<br>— Привет!</td>
          </tr>
          <tr>
            <td>Несколько друзей</td>
            <td><button class="speak-btn" data-speak-text="Sziasztok! Szia!" data-speak-lang="hu-HU">— Sziasztok!<br>— Szia!</button></td>
            <td>— Привет всем!<br>— Привет!</td>
          </tr>
          <tr>
            <td>Незнакомый взрослый</td>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok! Jó napot!" data-speak-lang="hu-HU">— Jó napot kívánok!<br>— Jó napot!</button></td>
            <td>— Добрый день!<br>— Добрый день!</td>
          </tr>
          <tr>
            <td>Вежливое прощание</td>
            <td><button class="speak-btn" data-speak-text="Viszontlátásra! Viszontlátásra!" data-speak-lang="hu-HU">— Viszontlátásra!<br>— Viszontlátásra!</button></td>
            <td>— До свидания!<br>— До свидания!</td>
          </tr>
        </table>

        <div class="note">
          <b>Практическая стратегия:</b> если сомневаетесь, начните вежливо: <span class="hu-word">Jó napot kívánok!</span> Собеседник может сам предложить перейти на неофициальное общение или первым использовать <span class="hu-word">Szia!</span>
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 2 · 2/10 · МЕСТОИМЕНИЯ',
      title: 'Személyes névmások',
      subtitle: 'Личные местоимения: кто говорит, к кому обращаются и о ком говорят',
      type: 'info',
      note: 'В венгерском личное местоимение часто можно опустить, потому что форма глагола уже показывает лицо и число. Но местоимение употребляется, когда нужно назвать участника, уточнить его, противопоставить людей или логически выделить одно лицо.',
      warn: 'Не путайте ti и вежливое «Вы». Ti означает неофициальное «вы» при обращении к нескольким людям. Для вежливого обращения используются Ön к одному человеку и Önök к нескольким.',
      task: 'Прослушайте шесть основных местоимений, затем прочитайте примеры. Сначала определите участника ситуации, после этого решите, нужно ли местоимение произносить явно.',
      activities: [L2_CP_PRONOUN_REFERENTS, L2_CP_PRONOUN_CONTEXT],
      body: `
        <p>Личные местоимения показывают, <strong>кто говорит</strong>, <strong>к кому обращаются</strong> или <strong>о ком говорят</strong>. Ниже даны формы подлежащего — они отвечают на вопрос «кто?».</p>

        <table class="conj">
          <tr>
            <th>Лицо</th>
            <th>Местоимение</th>
            <th>Перевод</th>
            <th>Пример</th>
            <th>Перевод примера</th>
          </tr>
          <tr>
            <td>1-е лицо, единственное число</td>
            <td><button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU">én</button></td>
            <td>я</td>
            <td><button class="speak-btn" data-speak-text="Én diák vagyok." data-speak-lang="hu-HU">Én diák vagyok.</button></td>
            <td>Я студент / студентка.</td>
          </tr>
          <tr>
            <td>2-е лицо, единственное число</td>
            <td><button class="speak-btn" data-speak-text="te" data-speak-lang="hu-HU">te</button></td>
            <td>ты</td>
            <td><button class="speak-btn" data-speak-text="Te magyar vagy?" data-speak-lang="hu-HU">Te magyar vagy?</button></td>
            <td>Ты венгр / венгерка?</td>
          </tr>
          <tr>
            <td>3-е лицо, единственное число</td>
            <td><button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU">ő</button></td>
            <td>он / она</td>
            <td><button class="speak-btn" data-speak-text="Ő itt van." data-speak-lang="hu-HU">Ő itt van.</button></td>
            <td>Он / она здесь.</td>
          </tr>
          <tr>
            <td>1-е лицо, множественное число</td>
            <td><button class="speak-btn" data-speak-text="mi" data-speak-lang="hu-HU">mi</button></td>
            <td>мы</td>
            <td><button class="speak-btn" data-speak-text="Mi diákok vagyunk." data-speak-lang="hu-HU">Mi diákok vagyunk.</button></td>
            <td>Мы студенты / студентки.</td>
          </tr>
          <tr>
            <td>2-е лицо, множественное число</td>
            <td><button class="speak-btn" data-speak-text="ti" data-speak-lang="hu-HU">ti</button></td>
            <td>вы, несколько человек, неофициально</td>
            <td><button class="speak-btn" data-speak-text="Ti magyarok vagytok?" data-speak-lang="hu-HU">Ti magyarok vagytok?</button></td>
            <td>Вы венгры?</td>
          </tr>
          <tr>
            <td>3-е лицо, множественное число</td>
            <td><button class="speak-btn" data-speak-text="ők" data-speak-lang="hu-HU">ők</button></td>
            <td>они</td>
            <td><button class="speak-btn" data-speak-text="Ők itt vannak." data-speak-lang="hu-HU">Ők itt vannak.</button></td>
            <td>Они здесь.</td>
          </tr>
        </table>

        <div class="note">
          <b>Ő и ők:</b> местоимение <span class="hu-word">ő</span> не показывает пол и означает как «он», так и «она». Контекст или имя человека уточняет, о ком идёт речь. Форма <span class="hu-word">ők</span> означает «они»; конечная <b>k</b> показывает множественное число.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Когда местоимение можно опустить</h4>
        <table class="conj">
          <tr><th>С местоимением</th><th>Обычная краткая форма</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Én diák vagyok." data-speak-lang="hu-HU">Én diák vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="Diák vagyok." data-speak-lang="hu-HU">Diák vagyok.</button></td>
            <td>Я студент / студентка.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Te magyar vagy?" data-speak-lang="hu-HU">Te magyar vagy?</button></td>
            <td><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU">Magyar vagy?</button></td>
            <td>Ты венгр / венгерка?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mi diákok vagyunk." data-speak-lang="hu-HU">Mi diákok vagyunk.</button></td>
            <td><button class="speak-btn" data-speak-text="Diákok vagyunk." data-speak-lang="hu-HU">Diákok vagyunk.</button></td>
            <td>Мы студенты / студентки.</td>
          </tr>
        </table>

        <p>Формы <b>vagyok</b>, <b>vagy</b>, <b>vagyunk</b> уже показывают лицо и число, поэтому местоимение часто не требуется.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Когда местоимение нужно или полезно</h4>
        <ul class="tick">
          <li><b>Чтобы назвать участника:</b> <button class="speak-btn" data-speak-text="Ő itt van." data-speak-lang="hu-HU">Ő itt van.</button> — Он / она здесь.</li>
          <li><b>Чтобы противопоставить людей:</b> <button class="speak-btn" data-speak-text="Én diák vagyok, ő tanár." data-speak-lang="hu-HU">Én diák vagyok, ő tanár.</button> — Я студент / студентка, а он / она преподаватель.</li>
          <li><b>Чтобы исправить или подчеркнуть:</b> <button class="speak-btn" data-speak-text="Én vagyok Anna." data-speak-lang="hu-HU">Én vagyok Anna.</button> — Анна — это я / Я Анна.</li>
          <li><b>Чтобы устранить неоднозначность:</b> если из контекста непонятно, кто выполняет действие, произнесите местоимение или имя.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Вежливое «Вы»</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Значение</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ön" data-speak-lang="hu-HU">Ön</button></td>
            <td>Вы, вежливо к одному человеку</td>
            <td><button class="speak-btn" data-speak-text="Ön magyar?" data-speak-lang="hu-HU">Ön magyar?</button></td>
            <td>Вы венгр / венгерка?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Önök" data-speak-lang="hu-HU">Önök</button></td>
            <td>Вы, вежливо к нескольким людям</td>
            <td><button class="speak-btn" data-speak-text="Önök magyarok?" data-speak-lang="hu-HU">Önök magyarok?</button></td>
            <td>Вы венгры?</td>
          </tr>
        </table>

        <div class="note">
          <b>Важно:</b> Ön и Önök грамматически сочетаются с формами третьего лица. Подробно это будет видно при изучении глагола <span class="hu-word">lenni</span>.
        </div>

        <div class="note">
          <b>Не смешивайте функции:</b> эта таблица показывает формы подлежащего — «кто?». Формы «меня», «тебя», «его / её» выглядят иначе и изучаются отдельно.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 2 · 3/10 · ГЛАГОЛ LENNI',
      title: 'A lenni ige',
      subtitle: 'Глагол «быть»: формы настоящего времени и два разных правила',
      note: 'Lenni — инфинитив «быть». В настоящем времени его формы показывают лицо и число, но в третьем лице van/vannak употребляются не во всех типах предложений.',
      warn: 'Не переводите каждую форму механически как «я есть», «ты есть». В русском связка в настоящем времени обычно не произносится: Diák vagyok означает естественное «Я студент / студентка».',
      task: 'Сначала выучите шесть форм. Затем разделите примеры на две группы: характеристика человека без van/vannak и местонахождение или существование с van/vannak.',
      activities: [L2_CP_LENNI],
      body: `
        <p><strong>Lenni</strong> — один из основных венгерских глаголов. Он соответствует русскому «быть», но перевод зависит от конструкции: «являться», «находиться», «существовать» или естественная русская фраза без слова «есть».</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-4 mb-2">1. Шесть форм настоящего времени</h4>
        <table class="conj">
          <tr>
            <th>Лицо</th>
            <th>Форма</th>
            <th>Пример</th>
            <th>Естественный перевод</th>
          </tr>
          <tr>
            <td>én — я</td>
            <td><button class="speak-btn" data-speak-text="vagyok" data-speak-lang="hu-HU">vagyok</button></td>
            <td><button class="speak-btn" data-speak-text="Diák vagyok." data-speak-lang="hu-HU">Diák vagyok.</button></td>
            <td>Я студент / студентка.</td>
          </tr>
          <tr>
            <td>te — ты</td>
            <td><button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU">vagy</button></td>
            <td><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU">Magyar vagy?</button></td>
            <td>Ты венгр / венгерка?</td>
          </tr>
          <tr>
            <td>ő — он / она</td>
            <td><button class="speak-btn" data-speak-text="van" data-speak-lang="hu-HU">van</button></td>
            <td><button class="speak-btn" data-speak-text="Ő itt van." data-speak-lang="hu-HU">Ő itt van.</button></td>
            <td>Он / она здесь.</td>
          </tr>
          <tr>
            <td>mi — мы</td>
            <td><button class="speak-btn" data-speak-text="vagyunk" data-speak-lang="hu-HU">vagyunk</button></td>
            <td><button class="speak-btn" data-speak-text="Diákok vagyunk." data-speak-lang="hu-HU">Diákok vagyunk.</button></td>
            <td>Мы студенты / студентки.</td>
          </tr>
          <tr>
            <td>ti — вы, несколько человек</td>
            <td><button class="speak-btn" data-speak-text="vagytok" data-speak-lang="hu-HU">vagytok</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarok vagytok?" data-speak-lang="hu-HU">Magyarok vagytok?</button></td>
            <td>Вы венгры?</td>
          </tr>
          <tr>
            <td>ők — они</td>
            <td><button class="speak-btn" data-speak-text="vannak" data-speak-lang="hu-HU">vannak</button></td>
            <td><button class="speak-btn" data-speak-text="Ők itt vannak." data-speak-lang="hu-HU">Ők itt vannak.</button></td>
            <td>Они здесь.</td>
          </tr>
        </table>

        <div class="note">
          <b>Местоимение можно опустить:</b> форма глагола уже показывает лицо. Поэтому <span class="hu-word">Diák vagyok</span> обычно естественнее нейтрального <span class="hu-word">Én diák vagyok</span>. Местоимение добавляют для контраста или уточнения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. В третьем лице van/vannak опускаются при характеристике</h4>
        <p>В настоящем времени, когда мы сообщаем, <strong>кто человек, что он собой представляет или какой он</strong>, связка в третьем лице не произносится.</p>

        <table class="conj">
          <tr><th>Правильно</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő diák." data-speak-lang="hu-HU">Ő diák.</button></td>
            <td>Он / она студент.</td>
            <td><s>Ő van diák.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő magyar." data-speak-lang="hu-HU">Ő magyar.</button></td>
            <td>Он венгр / она венгерка.</td>
            <td><s>Ő van magyar.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő szép." data-speak-lang="hu-HU">Ő szép.</button></td>
            <td>Он красивый / она красивая.</td>
            <td><s>Ő van szép.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ők diákok." data-speak-lang="hu-HU">Ők diákok.</button></td>
            <td>Они студенты.</td>
            <td><s>Ők vannak diákok.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ők szépek." data-speak-lang="hu-HU">Ők szépek.</button></td>
            <td>Они красивые.</td>
            <td><s>Ők vannak szépek.</s></td>
          </tr>
        </table>

        <div class="note">
          <b>Только третье лицо:</b> в первом и втором лице форма остаётся: <span class="hu-word">Diák vagyok</span>, <span class="hu-word">Diák vagy</span>, <span class="hu-word">Diákok vagyunk</span>, <span class="hu-word">Diákok vagytok</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Для местонахождения van/vannak обязательны</h4>
        <p>Когда говорится, <strong>где находится человек или предмет</strong>, формы третьего лица сохраняются.</p>

        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th><th>Почему форма нужна</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő itt van." data-speak-lang="hu-HU">Ő itt van.</button></td>
            <td>Он / она здесь.</td>
            <td>van показывает местонахождение одного человека</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ők itt vannak." data-speak-lang="hu-HU">Ők itt vannak.</button></td>
            <td>Они здесь.</td>
            <td>vannak показывает местонахождение нескольких людей</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna Budapesten van." data-speak-lang="hu-HU">Anna Budapesten van.</button></td>
            <td>Анна находится в Будапеште.</td>
            <td>указано место: Budapesten</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A könyvek az asztalon vannak." data-speak-lang="hu-HU">A könyvek az asztalon vannak.</button></td>
            <td>Книги находятся на столе.</td>
            <td>множественное число требует vannak</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Van/vannak также выражают существование или наличие</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van egy könyv az asztalon." data-speak-lang="hu-HU">Van egy könyv az asztalon.</button></td>
            <td>На столе есть одна книга.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Vannak könyvek az asztalon." data-speak-lang="hu-HU">Vannak könyvek az asztalon.</button></td>
            <td>На столе есть книги.</td>
          </tr>
        </table>

        <div class="note">
          <b>Быстрая проверка:</b>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>профессия, национальность или качество в третьем лице → без van/vannak;</li>
            <li>местонахождение → van/vannak остаются;</li>
            <li>«есть / имеются / существуют» → van/vannak остаются.</li>
          </ul>
        </div>

        <div class="note">
          <b>Ограничение правила:</b> опускание связки относится к настоящему времени. Формы прошедшего и будущего времени изучаются позже.
        </div>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 2 · 4/10 · ПРЕДСТАВЛЕНИЕ',
      title: 'Bemutatkozás',
      subtitle: 'Как представиться: имя, происхождение и место жительства',
      type: 'info',
      note: 'Самопрезентацию удобно строить из готовых коротких блоков. На уровне A0 не нужно самостоятельно разбирать окончания в Örményországból и Budapesten: сначала запомните фразы целиком.',
      warn: 'Форма «Szia, vagyok» неполная. Правильно: Szia, Anna vagyok — после приветствия назовите имя, а затем используйте vagyok.',
      task: 'Выберите подходящее приветствие, подставьте своё имя, затем добавьте национальность или происхождение и город проживания. Прочитайте итоговый рассказ два раза.',
      body: `
        <p>Короткое представление обычно строится по схеме:</p>
        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">приветствие → имя → национальность или происхождение → место жительства → вежливая заключительная фраза</div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-4 mb-2">1. Как назвать своё имя</h4>
        <table class="conj">
          <tr><th>Формула</th><th>Перевод</th><th>Комментарий</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna vagyok." data-speak-lang="hu-HU">Anna vagyok.</button></td>
            <td>Я Анна.</td>
            <td>Имя ставится перед <b>vagyok</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A nevem Anna." data-speak-lang="hu-HU">A nevem Anna.</button></td>
            <td>Меня зовут Анна. / Моё имя — Анна.</td>
            <td>Удобная нейтральная формула</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szia! Anna vagyok." data-speak-lang="hu-HU">Szia! Anna vagyok.</button></td>
            <td>Привет! Я Анна.</td>
            <td>Неофициально</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok! Anna vagyok." data-speak-lang="hu-HU">Jó napot kívánok! Anna vagyok.</button></td>
            <td>Добрый день! Я Анна.</td>
            <td>Вежливо</td>
          </tr>
        </table>

        <div class="note">
          <b>Порядок имени:</b> венгерские имена традиционно часто записываются как фамилия + имя, но иностранцу не нужно искусственно менять привычный порядок собственного имени при представлении.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Национальность и происхождение — не одно и то же</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Перевод</th><th>Что сообщается</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Örmény vagyok." data-speak-lang="hu-HU">Örmény vagyok.</button></td>
            <td>Я армянин / армянка.</td>
            <td>Национальность или идентичность</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Örményországból vagyok." data-speak-lang="hu-HU">Örményországból vagyok.</button></td>
            <td>Я из Армении.</td>
            <td>Страна происхождения</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyar vagyok." data-speak-lang="hu-HU">Magyar vagyok.</button></td>
            <td>Я венгр / венгерка.</td>
            <td>Национальность</td>
          </tr>
        </table>

        <div class="note">
          <b>Готовая модель:</b> <span class="hu-word">[национальность] vagyok</span> означает «Я …», а <span class="hu-word">[страна] + ból/ből vagyok</span> — «Я из …». Правило выбора окончания подробно изучается позже.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Где вы живёте</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Перевод</th><th>Замена</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Budapesten élek." data-speak-lang="hu-HU">Budapesten élek.</button></td>
            <td>Я живу в Будапеште.</td>
            <td>Замените Budapest на свой город в изученной готовой форме</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyarországon élek." data-speak-lang="hu-HU">Magyarországon élek.</button></td>
            <td>Я живу в Венгрии.</td>
            <td>Можно назвать страну проживания</td>
          </tr>
        </table>

        <div class="note">
          <b>Не смешивайте:</b> <span class="hu-word">Örményországból vagyok</span> сообщает, откуда вы, а <span class="hu-word">Budapesten élek</span> — где вы живёте сейчас.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. «Приятно познакомиться»</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Регистр</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Örvendek." data-speak-lang="hu-HU">Örvendek.</button></td>
            <td>Коротко и вежливо</td>
            <td>Рад / рада знакомству.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Örülök, hogy megismerhetlek." data-speak-lang="hu-HU">Örülök, hogy megismerhetlek.</button></td>
            <td>Неофициально, к одному человеку</td>
            <td>Приятно познакомиться.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Örülök, hogy megismerhetem." data-speak-lang="hu-HU">Örülök, hogy megismerhetem.</button></td>
            <td>Вежливо</td>
            <td>Приятно познакомиться.</td>
          </tr>
        </table>

        <div class="note">
          <b>Почему меняем прежнюю фразу:</b> <span class="hu-word">Örülök, hogy megismertelek</span> является неофициальной формой и буквально ближе к «Я рад, что познакомился с тобой». Для момента знакомства яснее использовать <span class="hu-word">megismerhetlek</span>, а в вежливой ситуации — <span class="hu-word">megismerhetem</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Готовые самопрезентации</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Венгерский текст</th><th>Перевод</th></tr>
          <tr>
            <td>Неофициально</td>
            <td>
              <button class="speak-btn" data-speak-text="Szia! Anna vagyok. Örmény vagyok. Örményországból vagyok, de Budapesten élek. Örülök, hogy megismerhetlek." data-speak-lang="hu-HU">
                Szia! Anna vagyok.<br>
                Örmény vagyok.<br>
                Örményországból vagyok, de Budapesten élek.<br>
                Örülök, hogy megismerhetlek.
              </button>
            </td>
            <td>
              Привет! Я Анна.<br>
              Я армянка.<br>
              Я из Армении, но живу в Будапеште.<br>
              Приятно познакомиться.
            </td>
          </tr>
          <tr>
            <td>Вежливо</td>
            <td>
              <button class="speak-btn" data-speak-text="Jó napot kívánok! Anna vagyok. Örményországból vagyok, és Budapesten élek. Örvendek." data-speak-lang="hu-HU">
                Jó napot kívánok! Anna vagyok.<br>
                Örményországból vagyok, és Budapesten élek.<br>
                Örvendek.
              </button>
            </td>
            <td>
              Добрый день! Я Анна.<br>
              Я из Армении и живу в Будапеште.<br>
              Радa знакомству.
            </td>
          </tr>
        </table>

        <div class="note">
          <b>Шаблон для себя:</b><br>
          <span class="hu-word">Szia / Jó napot kívánok! [Имя] vagyok. [Национальность] vagyok. [Страна]ból/ből vagyok. [Город]ban/ben или -n élek. Örvendek.</span>
        </div>

        <div class="note">
          <b>На этом уровне:</b> формы происхождения и местонахождения используйте как готовые выражения. Не создавайте новые окончания наугад — системно они изучаются в следующих уроках.
        </div>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 2 · 5/10 · СТРАНЫ И НАЦИОНАЛЬНОСТИ',
      title: 'Országok és nemzetiségek',
      subtitle: 'Страна, происхождение и национальность — три разные модели',
      type: 'info',
      note: 'Венгерское слово национальности обычно одновременно обозначает человека и прилагательное: örmény — армянин / армянка / армянский. Грамматического различия по полу нет.',
      warn: 'Название страны пишется с большой буквы, а национальность — со строчной. В начале предложения национальность получает большую букву только потому, что является первым словом: Magyar vagyok.',
      task: 'Прослушайте пары «страна — национальность», затем составьте три фразы о себе: кто вы по национальности, откуда вы и где живёте.',
      body: `
        <p>Не смешивайте три разных значения:</p>

        <table class="conj">
          <tr>
            <th>Что сообщаем</th>
            <th>Венгерская модель</th>
            <th>Пример</th>
            <th>Перевод</th>
          </tr>
          <tr>
            <td>Национальность</td>
            <td><b>[национальность] + vagyok</b></td>
            <td><button class="speak-btn" data-speak-text="Örmény vagyok." data-speak-lang="hu-HU">Örmény vagyok.</button></td>
            <td>Я армянин / армянка.</td>
          </tr>
          <tr>
            <td>Страна происхождения</td>
            <td><b>[страна в готовой форме] + vagyok</b></td>
            <td><button class="speak-btn" data-speak-text="Örményországból vagyok." data-speak-lang="hu-HU">Örményországból vagyok.</button></td>
            <td>Я из Армении.</td>
          </tr>
          <tr>
            <td>Место жительства</td>
            <td><b>[страна или город в готовой форме] + élek</b></td>
            <td><button class="speak-btn" data-speak-text="Magyarországon élek." data-speak-lang="hu-HU">Magyarországon élek.</button></td>
            <td>Я живу в Венгрии.</td>
          </tr>
        </table>

        <div class="note">
          <b>На этом уровне:</b> формы <span class="hu-word">Örményországból</span>, <span class="hu-word">Magyarországon</span> и <span class="hu-word">Budapesten</span> запоминайте как готовые выражения. Не подбирайте окончания самостоятельно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Основные пары</h4>
        <table class="conj">
          <tr>
            <th>Страна</th>
            <th>Национальность / человек / прилагательное</th>
            <th>Перевод</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Örményország" data-speak-lang="hu-HU">Örményország</button></td>
            <td><button class="speak-btn" data-speak-text="örmény" data-speak-lang="hu-HU">örmény</button></td>
            <td>Армения — армянин / армянка / армянский</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyarország" data-speak-lang="hu-HU">Magyarország</button></td>
            <td><button class="speak-btn" data-speak-text="magyar" data-speak-lang="hu-HU">magyar</button></td>
            <td>Венгрия — венгр / венгерка / венгерский</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Oroszország" data-speak-lang="hu-HU">Oroszország</button></td>
            <td><button class="speak-btn" data-speak-text="orosz" data-speak-lang="hu-HU">orosz</button></td>
            <td>Россия — русский / русская / русский</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ukrajna" data-speak-lang="hu-HU">Ukrajna</button></td>
            <td><button class="speak-btn" data-speak-text="ukrán" data-speak-lang="hu-HU">ukrán</button></td>
            <td>Украина — украинец / украинка / украинский</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Németország" data-speak-lang="hu-HU">Németország</button></td>
            <td><button class="speak-btn" data-speak-text="német" data-speak-lang="hu-HU">német</button></td>
            <td>Германия — немец / немка / немецкий</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Franciaország" data-speak-lang="hu-HU">Franciaország</button></td>
            <td><button class="speak-btn" data-speak-text="francia" data-speak-lang="hu-HU">francia</button></td>
            <td>Франция — француз / француженка / французский</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olaszország" data-speak-lang="hu-HU">Olaszország</button></td>
            <td><button class="speak-btn" data-speak-text="olasz" data-speak-lang="hu-HU">olasz</button></td>
            <td>Италия — итальянец / итальянка / итальянский</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Amerikai Egyesült Államok" data-speak-lang="hu-HU">Amerikai Egyesült Államok</button><br><span class="text-xs">также: Egyesült Államok</span></td>
            <td><button class="speak-btn" data-speak-text="amerikai" data-speak-lang="hu-HU">amerikai</button></td>
            <td>Соединённые Штаты Америки — американец / американка / американский</td>
          </tr>
        </table>

        <div class="note">
          <b>О слове ország:</b> оно означает «страна» и входит во многие названия: Magyarország, Németország, Olaszország. Но не все названия стран строятся одинаково: например, Ukrajna. Поэтому каждую пару нужно запоминать.
        </div>

        <div class="note">
          <b>Америка и США:</b> слово <span class="hu-word">Amerika</span> употребляется как географическое название и разговорное сокращение. В учебной таблице для государства используется точная форма <span class="hu-word">Amerikai Egyesült Államok</span> или коротко <span class="hu-word">Egyesült Államok</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как работает слово национальности</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>Человек</td>
            <td><button class="speak-btn" data-speak-text="Anna örmény." data-speak-lang="hu-HU">Anna örmény.</button></td>
            <td>Анна — армянка.</td>
          </tr>
          <tr>
            <td>Мужчина или женщина</td>
            <td><button class="speak-btn" data-speak-text="Péter magyar. Anna magyar." data-speak-lang="hu-HU">Péter magyar. Anna magyar.</button></td>
            <td>Петер — венгр. Анна — венгерка.</td>
          </tr>
          <tr>
            <td>Прилагательное</td>
            <td><button class="speak-btn" data-speak-text="magyar nyelv" data-speak-lang="hu-HU">magyar nyelv</button></td>
            <td>венгерский язык</td>
          </tr>
        </table>

        <p>Форма национальности не меняется по грамматическому роду. Слова <b>örmény</b>, <b>magyar</b>, <b>orosz</b> могут обозначать мужчину, женщину или признак предмета — значение определяется контекстом.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полезные вопросы и ответы</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen nemzetiségű vagy?" data-speak-lang="hu-HU">Milyen nemzetiségű vagy?</button></td>
            <td><button class="speak-btn" data-speak-text="Örmény vagyok." data-speak-lang="hu-HU">Örmény vagyok.</button></td>
            <td>Какой ты национальности? — Я армянин / армянка.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Honnan vagy?" data-speak-lang="hu-HU">Honnan vagy?</button></td>
            <td><button class="speak-btn" data-speak-text="Örményországból vagyok." data-speak-lang="hu-HU">Örményországból vagyok.</button></td>
            <td>Откуда ты? — Я из Армении.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hol élsz?" data-speak-lang="hu-HU">Hol élsz?</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarországon élek." data-speak-lang="hu-HU">Magyarországon élek.</button></td>
            <td>Где ты живёшь? — Я живу в Венгрии.</td>
          </tr>
        </table>

        <div class="note">
          <b>Итоговая модель:</b>
          <button class="speak-btn" data-speak-text="Örmény vagyok. Örményországból vagyok, és Magyarországon élek." data-speak-lang="hu-HU">
            Örmény vagyok. Örményországból vagyok, és Magyarországon élek.
          </button>
          — Я армянин / армянка. Я из Армении и живу в Венгрии.
        </div>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 2 · 6/10 · ПРОФЕССИЯ',
      title: 'Foglalkozások és státuszok',
      subtitle: 'Как спросить о профессии и сказать, кем вы работаете',
      type: 'info',
      note: 'Венгерское название профессии не меняется по полу: orvos может означать и врача-мужчину, и врача-женщину. Пол становится понятен из имени или контекста.',
      warn: 'Diák означает «ученик / студент» и описывает статус обучения, а не профессию. Ügyvéd — адвокат, который представляет клиентов; более широкое слово jogász означает юриста.',
      task: 'Прослушайте названия профессий, затем ответьте на вопрос Mivel foglalkozol? полной фразой: [профессия] vagyok.',
      body: `
        <p>Чтобы спросить, кем человек работает, используйте одну из двух моделей:</p>

        <table class="conj">
          <tr>
            <th>Вопрос</th>
            <th>Перевод</th>
            <th>Когда использовать</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU">Mivel foglalkozol?</button></td>
            <td>Чем ты занимаешься? / Кем ты работаешь?</td>
            <td>Естественный неофициальный вопрос к одному человеку</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mi a foglalkozásod?" data-speak-lang="hu-HU">Mi a foglalkozásod?</button></td>
            <td>Какая у тебя профессия?</td>
            <td>Более прямой вопрос о профессии</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mivel foglalkozik?" data-speak-lang="hu-HU">Mivel foglalkozik?</button></td>
            <td>Чем Вы занимаетесь? / Кем Вы работаете?</td>
            <td>Вежливое обращение</td>
          </tr>
        </table>

        <div class="note">
          <b>Основной ответ:</b> <span class="hu-word">[профессия] vagyok</span>.<br>
          Например: <button class="speak-btn" data-speak-text="Programozó vagyok." data-speak-lang="hu-HU">Programozó vagyok.</button> — Я программист.
          Местоимение <b>én</b> обычно не требуется, потому что форма <b>vagyok</b> уже означает первое лицо.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Основные профессии</h4>
        <table class="conj">
          <tr>
            <th>Венгерское слово</th>
            <th>Перевод</th>
            <th>Пример</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="programozó" data-speak-lang="hu-HU">programozó</button></td>
            <td>программист</td>
            <td><button class="speak-btn" data-speak-text="Programozó vagyok." data-speak-lang="hu-HU">Programozó vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="full-stack fejlesztő" data-speak-lang="hu-HU">full-stack fejlesztő</button></td>
            <td>full-stack разработчик</td>
            <td><button class="speak-btn" data-speak-text="Full-stack fejlesztő vagyok." data-speak-lang="hu-HU">Full-stack fejlesztő vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU">tanár</button></td>
            <td>учитель / преподаватель</td>
            <td><button class="speak-btn" data-speak-text="Tanár vagyok." data-speak-lang="hu-HU">Tanár vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="orvos" data-speak-lang="hu-HU">orvos</button></td>
            <td>врач</td>
            <td><button class="speak-btn" data-speak-text="Orvos vagyok." data-speak-lang="hu-HU">Orvos vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="grafikus" data-speak-lang="hu-HU">grafikus</button></td>
            <td>графический дизайнер</td>
            <td><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mérnök" data-speak-lang="hu-HU">mérnök</button></td>
            <td>инженер</td>
            <td><button class="speak-btn" data-speak-text="Mérnök vagyok." data-speak-lang="hu-HU">Mérnök vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jogász" data-speak-lang="hu-HU">jogász</button></td>
            <td>юрист</td>
            <td><button class="speak-btn" data-speak-text="Jogász vagyok." data-speak-lang="hu-HU">Jogász vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ügyvéd" data-speak-lang="hu-HU">ügyvéd</button></td>
            <td>адвокат</td>
            <td><button class="speak-btn" data-speak-text="Ügyvéd vagyok." data-speak-lang="hu-HU">Ügyvéd vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ápoló" data-speak-lang="hu-HU">ápoló</button></td>
            <td>медбрат / медсестра</td>
            <td><button class="speak-btn" data-speak-text="Ápoló vagyok." data-speak-lang="hu-HU">Ápoló vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="eladó" data-speak-lang="hu-HU">eladó</button></td>
            <td>продавец / продавщица</td>
            <td><button class="speak-btn" data-speak-text="Eladó vagyok." data-speak-lang="hu-HU">Eladó vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szakács" data-speak-lang="hu-HU">szakács</button></td>
            <td>повар</td>
            <td><button class="speak-btn" data-speak-text="Szakács vagyok." data-speak-lang="hu-HU">Szakács vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fodrász" data-speak-lang="hu-HU">fodrász</button></td>
            <td>парикмахер</td>
            <td><button class="speak-btn" data-speak-text="Fodrász vagyok." data-speak-lang="hu-HU">Fodrász vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="sofőr" data-speak-lang="hu-HU">sofőr</button></td>
            <td>водитель</td>
            <td><button class="speak-btn" data-speak-text="Sofőr vagyok." data-speak-lang="hu-HU">Sofőr vagyok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Статус обучения</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Перевод</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="diák" data-speak-lang="hu-HU">diák</button></td>
            <td>ученик / студент</td>
            <td><button class="speak-btn" data-speak-text="Diák vagyok." data-speak-lang="hu-HU">Diák vagyok.</button> — Я учусь / Я ученик или студент.</td>
          </tr>
        </table>

        <div class="note">
          <b>Designer:</b> английское заимствование <span class="hu-word">designer</span> встречается в венгерской речи, но оно широкое. Для «графического дизайнера» начинающему полезнее точное слово <span class="hu-word">grafikus</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как сказать о другом человеке</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th><th>Правило</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő orvos." data-speak-lang="hu-HU">Ő orvos.</button></td>
            <td>Он врач / Она врач.</td>
            <td>В третьем лице настоящего времени <b>van</b> с профессией не ставится</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna grafikus." data-speak-lang="hu-HU">Anna grafikus.</button></td>
            <td>Анна — графический дизайнер.</td>
            <td>Имя + профессия, без van</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ők tanárok." data-speak-lang="hu-HU">Ők tanárok.</button></td>
            <td>Они учителя / преподаватели.</td>
            <td>Во множественном числе профессия получает форму множественного числа</td>
          </tr>
        </table>

        <div class="note">
          <b>Не говорите:</b> <s>Ő van orvos.</s><br>
          <b>Правильно:</b> <span class="hu-word">Ő orvos.</span>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-диалог</h4>
        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mivel foglalkozol? Full-stack fejlesztő vagyok. És te? Grafikus vagyok." data-speak-lang="hu-HU">
              — Mivel foglalkozol?<br>
              — Full-stack fejlesztő vagyok. És te?<br>
              — Grafikus vagyok.
            </button></td>
            <td>
              — Кем ты работаешь?<br>
              — Я full-stack разработчик. А ты?<br>
              — Я графический дизайнер.
            </td>
          </tr>
        </table>

        <div class="note">
          <b>Шаблон ответа:</b> не <span class="hu-word">Én vagyok</span>, а <span class="hu-word">[профессия] vagyok</span>.<br>
          Например: <span class="hu-word">Programozó vagyok</span>, <span class="hu-word">Tanár vagyok</span>, <span class="hu-word">Grafikus vagyok</span>.
        </div>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 2 · 7/10 · ВОПРОС И ОТРИЦАНИЕ',
      title: 'Kérdés és tagadás',
      subtitle: 'Вопросы «да/нет», вопросительные слова и три способа отрицания',
      type: 'info',
      note: 'У вопросов «да/нет» порядок слов часто совпадает с утверждением, а вопрос передаётся интонацией и вопросительным знаком. Но это правило не относится ко всем вопросам: для запроса конкретной информации используются вопросительные слова.',
      warn: 'Не ставьте nem механически перед любой формой «быть». В нейтральных предложениях отрицанием van и vannak являются специальные формы nincs и nincsenek.',
      task: 'Сравните утверждение, вопрос и отрицание. Затем выберите правильную отрицательную модель: nem + глагол, именное сказуемое с nem или nincs/nincsenek.',
      activities: [P1_L2_PRACTICE, L2_LISTENING_INTRODUCTION],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Вопросы «да/нет»</h4>
        <p>Если ожидается ответ <b>igen</b> или <b>nem</b>, специальное вопросительное слово обычно не требуется. Порядок слов часто остаётся таким же, как в утверждении.</p>

        <table class="conj">
          <tr>
            <th>Утверждение</th>
            <th>Вопрос</th>
            <th>Перевод вопроса</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyar vagy." data-speak-lang="hu-HU">Magyar vagy.</button></td>
            <td><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU">Magyar vagy?</button></td>
            <td>Ты венгр / венгерка?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Diák vagy." data-speak-lang="hu-HU">Diák vagy.</button></td>
            <td><button class="speak-btn" data-speak-text="Diák vagy?" data-speak-lang="hu-HU">Diák vagy?</button></td>
            <td>Ты ученик / студент?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna itt van." data-speak-lang="hu-HU">Anna itt van.</button></td>
            <td><button class="speak-btn" data-speak-text="Anna itt van?" data-speak-lang="hu-HU">Anna itt van?</button></td>
            <td>Анна здесь?</td>
          </tr>
        </table>

        <div class="note">
          <b>В речи:</b> вопрос узнаётся по вопросительной интонации. Не нужно просто резко повышать голос на последнем звуке; слушайте целую венгерскую модель и повторяйте её как единый вопрос.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Вопросы с вопросительным словом</h4>
        <p>Когда нужен не ответ «да/нет», а конкретная информация, используется вопросительное слово.</p>

        <table class="conj">
          <tr><th>Слово</th><th>Значение</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ki" data-speak-lang="hu-HU">ki</button></td>
            <td>кто</td>
            <td><button class="speak-btn" data-speak-text="Ki vagy?" data-speak-lang="hu-HU">Ki vagy?</button></td>
            <td>Кто ты?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mi" data-speak-lang="hu-HU">mi</button></td>
            <td>что</td>
            <td><button class="speak-btn" data-speak-text="Mi ez?" data-speak-lang="hu-HU">Mi ez?</button></td>
            <td>Что это?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hol" data-speak-lang="hu-HU">hol</button></td>
            <td>где</td>
            <td><button class="speak-btn" data-speak-text="Hol vagy?" data-speak-lang="hu-HU">Hol vagy?</button></td>
            <td>Где ты?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="honnan" data-speak-lang="hu-HU">honnan</button></td>
            <td>откуда</td>
            <td><button class="speak-btn" data-speak-text="Honnan vagy?" data-speak-lang="hu-HU">Honnan vagy?</button></td>
            <td>Откуда ты?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="milyen" data-speak-lang="hu-HU">milyen</button></td>
            <td>какой / какая / какое</td>
            <td><button class="speak-btn" data-speak-text="Milyen nemzetiségű vagy?" data-speak-lang="hu-HU">Milyen nemzetiségű vagy?</button></td>
            <td>Какой ты национальности?</td>
          </tr>
        </table>

        <div class="note">
          <b>Главное различие:</b> <span class="hu-word">Magyar vagy?</span> — вопрос «да/нет». 
          <span class="hu-word">Honnan vagy?</span> — вопрос, который требует конкретного ответа.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Отрицание с nem</h4>
        <p><b>Nem</b> обычно ставится непосредственно перед той частью, которую отрицают. На этом уровне чаще всего — перед личной формой глагола.</p>

        <table class="conj">
          <tr><th>Утверждение</th><th>Отрицание</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyar vagyok." data-speak-lang="hu-HU">Magyar vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem vagyok magyar." data-speak-lang="hu-HU">Nem vagyok magyar.</button></td>
            <td>Я не венгр / не венгерка.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Diák vagy." data-speak-lang="hu-HU">Diák vagy.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem vagy diák." data-speak-lang="hu-HU">Nem vagy diák.</button></td>
            <td>Ты не ученик / не студент.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Programozó vagyok." data-speak-lang="hu-HU">Programozó vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem vagyok programozó." data-speak-lang="hu-HU">Nem vagyok programozó.</button></td>
            <td>Я не программист.</td>
          </tr>
        </table>

        <div class="note">
          <b>Порядок слов:</b> нейтральная модель — <span class="hu-word">Nem vagyok magyar</span>, а не <s>Vagyok nem magyar</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Отрицание в третьем лице без van</h4>
        <p>В третьем лице настоящего времени при профессии, национальности или качестве положительная связка уже опускается. Поэтому отрицание ставится прямо перед именной частью.</p>

        <table class="conj">
          <tr><th>Утверждение</th><th>Отрицание</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő magyar." data-speak-lang="hu-HU">Ő magyar.</button></td>
            <td><button class="speak-btn" data-speak-text="Ő nem magyar." data-speak-lang="hu-HU">Ő nem magyar.</button></td>
            <td>Он не венгр / она не венгерка.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő orvos." data-speak-lang="hu-HU">Ő orvos.</button></td>
            <td><button class="speak-btn" data-speak-text="Ő nem orvos." data-speak-lang="hu-HU">Ő nem orvos.</button></td>
            <td>Он / она не врач.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő szép." data-speak-lang="hu-HU">Ő szép.</button></td>
            <td><button class="speak-btn" data-speak-text="Ő nem szép." data-speak-lang="hu-HU">Ő nem szép.</button></td>
            <td>Он не красивый / она не красивая.</td>
          </tr>
        </table>

        <div class="note">
          <b>Не говорите:</b> <s>Ő nem van magyar</s> или <s>Ő nincs magyar</s>.<br>
          <b>Правильно:</b> <span class="hu-word">Ő nem magyar.</span>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Nincs и nincsenek</h4>
        <p>Если <b>van/vannak</b> выражают местонахождение, наличие или существование, их нейтральные отрицательные формы — <b>nincs</b> и <b>nincsenek</b>.</p>

        <table class="conj">
          <tr>
            <th>Положительная форма</th>
            <th>Отрицательная форма</th>
            <th>Перевод</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő itt van." data-speak-lang="hu-HU">Ő itt van.</button></td>
            <td><button class="speak-btn" data-speak-text="Ő nincs itt." data-speak-lang="hu-HU">Ő nincs itt.</button></td>
            <td>Его / её здесь нет.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ők itt vannak." data-speak-lang="hu-HU">Ők itt vannak.</button></td>
            <td><button class="speak-btn" data-speak-text="Ők nincsenek itt." data-speak-lang="hu-HU">Ők nincsenek itt.</button></td>
            <td>Их здесь нет.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van könyv az asztalon." data-speak-lang="hu-HU">Van könyv az asztalon.</button></td>
            <td><button class="speak-btn" data-speak-text="Nincs könyv az asztalon." data-speak-lang="hu-HU">Nincs könyv az asztalon.</button></td>
            <td>На столе нет книги.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Vannak könyvek az asztalon." data-speak-lang="hu-HU">Vannak könyvek az asztalon.</button></td>
            <td><button class="speak-btn" data-speak-text="Nincsenek könyvek az asztalon." data-speak-lang="hu-HU">Nincsenek könyvek az asztalon.</button></td>
            <td>На столе нет книг.</td>
          </tr>
        </table>

        <div class="note">
          <b>Краткое правило:</b>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li><b>vagyok, vagy, vagyunk, vagytok</b> → отрицание с <b>nem</b>;</li>
            <li>профессия, национальность или качество в третьем лице → <b>nem + слово</b>;</li>
            <li><b>van / vannak</b> со значением места или наличия → <b>nincs / nincsenek</b>.</li>
          </ul>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Короткие ответы</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Кратко</th><th>Полным предложением</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU">Magyar vagy?</button></td>
            <td><button class="speak-btn" data-speak-text="Igen." data-speak-lang="hu-HU">Igen.</button></td>
            <td><button class="speak-btn" data-speak-text="Igen, magyar vagyok." data-speak-lang="hu-HU">Igen, magyar vagyok.</button></td>
            <td>Да, я венгр / венгерка.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU">Magyar vagy?</button></td>
            <td><button class="speak-btn" data-speak-text="Nem." data-speak-lang="hu-HU">Nem.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem, nem vagyok magyar." data-speak-lang="hu-HU">Nem, nem vagyok magyar.</button></td>
            <td>Нет, я не венгр / не венгерка.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna itt van?" data-speak-lang="hu-HU">Anna itt van?</button></td>
            <td><button class="speak-btn" data-speak-text="Nem." data-speak-lang="hu-HU">Nem.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem, Anna nincs itt." data-speak-lang="hu-HU">Nem, Anna nincs itt.</button></td>
            <td>Нет, Анны здесь нет.</td>
          </tr>
        </table>

        <div class="note">
          <b>Почему два nem:</b> в ответе <span class="hu-word">Nem, nem vagyok magyar</span> первое <b>nem</b> означает отдельное «нет», а второе отрицает предложение.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 2 · 8/10 · ДИАЛОГ',
      title: 'Párbeszéd',
      subtitle: 'Знакомство: имя, происхождение, место жительства и профессия',
      type: 'dialogue',
      note: 'В диалоге используются нейтральные учебные имена Anna и Péter. Они не относятся к пользователю курса и служат только для тренировки.',
      warn: 'Формы Annának hívnak и Péternek hívnak пока запоминайте целиком. Окончание -nak/-nek в этой конструкции подробно изучается позже.',
      task: 'Сначала прослушайте весь диалог. Затем прочитайте его по ролям два раза, поменяйтесь ролями и в конце замените имя, страну, город и профессию своими данными.',
      activities: [P1_L2_READING, P1_L2_ROLEPLAY, L2_ROLEPLAY_GREETINGS],
      body: `
        <p>Это неофициальный разговор двух людей, поэтому используются формы <b>Szia</b>, <b>Hogy hívnak?</b>, <b>Honnan vagy?</b> и <b>Mivel foglalkozol?</b>.</p>

        <table class="conj">
          <tr>
            <th>Кто говорит</th>
            <th>Венгерская реплика</th>
            <th>Перевод</th>
            <th>Что тренируем</th>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Szia! Hogy hívnak?" data-speak-lang="hu-HU">Szia! Hogy hívnak?</button></td>
            <td>Привет! Как тебя зовут?</td>
            <td>неофициальное приветствие и вопрос об имени</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Szia! Annának hívnak. És téged?" data-speak-lang="hu-HU">Szia! Annának hívnak. És téged?</button></td>
            <td>Привет! Меня зовут Анна. А тебя?</td>
            <td><b>És téged?</b> — «А тебя?»</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Péternek hívnak. Honnan vagy?" data-speak-lang="hu-HU">Péternek hívnak. Honnan vagy?</button></td>
            <td>Меня зовут Петер. Откуда ты?</td>
            <td>ответ об имени и вопрос о происхождении</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Örményországból vagyok, de Budapesten élek. És te?" data-speak-lang="hu-HU">Örményországból vagyok, de Budapesten élek. És te?</button></td>
            <td>Я из Армении, но живу в Будапеште. А ты?</td>
            <td><b>de</b> — «но»; происхождение и место жительства</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Magyar vagyok, és Budapesten élek." data-speak-lang="hu-HU">Magyar vagyok, és Budapesten élek.</button></td>
            <td>Я венгр и живу в Будапеште.</td>
            <td><b>és</b> — «и»; национальность и место жительства</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU">Mivel foglalkozol?</button></td>
            <td>Кем ты работаешь? / Чем ты занимаешься?</td>
            <td>естественный вопрос о профессии</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Programozó vagyok. És te?" data-speak-lang="hu-HU">Programozó vagyok. És te?</button></td>
            <td>Я программист. А ты?</td>
            <td>модель <b>[профессия] vagyok</b></td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></td>
            <td>Я графический дизайнер.</td>
            <td>название профессии без местоимения én</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Örülök, hogy megismerhetlek." data-speak-lang="hu-HU">Örülök, hogy megismerhetlek.</button></td>
            <td>Приятно познакомиться.</td>
            <td>неофициальная формула к одному человеку</td>
          </tr>
          <tr>
            <td><b>B</b></td>
            <td><button class="speak-btn" data-speak-text="Én is. Szia!" data-speak-lang="hu-HU">Én is. Szia!</button></td>
            <td>Мне тоже. Пока!</td>
            <td><b>Én is</b> — «я тоже / мне тоже»</td>
          </tr>
          <tr>
            <td><b>A</b></td>
            <td><button class="speak-btn" data-speak-text="Szia!" data-speak-lang="hu-HU">Szia!</button></td>
            <td>Пока!</td>
            <td>Szia используется и при встрече, и при прощании</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Готовые блоки</h4>
        <table class="conj">
          <tr><th>Блок</th><th>Перевод</th><th>Что можно заменить</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Péternek hívnak." data-speak-lang="hu-HU">Péternek hívnak.</button></td>
            <td>Меня зовут Петер.</td>
            <td>замените Péter на другое имя, сохраняя готовую модель</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Örményországból vagyok." data-speak-lang="hu-HU">Örményországból vagyok.</button></td>
            <td>Я из Армении.</td>
            <td>пока используйте только изученные готовые формы стран</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Budapesten élek." data-speak-lang="hu-HU">Budapesten élek.</button></td>
            <td>Я живу в Будапеште.</td>
            <td>заменяйте город только в уже изученной правильной форме</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></td>
            <td>Я графический дизайнер.</td>
            <td>замените профессию перед vagyok</td>
          </tr>
        </table>

        <div class="note">
          <b>Не смешивайте вопросы:</b><br>
          <span class="hu-word">Hogy hívnak?</span> — Как тебя зовут?<br>
          <span class="hu-word">Honnan vagy?</span> — Откуда ты?<br>
          <span class="hu-word">Hol élsz?</span> — Где ты живёшь?<br>
          <span class="hu-word">Mivel foglalkozol?</span> — Кем ты работаешь?
        </div>

        <div class="note">
          <b>Самостоятельная версия:</b> после чтения замените только четыре элемента: имя, страну происхождения, место жительства и профессию. Остальную структуру диалога сохраните.
        </div>
      `,
    },
    {
      id: 9,
      eyebrow: 'УРОК 2 · 9/10 · УПРАЖНЕНИЯ',
      title: 'Gyakorlatok',
      subtitle: 'Самопроверка по всему материалу урока',
      type: 'practice',
      note: 'Сначала выполните задания самостоятельно и запишите ответы. Только после этого откройте ключ самопроверки внизу слайда.',
      warn: 'Не переносите русские слова в венгерское предложение и не добавляйте van к профессии или национальности в третьем лице. Следите за точными формами vagyok, vagy, van, vagyunk, vagytok, vannak.',
      task: 'Выполните шесть блоков. После каждого ответа проверьте не только значение, но и порядок слов, форму lenni, заглавные буквы и знаки препинания.',
      activities: [P1_L2_WRITING, L2_WRITING_SELF_INTRODUCTION],
      optionalSpeaking: P1_L2_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Перевод</h4>
        <p>Переведите на венгерский:</p>
        <ol class="tasklist">
          <li>Привет! Я Анна.</li>
          <li>Я армянин / армянка.</li>
          <li>Я из Армении и живу в Будапеште.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Lenni — шесть форм</h4>
        <p>Заполните таблицу, не глядя на предыдущие слайды.</p>
        <table class="conj">
          <tr><th>Местоимение</th><th>Форма lenni</th></tr>
          <tr><td>én</td><td>_____</td></tr>
          <tr><td>te</td><td>_____</td></tr>
          <tr><td>ő</td><td>_____</td></tr>
          <tr><td>mi</td><td>_____</td></tr>
          <tr><td>ti</td><td>_____</td></tr>
          <tr><td>ők</td><td>_____</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Три модели отрицания</h4>
        <p>Переведите:</p>
        <ol class="tasklist">
          <li>Я не врач.</li>
          <li>Он / она не врач.</li>
          <li>Анны здесь нет.</li>
        </ol>
        <div class="note">
          Эти три предложения проверяют разные конструкции: <b>nem + личная форма lenni</b>, 
          <b>третье лицо без van</b> и отрицательную форму <b>nincs</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Вопросы двух типов</h4>
        <p>Переведите:</p>
        <ol class="tasklist">
          <li>Ты студент / студентка?</li>
          <li>Откуда ты?</li>
          <li>Анна здесь?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Выберите приветствие</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Что вы скажете</th></tr>
          <tr><td>Один друг</td><td>________________</td></tr>
          <tr><td>Несколько друзей</td><td>________________</td></tr>
          <tr><td>Незнакомый взрослый днём</td><td>________________</td></tr>
          <tr><td>Вежливое приветствие вечером</td><td>________________</td></tr>
          <tr><td>Вежливое прощание</td><td>________________</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-представление</h4>
        <p>Напишите 5–7 коротких предложений. Включите:</p>
        <ul class="tick">
          <li>приветствие;</li>
          <li>имя;</li>
          <li>национальность или страну происхождения;</li>
          <li>место жительства;</li>
          <li>профессию или статус обучения;</li>
          <li>один вопрос собеседнику;</li>
          <li>прощание.</li>
        </ul>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Открыть ключ самопроверки</summary>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">1. Перевод</h4>
          <ol class="tasklist">
            <li><button class="speak-btn" data-speak-text="Szia! Anna vagyok." data-speak-lang="hu-HU">Szia! Anna vagyok.</button></li>
            <li><button class="speak-btn" data-speak-text="Örmény vagyok." data-speak-lang="hu-HU">Örmény vagyok.</button></li>
            <li><button class="speak-btn" data-speak-text="Örményországból vagyok, és Budapesten élek." data-speak-lang="hu-HU">Örményországból vagyok, és Budapesten élek.</button></li>
          </ol>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">2. Lenni</h4>
          <p class="font-mono font-bold">én vagyok · te vagy · ő van · mi vagyunk · ti vagytok · ők vannak</p>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">3. Отрицание</h4>
          <ol class="tasklist">
            <li><button class="speak-btn" data-speak-text="Nem vagyok orvos." data-speak-lang="hu-HU">Nem vagyok orvos.</button></li>
            <li><button class="speak-btn" data-speak-text="Ő nem orvos." data-speak-lang="hu-HU">Ő nem orvos.</button></li>
            <li><button class="speak-btn" data-speak-text="Anna nincs itt." data-speak-lang="hu-HU">Anna nincs itt.</button></li>
          </ol>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">4. Вопросы</h4>
          <ol class="tasklist">
            <li><button class="speak-btn" data-speak-text="Diák vagy?" data-speak-lang="hu-HU">Diák vagy?</button></li>
            <li><button class="speak-btn" data-speak-text="Honnan vagy?" data-speak-lang="hu-HU">Honnan vagy?</button></li>
            <li><button class="speak-btn" data-speak-text="Anna itt van?" data-speak-lang="hu-HU">Anna itt van?</button></li>
          </ol>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">5. Приветствия</h4>
          <ul class="tick">
            <li>один друг — <b>Szia!</b></li>
            <li>несколько друзей — <b>Sziasztok!</b></li>
            <li>незнакомый взрослый днём — <b>Jó napot kívánok!</b></li>
            <li>вежливое приветствие вечером — <b>Jó estét kívánok!</b></li>
            <li>вежливое прощание — <b>Viszontlátásra!</b></li>
          </ul>

          <h4 class="font-bold text-[#57121C] mt-4 mb-2">6. Возможный образец</h4>
          <button class="speak-btn" data-speak-text="Szia! Anna vagyok. Örmény vagyok. Örményországból vagyok, de Budapesten élek. Grafikus vagyok. És te? Honnan vagy? Viszlát!" data-speak-lang="hu-HU">
            Szia! Anna vagyok. Örmény vagyok. Örményországból vagyok, de Budapesten élek. Grafikus vagyok. És te? Honnan vagy? Viszlát!
          </button>
          <p class="text-sm mt-2">Это только один возможный вариант. Собственные данные могут отличаться, но грамматические модели должны оставаться правильными.</p>
        </details>

        <div class="note">
          <b>Оцените результат:</b> если допустили ошибку в форме lenni, отрицании или вопросе, вернитесь к соответствующему слайду урока 2 и повторите правило до итоговой проверки.
        </div>
      `,
    },
    {
      id: 10,
      eyebrow: 'УРОК 2 · 10/10 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что вы изучили и что должны уметь после урока 2',
      type: 'info',
      note: 'Этот слайд не вводит новые правила. Он связывает материал урока в единую систему: приветствие → представление → вопросы → ответы → прощание.',
      warn: 'Не сокращайте правила до формул «вопрос = интонация» и «отрицание = nem». Интонация без вопросительного слова относится прежде всего к вопросам «да/нет», а отрицание van/vannak при местонахождении и наличии образуется формами nincs/nincsenek.',
      task: 'Прочитайте итоговые блоки, затем выполните итоговую проверку. Если один из пунктов не получается без подсказки, вернитесь к соответствующему слайду.',
      activities: [L2_EXIT_CHECK],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Приветствие и прощание</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Формула</th><th>Перевод</th></tr>
          <tr>
            <td>Один знакомый, неофициально</td>
            <td><button class="speak-btn" data-speak-text="Szia!" data-speak-lang="hu-HU">Szia!</button></td>
            <td>Привет! / Пока!</td>
          </tr>
          <tr>
            <td>Несколько знакомых</td>
            <td><button class="speak-btn" data-speak-text="Sziasztok!" data-speak-lang="hu-HU">Sziasztok!</button></td>
            <td>Привет всем! / Пока всем!</td>
          </tr>
          <tr>
            <td>Вежливо днём</td>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok!" data-speak-lang="hu-HU">Jó napot kívánok!</button></td>
            <td>Добрый день!</td>
          </tr>
          <tr>
            <td>Вежливо вечером</td>
            <td><button class="speak-btn" data-speak-text="Jó estét kívánok!" data-speak-lang="hu-HU">Jó estét kívánok!</button></td>
            <td>Добрый вечер!</td>
          </tr>
          <tr>
            <td>Вежливое прощание</td>
            <td><button class="speak-btn" data-speak-text="Viszontlátásra!" data-speak-lang="hu-HU">Viszontlátásra!</button></td>
            <td>До свидания!</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Личные местоимения</h4>
        <table class="conj">
          <tr><th>Единственное число</th><th>Множественное число</th><th>Вежливое обращение</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="én, te, ő" data-speak-lang="hu-HU">én — я<br>te — ты<br>ő — он / она</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="mi, ti, ők" data-speak-lang="hu-HU">mi — мы<br>ti — вы, неофициально<br>ők — они</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="Ön, Önök" data-speak-lang="hu-HU">Ön — Вы, один человек<br>Önök — Вы, несколько человек</button>
            </td>
          </tr>
        </table>

        <div class="note">
          <b>Важно:</b> <span class="hu-word">ő</span> означает и «он», и «она». 
          <span class="hu-word">ti</span> — неофициальное обращение к нескольким людям, а не вежливое «Вы» одному человеку.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Lenni — «быть» в настоящем времени</h4>
        <p class="font-mono font-bold text-center text-lg my-3">
          én vagyok · te vagy · ő van · mi vagyunk · ti vagytok · ők vannak
        </p>

        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>Первое лицо</td>
            <td><button class="speak-btn" data-speak-text="Diák vagyok." data-speak-lang="hu-HU">Diák vagyok.</button></td>
            <td>Я ученик / студент.</td>
          </tr>
          <tr>
            <td>Вопрос ко второму лицу</td>
            <td><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU">Magyar vagy?</button></td>
            <td>Ты венгр / венгерка?</td>
          </tr>
          <tr>
            <td>Местонахождение</td>
            <td><button class="speak-btn" data-speak-text="Ő itt van. Ők itt vannak." data-speak-lang="hu-HU">Ő itt van. Ők itt vannak.</button></td>
            <td>Он / она здесь. Они здесь.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Когда van/vannak не употребляются</h4>
        <p>В третьем лице настоящего времени при профессии, национальности или качестве связка обычно не произносится.</p>

        <table class="conj">
          <tr><th>Правильно</th><th>Перевод</th><th>Неправильно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő orvos." data-speak-lang="hu-HU">Ő orvos.</button></td>
            <td>Он / она врач.</td>
            <td><s>Ő van orvos.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő magyar." data-speak-lang="hu-HU">Ő magyar.</button></td>
            <td>Он венгр / она венгерка.</td>
            <td><s>Ő van magyar.</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ő szép." data-speak-lang="hu-HU">Ő szép.</button></td>
            <td>Он красивый / она красивая.</td>
            <td><s>Ő van szép.</s></td>
          </tr>
        </table>

        <div class="note">
          <b>Но для места и наличия формы остаются:</b><br>
          <span class="hu-word">Ő itt van.</span> — Он / она здесь.<br>
          <span class="hu-word">Van egy könyv az asztalon.</span> — На столе есть книга.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как сообщить информацию о себе</h4>
        <table class="conj">
          <tr><th>Что сообщаем</th><th>Модель</th><th>Перевод</th></tr>
          <tr>
            <td>Имя</td>
            <td><button class="speak-btn" data-speak-text="Anna vagyok. A nevem Anna." data-speak-lang="hu-HU">Anna vagyok. / A nevem Anna.</button></td>
            <td>Я Анна. / Меня зовут Анна.</td>
          </tr>
          <tr>
            <td>Национальность</td>
            <td><button class="speak-btn" data-speak-text="Örmény vagyok." data-speak-lang="hu-HU">Örmény vagyok.</button></td>
            <td>Я армянин / армянка.</td>
          </tr>
          <tr>
            <td>Происхождение</td>
            <td><button class="speak-btn" data-speak-text="Örményországból vagyok." data-speak-lang="hu-HU">Örményországból vagyok.</button></td>
            <td>Я из Армении.</td>
          </tr>
          <tr>
            <td>Место жительства</td>
            <td><button class="speak-btn" data-speak-text="Budapesten élek." data-speak-lang="hu-HU">Budapesten élek.</button></td>
            <td>Я живу в Будапеште.</td>
          </tr>
          <tr>
            <td>Профессия</td>
            <td><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></td>
            <td>Я графический дизайнер.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Вопросы</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>Вопрос «да/нет»</td>
            <td><button class="speak-btn" data-speak-text="Diák vagy?" data-speak-lang="hu-HU">Diák vagy?</button></td>
            <td>Ты ученик / студент?</td>
          </tr>
          <tr>
            <td>Имя</td>
            <td><button class="speak-btn" data-speak-text="Hogy hívnak?" data-speak-lang="hu-HU">Hogy hívnak?</button></td>
            <td>Как тебя зовут?</td>
          </tr>
          <tr>
            <td>Происхождение</td>
            <td><button class="speak-btn" data-speak-text="Honnan vagy?" data-speak-lang="hu-HU">Honnan vagy?</button></td>
            <td>Откуда ты?</td>
          </tr>
          <tr>
            <td>Место</td>
            <td><button class="speak-btn" data-speak-text="Hol vagy? Hol élsz?" data-speak-lang="hu-HU">Hol vagy? / Hol élsz?</button></td>
            <td>Где ты? / Где ты живёшь?</td>
          </tr>
          <tr>
            <td>Профессия</td>
            <td><button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU">Mivel foglalkozol?</button></td>
            <td>Кем ты работаешь?</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Отрицание</h4>
        <table class="conj">
          <tr><th>Модель</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>nem + личная форма lenni</td>
            <td><button class="speak-btn" data-speak-text="Nem vagyok orvos." data-speak-lang="hu-HU">Nem vagyok orvos.</button></td>
            <td>Я не врач.</td>
          </tr>
          <tr>
            <td>третье лицо без van</td>
            <td><button class="speak-btn" data-speak-text="Ő nem orvos." data-speak-lang="hu-HU">Ő nem orvos.</button></td>
            <td>Он / она не врач.</td>
          </tr>
          <tr>
            <td>нет одного / нет нескольких</td>
            <td><button class="speak-btn" data-speak-text="Ő nincs itt. Ők nincsenek itt." data-speak-lang="hu-HU">Ő nincs itt. / Ők nincsenek itt.</button></td>
            <td>Его / её здесь нет. / Их здесь нет.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Итоговая практическая модель</h4>
        <button class="speak-btn" data-speak-text="Szia! Anna vagyok. Örmény vagyok. Örményországból vagyok, de Budapesten élek. Grafikus vagyok. És te? Hogy hívnak? Honnan vagy? Mivel foglalkozol? Viszlát!" data-speak-lang="hu-HU">
          Szia! Anna vagyok. Örmény vagyok. Örményországból vagyok, de Budapesten élek.
          Grafikus vagyok. És te? Hogy hívnak? Honnan vagy? Mivel foglalkozol? Viszlát!
        </button>

        <div class="note">
          <b>Вы готовы к следующему уроку, если без таблицы можете:</b>
          <ul class="tick mt-2">
            <li>выбрать официальное или неофициальное приветствие;</li>
            <li>назвать шесть основных местоимений и шесть форм lenni;</li>
            <li>представиться в 5–7 предложениях;</li>
            <li>задать минимум три вопроса собеседнику;</li>
            <li>правильно построить Nem vagyok…, Ő nem… и … nincs itt;</li>
            <li>завершить короткий диалог прощанием.</li>
          </ul>
        </div>

        <div class="note">
          <b>Домашняя практика:</b> напишите собственное представление из 5–7 предложений. Прочитайте его два раза медленно и два раза в естественном темпе. Затем без текста ответьте на три вопроса:
          <span class="hu-word">Hogy hívnak?</span>,
          <span class="hu-word">Honnan vagy?</span>,
          <span class="hu-word">Mivel foglalkozol?</span>
        </div>
      `,
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
        'Для личных форм vagyok/vagy/vagyunk/vagytok отрицание строится с nem'
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
