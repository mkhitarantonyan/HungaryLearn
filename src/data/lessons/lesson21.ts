import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L21_ACTIVITIES = createMigrationActivities({
  lessonId: 21,
  controlledTitle: 'Два спряжения в реальных фразах',
  controlledPassCount: 9,
  controlledExercises: [
    { kind: 'singleChoice', id: 'l21-cp-1', prompt: '«Я читаю одну книгу».', options: ['Olvasok egy könyvet.', 'Olvasom egy könyvet.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l21-cp-2', prompt: '«Я читаю эту книгу».', options: ['Olvasok ezt a könyvet.', 'Olvasom ezt a könyvet.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l21-cp-3', prompt: '«Я что-то слышу».', options: ['Hallok valamit.', 'Hallom valamit.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l21-cp-4', prompt: 'Ezt szeretem, de ___ nem szeretem.', accept: ['azt'] },
    { kind: 'singleChoice', id: 'l21-cp-5', prompt: '«Я знаю Петера».', options: ['Ismerek Pétert.', 'Ismerem Pétert.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l21-cp-6', prompt: 'Выбери правильную форму с engem.', options: ['Ő lát engem.', 'Ő látja engem.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l21-cp-7', prompt: 'én + lát + téged → «Я вижу тебя».', accept: ['Látlak', 'Látlak.'] },
    { kind: 'singleChoice', id: 'l21-cp-8', prompt: '«Я видел(а) его/её в другом фильме».', options: ['Láttam őt egy másik filmben.', 'Láttak őt egy másik filmben.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l21-cp-9', prompt: '«Я смотрю один фильм».', options: ['Nézek egy filmet.', 'Nézem egy filmet.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l21-cp-10', prompt: '«Я смотрю этот фильм».', options: ['Nézek a filmet.', 'Nézem a filmet.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l21-cp-11', prompt: 'Друг спрашивает: Ismered ezt a filmet? Выбери ответ.', options: ['Igen, ismerem.', 'Igen, ismerek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l21-cp-12', prompt: 'Телефонная связь плохая: «Я тебя слышу».', options: ['Hallom.', 'Hallak.'], correctIndex: 1 },
  ],
  readingTitle: 'Mit nézzünk este?',
  readingParagraphs: [
    'Anna péntek este találkozik Bencével. Anna egy új magyar filmet szeretne megnézni, mert már sok jót hallott róla. Bence nem ismeri ezt a filmet, de látta a rendező előző filmjét, és azt nagyon szerette. Anna megmutatja neki az előzetest a telefonján.',
    '– Tetszik neked? – kérdezi Anna.\n– Igen, érdekesnek tűnik. Ismered a főszereplőt?\n– Igen, ismerem. Tavaly láttam őt egy másik filmben.\n– Akkor nézzük meg ezt a filmet!',
    'Bence azonban előbb vacsorázni szeretne. Anna is éhes, ezért keresnek egy éttermet. Bence egy olasz éttermet talál, Anna viszont azt az éttermet már ismeri. Azt mondja, hogy jó, de péntek este általában sokan vannak ott. Végül egy kisebb éttermet választanak, majd elmennek a moziba.',
  ],
  readingPassCount: 5,
  readingQuestions: [
    { id: 'l21-read-1', question: 'Mit szeretne Anna péntek este csinálni?', options: ['Egy új magyar filmet megnézni', 'Otthon maradni', 'Egy könyvet venni'], correctIndex: 0 },
    { id: 'l21-read-2', question: 'Mit tud Bence az új filmről?', options: ['Már látta', 'Nem ismeri, de látta a rendező előző filmjét', 'Ő rendezte'], correctIndex: 1 },
    { id: 'l21-read-3', question: 'Honnan ismeri Anna a főszereplőt?', options: ['Tavaly látta egy másik filmben', 'Az étteremből', 'Nem ismeri'], correctIndex: 0 },
    { id: 'l21-read-4', question: 'Mi a probléma az olasz étteremmel péntek este?', options: ['Zárva van', 'Általában sokan vannak ott', 'Anna nem szereti az olasz ételt'], correctIndex: 1 },
    { id: 'l21-read-5', question: 'Mi történik végül, és milyen sorrendben?', options: ['Mozi, aztán vacsora', 'Kisebb étterem, aztán mozi', 'Csak étterem'], correctIndex: 1 },
    { id: 'l21-read-6', question: 'Melyik pár mutat előbb határozatlan, majd határozott tárgyat?', options: ['egy éttermet → azt az éttermet', 'a telefonján → péntek este', 'Bencével → a moziba'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: что и кого видят друзья',
  listeningTranscript: 'A: Látod azt a házat?\nB: Igen, látom.\nA: És engem látsz a képen?\nB: Igen, téged is látlak.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l21-listen-1', question: 'Mit látnak először?', options: ['Egy házat', 'Egy autót', 'Egy könyvet'], correctIndex: 0 },
    { id: 'l21-listen-2', question: 'Melyik forma hangzik el a házzal?', options: ['látok', 'látom', 'látlak'], correctIndex: 1 },
    { id: 'l21-listen-3', question: 'Melyik forma jelenti: «я вижу тебя»?', options: ['látom', 'látsz', 'látlak'], correctIndex: 2 },
  ],
  listeningB: {
    title: 'Аудирование B: выбираем фильм',
    assetId: 'l21_listening_b_film_choice',
    audioStatus: 'published',
    transcript: 'Dóra: Szia, hallasz engem?\nMárk: Igen, most már hallak. Mit csinálsz?\nDóra: Filmet keresek estére. Ismered azt az új magyar filmet, amit múlt héten mutattak be?\nMárk: A Késői vonatot? Igen, ismerem. Tegnap láttam.\nDóra: És tetszett?\nMárk: Igen, bár az eleje egy kicsit lassú volt. A főszereplőt viszont nagyon szeretem. Több filmjét is láttam már.\nDóra: Én őt nem ismerem. Miről szól a film?\nMárk: Egy fiatal nőről, aki új munkát kap egy kisvárosban. Ott megismer egy idős férfit, és együtt próbálnak megoldani egy régi családi problémát.\nDóra: Jól hangzik. Akkor ezt nézem meg.\nMárk: Van egy másik jó film is. Küldjek róla egy linket?\nDóra: Igen, küldd el! Megnézem az előzetest is.\nMárk: Rendben, mindjárt elküldöm.\nDóra: Köszönöm. Holnap felhívlak, és elmondom, melyiket választottam.\nMárk: Jó, várlak.',
    passCount: 5,
    questions: [
      { id: 'l21-listen-b-1', question: 'Miért telefonál Dóra Márknak?', options: ['Mert filmet keres estére.', 'Mert munkát keres.', 'Mert éttermet keres.'], correctIndex: 0 },
      { id: 'l21-listen-b-2', question: 'Mikor látta Márk a magyar filmet?', options: ['Tegnap.', 'Múlt héten.', 'Ma.'], correctIndex: 0 },
      { id: 'l21-listen-b-3', question: 'Mi nem tetszett teljesen Márknak?', options: ['Az eleje egy kicsit lassú volt.', 'A főszereplő játéka.', 'A film túl rövid volt.'], correctIndex: 0 },
      { id: 'l21-listen-b-4', question: 'Ismeri Dóra a főszereplőt?', options: ['Igen, több filmjét látta.', 'Nem, nem ismeri.', 'Igen, személyesen ismeri.'], correctIndex: 1 },
      { id: 'l21-listen-b-5', question: 'Mit küld Márk Dórának?', options: ['Egy linket egy másik filmről.', 'Egy mozijegyet.', 'Egy könyvet.'], correctIndex: 0 },
      { id: 'l21-listen-b-6', question: 'Mit fog Dóra tenni másnap?', options: ['Felhívja Márkot, és elmondja, melyik filmet választotta.', 'Moziba megy Márkkal.', 'Visszaküldi a linket.'], correctIndex: 0 },
    ],
  },
  rolePlay: {
    title: 'RolePlay: выбираем фильм на вечер',
    partnerLabel: 'Друг',
    completionMessage: 'Диалог завершён. Прослушай свои реплики и проверь, были ли контексты естественными.',
    startTurnId: 'l21-rp-1',
    turns: [
      { id: 'l21-rp-1', speaker: 'waiter', prompt: 'Na, mit nézzünk este?', next: 'l21-rp-2' },
      { id: 'l21-rp-2', speaker: 'learner', prompt: 'Предложи один фильм в неопределённом контексте.', responseMode: 'selfPractice', model: 'Nézzünk meg egy magyar filmet!', next: 'l21-rp-3' },
      { id: 'l21-rp-3', speaker: 'waiter', prompt: 'Jó ötlet. Egyébként ismered ezt a filmet?', next: 'l21-rp-4' },
      { id: 'l21-rp-4', speaker: 'learner', prompt: 'Ответь о конкретном фильме и назови ещё один неопределённый вариант.', responseMode: 'selfPractice', model: 'Ezt nem ismerem, de ismerek egy másik magyar filmet.', next: 'l21-rp-5' },
      { id: 'l21-rp-5', speaker: 'waiter', prompt: 'És a főszereplőt ismered?', next: 'l21-rp-6' },
      { id: 'l21-rp-6', speaker: 'learner', prompt: 'Используй объектное местоимение őt и определённую форму.', responseMode: 'selfPractice', model: 'Igen, ismerem. Tavaly láttam őt egy másik filmben.', next: 'l21-rp-7' },
      { id: 'l21-rp-7', speaker: 'waiter', prompt: 'Rendben. Akkor a mozi előtt találkozunk?', next: 'l21-rp-8' },
      { id: 'l21-rp-8', speaker: 'learner', prompt: 'Заверши естественно. Если подходит контекст, можно использовать -lak/-lek, но это не обязательно.', responseMode: 'selfPractice', model: 'Igen, jó. Várlak a mozi előtt.' },
    ],
  },
  writingTitle: 'Письмо: что я обычно и сейчас читаю или смотрю',
  writingPrompt: 'Напиши 80–100 слов: что ты обычно читаешь или смотришь и что конкретно читаешь или смотришь сейчас. Используй минимум 3 неопределённых и 3 определённых объектных контекста.',
  writingModel: ['Olvasok egy könyvet. Olvasom a könyvet.', 'Nézek egy filmet. Nézem a filmet.', 'Látlak téged.'],
  writingRubric: ['80–100 слов', 'Есть минимум 3 неопределённых объектных контекста', 'Есть минимум 3 определённых объектных контекста', 'Формы спряжения согласованы с дополнениями', 'Текст связный и понятный'],
  objectiveChecks: [
    { objectiveId: 'l21_choose-conjugation', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l21_use-object-pronouns', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l21_form-lak-lek', activity: 'controlled', evidenceKind: 'grammar' },
    {
      objectiveId: 'l21_distinguish-conjugations',
      activity: 'listeningB',
      evidenceKind: 'listening',
      evidenceComponents: [{ activity: 'listening', evidenceKind: 'listening' }],
    },
    {
      objectiveId: 'l21_apply-conjugation',
      activity: 'writing',
      evidenceKind: 'writing',
      evidenceComponents: [{ activity: 'roleplay', evidenceKind: 'interaction' }],
    },
  ],
});

const L21_OPTIONAL_SPEAKING = {
  title: 'Говорение: мои привычки и конкретный выбор',
  instructions: 'Говори 90–120 секунд на ту же коммуникативную тему, но не повторяй письменный текст дословно. Сравни обычные привычки с конкретной книгой, фильмом или программой сейчас.',
  prompt: 'Gyakran olvasok könyveket és nézek filmeket. Most ezt a könyvet olvasom, és azt a filmet nézem.',
  rubric: ['90–120 секунд', 'Есть обычные и конкретные контексты', 'Определённое и неопределённое спряжение используется осмысленно', 'Речь связная и понятная'],
};

export const LESSON_21: Lesson = {
  id: 21,
  number: 21,
  level: 'B1',
  title: 'Урок 21 · Alanyi és tárgyas ragozás II',
  subtitle: 'Определённое и неопределённое спряжение — углубление',
  description: 'Глубокий анализ видов спряжения, сложные случаи с местоимениями (engem, téged, titeket), форма -lak/-lek («я тебя...») и практические контрасты.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 21 · 1/11 · ВВЕДЕНИЕ",
      title: "Bevezetés: mit választ a tárgy?",
      subtitle: "Сначала определи объект — только потом выбирай окончание глагола",
      note: 'Цель урока: не угадывать форму по звучанию, а объяснять выбор через тип прямого объекта.',
      warn: 'Нельзя решать по одному окончанию. Одинаково звучащие окончания могут относиться к разным моделям.',
      task: 'Прочитай три базовые модели. Для каждой назови: есть ли прямой объект, какой он и почему выбрана эта форма.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Главная идея</h4>
        <p>У переходного венгерского глагола форма зависит не только от лица подлежащего. Важно понять, <b>есть ли прямой объект и какого он грамматического типа</b>.</p>
        <p>Прогрессия курса последовательна: в L7 начался выбор формы, в L13 был закреплён контраст настоящего времени, в L20 изучена система прошедшего времени, а L21 переносит выбор спряжения в контекстную коммуникацию.</p>

        <table class="conj">
          <tr><th>Контекст</th><th>Пример</th><th>Решение</th></tr>
          <tr>
            <td>конкретного объекта нет</td>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>неопределённая форма</td>
          </tr>
          <tr>
            <td>один, пока не конкретизированный объект</td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>неопределённая форма</td>
          </tr>
          <tr>
            <td>конкретный объект</td>
            <td><button class="speak-btn" data-speak-text="Olvasom ezt a könyvet." data-speak-lang="hu-HU">Olvasom ezt a könyvet.</button></td>
            <td>определённая форма</td>
          </tr>
        </table>

        <div class="note">
          Венгерские названия моделей:
          <button class="speak-btn" data-speak-text="alanyi ragozás" data-speak-lang="hu-HU">alanyi ragozás</button>
          и
          <button class="speak-btn" data-speak-text="tárgyas ragozás" data-speak-lang="hu-HU">tárgyas ragozás</button>.
          В курсе используем практические русские названия: неопределённое и определённое спряжение.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что нужно научиться различать</h4>
        <ol class="tasklist">
          <li>нет прямого объекта или объект неопределённый;</li>
          <li>объект конкретный и относится к третьему лицу;</li>
          <li>объект — говорящий или собеседник;</li>
          <li>особая комбинация «я → тебя / вас».</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Предварительная карта</h4>
        <table class="conj">
          <tr><th>Объект</th><th>Модель</th><th>Пример</th></tr>
          <tr><td>меня</td><td>неопределённая</td><td><button class="speak-btn" data-speak-text="Lát engem." data-speak-lang="hu-HU">Lát engem.</button></td></tr>
          <tr><td>его / её</td><td>определённая</td><td><button class="speak-btn" data-speak-text="Látom őt." data-speak-lang="hu-HU">Látom őt.</button></td></tr>
          <tr><td>я → тебя</td><td>особая форма</td><td><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></td></tr>
        </table>

        <div class="warn">Не переносите русскую логику «конкретный человек — значит всегда определённое спряжение». Объекты первого и второго лица образуют отдельную систему, которую разберём пошагово.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Алгоритм урока</h4>
        <ol class="tasklist">
          <li>найди конечный глагол;</li>
          <li>задай к нему вопрос «кого? что?»;</li>
          <li>определи лицо и определённость объекта;</li>
          <li>только после этого выбирай форму.</li>
        </ol>

        <div class="task">Скажи вслух три базовых примера из таблицы и объясни выбор формы одним коротким русским предложением.</div>
        <div class="note">Граница 21.1: здесь формируем карту решения. На 21.2 подробно разбираем все основные случаи неопределённого спряжения.</div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 21 · 2/11 · НЕОПРЕДЕЛЁННОЕ",
      title: "Rendszerezés: mikor alanyi?",
      subtitle: "Все основные случаи неопределённого спряжения без ложных упрощений",
      note: 'Неопределённая форма используется не только с неопределённым артиклем. Решение зависит от отсутствия объекта или от его грамматического типа.',
      warn: 'Не определяй модель только по окончанию глагола. Например, iszom оканчивается на -om, но в фразе с vizet это неопределённая форма.',
      task: 'В каждом примере найди прямой объект. Если его нет, назови это. Если есть, объясни, почему объект остаётся неопределённым.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Конкретного прямого объекта нет</h4>
        <p><button class="speak-btn" data-speak-text="Megyek a parkba." data-speak-lang="hu-HU">Megyek a parkba.</button></p>
        <div class="note"><b>a parkba</b> отвечает на вопрос «куда?» и не является прямым объектом во винительном падеже.</div>

        <p><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></p>
        <div class="note">Глагол переходный, но здесь говорящий сообщает о чтении без конкретного текста, известного из контекста. Поэтому используется неопределённая форма.</div>
        <div class="warn">Не путай это с пропуском уже известного конкретного объекта: в таком контексте определённая форма может сохраняться. Эту границу подробно разберём на 21.3.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Объект с неопределённым артиклем</h4>
        <p><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></p>
        <div class="note"><b>egy könyvet</b> — один объект, который ещё не выделен как конкретный.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Объект без артикля</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Пример</th></tr>
          <tr><td>единственное число</td><td><button class="speak-btn" data-speak-text="Könyvet olvasok." data-speak-lang="hu-HU">Könyvet olvasok.</button></td></tr>
          <tr><td>множественное число</td><td><button class="speak-btn" data-speak-text="Könyveket olvasok." data-speak-lang="hu-HU">Könyveket olvasok.</button></td></tr>
          <tr><td>вещество / неисчисляемое значение</td><td><button class="speak-btn" data-speak-text="Vizet iszom." data-speak-lang="hu-HU">Vizet iszom.</button></td></tr>
        </table>
        <div class="warn"><b>Vizet iszom.</b> — неопределённый контекст. Окончание <b>-om</b> здесь является формой самого глагола, а не доказательством определённого спряжения.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Вопросительные и неопределённые местоимения</h4>
        <table class="conj">
          <tr><th>Объектная форма</th><th>Значение</th><th>Пример</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="mit" data-speak-lang="hu-HU">mit</button></td><td>что?</td><td><button class="speak-btn" data-speak-text="Mit keresel?" data-speak-lang="hu-HU">Mit keresel?</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="valamit" data-speak-lang="hu-HU">valamit</button></td><td>что-то</td><td><button class="speak-btn" data-speak-text="Valamit keresek." data-speak-lang="hu-HU">Valamit keresek.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="semmit" data-speak-lang="hu-HU">semmit</button></td><td>ничего</td><td><button class="speak-btn" data-speak-text="Semmit nem látok." data-speak-lang="hu-HU">Semmit nem látok.</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="bármit" data-speak-lang="hu-HU">bármit</button></td><td>что угодно</td><td><button class="speak-btn" data-speak-text="Bármit választhatsz." data-speak-lang="hu-HU">Bármit választhatsz.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Объект — говорящий или собеседник</h4>
        <p><button class="speak-btn" data-speak-text="Ő lát engem." data-speak-lang="hu-HU">Ő lát engem.</button></p>
        <p><button class="speak-btn" data-speak-text="Ő lát téged." data-speak-lang="hu-HU">Ő lát téged.</button></p>
        <div class="note">Объекты первого и второго лица сочетаются с неопределённой формой. Особую модель «я → тебя / вас» разберём отдельно на слайде 5.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Короткое дерево решения</h4>
        <ol class="tasklist">
          <li>нет прямого объекта → неопределённая форма;</li>
          <li>есть <b>egy</b> или объект без артикля → неопределённая форма;</li>
          <li>объект выражен формами «что? / что-то / ничего / что угодно» → неопределённая форма;</li>
          <li>объект — меня или тебя → неопределённая система; особую форму изучим отдельно.</li>
        </ol>

        <div class="task">Не глядя на объяснения, классифицируй семь примеров: без объекта, с артиклем, без артикля, местоимение или объект первого/второго лица.</div>
        <div class="note">Граница 21.2: здесь только неопределённые контексты. На 21.3 разберём конкретные объекты третьего лица и определённое спряжение.</div>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 21 · 3/11 · ОПРЕДЕЛЁННОЕ",
      title: "Rendszerezés: mikor tárgyas?",
      subtitle: "Определённая форма появляется из-за конкретного прямого объекта",
      note: 'Сначала найди прямой объект в винительном падеже. Только потом проверяй, определённый ли он.',
      warn: 'Артикль a / az, имя собственное или притяжательная форма не меняют спряжение, если они не являются прямым объектом данного глагола.',
      task: 'В каждом примере найди глагол, задай вопрос «кого? что?» и назови признак определённости объекта.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Базовый контраст</h4>
        <table class="conj">
          <tr><th>Объект</th><th>Пример</th><th>Форма</th></tr>
          <tr>
            <td>одна книга, впервые вводим в разговор</td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>неопределённая</td>
          </tr>
          <tr>
            <td>конкретная, уже понятная книга</td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>определённая</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Основные признаки определённого объекта</h4>
        <table class="conj">
          <tr><th>Признак</th><th>Пример</th><th>Что делает объект определённым</th></tr>
          <tr>
            <td>определённый артикль</td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td><b>a könyvet</b> — конкретная книга</td>
          </tr>
          <tr>
            <td>указательная конструкция</td>
            <td><button class="speak-btn" data-speak-text="Ezt a könyvet olvasom." data-speak-lang="hu-HU">Ezt a könyvet olvasom.</button></td>
            <td><b>ezt a könyvet</b> — именно эта книга</td>
          </tr>
          <tr>
            <td>имя собственное как объект</td>
            <td><button class="speak-btn" data-speak-text="Ismerem Pétert." data-speak-lang="hu-HU">Ismerem Pétert.</button></td>
            <td><b>Pétert</b> — конкретный человек</td>
          </tr>
          <tr>
            <td>притяжательная форма</td>
            <td><button class="speak-btn" data-speak-text="Szeretem a barátomat." data-speak-lang="hu-HU">Szeretem a barátomat.</button></td>
            <td><b>a barátomat</b> — мой конкретный друг</td>
          </tr>
          <tr>
            <td>местоимение третьего лица</td>
            <td><button class="speak-btn" data-speak-text="Látom őt." data-speak-lang="hu-HU">Látom őt.</button></td>
            <td><b>őt</b> — его или её</td>
          </tr>
          <tr>
            <td>множественное местоимение третьего лица</td>
            <td><button class="speak-btn" data-speak-text="Ismerem őket." data-speak-lang="hu-HU">Ismerem őket.</button></td>
            <td><b>őket</b> — их</td>
          </tr>
        </table>

        <div class="note">
          Формы указательных местоимений в винительном падеже:
          <button class="speak-btn" data-speak-text="ezt" data-speak-lang="hu-HU">ezt</button>
          и
          <button class="speak-btn" data-speak-text="azt" data-speak-lang="hu-HU">azt</button>.
          Правильно: <b>ezt</b>, а не <b>ezet</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Объект можно не повторять</h4>
        <p><button class="speak-btn" data-speak-text="Ismered ezt a filmet?" data-speak-lang="hu-HU">Ismered ezt a filmet?</button></p>
        <p><button class="speak-btn" data-speak-text="Igen, ismerem." data-speak-lang="hu-HU">Igen, ismerem.</button></p>
        <div class="note">Во втором предложении конкретный фильм не назван повторно, но он уже известен из вопроса. Поэтому определённая форма сохраняется.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Содержание целого придаточного</h4>
        <p><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></p>
        <div class="note">Объектное придаточное содержания после подходящего переходного глагола может передавать содержание известного «это»: «я знаю это — что ты здесь». Это не правило для любого предложения с союзом <b>hogy</b>.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Ложные сигналы</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Почему не определённая форма</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A parkban olvasok." data-speak-lang="hu-HU">A parkban olvasok.</button></td>
            <td><b>a parkban</b> отвечает на вопрос «где?», а не «что?»</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Péterrel beszélek." data-speak-lang="hu-HU">Péterrel beszélek.</button></td>
            <td><b>Péterrel</b> означает «с Петером» и не является прямым объектом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">Egy könyvet olvasok.</button></td>
            <td><b>egy</b> вводит неопределённый объект</td>
          </tr>
        </table>

        <div class="task">Закрой объяснения и классифицируй девять примеров: назови прямой объект, его признак и выбранную форму глагола.</div>
        <div class="note">Граница 21.3: здесь объект третьего лица или конкретная именная группа. На 21.4 сравним их с объектами первого и второго лица.</div>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 21 · 4/11 · МЕСТОИМЕНИЯ",
      title: "Trükkös esetek: engem, téged, minket, titeket",
      subtitle: "Конкретные люди, но глагол не переходит в определённую парадигму",
      note: 'Для выбора формы важна не только конкретность человека, но и грамматическое лицо объекта.',
      warn: 'Не называй эти местоимения неопределёнными. Они конкретные по смыслу, но требуют неопределённой парадигмы глагола.',
      task: 'В каждой строке назови лицо подлежащего, лицо объекта и форму глагола. Затем сравни с объектами őt и őket.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Четыре объекта первого и второго лица</h4>
        <table class="conj">
          <tr><th>Венгерская форма</th><th>Значение</th><th>Лицо объекта</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="engem" data-speak-lang="hu-HU">engem</button></td><td>меня</td><td>первое лицо, единственное число</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="téged" data-speak-lang="hu-HU">téged</button></td><td>тебя</td><td>второе лицо, единственное число</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="minket" data-speak-lang="hu-HU">minket</button></td><td>нас</td><td>первое лицо, множественное число</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="titeket" data-speak-lang="hu-HU">titeket</button></td><td>вас</td><td>второе лицо, множественное число</td></tr>
        </table>

        <div class="note">
          В разговорной и литературной речи также встречаются формы
          <button class="speak-btn" data-speak-text="bennünket" data-speak-lang="hu-HU">bennünket</button>
          и
          <button class="speak-btn" data-speak-text="benneteket" data-speak-lang="hu-HU">benneteket</button>.
          На этом уровне достаточно уверенно узнавать их как варианты «нас» и «вас».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как ведёт себя глагол</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Подлежащее</th><th>Объект</th><th>Модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Látsz engem?" data-speak-lang="hu-HU">Látsz engem?</button></td>
            <td>ты</td><td>меня</td><td>неопределённая</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna lát engem." data-speak-lang="hu-HU">Anna lát engem.</button></td>
            <td>Анна</td><td>меня</td><td>неопределённая</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna lát téged." data-speak-lang="hu-HU">Anna lát téged.</button></td>
            <td>Анна</td><td>тебя</td><td>неопределённая</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna lát minket." data-speak-lang="hu-HU">Anna lát minket.</button></td>
            <td>Анна</td><td>нас</td><td>неопределённая</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna lát titeket." data-speak-lang="hu-HU">Anna lát titeket.</button></td>
            <td>Анна</td><td>вас</td><td>неопределённая</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Контраст с третьим лицом</h4>
        <table class="conj">
          <tr><th>Объект</th><th>Пример</th><th>Модель</th></tr>
          <tr>
            <td>его / её</td>
            <td><button class="speak-btn" data-speak-text="Anna látja őt." data-speak-lang="hu-HU">Anna látja őt.</button></td>
            <td>определённая</td>
          </tr>
          <tr>
            <td>их</td>
            <td><button class="speak-btn" data-speak-text="Anna látja őket." data-speak-lang="hu-HU">Anna látja őket.</button></td>
            <td>определённая</td>
          </tr>
        </table>

        <div class="note">Рабочее правило: объект первого или второго лица ведёт к неопределённой парадигме. Определённый объект третьего лица ведёт к определённой парадигме.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Особая комбинация «я → тебя / вас»</h4>
        <p><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></p>
        <p><button class="speak-btn" data-speak-text="Szeretlek." data-speak-lang="hu-HU">Szeretlek.</button></p>
        <div class="warn">Когда подлежащее — «я», а объект — «тебя» или «вас», обычная неопределённая форма заменяется специальным окончанием. Полную модель разберём на 21.5.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Алгоритм</h4>
        <ol class="tasklist">
          <li>найди прямой объект;</li>
          <li>определи его лицо;</li>
          <li>первое или второе лицо → неопределённая парадигма;</li>
          <li>третье лицо и определённый объект → определённая парадигма;</li>
          <li>«я → тебя / вас» → специальная форма следующего слайда.</li>
        </ol>

        <div class="task">Преобразуй модель с Анной пять раз: «видит меня», «видит тебя», «видит нас», «видит вас», «видит их». Затем объясни, почему последняя форма отличается.</div>
        <div class="note">Граница 21.4: сейчас важно различать лицо объекта. Образование и гармонию специального окончания изучаем только на 21.5.</div>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 21 · 5/11 · ОКОНЧАНИЕ -LAK/-LEK",
      title: "A -lak/-lek végződés",
      subtitle: "Особая связь: подлежащее én + объект téged / titeket",
      type: 'grammar',
      note: 'Форма -lak/-lek кодирует сразу двух участников: «я» выполняю действие, а объект — «ты» или неформальное «вы» во множественном числе.',
      warn: 'Не используй -lak/-lek с вежливым Ön / Önöket: грамматически это 3-е лицо, поэтому там работает обычное определённое спряжение.',
      task: 'Для каждого примера назови скрытое подлежащее и объект. Затем без местоимения построй 3 фразы: «я тебя вижу», «я тебя слышу», «я тебя жду».',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что кодирует окончание</h4>

        <table class="conj">
          <tr><th>Кто действует</th><th>Кого / кого во множественном числе</th><th>Специальная форма</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU">én</button></td>
            <td><button class="speak-btn" data-speak-text="téged" data-speak-lang="hu-HU">téged</button> / <button class="speak-btn" data-speak-text="titeket" data-speak-lang="hu-HU">titeket</button></td>
            <td><b>-lak / -lek</b></td>
          </tr>
        </table>

        <div class="note">
          Поэтому в обычной фразе местоимения часто не нужны:
          само окончание уже показывает «я → тебя / вас».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Частые формы как готовые блоки</h4>

        <p><button class="speak-btn" data-speak-text="Szeretlek." data-speak-lang="hu-HU">Szeretlek.</button></p>
        <p><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></p>
        <p><button class="speak-btn" data-speak-text="Hallak." data-speak-lang="hu-HU">Hallak.</button></p>
        <p><button class="speak-btn" data-speak-text="Várlak." data-speak-lang="hu-HU">Várlak.</button></p>
        <p><button class="speak-btn" data-speak-text="Ismerlek." data-speak-lang="hu-HU">Ismerlek.</button></p>

        <div class="note">
          Эти формы особенно полезны в живом диалоге и телефонном разговоре.
          В Controlled Practice прямо встретятся формы <b>Látlak</b> и <b>Hallak</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Когда местоимение всё-таки появляется</h4>

        <p><button class="speak-btn" data-speak-text="Látlak téged." data-speak-lang="hu-HU">Látlak téged.</button></p>
        <p><button class="speak-btn" data-speak-text="Várlak titeket." data-speak-lang="hu-HU">Várlak titeket.</button></p>

        <div class="note">
          Явное местоимение можно добавить для противопоставления, уточнения или акцента,
          но оно не нужно для самого грамматического кодирования лиц.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. -lak или -lek?</h4>

        <p><button class="speak-btn" data-speak-text="várlak" data-speak-lang="hu-HU">várlak</button> · <button class="speak-btn" data-speak-text="látlak" data-speak-lang="hu-HU">látlak</button></p>
        <p><button class="speak-btn" data-speak-text="szeretlek" data-speak-lang="hu-HU">szeretlek</button> · <button class="speak-btn" data-speak-text="ismerlek" data-speak-lang="hu-HU">ismerlek</button></p>

        <div class="note">
          Вариант окончания следует знакомой гармонии гласных.
          Для частых глаголов всё равно полезно запоминать готовую форму целиком.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Где -lak/-lek НЕ используется</h4>

        <p><button class="speak-btn" data-speak-text="Ő lát téged." data-speak-lang="hu-HU">Ő lát téged.</button></p>
        <p><button class="speak-btn" data-speak-text="Látom Önt." data-speak-lang="hu-HU">Látom Önt.</button></p>

        <div class="warn">
          Специальное окончание требует именно комбинацию:
          <b>подлежащее = én</b> и <b>объект = téged / titeket</b>.
          Если подлежащее другое или объект грамматически 3-го лица, выбирается другая модель.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Как сказать «я тебя вижу» одним глаголом?</p>
          <p>Как сказать «я тебя слышу»?</p>
          <p>Можно ли использовать -lak/-lek, если подлежащее — ő?</p>
          <p>Почему Látom Önt. не использует -lak/-lek?</p>
        </details>

        <div class="note">
          Граница 21.5: только особая связь «я → тебя / вас».
          На 21.6 разберём другую ловушку: окончание -om/-em/-öm само по себе ещё не доказывает определённое спряжение.
        </div>
      `,
    },    {
      id: 6,
      eyebrow: "УРОК 21 · 6/11 · ВОЗВРАТНЫЕ ГЛАГОЛЫ",
      title: "Mosakodom ≠ tárgyas ragozás",
      subtitle: "Окончание -om/-em/-öm само по себе не доказывает определённое спряжение",
      type: 'grammar',
      note: 'У mosakodik и öltözködik в изученных здесь значениях нет прямого объекта. Поэтому их формы не становятся tárgyas только из-за внешнего окончания.',
      warn: 'Не определяй тип спряжения по одному окончанию. Сначала спроси: есть ли прямой объект и является ли он определённым?',
      task: 'Сравни две пары: действие без прямого объекта и действие с конкретным объектом. Для каждой фразы объясни выбор спряжения.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Действие направлено на самого себя, но прямого объекта нет</h4>

        <p><button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU">mosakodik</button> — умываться.</p>
        <p><button class="speak-btn" data-speak-text="öltözködik" data-speak-lang="hu-HU">öltözködik</button> — одеваться.</p>

        <p><button class="speak-btn" data-speak-text="Mosakodom." data-speak-lang="hu-HU">Mosakodom.</button></p>
        <p><button class="speak-btn" data-speak-text="Öltözködöm." data-speak-lang="hu-HU">Öltözködöm.</button></p>

        <div class="note">
          Здесь нет отдельного дополнения в винительном падеже.
          Форма описывает действие самого участника и остаётся неопределённой.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Почему окончание может обмануть</h4>

        <p><button class="speak-btn" data-speak-text="Dolgozom." data-speak-lang="hu-HU">Dolgozom.</button></p>

        <div class="note">
          Форма с похожим окончанием встречается и у других глаголов без определённого прямого объекта.
          Поэтому само <b>-om/-em/-öm</b> не является надёжным тестом на tárgyas ragozás.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Настоящий определённый объект меняет ситуацию</h4>

        <p><button class="speak-btn" data-speak-text="Mosom a kezem." data-speak-lang="hu-HU">Mosom a kezem.</button></p>
        <p><button class="speak-btn" data-speak-text="Felveszem a kabátot." data-speak-lang="hu-HU">Felveszem a kabátot.</button></p>

        <div class="note">
          Теперь есть конкретный прямой объект:
          <b>a kezem</b> и <b>a kabátot</b>.
          Именно объект и его определённость дают основание для tárgyas ragozás.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Диагностика в два вопроса</h4>

        <ol class="tasklist">
          <li>Есть ли у глагола прямой объект в этой конкретной фразе?</li>
          <li>Если есть, требует ли этот объект определённого спряжения?</li>
        </ol>

        <div class="warn">
          Если прямого объекта нет, нельзя объявлять форму определённой только потому,
          что она заканчивается на -om/-em/-öm.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Граница обобщения</h4>

        <div class="note">
          Здесь мы говорим только о знакомых <b>mosakodik</b> и <b>öltözködik</b>
          в этих значениях. Не выводи правило, что любой глагол с -kodik/-kedik/-ködik
          автоматически возвратный или обязательно непереходный.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Есть ли прямой объект в Mosakodom.?</p>
          <p>Почему окончание -om не доказывает tárgyas ragozás?</p>
          <p>Что меняется в Mosom a kezem.?</p>
          <p>Можно ли распространить это объяснение на все глаголы с -kodik/-kedik/-ködik?</p>
        </details>

        <div class="note">
          Граница 21.6: отличаем форму по функции, а не по внешнему окончанию.
          На 21.7 возвращаемся к практике выбора спряжения в реальных фразах.
        </div>
      `,
    },    {
      id: 7,
      eyebrow: "УРОК 21 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Не угадывай окончание: сначала найди объект и его роль",
      type: 'practice',
      note: 'Для каждой формы объясняй не только «что правильно», но и какой объект управляет выбором спряжения.',
      warn: 'Не строй универсальные shortcut-правила по одному инфинитиву или одному придаточному. Анализируй конкретный глагол и его прямой объект.',
      task: 'Для каждого примера назови: глагол → прямой объект или его отсутствие → тип формы. Затем собери 4 коротких ответа без подсказки.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Определённый объект</h4>
        <p><button class="speak-btn" data-speak-text="Szeretem a zenét." data-speak-lang="hu-HU">Szeretem a zenét.</button></p>
        <div class="note"><b>a zenét</b> — конкретный прямой объект, поэтому форма определённая.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Инфинитивное дополнение</h4>
        <p><button class="speak-btn" data-speak-text="Szeretek zenét hallgatni." data-speak-lang="hu-HU">Szeretek zenét hallgatni.</button></p>
        <div class="note">У конечного глагола здесь инфинитивное дополнение; zenét — неопределённый прямой объект глагола hallgatni.</div>
        <div class="warn">Это не правило «инфинитив = всегда неопределённое спряжение».</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Содержание как объект</h4>
        <p><button class="speak-btn" data-speak-text="Nem hallom, mit mondasz." data-speak-lang="hu-HU">Nem hallom, mit mondasz.</button></p>
        <div class="note">Встроенный вопрос передаёт содержание того, что слышат, поэтому здесь стоит определённая форма <b>hallom</b>.</div>
        <div class="warn">Не делай правило «придаточное = всегда tárgyas»: здесь важна функция конкретной части предложения.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Быстрые функциональные пары</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Опора</th></tr>
          <tr><td>что читаешь?</td><td><button class="speak-btn" data-speak-text="Mit olvasol?" data-speak-lang="hu-HU">Mit olvasol?</button></td></tr>
          <tr><td>что смотришь?</td><td><button class="speak-btn" data-speak-text="Mit nézel?" data-speak-lang="hu-HU">Mit nézel?</button></td></tr>
          <tr><td>знаешь это?</td><td><button class="speak-btn" data-speak-text="Ismered ezt?" data-speak-lang="hu-HU">Ismered ezt?</button></td></tr>
          <tr><td>да, знаю</td><td><button class="speak-btn" data-speak-text="Igen, ismerem." data-speak-lang="hu-HU">Igen, ismerem.</button></td></tr>
          <tr><td>нет, не знаю</td><td><button class="speak-btn" data-speak-text="Nem ismerem." data-speak-lang="hu-HU">Nem ismerem.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Объекты собеседника</h4>
        <p><button class="speak-btn" data-speak-text="Látsz engem?" data-speak-lang="hu-HU">Látsz engem?</button></p>
        <p><button class="speak-btn" data-speak-text="Igen, látlak." data-speak-lang="hu-HU">Igen, látlak.</button></p>
        <p><button class="speak-btn" data-speak-text="Hallak." data-speak-lang="hu-HU">Hallak.</button></p>
        <p><button class="speak-btn" data-speak-text="Várlak." data-speak-lang="hu-HU">Várlak.</button></p>
        <div class="note">С <b>engem</b> используется неопределённая форма; в ответе «я → тебя» появляется специальная -lak/-lek форма.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-диагностика</h4>
        <ol class="tasklist">
          <li>назови конечный глагол;</li>
          <li>найди его прямой объект;</li>
          <li>определи лицо / определённость объекта;</li>
          <li>только потом объясни окончание.</li>
        </ol>

        <div class="note">Граница 21.7: диагностируем выбор формы в короткой фразе. На 21.8 тот же навык переносим в связный диалог.</div>
      `,
    },    {
      id: 8,
      eyebrow: "УРОК 21 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Один диалог — шесть решений о спряжении",
      type: 'dialogue',
      note: 'Проследи цепочку «глагол → объект → форма». Именно это, а не перевод всей реплики целиком, объясняет окончания.',
      warn: 'téged — конкретный человек по смыслу, но грамматически объект 2-го лица. При подлежащем ő используется неопределённая форма.',
      task: 'Прочитай диалог по ролям. Затем для каждого глагола назови объект и объясни форму.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Диалог</h4>
        <p><b>A:</b> <button class="speak-btn" data-speak-text="Látod azt az embert ott?" data-speak-lang="hu-HU">Látod azt az embert ott?</button></p>
        <p><b>B:</b> <button class="speak-btn" data-speak-text="Nem látom, mert nem hordom a szemüvegemet." data-speak-lang="hu-HU">Nem látom, mert nem hordom a szemüvegemet.</button></p>
        <p><b>A:</b> <button class="speak-btn" data-speak-text="Azt hiszem, ismerem őt." data-speak-lang="hu-HU">Azt hiszem, ismerem őt.</button></p>
        <p><b>B:</b> <button class="speak-btn" data-speak-text="És ő is ismer téged?" data-speak-lang="hu-HU">És ő is ismer téged?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Карта «глагол → объект»</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Объект</th><th>Решение</th></tr>
          <tr><td><b>látod</b></td><td><b>azt az embert</b></td><td>определённый</td></tr>
          <tr><td><b>látom</b></td><td>тот же человек, объект опущен</td><td>определённый по контексту</td></tr>
          <tr><td><b>hordom</b></td><td><b>a szemüvegemet</b></td><td>притяжательный определённый объект</td></tr>
          <tr><td><b>hiszem</b></td><td><b>azt</b> + содержание мысли</td><td>определённая форма</td></tr>
          <tr><td><b>ismerem</b></td><td><b>őt</b></td><td>объект 3-го лица</td></tr>
          <tr><td><b>ismer</b></td><td><b>téged</b></td><td>объект 2-го лица → неопределённая форма</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Самая важная пара</h4>
        <p><button class="speak-btn" data-speak-text="Ismerem őt." data-speak-lang="hu-HU">Ismerem őt.</button></p>
        <p><button class="speak-btn" data-speak-text="Ő ismer téged." data-speak-lang="hu-HU">Ő ismer téged.</button></p>
        <div class="note"><b>őt</b> → 3-е лицо → определённая форма. <b>téged</b> → 2-е лицо → при подлежащем ő неопределённая форма.</div>
        <div class="warn">Если подлежащее меняется на én и объект остаётся téged, вспоминай специальную -lak/-lek модель из 21.5.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Диагностика в четыре шага</h4>
        <ol class="tasklist">
          <li>найди конечный глагол;</li>
          <li>найди его прямой объект;</li>
          <li>определи лицо / определённость объекта;</li>
          <li>выбери alanyi, tárgyas или специальную -lak/-lek форму.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Мини-продолжение без готового ответа</h4>
        <div class="task">Представь плохую телефонную связь. Один человек спрашивает, видят ли и слышат ли его. Ответь двумя короткими фразами, используя материал 21.5–21.7.</div>

        <div class="note">Граница 21.8: связный анализ спряжения в диалоге. На 21.9 начинается полноценный блок заданий с автоматической проверкой.</div>
      `,
    },        {
      id: 9,
      eyebrow: "УРОК 21 · 9/11 · ИНТЕГРАЦИОННАЯ ПРАКТИКА",
      title: "Tárgyból igealak",
      subtitle: "Сначала распознай объект, затем выбери форму глагола",
      activities: L21_ACTIVITIES,
      optionalSpeaking: L21_OPTIONAL_SPEAKING,
      note: 'Не угадывай форму по окончанию. Каждый раз сначала анализируй прямой объект.',
      warn: 'Фраза Látom engem? не является нормальной проверкой правила. Для «он видит меня?» нужен другой субъект, а для «ты видишь меня?» — другая личная форма.',
      task: 'Пройди четыре этапа: классификация, исправление ошибки, мини-диалог и собственный связный ответ.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Алгоритм за несколько секунд</h4>
        <ol class="tasklist">
          <li>Есть ли прямой объект: кого? что?</li>
          <li>Если объекта нет или он неопределённый — выбирай неопределённую парадигму.</li>
          <li>Если это определённый объект третьего лица — выбирай определённую парадигму.</li>
          <li>Если объект первого или второго лица — обычно нужна неопределённая парадигма.</li>
          <li>Если подлежащее «я», а объект «тебя» или «вас» — используй специальную форму.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Одна ситуация — разные формы</h4>
        <table class="conj">
          <tr><th>Контекст</th><th>Пример</th><th>Почему</th></tr>
          <tr>
            <td>какой-то человек</td>
            <td><button class="speak-btn" data-speak-text="Látok egy embert." data-speak-lang="hu-HU">Látok egy embert.</button></td>
            <td>неопределённый объект</td>
          </tr>
          <tr>
            <td>конкретный Петер</td>
            <td><button class="speak-btn" data-speak-text="Látom Pétert." data-speak-lang="hu-HU">Látom Pétert.</button></td>
            <td>определённый объект третьего лица</td>
          </tr>
          <tr>
            <td>я вижу тебя</td>
            <td><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></td>
            <td>подлежащее «я», объект второго лица</td>
          </tr>
          <tr>
            <td>он видит меня</td>
            <td><button class="speak-btn" data-speak-text="Lát engem." data-speak-lang="hu-HU">Lát engem.</button></td>
            <td>объект первого лица</td>
          </tr>
          <tr>
            <td>ты видишь меня?</td>
            <td><button class="speak-btn" data-speak-text="Látsz engem?" data-speak-lang="hu-HU">Látsz engem?</button></td>
            <td>объект первого лица, субъект «ты»</td>
          </tr>
        </table>

        <div class="warn">
          Не выбирай между <b>látom</b> и <b>látok</b> перед словом <b>engem</b>.
          Сначала уточни, кто выполняет действие:
          <button class="speak-btn" data-speak-text="Lát engem." data-speak-lang="hu-HU">Lát engem.</button>
          или
          <button class="speak-btn" data-speak-text="Látsz engem?" data-speak-lang="hu-HU">Látsz engem?</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Три модели со слухом и знанием</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Объект</th><th>Модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hallok valamit." data-speak-lang="hu-HU">Hallok valamit.</button></td>
            <td>что-то</td><td>неопределённая</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hallom őt." data-speak-lang="hu-HU">Hallom őt.</button></td>
            <td>его или её</td><td>определённая</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hallak." data-speak-lang="hu-HU">Hallak.</button></td>
            <td>тебя</td><td>специальная форма</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy igazad van." data-speak-lang="hu-HU">Tudom, hogy igazad van.</button></td>
            <td>содержание целого сообщения</td><td>определённая</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 1. Классифицируй</h4>
        <div class="task">
          Для каждого примера назови: прямой объект, его лицо или признак определённости и выбранную парадигму.
          Не начинай с окончания глагола.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 2. Исправь</h4>
        <table class="conj">
          <tr><th>Ошибочная форма</th><th>Что нужно проверить</th></tr>
          <tr><td>Olvasom egy könyvet.</td><td>объект впервые вводится или уже известен?</td></tr>
          <tr><td>Ismerek Pétert.</td><td>имя собственное является прямым объектом?</td></tr>
          <tr><td>Látom téged.</td><td>объект какого лица?</td></tr>
          <tr><td>Hallok őt.</td><td>объект третьего лица определённый или нет?</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 3. Мини-диалог</h4>
        <p><button class="speak-btn" data-speak-text="Ismered ezt a filmet?" data-speak-lang="hu-HU">Ismered ezt a filmet?</button></p>
        <p><button class="speak-btn" data-speak-text="Nem ismerem, de ismerek egy másik magyar filmet." data-speak-lang="hu-HU">Nem ismerem, de ismerek egy másik magyar filmet.</button></p>
        <p><button class="speak-btn" data-speak-text="Hallak, de nem hallom a filmet." data-speak-lang="hu-HU">Hallak, de nem hallom a filmet.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 4. Собственный ответ</h4>
        <div class="task">
          Скажи или напиши шесть связанных предложений: два без конкретного объекта, два с конкретным объектом третьего лица, одно с объектом первого или второго лица и одно со специальной формой.
        </div>

        <div class="note">
          Самопроверка: ты можешь объяснить не только «какая форма», но и «кто действует», «кого или что затрагивает действие» и «почему объект считается определённым».
        </div>
      `,
    },
    {
      id: 10,
      eyebrow: "УРОК 21 · 10/11 · МОСТ К СЛЕДУЮЩЕЙ ТЕМЕ",
      title: "Ugyanaz a tárgy, más beszédszándék",
      subtitle: "Объект остаётся тем же, меняется коммуникативная задача",
      note: 'Сегодня перенеси только навык анализа объекта. Новые окончания полностью изучаются в следующем уроке.',
      warn: 'Не пытайся вывести всю повелительную парадигму по четырём примерам. Здесь это предварительное наблюдение, а не таблица правил.',
      task: 'В каждой паре сначала определи объект как неопределённый или определённый. Затем скажи, какая реплика сообщает факт, а какая выражает совет или просьбу.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Что уже известно</h4>
        <table class="conj">
          <tr><th>Объект</th><th>Сообщение о действии</th><th>Выбор в уроке 21</th></tr>
          <tr>
            <td>один фильм</td>
            <td><button class="speak-btn" data-speak-text="Nézel egy filmet." data-speak-lang="hu-HU">Nézel egy filmet.</button></td>
            <td>неопределённая парадигма</td>
          </tr>
          <tr>
            <td>этот фильм</td>
            <td><button class="speak-btn" data-speak-text="Nézed ezt a filmet." data-speak-lang="hu-HU">Nézed ezt a filmet.</button></td>
            <td>определённая парадигма</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что изменится дальше</h4>
        <p>В следующем уроке говорящий будет не сообщать о действии, а просить, советовать или побуждать собеседника.</p>
        <table class="conj">
          <tr><th>Коммуникативная задача</th><th>Неопределённый объект</th><th>Определённый объект</th></tr>
          <tr>
            <td>посоветовать посмотреть</td>
            <td><button class="speak-btn" data-speak-text="Nézz meg egy filmet!" data-speak-lang="hu-HU">Nézz meg egy filmet!</button></td>
            <td><button class="speak-btn" data-speak-text="Nézd meg ezt a filmet!" data-speak-lang="hu-HU">Nézd meg ezt a filmet!</button></td>
          </tr>
          <tr>
            <td>попросить прочитать</td>
            <td><button class="speak-btn" data-speak-text="Olvass el egy cikket!" data-speak-lang="hu-HU">Olvass el egy cikket!</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasd el ezt a cikket!" data-speak-lang="hu-HU">Olvasd el ezt a cikket!</button></td>
          </tr>
        </table>

        <div class="note">
          Постоянная часть логики: сначала определи объект.
          Меняющаяся часть: окончание глагола выражает другую коммуникативную задачу.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Три намерения говорящего</h4>
        <table class="conj">
          <tr><th>Намерение</th><th>Пример</th></tr>
          <tr>
            <td>сообщить факт</td>
            <td><button class="speak-btn" data-speak-text="Olvasod ezt a cikket." data-speak-lang="hu-HU">Olvasod ezt a cikket.</button></td>
          </tr>
          <tr>
            <td>задать вопрос</td>
            <td><button class="speak-btn" data-speak-text="Olvasod ezt a cikket?" data-speak-lang="hu-HU">Olvasod ezt a cikket?</button></td>
          </tr>
          <tr>
            <td>попросить или посоветовать</td>
            <td><button class="speak-btn" data-speak-text="Olvasd el ezt a cikket!" data-speak-lang="hu-HU">Olvasd el ezt a cikket!</button></td>
          </tr>
        </table>

        <div class="warn">
          Вопрос отличается от сообщения прежде всего интонацией.
          Просьба или совет меняет форму глагола. Правила образования этой формы пока не выводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка переноса</h4>
        <ol class="tasklist">
          <li>В выражении <b>egy filmet</b> назови тип объекта.</li>
          <li>В выражении <b>ezt a filmet</b> назови признак определённости.</li>
          <li>Не образуя новых форм, распределите четыре примера по двум колонкам: неопределённый объект и определённый объект.</li>
          <li>Отдельно отметь, какие реплики сообщают, спрашивают и побуждают.</li>
        </ol>

        <div class="task">
          Создай две пары по модели с глаголами «смотреть» и «читать»: сначала обычное сообщение, затем просьба или совет. Новые окончания можно брать только из готовых примеров на слайде.
        </div>

        <div class="note">
          Граница 21.10: урок 21 завершает выбор спряжения в сообщениях и вопросах. Следующий урок отдельно объяснит образование повелительных форм, отрицание, вежливость и порядок слов.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 21 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Прямой объект → его тип и лицо → форма глагола",
      note: 'Главный навык урока — не узнавать окончания на глаз, а объяснять выбор формы через прямой объект.',
      warn: 'Определённый артикль, имя или местоимение меняют спряжение только тогда, когда являются прямым объектом данного глагола.',
      task: 'Пройди итоговый алгоритм, исправь пять ошибок, выполни мини-проверку и создай собственный связный текст.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Итоговый алгоритм</h4>
        <ol class="tasklist">
          <li>Найди глагол и подлежащее: кто выполняет действие?</li>
          <li>Задай вопрос «кого? что?» и найди прямой объект.</li>
          <li>Нет объекта или объект неопределённый — используй неопределённую парадигму.</li>
          <li>Определённый объект третьего лица — используй определённую парадигму.</li>
          <li>Объект первого или второго лица — обычно используй неопределённую парадигму.</li>
          <li>Подлежащее «я» и объект «тебя / вас» — используй специальную форму.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Четыре основные модели</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Пример</th><th>Решение</th></tr>
          <tr>
            <td>нет конкретного объекта</td>
            <td>
              <button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button><br>
              <button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button>
            </td>
            <td>неопределённая парадигма</td>
          </tr>
          <tr>
            <td>конкретный объект третьего лица</td>
            <td>
              <button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button><br>
              <button class="speak-btn" data-speak-text="Ismerem Pétert." data-speak-lang="hu-HU">Ismerem Pétert.</button>
            </td>
            <td>определённая парадигма</td>
          </tr>
          <tr>
            <td>объект первого или второго лица</td>
            <td>
              <button class="speak-btn" data-speak-text="Anna lát engem." data-speak-lang="hu-HU">Anna lát engem.</button><br>
              <button class="speak-btn" data-speak-text="Anna lát téged." data-speak-lang="hu-HU">Anna lát téged.</button>
            </td>
            <td>неопределённая парадигма</td>
          </tr>
          <tr>
            <td>«я» действует на «тебя / вас»</td>
            <td>
              <button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button><br>
              <button class="speak-btn" data-speak-text="Szeretlek." data-speak-lang="hu-HU">Szeretlek.</button>
            </td>
            <td>специальная форма</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что считается определённым объектом</h4>
        <table class="conj">
          <tr><th>Признак</th><th>Пример</th></tr>
          <tr>
            <td>определённый артикль</td>
            <td><button class="speak-btn" data-speak-text="Nézem a filmet." data-speak-lang="hu-HU">Nézem a filmet.</button></td>
          </tr>
          <tr>
            <td>указательная конструкция</td>
            <td><button class="speak-btn" data-speak-text="Ezt a filmet nézem." data-speak-lang="hu-HU">Ezt a filmet nézem.</button></td>
          </tr>
          <tr>
            <td>имя собственное как прямой объект</td>
            <td><button class="speak-btn" data-speak-text="Ismerem Annát." data-speak-lang="hu-HU">Ismerem Annát.</button></td>
          </tr>
          <tr>
            <td>притяжательная форма</td>
            <td><button class="speak-btn" data-speak-text="Szeretem a családomat." data-speak-lang="hu-HU">Szeretem a családomat.</button></td>
          </tr>
          <tr>
            <td>местоимение третьего лица</td>
            <td><button class="speak-btn" data-speak-text="Látom őt." data-speak-lang="hu-HU">Látom őt.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Объект может быть понятен без повторения</h4>
        <p><button class="speak-btn" data-speak-text="Ismered ezt a filmet?" data-speak-lang="hu-HU">Ismered ezt a filmet?</button></p>
        <p><button class="speak-btn" data-speak-text="Igen, ismerem." data-speak-lang="hu-HU">Igen, ismerem.</button></p>
        <div class="note">Во втором ответе слово «фильм» не повторяется, но конкретный объект уже известен из вопроса. Поэтому определённая форма сохраняется.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Содержание целого сообщения</h4>
        <p><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></p>
        <div class="note">После подходящего переходного глагола придаточное передаёт содержание того, что известно, слышно или предполагается. Это не автоматическое правило для любого предложения с союзом.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пять типичных ошибок</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Olvasom egy könyvet.</td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>объект вводится как неопределённый</td>
          </tr>
          <tr>
            <td>Ismerek Pétert.</td>
            <td><button class="speak-btn" data-speak-text="Ismerem Pétert." data-speak-lang="hu-HU">Ismerem Pétert.</button></td>
            <td>имя — конкретный прямой объект</td>
          </tr>
          <tr>
            <td>Látja engem.</td>
            <td><button class="speak-btn" data-speak-text="Lát engem." data-speak-lang="hu-HU">Lát engem.</button></td>
            <td>объект первого лица</td>
          </tr>
          <tr>
            <td>Látom téged.</td>
            <td><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></td>
            <td>подлежащее «я», объект второго лица</td>
          </tr>
          <tr>
            <td>Ezet olvasom.</td>
            <td><button class="speak-btn" data-speak-text="Ezt olvasom." data-speak-lang="hu-HU">Ezt olvasom.</button></td>
            <td>правильная винительная форма — <b>ezt</b></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Я читаю одну книгу: <b>Olvasok / Olvasom egy könyvet.</b></li>
          <li>Я читаю эту книгу: <b>Olvasok / Olvasom ezt a könyvet.</b></li>
          <li>Анна видит меня: <b>Anna lát / látja engem.</b></li>
          <li>Я слышу тебя: <b>Hallom / Hallak.</b></li>
          <li>Я знаю, что ты здесь: <b>Tudok / Tudom, hogy itt vagy.</b></li>
        </ol>
        <details>
          <summary><b>Проверить ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button><br>
            <button class="speak-btn" data-speak-text="Olvasom ezt a könyvet." data-speak-lang="hu-HU">Olvasom ezt a könyvet.</button><br>
            <button class="speak-btn" data-speak-text="Anna lát engem." data-speak-lang="hu-HU">Anna lát engem.</button><br>
            <button class="speak-btn" data-speak-text="Hallak." data-speak-lang="hu-HU">Hallak.</button><br>
            <button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button>
          </p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Самостоятельная работа</h4>
        <div class="task">
          Напиши связный текст из восьми предложений на тему «Что и кого я читаю, смотрю, знаю, вижу или слышу».
          Используй: два неопределённых объекта, два определённых объекта третьего лица, два объекта первого или второго лица, одну специальную форму и одно придаточное содержания.
          Подчеркни каждый прямой объект и рядом кратко подпиши причину выбора формы.
        </div>

        <div class="note">
          Урок усвоен, если ты можешь не только построить фразу, но и объяснить три вещи:
          кто действует, какой прямой объект используется и почему выбрана именно эта форма глагола.
        </div>

        <div class="warn">
          Граница темы: этот урок завершает выбор спряжения в сообщениях и вопросах.
          Образование повелительных форм, отрицательные просьбы и вежливые команды изучаются отдельно в следующем уроке.
        </div>
      `,
    }
  ],
  vocabulary: [
    { id: "l21_v1", hu: "ismerni", ru: "знать (кого-то/что-то)", category: "Глаголы", exampleSentence: "Ismerem ezt az embert.",
        ipa: "[ˈiʃmɛrni]"
    },
    { id: "l21_v2", hu: "hordani", ru: "носить (одежду, очки)", category: "Глаголы", exampleSentence: "Szemüveget hordok.",
        ipa: "[hˈordɒni]"
    },
    { id: "l21_v3", hu: "hallani", ru: "слышать", category: "Глаголы", exampleSentence: "Nem hallom a zenét.",
        ipa: "[hɒllɒnˈi]"
    },
    { id: "l21_v4", hu: "mondani", ru: "говорить / сказать", category: "Глаголы", exampleSentence: "Mit mondasz?",
        ipa: "[mˈondɒni]"
    }
  ],
    quiz: [
    {
      id: 2101,
      question: 'В каких случаях в венгерском языке используется НЕОПРЕДЕЛЁННОЕ спряжение (alanyi ragozás)?',
      options: [
        'Когда прямое дополнение отсутствует или неопределённое (egy könyvet, könyveket)',
        'Когда прямое дополнение конкретное (a könyvet, ezt a könyvet)',
        'Когда подлежащее выражено местоимением 3-го лица (ő, ők)',
        'Всегда, независимо от дополнения'
      ],
      correctIndex: 0,
      explanation: 'Неопределённое спряжение используется: (1) без прямого дополнения, (2) с неопределённым артиклем "egy", (3) с дополнением без артикля во множественном числе, (4) с неопределёнными местоимениями (valami, semmi).'
    },
    {
      id: 2102,
      question: 'Почему во фразе "Lát engem" (Он видит меня) используется НЕОПРЕДЕЛЁННАЯ форма глагола "lát", а не определённая "látja"?',
      options: [
        'Это ошибка, должно быть "Látja engem"',
        'Потому что "engem" (меня) – это объект 1-го лица, который требует неопределённого спряжения',
        'Потому что "engem" – это неопределённое местоимение',
        'Потому что глагол "lát" всегда имеет неопределённую форму'
      ],
      correctIndex: 1,
      explanation: 'Определённое спряжение используется ТОЛЬКО с объектами 3-го лица (őt, azt, a könyvet). Объекты 1-го и 2-го лица (engem, téged, minket, titeket) требуют НЕОПРЕДЕЛЁННОЙ формы (урок 21, слайд 4).'
    },
    {
      id: 2103,
      question: 'Что выражает окончание "-lak/-lek" в венгерском языке?',
      options: [
        'Подлежащее = я (1-е лицо), объект = тебя / вас (2-е лицо)',
        'Подлежащее = ты, объект = меня',
        'Только прошедшее время',
        'Только повелительное наклонение'
      ],
      correctIndex: 0,
      explanation: 'Суффикс -lak/-lek – это уникальная форма для комбинации "я тебя/вас": подлежащее én (я) + объект téged/titeket (тебя/вас). Пример: Szeretlek (Я люблю тебя).'
    },
    {
      id: 2104,
      question: 'Как сказать "Я вижу тебя" по-венгерски?',
      options: ['Látom téged', 'Látlak téged', 'Látok téged', 'Látja téged'],
      correctIndex: 1,
      explanation: 'Комбинация "я тебя" требует особой формы -lak/-lek: lát + lak = látlak (я вижу тебя). "Látom téged" – ошибка, так как "téged" – это объект 2-го лица, а не 3-го.'
    },
    {
      id: 2105,
      question: 'Какая форма соответствует "Я умываюсь" от изученного mosakodik?',
      options: ['Mosakodom.', 'Mosakom.', 'Mosakszom.', 'Mosakodja.'],
      correctIndex: 0,
      explanation: 'Изученная форма 1-го лица единственного числа от mosakodik — Mosakodom. В значении «умываться» этот глагол употребляется без прямого объекта.'
    },
    {
      id: 2106,
      question: 'Какой вариант правильно завершает "___, hogy itt vagy." со значением «Я знаю, что ты здесь»?',
      options: ['Tudom', 'Tudok', 'Tudlak', 'Tudjam'],
      correctIndex: 0,
      explanation: 'Правильно: Tudom, hogy itt vagy. Здесь объектное придаточное передаёт содержание того, что известно, поэтому у переходного tud употребляется определённая форма tudom. Это не универсальное правило для любого предложения с hogy.'
    }
  ],
  objectives: [
    { id: 'l21_choose-conjugation', text: 'Выбирать определённое или неопределённое спряжение в зависимости от дополнения.', skills: ['grammar', 'writing'] },
    { id: 'l21_use-object-pronouns', text: 'Употреблять формы engem и téged в роли прямого дополнения.', skills: ['grammar', 'speaking'] },
    { id: 'l21_form-lak-lek', text: 'Образовывать форму -lak/-lek со значением «я тебя».', skills: ['grammar', 'writing'] },
    { id: 'l21_distinguish-conjugations', text: 'Различать определённое и неопределённое спряжение на слух.', skills: ['listening'] },
    { id: 'l21_apply-conjugation', text: 'Применять оба спряжения в связной устной и письменной речи.', skills: ['speaking', 'writing', 'grammar'] },
  ],
};
