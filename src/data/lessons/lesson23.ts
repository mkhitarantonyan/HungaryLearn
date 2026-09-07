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
      { id: 'l23-rp-1', speaker: 'learner', prompt: 'Попроси изменить бронирование.', responseMode: 'selfPractice', model: 'Jó napot! Szeretném megváltoztatni a foglalásomat.', next: 'l23-rp-2' },
      { id: 'l23-rp-2', speaker: 'waiter', prompt: 'Értem. Sajnos azon a napon nincs szabad szobánk.', next: 'l23-rp-3' },
      { id: 'l23-rp-3', speaker: 'learner', prompt: 'Вежливо спроси об альтернативе.', responseMode: 'selfPractice', model: 'Értem. Ha lehetne, kérnék egy másik időpontot. Mit tudna ajánlani?', next: 'l23-rp-4' },
      { id: 'l23-rp-4', speaker: 'waiter', prompt: 'A következő napon viszont lenne egy szabad szobánk.', next: 'l23-rp-5' },
      { id: 'l23-rp-5', speaker: 'learner', prompt: 'Уточни одну деталь.', responseMode: 'selfPractice', model: 'Rendben. Meg tudná mondani, hogy reggelivel együtt mennyibe kerülne?', next: 'l23-rp-6' },
      { id: 'l23-rp-6', speaker: 'waiter', prompt: 'Igen, természetesen. Az ár tartalmazná a reggelit.', next: 'l23-rp-7' },
      { id: 'l23-rp-7', speaker: 'learner', prompt: 'Вежливо прими или отклони вариант и заверши разговор.', responseMode: 'selfPractice', model: 'Rendben, köszönöm. Akkor ezt az időpontot szeretném. Viszontlátásra!', next: 'l23-rp-8' },
      { id: 'l23-rp-8', speaker: 'waiter', prompt: 'Rendben, már módosítottam is a foglalást. Viszontlátásra!' },
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
      eyebrow: "УРОК 23 · 1/11 · ВВЕДЕНИЕ",
      title: "A feltételes mód",
      subtitle: "Что было бы, что я хотел бы и как попросить косвеннее",
      note: 'Условное значение в венгерском выражается формой самого глагола. Отдельное слово, полностью равное русскому «бы», обычно не требуется.',
      warn: 'Не выбирай один из четырёх суффиксов и не добавляй обычные окончания механически. Формы лучше изучать по лицам; особенно важно запомнить форму первого лица на -nék.',
      task: 'Сравни реальные и условные реплики, определи функцию каждой формы и составь три собственных примера.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Реальность и воображаемая возможность</h4>
        <table class="conj">
          <tr><th>Реальное или запланированное действие</th><th>Условная или желаемая ситуация</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tanulok magyarul." data-speak-lang="hu-HU">Tanulok magyarul.</button></td>
            <td><button class="speak-btn" data-speak-text="Többet tanulnék, ha lenne időm." data-speak-lang="hu-HU">Többet tanulnék, ha lenne időm.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Elmegyek Horvátországba." data-speak-lang="hu-HU">Elmegyek Horvátországba.</button></td>
            <td><button class="speak-btn" data-speak-text="Elmennék Horvátországba, ha lenne szabadságom." data-speak-lang="hu-HU">Elmennék Horvátországba, ha lenne szabadságom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
          </tr>
        </table>

        <div class="note">
          Условная форма может выражать не только условие с «если».
          Она также передаёт желание, смягчённое намерение и вежливую просьбу.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Три основные функции</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Смысл</th></tr>
          <tr>
            <td>гипотетический результат</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet olvasnék." data-speak-lang="hu-HU">Ha lenne időm, többet olvasnék.</button></td>
            <td>при другом условии результат был бы другим</td>
          </tr>
          <tr>
            <td>желание</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék többet utazni." data-speak-lang="hu-HU">Szeretnék többet utazni.</button></td>
            <td>я хотел бы больше путешествовать</td>
          </tr>
          <tr>
            <td>вежливая просьба или заказ</td>
            <td>
              <button class="speak-btn" data-speak-text="Kérnék egy teát." data-speak-lang="hu-HU">Kérnék egy teát.</button><br>
              <button class="speak-btn" data-speak-text="Tudna segíteni?" data-speak-lang="hu-HU">Tudna segíteni?</button>
            </td>
            <td>косвеннее прямой команды</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Первая карта форм: пока только распознаём лицо</h4>
        <table class="conj">
          <tr><th>Основа</th><th>Я бы...</th><th>Он или она бы...</th><th>Что важно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td><button class="speak-btn" data-speak-text="tanulnék" data-speak-lang="hu-HU">tanulnék</button></td>
            <td><button class="speak-btn" data-speak-text="tanulna" data-speak-lang="hu-HU">tanulna</button></td>
            <td>формы различаются по лицу</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU">kér</button></td>
            <td><button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU">kérnék</button></td>
            <td><button class="speak-btn" data-speak-text="kérne" data-speak-lang="hu-HU">kérne</button></td>
            <td>первое лицо нельзя заменить формой третьего</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU">vár</button></td>
            <td><button class="speak-btn" data-speak-text="várnék" data-speak-lang="hu-HU">várnék</button></td>
            <td><button class="speak-btn" data-speak-text="várna" data-speak-lang="hu-HU">várna</button></td>
            <td>форма первого лица — várnék, не várnák</td>
          </tr>
        </table>

        <div class="warn">
          В неопределённой форме первого лица единственного числа используется окончание
          <b>-nék</b>
          и после заднерядных, и после переднерядных основ:
          <button class="speak-btn" data-speak-text="várnék, kérnék" data-speak-lang="hu-HU">várnék, kérnék</button>.
          Поэтому одной гармонии гласных недостаточно, чтобы построить всю парадигму.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как строится гипотетическая ситуация</h4>
        <table class="conj">
          <tr><th>Условие</th><th>Результат</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha több időm lenne" data-speak-lang="hu-HU">Ha több időm lenne</button></td>
            <td><button class="speak-btn" data-speak-text="gyakrabban sportolnék." data-speak-lang="hu-HU">gyakrabban sportolnék.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha több pénzem lenne" data-speak-lang="hu-HU">Ha több pénzem lenne</button></td>
            <td><button class="speak-btn" data-speak-text="többet utaznék." data-speak-lang="hu-HU">többet utaznék.</button></td>
          </tr>
        </table>
        <div class="note">
          На этом этапе изучаем гипотезы о настоящем и будущем:
          условие с <b>ha</b> и воображаемый результат.
          Реальные условия и условные конструкции о прошлом будут отделены позже.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Связь с предыдущим уроком</h4>
        <table class="conj">
          <tr><th>Прямая вежливая просьба</th><th>Более косвенная просьба</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Segítsen, kérem!" data-speak-lang="hu-HU">Segítsen, kérem!</button></td>
            <td><button class="speak-btn" data-speak-text="Tudna segíteni?" data-speak-lang="hu-HU">Tudna segíteni?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mondja meg, hol van a recepció!" data-speak-lang="hu-HU">Mondja meg, hol van a recepció!</button></td>
            <td><button class="speak-btn" data-speak-text="Meg tudná mondani, hol van a recepció?" data-speak-lang="hu-HU">Meg tudná mondani, hol van a recepció?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки первого знакомства</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Почему</th></tr>
          <tr>
            <td>Tanulna, если говорящий говорит о себе.</td>
            <td><button class="speak-btn" data-speak-text="Tanulnék." data-speak-lang="hu-HU">Tanulnék.</button></td>
            <td>нужно первое лицо</td>
          </tr>
          <tr>
            <td>Kérne egy kávét, если заказ делает говорящий.</td>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
            <td>нужно первое лицо</td>
          </tr>
          <tr>
            <td>Ha lenne időm, többet tanulok.</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet tanulnék." data-speak-lang="hu-HU">Ha lenne időm, többet tanulnék.</button></td>
            <td>гипотетический результат тоже условный</td>
          </tr>
        </table>

        <div class="task">
          Составь три реплики: одну гипотезу с условием, одно желание и одну вежливую просьбу.
          Пока используй только готовые модели со слайда.
        </div>

        <div class="note">
          Граница 23.1: здесь нужно понять функции и различать первые формы.
          Полная личная парадигма, два спряжения и нерегулярные глаголы будут разбираться на следующих слайдах.
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 23 · 2/11 · НЕОПРЕДЕЛЁННОЕ СПРЯЖЕНИЕ",
      title: "Alanyi feltételes mód",
      subtitle: "Условная форма без конкретного прямого объекта",
      note: 'Выбирай эту парадигму, когда прямого объекта нет, объект неопределённый или действие выражено вообще.',
      warn: 'Форма первого лица единственного числа всегда заканчивается на -nék: tanulnék, kérnék, várnék. Не образуй формы én как tanulna или várnák.',
      task: 'Прочитай таблицу по лицам, затем для каждого примера назови исполнителя и объясни, почему объект не требует определённой парадигмы.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Когда нужна неопределённая парадигма</h4>
        <table class="conj">
          <tr><th>Контекст</th><th>Пример</th><th>Причина</th></tr>
          <tr>
            <td>прямого объекта нет</td>
            <td><button class="speak-btn" data-speak-text="Többet tanulnék." data-speak-lang="hu-HU">Többet tanulnék.</button></td>
            <td>действие выражено без объекта</td>
          </tr>
          <tr>
            <td>неопределённый объект</td>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
            <td>один кофе впервые вводится в ситуацию</td>
          </tr>
          <tr>
            <td>неопределённое местоимение</td>
            <td><button class="speak-btn" data-speak-text="Olvasnék valamit." data-speak-lang="hu-HU">Olvasnék valamit.</button></td>
            <td>объект означает «что-нибудь»</td>
          </tr>
          <tr>
            <td>общее желание с инфинитивом</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék pihenni." data-speak-lang="hu-HU">Szeretnék pihenni.</button></td>
            <td>говорящий выражает желание выполнить действие</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полная парадигма</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>tanul</th><th>kér</th><th>Кто выполнял бы действие</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="tanulnék" data-speak-lang="hu-HU">tanulnék</button></td>
            <td><button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU">kérnék</button></td>
            <td>я</td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="tanulnál" data-speak-lang="hu-HU">tanulnál</button></td>
            <td><button class="speak-btn" data-speak-text="kérnél" data-speak-lang="hu-HU">kérnél</button></td>
            <td>ты</td>
          </tr>
          <tr>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="tanulna" data-speak-lang="hu-HU">tanulna</button></td>
            <td><button class="speak-btn" data-speak-text="kérne" data-speak-lang="hu-HU">kérne</button></td>
            <td>он или она</td>
          </tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="tanulnánk" data-speak-lang="hu-HU">tanulnánk</button></td>
            <td><button class="speak-btn" data-speak-text="kérnénk" data-speak-lang="hu-HU">kérnénk</button></td>
            <td>мы</td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="tanulnátok" data-speak-lang="hu-HU">tanulnátok</button></td>
            <td><button class="speak-btn" data-speak-text="kérnétek" data-speak-lang="hu-HU">kérnétek</button></td>
            <td>вы</td>
          </tr>
          <tr>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="tanulnának" data-speak-lang="hu-HU">tanulnának</button></td>
            <td><button class="speak-btn" data-speak-text="kérnének" data-speak-lang="hu-HU">kérnének</button></td>
            <td>они</td>
          </tr>
        </table>

        <div class="note">
          Слушай парадигму не как один длинный список, а по трём группам:
          единственное число, множественное число и отдельно первое лицо на <b>-nék</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Настоящее и условное значение</h4>
        <div class="note">Сравни прямую и более мягкую условную форму: kérek → kérnék («прошу → попросил(а) бы»).</div>
        <table class="conj">
          <tr><th>Настоящее</th><th>Условное или смягчённое</th><th>Изменение смысла</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
            <td>прошу → хотел бы попросить</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szeretek utazni." data-speak-lang="hu-HU">Szeretek utazni.</button></td>
            <td><button class="speak-btn" data-speak-text="Szeretnék utazni." data-speak-lang="hu-HU">Szeretnék utazni.</button></td>
            <td>люблю путешествовать → хотел бы путешествовать</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nyáron utazunk." data-speak-lang="hu-HU">Nyáron utazunk.</button></td>
            <td><button class="speak-btn" data-speak-text="Nyáron utaznánk, ha lenne pénzünk." data-speak-lang="hu-HU">Nyáron utaznánk, ha lenne pénzünk.</button></td>
            <td>реальный план → результат при условии</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Совпадающие формы: не определяй парадигму только по окончанию</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Неопределённый контекст</th><th>Что будет на 23.3</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanulnánk" data-speak-lang="hu-HU">tanulnánk</button></td>
            <td><button class="speak-btn" data-speak-text="Többet tanulnánk." data-speak-lang="hu-HU">Többet tanulnánk.</button></td>
            <td>та же внешняя форма возможна с конкретным объектом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kérnétek" data-speak-lang="hu-HU">kérnétek</button></td>
            <td><button class="speak-btn" data-speak-text="Kérnétek valamit?" data-speak-lang="hu-HU">Kérnétek valamit?</button></td>
            <td>контекст и объект показывают спряжение</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Én tanulna.</td>
            <td><button class="speak-btn" data-speak-text="Én tanulnék." data-speak-lang="hu-HU">Én tanulnék.</button></td>
            <td>первое лицо имеет собственную форму</td>
          </tr>
          <tr>
            <td>Ők tanulnák, если объекта нет.</td>
            <td><button class="speak-btn" data-speak-text="Ők tanulnának." data-speak-lang="hu-HU">Ők tanulnának.</button></td>
            <td>в третьем лице множественного числа неопределённая форма длиннее</td>
          </tr>
          <tr>
            <td>Én várnák.</td>
            <td><button class="speak-btn" data-speak-text="Én várnék." data-speak-lang="hu-HU">Én várnék.</button></td>
            <td>неопределённое первое лицо заканчивается на -nék</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Скажи: «Я бы больше учился».</li>
          <li>Спроси друга: «Ты хотел бы кофе?»</li>
          <li>Скажи: «Они попросили бы что-нибудь».</li>
          <li>Скажи: «Мы путешествовали бы летом, если бы у нас были деньги».</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Többet tanulnék." data-speak-lang="hu-HU">Többet tanulnék.</button><br>
            <button class="speak-btn" data-speak-text="Kérnél egy kávét?" data-speak-lang="hu-HU">Kérnél egy kávét?</button><br>
            <button class="speak-btn" data-speak-text="Ők kérnének valamit." data-speak-lang="hu-HU">Ők kérnének valamit.</button><br>
            <button class="speak-btn" data-speak-text="Nyáron utaznánk, ha lenne pénzünk." data-speak-lang="hu-HU">Nyáron utaznánk, ha lenne pénzünk.</button>
          </p>
        </details>

        <div class="note">Граница 23.2: здесь объект отсутствует или неопределённый. На 23.3 сравним те же лица с конкретным прямым объектом.</div>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 23 · 3/11 · ОПРЕДЕЛЁННОЕ СПРЯЖЕНИЕ",
      title: "Tárgyas feltételes mód",
      subtitle: "Что я сделал бы с конкретным прямым объектом",
      note: 'Определённую парадигму выбирает не само условное значение, а конкретный прямой объект — по тем же принципам, что в настоящем и повелительном наклонении.',
      warn: 'Не определяй спряжение только по внешнему окончанию. Формы mi и ti совпадают в двух парадигмах, а kérnék имеет два разных грамматических разбора.',
      task: 'В каждом примере найди прямой объект, назови признак определённости и определи лицо глагола.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Главный контраст</h4>
        <table class="conj">
          <tr><th>Неопределённый объект</th><th>Определённый объект</th><th>Выбор формы</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Elolvasnék egy könyvet." data-speak-lang="hu-HU">Elolvasnék egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Elolvasnám ezt a könyvet." data-speak-lang="hu-HU">Elolvasnám ezt a könyvet.</button></td>
            <td>одна книга → именно эта книга</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
            <td><button class="speak-btn" data-speak-text="Kérném a számlát." data-speak-lang="hu-HU">Kérném a számlát.</button></td>
            <td>один кофе → известный счёт</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Megnéznék egy filmet." data-speak-lang="hu-HU">Megnéznék egy filmet.</button></td>
            <td><button class="speak-btn" data-speak-text="Megnézném ezt a filmet." data-speak-lang="hu-HU">Megnézném ezt a filmet.</button></td>
            <td>какой-нибудь фильм → конкретный фильм</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что делает объект определённым</h4>
        <table class="conj">
          <tr><th>Признак</th><th>Пример</th></tr>
          <tr>
            <td>определённый артикль</td>
            <td><button class="speak-btn" data-speak-text="Megvenném a jegyet." data-speak-lang="hu-HU">Megvenném a jegyet.</button></td>
          </tr>
          <tr>
            <td>указательная конструкция</td>
            <td><button class="speak-btn" data-speak-text="Elolvasnám ezt a cikket." data-speak-lang="hu-HU">Elolvasnám ezt a cikket.</button></td>
          </tr>
          <tr>
            <td>имя собственное как объект</td>
            <td><button class="speak-btn" data-speak-text="Meghívnám Annát." data-speak-lang="hu-HU">Meghívnám Annát.</button></td>
          </tr>
          <tr>
            <td>притяжательная форма</td>
            <td><button class="speak-btn" data-speak-text="Eladnám az autómat." data-speak-lang="hu-HU">Eladnám az autómat.</button></td>
          </tr>
          <tr>
            <td>местоимение третьего лица</td>
            <td><button class="speak-btn" data-speak-text="Megkérdezném őt." data-speak-lang="hu-HU">Megkérdezném őt.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полная парадигма с естественными глаголами</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>elolvas + конкретный текст</th><th>kér + конкретный объект</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="elolvasnám" data-speak-lang="hu-HU">elolvasnám</button></td>
            <td><button class="speak-btn" data-speak-text="kérném" data-speak-lang="hu-HU">kérném</button></td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="elolvasnád" data-speak-lang="hu-HU">elolvasnád</button></td>
            <td><button class="speak-btn" data-speak-text="kérnéd" data-speak-lang="hu-HU">kérnéd</button></td>
          </tr>
          <tr>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="elolvasná" data-speak-lang="hu-HU">elolvasná</button></td>
            <td><button class="speak-btn" data-speak-text="kérné" data-speak-lang="hu-HU">kérné</button></td>
          </tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="elolvasnánk" data-speak-lang="hu-HU">elolvasnánk</button></td>
            <td><button class="speak-btn" data-speak-text="kérnénk" data-speak-lang="hu-HU">kérnénk</button></td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="elolvasnátok" data-speak-lang="hu-HU">elolvasnátok</button></td>
            <td><button class="speak-btn" data-speak-text="kérnétek" data-speak-lang="hu-HU">kérnétek</button></td>
          </tr>
          <tr>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="elolvasnák" data-speak-lang="hu-HU">elolvasnák</button></td>
            <td><button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU">kérnék</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Совпадение формы не означает совпадение грамматики</h4>
        <table class="conj">
          <tr><th>Одинаковая внешняя форма</th><th>Неопределённый контекст</th><th>Определённый контекст</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elolvasnánk" data-speak-lang="hu-HU">elolvasnánk</button></td>
            <td><button class="speak-btn" data-speak-text="Elolvasnánk egy könyvet." data-speak-lang="hu-HU">Elolvasnánk egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Elolvasnánk ezt a könyvet." data-speak-lang="hu-HU">Elolvasnánk ezt a könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elolvasnátok" data-speak-lang="hu-HU">elolvasnátok</button></td>
            <td><button class="speak-btn" data-speak-text="Elolvasnátok egy könyvet?" data-speak-lang="hu-HU">Elolvasnátok egy könyvet?</button></td>
            <td><button class="speak-btn" data-speak-text="Elolvasnátok ezt a könyvet?" data-speak-lang="hu-HU">Elolvasnátok ezt a könyvet?</button></td>
          </tr>
        </table>

        <div class="warn">
          Форма
          <button class="speak-btn" data-speak-text="kérnék" data-speak-lang="hu-HU">kérnék</button>
          особенно неоднозначна:
          <button class="speak-btn" data-speak-text="Én kérnék egy kávét." data-speak-lang="hu-HU">Én kérnék egy kávét.</button>
          — первое лицо неопределённого спряжения;
          <button class="speak-btn" data-speak-text="Ők kérnék a számlát." data-speak-lang="hu-HU">Ők kérnék a számlát.</button>
          — третье лицо множественного числа определённого спряжения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Частая форма желания</h4>
        <p><button class="speak-btn" data-speak-text="Szeretném ezt a könyvet." data-speak-lang="hu-HU">Szeretném ezt a könyvet.</button></p>
        <p><button class="speak-btn" data-speak-text="Szeretném megvenni ezt a könyvet." data-speak-lang="hu-HU">Szeretném megvenni ezt a könyvet.</button></p>
        <div class="note">Конкретный объект уже известен или назван, поэтому используется определённая форма первого лица.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Elolvasnék ezt a könyvet.</td>
            <td><button class="speak-btn" data-speak-text="Elolvasnám ezt a könyvet." data-speak-lang="hu-HU">Elolvasnám ezt a könyvet.</button></td>
            <td>указательная конструкция делает объект определённым</td>
          </tr>
          <tr>
            <td>Kérnék a számlát.</td>
            <td><button class="speak-btn" data-speak-text="Kérném a számlát." data-speak-lang="hu-HU">Kérném a számlát.</button></td>
            <td>речь идёт о конкретном счёте</td>
          </tr>
          <tr>
            <td>Ők elolvasnának ezt a cikket.</td>
            <td><button class="speak-btn" data-speak-text="Ők elolvasnák ezt a cikket." data-speak-lang="hu-HU">Ők elolvasnák ezt a cikket.</button></td>
            <td>третье лицо множественного числа и конкретный объект</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Скажи: «Я бы прочитал какую-нибудь книгу».</li>
          <li>Скажи: «Я бы прочитал эту книгу».</li>
          <li>Скажи: «Мы бы посмотрели этот фильм».</li>
          <li>Скажи: «Они попросили бы счёт».</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Elolvasnék egy könyvet." data-speak-lang="hu-HU">Elolvasnék egy könyvet.</button><br>
            <button class="speak-btn" data-speak-text="Elolvasnám ezt a könyvet." data-speak-lang="hu-HU">Elolvasnám ezt a könyvet.</button><br>
            <button class="speak-btn" data-speak-text="Megnéznénk ezt a filmet." data-speak-lang="hu-HU">Megnéznénk ezt a filmet.</button><br>
            <button class="speak-btn" data-speak-text="Ők kérnék a számlát." data-speak-lang="hu-HU">Ők kérnék a számlát.</button>
          </p>
        </details>

        <div class="note">Граница 23.3: здесь освоен выбор между двумя условными парадигмами. Нерегулярные формы глагола lenni рассматриваются на следующем слайде.</div>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 23 · 4/11 · НЕРЕГУЛЯРНЫЙ ГЛАГОЛ",
      title: "Lenni feltételes módban",
      subtitle: "Не только lenne: полная система форм глагола «быть»",
      note: 'Глагол lenni непереходный: он не имеет отдельной определённой парадигмы. Форму выбираем только по лицу и числу.',
      warn: 'Не переводи lenne автоматически как «я был бы». Lenne — форма третьего лица единственного числа; первое лицо — lennék.',
      task: 'Прочитай парадигму по лицам, затем определи функцию lenni в каждом примере: состояние, место, наличие, оценка или вежливая просьба.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Полная парадигма</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Пример</th><th>Смысл</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="lennék" data-speak-lang="hu-HU">lennék</button></td>
            <td><button class="speak-btn" data-speak-text="Tanár lennék." data-speak-lang="hu-HU">Tanár lennék.</button></td>
            <td>я был бы учителем</td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="lennél" data-speak-lang="hu-HU">lennél</button></td>
            <td><button class="speak-btn" data-speak-text="Te lennél a vezető." data-speak-lang="hu-HU">Te lennél a vezető.</button></td>
            <td>ты был бы руководителем</td>
          </tr>
          <tr>
            <td>ő / Ön</td>
            <td><button class="speak-btn" data-speak-text="lenne" data-speak-lang="hu-HU">lenne</button></td>
            <td><button class="speak-btn" data-speak-text="Ő lenne az új tanár." data-speak-lang="hu-HU">Ő lenne az új tanár.</button></td>
            <td>он или она были бы новым учителем</td>
          </tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="lennénk" data-speak-lang="hu-HU">lennénk</button></td>
            <td><button class="speak-btn" data-speak-text="Otthon lennénk." data-speak-lang="hu-HU">Otthon lennénk.</button></td>
            <td>мы были бы дома</td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="lennétek" data-speak-lang="hu-HU">lennétek</button></td>
            <td><button class="speak-btn" data-speak-text="Ti lennétek az elsők." data-speak-lang="hu-HU">Ti lennétek az elsők.</button></td>
            <td>вы были бы первыми</td>
          </tr>
          <tr>
            <td>ők / Önök</td>
            <td><button class="speak-btn" data-speak-text="lennének" data-speak-lang="hu-HU">lennének</button></td>
            <td><button class="speak-btn" data-speak-text="Ők lennének a vendégek." data-speak-lang="hu-HU">Ők lennének a vendégek.</button></td>
            <td>они были бы гостями</td>
          </tr>
        </table>

        <div class="note">
          Формы
          <button class="speak-btn" data-speak-text="lenne" data-speak-lang="hu-HU">lenne</button>
          и
          <button class="speak-btn" data-speak-text="lennének" data-speak-lang="hu-HU">lennének</button>
          могут относиться к третьему лицу или к формальному обращению.
          Конкретное значение показывает контекст.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пять частых функций</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Что выражает lenni</th></tr>
          <tr>
            <td>состояние или качество</td>
            <td><button class="speak-btn" data-speak-text="Boldog lennék." data-speak-lang="hu-HU">Boldog lennék.</button></td>
            <td>каким был бы говорящий</td>
          </tr>
          <tr>
            <td>местонахождение</td>
            <td><button class="speak-btn" data-speak-text="Most otthon lennénk." data-speak-lang="hu-HU">Most otthon lennénk.</button></td>
            <td>где находилась бы группа</td>
          </tr>
          <tr>
            <td>наличие или обладание</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet olvasnék." data-speak-lang="hu-HU">Ha lenne időm, többet olvasnék.</button></td>
            <td>у меня было бы время</td>
          </tr>
          <tr>
            <td>оценка или предложение</td>
            <td><button class="speak-btn" data-speak-text="Jó lenne találkozni." data-speak-lang="hu-HU">Jó lenne találkozni.</button></td>
            <td>было бы хорошо встретиться</td>
          </tr>
          <tr>
            <td>вежливая формула</td>
            <td><button class="speak-btn" data-speak-text="Lennél szíves segíteni?" data-speak-lang="hu-HU">Lennél szíves segíteni?</button></td>
            <td>неформальная вежливая просьба</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Наличие: кто обладает предметом или возможностью</h4>
        <table class="conj">
          <tr><th>Обладатель</th><th>Пример</th></tr>
          <tr>
            <td>у меня</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, pihennék." data-speak-lang="hu-HU">Ha lenne időm, pihennék.</button></td>
          </tr>
          <tr>
            <td>у тебя</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időd, mit csinálnál?" data-speak-lang="hu-HU">Ha lenne időd, mit csinálnál?</button></td>
          </tr>
          <tr>
            <td>у него или у неё</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne ideje, eljönne." data-speak-lang="hu-HU">Ha lenne ideje, eljönne.</button></td>
          </tr>
          <tr>
            <td>у нас</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne pénzünk, utaznánk." data-speak-lang="hu-HU">Ha lenne pénzünk, utaznánk.</button></td>
          </tr>
        </table>

        <div class="warn">
          В конструкциях
          <button class="speak-btn" data-speak-text="lenne időm" data-speak-lang="hu-HU">lenne időm</button>
          и
          <button class="speak-btn" data-speak-text="lenne pénzünk" data-speak-lang="hu-HU">lenne pénzünk</button>
          лицо обладателя выражено окончанием существительного, а глагол остаётся в третьем лице.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Неформальная и формальная просьба</h4>
        <table class="conj">
          <tr><th>Адресат</th><th>Формула</th><th>Более нейтральная альтернатива</th></tr>
          <tr>
            <td>один знакомый человек</td>
            <td><button class="speak-btn" data-speak-text="Lennél szíves segíteni nekem?" data-speak-lang="hu-HU">Lennél szíves segíteni nekem?</button></td>
            <td><button class="speak-btn" data-speak-text="Tudnál segíteni nekem?" data-speak-lang="hu-HU">Tudnál segíteni nekem?</button></td>
          </tr>
          <tr>
            <td>один формальный собеседник</td>
            <td><button class="speak-btn" data-speak-text="Lenne szíves segíteni nekem?" data-speak-lang="hu-HU">Lenne szíves segíteni nekem?</button></td>
            <td><button class="speak-btn" data-speak-text="Tudna segíteni nekem?" data-speak-lang="hu-HU">Tudna segíteni nekem?</button></td>
          </tr>
        </table>
        <div class="note">Формулы со значением «не были бы вы любезны» корректны, но в обычной речи часто можно выбрать более короткую просьбу с глаголом «мочь».</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Én lenne tanár.</td>
            <td><button class="speak-btn" data-speak-text="Én tanár lennék." data-speak-lang="hu-HU">Én tanár lennék.</button></td>
            <td>нужно первое лицо</td>
          </tr>
          <tr>
            <td>Mi lenne otthon.</td>
            <td><button class="speak-btn" data-speak-text="Mi otthon lennénk." data-speak-lang="hu-HU">Mi otthon lennénk.</button></td>
            <td>нужно первое лицо множественного числа</td>
          </tr>
          <tr>
            <td>Ha lennék időm.</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm." data-speak-lang="hu-HU">Ha lenne időm.</button></td>
            <td>в конструкции наличия глагол стоит в третьем лице</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Скажи: «Я был бы дома».</li>
          <li>Скажи: «Было бы хорошо встретиться».</li>
          <li>Спроси друга: «Если бы у тебя было время, что бы ты делал?»</li>
          <li>Вежливо попроси незнакомого человека помочь.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Otthon lennék." data-speak-lang="hu-HU">Otthon lennék.</button><br>
            <button class="speak-btn" data-speak-text="Jó lenne találkozni." data-speak-lang="hu-HU">Jó lenne találkozni.</button><br>
            <button class="speak-btn" data-speak-text="Ha lenne időd, mit csinálnál?" data-speak-lang="hu-HU">Ha lenne időd, mit csinálnál?</button><br>
            <button class="speak-btn" data-speak-text="Tudna segíteni nekem?" data-speak-lang="hu-HU">Tudna segíteni nekem?</button>
          </p>
        </details>

        <div class="note">Граница 23.4: здесь изучены формы lenni и их основные функции. Прошедшие условные конструкции с другой вспомогательной формой пока не вводятся.</div>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 23 · 5/11 · УСЛОВНЫЕ ПРЕДЛОЖЕНИЯ",
      title: "Feltételes mondatok",
      subtitle: "Реальное условие и воображаемая ситуация — не одно и то же",
      note: 'Союз ha сам по себе не требует условного наклонения. Формы зависят от того, считает ли говорящий условие реальным, открытым или воображаемым.',
      warn: 'Правило «условное наклонение в обеих частях» применяй к базовой гипотетической модели о настоящем или будущем, а не ко всем предложениям с ha.',
      task: 'Для каждой пары определи тип условия, формы глаголов и степень реальности ситуации. Затем преобразуй реальные условия в гипотетические.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Два базовых типа</h4>
        <table class="conj">
          <tr><th>Тип условия</th><th>Пример</th><th>Как говорящий представляет ситуацию</th></tr>
          <tr>
            <td>реальное или открытое</td>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm, elmegyek moziba." data-speak-lang="hu-HU">Ha lesz időm, elmegyek moziba.</button></td>
            <td>время действительно может появиться</td>
          </tr>
          <tr>
            <td>гипотетическое</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, moziba mennék." data-speak-lang="hu-HU">Ha lenne időm, moziba mennék.</button></td>
            <td>говорящий воображает другую ситуацию</td>
          </tr>
        </table>

        <div class="note">
          В открытом условии используются формы изъявительного наклонения.
          В базовой гипотетической модели о настоящем или будущем условная форма обычно появляется и в условии, и в результате.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Сравни смысловые пары</h4>
        <table class="conj">
          <tr><th>Реальное или возможное</th><th>Воображаемое или менее реальное</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha van időm, olvasok." data-speak-lang="hu-HU">Ha van időm, olvasok.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet olvasnék." data-speak-lang="hu-HU">Ha lenne időm, többet olvasnék.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha holnap jó idő lesz, kirándulni megyünk." data-speak-lang="hu-HU">Ha holnap jó idő lesz, kirándulni megyünk.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha holnap jó idő lenne, kirándulni mennénk." data-speak-lang="hu-HU">Ha holnap jó idő lenne, kirándulni mennénk.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha sokat tanulsz, megérted a nyelvtant." data-speak-lang="hu-HU">Ha sokat tanulsz, megérted a nyelvtant.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha többet tanulnál, jobban értenéd a nyelvtant." data-speak-lang="hu-HU">Ha többet tanulnál, jobban értenéd a nyelvtant.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Не каждое предложение с ha имеет две условные формы</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Почему не две условные формы</th></tr>
          <tr>
            <td>реальное будущее условие</td>
            <td><button class="speak-btn" data-speak-text="Ha megérkezel, felhívlak." data-speak-lang="hu-HU">Ha megérkezel, felhívlak.</button></td>
            <td>говорящий ожидает возможное событие</td>
          </tr>
          <tr>
            <td>инструкция после условия</td>
            <td><button class="speak-btn" data-speak-text="Ha megérkezel, hívj fel!" data-speak-lang="hu-HU">Ha megérkezel, hívj fel!</button></td>
            <td>в результате стоит повелительная форма</td>
          </tr>
          <tr>
            <td>общее повторяющееся условие</td>
            <td><button class="speak-btn" data-speak-text="Ha esik, otthon maradunk." data-speak-lang="hu-HU">Ha esik, otthon maradunk.</button></td>
            <td>описывается обычная реакция</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Порядок частей</h4>
        <p><button class="speak-btn" data-speak-text="Ha lenne időm, moziba mennék." data-speak-lang="hu-HU">Ha lenne időm, moziba mennék.</button></p>
        <p><button class="speak-btn" data-speak-text="Moziba mennék, ha lenne időm." data-speak-lang="hu-HU">Moziba mennék, ha lenne időm.</button></p>
        <div class="note">Условие может стоять первым или вторым. Между частями ставится запятая.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Слово akkor</h4>
        <p><button class="speak-btn" data-speak-text="Ha lenne időm, akkor moziba mennék." data-speak-lang="hu-HU">Ha lenne időm, akkor moziba mennék.</button></p>
        <div class="note">Слово akkor подчёркивает результат, но в нейтральной фразе часто может быть опущено.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Отрицательное условие</h4>
        <p><button class="speak-btn" data-speak-text="Ha nem esne az eső, sétálnánk." data-speak-lang="hu-HU">Ha nem esne az eső, sétálnánk.</button></p>
        <p><button class="speak-btn" data-speak-text="Ha nem lenne ilyen drága, megvenném." data-speak-lang="hu-HU">Ha nem lenne ilyen drága, megvenném.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как анализировать</h4>
        <ol class="tasklist">
          <li>Найди союз ha и раздели предложение на условие и результат.</li>
          <li>Реши, условие реальное или воображаемое.</li>
          <li>Определи исполнителя в каждой части.</li>
          <li>Проверь прямой объект и нужное спряжение отдельно в каждой части.</li>
          <li>Проверь запятую и при необходимости слово akkor.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка в гипотетическом значении</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Ha lenne időm, moziba megyek.</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, moziba mennék." data-speak-lang="hu-HU">Ha lenne időm, moziba mennék.</button></td>
            <td>воображаемый результат тоже условный</td>
          </tr>
          <tr>
            <td>Ha több pénzem van, többet utaznék.</td>
            <td><button class="speak-btn" data-speak-text="Ha több pénzem lenne, többet utaznék." data-speak-lang="hu-HU">Ha több pénzem lenne, többet utaznék.</button></td>
            <td>весь пример описывает нереальную ситуацию</td>
          </tr>
          <tr>
            <td>Ha megérkeznél, hívj fel, когда прибытие реально ожидается.</td>
            <td><button class="speak-btn" data-speak-text="Ha megérkezel, hívj fel!" data-speak-lang="hu-HU">Ha megérkezel, hívj fel!</button></td>
            <td>для ожидаемого условия нужна изъявительная форма</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Скажи реальное условие: «Если завтра будет хорошая погода, мы пойдём гулять».</li>
          <li>Сделай ту же ситуацию гипотетической.</li>
          <li>Спроси: «Что бы ты делал, если бы у тебя был свободный день?»</li>
          <li>Поставь условную часть после результата.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Ha holnap jó idő lesz, sétálni megyünk." data-speak-lang="hu-HU">Ha holnap jó idő lesz, sétálni megyünk.</button><br>
            <button class="speak-btn" data-speak-text="Ha holnap jó idő lenne, sétálni mennénk." data-speak-lang="hu-HU">Ha holnap jó idő lenne, sétálni mennénk.</button><br>
            <button class="speak-btn" data-speak-text="Mit csinálnál, ha lenne egy szabad napod?" data-speak-lang="hu-HU">Mit csinálnál, ha lenne egy szabad napod?</button><br>
            <button class="speak-btn" data-speak-text="Többet utaznék, ha több pénzem lenne." data-speak-lang="hu-HU">Többet utaznék, ha több pénzem lenne.</button>
          </p>
        </details>

        <div class="task">
          Напиши четыре пары. В каждой паре первое предложение описывает реальное или открытое условие,
          а второе превращает ту же ситуацию в гипотетическую.
        </div>

        <div class="note">Граница 23.5: здесь изучаются реальные и гипотетические условия о настоящем и будущем. Условия о прошлом будут разбираться отдельно позднее.</div>
      `,
    },
    {
      id: 6,
      eyebrow: "УРОК 23 · 6/11 · ВЕЖЛИВЫЕ ПРОСЬБЫ",
      title: "Udvarias kérések feltételes móddal",
      subtitle: "Косвенная просьба мягче, но регистр и ситуация всё равно важны",
      note: 'Условная форма уменьшает прямоту просьбы. Вежливость создают вместе форма обращения, интонация, контекст и слова смягчения.',
      warn: 'Не считай любую условную форму автоматически «предельно вежливой». Неформальная форма остаётся неформальной, а чрезмерно сложная просьба может звучать неестественно.',
      task: 'Для каждой модели назови адресата, действие, объект и степень прямоты. Затем преобразуй прямые просьбы в уместные условные.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Прямая и косвенная просьба</h4>
        <table class="conj">
          <tr><th>Адресат</th><th>Прямая, но вежливая</th><th>Более косвенная</th></tr>
          <tr>
            <td>один знакомый человек</td>
            <td><button class="speak-btn" data-speak-text="Segíts, kérlek!" data-speak-lang="hu-HU">Segíts, kérlek!</button></td>
            <td><button class="speak-btn" data-speak-text="Tudnál segíteni?" data-speak-lang="hu-HU">Tudnál segíteni?</button></td>
          </tr>
          <tr>
            <td>один формальный собеседник</td>
            <td><button class="speak-btn" data-speak-text="Segítsen, kérem!" data-speak-lang="hu-HU">Segítsen, kérem!</button></td>
            <td><button class="speak-btn" data-speak-text="Tudna segíteni?" data-speak-lang="hu-HU">Tudna segíteni?</button></td>
          </tr>
          <tr>
            <td>несколько знакомых людей</td>
            <td><button class="speak-btn" data-speak-text="Segítsetek, kérlek!" data-speak-lang="hu-HU">Segítsetek, kérlek!</button></td>
            <td><button class="speak-btn" data-speak-text="Tudnátok segíteni?" data-speak-lang="hu-HU">Tudnátok segíteni?</button></td>
          </tr>
          <tr>
            <td>несколько формальных собеседников</td>
            <td><button class="speak-btn" data-speak-text="Segítsenek, kérem!" data-speak-lang="hu-HU">Segítsenek, kérem!</button></td>
            <td><button class="speak-btn" data-speak-text="Tudnának segíteni?" data-speak-lang="hu-HU">Tudnának segíteni?</button></td>
          </tr>
        </table>

        <div class="note">
          Условная форма глагола со значением «мочь» спрашивает о возможности собеседника выполнить действие.
          Она не меняет неформальное обращение на формальное: адресат по-прежнему выражен окончанием.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Попросить повторить или сообщить информацию</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Неформально</th><th>Формально</th></tr>
          <tr>
            <td>повторить сказанное</td>
            <td><button class="speak-btn" data-speak-text="Megismételnéd, kérlek?" data-speak-lang="hu-HU">Megismételnéd, kérlek?</button></td>
            <td><button class="speak-btn" data-speak-text="Megismételné, kérem?" data-speak-lang="hu-HU">Megismételné, kérem?</button></td>
          </tr>
          <tr>
            <td>сказать, где находится место</td>
            <td><button class="speak-btn" data-speak-text="Meg tudnád mondani, hol van a recepció?" data-speak-lang="hu-HU">Meg tudnád mondani, hol van a recepció?</button></td>
            <td><button class="speak-btn" data-speak-text="Meg tudná mondani, hol van a recepció?" data-speak-lang="hu-HU">Meg tudná mondani, hol van a recepció?</button></td>
          </tr>
          <tr>
            <td>показать конкретный документ</td>
            <td><button class="speak-btn" data-speak-text="Megmutatnád ezt a dokumentumot?" data-speak-lang="hu-HU">Megmutatnád ezt a dokumentumot?</button></td>
            <td><button class="speak-btn" data-speak-text="Megmutatná ezt a dokumentumot?" data-speak-lang="hu-HU">Megmutatná ezt a dokumentumot?</button></td>
          </tr>
        </table>

        <div class="note">
          В примерах с конкретным содержанием или предметом используются определённые формы:
          повторить это, сообщить известную информацию, показать этот документ.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Заказ и просьба о разрешении — разные функции</h4>
        <table class="conj">
          <tr><th>Реплика</th><th>Естественная функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
            <td>нейтральный вежливый заказ: «Я хотел бы кофе»</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérhetnék egy kávét?" data-speak-lang="hu-HU">Kérhetnék egy kávét?</button></td>
            <td>осторожный вопрос о возможности: «Можно мне попросить кофе?»</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kaphatnék egy pohár vizet?" data-speak-lang="hu-HU">Kaphatnék egy pohár vizet?</button></td>
            <td>можно ли получить стакан воды</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A számlát kérném." data-speak-lang="hu-HU">A számlát kérném.</button></td>
            <td>вежливая просьба принести конкретный счёт</td>
          </tr>
        </table>

        <div class="warn">
          Более длинная конструкция не всегда лучше.
          Для обычного заказа
          <button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button>
          обычно достаточно естественно и вежливо.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Вежливо выразить собственное намерение</h4>
        <table class="conj">
          <tr><th>Тип объекта</th><th>Пример</th><th>Почему эта форма</th></tr>
          <tr>
            <td>неопределённый объект</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék időpontot kérni." data-speak-lang="hu-HU">Szeretnék időpontot kérni.</button></td>
            <td>говорящий хочет получить какой-нибудь подходящий приём</td>
          </tr>
          <tr>
            <td>конкретный объект</td>
            <td><button class="speak-btn" data-speak-text="Szeretném megváltoztatni a foglalásomat." data-speak-lang="hu-HU">Szeretném megváltoztatni a foglalásomat.</button></td>
            <td>речь идёт о конкретном бронировании говорящего</td>
          </tr>
          <tr>
            <td>конкретная информация</td>
            <td><button class="speak-btn" data-speak-text="Szeretném megtudni az árat." data-speak-lang="hu-HU">Szeretném megtudni az árat.</button></td>
            <td>нужно узнать конкретную цену</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-диалоги</h4>
        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Elnézést, meg tudná mondani, hol van a pénztár?" data-speak-lang="hu-HU">Elnézést, meg tudná mondani, hol van a pénztár?</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Persze. A bejárat mellett van." data-speak-lang="hu-HU">Persze. A bejárat mellett van.</button></p>
        </div>
        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot! Szeretném megváltoztatni a foglalásomat." data-speak-lang="hu-HU">Jó napot! Szeretném megváltoztatni a foglalásomat.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Természetesen. Megmondaná a foglalási számot?" data-speak-lang="hu-HU">Természetesen. Megmondaná a foglalási számot?</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Tudnál segíteni?, если обращаемся формально.</td>
            <td><button class="speak-btn" data-speak-text="Tudna segíteni?" data-speak-lang="hu-HU">Tudna segíteni?</button></td>
            <td>нужно формальное лицо</td>
          </tr>
          <tr>
            <td>Megismételnél, kérem?</td>
            <td><button class="speak-btn" data-speak-text="Megismételné, kérem?" data-speak-lang="hu-HU">Megismételné, kérem?</button></td>
            <td>повторяется конкретное сказанное; нужна определённая форма</td>
          </tr>
          <tr>
            <td>Szeretnék megváltoztatni a foglalásomat.</td>
            <td><button class="speak-btn" data-speak-text="Szeretném megváltoztatni a foglalásomat." data-speak-lang="hu-HU">Szeretném megváltoztatni a foglalásomat.</button></td>
            <td>конкретное бронирование требует определённой формы</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Неформально попроси друга помочь.</li>
          <li>Формально попроси повторить сказанное.</li>
          <li>Вежливо закажи кофе без излишне сложной конструкции.</li>
          <li>Сообщи, что хочешь изменить своё бронирование.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Tudnál segíteni?" data-speak-lang="hu-HU">Tudnál segíteni?</button><br>
            <button class="speak-btn" data-speak-text="Megismételné, kérem?" data-speak-lang="hu-HU">Megismételné, kérem?</button><br>
            <button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button><br>
            <button class="speak-btn" data-speak-text="Szeretném megváltoztatni a foglalásomat." data-speak-lang="hu-HU">Szeretném megváltoztatni a foglalásomat.</button>
          </p>
        </details>

        <div class="note">Граница 23.6: здесь отрабатываются условные просьбы и намерения. Выбор между прямой и косвенной формой зависит от ситуации, а не от шкалы «плохая — идеальная вежливость».</div>
      `,
    },
    {
      id: 7,
      eyebrow: "УРОК 23 · 7/11 · УПРАВЛЯЕМАЯ ПРАКТИКА",
      title: "Álmok, választások és tanácsok",
      subtitle: "Гипотеза, желание, предпочтение и совет в связной речи",
      note: 'Не собирай ответ из отдельных фрагментов. Сначала выбери функцию, затем построй полное предложение с понятным условием или причиной.',
      warn: 'Конструкция kellene + личный инфинитив означает «нужно было бы / пришлось бы». На этом слайде используем её как готовую модель и не переносим обычные личные окончания на kellene.',
      task: 'Ответь на вопросы полными предложениями, сравни несколько вариантов и обоснуй выбор.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Мечта и воображаемый результат</h4>
        <table class="conj">
          <tr><th>Условие</th><th>Результат</th><th>Полная модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha gazdag lennék" data-speak-lang="hu-HU">Ha gazdag lennék</button></td>
            <td><button class="speak-btn" data-speak-text="sokat utaznék." data-speak-lang="hu-HU">sokat utaznék.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha gazdag lennék, sokat utaznék." data-speak-lang="hu-HU">Ha gazdag lennék, sokat utaznék.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha több szabadidőm lenne" data-speak-lang="hu-HU">Ha több szabadidőm lenne</button></td>
            <td><button class="speak-btn" data-speak-text="gyakrabban sportolnék." data-speak-lang="hu-HU">gyakrabban sportolnék.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha több szabadidőm lenne, gyakrabban sportolnék." data-speak-lang="hu-HU">Ha több szabadidőm lenne, gyakrabban sportolnék.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha lehetne" data-speak-lang="hu-HU">Ha lehetne</button></td>
            <td><button class="speak-btn" data-speak-text="egy évig külföldön élnék." data-speak-lang="hu-HU">egy évig külföldön élnék.</button></td>
            <td><button class="speak-btn" data-speak-text="Ha lehetne, egy évig külföldön élnék." data-speak-lang="hu-HU">Ha lehetne, egy évig külföldön élnék.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Что бы ты делал без необходимости работать</h4>
        <p><button class="speak-btn" data-speak-text="Mit csinálnál, ha nem kellene dolgoznod?" data-speak-lang="hu-HU">Mit csinálnál, ha nem kellene dolgoznod?</button></p>
        <table class="conj">
          <tr><th>Кто не должен был бы работать</th><th>Готовая модель</th></tr>
          <tr>
            <td>я</td>
            <td><button class="speak-btn" data-speak-text="Ha nem kellene dolgoznom, többet pihennék." data-speak-lang="hu-HU">Ha nem kellene dolgoznom, többet pihennék.</button></td>
          </tr>
          <tr>
            <td>ты</td>
            <td><button class="speak-btn" data-speak-text="Ha nem kellene dolgoznod, mit csinálnál?" data-speak-lang="hu-HU">Ha nem kellene dolgoznod, mit csinálnál?</button></td>
          </tr>
          <tr>
            <td>мы</td>
            <td><button class="speak-btn" data-speak-text="Ha nem kellene dolgoznunk, elutaznánk." data-speak-lang="hu-HU">Ha nem kellene dolgoznunk, elutaznánk.</button></td>
          </tr>
        </table>

        <div class="note">
          В этой модели лицо выражается личным инфинитивом:
          <b>dolgoznom, dolgoznod, dolgoznunk</b>.
          Форма <b>kellene</b> не меняется по этим лицам.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Желание: неопределённый и конкретный объект</h4>
        <table class="conj">
          <tr><th>Неопределённый объект или действие</th><th>Конкретный объект</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szeretnék egy új nyelvet tanulni." data-speak-lang="hu-HU">Szeretnék egy új nyelvet tanulni.</button></td>
            <td><button class="speak-btn" data-speak-text="Szeretném megtanulni ezt a nyelvet." data-speak-lang="hu-HU">Szeretném megtanulni ezt a nyelvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérnék egy másik időpontot." data-speak-lang="hu-HU">Kérnék egy másik időpontot.</button></td>
            <td><button class="speak-btn" data-speak-text="Kérném a korábbi időpontot." data-speak-lang="hu-HU">Kérném a korábbi időpontot.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Предпочтение и совет</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Смысл</th></tr>
          <tr>
            <td>личное предпочтение</td>
            <td><button class="speak-btn" data-speak-text="Én inkább otthon maradnék." data-speak-lang="hu-HU">Én inkább otthon maradnék.</button></td>
            <td>я предпочёл бы остаться дома</td>
          </tr>
          <tr>
            <td>мягкий совет</td>
            <td><button class="speak-btn" data-speak-text="A helyedben többet pihennék." data-speak-lang="hu-HU">A helyedben többet pihennék.</button></td>
            <td>на твоём месте я бы больше отдыхал</td>
          </tr>
          <tr>
            <td>сравнение двух вариантов</td>
            <td><button class="speak-btn" data-speak-text="Én inkább vonattal mennék, mert kényelmesebb." data-speak-lang="hu-HU">Én inkább vonattal mennék, mert kényelmesebb.</button></td>
            <td>выбор и краткая причина</td>
          </tr>
        </table>

        <div class="warn">
          После выражения
          <button class="speak-btn" data-speak-text="A helyedben" data-speak-lang="hu-HU">A helyedben</button>
          обычно говорится, что сделал бы сам говорящий:
          <button class="speak-btn" data-speak-text="A helyedben orvoshoz mennék." data-speak-lang="hu-HU">A helyedben orvoshoz mennék.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Вопросы для интервью</h4>
        <table class="conj">
          <tr><th>Тема</th><th>Вопрос</th></tr>
          <tr>
            <td>свободный месяц</td>
            <td><button class="speak-btn" data-speak-text="Mit csinálnál, ha lenne egy szabad hónapod?" data-speak-lang="hu-HU">Mit csinálnál, ha lenne egy szabad hónapod?</button></td>
          </tr>
          <tr>
            <td>деньги</td>
            <td><button class="speak-btn" data-speak-text="Mire költenél, ha több pénzed lenne?" data-speak-lang="hu-HU">Mire költenél, ha több pénzed lenne?</button></td>
          </tr>
          <tr>
            <td>место жительства</td>
            <td><button class="speak-btn" data-speak-text="Hol élnél, ha bárhol élhetnél?" data-speak-lang="hu-HU">Hol élnél, ha bárhol élhetnél?</button></td>
          </tr>
          <tr>
            <td>новый навык</td>
            <td><button class="speak-btn" data-speak-text="Mit tanulnál meg, ha lenne rá időd?" data-speak-lang="hu-HU">Mit tanulnál meg, ha lenne rá időd?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Полезные формальные реплики</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Полная реплика</th></tr>
          <tr>
            <td>попросить помощь</td>
            <td><button class="speak-btn" data-speak-text="Tudna segíteni nekem?" data-speak-lang="hu-HU">Tudna segíteni nekem?</button></td>
          </tr>
          <tr>
            <td>спросить информацию</td>
            <td><button class="speak-btn" data-speak-text="Meg tudná mondani, mikor indul a vonat?" data-speak-lang="hu-HU">Meg tudná mondani, mikor indul a vonat?</button></td>
          </tr>
          <tr>
            <td>попросить повторить</td>
            <td><button class="speak-btn" data-speak-text="Megismételné, kérem?" data-speak-lang="hu-HU">Megismételné, kérem?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Ha gazdag lennék, sokat utazok.</td>
            <td><button class="speak-btn" data-speak-text="Ha gazdag lennék, sokat utaznék." data-speak-lang="hu-HU">Ha gazdag lennék, sokat utaznék.</button></td>
            <td>гипотетический результат тоже условный</td>
          </tr>
          <tr>
            <td>Ha nem kellene dolgozni, többet pihennék, когда речь обо мне.</td>
            <td><button class="speak-btn" data-speak-text="Ha nem kellene dolgoznom, többet pihennék." data-speak-lang="hu-HU">Ha nem kellene dolgoznom, többet pihennék.</button></td>
            <td>нужно обозначить исполнителя личным инфинитивом</td>
          </tr>
          <tr>
            <td>A helyedben többet pihennél.</td>
            <td><button class="speak-btn" data-speak-text="A helyedben többet pihennék." data-speak-lang="hu-HU">A helyedben többet pihennék.</button></td>
            <td>совет формулируется от лица говорящего</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">RolePlay: интервью о мечтах</h4>
        <div class="task">
          Задай партнёру четыре вопроса из таблицы. Каждый ответ должен содержать минимум два связанных предложения:
          условие или желание, результат, предпочтение либо причина.
          После ответа дай один мягкий совет с моделью «на твоём месте».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Домашняя работа</h4>
        <div class="task">
          Напиши восемь предложений на тему «Если бы у меня был свободный месяц».
          Используй два условия, одно желание с неопределённым объектом, одно желание с конкретным объектом,
          одно предпочтение, один совет, одну конструкцию с отсутствием необходимости и одну вежливую просьбу.
        </div>

        <div class="note">
          Самопроверка: все реплики являются полными предложениями; лицо понятно; два спряжения выбраны по объекту;
          условие и результат согласованы; совет сформулирован от лица говорящего.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: "УРОК 23 · 8/11 · ДИАЛОГ",
      title: "Hétvégi terv és kompromisszum",
      subtitle: "Предложить поездку, учесть риск и договориться о реальном плане",
      note: 'Оба собеседника общаются неформально. Условные формы показывают желание, возможное препятствие, альтернативу и мягкую просьбу.',
      warn: 'Диалог не остаётся полностью гипотетическим: после обсуждения собеседники переходят к реальным действиям в настоящем и будущем.',
      task: 'Прослушай диалог по ролям, восстанови план, классифицируй условные формы и затем разыграй собственный вариант.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Ситуация: поездка на Балатон</h4>
        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó lenne elmenni a Balatonra a hétvégén." data-speak-lang="hu-HU">Jó lenne elmenni a Balatonra a hétvégén.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Én is szívesen mennék, de mi lenne, ha esne az eső?" data-speak-lang="hu-HU">Én is szívesen mennék, de mi lenne, ha esne az eső?</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Ha jó idő lenne, fürödnénk és bicikliznénk." data-speak-lang="hu-HU">Ha jó idő lenne, fürödnénk és bicikliznénk.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Ha esne, nem tudnánk fürödni." data-speak-lang="hu-HU">Ha esne, nem tudnánk fürödni.</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Akkor mehetnénk múzeumba, vagy kereshetnénk egy fedett programot." data-speak-lang="hu-HU">Akkor mehetnénk múzeumba, vagy kereshetnénk egy fedett programot.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Én inkább csak két napra mennék, mert hétfőn korán dolgozom." data-speak-lang="hu-HU">Én inkább csak két napra mennék, mert hétfőn korán dolgozom.</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Rendben. Ha találnánk olcsó szállást, péntek este indulhatnánk." data-speak-lang="hu-HU">Rendben. Ha találnánk olcsó szállást, péntek este indulhatnánk.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Jó ötlet. Megnéznéd ma este a szállásokat?" data-speak-lang="hu-HU">Jó ötlet. Megnéznéd ma este a szállásokat?</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Persze. Küldök három lehetőséget, és választunk." data-speak-lang="hu-HU">Persze. Küldök három lehetőséget, és választunk.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Benne vagyok. Így nagyszerű lenne." data-speak-lang="hu-HU">Benne vagyok. Így nagyszerű lenne.</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как развивается решение</h4>
        <table class="conj">
          <tr><th>Этап</th><th>Реплика</th><th>Функция</th></tr>
          <tr>
            <td>идея</td>
            <td><button class="speak-btn" data-speak-text="Jó lenne elmenni a Balatonra." data-speak-lang="hu-HU">Jó lenne elmenni a Balatonra.</button></td>
            <td>мягкое предложение</td>
          </tr>
          <tr>
            <td>интерес</td>
            <td><button class="speak-btn" data-speak-text="Én is szívesen mennék." data-speak-lang="hu-HU">Én is szívesen mennék.</button></td>
            <td>желание участвовать</td>
          </tr>
          <tr>
            <td>риск</td>
            <td><button class="speak-btn" data-speak-text="Mi lenne, ha esne az eső?" data-speak-lang="hu-HU">Mi lenne, ha esne az eső?</button></td>
            <td>вопрос о гипотетической проблеме</td>
          </tr>
          <tr>
            <td>альтернатива</td>
            <td><button class="speak-btn" data-speak-text="Mehetnénk múzeumba." data-speak-lang="hu-HU">Mehetnénk múzeumba.</button></td>
            <td>возможный запасной план</td>
          </tr>
          <tr>
            <td>предпочтение</td>
            <td><button class="speak-btn" data-speak-text="Én inkább két napra mennék." data-speak-lang="hu-HU">Én inkább két napra mennék.</button></td>
            <td>личный выбор</td>
          </tr>
          <tr>
            <td>мягкая просьба</td>
            <td><button class="speak-btn" data-speak-text="Megnéznéd ma este a szállásokat?" data-speak-lang="hu-HU">Megnéznéd ma este a szállásokat?</button></td>
            <td>просьба проверить конкретные варианты жилья</td>
          </tr>
          <tr>
            <td>реальное обязательство</td>
            <td><button class="speak-btn" data-speak-text="Küldök három lehetőséget." data-speak-lang="hu-HU">Küldök három lehetőséget.</button></td>
            <td>говорящий принимает конкретное действие</td>
          </tr>
        </table>

        <div class="warn">
          Форма
          <button class="speak-btn" data-speak-text="megnéznéd" data-speak-lang="hu-HU">megnéznéd</button>
          определённая: речь идёт о конкретных вариантах жилья.
          Форма
          <button class="speak-btn" data-speak-text="kereshetnénk" data-speak-lang="hu-HU">kereshetnénk</button>
          неопределённая: предлагается поискать какую-нибудь подходящую программу.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Карта двух сценариев</h4>
        <table class="conj">
          <tr><th>Условие</th><th>План</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha jó idő lenne" data-speak-lang="hu-HU">Ha jó idő lenne</button></td>
            <td><button class="speak-btn" data-speak-text="fürödnénk és bicikliznénk." data-speak-lang="hu-HU">fürödnénk és bicikliznénk.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha esne az eső" data-speak-lang="hu-HU">Ha esne az eső</button></td>
            <td><button class="speak-btn" data-speak-text="múzeumba mehetnénk." data-speak-lang="hu-HU">múzeumba mehetnénk.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha találnánk olcsó szállást" data-speak-lang="hu-HU">Ha találnánk olcsó szállást</button></td>
            <td><button class="speak-btn" data-speak-text="péntek este indulhatnánk." data-speak-lang="hu-HU">péntek este indulhatnánk.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Проверка понимания</h4>
        <ol class="tasklist">
          <li>Куда хотят поехать собеседники?</li>
          <li>Какая возможная проблема обсуждается?</li>
          <li>Какой запасной вариант предложен?</li>
          <li>Почему один собеседник предпочитает поездку только на два дня?</li>
          <li>Какое условие связано с отправлением в пятницу?</li>
          <li>Какая реплика является реальным обещанием, а не гипотезой?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Найди и классифицируй формы</h4>
        <table class="conj">
          <tr><th>Категория</th><th>Найди в диалоге</th></tr>
          <tr><td>форма lenni</td><td>две оценки и один вопрос о возможной ситуации</td></tr>
          <tr><td>условие</td><td>погода и дешёвое жильё</td></tr>
          <tr><td>гипотетический результат</td><td>купание, велосипед, музей и отправление</td></tr>
          <tr><td>предпочтение</td><td>поездка на два дня</td></tr>
          <tr><td>условная просьба</td><td>проверить жильё</td></tr>
          <tr><td>изъявительное наклонение</td><td>реальное обещание отправить варианты</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">RolePlay: договоритесь о выходных</h4>
        <div class="task">
          Выберите поездку, концерт или семейную программу.
          В диалоге должно быть минимум восемь реплик:
          мягкое предложение, желание, возможная проблема, два варианта,
          предпочтение с причиной, условная просьба и одно реальное обещание.
        </div>

        <div class="note">
          Самопроверка: разговор заканчивается конкретным следующим шагом;
          не все глаголы необоснованно поставлены в условное наклонение;
          два собеседника действительно пришли к компромиссу.
        </div>
      `,
    },
    {
      id: 9,
      eyebrow: "УРОК 23 · 9/11 · ИТОГОВАЯ ПРАКТИКА",
      title: "Integrált önellenőrzés",
      subtitle: "Функция → лицо → объект → тип условия → уместная реплика",
      activities: L23_ACTIVITIES,
      optionalSpeaking: L23_OPTIONAL_SPEAKING,
      note: 'Каждый ответ должен включать объяснение: какую функцию выражает форма, кто выполняет действие и почему выбрано это спряжение.',
      warn: 'Грамматически возможная форма не всегда является самой естественной репликой. Проверяй не только окончание, но и речевую ситуацию.',
      task: 'Выполни шесть этапов, оцени себя по рубрике, затем переходи к встроенным интерактивным заданиям и устной практике.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Этап 1. Определи функцию</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet olvasnék." data-speak-lang="hu-HU">Ha lenne időm, többet olvasnék.</button></td>
            <td>гипотетическое условие и результат</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szeretnék többet utazni." data-speak-lang="hu-HU">Szeretnék többet utazni.</button></td>
            <td>желание</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A helyedben pihennék." data-speak-lang="hu-HU">A helyedben pihennék.</button></td>
            <td>мягкий совет</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Meg tudná mondani, hol van a recepció?" data-speak-lang="hu-HU">Meg tudná mondani, hol van a recepció?</button></td>
            <td>формальная косвенная просьба</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 2. Построй форму первого лица</h4>
        <table class="conj">
          <tr><th>Исходный глагол</th><th>Форма</th><th>Проверка</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td><button class="speak-btn" data-speak-text="tanulnék" data-speak-lang="hu-HU">tanulnék</button></td>
            <td>неопределённое первое лицо</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td>
            <td><button class="speak-btn" data-speak-text="dolgoznék" data-speak-lang="hu-HU">dolgoznék</button></td>
            <td>неопределённое первое лицо</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="utazik" data-speak-lang="hu-HU">utazik</button></td>
            <td><button class="speak-btn" data-speak-text="utaznék" data-speak-lang="hu-HU">utaznék</button></td>
            <td>неопределённое первое лицо</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lenni" data-speak-lang="hu-HU">lenni</button></td>
            <td><button class="speak-btn" data-speak-text="lennék" data-speak-lang="hu-HU">lennék</button></td>
            <td>нерегулярная форма</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elolvasni ezt a könyvet" data-speak-lang="hu-HU">elolvasni ezt a könyvet</button></td>
            <td><button class="speak-btn" data-speak-text="elolvasnám ezt a könyvet" data-speak-lang="hu-HU">elolvasnám ezt a könyvet</button></td>
            <td>конкретный объект требует определённой формы</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 3. Переведи и объясни выбор формы</h4>
        <ol class="tasklist">
          <li>Если бы у меня было время, я прочитал бы эту книгу.</li>
          <li>Было бы хорошо поехать в Будапешт.</li>
          <li>Я хотел бы изменить своё бронирование.</li>
          <li>Не могли бы вы повторить?</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Ha lenne időm, elolvasnám ezt a könyvet." data-speak-lang="hu-HU">Ha lenne időm, elolvasnám ezt a könyvet.</button><br>
            <button class="speak-btn" data-speak-text="Jó lenne Budapestre utazni." data-speak-lang="hu-HU">Jó lenne Budapestre utazni.</button><br>
            <button class="speak-btn" data-speak-text="Szeretném megváltoztatni a foglalásomat." data-speak-lang="hu-HU">Szeretném megváltoztatni a foglalásomat.</button><br>
            <button class="speak-btn" data-speak-text="Megismételné, kérem?" data-speak-lang="hu-HU">Megismételné, kérem?</button>
          </p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 4. Выбери естественную просьбу</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Уместная реплика</th><th>Оттенок</th></tr>
          <tr>
            <td>обычный заказ кофе</td>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
            <td>нейтрально и вежливо</td>
          </tr>
          <tr>
            <td>осторожно спросить, можно ли получить кофе</td>
            <td><button class="speak-btn" data-speak-text="Kaphatnék egy kávét?" data-speak-lang="hu-HU">Kaphatnék egy kávét?</button></td>
            <td>вопрос о возможности получить</td>
          </tr>
          <tr>
            <td>попросить конкретный счёт</td>
            <td><button class="speak-btn" data-speak-text="A számlát kérném." data-speak-lang="hu-HU">A számlát kérném.</button></td>
            <td>конкретный объект</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 5. Исправь ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Én dolgozna.</td>
            <td><button class="speak-btn" data-speak-text="Én dolgoznék." data-speak-lang="hu-HU">Én dolgoznék.</button></td>
            <td>первое лицо</td>
          </tr>
          <tr>
            <td>Ha lenne időm, elolvasnék ezt a könyvet.</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, elolvasnám ezt a könyvet." data-speak-lang="hu-HU">Ha lenne időm, elolvasnám ezt a könyvet.</button></td>
            <td>конкретная книга</td>
          </tr>
          <tr>
            <td>Ha több pénzem lenne, sokat utazok.</td>
            <td><button class="speak-btn" data-speak-text="Ha több pénzem lenne, sokat utaznék." data-speak-lang="hu-HU">Ha több pénzem lenne, sokat utaznék.</button></td>
            <td>гипотетический результат</td>
          </tr>
          <tr>
            <td>Tudnál segíteni?, если обращаемся формально.</td>
            <td><button class="speak-btn" data-speak-text="Tudna segíteni?" data-speak-lang="hu-HU">Tudna segíteni?</button></td>
            <td>нужно формальное лицо</td>
          </tr>
          <tr>
            <td>A helyedben többet pihennél.</td>
            <td><button class="speak-btn" data-speak-text="A helyedben többet pihennék." data-speak-lang="hu-HU">A helyedben többet pihennék.</button></td>
            <td>совет формулируется от лица говорящего</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 6. Итоговая ситуация</h4>
        <div class="task">
          Представь, что ты выиграл крупную сумму.
          Напиши шесть связанных предложений:
          условие, два гипотетических результата, одно желание,
          одно предпочтение с причиной и один совет другу.
          Используй минимум одну определённую форму с конкретным объектом.
        </div>

        <p><button class="speak-btn" data-speak-text="Ha nyernék a lottón, először kifizetném a tartozásaimat." data-speak-lang="hu-HU">Ha nyernék a lottón, először kifizetném a tartozásaimat.</button></p>
        <p><button class="speak-btn" data-speak-text="Utána vennék egy lakást, és többet utaznék." data-speak-lang="hu-HU">Utána vennék egy lakást, és többet utaznék.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Рубрика самопроверки</h4>
        <table class="conj">
          <tr><th>Критерий</th><th>Проверка</th></tr>
          <tr><td>функция</td><td>понятно, где условие, желание, просьба, совет или предпочтение</td></tr>
          <tr><td>лицо</td><td>окончание соответствует исполнителю</td></tr>
          <tr><td>объект</td><td>два спряжения выбраны осознанно</td></tr>
          <tr><td>согласование</td><td>гипотетическое условие и результат не смешаны с настоящим без причины</td></tr>
          <tr><td>уместность</td><td>просьба соответствует адресату и ситуации</td></tr>
          <tr><td>связность</td><td>предложения образуют один текст, а не отдельный список</td></tr>
        </table>

        <div class="note">
          После письменной самопроверки выполни встроенные задания и устную практику.
          Ошибку считай исправленной только тогда, когда можешь объяснить причину выбора формы.
        </div>
      `,
    },
    {
      id: 10,
      eyebrow: "УРОК 23 · 10/11 · МОСТ К УРОКУ 24",
      title: "Az igealaktól az összetett mondatig",
      subtitle: "От формы глагола к логике связного высказывания",
      note: 'После уроков 22–23 ты умеешь распознавать и строить основные формы побуждения и условности в изученных ситуациях. Следующий шаг — правильно соединять законченные мысли.',
      warn: 'Союз не выбирает наклонение автоматически. Сначала определяется смысл каждой части, затем логическая связь между ними.',
      task: 'Сравни три наклонения, затем определи отношение между частями каждого сложного предложения: добавление, противопоставление, причина, результат, содержание, уступка или условие.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Один замысел — разные формы глагола</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Что выражает форма</th></tr>
          <tr>
            <td>сообщение о реальности</td>
            <td><button class="speak-btn" data-speak-text="Elmegyek a Balatonra." data-speak-lang="hu-HU">Elmegyek a Balatonra.</button></td>
            <td>говорящий сообщает о действии</td>
          </tr>
          <tr>
            <td>побуждение</td>
            <td><button class="speak-btn" data-speak-text="Menj el a Balatonra!" data-speak-lang="hu-HU">Menj el a Balatonra!</button></td>
            <td>совет или инструкция собеседнику</td>
          </tr>
          <tr>
            <td>воображаемая возможность</td>
            <td><button class="speak-btn" data-speak-text="Elmennék a Balatonra, ha lenne időm." data-speak-lang="hu-HU">Elmennék a Balatonra, ha lenne időm.</button></td>
            <td>действие зависело бы от условия</td>
          </tr>
        </table>

        <div class="note">
          Наклонение показывает отношение говорящего к действию.
          Союзы следующего урока покажут отношение одной мысли к другой.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Какие отношения соединяют мысли</h4>
        <table class="conj">
          <tr><th>Логическое отношение</th><th>Связующее слово</th><th>Мини-пример</th></tr>
          <tr>
            <td>добавление</td>
            <td><button class="speak-btn" data-speak-text="és" data-speak-lang="hu-HU">és</button></td>
            <td><button class="speak-btn" data-speak-text="Dolgozom, és magyarul tanulok." data-speak-lang="hu-HU">Dolgozom, és magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>противопоставление</td>
            <td><button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button></td>
            <td><button class="speak-btn" data-speak-text="Elmennék, de nincs időm." data-speak-lang="hu-HU">Elmennék, de nincs időm.</button></td>
          </tr>
          <tr>
            <td>выбор</td>
            <td><button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU">vagy</button></td>
            <td><button class="speak-btn" data-speak-text="Vonattal megyünk, vagy autóval utazunk." data-speak-lang="hu-HU">Vonattal megyünk, vagy autóval utazunk.</button></td>
          </tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button></td>
            <td><button class="speak-btn" data-speak-text="Nem megyek, mert dolgozom." data-speak-lang="hu-HU">Nem megyek, mert dolgozom.</button></td>
          </tr>
          <tr>
            <td>результат</td>
            <td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button></td>
            <td><button class="speak-btn" data-speak-text="Dolgozom, ezért nem megyek." data-speak-lang="hu-HU">Dolgozom, ezért nem megyek.</button></td>
          </tr>
          <tr>
            <td>содержание мысли или речи</td>
            <td><button class="speak-btn" data-speak-text="hogy" data-speak-lang="hu-HU">hogy</button></td>
            <td><button class="speak-btn" data-speak-text="Azt mondta, hogy késik." data-speak-lang="hu-HU">Azt mondta, hogy késik.</button></td>
          </tr>
          <tr>
            <td>уступка</td>
            <td><button class="speak-btn" data-speak-text="bár" data-speak-lang="hu-HU">bár</button></td>
            <td><button class="speak-btn" data-speak-text="Bár fáradt vagyok, tanulok." data-speak-lang="hu-HU">Bár fáradt vagyok, tanulok.</button></td>
          </tr>
          <tr>
            <td>условие</td>
            <td><button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button></td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, elmennék." data-speak-lang="hu-HU">Ha lenne időm, elmennék.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Причина и результат: одна ситуация, разное направление</h4>
        <table class="conj">
          <tr><th>Сначала результат</th><th>Сначала причина</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nem megyek, mert dolgozom." data-speak-lang="hu-HU">Nem megyek, mert dolgozom.</button></td>
            <td><button class="speak-btn" data-speak-text="Dolgozom, ezért nem megyek." data-speak-lang="hu-HU">Dolgozom, ezért nem megyek.</button></td>
          </tr>
        </table>
        <div class="warn">
          Связующие слова со значением причины и результата не заменяются механически.
          При перестройке предложения меняется направление логики и порядок частей.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как старые темы войдут в новые предложения</h4>
        <table class="conj">
          <tr><th>Изученная форма</th><th>Связное предложение</th></tr>
          <tr>
            <td>повелительная</td>
            <td><button class="speak-btn" data-speak-text="Hívj fel, ha megérkezel!" data-speak-lang="hu-HU">Hívj fel, ha megérkezel!</button></td>
          </tr>
          <tr>
            <td>условная</td>
            <td><button class="speak-btn" data-speak-text="Elmennék, de nincs szabadságom." data-speak-lang="hu-HU">Elmennék, de nincs szabadságom.</button></td>
          </tr>
          <tr>
            <td>форма в придаточной части</td>
            <td><button class="speak-btn" data-speak-text="Fontos, hogy időben érkezz." data-speak-lang="hu-HU">Fontos, hogy időben érkezz.</button></td>
          </tr>
          <tr>
            <td>вежливая просьба</td>
            <td><button class="speak-btn" data-speak-text="Meg tudná mondani, hogy mikor indul a vonat?" data-speak-lang="hu-HU">Meg tudná mondani, hogy mikor indul a vonat?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка перед уроком 24</h4>
        <ol class="tasklist">
          <li>Соедини две мысли отношением причины.</li>
          <li>Перестрой ту же ситуацию через результат.</li>
          <li>Соедини желание и препятствие через противопоставление.</li>
          <li>Добавь условие к инструкции.</li>
          <li>Оформи содержание формального вопроса через придаточную часть.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные модели</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Otthon maradok, mert fáradt vagyok." data-speak-lang="hu-HU">Otthon maradok, mert fáradt vagyok.</button><br>
            <button class="speak-btn" data-speak-text="Fáradt vagyok, ezért otthon maradok." data-speak-lang="hu-HU">Fáradt vagyok, ezért otthon maradok.</button><br>
            <button class="speak-btn" data-speak-text="Elutaznék, de nincs pénzem." data-speak-lang="hu-HU">Elutaznék, de nincs pénzem.</button><br>
            <button class="speak-btn" data-speak-text="Hívj fel, ha megérkezel!" data-speak-lang="hu-HU">Hívj fel, ha megérkezel!</button><br>
            <button class="speak-btn" data-speak-text="Meg tudná mondani, hogy hol van a pénztár?" data-speak-lang="hu-HU">Meg tudná mondani, hogy hol van a pénztár?</button>
          </p>
        </details>

        <div class="note">
          Урок 24 посвящён сложным предложениям и союзам:
          добавлению, выбору, противопоставлению, причине, результату, содержанию, уступке и условию.
          Это развитие уже изученных форм, а не замена их новыми окончаниями.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 23 · 11/11 · ИТОГИ И САМОПРОВЕРКА",
      title: "Összefoglalás",
      subtitle: "Функция → лицо → объект → тип условия → уместность",
      note: 'Главный результат урока — уметь не только построить форму, но и объяснить, зачем она нужна в конкретной реплике.',
      warn: 'Не своди условное наклонение к одному суффиксу и не ставь условную форму после каждого ha автоматически.',
      task: 'Пройди итоговую карту, исправь ошибки, выполни мини-тест и напиши связный текст по рубрике.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Что умеет выражать условная форма</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Что сообщает говорящий</th></tr>
          <tr>
            <td>гипотетический результат</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet olvasnék." data-speak-lang="hu-HU">Ha lenne időm, többet olvasnék.</button></td>
            <td>результат зависел бы от воображаемого условия</td>
          </tr>
          <tr>
            <td>желание</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék többet utazni." data-speak-lang="hu-HU">Szeretnék többet utazni.</button></td>
            <td>говорящий выражает желаемое действие</td>
          </tr>
          <tr>
            <td>предпочтение</td>
            <td><button class="speak-btn" data-speak-text="Én inkább vonattal mennék." data-speak-lang="hu-HU">Én inkább vonattal mennék.</button></td>
            <td>говорящий выбирает один вариант</td>
          </tr>
          <tr>
            <td>мягкий совет</td>
            <td><button class="speak-btn" data-speak-text="A helyedben többet pihennék." data-speak-lang="hu-HU">A helyedben többet pihennék.</button></td>
            <td>говорящий сообщает, что сделал бы сам</td>
          </tr>
          <tr>
            <td>косвенная просьба</td>
            <td><button class="speak-btn" data-speak-text="Tudna segíteni?" data-speak-lang="hu-HU">Tudna segíteni?</button></td>
            <td>формальный вопрос о возможности помочь</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Две парадигмы выбираются по объекту</h4>
        <table class="conj">
          <tr><th>Контекст</th><th>Форма первого лица</th><th>Пример</th></tr>
          <tr>
            <td>объекта нет или он неопределённый</td>
            <td><button class="speak-btn" data-speak-text="tanulnék, kérnék" data-speak-lang="hu-HU">tanulnék, kérnék</button></td>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
          </tr>
          <tr>
            <td>объект конкретный</td>
            <td><button class="speak-btn" data-speak-text="elolvasnám, kérném" data-speak-lang="hu-HU">elolvasnám, kérném</button></td>
            <td><button class="speak-btn" data-speak-text="Elolvasnám ezt a könyvet." data-speak-lang="hu-HU">Elolvasnám ezt a könyvet.</button></td>
          </tr>
        </table>

        <div class="warn">
          Форма первого лица неопределённого спряжения:
          <b>-nék</b>.
          Окончание показано как часть полных слов, а не как отдельная произносимая единица:
          <button class="speak-btn" data-speak-text="várnék, kérnék, tanulnék" data-speak-lang="hu-HU">várnék, kérnék, tanulnék</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Lenni — полная личная система</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Пример</th></tr>
          <tr>
            <td>я</td>
            <td><button class="speak-btn" data-speak-text="lennék" data-speak-lang="hu-HU">lennék</button></td>
            <td><button class="speak-btn" data-speak-text="Otthon lennék." data-speak-lang="hu-HU">Otthon lennék.</button></td>
          </tr>
          <tr>
            <td>ты</td>
            <td><button class="speak-btn" data-speak-text="lennél" data-speak-lang="hu-HU">lennél</button></td>
            <td><button class="speak-btn" data-speak-text="Te lennél az első." data-speak-lang="hu-HU">Te lennél az első.</button></td>
          </tr>
          <tr>
            <td>он, она или формальное обращение</td>
            <td><button class="speak-btn" data-speak-text="lenne" data-speak-lang="hu-HU">lenne</button></td>
            <td><button class="speak-btn" data-speak-text="Jó lenne találkozni." data-speak-lang="hu-HU">Jó lenne találkozni.</button></td>
          </tr>
          <tr>
            <td>мы</td>
            <td><button class="speak-btn" data-speak-text="lennénk" data-speak-lang="hu-HU">lennénk</button></td>
            <td><button class="speak-btn" data-speak-text="Otthon lennénk." data-speak-lang="hu-HU">Otthon lennénk.</button></td>
          </tr>
          <tr>
            <td>вы</td>
            <td><button class="speak-btn" data-speak-text="lennétek" data-speak-lang="hu-HU">lennétek</button></td>
            <td><button class="speak-btn" data-speak-text="Ti lennétek a vendégek." data-speak-lang="hu-HU">Ti lennétek a vendégek.</button></td>
          </tr>
          <tr>
            <td>они или формальная группа</td>
            <td><button class="speak-btn" data-speak-text="lennének" data-speak-lang="hu-HU">lennének</button></td>
            <td><button class="speak-btn" data-speak-text="Ők lennének a vendégek." data-speak-lang="hu-HU">Ők lennének a vendégek.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Реальное и гипотетическое условие</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Пример</th><th>Почему</th></tr>
          <tr>
            <td>реальное или открытое</td>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm, elmegyek." data-speak-lang="hu-HU">Ha lesz időm, elmegyek.</button></td>
            <td>говорящий считает условие возможным</td>
          </tr>
          <tr>
            <td>гипотетическое</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, elmennék." data-speak-lang="hu-HU">Ha lenne időm, elmennék.</button></td>
            <td>говорящий воображает другую ситуацию</td>
          </tr>
          <tr>
            <td>реальное условие и инструкция</td>
            <td><button class="speak-btn" data-speak-text="Ha megérkezel, hívj fel!" data-speak-lang="hu-HU">Ha megérkezel, hívj fel!</button></td>
            <td>после условия стоит повелительная форма</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Просьбы: функция важнее длины</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Естественная реплика</th></tr>
          <tr>
            <td>обычный заказ</td>
            <td><button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button></td>
          </tr>
          <tr>
            <td>вопрос о возможности получить</td>
            <td><button class="speak-btn" data-speak-text="Kaphatnék egy pohár vizet?" data-speak-lang="hu-HU">Kaphatnék egy pohár vizet?</button></td>
          </tr>
          <tr>
            <td>формальная просьба помочь</td>
            <td><button class="speak-btn" data-speak-text="Tudna segíteni?" data-speak-lang="hu-HU">Tudna segíteni?</button></td>
          </tr>
          <tr>
            <td>просьба повторить конкретное сказанное</td>
            <td><button class="speak-btn" data-speak-text="Megismételné, kérem?" data-speak-lang="hu-HU">Megismételné, kérem?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Личная форма после kellene</h4>
        <table class="conj">
          <tr><th>Исполнитель</th><th>Пример</th></tr>
          <tr>
            <td>я</td>
            <td><button class="speak-btn" data-speak-text="Ha nem kellene dolgoznom, pihennék." data-speak-lang="hu-HU">Ha nem kellene dolgoznom, pihennék.</button></td>
          </tr>
          <tr>
            <td>ты</td>
            <td><button class="speak-btn" data-speak-text="Ha nem kellene dolgoznod, mit csinálnál?" data-speak-lang="hu-HU">Ha nem kellene dolgoznod, mit csinálnál?</button></td>
          </tr>
          <tr>
            <td>мы</td>
            <td><button class="speak-btn" data-speak-text="Ha nem kellene dolgoznunk, elutaznánk." data-speak-lang="hu-HU">Ha nem kellene dolgoznunk, elutaznánk.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пять типичных ошибок</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Én tanulna.</td>
            <td><button class="speak-btn" data-speak-text="Én tanulnék." data-speak-lang="hu-HU">Én tanulnék.</button></td>
            <td>первое лицо</td>
          </tr>
          <tr>
            <td>Elolvasnék ezt a könyvet.</td>
            <td><button class="speak-btn" data-speak-text="Elolvasnám ezt a könyvet." data-speak-lang="hu-HU">Elolvasnám ezt a könyvet.</button></td>
            <td>конкретный объект</td>
          </tr>
          <tr>
            <td>Ha lenne időm, elmegyek.</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, elmennék." data-speak-lang="hu-HU">Ha lenne időm, elmennék.</button></td>
            <td>гипотетический результат</td>
          </tr>
          <tr>
            <td>A helyedben pihennél.</td>
            <td><button class="speak-btn" data-speak-text="A helyedben pihennék." data-speak-lang="hu-HU">A helyedben pihennék.</button></td>
            <td>совет выражает действие говорящего</td>
          </tr>
          <tr>
            <td>Ha nem kellene dolgozni, pihennék.</td>
            <td><button class="speak-btn" data-speak-text="Ha nem kellene dolgoznom, pihennék." data-speak-lang="hu-HU">Ha nem kellene dolgoznom, pihennék.</button></td>
            <td>нужно обозначить исполнителя личным инфинитивом</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Финальный мини-тест</h4>
        <ol class="tasklist">
          <li>Скажи: «Я хотел бы кофе».</li>
          <li>Скажи: «Я хотел бы прочитать эту книгу».</li>
          <li>Скажи реальное условие о завтрашнем дне.</li>
          <li>Сделай ту же ситуацию гипотетической.</li>
          <li>Дай другу мягкий совет.</li>
          <li>Формально попроси повторить.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Kérnék egy kávét." data-speak-lang="hu-HU">Kérnék egy kávét.</button><br>
            <button class="speak-btn" data-speak-text="Szeretném elolvasni ezt a könyvet." data-speak-lang="hu-HU">Szeretném elolvasni ezt a könyvet.</button><br>
            <button class="speak-btn" data-speak-text="Ha holnap jó idő lesz, sétálni megyek." data-speak-lang="hu-HU">Ha holnap jó idő lesz, sétálni megyek.</button><br>
            <button class="speak-btn" data-speak-text="Ha holnap jó idő lenne, sétálni mennék." data-speak-lang="hu-HU">Ha holnap jó idő lenne, sétálni mennék.</button><br>
            <button class="speak-btn" data-speak-text="A helyedben többet pihennék." data-speak-lang="hu-HU">A helyedben többet pihennék.</button><br>
            <button class="speak-btn" data-speak-text="Megismételné, kérem?" data-speak-lang="hu-HU">Megismételné, kérem?</button>
          </p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Домашняя работа</h4>
        <div class="task">
          Напиши текст из десяти связанных предложений на тему «Если бы у меня был свободный месяц».
          Используй два гипотетических условия, одно реальное условие, два результата,
          одно желание с неопределённым объектом, одно желание с конкретным объектом,
          одно предпочтение, один совет и одну вежливую просьбу.
        </div>

        <div class="note">
          Рубрика: все лица понятны; объекты выбраны осознанно; реальные и гипотетические условия не смешаны;
          просьба соответствует адресату; предложения образуют связный текст.
        </div>

        <div class="warn">
          Граница урока 23: здесь завершено базовое условное наклонение для настоящих и будущих гипотез,
          желаний, предпочтений, советов и вежливых просьб.
          Прошедшие нереальные условия и более сложные оттенки не включены в этот урок.
        </div>
      `,
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
