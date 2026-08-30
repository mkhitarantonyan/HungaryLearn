import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L22_ACTIVITIES = createMigrationActivities({
  lessonId: 22,
  controlledTitle: 'Повелительное наклонение: форма и ситуация',
  controlledPassCount: 9,
  controlledExercises: [
    { kind: 'fillGap', id: 'l22-cp-1', prompt: 'A · te + vár → повелительная форма', accept: ['várj'] },
    { kind: 'fillGap', id: 'l22-cp-2', prompt: 'A · te + olvas → повелительная форма', accept: ['olvass'] },
    { kind: 'fillGap', id: 'l22-cp-3', prompt: 'A · te + ír + конкретный текст → «Запиши это!»', accept: ['írd le', 'Írd le', 'írd le!', 'Írd le!'] },
    { kind: 'fillGap', id: 'l22-cp-4', prompt: 'A · te + mond + конкретная информацию → «Скажи это!»', accept: ['mondd meg', 'Mondd meg', 'mondd meg!', 'Mondd meg!'] },
    { kind: 'fillGap', id: 'l22-cp-5', prompt: 'A · ön + lenni → вежливая форма', accept: ['legyen'] },
    { kind: 'singleChoice', id: 'l22-cp-6', prompt: 'A · Дай дружескую инструкцию: «Посмотри!»', options: ['Nézd meg!', 'Nézze meg!'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l22-cp-7', prompt: 'B · Попроси друга подождать.', options: ['Várj egy pillanatot!', 'Kérem, várjon egy pillanatot!'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l22-cp-8', prompt: 'B · Вежливо попроси незнакомого человека подождать.', options: ['Várj egy pillanatot!', 'Kérem, várjon egy pillanatot!'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l22-cp-9', prompt: 'B · Дай другу направление.', options: ['Menj egyenesen!', 'Menjen egyenesen!'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l22-cp-10', prompt: 'B · Дай формальное направление.', options: ['Fordulj balra!', 'Forduljon balra!'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l22-cp-11', prompt: 'B · Ты не понял(а). Выбери реплику для восстановления понимания.', options: ['Kérem, mondja még egyszer.', 'Mondd gyorsabban!'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l22-cp-12', prompt: 'B · Вежливо спроси, что нужно делать.', options: ['Mit kell csinálnom?', 'Mit csinálsz?'], correctIndex: 0 },
  ],
  readingTitle: 'Első nap az irodában',
  readingParagraphs: [
    'Üdvözöljük az irodában! Amikor reggel megérkezik, először jelentkezzen a recepción, és mutassa meg a belépőkártyáját. Ezután menjen a második emeletre, és keresse meg a 214-es irodát.',
    'Ha még nincs számítógépes jelszava, kérje a rendszergazda segítségét. Ne írja fel a jelszót olyan helyre, ahol mások is láthatják. Ha elhagyja az asztalát, zárja le a számítógépet.',
    'Ebéd előtt tegye az ételt a közös hűtőbe, és írja rá a nevét. A konyhában használat után mosogasson el.',
    'Ha kérdése van, forduljon a csoportvezetőhöz. Ne féljen kérdezni: az első nap mindenkinek sok új információt kell megjegyeznie.',
  ],
  readingPassCount: 5,
  readingQuestions: [
    { id: 'l22-read-1', question: 'Mit kell először tenni reggel?', options: ['Jelentkezni a recepción', 'Ebédelni', 'A rendszergazdát hívni'], correctIndex: 0 },
    { id: 'l22-read-2', question: 'Hová kell menni a recepció után?', options: ['A közös konyhába', 'A második emelet 214-es irodájába', 'Haza'], correctIndex: 1 },
    { id: 'l22-read-3', question: 'Kitől lehet segítséget kérni, ha nincs jelszó?', options: ['A rendszergazdától', 'A recepcióstól', 'Egy vendégtől'], correctIndex: 0 },
    { id: 'l22-read-4', question: 'Mit kell tenni, ha valaki elhagyja az asztalát?', options: ['Leírni a jelszót', 'Lezárni a számítógépet', 'Kikapcsolni a hűtőt'], correctIndex: 1 },
    { id: 'l22-read-5', question: 'Mi a helyes ebéd előtti sorrend?', options: ['Név az ételre, majd étel a hűtőbe', 'Étel a hűtőbe, és név rá', 'Előbb mosogatás, aztán recepció'], correctIndex: 1 },
    { id: 'l22-read-6', question: 'Kihez kell fordulni általános kérdéssel?', options: ['A csoportvezetőhöz', 'A könyvtároshoz', 'A pincérhez'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: просьбы и указания',
  listeningTranscript: 'Kérem, jöjjön be! Üljön le, és várjon egy percet. Ne tegye a táskáját az asztalra.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l22-listen-1', question: 'Mit kérnek először?', options: ['Jöjjön be', 'Menjen el', 'Telefonáljon'], correctIndex: 0 },
    { id: 'l22-listen-2', question: 'Mennyi ideig kell várni?', options: ['Egy percet', 'Egy órát', 'Egy napot'], correctIndex: 0 },
    { id: 'l22-listen-3', question: 'Hová ne tegye a táskát?', options: ['A székre', 'Az asztalra', 'A földre'], correctIndex: 1 },
  ],
  listeningB: {
    title: 'Аудирование B: первый день в офисе',
    assetId: 'l22_listening_b_office_instructions',
    audioStatus: 'published',
    transcript: 'Recepciós: Jó reggelt! Ön az új kolléga?\nDolgozó: Igen, ma van az első munkanapom.\nRecepciós: Rendben. Először kérem, mutassa meg a személyi igazolványát. Utána vegye át ezt a belépőkártyát, és írja alá ezt a papírt.\nDolgozó: Rendben. Ezután hová menjek?\nRecepciós: Menjen fel a harmadik emeletre lifttel. Amikor kilép a liftből, forduljon jobbra, és keresse meg a 315-ös irodát.\nDolgozó: Elnézést, nem értettem az iroda számát. Mondja még egyszer, kérem!\nRecepciós: Természetesen. Háromszáztizenöt. A folyosó végén találja.\nDolgozó: Köszönöm. Van még valami, amit tudnom kell?\nRecepciós: Igen. Ne használja a hátsó bejáratot, mert ahhoz még nincs jogosultsága. Ha ebédelni megy, tegye a belépőkártyát a táskájába, ne hagyja az asztalon.\nDolgozó: Értem.\nRecepciós: Ha bármilyen problémája van, hívja a recepciót, vagy kérdezze Annát a 315-ös irodában.\nDolgozó: Rendben, köszönöm szépen a segítséget.',
    passCount: 5,
    questions: [
      { id: 'l22-listen-b-1', question: 'Mit kell először megmutatnia a dolgozónak?', options: ['A személyi igazolványát.', 'A belépőkártyáját.', 'A számítógépes jelszavát.'], correctIndex: 0 },
      { id: 'l22-listen-b-2', question: 'Melyik emeletre kell mennie?', options: ['A második emeletre.', 'A harmadik emeletre.', 'A negyedik emeletre.'], correctIndex: 1 },
      { id: 'l22-listen-b-3', question: 'Miért kér ismétlést?', options: ['Mert nem értette az iroda számát.', 'Mert nem találja a liftet.', 'Mert elvesztette a kártyáját.'], correctIndex: 0 },
      { id: 'l22-listen-b-4', question: 'Mi az iroda száma?', options: ['214.', '305.', '315.'], correctIndex: 2 },
      { id: 'l22-listen-b-5', question: 'Melyik bejáratot nem használhatja?', options: ['A főbejáratot.', 'A hátsó bejáratot.', 'Az oldalsó bejáratot.'], correctIndex: 1 },
      { id: 'l22-listen-b-6', question: 'Kihez fordulhat segítségért?', options: ['A recepcióhoz vagy Annához.', 'Csak a csoportvezetőhöz.', 'A rendszergazdához vagy a portáshoz.'], correctIndex: 0 },
    ],
  },
  rolePlay: {
    title: 'RolePlay: как пройти к нужному месту',
    partnerLabel: 'Прохожий',
    completionMessage: 'Маршрут объяснён. Прослушай инструкции и эпизод восстановления понимания.',
    startTurnId: 'l22-rp-1',
    turns: [
      { id: 'l22-rp-1', speaker: 'waiter', prompt: 'Elnézést, hol van a posta?', next: 'l22-rp-2' },
      { id: 'l22-rp-2', speaker: 'learner', prompt: 'Начни маршрут и дай две инструкции.', responseMode: 'selfPractice', model: 'Menjen egyenesen, aztán forduljon balra!', next: 'l22-rp-3' },
      { id: 'l22-rp-3', speaker: 'waiter', prompt: 'Jobbra forduljak a lámpánál?', next: 'l22-rp-4' },
      { id: 'l22-rp-4', speaker: 'learner', prompt: 'Исправь недоразумение и повтори направление.', responseMode: 'selfPractice', model: 'Nem, balra forduljon. Kérem, nézze meg a táblát!', next: 'l22-rp-5' },
      { id: 'l22-rp-5', speaker: 'waiter', prompt: 'Elnézést, nem értettem. Kérem, mondja még egyszer.', next: 'l22-rp-6' },
      { id: 'l22-rp-6', speaker: 'learner', prompt: 'Повтори медленнее и добавь следующую инструкцию.', responseMode: 'selfPractice', model: 'Először menjen egyenesen. Aztán forduljon balra, végül menjen át az úton.', next: 'l22-rp-7' },
      { id: 'l22-rp-7', speaker: 'waiter', prompt: 'A posta az út másik oldalán van?', next: 'l22-rp-8' },
      { id: 'l22-rp-8', speaker: 'learner', prompt: 'Подтверди и вежливо заверши.', responseMode: 'selfPractice', model: 'Igen, ott van. Szívesen!' },
    ],
  },
  writingTitle: 'Письмо: инструкции новому сотруднику или гостю',
  writingPrompt: 'Напиши 80–100 слов с инструкциями для нового сотрудника или гостя. Дай последовательность действий, положительные инструкции, один запрет и укажи, где или у кого попросить помощь.',
  writingModel: ['Először jelentkezzen a recepción.', 'Aztán menjen a második emeletre.', 'Ne írja fel a jelszót.', 'Ha kérdése van, forduljon a csoportvezetőhöz.'],
  writingRubric: ['80–100 слов', 'Есть последовательность: először — aztán — végül', 'Есть положительные инструкции', 'Есть минимум один запрет', 'Указано, где или у кого попросить помощь'],
  objectiveChecks: [
    { objectiveId: 'l22_form-imperative', activity: 'controlled', evidenceKind: 'grammar' },
    {
      objectiveId: 'l22_use-imperative',
      activity: 'writing',
      evidenceKind: 'writing',
      evidenceComponents: [{ activity: 'roleplay', evidenceKind: 'interaction' }],
    },
    { objectiveId: 'l22_form-let', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l22_polite-requests', activity: 'roleplay', evidenceKind: 'interaction' },
    { objectiveId: 'l22_understand-commands', activity: 'listeningB', evidenceKind: 'listening' },
  ],
});

const L22_OPTIONAL_SPEAKING = {
  title: 'Говорение: маршрут или простая процедура',
  instructions: 'Говори 1,5–2 минуты: объясни маршрут или простую процедуру. Используй последовательность, 4–5 инструкций и понятный регистр.',
  prompt: 'Először menjen egyenesen. Aztán forduljon balra. Végül keresse meg a bejáratot.',
  rubric: ['1,5–2 минуты', 'Есть ясная последовательность', 'Дано 4–5 инструкций', 'Регистр последователен', 'Речь понятна'],
};

export const LESSON_22: Lesson = {
  id: 22,
  number: 22,
  level: 'B1',
  title: 'Урок 22 · A felszólító mód',
  subtitle: 'Повелительное наклонение',
  description: 'Повелительное наклонение с суффиксом -j-, ассимиляция (s, sz, z, t + j), формы -j, -jál, -jad, неправильный глагол lenni (légy) и вежливые просьбы.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 22 · 1/11 · ЗНАК ПОВЕЛЕНИЯ",
      title: "A felszólító mód",
      subtitle: "Суффикс -j- — маркер приказа и просьбы",
      body: `
   <p>Повелительное наклонение выражает приказ, просьбу, совет или призыв к действию («читай!», «пойдемте!», «сделайте!»). Его маркер — суффикс <span class="hu-word">-j-</span>, который вставляется между основой глагола и личным окончанием:</p>
   <p><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vár</button> (ждать) + j = <button class="speak-btn" data-speak-text="várj!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várj!</button> <span style="color:#8a7a68">(подожди!)</span></p>
   <p><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ír</button> (писать) + j = <button class="speak-btn" data-speak-text="írj!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> írj!</button> <span style="color:#8a7a68">(пиши!)</span></p>
   <div class="note"><b>Can-Do:</b> понимать и давать инструкции, формулировать неформальные и формальные просьбы и восстанавливать понимание при недоразумении.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 22 · 2/11 · АССИМИЛЯЦИЯ",
      title: "Helyesírási és hangtani szabályok",
      subtitle: "Когда -j- растворяется в согласных основы",
      body: `
   <p>Когда основа глагола заканчивается на шипящие/свистящие (s, sz, z) или на t, суффикс <span class="hu-word">-j-</span> полностью или частично <b>сливается с согласным основы</b> (ассимиляция, аналогично 16-му уроку с -val/-vel):</p>
   <table class="conj">
     <tr><th>Окончание основы</th><th>Правило</th><th>Пример</th></tr>
     <tr><td>s, sz, z</td><td>j превращается в этот же согласный (двойная буква!)</td><td><button class="speak-btn" data-speak-text="hoz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hoz</button> → <button class="speak-btn" data-speak-text="hozz!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hozz!</button> <span class="pron">(не hozj!)</span></td></tr>
     <tr><td>s, sz, z</td><td>то же для s</td><td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olvas</button> → <button class="speak-btn" data-speak-text="olvass!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olvass!</button> <span class="pron">(не olvasj!)</span></td></tr>
     <tr><td>t (после гласной)</td><td>t + j → ss</td><td><button class="speak-btn" data-speak-text="mutat" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mutat</button> → <button class="speak-btn" data-speak-text="mutass!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> mutass!</button></td></tr>
     <tr><td>t (после согласной)</td><td>t + j → ts</td><td><button class="speak-btn" data-speak-text="tart" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tart</button> → <button class="speak-btn" data-speak-text="tarts!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tarts!</button></td></tr>
   </table>
   <div class="warn">Пишется именно так, как произносится: <button class="speak-btn" data-speak-text="olvass!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> olvass!</button> с двойным ss, а не «olvasj». Это орфографическое правило, а не просто разговорное сокращение.</div>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 22 · 3/11 · НЕОПРЕДЕЛЁННОЕ ПОВЕЛИНИЕ",
      title: "Alanyi felszólító mód",
      subtitle: "Неопределённое повелительное наклонение",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>vár (ждать)</th><th>kér (просить)</th><th>Значение</th></tr>
     <tr><td>(te)</td><td><button class="speak-btn" data-speak-text="várj! / várjál!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várj! / várjál!</button></td><td><button class="speak-btn" data-speak-text="kérj! / kérjél!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérj! / kérjél!</button></td><td>жди! / проси!</td></tr>
     <tr><td>(ő / Ön)</td><td><button class="speak-btn" data-speak-text="várjon!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várjon!</button></td><td><button class="speak-btn" data-speak-text="kérjen!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérjen!</button></td><td>пусть подождёт / подождите! (Вы)</td></tr>
     <tr><td>(mi)</td><td><button class="speak-btn" data-speak-text="várjunk!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várjunk!</button></td><td><button class="speak-btn" data-speak-text="kérjünk!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérjünk!</button></td><td>подождёмте! / попросим!</td></tr>
     <tr><td>(ti)</td><td><button class="speak-btn" data-speak-text="várjatok!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várjatok!</button></td><td><button class="speak-btn" data-speak-text="kérjetek!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérjetek!</button></td><td>ждите! / просите! (вы)</td></tr>
     <tr><td>(ők / Önök)</td><td><button class="speak-btn" data-speak-text="várjanak!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várjanak!</button></td><td><button class="speak-btn" data-speak-text="kérjenek!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérjenek!</button></td><td>пусть подождут / подождите! (Вы, мн.ч.)</td></tr>
   </table>
   <div class="note">Для 2-го лица ед.ч. есть варианты: <button class="speak-btn" data-speak-text="várj!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várj!</button> и <button class="speak-btn" data-speak-text="várjál!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várjál!</button> — первый более нейтральный, второй более разговорный. Обратите внимание на вежливую форму (Ön): <button class="speak-btn" data-speak-text="várjon!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várjon!</button> («подождите!»).</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 22 · 4/11 · ОПРЕДЕЛЁННОЕ ПОВЕЛЕНИЕ",
      title: "Tárgyas felszólító mód",
      subtitle: "Определённое повелительное наклонение",
      body: `
   <p>Если приказ направлен на <b>конкретный объект</b> (вспомните 21-й урок!), используется определённое повелительное наклонение:</p>
   <table class="conj">
     <tr><th>Кто</th><th>vár + конкретный объект</th><th>kér + конкретный объект</th><th>Значение</th></tr>
     <tr><td>(te)</td><td><button class="speak-btn" data-speak-text="várd! / várjad!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várd! / várjad!</button></td><td><button class="speak-btn" data-speak-text="kérd! / kérjed!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérd! / kérjed!</button></td><td>подожди это! / попроси это!</td></tr>
     <tr><td>(ő / Ön)</td><td><button class="speak-btn" data-speak-text="várja!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várja!</button></td><td><button class="speak-btn" data-speak-text="kérje!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérje!</button></td><td>пусть подождёт это!</td></tr>
     <tr><td>(mi)</td><td><button class="speak-btn" data-speak-text="várjuk!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várjuk!</button></td><td><button class="speak-btn" data-speak-text="kérjük!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérjük!</button></td><td>подождёмте это!</td></tr>
     <tr><td>(ti)</td><td><button class="speak-btn" data-speak-text="várjátok!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várjátok!</button></td><td><button class="speak-btn" data-speak-text="kérjétek!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérjétek!</button></td><td>подождите это! (вы)</td></tr>
     <tr><td>(ők / Önök)</td><td><button class="speak-btn" data-speak-text="várják!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> várják!</button></td><td><button class="speak-btn" data-speak-text="kérjék!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kérjék!</button></td><td>пусть подождут это!</td></tr>
   </table>
   <div class="note">Сравните: <button class="speak-btn" data-speak-text="Olvasd el ezt a könyvet!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvasd el ezt a könyvet!</button> <span style="color:#8a7a68">(Прочитай ЭТУ книгу — определённая форма olvasd!)</span> vs <button class="speak-btn" data-speak-text="Olvass egy könyvet!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Olvass egy könyvet!</button> <span style="color:#8a7a68">(Почитай какую-нибудь книгу — неопределённая форма olvass!)</span></div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 22 · 5/11 · НЕПРАВИЛЬНЫЙ ГЛАГОЛ LENNI",
      title: "Rendhagyó igék",
      subtitle: "Особая форма lenni → légy / legyen",
      body: `
   <p>Глагол <span class="hu-word">lenni</span> (быть) в повелительном наклонении имеет совершенно особую основу <span class="hu-word">légy- / legy-</span>:</p>
   <table class="conj">
     <tr><th>Кто</th><th>Форма</th><th>Значение</th></tr>
     <tr><td>(te)</td><td><button class="speak-btn" data-speak-text="légy! / legyél!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> légy! / legyél!</button></td><td>будь!</td></tr>
     <tr><td>(ő / Ön)</td><td><button class="speak-btn" data-speak-text="legyen!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legyen!</button></td><td>пусть будет! / будьте! (Вы)</td></tr>
     <tr><td>(mi)</td><td><button class="speak-btn" data-speak-text="legyünk!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legyünk!</button></td><td>давайте будем!</td></tr>
     <tr><td>(ti)</td><td><button class="speak-btn" data-speak-text="legyetek!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legyetek!</button></td><td>будьте! (вы)</td></tr>
     <tr><td>(ők / Önök)</td><td><button class="speak-btn" data-speak-text="legyenek!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> legyenek!</button></td><td>пусть будут! / будьте! (Вы, мн.ч.)</td></tr>
   </table>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 22 · 6/11 · ВЕЖЛИВОСТЬ",
      title: "Udvarias kérések",
      subtitle: "Смягчение просьб: légy szíves, legyen szíves",
      body: `
   <p>Чтобы повеление не звучало слишком грубо или приказательно, его обычно смягчают выражением <span class="hu-word">légy szíves</span> (на «ты») или <span class="hu-word">legyen szíves</span> (на «Вы») — буквально «будь любезен / будьте любезны»:</p>
   <p><button class="speak-btn" data-speak-text="Légy szíves, csukd be az ajtót!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Légy szíves, csukd be az ajtót!</button> <span style="color:#8a7a68">(Будь любезен, закрой дверь!)</span></p>
   <p><button class="speak-btn" data-speak-text="Legyen szíves, adjon egy kávét!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Legyen szíves, adjon egy kávét!</button> <span style="color:#8a7a68">(Будьте добры, дайте кофе! — стандартная просьба в кафе)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 22 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Повелительное наклонение в речи",
      body: `
   <p><button class="speak-btn" data-speak-text="Gyere ide!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Gyere ide!</button> <span style="color:#8a7a68">(Иди сюда! — от jön, неправильный)</span></p>
   <p><button class="speak-btn" data-speak-text="Mennek a moziba, menjünk mi is!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mennek a moziba, menjünk mi is!</button> <span style="color:#8a7a68">(Они идут в кино, пойдём и мы! — от megy)</span></p>
   <p><button class="speak-btn" data-speak-text="Mondd meg neki!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mondd meg neki!</button> <span style="color:#8a7a68">(Скажи ему! — mond + j → mondd с двойным d)</span></p>
   <div class="note"><b>Функциональные реплики:</b> Várj egy pillanatot! · Nézd meg! · Írd le! · Mondd meg! · Menj egyenesen! · Fordulj balra! · Fordulj jobbra! · Kérem, várjon! · Legyen szíves… · Kérem, mondja még egyszer. · Elnézést, nem értettem. · Mit kell csinálnom? · Először… · Aztán… · Végül…</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 22 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "На улице / в магазине",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Elnézést, legyen szíves, segítsen!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elnézést, legyen szíves, segítsen!</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Tessék, miben segíthetek?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tessék, miben segíthetek?</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Mondja meg, hol van a legközelebbi gyógyszertár!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mondja meg, hol van a legközelebbi gyógyszertár!</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Menjen egyenesen, aztán forduljon balra." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Menjen egyenesen, aztán forduljon balra.</button></p>
   <div class="task">Задание 1. Найдите все формы повелительного наклонения в диалоге и определите, на «ты» они или на «Вы».</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 22 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: L22_ACTIVITIES,
      optionalSpeaking: L22_OPTIONAL_SPEAKING,
      body: `
   <ol class="tasklist">
     <li>Образуйте повелительное наклонение (te, неопределённое) от: tanul, ír, olvas, hoz, mutat</li>
     <li>Образуйте повелительное наклонение (te, определённое) от: olvas, ír, mond</li>
     <li>Переведите: «Будьте добры, дайте один чай» (вежливая форма Ön)</li>
     <li>Объясните ассимиляцию в словах „hozz!“, „olvass!“, „mutass!“</li>
     <li>Составьте 3 вежливых просьбы для ресторана или магазина</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 22 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Повелительное наклонение часто используется и в придаточных предложениях («я хочу, чтобы ты пришёл» = «akarom, hogy jöjj»). В следующем, 23-м уроке мы разберём условное наклонение (feltételes mód) — «я бы пошёл», «если бы ты пришёл...».</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 22 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 22-го урока",
      body: `
   <ul class="tick">
     <li>Маркер повелительного наклонения — суффикс -j-</li>
     <li>Ассимиляция с s, sz, z, t: olvas+j → olvass, hoz+j → hozz, mutat+j → mutass</li>
     <li>Тоже имеет два спряжения: неопределённое (olvass!) и определённое (olvasd!)</li>
     <li>lenni → légy! / legyél!, legyen! (Ön)</li>
     <li>Смягчение: légy szíves / legyen szíves</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите рецепт вашего любимого блюда или инструкции проезда — 6-8 предложений в повелительном наклонении.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l22_v1", hu: "segíteni", ru: "помогать", category: "Глаголы", exampleSentence: "Segíts nekem, kérlek!",
        ipa: "[ʃˈɛgiːtɛni]"
    },
    { id: "l22_v2", hu: "mutatni", ru: "показывать", category: "Глаголы", exampleSentence: "Mutasd meg a képet!",
        ipa: "[mˈutɒtni]"
    },
    { id: "l22_v3", hu: "hozni", ru: "приносить", category: "Глаголы", exampleSentence: "Hozz egy vizet!",
        ipa: "[hˈozni]"
    },
    { id: "l22_v4", hu: "fordulni", ru: "поворачивать", category: "Глаголы", exampleSentence: "Fordulj balra!",
        ipa: "[fˈordulni]"
    }
  ],
    quiz: [
    {
      id: 2201,
      question: 'Какой суффикс является маркером повелительного наклонения в венгерском языке?',
      options: ['-j-', '-t-', '-ni', '-na/-ne'],
      correctIndex: 0,
      explanation: 'Маркером повелительного наклонения является суффикс -j-, который вставляется между основой глагола и личным окончанием: vár + j = várj! (подожди!).'
    },
    {
      id: 2202,
      question: 'Как образуется повелительное наклонение от глагола "olvas" (читать) в неопределённой форме (te)?',
      options: ['olvasj!', 'olvass!', 'olvasd!', 'olvassz!'],
      correctIndex: 1,
      explanation: 'Основа оканчивается на "s" – происходит ассимиляция: s + j → ss. Правильно: olvass! (читай!). "olvasd!" – это определённая форма (прочитай это!).'
    },
    {
      id: 2203,
      question: 'Какая КРАТКАЯ определённая форма повелительного наклонения соответствует фразе "Скажи ему!"?',
      options: ['Mondd meg neki!', 'Mond meg neki!', 'Mondja meg neki!', 'Mondj meg neki!'],
      correctIndex: 0,
      explanation: 'Краткая определённая форма: Mondd meg neki! Форма Mondjad meg neki! — тоже правильная длинная альтернатива, поэтому она намеренно не используется как неправильный вариант.'
    },
    {
      id: 2204,
      question: 'Как сказать "будь!" по-венгерски (повелительное наклонение от глагола lenni)?',
      options: ['vagy!', 'légy!', 'legyen!', 'van!'],
      correctIndex: 1,
      explanation: 'Глагол "lenni" (быть) в повелительном наклонении имеет особую основу "légy-": légy! (будь!) для 2-го лица (te). "legyen!" – это форма для ő/Ön (пусть будет / будьте!).'
    },
    {
      id: 2205,
      question: 'Какое из этих предложений использует ОПРЕДЕЛЁННОЕ повелительное наклонение?',
      options: [
        'Olvass egy könyvet! (Почитай какую-нибудь книгу)',
        'Olvasd el ezt a könyvet! (Прочитай ЭТУ книгу)',
        'Várj egy percet! (Подожди минуту!)',
        'Írj egy levelet! (Напиши письмо!)'
      ],
      correctIndex: 1,
      explanation: 'Определённое повелительное наклонение используется, когда объект конкретный/определённый: "ezt a könyvet" (ЭТУ книгу) → olvasd! (прочитай это!). Неопределённое: "egy könyvet" (какую-то книгу) → olvass! (почитай).'
    },
    {
      id: 2206,
      question: 'Как вежливо попросить незнакомого человека о помощи по-венгерски (обращение на "Вы")?',
      options: [
        'Segíts nekem!',
        'Légy szíves, segíts!',
        'Legyen szíves, segítsen!',
        'Segítsenek nekem!'
      ],
      correctIndex: 2,
      explanation: 'Для вежливого обращения на "Вы" (Ön) используется форма "legyen szíves" + повелительное наклонение с окончанием -jon/-jen: Legyen szíves, segítsen! (Будьте любезны, помогите!).'
    }
  ],
  objectives: [
    { id: 'l22_form-imperative', text: 'Образовывать повелительное наклонение с помощью -j- и его ассимиляции.', skills: ['grammar', 'writing'] },
    { id: 'l22_use-imperative', text: 'Отдавать команды, просьбы и советы в повелительном наклонении.', skills: ['speaking', 'writing'] },
    { id: 'l22_form-let', text: 'Использовать формы légy и legyen («будь», «пусть будет»).', skills: ['grammar', 'speaking'] },
    { id: 'l22_polite-requests', text: 'Вежливо формулировать просьбы с помощью повелительного наклонения.', skills: ['speaking'] },
    { id: 'l22_understand-commands', text: 'Понимать команды и указания на слух.', skills: ['listening'] },
  ],
};
