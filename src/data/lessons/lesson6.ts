import { Lesson, LessonActivity } from '../../types';
import { P1_L6_CHECKPOINT, P1_L6_READING, P1_L6_ROLEPLAY, P1_L6_SPEAKING, P1_L6_WRITING } from './p1FoundationActivities';

const L6_READING_A0_PROFILE: LessonActivity = {
  kind: 'reading',
  id: 'l6-reading-a0-profile',
  title: 'Чтение: A0-профиль Анны',
  instructions: 'Прочитай короткий профиль и ответь на вопросы по содержанию.',
  content: {
    type: 'prose',
    title: 'Anna profilja',
    paragraphs: [
      'A nevem Anna. Magyar vagyok. Budapesten élek.',
      'Hétfőn nyolckor dolgozom.',
      'Kedden öt órakor magyarul tanulok.',
      'Szerdán háromkor olvasok.',
    ],
  },
  passCount: 4,
  questions: [
    { id: 'l6-reading-q1', question: 'Как зовут говорящего?', options: ['Péter', 'Anna', 'Mária'], correctIndex: 1, explanation: 'В тексте сказано: A nevem Anna.' },
    { id: 'l6-reading-q2', question: 'Кто говорящий по национальности?', options: ['magyar', 'orosz', 'örmény'], correctIndex: 0, explanation: 'Magyar vagyok — говорящий венгр/венгерка.' },
    { id: 'l6-reading-q3', question: 'В какой день говорящий работает?', options: ['kedden', 'szerdán', 'hétfőn'], correctIndex: 2, explanation: 'Hétfőn nyolckor dolgozom — работа в понедельник.' },
    { id: 'l6-reading-q4', question: 'Во сколько говорящий занимается венгерским?', options: ['nyolckor', 'öt órakor', 'háromkor'], correctIndex: 1, explanation: 'Kedden öt órakor magyarul tanulok — учёба в пять часов.' },
    { id: 'l6-reading-q5', question: 'Что говорящий делает в среду?', options: ['dolgozik', 'tanul', 'olvas'], correctIndex: 2, explanation: 'Szerdán háromkor olvasok — чтение в среду.' },
  ],
};

const L6_CP_DECODING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l6-cp-decoding',
  title: 'Станция 1 · Декодирование: звук и чтение',
  passCount: 8,
  exercises: [
    { kind: 'singleChoice', id: 'l6-decode-1', prompt: 'В слове szép буквосочетание sz обозначает…', options: ['/s/', '/ʃ/', '/ʒ/'], correctIndex: 0, explanation: 'sz обозначает /s/: szép — /seːp/.' },
    { kind: 'singleChoice', id: 'l6-decode-2', prompt: 'В слове sok начальная s обозначает…', options: ['/s/', '/ʃ/', '/t͡ʃ/'], correctIndex: 1, explanation: 's обозначает /ʃ/: sok — /ʃok/.' },
    { kind: 'singleChoice', id: 'l6-decode-3', prompt: 'В слове gyár буквосочетание gy обозначает…', options: ['/ɟ/', '/g/', '/c/'], correctIndex: 0, explanation: 'gy обозначает /ɟ/.' },
    { kind: 'singleChoice', id: 'l6-decode-4', prompt: 'В слове kutya буквосочетание ty обозначает…', options: ['/tʲ/', '/c/', '/ɲ/'], correctIndex: 1, explanation: 'ty обозначает /c/: kutya — /kucɒ/.' },
    { kind: 'singleChoice', id: 'l6-decode-5', prompt: 'В слове nyár буквосочетание ny обозначает…', options: ['/nʲ/', '/ŋ/', '/ɲ/'], correctIndex: 2, explanation: 'ny обозначает /ɲ/: nyár — /ɲaːr/.' },
    { kind: 'singleChoice', id: 'l6-decode-6', prompt: 'Как произносится ly в слове hely в современном стандарте?', options: ['/lʲ/', '/j/', '/ʎ/'], correctIndex: 1, explanation: 'j и ly передают один звук /j/: hely — /hɛj/.' },
    { kind: 'singleChoice', id: 'l6-decode-7', prompt: 'Выбери правильное написание слова /jaːteːk/ (игра).', options: ['játék', 'játik', 'játok'], correctIndex: 0, explanation: 'Правильно: játék (j, á, t, é, k).' },
    { kind: 'singleChoice', id: 'l6-decode-8', prompt: 'В изолированном слове magyar основное ударение падает на…', options: ['второй слог', 'первый слог', 'последний слог'], correctIndex: 1, explanation: 'Основное лексическое ударение падает на первый слог: magyar.' },
    { kind: 'singleChoice', id: 'l6-decode-9', prompt: 'Выбери слово с долгим гласным ú (как в út).', options: ['út', 'ut', 'üt'], correctIndex: 0, explanation: 'út — «дорога», с долгим ú.' },
    { kind: 'singleChoice', id: 'l6-decode-10', prompt: 'В слове tűz гласная ű — это…', options: ['краткий ü', 'долгий ű', 'звук /i/'], correctIndex: 1, explanation: 'ű — долгий вариант ü: tűz — /tyːz/.' },
  ],
};

const L6_CP_A0_FUNCTIONS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l6-cp-a0-functions',
  title: 'Станция 2 · Функциональный A0',
  passCount: 5,
  exercises: [
    { kind: 'singleChoice', id: 'l6-function-1', prompt: 'Неофициальное приветствие для знакомого ровесника.', options: ['Jó napot!', 'Szia!', 'Viszlát!'], correctIndex: 1, explanation: 'Szia — неофициальное приветствие и прощание.' },
    { kind: 'singleChoice', id: 'l6-function-2', prompt: 'Официальное приветствие для незнакомого взрослого.', options: ['Jó napot!', 'Szia!', 'Szevasz!'], correctIndex: 0, explanation: 'Jó napot — вежливое официальное приветствие.' },
    { kind: 'singleChoice', id: 'l6-function-3', prompt: 'Какая формула представляет имя по модели «A nevem…»?', options: ['Anna vagyok van.', 'A nevem Anna.', 'Én Anna vagy.'], correctIndex: 1, explanation: 'A nevem Anna — «Меня зовут Анна».' },
    { kind: 'singleChoice', id: 'l6-function-4', prompt: 'Какая форма lenni сочетается с местоимением mi?', options: ['vagyunk', 'vagy', 'vagytok'], correctIndex: 0, explanation: 'mi vagyunk — «мы есть».' },
    { kind: 'singleChoice', id: 'l6-function-5', prompt: 'Как сказать «я студент»?', options: ['Diák van.', 'Diák vagyunk.', 'Diák vagyok.'], correctIndex: 2, explanation: 'Diák vagyok — «я студент».' },
    { kind: 'singleChoice', id: 'l6-function-6', prompt: 'Подходящий ответ на вопрос «Hogy vagy?»', options: ['Péter vagyok.', 'Jól vagyok, köszönöm.', 'Budapesten élek.'], correctIndex: 1, explanation: 'Jól vagyok, köszönöm — «Хорошо, спасибо».' },
  ],
};

const L6_CP_PLURAL_ARTICLES: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l6-cp-plural-articles',
  title: 'Станция 3 · Множественное число и артикли',
  passCount: 8,
  exercises: [
    { kind: 'singleChoice', id: 'l6-plural-article-1', prompt: '___ ablak (окно)', options: ['a', 'az'], correctIndex: 1, explanation: 'ablak начинается с гласного → az ablak.' },
    { kind: 'singleChoice', id: 'l6-plural-article-2', prompt: 'Речь о конкретной, уже известной книге.', options: ['a könyv', 'egy könyv'], correctIndex: 0, explanation: 'Конкретный известный предмет → a könyv.' },
    { kind: 'singleChoice', id: 'l6-plural-article-3', prompt: 'В комнате есть один / какой-то стол.', options: ['az asztal', 'egy asztal'], correctIndex: 1, explanation: 'Один или пока не определённый предмет → egy asztal.' },
    { kind: 'textInput', id: 'l6-plural-4', prompt: 'alma → множественное число', accept: ['almák'], explanation: 'a → á перед -k: almák.' },
    { kind: 'textInput', id: 'l6-plural-5', prompt: 'kert → множественное число', accept: ['kertek'], explanation: 'kert + -ek → kertek.' },
    { kind: 'textInput', id: 'l6-plural-6', prompt: 'ház → множественное число', accept: ['házak'], explanation: 'Частотная форма -ak: házak.' },
    { kind: 'textInput', id: 'l6-plural-7', prompt: 'asztal → множественное число', accept: ['asztalok'], explanation: 'asztal + -ok → asztalok.' },
    { kind: 'singleChoice', id: 'l6-plural-article-8', prompt: 'két ___ (две книги) — выбери правильную форму', options: ['könyv', 'könyvek'], correctIndex: 0, explanation: 'После числа существительное в единственном числе: két könyv.' },
    { kind: 'textInput', id: 'l6-plural-9', prompt: 'kutya → множественное число', accept: ['kutyák'], explanation: 'a → á: kutyák.' },
    { kind: 'singleChoice', id: 'l6-plural-article-10', prompt: '___ óra (час / часы)', options: ['a', 'az'], correctIndex: 1, explanation: 'óra начинается с гласного → az óra.' },
  ],
};

const L6_CP_PRESENT_VERBS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l6-cp-present-verbs',
  title: 'Станция 4 · Глаголы в настоящем времени',
  passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l6-present-1', prompt: 'én + tanul → ?', accept: ['tanulok'], explanation: 'tanul + -ok → tanulok.' },
    { kind: 'textInput', id: 'l6-present-2', prompt: 'mi + beszél → ?', accept: ['beszélünk'], explanation: 'Передние гласные: beszél + -ünk → beszélünk.' },
    { kind: 'singleChoice', id: 'l6-present-3', prompt: 'Какая форма верна для «они читают»?', options: ['olvasok', 'olvasnak', 'olvasol'], correctIndex: 1, explanation: 'ők olvasnak.' },
    { kind: 'singleChoice', id: 'l6-present-4', prompt: 'Сделай отрицательным: Tanulok.', options: ['Nem tanulok.', 'Tanulok nem.', 'Nincs tanulok.'], correctIndex: 0, explanation: 'nem ставится перед глаголом: Nem tanulok.' },
    { kind: 'textInput', id: 'l6-present-5', prompt: 'ők + dolgozik → ?', accept: ['dolgoznak'], explanation: 'Форма ők от dolgozik: dolgoznak.' },
    { kind: 'singleChoice', id: 'l6-present-6', prompt: 'Выбери форму: «Они пишут».', options: ['írok', 'írnak', 'írsz'], correctIndex: 1, explanation: 'ők írnak.' },
    { kind: 'textInput', id: 'l6-present-7', prompt: 'Mi diákok ___. (lenni)', accept: ['vagyunk'], explanation: 'mi vagyunk.' },
    { kind: 'singleChoice', id: 'l6-present-8', prompt: 'Какая форма соответствует «ti» глагола tanul?', options: ['tanulnak', 'tanultok', 'tanulunk'], correctIndex: 1, explanation: 'ti tanultok.' },
    { kind: 'textInput', id: 'l6-present-9', prompt: 'te + olvas → ?', accept: ['olvasol'], explanation: 'Основа на s: -ol → olvasol.' },
    { kind: 'singleChoice', id: 'l6-present-10', prompt: 'Ő minden nap ___. (dolgozik)', options: ['dolgozom', 'dolgozik', 'dolgozol'], correctIndex: 1, explanation: 'ő dolgozik.' },
  ],
};

const L6_LISTENING_A0_REVIEW: LessonActivity = {
  kind: 'listening',
  id: 'l6-listening-a0-review',
  title: 'Аудирование: знакомство и расписание',
  assetId: 'l6_listening_a0_review',
  audioStatus: 'published',
  transcript: 'A: Szia! A nevem Anna. Hogy hívnak?\nB: Szia! Péter vagyok.\nA: Hogy vagy?\nB: Jól vagyok, köszönöm.\nA: Mikor tanulsz magyarul?\nB: Kedden öt órakor tanulok. Csütörtökön nyolckor dolgozom. Szombaton háromkor olvasok.\nA: Köszönöm. Szia!\nB: Szia!',
  passCount: 4,
  questions: [
    { id: 'l6-listen-q1', question: 'О чём этот короткий разговор?', options: ['покупки в магазине', 'знакомство и расписание', 'погода'], correctIndex: 1, explanation: 'Собеседники знакомятся и обсуждают расписание.' },
    { id: 'l6-listen-q2', question: 'Как зовут второго собеседника?', options: ['Péter', 'Anna', 'Mária'], correctIndex: 0, explanation: 'Второй собеседник отвечает: Péter vagyok.' },
    { id: 'l6-listen-q3', question: 'В какой день собеседник занимается венгерским?', options: ['csütörtökön', 'kedden', 'szombaton'], correctIndex: 1, explanation: 'Kedden öt órakor tanulok — учёба во вторник.' },
    { id: 'l6-listen-q4', question: 'Во сколько собеседник занимается венгерским?', options: ['nyolckor', 'öt órakor', 'háromkor'], correctIndex: 1, explanation: 'Öt órakor — в пять часов.' },
    { id: 'l6-listen-q5', question: 'Что собеседник делает в субботу?', options: ['dolgozik', 'tanul', 'olvas'], correctIndex: 2, explanation: 'Szombaton háromkor olvasok — чтение в субботу.' },
  ],
};

const L6_RECORD_PRONUNCIATION_REVIEW = {
  title: 'Устная практика: повторение произношения',
  instructions: 'Прочитай шесть слов, повторяя изученные звуки, затем сравни ответ с моделями. Без микрофона, score и evidence.',
  prompt: 'szép, sok, magyar, kutya, nyár, hely',
  rubric: ['Задача выполнена', 'Фразы связаны по смыслу'],
};

const L6_ROLEPLAY_SCHEDULE: LessonActivity = {
  kind: 'rolePlay',
  id: 'l6-roleplay-schedule',
  title: 'Говорение: расписание в мини-диалоге',
  partnerLabel: 'Partner · Собеседник',
  completionMessage: 'Оба ответа о расписании отработаны. Проверь по моделям, понятны ли день и время.',
  startTurnId: 'l6-rp-start',
  turns: [
    { id: 'l6-rp-start', speaker: 'stage', stageLabel: 'Короткий диалог о расписании', next: 'l6-rp-q1' },
    { id: 'l6-rp-q1', speaker: 'waiter', prompt: 'Mikor tanulsz magyarul?', next: 'l6-rp-a1' },
    { id: 'l6-rp-a1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь, назвав день и время учёбы, затем сравни с моделью.', model: 'Kedden öt órakor tanulok.', next: 'l6-rp-q2' },
    { id: 'l6-rp-q2', speaker: 'waiter', prompt: 'Mikor dolgozol?', next: 'l6-rp-a2' },
    { id: 'l6-rp-a2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь, назвав день и время работы, затем сравни с моделью.', model: 'Csütörtökön nyolckor dolgozom.', next: 'l6-rp-end' },
    { id: 'l6-rp-end', speaker: 'stage', stageLabel: 'Диалог завершён' },
  ],
};

const L6_WRITING_PROFILE: LessonActivity = {
  kind: 'writing',
  id: 'l6-writing-profile',
  title: 'Письмо: мой A0-профиль',
  prompt: 'Напиши 4–6 коротких предложений о себе. Обязательно укажи четыре факта: 1) имя (A nevem…), 2) национальность или происхождение (… vagyok), 3) одно текущее действие (учёба/работа), 4) один день и время (…-n … órakor …). Используй только структуры уроков 1–5; формы страны (например, Örményországból) считай готовыми выражениями и не оценивай их падежи.',
  modelAnswer: ['A nevem Anna.', 'Magyar vagyok.', 'Magyarul tanulok.', 'Hétfőn nyolckor dolgozom.'],
  rubric: [
    'Указано имя (A nevem… или … vagyok).',
    'Указана национальность или происхождение.',
    'Есть одно текущее действие в настоящем времени.',
    'Есть один день и время с формой -n … órakor.',
    'Использованы только структуры уроков 1–5 без новой грамматики A1.',
  ],
};

const L6_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l6-exit-check',
  title: 'Проверка целей урока 6',
  checks: [
    { objectiveId: 'l6_review-alphabet', activityId: 'l6-cp-decoding', evidenceKind: 'reading' },
    { objectiveId: 'l6_review-verb-conj', activityId: 'l6-cp-present-verbs', evidenceKind: 'grammar' },
    { objectiveId: 'l6_review-numbers', activityId: 'l6-listening-a0-review', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l6-roleplay-schedule', evidenceKind: 'interaction' }] },
    { objectiveId: 'l6_review-plural', activityId: 'l6-cp-plural-articles', evidenceKind: 'grammar' },
    { objectiveId: 'l6_self-assess', activityId: 'l6-writing-profile', evidenceKind: 'writing' },
  ],
};

export const LESSON_6: Lesson = {
  id: 6,
  number: 6,
  level: 'A0',
  title: 'Урок 6 · A0 összefoglaló',
  subtitle: 'Повторение и закрепление уровня A0',
  description: 'Спокойное повторение A0: чтение, четыре короткие станции, мини-аудирование, личный профиль и итоговая самопроверка. Без новой грамматики A1.',
  slidesCount: 10,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 6 · 1/10 · ОБЗОР A0',
      title: 'A0 összefoglaló',
      subtitle: 'Что нужно уметь после уроков 1–5',
      type: 'info',
      note: 'Урок 6 — не новый грамматический раздел и не официальный экзамен. Это спокойная диагностика: чтение, базовые функции общения, существительные и артикли, настоящее время, числа, календарь и расписание.',
      warn: 'Не повторяйте правила как изолированные ярлыки. Проверяйте их в целых формах: szép / sok, a könyv / az ablak, két könyv / könyvek, Két óra van / kettőkor.',
      task: 'Просмотрите карту пяти уроков, выполните быструю самопроверку без ключа и отметьте, какие станции урока 6 требуют повторения.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Урок 1 — чтение и произношение</h4>

        <p>Нужно узнавать венгерские буквосочетания не по названиям букв, а внутри слов:</p>

        <table class="conj">
          <tr><th>Буква / сочетание</th><th>Пример</th><th>Что различать</th></tr>
          <tr>
            <td><b>s</b></td>
            <td><button class="speak-btn" data-speak-text="sok" data-speak-lang="hu-HU">sok</button></td>
            <td>звук, похожий на русское «ш»</td>
          </tr>
          <tr>
            <td><b>sz</b></td>
            <td><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU">szép</button></td>
            <td>звук «с»</td>
          </tr>
          <tr>
            <td><b>cs</b></td>
            <td><button class="speak-btn" data-speak-text="család" data-speak-lang="hu-HU">család</button></td>
            <td>звук «ч»</td>
          </tr>
          <tr>
            <td><b>gy</b></td>
            <td><button class="speak-btn" data-speak-text="gyár" data-speak-lang="hu-HU">gyár</button></td>
            <td>мягкий венгерский согласный</td>
          </tr>
          <tr>
            <td><b>ty</b></td>
            <td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU">kutya</button></td>
            <td>мягкий венгерский согласный</td>
          </tr>
          <tr>
            <td><b>ny</b></td>
            <td><button class="speak-btn" data-speak-text="nyár" data-speak-lang="hu-HU">nyár</button></td>
            <td>звук, похожий на мягкое «нь»</td>
          </tr>
          <tr>
            <td><b>zs</b></td>
            <td><button class="speak-btn" data-speak-text="zseb" data-speak-lang="hu-HU">zseb</button></td>
            <td>звук «ж»</td>
          </tr>
          <tr>
            <td><b>j / ly</b></td>
            <td>
              <button class="speak-btn" data-speak-text="játék, hely" data-speak-lang="hu-HU">
                játék · hely
              </button>
            </td>
            <td>в современном стандарте оба передают звук /j/</td>
          </tr>
        </table>

        <div class="note">
          Дополнительно проверяются долгие гласные:
          <span class="hu-word">út, szép, tűz</span>,
          и основное ударение на первом слоге:
          <span class="hu-word">MAGYAR, BUDAPESTEN</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Урок 2 — знакомство и lenni</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Модель</th></tr>
          <tr>
            <td>неофициальное приветствие</td>
            <td><button class="speak-btn" data-speak-text="Szia!" data-speak-lang="hu-HU">Szia!</button></td>
          </tr>
          <tr>
            <td>официальное приветствие</td>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok!" data-speak-lang="hu-HU">Jó napot kívánok!</button></td>
          </tr>
          <tr>
            <td>представиться</td>
            <td><button class="speak-btn" data-speak-text="A nevem Anna. Anna vagyok." data-speak-lang="hu-HU">A nevem Anna. / Anna vagyok.</button></td>
          </tr>
          <tr>
            <td>национальность</td>
            <td><button class="speak-btn" data-speak-text="Magyar vagyok." data-speak-lang="hu-HU">Magyar vagyok.</button></td>
          </tr>
          <tr>
            <td>самочувствие</td>
            <td><button class="speak-btn" data-speak-text="Jól vagyok, köszönöm." data-speak-lang="hu-HU">Jól vagyok, köszönöm.</button></td>
          </tr>
        </table>

        <p>Формы <span class="hu-word">lenni</span>:</p>

        <p>
          <button class="speak-btn" data-speak-text="vagyok, vagy, van, vagyunk, vagytok, vannak" data-speak-lang="hu-HU">
            vagyok · vagy · van · vagyunk · vagytok · vannak
          </button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Урок 3 — существительные, артикли и количество</h4>

        <table class="conj">
          <tr><th>Тема</th><th>Пример</th><th>Правило</th></tr>
          <tr>
            <td>a / az</td>
            <td><button class="speak-btn" data-speak-text="a könyv, az ablak" data-speak-lang="hu-HU">a könyv · az ablak</button></td>
            <td>az перед гласным звуком</td>
          </tr>
          <tr>
            <td>egy</td>
            <td><button class="speak-btn" data-speak-text="egy asztal" data-speak-lang="hu-HU">egy asztal</button></td>
            <td>один или какой-то предмет</td>
          </tr>
          <tr>
            <td>множественное число</td>
            <td><button class="speak-btn" data-speak-text="könyvek, asztalok, házak, almák" data-speak-lang="hu-HU">könyvek · asztalok · házak · almák</button></td>
            <td>используются варианты -k, -ok, -ak, -ek, -ök и изменения основы</td>
          </tr>
          <tr>
            <td>после числа</td>
            <td><button class="speak-btn" data-speak-text="két könyv, három szék" data-speak-lang="hu-HU">két könyv · három szék</button></td>
            <td>существительное остаётся в единственном числе</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Урок 4 — настоящее время</h4>

        <p>Активная тема — неопределённое спряжение настоящего времени:</p>

        <p>
          <button class="speak-btn" data-speak-text="tanulok, tanulsz, tanul, tanulunk, tanultok, tanulnak" data-speak-lang="hu-HU">
            tanulok · tanulsz · tanul · tanulunk · tanultok · tanulnak
          </button>
        </p>

        <table class="conj">
          <tr><th>Особенность</th><th>Пример</th></tr>
          <tr>
            <td>форма te после s, z, dz</td>
            <td><button class="speak-btn" data-speak-text="olvasol, nézel, főzöl, edzel" data-speak-lang="hu-HU">olvasol · nézel · főzöl · edzel</button></td>
          </tr>
          <tr>
            <td>частотные -ik-глаголы</td>
            <td><button class="speak-btn" data-speak-text="dolgozom, dolgozol, dolgozik; lakom, laksz, lakik" data-speak-lang="hu-HU">dolgozom · dolgozol · dolgozik; lakom · laksz · lakik</button></td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Nem dolgozom." data-speak-lang="hu-HU">Nem dolgozom.</button></td>
          </tr>
          <tr>
            <td>вопрос</td>
            <td><button class="speak-btn" data-speak-text="Mikor tanulsz? Mit olvasol?" data-speak-lang="hu-HU">Mikor tanulsz? Mit olvasol?</button></td>
          </tr>
        </table>

        <div class="warn">
          Неопределённое спряжение не означает «любой глагол без правил».
          Нужно учитывать тип основы, форму te и изученные частотные -ik-глаголы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Урок 5 — числа, календарь и время</h4>

        <table class="conj">
          <tr><th>Тема</th><th>Пример</th></tr>
          <tr>
            <td>числа</td>
            <td><button class="speak-btn" data-speak-text="kettő, két könyv, huszonkettő, huszonkét könyv" data-speak-lang="hu-HU">kettő · két könyv · huszonkettő · huszonkét könyv</button></td>
          </tr>
          <tr>
            <td>день недели</td>
            <td><button class="speak-btn" data-speak-text="hétfő, hétfőn" data-speak-lang="hu-HU">hétfő · hétfőn</button></td>
          </tr>
          <tr>
            <td>дата</td>
            <td><button class="speak-btn" data-speak-text="kétezer-huszonhat augusztus harmadika" data-speak-lang="hu-HU">2026. augusztus 3. → kétezer-huszonhat augusztus harmadika</button></td>
          </tr>
          <tr>
            <td>текущее время</td>
            <td><button class="speak-btn" data-speak-text="Két óra van." data-speak-lang="hu-HU">Két óra van.</button></td>
          </tr>
          <tr>
            <td>время действия</td>
            <td><button class="speak-btn" data-speak-text="Kettőkor olvasok." data-speak-lang="hu-HU">Kettőkor olvasok.</button></td>
          </tr>
          <tr>
            <td>единицы времени</td>
            <td><button class="speak-btn" data-speak-text="tíz perc, egy másodperc" data-speak-lang="hu-HU">tíz perc · egy másodperc</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что вы должны уметь на выходе A0</h4>

        <ul class="tick">
          <li>прочитать знакомое короткое слово и заметить долгую гласную;</li>
          <li>поздороваться, представиться и кратко ответить о себе;</li>
          <li>выбрать a / az / egy и образовать знакомую форму множественного числа;</li>
          <li>образовать изученную форму настоящего времени и поставить nem;</li>
          <li>понять и записать число до 100;</li>
          <li>назвать день, месяц, простую дату и полный час;</li>
          <li>составить короткое расписание: день + время + действие.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Быстрая диагностика</h4>

        <ol class="tasklist">
          <li>Какой звук обозначает <b>sz</b> в слове <b>szép</b>?</li>
          <li>Выберите: <b>a ablak</b> или <b>az ablak</b>.</li>
          <li>Образуйте множественное число: <b>alma</b> → ______.</li>
          <li>Переведите: «две книги» → ______.</li>
          <li>Образуйте: <b>te + olvas</b> → ______.</li>
          <li>Сделайте отрицание: <b>Dolgozom.</b> → ______.</li>
          <li>22 как самостоятельное число → ______.</li>
          <li>«В понедельник» → ______.</li>
          <li>«Сейчас два часа» → ______.</li>
          <li>«Я читаю в два часа» → ______.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ключ</summary>
          <ol class="tasklist mt-3">
            <li><b>/s/</b></li>
            <li><b>az ablak</b></li>
            <li><b>almák</b></li>
            <li><b>két könyv</b></li>
            <li><b>olvasol</b></li>
            <li><b>Nem dolgozom.</b></li>
            <li><b>huszonkettő</b></li>
            <li><b>hétfőn</b></li>
            <li><b>Két óra van.</b></li>
            <li><b>Kettőkor olvasok.</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Как проходить урок 6</h4>

        <p>Не повторяйте всё одинаково. Используйте результат диагностики:</p>

        <ul class="tick">
          <li>ошибки в чтении → уделите больше внимания станции произношения;</li>
          <li>ошибки в приветствиях и lenni → повторите функциональный A0;</li>
          <li>ошибки в a / az, множественном числе и количестве → повторите существительные;</li>
          <li>ошибки в формах глагола → повторите настоящее время;</li>
          <li>ошибки в числе, дате или времени → повторите календарный блок;</li>
          <li>затем выполните чтение, аудирование, личный профиль и итоговую проверку.</li>
        </ul>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 6 · 2/10 · СТАНЦИЯ 1 · ДЕКОДИРОВАНИЕ',
      title: 'Kiejtés és olvasás',
      subtitle: 'Узнаём звук по настоящему венгерскому слову',
      type: 'info',
      note: 'Цель станции — не произнести названия букв, а правильно прочитать слово. Сначала найдите буквосочетание, затем произнесите всё слово с ударением на первом слоге.',
      warn: 'В венгерском s и sz обозначают разные звуки: s ≈ «ш», sz = «с». Буквы j и ly в современном стандартном произношении звучат одинаково, но пишутся по-разному.',
      task: 'Прослушайте примеры, прочитайте слова самостоятельно, выполните распознавание звуков и запишите пять слов под диктовку.',
      activities: [L6_CP_DECODING],
      optionalSpeaking: L6_RECORD_PRONUNCIATION_REVIEW,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. S и SZ — главный контраст</h4>

        <table class="conj">
          <tr><th>Написание</th><th>Звук</th><th>Примеры</th></tr>
          <tr>
            <td><b>s</b></td>
            <td>/ʃ/, примерно «ш»</td>
            <td>
              <button class="speak-btn" data-speak-text="sok, este, test" data-speak-lang="hu-HU">
                sok · este · test
              </button>
            </td>
          </tr>
          <tr>
            <td><b>sz</b></td>
            <td>/s/, как русское «с»</td>
            <td>
              <button class="speak-btn" data-speak-text="szép, száz, asztal" data-speak-lang="hu-HU">
                szép · száz · asztal
              </button>
            </td>
          </tr>
        </table>

        <div class="warn">
          <span class="hu-word">sok</span> начинается со звука «ш»,
          а <span class="hu-word">szép</span> — со звука «с».
          Не читайте венгерскую букву <b>s</b> по английской или русской модели.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. C, CS, Z и ZS</h4>

        <table class="conj">
          <tr><th>Написание</th><th>Звук</th><th>Пример</th></tr>
          <tr>
            <td><b>c</b></td>
            <td>/t͡s/, «ц»</td>
            <td><button class="speak-btn" data-speak-text="cica" data-speak-lang="hu-HU">cica</button></td>
          </tr>
          <tr>
            <td><b>cs</b></td>
            <td>/t͡ʃ/, «ч»</td>
            <td><button class="speak-btn" data-speak-text="család" data-speak-lang="hu-HU">család</button></td>
          </tr>
          <tr>
            <td><b>z</b></td>
            <td>/z/, «з»</td>
            <td><button class="speak-btn" data-speak-text="zene" data-speak-lang="hu-HU">zene</button></td>
          </tr>
          <tr>
            <td><b>zs</b></td>
            <td>/ʒ/, «ж»</td>
            <td><button class="speak-btn" data-speak-text="zseb" data-speak-lang="hu-HU">zseb</button></td>
          </tr>
        </table>

        <div class="note">
          Две буквы <b>cs</b> и <b>zs</b> обозначают по одному согласному звуку.
          При делении на звуки не разбивайте их на c + s или z + s.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Мягкие венгерские согласные</h4>

        <table class="conj">
          <tr><th>Написание</th><th>IPA</th><th>Пример</th><th>Практическая подсказка</th></tr>
          <tr>
            <td><b>gy</b></td>
            <td>/ɟ/</td>
            <td><button class="speak-btn" data-speak-text="gyár, magyar" data-speak-lang="hu-HU">gyár · magyar</button></td>
            <td>мягкий смычный звук; не обычное русское «г»</td>
          </tr>
          <tr>
            <td><b>ty</b></td>
            <td>/c/</td>
            <td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU">kutya</button></td>
            <td>мягкий глухой парный звук к gy</td>
          </tr>
          <tr>
            <td><b>ny</b></td>
            <td>/ɲ/</td>
            <td><button class="speak-btn" data-speak-text="nyár, anya" data-speak-lang="hu-HU">nyár · anya</button></td>
            <td>похож на мягкое «нь», но является одним звуком</td>
          </tr>
        </table>

        <div class="note">
          Не произносите каждую букву отдельно:
          <span class="hu-word">gyár</span> начинается одним звуком gy,
          <span class="hu-word">kutya</span> содержит один звук ty,
          <span class="hu-word">nyár</span> начинается одним звуком ny.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. J и LY</h4>

        <table class="conj">
          <tr><th>Написание</th><th>Произношение</th><th>Примеры</th></tr>
          <tr>
            <td><b>j</b></td>
            <td>/j/</td>
            <td><button class="speak-btn" data-speak-text="jó, játék" data-speak-lang="hu-HU">jó · játék</button></td>
          </tr>
          <tr>
            <td><b>ly</b></td>
            <td>/j/</td>
            <td><button class="speak-btn" data-speak-text="hely, milyen" data-speak-lang="hu-HU">hely · milyen</button></td>
          </tr>
        </table>

        <div class="warn">
          На слух невозможно надёжно определить, пишется <b>j</b> или <b>ly</b>.
          Написание нужно запоминать вместе со словом:
          <span class="hu-word">játék</span>, но <span class="hu-word">hely</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Краткие и долгие гласные</h4>

        <table class="conj">
          <tr><th>Краткая</th><th>Долгая</th><th>Примеры</th></tr>
          <tr><td>a</td><td>á</td><td><button class="speak-btn" data-speak-text="magyar, család" data-speak-lang="hu-HU">magyar · család</button></td></tr>
          <tr><td>e</td><td>é</td><td><button class="speak-btn" data-speak-text="ember, szép" data-speak-lang="hu-HU">ember · szép</button></td></tr>
          <tr><td>i</td><td>í</td><td><button class="speak-btn" data-speak-text="is, ír" data-speak-lang="hu-HU">is · ír</button></td></tr>
          <tr><td>o</td><td>ó</td><td><button class="speak-btn" data-speak-text="sok, jó" data-speak-lang="hu-HU">sok · jó</button></td></tr>
          <tr><td>ö</td><td>ő</td><td><button class="speak-btn" data-speak-text="öt, kettő" data-speak-lang="hu-HU">öt · kettő</button></td></tr>
          <tr><td>u</td><td>ú</td><td><button class="speak-btn" data-speak-text="kutya, út" data-speak-lang="hu-HU">kutya · út</button></td></tr>
          <tr><td>ü</td><td>ű</td><td><button class="speak-btn" data-speak-text="üveg, tűz" data-speak-lang="hu-HU">üveg · tűz</button></td></tr>
        </table>

        <div class="note">
          Долгота является частью правильного слова:
          <span class="hu-word">szép, ír, jó, kettő, út, tűz</span>.
          Буквы <b>a / á</b> и <b>e / é</b> различаются не только длительностью, но и качеством звука.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Ударение</h4>

        <p>Основное словесное ударение обычно падает на первый слог:</p>

        <table class="conj">
          <tr><th>Слово</th><th>Ритм</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="magyar" data-speak-lang="hu-HU">magyar</button></td><td><b>MA</b>-gyar</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="Budapesten" data-speak-lang="hu-HU">Budapesten</button></td><td><b>BU</b>-da-pes-ten</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="csütörtök" data-speak-lang="hu-HU">csütörtök</button></td><td><b>CSÜ</b>-tör-tök</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="augusztus" data-speak-lang="hu-HU">augusztus</button></td><td><b>AU</b>-gusz-tus</td></tr>
        </table>

        <div class="warn">
          Ударение на первом слоге не отменяет долготу других гласных.
          Например, в <span class="hu-word">január</span> ударение падает на первый слог,
          но конечная <b>á</b> всё равно произносится долго.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Прочитайте без подсказки</h4>

        <ol class="tasklist">
          <li><b>szombat</b></li>
          <li><b>csütörtök</b></li>
          <li><b>nyolcvan</b></li>
          <li><b>magyar</b></li>
          <li><b>hely</b></li>
          <li><b>zseb</b></li>
          <li><b>tűz</b></li>
          <li><b>játék</b></li>
        </ol>

        <p>После самостоятельного чтения нажмите на слова и сравните произношение.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-диктант и самопроверка</h4>

        <p>Запишите услышанные слова:</p>

        <ol class="tasklist">
          <li>________________</li>
          <li>________________</li>
          <li>________________</li>
          <li>________________</li>
          <li>________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ключ после аудио</summary>
          <ol class="tasklist mt-3">
            <li><b>szép</b></li>
            <li><b>család</b></li>
            <li><b>nyár</b></li>
            <li><b>hely</b></li>
            <li><b>tűz</b></li>
          </ol>
        </details>

        <ul class="tick">
          <li>проверена разница s / sz;</li>
          <li>cs, gy, ty, ny и zs прочитаны как единые звуки;</li>
          <li>j и ly произнесены одинаково, но записаны правильно;</li>
          <li>долгие гласные сохранены;</li>
          <li>ударение поставлено на первый слог.</li>
        </ul>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 6 · 3/10 · СТАНЦИЯ 2 · ФУНКЦИИ A0',
      title: 'Funkcionális A0',
      subtitle: 'Приветствие, знакомство, lenni и короткий разговор',
      type: 'info',
      note: 'На этой станции повторяются только функции урока 2: поздороваться, назвать имя, спросить имя, сообщить простой факт о себе и ответить на Hogy vagy? Новая грамматика A1 не вводится.',
      warn: 'Не добавляйте van после профессии, национальности или имени в третьем лице: Ő diák. Ő magyar. Но для местонахождения van нужно: Ő itt van.',
      task: 'Разберите формы lenni, прочитайте два коротких диалога, исправьте ошибки и составьте собственное представление из пяти реплик.',
      activities: [L6_CP_A0_FUNCTIONS],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Приветствие зависит от ситуации</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Перевод</th><th>Когда использовать</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szia!" data-speak-lang="hu-HU">Szia!</button></td>
            <td>Привет! / Пока!</td>
            <td>неофициально, с одним знакомым человеком</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Sziasztok!" data-speak-lang="hu-HU">Sziasztok!</button></td>
            <td>Привет всем! / Пока всем!</td>
            <td>неофициально, нескольким людям</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok!" data-speak-lang="hu-HU">Jó napot kívánok!</button></td>
            <td>Добрый день!</td>
            <td>вежливо и официально</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Viszlát!" data-speak-lang="hu-HU">Viszlát!</button></td>
            <td>До свидания!</td>
            <td>нейтральное прощание</td>
          </tr>
        </table>

        <div class="note">
          Краткое <span class="hu-word">Jó napot!</span> тоже употребляется.
          Полная вежливая форма —
          <span class="hu-word">Jó napot kívánok!</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Как спросить и назвать имя</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hogy hívnak?" data-speak-lang="hu-HU">Hogy hívnak?</button></td>
            <td>Как тебя зовут?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A nevem Anna." data-speak-lang="hu-HU">A nevem Anna.</button></td>
            <td>Меня зовут Анна.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna vagyok." data-speak-lang="hu-HU">Anna vagyok.</button></td>
            <td>Я Анна.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="És téged?" data-speak-lang="hu-HU">És téged?</button></td>
            <td>А тебя?</td>
          </tr>
        </table>

        <div class="warn">
          Нельзя строить форму как <s>Én Anna vagy</s> или
          <s>Anna vagyok van</s>.
          Правильно:
          <span class="hu-word">Anna vagyok</span>
          или
          <span class="hu-word">A nevem Anna</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Личные местоимения и lenni</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="vagyok" data-speak-lang="hu-HU">vagyok</button></td>
            <td><button class="speak-btn" data-speak-text="Diák vagyok." data-speak-lang="hu-HU">Diák vagyok.</button></td>
            <td>Я ученик / студент.</td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU">vagy</button></td>
            <td><button class="speak-btn" data-speak-text="Magyar vagy?" data-speak-lang="hu-HU">Magyar vagy?</button></td>
            <td>Ты венгр / венгерка?</td>
          </tr>
          <tr>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="van" data-speak-lang="hu-HU">van</button></td>
            <td><button class="speak-btn" data-speak-text="Ő itt van." data-speak-lang="hu-HU">Ő itt van.</button></td>
            <td>Он / она здесь.</td>
          </tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="vagyunk" data-speak-lang="hu-HU">vagyunk</button></td>
            <td><button class="speak-btn" data-speak-text="Diákok vagyunk." data-speak-lang="hu-HU">Diákok vagyunk.</button></td>
            <td>Мы ученики / студенты.</td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="vagytok" data-speak-lang="hu-HU">vagytok</button></td>
            <td><button class="speak-btn" data-speak-text="Jól vagytok?" data-speak-lang="hu-HU">Jól vagytok?</button></td>
            <td>Вы хорошо себя чувствуете?</td>
          </tr>
          <tr>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="vannak" data-speak-lang="hu-HU">vannak</button></td>
            <td><button class="speak-btn" data-speak-text="Ők itt vannak." data-speak-lang="hu-HU">Ők itt vannak.</button></td>
            <td>Они здесь.</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="vagyok, vagy, van, vagyunk, vagytok, vannak" data-speak-lang="hu-HU">
            vagyok · vagy · van · vagyunk · vagytok · vannak
          </button>
        </p>

        <div class="note">
          Местоимение часто можно не произносить, потому что лицо уже видно по форме:
          <span class="hu-word">Diák vagyok</span>,
          <span class="hu-word">Jól vagyunk</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Особенность третьего лица</h4>

        <table class="conj">
          <tr><th>Значение</th><th>Правильно</th><th>Неправильно</th></tr>
          <tr>
            <td>Он ученик.</td>
            <td><button class="speak-btn" data-speak-text="Ő diák." data-speak-lang="hu-HU">Ő diák.</button></td>
            <td><s>Ő diák van.</s></td>
          </tr>
          <tr>
            <td>Она венгерка.</td>
            <td><button class="speak-btn" data-speak-text="Ő magyar." data-speak-lang="hu-HU">Ő magyar.</button></td>
            <td><s>Ő magyar van.</s></td>
          </tr>
          <tr>
            <td>Он здесь.</td>
            <td><button class="speak-btn" data-speak-text="Ő itt van." data-speak-lang="hu-HU">Ő itt van.</button></td>
            <td>—</td>
          </tr>
          <tr>
            <td>Они здесь.</td>
            <td><button class="speak-btn" data-speak-text="Ők itt vannak." data-speak-lang="hu-HU">Ők itt vannak.</button></td>
            <td>—</td>
          </tr>
        </table>

        <div class="note">
          В настоящем времени при профессии, национальности или другом именном признаке
          <b>van / vannak</b> в третьем лице обычно опускаются.
          При местонахождении они нужны.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как спросить о самочувствии</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hogy vagy?" data-speak-lang="hu-HU">Hogy vagy?</button></td>
            <td>Как ты?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jól vagyok, köszönöm." data-speak-lang="hu-HU">Jól vagyok, köszönöm.</button></td>
            <td>Я хорошо, спасибо.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nagyon jól vagyok." data-speak-lang="hu-HU">Nagyon jól vagyok.</button></td>
            <td>Я очень хорошо.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nem vagyok jól." data-speak-lang="hu-HU">Nem vagyok jól.</button></td>
            <td>Я плохо себя чувствую.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="És te?" data-speak-lang="hu-HU">És te?</button></td>
            <td>А ты?</td>
          </tr>
        </table>

        <div class="warn">
          <span class="hu-word">Hogy vagy?</span> спрашивает о самочувствии.
          Это не вопрос об имени и не вопрос о месте проживания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Короткий неофициальный диалог</h4>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Szia! Hogy hívnak?" data-speak-lang="hu-HU">Szia! Hogy hívnak?</button></p>
          <p class="text-sm text-[#6f6255]">Привет! Как тебя зовут?</p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Szia! Anna vagyok. És téged?" data-speak-lang="hu-HU">Szia! Anna vagyok. És téged?</button></p>
          <p class="text-sm text-[#6f6255]">Привет! Я Анна. А тебя?</p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Péter vagyok. Hogy vagy?" data-speak-lang="hu-HU">Péter vagyok. Hogy vagy?</button></p>
          <p class="text-sm text-[#6f6255]">Я Петер. Как ты?</p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Jól vagyok, köszönöm. És te?" data-speak-lang="hu-HU">Jól vagyok, köszönöm. És te?</button></p>
          <p class="text-sm text-[#6f6255]">Хорошо, спасибо. А ты?</p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Én is jól vagyok." data-speak-lang="hu-HU">Én is jól vagyok.</button></p>
          <p class="text-sm text-[#6f6255]">Я тоже хорошо.</p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Исправьте ошибки</h4>

        <ol class="tasklist">
          <li><s>Én Anna vagy.</s> → ______________________________</li>
          <li><s>A nevem van Péter.</s> → ______________________________</li>
          <li><s>Mi diákok vagytok.</s> → ______________________________</li>
          <li><s>Ő magyar van.</s> → ______________________________</li>
          <li><s>Ők itt van.</s> → ______________________________</li>
          <li><s>Hogy vagy? — Anna vagyok.</s> → ______________________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>Anna vagyok.</b></li>
            <li><b>A nevem Péter.</b></li>
            <li><b>Mi diákok vagyunk.</b></li>
            <li><b>Ő magyar.</b></li>
            <li><b>Ők itt vannak.</b></li>
            <li><b>Hogy vagy? — Jól vagyok, köszönöm.</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Собственное представление</h4>

        <p>Напишите пять коротких реплик по модели:</p>

        <ol class="tasklist">
          <li><b>Szia! / Jó napot kívánok!</b></li>
          <li><b>A nevem ______. / ______ vagyok.</b></li>
          <li><b>______ vagyok.</b> — национальность, профессия или роль</li>
          <li><b>Jól vagyok, köszönöm.</b></li>
          <li><b>Viszlát! / Szia!</b></li>
        </ol>

        <div class="note">
          Не добавляйте в это упражнение формы
          <span class="hu-word">könyvet, szavakat, asztalnál</span>.
          Они относятся к другим грамматическим темам и не нужны для станции
          <span class="hu-word">Funkcionális A0</span>.
        </div>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 6 · 4/10 · СТАНЦИЯ 3 · МНОЖЕСТВЕННОЕ ЧИСЛО',
      title: 'Többes szám és névelők',
      subtitle: 'Артикли a / az / egy, формы множественного числа и количество',
      type: 'info',
      note: 'Сначала определите значение артикля, затем форму существительного. A / az обозначают конкретный известный предмет, egy — один или пока не определённый предмет.',
      warn: 'Множественное число нельзя образовывать механически одним голым -k. В реальных формах появляются соединительные гласные: könyvek, kertek, házak, asztalok. После числительного существительное, наоборот, остаётся в единственном числе: két könyv.',
      task: 'Выберите a / az / egy, образуйте знакомые формы множественного числа, затем преобразуйте их в сочетания с числами.',
      activities: [L6_CP_PLURAL_ARTICLES],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Определённые артикли A и AZ</h4>

        <table class="conj">
          <tr><th>Артикль</th><th>Когда используется</th><th>Примеры</th></tr>
          <tr>
            <td><b>a</b></td>
            <td>перед согласным звуком</td>
            <td>
              <button class="speak-btn" data-speak-text="a könyv, a ház, a szék" data-speak-lang="hu-HU">
                a könyv · a ház · a szék
              </button>
            </td>
          </tr>
          <tr>
            <td><b>az</b></td>
            <td>перед гласным звуком</td>
            <td>
              <button class="speak-btn" data-speak-text="az ablak, az asztal, az óra" data-speak-lang="hu-HU">
                az ablak · az asztal · az óra
              </button>
            </td>
          </tr>
        </table>

        <div class="note">
          Выбор зависит от первого <b>звука следующего слова</b>.
          Поэтому:
          <span class="hu-word">a szék</span>, потому что sz обозначает согласный /s/;
          <span class="hu-word">az óra</span>, потому что ó — гласный.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Артикль EGY</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Значение</th><th>Примерный перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a könyv" data-speak-lang="hu-HU">a könyv</button></td>
            <td>конкретная известная книга</td>
            <td>эта / известная книга</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy könyv" data-speak-lang="hu-HU">egy könyv</button></td>
            <td>одна или какая-то книга</td>
            <td>одна книга / какая-то книга</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az asztal" data-speak-lang="hu-HU">az asztal</button></td>
            <td>конкретный известный стол</td>
            <td>этот / известный стол</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy asztal" data-speak-lang="hu-HU">egy asztal</button></td>
            <td>один или какой-то стол</td>
            <td>один стол / какой-то стол</td>
          </tr>
        </table>

        <div class="warn">
          <span class="hu-word">egy</span> не выбирается по первой букве существительного.
          Оно одинаково перед согласным и гласным:
          <span class="hu-word">egy könyv, egy asztal, egy óra</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Множественное число: не только -k</h4>

        <p>Показатель множественного числа содержит <b>-k</b>, но перед ним часто появляется соединительная гласная:</p>

        <table class="conj">
          <tr><th>Единственное число</th><th>Множественное число</th><th>Что изменилось</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button></td>
            <td><button class="speak-btn" data-speak-text="könyvek" data-speak-lang="hu-HU">könyvek</button></td>
            <td>-ek</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU">kert</button></td>
            <td><button class="speak-btn" data-speak-text="kertek" data-speak-lang="hu-HU">kertek</button></td>
            <td>-ek</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">ház</button></td>
            <td><button class="speak-btn" data-speak-text="házak" data-speak-lang="hu-HU">házak</button></td>
            <td>-ak</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU">asztal</button></td>
            <td><button class="speak-btn" data-speak-text="asztalok" data-speak-lang="hu-HU">asztalok</button></td>
            <td>-ok</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szék" data-speak-lang="hu-HU">szék</button></td>
            <td><button class="speak-btn" data-speak-text="székek" data-speak-lang="hu-HU">székek</button></td>
            <td>-ek</td>
          </tr>
        </table>

        <div class="note">
          На уровне A0 не нужно угадывать каждую форму только по формуле.
          Учите знакомые существительные парами:
          <span class="hu-word">könyv — könyvek, ház — házak, asztal — asztalok</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Слова на -a: a часто становится á</h4>

        <table class="conj">
          <tr><th>Единственное число</th><th>Множественное число</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU">alma</button></td>
            <td><button class="speak-btn" data-speak-text="almák" data-speak-lang="hu-HU">almák</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU">kutya</button></td>
            <td><button class="speak-btn" data-speak-text="kutyák" data-speak-lang="hu-HU">kutyák</button></td>
          </tr>
        </table>

        <div class="warn">
          Не пишите <s>almak</s> или <s>kutyak</s>.
          В этих формах сохраняется долгая
          <span class="hu-word">á</span>:
          <span class="hu-word">almák, kutyák</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Артикль перед множественным числом</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Почему</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a könyvek" data-speak-lang="hu-HU">a könyvek</button></td>
            <td>könyvek начинается с согласного</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a házak" data-speak-lang="hu-HU">a házak</button></td>
            <td>házak начинается с согласного</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az almák" data-speak-lang="hu-HU">az almák</button></td>
            <td>almák начинается с гласного</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az asztalok" data-speak-lang="hu-HU">az asztalok</button></td>
            <td>asztalok начинается с гласного</td>
          </tr>
        </table>

        <div class="note">
          Число предметов не влияет на выбор a / az.
          Важен только первый звук следующего слова:
          <span class="hu-word">az alma</span> и
          <span class="hu-word">az almák</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. После числительного — единственное число</h4>

        <table class="conj">
          <tr><th>Значение</th><th>Правильно</th><th>Неправильно</th></tr>
          <tr>
            <td>две книги</td>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
            <td><s>két könyvek</s></td>
          </tr>
          <tr>
            <td>три стула</td>
            <td><button class="speak-btn" data-speak-text="három szék" data-speak-lang="hu-HU">három szék</button></td>
            <td><s>három székek</s></td>
          </tr>
          <tr>
            <td>пять яблок</td>
            <td><button class="speak-btn" data-speak-text="öt alma" data-speak-lang="hu-HU">öt alma</button></td>
            <td><s>öt almák</s></td>
          </tr>
          <tr>
            <td>десять домов</td>
            <td><button class="speak-btn" data-speak-text="tíz ház" data-speak-lang="hu-HU">tíz ház</button></td>
            <td><s>tíz házak</s></td>
          </tr>
        </table>

        <div class="warn">
          Сравните две разные структуры:
          <span class="hu-word">könyvek</span> — книги, количество не названо;
          <span class="hu-word">két könyv</span> — две книги, количество уже выражено числом.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Преобразуйте формы</h4>

        <ol class="tasklist">
          <li>alma → множественное число: __________________</li>
          <li>kert → множественное число: __________________</li>
          <li>ház → множественное число: __________________</li>
          <li>asztal → множественное число: __________________</li>
          <li>kutya → множественное число: __________________</li>
          <li>две книги → __________________</li>
          <li>три стула → __________________</li>
          <li>пять яблок → __________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>almák</b></li>
            <li><b>kertek</b></li>
            <li><b>házak</b></li>
            <li><b>asztalok</b></li>
            <li><b>kutyák</b></li>
            <li><b>két könyv</b></li>
            <li><b>három szék</b></li>
            <li><b>öt alma</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Итоговая проверка</h4>

        <ol class="tasklist">
          <li>___ ablak — a или az?</li>
          <li>конкретная книга — a könyv или egy könyv?</li>
          <li>один / какой-то стол — az asztal или egy asztal?</li>
          <li>___ óra — a или az?</li>
          <li>книги без указанного количества — könyvek или könyv?</li>
          <li>две книги — két könyv или két könyvek?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ключ</summary>
          <ol class="tasklist mt-3">
            <li><b>az ablak</b></li>
            <li><b>a könyv</b></li>
            <li><b>egy asztal</b></li>
            <li><b>az óra</b></li>
            <li><b>könyvek</b></li>
            <li><b>két könyv</b></li>
          </ol>
        </details>

        <div class="note">
          Загруженные предложения о четверге, завтраке и разговоре с друзьями относятся к теме расписания.
          Они не заменяют станцию
          <span class="hu-word">Többes szám és névelők</span>.
        </div>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 6 · 5/10 · СТАНЦИЯ 4 · ГЛАГОЛЫ',
      title: 'Jelen idő',
      subtitle: 'Неопределённое спряжение настоящего времени',
      type: 'info',
      note: 'Станция повторяет только уже изученные формы настоящего времени: личные окончания, особую форму te после s / sz / z / dz, частотные -ik-глаголы, отрицание nem и простые вопросы.',
      warn: 'Не используйте здесь новые формы könyvet, szavakat и szeretem. Винительный падеж -t и системное определённое спряжение начинаются позже; сейчас предложения строятся только из знакомых структур A0.',
      task: 'Повторите парадигму tanul, распознайте окончания, исправьте формы, затем составьте короткий диалог без новой грамматики.',
      activities: [L6_CP_PRESENT_VERBS],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что выражает настоящее время</h4>

        <p>Настоящее время используется для действия сейчас, регулярного действия и общего факта:</p>

        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>действие сейчас</td>
            <td><button class="speak-btn" data-speak-text="Most olvasok." data-speak-lang="hu-HU">Most olvasok.</button></td>
            <td>Сейчас я читаю.</td>
          </tr>
          <tr>
            <td>регулярное действие</td>
            <td><button class="speak-btn" data-speak-text="Minden este tanulok." data-speak-lang="hu-HU">Minden este tanulok.</button></td>
            <td>Каждый вечер я занимаюсь.</td>
          </tr>
          <tr>
            <td>общий факт</td>
            <td><button class="speak-btn" data-speak-text="Budapesten dolgozom." data-speak-lang="hu-HU">Budapesten dolgozom.</button></td>
            <td>Я работаю в Будапеште.</td>
          </tr>
        </table>

        <div class="note">
          Отдельной формы «настоящего длительного времени» в этой теме нет:
          <span class="hu-word">olvasok</span> может означать «читаю сейчас» или «обычно читаю».
          Значение уточняют слова
          <span class="hu-word">most, minden nap, általában</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Полная парадигма TANUL</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Окончание</th><th>Перевод</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="tanulok" data-speak-lang="hu-HU">tanulok</button></td>
            <td>-ok</td>
            <td>я учусь</td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="tanulsz" data-speak-lang="hu-HU">tanulsz</button></td>
            <td>-sz</td>
            <td>ты учишься</td>
          </tr>
          <tr>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td>нулевое</td>
            <td>он / она учится</td>
          </tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="tanulunk" data-speak-lang="hu-HU">tanulunk</button></td>
            <td>-unk</td>
            <td>мы учимся</td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="tanultok" data-speak-lang="hu-HU">tanultok</button></td>
            <td>-tok</td>
            <td>вы учитесь</td>
          </tr>
          <tr>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="tanulnak" data-speak-lang="hu-HU">tanulnak</button></td>
            <td>-nak</td>
            <td>они учатся</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="tanulok, tanulsz, tanul, tanulunk, tanultok, tanulnak" data-speak-lang="hu-HU">
            tanulok · tanulsz · tanul · tanulunk · tanultok · tanulnak
          </button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Основные окончания</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>Основные варианты</th><th>Примеры</th></tr>
          <tr>
            <td>én</td>
            <td>-ok / -ek / -ök</td>
            <td><button class="speak-btn" data-speak-text="tanulok, beszélek, főzök" data-speak-lang="hu-HU">tanulok · beszélek · főzök</button></td>
          </tr>
          <tr>
            <td>te</td>
            <td>-sz или -ol / -el / -öl</td>
            <td><button class="speak-btn" data-speak-text="tanulsz, beszélsz, olvasol, főzöl" data-speak-lang="hu-HU">tanulsz · beszélsz · olvasol · főzöl</button></td>
          </tr>
          <tr>
            <td>ő</td>
            <td>обычно без окончания; у -ik-глаголов -ik</td>
            <td><button class="speak-btn" data-speak-text="tanul, ír, dolgozik, lakik" data-speak-lang="hu-HU">tanul · ír · dolgozik · lakik</button></td>
          </tr>
          <tr>
            <td>mi</td>
            <td>-unk / -ünk</td>
            <td><button class="speak-btn" data-speak-text="tanulunk, beszélünk, főzünk" data-speak-lang="hu-HU">tanulunk · beszélünk · főzünk</button></td>
          </tr>
          <tr>
            <td>ti</td>
            <td>-tok / -tek / -tök</td>
            <td><button class="speak-btn" data-speak-text="tanultok, beszéltek, főztök" data-speak-lang="hu-HU">tanultok · beszéltek · főztök</button></td>
          </tr>
          <tr>
            <td>ők</td>
            <td>-nak / -nek</td>
            <td><button class="speak-btn" data-speak-text="tanulnak, beszélnek, főznek" data-speak-lang="hu-HU">tanulnak · beszélnek · főznek</button></td>
          </tr>
        </table>

        <div class="note">
          Выбор гласной зависит от гармонии гласных:
          <span class="hu-word">tanulok</span>,
          <span class="hu-word">beszélek</span>,
          <span class="hu-word">főzök</span>.
          На этой станции достаточно уверенно использовать изученные готовые модели.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Особая форма TE после s, sz, z, dz</h4>

        <p>После этих конечных согласных часто используется <b>-ol / -el / -öl</b>, а не обычное -sz:</p>

        <table class="conj">
          <tr><th>Основа</th><th>Форма te</th><th>Неправильно</th></tr>
          <tr>
            <td>olvas</td>
            <td><button class="speak-btn" data-speak-text="olvasol" data-speak-lang="hu-HU">olvasol</button></td>
            <td><s>olvassz</s></td>
          </tr>
          <tr>
            <td>főz</td>
            <td><button class="speak-btn" data-speak-text="főzöl" data-speak-lang="hu-HU">főzöl</button></td>
            <td><s>főzsz</s></td>
          </tr>
          <tr>
            <td>edz</td>
            <td><button class="speak-btn" data-speak-text="edzel" data-speak-lang="hu-HU">edzel</button></td>
            <td><s>edzsz</s></td>
          </tr>
        </table>

        <div class="warn">
          Но <span class="hu-word">beszélsz</span> остаётся с -sz,
          потому что основа <span class="hu-word">beszél</span> заканчивается на l:
          <span class="hu-word">beszélek — beszélsz — beszél</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Частотные -IK-глаголы</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>DOLGOZIK</th><th>LAKIK</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="dolgozom" data-speak-lang="hu-HU">dolgozom</button></td>
            <td><button class="speak-btn" data-speak-text="lakom" data-speak-lang="hu-HU">lakom</button></td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="dolgozol" data-speak-lang="hu-HU">dolgozol</button></td>
            <td><button class="speak-btn" data-speak-text="laksz" data-speak-lang="hu-HU">laksz</button></td>
          </tr>
          <tr>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td>
            <td><button class="speak-btn" data-speak-text="lakik" data-speak-lang="hu-HU">lakik</button></td>
          </tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="dolgozunk" data-speak-lang="hu-HU">dolgozunk</button></td>
            <td><button class="speak-btn" data-speak-text="lakunk" data-speak-lang="hu-HU">lakunk</button></td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="dolgoztok" data-speak-lang="hu-HU">dolgoztok</button></td>
            <td><button class="speak-btn" data-speak-text="laktok" data-speak-lang="hu-HU">laktok</button></td>
          </tr>
          <tr>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="dolgoznak" data-speak-lang="hu-HU">dolgoznak</button></td>
            <td><button class="speak-btn" data-speak-text="laknak" data-speak-lang="hu-HU">laknak</button></td>
          </tr>
        </table>

        <div class="note">
          Для этих частотных глаголов используйте изученные формы
          <span class="hu-word">dolgozom</span> и
          <span class="hu-word">lakom</span>
          как нормативные модели первого лица.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Отрицание и вопросы</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>утверждение</td>
            <td><button class="speak-btn" data-speak-text="Tanulok." data-speak-lang="hu-HU">Tanulok.</button></td>
            <td>Я учусь.</td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Nem tanulok." data-speak-lang="hu-HU">Nem tanulok.</button></td>
            <td>Я не учусь.</td>
          </tr>
          <tr>
            <td>общий вопрос</td>
            <td><button class="speak-btn" data-speak-text="Tanulsz magyarul?" data-speak-lang="hu-HU">Tanulsz magyarul?</button></td>
            <td>Ты учишь венгерский?</td>
          </tr>
          <tr>
            <td>что делаешь?</td>
            <td><button class="speak-btn" data-speak-text="Mit csinálsz most?" data-speak-lang="hu-HU">Mit csinálsz most?</button></td>
            <td>Что ты сейчас делаешь?</td>
          </tr>
          <tr>
            <td>когда?</td>
            <td><button class="speak-btn" data-speak-text="Mikor tanulsz?" data-speak-lang="hu-HU">Mikor tanulsz?</button></td>
            <td>Когда ты занимаешься?</td>
          </tr>
        </table>

        <div class="warn">
          <span class="hu-word">nem</span> ставится перед отрицаемым глаголом:
          <span class="hu-word">Nem dolgozom</span>,
          а не <s>Dolgozom nem</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Контролируемый диалог без новой грамматики</h4>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Mit csinálsz most?" data-speak-lang="hu-HU">Mit csinálsz most?</button></p>
          <p class="text-sm text-[#6f6255]">Что ты сейчас делаешь?</p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Magyarul tanulok. Most olvasok." data-speak-lang="hu-HU">Magyarul tanulok. Most olvasok.</button></p>
          <p class="text-sm text-[#6f6255]">Я учу венгерский. Сейчас читаю.</p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Mikor tanulsz általában?" data-speak-lang="hu-HU">Mikor tanulsz általában?</button></p>
          <p class="text-sm text-[#6f6255]">Когда ты обычно занимаешься?</p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Minden este hét órakor tanulok." data-speak-lang="hu-HU">Minden este hét órakor tanulok.</button></p>
          <p class="text-sm text-[#6f6255]">Я занимаюсь каждый вечер в семь часов.</p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Dolgozol is?" data-speak-lang="hu-HU">Dolgozol is?</button></p>
          <p class="text-sm text-[#6f6255]">Ты также работаешь?</p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen. Hétfőn dolgozom, de vasárnap nem dolgozom." data-speak-lang="hu-HU">Igen. Hétfőn dolgozom, de vasárnap nem dolgozom.</button></p>
          <p class="text-sm text-[#6f6255]">Да. В понедельник я работаю, но в воскресенье не работаю.</p>
        </div>

        <div class="note">
          Из исходного диалога убраны:
          <span class="hu-word">egy könyvet olvasok</span> —
          из-за ещё не изученного винительного -t;
          <span class="hu-word">nagyon szeretem</span> —
          из-за ещё не систематизированного определённого спряжения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Итоговая практика</h4>

        <ol class="tasklist">
          <li>én + tanul → __________________</li>
          <li>mi + beszél → __________________</li>
          <li>ők + olvas → __________________</li>
          <li>Tanulok. → отрицание: __________________</li>
          <li>ők + dolgozik → __________________</li>
          <li>«Они пишут» → __________________</li>
          <li>Mi diákok ______. (lenni)</li>
          <li>ti + tanul → __________________</li>
          <li>te + olvas → __________________</li>
          <li>Ő minden nap ______. (dolgozik)</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>tanulok</b></li>
            <li><b>beszélünk</b></li>
            <li><b>olvasnak</b></li>
            <li><b>Nem tanulok.</b></li>
            <li><b>dolgoznak</b></li>
            <li><b>Ők írnak.</b></li>
            <li><b>vagyunk</b></li>
            <li><b>tanultok</b></li>
            <li><b>olvasol</b></li>
            <li><b>dolgozik</b></li>
          </ol>
        </details>

        <div class="note">
          Станция пройдена, если вы уверенно различаете лицо глагола,
          используете <span class="hu-word">olvasol</span>,
          формы <span class="hu-word">dolgozom / dolgozik / dolgoznak</span>
          и ставите <span class="hu-word">nem</span> перед глаголом.
        </div>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 6 · 6/10 · МИНИ-АУДИРОВАНИЕ',
      title: 'Hallás utáni ismétlés',
      subtitle: 'Знакомство и недельное расписание',
      type: 'info',
      note: 'Сначала слушайте без текста. Первое прослушивание предназначено для общего смысла, второе — для имени, дня, времени и действия. Расшифровка находится в скрытом блоке.',
      warn: 'Не пытайтесь переводить каждое слово во время первого прослушивания. Сначала определите тему разговора, затем извлекайте конкретные детали.',
      task: 'Прослушайте диалог два раза, ответьте на пять вопросов и только затем откройте расшифровку. После проверки составьте собственный короткий диалог о расписании.',
      activities: [L6_LISTENING_A0_REVIEW, P1_L6_ROLEPLAY, L6_ROLEPLAY_SCHEDULE],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Перед прослушиванием</h4>

        <p>В диалоге встретятся уже изученные функции:</p>

        <table class="conj">
          <tr><th>Функция</th><th>Венгерская модель</th></tr>
          <tr>
            <td>назвать имя</td>
            <td><button class="speak-btn" data-speak-text="Péter vagyok." data-speak-lang="hu-HU">Péter vagyok.</button></td>
          </tr>
          <tr>
            <td>спросить о самочувствии</td>
            <td><button class="speak-btn" data-speak-text="Hogy vagy?" data-speak-lang="hu-HU">Hogy vagy?</button></td>
          </tr>
          <tr>
            <td>спросить о расписании</td>
            <td><button class="speak-btn" data-speak-text="Mikor tanulsz magyarul?" data-speak-lang="hu-HU">Mikor tanulsz magyarul?</button></td>
          </tr>
          <tr>
            <td>назвать день и время</td>
            <td><button class="speak-btn" data-speak-text="Kedden öt órakor." data-speak-lang="hu-HU">Kedden öt órakor.</button></td>
          </tr>
        </table>

        <div class="note">
          Перед первым прослушиванием не открывайте расшифровку и не пытайтесь заранее восстановить всё расписание.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Первое прослушивание — общий смысл</h4>

        <p>Ответьте только на один вопрос:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <b>О чём этот разговор?</b>
          <ol class="tasklist mt-2">
            <li>о покупках в магазине;</li>
            <li>о знакомстве и расписании;</li>
            <li>о погоде.</li>
          </ol>
        </div>

        <div class="warn">
          После первого прослушивания не исправляйте детали по догадке. Зафиксируйте только общий смысл.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Второе прослушивание — пять деталей</h4>

        <ol class="tasklist">
          <li>О чём этот короткий разговор?</li>
          <li>Как зовут второго собеседника?</li>
          <li>В какой день он занимается венгерским?</li>
          <li>Во сколько он занимается венгерским?</li>
          <li>Что он делает в субботу?</li>
        </ol>

        <table class="conj">
          <tr><th>№</th><th>Ответ после первого раза</th><th>Ответ после второго раза</th></tr>
          <tr><td>1</td><td>________________</td><td>________________</td></tr>
          <tr><td>2</td><td>________________</td><td>________________</td></tr>
          <tr><td>3</td><td>________________</td><td>________________</td></tr>
          <tr><td>4</td><td>________________</td><td>________________</td></tr>
          <tr><td>5</td><td>________________</td><td>________________</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Полезные слуховые ориентиры</h4>

        <table class="conj">
          <tr><th>Что услышать</th><th>Форма</th><th>Значение</th></tr>
          <tr>
            <td>имя</td>
            <td><button class="speak-btn" data-speak-text="Péter vagyok." data-speak-lang="hu-HU">Péter vagyok.</button></td>
            <td>Я Петер.</td>
          </tr>
          <tr>
            <td>вторник</td>
            <td><button class="speak-btn" data-speak-text="kedden" data-speak-lang="hu-HU">kedden</button></td>
            <td>во вторник</td>
          </tr>
          <tr>
            <td>пять часов</td>
            <td><button class="speak-btn" data-speak-text="öt órakor" data-speak-lang="hu-HU">öt órakor</button></td>
            <td>в пять часов</td>
          </tr>
          <tr>
            <td>суббота</td>
            <td><button class="speak-btn" data-speak-text="szombaton" data-speak-lang="hu-HU">szombaton</button></td>
            <td>в субботу</td>
          </tr>
          <tr>
            <td>читать</td>
            <td><button class="speak-btn" data-speak-text="olvasok" data-speak-lang="hu-HU">olvasok</button></td>
            <td>я читаю</td>
          </tr>
        </table>

        <div class="note">
          Эти ориентиры нужно использовать после первого прослушивания. Они помогают распознать уже услышанное, но не заменяют сам диалог.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Ответы</h4>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Открыть после двух прослушиваний</summary>

          <ol class="tasklist mt-3">
            <li><b>Знакомство и расписание.</b></li>
            <li><b>Péter.</b></li>
            <li><b>Kedden.</b> — Во вторник.</li>
            <li><b>Öt órakor.</b> — В пять часов.</li>
            <li><b>Olvas.</b> — Читает.</li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Расшифровка диалога</h4>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Открыть после отправки ответов</summary>

          <div class="mt-3">
            <p><b>A:</b> Szia! A nevem Anna. Hogy hívnak?</p>
            <p><b>B:</b> Szia! Péter vagyok.</p>
            <p><b>A:</b> Hogy vagy?</p>
            <p><b>B:</b> Jól vagyok, köszönöm.</p>
            <p><b>A:</b> Mikor tanulsz magyarul?</p>
            <p><b>B:</b> Kedden öt órakor tanulok. Csütörtökön nyolckor dolgozom. Szombaton háromkor olvasok.</p>
            <p><b>A:</b> Köszönöm. Szia!</p>
            <p><b>B:</b> Szia!</p>
          </div>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Разбор расписания</h4>

        <table class="conj">
          <tr><th>День</th><th>Время</th><th>Действие</th><th>Полное предложение</th></tr>
          <tr>
            <td>kedden</td>
            <td>öt órakor</td>
            <td>tanul</td>
            <td><button class="speak-btn" data-speak-text="Kedden öt órakor tanulok." data-speak-lang="hu-HU">Kedden öt órakor tanulok.</button></td>
          </tr>
          <tr>
            <td>csütörtökön</td>
            <td>nyolckor</td>
            <td>dolgozik</td>
            <td><button class="speak-btn" data-speak-text="Csütörtökön nyolckor dolgozom." data-speak-lang="hu-HU">Csütörtökön nyolckor dolgozom.</button></td>
          </tr>
          <tr>
            <td>szombaton</td>
            <td>háromkor</td>
            <td>olvas</td>
            <td><button class="speak-btn" data-speak-text="Szombaton háromkor olvasok." data-speak-lang="hu-HU">Szombaton háromkor olvasok.</button></td>
          </tr>
        </table>

        <div class="warn">
          Не смешивайте:
          <span class="hu-word">öt óra van</span> — сейчас пять часов;
          <span class="hu-word">öt órakor tanulok</span> — я занимаюсь в пять часов.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Ролевой диалог о собственном расписании</h4>

        <p>Заполните модели своими данными:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p><b>A:</b> Mikor tanulsz magyarul?</p>
          <p><b>B:</b> __________ __________ tanulok.</p>
          <p><b>A:</b> Mikor dolgozol?</p>
          <p><b>B:</b> __________ __________ dolgozom.</p>
          <p><b>A:</b> Mikor olvasol?</p>
          <p><b>B:</b> __________ __________ olvasok.</p>
        </div>

        <p>Один возможный вариант:</p>

        <p>
          <button class="speak-btn" data-speak-text="Hétfőn hatkor magyarul tanulok. Szerdán nyolckor dolgozom. Szombaton háromkor olvasok." data-speak-lang="hu-HU">
            Hétfőn hatkor magyarul tanulok. Szerdán nyolckor dolgozom. Szombaton háromkor olvasok.
          </button>
        </p>

        <ul class="tick">
          <li>название дня поставлено в форму расписания;</li>
          <li>время заканчивается на <b>-kor</b>;</li>
          <li>глагол стоит в форме <b>én</b>;</li>
          <li>ответ представляет собой полное предложение.</li>
        </ul>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 6 · 7/10 · ЛИЧНЫЙ ПРОФИЛЬ',
      title: 'Az én profilom',
      subtitle: 'Короткий письменный и устный рассказ о себе',
      type: 'info',
      note: 'Профиль должен состоять из 4–6 коротких предложений. Обязательные элементы: имя, национальность или происхождение, одно действие в настоящем времени, а также один день и время.',
      warn: 'Не усложняйте текст незнакомыми падежами и длинными предложениями. Не указывайте точный адрес, номер телефона, документы или другие чувствительные данные.',
      task: 'Сначала заполните письменный шаблон и проверьте его по рубрике. Затем без микрофона произнесите тот же профиль, не читая каждое слово с экрана.',
      activities: [P1_L6_WRITING, L6_WRITING_PROFILE],
      optionalSpeaking: P1_L6_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что обязательно включить</h4>

        <table class="conj">
          <tr><th>Факт</th><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>имя</td>
            <td><b>A nevem ...</b> или <b>... vagyok.</b></td>
            <td><button class="speak-btn" data-speak-text="A nevem Anna." data-speak-lang="hu-HU">A nevem Anna.</button></td>
          </tr>
          <tr>
            <td>национальность</td>
            <td><b>... vagyok.</b></td>
            <td><button class="speak-btn" data-speak-text="Örmény vagyok." data-speak-lang="hu-HU">Örmény vagyok.</button></td>
          </tr>
          <tr>
            <td>место проживания — по желанию</td>
            <td><b>... élek.</b></td>
            <td><button class="speak-btn" data-speak-text="Budapesten élek." data-speak-lang="hu-HU">Budapesten élek.</button></td>
          </tr>
          <tr>
            <td>текущее или регулярное действие</td>
            <td><b>... tanulok / dolgozom / olvasok.</b></td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU">Magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>день и время</td>
            <td><b>день + время + действие</b></td>
            <td><button class="speak-btn" data-speak-text="Hétfőn nyolckor dolgozom." data-speak-lang="hu-HU">Hétfőn nyolckor dolgozom.</button></td>
          </tr>
        </table>

        <div class="note">
          Для имени выберите одну основную модель:
          <span class="hu-word">A nevem Anna</span>
          или
          <span class="hu-word">Anna vagyok</span>.
          Использовать обе подряд можно, но это не добавляет нового факта.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Безопасная структура из шести строк</h4>

        <ol class="tasklist">
          <li><b>A nevem ______.</b> — Меня зовут ______.</li>
          <li><b>______ vagyok.</b> — Я ______ по национальности.</li>
          <li><b>______ élek.</b> — Я живу в ______. Необязательно.</li>
          <li><b>Magyarul tanulok. / ______ dolgozom.</b></li>
          <li><b>______ ______ tanulok / dolgozom / olvasok.</b></li>
          <li><b>______ ______ nem dolgozom.</b> — Дополнительная отрицательная строка.</li>
        </ol>

        <div class="warn">
          В строке расписания нужны две разные формы:
          <span class="hu-word">hétfőn</span> — в понедельник;
          <span class="hu-word">nyolckor</span> или
          <span class="hu-word">nyolc órakor</span> — в восемь часов.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Полный образец профиля</h4>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p><button class="speak-btn" data-speak-text="A nevem Anna." data-speak-lang="hu-HU">A nevem Anna.</button></p>
          <p><button class="speak-btn" data-speak-text="Örmény vagyok." data-speak-lang="hu-HU">Örmény vagyok.</button></p>
          <p><button class="speak-btn" data-speak-text="Budapesten élek." data-speak-lang="hu-HU">Budapesten élek.</button></p>
          <p><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU">Magyarul tanulok.</button></p>
          <p><button class="speak-btn" data-speak-text="Hétfőn nyolckor dolgozom." data-speak-lang="hu-HU">Hétfőn nyolckor dolgozom.</button></p>
          <p><button class="speak-btn" data-speak-text="Szerdán háromkor olvasok." data-speak-lang="hu-HU">Szerdán háromkor olvasok.</button></p>
        </div>

        <p>Перевод:</p>

        <ol class="tasklist">
          <li>Меня зовут Анна.</li>
          <li>Я армянка.</li>
          <li>Я живу в Будапеште.</li>
          <li>Я учу венгерский.</li>
          <li>В понедельник в восемь я работаю.</li>
          <li>В среду в три я читаю.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Какие формы уже разрешены</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Разрешённые модели уроков 1–5</th></tr>
          <tr>
            <td>представление</td>
            <td>A nevem Anna. / Anna vagyok.</td>
          </tr>
          <tr>
            <td>национальность</td>
            <td>Magyar vagyok. / Örmény vagyok.</td>
          </tr>
          <tr>
            <td>жить</td>
            <td>Budapesten élek.</td>
          </tr>
          <tr>
            <td>учиться</td>
            <td>Magyarul tanulok.</td>
          </tr>
          <tr>
            <td>работать</td>
            <td>Dolgozom. / Hétfőn dolgozom.</td>
          </tr>
          <tr>
            <td>читать и писать</td>
            <td>Olvasok. / Írok.</td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td>Vasárnap nem dolgozom.</td>
          </tr>
        </table>

        <div class="note">
          Названия стран и готовые формы происхождения можно использовать только в уже проверенном виде.
          Не пытайтесь самостоятельно строить незнакомые падежные формы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Исправьте ошибки</h4>

        <ol class="tasklist">
          <li><s>A nevem vagyok Anna.</s> → ______________________________</li>
          <li><s>Örmény van.</s> → ______________________________</li>
          <li><s>Én Budapesten élsz.</s> → ______________________________</li>
          <li><s>Hétfő nyolc óra van dolgozom.</s> → ______________________________</li>
          <li><s>Szerdán háromkor olvasol.</s> — если речь о себе → ______________________________</li>
          <li><s>Vasárnap dolgozom nem.</s> → ______________________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>A nevem Anna.</b> или <b>Anna vagyok.</b></li>
            <li><b>Örmény vagyok.</b></li>
            <li><b>Budapesten élek.</b></li>
            <li><b>Hétfőn nyolckor dolgozom.</b></li>
            <li><b>Szerdán háromkor olvasok.</b></li>
            <li><b>Vasárnap nem dolgozom.</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Напишите свой профиль</h4>

        <p>Заполните 4–6 строк. Используйте только те строки, которые соответствуют вашим данным:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p>1. A nevem __________________.</p>
          <p>2. __________________ vagyok.</p>
          <p>3. __________________ élek.</p>
          <p>4. __________________ tanulok / dolgozom / olvasok.</p>
          <p>5. __________________ __________________ __________________.</p>
          <p>6. __________________ __________________ nem __________________.</p>
        </div>

        <div class="warn">
          Не добавляйте предложение только ради количества.
          Четыре правильные короткие строки лучше шести длинных строк с новой и непроверенной грамматикой.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Проверка письменного профиля</h4>

        <ul class="tick">
          <li>указано имя: <b>A nevem...</b> или <b>... vagyok</b>;</li>
          <li>указана национальность или происхождение;</li>
          <li>есть одно действие в настоящем времени;</li>
          <li>есть хотя бы один день и точное время;</li>
          <li>форма дня соответствует расписанию: <b>hétfőn, kedden...</b>;</li>
          <li>время действия оформлено через <b>-kor / órakor</b>;</li>
          <li>глагол о себе стоит в форме <b>én</b>: tanulok, dolgozom, olvasok;</li>
          <li>каждое предложение начинается с прописной буквы и заканчивается точкой;</li>
          <li>в тексте нет точного адреса, телефона и документов.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Устная версия без микрофона</h4>

        <ol class="tasklist">
          <li>Прочитайте готовый профиль вслух один раз.</li>
          <li>Закройте текст и произнесите только четыре обязательных факта.</li>
          <li>Откройте текст и проверьте формы дня, времени и глагола.</li>
          <li>Повторите весь профиль в спокойном темпе без записи.</li>
        </ol>

        <div class="note">
          Устная часть добровольная, не записывается и не оценивается.
          Её цель — перенести уже проверенный письменный текст в речь, а не создавать новый рассказ на ходу.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 6 · 8/10 · РЕЗУЛЬТАТ И ПОВТОРЕНИЕ',
      title: 'Mit mutat az eredmény?',
      subtitle: 'Что уже получается и какой раздел повторить',
      type: 'info',
      note: 'Результат показывает выполнение конкретных заданий этого урока. Он помогает выбрать материал для повторения, но не является сертификатом уровня и не доказывает свободное владение языком.',
      warn: 'Не ориентируйтесь только на общий процент. Два ученика с одинаковым результатом могут ошибаться в разных областях: чтении, lenni, артиклях, глаголах, числах или расписании.',
      task: 'Пройдите итоговую проверку, распределите ошибки по шести областям и выберите одно конкретное действие для повторения.',
      activities: [P1_L6_CHECKPOINT],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что результат действительно показывает</h4>

        <table class="conj">
          <tr><th>Можно определить</th><th>Нельзя утверждать только по результату</th></tr>
          <tr>
            <td>правильно ли выбран ответ в конкретном задании</td>
            <td>что весь уровень A0 полностью освоен</td>
          </tr>
          <tr>
            <td>какие формы сейчас узнаются уверенно</td>
            <td>что произношение всегда правильное</td>
          </tr>
          <tr>
            <td>в какой группе заданий повторяются ошибки</td>
            <td>что ученик свободно говорит в новой ситуации</td>
          </tr>
          <tr>
            <td>какой слайд нужно повторить следующим</td>
            <td>что письменный профиль не содержит ошибок вне рубрики</td>
          </tr>
        </table>

        <div class="note">
          Результат — это снимок текущей попытки.
          Он полезен только тогда, когда после него выполняется конкретное повторение.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Как устроена итоговая проверка</h4>

        <p>В итоговой активности 18 заданий. Проходной ориентир — 15 правильных ответов, но важнее распределение ошибок.</p>

        <table class="conj">
          <tr><th>Задания</th><th>Область</th><th>Что проверяется</th></tr>
          <tr>
            <td>1–2</td>
            <td>чтение</td>
            <td>sz = /s/ и долгая á</td>
          </tr>
          <tr>
            <td>3–5</td>
            <td>знакомство и lenni</td>
            <td>приветствие, vagyok, отрицание</td>
          </tr>
          <tr>
            <td>6–9</td>
            <td>артикли и существительные</td>
            <td>az, egy, könyvek, несколько предметов</td>
          </tr>
          <tr>
            <td>10–12</td>
            <td>настоящее время</td>
            <td>tanulok, форма ő, nem перед глаголом</td>
          </tr>
          <tr>
            <td>13–14</td>
            <td>числа и расписание</td>
            <td>tizenöt, hétfőn nyolckor</td>
          </tr>
          <tr>
            <td>15–18</td>
            <td>общение</td>
            <td>отказ, новое время, имя и последовательность диалога</td>
          </tr>
        </table>

        <div class="warn">
          Проходной результат <b>15 из 18</b> — внутренний критерий этой активности.
          Он не равен официальному подтверждению уровня A0.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Как интерпретировать общий результат</h4>

        <table class="conj">
          <tr><th>Результат</th><th>Действие</th></tr>
          <tr>
            <td><b>15–18</b></td>
            <td>переходите дальше, но повторите каждую область, где была ошибка</td>
          </tr>
          <tr>
            <td><b>11–14</b></td>
            <td>повторите две самые слабые области и снова выполните проверку</td>
          </tr>
          <tr>
            <td><b>0–10</b></td>
            <td>вернитесь к станциям 6.2–6.6 по порядку, затем повторите проверку</td>
          </tr>
        </table>

        <div class="note">
          Даже при результате 18 из 18 полезно отдельно проверить письмо и устную практику:
          задания с выбором ответа не заменяют самостоятельное производство речи.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Карта ошибок и повторения</h4>

        <table class="conj">
          <tr><th>Если ошибка связана с...</th><th>Повторить</th><th>Контрольный пример</th></tr>
          <tr>
            <td>s / sz, долгими гласными, ударением</td>
            <td><b>слайд 6.2</b></td>
            <td><button class="speak-btn" data-speak-text="szia, sok, nyár" data-speak-lang="hu-HU">szia · sok · nyár</button></td>
          </tr>
          <tr>
            <td>приветствием, именем, lenni</td>
            <td><b>слайд 6.3</b></td>
            <td><button class="speak-btn" data-speak-text="A nevem Anna. Jól vagyok." data-speak-lang="hu-HU">A nevem Anna. Jól vagyok.</button></td>
          </tr>
          <tr>
            <td>a / az / egy или множественным числом</td>
            <td><b>слайд 6.4</b></td>
            <td><button class="speak-btn" data-speak-text="az ablak, egy asztal, könyvek" data-speak-lang="hu-HU">az ablak · egy asztal · könyvek</button></td>
          </tr>
          <tr>
            <td>личными формами глагола или nem</td>
            <td><b>слайд 6.5</b></td>
            <td><button class="speak-btn" data-speak-text="tanulok, olvas, nem dolgozom" data-speak-lang="hu-HU">tanulok · olvas · nem dolgozom</button></td>
          </tr>
          <tr>
            <td>пониманием диалога на слух</td>
            <td><b>слайд 6.6</b></td>
            <td><button class="speak-btn" data-speak-text="Kedden öt órakor tanulok." data-speak-lang="hu-HU">Kedden öt órakor tanulok.</button></td>
          </tr>
          <tr>
            <td>самостоятельным текстом о себе</td>
            <td><b>слайд 6.7</b></td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok. Hétfőn nyolckor dolgozom." data-speak-lang="hu-HU">Magyarul tanulok. Hétfőn nyolckor dolgozom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что проверяется отдельно</h4>

        <table class="conj">
          <tr><th>Навык</th><th>Как проверять</th></tr>
          <tr>
            <td>произношение</td>
            <td>сравнить чтение со звуковыми моделями 6.2; автоматический балл не подтверждает произношение</td>
          </tr>
          <tr>
            <td>аудирование</td>
            <td>выполнить пять вопросов на слайде 6.6; ориентир — не менее 4 правильных</td>
          </tr>
          <tr>
            <td>письмо</td>
            <td>проверить профиль 6.7 по рубрике: имя, национальность, действие, день и время</td>
          </tr>
          <tr>
            <td>говорение</td>
            <td>произнести проверенный письменный профиль без микрофона и без оценки</td>
          </tr>
        </table>

        <div class="warn">
          Успешная загрузка аудиофайла — техническое условие работы упражнения, а не языковой результат ученика.
          Поэтому слова <b>DIRECT</b>, <b>MP3</b> и статус публикации не должны использоваться как критерии знания языка.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Заполните карту результата</h4>

        <table class="conj">
          <tr><th>Область</th><th>Уверенно</th><th>Нужно повторить</th><th>Пример ошибки</th></tr>
          <tr><td>чтение</td><td>□</td><td>□</td><td>________________</td></tr>
          <tr><td>знакомство и lenni</td><td>□</td><td>□</td><td>________________</td></tr>
          <tr><td>артикли и множественное число</td><td>□</td><td>□</td><td>________________</td></tr>
          <tr><td>настоящее время</td><td>□</td><td>□</td><td>________________</td></tr>
          <tr><td>числа и расписание</td><td>□</td><td>□</td><td>________________</td></tr>
          <tr><td>аудирование и профиль</td><td>□</td><td>□</td><td>________________</td></tr>
        </table>

        <div class="note">
          Отмечайте «уверенно» только если можете не только узнать ответ, но и самостоятельно привести правильный пример.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Три вопроса для рефлексии</h4>

        <ol class="tasklist">
          <li>Какие <b>две области</b> сейчас самые сильные?</li>
          <li>Какую <b>одну область</b> нужно повторить первой?</li>
          <li>Какое <b>одно действие</b> будет выполнено сейчас?</li>
        </ol>

        <p>Пример конкретного ответа:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p><b>Сильные области:</b> артикли и настоящее время.</p>
          <p><b>Повторить:</b> чтение s / sz.</p>
          <p><b>Следующее действие:</b> снова выполнить мини-диктант на слайде 6.2 и записать пять слов.</p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Правило следующего действия</h4>

        <p>Выберите действие, которое можно выполнить сразу и проверить:</p>

        <ul class="tick">
          <li>не «повторить глаголы», а <b>заново выполнить 10 заданий слайда 6.5</b>;</li>
          <li>не «улучшить аудирование», а <b>прослушать диалог 6.6 второй раз и получить минимум 4 из 5</b>;</li>
          <li>не «лучше говорить», а <b>произнести профиль 6.7 без текста один раз</b>;</li>
          <li>не «выучить чтение», а <b>записать пять слов из диктанта 6.2 без ошибок</b>.</li>
        </ul>

        <div class="note">
          Рефлексия завершена только после выбора и выполнения одного следующего действия.
          Галочка сама по себе ничего не улучшает.
        </div>
      `,
    },
    {
      id: 9,
      eyebrow: 'УРОК 6 · 9/10 · ПЕРЕХОД К A1',
      title: 'Mi következik?',
      subtitle: 'Переход от повторения A0 к первым структурам A1',
      type: 'info',
      note: 'Это предварительная карта следующих уроков, а не требование выучить все окончания сейчас. На A1 знакомые слова и глаголы будут соединяться с новыми формами существительных.',
      warn: 'Неверно говорить, что венгерский выражает абсолютно всё суффиксами. Многие отношения действительно передаются окончаниями, но язык также использует послелоги и другие конструкции. Притяжательные суффиксы тоже не являются падежами.',
      task: 'Познакомьтесь с маршрутом уроков 7–12, распознайте значение нескольких новых форм и убедитесь, что базовые навыки A0 готовы к следующему этапу.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что меняется на уровне A1</h4>

        <p>На A0 вы научились строить короткие основные фразы:</p>

        <table class="conj">
          <tr><th>A0</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez egy könyv." data-speak-lang="hu-HU">Ez egy könyv.</button></td>
            <td>Это книга.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Könyvek." data-speak-lang="hu-HU">Könyvek.</button></td>
            <td>Книги.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két könyv." data-speak-lang="hu-HU">Két könyv.</button></td>
            <td>Две книги.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>Я читаю.</td>
          </tr>
        </table>

        <p>На A1 эти знакомые элементы соединяются:</p>

        <p>
          <button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">
            Egy könyvet olvasok.
          </button>
          — Я читаю одну / какую-то книгу.
        </p>

        <div class="note">
          Глагол <span class="hu-word">olvasok</span> уже знаком.
          Новая часть — форма объекта
          <span class="hu-word">könyvet</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Суффиксы, гармония гласных и послелоги</h4>

        <p>В русском и армянском языках многие отношения выражаются предлогами и падежными формами. В венгерском соответствующее значение часто присоединяется к существительному как окончание:</p>

        <table class="conj">
          <tr><th>Значение</th><th>Венгерский</th><th>Структура</th></tr>
          <tr>
            <td>в доме</td>
            <td><button class="speak-btn" data-speak-text="a házban" data-speak-lang="hu-HU">a házban</button></td>
            <td>ház + -ban</td>
          </tr>
          <tr>
            <td>в дом</td>
            <td><button class="speak-btn" data-speak-text="a házba" data-speak-lang="hu-HU">a házba</button></td>
            <td>ház + -ba</td>
          </tr>
          <tr>
            <td>из дома</td>
            <td><button class="speak-btn" data-speak-text="a házból" data-speak-lang="hu-HU">a házból</button></td>
            <td>ház + -ból</td>
          </tr>
        </table>

        <p>Но в венгерском есть и послелоги — отдельные слова после существительного:</p>

        <table class="conj">
          <tr><th>Форма</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a ház előtt" data-speak-lang="hu-HU">a ház előtt</button></td>
            <td>перед домом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="az asztal mellett" data-speak-lang="hu-HU">az asztal mellett</button></td>
            <td>рядом со столом</td>
          </tr>
        </table>

        <div class="warn">
          Окончание нельзя всегда механически приклеить в одной форме.
          Из-за гармонии гласных существуют варианты:
          <span class="hu-word">házban</span>, но
          <span class="hu-word">kertben</span>;
          <span class="hu-word">házhoz</span>,
          <span class="hu-word">kerthez</span>,
          <span class="hu-word">földhöz</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Урок 7 — A tárgyeset</h4>

        <p>Первый урок A1 посвящён прямому дополнению: кого? что? — <b>Kit? Mit?</b></p>

        <table class="conj">
          <tr><th>Исходная форма</th><th>Форма объекта</th><th>Пример</th></tr>
          <tr>
            <td>alma</td>
            <td><button class="speak-btn" data-speak-text="almát" data-speak-lang="hu-HU">almát</button></td>
            <td><button class="speak-btn" data-speak-text="Almát kérek." data-speak-lang="hu-HU">Almát kérek.</button></td>
          </tr>
          <tr>
            <td>könyv</td>
            <td><button class="speak-btn" data-speak-text="könyvet" data-speak-lang="hu-HU">könyvet</button></td>
            <td><button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">Egy könyvet olvasok.</button></td>
          </tr>
          <tr>
            <td>asztal</td>
            <td><button class="speak-btn" data-speak-text="asztalt" data-speak-lang="hu-HU">asztalt</button></td>
            <td><button class="speak-btn" data-speak-text="Egy asztalt látok." data-speak-lang="hu-HU">Egy asztalt látok.</button></td>
          </tr>
          <tr>
            <td>kávé</td>
            <td><button class="speak-btn" data-speak-text="kávét" data-speak-lang="hu-HU">kávét</button></td>
            <td><button class="speak-btn" data-speak-text="Kávét kérek." data-speak-lang="hu-HU">Kávét kérek.</button></td>
          </tr>
        </table>

        <div class="note">
          После числительного существительное всё ещё остаётся в единственном числе,
          но получает нужное падежное окончание:
          <span class="hu-word">két könyv</span> — две книги;
          <span class="hu-word">két könyvet olvasok</span> — я читаю две книги.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Урок 8 — семья и притяжательные формы</h4>

        <p>Здесь появятся слова семьи и формы «мой / твой / его или её»:</p>

        <table class="conj">
          <tr><th>Слово</th><th>Мой</th><th>Твой</th><th>Его / её</th></tr>
          <tr>
            <td>könyv — книга</td>
            <td><button class="speak-btn" data-speak-text="könyvem" data-speak-lang="hu-HU">könyvem</button></td>
            <td><button class="speak-btn" data-speak-text="könyved" data-speak-lang="hu-HU">könyved</button></td>
            <td><button class="speak-btn" data-speak-text="könyve" data-speak-lang="hu-HU">könyve</button></td>
          </tr>
          <tr>
            <td>ház — дом</td>
            <td><button class="speak-btn" data-speak-text="házam" data-speak-lang="hu-HU">házam</button></td>
            <td><button class="speak-btn" data-speak-text="házad" data-speak-lang="hu-HU">házad</button></td>
            <td><button class="speak-btn" data-speak-text="háza" data-speak-lang="hu-HU">háza</button></td>
          </tr>
        </table>

        <div class="warn">
          <span class="hu-word">-m, -d, -a/-e</span> здесь обозначают принадлежность.
          Это <b>притяжательные суффиксы</b>, а не падежные окончания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Урок 9 — прилагательные и сравнение</h4>

        <table class="conj">
          <tr><th>Обычная форма</th><th>Сравнительная</th><th>Превосходная</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU">nagy</button></td>
            <td><button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button></td>
            <td><button class="speak-btn" data-speak-text="legnagyobb" data-speak-lang="hu-HU">legnagyobb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU">szép</button></td>
            <td><button class="speak-btn" data-speak-text="szebb" data-speak-lang="hu-HU">szebb</button></td>
            <td><button class="speak-btn" data-speak-text="legszebb" data-speak-lang="hu-HU">legszebb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU">jó</button></td>
            <td><button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button></td>
            <td><button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU">legjobb</button></td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="A ház nagyobb, mint a lakás." data-speak-lang="hu-HU">
            A ház nagyobb, mint a lakás.
          </button>
          — Дом больше, чем квартира.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Уроки 10–12 — три местные системы</h4>

        <table class="conj">
          <tr><th>Урок</th><th>Где?</th><th>Куда?</th><th>Откуда?</th><th>Пример значения</th></tr>
          <tr>
            <td><b>10 · внутри</b></td>
            <td><button class="speak-btn" data-speak-text="házban" data-speak-lang="hu-HU">házban</button></td>
            <td><button class="speak-btn" data-speak-text="házba" data-speak-lang="hu-HU">házba</button></td>
            <td><button class="speak-btn" data-speak-text="házból" data-speak-lang="hu-HU">házból</button></td>
            <td>в доме → в дом → из дома</td>
          </tr>
          <tr>
            <td><b>11 · поверхность / место</b></td>
            <td><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></td>
            <td><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></td>
            <td><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></td>
            <td>на столе → на стол → со стола</td>
          </tr>
          <tr>
            <td><b>12 · у / к / от</b></td>
            <td><button class="speak-btn" data-speak-text="Annánál" data-speak-lang="hu-HU">Annánál</button></td>
            <td><button class="speak-btn" data-speak-text="Annához" data-speak-lang="hu-HU">Annához</button></td>
            <td><button class="speak-btn" data-speak-text="Annától" data-speak-lang="hu-HU">Annától</button></td>
            <td>у Анны → к Анне → от Анны</td>
          </tr>
        </table>

        <div class="note">
          Каждая местная группа изучается как тройка вопросов:
          <span class="hu-word">Hol?</span> — где?,
          <span class="hu-word">Hová?</span> — куда?,
          <span class="hu-word">Honnan?</span> — откуда?
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Что пока не нужно заучивать</h4>

        <ul class="tick">
          <li>не нужно запоминать все венгерские падежные окончания одним списком;</li>
          <li>не нужно заранее строить формы незнакомых слов;</li>
          <li>не нужно смешивать винительный падеж, местные окончания и притяжательные суффиксы;</li>
          <li>нужно узнавать вопрос, значение и одну модель в контексте;</li>
          <li>каждая новая группа будет отдельно отрабатываться в чтении, аудировании и диалоге.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-предпросмотр A1</h4>

        <p>Определите приблизительное значение новых форм:</p>

        <ol class="tasklist">
          <li><b>Kávét kérek.</b> → ______________________________</li>
          <li><b>Ez a könyvem.</b> → ______________________________</li>
          <li><b>A ház nagyobb.</b> → ______________________________</li>
          <li><b>A házban vagyok.</b> → ______________________________</li>
          <li><b>A házba megyek.</b> → ______________________________</li>
          <li><b>A házból jövök.</b> → ______________________________</li>
          <li><b>Annához megyek.</b> → ______________________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>Я прошу кофе.</b></li>
            <li><b>Это моя книга.</b></li>
            <li><b>Дом больше.</b></li>
            <li><b>Я нахожусь в доме.</b></li>
            <li><b>Я иду в дом.</b></li>
            <li><b>Я иду / прихожу из дома.</b></li>
            <li><b>Я иду к Анне.</b></li>
          </ol>
        </details>

        <div class="note">
          Готовность к A1 означает не знание всех этих форм заранее, а уверенную базу A0:
          вы читаете знакомые слова, используете артикли, различаете число и множественное число,
          образуете настоящее время и понимаете простое расписание.
        </div>
      `,
    },
    {
      id: 10,
      eyebrow: 'УРОК 6 · 10/10 · ЗАВЕРШЕНИЕ A0',
      title: 'Az A0 ismétlés vége',
      subtitle: 'Итог урока 6 и готовность к следующему этапу',
      type: 'info',
      note: 'Вы завершили обзор содержания A0 в рамках этого курса. Это означает, что материал уроков 1–5 повторён и проверен несколькими заданиями. Это не официальный сертификат CEFR и не утверждение о свободном владении языком.',
      warn: 'Статус аудиофайла, загрузка MP3 и внутренние названия компонентов не являются языковым результатом. Оцениваются ответы ученика, понимание, письменный текст и самостоятельное использование форм.',
      task: 'Выполните финальную проверку без подсказок, отметьте слабую область и завершите одно конкретное повторение перед переходом к уроку 7.',
      activities: [L6_EXIT_CHECK],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Какие станции завершены</h4>

        <table class="conj">
          <tr><th>Слайд</th><th>Область</th><th>Результат</th></tr>
          <tr>
            <td><b>6.2</b></td>
            <td>чтение и произношение</td>
            <td>различать s / sz, cs, gy, ty, ny, zs, j / ly и долгие гласные</td>
          </tr>
          <tr>
            <td><b>6.3</b></td>
            <td>функциональный A0</td>
            <td>поздороваться, назвать имя и ответить на Hogy vagy?</td>
          </tr>
          <tr>
            <td><b>6.4</b></td>
            <td>артикли и существительные</td>
            <td>использовать a / az / egy, знакомое множественное число и форму после числительного</td>
          </tr>
          <tr>
            <td><b>6.5</b></td>
            <td>настоящее время</td>
            <td>выбирать личную форму, использовать nem и задавать простой вопрос</td>
          </tr>
          <tr>
            <td><b>6.6</b></td>
            <td>аудирование</td>
            <td>понять знакомство, имя, день, время и действие</td>
          </tr>
          <tr>
            <td><b>6.7</b></td>
            <td>письменный профиль</td>
            <td>написать 4–6 предложений о себе и расписании</td>
          </tr>
          <tr>
            <td><b>6.8</b></td>
            <td>анализ результата</td>
            <td>связать ошибку с конкретным материалом для повторения</td>
          </tr>
          <tr>
            <td><b>6.9</b></td>
            <td>переход к A1</td>
            <td>понять, зачем дальше изучаются объектные, притяжательные и местные формы</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Что связывает итоговая проверка</h4>

        <p>Финальная активность использует пять источников результата:</p>

        <table class="conj">
          <tr><th>Цель</th><th>Откуда берётся результат</th></tr>
          <tr>
            <td>чтение знакомых слов</td>
            <td>упражнения на декодирование и долгие гласные</td>
          </tr>
          <tr>
            <td>личные формы глагола</td>
            <td>упражнения настоящего времени</td>
          </tr>
          <tr>
            <td>числа и расписание</td>
            <td>аудирование и диалог о дне и времени</td>
          </tr>
          <tr>
            <td>множественное число и артикли</td>
            <td>контролируемая грамматическая практика</td>
          </tr>
          <tr>
            <td>самостоятельный рассказ о себе</td>
            <td>письменный профиль</td>
          </tr>
        </table>

        <div class="note">
          Поэтому итог не должен сводиться к одной галочке.
          Он объединяет разные виды работы: распознавание, грамматику, понимание на слух,
          взаимодействие и письмо.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Что проверяется автоматически, а что отдельно</h4>

        <table class="conj">
          <tr><th>Навык</th><th>Способ проверки</th></tr>
          <tr>
            <td>выбор формы и короткий текстовый ответ</td>
            <td>автоматическая проверка конкретного ответа</td>
          </tr>
          <tr>
            <td>понимание аудио</td>
            <td>ответы на вопросы после прослушивания</td>
          </tr>
          <tr>
            <td>письмо</td>
            <td>профиль проверяется по рубрике и образцам</td>
          </tr>
          <tr>
            <td>произношение</td>
            <td>самостоятельное сравнение со звуковой моделью</td>
          </tr>
          <tr>
            <td>говорение</td>
            <td>добровольное произнесение проверенного текста без микрофона</td>
          </tr>
        </table>

        <div class="warn">
          Автоматически правильный ответ не доказывает правильное произношение.
          Успешное воспроизведение аудио не доказывает понимание.
          Написанный профиль не подтверждает свободную спонтанную речь.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Минимальные признаки готовности после обзора A0</h4>

        <ul class="tick">
          <li>вы различаете <b>s</b> и <b>sz</b> в знакомых словах;</li>
          <li>можете поздороваться, назвать имя и ответить о самочувствии;</li>
          <li>правильно выбираете <b>a / az / egy</b>;</li>
          <li>образуете несколько знакомых форм: <b>könyvek, házak, almák</b>;</li>
          <li>после числа оставляете существительное в единственном числе: <b>két könyv</b>;</li>
          <li>используете формы <b>tanulok, tanulsz, olvasol, dolgozom</b>;</li>
          <li>ставите <b>nem</b> перед глаголом;</li>
          <li>понимаете знакомое число, день и полный час;</li>
          <li>различаете <b>Két óra van</b> и <b>kettőkor</b>;</li>
          <li>можете написать 4–6 коротких предложений о себе и своём расписании.</li>
        </ul>

        <div class="note">
          Не требуется выполнять каждый пункт мгновенно и без единой ошибки.
          Требуется понимать модель, исправлять ошибку после обратной связи
          и знать, где повторить слабую тему.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Финальная проверка без подсказок</h4>

        <ol class="tasklist">
          <li>Прочитайте правильно: <b>sok · szép · nyár</b>.</li>
          <li>Скажите официальное «Добрый день».</li>
          <li>Скажите: «Меня зовут Анна».</li>
          <li>Выберите: <b>a ablak</b> или <b>az ablak</b>.</li>
          <li>Образуйте множественное число: <b>alma</b> → ______.</li>
          <li>Переведите: «две книги» → ______.</li>
          <li>Образуйте: <b>te + olvas</b> → ______.</li>
          <li>Сделайте отрицание: <b>Dolgozom.</b> → ______.</li>
          <li>Скажите: «Сейчас два часа».</li>
          <li>Скажите: «Я читаю в два часа».</li>
          <li>Скажите: «Во вторник в пять я учу венгерский».</li>
          <li>Напишите четыре коротких предложения о себе.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ключ к пунктам 1–11</summary>

          <ol class="tasklist mt-3">
            <li><b>sok · szép · nyár</b> — с правильными s / sz и долгой á</li>
            <li><b>Jó napot kívánok!</b></li>
            <li><b>A nevem Anna.</b></li>
            <li><b>az ablak</b></li>
            <li><b>almák</b></li>
            <li><b>két könyv</b></li>
            <li><b>olvasol</b></li>
            <li><b>Nem dolgozom.</b></li>
            <li><b>Két óra van.</b></li>
            <li><b>Kettőkor olvasok.</b></li>
            <li><b>Kedden öt órakor magyarul tanulok.</b></li>
          </ol>

          <p class="mt-3"><b>Пункт 12:</b> проверьте текст по рубрике слайда 6.7.</p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Как интерпретировать результат</h4>

        <table class="conj">
          <tr><th>Результат по пунктам 1–11</th><th>Следующее действие</th></tr>
          <tr>
            <td><b>9–11 правильных</b></td>
            <td>можно начинать урок 7; сначала повторите каждый ошибочный пункт</td>
          </tr>
          <tr>
            <td><b>6–8 правильных</b></td>
            <td>повторите две слабые станции и снова выполните финальную проверку</td>
          </tr>
          <tr>
            <td><b>0–5 правильных</b></td>
            <td>вернитесь к слайдам 6.2–6.6 по порядку</td>
          </tr>
        </table>

        <div class="warn">
          Переход к уроку 7 не требует заранее знать винительный падеж.
          Он требует достаточно устойчивой основы A0, чтобы новая форма
          <span class="hu-word">könyvet</span> соединялась с уже знакомыми
          <span class="hu-word">könyv</span> и
          <span class="hu-word">olvasok</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Последнее действие перед A1</h4>

        <p>Заполните три строки:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p><b>Мой результат:</b> ______ из 11.</p>
          <p><b>Моя слабая область:</b> ______________________________.</p>
          <p><b>Сейчас я повторю:</b> ______________________________.</p>
        </div>

        <p>Подходящие конкретные действия:</p>

        <ul class="tick">
          <li>повторить диктант из пяти слов на слайде 6.2;</li>
          <li>исправить шесть предложений с lenni на слайде 6.3;</li>
          <li>снова образовать восемь форм на слайде 6.4;</li>
          <li>повторить десять форм глаголов на слайде 6.5;</li>
          <li>получить не менее 4 из 5 за аудирование 6.6;</li>
          <li>исправить и прочитать свой профиль 6.7.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Завершение</h4>

        <p>
          <button class="speak-btn" data-speak-text="Az A0 ismétlés véget ért." data-speak-lang="hu-HU">
            Az A0 ismétlés véget ért.
          </button>
          — Повторение A0 завершено.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ha a legtöbb feladatot önállóan megoldod, elkezdheted az A1 szintet." data-speak-lang="hu-HU">
            Ha a legtöbb feladatot önállóan megoldod, elkezdheted az A1 szintet.
          </button>
          — Если вы самостоятельно выполняете большинство заданий, можно начинать уровень A1.
        </p>

        <div class="note">
          Завершение обзора означает готовность продолжать обучение,
          а не отсутствие ошибок. Ошибки остаются частью следующего этапа.
        </div>
      `,
    }
  ],
  vocabulary: [
    { id: 'l6_v1', hu: 'Szia!', ru: 'Привет! / Пока!', category: 'Review · Functional chunk', exampleSentence: 'Szia! Hogy vagy?', relatedLessonId: 2 },
    { id: 'l6_v2', hu: 'Hogy vagy?', ru: 'Как ты?', category: 'Review · Functional chunk', exampleSentence: 'Szia! Hogy vagy?', relatedLessonId: 2 },
    { id: 'l6_v3', hu: 'könyv', ru: 'книга', category: 'Review · Noun', exampleSentence: 'A könyv itt van.', relatedLessonId: 3 },
    { id: 'l6_v4', hu: 'tanulok', ru: 'я учусь', category: 'Review · Verb', exampleSentence: 'Magyarul tanulok.', baseWord: 'tanul', relatedLessonId: 4 },
    { id: 'l6_v5', hu: 'hétfő', ru: 'понедельник', category: 'Review · Number/time', exampleSentence: 'Hétfőn tanulok.', relatedLessonId: 5 },
    { id: 'l6_v6', hu: 'dolgozik', ru: 'работать (он/она)', category: 'Review · Verb', exampleSentence: 'Péter dolgozik.', baseWord: 'dolgozik', relatedLessonId: 4 },
  ],
  quiz: [
    { id: 601, question: 'Как произносится отдельная буква s в венгерском?', options: ['/s/', '/ʃ/', '/z/', '/ʒ/'], correctIndex: 1, explanation: 'В стандартном венгерском s обозначает /ʃ/; звук /s/ записывается диграфом sz.' },
    { id: 602, question: 'Какое приветствие используется в официальной обстановке с незнакомым человеком?', options: ['Szia', 'Jó napot', 'Szevasz', 'Cső'], correctIndex: 1, explanation: 'Jó napot — официальное приветствие, используется с незнакомыми и в формальных ситуациях (урок 2).' },
    { id: 603, question: 'Какой определённый артикль ставится перед словом «ablak» (окно)?', options: ['a', 'az', 'egy', 'не ставится'], correctIndex: 1, explanation: 'Перед словами, начинающимися с гласного звука, используется артикль az: az ablak (урок 3).' },
    { id: 604, question: 'Как образуется множественное число от слова «alma» (яблоко)?', options: ['almak', 'almák', 'almaok', 'almék'], correctIndex: 1, explanation: 'Слова на -a удлиняют её в -á перед добавлением -k: alma → almák (урок 3).' },
    { id: 605, question: 'Какое окончание у глагола «tanul» в 1-м лице единственного числа (én) в настоящем времени?', options: ['-ok', '-ek', '-ök', '-om'], correctIndex: 0, explanation: 'Для задних гласных (a, o, u) используется окончание -ok: tanul + ok = tanulok (урок 4).' },
    { id: 606, question: 'Как сказать «в три часа» по-венгерски?', options: ['három óra', 'három órakor', 'három órán', 'három órában'], correctIndex: 1, explanation: 'Для указания точного времени используется -kor: három órakor (урок 5).' },
    { id: 607, question: 'Как сказать «в среду» по-венгерски?', options: ['szerda', 'szerdán', 'szerdában', 'szerdakor'], correctIndex: 1, explanation: 'В расписании используется готовая функциональная форма szerdán; полная система падежей изучается позже.' },
    { id: 608, question: 'Какая форма глагола «tanul» соответствует местоимению mi?', options: ['tanulunk', 'tanultok', 'tanulnak', 'tanulok'], correctIndex: 0, explanation: 'mi tanulunk — «мы учим». Это повторение неопределённого спряжения (урок 4).' },
  ],
  objectives: [
    { id: 'l6_review-alphabet', text: 'Применять правила чтения и произношения уровня A0 без ошибок.', skills: ['pronunciation', 'reading'] },
    { id: 'l6_review-verb-conj', text: 'Спрягать глаголы в настоящем времени и строить с ними предложения.', skills: ['grammar', 'writing'] },
    { id: 'l6_review-numbers', text: 'Использовать числа, время и дни недели в мини-диалогах.', skills: ['speaking', 'listening'] },
    { id: 'l6_review-plural', text: 'Образовывать множественное число и правильно выбирать артикли a/az/egy.', skills: ['grammar', 'writing'] },
    { id: 'l6_self-assess', text: 'Строить короткие монологи о себе, объединяя материал уровня A0.', skills: ['speaking', 'writing'] },
  ],
};
