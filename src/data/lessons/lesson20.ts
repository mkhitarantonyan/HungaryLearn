import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L20_ACTIVITIES = createMigrationActivities({
  lessonId: 20,
  controlledTitle: 'A2 checkpoint: прошедшее время в контексте',
  controlledPassCount: 13,
  controlledExercises: [
    { kind: 'fillGap', id: 'l20-p5-cp-1', prompt: 'A · Tegnap egész nap ___. (dolgozik, én)', accept: ['dolgoztam'] },
    { kind: 'fillGap', id: 'l20-p5-cp-2', prompt: 'A · Anna este magyarul ___. (tanul)', accept: ['tanult'] },
    { kind: 'singleChoice', id: 'l20-p5-cp-3', prompt: 'A · Петер посмотрел конкретный фильм.', options: ['Péter látta a filmet.', 'Péter látott egy filmet.', 'Péter látja egy filmet tegnap.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l20-p5-cp-4', prompt: 'B · Péter reggel a piacra ___. (megy)', accept: ['ment'] },
    { kind: 'fillGap', id: 'l20-p5-cp-5', prompt: 'B · Ebédre levest ___. (eszik, ő)', accept: ['evett'] },
    { kind: 'singleChoice', id: 'l20-p5-cp-6', prompt: 'B · Как сказать «Она выпила кофе»?', options: ['Kávét ivott.', 'Kávét iszik.', 'Kávét inni fog.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l20-p5-cp-7', prompt: 'C · Вчера меня не было дома.', options: ['Tegnap nem voltam otthon.', 'Tegnap nem vagyok otthon.', 'Tegnap nem leszek otthon.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l20-p5-cp-8', prompt: 'C · A busz miatt időben ___ odaérni. (nem tud, én)', accept: ['nem tudtam'] },
    { kind: 'singleChoice', id: 'l20-p5-cp-9', prompt: 'D · Выбери естественное начало рассказа.', options: ['Először felkeltem, azután reggeliztem.', 'Végül felkeltem, először hazaértem.', 'Tegnap holnap reggeliztem.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l20-p5-cp-10', prompt: 'D · Какой маркер естественно вводит итог?', options: ['Végül', 'Tegnapelőtt сначала', 'Amikor потому что'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l20-p5-cp-11', prompt: 'E · В прошлом месяце мы ходили в ресторан.', options: ['A múlt hónapban étterembe mentünk.', 'A múlt hónapban étteremben mentünk.', 'A múlt hónapban étteremből mentünk be.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l20-p5-cp-12', prompt: 'E · Я встретился с коллегой на вокзале.', options: ['A pályaudvaron találkoztam a kollégámmal.', 'A pályaudvarra találkoztam a kollégámat.', 'A pályaudvarból találkoztam.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l20-p5-cp-13', prompt: 'F · Tegnap későn keltem, ezért...', options: ['lekéstem a buszt.', 'lekésem a buszt holnap.', 'a busz nem késő.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l20-p5-cp-14', prompt: 'F · Felhívtam Annát, de ő nem ___ válaszolni.', accept: ['tudott'] },
    { kind: 'singleChoice', id: 'l20-p5-cp-15', prompt: 'F · Я купил билет и сел на следующий поезд.', options: ['Vettem egy jegyet, és felszálltam a következő vonatra.', 'Veszek egy jegyet, és felszálltam.', 'Vettem a jegy, és felszállok tegnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l20-p5-cp-16', prompt: 'F · Выбери связное завершение мини-истории.', options: ['Később megérkeztem, és végül minden rendben volt.', 'Először végül holnap megérkezem.', 'Mert ezért nem volt, amikor.'], correctIndex: 0 },
  ],
  readingTitle: 'Egy nap, ami nem a tervek szerint alakult',
  readingParagraphs: [
    'Múlt kedden Zsófi egy fontos délelőtti találkozóra készült egy másik városban. Azt tervezte, hogy hatkor felkel, megreggelizik, majd a fél nyolcas vonattal elutazik. Előző este előkészítette a ruháját, betette a szükséges dokumentumokat a táskájába, és beállította az ébresztőórát. Reggel azonban nem hallotta meg, ezért csak hét óra után ébredt fel.',
    'Gyorsan felöltözött, és reggeli nélkül elindult az állomásra. Amikor odaért, a vonat már elment. Először nagyon ideges lett, de megnézte a menetrendet, és talált egy másik útvonalat. Vett egy buszjegyet, busszal elment egy közeli állomásra, majd húsz percet várt. Onnan később indult egy másik vonat, amely ugyan hosszabb úton ment, de még aznap délelőtt megérkezett.',
    'Útközben észrevette, hogy a telefonjának alig maradt energiája. Fel akarta hívni a kollégáját, de a telefon kikapcsolt. Ezért a buszpályaudvar információs pultjánál megkért egy dolgozót, hogy segítsen. A dolgozó megengedte, hogy néhány percre használja a telefont. Zsófi felhívta a kollégáját, részletesen elmondta, mi történt, bocsánatot kért a késésért, és új időpontot kértek a találkozóra.',
    'Zsófi végül csak egy órával később érkezett meg. A kollégája már várta, de nem haragudott, mert időben megkapta az üzenetet. A találkozót megtartották, és minden fontos kérdést megbeszéltek. Hazafelé Zsófi vett egy új telefontöltőt, és beállított két ébresztést a következő reggelre. A nap fárasztó volt, mégis hasznosnak tartotta: megtanulta, hogy mindig érdemes ellenőrizni az ébresztőt, a menetrendet és a telefon töltöttségét.',
  ],
  readingPassCount: 6,
  readingQuestions: [
    { id: 'l20-p5-read-1', question: 'Mi volt Zsófi eredeti terve?', options: ['A fél nyolcas vonattal elutazni egy találkozóra', 'Otthon dolgozni egész nap', 'Este busszal hazamenni'], correctIndex: 0 },
    { id: 'l20-p5-read-2', question: 'Mi volt az első probléma?', options: ['Nem hallotta meg az ébresztőt', 'Nem találta a kollégáját', 'Bezárt az állomás'], correctIndex: 0 },
    { id: 'l20-p5-read-3', question: 'Mi lett a késői ébredés következménye?', options: ['Lekéste a tervezett vonatot', 'Elvesztette a jegyét', 'Korábban érkezett'], correctIndex: 0 },
    { id: 'l20-p5-read-4', question: 'Milyen alternatív útvonalat talált?', options: ['Busszal ment egy másik állomásra, majd vonatra szállt', 'Taxival hazament', 'Gyalog folytatta az egész utat'], correctIndex: 0 },
    { id: 'l20-p5-read-5', question: 'Mi volt a második probléma?', options: ['Kikapcsolt a telefonja', 'Elromlott a vonat', 'Nem volt nála pénz'], correctIndex: 0 },
    { id: 'l20-p5-read-6', question: 'Hogyan értesítette a kollégáját?', options: ['Az információs pultnál kapott segítséggel telefonált', 'E-mailt írt otthonról', 'Nem szólt neki'], correctIndex: 0 },
    { id: 'l20-p5-read-7', question: 'Mi lett a történet vége?', options: ['Később megtartották a találkozót, és Zsófi töltőt vett', 'A találkozót örökre lemondták', 'Zsófi nem érkezett meg'], correctIndex: 0 },
    { id: 'l20-p5-read-8', question: 'Miért tartotta Zsófi hasznosnak a nehéz napot?', options: ['Mert megtanulta, mit kell előre ellenőrizni', 'Mert nem kellett dolgoznia', 'Mert ingyen utazott'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: короткий рассказ о прошлом',
  listeningTranscript: 'Tegnap Péter nem dolgozott. Délelőtt bevásárolt, délután pedig meglátogatta a testvérét. Este együtt főztek.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l20-listen-1', question: 'Dolgozott Péter tegnap?', options: ['Igen', 'Nem'], correctIndex: 1 },
    { id: 'l20-listen-2', question: 'Kit látogatott meg?', options: ['A barátját', 'A testvérét', 'Az orvost'], correctIndex: 1 },
    { id: 'l20-listen-3', question: 'Mit csináltak este?', options: ['Főztek', 'Tanultak', 'Utaztak'], correctIndex: 0 },
  ],
  rolePlay: {
    title: 'RolePlay: почему ты вчера опоздал(а)',
    partnerLabel: 'Коллега',
    completionMessage: 'Объяснение завершено. Проверь последовательность, причину, решение и итог.',
    startTurnId: 'l20-rp-1',
    turns: [
      { id: 'l20-rp-1', speaker: 'waiter', prompt: 'Tegnap elég későn érkeztél. Hova mentél?', next: 'l20-rp-2' },
      { id: 'l20-rp-2', speaker: 'learner', prompt: 'Скажи, куда ты направлялся/направлялась.', responseMode: 'selfPractice', model: 'Egy fontos találkozóra mentem a városközpontba.', next: 'l20-rp-3' },
      { id: 'l20-rp-3', speaker: 'waiter', prompt: 'Értem. És mi történt először?', next: 'l20-rp-4' },
      { id: 'l20-rp-4', speaker: 'learner', prompt: 'Назови первое событие и маркер последовательности.', responseMode: 'selfPractice', model: 'Hát, először későn keltem, ezért nagyon siettem.', next: 'l20-rp-5' },
      { id: 'l20-rp-5', speaker: 'waiter', prompt: 'Aha. Miért késtél el végül?', next: 'l20-rp-6' },
      { id: 'l20-rp-6', speaker: 'learner', prompt: 'Объясни причину опоздания.', responseMode: 'selfPractice', model: 'Lekéstem a buszt, és sajnos a következő járat is késett.', next: 'l20-rp-7' },
      { id: 'l20-rp-7', speaker: 'waiter', prompt: 'Értem. És mit csináltál ezután?', next: 'l20-rp-8' },
      { id: 'l20-rp-8', speaker: 'learner', prompt: 'Расскажи о своём действии или альтернативном маршруте.', responseMode: 'selfPractice', model: 'Ezután metróval mentem tovább, majd gyalogoltam.', next: 'l20-rp-9' },
      { id: 'l20-rp-9', speaker: 'waiter', prompt: 'Értem. Felhívtál vagy írtál valakinek, hogy késni fogsz?', next: 'l20-rp-10' },
      { id: 'l20-rp-10', speaker: 'learner', prompt: 'Скажи, кому и что ты сообщил(а).', responseMode: 'selfPractice', model: 'Igen, rögtön írtam a kollégámnak, hogy késni fogok.', next: 'l20-rp-11' },
      { id: 'l20-rp-11', speaker: 'waiter', prompt: 'És utána? Sikerült odaérned?', next: 'l20-rp-12' },
      { id: 'l20-rp-12', speaker: 'learner', prompt: 'Продолжи связный рассказ.', responseMode: 'selfPractice', model: 'Igen, később megérkeztem, és rögtön elkezdtük a találkozót.', next: 'l20-rp-13' },
      { id: 'l20-rp-13', speaker: 'waiter', prompt: 'Na, és végül megoldódott a probléma?', next: 'l20-rp-14' },
      { id: 'l20-rp-14', speaker: 'learner', prompt: 'Сообщи итог и мнение.', responseMode: 'selfPractice', model: 'Igen, szerencsére végül mindent megbeszéltünk, de kellemetlen volt a késés.', next: 'l20-rp-15' },
      { id: 'l20-rp-15', speaker: 'waiter', prompt: 'És mit csinálsz másképp legközelebb?', next: 'l20-rp-16' },
      { id: 'l20-rp-16', speaker: 'learner', prompt: 'Назови практическое изменение на будущее.', responseMode: 'selfPractice', model: 'Legközelebb korábban indulok, és előre megnézem a menetrendet.' },
    ],
  },
  writingTitle: 'Письмо: день пошёл не по плану',
  writingPrompt: 'Напиши 100–120 слов о вымышленном дне, когда что-то пошло не по плану. Укажи время и место, исходный план, минимум два события, одну проблему, свою реакцию или решение, хронологические связки и окончательный результат или мнение.',
  writingModel: ['Tegnap egy találkozóra indultam.', 'Először lekéstem a buszt, ezért másik útvonalat kerestem.', 'Végül megérkeztem, és minden rendben volt.'],
  writingRubric: ['100–120 слов', 'Указаны время, место и исходный план', 'Есть минимум два события', 'Есть проблема и реакция/решение', 'Использованы хронологические связки', 'Есть финальный результат или мнение'],
  activitySequence: 'communication',
  objectiveChecks: [
    { objectiveId: 'l20_form-past-regular', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l20_form-past-irregular', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l20_use-definite-indefinite', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l20_narrate-past', activity: 'writing', evidenceKind: 'writing', evidenceComponents: [{ activity: 'roleplay', evidenceKind: 'interaction' }] },
    {
      objectiveId: 'l20_understand-past-texts',
      activity: 'reading',
      evidenceKind: 'reading',
      evidenceComponents: [{ activity: 'listening', evidenceKind: 'listening' }],
    },
  ],
});

const L20_OPTIONAL_SPEAKING = {
  title: 'Optional speaking: вымышленное событие в прошлом',
  instructions: 'Говори примерно 2–2.5 минуты и перескажи вымышленное событие: обстановка, последовательность, проблема, действие, результат и мнение. Это только текстовая self-practice — без микрофона, score и evidence.',
  prompt: 'Tegnap... Először... Azután... Amikor..., probléma történt. Ezért... Végül... Szerintem...',
  rubric: ['2–2.5 минуты', 'Есть время и место', 'Есть хронологическая последовательность', 'Есть проблема и действие', 'Есть результат', 'Есть мнение'],
};

export const LESSON_20: Lesson = {
  id: 20,
  number: 20,
  level: 'A2',
  title: 'Урок 20 · A múlt idő',
  subtitle: 'Прошедшее время полностью',
  description: 'Показатели прошедшего времени (-t- / -ott / -ett / -ött), неопределённое и определённое спряжение, неправильные глаголы (volt, ment, evett...) и завершение уровня A2.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 20 · 1/12 · ВВЕДЕНИЕ",
      title: "A múlt idő",
      subtitle: "Одно простое прошедшее время — но формы глаголов нужно строить по модели",
      type: 'overview',
      note: 'Венгерский не имеет отдельного простого прошедшего времени для русского «делал» и «сделал». Точный смысл даёт контекст, значение глагола и иногда приставка.',
      warn: 'Не понимай фразу «одно прошедшее время» как «одна неизменная форма». Лицо, тип спряжения и форма самого глагола всё равно важны.',
      task: 'В каждом примере сначала найди маркер прошлого, затем форму глагола и только после этого восстанови смысл всего события.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что означает múlt idő</h4>

        <p><button class="speak-btn" data-speak-text="Tegnap dolgoztam." data-speak-lang="hu-HU">Tegnap dolgoztam.</button></p>
        <p><button class="speak-btn" data-speak-text="Múlt héten tanultam." data-speak-lang="hu-HU">Múlt héten tanultam.</button></p>

        <div class="note">
          Прошедший момент задают и форма глагола, и контекст.
          Частые маркеры помогают быстро поставить событие на временную линию.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Полезные маркеры прошлого</h4>

        <p>
          <button class="speak-btn" data-speak-text="tegnap" data-speak-lang="hu-HU">tegnap</button>,
          <button class="speak-btn" data-speak-text="tegnapelőtt" data-speak-lang="hu-HU">tegnapelőtt</button>,
          <button class="speak-btn" data-speak-text="múlt héten" data-speak-lang="hu-HU">múlt héten</button>,
          <button class="speak-btn" data-speak-text="múlt hónapban" data-speak-lang="hu-HU">múlt hónapban</button>,
          <button class="speak-btn" data-speak-text="korábban" data-speak-lang="hu-HU">korábban</button>
        </p>

        <div class="note">
          Маркер времени не заменяет прошедшую форму глагола, но помогает понять,
          когда произошло событие и как связать его с другими действиями.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Одна временная система ≠ один русский вид</h4>

        <p><button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU">vártam</button></p>

        <div class="note">
          В зависимости от ситуации эта форма может передаваться по-русски как «я ждал(а)»
          или «я подождал(а)». Не ищи внутри венгерской формы отдельный показатель
          русского совершенного или несовершенного вида.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Безопасная архитектура формы</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>Что проверяем</th></tr>
          <tr><td>1</td><td>какой глагол и какая его прошедшая модель</td></tr>
          <tr><td>2</td><td>кто выполнял действие</td></tr>
          <tr><td>3</td><td>нужно неопределённое или определённое спряжение</td></tr>
          <tr><td>4</td><td>какой контекст и маркер времени</td></tr>
        </table>

        <div class="warn">
          Не используй механическую формулу «увидел форму 3-го лица и просто добавил личное окончание».
          Поверхностная форма может меняться: это будет видно в следующих слайдах.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что должен уметь ученик к концу Lesson 20</h4>

        <ul class="tick">
          <li>строить частые правильные формы прошлого;</li>
          <li>использовать частые неправильные формы;</li>
          <li>выбирать знакомое неопределённое / определённое спряжение;</li>
          <li>связывать события в короткий рассказ;</li>
          <li>понимать прошлое в Reading и Listening.</li>
        </ul>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Есть ли в венгерском отдельное простое прошедшее для «делал» и «сделал»?</p>
          <p>Достаточно ли одного слова «вчера», если глагол стоит в настоящем?</p>
          <p>Можно ли механически прибавлять личное окончание к любой форме 3-го лица прошлого?</p>
        </details>

        <div class="note">
          Граница 20.1: смысл прошлого и общая архитектура.
          На 20.2 разберём форму 3-го лица как учебный ориентир, а на 20.3 — личные формы неопределённого спряжения.
        </div>
      `,
    },    {
      id: 2,
      eyebrow: "УРОК 20 · 2/12 · ПОКАЗАТЕЛЬ",
      title: "-t vagy -ott/-ett/-ött?",
      subtitle: "Сначала выучи форму 3-го лица как ориентир — не превращай её в механический суффикс",
      type: 'grammar',
      note: 'На этом слайде все пары показывают неопределённое 3-е лицо единственного числа. Это удобная словарная опора для модели глагола.',
      warn: 'Форма 3-го лица не является готовой основой для всех остальных лиц. Например, из dolgozott нельзя строить личные формы простым добавлением окончания.',
      task: 'Закрой правый столбец и восстанови 6 форм 3-го лица. Затем раздели их на короткую модель с -t и модель с соединительной гласной.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Короткая модель с -t</h4>

        <table class="conj">
          <tr><th>Глагол</th><th>Прошедшее, ő</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU">vár</button></td>
            <td><button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU">várt</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU">kér</button></td>
            <td><button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU">kért</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td><button class="speak-btn" data-speak-text="tanult" data-speak-lang="hu-HU">tanult</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Модель с соединительной гласной</h4>

        <table class="conj">
          <tr><th>Глагол</th><th>Прошедшее, ő</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozott" data-speak-lang="hu-HU">dolgozott</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fest" data-speak-lang="hu-HU">fest</button></td>
            <td><button class="speak-btn" data-speak-text="festett" data-speak-lang="hu-HU">festett</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="köt" data-speak-lang="hu-HU">köt</button></td>
            <td><button class="speak-btn" data-speak-text="kötött" data-speak-lang="hu-HU">kötött</button></td>
          </tr>
        </table>

        <div class="note">
          Когда соединительная гласная появляется, её качество обычно следует гармонии:
          задний ряд даёт <b>o</b>, передний неогублённый — <b>e</b>, передний огублённый — <b>ö</b>.
        </div>

        <div class="warn">
          Гармония помогает выбрать качество гласной, но не отвечает сама по себе на вопрос,
          нужна ли соединительная гласная конкретному глаголу: выбор модели зависит от конкретного глагола и типа его основы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Почему форма ő — только ориентир</h4>

        <p><button class="speak-btn" data-speak-text="dolgozott" data-speak-lang="hu-HU">dolgozott</button> — форма для ő.</p>
        <p><button class="speak-btn" data-speak-text="dolgoztam" data-speak-lang="hu-HU">dolgoztam</button> — форма для én.</p>

        <div class="warn">
          Поэтому неверный путь — взять <b>dolgozott</b> и просто приписать окончание первого лица.
          Личную парадигму учим как систему на 20.3.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Практическая стратегия A2</h4>

        <ol class="tasklist">
          <li>учи глагол вместе с частой формой 3-го лица прошлого;</li>
          <li>узнавай, к какой модели относится глагол;</li>
          <li>используй гармонию для соединительной гласной, когда она действительно есть;</li>
          <li>для личной формы переходи к соответствующей парадигме, а не достраивай её наугад.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Какая форма 3-го лица у vár?</p>
          <p>Какая у dolgozik?</p>
          <p>Что гармония помогает выбрать: наличие гласной или её качество?</p>
          <p>Почему нельзя механически строить первое лицо от dolgozott?</p>
        </details>

        <div class="note">
          Граница 20.2: распознавание модели и формы 3-го лица.
          На 20.3 строим полную неопределённую личную парадигму на безопасных примерах.
        </div>
      `,
    },    {
      id: 3,
      eyebrow: "УРОК 20 · 3/12 · НЕОПРЕДЕЛЁННОЕ",
      title: "Alanyi múlt",
      subtitle: "Шесть личных форм на безопасной модели: vár / kér",
      type: 'grammar',
      note: 'Здесь активно тренируем неопределённое прошедшее на двух прозрачных глаголах. Местоимения нужны как учебная опора, но в обычной речи часто опускаются.',
      warn: 'Не строй форму от полного 3-го лица механически. Для vár / kér удобнее запомнить целый набор личных окончаний этой модели.',
      task: 'Закрой столбец с формами и восстанови 6 лиц сначала для vár, затем для kér. После этого произнеси три контекстных предложения без таблицы.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Единственное число</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>vár</th><th>kér</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU">vártam</button></td>
            <td><button class="speak-btn" data-speak-text="kértem" data-speak-lang="hu-HU">kértem</button></td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="vártál" data-speak-lang="hu-HU">vártál</button></td>
            <td><button class="speak-btn" data-speak-text="kértél" data-speak-lang="hu-HU">kértél</button></td>
          </tr>
          <tr>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU">várt</button></td>
            <td><button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU">kért</button></td>
          </tr>
        </table>

        <div class="note">
          В 3-м лице этой парадигмы отдельного личного окончания нет:
          форма заканчивается на показатель прошедшего времени, выбранный моделью глагола.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Множественное число</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>vár</th><th>kér</th></tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="vártunk" data-speak-lang="hu-HU">vártunk</button></td>
            <td><button class="speak-btn" data-speak-text="kértünk" data-speak-lang="hu-HU">kértünk</button></td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="vártatok" data-speak-lang="hu-HU">vártatok</button></td>
            <td><button class="speak-btn" data-speak-text="kértetek" data-speak-lang="hu-HU">kértetek</button></td>
          </tr>
          <tr>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="vártak" data-speak-lang="hu-HU">vártak</button></td>
            <td><button class="speak-btn" data-speak-text="kértek" data-speak-lang="hu-HU">kértek</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Что реально нужно запомнить</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>Задний ряд: vár</th><th>Передний ряд: kér</th></tr>
          <tr><td>én</td><td>-tam</td><td>-tem</td></tr>
          <tr><td>te</td><td>-tál</td><td>-tél</td></tr>
          <tr><td>ő</td><td>-t</td><td>-t</td></tr>
          <tr><td>mi</td><td>-tunk</td><td>-tünk</td></tr>
          <tr><td>ti</td><td>-tatok</td><td>-tetek</td></tr>
          <tr><td>ők</td><td>-tak</td><td>-tek</td></tr>
        </table>

        <div class="note">
          Эти наборы показывают безопасную модель для vár / kér.
          Не переносим их механически на каждый глагол без проверки его прошедшей модели.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Формы в контексте</h4>

        <p><button class="speak-btn" data-speak-text="Tegnap sokáig vártam." data-speak-lang="hu-HU">Tegnap sokáig vártam.</button></p>
        <p><button class="speak-btn" data-speak-text="Mit kértél?" data-speak-lang="hu-HU">Mit kértél?</button></p>
        <p><button class="speak-btn" data-speak-text="Mi segítséget kértünk." data-speak-lang="hu-HU">Mi segítséget kértünk.</button></p>
        <p><button class="speak-btn" data-speak-text="Ők a buszra vártak." data-speak-lang="hu-HU">Ők a buszra vártak.</button></p>

        <div class="note">
          По самой форме обычно уже видно лицо, поэтому отдельное местоимение часто не требуется.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Типичные ошибки</h4>

        <div class="warn">
          Не путай <b>várt</b> и <b>vártak</b>: первое — он/она ждал(а), второе — они ждали.
          И не добавляй второе личное окончание к уже готовой форме.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Как сказать «я ждал(а)»?</p>
          <p>Как сказать «ты просил(а)»?</p>
          <p>Какая форма нужна для «мы» у kér?</p>
          <p>Какая форма нужна для «они» у vár?</p>
        </details>

        <div class="note">
          Граница 20.3: неопределённое прошедшее продуктивно.
          На 20.4 тот же временной слой соединяем с определённым объектом.
        </div>
      `,
    },    {
      id: 4,
      eyebrow: "УРОК 20 · 4/12 · ОПРЕДЕЛЁННОЕ",
      title: "Tárgyas múlt",
      subtitle: "Конкретный объект + прошедшее: главное отличие видно не во всех лицах одинаково",
      type: 'grammar',
      note: 'Используем уже знакомый принцип выбора спряжения: когда объект определён и требует tárgyas ragozás, глагол получает определённую форму прошлого.',
      warn: 'Не пытайся определить тип спряжения только по форме én: vártam и kértem выглядят одинаково в неопределённом и определённом прошедшем. Смотри на объект и контекст.',
      task: 'Закрой таблицу и восстанови формы te, ő, mi, ti, ők. Затем объясни, почему по одной форме vártam нельзя определить тип спряжения без контекста.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Единственное число</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>vár + определённый объект</th><th>kér + определённый объект</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU">vártam</button></td>
            <td><button class="speak-btn" data-speak-text="kértem" data-speak-lang="hu-HU">kértem</button></td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="vártad" data-speak-lang="hu-HU">vártad</button></td>
            <td><button class="speak-btn" data-speak-text="kérted" data-speak-lang="hu-HU">kérted</button></td>
          </tr>
          <tr>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="várta" data-speak-lang="hu-HU">várta</button></td>
            <td><button class="speak-btn" data-speak-text="kérte" data-speak-lang="hu-HU">kérte</button></td>
          </tr>
        </table>

        <div class="warn">
          В 1-м лице форма совпадает по поверхности:
          <b>vártam</b> / <b>kértem</b> могут относиться к разным типам спряжения.
          Решение даёт объект, а не одна форма глагола.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Множественное число</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>vár + определённый объект</th><th>kér + определённый объект</th></tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="vártuk" data-speak-lang="hu-HU">vártuk</button></td>
            <td><button class="speak-btn" data-speak-text="kértük" data-speak-lang="hu-HU">kértük</button></td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="vártátok" data-speak-lang="hu-HU">vártátok</button></td>
            <td><button class="speak-btn" data-speak-text="kértétek" data-speak-lang="hu-HU">kértétek</button></td>
          </tr>
          <tr>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="várták" data-speak-lang="hu-HU">várták</button></td>
            <td><button class="speak-btn" data-speak-text="kérték" data-speak-lang="hu-HU">kérték</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Сначала найди определённый объект</h4>

        <p><button class="speak-btn" data-speak-text="Vártam a buszt." data-speak-lang="hu-HU">Vártam a buszt.</button></p>
        <p><button class="speak-btn" data-speak-text="Kértem a számlát." data-speak-lang="hu-HU">Kértem a számlát.</button></p>
        <p><button class="speak-btn" data-speak-text="Péter várta Annát." data-speak-lang="hu-HU">Péter várta Annát.</button></p>
        <p><button class="speak-btn" data-speak-text="Mi kértük a menüt." data-speak-lang="hu-HU">Mi kértük a menüt.</button></p>

        <div class="note">
          Здесь объекты конкретны и известны из ситуации.
          Артикль <b>a/az</b> — частый сигнал, но не единственный возможный определённый объект.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Где отличие слышно сразу</h4>

        <p><button class="speak-btn" data-speak-text="vártál" data-speak-lang="hu-HU">vártál</button> ↔ <button class="speak-btn" data-speak-text="vártad" data-speak-lang="hu-HU">vártad</button></p>
        <p><button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU">várt</button> ↔ <button class="speak-btn" data-speak-text="várta" data-speak-lang="hu-HU">várta</button></p>
        <p><button class="speak-btn" data-speak-text="vártak" data-speak-lang="hu-HU">vártak</button> ↔ <button class="speak-btn" data-speak-text="várták" data-speak-lang="hu-HU">várták</button></p>

        <div class="note">
          Эти пары помогают услышать различие типов спряжения.
          В 1-м лице такой звуковой подсказки нет — там особенно важен объект.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Граница правила</h4>

        <div class="warn">
          Не своди всю систему к формуле «увидел a/az — всегда выбрал определённое».
          На этом уровне опираемся на уже знакомые типы определённого объекта и контекст.
          Полное сравнение двух парадигм будет на 20.5.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Как сказать «он ждал конкретный автобус»?</p>
          <p>Какая форма нужна для «мы попросили конкретное меню»?</p>
          <p>Почему vártam без объекта не показывает тип спряжения однозначно?</p>
        </details>

        <div class="note">
          Граница 20.4: определённое прошедшее и роль объекта.
          На 20.5 сравним alanyi и tárgyas на одинаковых ситуациях.
        </div>
      `,
    },    {
      id: 5,
      eyebrow: "УРОК 20 · 5/12 · СРАВНЕНИЕ",
      title: "Alanyi vs. tárgyas múlt",
      subtitle: "Сначала объект, потом форма: в 1-м лице окончания могут совпадать",
      type: 'grammar',
      note: 'Принцип тот же, что и в настоящем времени: тип прямого объекта влияет на спряжение. Но в прошедшем 1-е лицо часто выглядит одинаково, поэтому контекст особенно важен.',
      warn: 'Не определяй спряжение только по окончанию én. Формы вроде vártam или olvastam сами по себе не показывают, был объект неопределённым или определённым.',
      task: 'Сравни 4 пары. В каждой сначала назови объект, затем тип спряжения и только после этого объясни разницу формы.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. В 1-м лице форма может совпасть</h4>

        <p><button class="speak-btn" data-speak-text="Olvastam egy könyvet." data-speak-lang="hu-HU">Olvastam egy könyvet.</button></p>
        <p><button class="speak-btn" data-speak-text="Olvastam a könyvet." data-speak-lang="hu-HU">Olvastam a könyvet.</button></p>

        <div class="note">
          Глагольная форма одинакова. Разницу создаёт объект:
          <b>egy könyvet</b> — неопределённый, <b>a könyvet</b> — определённый.
        </div>

        <div class="warn">
          Это главный анти-шаблон урока: по одной форме <b>olvastam</b> нельзя надёжно определить тип спряжения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Во 2-м лице различие уже видно</h4>

        <p><button class="speak-btn" data-speak-text="Olvastál egy könyvet." data-speak-lang="hu-HU">Olvastál egy könyvet.</button></p>
        <p><button class="speak-btn" data-speak-text="Olvastad a könyvet." data-speak-lang="hu-HU">Olvastad a könyvet.</button></p>

        <table class="conj">
          <tr><th>Объект</th><th>Форма</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="egy könyvet" data-speak-lang="hu-HU">egy könyvet</button></td><td><button class="speak-btn" data-speak-text="olvastál" data-speak-lang="hu-HU">olvastál</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="a könyvet" data-speak-lang="hu-HU">a könyvet</button></td><td><button class="speak-btn" data-speak-text="olvastad" data-speak-lang="hu-HU">olvastad</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. В 3-м лице контраст тоже слышен</h4>

        <p><button class="speak-btn" data-speak-text="Péter várt egy buszt." data-speak-lang="hu-HU">Péter várt egy buszt.</button></p>
        <p><button class="speak-btn" data-speak-text="Péter várta a buszt." data-speak-lang="hu-HU">Péter várta a buszt.</button></p>

        <div class="note">
          Здесь легко услышать:
          <b>várt</b> ↔ <b>várta</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Во множественном числе</h4>

        <p><button class="speak-btn" data-speak-text="Kértünk egy menüt." data-speak-lang="hu-HU">Kértünk egy menüt.</button></p>
        <p><button class="speak-btn" data-speak-text="Kértük a menüt." data-speak-lang="hu-HU">Kértük a menüt.</button></p>

        <div class="note">
          Сравни <b>kértünk</b> и <b>kértük</b>.
          Сначала определяй объект, а затем выбирай форму.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Диагностика выбора</h4>

        <ol class="tasklist">
          <li>есть ли прямой объект;</li>
          <li>если есть — определённый он или нет;</li>
          <li>кто выполнял действие;</li>
          <li>какая прошедшая форма подходит этому лицу и типу спряжения.</li>
        </ol>

        <div class="warn">
          <b>egy</b> и <b>a/az</b> — полезные сигналы в этих примерах, но не вся система объектов.
          Не превращай их в единственный критерий.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Почему Olvastam egy könyvet. и Olvastam a könyvet. имеют одинаковую форму глагола?</p>
          <p>Как меняется форма во 2-м лице?</p>
          <p>Как меняется форма в 3-м лице?</p>
          <p>Что нужно определить раньше: объект или окончание?</p>
        </details>

        <div class="note">
          Граница 20.5: выбор между двумя спряжениями в прошедшем.
          На 20.6 добавим самые частые неправильные прошедшие основы.
        </div>
      `,
    },    {
      id: 6,
      eyebrow: "УРОК 20 · 6/12 · НЕПРАВИЛЬНЫЕ ГЛАГОЛЫ",
      title: "Rendhagyó igék",
      subtitle: "Учи частую пару: форма ő + форма én — этого достаточно для безопасного старта",
      type: 'grammar',
      note: 'Неправильные глаголы лучше запоминать семьями, а не пытаться вывести их из одной общей формулы.',
      warn: 'Не бери форму ő как готовую основу и не добавляй к ней личное окончание механически. Для частых неправильных глаголов учи хотя бы пару ő ↔ én.',
      task: 'Закрой правый столбец и восстанови 7 пар. Затем произнеси 5 предложений о вчерашнем дне, используя разные неправильные глаголы.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Семь главных пар</h4>

        <table class="conj">
          <tr><th>Настоящее</th><th>Прошедшее, ő</th><th>Прошедшее, én</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="van" data-speak-lang="hu-HU">van</button></td><td><button class="speak-btn" data-speak-text="volt" data-speak-lang="hu-HU">volt</button></td><td><button class="speak-btn" data-speak-text="voltam" data-speak-lang="hu-HU">voltam</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="megy" data-speak-lang="hu-HU">megy</button></td><td><button class="speak-btn" data-speak-text="ment" data-speak-lang="hu-HU">ment</button></td><td><button class="speak-btn" data-speak-text="mentem" data-speak-lang="hu-HU">mentem</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="eszik" data-speak-lang="hu-HU">eszik</button></td><td><button class="speak-btn" data-speak-text="evett" data-speak-lang="hu-HU">evett</button></td><td><button class="speak-btn" data-speak-text="ettem" data-speak-lang="hu-HU">ettem</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="iszik" data-speak-lang="hu-HU">iszik</button></td><td><button class="speak-btn" data-speak-text="ivott" data-speak-lang="hu-HU">ivott</button></td><td><button class="speak-btn" data-speak-text="ittam" data-speak-lang="hu-HU">ittam</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="alszik" data-speak-lang="hu-HU">alszik</button></td><td><button class="speak-btn" data-speak-text="aludt" data-speak-lang="hu-HU">aludt</button></td><td><button class="speak-btn" data-speak-text="aludtam" data-speak-lang="hu-HU">aludtam</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="visz" data-speak-lang="hu-HU">visz</button></td><td><button class="speak-btn" data-speak-text="vitt" data-speak-lang="hu-HU">vitt</button></td><td><button class="speak-btn" data-speak-text="vittem" data-speak-lang="hu-HU">vittem</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="tesz" data-speak-lang="hu-HU">tesz</button></td><td><button class="speak-btn" data-speak-text="tett" data-speak-lang="hu-HU">tett</button></td><td><button class="speak-btn" data-speak-text="tettem" data-speak-lang="hu-HU">tettem</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Самая частая форма: volt</h4>

        <p><button class="speak-btn" data-speak-text="Tegnap otthon voltam." data-speak-lang="hu-HU">Tegnap otthon voltam.</button></p>
        <p><button class="speak-btn" data-speak-text="A bolt nyitva volt." data-speak-lang="hu-HU">A bolt nyitva volt.</button></p>

        <div class="note">
          <b>volt</b> нужен для прошлого состояния, местонахождения и множества обычных рассказов.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Движение, еда, сон</h4>

        <p><button class="speak-btn" data-speak-text="Este hazamentem." data-speak-lang="hu-HU">Este hazamentem.</button></p>
        <p><button class="speak-btn" data-speak-text="Reggel ettem." data-speak-lang="hu-HU">Reggel ettem.</button></p>
        <p><button class="speak-btn" data-speak-text="Sokat ittam." data-speak-lang="hu-HU">Sokat ittam.</button></p>
        <p><button class="speak-btn" data-speak-text="Jól aludtam." data-speak-lang="hu-HU">Jól aludtam.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Частые переходные глаголы</h4>

        <p><button class="speak-btn" data-speak-text="Vittem egy táskát." data-speak-lang="hu-HU">Vittem egy táskát.</button></p>
        <p><button class="speak-btn" data-speak-text="Tettem valamit az asztalra." data-speak-lang="hu-HU">Tettem valamit az asztalra.</button></p>

        <div class="note">
          Здесь объекты неопределённые, поэтому примеры не добавляют новую определённую парадигму.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как учить без перегрузки</h4>

        <ol class="tasklist">
          <li>настоящее → прошедшее ő;</li>
          <li>прошедшее ő → прошедшее én;</li>
          <li>один короткий контекст;</li>
          <li>потом расширяй на остальные лица по знакомой модели.</li>
        </ol>

        <div class="warn">
          Не пытайся вывести все семь глаголов одной формулой.
          Их ценность именно в частотности: эти формы нужно быстро узнавать и использовать.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Как сказать «я был(а)»?</p>
          <p>Как сказать «я пошёл / пошла»?</p>
          <p>Как сказать «я ел(а)»?</p>
          <p>Какая форма у «он пил»?</p>
          <p>Какая форма у «я спал(а)»?</p>
        </details>

        <div class="note">
          Граница 20.6: частые неправильные формы.
          На 20.7 начинается интеграционная практика с формами, отрицанием и хронологией.
        </div>
      `,
    },    {
      id: 7,
      eyebrow: "УРОК 20 · 7/12 · A2 LANGUAGE USE",
      title: "Gyakorló mondatok: múlt idő",
      subtitle: "Прошедшее время, объект и хронология — разбираем по шагам",
      type: 'practice',
      note: 'Сначала найди время и лицо, затем прямой объект. Только после этого выбирай неопределённую или определённую форму.',
      warn: 'Не сравнивай формы, если одновременно меняются лицо, объект и приставка: так невозможно понять причину окончания.',
      task: 'Для каждого примера назови: маркер времени → лицо → прямой объект или его отсутствие → тип спряжения. Затем составь цепочку из трёх событий.',
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'controlledPractice'),
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Прошедшее без прямого объекта</h4>
        <p><button class="speak-btn" data-speak-text="Tegnap Budapesten voltam." data-speak-lang="hu-HU">Tegnap Budapesten voltam.</button> — Вчера я был / была в Будапеште.</p>
        <div class="note"><b>voltam</b> — частая форма первого лица прошедшего времени глагола «быть». Прямого объекта здесь нет.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Чистое сравнение: один субъект, один глагол</h4>
        <table class="conj">
          <tr><th>Объект</th><th>Предложение</th><th>Выбор</th></tr>
          <tr>
            <td>неопределённый: <b>egy könyvet</b></td>
            <td><button class="speak-btn" data-speak-text="Olvastunk egy könyvet." data-speak-lang="hu-HU">Olvastunk egy könyvet.</button></td>
            <td>неопределённая форма <b>olvastunk</b></td>
          </tr>
          <tr>
            <td>определённый: <b>ezt a könyvet</b></td>
            <td><button class="speak-btn" data-speak-text="Olvastuk ezt a könyvet." data-speak-lang="hu-HU">Olvastuk ezt a könyvet.</button></td>
            <td>определённая форма <b>olvastuk</b></td>
          </tr>
        </table>
        <div class="note">Субъект в обеих строках — «мы», глагол один и тот же. Меняется только тип объекта, поэтому причина формы видна ясно.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Приставка и спряжение — разные решения</h4>
        <p><button class="speak-btn" data-speak-text="Elolvastuk ezt a könyvet." data-speak-lang="hu-HU">Elolvastuk ezt a könyvet.</button> — Мы прочитали эту книгу полностью.</p>
        <div class="note">В глаголе <b>elolvas</b> приставка <b>el-</b> показывает завершённость чтения. Определённую форму <b>-tuk</b> вызывает объект <b>ezt a könyvet</b>, а не сама приставка.</div>
        <div class="warn">Нельзя делать общее правило «приставка = завершённость» для всех глаголов. Здесь объясняется конкретная пара <b>olvas / elolvas</b>.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Три события по порядку</h4>
        <ol class="tasklist">
          <li><button class="speak-btn" data-speak-text="Először könyvtárba mentünk." data-speak-lang="hu-HU">Először könyvtárba mentünk.</button></li>
          <li><button class="speak-btn" data-speak-text="Azután olvastunk egy könyvet." data-speak-lang="hu-HU">Azután olvastunk egy könyvet.</button></li>
          <li><button class="speak-btn" data-speak-text="Végül hazamentünk." data-speak-lang="hu-HU">Végül hazamentünk.</button></li>
        </ol>
        <div class="note"><b>először → azután → végül</b> превращают отдельные формы в короткий связный рассказ.</div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Почему в первой паре формы различаются?</p>
          <p>Что именно выражает приставка в глаголе со значением «прочитать полностью»?</p>
          <p>Какие три слова показывают порядок событий?</p>
        </details>

        <div class="note">Граница 20.7: интегрируем прошедшее время, объект и хронологию. На 20.8 применяем этот алгоритм к длинному чтению и отдельному аудированию.</div>
      `,
    },    {
      id: 8,
      eyebrow: "УРОК 20 · 8/12 · READING + LISTENING",
      title: "Egy nap, ami nem a tervek szerint alakult",
      subtitle: "Читаем и слушаем по схеме: план → проблема → действие → итог",
      type: 'reading',
      note: 'Цель — понять последовательность событий и причинно-следственные связи. Не переводите каждое слово до ответа на общий вопрос.',
      warn: 'Текст для чтения и аудирование — разные материалы. Не переносите детали истории Жофи в ответы по аудированию о Петере.',
      task: 'Чтение: найдите план, две проблемы, решения и итог. Аудирование: сначала определите кто, когда и что сделал; затем проверьте три детали при втором прослушивании.',
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'reading' || activity.kind === 'listening'),
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Каркас связного рассказа</h4>
        <table class="conj">
          <tr><th>Сигнал</th><th>Что искать</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="múlt kedden" data-speak-lang="hu-HU">múlt kedden</button></td><td>когда началась история</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="először" data-speak-lang="hu-HU">először</button></td><td>первая реакция или действие</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="amikor" data-speak-lang="hu-HU">amikor</button></td><td>связь двух событий во времени</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button></td><td>следствие и следующий шаг</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button></td><td>итог истории</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Не список форм, а цепочка причин</h4>
        <p><button class="speak-btn" data-speak-text="Amikor odaért, a vonat már elment." data-speak-lang="hu-HU">Amikor odaért, a vonat már elment.</button></p>
        <div class="note">Сначала зафиксируйте событие и результат: она пришла на станцию, но поезд уже ушёл.</div>

        <p><button class="speak-btn" data-speak-text="Először nagyon ideges lett, de megnézte a menetrendet, és talált egy másik útvonalat." data-speak-lang="hu-HU">Először nagyon ideges lett, de megnézte a menetrendet, és talált egy másik útvonalat.</button></p>
        <div class="note">Затем найдите реакцию и решение: расстроилась → проверила расписание → нашла другой маршрут.</div>

        <p><button class="speak-btn" data-speak-text="Zsófi végül csak egy órával később érkezett meg." data-speak-lang="hu-HU">Zsófi végül csak egy órával később érkezett meg.</button></p>
        <div class="note">Маркер итога помогает отделить завершение истории от промежуточных проблем.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Алгоритм чтения</h4>
        <ol class="tasklist">
          <li>первый проход: кто, куда и зачем собирался;</li>
          <li>второй проход: первая и вторая проблема;</li>
          <li>третий проход: что героиня сделала после каждой проблемы;</li>
          <li>последний вопрос: чем всё закончилось и чему она научилась.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Алгоритм аудирования</h4>
        <ol class="tasklist">
          <li>первое прослушивание без чтения транскрипта: определите героя и общий порядок дня;</li>
          <li>второе прослушивание: проверьте работу, посещённого человека и вечернее действие;</li>
          <li>только после ответа сверяйтесь с транскриптом.</li>
        </ol>
        <div class="warn">Не ищите в аудировании историю про поезд: отдельная запись рассказывает о другом человеке и других действиях.</div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Самопроверка стратегии</summary>
          <p class="mt-3">Можете ли вы пересказать чтение четырьмя опорами: план, проблема, решение, итог?</p>
          <p>Можете ли вы ответить по аудированию, не подглядывая в транскрипт?</p>
        </details>

        <div class="note">Граница 20.8: понимание связного прошлого на уровне текста и аудио. На 20.9 этот материал переходит в интерактивное объяснение причины опоздания.</div>
      `,
    },    {
      id: 9,
      eyebrow: "УРОК 20 · 9/12 · ИНТЕРАКЦИЯ",
      title: "Miért késtél tegnap?",
      subtitle: "Связное объяснение: куда шёл → что произошло → почему → что сделал → чем закончилось",
      type: 'practice',
      note: 'Хороший ответ на вопрос об опоздании — это не одно предложение, а короткая логичная история. Собирай её по пяти опорам.',
      warn: 'Не путай три разные ситуации: késtem — я опоздал(а); késett a busz — автобус опоздал; lekéstem a buszt — я пропустил(а) автобус.',
      task: 'Прочитай диалог по ролям. Затем закрой модель и объясни своё реальное или вымышленное опоздание в 5–7 предложениях. После этого пройди интерактивный RolePlay.',
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'rolePlay'),
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Реалистичный диалог по теме</h4>

        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Miért késtél tegnap?" data-speak-lang="hu-HU">Miért késtél tegnap?</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Egy fontos találkozóra mentem, de későn keltem." data-speak-lang="hu-HU">Egy fontos találkozóra mentem, de későn keltem.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Mi történt ezután?" data-speak-lang="hu-HU">Mi történt ezután?</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Lekéstem a buszt, ezért metróval mentem tovább." data-speak-lang="hu-HU">Lekéstem a buszt, ezért metróval mentem tovább.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Szóltál valakinek?" data-speak-lang="hu-HU">Szóltál valakinek?</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, rögtön írtam a kollégámnak, hogy késni fogok." data-speak-lang="hu-HU">Igen, rögtön írtam a kollégámnak, hogy késni fogok.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Végül sikerült odaérned?" data-speak-lang="hu-HU">Végül sikerült odaérned?</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, húsz perccel később megérkeztem, és megtartottuk a találkozót." data-speak-lang="hu-HU">Igen, húsz perccel később megérkeztem, és megtartottuk a találkozót.</button></p>
        </div>

        <div class="note">
          Диалог совпадает с заголовком: собеседник спрашивает об опоздании, причине, реакции и результате.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Пять опор для связного ответа</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Вопрос</th><th>Начало ответа</th></tr>
          <tr>
            <td>цель</td>
            <td><button class="speak-btn" data-speak-text="Hova mentél?" data-speak-lang="hu-HU">Hova mentél?</button></td>
            <td><button class="speak-btn" data-speak-text="Egy találkozóra mentem." data-speak-lang="hu-HU">Egy találkozóra mentem.</button></td>
          </tr>
          <tr>
            <td>первое событие</td>
            <td><button class="speak-btn" data-speak-text="Mi történt először?" data-speak-lang="hu-HU">Mi történt először?</button></td>
            <td><button class="speak-btn" data-speak-text="Először későn keltem." data-speak-lang="hu-HU">Először későn keltem.</button></td>
          </tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="Miért késtél?" data-speak-lang="hu-HU">Miért késtél?</button></td>
            <td><button class="speak-btn" data-speak-text="Késtem, mert lekéstem a buszt." data-speak-lang="hu-HU">Késtem, mert lekéstem a buszt.</button></td>
          </tr>
          <tr>
            <td>реакция</td>
            <td><button class="speak-btn" data-speak-text="Mit csináltál ezután?" data-speak-lang="hu-HU">Mit csináltál ezután?</button></td>
            <td><button class="speak-btn" data-speak-text="Ezután metróval mentem tovább." data-speak-lang="hu-HU">Ezután metróval mentem tovább.</button></td>
          </tr>
          <tr>
            <td>итог</td>
            <td><button class="speak-btn" data-speak-text="Végül mi történt?" data-speak-lang="hu-HU">Végül mi történt?</button></td>
            <td><button class="speak-btn" data-speak-text="Végül megérkeztem." data-speak-lang="hu-HU">Végül megérkeztem.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Причина и следствие</h4>

        <p><button class="speak-btn" data-speak-text="Késtem, mert lekéstem a buszt." data-speak-lang="hu-HU">Késtem, mert lekéstem a buszt.</button></p>
        <p><button class="speak-btn" data-speak-text="Lekéstem a buszt, ezért metróval mentem tovább." data-speak-lang="hu-HU">Lekéstem a buszt, ezért metróval mentem tovább.</button></p>

        <div class="note">
          <b>mert</b> вводит причину: почему это произошло.
          <b>ezért</b> вводит следствие или реакцию: что произошло из-за этого.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Три формы, которые нельзя смешивать</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Смысл</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="késtem" data-speak-lang="hu-HU">késtem</button></td><td>я опоздал(а)</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="késett a busz" data-speak-lang="hu-HU">késett a busz</button></td><td>автобус опоздал</td></tr>
          <tr><td><button class="speak-btn" data-speak-text="lekéstem a buszt" data-speak-lang="hu-HU">lekéstem a buszt</button></td><td>я пропустил(а) автобус</td></tr>
        </table>

        <div class="warn">
          Ошибка: использовать <b>késtem a buszt</b> в значении «я пропустил автобус».
          Нужна приставка: <b>lekéstem a buszt</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Готовый каркас устного ответа</h4>

        <p><button class="speak-btn" data-speak-text="Tegnap későn keltem." data-speak-lang="hu-HU">Tegnap későn keltem.</button></p>
        <p><button class="speak-btn" data-speak-text="Lekéstem a buszt, ezért metróval mentem tovább." data-speak-lang="hu-HU">Lekéstem a buszt, ezért metróval mentem tovább.</button></p>
        <p><button class="speak-btn" data-speak-text="Rögtön írtam a kollégámnak." data-speak-lang="hu-HU">Rögtön írtam a kollégámnak.</button></p>
        <p><button class="speak-btn" data-speak-text="Végül húsz perccel később megérkeztem." data-speak-lang="hu-HU">Végül húsz perccel később megérkeztem.</button></p>

        <ol class="tasklist">
          <li>замени место назначения;</li>
          <li>измени причину;</li>
          <li>добавь своё действие;</li>
          <li>сообщи результат;</li>
          <li>ответь на уточняющие вопросы без чтения модели.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Самопроверка перед RolePlay</summary>
          <p class="mt-3">Есть ли в ответе конкретная причина?</p>
          <p>Использован ли хотя бы один маркер последовательности?</p>
          <p>Понятно ли, что вы сделали после проблемы?</p>
          <p>Есть ли итог, а не только перечисление действий?</p>
        </details>

        <div class="note">
          Граница 20.9: устное объяснение прошлого события с уточняющими вопросами.
          На 20.10 тот же каркас расширяется до письменного рассказа.
        </div>
      `,
    },    {
      id: 10,
      eyebrow: "УРОК 20 · 10/12 · CONNECTED PRODUCTION",
      title: "Egy nap, amikor megváltozott a terv",
      subtitle: "Пошаговое письмо 100–120 слов + устный пересказ без чтения",
      type: 'production',
      note: 'Сначала спланируй историю в шести блоках. После этого преврати каждый блок в 1–3 предложения и свяжи их маркерами времени, причины и результата.',
      warn: 'Не создавай рассказ как список несвязанных предложений. Не меняй случайно лицо: если начал(а) от первого лица, сохраняй его до конца.',
      task: 'Напиши 100–120 слов на венгерском: исходный план → неожиданная проблема → причина → действие → результат → мнение. Затем перескажи историю по шести ключевым словам.',
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'writing'),
      optionalSpeaking: L20_OPTIONAL_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Каркас рассказа из шести блоков</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Что написать</th><th>Венгерская опора</th></tr>
          <tr>
            <td>1. Время и ситуация</td>
            <td>когда, где, с кем</td>
            <td><button class="speak-btn" data-speak-text="Múlt szombaton a barátaimmal kirándulni akartunk." data-speak-lang="hu-HU">Múlt szombaton a barátaimmal kirándulni akartunk.</button></td>
          </tr>
          <tr>
            <td>2. Исходный план</td>
            <td>что вы собирались сделать</td>
            <td><button class="speak-btn" data-speak-text="Azt terveztük, hogy reggel indulunk." data-speak-lang="hu-HU">Azt terveztük, hogy reggel indulunk.</button></td>
          </tr>
          <tr>
            <td>3. Проблема</td>
            <td>что изменило план</td>
            <td><button class="speak-btn" data-speak-text="Amikor elindultunk, esni kezdett az eső." data-speak-lang="hu-HU">Amikor elindultunk, esni kezdett az eső.</button></td>
          </tr>
          <tr>
            <td>4. Решение</td>
            <td>что вы сделали из-за проблемы</td>
            <td><button class="speak-btn" data-speak-text="Ezért megváltoztattuk a tervet." data-speak-lang="hu-HU">Ezért megváltoztattuk a tervet.</button></td>
          </tr>
          <tr>
            <td>5. Результат</td>
            <td>чем закончился день</td>
            <td><button class="speak-btn" data-speak-text="Végül nagyon jól éreztük magunkat." data-speak-lang="hu-HU">Végül nagyon jól éreztük magunkat.</button></td>
          </tr>
          <tr>
            <td>6. Мнение</td>
            <td>как ты оцениваешь день</td>
            <td><button class="speak-btn" data-speak-text="Szerintem a nap így is érdekes volt." data-speak-lang="hu-HU">Szerintem a nap így is érdekes volt.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Маркеры связного рассказа</h4>

        <div class="word-grid">
          <button class="speak-btn" data-speak-text="először" data-speak-lang="hu-HU">először</button>
          <button class="speak-btn" data-speak-text="azután" data-speak-lang="hu-HU">azután</button>
          <button class="speak-btn" data-speak-text="utána" data-speak-lang="hu-HU">utána</button>
          <button class="speak-btn" data-speak-text="később" data-speak-lang="hu-HU">később</button>
          <button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button>
          <button class="speak-btn" data-speak-text="amikor" data-speak-lang="hu-HU">amikor</button>
          <button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button>
          <button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button>
        </div>

        <div class="note">
          Для 100–120 слов достаточно 4–6 разных связок. Не вставляй все слова механически.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Причина и следствие — не одно и то же</h4>

        <p><button class="speak-btn" data-speak-text="Nem mentünk kirándulni, mert esett az eső." data-speak-lang="hu-HU">Nem mentünk kirándulni, mert esett az eső.</button></p>
        <p><button class="speak-btn" data-speak-text="Esett az eső, ezért múzeumba mentünk." data-speak-lang="hu-HU">Esett az eső, ezért múzeumba mentünk.</button></p>

        <div class="note">
          <b>mert</b> отвечает на вопрос «почему?».
          <b>ezért</b> показывает результат или решение после причины.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Короткая модель структуры</h4>

        <p><button class="speak-btn" data-speak-text="Múlt szombaton a barátaimmal kirándulni akartunk." data-speak-lang="hu-HU">Múlt szombaton a barátaimmal kirándulni akartunk.</button></p>
        <p><button class="speak-btn" data-speak-text="Azt terveztük, hogy reggel indulunk." data-speak-lang="hu-HU">Azt terveztük, hogy reggel indulunk.</button></p>
        <p><button class="speak-btn" data-speak-text="Amikor elindultunk, esni kezdett az eső." data-speak-lang="hu-HU">Amikor elindultunk, esni kezdett az eső.</button></p>
        <p><button class="speak-btn" data-speak-text="Ezért megváltoztattuk a tervet." data-speak-lang="hu-HU">Ezért megváltoztattuk a tervet.</button></p>
        <p><button class="speak-btn" data-speak-text="Először beültünk egy kávézóba, azután elmentünk egy múzeumba." data-speak-lang="hu-HU">Először beültünk egy kávézóba, azután elmentünk egy múzeumba.</button></p>
        <p><button class="speak-btn" data-speak-text="Végül nagyon jól éreztük magunkat." data-speak-lang="hu-HU">Végül nagyon jól éreztük magunkat.</button></p>
        <p><button class="speak-btn" data-speak-text="Szerintem a nap így is érdekes volt." data-speak-lang="hu-HU">Szerintem a nap így is érdekes volt.</button></p>

        <div class="warn">
          Модель короче обязательного текста. Не копируй её: измени участников, место, проблему, решение и результат.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Чек-лист перед отправкой</h4>

        <ol class="tasklist">
          <li>100–120 венгерских слов;</li>
          <li>есть исходный план и неожиданная проблема;</li>
          <li>не менее пяти форм прошедшего времени;</li>
          <li>не менее четырёх подходящих связок;</li>
          <li>есть причина с <b>mert</b> или следствие с <b>ezért</b>;</li>
          <li>есть решение, итог и личное мнение;</li>
          <li>одно лицо и понятная хронология во всём рассказе.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Устный этап после письма</summary>
          <p class="mt-3">Выпиши только шесть ключевых слов: время, план, проблема, причина, действие, итог.</p>
          <p>Посмотри на них 20 секунд, затем рассказывай 60–90 секунд без чтения полного текста.</p>
          <p>После записи или пересказа проверь: понятны ли причина и результат без дополнительных объяснений?</p>
        </details>

        <div class="note">
          Граница 20.10: самостоятельное связное письмо и устный пересказ.
          На 20.11 будет итоговый интеграционный checkpoint урока.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 20 · 11/12 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоговая карта прошедшего времени: форма, объект, хронология и самопроверка",
      type: 'summary',
      note: 'Прошедшее время — не одна готовая форма. Нужно выбрать основу, показатель прошедшего времени, личное окончание и подходящее спряжение.',
      warn: 'Неверно говорить, что у прошедшего времени нет личных окончаний. Они есть: dolgoztam, dolgoztál, dolgoztunk. Нулевое личное окончание характерно прежде всего для формы ő в неопределённом спряжении.',
      task: 'Пройди карту сверху вниз, прослушай примеры и затем расскажи о вчерашнем дне в 8–10 предложениях. Выбирай спряжение по объекту, а не чередуй формы механически.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Четыре решения в каждом прошедшем предложении</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>Что определить</th><th>Пример</th></tr>
          <tr>
            <td>1. Время</td>
            <td>когда произошло событие</td>
            <td><button class="speak-btn" data-speak-text="tegnap" data-speak-lang="hu-HU">tegnap</button>, <button class="speak-btn" data-speak-text="múlt héten" data-speak-lang="hu-HU">múlt héten</button>, <button class="speak-btn" data-speak-text="tavaly" data-speak-lang="hu-HU">tavaly</button></td>
          </tr>
          <tr>
            <td>2. Прошедшая основа</td>
            <td>обычная или особая форма</td>
            <td><button class="speak-btn" data-speak-text="dolgozott" data-speak-lang="hu-HU">dolgozott</button>, <button class="speak-btn" data-speak-text="ment" data-speak-lang="hu-HU">ment</button></td>
          </tr>
          <tr>
            <td>3. Лицо</td>
            <td>кто выполнял действие</td>
            <td><button class="speak-btn" data-speak-text="dolgoztam" data-speak-lang="hu-HU">dolgoztam</button>, <button class="speak-btn" data-speak-text="dolgoztunk" data-speak-lang="hu-HU">dolgoztunk</button></td>
          </tr>
          <tr>
            <td>4. Объект</td>
            <td>неопределённый или конкретный</td>
            <td><button class="speak-btn" data-speak-text="Olvastunk egy könyvet." data-speak-lang="hu-HU">Olvastunk egy könyvet.</button><br/><button class="speak-btn" data-speak-text="Olvastuk ezt a könyvet." data-speak-lang="hu-HU">Olvastuk ezt a könyvet.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Показатель прошедшего времени</h4>

        <table class="conj">
          <tr><th>Настоящее</th><th>Прошедшее, ő</th><th>Прошедшее, én</th></tr>
          <tr><td>tanul</td><td><button class="speak-btn" data-speak-text="tanult" data-speak-lang="hu-HU">tanult</button></td><td><button class="speak-btn" data-speak-text="tanultam" data-speak-lang="hu-HU">tanultam</button></td></tr>
          <tr><td>kér</td><td><button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU">kért</button></td><td><button class="speak-btn" data-speak-text="kértem" data-speak-lang="hu-HU">kértem</button></td></tr>
          <tr><td>dolgozik</td><td><button class="speak-btn" data-speak-text="dolgozott" data-speak-lang="hu-HU">dolgozott</button></td><td><button class="speak-btn" data-speak-text="dolgoztam" data-speak-lang="hu-HU">dolgoztam</button></td></tr>
          <tr><td>olvas</td><td><button class="speak-btn" data-speak-text="olvasott" data-speak-lang="hu-HU">olvasott</button></td><td><button class="speak-btn" data-speak-text="olvastam" data-speak-lang="hu-HU">olvastam</button></td></tr>
        </table>

        <div class="note">
          Показатель встречается как <b>-t</b> или с соединительной гласной: <b>-ott/-ett/-ött</b>.
          Не существует надёжного правила «лёгкая или сложная основа», которое объясняет все глаголы.
          Запоминай частотную форму вместе с глаголом и проверяй её по модели.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Личные окончания действительно есть</h4>

        <div class="word-grid">
          <button class="speak-btn" data-speak-text="dolgoztam" data-speak-lang="hu-HU">dolgoztam</button>
          <button class="speak-btn" data-speak-text="dolgoztál" data-speak-lang="hu-HU">dolgoztál</button>
          <button class="speak-btn" data-speak-text="dolgozott" data-speak-lang="hu-HU">dolgozott</button>
          <button class="speak-btn" data-speak-text="dolgoztunk" data-speak-lang="hu-HU">dolgoztunk</button>
          <button class="speak-btn" data-speak-text="dolgoztatok" data-speak-lang="hu-HU">dolgoztatok</button>
          <button class="speak-btn" data-speak-text="dolgoztak" data-speak-lang="hu-HU">dolgoztak</button>
        </div>

        <div class="note">
          В форме <b>dolgozott</b> показатель прошедшего времени уже показывает форму ő;
          отдельного личного окончания после него нет. Но это не означает, что личных окончаний нет во всей системе.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Два спряжения выбираются по объекту</h4>

        <table class="conj">
          <tr><th>Объект</th><th>Форма</th><th>Пример</th></tr>
          <tr>
            <td>неопределённый: один предмет, какой-то предмет</td>
            <td>неопределённое спряжение</td>
            <td><button class="speak-btn" data-speak-text="Olvastunk egy könyvet." data-speak-lang="hu-HU">Olvastunk egy könyvet.</button></td>
          </tr>
          <tr>
            <td>конкретный: этот предмет, уже известный предмет</td>
            <td>определённое спряжение</td>
            <td><button class="speak-btn" data-speak-text="Olvastuk ezt a könyvet." data-speak-lang="hu-HU">Olvastuk ezt a könyvet.</button></td>
          </tr>
        </table>

        <div class="warn">
          Не нужно специально чередовать два спряжения в каждом рассказе.
          Сначала выбери смысл и объект, затем поставь естественную форму глагола.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Частотные особые формы</h4>

        <table class="conj">
          <tr><th>Настоящее</th><th>Прошедшее</th><th>Пример</th></tr>
          <tr><td>van</td><td><button class="speak-btn" data-speak-text="volt" data-speak-lang="hu-HU">volt</button></td><td><button class="speak-btn" data-speak-text="Tegnap otthon voltam." data-speak-lang="hu-HU">Tegnap otthon voltam.</button></td></tr>
          <tr><td>megy</td><td><button class="speak-btn" data-speak-text="ment" data-speak-lang="hu-HU">ment</button></td><td><button class="speak-btn" data-speak-text="Péter munkába ment." data-speak-lang="hu-HU">Péter munkába ment.</button></td></tr>
          <tr><td>eszik</td><td><button class="speak-btn" data-speak-text="evett" data-speak-lang="hu-HU">evett</button></td><td><button class="speak-btn" data-speak-text="Anna levest evett." data-speak-lang="hu-HU">Anna levest evett.</button></td></tr>
          <tr><td>iszik</td><td><button class="speak-btn" data-speak-text="ivott" data-speak-lang="hu-HU">ivott</button></td><td><button class="speak-btn" data-speak-text="Vizet ivott." data-speak-lang="hu-HU">Vizet ivott.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-история вместо списка форм</h4>

        <p><button class="speak-btn" data-speak-text="Tegnap későn keltem." data-speak-lang="hu-HU">Tegnap későn keltem.</button></p>
        <p><button class="speak-btn" data-speak-text="Lekéstem a buszt, ezért metróval mentem." data-speak-lang="hu-HU">Lekéstem a buszt, ezért metróval mentem.</button></p>
        <p><button class="speak-btn" data-speak-text="Végül húsz perccel később megérkeztem." data-speak-lang="hu-HU">Végül húsz perccel később megérkeztem.</button></p>

        <div class="note">
          Прошедшее значение выражает не только окончание. Завершённость и последовательность передаются контекстом,
          временными словами, приставками и связками.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Итоговое домашнее задание</h4>

        <ol class="tasklist">
          <li>напиши 8–10 предложений о вчерашнем дне;</li>
          <li>используй минимум пять прошедших форм;</li>
          <li>добавь одну отрицательную форму;</li>
          <li>добавь одну причину или следствие;</li>
          <li>используй хотя бы один особый глагол;</li>
          <li>проверь объект перед выбором спряжения.</li>
        </ol>

        <div class="note">
          Граница 20.11: система прошедшего времени собрана в одну рабочую карту.
          Следующий слайд показывает, какие навыки проверены автоматически, а какие требуют человеческой оценки.
        </div>
      `,
    },
    {
      id: 12,
      eyebrow: "УРОК 20 · 12/12 · A2 CHECKPOINT",
      title: "A2 integrációs profil",
      subtitle: "Что система проверяет напрямую, а что требует проверки преподавателя",
      type: 'checkpoint',
      note: 'Этот профиль показывает результаты заданий внутри курса. Это не автоматическое утверждение «A2 достигнут»: профиль не является языковым сертификатом и не доказывает автоматически, что весь уровень A2 освоен.',
      warn: 'Автоматическая проверка хорошо оценивает выбор ответа и понимание текста, но не может надёжно оценить качество самостоятельного письма и живой речи.',
      task: 'Пройди итоговую проверку. Затем выбери один самый слабый навык и вернись к соответствующему заданию урока перед переходом к уроку 21.',
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'exitCheck'),
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что означает профиль</h4>

        <div class="note">Автоматические результаты и просмотр 12 слайдов сами по себе не выдают CEFR-сертификацию.</div>

        <table class="conj">
          <tr><th>Статус</th><th>Что он означает</th></tr>
          <tr><td><b>Проверено напрямую</b></td><td>система сравнила ответ с заданным правильным ответом или критерием прохождения</td></tr>
          <tr><td><b>Предварительно выполнено</b></td><td>работа сделана, но качество должен оценить преподаватель или компетентный проверяющий</td></tr>
          <tr><td><b>Нужна повторная работа</b></td><td>результат пока недостаточен или задание не завершено</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Пять навыков</h4>

        <table class="conj">
          <tr><th>Навык</th><th>Как проверяется</th><th>Ограничение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nyelvhelyesség" data-speak-lang="hu-HU">Nyelvhelyesség</button><br/><span style="color:#8a7a68">грамматика и употребление</span></td>
            <td>результат контролируемых упражнений</td>
            <td>проверяется выбранная форма, а не вся свободная речь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasás" data-speak-lang="hu-HU">Olvasás</button><br/><span style="color:#8a7a68">чтение</span></td>
            <td>ответы по связному тексту</td>
            <td>показывает понимание конкретного текста урока</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hallás utáni értés" data-speak-lang="hu-HU">Hallás utáni értés</button><br/><span style="color:#8a7a68">аудирование</span></td>
            <td>прослушивание и ответы по загруженному аудио</td>
            <td>результат действителен только после фактического прослушивания</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Írás" data-speak-lang="hu-HU">Írás</button><br/><span style="color:#8a7a68">письмо</span></td>
            <td>рассказ из предыдущего слайда</td>
            <td>нужна проверка связности, точности и естественности</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Interakció" data-speak-lang="hu-HU">Interakció</button><br/><span style="color:#8a7a68">взаимодействие</span></td>
            <td>ответы на уточняющие вопросы в ролевой практике</td>
            <td>нужна оценка понятности, реакции и произношения</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Практический минимум перед уроком 21</h4>

        <ul class="tick">
          <li>понимаешь основную последовательность связного рассказа о прошлом;</li>
          <li>можешь рассказать 6–8 предложений без чтения полного текста;</li>
          <li>различаешь неопределённый и конкретный объект;</li>
          <li>используешь причину, следствие и итог;</li>
          <li>узнаёшь частотные особые формы прошедшего времени;</li>
          <li>можешь исправить хотя бы одну собственную ошибку после самопроверки.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Контрольный мини-ответ</h4>

        <p><button class="speak-btn" data-speak-text="Tegnap sok dolgom volt." data-speak-lang="hu-HU">Tegnap sok dolgom volt.</button></p>
        <p><button class="speak-btn" data-speak-text="Először dolgoztam, azután bevásároltam." data-speak-lang="hu-HU">Először dolgoztam, azután bevásároltam.</button></p>
        <p><button class="speak-btn" data-speak-text="Lekéstem a buszt, ezért később értem haza." data-speak-lang="hu-HU">Lekéstem a buszt, ezért később értem haza.</button></p>
        <p><button class="speak-btn" data-speak-text="Végül megfőztem a vacsorát, és pihentem." data-speak-lang="hu-HU">Végül megfőztem a vacsorát, és pihentem.</button></p>

        <div class="note">
          Если можешь понять и самостоятельно перестроить этот ответ, у тебя есть рабочая основа для следующего урока.
          Если только повторяешь модель, вернись к слайдам 20.7–20.10.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что дальше</h4>

        <p><button class="speak-btn" data-speak-text="A következő leckében tovább gyakoroljuk a két ragozást." data-speak-lang="hu-HU">A következő leckében tovább gyakoroljuk a két ragozást.</button></p>

        <div class="note">
          Урок 21 продолжает и укрепляет выбор неопределённого и определённого спряжения в более свободной коммуникации.
          Переход к следующему уроку — это продолжение обучения, а не выдача сертификата.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Финальная самопроверка</summary>
          <p class="mt-3">Какой навык сейчас самый слабый: грамматика, чтение, аудирование, письмо или взаимодействие?</p>
          <p>Какое конкретное задание урока ты повторишь?</p>
          <p>Какую одну ошибку ты больше не хочешь повторять?</p>
        </details>

        <div class="note">
          Граница 20.12: итоговый профиль курса внутри приложения.
          Он фиксирует учебные доказательства, но не заменяет полноценную внешнюю оценку уровня.
        </div>
      `,
    },
  ],
  vocabulary: [
    { id: "l20_v1", hu: "volt", ru: "был / была / было", category: "Прошедшее время", exampleSentence: "Tegnap meleg volt.",
        ipa: "[vˈolt]"
    },
    { id: "l20_v2", hu: "ment", ru: "пошёл / пошла", category: "Прошедшее время", exampleSentence: "Iskolába ment.",
        ipa: "[mˈɛnt]"
    },
    { id: "l20_v3", hu: "evett", ru: "ел / съел", category: "Прошедшее время", exampleSentence: "Almát evett.",
        ipa: "[ˈɛvɛtt]"
    },
    { id: "l20_v4", hu: "ivott", ru: "пил / выпил", category: "Прошедшее время", exampleSentence: "Vizet ivott.",
        ipa: "[ˈivott]"
    },
    { id: "l20_v5", hu: "aludt", ru: "спал / поспал", category: "Прошедшее время", exampleSentence: "Sokat aludt.",
        ipa: "[ɒlˈudt]"
    }
  ],
    quiz: [
    {
      id: 2001,
      question: 'Какая правильная форма прошедшего времени ő от dolgozik?',
      options: ['dolgozott', 'dolgozt', 'dolgozik', 'dolgozna'],
      correctIndex: 0,
      explanation: 'Правильная форма 3-го лица единственного числа в прошедшем времени: dolgozik → dolgozott. У этого глагола используется модель -ott.'
    },
    {
      id: 2002,
      question: 'Как переводится венгерское прошедшее время "vártam" на русский язык?',
      options: [
        'Только "я ждал" (несовершенный вид)',
        'Только "я подождал" (совершенный вид)',
        'И "я ждал", и "я подождал" – в зависимости от контекста',
        'Только "я жду" (настоящее время)'
      ],
      correctIndex: 2,
      explanation: 'В венгерском только ОДНА форма прошедшего времени, которая покрывает оба аспекта. Контекст определяет, совершенный это вид или несовершенный.'
    },
    {
      id: 2003,
      question: 'Какая форма глагола используется в предложении "Olvastam a könyvet" (Я прочитал ЭТУ книгу)?',
      options: [
        'Неопределённое спряжение (alanyi ragozás)',
        'Определённое спряжение (tárgyas ragozás)',
        'Будущее время',
        'Повелительное наклонение'
      ],
      correctIndex: 1,
      explanation: '"A könyvet" – это конкретное, определённое дополнение (ЭТУ книгу), поэтому используется определённое спряжение. "Olvastam egy könyvet" – неопределённое спряжение (какую-то книгу).'
    },
    {
      id: 2004,
      question: 'Какое окончание добавляется к глаголу в 3-м лице единственного числа (ő) в неопределённом прошедшем времени?',
      options: ['-t', '-tt', '-ott/-ett/-ött', 'Окончания нет, только показатель прошедшего времени'],
      correctIndex: 3,
      explanation: 'В 3-м лице единственного числа (ő) в прошедшем времени нет личного окончания. Используется только показатель -t: vár → várt, kér → kért.'
    },
    {
      id: 2005,
      question: 'Какой из этих глаголов имеет НЕПРАВИЛЬНУЮ форму прошедшего времени?',
      options: [
        'vár → várt (ждать)',
        'kér → kért (просить)',
        'eszik → evett (есть)',
        'tanul → tanult (учиться)'
      ],
      correctIndex: 2,
      explanation: 'Глагол "eszik" (есть) – неправильный: его прошедшая форма "evett" (а не ожидаемое "eszett"). "Vár", "kér" и "tanul" – правильные глаголы, они подчиняются общим правилам.'
    },
    {
      id: 2006,
      question: 'Какое предложение описывает действие в прошлом?',
      options: ['Tegnap dolgoztam.', 'Most dolgozom.', 'Holnap dolgozni fogok.', 'Holnap dolgozom.'],
      correctIndex: 0,
      explanation: 'Tegnap означает «вчера», а dolgoztam — форма прошедшего времени: «Вчера я работал(а)».'
    }
  ],
  objectives: [
    { id: 'l20_form-past-regular', text: 'Образовывать прошедшее время правильных глаголов (-t/-ott/-ett/-ött).', skills: ['grammar', 'writing'] },
    { id: 'l20_form-past-irregular', text: 'Образовывать прошедшее время частых неправильных глаголов (volt, ment, evett).', skills: ['grammar', 'writing'] },
    { id: 'l20_use-definite-indefinite', text: 'Выбирать определённое или неопределённое спряжение в прошедшем времени.', skills: ['grammar', 'writing'] },
    { id: 'l20_narrate-past', text: 'Рассказывать о событиях прошлого в связном рассказе.', skills: ['speaking', 'writing'] },
    { id: 'l20_understand-past-texts', text: 'Понимать тексты и устную речь в прошедшем времени.', skills: ['reading', 'listening'] },
  ],
};
