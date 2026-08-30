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
      { id: 'l21-rp-1', speaker: 'waiter', prompt: 'Mit nézzünk este?', next: 'l21-rp-2' },
      { id: 'l21-rp-2', speaker: 'learner', prompt: 'Предложи один фильм в неопределённом контексте.', responseMode: 'selfPractice', model: 'Nézzünk meg egy magyar filmet!', next: 'l21-rp-3' },
      { id: 'l21-rp-3', speaker: 'waiter', prompt: 'Jó ötlet. Ismered ezt a filmet?', next: 'l21-rp-4' },
      { id: 'l21-rp-4', speaker: 'learner', prompt: 'Ответь о конкретном фильме и назови ещё один неопределённый вариант.', responseMode: 'selfPractice', model: 'Nem ismerem, de ismerek egy másik filmet.', next: 'l21-rp-5' },
      { id: 'l21-rp-5', speaker: 'waiter', prompt: 'Ismered a főszereplőt?', next: 'l21-rp-6' },
      { id: 'l21-rp-6', speaker: 'learner', prompt: 'Используй объектное местоимение őt и определённую форму.', responseMode: 'selfPractice', model: 'Igen, ismerem. Láttam őt egy másik filmben.', next: 'l21-rp-7' },
      { id: 'l21-rp-7', speaker: 'waiter', prompt: 'Rendben. A mozi előtt találkozunk?', next: 'l21-rp-8' },
      { id: 'l21-rp-8', speaker: 'learner', prompt: 'Заверши естественно. Если подходит контекст, можно использовать -lak/-lek, но это не обязательно.', responseMode: 'selfPractice', model: 'Igen. Várlak a mozi előtt.' },
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
      title: "Bevezetés",
      subtitle: "Зачем нам глубокий разговор об этом",
      body: `
   <p>Прогрессия курса здесь последовательна: в L7 был предварительный контакт с выбором формы, в L13 — контраст настоящих форм, в L20 — полная система прошедшего времени, а L21 закрепляет выбор спряжения в контекстной коммуникации.</p>
   <div class="note"><b>Can-Do:</b> выбирать определённое или неопределённое спряжение в контексте и уместно использовать <span class="hu-word">engem, téged, őt, ezt/azt</span> и <span class="hu-word">-lak/-lek</span>.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 21 · 2/11 · НЕОПРЕДЕЛЁННОЕ",
      title: "Rendszerezés: mikor alanyi?",
      subtitle: "Когда точно неопределённое спряжение",
      body: `
   <ul class="tick">
     <li>Нет прямого дополнения во винительном падеже (непереходный глагол): <button class="speak-btn" data-speak-text="Megyek a parkba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Megyek a parkba.</button></li>
     <li>Дополнение с неопределённым артиклем <span class="hu-word">egy</span>: <button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvasok egy könyvet.</button></li>
     <li>Дополнение без артикля во множественном числе или во множественной массе: <button class="speak-btn" data-speak-text="Könyveket olvasok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Könyveket olvasok.</button>, <button class="speak-btn" data-speak-text="Vizet iszom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Vizet iszom.</button></li>
     <li>Неопределённые местоимения: <span class="hu-word">valami</span> (что-то), <span class="hu-word">semmi</span> (ничего), <span class="hu-word">bármi</span> (что угодно): <button class="speak-btn" data-speak-text="Semmit nem látok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Semmit nem látok.</button></li>
     <li><b>Важное исключение:</b> местоимения 1-го и 2-го лица (engem — меня, téged — тебя) <b>требуют неопределённой формы глагола</b>, несмотря на то что они личные! Подробнее на слайде 4.</li>
   </ul>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 21 · 3/11 · ОПРЕДЕЛЁННОЕ",
      title: "Rendszerezés: mikor tárgyas?",
      subtitle: "Когда точно определённое спряжение",
      body: `
   <ul class="tick">
     <li>Дополнение с определённым артиклем <span class="hu-word">a / az</span>: <button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvasom a könyvet.</button></li>
     <li>Указательные местоимения <span class="hu-word">ez</span> / <span class="hu-word">az</span> (в форме ezet / azt): <button class="speak-btn" data-speak-text="Ezt olvasom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ezt olvasom.</button></li>
     <li>Имена собственные (имена людей, города, страны...): <button class="speak-btn" data-speak-text="Látom Pétert." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látom Pétert.</button></li>
     <li>Притяжательные формы (моего/твоего/его...): <button class="speak-btn" data-speak-text="Szeretem a barátomat." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretem a barátomat.</button></li>
     <li>Личные местоимения 3-го лица (őt — его/её, őket — их): <button class="speak-btn" data-speak-text="Látom őt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látom őt.</button></li>
     <li>Объектное придаточное содержания с <span class="hu-word">hogy</span> после подходящего переходного глагола может выступать содержанием прямого дополнения: <button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudom, hogy itt vagy.</button> <span class="pron">(tudom: знаю [что?], что ты здесь)</span></li>
   </ul>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 21 · 4/11 · МЕСТОИМЕНИЯ-ИСКЛЮЧЕНИЯ",
      title: "Trükkös esetek: névmások",
      subtitle: "Случай 1: engem / téged — почему неопределённое?",
      body: `
   <p>Это одно из главных контринтуитивных правил венгерской грамматики:</p>
   <p>Хотя местоимения <button class="speak-btn" data-speak-text="engem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> engem</button> (меня) и <button class="speak-btn" data-speak-text="téged" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> téged</button> (тебя) указывают на абсолютно конкретных людей, глагол с ними ставится в <b>неопределённую форму</b>!</p>
   <table class="conj">
     <tr><th>Фраза</th><th>Форма глагола</th><th>Почему?</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="Látsz engem?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látsz engem?</button></td><td>látsz <span class="pron">(неопределённая)</span></td><td>engem = 1-е лицо</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Lát engem." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lát engem.</button></td><td>lát <span class="pron">(неопределённая)</span></td><td>engem = 1-е лицо</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Lát téged." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lát téged.</button></td><td>lát <span class="pron">(неопределённая)</span></td><td>téged = 2-е лицо</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="Látja őt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látja őt.</button></td><td>látja <span class="pron">(определённая)</span></td><td>őt = 3-е лицо!</td></tr>
   </table>
   <div class="warn"><b>Правило:</b> Определённое спряжение используется ТОЛЬКО с объектами 3-го лица (он/она/оно/они, эта книга, Пётр...). Объекты 1-го и 2-го лица (меня, тебя, нас, вас) считаются «внутри диалога» и грамматически сочетаются с неопределённым спряжением!</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 21 · 5/11 · ОКОНЧАНИЕ -LAK/-LEK",
      title: "A -lak/-lek végződés",
      subtitle: "Случай 2: форма -lak/-lek «Я тебя / я вас...»",
      body: `
   <p>А что происходит, когда подлежащее — «я» (1-е лицо), а объект — «тебя / вас» (2-е лицо)? Для этой комбинации в венгерском есть <b>особая, уникальная форма</b> с суффиксом <span class="hu-word">-lak / -lek</span>:</p>
   <p><button class="speak-btn" data-speak-text="Szeretlek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretlek.</button> <span style="color:#8a7a68">(Я люблю тебя)</span></p>
   <p><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látlak.</button> <span style="color:#8a7a68">(Я вижу тебя / я вижу вас)</span></p>
   <p><button class="speak-btn" data-speak-text="Várlak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Várlak.</button> <span style="color:#8a7a68">(Я жду тебя)</span></p>
   <div class="note">Эта форма кодирует <b>сразу оба лица</b> в одном окончании: подлежащее = én (я), объект = téged / titeket (тебя / вас). Местоимение téged/titeket при этом можно вообще не произносить — всё есть в самом -lak/-lek!</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 21 · 6/11 · ВОЗВРАТНЫЕ ГЛАГОЛЫ",
      title: "Tárgyas ragozás visszaható igéknél",
      subtitle: "Случай 3: возвратные глаголы с -kodik/-kedik",
      body: `
   <p>Изученные здесь глаголы <button class="speak-btn" data-speak-text="mosakodik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mosakodik</button> (умываться) и <button class="speak-btn" data-speak-text="öltözködik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> öltözködik</button> (одеваться) в этих значениях непереходные: у них нет прямого объекта.</p>
   <p><button class="speak-btn" data-speak-text="Mosakodom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mosakodom.</button> <span style="color:#8a7a68">(Я умываюсь)</span> — неопределённая форма изученного mosakodik.</p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 21 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Проверьте своё чутьё спряжений",
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretem a zenét." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretem a zenét.</button> <span style="color:#8a7a68">(Люблю музыку — a zenét = определённое)</span></p>
   <p><button class="speak-btn" data-speak-text="Szeretek zenét hallgatni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretek zenét hallgatni.</button> <span style="color:#8a7a68">(szeretek — неопределённая форма; hallgatni — инфинитивное дополнение, а zenét — неопределённый прямой объект глагола hallgatni)</span></p>
   <p><button class="speak-btn" data-speak-text="Nem hallom, mit mondasz." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem hallom, mit mondasz.</button> <span style="color:#8a7a68">(Встроенный вопрос mit mondasz здесь передаёт содержание объекта глагола hallom; это не означает, что любое придаточное автоматически требует определённой формы)</span></p>
   <div class="note"><b>Функциональные реплики:</b> Mit olvasol? · Mit nézel? · Ismered ezt…? · Igen, ismerem. · Nem ismerem. · Ezt szeretem. · Azt nem szeretem. · Látsz engem? · Igen, látlak. · Várlak. · Hallak. · Nem hallom. · Azt hiszem, hogy…</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 21 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Разговор двух друзей",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Látod azt az embert ott?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Látod azt az embert ott?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Nem látom, mert nem hordom a szemüvegemet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem látom, mert nem hordom a szemüvegemet.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Azt hiszem, ismerem őt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azt hiszem, ismerem őt.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="És ő is ismer téged?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> És ő is ismer téged?</button></p>
   <div class="task">Задание 1. Объясните выбор спряжения для каждого глагола в диалоге: látod (почему?), látom (почему?), hordom (почему?), ismerem (почему?), ismer téged (почему?).</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 21 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: L21_ACTIVITIES,
      optionalSpeaking: L21_OPTIONAL_SPEAKING,
      body: `
   <ol class="tasklist">
     <li>Выберите правильную форму: „Látom / látok engem?“</li>
     <li>Переведите: «Я вижу тебя» (используйте форму -lak/-lek)</li>
     <li>Переведите: «Я знаю, что ты прав» (обратите внимание на придаточное)</li>
     <li>Почему в „Látom Pétert” используется определённое спряжение, а в „Látok egy embert” — неопределённое?</li>
     <li>Составьте 3 предложения с формой -lak/-lek для разных глаголов</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 21 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Определённое спряжение распространяется и на наклонения! В следующем, 22-м уроке мы разберём повелительное наклонение (felszólító mód) — у него тоже будут неопределённые и определённые формы («читай!» vs «прочитай это!»).</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 21 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 21-го урока",
      body: `
   <ul class="tick">
     <li>Определённое спряжение — ТОЛЬКО с объектами 3-го лица (a könyvet, ezt, őt, Pétert, придаточное)</li>
     <li>engem / téged — несмотря на конкретность, сочетаются с НЕОПРЕДЕЛЁННОЙ формой</li>
     <li>én + téged/titeket — особый суффикс -lak/-lek (szeretlek, látlak)</li>
     <li>Придаточные с hogy требуют определённой формы в главном предложении (tudom, hogy...)</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Найдите в любой венгерской песне 5 глаголов с формой -lak/-lek или с подлежащим hogy и выпишите их с переводом.</div>
 `
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
