import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L23_ACTIVITIES = createMigrationActivities({
  lessonId: 23,
  controlledTitle: 'Условное наклонение: формы и функции',
  controlledPassCount: 9,
  controlledExercises: [
    { kind: 'fillGap', id: 'l23-cp-1', prompt: 'A · én + vár → условная форма', accept: ['várnék'] },
    { kind: 'fillGap', id: 'l23-cp-2', prompt: 'A · ő + lenni → условная форма', accept: ['lenne'] },
    { kind: 'fillGap', id: 'l23-cp-3', prompt: 'A · mi + menni → условная форма', accept: ['mennénk'] },
    { kind: 'fillGap', id: 'l23-cp-4', prompt: 'A · én + szeretni + конкретный объект → условная определённая форма', accept: ['szeretném'] },
    { kind: 'singleChoice', id: 'l23-cp-5', prompt: 'B · Ha lenne időm, ...', options: ['utaznék', 'utaztam'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l23-cp-6', prompt: 'B · Выбери согласованную гипотезу.', options: ['Ha több pénzem lenne, gyakrabban utaznék.', 'Ha több pénzem volt, gyakrabban utaznék.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l23-cp-7', prompt: 'B · Mit csinálnál, ha egy hónapig nem kellene dolgoznod?', options: ['Sokat utaznék.', 'Sokat utaztam.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l23-cp-8', prompt: 'B · В каком варианте ha-clause выражает условие, а вторая часть — результат?', options: ['Ha találnék távmunkát, hétköznap dolgoznék.', 'Hétköznap, ha, dolgoznék távmunkát.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l23-cp-9', prompt: 'C · Выбери вежливый заказ.', options: ['Kérnék egy kávét.', 'Kérek volna egy kávét.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l23-cp-10', prompt: 'C · Вежливо попроси помощь.', options: ['Tudna segíteni?', 'Segíts!'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l23-cp-11', prompt: 'C · Вежливо попроси повторить.', options: ['Megismételné, kérem?', 'Megismétled!'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l23-cp-12', prompt: 'C · Вежливо спроси информацию.', options: ['Meg tudná mondani, hol van a recepció?', 'Mondd meg, hol a recepció!'], correctIndex: 0 },
  ],
  readingTitle: 'Egy év külföldön',
  readingParagraphs: [
    'Ha egy évig bárhol élhetnék, valószínűleg egy kisebb európai várost választanék. Nem szeretnék nagyon drága helyre költözni, mert akkor túl sok pénzt kellene lakásra költenem. Fontos lenne számomra, hogy jó legyen a tömegközlekedés, és sok zöld terület legyen a városban.',
    'Ha találnék távmunkát, hétköznap dolgoznék, hétvégén pedig bejárnám a környéket. Megtanulnék valamennyit a helyi nyelvből is, mert szerintem könnyebb kapcsolatot teremteni az emberekkel, ha az ember beszéli a nyelvüket.',
    'Természetesen hiányozna a családom és a barátaim. Ha lehetne, néhány havonta hazautaznék. Egy év után eldönteném, hogy szeretnék-e tovább maradni, vagy inkább hazaköltöznék.',
  ],
  readingPassCount: 5,
  readingQuestions: [
    { id: 'l23-read-1', question: 'Mi a szöveg fő témája?', options: ['Egy elképzelt külföldi év', 'Egy hétvégi kirándulás', 'Egy új munka első napja'], correctIndex: 0 },
    { id: 'l23-read-2', question: 'Milyen várost választana a beszélő?', options: ['Nagyon drága nagyvárost', 'Kisebb európai várost jó közlekedéssel és zöld területekkel', 'Csak tengerparti várost'], correctIndex: 1 },
    { id: 'l23-read-3', question: 'Miért tanulna a helyi nyelvből?', options: ['Mert könnyebb kapcsolatot teremteni', 'Mert nem dolgozna', 'Mert kötelező lenne'], correctIndex: 0 },
    { id: 'l23-read-4', question: 'Mi lenne a külföldi élet egyik hátránya?', options: ['Hiányozna a család és a barátok', 'Túl sok lenne a zöld terület', 'Nem lenne hétvége'], correctIndex: 0 },
    { id: 'l23-read-5', question: 'Miről döntene a beszélő egy év után?', options: ['Maradjon-e tovább vagy költözzön haza', 'Vegyen-e autót', 'Melyik nyelvet felejtse el'], correctIndex: 0 },
    { id: 'l23-read-6', question: 'Mire következtethetünk a szövegből?', options: ['A beszélőnek fontos az önállóság és a kapcsolattartás is', 'A beszélő nem szeretne dolgozni', 'A beszélő biztosan végleg külföldre költözik'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: желания и условия',
  listeningTranscript: 'Szeretnék többet utazni. Ha több szabadságom lenne, nyáron elmennék Horvátországba, és sokat úsznék.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l23-listen-1', question: 'Mit szeretne a beszélő?', options: ['Többet utazni', 'Többet dolgozni', 'Kevesebbet pihenni'], correctIndex: 0 },
    { id: 'l23-listen-2', question: 'Mire lenne szüksége?', options: ['Több pénzre', 'Több szabadságra', 'Új autóra'], correctIndex: 1 },
    { id: 'l23-listen-3', question: 'Mit csinálna nyáron?', options: ['Sokat úszna', 'Síelne', 'Tanulna'], correctIndex: 0 },
  ],
  listeningB: {
    title: 'Аудирование B: свободная неделя',
    assetId: 'l23_listening_b_free_week',
    audioStatus: 'published',
    transcript: 'Nóra: Képzeld, ha jövő hónapban kapnál egy teljes szabad hetet, mit csinálnál?\nÁdám: Ha lenne egy szabad hetem, biztosan elutaznék valahová. Talán Horvátországba mennék.\nNóra: Én inkább itthon maradnék. Mostanában sokat dolgozom, ezért szeretnék pihenni.\nÁdám: De ha egész héten otthon lennél, nem unatkoznál?\nNóra: Talán egy kicsit. Ha jó idő lenne, kirándulnék, találkoznék a barátaimmal, és végre elolvasnék néhány könyvet.\nÁdám: Én akkor is utaznék. Ha időben vennénk jegyet, talán nem lenne olyan drága.\nNóra: Ez igaz. Hová mennél pontosan?\nÁdám: Splitbe. Két-három napot a városban töltenék, aztán elmennék egy csendesebb helyre a tenger mellett.\nNóra: Én egy egész hetet nem szeretnék utazással tölteni.\nÁdám: Akkor mit szólnál négy naphoz? Utána még lenne három napod otthon pihenni.\nNóra: Ez már jobban tetszik. Ha találnánk olcsó szállást, lehet, hogy én is elmennék.\nÁdám: Akkor este megnézhetnénk a lehetőségeket.\nNóra: Rendben. Küldj néhány ajánlatot, és választunk.',
    passCount: 6,
    questions: [
      { id: 'l23-listen-b-1', question: 'Mit tenne Ádám egy szabad héten?', options: ['Elutazna, talán Horvátországba.', 'Végig otthon dolgozna.', 'Új lakást keresne.'], correctIndex: 0 },
      { id: 'l23-listen-b-2', question: 'Miért maradna Nóra inkább otthon?', options: ['Mert fél repülni.', 'Mert sokat dolgozik, és pihenni szeretne.', 'Mert nincs útlevele.'], correctIndex: 1 },
      { id: 'l23-listen-b-3', question: 'Mitől lehetne olcsóbb az utazás?', options: ['Ha időben vennének jegyet.', 'Ha egész héten utaznának.', 'Ha nem foglalnának szállást.'], correctIndex: 0 },
      { id: 'l23-listen-b-4', question: 'Miért nem tetszik Nórának Ádám első terve?', options: ['Nem akarja az egész hetet utazással tölteni.', 'Nem szereti a tengert.', 'Nem akar a barátaival találkozni.'], correctIndex: 0 },
      { id: 'l23-listen-b-5', question: 'Milyen kompromisszumot javasol Ádám?', options: ['Négy nap utazást és három nap otthoni pihenést.', 'Három hét utazást.', 'Egyetlen napos kirándulást.'], correctIndex: 0 },
      { id: 'l23-listen-b-6', question: 'Mi kell ahhoz, hogy Nóra is elutazzon?', options: ['Olcsó szállást kell találniuk.', 'Új autót kell venniük.', 'Ádámnak otthon kell maradnia.'], correctIndex: 0 },
      { id: 'l23-listen-b-7', question: 'A beszélgetés végén közelebb kerülnek-e a közös döntéshez?', options: ['Igen, este együtt megnézik a lehetőségeket.', 'Nem, befejezik a tervezést.', 'Nem, Nóra biztosan otthon marad.'], correctIndex: 0 },
    ],
  },
  rolePlay: {
    title: 'RolePlay: изменение бронирования в отеле',
    partnerLabel: 'Администратор отеля',
    completionMessage: 'Запрос обработан. Прослушай, насколько вежливо и ясно ты уточнял(а) условия.',
    startTurnId: 'l23-rp-1',
    turns: [
      { id: 'l23-rp-1', speaker: 'learner', prompt: 'Попроси изменить бронирование.', responseMode: 'selfPractice', model: 'Szeretném megváltoztatni a foglalásomat.', next: 'l23-rp-2' },
      { id: 'l23-rp-2', speaker: 'waiter', prompt: 'Sajnos azon a napon nincs szabad szobánk.', next: 'l23-rp-3' },
      { id: 'l23-rp-3', speaker: 'learner', prompt: 'Вежливо спроси об альтернативе.', responseMode: 'selfPractice', model: 'Ha lehetne, kérnék egy másik időpontot. Mit tudna ajánlani?', next: 'l23-rp-4' },
      { id: 'l23-rp-4', speaker: 'waiter', prompt: 'A következő napon lenne egy szabad szobánk.', next: 'l23-rp-5' },
      { id: 'l23-rp-5', speaker: 'learner', prompt: 'Уточни одну деталь.', responseMode: 'selfPractice', model: 'Meg tudná mondani, hogy reggelivel együtt mennyibe kerülne?', next: 'l23-rp-6' },
      { id: 'l23-rp-6', speaker: 'waiter', prompt: 'Igen, az ár tartalmazná a reggelit.', next: 'l23-rp-7' },
      { id: 'l23-rp-7', speaker: 'learner', prompt: 'Вежливо прими или отклони вариант и заверши разговор.', responseMode: 'selfPractice', model: 'Köszönöm, ezt az időpontot szeretném. Viszontlátásra!', next: 'l23-rp-8' },
      { id: 'l23-rp-8', speaker: 'waiter', prompt: 'Rendben, módosítottam a foglalást. Viszontlátásra!' },
    ],
  },
  writingTitle: 'Письмо: одно изменение в повседневной жизни',
  writingPrompt: 'Напиши 100–120 слов: если бы ты мог(ла) изменить одну вещь в своей повседневной жизни, что бы ты изменил(а) и почему?',
  writingModel: ['Ha megváltoztathatnék egy dolgot, több szabadidőt szeretnék.', 'Ha több időm lenne, gyakrabban találkoznék a barátaimmal.'],
  writingRubric: ['100–120 слов', 'Изменение сформулировано ясно', 'Есть ha-clause', 'Условные формы используются уместно', 'Причины связаны с выбором'],
  objectiveChecks: [
    { objectiveId: 'l23_form-conditional', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l23_use-lenne', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l23_build-if-clauses', activity: 'writing', evidenceKind: 'writing' },
    {
      objectiveId: 'l23_express-wishes',
      activity: 'roleplay',
      evidenceKind: 'interaction',
    },
    {
      objectiveId: 'l23_understand-conditional',
      activity: 'reading',
      evidenceKind: 'reading',
      evidenceComponents: [{ activity: 'listeningB', evidenceKind: 'listening' }],
    },
  ],
});

const L23_OPTIONAL_SPEAKING = {
  title: 'Говорение: месяц без работы',
  instructions: 'Говори около 2 минут на тему: Mit csinálnál, ha egy hónapig nem kellene dolgoznod? Используй минимум 4 условные формы, 2 причины и 1 ha-clause.',
  prompt: 'Ha egy hónapig nem kellene dolgoznom, utaznék és több időt töltenék a családommal. Azért választanám ezt, mert pihennék és új dolgokat tanulnék.',
  rubric: ['Около 2 минут', 'Есть минимум 4 условные формы', 'Есть минимум 2 причины', 'Есть минимум 1 ha-clause', 'Ответ связный и понятный'],
};

export const LESSON_23: Lesson = {
  id: 23,
  number: 23,
  level: 'B1',
  title: 'Урок 23 · A feltételes mód',
  subtitle: 'Условное наклонение',
  description: 'Условное наклонение с суффиксами -na/-ne/-ná/-né, неопределённая и определённая парадигма, форма lenne (было бы), вежливые просьбы и условные предложения с ha.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 23 · 1/11 · ЗНАК УСЛОВИЯ",
      title: "A feltételes mód",
      subtitle: "Суффикс -na/-ne/-ná/-né — маркер «бы»",
      body: `
   <p>Условное наклонение выражает гипотетическое действие, желание, возможность или мечту («я сделал бы», «если бы...»). Его маркер — суффикс <span class="hu-word">-na / -ne</span> (или <span class="hu-word">-ná / -né</span> перед окончаниями), подчиняющийся гармонии гласных:</p>
   <p><button class="speak-btn" data-speak-text="tanulna" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulna</button> <span style="color:#8a7a68">(он учился бы — задние гласные)</span></p>
   <p><button class="speak-btn" data-speak-text="kérne" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérne</button> <span style="color:#8a7a68">(он просил бы — передние гласные)</span></p>
   <div class="note"><b>Can-Do:</b> выражать желания и гипотетические ситуации и формулировать вежливые просьбы.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 23 · 2/11 · НЕОПРЕДЕЛЁННОЕ УСЛОВИЕ",
      title: "Alanyi feltételes mód",
      subtitle: "Неопределённое условное наклонение",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>tanul (учиться)</th><th>kér (просить)</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="tanulnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnék</button></td><td><button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnék</button></td><td>я учился бы / я просил бы</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="tanulnál" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnál</button></td><td><button class="speak-btn" data-speak-text="kérnél" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnél</button></td><td>ты учился бы / ты просил бы</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="tanulna" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulna</button></td><td><button class="speak-btn" data-speak-text="kérne" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérne</button></td><td>он учился бы / он просил бы</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="tanulnánk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnánk</button></td><td><button class="speak-btn" data-speak-text="kérnénk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnénk</button></td><td>мы учились бы / мы просили бы</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="tanulnátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnátok</button></td><td><button class="speak-btn" data-speak-text="kérnétek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnétek</button></td><td>вы учились бы / вы просили бы</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="tanulnának" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnának</button></td><td><button class="speak-btn" data-speak-text="kérnének" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnének</button></td><td>они учились бы / они просили бы</td></tr>
   </table>
   <div class="note">В 15-м уроке вы видели форму <span class="hu-word">kérek</span>; сравните: <span class="hu-word">kérek → kérnék</span> («прошу → попросил(а) бы»). Форма <button class="speak-btn" data-speak-text="szeretnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> szeretnék</button> («я хотел(а) бы») знакома из 18-го урока. Обе формы показывают неопределённое условное наклонение 1-го лица.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 23 · 3/11 · ОПРЕДЕЛЁННОЕ УСЛОВИЕ",
      title: "Tárgyas feltételes mód",
      subtitle: "Определённое условное наклонение",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>tanul + конкретный объект</th><th>kér + конкретный объект</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="tanulnám" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnám</button></td><td><button class="speak-btn" data-speak-text="kérném" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérném</button></td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="tanulnád" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnád</button></td><td><button class="speak-btn" data-speak-text="kérnéd" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnéd</button></td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="tanulná" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulná</button></td><td><button class="speak-btn" data-speak-text="kérné" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérné</button></td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="tanulnánk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnánk</button></td><td><button class="speak-btn" data-speak-text="kérnénk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnénk</button></td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="tanulnátok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnátok</button></td><td><button class="speak-btn" data-speak-text="kérnétek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnétek</button></td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="tanulnák" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulnák</button></td><td><button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérnék</button></td></tr>
   </table>
   <div class="note">Сравните 1-е лицо ед.ч.: <button class="speak-btn" data-speak-text="Elolvasnék egy könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elolvasnék egy könyvet.</button> (неопределённое) vs <button class="speak-btn" data-speak-text="Elolvasnám ezt a könyvet." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elolvasnám ezt a könyvet.</button> (определённое).</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 23 · 4/11 · LENNE",
      title: "Rendhagyó igék",
      subtitle: "Самый главный: lenne — от lenni",
      body: `
   <p>Условная форма от глагола <span class="hu-word">lenni</span> — <span class="hu-word">lenne</span> («было бы»):</p>
   <p><button class="speak-btn" data-speak-text="Jó lenne találkozni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó lenne találkozni.</button> <span style="color:#8a7a68">(Было бы хорошо встретиться)</span></p>
   <p><button class="speak-btn" data-speak-text="Lennél szíves segíteni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Lennél szíves segíteni?</button> <span style="color:#8a7a68">(Не был бы ты так любезен помочь?)</span></p>
   <div class="note"><button class="speak-btn" data-speak-text="Jó lenne találkozni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó lenne találkozni.</button> — одна из самых частых разговорных фраз для предложения планов друг другу.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 23 · 5/11 · УСЛОВНЫЕ ПРЕДЛОЖЕНИЯ",
      title: "Feltételes mondatok",
      subtitle: "Условные предложения с ha (если)",
      body: `
   <p>Конструкции «если бы..., то...» строятся со союзом <span class="hu-word">ha</span> и условным наклонением в <b>обеих частях</b> предложения (как и в русском):</p>
   <p><button class="speak-btn" data-speak-text="Ha lenne időm, moziba mennék." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha lenne időm, moziba mennék.</button> <span style="color:#8a7a68">(Если бы у меня было время, я пошёл бы в кино)</span></p>
   <p><button class="speak-btn" data-speak-text="Ha sokat tanulnál, tudnád a választ." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha sokat tanulnál, tudnád a választ.</button> <span style="color:#8a7a68">(Если бы ты много учился, ты знал бы ответ)</span></p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 23 · 6/11 · ВЕЖЛИВОСТЬ",
      title: "Udvarias kérések",
      subtitle: "Вежливые просьбы с условным наклонением",
      body: `
   <p>Условное наклонение делает любую просьбу предельно вежливой, убирая категоричность из разговорных диалогов:</p>
   <p><button class="speak-btn" data-speak-text="Tudnál segíteni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudnál segíteni?</button> <span style="color:#8a7a68">(Мог бы ты помочь? — вежливее, чем tudsz segíteni?)</span></p>
   <p><button class="speak-btn" data-speak-text="Kérhetnék egy kávét?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kérhetnék egy kávét?</button> <span style="color:#8a7a68">(Мог бы я попросить кофе? — верх вежливости в кафе!)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 23 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Мечты и гипотезы",
      body: `
   <p><button class="speak-btn" data-speak-text="Ha gazdag lennék, sokat utaznék." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha gazdag lennék, sokat utaznék.</button> <span style="color:#8a7a68">(Если бы я был богат, я бы много путешествовал)</span></p>
   <p><button class="speak-btn" data-speak-text="Mit csinálnál, ha nem kellene dolgoznod?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit csinálnál, ha nem kellene dolgoznod?</button> <span style="color:#8a7a68">(Что бы ты делал, если бы тебе не нужно было работать?)</span></p>
   <div class="note"><b>Функциональные реплики:</b> Szeretnék… · Kérnék… · Szeretném… · Kérném… · Ha lehetne… · Ha lenne időm… · Ha több pénzem lenne… · Én inkább… · A helyedben… · Mit csinálnál, ha…? · Tudna segíteni? · Meg tudná mondani…? · Megismételné, kérem?</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 23 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Планирование выходных",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó lenne elmenni a Balatonra a hétvégén." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó lenne elmenni a Balatonra a hétvégén.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, de ha esne az eső, nem tudnánk fürödni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, de ha esne az eső, nem tudnánk fürödni.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Akkor múzeumba mennénk. Mit szólsz?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Akkor múzeumba mennénk. Mit szólsz?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Benne vagyok, nagyszerű lenne!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Benne vagyok, nagyszerű lenne!</button></p>
   <div class="task">Задание 1. Найдите все условные формы в диалоге и переведите их.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 23 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: L23_ACTIVITIES,
      optionalSpeaking: L23_OPTIONAL_SPEAKING,
      body: `
   <ol class="tasklist">
     <li>Образуйте условную форму (1-е л. ед.ч., неопределённая) от: tanul, dolgozik, utazik, van</li>
     <li>Переведите: «Если бы у меня было время, я прочитал бы эту книгу»</li>
     <li>Составьте вежливую просьбу в кафе с помощью kérhetnék</li>
     <li>Переведите: «Было бы хорошо поехать в Будапешт»</li>
     <li>Составьте предложение на тему «Что бы я сделал, если бы выиграл в лотерею» (1-2 предложения)</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 23 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Теперь вы владеете всеми главными наклонениями (изъявительное, повелительное, условное). В следующем, 24-м уроке мы научимся связывать предложения между собой с помощью сложных союзов (mert, hogy, bár, ezért...) и строит развитую речь B1.</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 23 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 23-го урока",
      body: `
   <ul class="tick">
     <li>Маркер условного наклонения — суффикс -na/-ne (tanulna, kérne)</li>
     <li>Тоже имеет два спряжения: неопределённое (tanulnék) и определённое (tanulnám)</li>
     <li>lenni → lenne (было бы), lennék (я был бы)</li>
     <li>Условные предложения: ha + условное наклонение в обеих частях</li>
     <li>Вежливые просьбы: tudnál?, kérhetnék?</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите 5 предложений на тему «Если бы у меня был свободный месяц, я бы...» с условным наклонением.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l23_v1", hu: "gazdag", ru: "богатый", category: "Прилагательные", exampleSentence: "Ha gazdag lennék, utaznék.",
        ipa: "[gɒzdɒg]"
    },
    { id: "l23_v2", hu: "fürödni", ru: "купаться", category: "Глаголы", exampleSentence: "Jó lenne fürödni a tóban.",
        ipa: "[fˈyrødni]"
    },
    { id: "l23_v3", hu: "nagyszerű", ru: "великолепный / замечательный", category: "Прилагательные", exampleSentence: "Nagyszerű lenne találkozni!",
        ipa: "[nɒɟʃˈɛryː]"
    }
  ],
    quiz: [
    {
      id: 2301,
      question: 'Какой суффикс является маркером условного наклонения в венгерском языке?',
      options: ['-na / -ne', '-j-', '-t-', '-ni'],
      correctIndex: 0,
      explanation: 'Маркером условного наклонения является суффикс -na (для задних гласных) или -ne (для передних гласных): tanulna (он учился бы), kérne (он просил бы).'
    },
    {
      id: 2302,
      question: 'Как образуется определённое условное наклонение от глагола "lát" (видеть) в 1-м лице единственного числа (én)?',
      options: ['látnék', 'látnám', 'látnád', 'látná'],
      correctIndex: 1,
      explanation: 'Определённое условное наклонение используется с конкретным объектом. Для 1-го лица (én) форма: lát + n + á + m = látnám (я видел бы ЭТО). "Látnék" – это неопределённое условное (я видел бы что-то).'
    },
    {
      id: 2303,
      question: 'Как переводится фраза "Lennél szíves segíteni?"?',
      options: [
        'Ты помогаешь?',
        'Не был бы ты так любезен помочь?',
        'Ты умеешь помогать?',
        'Помоги мне!'
      ],
      correctIndex: 1,
      explanation: '"Lennél" – это условная форма от "lenni" (быть) во 2-м лице: "ты был бы". Вся фраза – очень вежливая просьба: "Не был бы ты так любезен помочь?" (урок 23, слайд 4).'
    },
    {
      id: 2304,
      question: 'Как строится условное предложение с союзом "ha" (если бы) в венгерском языке?',
      options: [
        'Условное наклонение только в первой части (после ha)',
        'Условное наклонение только во второй части (главной)',
        'Условное наклонение в обеих частях предложения',
        'Изъявительное наклонение в обеих частях'
      ],
      correctIndex: 2,
      explanation: 'В условных предложениях с "ha" (если бы) условное наклонение используется в ОБЕИХ частях: "Ha lenne időm, moziba mennék." (Если бы у меня было время, я пошёл бы в кино).'
    },
    {
      id: 2305,
      question: 'Какая форма глагола "tanul" (учиться) в неопределённом условном наклонении 1-го лица множественного числа (mi)?',
      options: ['tanulnánk', 'tanulnátok', 'tanulnának', 'tanulnék'],
      correctIndex: 0,
      explanation: 'Условное наклонение для "mi" (мы) в неопределённой форме: tanul + n + á + nk = tanulnánk (мы учились бы).'
    },
    {
      id: 2306,
      question: 'Какая условная форма используется для очень вежливой просьбы в кафе: "Мог бы я попросить кофе?"?',
      options: ['Kérsz egy kávét?', 'Kérhetnék egy kávét?', 'Kérek egy kávét.', 'Adsz egy kávét?'],
      correctIndex: 1,
      explanation: 'Условное наклонение делает просьбу предельно вежливой. "Kérhetnék" – это условная форма от "kér" (просить) в 1-м лице: "Мог бы я попросить?". "Kérhetnék egy kávét?" – очень вежливая просьба в кафе (урок 23, слайд 6).'
    }
  ],
  objectives: [
    { id: 'l23_form-conditional', text: 'Образовывать условное наклонение с помощью -na/-ne.', skills: ['grammar', 'writing'] },
    { id: 'l23_use-lenne', text: 'Употреблять форму lenne («был бы»).', skills: ['grammar', 'writing'] },
    { id: 'l23_build-if-clauses', text: 'Строить условные предложения с союзом ha.', skills: ['grammar', 'writing', 'speaking'] },
    { id: 'l23_express-wishes', text: 'Выражать желания и вежливые просьбы в условном наклонении.', skills: ['speaking', 'writing'] },
    { id: 'l23_understand-conditional', text: 'Понимать условные конструкции на слух и в тексте.', skills: ['listening', 'reading'] },
  ],
};
