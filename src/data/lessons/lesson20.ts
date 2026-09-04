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
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 20 · 1/11 · ВВЕДЕНИЕ",
      title: "A múlt idő",
      subtitle: "Прошедшее время — одна форма на всё",
      body: `
   <div class="note"><b>Can-Do:</b> связно описать прошлые события, объяснить простую проблему и решение, понять короткий рассказ и ответить на уточняющие вопросы. L20 — интеграционный A2 checkpoint, а не ещё одна таблица форм.</div>
   <p>Хорошая новость: в венгерском только <b>одно</b> простое прошедшее время — нет отдельных форм для совершенного и несовершенного вида, как в русском. Вы уже умеете строить простое прошедшее (урок 13). Сегодня не учим новую тему с нуля — переводим её из уровня «могу распознать» в уровень «могу использовать автоматически».</p>
   <p><button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártam</button> означает и «я ждал», и «я подождал» — смысл ясен из контекста.</p>
   <p>Формула образования: <b>основа + показатель прошедшего времени (-t-/-ott-/-ett-/-ött-) + личное окончание</b>.</p>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 20 · 2/11 · ПОКАЗАТЕЛЬ",
      title: "-t- vagy -ott-/-ett-/-ött-?",
      subtitle: "Когда нужна соединительная гласная",
      body: `
   <p>В венгерском прошедшее время строится по моделям с <span class="hu-word">-t</span> и <span class="hu-word">-ott/-ett/-ött</span>. Выбор модели зависит от конкретного глагола и типа его основы, поэтому надёжнее запоминать форму вместе с глаголом:</p>
   <p><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vár</button> → <button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várt</button>, <button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kér</button> → <button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kért</button></p>
   <p>Сравните глаголы, которые используют модель с соединительной гласной:</p>
   <p><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozik</button> → <button class="speak-btn" data-speak-text="dolgozott" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> dolgozott</button> <span style="color:#8a7a68">(работать → работал)</span>, <button class="speak-btn" data-speak-text="fest" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fest</button> → <button class="speak-btn" data-speak-text="festett" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> festett</button> <span style="color:#8a7a68">(рисовать → рисовал)</span>, <button class="speak-btn" data-speak-text="köt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> köt</button> → <button class="speak-btn" data-speak-text="kötött" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kötött</button> <span style="color:#8a7a68">(завязывать → завязал)</span></p>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 20 · 3/11 · НЕОПРЕДЕЛЁННОЕ",
      title: "Alanyi múlt",
      subtitle: "Неопределённое спряжение — вспомните 4-й урок",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>vár (ждать)</th><th>kér (просить)</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártam</button></td><td><button class="speak-btn" data-speak-text="kértem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértem</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="vártál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártál</button></td><td><button class="speak-btn" data-speak-text="kértél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértél</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várt</button></td><td><button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kért</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="vártunk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártunk</button></td><td><button class="speak-btn" data-speak-text="kértünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértünk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="vártatok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártatok</button></td><td><button class="speak-btn" data-speak-text="kértetek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértetek</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="vártak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártak</button></td><td><button class="speak-btn" data-speak-text="kértek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértek</button></td></tr>
   </table>
   <div class="note">В 3-м лице (ő) окончания нет вообще — только сам показатель -t: <button class="speak-btn" data-speak-text="várt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várt</button>, <button class="speak-btn" data-speak-text="kért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kért</button>.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 20 · 4/11 · ОПРЕДЕЛЁННОЕ",
      title: "Tárgyas múlt",
      subtitle: "Определённое спряжение — вспомните 13-й урок",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>vár + конкретный объект</th><th>kér + конкретный объект</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="vártam" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártam</button></td><td><button class="speak-btn" data-speak-text="kértem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértem</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="vártad" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártad</button></td><td><button class="speak-btn" data-speak-text="kérted" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérted</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="várta" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várta</button></td><td><button class="speak-btn" data-speak-text="kérte" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérte</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="vártuk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártuk</button></td><td><button class="speak-btn" data-speak-text="kértük" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértük</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="vártátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vártátok</button></td><td><button class="speak-btn" data-speak-text="kértétek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kértétek</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="várták" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várták</button></td><td><button class="speak-btn" data-speak-text="kérték" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérték</button></td></tr>
   </table>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 20 · 5/11 · СРАВНЕНИЕ",
      title: "Alanyi vs. tárgyas múlt",
      subtitle: "Тот же принцип, что и в настоящем времени",
      body: `
   <table class="conj">
     <tr><th>Неопределённое</th><th>Определённое</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="Olvastam egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvastam egy könyvet.</button></td><td><button class="speak-btn" data-speak-text="Olvastam a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvastam a könyvet.</button></td></tr>
   </table>
   <div class="note">Полная параллель с 13-м уроком: конкретное дополнение (эта книга) → определённая форма (olvastam → olvastam эту книгу). Единственная разница — теперь всё это происходит в прошедшем времени.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 20 · 6/11 · НЕПРАВИЛЬНЫЕ ГЛАГОЛЫ",
      title: "Rendhagyó igék",
      subtitle: "Самые частые неправильные формы",
      body: `
   <table class="conj">
     <tr><th>Настоящее</th><th>Прошедшее (ő)</th><th>Значение</th></tr>
     <tr><td>van</td><td><button class="speak-btn" data-speak-text="volt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> volt</button></td><td>быть</td></tr>
     <tr><td>megy</td><td><button class="speak-btn" data-speak-text="ment" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ment</button></td><td>идти</td></tr>
     <tr><td>eszik</td><td><button class="speak-btn" data-speak-text="evett" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> evett</button></td><td>есть</td></tr>
     <tr><td>iszik</td><td><button class="speak-btn" data-speak-text="ivott" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ivott</button></td><td>пить</td></tr>
     <tr><td>alszik</td><td><button class="speak-btn" data-speak-text="aludt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> aludt</button></td><td>спать</td></tr>
     <tr><td>visz</td><td><button class="speak-btn" data-speak-text="vitt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vitt</button></td><td>нести</td></tr>
     <tr><td>tesz</td><td><button class="speak-btn" data-speak-text="tett" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tett</button></td><td>класть/делать</td></tr>
   </table>
   <div class="warn"><button class="speak-btn" data-speak-text="volt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> volt</button> — самое частое слово из этого списка: „Будапешт был...“, „Я был там...“ — используется постоянно.</div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 20 · 7/11 · A2 LANGUAGE USE",
      title: "Múlt idő kontextusban",
      subtitle: "Формы, отрицание, хронология и знакомые падежи",
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'controlledPractice'),
      body: `
   <p><button class="speak-btn" data-speak-text="Tegnap Budapesten voltam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tegnap Budapesten voltam.</button> <span style="color:#8a7a68">(Вчера я был в Будапеште)</span></p>
   <p><button class="speak-btn" data-speak-text="Olvastunk egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvastunk egy könyvet.</button> <span style="color:#8a7a68">(Мы читали книгу — неопределённое)</span></p>
   <p><button class="speak-btn" data-speak-text="Elolvastam ezt a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elolvastam ezt a könyvet.</button> <span style="color:#8a7a68">(Я прочитал эту книгу — определённое)</span></p>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 20 · 8/11 · READING + LISTENING",
      title: "Egy nap, ami nem a tervek szerint alakult",
      subtitle: "Связный рассказ и существующий Listening",
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'reading' || activity.kind === 'listening'),
      body: `
   <p><button class="speak-btn" data-speak-text="Múlt héten étterembe mentünk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Múlt héten étterembe mentünk.</button> <span style="color:#8a7a68">(На прошлой неделе мы ходили в ресторан — вспомните 15-й урок)</span></p>
   <p><button class="speak-btn" data-speak-text="Volt egy barátom Budapesten." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Volt egy barátom Budapesten.</button> <span style="color:#8a7a68">(У меня был друг в Будапеште — прошедшее время конструкции «иметь» из 15-го урока)</span></p>
   <div class="note">Заметьте: „volt“ здесь заменяет опущенное в настоящем времени „van“ — в прошедшем времени эта форма обязательна, её нельзя пропустить.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 20 · 9/11 · ИНТЕРАКЦИЯ",
      title: "Miért késtél tegnap?",
      subtitle: "Связное объяснение с уточняющими вопросами",
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'rolePlay'),
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mit csináltál tegnap?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit csináltál tegnap?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Dolgoztam, aztán moziba mentem a barátommal." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Dolgoztam, aztán moziba mentem a barátommal.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Milyen filmet néztetek?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen filmet néztetek?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Egy magyar filmet néztünk, nagyon tetszett." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Egy magyar filmet néztünk, nagyon tetszett.</button></p>
   <div class="task">Задание 1. Прочитайте диалог, затем расскажите о своём реальном вчерашнем дне на венгерском, минимум 5 предложений.</div>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 20 · 10/11 · CONNECTED PRODUCTION",
      title: "Egy nap, amikor megváltozott a terv",
      subtitle: "Writing 100–120 слов и optional speaking",
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'writing'),
      optionalSpeaking: L20_OPTIONAL_SPEAKING,
      body: `
   <p>Напиши связный вымышленный рассказ: исходный план → события → проблема → действие → результат → мнение. Используй <b>először, azután, utána, később, végül, amikor, mert, ezért</b>.</p><div class="note">Writing остаётся PARTIAL. Optional speaking — только текстовая self-practice без микрофона, score и evidence.</div>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 20 · 11/11 · A2 CHECKPOINT",
      title: "A2 integrációs profil",
      subtitle: "Честный профиль evidence, не CEFR-сертификат",
      activities: L20_ACTIVITIES.filter((activity) => activity.kind === 'exitCheck'),
      body: `
   <ul class="tick"><li><b>Grammar / Language Use:</b> DIRECT только при прохождении Controlled Practice.</li><li><b>Reading:</b> DIRECT только при достаточном понимании связного текста.</li><li><b>Listening:</b> DIRECT только при загруженном MP3 и достаточном score.</li><li><b>Writing:</b> PARTIAL до квалифицированной проверки.</li><li><b>Interaction:</b> PARTIAL до квалифицированной проверки.</li></ul><div class="note">Это интеграционный checkpoint конца A2, но не автоматическое утверждение «A2 достигнут». Quiz и просмотр 11 слайдов сами по себе не выдают CEFR-сертификацию. Дальше L21 консолидирует выбор спряжения в B1-коммуникации.</div>
 `
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
