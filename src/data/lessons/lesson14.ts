import type { Lesson, LessonActivity } from '../../types';

const ROUTINE_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l14-cp-routine-forms', title: 'A1 checkpoint: язык повседневного дня', passCount: 13,
  exercises: [
    { kind: 'fillGap', id: 'l14-forms-1', prompt: 'Reggel ___. (én, mosakodik)', accept: ['mosakodom'] },
    { kind: 'fillGap', id: 'l14-forms-2', prompt: 'Reggel gyorsan ___. (én, felöltözik)', accept: ['felöltözöm'] },
    { kind: 'fillGap', id: 'l14-forms-3', prompt: 'Este tizenegykor ___. (én, lefekszik)', accept: ['lefekszem'] },
    { kind: 'fillGap', id: 'l14-forms-4', prompt: 'Délben levest ___. (én, eszik)', accept: ['eszem'] },
    { kind: 'singleChoice', id: 'l14-forms-5', prompt: 'Типичное начало буднего дня.', options: ['Hétköznap hatkor kelek.', 'Este hatkor reggelizem.', 'Délben lefekszem.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-6', prompt: 'Как сказать время завтрака?', options: ['Hét órakor reggelizem.', 'Hét órában reggelizem.', 'Hét órára eszem tegnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-7', prompt: 'Куда ты идёшь к восьми?', options: ['Nyolcra megyek dolgozni.', 'Nyolcon vagyok dolgozni.', 'Nyolctól jövök dolgozni.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-8', prompt: 'Выбери естественное выражение частоты.', options: ['Általában busszal megyek.', 'Általában tegnap megyek.', 'Busszal általában voltam holnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-9', prompt: 'Что происходит после работы?', options: ['Munka után bevásárolok.', 'Munka előtt hazajöttem holnap.', 'Délben felébredek este.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-10', prompt: 'Как спросить о распорядке другого человека?', options: ['Mikor kelsz fel hétköznap?', 'Mikor keltem fel tegnap én?', 'Hová órakor vagy?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-11', prompt: 'Укажи знакомый объект в винительном падеже.', options: ['Reggel kávét iszom.', 'Reggel kávé van iszom.', 'Reggel kávéhoz jövök.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-12', prompt: 'Место учёбы и время.', options: ['Nyolckor az iskolában vagyok.', 'Nyolckor az iskolára vagyok.', 'Nyolckor az iskolából megyek be.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-13', prompt: 'Выбери логичную последовательность.', options: ['Felkelek, reggelizem, majd dolgozni megyek.', 'Lefekszem, felkelek, azután reggelizem este.', 'Vacsorázom, majd reggel felébredek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-14', prompt: 'Выбери корректное описание редкой привычки.', options: ['Ritkán nézek tévét este.', 'Ritkán tegnap néztem mindig.', 'Néha ritkán mindig tévét.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-15', prompt: 'Как противопоставить будни и выходные?', options: ['Hétköznap korán kelek, hétvégén viszont tovább alszom.', 'Hétköznap hétvégén mindig tegnap.', 'Hétvégéről korán kelek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l14-forms-16', prompt: 'Какой вопрос естественно задать собеседнику?', options: ['És te hogyan mész dolgozni?', 'És te hol dolgoztam?', 'És te mikor vagy tegnap?'], correctIndex: 0 },
  ],
};

const DAILY_ROUTINE_READING: LessonActivity = {
  kind: 'reading', id: 'l14-reading-daily-routine', title: 'Чтение: два разных будних дня',
  instructions: 'Сравни два распорядка: время, транспорт, работу/учёбу, частоту и вечерние занятия.', passCount: 6,
  content: { type: 'prose', title: 'Két különböző hétköznap', paragraphs: [
    'Anna hétköznap fél hétkor ébred fel. Gyorsan mosakodik, fogat mos és felöltözik, majd hét órakor reggelizik. Általában teát iszik és egy szendvicset eszik. Fél nyolckor busszal indul a munkahelyére. Az út húsz perc, ezért ritkán késik el. Nyolctól négyig egy irodában dolgozik. Délben a kollégáival ebédel, és ebéd után néha röviden sétál. Munka után gyakran bevásárol, kedden és csütörtökön pedig magyarórára megy. Este vacsorát készít, kicsit olvas, és fél tizenegykor lefekszik.',
    'Bence később kezdi a napot. Hét órakor kel fel, de otthon ritkán reggelizik. Csak egy kávét iszik, majd negyed nyolckor kerékpárral megy az egyetemre, ahol nyolc órától tanul. Délelőtt három órája van. Ebédet általában az egyetemi étteremben eszik a barátaival. Délután háromkor hazamegy, majd egy órát pihen. Hetente kétszer kosárlabdázik a barátaival, más napokon pedig a könyvtárban tanul. Este gyakran filmet néz vagy zenét hallgat, ezért csak éjfél körül fekszik le.',
    'Anna korábban kel és korábban fekszik le, mint Bence. Anna busszal jár, Bence pedig kerékpárral. Mindketten sokat dolgoznak vagy tanulnak, de másképp pihennek. Hétvégén egyiküknek sem kell korán kelnie: Anna a családjával találkozik, Bence pedig gyakran kirándul. Vasárnap este mindketten otthon készülnek a következő hétre, és időben összepakolják a táskájukat.',
  ] },
  questions: [
    { id: 'l14-reading-q1', question: 'Кто просыпается раньше?', options: ['Анна', 'Бенце', 'оба одновременно'], correctIndex: 0 },
    { id: 'l14-reading-q2', question: 'Что Анна обычно ест на завтрак?', options: ['бутерброд', 'суп', 'ничего'], correctIndex: 0 },
    { id: 'l14-reading-q3', question: 'Как Анна добирается на работу?', options: ['на велосипеде', 'на автобусе', 'пешком'], correctIndex: 1 },
    { id: 'l14-reading-q4', question: 'Где Бенце обычно обедает?', options: ['дома', 'в университетском ресторане', 'в офисе'], correctIndex: 1 },
    { id: 'l14-reading-q5', question: 'Что Бенце делает дважды в неделю?', options: ['ходит на венгерский', 'играет в баскетбол', 'делает покупки'], correctIndex: 1 },
    { id: 'l14-reading-q6', question: 'Кто ложится спать позже?', options: ['Анна', 'Бенце', 'не сказано'], correctIndex: 1 },
    { id: 'l14-reading-q7', question: 'Какое важное различие в транспорте?', options: ['Анна едет автобусом, Бенце — велосипедом', 'оба едут автобусом', 'Анна идёт пешком, Бенце едет поездом'], correctIndex: 0 },
    { id: 'l14-reading-q8', question: 'Какой вывод поддерживает текст?', options: ['их дни одинаковы', 'у обоих есть работа/учёба, но разный отдых', 'Бенце никогда не отдыхает'], correctIndex: 1 },
  ],
};

const ROUTINE_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l14-listening-routine', title: 'Аудирование: распорядок Анны',
  assetId: 'l14_listening_routine', audioStatus: 'published',
  transcript: 'Anna reggel fél hétkor felébred. Hét órakor reggelizik. Nyolckor dolgozni megy. Délben ebédel. Este hatkor hazamegy, és tizenegykor lefekszik.',
  passCount: 4,
  questions: [
    { id: 'l14-listening-q1', question: 'Когда Анна просыпается?', options: ['fél hétkor', 'hét órakor', 'nyolckor'], correctIndex: 0 },
    { id: 'l14-listening-q2', question: 'Что она делает в семь?', options: ['reggelizik', 'ebédel', 'hazamegy'], correctIndex: 0 },
    { id: 'l14-listening-q3', question: 'Куда она идёт в восемь?', options: ['haza', 'dolgozni', 'aludni'], correctIndex: 1 },
    { id: 'l14-listening-q4', question: 'Когда она возвращается домой?', options: ['délben', 'este hatkor', 'tizenegykor'], correctIndex: 1 },
    { id: 'l14-listening-q5', question: 'Какое действие завершает распорядок?', options: ['felébred', 'reggelizik', 'lefekszik'], correctIndex: 2 },
  ],
};

const ROUTINE_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l14-roleplay-routine-comparison', title: 'Ролевая игра: сравниваем распорядок', partnerLabel: 'Új kolléga', completionMessage: 'Összehasonlítottátok a napirendeteket.', startTurnId: 'l14-rp-s1',
  turns: [
    { id: 'l14-rp-s1', speaker: 'waiter', prompt: 'Szia! Mikor kelsz fel hétköznap?', next: 'l14-rp-l1' },
    { id: 'l14-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови время подъёма и задай встречный вопрос.', model: 'Hétköznap fél hétkor kelek fel. És te mikor kelsz?', next: 'l14-rp-s2' },
    { id: 'l14-rp-s2', speaker: 'waiter', prompt: 'Én hétkor kelek. Mit reggelizel általában?', next: 'l14-rp-l2' },
    { id: 'l14-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Расскажи о завтраке.', model: 'Általában szendvicset eszem és teát iszom.', next: 'l14-rp-s3' },
    { id: 'l14-rp-s3', speaker: 'waiter', prompt: 'Értem. Mikor kezdődik a munkád vagy az iskolád?', next: 'l14-rp-l3' },
    { id: 'l14-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови время начала и транспорт.', model: 'Nyolckor kezdek, és busszal megyek dolgozni.', next: 'l14-rp-s4' },
    { id: 'l14-rp-s4', speaker: 'waiter', prompt: 'Én kerékpárral járok. És hol ebédelsz?', next: 'l14-rp-l4' },
    { id: 'l14-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови место и время обеда, затем задай второй встречный вопрос.', model: 'Délben a kollégáimmal ebédelek. Te hol ebédelsz?', next: 'l14-rp-s5' },
    { id: 'l14-rp-s5', speaker: 'waiter', prompt: 'Általában az egyetemen ebédelek. Mit csinálsz munka után?', next: 'l14-rp-l5' },
    { id: 'l14-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Опиши действие после работы.', model: 'Munka után gyakran bevásárolok, aztán hazamegyek.', next: 'l14-rp-s6' },
    { id: 'l14-rp-s6', speaker: 'waiter', prompt: 'Értem. És mit csinálsz este?', next: 'l14-rp-l6' },
    { id: 'l14-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Опиши вечер и частоту.', model: 'Este általában olvasok, de néha filmet nézek.', next: 'l14-rp-s7' },
    { id: 'l14-rp-s7', speaker: 'waiter', prompt: 'Hétvégén is ilyen a napod, vagy más?', next: 'l14-rp-l7' },
    { id: 'l14-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови отличие выходного дня.', model: 'Nem, hétvégén tovább alszom, ezért később reggelizem.', next: 'l14-rp-s8' },
    { id: 'l14-rp-s8', speaker: 'waiter', prompt: 'Értem. Mikor fekszel le hétköznap?', next: 'l14-rp-l8' },
    { id: 'l14-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови время и вежливо заверши.', model: 'Általában fél tizenegykor fekszem le. Jó volt összehasonlítani a napunkat!', next: 'l14-rp-s9' },
    { id: 'l14-rp-s9', speaker: 'waiter', prompt: 'Szerintem is. Szia!' },
  ],
};

const DAILY_ROUTINE_WRITING: LessonActivity = {
  kind: 'writing', id: 'l14-writing-daily-routine', title: 'Письмо: мой распорядок дня',
  prompt: 'Напиши 90–110 слов о вымышленном обычном буднем дне. Укажи подъём, завтрак, время начала, дорогу, работу/учёбу, обед, вторую половину дня, вечер, выражения частоты и одно отличие от выходных.',
  modelAnswer: ['Hétköznap általában fél hétkor ébredek fel. Felkelek, mosakodom és gyorsan felöltözöm. Hét órakor reggelizem: szendvicset eszem és teát iszom. Fél nyolckor busszal indulok a munkahelyemre, mert nyolckor kezdek dolgozni. Az út körülbelül húsz perc, és ritkán kések el. Délben a kollégáimmal ebédelek. Délután négyig dolgozom, azután gyakran bevásárolok. Este otthon vacsorát készítek, majd magyarul tanulok vagy egy rövid könyvet is olvasok. Ritkán nézek tévét, de néha zenét hallgatok a szobámban. Tizenegy óra előtt lefekszem, mert reggel korán kelek. Hétvégén viszont tovább alszom, később reggelizem, és több időt töltök a barátaimmal.'],
  rubric: ['90–110 слов', 'полный будний распорядок', 'время и транспорт', 'выражения частоты', 'контраст с выходным', 'понятная последовательность'],
};

const DAILY_ROUTINE_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори около 2 минут о типичном буднем дне и сравни его с выходным. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Назови время, действия, транспорт, частоту, вечер и одно отличие выходного дня.',
  rubric: ['будний распорядок', 'время и частота', 'вечер', 'контраст с выходным'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l14-exit-check', title: 'Проверка целей урока 14', checks: [
    { objectiveId: 'l14_describe-routine', activityId: 'l14-reading-daily-routine', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l14-writing-daily-routine', evidenceKind: 'writing' }] },
    { objectiveId: 'l14_form-reflexive', activityId: 'l14-cp-routine-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l14_use-reflexive', activityId: 'l14-cp-routine-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l14_tell-routine-time', activityId: 'l14-listening-routine', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l14-roleplay-routine-comparison', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_14: Lesson = {
  id: 14, number: 14, level: 'A1',
  title: 'Урок 14 · Napi rutin',
  subtitle: 'Распорядок дня, частые -ik-глаголы и время',
  description: 'Интегрированный checkpoint конца A1: распорядок дня, время, частота, знакомая грамматика, Reading, Listening и открытая продукция без автоматической сертификации.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 14 · 1/11 · A1 CHECKPOINT',
      title: 'Napi rutin',
      subtitle: 'Не ищем «возвратность» по -ik: сначала значение глагола',
      type: 'grammar',
      note: 'L14 — интегрированный checkpoint конца A1. Здесь мы собираем знакомые действия дня, время, частоту и уже изученные формы в один связный распорядок.',
      warn: 'Форма на -ik в словарной / 3-м лице не означает автоматически «действие на себя». Смысл нужно знать у конкретного глагола.',
      task: 'Сравни три группы: обычные -ik-глаголы, действия «с собой» по смыслу и формы én. Не выводи новую форму только из окончания.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что означает -ik — и чего НЕ означает</h4>

        <p>
          В словарной форме многих глаголов 3-е лицо заканчивается на <b>-ik</b>.
          Это признак знакомого класса форм, но <b>не метка значения «-ся»</b>.
        </p>

        <table class="conj">
          <tr><th>Глагол</th><th>Значение</th><th>Почему это важно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="reggelizik" data-speak-lang="hu-HU">reggelizik</button></td>
            <td>завтракать</td>
            <td>не возвратное действие</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vacsorázik" data-speak-lang="hu-HU">vacsorázik</button></td>
            <td>ужинать</td>
            <td>не возвратное действие</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="eszik" data-speak-lang="hu-HU">eszik</button></td>
            <td>есть</td>
            <td>не возвратное действие</td>
          </tr>
        </table>

        <div class="note">
          <b>reggelizik, vacsorázik, eszik — -ik-глаголы, но не возвратные действия.</b>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. А эти глаголы по смыслу похожи на русские формы с «-ся»</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU">mosakodik</button></td>
            <td>умываться / мыться</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fésülködik" data-speak-lang="hu-HU">fésülködik</button></td>
            <td>причёсываться</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felöltözik" data-speak-lang="hu-HU">felöltözik</button></td>
            <td>одеваться / одеться</td>
          </tr>
        </table>

        <div class="warn">
          Совпадение с русским «-ся» — это подсказка по значению, а не универсальное грамматическое правило.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Форму én учим у конкретного глагола</h4>

        <table class="conj">
          <tr><th>3-е лицо / словарная опора</th><th>én</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU">mosakodik</button></td>
            <td><button class="speak-btn" data-speak-text="mosakodom" data-speak-lang="hu-HU">mosakodom</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felöltözik" data-speak-lang="hu-HU">felöltözik</button></td>
            <td><button class="speak-btn" data-speak-text="felöltözöm" data-speak-lang="hu-HU">felöltözöm</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="eszik" data-speak-lang="hu-HU">eszik</button></td>
            <td><button class="speak-btn" data-speak-text="eszem" data-speak-lang="hu-HU">eszem</button></td>
          </tr>
        </table>

        <div class="note">
          Это знакомые стандартные формы курса. На слайде 14.3 мы встроим их во время и частоту.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Не создавай новые глаголы по внешнему виду</h4>

        <div class="warn">
          <b>Окончания -kodik/-kedik/-ködik не являются формулой создания новых глаголов.</b>
          Запоминай слово вместе с его значением и употреблением.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Мини-контраст в распорядке</h4>

        <p>
          <button class="speak-btn" data-speak-text="Reggel mosakodom." data-speak-lang="hu-HU">Reggel mosakodom.</button>
          — утром я умываюсь.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hét órakor reggelizem." data-speak-lang="hu-HU">Hét órakor reggelizem.</button>
          — в семь я завтракаю.
        </p>

        <div class="note">
          Оба предложения относятся к распорядку, но значение глаголов разное.
          Не классифицируй их только по последним буквам.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что именно проверяет L14</h4>

        <ul class="tick">
          <li>понимаешь ли знакомые действия дня;</li>
          <li>можешь ли связать их со временем и частотой;</li>
          <li>узнаёшь ли изученные формы в Reading и Listening;</li>
          <li>можешь ли описать простой распорядок.</li>
        </ul>

        <div class="warn">
          L14 проверяет интеграцию знакомого A1-языка и не выдаёт CEFR-сертификат.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка</summary>
          <ol class="tasklist mt-3">
            <li><b>eszik</b> — это обязательно «возвратный» глагол? → Нет.</li>
            <li><b>mosakodik</b> по смыслу похоже на русское «умываться»? → Да.</li>
            <li>Можно ли механически построить новый глагол через <b>-kodik</b>? → Нет.</li>
          </ol>
        </details>
      `,
    },    {
      id: 2,
      eyebrow: 'УРОК 14 · 2/11 · СЛОВАРЬ',
      title: 'Napi cselekvések',
      subtitle: 'Не список слов, а маршрут дня: проснуться → жить день → лечь спать',
      type: 'vocabulary',
      note: 'Учи действия блоками по времени суток и сразу связывай их в короткую последовательность. Часть слов уже знакома — L14 проверяет активное использование.',
      warn: 'Не смешивай felébred и felkel, а также lefekszik и elalszik: это разные этапы действия.',
      task: 'Пройди день слева направо: утро → день → вечер. После каждого блока закрой перевод и попробуй восстановить венгерские глаголы по смыслу.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Проснуться ≠ встать</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felébred" data-speak-lang="hu-HU">felébred</button></td>
            <td>проснуться, стать бодрствующим</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felkel" data-speak-lang="hu-HU">felkel</button></td>
            <td>встать, подняться с постели</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Reggel felébredek, aztán felkelek." data-speak-lang="hu-HU">Reggel felébredek, aztán felkelek.</button>
        </p>

        <div class="note">
          Сначала можно проснуться, а уже потом встать. Поэтому эти глаголы не взаимозаменяемы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Утренний уход за собой</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU">mosakodik</button></td>
            <td>умываться / мыться</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fésülködik" data-speak-lang="hu-HU">fésülködik</button></td>
            <td>причёсываться</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felöltözik" data-speak-lang="hu-HU">felöltözik</button></td>
            <td>одеваться / одеться</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fogat mos" data-speak-lang="hu-HU">fogat mos</button></td>
            <td>чистить зубы</td>
          </tr>
        </table>

        <div class="note">
          В <b>fogat mos</b> форма <b>fogat</b> — знакомый винительный падеж. Здесь просто запоминаем естественное выражение целиком.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Еда и напитки</h4>

        <table class="conj">
          <tr><td><button class="speak-btn" data-speak-text="reggelizik" data-speak-lang="hu-HU">reggelizik</button></td><td>завтракать</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="eszik" data-speak-lang="hu-HU">eszik</button></td><td>есть</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="iszik" data-speak-lang="hu-HU">iszik</button></td><td>пить</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="ebédel" data-speak-lang="hu-HU">ebédel</button></td><td>обедать</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="vacsorázik" data-speak-lang="hu-HU">vacsorázik</button></td><td>ужинать</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. День: работа, учёба, люди</h4>

        <table class="conj">
          <tr><td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td><td>работать</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td><td>учиться / изучать</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="találkozik" data-speak-lang="hu-HU">találkozik</button></td><td>встречаться</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="hazamegy" data-speak-lang="hu-HU">hazamegy</button></td><td>идти / ехать домой</td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Munka után hazamegyek." data-speak-lang="hu-HU">Munka után hazamegyek.</button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Лечь спать ≠ заснуть</h4>

        <table class="conj">
          <tr>
            <td><button class="speak-btn" data-speak-text="lefekszik" data-speak-lang="hu-HU">lefekszik</button></td>
            <td>ложиться / лечь спать</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elalszik" data-speak-lang="hu-HU">elalszik</button></td>
            <td>засыпать / заснуть</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Tizenegykor lefekszem, és hamar elalszom." data-speak-lang="hu-HU">Tizenegykor lefekszem, és hamar elalszom.</button>
        </p>

        <div class="note">
          <b>lefekszik</b> описывает начало отдыха в постели, <b>elalszik</b> — момент засыпания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Собери мини-распорядок</h4>

        <div class="note">
          <button class="speak-btn" data-speak-text="Felkelek." data-speak-lang="hu-HU">Felkelek.</button>
          →
          <button class="speak-btn" data-speak-text="Mosakodom." data-speak-lang="hu-HU">Mosakodom.</button>
          →
          <button class="speak-btn" data-speak-text="Reggelizem." data-speak-lang="hu-HU">Reggelizem.</button>
          →
          <button class="speak-btn" data-speak-text="Dolgozni megyek." data-speak-lang="hu-HU">Dolgozni megyek.</button>
          →
          <button class="speak-btn" data-speak-text="Hazamegyek." data-speak-lang="hu-HU">Hazamegyek.</button>
          →
          <button class="speak-btn" data-speak-text="Lefekszem." data-speak-lang="hu-HU">Lefekszem.</button>
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка</summary>
          <ol class="tasklist mt-3">
            <li>Что раньше: <b>felébred</b> или <b>felkel</b>? → Обычно felébred.</li>
            <li>Что означает <b>hazamegy</b>? → Идти / ехать домой.</li>
            <li><b>lefekszik</b> и <b>elalszik</b> — одно и то же? → Нет.</li>
          </ol>
        </details>
      `,
    },    {
      id: 3,
      eyebrow: 'УРОК 14 · 3/11 · ФОРМЫ И ВРЕМЯ',
      title: 'Mikor és milyen gyakran?',
      subtitle: 'Точное время, цель по времени и частота — три разных сигнала',
      type: 'grammar',
      note: 'На этом слайде не вводится вся система выражения времени. Нужны только знакомые A1-модели, чтобы связно описать обычный день.',
      warn: 'Не путай -kor и -ra/-re: hétkor означает «в семь», а hétre — «к семи / на семь» в подходящем контексте.',
      task: 'Для каждого примера сначала найди сигнал: точное время, целевое время, часть дня, после события или частота. Затем прочитай венгерскую фразу вслух.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Стандартные формы курса</h4>

        <table class="conj">
          <tr><th>Опора</th><th>én</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU">mosakodik</button></td>
            <td><button class="speak-btn" data-speak-text="mosakodom" data-speak-lang="hu-HU">mosakodom</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felöltözik" data-speak-lang="hu-HU">felöltözik</button></td>
            <td><button class="speak-btn" data-speak-text="felöltözöm" data-speak-lang="hu-HU">felöltözöm</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lefekszik" data-speak-lang="hu-HU">lefekszik</button></td>
            <td><button class="speak-btn" data-speak-text="lefekszem" data-speak-lang="hu-HU">lefekszem</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="eszik" data-speak-lang="hu-HU">eszik</button></td>
            <td><button class="speak-btn" data-speak-text="eszem" data-speak-lang="hu-HU">eszem</button></td>
          </tr>
        </table>

        <div class="note">
          Это стандартные формы, используемые в курсе.
          <b>Разговорные варианты некоторых -ik-глаголов не объявляются «невозможным венгерским»</b>,
          но в заданиях держимся одной учебной нормы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. -kor = когда именно происходит действие</h4>

        <p>
          <button class="speak-btn" data-speak-text="Hét órakor reggelizem." data-speak-lang="hu-HU">Hét órakor reggelizem.</button>
          — я завтракаю в семь часов.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Nyolckor kezdek dolgozni." data-speak-lang="hu-HU">Nyolckor kezdek dolgozni.</button>
          — я начинаю работать в восемь.
        </p>

        <div class="note">
          Вопрос-подсказка: <b>Mikor?</b> — когда?
          Для точного времени в этих моделях используем <b>-kor</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. -ra/-re = к какому времени направлено действие</h4>

        <p>
          <button class="speak-btn" data-speak-text="Nyolcra megyek dolgozni." data-speak-lang="hu-HU">Nyolcra megyek dolgozni.</button>
          — я иду на работу к восьми.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Fél kilencre megyek az iskolába." data-speak-lang="hu-HU">Fél kilencre megyek az iskolába.</button>
          — я иду в школу к половине девятого.
        </p>

        <div class="warn">
          <b>Nyolckor megyek</b> отвечает на «когда я иду?»;
          <b>Nyolcra megyek</b> задаёт целевое время — «к восьми».
          Это не одна и та же модель.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Части дня и последовательность</h4>

        <table class="conj">
          <tr><td><button class="speak-btn" data-speak-text="reggel" data-speak-lang="hu-HU">reggel</button></td><td>утром</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="délben" data-speak-lang="hu-HU">délben</button></td><td>в полдень</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="este" data-speak-lang="hu-HU">este</button></td><td>вечером</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="munka után" data-speak-lang="hu-HU">munka után</button></td><td>после работы</td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Délben ebédelek." data-speak-lang="hu-HU">Délben ebédelek.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Munka után hazamegyek." data-speak-lang="hu-HU">Munka után hazamegyek.</button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как часто?</h4>

        <table class="conj">
          <tr><td><button class="speak-btn" data-speak-text="általában" data-speak-lang="hu-HU">általában</button></td><td>обычно</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="gyakran" data-speak-lang="hu-HU">gyakran</button></td><td>часто</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="néha" data-speak-lang="hu-HU">néha</button></td><td>иногда</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="ritkán" data-speak-lang="hu-HU">ritkán</button></td><td>редко</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="hétvégén" data-speak-lang="hu-HU">hétvégén</button></td><td>по выходным / на выходных</td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Általában busszal megyek dolgozni." data-speak-lang="hu-HU">Általában busszal megyek dolgozni.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ritkán nézek tévét este." data-speak-lang="hu-HU">Ritkán nézek tévét este.</button>
        </p>

        <div class="note">
          На A1 достаточно узнавать и использовать эти нейтральные модели.
          Подробную теорию фокуса и вариантов порядка слов здесь не вводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Связный будний день</h4>

        <div class="note">
          <button class="speak-btn" data-speak-text="Reggel fél hétkor felkelek." data-speak-lang="hu-HU">Reggel fél hétkor felkelek.</button><br/>
          <button class="speak-btn" data-speak-text="Hét órakor reggelizem." data-speak-lang="hu-HU">Hét órakor reggelizem.</button><br/>
          <button class="speak-btn" data-speak-text="Nyolcra megyek dolgozni." data-speak-lang="hu-HU">Nyolcra megyek dolgozni.</button><br/>
          <button class="speak-btn" data-speak-text="Délben ebédelek." data-speak-lang="hu-HU">Délben ebédelek.</button><br/>
          <button class="speak-btn" data-speak-text="Munka után általában hazamegyek." data-speak-lang="hu-HU">Munka után általában hazamegyek.</button>
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка</summary>
          <ol class="tasklist mt-3">
            <li><b>hétkor</b> — точное время или цель по времени? → Точное время.</li>
            <li><b>nyolcra</b> — точное время или цель по времени? → Цель «к восьми».</li>
            <li><b>gyakran</b> отвечает на какой вопрос? → Как часто?</li>
          </ol>
        </details>
      `,
    },    {
      id: 4,
      eyebrow: 'УРОК 14 · 4/11 · LANGUAGE USE',
      title: 'Integrált A1 gyakorlat',
      subtitle: '16 контекстов: сначала распознай сигнал, потом выбирай форму',
      type: 'practice',
      note: 'Порог — 13 из 16. Это интеграция знакомого A1: действия дня, время, частота, объект, место, последовательность и вопросы.',
      warn: 'Не решай всё как задачу на -ik. В большинстве пунктов важнее увидеть контекст: кто действует, когда, куда, где, как часто или что является объектом.',
      task: 'Проход 1: реши без подсказок. Проход 2: у каждой ошибки назови тип сигнала. Проход 3: повтори только ошибочные пункты.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Алгоритм перед каждым ответом</h4>

        <ol class="tasklist">
          <li><b>Кто?</b> — én, te или другой человек?</li>
          <li><b>Что проверяется?</b> — действие, время, частота, объект, место, последовательность или вопрос?</li>
          <li><b>Какой сигнал уже есть?</b> — например, <i>-kor</i>, <i>-ra/-re</i>, <i>-t</i>, <i>-ban/-ben</i>.</li>
          <li><b>Только затем</b> выбирай форму или вариант.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Если видишь точное время</h4>

        <p>
          Спроси себя: действие происходит <b>когда именно</b>?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hatkor kelek fel." data-speak-lang="hu-HU">Hatkor kelek fel.</button>
        </p>

        <div class="note">
          Для знакомой модели точного времени ищи <b>-kor</b>.
          Не подменяй её формой места.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Если есть цель «к какому времени»</h4>

        <p>
          <button class="speak-btn" data-speak-text="Fél nyolcra megyek az iskolába." data-speak-lang="hu-HU">Fél nyolcra megyek az iskolába.</button>
        </p>

        <div class="note">
          Здесь время — цель движения или прибытия, поэтому модель отличается от <b>-kor</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Если проверяется частота</h4>

        <p>
          <button class="speak-btn" data-speak-text="Gyakran gyalog megyek." data-speak-lang="hu-HU">Gyakran gyalog megyek.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Néha este olvasok." data-speak-lang="hu-HU">Néha este olvasok.</button>
        </p>

        <div class="note">
          Сначала найди слово частоты, затем проверь, логичен ли весь смысл предложения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Объект и место — это разные вопросы</h4>

        <table class="conj">
          <tr><th>Что?</th><th>Где?</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Teát iszom." data-speak-lang="hu-HU">Teát iszom.</button></td>
            <td><button class="speak-btn" data-speak-text="Az irodában dolgozom." data-speak-lang="hu-HU">Az irodában dolgozom.</button></td>
          </tr>
        </table>

        <div class="note">
          <b>teát</b> — объект с уже знакомым винительным <b>-t</b>;
          <b>irodában</b> — место «в офисе» с <b>-ban/-ben</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Проверь логику последовательности</h4>

        <p>
          <button class="speak-btn" data-speak-text="Felkelek, aztán reggelizem." data-speak-lang="hu-HU">Felkelek, aztán reggelizem.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Munka után hazamegyek." data-speak-lang="hu-HU">Munka után hazamegyek.</button>
        </p>

        <div class="warn">
          Грамматически знакомые слова ещё не гарантируют логичное предложение.
          Сверяй порядок событий: утро → день → после работы → вечер.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. В вопросе сначала найди, какую информацию хотят получить</h4>

        <p>
          <button class="speak-btn" data-speak-text="Mikor kezdesz dolgozni?" data-speak-lang="hu-HU">Mikor kezdesz dolgozni?</button>
          — когда?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hogyan mész dolgozni?" data-speak-lang="hu-HU">Hogyan mész dolgozni?</button>
          — как / каким способом?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hol ebédelsz?" data-speak-lang="hu-HU">Hol ebédelsz?</button>
          — где?
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Перед отправкой ответа</h4>

        <ul class="tick">
          <li>форма подходит нужному лицу;</li>
          <li>время соответствует смыслу;</li>
          <li>частота не противоречит другим словам;</li>
          <li>объект не перепутан с местом;</li>
          <li>предложение логично как часть обычного дня.</li>
        </ul>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка сигналов — без ответов к упражнению</summary>
          <ul class="tick mt-3">
            <li><b>hatkor</b> → точное время;</li>
            <li><b>fél nyolcra</b> → целевое время;</li>
            <li><b>gyakran</b> → частота;</li>
            <li><b>teát</b> → объект;</li>
            <li><b>irodában</b> → место.</li>
          </ul>
        </details>
      `,
      activities: [ROUTINE_FORMS],
    },    {
      id: 5,
      eyebrow: 'УРОК 14 · 5/11 · ЧТЕНИЕ',
      title: 'Két különböző hétköznap',
      subtitle: 'Читай в три прохода: день → различия → доказательство из текста',
      type: 'reading',
      note: 'Текст сравнивает два будних распорядка. Не переводи каждое слово: сначала восстанови структуру дня, затем сравни детали.',
      warn: 'Не отвечай по общему впечатлению. Для каждого ответа найди в тексте конкретное время, место, транспорт, действие или слово частоты.',
      task: 'Проход 1 — хронология. Проход 2 — сравнение Anna/Bence. Проход 3 — только затем 8 вопросов. Порог: 6 из 8.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Первый проход: собери скелет дня</h4>

        <p>
          Ищи не отдельные слова, а последовательность:
          <b>утро → дорога → работа/учёба → обед → после дня → вечер → сон</b>.
        </p>

        <div class="note">
          На первом проходе достаточно понять: <b>кто, когда и что делает</b>.
          Незнакомое слово можно временно пропустить, если общий этап дня понятен.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Второй проход: сравни двух людей по одинаковым полям</h4>

        <table class="conj">
          <tr><th>Поле</th><th>Anna</th><th>Bence</th></tr>
          <tr><td>подъём</td><td>найди время</td><td>найди время</td></tr>
          <tr><td>транспорт</td><td>найди способ</td><td>найди способ</td></tr>
          <tr><td>работа / учёба</td><td>где и когда?</td><td>где и когда?</td></tr>
          <tr><td>обед</td><td>где / с кем?</td><td>где / с кем?</td></tr>
          <tr><td>после дня</td><td>что обычно?</td><td>что обычно?</td></tr>
          <tr><td>вечер / сон</td><td>что делает?</td><td>что делает?</td></tr>
        </table>

        <div class="note">
          Таблица намеренно не содержит ответов — заполни её мысленно после чтения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Слова, которые показывают частоту и сравнение</h4>

        <table class="conj">
          <tr><td><button class="speak-btn" data-speak-text="általában" data-speak-lang="hu-HU">általában</button></td><td>обычно</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="gyakran" data-speak-lang="hu-HU">gyakran</button></td><td>часто</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="ritkán" data-speak-lang="hu-HU">ritkán</button></td><td>редко</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="korábban" data-speak-lang="hu-HU">korábban</button></td><td>раньше</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="később" data-speak-lang="hu-HU">később</button></td><td>позже</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="hétvégén" data-speak-lang="hu-HU">hétvégén</button></td><td>по выходным / на выходных</td></tr>
        </table>

        <div class="warn">
          <b>gyakran</b> и <b>ritkán</b> меняют смысл детали.
          Не читай их как декоративные слова.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Какие вопросы задавать себе во время чтения</h4>

        <p>
          <button class="speak-btn" data-speak-text="Ki kel korábban?" data-speak-lang="hu-HU">Ki kel korábban?</button>
          — кто встаёт раньше?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ki fekszik le később?" data-speak-lang="hu-HU">Ki fekszik le később?</button>
          — кто ложится позже?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hogyan jár?" data-speak-lang="hu-HU">Hogyan jár?</button>
          — как добирается?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hol ebédel?" data-speak-lang="hu-HU">Hol ebédel?</button>
          — где обедает?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Mit csinál este?" data-speak-lang="hu-HU">Mit csinál este?</button>
          — что делает вечером?
        </p>

        <div class="note">
          Эти вопросы — стратегия чтения, а не готовые ответы к activity.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Третий проход: докажи ответ</h4>

        <ol class="tasklist">
          <li>выбери ответ;</li>
          <li>вернись к нужному абзацу;</li>
          <li>найди конкретную фразу-доказательство;</li>
          <li>только после этого переходи к следующему вопросу.</li>
        </ol>

        <div class="warn">
          Если два варианта кажутся возможными, не угадывай — ищи доказательство в тексте.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Самопроверка стратегии</summary>
          <ul class="tick mt-3">
            <li>Я могу назвать этапы дня обоих людей.</li>
            <li>Я вижу хотя бы два различия, но не отвечаю без текста.</li>
            <li>Для каждого ответа могу указать фразу-доказательство.</li>
          </ul>
        </details>
      `,
      activities: [DAILY_ROUTINE_READING],
    },    {
      id: 6,
      eyebrow: 'УРОК 14 · 6/11 · АУДИРОВАНИЕ',
      title: 'Anna napirendje',
      subtitle: 'Сначала услышать опорные времена, затем связать их с действиями',
      type: 'listening',
      note: 'Запись короткая и линейная. Не пытайся понять всё с первого прослушивания: сначала собери временные опоры.',
      warn: 'Не читай транскрипт до собственной попытки. Иначе activity превращается из аудирования в чтение.',
      task: 'Прослушивание 1: отметь времена. Прослушивание 2: свяжи время с действием. Затем ответь на 5 вопросов. Порог: 4 из 5.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Перед прослушиванием: что нужно услышать</h4>

        <p>
          Слушай два типа информации:
          <b>когда?</b> и <b>что происходит?</b>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Mikor?" data-speak-lang="hu-HU">Mikor?</button>
          — когда?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Mit csinál?" data-speak-lang="hu-HU">Mit csinál?</button>
          — что она делает?
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Разогрей распознавание времени</h4>

        <div class="grid2">
          <div>
            <p><button class="speak-btn" data-speak-text="fél hétkor" data-speak-lang="hu-HU">fél hétkor</button></p>
            <p><button class="speak-btn" data-speak-text="hét órakor" data-speak-lang="hu-HU">hét órakor</button></p>
            <p><button class="speak-btn" data-speak-text="nyolckor" data-speak-lang="hu-HU">nyolckor</button></p>
          </div>
          <div>
            <p><button class="speak-btn" data-speak-text="délben" data-speak-lang="hu-HU">délben</button></p>
            <p><button class="speak-btn" data-speak-text="este" data-speak-lang="hu-HU">este</button></p>
            <p><button class="speak-btn" data-speak-text="tizenegykor" data-speak-lang="hu-HU">tizenegykor</button></p>
          </div>
        </div>

        <div class="note">
          Здесь показаны только временные сигналы, <b>не готовая последовательность действий</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Прослушивание №1 — только временные опоры</h4>

        <ol class="tasklist">
          <li>не останавливай запись после каждого слова;</li>
          <li>услышь знакомые формы времени;</li>
          <li>не пытайся пока запомнить каждое действие.</li>
        </ol>

        <div class="note">
          Цель первого прослушивания — понять каркас расписания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Прослушивание №2 — время + действие</h4>

        <table class="conj">
          <tr><th>Что услышал</th><th>Что зафиксировать</th></tr>
          <tr><td>временной маркер</td><td>к какому моменту он относится?</td></tr>
          <tr><td>глагол действия</td><td>что делает Anna?</td></tr>
          <tr><td>следующий маркер</td><td>как продолжается день?</td></tr>
        </table>

        <div class="warn">
          Не заполняй пробел догадкой из «обычного распорядка».
          Ответ должен исходить из записи.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. После двух прослушиваний</h4>

        <ol class="tasklist">
          <li>ответь на 5 вопросов;</li>
          <li>для каждого ответа вспомни конкретный звуковой фрагмент;</li>
          <li>если сомневаешься — прослушай ещё раз только с одной целью;</li>
          <li>транскрипт используй после собственной попытки как проверку.</li>
        </ol>

        <div class="note">
          Порог для DIRECT listening evidence — <b>4 из 5</b> при успешно загруженном опубликованном MP3.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Типичная ошибка</h4>

        <div class="warn">
          Услышать знакомое время недостаточно.
          Нужно связать его именно с тем действием, которое звучит рядом.
        </div>
      `,
      activities: [ROUTINE_LISTENING],
    },    {
      id: 7,
      eyebrow: 'УРОК 14 · 7/11 · ВЗАИМОДЕЙСТВИЕ',
      title: 'Milyen a napod?',
      subtitle: '8 реплик ученика: ответь, добавь деталь и верни вопрос собеседнику',
      type: 'speaking',
      note: 'Это взаимодействие, а не чтение готового диалога. Модель в activity нужна для самопроверки после собственной реплики.',
      warn: 'Не пытайся отвечать длинно. На A1 достаточно 1–2 понятных предложений. Главное — время, действие, одна деталь и естественный встречный вопрос.',
      task: 'Пройди все 8 learner-turns. Минимум в двух ответах сам задай встречный вопрос. Если не понял реплику — используй короткую repair-фразу и продолжай.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Формула хорошей A1-реплики</h4>

        <div class="note">
          <b>Ответ → одна деталь → встречный вопрос</b>
        </div>

        <p>
          <button class="speak-btn" data-speak-text="Hétkor kelek." data-speak-lang="hu-HU">Hétkor kelek.</button>
          +
          <button class="speak-btn" data-speak-text="És te?" data-speak-lang="hu-HU">És te?</button>
        </p>

        <p>
          Не нужно каждый раз строить длинную историю.
          Короткая точная реплика лучше, чем сложная фраза с потерянным смыслом.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Восемь тем, которые появятся в разговоре</h4>

        <table class="conj">
          <tr><th>Тема</th><th>Что подготовить</th></tr>
          <tr><td>подъём</td><td>время + встречный вопрос</td></tr>
          <tr><td>завтрак</td><td>еда / напиток + частота</td></tr>
          <tr><td>работа / школа</td><td>время начала + транспорт</td></tr>
          <tr><td>обед</td><td>время / место + встречный вопрос</td></tr>
          <tr><td>после работы</td><td>одно обычное действие</td></tr>
          <tr><td>вечер</td><td>занятие + частота</td></tr>
          <tr><td>выходные</td><td>одно отличие от будней</td></tr>
          <tr><td>сравнение</td><td>что у вас похоже / различается</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Полезные каркасы — не готовые ответы</h4>

        <p>
          <button class="speak-btn" data-speak-text="Hétköznap általában..." data-speak-lang="hu-HU">Hétköznap általában...</button>
          — по будням обычно...
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Munka után..." data-speak-lang="hu-HU">Munka után...</button>
          — после работы...
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Este gyakran..." data-speak-lang="hu-HU">Este gyakran...</button>
          — вечером часто...
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hétvégén viszont..." data-speak-lang="hu-HU">Hétvégén viszont...</button>
          — а по выходным...
        </p>

        <div class="note">
          Закончи каркас своими словами. Не копируй model целиком до собственной попытки.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как вернуть вопрос собеседнику</h4>

        <p>
          <button class="speak-btn" data-speak-text="És te mikor kelsz?" data-speak-lang="hu-HU">És te mikor kelsz?</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Te hol ebédelsz?" data-speak-lang="hu-HU">Te hol ebédelsz?</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="És te mit csinálsz este?" data-speak-lang="hu-HU">És te mit csinálsz este?</button>
        </p>

        <div class="warn">
          Минимум два встречных вопроса — это часть задачи взаимодействия, а не декоративная добавка.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Если не понял собеседника</h4>

        <p>
          <button class="speak-btn" data-speak-text="Még egyszer, kérlek." data-speak-lang="hu-HU">Még egyszer, kérlek.</button>
          — ещё раз, пожалуйста.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Lassabban, kérlek." data-speak-lang="hu-HU">Lassabban, kérlek.</button>
          — медленнее, пожалуйста.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Nem értem." data-speak-lang="hu-HU">Nem értem.</button>
          — я не понимаю.
        </p>

        <div class="note">
          Такие repair-фразы помогают продолжить реальный разговор и не требуют более сложной грамматики.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. После каждой своей реплики</h4>

        <ul class="tick">
          <li>я ответил именно на вопрос;</li>
          <li>назвал нужное время / действие / место;</li>
          <li>не добавил лишнюю сложную грамматику;</li>
          <li>в двух местах сам вернул вопрос;</li>
          <li>сначала сказал сам, только потом посмотрел model.</li>
        </ul>

        <div class="warn">
          Завершение RolePlay даёт <b>PARTIAL interaction evidence</b>, а не автоматическую оценку свободной речи.
        </div>
      `,
      activities: [ROUTINE_ROLEPLAY],
    },    {
      id: 8,
      eyebrow: 'УРОК 14 · 8/11 · ПИСЬМО',
      title: 'Az én hétköznapom',
      subtitle: '90–110 слов: сначала план, затем связный день, потом самопроверка',
      type: 'writing',
      note: 'Пиши о вымышленном обычном буднем дне. Так проще сосредоточиться на языке, а не на точности личных деталей.',
      warn: 'Не начинай с полного перевода русского текста. Сначала составь венгерский план из знакомых действий, временных маркеров и слов частоты.',
      task: 'Сделай план из 7 блоков, напиши 90–110 слов, затем проверь время, транспорт, частоту, последовательность и одно отличие выходного дня.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. План до первого предложения</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Что обязательно решить</th></tr>
          <tr><td>1. утро</td><td>когда просыпаешься / встаёшь</td></tr>
          <tr><td>2. завтрак</td><td>что ешь / пьёшь и когда</td></tr>
          <tr><td>3. дорога</td><td>куда и каким транспортом</td></tr>
          <tr><td>4. работа / учёба</td><td>когда начинаешь + где</td></tr>
          <tr><td>5. обед / день</td><td>обед + вторую половину дня</td></tr>
          <tr><td>6. вечер</td><td>что делаешь + когда ложишься</td></tr>
          <tr><td>7. выходные</td><td>одно понятное отличие</td></tr>
        </table>

        <div class="note">
          Если все 7 блоков заполнены мысленно, текст почти невозможно «потерять» по ходу письма.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Связывай предложения, а не перечисляй их</h4>

        <table class="conj">
          <tr><td><button class="speak-btn" data-speak-text="majd" data-speak-lang="hu-HU">majd</button></td><td>затем</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="aztán" data-speak-lang="hu-HU">aztán</button></td><td>потом</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="munka után" data-speak-lang="hu-HU">munka után</button></td><td>после работы</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="este" data-speak-lang="hu-HU">este</button></td><td>вечером</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="hétvégén viszont" data-speak-lang="hu-HU">hétvégén viszont</button></td><td>а по выходным</td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Reggel felkelek, aztán reggelizem." data-speak-lang="hu-HU">Reggel felkelek, aztán reggelizem.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Munka után hazamegyek, majd vacsorázom." data-speak-lang="hu-HU">Munka után hazamegyek, majd vacsorázom.</button>
        </p>

        <div class="note">
          Это примеры связки предложений, а не model answer к заданию.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Добавь время и частоту</h4>

        <p>
          <button class="speak-btn" data-speak-text="Fél hétkor kelek." data-speak-lang="hu-HU">Fél hétkor kelek.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Általában busszal megyek." data-speak-lang="hu-HU">Általában busszal megyek.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Este néha olvasok." data-speak-lang="hu-HU">Este néha olvasok.</button>
        </p>

        <div class="warn">
          Не вставляй <b>általában / gyakran / néha / ritkán</b> ради количества слов.
          Частота должна логично относиться к конкретному действию.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Контраст с выходными — достаточно одного ясного отличия</h4>

        <p>
          <button class="speak-btn" data-speak-text="Hétvégén viszont később kelek." data-speak-lang="hu-HU">Hétvégén viszont később kelek.</button>
        </p>

        <div class="note">
          Не нужно описывать второй полный распорядок. Одного хорошо сформулированного контраста достаточно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Контроль длины: 90–110 слов</h4>

        <ol class="tasklist">
          <li>сначала напиши содержательный текст;</li>
          <li>посчитай слова;</li>
          <li>если меньше 90 — добавь полезную деталь о месте, времени или частоте;</li>
          <li>если больше 110 — убери повторения, а не важный этап дня.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Самопроверка перед отправкой</h4>

        <ul class="tick">
          <li>90–110 слов;</li>
          <li>есть полный будний распорядок;</li>
          <li>есть время и транспорт;</li>
          <li>есть минимум одно естественное выражение частоты;</li>
          <li>есть вечер;</li>
          <li>есть одно отличие от выходных;</li>
          <li>события идут в понятной последовательности.</li>
        </ul>

        <div class="warn">
          Writing остаётся <b>PARTIAL evidence</b> до квалифицированной проверки.
          Самопроверка помогает улучшить текст, но не заменяет внешнюю оценку открытой продукции.
        </div>
      `,
      activities: [DAILY_ROUTINE_WRITING],
    },    {
      id: 9,
      eyebrow: 'УРОК 14 · 9/11 · УСТНАЯ САМОПРАКТИКА',
      title: 'Hétköznap és hétvégén',
      subtitle: 'Около 2 минут: говори по опорным блокам, а не читай готовый текст',
      type: 'speaking',
      note: 'Это необязательная устная самопрактика. Она помогает подготовить связный монолог, но не использует микрофон, score и evidence.',
      warn: 'Не пиши полный текст заранее. Запиши 6–8 ключевых слов и говори по ним. Если забыл слово — упрости мысль, а не останавливайся.',
      task: 'Говори около 2 минут: будний день → время → транспорт → частота → вечер → одно отличие выходного дня. Без микрофона, score и evidence.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта двухминутного монолога</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Что сказать</th></tr>
          <tr><td>1. начало</td><td>какой у тебя обычный будний день</td></tr>
          <tr><td>2. утро</td><td>когда встаёшь + завтрак</td></tr>
          <tr><td>3. дорога</td><td>когда и каким транспортом</td></tr>
          <tr><td>4. день</td><td>работа / учёба + обед</td></tr>
          <tr><td>5. вечер</td><td>что обычно делаешь + частота</td></tr>
          <tr><td>6. выходные</td><td>одно ясное отличие</td></tr>
        </table>

        <div class="note">
          Не нужно говорить одинаково долго о каждом блоке.
          Главное — чтобы слушатель понял последовательность дня.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Начни с простой рамки</h4>

        <p>
          <button class="speak-btn" data-speak-text="Hétköznap általában..." data-speak-lang="hu-HU">Hétköznap általában...</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Reggel..." data-speak-lang="hu-HU">Reggel...</button>
          →
          <button class="speak-btn" data-speak-text="Délben..." data-speak-lang="hu-HU">Délben...</button>
          →
          <button class="speak-btn" data-speak-text="Este..." data-speak-lang="hu-HU">Este...</button>
        </p>

        <div class="note">
          Эти опоры показывают порядок, но не дают готового содержания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Добавь время и транспорт</h4>

        <p>
          <button class="speak-btn" data-speak-text="Fél hétkor kelek." data-speak-lang="hu-HU">Fél hétkor kelek.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Busszal megyek dolgozni." data-speak-lang="hu-HU">Busszal megyek dolgozni.</button>
        </p>

        <div class="warn">
          Не перечисляй много времён подряд. Достаточно 2–3 опорных момента, которые держат структуру рассказа.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Частота делает распорядок «обычным»</h4>

        <p>
          <button class="speak-btn" data-speak-text="Általában..." data-speak-lang="hu-HU">Általában...</button>
          ·
          <button class="speak-btn" data-speak-text="Gyakran..." data-speak-lang="hu-HU">Gyakran...</button>
          ·
          <button class="speak-btn" data-speak-text="Néha..." data-speak-lang="hu-HU">Néha...</button>
          ·
          <button class="speak-btn" data-speak-text="Ritkán..." data-speak-lang="hu-HU">Ritkán...</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Este néha olvasok." data-speak-lang="hu-HU">Este néha olvasok.</button>
        </p>

        <div class="note">
          Используй только те слова частоты, которые реально подходят смыслу твоего вымышленного распорядка.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Закончи одним контрастом с выходными</h4>

        <p>
          <button class="speak-btn" data-speak-text="Hétvégén viszont..." data-speak-lang="hu-HU">Hétvégén viszont...</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hétvégén később kelek." data-speak-lang="hu-HU">Hétvégén később kelek.</button>
        </p>

        <div class="note">
          Одного различия достаточно: позже встаёшь, иначе проводишь вечер, больше отдыхаешь или едешь в другое место.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Если потерял мысль</h4>

        <p>
          <button class="speak-btn" data-speak-text="Aztán..." data-speak-lang="hu-HU">Aztán...</button>
          — потом...
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Munka után..." data-speak-lang="hu-HU">Munka után...</button>
          — после работы...
        </p>

        <p>
          <button class="speak-btn" data-speak-text="És este..." data-speak-lang="hu-HU">És este...</button>
          — а вечером...
        </p>

        <div class="warn">
          Самопрактика не создаёт evidence и не доказывает автоматически уровень говорения.
          Её цель — сделать знакомый A1-язык более связным и доступным без чтения готового текста.
        </div>
      `,
      optionalSpeaking: DAILY_ROUTINE_SPEAKING,
    },    {
      id: 10,
      eyebrow: 'УРОК 14 · 10/11 · A1 CHECKPOINT MODEL',
      title: 'Mit igazolnak az eredmények?',
      subtitle: 'DIRECT, PARTIAL и NO evidence: что именно подтверждает каждая активность',
      type: 'info',
      note: 'Checkpoint собирает разные типы учебного evidence. Он показывает, какие задачи выполнены, но не превращает результат урока в официальный языковой сертификат.',
      warn: 'DIRECT не означает «я полностью владею навыком во всех ситуациях». Это означает только, что конкретная закрытая активность дала прямое проверяемое evidence по своему критерию.',
      task: 'Пройди таблицу сверху вниз и различи три вещи: результат конкретной activity, статус цели урока и общий уровень CEFR. Это не одно и то же.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Три типа evidence в этом checkpoint</h4>

        <table class="conj">
          <tr><th>Статус</th><th>Что означает</th><th>Чего НЕ означает</th></tr>
          <tr>
            <td><b>DIRECT</b></td>
            <td>есть автоматически проверяемый результат по заданному порогу</td>
            <td>не сертификат уровня</td>
          </tr>
          <tr>
            <td><b>PARTIAL</b></td>
            <td>открытая продукция выполнена, но требует квалифицированной проверки</td>
            <td>не «ошибка» и не нулевой результат</td>
          </tr>
          <tr>
            <td><b>NO evidence</b></td>
            <td>самопрактика полезна, но система не использует её как evidence</td>
            <td>не означает, что упражнение бесполезно</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Что даёт каждая активность Lesson 14</h4>

        <table class="conj">
          <tr><th>Activity</th><th>Evidence</th><th>Когда</th></tr>
          <tr><td><b>Language Use</b></td><td><b>DIRECT</b></td><td>после достижения порога Controlled Practice</td></tr>
          <tr><td><b>Reading</b></td><td><b>DIRECT</b></td><td>после достижения порога чтения</td></tr>
          <tr><td><b>Listening</b></td><td><b>DIRECT</b></td><td>после порога и успешной загрузки опубликованного MP3</td></tr>
          <tr><td><b>Writing</b></td><td><b>PARTIAL</b></td><td>после выполнения открытого текста</td></tr>
          <tr><td><b>Interaction</b></td><td><b>PARTIAL</b></td><td>после завершения RolePlay</td></tr>
          <tr><td><b>Optional Speaking</b></td><td><b>NO evidence</b></td><td>текстовая самопрактика без score</td></tr>
        </table>

        <div class="note">
          Здесь <b>DIRECT / PARTIAL / NO evidence</b> описывают тип доказательства от конкретной activity.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Activity result ≠ статус всей цели</h4>

        <p>
          Например, закрытая Reading activity может дать <b>DIRECT</b>,
          но цель «описать распорядок» включает и открытую Writing-компоненту.
          Поэтому итог по такой цели может требовать <b>partial review</b>.
        </p>

        <p>
          Аналогично Listening может быть <b>DIRECT</b>,
          а более широкая цель с Interaction-компонентой всё ещё требует просмотра открытой продукции.
        </p>

        <div class="warn">
          Не повышай PARTIAL до DIRECT только потому, что ученик нажал «завершить».
          Вид evidence определяется типом задания и способом проверки.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Что можно честно сказать после checkpoint</h4>

        <p>
          <button class="speak-btn" data-speak-text="Napi rutin" data-speak-lang="hu-HU">Napi rutin</button>
          — тема распорядка дня.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Mikor?" data-speak-lang="hu-HU">Mikor?</button>
          ·
          <button class="speak-btn" data-speak-text="Milyen gyakran?" data-speak-lang="hu-HU">Milyen gyakran?</button>
        </p>

        <ul class="tick">
          <li>закрытые задания показывают, что знакомый материал распознаётся и применяется в заданном формате;</li>
          <li>Writing и Interaction показывают продукцию, но требуют внешней проверки;</li>
          <li>Optional Speaking остаётся тренировкой без evidence;</li>
          <li>результаты полезны как учебная диагностика конца A1-этапа курса.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Граница интерпретации</h4>

        <div class="warn">
          Прохождение Quiz или завершение урока <b>не означает автоматически «A1 achieved»</b>
          и <b>не является CEFR-сертификацией</b>.
        </div>

        <div class="note">
          Checkpoint помогает увидеть сильные и слабые места перед дальнейшим материалом,
          но не заменяет полноценную стандартизированную оценку владения языком.
        </div>
      `,
    },    {
      id: 11,
      eyebrow: 'УРОК 14 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что уже работает напрямую, а что ещё требует проверки открытой речи и письма',
      type: 'summary',
      note: 'Финал Lesson 14 собирает материал распорядка дня в одну систему. Это учебный checkpoint конца A1-этапа курса, а не официальный сертификат CEFR.',
      warn: 'Не своди урок к правилу «-ik = возвратность». В венгерском значение глагола важнее внешнего окончания.',
      task: 'Пройди итог сверху вниз: формы → время → частота → хронология → evidence. Затем выполни Exit Check и посмотри, какие цели закрыты напрямую, а какие требуют review.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Главная граница урока: -ik не означает «возвратный»</h4>

        <table class="conj">
          <tr><th>Глагол</th><th>Что важно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="reggelizik" data-speak-lang="hu-HU">reggelizik</button></td>
            <td>-ik-глагол, но не возвратное действие</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="eszik" data-speak-lang="hu-HU">eszik</button></td>
            <td>-ik-глагол, но не возвратное действие</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU">mosakodik</button></td>
            <td>по смыслу соответствует знакомому «умывается»</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felöltözik" data-speak-lang="hu-HU">felöltözik</button></td>
            <td>по смыслу «одевается»</td>
          </tr>
        </table>

        <div class="warn">
          Окончания <b>-kodik/-kedik/-ködik не являются формулой</b> для создания новых «возвратных» глаголов.
          Учим конкретные частотные глаголы и их реальные формы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Две пары, которые нельзя смешивать</h4>

        <table class="conj">
          <tr><th>Глагол</th><th>Смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felébred" data-speak-lang="hu-HU">felébred</button></td>
            <td>проснуться</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felkel" data-speak-lang="hu-HU">felkel</button></td>
            <td>встать</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lefekszik" data-speak-lang="hu-HU">lefekszik</button></td>
            <td>лечь спать</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elalszik" data-speak-lang="hu-HU">elalszik</button></td>
            <td>заснуть</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Reggel felébredek, aztán felkelek." data-speak-lang="hu-HU">Reggel felébredek, aztán felkelek.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Este lefekszem, aztán elalszom." data-speak-lang="hu-HU">Este lefekszem, aztán elalszom.</button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Время: когда именно ≠ к какому времени</h4>

        <table class="conj">
          <tr><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td><b>-kor</b></td>
            <td><button class="speak-btn" data-speak-text="Hét órakor reggelizem." data-speak-lang="hu-HU">Hét órakor reggelizem.</button></td>
          </tr>
          <tr>
            <td><b>-ra/-re</b></td>
            <td><button class="speak-btn" data-speak-text="Nyolcra megyek dolgozni." data-speak-lang="hu-HU">Nyolcra megyek dolgozni.</button></td>
          </tr>
        </table>

        <div class="note">
          <b>-kor</b> отвечает на «когда происходит действие?»;
          <b>-ra/-re</b> в знакомой модели показывает целевое время «к восьми / на восемь».
          Это не взаимозаменяемые формы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Частота + последовательность = настоящий распорядок</h4>

        <p>
          <button class="speak-btn" data-speak-text="általában" data-speak-lang="hu-HU">általában</button>
          ·
          <button class="speak-btn" data-speak-text="gyakran" data-speak-lang="hu-HU">gyakran</button>
          ·
          <button class="speak-btn" data-speak-text="néha" data-speak-lang="hu-HU">néha</button>
          ·
          <button class="speak-btn" data-speak-text="ritkán" data-speak-lang="hu-HU">ritkán</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Reggel felkelek, aztán reggelizem." data-speak-lang="hu-HU">Reggel felkelek, aztán reggelizem.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Munka után általában hazamegyek." data-speak-lang="hu-HU">Munka után általában hazamegyek.</button>
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Hétvégén viszont később kelek." data-speak-lang="hu-HU">Hétvégén viszont később kelek.</button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что уже проверяется напрямую</h4>

        <table class="conj">
          <tr><th>Цель Lesson 14</th><th>Итоговая модель evidence</th></tr>
          <tr><td>формы изученного routine-набора</td><td><b>direct-met</b> после Controlled Practice</td></tr>
          <tr><td>употребление изученных routine-форм</td><td><b>direct-met</b> по закрытой grammar-проверке</td></tr>
          <tr><td>описание распорядка</td><td><b>partial-review</b>: Reading + открытое Writing</td></tr>
          <tr><td>время + действие в связной речи</td><td><b>partial-review</b>: Listening + Interaction</td></tr>
        </table>

        <div class="note">
          Поэтому две цели могут быть <b>direct-met</b>, а две — <b>partial-review</b>.
          Это не противоречие: открытая Writing/Interaction продукция требует квалифицированной проверки.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-финал перед Exit Check</h4>

        <details class="note">
          <summary class="font-bold cursor-pointer">Проверь себя</summary>
          <ol class="tasklist mt-3">
            <li><b>felébred</b> и <b>felkel</b> — одно и то же? → Нет.</li>
            <li><b>hétkor</b> и <b>hétre</b> — одна модель времени? → Нет.</li>
            <li><b>eszik</b> доказывает, что -ik означает возвратность? → Нет.</li>
            <li>Что показывает <b>gyakran</b>? → Частоту.</li>
            <li>Почему Writing/Interaction не становятся DIRECT автоматически? → Это открытая продукция, требующая review.</li>
          </ol>
        </details>

        <div class="warn">
          Завершение Exit Check или Quiz <b>не означает автоматически «A1 achieved»</b>
          и <b>не является CEFR-сертификацией</b>.
        </div>
      `,
      activities: [EXIT_CHECK],
    },  ],
  vocabulary: [
    { id: 'l14_v1', hu: 'napi rutin', ru: 'ежедневный распорядок', category: 'Тема урока' },
    { id: 'l14_v2', hu: 'felébred', ru: 'просыпаться', category: 'Глаголы дня' },
    { id: 'l14_v3', hu: 'felkel', ru: 'вставать', category: 'Глаголы дня' },
    { id: 'l14_v4', hu: 'mosakodik', ru: 'умываться / мыться', category: 'Глаголы дня' },
    { id: 'l14_v5', hu: 'fésülködik', ru: 'причёсываться', category: 'Глаголы дня' },
    { id: 'l14_v6', hu: 'felöltözik', ru: 'одеться / одеваться', category: 'Глаголы дня' },
    { id: 'l14_v7', hu: 'fogat mos', ru: 'чистить зубы', category: 'Глаголы дня' },
    { id: 'l14_v8', hu: 'reggelizik', ru: 'завтракать', category: 'Глаголы дня' },
    { id: 'l14_v9', hu: 'ebédel', ru: 'обедать', category: 'Глаголы дня' },
    { id: 'l14_v10', hu: 'vacsorázik', ru: 'ужинать', category: 'Глаголы дня' },
    { id: 'l14_v11', hu: 'hazamegy', ru: 'идти домой', category: 'Глаголы дня' },
    { id: 'l14_v12', hu: 'lefekszik', ru: 'ложиться спать', category: 'Глаголы дня' },
    { id: 'l14_v13', hu: 'elalszik', ru: 'засыпать', category: 'Глаголы дня' },
    { id: 'l14_v14', hu: 'eszik', ru: 'есть', category: 'Повторение -ik' },
  ],
  quiz: [
    { id: 1401, question: 'Какая стандартная форма курса означает «я умываюсь»?', options: ['mosakodom', 'mosakodik', 'mosakodsz', 'mosakodunk'], correctIndex: 0, explanation: 'Изученная форма: mosakodik → én mosakodom.' },
    { id: 1402, question: 'Какая стандартная форма курса означает «я ем»?', options: ['eszik', 'eszem', 'eszel', 'eszünk'], correctIndex: 1, explanation: 'Частый -ik-глагол имеет изученную форму eszik → eszem. Его значение не является возвратным.' },
    { id: 1403, question: 'Как сказать «Я просыпаюсь в семь часов»?', options: ['Hét órakor felébredek.', 'Hét órán felébredek.', 'Hét órában felébredek.', 'Hét órára felébredek.'], correctIndex: 0, explanation: 'Точное время действия выражается формой hét órakor; felébred → felébredek.' },
    { id: 1404, question: 'Как сказать «Утром я одеваюсь» стандартной формой курса?', options: ['Reggel felöltözik.', 'Reggel felöltözöm.', 'Reggel felöltözünk.', 'Reggel felöltözöl.'], correctIndex: 1, explanation: 'Для én используется изученная стандартная форма felöltözöm.' },
    { id: 1405, question: 'Как сказать «Я завтракаю в половине восьмого»?', options: ['Fél nyolckor reggelizem.', 'Fél nyolcban reggelizem.', 'Fél nyolcra ebédelek.', 'Nyolc félkor reggelizem.'], correctIndex: 0, explanation: 'По-венгерски 7:30 — fél nyolc; время действия получает -kor: fél nyolckor.' },
    { id: 1406, question: 'Как естественно сказать «Обычно я ложусь около полуночи»?', options: ['Általában éjfél körül fekszem le.', 'Általában éjfél körül fekszik le.', 'Általában éjfél körül kelek fel.', 'Éjfél körül reggelizem.'], correctIndex: 0, explanation: 'Простая модель настоящего времени: általában + время + fekszem le.' },
  ],
  objectives: [
    { id: 'l14_describe-routine', text: 'Описывать распорядок дня с временными выражениями.', skills: ['speaking', 'writing'] },
    { id: 'l14_form-reflexive', text: 'Правильно образовывать формы изученных возвратных/средних глаголов распорядка дня в настоящем времени.', skills: ['grammar', 'writing'] },
    { id: 'l14_use-reflexive', text: 'Употреблять изученные возвратные/средние глаголы распорядка дня в контексте настоящего времени.', skills: ['grammar', 'speaking'] },
    { id: 'l14_tell-routine-time', text: 'Сообщать, во сколько и что делает человек, используя время и действие.', skills: ['speaking', 'listening'] },
  ],
};
