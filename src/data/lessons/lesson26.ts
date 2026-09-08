import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L26_ACTIVITIES = createMigrationActivities({
  lessonId: 26,
  activitySequence: 'communication',
  controlledTitle: 'Симптомы, боль и советы врача',
  controlledPassCount: 10,
  controlledExercises: [
    { kind: 'singleChoice', id: 'l26-cp-1', prompt: 'A · Сообщи о боли в горле.', options: ['Fáj a torkom.', 'Fáj a torok én.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-2', prompt: 'A · Сообщи о температуре.', options: ['Lázam van.', 'Láz vagyok.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-3', prompt: 'A · Сообщи о кашле и головокружении.', options: ['Köhögök és szédülök.', 'Köhögés és szédülés vagyok.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l26-cp-4', prompt: 'B · ___ óta fáj a torkom. (со вчерашнего дня)', accept: ['Tegnap', 'tegnap'] },
    { kind: 'fillGap', id: 'l26-cp-5', prompt: 'B · Három napja ___. (кашляю)', accept: ['köhögök', 'Köhögök'] },
    { kind: 'singleChoice', id: 'l26-cp-6', prompt: 'C · Врач спрашивает о силе боли.', options: ['Mennyire erős a fájdalom?', 'Mennyi fájdalom erős?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-7', prompt: 'C · Врач спрашивает о других лекарствах.', options: ['Szed valamilyen gyógyszert?', 'Gyógyszer valamilyen van?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-8', prompt: 'D · Попроси рекомендацию без требования диагноза.', options: ['Mit javasol?', 'Mi a diagnózis biztosan?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-9', prompt: 'D · Сообщи об изменении состояния.', options: ['Ma egy kicsit jobban vagyok.', 'Ma jobban van én.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-10', prompt: 'E · В аптеке попроси средство от боли в горле.', options: ['Szeretnék valamit kérni torokfájás ellen.', 'Szeretnék jegyet a torokhoz.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-11', prompt: 'E · Уточни частоту применения.', options: ['Hányszor kell bevennem?', 'Hányszor gyógyszer van?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-12', prompt: 'E · Уточни связь с приёмом пищи.', options: ['Étkezés előtt vagy után?', 'Étkezés hol vagy mikor?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l26-cp-13', prompt: 'F · Вежливо попроси повторить.', options: ['Kérem, mondja még egyszer.', 'Mondja gyorsabban, most!'], correctIndex: 0 },
  ],
  readingTitle: 'Mit tegyünk megfázás esetén?',
  readingParagraphs: [
    'A megfázás általában néhány nap alatt javul, de közben fontos a pihenés és a megfelelő folyadékbevitel. Ha valaki köhög, fáj a torka vagy enyhe láza van, érdemes otthon maradnia és sok vizet vagy teát innia.',
    'A tüneteket egyszerű, vény nélkül kapható készítmények is enyhíthetik, de mindig el kell olvasni a használati útmutatót. Ha valaki rendszeresen szed más gyógyszert, vagy nem biztos abban, hogy mit használhat, kérdezze meg az orvost vagy a gyógyszerészt.',
    'Orvosi segítséget kell kérni, ha a tünetek erősek, több nap után sem javulnak, vagy nehézlégzés, nagyon magas láz vagy más szokatlan panasz jelentkezik.',
    'Antibiotikumot csak orvosi javaslatra szabad szedni, mert a megfázást gyakran vírus okozza, és ilyenkor az antibiotikum nem segít.',
  ],
  readingPassCount: 6,
  readingQuestions: [
    { id: 'l26-read-1', question: 'Általában mennyi idő alatt javul a megfázás?', options: ['Néhány nap alatt', 'Mindig egy óra alatt', 'Legalább egy év alatt'], correctIndex: 0 },
    { id: 'l26-read-2', question: 'Melyik két otthoni teendőt javasolja a szöveg?', options: ['Pihenést és sok víz vagy tea fogyasztását', 'Intenzív sportot és kevés alvást', 'Utazást és munkát'], correctIndex: 0 },
    { id: 'l26-read-3', question: 'Mit kell tenni vény nélkül kapható készítmény használata előtt?', options: ['Elolvasni a használati útmutatót', 'Más gyógyszerét kipróbálni', 'Figyelmen kívül hagyni a csomagolást'], correctIndex: 0 },
    { id: 'l26-read-4', question: 'Mikor kell megkérdezni az orvost vagy a gyógyszerészt?', options: ['Ha valaki más gyógyszert is szed, vagy nem biztos a használatban', 'Csak akkor, ha nincs otthon tea', 'Minden étkezés előtt'], correctIndex: 0 },
    { id: 'l26-read-5', question: 'Mikor javasolt orvosi segítséget kérni?', options: ['Erős, nem javuló vagy szokatlan tüneteknél', 'Enyhe éhségnél', 'Ha valaki pihenni szeretne'], correctIndex: 0 },
    { id: 'l26-read-6', question: 'Milyen szabály vonatkozik az antibiotikumra?', options: ['Csak orvosi javaslatra szabad szedni', 'Minden megfázásnál kötelező', 'Bárki ajánlhatja'], correctIndex: 0 },
    { id: 'l26-read-7', question: 'Miért nem segít mindig az antibiotikum megfázásnál?', options: ['Mert a megfázást gyakran vírus okozza', 'Mert csak folyadék', 'Mert mindig túl későn veszik be'], correctIndex: 0 },
    { id: 'l26-read-8', question: 'Mire következtethetünk a gyógyszerek biztonságos használatáról?', options: ['Az útmutatót el kell olvasni, bizonytalanság esetén pedig szakembert kell kérdezni', 'Minden készítmény ugyanúgy használható', 'A használati útmutató nem fontos'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: рекомендации врача',
  listeningTranscript: 'A torka piros, de a tüdeje tiszta. Maradjon otthon két napig, igyon sok teát, és vegye be ezt a gyógyszert naponta kétszer.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l26-listen-1', question: 'Milyen a beteg torka?', options: ['Piros', 'Egészséges', 'Hideg'], correctIndex: 0 },
    { id: 'l26-listen-2', question: 'Mennyi ideig maradjon otthon?', options: ['Két napig', 'Egy hétig', 'Egy hónapig'], correctIndex: 0 },
    { id: 'l26-listen-3', question: 'Hányszor vegye be a gyógyszert?', options: ['Naponta egyszer', 'Naponta kétszer', 'Hetente kétszer'], correctIndex: 1 },
  ],
  rolePlay: {
    title: 'RolePlay 1: визит к врачу',
    partnerLabel: 'Врач',
    completionMessage: 'Языковая практика завершена. Это не медицинская оценка: проверь только полноту описания и уточнения.',
    startTurnId: 'l26-rp-1',
    turns: [
      { id: 'l26-rp-1', speaker: 'waiter', prompt: 'Jó napot! Mi a panasza?', next: 'l26-rp-2' },
      { id: 'l26-rp-2', speaker: 'learner', prompt: 'Опиши один-два вымышленных симптома.', responseMode: 'selfPractice', model: 'Fáj a torkom, és rosszul érzem magam.', next: 'l26-rp-3' },
      { id: 'l26-rp-3', speaker: 'waiter', prompt: 'Értem. Mióta érzi ezt?', next: 'l26-rp-4' },
      { id: 'l26-rp-4', speaker: 'learner', prompt: 'Назови продолжительность.', responseMode: 'selfPractice', model: 'Tegnap óta érzem.', next: 'l26-rp-5' },
      { id: 'l26-rp-5', speaker: 'waiter', prompt: 'Rendben. Van láza is?', next: 'l26-rp-6' },
      { id: 'l26-rp-6', speaker: 'learner', prompt: 'Ответь по вымышленному сценарию.', responseMode: 'selfPractice', model: 'Enyhe lázam van.', next: 'l26-rp-7' },
      { id: 'l26-rp-7', speaker: 'waiter', prompt: 'Értem. Köhög is?', next: 'l26-rp-8' },
      { id: 'l26-rp-8', speaker: 'learner', prompt: 'Ответь и при необходимости добавь изменение состояния.', responseMode: 'selfPractice', model: 'Igen, három napja köhögök, de ma egy kicsit jobban vagyok.', next: 'l26-rp-9' },
      { id: 'l26-rp-9', speaker: 'waiter', prompt: 'Rendben. Mennyire erős a fájdalom?', next: 'l26-rp-10' },
      { id: 'l26-rp-10', speaker: 'learner', prompt: 'Опиши базовую степень боли без диагноза.', responseMode: 'selfPractice', model: 'Nem nagyon erős, de kellemetlen.', next: 'l26-rp-11' },
      { id: 'l26-rp-11', speaker: 'waiter', prompt: 'Értem. Szed jelenleg valamilyen gyógyszert?', next: 'l26-rp-12' },
      { id: 'l26-rp-12', speaker: 'learner', prompt: 'Ответь в рамках вымышленного сценария.', responseMode: 'selfPractice', model: 'Nem, jelenleg nem szedek gyógyszert.', next: 'l26-rp-13' },
      { id: 'l26-rp-13', speaker: 'waiter', prompt: 'Ez csak nyelvgyakorló helyzet, nem diagnózis. A történet alapján pihenjen, igyon elegendő folyadékot, és olvassa el minden készítmény használati útmutatóját.', next: 'l26-rp-14' },
      { id: 'l26-rp-14', speaker: 'learner', prompt: 'Используй repair-реплику и попроси повторить или уточнить.', responseMode: 'selfPractice', model: 'Elnézést, kérem, mondja még egyszer. Nem értettem pontosan.', next: 'l26-rp-15' },
      { id: 'l26-rp-15', speaker: 'waiter', prompt: 'Pihenjen, igyon vizet vagy teát, és bizonytalanság esetén kérdezze meg az orvost vagy a gyógyszerészt.', next: 'l26-rp-16' },
      { id: 'l26-rp-16', speaker: 'learner', prompt: 'Подтверди, что понял(а), не добавляя диагноза.', responseMode: 'selfPractice', model: 'Rendben, értem: pihenek, folyadékot iszom, és ha nem vagyok biztos valamiben, szakembert kérdezek.' },
    ],
  },
  rolePlayB: {
    title: 'RolePlay 2: в аптеке',
    partnerLabel: 'Фармацевт',
    completionMessage: 'Аптечный диалог завершён. Конкретная дозировка намеренно не оценивается и не придумывается.',
    startTurnId: 'l26-rpb-1',
    turns: [
      { id: 'l26-rpb-1', speaker: 'waiter', prompt: 'Jó napot! Miben segíthetek?', next: 'l26-rpb-2' },
      { id: 'l26-rpb-2', speaker: 'learner', prompt: 'Попроси простое безрецептурное средство от вымышленного симптома и назови длительность.', responseMode: 'selfPractice', model: 'Jó napot! Három napja fáj a torkom. Szeretnék valamit kérni torokfájás ellen.', next: 'l26-rpb-3' },
      { id: 'l26-rpb-3', speaker: 'waiter', prompt: 'Értem. Szed valamilyen más gyógyszert?', next: 'l26-rpb-4' },
      { id: 'l26-rpb-4', speaker: 'learner', prompt: 'Ответь в рамках сценария.', responseMode: 'selfPractice', model: 'Nem, most nem szedek más gyógyszert.', next: 'l26-rpb-5' },
      { id: 'l26-rpb-5', speaker: 'waiter', prompt: 'Rendben. Ezt a vény nélkül kapható készítményt csak a csomagoláson lévő használati útmutató szerint használja. Ha bizonytalan, kérdezzen orvost vagy gyógyszerészt.', next: 'l26-rpb-6' },
      { id: 'l26-rpb-6', speaker: 'learner', prompt: 'Спроси о частоте и связи с едой.', responseMode: 'selfPractice', model: 'Értem. Hányszor kell használnom? Étkezés előtt vagy után?', next: 'l26-rpb-7' },
      { id: 'l26-rpb-7', speaker: 'waiter', prompt: 'A pontos gyakoriságot és időzítést a termék használati útmutatója tartalmazza; azt kövesse.', next: 'l26-rpb-8' },
      { id: 'l26-rpb-8', speaker: 'learner', prompt: 'Подтверди понимание и вежливо заверши.', responseMode: 'selfPractice', model: 'Rendben, elolvasom és követem az útmutatót. Köszönöm szépen a segítséget.' },
    ],
  },
  writingTitle: 'Письмо: сообщение в кабинет врача',
  writingPrompt: 'Напиши 100–120 слов в кабинет врача. Это языковая практика, а не реальная медицинская оценка. Опиши основные вымышленные симптомы, когда они начались, как менялись, что уже пробовал(а), задай один релевантный вопрос и попроси запись на приём.',
  writingModel: ['Tisztelt Rendelő!', 'Három napja köhögök, és tegnap óta fáj a torkom.', 'Szeretnék időpontot kérni egy vizsgálatra.'],
  writingRubric: ['100–120 слов', 'Названы основные вымышленные симптомы', 'Указаны начало и развитие состояния', 'Описано, что уже было сделано', 'Есть один релевантный вопрос', 'Есть просьба о записи', 'Текст не выдаёт языковую практику за медицинскую оценку'],
  objectiveChecks: [
    { objectiveId: 'l26_name-body-symptoms', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l26_express-pain', activity: 'writing', evidenceKind: 'writing' },
    {
      objectiveId: 'l26_doctor-dialogue',
      activity: 'roleplay',
      evidenceKind: 'interaction',
      evidenceComponents: [{ activity: 'listening', evidenceKind: 'listening' }],
    },
    {
      objectiveId: 'l26_pharmacy',
      activity: 'roleplayB',
      evidenceKind: 'interaction',
      evidenceComponents: [{ activity: 'controlled', evidenceKind: 'grammar' }],
    },
    { objectiveId: 'l26_understand-advice', activity: 'listening', evidenceKind: 'listening' },
  ],
});

const L26_OPTIONAL_SPEAKING = {
  title: 'Говорение: вымышленная проблема со здоровьем',
  instructions: 'Говори около 2 минут. Это языковая практика, не реальная медицинская оценка. Опиши недавнюю вымышленную проблему: симптомы, начало, что уже сделал(а), стало ли лучше или хуже и что спросил(а) бы у врача.',
  prompt: 'Három napja köhögök, tegnap óta fáj a torkom. Pihentem és teát ittam. Ma egy kicsit jobban vagyok. Az orvostól azt kérdezném: Mit javasol?',
  rubric: ['Около 2 минут', 'Ясно указано, что ситуация вымышленная', 'Есть симптомы и время начала', 'Описано предпринятое действие', 'Есть изменение состояния', 'Сформулирован вопрос врачу', 'Нет диагностических утверждений'],
};

export const LESSON_26: Lesson = {
  id: 26,
  number: 26,
  level: 'B1',
  title: 'Урок 26 · Egészség és orvos',
  subtitle: 'Здоровье, болезни и визит к врачу',
  description: 'Конструкция Fáj a... (болит...), части тела, описание симптомов (láz, köhögés), визит к врачу (az orvosnál) и покупка лекарств в аптеке (a gyógyszertárban).',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 26 · 1/11 · ЗДОРОВЬЕ И ОБЩЕНИЕ",
      title: "Egészség és orvos",
      subtitle: "Карта урока: от симптома до понятного вопроса врачу или фармацевту",
      note: 'Все ситуации и симптомы в заданиях должны быть вымышленными. Урок тренирует венгерский язык и не ставит диагноз.',
      warn: 'При реальных сильных, внезапных или ухудшающихся симптомах языковой урок не заменяет профессиональную медицинскую помощь.',
      task: 'Выбери вымышленный сценарий: один основной симптом, время его начала, одно изменение состояния и один вопрос специалисту.',
      body: `
        <p>
          В теме здоровья важно не знать как можно больше медицинских терминов,
          а уметь ясно сообщить основную жалобу, время начала, изменение состояния
          и понять следующий практический шаг.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Четыре ситуации урока</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Коммуникативная задача</th><th>Контрольная реплика</th></tr>
          <tr>
            <td>описание состояния</td>
            <td>назвать симптом и часть тела</td>
            <td><button class="speak-btn" data-speak-text="Fáj a torkom." data-speak-lang="hu-HU">Fáj a torkom.</button></td>
          </tr>
          <tr>
            <td>разговор с врачом</td>
            <td>ответить на вопросы о начале, силе и изменении симптома</td>
            <td><button class="speak-btn" data-speak-text="Tegnap óta fáj, de ma egy kicsit jobban vagyok." data-speak-lang="hu-HU">Tegnap óta fáj, de ma egy kicsit jobban vagyok.</button></td>
          </tr>
          <tr>
            <td>понимание рекомендации</td>
            <td>выделить действие, частоту и срок</td>
            <td><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></td>
          </tr>
          <tr>
            <td>разговор в аптеке</td>
            <td>описать вымышленный симптом и задать вопрос о применении</td>
            <td><button class="speak-btn" data-speak-text="Hogyan kell használni ezt a készítményt?" data-speak-lang="hu-HU">Hogyan kell használni ezt a készítményt?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Маршрут урока</h4>
        <table class="conj">
          <tr><th>Этап</th><th>Что учимся делать</th><th>Пример</th></tr>
          <tr>
            <td>1. Боль и части тела</td>
            <td>выбрать единственное или множественное число</td>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem. Fájnak a lábaim." data-speak-lang="hu-HU">Fáj a fejem. Fájnak a lábaim.</button></td>
          </tr>
          <tr>
            <td>2. Симптомы</td>
            <td>назвать состояние естественной конструкцией</td>
            <td><button class="speak-btn" data-speak-text="Lázam van, köhögök és szédülök." data-speak-lang="hu-HU">Lázam van, köhögök és szédülök.</button></td>
          </tr>
          <tr>
            <td>3. Начало и длительность</td>
            <td>сказать, когда началось продолжающееся состояние</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button></td>
          </tr>
          <tr>
            <td>4. У врача</td>
            <td>понять вопрос и дать короткий точный ответ</td>
            <td><button class="speak-btn" data-speak-text="Mióta érzi ezt?" data-speak-lang="hu-HU">Mióta érzi ezt?</button></td>
          </tr>
          <tr>
            <td>5. Рекомендация</td>
            <td>понять основное действие и попросить повторить</td>
            <td><button class="speak-btn" data-speak-text="Nem értettem pontosan." data-speak-lang="hu-HU">Nem értettem pontosan.</button></td>
          </tr>
          <tr>
            <td>6. Аптека</td>
            <td>задать безопасный практический вопрос</td>
            <td><button class="speak-btn" data-speak-text="Van valami mellékhatása?" data-speak-lang="hu-HU">Van valami mellékhatása?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Нейтральный и вежливый регистр</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Нейтрально</th><th>Вежливо</th></tr>
          <tr>
            <td>попросить повторить</td>
            <td><button class="speak-btn" data-speak-text="Mondd még egyszer, kérlek." data-speak-lang="hu-HU">Mondd még egyszer, kérlek.</button></td>
            <td><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></td>
          </tr>
          <tr>
            <td>спросить о рекомендации</td>
            <td><button class="speak-btn" data-speak-text="Mit javasolsz?" data-speak-lang="hu-HU">Mit javasolsz?</button></td>
            <td><button class="speak-btn" data-speak-text="Mit javasol?" data-speak-lang="hu-HU">Mit javasol?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Can-Do после урока</h4>
        <ul class="tick">
          <li>назвать одну или несколько болящих частей тела;</li>
          <li>описать несколько базовых вымышленных симптомов;</li>
          <li>указать время начала и изменение состояния;</li>
          <li>ответить на уточняющие вопросы врача;</li>
          <li>понять простую рекомендацию и выделить главное действие;</li>
          <li>попросить повторить или уточнить непонятное;</li>
          <li>задать в аптеке вопрос о применении, частоте и возможном побочном эффекте.</li>
        </ul>

        <div class="note">
          Граница урока: мы учим язык повседневного общения о здоровье уровня B1.
          Диагностика, выбор лечения и индивидуальная дозировка в учебные цели не входят.
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 26 · 2/11 · КОНСТРУКЦИЯ БОЛИ",
      title: "Fáj a...",
      subtitle: "Единственное и множественное число, вопросы, отрицание и степень боли",
      note: 'В венгерской конструкции болящая часть тела является грамматическим подлежащим. Поэтому форма глагола зависит от её числа.',
      warn: 'Не переводи русскую модель слово за словом. Обычно не нужно добавлять отдельное «у меня»: принадлежность уже выражена формой части тела.',
      task: 'Составь шесть вымышленных реплик: две с fáj, две с fájnak, одну отрицательную и один вопрос о месте боли.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Основная модель</h4>
        <table class="conj">
          <tr><th>Число болящей части</th><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>одна часть тела</td>
            <td><button class="speak-btn" data-speak-text="fáj" data-speak-lang="hu-HU">fáj</button> + определённый артикль + притяжательная форма</td>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU">Fáj a fejem.</button></td>
          </tr>
          <tr>
            <td>несколько частей тела</td>
            <td><button class="speak-btn" data-speak-text="fájnak" data-speak-lang="hu-HU">fájnak</button> + определённый артикль + множественная притяжательная форма</td>
            <td><button class="speak-btn" data-speak-text="Fájnak a lábaim." data-speak-lang="hu-HU">Fájnak a lábaim.</button></td>
          </tr>
        </table>

        <div class="note">
          Смысл конструкции буквально ближе к «болит моя голова» или «болят мои ноги».
          Эта модель связана с притяжательными формами из 8-го урока.
          Отдельное местоимение первого лица обычно не требуется.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полезные формы частей тела</h4>
        <table class="conj">
          <tr><th>Словарная форма</th><th>Моя часть тела</th><th>Полная реплика</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fej" data-speak-lang="hu-HU">fej</button></td>
            <td><button class="speak-btn" data-speak-text="fejem" data-speak-lang="hu-HU">fejem</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU">Fáj a fejem.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="torok" data-speak-lang="hu-HU">torok</button></td>
            <td><button class="speak-btn" data-speak-text="torkom" data-speak-lang="hu-HU">torkom</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a torkom." data-speak-lang="hu-HU">Fáj a torkom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="has" data-speak-lang="hu-HU">has</button></td>
            <td><button class="speak-btn" data-speak-text="hasam" data-speak-lang="hu-HU">hasam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a hasam." data-speak-lang="hu-HU">Fáj a hasam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hát" data-speak-lang="hu-HU">hát</button></td>
            <td><button class="speak-btn" data-speak-text="hátam" data-speak-lang="hu-HU">hátam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a hátam." data-speak-lang="hu-HU">Fáj a hátam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fog" data-speak-lang="hu-HU">fog</button></td>
            <td><button class="speak-btn" data-speak-text="fogam" data-speak-lang="hu-HU">fogam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a fogam." data-speak-lang="hu-HU">Fáj a fogam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fül" data-speak-lang="hu-HU">fül</button></td>
            <td><button class="speak-btn" data-speak-text="fülem" data-speak-lang="hu-HU">fülem</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a fülem." data-speak-lang="hu-HU">Fáj a fülem.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Одна нога или обе ноги</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Пример</th></tr>
          <tr>
            <td>болит одна нога</td>
            <td><button class="speak-btn" data-speak-text="Fáj a lábam." data-speak-lang="hu-HU">Fáj a lábam.</button></td>
          </tr>
          <tr>
            <td>болят обе ноги или ноги во множественном числе</td>
            <td><button class="speak-btn" data-speak-text="Fájnak a lábaim." data-speak-lang="hu-HU">Fájnak a lábaim.</button></td>
          </tr>
          <tr>
            <td>болят глаза</td>
            <td><button class="speak-btn" data-speak-text="Fájnak a szemeim." data-speak-lang="hu-HU">Fájnak a szemeim.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Вопросы и короткие ответы</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>что болит?</td>
            <td><button class="speak-btn" data-speak-text="Mi fáj?" data-speak-lang="hu-HU">Mi fáj?</button></td>
          </tr>
          <tr>
            <td>где болит?</td>
            <td><button class="speak-btn" data-speak-text="Hol fáj?" data-speak-lang="hu-HU">Hol fáj?</button></td>
          </tr>
          <tr>
            <td>болит ли горло?</td>
            <td><button class="speak-btn" data-speak-text="Fáj a torka?" data-speak-lang="hu-HU">Fáj a torka?</button></td>
          </tr>
          <tr>
            <td>краткий ответ</td>
            <td><button class="speak-btn" data-speak-text="Igen, fáj. Nem, nem fáj." data-speak-lang="hu-HU">Igen, fáj. Nem, nem fáj.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Степень и изменение боли</h4>
        <table class="conj">
          <tr><th>Значение</th><th>Пример</th></tr>
          <tr>
            <td>немного болит</td>
            <td><button class="speak-btn" data-speak-text="Kicsit fáj a fejem." data-speak-lang="hu-HU">Kicsit fáj a fejem.</button></td>
          </tr>
          <tr>
            <td>сильно болит</td>
            <td><button class="speak-btn" data-speak-text="Nagyon fáj a torkom." data-speak-lang="hu-HU">Nagyon fáj a torkom.</button></td>
          </tr>
          <tr>
            <td>уже не болит</td>
            <td><button class="speak-btn" data-speak-text="Már nem fáj a hasam." data-speak-lang="hu-HU">Már nem fáj a hasam.</button></td>
          </tr>
          <tr>
            <td>сегодня болит сильнее</td>
            <td><button class="speak-btn" data-speak-text="Ma jobban fáj a hátam." data-speak-lang="hu-HU">Ma jobban fáj a hátam.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Почему</th></tr>
          <tr>
            <td>Fáj a fej.</td>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU">Fáj a fejem.</button></td>
            <td>нужна форма «моя голова»</td>
          </tr>
          <tr>
            <td>Fájom a fejem.</td>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU">Fáj a fejem.</button></td>
            <td>глагол не получает окончание первого лица</td>
          </tr>
          <tr>
            <td>Fáj a lábaim.</td>
            <td><button class="speak-btn" data-speak-text="Fájnak a lábaim." data-speak-lang="hu-HU">Fájnak a lábaim.</button></td>
            <td>множественная часть требует fájnak</td>
          </tr>
          <tr>
            <td>Én fáj a torkom.</td>
            <td><button class="speak-btn" data-speak-text="Fáj a torkom." data-speak-lang="hu-HU">Fáj a torkom.</button></td>
            <td>отдельное местоимение обычно не нужно</td>
          </tr>
          <tr>
            <td>Nem fájok.</td>
            <td><button class="speak-btn" data-speak-text="Nem fáj a fejem." data-speak-lang="hu-HU">Nem fáj a fejem.</button></td>
            <td>нужно назвать болящую часть тела</td>
          </tr>
        </table>

        <div class="task">
          Составь шесть вымышленных реплик:
          две с единственным числом, две с множественным,
          одну отрицательную и один вопрос.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 26 · 3/11 · ЧАСТИ ТЕЛА",
      title: "A test részei",
      subtitle: "Как образуются формы «моя часть тела» и «мои части тела»",
      note: 'Для описания боли учи слово сразу парой: словарная форма → форма первого лица. Окончание и основа слова могут меняться.',
      warn: 'Не применяй одно механическое окончание ко всем словам. Например: torok → torkom — выпадает гласная o; kéz → kezem — долгий é сокращается.',
      task: 'Раздели части тела на три группы: голова и лицо, туловище, конечности. Затем составь шесть вымышленных реплик о боли.',
      body: `
        <p>
          После
          <button class="speak-btn" data-speak-text="fáj" data-speak-lang="hu-HU">fáj</button>
          обычно используется форма со значением «моя часть тела».
          Для нескольких частей нужна форма «мои» и глагол
          <button class="speak-btn" data-speak-text="fájnak" data-speak-lang="hu-HU">fájnak</button>.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Голова и лицо</h4>
        <table class="conj">
          <tr><th>Словарная форма</th><th>Моя часть тела</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fej" data-speak-lang="hu-HU">fej</button></td>
            <td><button class="speak-btn" data-speak-text="fejem" data-speak-lang="hu-HU">fejem</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU">Fáj a fejem.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="torok" data-speak-lang="hu-HU">torok</button></td>
            <td><button class="speak-btn" data-speak-text="torkom" data-speak-lang="hu-HU">torkom</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a torkom." data-speak-lang="hu-HU">Fáj a torkom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fül" data-speak-lang="hu-HU">fül</button></td>
            <td><button class="speak-btn" data-speak-text="fülem" data-speak-lang="hu-HU">fülem</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a fülem." data-speak-lang="hu-HU">Fáj a fülem.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szem" data-speak-lang="hu-HU">szem</button></td>
            <td><button class="speak-btn" data-speak-text="szemem" data-speak-lang="hu-HU">szemem</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a szemem." data-speak-lang="hu-HU">Fáj a szemem.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fog" data-speak-lang="hu-HU">fog</button></td>
            <td><button class="speak-btn" data-speak-text="fogam" data-speak-lang="hu-HU">fogam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a fogam." data-speak-lang="hu-HU">Fáj a fogam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nyak" data-speak-lang="hu-HU">nyak</button></td>
            <td><button class="speak-btn" data-speak-text="nyakam" data-speak-lang="hu-HU">nyakam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a nyakam." data-speak-lang="hu-HU">Fáj a nyakam.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Туловище и конечности</h4>
        <table class="conj">
          <tr><th>Словарная форма</th><th>Моя часть тела</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="váll" data-speak-lang="hu-HU">váll</button></td>
            <td><button class="speak-btn" data-speak-text="vállam" data-speak-lang="hu-HU">vállam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a vállam." data-speak-lang="hu-HU">Fáj a vállam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hát" data-speak-lang="hu-HU">hát</button></td>
            <td><button class="speak-btn" data-speak-text="hátam" data-speak-lang="hu-HU">hátam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a hátam." data-speak-lang="hu-HU">Fáj a hátam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="has" data-speak-lang="hu-HU">has</button></td>
            <td><button class="speak-btn" data-speak-text="hasam" data-speak-lang="hu-HU">hasam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a hasam." data-speak-lang="hu-HU">Fáj a hasam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mellkas" data-speak-lang="hu-HU">mellkas</button></td>
            <td><button class="speak-btn" data-speak-text="mellkasom" data-speak-lang="hu-HU">mellkasom</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a mellkasom." data-speak-lang="hu-HU">Fáj a mellkasom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kar" data-speak-lang="hu-HU">kar</button></td>
            <td><button class="speak-btn" data-speak-text="karom" data-speak-lang="hu-HU">karom</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a karom." data-speak-lang="hu-HU">Fáj a karom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kéz" data-speak-lang="hu-HU">kéz</button></td>
            <td><button class="speak-btn" data-speak-text="kezem" data-speak-lang="hu-HU">kezem</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a kezem." data-speak-lang="hu-HU">Fáj a kezem.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="láb" data-speak-lang="hu-HU">láb</button></td>
            <td><button class="speak-btn" data-speak-text="lábam" data-speak-lang="hu-HU">lábam</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a lábam." data-speak-lang="hu-HU">Fáj a lábam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="térd" data-speak-lang="hu-HU">térd</button></td>
            <td><button class="speak-btn" data-speak-text="térdem" data-speak-lang="hu-HU">térdem</button></td>
            <td><button class="speak-btn" data-speak-text="Fáj a térdem." data-speak-lang="hu-HU">Fáj a térdem.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Формы «моя» и «мои»</h4>
        <table class="conj">
          <tr><th>Одна часть</th><th>Несколько частей</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szemem" data-speak-lang="hu-HU">szemem</button></td>
            <td><button class="speak-btn" data-speak-text="szemeim" data-speak-lang="hu-HU">szemeim</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fülem" data-speak-lang="hu-HU">fülem</button></td>
            <td><button class="speak-btn" data-speak-text="füleim" data-speak-lang="hu-HU">füleim</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kezem" data-speak-lang="hu-HU">kezem</button></td>
            <td><button class="speak-btn" data-speak-text="kezeim" data-speak-lang="hu-HU">kezeim</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lábam" data-speak-lang="hu-HU">lábam</button></td>
            <td><button class="speak-btn" data-speak-text="lábaim" data-speak-lang="hu-HU">lábaim</button></td>
          </tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Fáj a szemem." data-speak-lang="hu-HU">Fáj a szemem.</button></p>
        <p><button class="speak-btn" data-speak-text="Fájnak a szemeim." data-speak-lang="hu-HU">Fájnak a szemeim.</button></p>
        <p><button class="speak-btn" data-speak-text="Fáj a kezem." data-speak-lang="hu-HU">Fáj a kezem.</button></p>
        <p><button class="speak-btn" data-speak-text="Fájnak a kezeim." data-speak-lang="hu-HU">Fájnak a kezeim.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Левая и правая сторона</h4>
        <p><button class="speak-btn" data-speak-text="Fáj a bal fülem." data-speak-lang="hu-HU">Fáj a bal fülem.</button></p>
        <p><button class="speak-btn" data-speak-text="Fáj a jobb térdem." data-speak-lang="hu-HU">Fáj a jobb térdem.</button></p>
        <p><button class="speak-btn" data-speak-text="Melyik oldalon fáj?" data-speak-lang="hu-HU">Melyik oldalon fáj?</button></p>
        <p><button class="speak-btn" data-speak-text="A bal oldalon." data-speak-lang="hu-HU">A bal oldalon.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>torokom</td>
            <td><button class="speak-btn" data-speak-text="torkom" data-speak-lang="hu-HU">torkom</button></td>
            <td>в основе выпадает o</td>
          </tr>
          <tr>
            <td>kézem</td>
            <td><button class="speak-btn" data-speak-text="kezem" data-speak-lang="hu-HU">kezem</button></td>
            <td>é сокращается до e</td>
          </tr>
          <tr>
            <td>Fáj a lábaim.</td>
            <td><button class="speak-btn" data-speak-text="Fájnak a lábaim." data-speak-lang="hu-HU">Fájnak a lábaim.</button></td>
            <td>множественная форма требует fájnak</td>
          </tr>
          <tr>
            <td>Fájnak a szemem.</td>
            <td><button class="speak-btn" data-speak-text="Fáj a szemem." data-speak-lang="hu-HU">Fáj a szemem.</button></td>
            <td>szemem — единственное число</td>
          </tr>
          <tr>
            <td>Fáj a kéz.</td>
            <td><button class="speak-btn" data-speak-text="Fáj a kezem." data-speak-lang="hu-HU">Fáj a kezem.</button></td>
            <td>нужна притяжательная форма</td>
          </tr>
        </table>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 26 · 4/11 · СИМПТОМЫ И СОСТОЯНИЯ",
      title: "Tünetek és állapotok",
      subtitle: "Как выбрать правильную грамматическую модель для симптома",
      note: 'Описывай наблюдаемый симптом или самочувствие, а не придумывай диагноз. Для разных симптомов используются разные грамматические модели.',
      warn: 'Fázom означает «мне холодно». Озноб выражается отдельно: Ráz a hideg. Megfáztam означает «я простудился» и не равно Fázom.',
      task: 'Выбери вымышленный сценарий и составь четыре предложения: основной симптом, время начала, степень или изменение и дополнительный симптом.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Модель 1: существительное + van</h4>
        <table class="conj">
          <tr><th>Состояние</th><th>Реплика</th></tr>
          <tr>
            <td>температура</td>
            <td><button class="speak-btn" data-speak-text="Lázam van." data-speak-lang="hu-HU">Lázam van.</button></td>
          </tr>
          <tr>
            <td>небольшое повышение температуры</td>
            <td><button class="speak-btn" data-speak-text="Hőemelkedésem van." data-speak-lang="hu-HU">Hőemelkedésem van.</button></td>
          </tr>
          <tr>
            <td>тошнота</td>
            <td><button class="speak-btn" data-speak-text="Hányingerem van." data-speak-lang="hu-HU">Hányingerem van.</button></td>
          </tr>
          <tr>
            <td>диарея</td>
            <td><button class="speak-btn" data-speak-text="Hasmenésem van." data-speak-lang="hu-HU">Hasmenésem van.</button></td>
          </tr>
          <tr>
            <td>насморк как состояние</td>
            <td><button class="speak-btn" data-speak-text="Náthám van." data-speak-lang="hu-HU">Náthám van.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель 2: отдельный глагол</h4>
        <table class="conj">
          <tr><th>Симптом</th><th>Реплика</th></tr>
          <tr>
            <td>кашель</td>
            <td><button class="speak-btn" data-speak-text="Köhögök." data-speak-lang="hu-HU">Köhögök.</button></td>
          </tr>
          <tr>
            <td>чихание</td>
            <td><button class="speak-btn" data-speak-text="Tüsszögök." data-speak-lang="hu-HU">Tüsszögök.</button></td>
          </tr>
          <tr>
            <td>головокружение</td>
            <td><button class="speak-btn" data-speak-text="Szédülök." data-speak-lang="hu-HU">Szédülök.</button></td>
          </tr>
          <tr>
            <td>мне холодно</td>
            <td><button class="speak-btn" data-speak-text="Fázom." data-speak-lang="hu-HU">Fázom.</button></td>
          </tr>
          <tr>
            <td>озноб</td>
            <td><button class="speak-btn" data-speak-text="Ráz a hideg." data-speak-lang="hu-HU">Ráz a hideg.</button></td>
          </tr>
          <tr>
            <td>течёт из носа</td>
            <td><button class="speak-btn" data-speak-text="Folyik az orrom." data-speak-lang="hu-HU">Folyik az orrom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель 3: состояние + vagyok / érzem magam</h4>
        <table class="conj">
          <tr><th>Состояние</th><th>Реплика</th></tr>
          <tr>
            <td>простужен</td>
            <td><button class="speak-btn" data-speak-text="Náthás vagyok." data-speak-lang="hu-HU">Náthás vagyok.</button></td>
          </tr>
          <tr>
            <td>устал</td>
            <td><button class="speak-btn" data-speak-text="Fáradt vagyok." data-speak-lang="hu-HU">Fáradt vagyok.</button></td>
          </tr>
          <tr>
            <td>слабость</td>
            <td><button class="speak-btn" data-speak-text="Gyenge vagyok." data-speak-lang="hu-HU">Gyenge vagyok.</button></td>
          </tr>
          <tr>
            <td>плохо себя чувствую</td>
            <td><button class="speak-btn" data-speak-text="Rosszul érzem magam." data-speak-lang="hu-HU">Rosszul érzem magam.</button></td>
          </tr>
          <tr>
            <td>мне лучше</td>
            <td><button class="speak-btn" data-speak-text="Jobban vagyok." data-speak-lang="hu-HU">Jobban vagyok.</button></td>
          </tr>
          <tr>
            <td>мне хуже</td>
            <td><button class="speak-btn" data-speak-text="Rosszabbul vagyok." data-speak-lang="hu-HU">Rosszabbul vagyok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Событие или изменение</h4>
        <table class="conj">
          <tr><th>Значение</th><th>Реплика</th></tr>
          <tr>
            <td>я простудился</td>
            <td><button class="speak-btn" data-speak-text="Megfáztam." data-speak-lang="hu-HU">Megfáztam.</button></td>
          </tr>
          <tr>
            <td>мне стало хуже</td>
            <td><button class="speak-btn" data-speak-text="Rosszabbul lettem." data-speak-lang="hu-HU">Rosszabbul lettem.</button></td>
          </tr>
          <tr>
            <td>сегодня мне немного лучше</td>
            <td><button class="speak-btn" data-speak-text="Ma egy kicsit jobban vagyok." data-speak-lang="hu-HU">Ma egy kicsit jobban vagyok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Время, длительность и степень</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th></tr>
          <tr>
            <td>со вчерашнего дня</td>
            <td><button class="speak-btn" data-speak-text="Tegnap óta lázam van." data-speak-lang="hu-HU">Tegnap óta lázam van.</button></td>
          </tr>
          <tr>
            <td>уже три дня</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button></td>
          </tr>
          <tr>
            <td>началось сегодня утром</td>
            <td><button class="speak-btn" data-speak-text="Ma reggel kezdődött." data-speak-lang="hu-HU">Ma reggel kezdődött.</button></td>
          </tr>
          <tr>
            <td>высокая температура</td>
            <td><button class="speak-btn" data-speak-text="Magas lázam van." data-speak-lang="hu-HU">Magas lázam van.</button></td>
          </tr>
          <tr>
            <td>сильное головокружение</td>
            <td><button class="speak-btn" data-speak-text="Nagyon szédülök." data-speak-lang="hu-HU">Nagyon szédülök.</button></td>
          </tr>
          <tr>
            <td>лёгкий кашель</td>
            <td><button class="speak-btn" data-speak-text="Enyhén köhögök." data-speak-lang="hu-HU">Enyhén köhögök.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как может уточнить специалист</h4>
        <p><button class="speak-btn" data-speak-text="Van láza?" data-speak-lang="hu-HU">Van láza?</button></p>
        <p><button class="speak-btn" data-speak-text="Köhög?" data-speak-lang="hu-HU">Köhög?</button></p>
        <p><button class="speak-btn" data-speak-text="Szédül?" data-speak-lang="hu-HU">Szédül?</button></p>
        <p><button class="speak-btn" data-speak-text="Mióta érzi ezt?" data-speak-lang="hu-HU">Mióta érzi ezt?</button></p>
        <p><button class="speak-btn" data-speak-text="Rosszabb lett?" data-speak-lang="hu-HU">Rosszabb lett?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель связного ответа</h4>
        <p><button class="speak-btn" data-speak-text="Három napja köhögök, tegnap óta lázam van, és ma rosszabbul érzem magam." data-speak-lang="hu-HU">Három napja köhögök, tegnap óta lázam van, és ma rosszabbul érzem magam.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Почему</th></tr>
          <tr>
            <td>Láz vagyok.</td>
            <td><button class="speak-btn" data-speak-text="Lázam van." data-speak-lang="hu-HU">Lázam van.</button></td>
            <td>используется модель существительное + van</td>
          </tr>
          <tr>
            <td>Köhögés vagyok.</td>
            <td><button class="speak-btn" data-speak-text="Köhögök." data-speak-lang="hu-HU">Köhögök.</button></td>
            <td>нужен личный глагол</td>
          </tr>
          <tr>
            <td>Náthám vagyok.</td>
            <td><button class="speak-btn" data-speak-text="Náthás vagyok." data-speak-lang="hu-HU">Náthás vagyok.</button></td>
            <td>с vagyok нужна форма прилагательного</td>
          </tr>
          <tr>
            <td>Fázom. — в значении «я простудился»</td>
            <td><button class="speak-btn" data-speak-text="Megfáztam." data-speak-lang="hu-HU">Megfáztam.</button></td>
            <td>Fázom означает, что человеку холодно</td>
          </tr>
          <tr>
            <td>Három napig köhögök. — если кашель начался три дня назад и продолжается</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button></td>
            <td>для продолжающегося состояния используется napja</td>
          </tr>
        </table>

        <div class="note">
          Этот слайд помогает описывать вымышленное состояние на венгерском.
          Он не определяет причину симптомов и не предлагает лечение.
        </div>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 26 · 5/11 · У ВРАЧА",
      title: "Az orvosnál",
      subtitle: "Вопросы врача, структура ответа, инструкции и уточнение",
      note: 'В учебном диалоге используй вымышленные симптомы. Хороший ответ пациента содержит главную жалобу, время начала, степень или изменение и важную дополнительную информацию.',
      warn: 'Этот слайд тренирует язык кабинета врача, но не ставит диагноз и не предлагает индивидуальное лечение.',
      task: 'Подготовь вымышленный ответ из четырёх частей и разыграй короткий диалог, используя вежливые формы.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Начало разговора</h4>
        <table class="conj">
          <tr><th>Врач</th><th>Пациент</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok! Mi a panasza?" data-speak-lang="hu-HU">Jó napot kívánok! Mi a panasza?</button></td>
            <td><button class="speak-btn" data-speak-text="Jó napot kívánok! Fáj a torkom, köhögök, és rosszul érzem magam." data-speak-lang="hu-HU">Jó napot kívánok! Fáj a torkom, köhögök, és rosszul érzem magam.</button></td>
          </tr>
        </table>

        <div class="note">
          В разговорной медицинской речи можно услышать и
          <button class="speak-btn" data-speak-text="Mi a panasz?" data-speak-lang="hu-HU">Mi a panasz?</button>.
          Форма
          <button class="speak-btn" data-speak-text="Mi a panasza?" data-speak-lang="hu-HU">Mi a panasza?</button>
          явно показывает вежливое обращение к пациенту.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что может спросить врач</h4>
        <table class="conj">
          <tr><th>Функция вопроса</th><th>Вопрос</th></tr>
          <tr>
            <td>когда началось состояние</td>
            <td><button class="speak-btn" data-speak-text="Mikor kezdődtek a tünetek?" data-speak-lang="hu-HU">Mikor kezdődtek a tünetek?</button></td>
          </tr>
          <tr>
            <td>как долго продолжается</td>
            <td><button class="speak-btn" data-speak-text="Mióta vannak panaszai?" data-speak-lang="hu-HU">Mióta vannak panaszai?</button></td>
          </tr>
          <tr>
            <td>конкретная боль</td>
            <td><button class="speak-btn" data-speak-text="Mióta fáj a torka?" data-speak-lang="hu-HU">Mióta fáj a torka?</button></td>
          </tr>
          <tr>
            <td>температура</td>
            <td><button class="speak-btn" data-speak-text="Van láza?" data-speak-lang="hu-HU">Van láza?</button></td>
          </tr>
          <tr>
            <td>кашель</td>
            <td><button class="speak-btn" data-speak-text="Köhög?" data-speak-lang="hu-HU">Köhög?</button></td>
          </tr>
          <tr>
            <td>сила боли</td>
            <td><button class="speak-btn" data-speak-text="Mennyire erős a fájdalom?" data-speak-lang="hu-HU">Mennyire erős a fájdalom?</button></td>
          </tr>
          <tr>
            <td>изменение состояния</td>
            <td><button class="speak-btn" data-speak-text="Rosszabb lett?" data-speak-lang="hu-HU">Rosszabb lett?</button></td>
          </tr>
          <tr>
            <td>другие лекарства</td>
            <td><button class="speak-btn" data-speak-text="Szed jelenleg valamilyen gyógyszert?" data-speak-lang="hu-HU">Szed jelenleg valamilyen gyógyszert?</button></td>
          </tr>
          <tr>
            <td>аллергия на лекарства</td>
            <td><button class="speak-btn" data-speak-text="Van gyógyszerallergiája?" data-speak-lang="hu-HU">Van gyógyszerallergiája?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Структура ответа пациента</h4>
        <table class="conj">
          <tr><th>Часть ответа</th><th>Пример</th></tr>
          <tr>
            <td>главная жалоба</td>
            <td><button class="speak-btn" data-speak-text="Fáj a torkom, és köhögök." data-speak-lang="hu-HU">Fáj a torkom, és köhögök.</button></td>
          </tr>
          <tr>
            <td>время начала</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök, a torkom pedig tegnap óta fáj." data-speak-lang="hu-HU">Három napja köhögök, a torkom pedig tegnap óta fáj.</button></td>
          </tr>
          <tr>
            <td>степень или изменение</td>
            <td><button class="speak-btn" data-speak-text="Nem nagyon erős, de ma rosszabbul érzem magam." data-speak-lang="hu-HU">Nem nagyon erős, de ma rosszabbul érzem magam.</button></td>
          </tr>
          <tr>
            <td>дополнительная информация</td>
            <td><button class="speak-btn" data-speak-text="Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám." data-speak-lang="hu-HU">Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Инструкции врача: вежливое повелительное наклонение</h4>
        <table class="conj">
          <tr><th>Действие</th><th>Инструкция</th></tr>
          <tr>
            <td>сесть</td>
            <td><button class="speak-btn" data-speak-text="Üljön le, kérem." data-speak-lang="hu-HU">Üljön le, kérem.</button></td>
          </tr>
          <tr>
            <td>открыть рот</td>
            <td><button class="speak-btn" data-speak-text="Nyissa ki a száját." data-speak-lang="hu-HU">Nyissa ki a száját.</button></td>
          </tr>
          <tr>
            <td>сделать глубокий вдох</td>
            <td><button class="speak-btn" data-speak-text="Vegyen egy mély levegőt." data-speak-lang="hu-HU">Vegyen egy mély levegőt.</button></td>
          </tr>
          <tr>
            <td>не двигаться</td>
            <td><button class="speak-btn" data-speak-text="Ne mozogjon." data-speak-lang="hu-HU">Ne mozogjon.</button></td>
          </tr>
          <tr>
            <td>подождать</td>
            <td><button class="speak-btn" data-speak-text="Várjon egy pillanatot." data-speak-lang="hu-HU">Várjon egy pillanatot.</button></td>
          </tr>
        </table>

        <div class="note">
          В глаголах с приставкой она может отделяться:
          <button class="speak-btn" data-speak-text="kinyit, nyissa ki" data-speak-lang="hu-HU">kinyit → nyissa ki</button>;
          <button class="speak-btn" data-speak-text="leül, üljön le" data-speak-lang="hu-HU">leül → üljön le</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Рецепт и рекомендация</h4>
        <table class="conj">
          <tr><th>Смысл</th><th>Фраза врача</th></tr>
          <tr>
            <td>выписать лекарство</td>
            <td><button class="speak-btn" data-speak-text="Felírok egy gyógyszert." data-speak-lang="hu-HU">Felírok egy gyógyszert.</button></td>
          </tr>
          <tr>
            <td>оформить электронный рецепт</td>
            <td><button class="speak-btn" data-speak-text="E-receptet írok." data-speak-lang="hu-HU">E-receptet írok.</button></td>
          </tr>
          <tr>
            <td>общая учебная рекомендация</td>
            <td><button class="speak-btn" data-speak-text="Pihenjen, és igyon elegendő folyadékot." data-speak-lang="hu-HU">Pihenjen, és igyon elegendő folyadékot.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Если не понял инструкцию</h4>
        <p><button class="speak-btn" data-speak-text="Nem értettem pontosan." data-speak-lang="hu-HU">Nem értettem pontosan.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></p>
        <p><button class="speak-btn" data-speak-text="Mit jelent ez?" data-speak-lang="hu-HU">Mit jelent ez?</button></p>
        <p><button class="speak-btn" data-speak-text="Le tudná írni?" data-speak-lang="hu-HU">Le tudná írni?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Mi a panaszod? — при официальном обращении</td>
            <td><button class="speak-btn" data-speak-text="Mi a panasza?" data-speak-lang="hu-HU">Mi a panasza?</button></td>
          </tr>
          <tr>
            <td>Nyissa a száját ki.</td>
            <td><button class="speak-btn" data-speak-text="Nyissa ki a száját." data-speak-lang="hu-HU">Nyissa ki a száját.</button></td>
          </tr>
          <tr>
            <td>Vegyen mély levegő.</td>
            <td><button class="speak-btn" data-speak-text="Vegyen egy mély levegőt." data-speak-lang="hu-HU">Vegyen egy mély levegőt.</button></td>
          </tr>
          <tr>
            <td>Írok recept.</td>
            <td><button class="speak-btn" data-speak-text="E-receptet írok." data-speak-lang="hu-HU">E-receptet írok.</button></td>
          </tr>
          <tr>
            <td>Nem értem. — когда речь о только что сказанной инструкции</td>
            <td><button class="speak-btn" data-speak-text="Nem értettem pontosan." data-speak-lang="hu-HU">Nem értettem pontosan.</button></td>
          </tr>
        </table>
      `,
    },
    {
      id: 6,
      eyebrow: "УРОК 26 · 6/11 · В АПТЕКЕ",
      title: "A gyógyszertárban",
      subtitle: "Просьба о средстве, безопасные вопросы и понимание инструкции",
      note: 'В аптеке ученик описывает вымышленный симптом и задаёт вопросы. Конкретный выбор средства, совместимость и дозировка должны исходить от инструкции и специалиста.',
      warn: 'Урок не задаёт универсальную дозировку. Не переноси пример частоты или способа применения на реальный препарат.',
      task: 'Разыграй аптечный диалог: назови вымышленный симптом и длительность, ответь на два вопроса фармацевта и задай минимум три вопроса о применении.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Как попросить средство</h4>
        <table class="conj">
          <tr><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>что-нибудь против симптома</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék valamit fejfájás ellen." data-speak-lang="hu-HU">Szeretnék valamit fejfájás ellen.</button></td>
          </tr>
          <tr>
            <td>что-нибудь от симптома</td>
            <td><button class="speak-btn" data-speak-text="Fejfájásra szeretnék valamit." data-speak-lang="hu-HU">Fejfájásra szeretnék valamit.</button></td>
          </tr>
          <tr>
            <td>описать симптом и длительность</td>
            <td><button class="speak-btn" data-speak-text="Három napja fáj a torkom. Szeretnék valamit torokfájás ellen." data-speak-lang="hu-HU">Három napja fáj a torkom. Szeretnék valamit torokfájás ellen.</button></td>
          </tr>
        </table>

        <div class="note">
          <button class="speak-btn" data-speak-text="ellen" data-speak-lang="hu-HU">ellen</button>
          и окончание
          <span class="hu-word">-ra/-re</span>
          могут быть естественными, но строят фразу по-разному.
          Не соединяй их в одной форме.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что может уточнить фармацевт</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Вопрос</th></tr>
          <tr>
            <td>для кого средство</td>
            <td><button class="speak-btn" data-speak-text="Kinek lesz a készítmény?" data-speak-lang="hu-HU">Kinek lesz a készítmény?</button></td>
          </tr>
          <tr>
            <td>возраст</td>
            <td><button class="speak-btn" data-speak-text="Hány éves a beteg?" data-speak-lang="hu-HU">Hány éves a beteg?</button></td>
          </tr>
          <tr>
            <td>другие лекарства</td>
            <td><button class="speak-btn" data-speak-text="Szed valamilyen más gyógyszert?" data-speak-lang="hu-HU">Szed valamilyen más gyógyszert?</button></td>
          </tr>
          <tr>
            <td>аллергия</td>
            <td><button class="speak-btn" data-speak-text="Van gyógyszerallergiája?" data-speak-lang="hu-HU">Van gyógyszerallergiája?</button></td>
          </tr>
          <tr>
            <td>длительность симптома</td>
            <td><button class="speak-btn" data-speak-text="Mióta tartanak a tünetek?" data-speak-lang="hu-HU">Mióta tartanak a tünetek?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Лекарство или препарат</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Употребление</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyógyszer" data-speak-lang="hu-HU">gyógyszer</button></td>
            <td>лекарство в общем смысле</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="készítmény" data-speak-lang="hu-HU">készítmény</button></td>
            <td>более широкое слово: лекарственный или аптечный препарат</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tabletta" data-speak-lang="hu-HU">tabletta</button></td>
            <td>таблетка</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szirup" data-speak-lang="hu-HU">szirup</button></td>
            <td>сироп</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kenőcs" data-speak-lang="hu-HU">kenőcs</button></td>
            <td>мазь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="orrspray" data-speak-lang="hu-HU">orrspray</button></td>
            <td>назальный спрей</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Bevenni или használni</h4>
        <table class="conj">
          <tr><th>Глагол</th><th>Когда использовать</th><th>Вопрос</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="bevenni" data-speak-lang="hu-HU">bevenni</button></td>
            <td>принять внутрь таблетку, капсулу или другое пероральное средство</td>
            <td><button class="speak-btn" data-speak-text="Hogyan kell bevenni ezt a gyógyszert?" data-speak-lang="hu-HU">Hogyan kell bevenni ezt a gyógyszert?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="használni" data-speak-lang="hu-HU">használni</button></td>
            <td>общий глагол для спрея, мази и других препаратов</td>
            <td><button class="speak-btn" data-speak-text="Hogyan kell használni ezt a készítményt?" data-speak-lang="hu-HU">Hogyan kell használni ezt a készítményt?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Безопасные вопросы об инструкции</h4>
        <p><button class="speak-btn" data-speak-text="Hányszor kell bevennem naponta?" data-speak-lang="hu-HU">Hányszor kell bevennem naponta?</button></p>
        <p><button class="speak-btn" data-speak-text="Étkezés előtt vagy után kell bevennem?" data-speak-lang="hu-HU">Étkezés előtt vagy után kell bevennem?</button></p>
        <p><button class="speak-btn" data-speak-text="Mennyi ideig használhatom?" data-speak-lang="hu-HU">Mennyi ideig használhatom?</button></p>
        <p><button class="speak-btn" data-speak-text="Van valami mellékhatása?" data-speak-lang="hu-HU">Van valami mellékhatása?</button></p>
        <p><button class="speak-btn" data-speak-text="Szedhetem más gyógyszerrel együtt?" data-speak-lang="hu-HU">Szedhetem más gyógyszerrel együtt?</button></p>
        <p><button class="speak-btn" data-speak-text="Recept nélkül kapható?" data-speak-lang="hu-HU">Recept nélkül kapható?</button></p>

        <div class="warn">
          Ответ зависит от конкретного препарата, возраста, других лекарств и инструкции.
          Запомни вопросы, но не заучивай один универсальный ответ.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Короткий учебный диалог</h4>
        <div class="dialogue">
          <p><b>Gyógyszerész:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Miben segíthetek?" data-speak-lang="hu-HU">Jó napot kívánok! Miben segíthetek?</button></p>
          <p><b>Vásárló:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Három napja fáj a torkom. Szeretnék valamit torokfájás ellen." data-speak-lang="hu-HU">Jó napot kívánok! Három napja fáj a torkom. Szeretnék valamit torokfájás ellen.</button></p>
          <p><b>Gyógyszerész:</b> <button class="speak-btn" data-speak-text="Szed valamilyen más gyógyszert, vagy van gyógyszerallergiája?" data-speak-lang="hu-HU">Szed valamilyen más gyógyszert, vagy van gyógyszerallergiája?</button></p>
          <p><b>Vásárló:</b> <button class="speak-btn" data-speak-text="A gyakorló helyzetben nem szedek más gyógyszert, és nincs gyógyszerallergiám." data-speak-lang="hu-HU">A gyakorló helyzetben nem szedek más gyógyszert, és nincs gyógyszerallergiám.</button></p>
          <p><b>Vásárló:</b> <button class="speak-btn" data-speak-text="Hogyan kell használni ezt a készítményt, és van valami mellékhatása?" data-speak-lang="hu-HU">Hogyan kell használni ezt a készítményt, és van valami mellékhatása?</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>fejfájás ellenre</td>
            <td><button class="speak-btn" data-speak-text="fejfájás ellen" data-speak-lang="hu-HU">fejfájás ellen</button> или <button class="speak-btn" data-speak-text="fejfájásra" data-speak-lang="hu-HU">fejfájásra</button></td>
          </tr>
          <tr>
            <td>Hogyan kell venni ezt a gyógyszert?</td>
            <td><button class="speak-btn" data-speak-text="Hogyan kell bevenni ezt a gyógyszert?" data-speak-lang="hu-HU">Hogyan kell bevenni ezt a gyógyszert?</button></td>
          </tr>
          <tr>
            <td>Hányszor kell bevenni én?</td>
            <td><button class="speak-btn" data-speak-text="Hányszor kell bevennem naponta?" data-speak-lang="hu-HU">Hányszor kell bevennem naponta?</button></td>
          </tr>
          <tr>
            <td>Étkezés előtt vagy mögött?</td>
            <td><button class="speak-btn" data-speak-text="Étkezés előtt vagy után?" data-speak-lang="hu-HU">Étkezés előtt vagy után?</button></td>
          </tr>
          <tr>
            <td>Van recept nélkül?</td>
            <td><button class="speak-btn" data-speak-text="Recept nélkül kapható?" data-speak-lang="hu-HU">Recept nélkül kapható?</button></td>
          </tr>
        </table>

        <div class="note">
          После получения реального препарата нужно ориентироваться на его инструкцию
          и уточнения врача или фармацевта, а не на учебный пример.
        </div>
      `,
    },
    {
      id: 7,
      eyebrow: "УРОК 26 · 7/11 · ИНТЕГРИРОВАННАЯ ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "От отдельного симптома к связному описанию состояния",
      note: 'Все ситуации вымышленные. Строй ответ по порядку: основной симптом → время начала → степень или изменение → дополнительная информация → вопрос.',
      warn: 'Három napja означает, что состояние началось три дня назад и продолжается. Három napig обозначает ограниченную длительность — например, состояние продолжалось три дня и завершилось.',
      task: 'Выполни пять этапов и составь связное описание вымышленного состояния из четырёх–шести предложений.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Выбери правильную грамматическую модель</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>боль</td>
            <td><button class="speak-btn" data-speak-text="fáj" data-speak-lang="hu-HU">fáj</button> + моя часть тела</td>
            <td><button class="speak-btn" data-speak-text="Fáj a torkom." data-speak-lang="hu-HU">Fáj a torkom.</button></td>
          </tr>
          <tr>
            <td>состояние с существительным</td>
            <td>притяжательная форма + <button class="speak-btn" data-speak-text="van" data-speak-lang="hu-HU">van</button></td>
            <td><button class="speak-btn" data-speak-text="Lázam van." data-speak-lang="hu-HU">Lázam van.</button></td>
          </tr>
          <tr>
            <td>отдельный симптом-глагол</td>
            <td>личная форма глагола</td>
            <td><button class="speak-btn" data-speak-text="Köhögök és szédülök." data-speak-lang="hu-HU">Köhögök és szédülök.</button></td>
          </tr>
          <tr>
            <td>общее самочувствие</td>
            <td>наречие + <button class="speak-btn" data-speak-text="érzem magam" data-speak-lang="hu-HU">érzem magam</button></td>
            <td><button class="speak-btn" data-speak-text="Rosszul érzem magam." data-speak-lang="hu-HU">Rosszul érzem magam.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Выбери выражение времени</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Смысл</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tegnap óta" data-speak-lang="hu-HU">tegnap óta</button></td>
            <td>с определённого момента до настоящего времени</td>
            <td><button class="speak-btn" data-speak-text="Tegnap óta fáj a torkom." data-speak-lang="hu-HU">Tegnap óta fáj a torkom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="három napja" data-speak-lang="hu-HU">három napja</button></td>
            <td>началось три дня назад и продолжается</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="három napig" data-speak-lang="hu-HU">három napig</button></td>
            <td><span class="hu-word">három napig</span> означает «в течение трёх дней», то есть ограниченный период</td>
            <td><button class="speak-btn" data-speak-text="Három napig köhögtem, de most már jobban vagyok." data-speak-lang="hu-HU">Három napig köhögtem, de most már jobban vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ma reggel" data-speak-lang="hu-HU">ma reggel</button></td>
            <td>конкретное время начала</td>
            <td><button class="speak-btn" data-speak-text="Ma reggel kezdődött." data-speak-lang="hu-HU">Ma reggel kezdődött.</button></td>
          </tr>
        </table>

        <div class="note">
          <span class="hu-word">három napig</span> означает «в течение трёх дней».
          Сравни:
          <button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button>
          — кашель продолжается;
          <button class="speak-btn" data-speak-text="Három napig köhögtem." data-speak-lang="hu-HU">Három napig köhögtem.</button>
          — ограниченный период описан в прошедшем времени.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Добавь степень или изменение</h4>
        <table class="conj">
          <tr><th>Смысл</th><th>Пример</th></tr>
          <tr>
            <td>симптом слабый</td>
            <td><button class="speak-btn" data-speak-text="A fájdalom nem nagyon erős." data-speak-lang="hu-HU">A fájdalom nem nagyon erős.</button></td>
          </tr>
          <tr>
            <td>сегодня немного лучше</td>
            <td><button class="speak-btn" data-speak-text="Ma egy kicsit jobban vagyok." data-speak-lang="hu-HU">Ma egy kicsit jobban vagyok.</button></td>
          </tr>
          <tr>
            <td>сегодня хуже</td>
            <td><button class="speak-btn" data-speak-text="Ma rosszabbul érzem magam." data-speak-lang="hu-HU">Ma rosszabbul érzem magam.</button></td>
          </tr>
          <tr>
            <td>симптом уже исчез</td>
            <td><button class="speak-btn" data-speak-text="Már nem fáj a fejem." data-speak-lang="hu-HU">Már nem fáj a fejem.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Добавь важную информацию и вопрос</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>сообщить о лекарствах</td>
            <td><button class="speak-btn" data-speak-text="Jelenleg nem szedek gyógyszert." data-speak-lang="hu-HU">Jelenleg nem szedek gyógyszert.</button></td>
          </tr>
          <tr>
            <td>сообщить об аллергии</td>
            <td><button class="speak-btn" data-speak-text="Nincs gyógyszerallergiám." data-speak-lang="hu-HU">Nincs gyógyszerallergiám.</button></td>
          </tr>
          <tr>
            <td>попросить рекомендацию</td>
            <td><button class="speak-btn" data-speak-text="Mit javasol?" data-speak-lang="hu-HU">Mit javasol?</button></td>
          </tr>
          <tr>
            <td>попросить повторить</td>
            <td><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></td>
          </tr>
          <tr>
            <td>уточнить инструкцию</td>
            <td><button class="speak-btn" data-speak-text="Nem értettem pontosan." data-speak-lang="hu-HU">Nem értettem pontosan.</button></td>
          </tr>
          <tr>
            <td>спросить о применении</td>
            <td><button class="speak-btn" data-speak-text="Hogyan kell használni ezt a készítményt?" data-speak-lang="hu-HU">Hogyan kell használni ezt a készítményt?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Исправь ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Tegnap óta fáj a torok.</td>
            <td><button class="speak-btn" data-speak-text="Tegnap óta fáj a torkom." data-speak-lang="hu-HU">Tegnap óta fáj a torkom.</button></td>
          </tr>
          <tr>
            <td>Három napig köhögök. — если кашель начался три дня назад и продолжается</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button></td>
          </tr>
          <tr>
            <td>Láz vagyok.</td>
            <td><button class="speak-btn" data-speak-text="Lázam van." data-speak-lang="hu-HU">Lázam van.</button></td>
          </tr>
          <tr>
            <td>Ma jobban van én.</td>
            <td><button class="speak-btn" data-speak-text="Ma jobban vagyok." data-speak-lang="hu-HU">Ma jobban vagyok.</button></td>
          </tr>
          <tr>
            <td>Nem szedek gyógyszer.</td>
            <td><button class="speak-btn" data-speak-text="Nem szedek gyógyszert." data-speak-lang="hu-HU">Nem szedek gyógyszert.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель связного ответа</h4>
        <p><button class="speak-btn" data-speak-text="Három napja köhögök, és tegnap óta fáj a torkom." data-speak-lang="hu-HU">Három napja köhögök, és tegnap óta fáj a torkom.</button></p>
        <p><button class="speak-btn" data-speak-text="Ma egy kicsit rosszabbul érzem magam, de a fájdalom nem nagyon erős." data-speak-lang="hu-HU">Ma egy kicsit rosszabbul érzem magam, de a fájdalom nem nagyon erős.</button></p>
        <p><button class="speak-btn" data-speak-text="Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám." data-speak-lang="hu-HU">Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám.</button></p>
        <p><button class="speak-btn" data-speak-text="Mit javasol?" data-speak-lang="hu-HU">Mit javasol?</button></p>

        <div class="task">
          Составь собственное вымышленное описание из четырёх–шести предложений.
          Оно должно содержать минимум два симптома, время начала,
          степень или изменение, одну дополнительную информацию и один вопрос.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: "УРОК 26 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Полный учебный диалог: жалоба, уточнения, осмотр и понимание рекомендации",
      note: 'Первый участник — врач, второй — пациент. Все симптомы и ответы являются вымышленными и используются только для языковой практики.',
      warn: 'Диалог не ставит диагноз. В реальной ситуации пациент сообщает факты, а медицинскую оценку и рекомендации даёт специалист.',
      task: 'Ответь на вопросы по содержанию, затем разыграй диалог с другим вымышленным симптомом и поменяйся ролями.',
      body: `
        <div class="dialogue">
          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Mi a panasza?" data-speak-lang="hu-HU">Jó napot kívánok! Mi a panasza?</button></p>

          <p><b>Beteg:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Nagyon fáj a fejem, köhögök, és rosszul érzem magam." data-speak-lang="hu-HU">Jó napot kívánok! Nagyon fáj a fejem, köhögök, és rosszul érzem magam.</button></p>

          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Mikor kezdődtek a tünetek?" data-speak-lang="hu-HU">Mikor kezdődtek a tünetek?</button></p>

          <p><b>Beteg:</b> <button class="speak-btn" data-speak-text="Két napja kezdődtek. Ma reggel harmincnyolc fokos lázam volt." data-speak-lang="hu-HU">Két napja kezdődtek. Ma reggel harmincnyolc fokos lázam volt.</button></p>

          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Mennyire erős a fejfájása?" data-speak-lang="hu-HU">Mennyire erős a fejfájása?</button></p>

          <p><b>Beteg:</b> <button class="speak-btn" data-speak-text="Elég erős, és ma rosszabb, mint tegnap." data-speak-lang="hu-HU">Elég erős, és ma rosszabb, mint tegnap.</button></p>

          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Szed jelenleg valamilyen gyógyszert? Van gyógyszerallergiája?" data-speak-lang="hu-HU">Szed jelenleg valamilyen gyógyszert? Van gyógyszerallergiája?</button></p>

          <p><b>Beteg:</b> <button class="speak-btn" data-speak-text="Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám." data-speak-lang="hu-HU">Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám.</button></p>

          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Rendben. Üljön le, kérem. Nyissa ki a száját, megnézem a torkát." data-speak-lang="hu-HU">Rendben. Üljön le, kérem. Nyissa ki a száját, megnézem a torkát.</button></p>

          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Most vegyen egy mély levegőt, és ne mozogjon." data-speak-lang="hu-HU">Most vegyen egy mély levegőt, és ne mozogjon.</button></p>

          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Pihenjen, igyon elegendő folyadékot, és olvassa el minden készítmény használati útmutatóját." data-speak-lang="hu-HU">Pihenjen, igyon elegendő folyadékot, és olvassa el minden készítmény használati útmutatóját.</button></p>

          <p><b>Beteg:</b> <button class="speak-btn" data-speak-text="Elnézést, nem értettem pontosan. Kérem, mondja még egyszer." data-speak-lang="hu-HU">Elnézést, nem értettem pontosan. Kérem, mondja még egyszer.</button></p>

          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Pihenjen, igyon vizet vagy teát, és bizonytalanság esetén kérdezze meg az orvost vagy a gyógyszerészt." data-speak-lang="hu-HU">Pihenjen, igyon vizet vagy teát, és bizonytalanság esetén kérdezze meg az orvost vagy a gyógyszerészt.</button></p>

          <p><b>Beteg:</b> <button class="speak-btn" data-speak-text="Rendben, értem. Köszönöm szépen. Viszontlátásra!" data-speak-lang="hu-HU">Rendben, értem. Köszönöm szépen. Viszontlátásra!</button></p>

          <p><b>Orvos:</b> <button class="speak-btn" data-speak-text="Viszontlátásra!" data-speak-lang="hu-HU">Viszontlátásra!</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что делает каждый блок</h4>
        <table class="conj">
          <tr><th>Блок</th><th>Коммуникативная функция</th></tr>
          <tr><td>жалоба</td><td>назвать основные симптомы и самочувствие</td></tr>
          <tr><td>начало</td><td>сказать, когда появились симптомы</td></tr>
          <tr><td>степень и изменение</td><td>описать силу и сравнить с предыдущим состоянием</td></tr>
          <tr><td>лекарства и аллергия</td><td>сообщить важную фактическую информацию</td></tr>
          <tr><td>осмотр</td><td>понять вежливые инструкции врача</td></tr>
          <tr><td>repair-реплика</td><td>сообщить, что инструкция непонятна, и попросить повторить</td></tr>
          <tr><td>подтверждение</td><td>кратко показать, что основная информация понята</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Проверь понимание</h4>
        <ol class="tasklist">
          <li>Какие три жалобы называет пациент?</li>
          <li>Когда начались симптомы?</li>
          <li>Какая температура была утром?</li>
          <li>Как изменилась головная боль?</li>
          <li>Что пациент сообщает о лекарствах и аллергии?</li>
          <li>Какие три инструкции даёт врач во время осмотра?</li>
          <li>Как пациент просит повторить рекомендацию?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Ролевая замена</h4>
        <div class="task">
          Выбери другой вымышленный сценарий: боль в горле, боль в животе или головокружение.
          Замени симптомы, время начала, степень, изменение состояния
          и дополнительную информацию. Не добавляй диагноз и конкретную дозировку.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Mi a panaszod? — официальное общение</td>
            <td><button class="speak-btn" data-speak-text="Mi a panasza?" data-speak-lang="hu-HU">Mi a panasza?</button></td>
          </tr>
          <tr>
            <td>Két napig kezdődött.</td>
            <td><button class="speak-btn" data-speak-text="Két napja kezdődött." data-speak-lang="hu-HU">Két napja kezdődött.</button></td>
          </tr>
          <tr>
            <td>Harmincnyolc fok lázam volt.</td>
            <td><button class="speak-btn" data-speak-text="Harmincnyolc fokos lázam volt." data-speak-lang="hu-HU">Harmincnyolc fokos lázam volt.</button></td>
          </tr>
          <tr>
            <td>Nyissa a száját ki.</td>
            <td><button class="speak-btn" data-speak-text="Nyissa ki a száját." data-speak-lang="hu-HU">Nyissa ki a száját.</button></td>
          </tr>
          <tr>
            <td>Nem értem pontosan. — о только что сказанной инструкции</td>
            <td><button class="speak-btn" data-speak-text="Nem értettem pontosan." data-speak-lang="hu-HU">Nem értettem pontosan.</button></td>
          </tr>
        </table>
      `,
    },
    {
      id: 9,
      eyebrow: "УРОК 26 · 9/11 · ИТОГОВАЯ ПРАКТИКА",
      title: "Gyakorlatok",
      subtitle: "Контроль навыков: симптом, время, врач, аптека и понимание инструкции",
      note: 'Все ситуации вымышленные. Сначала выполни задания без подсказок, затем сравни ответы с моделями и исправь только реальные ошибки.',
      warn: 'Примеры инструкций проверяют понимание венгерского языка. Они не являются универсальной дозировкой или рекомендацией для реального препарата.',
      task: 'Пройди шесть этапов. В конце подготовь устное описание состояния и письменное сообщение в кабинет врача.',
      activities: L26_ACTIVITIES,
      optionalSpeaking: L26_OPTIONAL_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Боль и части тела</h4>
        <ol class="tasklist">
          <li>Составь реплики для слов: <span class="hu-word">fej</span>, <span class="hu-word">torok</span>, <span class="hu-word">has</span>, <span class="hu-word">fog</span>, <span class="hu-word">hát</span>.</li>
          <li>Скажи, что болит одна нога, а затем — обе ноги.</li>
          <li>Задай вопросы «Что болит?» и «Где болит?».</li>
        </ol>

        <table class="conj">
          <tr><th>Контрольная модель</th><th>Что проверяется</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU">Fáj a fejem.</button></td>
            <td>единственное число и притяжательная форма</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Fáj a lábam. Fájnak a lábaim." data-speak-lang="hu-HU">Fáj a lábam. Fájnak a lábaim.</button></td>
            <td>согласование fáj / fájnak</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mi fáj? Hol fáj?" data-speak-lang="hu-HU">Mi fáj? Hol fáj?</button></td>
            <td>короткие вопросы о боли</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Выбери модель симптома</h4>
        <ol class="tasklist">
          <li>Переведи: «У меня температура и насморк».</li>
          <li>Скажи, что кашляешь и у тебя кружится голова.</li>
          <li>Различи: тебе холодно, тебя знобит, ты простудился.</li>
          <li>Скажи, что сегодня тебе хуже, а затем — что уже лучше.</li>
        </ol>

        <p><button class="speak-btn" data-speak-text="Lázam van, és náthás vagyok." data-speak-lang="hu-HU">Lázam van, és náthás vagyok.</button></p>
        <p><button class="speak-btn" data-speak-text="Köhögök és szédülök." data-speak-lang="hu-HU">Köhögök és szédülök.</button></p>
        <p><button class="speak-btn" data-speak-text="Fázom. Ráz a hideg. Megfáztam." data-speak-lang="hu-HU">Fázom. Ráz a hideg. Megfáztam.</button></p>
        <p><button class="speak-btn" data-speak-text="Ma rosszabbul vagyok. Most már jobban vagyok." data-speak-lang="hu-HU">Ma rosszabbul vagyok. Most már jobban vagyok.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Время и изменение состояния</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Контрольная модель</th></tr>
          <tr>
            <td>со вчерашнего дня болит горло</td>
            <td><button class="speak-btn" data-speak-text="Tegnap óta fáj a torkom." data-speak-lang="hu-HU">Tegnap óta fáj a torkom.</button></td>
          </tr>
          <tr>
            <td>кашель начался три дня назад и продолжается</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button></td>
          </tr>
          <tr>
            <td>кашель продолжался три дня и завершился</td>
            <td><button class="speak-btn" data-speak-text="Három napig köhögtem." data-speak-lang="hu-HU">Három napig köhögtem.</button></td>
          </tr>
          <tr>
            <td>состояние началось сегодня утром</td>
            <td><button class="speak-btn" data-speak-text="Ma reggel kezdődött." data-speak-lang="hu-HU">Ma reggel kezdődött.</button></td>
          </tr>
          <tr>
            <td>сегодня немного лучше</td>
            <td><button class="speak-btn" data-speak-text="Ma egy kicsit jobban vagyok." data-speak-lang="hu-HU">Ma egy kicsit jobban vagyok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Мини-диалог у врача</h4>
        <p>Ответь на вопросы полными, но короткими репликами:</p>
        <ol class="tasklist">
          <li><button class="speak-btn" data-speak-text="Mi a panasza?" data-speak-lang="hu-HU">Mi a panasza?</button></li>
          <li><button class="speak-btn" data-speak-text="Mikor kezdődtek a tünetek?" data-speak-lang="hu-HU">Mikor kezdődtek a tünetek?</button></li>
          <li><button class="speak-btn" data-speak-text="Mennyire erős a fájdalom?" data-speak-lang="hu-HU">Mennyire erős a fájdalom?</button></li>
          <li><button class="speak-btn" data-speak-text="Szed jelenleg valamilyen gyógyszert?" data-speak-lang="hu-HU">Szed jelenleg valamilyen gyógyszert?</button></li>
          <li><button class="speak-btn" data-speak-text="Van gyógyszerallergiája?" data-speak-lang="hu-HU">Van gyógyszerallergiája?</button></li>
        </ol>

        <p><button class="speak-btn" data-speak-text="Három napja köhögök, és tegnap óta fáj a torkom." data-speak-lang="hu-HU">Három napja köhögök, és tegnap óta fáj a torkom.</button></p>
        <p><button class="speak-btn" data-speak-text="A fájdalom nem nagyon erős, de ma rosszabbul érzem magam." data-speak-lang="hu-HU">A fájdalom nem nagyon erős, de ma rosszabbul érzem magam.</button></p>
        <p><button class="speak-btn" data-speak-text="Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám." data-speak-lang="hu-HU">Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Аптека и понимание инструкции</h4>
        <ol class="tasklist">
          <li>Попроси что-нибудь от кашля двумя способами.</li>
          <li>Спроси, как использовать препарат.</li>
          <li>Спроси о частоте, связи с едой и возможном побочном эффекте.</li>
          <li>Переведи учебную инструкцию, не воспринимая её как реальную дозировку.</li>
        </ol>

        <p><button class="speak-btn" data-speak-text="Szeretnék valamit köhögés ellen." data-speak-lang="hu-HU">Szeretnék valamit köhögés ellen.</button></p>
        <p><button class="speak-btn" data-speak-text="Köhögésre szeretnék valamit." data-speak-lang="hu-HU">Köhögésre szeretnék valamit.</button></p>
        <p><button class="speak-btn" data-speak-text="Hogyan kell használni ezt a készítményt?" data-speak-lang="hu-HU">Hogyan kell használni ezt a készítményt?</button></p>
        <p><button class="speak-btn" data-speak-text="Hányszor kell használnom naponta? Étkezés előtt vagy után? Van valami mellékhatása?" data-speak-lang="hu-HU">Hányszor kell használnom naponta? Étkezés előtt vagy után? Van valami mellékhatása?</button></p>

        <div class="note">
          Языковая модель для понимания инструкции:
          <button class="speak-btn" data-speak-text="Vegye be ezt a gyógyszert naponta kétszer." data-speak-lang="hu-HU">Vegye be ezt a gyógyszert naponta kétszer.</button>
          Конкретную частоту реального препарата определяют его инструкция и специалист.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Repair-реплики и итоговые продукты</h4>
        <p><button class="speak-btn" data-speak-text="Nem értettem pontosan." data-speak-lang="hu-HU">Nem értettem pontosan.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></p>
        <p><button class="speak-btn" data-speak-text="Le tudná írni?" data-speak-lang="hu-HU">Le tudná írni?</button></p>

        <table class="conj">
          <tr><th>Устно</th><th>Письменно</th></tr>
          <tr>
            <td>около двух минут: симптомы, начало, изменение, действие и вопрос</td>
            <td>сообщение в кабинет врача объёмом сто–сто двадцать слов</td>
          </tr>
          <tr>
            <td>без диагноза и назначения лечения</td>
            <td>жалоба, развитие, предпринятое действие, вопрос и просьба о записи</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Самопроверка</h4>
        <ul class="tick">
          <li>я согласую формы единственного и множественного числа;</li>
          <li>я выбираю подходящую модель симптома;</li>
          <li>я различаю исходный момент, продолжающееся состояние и ограниченный период;</li>
          <li>я отвечаю на вопросы врача коротко и конкретно;</li>
          <li>я сообщаю о лекарствах и аллергии только как факты сценария;</li>
          <li>я задаю безопасные вопросы в аптеке;</li>
          <li>я прошу повторить или записать непонятную инструкцию;</li>
          <li>я не превращаю языковой пример в медицинскую рекомендацию.</li>
        </ul>
      `,
    },
    {
      id: 10,
      eyebrow: "УРОК 26 · 10/11 · ПЕРЕХОД",
      title: "Előretekintés",
      subtitle: "Как навыки уточнения переходят в поездку, транспорт и отель",
      note: 'В уроке 27 меняется ситуация, но сохраняется стратегия: кратко сообщить проблему, назвать время или дату, уточнить непонятное и задать практический вопрос.',
      warn: 'Этот слайд только готовит к новой теме. Полные правила покупки билетов, пересадок, бронирования и маршрутов изучаются в уроке 27.',
      task: 'Прочитай мосты между темами и отметь, какие коммуникативные действия уже знакомы.',
      body: `
        <p>
          Следующая тема — поездка: транспорт, билет, отправление, путь,
          задержка, пересадка, отель, бронирование и ориентация в городе.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пять переносимых навыков</h4>
        <table class="conj">
          <tr><th>Навык из урока 26</th><th>Применение в уроке 27</th></tr>
          <tr>
            <td>кратко сообщить проблему</td>
            <td>объяснить задержку, пропущенную пересадку или ошибку в бронировании</td>
          </tr>
          <tr>
            <td>назвать время и длительность</td>
            <td>уточнить отправление, задержку, даты и количество ночей</td>
          </tr>
          <tr>
            <td>попросить повторить</td>
            <td>переспросить сотрудника вокзала или администратора отеля</td>
          </tr>
          <tr>
            <td>понять инструкцию</td>
            <td>следовать объяснению пути или указанию о пересадке</td>
          </tr>
          <tr>
            <td>задать практический вопрос</td>
            <td>уточнить путь, альтернативный поезд, завтрак или свободный номер</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мосты между ситуациями</h4>
        <table class="conj">
          <tr><th>Здоровье</th><th>Поездка</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor kezdődtek a tünetek?" data-speak-lang="hu-HU">Mikor kezdődtek a tünetek?</button></td>
            <td><button class="speak-btn" data-speak-text="Mikor indul a vonat?" data-speak-lang="hu-HU">Mikor indul a vonat?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mióta érzi ezt?" data-speak-lang="hu-HU">Mióta érzi ezt?</button></td>
            <td><button class="speak-btn" data-speak-text="Mennyit késik a vonat?" data-speak-lang="hu-HU">Mennyit késik a vonat?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></td>
            <td><button class="speak-btn" data-speak-text="Meg tudná nézni még egyszer?" data-speak-lang="hu-HU">Meg tudná nézni még egyszer?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hogyan kell használni ezt a készítményt?" data-speak-lang="hu-HU">Hogyan kell használni ezt a készítményt?</button></td>
            <td><button class="speak-btn" data-speak-text="Hogyan jutok el a pályaudvarra?" data-speak-lang="hu-HU">Hogyan jutok el a pályaudvarra?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit javasol?" data-speak-lang="hu-HU">Mit javasol?</button></td>
            <td><button class="speak-btn" data-speak-text="Van esetleg másik vonat?" data-speak-lang="hu-HU">Van esetleg másik vonat?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что появится в уроке 27</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Первая контрольная реплика</th></tr>
          <tr>
            <td>билет</td>
            <td><button class="speak-btn" data-speak-text="Egy retúrjegyet kérek." data-speak-lang="hu-HU">Egy retúrjegyet kérek.</button></td>
          </tr>
          <tr>
            <td>отправление и путь</td>
            <td><button class="speak-btn" data-speak-text="Melyik vágányról indul?" data-speak-lang="hu-HU">Melyik vágányról indul?</button></td>
          </tr>
          <tr>
            <td>пересадка</td>
            <td><button class="speak-btn" data-speak-text="Át kell szállni?" data-speak-lang="hu-HU">Át kell szállni?</button></td>
          </tr>
          <tr>
            <td>пропущенное соединение</td>
            <td><button class="speak-btn" data-speak-text="Lekéstem a csatlakozást." data-speak-lang="hu-HU">Lekéstem a csatlakozást.</button></td>
          </tr>
          <tr>
            <td>бронирование отеля</td>
            <td><button class="speak-btn" data-speak-text="Van egy foglalásom Kovács névre." data-speak-lang="hu-HU">Van egy foglalásom Kovács névre.</button></td>
          </tr>
          <tr>
            <td>длительность проживания</td>
            <td><button class="speak-btn" data-speak-text="Két éjszakára foglaltam." data-speak-lang="hu-HU">Két éjszakára foglaltam.</button></td>
          </tr>
          <tr>
            <td>условия бронирования</td>
            <td><button class="speak-btn" data-speak-text="A reggeli benne van az árban?" data-speak-lang="hu-HU">A reggeli benne van az árban?</button></td>
          </tr>
          <tr>
            <td>маршрут</td>
            <td><button class="speak-btn" data-speak-text="Menjen egyenesen, aztán forduljon balra." data-speak-lang="hu-HU">Menjen egyenesen, aztán forduljon balra.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Готовность к переходу</h4>
        <ul class="tick">
          <li>я могу назвать точное время или длительность;</li>
          <li>я умею сообщить проблему коротко и без лишних деталей;</li>
          <li>я могу попросить повторить или проверить ещё раз;</li>
          <li>я понимаю простую последовательность действий;</li>
          <li>я задаю один конкретный практический вопрос;</li>
          <li>я вежливо подтверждаю решение и завершаю разговор.</li>
        </ul>

        <div class="note">
          Граница перехода: на этом слайде новые фразы только предварительно знакомят с темой.
          Их подробная грамматика, произношение и применение будут разобраны в уроке 27.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 26 · 11/11 · ИТОГ",
      title: "Összefoglalás",
      subtitle: "Итоговая карта общения о здоровье",
      note: 'Главный результат урока — не список медицинских слов, а способность ясно описать вымышленное состояние, ответить на вопросы, понять простую инструкцию и уточнить непонятное.',
      warn: 'Урок тренирует венгерский язык и не ставит диагноз. При реальных сильных, внезапных или ухудшающихся симптомах нужна профессиональная медицинская помощь.',
      task: 'Пройди итоговую карту, исправь контрольные ошибки и выполни три согласованных финальных задания.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Боль: число и притяжательная форма</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Модель</th></tr>
          <tr>
            <td>болит одна часть тела</td>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU">Fáj a fejem.</button></td>
          </tr>
          <tr>
            <td>болит горло</td>
            <td><button class="speak-btn" data-speak-text="Fáj a torkom." data-speak-lang="hu-HU">Fáj a torkom.</button></td>
          </tr>
          <tr>
            <td>болит живот</td>
            <td><button class="speak-btn" data-speak-text="Fáj a hasam." data-speak-lang="hu-HU">Fáj a hasam.</button></td>
          </tr>
          <tr>
            <td>болят несколько частей тела</td>
            <td><button class="speak-btn" data-speak-text="Fájnak a lábaim." data-speak-lang="hu-HU">Fájnak a lábaim.</button></td>
          </tr>
          <tr>
            <td>уточнить боль</td>
            <td><button class="speak-btn" data-speak-text="Mi fáj? Hol fáj?" data-speak-lang="hu-HU">Mi fáj? Hol fáj?</button></td>
          </tr>
        </table>

        <div class="note">
          Единственная часть тела требует
          <button class="speak-btn" data-speak-text="fáj" data-speak-lang="hu-HU">fáj</button>,
          несколько частей —
          <button class="speak-btn" data-speak-text="fájnak" data-speak-lang="hu-HU">fájnak</button>.
          Принадлежность выражается формой части тела:
          <button class="speak-btn" data-speak-text="fejem, torkom, hasam, lábaim" data-speak-lang="hu-HU">fejem, torkom, hasam, lábaim</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Выбери правильную модель симптома</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Пример</th></tr>
          <tr>
            <td>существительное + наличие</td>
            <td><button class="speak-btn" data-speak-text="Lázam van. Hányingerem van." data-speak-lang="hu-HU">Lázam van. Hányingerem van.</button></td>
          </tr>
          <tr>
            <td>личный глагол</td>
            <td><button class="speak-btn" data-speak-text="Köhögök és szédülök." data-speak-lang="hu-HU">Köhögök és szédülök.</button></td>
          </tr>
          <tr>
            <td>общее состояние</td>
            <td><button class="speak-btn" data-speak-text="Rosszul érzem magam. Most már jobban vagyok." data-speak-lang="hu-HU">Rosszul érzem magam. Most már jobban vagyok.</button></td>
          </tr>
          <tr>
            <td>ощущение холода, озноб, простуда</td>
            <td><button class="speak-btn" data-speak-text="Fázom. Ráz a hideg. Megfáztam." data-speak-lang="hu-HU">Fázom. Ráz a hideg. Megfáztam.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Время, длительность и изменение</h4>
        <table class="conj">
          <tr><th>Значение</th><th>Пример</th></tr>
          <tr>
            <td>с определённого момента до настоящего времени</td>
            <td><button class="speak-btn" data-speak-text="Tegnap óta fáj a torkom." data-speak-lang="hu-HU">Tegnap óta fáj a torkom.</button></td>
          </tr>
          <tr>
            <td>началось три дня назад и продолжается</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button></td>
          </tr>
          <tr>
            <td>продолжалось ограниченный период</td>
            <td><button class="speak-btn" data-speak-text="Három napig köhögtem." data-speak-lang="hu-HU">Három napig köhögtem.</button></td>
          </tr>
          <tr>
            <td>конкретное начало</td>
            <td><button class="speak-btn" data-speak-text="Ma reggel kezdődött." data-speak-lang="hu-HU">Ma reggel kezdődött.</button></td>
          </tr>
          <tr>
            <td>ухудшение и улучшение</td>
            <td><button class="speak-btn" data-speak-text="Ma rosszabbul vagyok. Most már jobban vagyok." data-speak-lang="hu-HU">Ma rosszabbul vagyok. Most már jobban vagyok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. У врача: факты, вопросы и инструкции</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>главная жалоба</td>
            <td><button class="speak-btn" data-speak-text="Mi a panasza?" data-speak-lang="hu-HU">Mi a panasza?</button></td>
          </tr>
          <tr>
            <td>начало симптомов</td>
            <td><button class="speak-btn" data-speak-text="Mikor kezdődtek a tünetek?" data-speak-lang="hu-HU">Mikor kezdődtek a tünetek?</button></td>
          </tr>
          <tr>
            <td>сила боли</td>
            <td><button class="speak-btn" data-speak-text="Mennyire erős a fájdalom?" data-speak-lang="hu-HU">Mennyire erős a fájdalom?</button></td>
          </tr>
          <tr>
            <td>другие лекарства</td>
            <td><button class="speak-btn" data-speak-text="Szed jelenleg valamilyen gyógyszert?" data-speak-lang="hu-HU">Szed jelenleg valamilyen gyógyszert?</button></td>
          </tr>
          <tr>
            <td>лекарственная аллергия</td>
            <td><button class="speak-btn" data-speak-text="Van gyógyszerallergiája?" data-speak-lang="hu-HU">Van gyógyszerallergiája?</button></td>
          </tr>
          <tr>
            <td>открыть рот</td>
            <td><button class="speak-btn" data-speak-text="Nyissa ki a száját." data-speak-lang="hu-HU">Nyissa ki a száját.</button></td>
          </tr>
          <tr>
            <td>сделать глубокий вдох</td>
            <td><button class="speak-btn" data-speak-text="Vegyen egy mély levegőt." data-speak-lang="hu-HU">Vegyen egy mély levegőt.</button></td>
          </tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám." data-speak-lang="hu-HU">Jelenleg nem szedek gyógyszert, és nincs gyógyszerallergiám.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. В аптеке: просьба и безопасные вопросы</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>попросить средство против кашля</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék valamit köhögés ellen." data-speak-lang="hu-HU">Szeretnék valamit köhögés ellen.</button></td>
          </tr>
          <tr>
            <td>попросить средство от кашля</td>
            <td><button class="speak-btn" data-speak-text="Köhögésre szeretnék valamit." data-speak-lang="hu-HU">Köhögésre szeretnék valamit.</button></td>
          </tr>
          <tr>
            <td>приём внутрь</td>
            <td><button class="speak-btn" data-speak-text="Hogyan kell bevenni ezt a gyógyszert?" data-speak-lang="hu-HU">Hogyan kell bevenni ezt a gyógyszert?</button></td>
          </tr>
          <tr>
            <td>общее применение препарата</td>
            <td><button class="speak-btn" data-speak-text="Hogyan kell használni ezt a készítményt?" data-speak-lang="hu-HU">Hogyan kell használni ezt a készítményt?</button></td>
          </tr>
          <tr>
            <td>частота и связь с едой</td>
            <td><button class="speak-btn" data-speak-text="Hányszor kell használnom naponta? Étkezés előtt vagy után?" data-speak-lang="hu-HU">Hányszor kell használnom naponta? Étkezés előtt vagy után?</button></td>
          </tr>
          <tr>
            <td>побочный эффект и рецепт</td>
            <td><button class="speak-btn" data-speak-text="Van valami mellékhatása? Recept nélkül kapható?" data-speak-lang="hu-HU">Van valami mellékhatása? Recept nélkül kapható?</button></td>
          </tr>
        </table>

        <div class="warn">
          У этих вопросов нет одного универсального ответа.
          Конкретное применение зависит от препарата, инструкции и ответа специалиста.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Если не понял</h4>
        <p><button class="speak-btn" data-speak-text="Nem értettem pontosan." data-speak-lang="hu-HU">Nem értettem pontosan.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></p>
        <p><button class="speak-btn" data-speak-text="Mit jelent ez?" data-speak-lang="hu-HU">Mit jelent ez?</button></p>
        <p><button class="speak-btn" data-speak-text="Le tudná írni?" data-speak-lang="hu-HU">Le tudná írni?</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Контрольные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Fáj a fej.</td>
            <td><button class="speak-btn" data-speak-text="Fáj a fejem." data-speak-lang="hu-HU">Fáj a fejem.</button></td>
          </tr>
          <tr>
            <td>Fáj a lábaim.</td>
            <td><button class="speak-btn" data-speak-text="Fájnak a lábaim." data-speak-lang="hu-HU">Fájnak a lábaim.</button></td>
          </tr>
          <tr>
            <td>Lázom van.</td>
            <td><button class="speak-btn" data-speak-text="Lázam van." data-speak-lang="hu-HU">Lázam van.</button></td>
          </tr>
          <tr>
            <td>Fázom. — в значении «я простудился»</td>
            <td><button class="speak-btn" data-speak-text="Megfáztam." data-speak-lang="hu-HU">Megfáztam.</button></td>
          </tr>
          <tr>
            <td>Három napig köhögök. — если состояние продолжается</td>
            <td><button class="speak-btn" data-speak-text="Három napja köhögök." data-speak-lang="hu-HU">Három napja köhögök.</button></td>
          </tr>
          <tr>
            <td>Mi a panaszod? — официальное общение</td>
            <td><button class="speak-btn" data-speak-text="Mi a panasza?" data-speak-lang="hu-HU">Mi a panasza?</button></td>
          </tr>
          <tr>
            <td>valamit köhögés ellenre</td>
            <td><button class="speak-btn" data-speak-text="valamit köhögés ellen" data-speak-lang="hu-HU">valamit köhögés ellen</button> или <button class="speak-btn" data-speak-text="valamit köhögésre" data-speak-lang="hu-HU">valamit köhögésre</button></td>
          </tr>
          <tr>
            <td>Nyissa a száját ki.</td>
            <td><button class="speak-btn" data-speak-text="Nyissa ki a száját." data-speak-lang="hu-HU">Nyissa ki a száját.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Урок усвоен, если ты можешь</h4>
        <ul class="tick">
          <li>назвать одну или несколько болящих частей тела;</li>
          <li>выбрать правильную грамматическую модель симптома;</li>
          <li>указать начало, длительность и изменение состояния;</li>
          <li>ответить на вопросы врача коротко и конкретно;</li>
          <li>понять простую инструкцию и попросить повторить;</li>
          <li>попросить средство в аптеке и задать безопасные вопросы;</li>
          <li>сообщить о лекарствах и аллергии как о фактах сценария;</li>
          <li>не превращать языковой пример в диагноз или назначение.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Финальное задание</h4>
        <div class="task">
          Подготовь три согласованных продукта по одному вымышленному сценарию:
          устное описание состояния из шести–восьми предложений;
          диалог у врача или в аптеке;
          сообщение в кабинет врача объёмом сто–сто двадцать слов.
          Во всех трёх продуктах должны совпадать симптомы, время начала,
          изменение состояния и важная дополнительная информация.
        </div>

        <div class="note">
          Граница урока 26: освоены базовые языковые модели повседневного общения о здоровье уровня B1.
          Диагностика, выбор лечения и индивидуальная дозировка в учебные цели не входят.
        </div>
      `,
    }
  ],
  vocabulary: [
    { id: "l26_v1", hu: "fejfájás", ru: "головная боль", category: "Здоровье", exampleSentence: "Fejfájásom van.",
        ipa: "[fˈɛjfɒːjɒːʃ]"
    },
    { id: "l26_v2", hu: "gyógyszer", ru: "лекарство", category: "Здоровье", exampleSentence: "Beveszem a gyógyszert.",
        ipa: "[ɟˈoːɟʃɛr]"
    },
    { id: "l26_v3", hu: "recept", ru: "рецепт (медицинский)", category: "Здоровье", exampleSentence: "Az orvos receptet írt.",
        ipa: "[rˈɛtsɛpt]"
    },
    { id: "l26_v4", hu: "gyógyszertár", ru: "аптека", category: "Здоровье", exampleSentence: "A gyógyszertárban vagyok.",
        ipa: "[ɟˈoːɟʃɛrtɒːr]"
    }
  ],
    quiz: [
    {
      id: 2601,
      question: 'Как сказать «У меня болит голова» по-венгерски?',
      options: [
        'Fáj a fejem',
        'Fáj én fej',
        'Fej van fáj',
        'Nekem fej fáj'
      ],
      correctIndex: 0,
      explanation: 'Конструкция: Fáj + a + притяжательная форма части тела. fej → fejem (моя голова). Правильно: Fáj a fejem.'
    },
    {
      id: 2602,
      question: 'Что означает фраза «Lázam van» по-венгерски?',
      options: [
        'У меня температура',
        'У меня кружится голова',
        'Я простудился',
        'Я болен'
      ],
      correctIndex: 0,
      explanation: '«Lázam van» означает «У меня температура». Láz = жар/температура, -am = притяжательный суффикс 1-го лица (моя).'
    },
    {
      id: 2603,
      question: 'Как спросить у врача «На что жалуетесь?» по-венгерски?',
      options: [
        'Mi a panasz?',
        'Hogy van?',
        'Mit csinál?',
        'Hol fáj?'
      ],
      correctIndex: 0,
      explanation: '«Mi a panasz?» – стандартный вопрос врача о жалобах пациента, переводится как «На что жалуетесь?» (урок 26, слайд 5).'
    },
    {
      id: 2604,
      question: 'Как сказать «Я кашляю» по-венгерски?',
      options: [
        'Köhögök',
        'Köhög',
        'Köhögnék',
        'Köhögni'
      ],
      correctIndex: 0,
      explanation: 'Глагол «köhög» (кашлять) в 1-м лице единственного числа: köhög + ök = köhögök (я кашляю).'
    },
    {
      id: 2605,
      question: 'Какой вариант правильно использует ellen в просьбе о средстве от головной боли?',
      options: [
        'Szeretnék valamit fejfájás ellen.',
        'Szeretnék valamit fejfájástól.',
        'Szeretnék valamit fejfájásban.',
        'Szeretnék valamit fejfájással.'
      ],
      correctIndex: 0,
      explanation: 'Ellen означает «против / от»: fejfájás ellen. Форма fejfájásra тоже может звучать естественно в такой просьбе, поэтому она намеренно не используется как неправильный вариант.'
    },
    {
      id: 2606,
      question: 'Какое наклонение используется во фразе врача «Nyissa ki a száját!» (Откройте рот!)?',
      options: [
        'Повелительное наклонение (felszólító mód)',
        'Изъявительное настоящее',
        'Условное наклонение',
        'Прошедшее время'
      ],
      correctIndex: 0,
      explanation: '«Nyissa» – это повелительное наклонение от глагола «nyit» (открывать) с окончанием -ja (вежливая форма на «Вы»). Повелительное наклонение мы изучали в уроке 22.'
    }
  ],
  objectives: [
    { id: 'l26_name-body-symptoms', text: 'Описывать симптомы и части тела (Fáj a fejem).', skills: ['speaking', 'writing'] },
    { id: 'l26_express-pain', text: 'Выражать боль и недомогание (Fáj a…, lázam van).', skills: ['speaking', 'writing'] },
    { id: 'l26_doctor-dialogue', text: 'Вести диалог с врачом: отвечать на вопросы о состоянии.', skills: ['speaking', 'listening'] },
    { id: 'l26_pharmacy', text: 'Объяснять в аптеке, какое лекарство нужно (gyógyszertár).', skills: ['speaking', 'listening'] },
    { id: 'l26_understand-advice', text: 'Понимать рекомендации врача на слух.', skills: ['listening'] },
  ],
};
