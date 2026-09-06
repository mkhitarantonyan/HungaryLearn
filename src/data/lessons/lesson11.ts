import type { Lesson, LessonActivity } from '../../types';

const L11_CP_MEANING: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l11-cp-meaning-family',
  title: 'Контекстная практика: где, куда и откуда?',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l11-meaning-1', prompt: 'Ты уже находишься на почте. Что скажешь?', options: ['A postán vagyok.', 'A postára megyek.', 'A postáról jövök.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-2', prompt: 'Ты направляешься на почту.', options: ['A postán vagyok.', 'A postára megyek.', 'A postáról jövök.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-meaning-3', prompt: 'Ты возвращаешься с почты.', options: ['A postán vagyok.', 'A postára megyek.', 'A postáról jövök.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-meaning-4', prompt: 'A bankban vagyok. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-5', prompt: 'A bankba megyek. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l11-meaning-6', prompt: 'A bankból jövök. Какой вопрос подходит?', options: ['Hol?', 'Hová?', 'Honnan?'], correctIndex: 2 },
    { kind: 'fillGap', id: 'l11-meaning-7', prompt: 'A könyv az ___ van. (asztal)', accept: ['asztalon'], explanation: 'Местонахождение на поверхности: asztalon.' },
    { kind: 'fillGap', id: 'l11-meaning-8', prompt: 'A táskát a ___ teszem. (szék)', accept: ['székre'], explanation: 'Цель движения: székre.' },
    { kind: 'fillGap', id: 'l11-meaning-9', prompt: 'Leveszem a kabátot a ___. (bőrönd)', accept: ['bőröndről'], explanation: 'Источник движения: bőröndről.' },
    { kind: 'singleChoice', id: 'l11-meaning-10', prompt: 'Где встречаемся?', options: ['A főtéren találkozunk.', 'A főtérre találkozunk.', 'A főtérről találkozunk.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-11', prompt: 'Куда ты идёшь после работы?', options: ['A piacra megyek.', 'A piacon megyek.', 'A piacról megyek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-12', prompt: 'Откуда приезжает Петер?', options: ['Péter Budapesten jön.', 'Péter Budapestre jön.', 'Péter Budapestről jön.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l11-meaning-13', prompt: 'Ты спрашиваешь местного жителя, где находится почта.', options: ['Hol van a posta?', 'Hová van a posta?', 'Honnan van a posta?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l11-meaning-14', prompt: 'Собеседник уточняет конечную цель. Как подтвердить?', options: ['Igen, a főtérre megyek.', 'Igen, a főtéren jövök.', 'Igen, a főtérről vagyok.'], correctIndex: 0 },
  ],
};

const L11_READING: LessonActivity = {
  kind: 'reading',
  id: 'l11-reading-budapest-route',
  title: 'Чтение: дела в городе',
  instructions: 'Прочитай связный рассказ и ответь по смыслу: куда идёт Дора, где находятся места и откуда приезжает Петер.',
  passCount: 6,
  content: {
    type: 'prose',
    title: 'Egy délután a városban',
    paragraphs: [
      'Dóra péntek délután a munkahelyén van. Három órakor elindul. Több dolga van a városban. Először a postára megy. Levelet küld. A posta a főtéren van. Dóra busszal érkezik a térre. A téren körülnéz. Egy férfi ott áll. Dóra kérdez: „Hol van a posta?” A férfi válaszol: „A posta a tér másik oldalán van.” Dóra két perc múlva a postán van.',
      'A postáról Dóra a piacra megy. A piac közel van. Dóra gyalog megy. A piacon almát, kenyeret és sajtot vásárol. Ezután egy kis könyvesboltba megy. A boltban vesz egy magyar mesekönyvet. A könyv szép és olcsó.',
      'Öt órakor Dóra és Péter a pályaudvaron találkoznak. Péter Budapestről jön. A főtér nincs messze. A pályaudvarról együtt a főtérre mennek. Ott kávét isznak. Péter csak egy órát marad a városban. Hat órakor Dóra végül a könyvtárba megy. A könyvtárban este magyarul tanul. A könyvtár csendes és világos. Dóra ott két órát tanul magyarul, majd hazamegy.',
    ],
  },
  questions: [
    { id: 'l11-reading-q1', question: 'Где Дора находится в начале рассказа?', options: ['на работе', 'на рынке', 'на вокзале'], correctIndex: 0 },
    { id: 'l11-reading-q2', question: 'Куда она идёт сначала?', options: ['в библиотеку', 'на почту', 'на вокзал'], correctIndex: 1 },
    { id: 'l11-reading-q3', question: 'Зачем Дора идёт туда?', options: ['отправить письмо', 'купить кофе', 'встретить Петера'], correctIndex: 0 },
    { id: 'l11-reading-q4', question: 'Где находится почта?', options: ['на главной площади', 'в библиотеке', 'на рынке'], correctIndex: 0 },
    { id: 'l11-reading-q5', question: 'Откуда Дора идёт на рынок?', options: ['с почты', 'с вокзала', 'из Будапешта'], correctIndex: 0 },
    { id: 'l11-reading-q6', question: 'Где Дора встречается с Петером?', options: ['на почте', 'на вокзале', 'в книжном магазине'], correctIndex: 1 },
    { id: 'l11-reading-q7', question: 'Какова последняя цель Доры?', options: ['библиотека', 'рынок', 'главная площадь'], correctIndex: 0 },
  ],
};

const L11_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay',
  id: 'l11-roleplay-town-route',
  title: 'Ролевая игра: найти почту',
  partnerLabel: 'Helyi lakos',
  completionMessage: 'Megtaláltad az utat a postához.',
  startTurnId: 'l11-rp-s1',
  turns: [
    { id: 'l11-rp-s1', speaker: 'waiter', prompt: 'Jó napot kívánok! Segíthetek?', next: 'l11-rp-l1' },
    { id: 'l11-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поприветствуй и спроси, где находится почта.', model: 'Jó napot! Elnézést, hol van a posta?', next: 'l11-rp-s2' },
    { id: 'l11-rp-s2', speaker: 'waiter', prompt: 'A posta a főtéren van.', next: 'l11-rp-l2' },
    { id: 'l11-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси, в какой стороне находится главная площадь.', model: 'Merre van a főtér?', next: 'l11-rp-s3' },
    { id: 'l11-rp-s3', speaker: 'waiter', prompt: 'Innen egyenesen. Az első utca után jobbra van a főtér.', next: 'l11-rp-l3' },
    { id: 'l11-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Проверь, правильно ли ты понял номер улицы.', model: 'A második utca után jobbra?', next: 'l11-rp-s4' },
    { id: 'l11-rp-s4', speaker: 'waiter', prompt: 'Nem, az első utca után jobbra.', next: 'l11-rp-l4' },
    { id: 'l11-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Уточни, почта действительно на главной площади.', model: 'És a posta a főtéren van?', next: 'l11-rp-s5' },
    { id: 'l11-rp-s5', speaker: 'waiter', prompt: 'Igen. A főtéren balra van a posta.', next: 'l11-rp-l5' },
    { id: 'l11-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Коротко повтори первую часть маршрута.', model: 'Értem. Egyenesen megyek, azután jobbra.', next: 'l11-rp-s6' },
    { id: 'l11-rp-s6', speaker: 'waiter', prompt: 'Igen. Utána a főtérre megy.', next: 'l11-rp-l6' },
    { id: 'l11-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси, далеко ли площадь.', model: 'Messze van a főtér?', next: 'l11-rp-s7' },
    { id: 'l11-rp-s7', speaker: 'waiter', prompt: 'Nem. Öt perc gyalog.', next: 'l11-rp-l7' },
    { id: 'l11-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Повтори конечную цель маршрута.', model: 'Rendben. A főtérre megyek. Ott van a posta.', next: 'l11-rp-s8' },
    { id: 'l11-rp-s8', speaker: 'waiter', prompt: 'Igen, pontosan.', next: 'l11-rp-l8' },
    { id: 'l11-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поблагодари и попрощайся.', model: 'Köszönöm szépen. Viszontlátásra!', next: 'l11-rp-s9' },
    { id: 'l11-rp-s9', speaker: 'waiter', prompt: 'Szívesen. Viszontlátásra!' },
  ],
};
const L11_WRITING: LessonActivity = {
  kind: 'writing',
  id: 'l11-writing-city-route',
  title: 'Письмо: мои дела в городе',
  prompt: 'Напиши 70–90 слов о простом маршруте по городу. Используй настоящее время. Укажи, где ты находишься в начале, куда идёшь сначала, ещё два или три места, откуда ты идёшь дальше и куда направляешься в конце. Используй несколько осмысленных форм Hol? / Hová? / Honnan? из L10 и L11. Будущее время и новая грамматика не нужны.',
  modelAnswer: [
    'Délután három órakor a munkahelyemen vagyok. Három órakor elindulok. Először a postára megyek. A posta a főtéren van. A postán levelet küldök. A postáról a piacra megyek. A piacon almát és kenyeret veszek. Ezután a pályaudvarra megyek. Öt órakor Péter a pályaudvaron van. Én is a pályaudvarra megyek. Péter Budapestről jön. A pályaudvarról a könyvtárba megyek. A könyvtárban magyarul tanulok. A könyvtár csendes és világos. Este nyolc órakor a könyvtárból hazamegyek.',
  ],
  rubric: [
    '70–90 слов',
    'понятная начальная и конечная точки',
    'два или три промежуточных места',
    'несколько корректных Hol? / Hová? / Honnan? форм из L10 и L11',
    'простые предложения в настоящем времени',
    'понятная последовательность',
  ],
};
const L11_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори 1–1.5 минуты о простом маршруте по городу. Используй настоящее время и только знакомую грамматику L1–L11. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Опиши маршрут из 4–6 точек. Назови начальную точку, две или три цели, хотя бы одно текущее местонахождение, одну исходную точку и финальный пункт. Используй несколько осмысленных форм Hol? / Hová? / Honnan? из L10 и L11.',
  rubric: [
    '1–1.5 минуты связной речи',
    'понятная начальная и конечная точки',
    'минимум две цели маршрута',
    'несколько корректных Hol? / Hová? / Honnan? форм',
    'простые предложения в настоящем времени',
    'понятная последовательность без новой грамматики',
  ],
};
const L11_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l11-exit-check',
  title: 'Проверка целей урока 11',
  checks: [
    { objectiveId: 'l11_distinguish-surface-cases', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-superessive', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-sublative', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    { objectiveId: 'l11_form-delative', activityId: 'l11-cp-meaning-family', evidenceKind: 'grammar' },
    {
      objectiveId: 'l11_use-surface-cases',
      activityId: 'l11-reading-budapest-route',
      evidenceKind: 'reading',
      evidenceComponents: [
        { activityId: 'l11-roleplay-town-route', evidenceKind: 'interaction' },
        { activityId: 'l11-writing-city-route', evidenceKind: 'writing' },
      ],
    },
  ],
};

export const LESSON_11: Lesson = {
  id: 11,
  number: 11,
  level: 'A1',
  title: 'Урок 11 · Helyhatározók II',
  subtitle: 'Поверхностная и конвенциональная местная семья: где, куда, откуда',
  description: 'Модель Hol? / Hová? / Honnan? для поверхностной и конвенциональной семьи, городских дел, простого маршрута и уточнения местоположения.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 11 · 1/11 · СВЯЗЬ С УРОКОМ 10',
      title: 'Смысл остаётся тем же — появляется выбор семьи',
      subtitle: 'Hol? / Hová? / Honnan? + внутренняя или поверхностно-конвенциональная модель',
      type: 'info',
      note: 'Из урока 10 переносим главный навык: сначала понять пространственную роль. В L11 добавляется второй шаг — определить, какую местную семью обычно использует конкретное слово.',
      warn: 'Не выбирай форму по русскому «в / на / из / с». Венгерское стандартное употребление может не совпадать с русским предлогом.',
      task: 'Сначала сравни две тройки ниже. Затем закрой ответы мини-проверки и назови для каждого примера: 1) вопрос Hol/Hová/Honnan, 2) семейство L10 или L11.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Первый выбор уже знаком из L10</h4>

        <table class="conj">
          <tr><th>Ситуация</th><th>Вопрос</th><th>Что ищем</th></tr>
          <tr><td>человек уже находится в месте</td><td><b>Hol?</b></td><td>местонахождение</td></tr>
          <tr><td>человек движется к цели</td><td><b>Hová?</b></td><td>цель движения</td></tr>
          <tr><td>человек движется от исходной точки</td><td><b>Honnan?</b></td><td>источник движения</td></tr>
        </table>

        <div class="note">
          Этот смысловой шаг не меняется. Новый вопрос L11: <b>какую местную семью использует это место?</b>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Две семьи — одна и та же логика</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Внутренняя семья L10</th><th>Семья L11</th></tr>
          <tr>
            <td><b>Hol?</b></td>
            <td><button class="speak-btn" data-speak-text="A szobában vagyok." data-speak-lang="hu-HU">A szobában vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button></td>
          </tr>
          <tr>
            <td><b>Hová?</b></td>
            <td><button class="speak-btn" data-speak-text="A szobába megyek." data-speak-lang="hu-HU">A szobába megyek.</button></td>
            <td><button class="speak-btn" data-speak-text="A postára megyek." data-speak-lang="hu-HU">A postára megyek.</button></td>
          </tr>
          <tr>
            <td><b>Honnan?</b></td>
            <td><button class="speak-btn" data-speak-text="A szobából jövök." data-speak-lang="hu-HU">A szobából jövök.</button></td>
            <td><button class="speak-btn" data-speak-text="A postáról jövök." data-speak-lang="hu-HU">A postáról jövök.</button></td>
          </tr>
        </table>

        <p>
          Значение трёх вопросов одинаково в обеих колонках.
          Меняется только <b>семья форм</b>, которую использует конкретное место.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Что значит «поверхностная» и «конвенциональная»?</h4>

        <table class="conj">
          <tr><th>Тип</th><th>Пример</th><th>Как учить</th></tr>
          <tr>
            <td>буквальная поверхность</td>
            <td><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button></td>
            <td><b>asztal</b> образует L11-семью</td>
          </tr>
          <tr>
            <td>принятое употребление места</td>
            <td><button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button></td>
            <td>учи <b>posta</b> как готовую тройку</td>
          </tr>
          <tr>
            <td>географическая модель</td>
            <td><button class="speak-btn" data-speak-text="Budapesten vagyok." data-speak-lang="hu-HU">Budapesten vagyok.</button></td>
            <td>учи стандартную форму конкретного названия</td>
          </tr>
        </table>

        <div class="warn">
          «Конвенциональная» не означает случайная. Это устойчивое венгерское употребление,
          которое лучше запоминать вместе с самим словом.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Русский предлог не выбирает венгерскую семью</h4>

        <table class="conj">
          <tr><th>По-русски</th><th>По-венгерски</th><th>Семья</th></tr>
          <tr>
            <td>в комнате</td>
            <td><button class="speak-btn" data-speak-text="a szobában" data-speak-lang="hu-HU">a szobában</button></td>
            <td>L10</td>
          </tr>
          <tr>
            <td>на почте</td>
            <td><button class="speak-btn" data-speak-text="a postán" data-speak-lang="hu-HU">a postán</button></td>
            <td>L11</td>
          </tr>
          <tr>
            <td>в Будапеште</td>
            <td><button class="speak-btn" data-speak-text="Budapesten" data-speak-lang="hu-HU">Budapesten</button></td>
            <td>L11</td>
          </tr>
        </table>

        <p>
          Поэтому полезнее мыслить не «какой русский предлог?», а
          <b>«как это место обычно оформляется по-венгерски?»</b>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Рабочий алгоритм из четырёх шагов</h4>

        <ol class="tasklist">
          <li><b>Ситуация:</b> где я, куда иду или откуда иду?</li>
          <li><b>Вопрос:</b> Hol? / Hová? / Honnan?</li>
          <li><b>Семья:</b> внутренняя L10 или поверхностно-конвенциональная L11?</li>
          <li><b>Форма:</b> выбери нужный гармонический вариант — это подробно разберём на следующих слайдах.</li>
        </ol>

        <div class="note">
          Короткая формула:
          <b>ситуация → вопрос → семья → форма</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Учим место сразу как тройку</h4>

        <p>
          <b>posta:</b>
          <button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button>
          →
          <button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button>
          →
          <button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button>
        </p>

        <p>
          <b>Budapest:</b>
          <button class="speak-btn" data-speak-text="Budapesten" data-speak-lang="hu-HU">Budapesten</button>
          →
          <button class="speak-btn" data-speak-text="Budapestre" data-speak-lang="hu-HU">Budapestre</button>
          →
          <button class="speak-btn" data-speak-text="Budapestről" data-speak-lang="hu-HU">Budapestről</button>
        </p>

        <div class="note">
          Так ты запоминаешь не одиночное окончание, а сразу три пространственные роли одного места.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки на старте L11</h4>

        <table class="conj">
          <tr><th>Ошибка</th><th>Почему</th><th>Правильная мысль</th></tr>
          <tr><td>выбирать форму только по глаголу</td><td>глагол не сообщает всю пространственную роль</td><td>сначала Hol / Hová / Honnan</td></tr>
          <tr><td>переводить русский «в» всегда внутренней семьёй</td><td>венгерское употребление может быть другим</td><td>учи модель конкретного места</td></tr>
          <tr><td>запоминать только одну форму слова</td><td>теряются две другие роли</td><td>учи тройку Hol → Hová → Honnan</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка перед 11.2</h4>

        <ol class="tasklist">
          <li>Ты уже находишься в комнате. Какая форма: <b>szoba + Hol?</b></li>
          <li>Ты идёшь на почту. Какая форма: <b>posta + Hová?</b></li>
          <li>Ты приезжаешь из Будапешта. Какая форма: <b>Budapest + Honnan?</b></li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Проверить ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="szobában" data-speak-lang="hu-HU">szobában</button> — внутренняя семья L10.</li>
            <li><button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button> — семья L11.</li>
            <li><button class="speak-btn" data-speak-text="Budapestről" data-speak-lang="hu-HU">Budapestről</button> — семья L11.</li>
          </ol>
        </details>

        <div class="warn">
          На 11.1 не вводим третью местную семью. Здесь задача только одна:
          уверенно различать внутреннюю модель L10 и новую модель L11.
        </div>
      `,
    },    {
      id: 2,
      eyebrow: 'УРОК 11 · 2/11 · ЕДИНАЯ МАТРИЦА',
      title: 'Hol? Hová? Honnan?',
      subtitle: 'Одна матрица: место → цель → источник',
      type: 'info',
      note: 'На этом слайде собери формы L11 как единую систему. Сначала выбирай пространственную роль, затем гармонический вариант. Не учи каждое окончание отдельно от вопроса.',
      warn: 'У Hol? больше видимых вариантов, чем у Hová? и Honnan?. Это нормально: -n/-on/-en/-ön — одна функция «где?», а не четыре разных значения.',
      task: 'Прочитай три полные тройки вслух. Затем закрой мини-проверку и восстанови формы для asztal, szék и posta без подсказки.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Главная матрица L11</h4>

        <table class="conj">
          <tr><th>Роль</th><th>Вопрос</th><th>Суффикс</th><th>asztal</th><th>szék</th></tr>
          <tr>
            <td>место</td>
            <td><b>Hol?</b></td>
            <td><b>-n / -on / -en / -ön</b></td>
            <td><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></td>
            <td><button class="speak-btn" data-speak-text="széken" data-speak-lang="hu-HU">széken</button></td>
          </tr>
          <tr>
            <td>цель</td>
            <td><b>Hová?</b></td>
            <td><b>-ra / -re</b></td>
            <td><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></td>
            <td><button class="speak-btn" data-speak-text="székre" data-speak-lang="hu-HU">székre</button></td>
          </tr>
          <tr>
            <td>источник</td>
            <td><b>Honnan?</b></td>
            <td><b>-ról / -ről</b></td>
            <td><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></td>
            <td><button class="speak-btn" data-speak-text="székről" data-speak-lang="hu-HU">székről</button></td>
          </tr>
        </table>

        <div class="note">
          Семантическая цепочка та же, что в L10:
          <b>Hol? → Hová? → Honnan?</b>.
          Меняется только семейство суффиксов.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Hol? — почему четыре варианта?</h4>

        <table class="conj">
          <tr><th>Тип основы</th><th>Форма</th><th>Пример</th></tr>
          <tr>
            <td>задние гласные</td>
            <td><b>-on</b></td>
            <td><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></td>
          </tr>
          <tr>
            <td>передние неогублённые</td>
            <td><b>-en</b></td>
            <td><button class="speak-btn" data-speak-text="széken" data-speak-lang="hu-HU">széken</button></td>
          </tr>
          <tr>
            <td>передние огублённые</td>
            <td><b>-ön</b></td>
            <td><button class="speak-btn" data-speak-text="bőröndön" data-speak-lang="hu-HU">bőröndön</button></td>
          </tr>
          <tr>
            <td>после конечной гласной часто виден только <b>-n</b></td>
            <td><b>-n</b></td>
            <td><button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button></td>
          </tr>
        </table>

        <p>
          На этом уровне не нужно вычислять каждое редкое исключение.
          Сначала уверенно распознавай основные модели и знакомые слова.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Hová? — два гармонических варианта</h4>

        <table class="conj">
          <tr><th>Модель</th><th>Пример</th><th>Полная фраза</th></tr>
          <tr>
            <td><b>-ra</b></td>
            <td><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></td>
            <td><button class="speak-btn" data-speak-text="A könyvet az asztalra teszem." data-speak-lang="hu-HU">A könyvet az asztalra teszem.</button></td>
          </tr>
          <tr>
            <td><b>-re</b></td>
            <td><button class="speak-btn" data-speak-text="székre" data-speak-lang="hu-HU">székre</button></td>
            <td><button class="speak-btn" data-speak-text="A táskát a székre teszem." data-speak-lang="hu-HU">A táskát a székre teszem.</button></td>
          </tr>
        </table>

        <div class="note">
          Здесь функция одна: <b>цель</b>.
          Разница <b>-ra / -re</b> определяется гармонией гласных.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Honnan? — источник и долгие ó / ő</h4>

        <table class="conj">
          <tr><th>Модель</th><th>Пример</th><th>Полная фраза</th></tr>
          <tr>
            <td><b>-ról</b></td>
            <td><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></td>
            <td><button class="speak-btn" data-speak-text="Leveszem a könyvet az asztalról." data-speak-lang="hu-HU">Leveszem a könyvet az asztalról.</button></td>
          </tr>
          <tr>
            <td><b>-ről</b></td>
            <td><button class="speak-btn" data-speak-text="székről" data-speak-lang="hu-HU">székről</button></td>
            <td><button class="speak-btn" data-speak-text="Leveszem a táskát a székről." data-speak-lang="hu-HU">Leveszem a táskát a székről.</button></td>
          </tr>
        </table>

        <div class="warn">
          Пиши именно <b>-ról / -ről</b>: <b>ó</b> и <b>ő</b> долгие.
          Формы без долготы — орфографическая ошибка.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Конечные a / e перед суффиксом удлиняются</h4>

        <p>
          <b>posta</b> →
          <button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button> →
          <button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button> →
          <button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button>
        </p>

        <p>
          В основе <b>posta</b> конечное <b>a</b> становится <b>á</b> перед этими суффиксами.
        </p>

        <div class="note">
          Поэтому не <s>postan</s>, не <s>postara</s>, не <s>postaról</s>,
          а <b>postán, postára, postáról</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Три готовые тройки</h4>

        <table class="conj">
          <tr><th>Основа</th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr>
          <tr>
            <td><b>asztal</b></td>
            <td><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></td>
            <td><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></td>
            <td><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></td>
          </tr>
          <tr>
            <td><b>szék</b></td>
            <td><button class="speak-btn" data-speak-text="széken" data-speak-lang="hu-HU">széken</button></td>
            <td><button class="speak-btn" data-speak-text="székre" data-speak-lang="hu-HU">székre</button></td>
            <td><button class="speak-btn" data-speak-text="székről" data-speak-lang="hu-HU">székről</button></td>
          </tr>
          <tr>
            <td><b>posta</b></td>
            <td><button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button></td>
            <td><button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button></td>
            <td><button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button></td>
          </tr>
        </table>

        <div class="note">
          Полезнее запоминать именно горизонтально:
          <b>одно место → три пространственные роли</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr><td><s>A könyv az asztalra van.</s></td><td><b>A könyv az asztalon van.</b></td><td>это Hol?, а не Hová?</td></tr>
          <tr><td><s>A táskát a széken teszem.</s></td><td><b>A táskát a székre teszem.</b></td><td>стул — цель</td></tr>
          <tr><td><s>asztalrol</s></td><td><b>asztalról</b></td><td>нужна долгая ó</td></tr>
          <tr><td><s>postara</s></td><td><b>postára</b></td><td>конечное a удлиняется</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка</h4>

        <ol class="tasklist">
          <li><b>asztal + Hol?</b></li>
          <li><b>szék + Hová?</b></li>
          <li><b>posta + Honnan?</b></li>
          <li><b>bőrönd + Hol?</b></li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Проверить ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></li>
            <li><button class="speak-btn" data-speak-text="székre" data-speak-lang="hu-HU">székre</button></li>
            <li><button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button></li>
            <li><button class="speak-btn" data-speak-text="bőröndön" data-speak-lang="hu-HU">bőröndön</button></li>
          </ol>
        </details>

        <div class="warn">
          На 11.2 закрепляем только матрицу L11.
          Другие местные семьи сюда не добавляем.
        </div>
      `,
    },    {
      id: 3,
      eyebrow: 'УРОК 11 · 3/11 · HOL?',
      title: 'Hol? — где находится?',
      subtitle: '-n / -on / -en / -ön: одна функция, четыре видимых варианта',
      type: 'info',
      note: 'Hol? описывает текущее местонахождение. Сначала убедись, что слово действительно использует семью L11, и только потом выбирай -n/-on/-en/-ön.',
      warn: 'Не путай Hol? с направлением. Если предмет уже находится на поверхности или человек уже находится в месте, нужен ответ на Hol?, а не форма цели.',
      task: 'Прочитай примеры, затем для каждого нового слова проговори: Hol? → семья L11 → гармонический вариант → готовая форма.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что выражает Hol?</h4>

        <p>
          <b>Hol?</b> = «где находится?».
          Здесь нет цели движения и нет исходной точки: человек или предмет
          <b>уже находится</b> в данном месте.
        </p>

        <table class="conj">
          <tr><th>Ситуация</th><th>Вопрос</th><th>Пример</th></tr>
          <tr>
            <td>книга уже на столе</td>
            <td><b>Hol?</b></td>
            <td><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button></td>
          </tr>
          <tr>
            <td>сумка уже на стуле</td>
            <td><b>Hol?</b></td>
            <td><button class="speak-btn" data-speak-text="A táska a széken van." data-speak-lang="hu-HU">A táska a széken van.</button></td>
          </tr>
          <tr>
            <td>я уже на почте</td>
            <td><b>Hol?</b></td>
            <td><button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Четыре формы — одна функция</h4>

        <table class="conj">
          <tr><th>Вариант</th><th>Когда видим</th><th>Пример</th></tr>
          <tr>
            <td><b>-on</b></td>
            <td>обычно после основы с задними гласными</td>
            <td><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></td>
          </tr>
          <tr>
            <td><b>-en</b></td>
            <td>обычно после передних неогублённых гласных</td>
            <td><button class="speak-btn" data-speak-text="széken" data-speak-lang="hu-HU">széken</button></td>
          </tr>
          <tr>
            <td><b>-ön</b></td>
            <td>обычно после передних огублённых гласных</td>
            <td><button class="speak-btn" data-speak-text="bőröndön" data-speak-lang="hu-HU">bőröndön</button></td>
          </tr>
          <tr>
            <td><b>-n</b></td>
            <td>после конечной гласной</td>
            <td><button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button></td>
          </tr>
        </table>

        <div class="note">
          Не воспринимай эти четыре варианта как четыре разных падежа.
          Все они отвечают на один вопрос <b>Hol?</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. После конечной гласной часто остаётся -n</h4>

        <p>
          <b>utca</b> →
          <button class="speak-btn" data-speak-text="utcán" data-speak-lang="hu-HU">utcán</button>
          &nbsp;·&nbsp;
          <b>posta</b> →
          <button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button>
        </p>

        <p>
          Перед суффиксом конечные <b>a / e</b> удлиняются:
          <b>a → á</b>, <b>e → é</b>.
          Поэтому в наших примерах видим <b>utcán</b> и <b>postán</b>.
        </p>

        <div class="warn">
          Не пиши <s>utcan</s> или <s>postan</s>.
          Долгота гласной — часть правильной венгерской формы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Hol? используется и в готовых городских моделях</h4>

        <table class="conj">
          <tr><th>Место</th><th>Hol?-форма</th><th>Пример</th></tr>
          <tr>
            <td>posta</td>
            <td><button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button></td>
            <td><button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button></td>
          </tr>
          <tr>
            <td>főtér</td>
            <td><button class="speak-btn" data-speak-text="főtéren" data-speak-lang="hu-HU">főtéren</button></td>
            <td><button class="speak-btn" data-speak-text="A főtéren találkozunk." data-speak-lang="hu-HU">A főtéren találkozunk.</button></td>
          </tr>
          <tr>
            <td>Budapest</td>
            <td><button class="speak-btn" data-speak-text="Budapesten" data-speak-lang="hu-HU">Budapesten</button></td>
            <td><button class="speak-btn" data-speak-text="Budapesten lakom." data-speak-lang="hu-HU">Budapesten lakom.</button></td>
          </tr>
          <tr>
            <td>Magyarország</td>
            <td><button class="speak-btn" data-speak-text="Magyarországon" data-speak-lang="hu-HU">Magyarországon</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarországon élek." data-speak-lang="hu-HU">Magyarországon élek.</button></td>
          </tr>
        </table>

        <div class="note">
          Это стандартные модели конкретных слов.
          Не делай вывод, что любое название места автоматически использует L11.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Hol? не зависит только от глагола</h4>

        <p>
          Сравни:
          <button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button>
          и
          <button class="speak-btn" data-speak-text="A postán dolgozom." data-speak-lang="hu-HU">A postán dolgozom.</button>
        </p>

        <p>
          Глаголы разные, но пространственная роль одинаковая:
          <b>я уже нахожусь на почте → Hol?</b>
        </p>

        <div class="note">
          Сначала определяй пространственный смысл, а не пытайся привязать
          конкретный суффикс к одному глаголу.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Алгоритм образования Hol?-формы</h4>

        <ol class="tasklist">
          <li>Убедись, что ситуация отвечает на <b>Hol?</b>.</li>
          <li>Убедись, что слово использует семью L11.</li>
          <li>Выбери вариант <b>-n / -on / -en / -ön</b> по форме слова и гармонии.</li>
          <li>Проверь, не удлиняется ли конечное <b>a / e</b>.</li>
          <li>Произнеси готовую форму целиком.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Ошибка</th><th>Правильно</th><th>Почему</th></tr>
          <tr>
            <td><s>A könyv az asztalra van.</s></td>
            <td><b>A könyv az asztalon van.</b></td>
            <td>книга уже находится там → Hol?</td>
          </tr>
          <tr>
            <td><s>bőrönden</s></td>
            <td><b>bőröndön</b></td>
            <td>нужен гармонический вариант -ön</td>
          </tr>
          <tr>
            <td><s>postan</s></td>
            <td><b>postán</b></td>
            <td>конечное a удлиняется</td>
          </tr>
          <tr>
            <td><s>Budapestben lakom.</s></td>
            <td><b>Budapesten lakom.</b></td>
            <td>для обычного местонахождения в Будапеште учим стандартную форму</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка</h4>

        <ol class="tasklist">
          <li><b>asztal + Hol?</b></li>
          <li><b>szék + Hol?</b></li>
          <li><b>bőrönd + Hol?</b></li>
          <li><b>posta + Hol?</b></li>
          <li>Как сказать: «Я живу в Будапеште»?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Проверить ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></li>
            <li><button class="speak-btn" data-speak-text="széken" data-speak-lang="hu-HU">széken</button></li>
            <li><button class="speak-btn" data-speak-text="bőröndön" data-speak-lang="hu-HU">bőröndön</button></li>
            <li><button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button></li>
            <li><button class="speak-btn" data-speak-text="Budapesten lakom." data-speak-lang="hu-HU">Budapesten lakom.</button></li>
          </ol>
        </details>

        <div class="warn">
          На 11.3 закрепляем только <b>Hol?</b> этой семьи.
          Формы цели и источника подробно разберём на следующем слайде.
        </div>
      `,
    },    {
      id: 4,
      eyebrow: 'УРОК 11 · 4/11 · HOVÁ? ÉS HONNAN?',
      title: 'Hová? и Honnan? — цель и источник',
      subtitle: '-ra/-re ↔ -ról/-ről: движение к месту и от места',
      type: 'info',
      note: 'Эти две формы удобно учить парой. Hová? показывает конечную цель, Honnan? — исходную точку. Сначала определи направление смысла, затем выбери гармонический вариант.',
      warn: 'Сам по себе глагол движения не определяет падеж. Один и тот же глагол может употребляться в разных пространственных конструкциях — решает роль места в конкретной ситуации.',
      task: 'Для каждого примера сначала назови вопрос Hová? или Honnan?, затем форму. После этого закрой мини-проверку и восстанови пары без подсказки.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Два противоположных направления</h4>

        <table class="conj">
          <tr><th>Смысл</th><th>Вопрос</th><th>Семья L11</th></tr>
          <tr><td>движение <b>к цели</b></td><td><b>Hová?</b></td><td><b>-ra / -re</b></td></tr>
          <tr><td>движение <b>от источника</b></td><td><b>Honnan?</b></td><td><b>-ról / -ről</b></td></tr>
        </table>

        <p>
          Сравни одну и ту же основу:
          <button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button>
          — на стол, к поверхности стола;
          <button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button>
          — со стола.
        </p>

        <div class="note">
          Полезная пара:
          <b>Hová? → к цели</b> · <b>Honnan? → от источника</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Hová? — выбираем -ra или -re</h4>

        <table class="conj">
          <tr><th>Гармония</th><th>Форма</th><th>Пример</th><th>Контекст</th></tr>
          <tr>
            <td>задние гласные</td>
            <td><b>-ra</b></td>
            <td><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></td>
            <td><button class="speak-btn" data-speak-text="A könyvet az asztalra teszem." data-speak-lang="hu-HU">A könyvet az asztalra teszem.</button></td>
          </tr>
          <tr>
            <td>передние гласные</td>
            <td><b>-re</b></td>
            <td><button class="speak-btn" data-speak-text="székre" data-speak-lang="hu-HU">székre</button></td>
            <td><button class="speak-btn" data-speak-text="A táskát a székre teszem." data-speak-lang="hu-HU">A táskát a székre teszem.</button></td>
          </tr>
        </table>

        <p>
          Городской пример:
          <button class="speak-btn" data-speak-text="Budapestre utazom." data-speak-lang="hu-HU">Budapestre utazom.</button>
          — Будапешт является целью поездки.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Honnan? — выбираем -ról или -ről</h4>

        <table class="conj">
          <tr><th>Гармония</th><th>Форма</th><th>Пример</th><th>Контекст</th></tr>
          <tr>
            <td>задние гласные</td>
            <td><b>-ról</b></td>
            <td><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></td>
            <td><button class="speak-btn" data-speak-text="Leveszem a könyvet az asztalról." data-speak-lang="hu-HU">Leveszem a könyvet az asztalról.</button></td>
          </tr>
          <tr>
            <td>передние гласные</td>
            <td><b>-ről</b></td>
            <td><button class="speak-btn" data-speak-text="székről" data-speak-lang="hu-HU">székről</button></td>
            <td><button class="speak-btn" data-speak-text="Leveszem a táskát a székről." data-speak-lang="hu-HU">Leveszem a táskát a székről.</button></td>
          </tr>
        </table>

        <p>
          Географический пример:
          <button class="speak-btn" data-speak-text="Budapestről jövök." data-speak-lang="hu-HU">Budapestről jövök.</button>
          — Будапешт является исходной точкой.
        </p>

        <div class="warn">
          В <b>-ról / -ről</b> гласные <b>ó / ő</b> долгие:
          <b>asztalról</b>, <b>székről</b>, <b>Budapestről</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Одна основа — две роли</h4>

        <table class="conj">
          <tr><th>Основа</th><th>Hová?</th><th>Honnan?</th></tr>
          <tr>
            <td><b>asztal</b></td>
            <td><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></td>
            <td><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></td>
          </tr>
          <tr>
            <td><b>szék</b></td>
            <td><button class="speak-btn" data-speak-text="székre" data-speak-lang="hu-HU">székre</button></td>
            <td><button class="speak-btn" data-speak-text="székről" data-speak-lang="hu-HU">székről</button></td>
          </tr>
          <tr>
            <td><b>posta</b></td>
            <td><button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button></td>
            <td><button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button></td>
          </tr>
          <tr>
            <td><b>Budapest</b></td>
            <td><button class="speak-btn" data-speak-text="Budapestre" data-speak-lang="hu-HU">Budapestre</button></td>
            <td><button class="speak-btn" data-speak-text="Budapestről" data-speak-lang="hu-HU">Budapestről</button></td>
          </tr>
        </table>

        <div class="note">
          Смотри на форму горизонтально:
          <b>куда? ↔ откуда?</b>.
          Так легче не смешивать цель и источник.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что происходит с конечным a?</h4>

        <p>
          <b>posta</b> →
          <button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button>
          →
          <button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button>
        </p>

        <p>
          Перед суффиксом конечное <b>a</b> становится <b>á</b>.
          Поэтому пишем <b>postára</b> и <b>postáról</b>.
        </p>

        <div class="warn">
          Не <s>postara</s> и не <s>postaról</s>.
          Долгота гласной — часть правильной формы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Глагол не выбирает форму вместо тебя</h4>

        <p>
          Сравни две ситуации:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Budapestre utazom." data-speak-lang="hu-HU">Budapestre utazom.</button>
          — куда? Будапешт является целью.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Budapestről utazom tovább." data-speak-lang="hu-HU">Budapestről utazom tovább.</button>
          — откуда? Будапешт является исходной точкой следующего этапа.
        </p>

        <div class="note">
          Сам по себе глагол движения не определяет падеж.
          Сначала определяй роль места в ситуации.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Ошибка</th><th>Правильно</th><th>Почему</th></tr>
          <tr>
            <td><s>A könyvet az asztalon teszem.</s></td>
            <td><b>A könyvet az asztalra teszem.</b></td>
            <td>стол — цель перемещения</td>
          </tr>
          <tr>
            <td><s>Leveszem a táskát a székre.</s></td>
            <td><b>Leveszem a táskát a székről.</b></td>
            <td>стул — источник</td>
          </tr>
          <tr>
            <td><s>Budapesten utazom.</s> в значении «еду в Будапешт»</td>
            <td><b>Budapestre utazom.</b></td>
            <td>нужна цель Hová?</td>
          </tr>
          <tr>
            <td><s>székrol</s></td>
            <td><b>székről</b></td>
            <td>нужны гармония и долгая ő</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка</h4>

        <ol class="tasklist">
          <li><b>asztal + Hová?</b></li>
          <li><b>asztal + Honnan?</b></li>
          <li><b>posta + Hová?</b></li>
          <li><b>posta + Honnan?</b></li>
          <li>Как сказать: «Я еду в Будапешт»?</li>
          <li>Как сказать: «Я приезжаю из Будапешта»?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Проверить ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></li>
            <li><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></li>
            <li><button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button></li>
            <li><button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button></li>
            <li><button class="speak-btn" data-speak-text="Budapestre utazom." data-speak-lang="hu-HU">Budapestre utazom.</button></li>
            <li><button class="speak-btn" data-speak-text="Budapestről jövök." data-speak-lang="hu-HU">Budapestről jövök.</button></li>
          </ol>
        </details>

        <div class="warn">
          На 11.4 закрепляем только <b>Hová?</b> и <b>Honnan?</b> семьи L11.
          Другие местные семьи сюда не добавляем.
        </div>
      `,
    },    {
      id: 5,
      eyebrow: 'УРОК 11 · 5/11 · КОНТЕКСТ',
      title: 'Не только «на поверхности»',
      subtitle: 'Стандартное употребление места важнее буквального перевода',
      type: 'info',
      note: 'Семья L11 используется и для реальной поверхности, и для ряда привычных мест, площадей и географических названий. Учи конкретное место вместе с его типичной тройкой Hol → Hová → Honnan.',
      warn: 'L10 и L11 нельзя свободно менять местами при одном и том же значении. Иногда разные семьи возможны у одного существительного, но тогда меняется само пространственное отношение.',
      task: 'Раздели примеры на три группы: буквальная поверхность, стандартная L11-модель и внутренняя L10-модель. Затем выполни мини-проверку без подсказки.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Буквальная поверхность: самая прозрачная модель</h4>

        <table class="conj">
          <tr><th>Ситуация</th><th>Венгерская форма</th><th>Почему</th></tr>
          <tr>
            <td>книга лежит на столе</td>
            <td><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button></td>
            <td>реальная поверхность → Hol?</td>
          </tr>
          <tr>
            <td>кладу сумку на стул</td>
            <td><button class="speak-btn" data-speak-text="A táskát a székre teszem." data-speak-lang="hu-HU">A táskát a székre teszem.</button></td>
            <td>поверхность как цель → Hová?</td>
          </tr>
          <tr>
            <td>снимаю книгу со стола</td>
            <td><button class="speak-btn" data-speak-text="Leveszem a könyvet az asztalról." data-speak-lang="hu-HU">Leveszem a könyvet az asztalról.</button></td>
            <td>поверхность как источник → Honnan?</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Но L11 не означает только физическое «на»</h4>

        <p>
          В обычной венгерской речи некоторые места используют эту семью как
          <b>стандартную модель</b>.
        </p>

        <table class="conj">
          <tr><th>Основа</th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr>
          <tr>
            <td><b>posta</b></td>
            <td><button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button></td>
            <td><button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button></td>
            <td><button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button></td>
          </tr>
          <tr>
            <td><b>piac</b></td>
            <td><button class="speak-btn" data-speak-text="piacon" data-speak-lang="hu-HU">piacon</button></td>
            <td><button class="speak-btn" data-speak-text="piacra" data-speak-lang="hu-HU">piacra</button></td>
            <td><button class="speak-btn" data-speak-text="piacról" data-speak-lang="hu-HU">piacról</button></td>
          </tr>
          <tr>
            <td><b>pályaudvar</b></td>
            <td><button class="speak-btn" data-speak-text="pályaudvaron" data-speak-lang="hu-HU">pályaudvaron</button></td>
            <td><button class="speak-btn" data-speak-text="pályaudvarra" data-speak-lang="hu-HU">pályaudvarra</button></td>
            <td><button class="speak-btn" data-speak-text="pályaudvarról" data-speak-lang="hu-HU">pályaudvarról</button></td>
          </tr>
        </table>

        <div class="note">
          Здесь не нужно придумывать физическую «поверхность».
          Просто учи стандартную венгерскую модель конкретного слова.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Площади и географические названия тоже часто дают L11</h4>

        <table class="conj">
          <tr><th>Место</th><th>Примеры</th></tr>
          <tr>
            <td><b>főtér</b></td>
            <td>
              <button class="speak-btn" data-speak-text="A főtéren találkozunk." data-speak-lang="hu-HU">A főtéren találkozunk.</button><br>
              <button class="speak-btn" data-speak-text="A főtérre megyek." data-speak-lang="hu-HU">A főtérre megyek.</button><br>
              <button class="speak-btn" data-speak-text="A főtérről jövök." data-speak-lang="hu-HU">A főtérről jövök.</button>
            </td>
          </tr>
          <tr>
            <td><b>Budapest</b></td>
            <td>
              <button class="speak-btn" data-speak-text="Budapesten vagyok." data-speak-lang="hu-HU">Budapesten vagyok.</button><br>
              <button class="speak-btn" data-speak-text="Budapestre megyek." data-speak-lang="hu-HU">Budapestre megyek.</button><br>
              <button class="speak-btn" data-speak-text="Budapestről jövök." data-speak-lang="hu-HU">Budapestről jövök.</button>
            </td>
          </tr>
          <tr>
            <td><b>Magyarország</b></td>
            <td>
              <button class="speak-btn" data-speak-text="Magyarországon élek." data-speak-lang="hu-HU">Magyarországon élek.</button><br>
              <button class="speak-btn" data-speak-text="Magyarországra utazom." data-speak-lang="hu-HU">Magyarországra utazom.</button><br>
              <button class="speak-btn" data-speak-text="Magyarországról jövök." data-speak-lang="hu-HU">Magyarországról jövök.</button>
            </td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Контраст с внутренней семьёй L10</h4>

        <table class="conj">
          <tr><th>Модель</th><th>Пример</th><th>Что запоминаем</th></tr>
          <tr>
            <td>внутренняя L10</td>
            <td><button class="speak-btn" data-speak-text="Anna a szobában van." data-speak-lang="hu-HU">Anna a szobában van.</button></td>
            <td><b>szoba → szobában</b></td>
          </tr>
          <tr>
            <td>внутренняя L10</td>
            <td><button class="speak-btn" data-speak-text="A könyvtárban tanulok." data-speak-lang="hu-HU">A könyvtárban tanulok.</button></td>
            <td><b>könyvtár → könyvtárban</b></td>
          </tr>
          <tr>
            <td>стандартная L11</td>
            <td><button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button></td>
            <td><b>posta → postán</b></td>
          </tr>
          <tr>
            <td>стандартная L11</td>
            <td><button class="speak-btn" data-speak-text="A piacon vásárolok." data-speak-lang="hu-HU">A piacon vásárolok.</button></td>
            <td><b>piac → piacon</b></td>
          </tr>
        </table>

        <div class="warn">
          Не делай правило «русское в = L10» или «русское на = L11».
          Такие соответствия иногда совпадают, но они не являются надёжным способом выбора.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Иногда одна основа допускает разные семьи — но смысл меняется</h4>

        <p>
          Сравни один простой предмет:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A könyv a dobozban van." data-speak-lang="hu-HU">A könyv a dobozban van.</button>
          — книга <b>внутри</b> коробки.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A könyv a dobozon van." data-speak-lang="hu-HU">A könyv a dobozon van.</button>
          — книга <b>на поверхности</b> коробки.
        </p>

        <div class="note">
          Значит, семьи не «конкурируют» случайно.
          Они кодируют разное пространственное отношение, если контекст действительно допускает оба варианта.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Как учить новые места</h4>

        <ol class="tasklist">
          <li>Не записывай только перевод существительного.</li>
          <li>Сразу добавь типичную <b>Hol?</b>-форму.</li>
          <li>Если место важно для маршрутов, добавь также <b>Hová?</b> и <b>Honnan?</b>.</li>
          <li>Запоминай короткой тройкой: <b>postán → postára → postáról</b>.</li>
          <li>Проверяй форму в настоящем предложении, а не только изолированно.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Ошибка мышления</th><th>Что делать вместо этого</th></tr>
          <tr>
            <td>«почта — здание, значит обязательно внутренняя семья»</td>
            <td>для обычного значения учить <b>postán / postára / postáról</b></td>
          </tr>
          <tr>
            <td>«в Будапеште» содержит русское «в», значит нужна внутренняя форма</td>
            <td>учить стандартное <b>Budapesten</b></td>
          </tr>
          <tr>
            <td>увидеть L10 и L11 у одного слова и решить, что они взаимозаменяемы</td>
            <td>сначала проверить, не изменилось ли пространственное отношение</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка по контексту</h4>

        <ol class="tasklist">
          <li>«Я на почте» — какая Hol?-форма?</li>
          <li>«Я иду на рынок» — какая Hová?-форма?</li>
          <li>«Я иду с вокзала» — какая Honnan?-форма?</li>
          <li>«Анна в комнате» — L10 или L11?</li>
          <li>Чем отличаются <b>dobozban</b> и <b>dobozon</b>?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Проверить ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button></li>
            <li><button class="speak-btn" data-speak-text="A piacra megyek." data-speak-lang="hu-HU">A piacra megyek.</button></li>
            <li><button class="speak-btn" data-speak-text="A pályaudvarról megyek." data-speak-lang="hu-HU">A pályaudvarról megyek.</button></li>
            <li><button class="speak-btn" data-speak-text="Anna a szobában van." data-speak-lang="hu-HU">Anna a szobában van.</button> — внутренняя семья L10.</li>
            <li><b>dobozban</b> = внутри коробки; <b>dobozon</b> = на её поверхности.</li>
          </ol>
        </details>

        <div class="warn">
          Граница урока сохраняется: здесь сравниваем только внутреннюю семью L10
          и поверхностно-конвенциональную семью L11.
        </div>
      `,
    },    {
      id: 6,
      eyebrow: 'УРОК 11 · 6/11 · КОНТРОЛИРУЕМАЯ ПРАКТИКА',
      title: 'Hely és mozgás a városban',
      subtitle: 'Сначала смысл → затем вопрос → семья → форма',
      type: 'practice',
      note: 'В этой практике специально смешаны внутренняя семья L10 и поверхностно-конвенциональная семья L11. Цель — не угадать окончание, а каждый раз пройти один и тот же алгоритм.',
      warn: 'Не используй правило «есть движение → Hová?». Движение может вести к цели или идти от источника, поэтому сначала определи смысл ситуации.',
      task: 'Реши 14 заданий. Перед каждым ответом мысленно назови четыре шага: ситуация → Hol/Hová/Honnan → семья L10/L11 → готовая форма. Порог прохождения: 11 из 14.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Алгоритм перед каждым ответом</h4>

        <ol class="tasklist">
          <li><b>Что происходит?</b> Я уже нахожусь где-то, иду к цели или двигаюсь от исходной точки?</li>
          <li><b>Какой вопрос?</b> Hol? / Hová? / Honnan?</li>
          <li><b>Какая семья?</b> Внутренняя L10 или поверхностно-конвенциональная L11?</li>
          <li><b>Какая готовая форма?</b> Только после первых трёх шагов выбирай окончание.</li>
        </ol>

        <div class="note">
          Коротко:
          <b>ситуация → вопрос → семья → форма</b>.
          Именно этот порядок проверяет упражнение.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Сначала различи пространственную роль</h4>

        <table class="conj">
          <tr><th>Сигнал ситуации</th><th>Вопрос</th><th>Что означает</th></tr>
          <tr><td>уже нахожусь / предмет уже лежит</td><td><b>Hol?</b></td><td>местонахождение</td></tr>
          <tr><td>иду / кладу <b>к цели</b></td><td><b>Hová?</b></td><td>конечная точка</td></tr>
          <tr><td>иду / беру / приезжаю <b>откуда-то</b></td><td><b>Honnan?</b></td><td>исходная точка</td></tr>
        </table>

        <div class="warn">
          Глагол движения сам по себе недостаточен.
          Например, «иду в сторону цели» и «иду от места» требуют разных вопросов.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Затем различи две уже знакомые семьи</h4>

        <table class="conj">
          <tr><th>Семья</th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr>
          <tr>
            <td><b>L10: внутренняя</b></td>
            <td><button class="speak-btn" data-speak-text="A szobában vagyok." data-speak-lang="hu-HU">A szobában vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="A szobába megyek." data-speak-lang="hu-HU">A szobába megyek.</button></td>
            <td><button class="speak-btn" data-speak-text="A szobából jövök." data-speak-lang="hu-HU">A szobából jövök.</button></td>
          </tr>
          <tr>
            <td><b>L11: поверхностно-конвенциональная</b></td>
            <td><button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button></td>
            <td><button class="speak-btn" data-speak-text="A postára megyek." data-speak-lang="hu-HU">A postára megyek.</button></td>
            <td><button class="speak-btn" data-speak-text="A postáról jövök." data-speak-lang="hu-HU">A postáról jövök.</button></td>
          </tr>
        </table>

        <p>
          Здесь примеры уже знакомы с предыдущих слайдов.
          Они нужны только как <b>ориентир для алгоритма</b>, а не как ответы на задания ниже.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Три ловушки, которые проверяет практика</h4>

        <table class="conj">
          <tr><th>Ловушка</th><th>Как себя проверить</th></tr>
          <tr>
            <td>увидеть глагол движения и автоматически выбрать Hová?</td>
            <td>спросить: движение <b>к</b> месту или <b>от</b> места?</td>
          </tr>
          <tr>
            <td>перевести русское «в / на» напрямую</td>
            <td>вспомнить стандартную семью конкретного венгерского слова</td>
          </tr>
          <tr>
            <td>сразу смотреть на окончание в вариантах ответа</td>
            <td>сначала сформулировать смысл без вариантов</td>
          </tr>
        </table>

        <div class="note">
          Если два варианта кажутся похожими, вернись не к окончанию, а к
          <b>пространственной роли</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как проходить задания без угадывания</h4>

        <ol class="tasklist">
          <li>Прочитай всю ситуацию до вариантов.</li>
          <li>Скажи себе только вопрос: <b>Hol?</b>, <b>Hová?</b> или <b>Honnan?</b>.</li>
          <li>Определи L10 или L11.</li>
          <li>Попробуй сам назвать форму.</li>
          <li>Только после этого сравни её с вариантами ответа.</li>
        </ol>

        <div class="warn">
          Если сначала читать варианты, упражнение превращается в распознавание знакомого окончания.
          Нам нужен навык выбора формы из смысла.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что считать настоящей ошибкой</h4>

        <table class="conj">
          <tr><th>Если ошибся...</th><th>Что исправлять</th></tr>
          <tr><td>в Hol / Hová / Honnan</td><td>понимание пространственной роли</td></tr>
          <tr><td>в L10 / L11</td><td>модель конкретного места</td></tr>
          <tr><td>только в гармоническом варианте</td><td>образование формы</td></tr>
        </table>

        <p>
          Так ошибка становится диагностикой:
          ты видишь <b>на каком именно шаге</b> сломался выбор.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Перед стартом</h4>

        <ul class="tick">
          <li>14 заданий.</li>
          <li>Порог: <b>11 правильных из 14</b>.</li>
          <li>Внутри есть и L10, и L11.</li>
          <li>Часть заданий проверяет вопрос, часть — конкретную форму.</li>
          <li>После ошибки объясни себе причину до перехода дальше.</li>
        </ul>

        <div class="note">
          Не стремись отвечать максимально быстро.
          На этом этапе важнее стабильный алгоритм, который затем станет автоматическим.
        </div>
      `,
      activities: [L11_CP_MEANING],
    },    {
      id: 7,
      eyebrow: 'УРОК 11 · 7/11 · ЧТЕНИЕ',
      title: 'Egy délután a városban',
      subtitle: 'Читаем маршрут по смыслу, а не переводим каждое слово',
      type: 'reading',
      note: 'Текст сохранён в диапазоне 150–180 слов, но упрощён до более подходящего A1-входа: основная грамматическая нагрузка — знакомые формы места, цели и источника. Новые слова здесь нужны для понимания сюжета, а не как новая грамматика.',
      warn: 'Не пытайся переводить каждое слово подряд. Для 7 вопросов важнее увидеть: где Дора находится, куда идёт, откуда выходит, где встречается и какой пункт идёт последним.',
      task: 'Прочитай текст в три прохода. Первый — только маршрут. Второй — подчеркни формы Hol/Hová/Honnan. Третий — ответь на 7 вопросов по смыслу. Порог: 6 из 7.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Первый проход: найди только маршрут</h4>

        <p>
          Не останавливайся на каждом незнакомом слове.
          Ищи последовательность мест:
        </p>

        <div class="note">
          <b>старт → первый пункт → следующий пункт → место встречи → финальный пункт</b>
        </div>

        <p>
          Полезные сигналы последовательности:
          <button class="speak-btn" data-speak-text="először" data-speak-lang="hu-HU">először</button>
          — сначала,
          <button class="speak-btn" data-speak-text="ezután" data-speak-lang="hu-HU">ezután</button>
          — после этого,
          <button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button>
          — наконец.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Второй проход: используй падежи как навигационные метки</h4>

        <table class="conj">
          <tr><th>Что видишь</th><th>Что спрашиваешь</th><th>Что это даёт</th></tr>
          <tr><td><b>-ban/-ben</b> или <b>-n/-on/-en/-ön</b></td><td><b>Hol?</b></td><td>текущее место</td></tr>
          <tr><td><b>-ba/-be</b> или <b>-ra/-re</b></td><td><b>Hová?</b></td><td>следующую цель</td></tr>
          <tr><td><b>-ból/-ből</b> или <b>-ról/-ről</b></td><td><b>Honnan?</b></td><td>исходную точку</td></tr>
        </table>

        <div class="note">
          На чтении суффикс — это не только грамматика.
          Он помогает восстановить <b>карту движения</b> героя.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Слова из текста, которые достаточно узнавать</h4>

        <table class="conj">
          <tr><th>Слово</th><th>Подсказка для чтения</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elindul" data-speak-lang="hu-HU">elindul</button></td>
            <td>отправляется, выходит</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="körülnéz" data-speak-lang="hu-HU">körülnéz</button></td>
            <td>осматривается</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="válaszol" data-speak-lang="hu-HU">válaszol</button></td>
            <td>отвечает</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="együtt" data-speak-lang="hu-HU">együtt</button></td>
            <td>вместе</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="marad" data-speak-lang="hu-HU">marad</button></td>
            <td>остаётся</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hazamegy" data-speak-lang="hu-HU">hazamegy</button></td>
            <td>идёт домой</td>
          </tr>
        </table>

        <div class="warn">
          Эти слова помогают понять рассказ, но на 11.7 мы не вводим через них новую грамматическую тему.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Третий проход: отвечай только из текста</h4>

        <ol class="tasklist">
          <li>Найди предложение, которое подтверждает ответ.</li>
          <li>Не выбирай вариант только потому, что в нём знакомое слово.</li>
          <li>Следи за временем и словами последовательности.</li>
          <li>Если два места встречаются рядом, проверь: одно — текущая точка или уже следующая цель?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что особенно проверяют 7 вопросов</h4>

        <table class="conj">
          <tr><th>Навык</th><th>Что искать</th></tr>
          <tr><td>начальная точка</td><td>где герой находится в начале</td></tr>
          <tr><td>первая цель</td><td>куда направляется сначала</td></tr>
          <tr><td>причина действия</td><td>что делает в первом месте</td></tr>
          <tr><td>местонахождение</td><td>где расположен нужный объект</td></tr>
          <tr><td>источник</td><td>откуда начинается следующий этап</td></tr>
          <tr><td>место встречи</td><td>где оказываются два человека</td></tr>
          <tr><td>финальный пункт</td><td>куда герой направляется в конце</td></tr>
        </table>

        <div class="note">
          Здесь нет подсказок к конкретным ответам — только карта того,
          <b>какую информацию</b> нужно извлечь.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Типичные ошибки при чтении</h4>

        <table class="conj">
          <tr><th>Ошибка</th><th>Что делать</th></tr>
          <tr><td>переводить каждое слово и терять маршрут</td><td>сначала собрать последовательность мест</td></tr>
          <tr><td>путать текущую точку и следующую цель</td><td>смотреть на Hol? и Hová?</td></tr>
          <tr><td>игнорировать Honnan?</td><td>отмечать, откуда начинается следующий этап</td></tr>
          <tr><td>угадывать по одному знакомому слову</td><td>найти целое предложение-доказательство</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Мини-проверка перед чтением</h4>

        <p>Определи только пространственную роль — это не ответы к рассказу.</p>

        <ol class="tasklist">
          <li><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button> — Hol, Hová или Honnan?</li>
          <li><button class="speak-btn" data-speak-text="A táskát a székre teszem." data-speak-lang="hu-HU">A táskát a székre teszem.</button> — Hol, Hová или Honnan?</li>
          <li><button class="speak-btn" data-speak-text="A piacról jövök." data-speak-lang="hu-HU">A piacról jövök.</button> — Hol, Hová или Honnan?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Проверить мини-ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>Hol?</b> — предмет уже находится на столе.</li>
            <li><b>Hová?</b> — стул является целью перемещения.</li>
            <li><b>Honnan?</b> — рынок является исходной точкой.</li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Теперь читай рассказ</h4>

        <ul class="tick">
          <li>150–180 слов.</li>
          <li>3 коротких абзаца.</li>
          <li>7 вопросов по смыслу.</li>
          <li>Порог: <b>6 из 7</b>.</li>
          <li>Ответ должен подтверждаться конкретным местом в тексте.</li>
        </ul>
      `,
      activities: [L11_READING],
    },    {
      id: 8,
      eyebrow: 'УРОК 11 · 8/11 · ВЗАИМОДЕЙСТВИЕ',
      title: 'Hol van a posta?',
      subtitle: 'Спросить дорогу, уточнить деталь и повторить маршрут',
      type: 'interaction',
      note: 'Ролевая игра теперь остаётся в A1-рамках: простые вопросы, настоящее время и знакомые формы L11. Императив и следующая местная семья здесь намеренно не вводятся.',
      warn: 'Не пытайся строить длинную фразу. В реальной ситуации короткий вопрос + уточнение + повтор маршрута надёжнее и естественнее для уровня A1.',
      task: 'Пройди 8 своих реплик без чтения model заранее. На каждой реплике решай одну коммуникативную задачу: спросить → уточнить → проверить → повторить → поблагодарить.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Цель диалога</h4>

        <p>
          Ты ищешь почту. Нужно:
        </p>

        <ol class="tasklist">
          <li>спросить, где она находится;</li>
          <li>понять направление к площади;</li>
          <li>проверить одну неправильно понятую деталь;</li>
          <li>повторить маршрут своими словами;</li>
          <li>завершить разговор вежливо.</li>
        </ol>

        <div class="note">
          Здесь оценивается не «идеальная длинная фраза», а способность
          <b>поддержать понятный короткий диалог</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Мини-карта маршрута</h4>

        <table class="conj">
          <tr><th>Старт</th><th>Шаг 1</th><th>Поворот</th><th>Цель</th></tr>
          <tr>
            <td>ты здесь</td>
            <td><button class="speak-btn" data-speak-text="egyenesen" data-speak-lang="hu-HU">egyenesen</button></td>
            <td><button class="speak-btn" data-speak-text="jobbra" data-speak-lang="hu-HU">jobbra</button></td>
            <td><button class="speak-btn" data-speak-text="a főtér" data-speak-lang="hu-HU">a főtér</button> → <button class="speak-btn" data-speak-text="a posta" data-speak-lang="hu-HU">a posta</button></td>
          </tr>
        </table>

        <p>
          Ещё одно направление, которое услышишь в диалоге:
          <button class="speak-btn" data-speak-text="balra" data-speak-lang="hu-HU">balra</button>
          — налево.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Полезные короткие вопросы</h4>

        <table class="conj">
          <tr><th>Задача</th><th>Фраза</th></tr>
          <tr>
            <td>спросить местонахождение</td>
            <td><button class="speak-btn" data-speak-text="Hol van a posta?" data-speak-lang="hu-HU">Hol van a posta?</button></td>
          </tr>
          <tr>
            <td>спросить направление</td>
            <td><button class="speak-btn" data-speak-text="Merre van a főtér?" data-speak-lang="hu-HU">Merre van a főtér?</button></td>
          </tr>
          <tr>
            <td>спросить, далеко ли</td>
            <td><button class="speak-btn" data-speak-text="Messze van a főtér?" data-speak-lang="hu-HU">Messze van a főtér?</button></td>
          </tr>
        </table>

        <div class="note">
          <b>Merre?</b> здесь учим как готовое разговорное слово «в какой стороне / куда по направлению?»,
          без новой грамматической темы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как проверить, что ты правильно понял</h4>

        <p>
          Не обязательно строить сложный вопрос.
          Можно повторить услышанную деталь с вопросительной интонацией:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A második utca után jobbra?" data-speak-lang="hu-HU">A második utca után jobbra?</button>
        </p>

        <p>
          Если собеседник исправляет:
          <button class="speak-btn" data-speak-text="Nem, az első utca után jobbra." data-speak-lang="hu-HU">Nem, az első utca után jobbra.</button>
        </p>

        <div class="note">
          Такая стратегия естественна для начинающего:
          <b>повтори ключевую информацию → получи подтверждение или исправление</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Повтори маршрут простыми предложениями</h4>

        <p>
          Используй уже знакомое настоящее время:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Egyenesen megyek, azután jobbra." data-speak-lang="hu-HU">Egyenesen megyek, azután jobbra.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A főtérre megyek. Ott van a posta." data-speak-lang="hu-HU">A főtérre megyek. Ott van a posta.</button>
        </p>

        <div class="note">
          Здесь одновременно тренируется L11:
          <b>főtérre</b> — цель движения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Ошибка</th><th>Что делать</th></tr>
          <tr><td>сразу пытаться сказать весь маршрут одним длинным предложением</td><td>разбить речь на 2–3 коротких шага</td></tr>
          <tr><td>не уточнять непонятую деталь</td><td>повторить её вопросом</td></tr>
          <tr><td>забыть конечную цель</td><td>в конце ещё раз назвать <b>főtérre</b> и <b>posta</b></td></tr>
          <tr><td>читать model до своей попытки</td><td>сначала сказать свой вариант, затем сравнить</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Как проходить RolePlay</h4>

        <ol class="tasklist">
          <li>Прочитай реплику партнёра.</li>
          <li>Закрой или не смотри на model.</li>
          <li>Скажи свою короткую реплику вслух.</li>
          <li>После этого сравни с model.</li>
          <li>Если смысл совпал, переходи дальше.</li>
        </ol>

        <div class="warn">
          RolePlay остаётся <b>selfPractice / PARTIAL</b>:
          он тренирует живую коммуникацию, но сам по себе не доказывает полное mastery.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Перед началом</h4>

        <ul class="tick">
          <li>17 реплик всего.</li>
          <li>8 твоих реплик.</li>
          <li>Одна намеренная ошибка в понимании маршрута.</li>
          <li>Никакого микрофона или автоматической оценки произношения.</li>
          <li>Главная цель: понятный маршрут и корректные формы L11.</li>
        </ul>
      `,
      activities: [L11_ROLEPLAY],
    },    {
      id: 9,
      eyebrow: 'УРОК 11 · 9/11 · ПИСЬМО',
      title: 'Merre megyek délután?',
      subtitle: '70–90 слов: маршрут из простых предложений',
      type: 'writing',
      note: 'Новой грамматики здесь не требуется. Настоящего времени, знакомых временных выражений и местных форм L10/L11 достаточно для хорошего текста.',
      warn: 'Не усложняй текст конструкциями следующих уровней. Если мысль можно выразить двумя короткими A1-предложениями, это здесь лучше.',
      task: 'Сначала нарисуй маршрут из 5–6 точек. Потом напиши 70–90 слов. Перед model отдельно проверь Hol/Hová/Honnan.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Сначала создай маршрут, а не текст</h4>
        <div class="note"><b>где я сейчас → первая цель → следующее место → ещё одна точка → финальный пункт</b></div>
        <p>Можно взять знакомые места:
          <button class="speak-btn" data-speak-text="munkahely" data-speak-lang="hu-HU">munkahely</button>,
          <button class="speak-btn" data-speak-text="posta" data-speak-lang="hu-HU">posta</button>,
          <button class="speak-btn" data-speak-text="piac" data-speak-lang="hu-HU">piac</button>,
          <button class="speak-btn" data-speak-text="pályaudvar" data-speak-lang="hu-HU">pályaudvar</button>,
          <button class="speak-btn" data-speak-text="könyvtár" data-speak-lang="hu-HU">könyvtár</button>.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Для каждой точки выбери роль</h4>
        <table class="conj">
          <tr><th>Смысл</th><th>Вопрос</th><th>Пример</th></tr>
          <tr><td>уже нахожусь</td><td><b>Hol?</b></td><td><button class="speak-btn" data-speak-text="a postán" data-speak-lang="hu-HU">a postán</button></td></tr>
          <tr><td>иду к цели</td><td><b>Hová?</b></td><td><button class="speak-btn" data-speak-text="a piacra" data-speak-lang="hu-HU">a piacra</button></td></tr>
          <tr><td>иду от места</td><td><b>Honnan?</b></td><td><button class="speak-btn" data-speak-text="a pályaudvarról" data-speak-lang="hu-HU">a pályaudvarról</button></td></tr>
        </table>
        <div class="note">Можно смешивать только уже изученные семьи: внутреннюю L10 и поверхностно-конвенциональную L11.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Пиши короткими предложениями</h4>
        <p><button class="speak-btn" data-speak-text="Először a postára megyek." data-speak-lang="hu-HU">Először a postára megyek.</button></p>
        <p><button class="speak-btn" data-speak-text="A postán levelet küldök." data-speak-lang="hu-HU">A postán levelet küldök.</button></p>
        <p><button class="speak-btn" data-speak-text="A postáról a piacra megyek." data-speak-lang="hu-HU">A postáról a piacra megyek.</button></p>
        <div class="note">Этой последовательностью уже тренируются <b>Hová? → Hol? → Honnan? + Hová?</b>.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Свяжи текст простыми словами</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Значение</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="először" data-speak-lang="hu-HU">először</button></td><td>сначала</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="ezután" data-speak-lang="hu-HU">ezután</button></td><td>после этого</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button></td><td>наконец</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что уже можно использовать</h4>
        <ul class="tick">
          <li>время: <b>három órakor, öt órakor, este</b>;</li>
          <li>настоящее время знакомых глаголов;</li>
          <li>простые прилагательные: <b>csendes, világos</b>;</li>
          <li>внутренние формы L10: <b>könyvtárba / könyvtárban / könyvtárból</b>;</li>
          <li>формы L11: <b>postára / postán / postáról</b>.</li>
        </ul>
        <div class="warn">Будущее время, -val/-vel, относительные придаточные и другие темы следующих уровней здесь не нужны.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr><td>есть 70–90 слов, но маршрута не видно</td><td>сначала выписать точки по порядку</td></tr>
          <tr><td>используется только Hol?</td><td>добавить цели Hová? и источники Honnan?</td></tr>
          <tr><td>слишком сложные предложения</td><td>разбить их на короткие A1-фразы</td></tr>
          <tr><td>непонятен финал</td><td>добавить <b>végül</b> и последнюю точку</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Самопроверка перед model</h4>
        <ol class="tasklist">
          <li>70–90 слов?</li>
          <li>Понятна начальная точка?</li>
          <li>Есть два или три промежуточных места?</li>
          <li>Есть несколько Hol / Hová / Honnan?</li>
          <li>Понятна последовательность?</li>
          <li>Каждое предложение укладывается в материал L1–L11?</li>
        </ol>
        <div class="note">Model — пример структуры, а не единственно правильный маршрут.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Что считается результатом</h4>
        <ul class="tick">
          <li>Связный текст 70–90 слов.</li>
          <li>Начало и конец маршрута понятны.</li>
          <li>Есть промежуточные точки.</li>
          <li>Формы L10/L11 соответствуют смыслу.</li>
          <li>Текст остаётся в простом A1-диапазоне.</li>
        </ul>
        <div class="warn">Writing остаётся <b>PARTIAL</b> до квалифицированной проверки.</div>
      `,
      activities: [L11_WRITING],
    },    {
      id: 10,
      eyebrow: 'УРОК 11 · 10/11 · УСТНАЯ САМОПРАКТИКА',
      title: 'Egy rövid útvonal',
      subtitle: '1–1.5 минуты: говорим без новой грамматики',
      type: 'speaking',
      note: 'Это необязательная устная самопрактика. Твоя задача — не говорить быстро, а удерживать понятный маршрут и правильно выбирать Hol / Hová / Honnan.',
      warn: 'Не переходи на будущее время или сложные конструкции. Для маршрута достаточно настоящего времени: megyek, vagyok, tanulok, jövök и уже знакомых местных форм.',
      task: 'Составь план из 4–6 точек, посмотри на него 20–30 секунд, затем говори 1–1.5 минуты без чтения полного текста. После первой попытки проверь себя по чек-листу и повтори ещё раз.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Сначала только маршрут</h4>

        <p>
          Перед речью не пиши полный текст. Запиши 4–6 коротких точек:
        </p>

        <div class="note">
          <b>старт → первая цель → текущее место → следующая цель → исходная точка → финал</b>
        </div>

        <p>
          Например, можно использовать знакомые слова:
          <button class="speak-btn" data-speak-text="munkahely" data-speak-lang="hu-HU">munkahely</button>,
          <button class="speak-btn" data-speak-text="posta" data-speak-lang="hu-HU">posta</button>,
          <button class="speak-btn" data-speak-text="piac" data-speak-lang="hu-HU">piac</button>,
          <button class="speak-btn" data-speak-text="pályaudvar" data-speak-lang="hu-HU">pályaudvar</button>,
          <button class="speak-btn" data-speak-text="könyvtár" data-speak-lang="hu-HU">könyvtár</button>.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Один пункт = одна простая мысль</h4>

        <p><button class="speak-btn" data-speak-text="Délután a munkahelyemen vagyok." data-speak-lang="hu-HU">Délután a munkahelyemen vagyok.</button></p>
        <p><button class="speak-btn" data-speak-text="Először a postára megyek." data-speak-lang="hu-HU">Először a postára megyek.</button></p>
        <p><button class="speak-btn" data-speak-text="A postán levelet küldök." data-speak-lang="hu-HU">A postán levelet küldök.</button></p>
        <p><button class="speak-btn" data-speak-text="A postáról a piacra megyek." data-speak-lang="hu-HU">A postáról a piacra megyek.</button></p>

        <div class="note">
          Эти четыре предложения уже дают:
          <b>Hol? → Hová? → Hol? → Honnan? + Hová?</b>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Связки для естественного потока</h4>

        <table class="conj">
          <tr><th>Слово</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="először" data-speak-lang="hu-HU">először</button></td>
            <td>начать первый шаг</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ezután" data-speak-lang="hu-HU">ezután</button></td>
            <td>перейти к следующему пункту</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button></td>
            <td>обозначить финальную точку</td>
          </tr>
        </table>

        <p>
          Не нужно соединять предложения сложными союзами:
          этих трёх связок достаточно для уровня A1.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Говори в настоящем времени</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Пример</th></tr>
          <tr><td>движение</td><td><button class="speak-btn" data-speak-text="megyek" data-speak-lang="hu-HU">megyek</button></td></tr>
          <tr><td>местонахождение</td><td><button class="speak-btn" data-speak-text="vagyok" data-speak-lang="hu-HU">vagyok</button></td></tr>
          <tr><td>занятие</td><td><button class="speak-btn" data-speak-text="tanulok" data-speak-lang="hu-HU">tanulok</button></td></tr>
          <tr><td>движение от точки</td><td><button class="speak-btn" data-speak-text="jövök" data-speak-lang="hu-HU">jövök</button></td></tr>
        </table>

        <div class="warn">
          Для этого задания не требуется будущее время:
          венгерское настоящее здесь полностью подходит для простого плана маршрута.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Две попытки лучше одной</h4>

        <ol class="tasklist">
          <li><b>Попытка 1:</b> говори по своей карте, не останавливаясь после каждой ошибки.</li>
          <li>Проверь, где потерялась последовательность или пространственная форма.</li>
          <li><b>Попытка 2:</b> повтори тот же маршрут чуть спокойнее и точнее.</li>
        </ol>

        <div class="note">
          Цель повторной попытки — не выучить текст наизусть,
          а сделать выбор форм более автоматическим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что слушать в собственной речи</h4>

        <ul class="tick">
          <li>Есть ли понятные <b>Hol?</b>, <b>Hová?</b> и <b>Honnan?</b>?</li>
          <li>Не перепутаны ли L10 и L11?</li>
          <li>Слышны ли долгие гласные в знакомых формах?</li>
          <li>Есть ли логичные переходы между точками?</li>
          <li>Остаются ли предложения короткими и понятными?</li>
        </ul>

        <p>
          Для примера сравни произношение:
          <button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button>
          и
          <button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button>.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr><td>читать заранее написанный полный текст</td><td>оставить только карту из ключевых слов</td></tr>
          <tr><td>останавливаться после каждой ошибки</td><td>сначала закончить мысль, потом анализировать</td></tr>
          <tr><td>использовать только Hová?</td><td>добавить текущее место и исходную точку</td></tr>
          <tr><td>усложнять грамматику</td><td>вернуться к короткому настоящему времени</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Финальный чек-лист</h4>

        <ol class="tasklist">
          <li>Я говорил примерно <b>1–1.5 минуты</b>?</li>
          <li>Есть начальная и конечная точки?</li>
          <li>Есть минимум две цели?</li>
          <li>Использованы Hol / Hová / Honnan?</li>
          <li>Я использовал только знакомую грамматику?</li>
          <li>Вторая попытка стала понятнее первой?</li>
        </ol>

        <div class="note">
          В L11 нет отдельного опубликованного Listening:
          эта устная практика не является Listening activity.
          Narration слайда только объясняет задание и не заменяет отдельное аудирование.
        </div>

        <div class="warn">
          Здесь нет записи ученика: упражнение остаётся текстовым,
          без микрофона, score и evidence.
        </div>
      `,
      optionalSpeaking: L11_SPEAKING,
    },    {
      id: 11,
      eyebrow: 'УРОК 11 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Пять целей L11: проверь систему, а не список окончаний',
      type: 'summary',
      note: 'Главный результат урока — не запомнить шесть суффиксов отдельно, а стабильно проходить цепочку: пространственный смысл → Hol/Hová/Honnan → семья места → гармонический вариант → готовая форма.',
      warn: 'Не считай открытую речь или письмо автоматически «освоенными» только потому, что ты выполнил задание. Грамматику можно проверить напрямую, а свободная продукция остаётся PARTIAL до качественной проверки.',
      task: 'Перед ExitCheck пройди 8 блоков ниже без подсказки. Если на каком-то шаге сомневаешься, вернись к соответствующему слайду и только потом выполняй итоговую проверку.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Главная система урока</h4>

        <table class="conj">
          <tr><th>Роль</th><th>Вопрос</th><th>L11</th><th>Пример</th></tr>
          <tr>
            <td>место</td>
            <td><b>Hol?</b></td>
            <td><b>-n / -on / -en / -ön</b></td>
            <td><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></td>
          </tr>
          <tr>
            <td>цель</td>
            <td><b>Hová?</b></td>
            <td><b>-ra / -re</b></td>
            <td><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></td>
          </tr>
          <tr>
            <td>источник</td>
            <td><b>Honnan?</b></td>
            <td><b>-ról / -ről</b></td>
            <td><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></td>
          </tr>
        </table>

        <div class="note">
          Сначала определяется <b>роль места</b>.
          Суффикс — только последний этап решения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Ты должен различать L10 и L11</h4>

        <table class="conj">
          <tr><th>Семья</th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr>
          <tr>
            <td><b>L10: внутренняя</b></td>
            <td><button class="speak-btn" data-speak-text="szobában" data-speak-lang="hu-HU">szobában</button></td>
            <td><button class="speak-btn" data-speak-text="szobába" data-speak-lang="hu-HU">szobába</button></td>
            <td><button class="speak-btn" data-speak-text="szobából" data-speak-lang="hu-HU">szobából</button></td>
          </tr>
          <tr>
            <td><b>L11: поверхностно-конвенциональная</b></td>
            <td><button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button></td>
            <td><button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button></td>
            <td><button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button></td>
          </tr>
        </table>

        <div class="warn">
          Русские «в / на / из / с» не выбирают венгерскую семью автоматически.
          Учи стандартное употребление конкретного места.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. L11 — не только буквальная поверхность</h4>

        <p>
          Буквальная поверхность:
          <button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button>
        </p>

        <p>
          Стандартное городское употребление:
          <button class="speak-btn" data-speak-text="A postán vagyok." data-speak-lang="hu-HU">A postán vagyok.</button>
        </p>

        <p>
          Географическая модель:
          <button class="speak-btn" data-speak-text="Budapesten lakom." data-speak-lang="hu-HU">Budapesten lakom.</button>
        </p>

        <div class="note">
          Поэтому новое место лучше учить сразу вместе с его типичной
          <b>Hol → Hová → Honnan</b> тройкой.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Быстрые орфографические проверки</h4>

        <table class="conj">
          <tr><th>Что проверить</th><th>Пример</th></tr>
          <tr>
            <td>гармонический вариант Hol?</td>
            <td><button class="speak-btn" data-speak-text="asztalon, széken, bőröndön" data-speak-lang="hu-HU">asztalon · széken · bőröndön</button></td>
          </tr>
          <tr>
            <td>долгие ó / ő в источнике</td>
            <td><button class="speak-btn" data-speak-text="asztalról, székről" data-speak-lang="hu-HU">asztalról · székről</button></td>
          </tr>
          <tr>
            <td>удлинение конечного a</td>
            <td><button class="speak-btn" data-speak-text="postán, postára, postáról" data-speak-lang="hu-HU">postán · postára · postáról</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Три тройки, которые стоит уметь восстановить без подсказки</h4>

        <table class="conj">
          <tr><th>Основа</th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr>
          <tr>
            <td><b>posta</b></td>
            <td><button class="speak-btn" data-speak-text="postán" data-speak-lang="hu-HU">postán</button></td>
            <td><button class="speak-btn" data-speak-text="postára" data-speak-lang="hu-HU">postára</button></td>
            <td><button class="speak-btn" data-speak-text="postáról" data-speak-lang="hu-HU">postáról</button></td>
          </tr>
          <tr>
            <td><b>Budapest</b></td>
            <td><button class="speak-btn" data-speak-text="Budapesten" data-speak-lang="hu-HU">Budapesten</button></td>
            <td><button class="speak-btn" data-speak-text="Budapestre" data-speak-lang="hu-HU">Budapestre</button></td>
            <td><button class="speak-btn" data-speak-text="Budapestről" data-speak-lang="hu-HU">Budapestről</button></td>
          </tr>
          <tr>
            <td><b>Magyarország</b></td>
            <td><button class="speak-btn" data-speak-text="Magyarországon" data-speak-lang="hu-HU">Magyarországon</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarországra" data-speak-lang="hu-HU">Magyarországra</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarországról" data-speak-lang="hu-HU">Magyarországról</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Пять целей урока</h4>

        <ol class="tasklist">
          <li>Различать поверхностно-конвенциональную семью по смыслу и употреблению.</li>
          <li>Строить правильную форму <b>Hol?</b>.</li>
          <li>Строить правильную форму <b>Hová?</b>.</li>
          <li>Строить правильную форму <b>Honnan?</b>.</li>
          <li>Использовать эти формы в маршруте, чтении, письме и коротком взаимодействии.</li>
        </ol>

        <div class="note">
          Первые четыре цели хорошо проверяются автоматическими заданиями.
          Пятая включает открытую продукцию и поэтому требует более осторожной оценки.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Как читать результат ExitCheck</h4>

        <table class="conj">
          <tr><th>Статус</th><th>Что он означает</th></tr>
          <tr>
            <td><b>DIRECT</b></td>
            <td>автоматически проверяемая грамматическая цель подтверждена достаточным количеством правильных ответов</td>
          </tr>
          <tr>
            <td><b>PARTIAL / review</b></td>
            <td>открытая продукция выполнена, но её точность нельзя честно считать полностью подтверждённой без качественной проверки</td>
          </tr>
        </table>

        <div class="warn">
          PARTIAL — не «провал». Это честная граница между
          <b>автоматически проверяемой грамматикой</b> и <b>свободной продукцией</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Финальная самопроверка перед завершением урока</h4>

        <ol class="tasklist">
          <li>Могу ли я без подсказки объяснить разницу Hol / Hová / Honnan?</li>
          <li>Могу ли я восстановить тройку <b>postán → postára → postáról</b>?</li>
          <li>Могу ли я восстановить <b>Budapesten → Budapestre → Budapestről</b>?</li>
          <li>Могу ли я отличить <b>szobában</b> от <b>postán</b> по типу места?</li>
          <li>Могу ли я описать короткий маршрут простыми A1-предложениями?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Если всё получилось</summary>
          <p class="mt-3">
            Выполни <b>ExitCheck</b>. После него можно переходить дальше.
            Следующий урок расширит систему местных отношений,
            но его суффиксы здесь заранее не вводятся.
          </p>
        </details>
      `,
      activities: [L11_EXIT_CHECK],
    },  ],
  vocabulary: [
    { id: 'l11_v1', hu: 'asztalon', ru: 'на столе', category: 'Местные падежи' },
    { id: 'l11_v2', hu: 'asztalra', ru: 'на стол', category: 'Местные падежи' },
    { id: 'l11_v3', hu: 'asztalról', ru: 'со стола', category: 'Местные падежи' },
    { id: 'l11_v4', hu: 'széken', ru: 'на стуле', category: 'Местные падежи' },
    { id: 'l11_v5', hu: 'székre', ru: 'на стул', category: 'Местные падежи' },
    { id: 'l11_v6', hu: 'székről', ru: 'со стула', category: 'Местные падежи' },
    { id: 'l11_v7', hu: 'Magyarországon', ru: 'в Венгрии', category: 'География' },
    { id: 'l11_v8', hu: 'Magyarországra', ru: 'в Венгрию', category: 'География' },
    { id: 'l11_v9', hu: 'Magyarországról', ru: 'из Венгрии', category: 'География' },
    { id: 'l11_v10', hu: 'Budapesten', ru: 'в Будапеште', category: 'Города' },
    { id: 'l11_v11', hu: 'Budapestre', ru: 'в Будапешт', category: 'Города' },
    { id: 'l11_v12', hu: 'Budapestről', ru: 'из Будапешта', category: 'Города' },
    { id: 'l11_v13', hu: 'posta', ru: 'почта', category: 'Лексика' },
    { id: 'l11_v14', hu: 'egyetem', ru: 'университет', category: 'Лексика' },
    { id: 'l11_v15', hu: 'piac', ru: 'рынок', category: 'Лексика' },
    { id: 'l11_v16', hu: 'pályaudvar', ru: 'вокзал', category: 'Лексика' },
  ],
  quiz: [
    {
      id: 1101,
      question: 'Книга уже лежит на столе. Какая форма завершает предложение «A könyv az ___ van»?',
      options: ['asztalon', 'asztalra', 'asztalról', 'asztalban'],
      correctIndex: 0,
      explanation: 'Здесь выражено место — Hol?: A könyv az asztalon van.',
    },
    {
      id: 1102,
      question: 'Как правильно сказать «Я кладу книгу на стул»?',
      options: ['A könyvet a székre teszem.', 'A könyvet a széken teszem.', 'A könyvet a székről teszem.', 'A könyvet a székbe teszem.'],
      correctIndex: 0,
      explanation: 'Стул является целью — Hová?: a székre. Здесь проверяется стандартное пространственное употребление.',
    },
    {
      id: 1103,
      question: 'Как выразить обычное пространственное значение «Я живу в Будапеште»?',
      options: ['Budapesten lakom.', 'Budapestre lakom.', 'Budapestről lakom.', 'Budapestben lakom.'],
      correctIndex: 0,
      explanation: 'Для обычного значения местонахождения в городе стандартная форма — Budapesten lakom; не *Budapestben lakom.',
    },
    {
      id: 1104,
      question: 'Петер направляется в Будапешт. Какое предложение выражает эту цель?',
      options: ['Péter Budapestre utazik.', 'Péter Budapesten utazik.', 'Péter Budapestről utazik.', 'Péter Budapestben utazik.'],
      correctIndex: 0,
      explanation: 'Будапешт — цель поездки, поэтому используется Hová?: Budapestre.',
    },
    {
      id: 1105,
      question: 'Анна снимает книгу со стула. Какое предложение точно передаёт эту ситуацию?',
      options: ['Anna leveszi a könyvet a székről.', 'Anna leveszi a könyvet a székre.', 'Anna leveszi a könyvet a széken.', 'Anna a szobában van.'],
      correctIndex: 0,
      explanation: 'Источник — стул, поэтому нужен Honnan?: a székről. Последний вариант грамматичен, но описывает другую ситуацию внутренней семьи.',
    },
    {
      id: 1106,
      question: 'Какая форма Magyarország отвечает на вопрос Honnan? в пространственном значении?',
      options: ['Magyarországon', 'Magyarországra', 'Magyarországról', 'Magyarországban'],
      correctIndex: 2,
      explanation: 'Пространственный источник выражается формой Magyarországról — из Венгрии.',
    },
  ],
  objectives: [
    { id: 'l11_distinguish-surface-cases', text: 'Различать значения «где?», «куда?» и «откуда?» для падежей поверхности.', skills: ['grammar'] },
    { id: 'l11_form-superessive', text: 'Образовывать падеж -n/-on/-en/-ön для ответа на вопрос «где?».', skills: ['grammar', 'writing'] },
    { id: 'l11_form-sublative', text: 'Образовывать падеж -ra/-re для ответа на вопрос «куда?».', skills: ['grammar', 'writing'] },
    { id: 'l11_form-delative', text: 'Образовывать падеж -ról/-ről для ответа на вопрос «откуда?».', skills: ['grammar', 'writing'] },
    { id: 'l11_use-surface-cases', text: 'Описывать расположение предметов на поверхности в устной и письменной речи.', skills: ['speaking', 'writing'] },
  ],
};
