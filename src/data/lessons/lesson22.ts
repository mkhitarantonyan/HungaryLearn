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
      { id: 'l22-rp-2', speaker: 'learner', prompt: 'Начни маршрут и дай две инструкции.', responseMode: 'selfPractice', model: 'Persze. Menjen egyenesen, aztán forduljon balra!', next: 'l22-rp-3' },
      { id: 'l22-rp-3', speaker: 'waiter', prompt: 'A lámpánál jobbra forduljak?', next: 'l22-rp-4' },
      { id: 'l22-rp-4', speaker: 'learner', prompt: 'Исправь недоразумение и повтори направление.', responseMode: 'selfPractice', model: 'Nem, balra forduljon. Nézze meg a táblát, kérem!', next: 'l22-rp-5' },
      { id: 'l22-rp-5', speaker: 'waiter', prompt: 'Elnézést, nem értettem. Kérem, mondja még egyszer.', next: 'l22-rp-6' },
      { id: 'l22-rp-6', speaker: 'learner', prompt: 'Повтори медленнее и добавь следующую инструкцию.', responseMode: 'selfPractice', model: 'Persze. Először menjen egyenesen. Aztán forduljon balra, végül menjen át az úton.', next: 'l22-rp-7' },
      { id: 'l22-rp-7', speaker: 'waiter', prompt: 'Értem. A posta az út másik oldalán van?', next: 'l22-rp-8' },
      { id: 'l22-rp-8', speaker: 'learner', prompt: 'Подтверди и вежливо заверши.', responseMode: 'selfPractice', model: 'Igen, pontosan, ott van. Szívesen!' },
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
      eyebrow: "УРОК 22 · 1/11 · ВВЕДЕНИЕ",
      title: "A felszólító mód",
      subtitle: "Просьба, совет и инструкция: начинаем с формы te",
      note: 'На этом слайде изучаем только неформальное обращение к одному человеку и простые глаголы, где показатель -j виден.',
      warn: 'Не добавляй -j к инфинитиву целиком. Сначала убери -ni и найди основу. У некоторых глаголов -j затем сливается с последним согласным или форма становится нерегулярной.',
      task: 'Определи намерение говорящего, затем образуй четыре формы по модели: инфинитив → основа → просьба или инструкция.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Что выражает эта форма</h4>
        <table class="conj">
          <tr><th>Намерение</th><th>Пример</th><th>Естественный смысл</th></tr>
          <tr>
            <td>короткая просьба</td>
            <td><button class="speak-btn" data-speak-text="Várj egy pillanatot!" data-speak-lang="hu-HU">Várj egy pillanatot!</button></td>
            <td>Подожди минуту.</td>
          </tr>
          <tr>
            <td>инструкция</td>
            <td><button class="speak-btn" data-speak-text="Írj egy üzenetet!" data-speak-lang="hu-HU">Írj egy üzenetet!</button></td>
            <td>Напиши сообщение.</td>
          </tr>
          <tr>
            <td>совет</td>
            <td><button class="speak-btn" data-speak-text="Pihenj egy kicsit!" data-speak-lang="hu-HU">Pihenj egy kicsit!</button></td>
            <td>Немного отдохни.</td>
          </tr>
          <tr>
            <td>предложение действия</td>
            <td><button class="speak-btn" data-speak-text="Kérj segítséget!" data-speak-lang="hu-HU">Kérj segítséget!</button></td>
            <td>Попроси помощи.</td>
          </tr>
        </table>

        <div class="note">
          Одна и та же грамматическая форма может звучать как приказ, просьба, совет или инструкция.
          Смысл определяют ситуация, интонация и слова вежливости.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Базовая модель для простых глаголов</h4>
        <table class="conj">
          <tr><th>Инфинитив</th><th>Основа без -ni</th><th>Форма te</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="várni" data-speak-lang="hu-HU">várni</button></td>
            <td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU">vár</button></td>
            <td><button class="speak-btn" data-speak-text="várj" data-speak-lang="hu-HU">várj</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="írni" data-speak-lang="hu-HU">írni</button></td>
            <td><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU">ír</button></td>
            <td><button class="speak-btn" data-speak-text="írj" data-speak-lang="hu-HU">írj</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kérni" data-speak-lang="hu-HU">kérni</button></td>
            <td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU">kér</button></td>
            <td><button class="speak-btn" data-speak-text="kérj" data-speak-lang="hu-HU">kérj</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanulni" data-speak-lang="hu-HU">tanulni</button></td>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td><button class="speak-btn" data-speak-text="tanulj" data-speak-lang="hu-HU">tanulj</button></td>
          </tr>
        </table>

        <div class="note">
          Рабочая модель: инфинитив без <b>-ni</b> + показатель <b>-j</b>.
          Это отправная точка, а не универсальная готовая формула для каждого глагола.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Сообщение, вопрос и побуждение</h4>
        <table class="conj">
          <tr><th>Тип реплики</th><th>Пример</th></tr>
          <tr>
            <td>сообщение</td>
            <td><button class="speak-btn" data-speak-text="Vársz egy pillanatot." data-speak-lang="hu-HU">Vársz egy pillanatot.</button></td>
          </tr>
          <tr>
            <td>вопрос</td>
            <td><button class="speak-btn" data-speak-text="Vársz egy pillanatot?" data-speak-lang="hu-HU">Vársz egy pillanatot?</button></td>
          </tr>
          <tr>
            <td>просьба или инструкция</td>
            <td><button class="speak-btn" data-speak-text="Várj egy pillanatot!" data-speak-lang="hu-HU">Várj egy pillanatot!</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как сделать просьбу мягче</h4>
        <p><button class="speak-btn" data-speak-text="Kérlek, várj egy pillanatot!" data-speak-lang="hu-HU">Kérlek, várj egy pillanatot!</button></p>
        <p><button class="speak-btn" data-speak-text="Várj egy pillanatot, kérlek!" data-speak-lang="hu-HU">Várj egy pillanatot, kérlek!</button></p>
        <div class="note">Обе позиции слова вежливости естественны. Формальное обращение на «Вы» будет разобрано отдельно.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Предварительная карта урока</h4>
        <ul class="tick">
          <li>22.1: простая форма для одного собеседника;</li>
          <li>22.2: изменения последнего согласного и написания;</li>
          <li>дальше: лица, два спряжения, отрицание, вежливые просьбы и реальные инструкции.</li>
        </ul>

        <div class="task">
          Образуй формы от четырёх инфинитивов: <b>várni, írni, kérni, tanulni</b>.
          Затем составь по одной просьбе, инструкции и рекомендации.
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 22 · 2/11 · ИЗМЕНЕНИЯ ОСНОВЫ",
      title: "Hangváltozás és helyesírás",
      subtitle: "Когда показатель -j сливается с последним согласным",
      note: 'Все формы на этом слайде — неформальное обращение к одному человеку в неопределённом спряжении. Мы меняем только форму основы.',
      warn: 'Правила ниже описывают частые модели, но не все глаголы на -t. Нельзя использовать формулу «после любой гласной -t превращается в -ss».',
      task: 'Раздели глаголы на группы, произнеси пары и выбери нормативную форму без механического добавления -j.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Полное слияние после s, sz и z</h4>
        <table class="conj">
          <tr><th>Конец основы</th><th>Изменение</th><th>Нормативная форма</th><th>Не писать</th></tr>
          <tr>
            <td>s</td>
            <td>s + j → ss</td>
            <td>
              <button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU">olvas</button>
              →
              <button class="speak-btn" data-speak-text="olvass" data-speak-lang="hu-HU">olvass</button>
            </td>
            <td>olvasj</td>
          </tr>
          <tr>
            <td>sz</td>
            <td>sz + j → ssz</td>
            <td>
              <button class="speak-btn" data-speak-text="mász" data-speak-lang="hu-HU">mász</button>
              →
              <button class="speak-btn" data-speak-text="mássz" data-speak-lang="hu-HU">mássz</button>
            </td>
            <td>mászj</td>
          </tr>
          <tr>
            <td>z</td>
            <td>z + j → zz</td>
            <td>
              <button class="speak-btn" data-speak-text="hoz" data-speak-lang="hu-HU">hoz</button>
              →
              <button class="speak-btn" data-speak-text="hozz" data-speak-lang="hu-HU">hozz</button>
            </td>
            <td>hozj</td>
          </tr>
        </table>

        <div class="note">
          Для венгерской буквы <b>sz</b> удвоение пишется как <b>ssz</b>, а не как две отдельные группы <b>szsz</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Частые модели глаголов на t</h4>
        <table class="conj">
          <tr><th>Группа</th><th>Примеры</th><th>Результат</th></tr>
          <tr>
            <td>частая модель: короткая гласная + t</td>
            <td>
              <button class="speak-btn" data-speak-text="mutat" data-speak-lang="hu-HU">mutat</button>
              →
              <button class="speak-btn" data-speak-text="mutass" data-speak-lang="hu-HU">mutass</button><br>
              <button class="speak-btn" data-speak-text="szeret" data-speak-lang="hu-HU">szeret</button>
              →
              <button class="speak-btn" data-speak-text="szeress" data-speak-lang="hu-HU">szeress</button>
            </td>
            <td>t исчезает, появляется ss</td>
          </tr>
          <tr>
            <td>согласная + t</td>
            <td>
              <button class="speak-btn" data-speak-text="tart" data-speak-lang="hu-HU">tart</button>
              →
              <button class="speak-btn" data-speak-text="tarts" data-speak-lang="hu-HU">tarts</button><br>
              <button class="speak-btn" data-speak-text="ment" data-speak-lang="hu-HU">ment</button>
              →
              <button class="speak-btn" data-speak-text="ments" data-speak-lang="hu-HU">ments</button>
            </td>
            <td>пишется сочетание ts</td>
          </tr>
          <tr>
            <td>глаголы на -ít</td>
            <td>
              <button class="speak-btn" data-speak-text="tanít" data-speak-lang="hu-HU">tanít</button>
              →
              <button class="speak-btn" data-speak-text="taníts" data-speak-lang="hu-HU">taníts</button><br>
              <button class="speak-btn" data-speak-text="segít" data-speak-lang="hu-HU">segít</button>
              →
              <button class="speak-btn" data-speak-text="segíts" data-speak-lang="hu-HU">segíts</button>
            </td>
            <td>обычно пишется -íts</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Частую форму нужно запомнить отдельно</h4>
        <p>
          <button class="speak-btn" data-speak-text="lát" data-speak-lang="hu-HU">lát</button>
          →
          <button class="speak-btn" data-speak-text="láss" data-speak-lang="hu-HU">láss</button>
        </p>
        <div class="warn">
          Эта форма показывает, почему простого правила «длинная или короткая гласная перед t» недостаточно для всех глаголов.
          Частотные формы лучше учить парами.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что происходит в написании</h4>
        <ul class="tick">
          <li>слияние отражается в нормативном написании: <b>olvass, mássz, hozz, mutass;</b></li>
          <li>это не случайное разговорное сокращение;</li>
          <li>но из этого не следует общее правило «пиши всё ровно так, как слышишь»;</li>
          <li>группу глагола нужно определить до записи формы.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Слушай контраст</h4>
        <table class="conj">
          <tr><th>Основа</th><th>Готовая форма</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU">olvas</button></td><td><button class="speak-btn" data-speak-text="olvass" data-speak-lang="hu-HU">olvass</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="mász" data-speak-lang="hu-HU">mász</button></td><td><button class="speak-btn" data-speak-text="mássz" data-speak-lang="hu-HU">mássz</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="hoz" data-speak-lang="hu-HU">hoz</button></td><td><button class="speak-btn" data-speak-text="hozz" data-speak-lang="hu-HU">hozz</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="mutat" data-speak-lang="hu-HU">mutat</button></td><td><button class="speak-btn" data-speak-text="mutass" data-speak-lang="hu-HU">mutass</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="tart" data-speak-lang="hu-HU">tart</button></td><td><button class="speak-btn" data-speak-text="tarts" data-speak-lang="hu-HU">tarts</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="tanít" data-speak-lang="hu-HU">tanít</button></td><td><button class="speak-btn" data-speak-text="taníts" data-speak-lang="hu-HU">taníts</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="lát" data-speak-lang="hu-HU">lát</button></td><td><button class="speak-btn" data-speak-text="láss" data-speak-lang="hu-HU">láss</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>olvasj или olvass?</li>
          <li>mászj или mássz?</li>
          <li>hozj или hozz?</li>
          <li>mutatj или mutass?</li>
          <li>tartj или tarts?</li>
          <li>tanítj или taníts?</li>
          <li>látj или láss?</li>
        </ol>

        <details>
          <summary><b>Проверить формы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="olvass, mássz, hozz, mutass, tarts, taníts, láss" data-speak-lang="hu-HU">olvass, mássz, hozz, mutass, tarts, taníts, láss</button>
          </p>
        </details>

        <div class="note">
          Граница 22.2: здесь мы научились получать основу повелительной формы.
          Личные окончания и выбор определённого или неопределённого спряжения разбираются на следующих слайдах.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 22 · 3/11 · НЕОПРЕДЕЛЁННЫЕ ФОРМЫ",
      title: "Alanyi felszólító mód",
      subtitle: "Кто должен действовать, если конкретного объекта нет",
      note: 'Лицо формы показывает исполнителя действия. Личное местоимение обычно не произносится, потому что оно уже выражено окончанием.',
      warn: 'Формы для вежливого обращения совпадают с формами третьего лица, но их функция определяется ситуацией и обращением к собеседнику.',
      task: 'Для каждой строки назови исполнителя, регистр общения и причину выбора неопределённого спряжения.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Когда используется эта парадигма</h4>
        <ul class="tick">
          <li>прямого объекта нет;</li>
          <li>объект вводится как неопределённый;</li>
          <li>говорящий просит выполнить действие вообще, а не над заранее известным конкретным объектом.</li>
        </ul>

        <table class="conj">
          <tr><th>Контекст</th><th>Пример</th><th>Почему неопределённая форма</th></tr>
          <tr>
            <td>без объекта</td>
            <td><button class="speak-btn" data-speak-text="Várj!" data-speak-lang="hu-HU">Várj!</button></td>
            <td>действие не направлено на конкретный объект</td>
          </tr>
          <tr>
            <td>неопределённый объект</td>
            <td><button class="speak-btn" data-speak-text="Írj egy üzenetet!" data-speak-lang="hu-HU">Írj egy üzenetet!</button></td>
            <td>сообщение впервые вводится в ситуацию</td>
          </tr>
          <tr>
            <td>неопределённое количество</td>
            <td><button class="speak-btn" data-speak-text="Kérj segítséget!" data-speak-lang="hu-HU">Kérj segítséget!</button></td>
            <td>речь идёт о помощи вообще</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Формы по исполнителю действия</h4>
        <table class="conj">
          <tr><th>Кто должен действовать</th><th>Ждать</th><th>Просить помощь</th><th>Типичная функция</th></tr>
          <tr>
            <td>один знакомый человек</td>
            <td><button class="speak-btn" data-speak-text="Várj!" data-speak-lang="hu-HU">Várj!</button></td>
            <td><button class="speak-btn" data-speak-text="Kérj segítséget!" data-speak-lang="hu-HU">Kérj segítséget!</button></td>
            <td>неформальная просьба или совет</td>
          </tr>
          <tr>
            <td>один человек в вежливом обращении</td>
            <td><button class="speak-btn" data-speak-text="Várjon!" data-speak-lang="hu-HU">Várjon!</button></td>
            <td><button class="speak-btn" data-speak-text="Kérjen segítséget!" data-speak-lang="hu-HU">Kérjen segítséget!</button></td>
            <td>формальная просьба к собеседнику</td>
          </tr>
          <tr>
            <td>мы вместе с говорящим</td>
            <td><button class="speak-btn" data-speak-text="Várjunk!" data-speak-lang="hu-HU">Várjunk!</button></td>
            <td><button class="speak-btn" data-speak-text="Kérjünk segítséget!" data-speak-lang="hu-HU">Kérjünk segítséget!</button></td>
            <td>предложение совместного действия</td>
          </tr>
          <tr>
            <td>несколько знакомых людей</td>
            <td><button class="speak-btn" data-speak-text="Várjatok!" data-speak-lang="hu-HU">Várjatok!</button></td>
            <td><button class="speak-btn" data-speak-text="Kérjetek segítséget!" data-speak-lang="hu-HU">Kérjetek segítséget!</button></td>
            <td>неформальная просьба группе</td>
          </tr>
          <tr>
            <td>несколько людей в вежливом обращении</td>
            <td><button class="speak-btn" data-speak-text="Várjanak!" data-speak-lang="hu-HU">Várjanak!</button></td>
            <td><button class="speak-btn" data-speak-text="Kérjenek segítséget!" data-speak-lang="hu-HU">Kérjenek segítséget!</button></td>
            <td>формальная просьба группе</td>
          </tr>
        </table>

        <div class="note">
          Те же формы третьего лица могут означать пожелание или побуждение о человеке, который не является собеседником:
          <button class="speak-btn" data-speak-text="Péter várjon itt." data-speak-lang="hu-HU">Péter várjon itt.</button>
          Вежливое значение появляется только при обращении к собеседнику.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Особая функция формы «мы»</h4>
        <p><button class="speak-btn" data-speak-text="Menjünk!" data-speak-lang="hu-HU">Menjünk!</button></p>
        <p><button class="speak-btn" data-speak-text="Kezdjünk!" data-speak-lang="hu-HU">Kezdjünk!</button></p>
        <div class="note">Эта форма часто переводится как «давай / давайте». Говорящий включает себя в действие.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Короткая и длинная форма для одного знакомого человека</h4>
        <table class="conj">
          <tr><th>Нейтральная базовая форма</th><th>Длинный вариант</th><th>Оттенок</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Várj!" data-speak-lang="hu-HU">Várj!</button></td>
            <td><button class="speak-btn" data-speak-text="Várjál!" data-speak-lang="hu-HU">Várjál!</button></td>
            <td>длинная форма может звучать разговорнее, настойчивее или эмоциональнее</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérj!" data-speak-lang="hu-HU">Kérj!</button></td>
            <td><button class="speak-btn" data-speak-text="Kérjél!" data-speak-lang="hu-HU">Kérjél!</button></td>
            <td>оттенок зависит от интонации и контекста</td>
          </tr>
        </table>

        <div class="warn">
          Длинная форма не является автоматически более вежливой.
          Для вежливости важны обращение, интонация и слова смягчения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Нейтральная формальная просьба</h4>
        <p><button class="speak-btn" data-speak-text="Kérem, várjon egy pillanatot." data-speak-lang="hu-HU">Kérem, várjon egy pillanatot.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, várjanak itt." data-speak-lang="hu-HU">Kérem, várjanak itt.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Попроси одного друга подождать.</li>
          <li>Вежливо попроси одного незнакомого человека подождать.</li>
          <li>Предложи группе вместе попросить помощь.</li>
          <li>Попроси нескольких друзей подождать.</li>
          <li>Вежливо попроси нескольких людей подождать здесь.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Várj!" data-speak-lang="hu-HU">Várj!</button><br>
            <button class="speak-btn" data-speak-text="Kérem, várjon!" data-speak-lang="hu-HU">Kérem, várjon!</button><br>
            <button class="speak-btn" data-speak-text="Kérjünk segítséget!" data-speak-lang="hu-HU">Kérjünk segítséget!</button><br>
            <button class="speak-btn" data-speak-text="Várjatok!" data-speak-lang="hu-HU">Várjatok!</button><br>
            <button class="speak-btn" data-speak-text="Kérem, várjanak itt." data-speak-lang="hu-HU">Kérem, várjanak itt.</button>
          </p>
        </details>

        <div class="note">Граница 22.3: здесь объект отсутствует или неопределённый. На следующем слайде действие будет направлено на конкретный объект.</div>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 22 · 4/11 · ОПРЕДЕЛЁННЫЕ ФОРМЫ",
      title: "Tárgyas felszólító mód",
      subtitle: "Просьба или инструкция направлена на конкретный объект",
      note: 'Сначала найди прямой объект и проверь, определённый ли он. Только после этого выбирай определённую повелительную форму.',
      warn: 'Не переводи várd как «подожди это». В естественной речи обычно говорят várd meg őt или várd meg Annát — «подожди его, её или Анну».',
      task: 'В каждой паре найди объект, назови признак определённости и выбери форму по исполнителю действия.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Главный контраст</h4>
        <table class="conj">
          <tr><th>Неопределённый объект</th><th>Определённый объект</th><th>Что изменилось</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvass el egy könyvet!" data-speak-lang="hu-HU">Olvass el egy könyvet!</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasd el ezt a könyvet!" data-speak-lang="hu-HU">Olvasd el ezt a könyvet!</button></td>
            <td>одна книга → именно эта книга</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nézz meg egy filmet!" data-speak-lang="hu-HU">Nézz meg egy filmet!</button></td>
            <td><button class="speak-btn" data-speak-text="Nézd meg ezt a filmet!" data-speak-lang="hu-HU">Nézd meg ezt a filmet!</button></td>
            <td>какой-нибудь фильм → конкретный фильм</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérj egy kávét!" data-speak-lang="hu-HU">Kérj egy kávét!</button></td>
            <td><button class="speak-btn" data-speak-text="Kérd a számlát!" data-speak-lang="hu-HU">Kérd a számlát!</button></td>
            <td>один кофе → известный счёт</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что делает объект определённым</h4>
        <table class="conj">
          <tr><th>Признак</th><th>Пример</th></tr>
          <tr>
            <td>определённый артикль</td>
            <td><button class="speak-btn" data-speak-text="Csukd be az ajtót!" data-speak-lang="hu-HU">Csukd be az ajtót!</button></td>
          </tr>
          <tr>
            <td>указательная конструкция</td>
            <td><button class="speak-btn" data-speak-text="Írd le ezt a címet!" data-speak-lang="hu-HU">Írd le ezt a címet!</button></td>
          </tr>
          <tr>
            <td>имя собственное как объект</td>
            <td><button class="speak-btn" data-speak-text="Hívd fel Annát!" data-speak-lang="hu-HU">Hívd fel Annát!</button></td>
          </tr>
          <tr>
            <td>местоимение третьего лица</td>
            <td><button class="speak-btn" data-speak-text="Várd meg őt!" data-speak-lang="hu-HU">Várd meg őt!</button></td>
          </tr>
          <tr>
            <td>притяжательная форма</td>
            <td><button class="speak-btn" data-speak-text="Vidd el a táskámat!" data-speak-lang="hu-HU">Vidd el a táskámat!</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Формы по исполнителю: ждём Анну</h4>
        <table class="conj">
          <tr><th>Кто должен действовать</th><th>Форма</th><th>Функция</th></tr>
          <tr>
            <td>один знакомый человек</td>
            <td><button class="speak-btn" data-speak-text="Várd meg Annát!" data-speak-lang="hu-HU">Várd meg Annát!</button></td>
            <td>неформальная просьба</td>
          </tr>
          <tr>
            <td>один человек в вежливом обращении</td>
            <td><button class="speak-btn" data-speak-text="Várja meg Annát!" data-speak-lang="hu-HU">Várja meg Annát!</button></td>
            <td>формальная просьба</td>
          </tr>
          <tr>
            <td>мы вместе с говорящим</td>
            <td><button class="speak-btn" data-speak-text="Várjuk meg Annát!" data-speak-lang="hu-HU">Várjuk meg Annát!</button></td>
            <td>давайте подождём Анну</td>
          </tr>
          <tr>
            <td>несколько знакомых людей</td>
            <td><button class="speak-btn" data-speak-text="Várjátok meg Annát!" data-speak-lang="hu-HU">Várjátok meg Annát!</button></td>
            <td>неформальная просьба группе</td>
          </tr>
          <tr>
            <td>несколько людей в вежливом обращении</td>
            <td><button class="speak-btn" data-speak-text="Várják meg Annát!" data-speak-lang="hu-HU">Várják meg Annát!</button></td>
            <td>формальная просьба группе</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Короткая и длинная форма</h4>
        <p>
          <button class="speak-btn" data-speak-text="Várd meg Annát!" data-speak-lang="hu-HU">Várd meg Annát!</button>
          —
          <button class="speak-btn" data-speak-text="Várjad meg Annát!" data-speak-lang="hu-HU">Várjad meg Annát!</button>
        </p>
        <p>
          <button class="speak-btn" data-speak-text="Kérd a számlát!" data-speak-lang="hu-HU">Kérd a számlát!</button>
          —
          <button class="speak-btn" data-speak-text="Kérjed a számlát!" data-speak-lang="hu-HU">Kérjed a számlát!</button>
        </p>
        <div class="note">Короткий вариант обычно является нейтральным базовым выбором. Длинный вариант может усиливать или выделять побуждение; оттенок зависит от контекста и интонации.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Глагольная приставка в положительной инструкции</h4>
        <table class="conj">
          <tr><th>Инфинитив</th><th>Положительная инструкция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elolvasni" data-speak-lang="hu-HU">elolvasni</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasd el!" data-speak-lang="hu-HU">Olvasd el!</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="megnézni" data-speak-lang="hu-HU">megnézni</button></td>
            <td><button class="speak-btn" data-speak-text="Nézd meg!" data-speak-lang="hu-HU">Nézd meg!</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="leírni" data-speak-lang="hu-HU">leírni</button></td>
            <td><button class="speak-btn" data-speak-text="Írd le!" data-speak-lang="hu-HU">Írd le!</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="felhívni" data-speak-lang="hu-HU">felhívni</button></td>
            <td><button class="speak-btn" data-speak-text="Hívd fel!" data-speak-lang="hu-HU">Hívd fel!</button></td>
          </tr>
        </table>
        <div class="note">В положительном побуждении частая глагольная приставка обычно стоит после глагола. Отрицательные инструкции будут разобраны отдельно.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Попроси друга прочитать какую-нибудь книгу.</li>
          <li>Попроси друга прочитать именно эту книгу.</li>
          <li>Вежливо попроси одного человека подписать этот документ.</li>
          <li>Предложи группе вместе подождать Анну.</li>
          <li>Вежливо попроси нескольких людей подождать Анну.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Olvass el egy könyvet!" data-speak-lang="hu-HU">Olvass el egy könyvet!</button><br>
            <button class="speak-btn" data-speak-text="Olvasd el ezt a könyvet!" data-speak-lang="hu-HU">Olvasd el ezt a könyvet!</button><br>
            <button class="speak-btn" data-speak-text="Írja alá ezt a dokumentumot!" data-speak-lang="hu-HU">Írja alá ezt a dokumentumot!</button><br>
            <button class="speak-btn" data-speak-text="Várjuk meg Annát!" data-speak-lang="hu-HU">Várjuk meg Annát!</button><br>
            <button class="speak-btn" data-speak-text="Várják meg Annát!" data-speak-lang="hu-HU">Várják meg Annát!</button>
          </p>
        </details>

        <div class="note">Граница 22.4: здесь мы выбираем форму по конкретному объекту и исполнителю. Отрицание и полные правила вежливости рассматриваются на следующих слайдах.</div>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 22 · 5/11 · НЕРЕГУЛЯРНЫЙ ГЛАГОЛ",
      title: "Lenni: rendhagyó felszólító alakok",
      subtitle: "Формы «будь», «давайте будем» и «пусть будет» нужно запомнить",
      note: 'Глагол lenni не образует повелительные формы по простой модели с видимым -j. Учи формы как готовую систему.',
      warn: 'Одинаковая форма может обращаться к собеседнику на «Вы» или относиться к третьему лицу. Значение определяется контекстом.',
      task: 'Для каждой формы назови исполнителя действия и составь естественное предложение с прилагательным или обстоятельством.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Основные формы</h4>
        <table class="conj">
          <tr><th>Кто должен быть</th><th>Форма</th><th>Естественный пример</th><th>Функция</th></tr>
          <tr>
            <td>один знакомый человек</td>
            <td>
              <button class="speak-btn" data-speak-text="légy" data-speak-lang="hu-HU">légy</button>
              /
              <button class="speak-btn" data-speak-text="legyél" data-speak-lang="hu-HU">legyél</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Légy türelmes!" data-speak-lang="hu-HU">Légy türelmes!</button></td>
            <td>будь терпелив</td>
          </tr>
          <tr>
            <td>один человек в вежливом обращении или третье лицо</td>
            <td><button class="speak-btn" data-speak-text="legyen" data-speak-lang="hu-HU">legyen</button></td>
            <td><button class="speak-btn" data-speak-text="Legyen pontos!" data-speak-lang="hu-HU">Legyen pontos!</button></td>
            <td>будьте точны / пусть он или она будет точным</td>
          </tr>
          <tr>
            <td>мы вместе с говорящим</td>
            <td><button class="speak-btn" data-speak-text="legyünk" data-speak-lang="hu-HU">legyünk</button></td>
            <td><button class="speak-btn" data-speak-text="Legyünk óvatosak!" data-speak-lang="hu-HU">Legyünk óvatosak!</button></td>
            <td>давайте будем! / давайте будем осторожны!</td>
          </tr>
          <tr>
            <td>несколько знакомых людей</td>
            <td><button class="speak-btn" data-speak-text="legyetek" data-speak-lang="hu-HU">legyetek</button></td>
            <td><button class="speak-btn" data-speak-text="Legyetek csendben!" data-speak-lang="hu-HU">Legyetek csendben!</button></td>
            <td>будьте тихо</td>
          </tr>
          <tr>
            <td>несколько людей в вежливом обращении или третье лицо во множественном числе</td>
            <td><button class="speak-btn" data-speak-text="legyenek" data-speak-lang="hu-HU">legyenek</button></td>
            <td><button class="speak-btn" data-speak-text="Legyenek türelmesek!" data-speak-lang="hu-HU">Legyenek türelmesek!</button></td>
            <td>будьте терпеливы / пусть они будут терпеливы</td>
          </tr>
        </table>

        <div class="note">
          Формы третьего лица и вежливого обращения совпадают:
          <button class="speak-btn" data-speak-text="Péter legyen pontos." data-speak-lang="hu-HU">Péter legyen pontos.</button>
          и
          <button class="speak-btn" data-speak-text="Legyen pontos, kérem." data-speak-lang="hu-HU">Legyen pontos, kérem.</button>
          Значение показывает ситуация.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Короткая и длинная форма</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Пример</th><th>Оттенок</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="légy" data-speak-lang="hu-HU">légy</button></td>
            <td><button class="speak-btn" data-speak-text="Légy nyugodt!" data-speak-lang="hu-HU">Légy nyugodt!</button></td>
            <td>нейтральный и очень частотный вариант</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="legyél" data-speak-lang="hu-HU">legyél</button></td>
            <td><button class="speak-btn" data-speak-text="Legyél nyugodt!" data-speak-lang="hu-HU">Legyél nyugodt!</button></td>
            <td>полный вариант; может звучать разговорнее или эмоционально выделяться</td>
          </tr>
        </table>
        <div class="warn">Длинная форма не является автоматически более вежливой. Вежливость создают регистр, интонация и отдельные слова смягчения.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Три частые функции</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th></tr>
          <tr>
            <td>совет или поддержка</td>
            <td><button class="speak-btn" data-speak-text="Légy bátor!" data-speak-lang="hu-HU">Légy bátor!</button></td>
          </tr>
          <tr>
            <td>предложение совместного состояния</td>
            <td><button class="speak-btn" data-speak-text="Legyünk pontosak!" data-speak-lang="hu-HU">Legyünk pontosak!</button></td>
          </tr>
          <tr>
            <td>пожелание или требование к ситуации</td>
            <td><button class="speak-btn" data-speak-text="Legyen csend!" data-speak-lang="hu-HU">Legyen csend!</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Формула вежливости</h4>
        <p><button class="speak-btn" data-speak-text="Légy szíves!" data-speak-lang="hu-HU">Légy szíves!</button></p>
        <p><button class="speak-btn" data-speak-text="Legyen szíves!" data-speak-lang="hu-HU">Legyen szíves!</button></p>
        <div class="note">
          В просьбах эти выражения работают как устойчивые формулы со значением «пожалуйста».
          Их не нужно каждый раз переводить буквально как «будь любезен».
          Полные модели просьбы будут на следующем слайде.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Скажи одному другу: «Будь терпелив».</li>
          <li>Предложи группе: «Давайте будем осторожны».</li>
          <li>Скажи нескольким друзьям: «Будьте тихо».</li>
          <li>Вежливо скажи одному человеку: «Будьте точны».</li>
          <li>Сформулируй пожелание: «Пусть будет тишина».</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Légy türelmes!" data-speak-lang="hu-HU">Légy türelmes!</button><br>
            <button class="speak-btn" data-speak-text="Legyünk óvatosak!" data-speak-lang="hu-HU">Legyünk óvatosak!</button><br>
            <button class="speak-btn" data-speak-text="Legyetek csendben!" data-speak-lang="hu-HU">Legyetek csendben!</button><br>
            <button class="speak-btn" data-speak-text="Legyen pontos, kérem." data-speak-lang="hu-HU">Legyen pontos, kérem.</button><br>
            <button class="speak-btn" data-speak-text="Legyen csend!" data-speak-lang="hu-HU">Legyen csend!</button>
          </p>
        </details>

        <div class="note">Граница 22.5: здесь изучены нерегулярные формы глагола lenni. Общая система вежливых просьб рассматривается на 22.6.</div>
      `,
    },
    {
      id: 6,
      eyebrow: "УРОК 22 · 6/11 · ВЕЖЛИВЫЕ ПРОСЬБЫ",
      title: "Udvarias kérések",
      subtitle: "Выбери регистр, затем добавь подходящее смягчение",
      note: 'Вежливость создаётся сочетанием формы обращения, интонации, ситуации и слов смягчения. Одного выражения недостаточно.',
      warn: 'Прямая повелительная форма не всегда грубая, но без контекста может звучать резко. В официальной ситуации используй формальную форму глагола.',
      task: 'Преобразуй каждую прямую инструкцию в дружескую и формальную просьбу, сохраняя правильное спряжение и объект.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Три основных регистра</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>друг или близкий человек</td>
            <td><button class="speak-btn" data-speak-text="kérlek" data-speak-lang="hu-HU">kérlek</button> + неформальная форма</td>
            <td><button class="speak-btn" data-speak-text="Kérlek, csukd be az ajtót!" data-speak-lang="hu-HU">Kérlek, csukd be az ajtót!</button></td>
          </tr>
          <tr>
            <td>дружеская просьба с устойчивой формулой</td>
            <td><button class="speak-btn" data-speak-text="légy szíves" data-speak-lang="hu-HU">légy szíves</button> + неформальная форма</td>
            <td><button class="speak-btn" data-speak-text="Légy szíves, csukd be az ajtót!" data-speak-lang="hu-HU">Légy szíves, csukd be az ajtót!</button></td>
          </tr>
          <tr>
            <td>незнакомый человек или официальная ситуация</td>
            <td><button class="speak-btn" data-speak-text="legyen szíves" data-speak-lang="hu-HU">legyen szíves</button> + формальная форма</td>
            <td><button class="speak-btn" data-speak-text="Legyen szíves, csukja be az ajtót!" data-speak-lang="hu-HU">Legyen szíves, csukja be az ajtót!</button></td>
          </tr>
        </table>

        <div class="warn">
          Не смешивай регистры:
          после
          <button class="speak-btn" data-speak-text="legyen szíves" data-speak-lang="hu-HU">legyen szíves</button>
          нужен формальный глагол, а после
          <button class="speak-btn" data-speak-text="légy szíves" data-speak-lang="hu-HU">légy szíves</button>
          — неформальный.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Формальная просьба без устойчивой формулы</h4>
        <p><button class="speak-btn" data-speak-text="Kérem, várjon egy pillanatot." data-speak-lang="hu-HU">Kérem, várjon egy pillanatot.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, írja alá ezt a dokumentumot." data-speak-lang="hu-HU">Kérem, írja alá ezt a dokumentumot.</button></p>
        <div class="note">Слово kérem создаёт вежливую рамку. Глагол всё равно должен оставаться в правильной формальной форме.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">В кафе и магазине: естественная модель</h4>
        <table class="conj">
          <tr><th>Слишком прямой учебный шаблон</th><th>Естественная нейтральная просьба</th></tr>
          <tr>
            <td>Adjon egy kávét!</td>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
          </tr>
          <tr>
            <td>Legyen szíves, adjon egy kávét!</td>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét, legyen szíves." data-speak-lang="hu-HU">Kérek egy kávét, legyen szíves.</button></td>
          </tr>
          <tr>
            <td>Adja a számlát!</td>
            <td><button class="speak-btn" data-speak-text="A számlát kérem." data-speak-lang="hu-HU">A számlát kérem.</button></td>
          </tr>
        </table>
        <div class="note">В сервисной ситуации конструкция со значением «я прошу» часто естественнее прямого повеления.</div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Один человек и группа</h4>
        <table class="conj">
          <tr><th>Адресат</th><th>Неформально</th><th>Формально</th></tr>
          <tr>
            <td>один человек</td>
            <td><button class="speak-btn" data-speak-text="Légy szíves, várj itt!" data-speak-lang="hu-HU">Légy szíves, várj itt!</button></td>
            <td><button class="speak-btn" data-speak-text="Legyen szíves, várjon itt!" data-speak-lang="hu-HU">Legyen szíves, várjon itt!</button></td>
          </tr>
          <tr>
            <td>несколько человек</td>
            <td><button class="speak-btn" data-speak-text="Legyetek szívesek, várjatok itt!" data-speak-lang="hu-HU">Legyetek szívesek, várjatok itt!</button></td>
            <td><button class="speak-btn" data-speak-text="Legyenek szívesek, várjanak itt!" data-speak-lang="hu-HU">Legyenek szívesek, várjanak itt!</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Одна инструкция в трёх регистрах</h4>
        <table class="conj">
          <tr><th>Регистр</th><th>Пример</th></tr>
          <tr>
            <td>прямо, между близкими</td>
            <td><button class="speak-btn" data-speak-text="Írd le a címet!" data-speak-lang="hu-HU">Írd le a címet!</button></td>
          </tr>
          <tr>
            <td>дружеская просьба</td>
            <td><button class="speak-btn" data-speak-text="Kérlek, írd le a címet!" data-speak-lang="hu-HU">Kérlek, írd le a címet!</button></td>
          </tr>
          <tr>
            <td>формальная просьба</td>
            <td><button class="speak-btn" data-speak-text="Kérem, írja le a címet." data-speak-lang="hu-HU">Kérem, írja le a címet.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-диалоги</h4>
        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Kérlek, segíts egy kicsit!" data-speak-lang="hu-HU">Kérlek, segíts egy kicsit!</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Persze. Mit csináljak?" data-speak-lang="hu-HU">Persze. Mit csináljak?</button></p>
        </div>
        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Elnézést, legyen szíves, mondja meg, hol van a pénztár." data-speak-lang="hu-HU">Elnézést, legyen szíves, mondja meg, hol van a pénztár.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Menjen egyenesen, aztán forduljon jobbra." data-speak-lang="hu-HU">Menjen egyenesen, aztán forduljon jobbra.</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Попроси друга закрыть дверь.</li>
          <li>Вежливо попроси незнакомого человека подождать минуту.</li>
          <li>Закажи кофе естественной нейтральной фразой.</li>
          <li>Попроси нескольких друзей подождать здесь.</li>
          <li>Вежливо попроси нескольких людей подождать здесь.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Kérlek, csukd be az ajtót!" data-speak-lang="hu-HU">Kérlek, csukd be az ajtót!</button><br>
            <button class="speak-btn" data-speak-text="Kérem, várjon egy pillanatot." data-speak-lang="hu-HU">Kérem, várjon egy pillanatot.</button><br>
            <button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button><br>
            <button class="speak-btn" data-speak-text="Legyetek szívesek, várjatok itt!" data-speak-lang="hu-HU">Legyetek szívesek, várjatok itt!</button><br>
            <button class="speak-btn" data-speak-text="Legyenek szívesek, várjanak itt!" data-speak-lang="hu-HU">Legyenek szívesek, várjanak itt!</button>
          </p>
        </details>

        <div class="note">Граница 22.6: здесь отрабатываются прямые вежливые просьбы. Более косвенные просьбы с условным наклонением изучаются в следующем уроке.</div>
      `,
    },
    {
      id: 7,
      eyebrow: "УРОК 22 · 7/11 · УПРАВЛЯЕМАЯ ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Частотные формы в реальных инструкциях и просьбах",
      note: 'Не пытайся каждый раз заново вычислять частотную нерегулярную форму. Запоминай её вместе с типичной ситуацией и объектом.',
      warn: 'Одинаковая русская команда может требовать разных венгерских форм в зависимости от конкретности объекта и адресата.',
      task: 'Пройди четыре блока: движение, действие с предметом, передача информации и восстановление понимания. Затем создай собственную инструкцию.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Движение и маршрут</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Пример</th><th>Что запомнить</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyere" data-speak-lang="hu-HU">gyere</button></td>
            <td><button class="speak-btn" data-speak-text="Gyere ide!" data-speak-lang="hu-HU">Gyere ide!</button></td>
            <td>очень частая разговорная форма глагола «приходить»</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jöjj" data-speak-lang="hu-HU">jöjj</button></td>
            <td><button class="speak-btn" data-speak-text="Jöjj ide!" data-speak-lang="hu-HU">Jöjj ide!</button></td>
            <td>также нормативная форма; значение то же, оттенок зависит от контекста</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="menj" data-speak-lang="hu-HU">menj</button></td>
            <td><button class="speak-btn" data-speak-text="Menj egyenesen!" data-speak-lang="hu-HU">Menj egyenesen!</button></td>
            <td>инструкция одному знакомому человеку</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fordulj" data-speak-lang="hu-HU">fordulj</button></td>
            <td><button class="speak-btn" data-speak-text="Fordulj balra!" data-speak-lang="hu-HU">Fordulj balra!</button></td>
            <td>поворот в маршруте</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="menjünk" data-speak-lang="hu-HU">menjünk</button></td>
            <td><button class="speak-btn" data-speak-text="Menjünk mi is!" data-speak-lang="hu-HU">Menjünk mi is!</button></td>
            <td>говорящий предлагает совместное действие</td>
          </tr>
        </table>

        <div class="note">
          Связная ситуация:
          <button class="speak-btn" data-speak-text="Ők moziba mennek. Menjünk mi is!" data-speak-lang="hu-HU">Ők moziba mennek. Menjünk mi is!</button>
          Сначала сообщается факт, затем предлагается действие для группы вместе с говорящим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Действие с предметом</h4>
        <table class="conj">
          <tr><th>Неопределённый объект</th><th>Конкретный объект</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Írj egy üzenetet!" data-speak-lang="hu-HU">Írj egy üzenetet!</button></td>
            <td><button class="speak-btn" data-speak-text="Írd le ezt a címet!" data-speak-lang="hu-HU">Írd le ezt a címet!</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hozz egy széket!" data-speak-lang="hu-HU">Hozz egy széket!</button></td>
            <td><button class="speak-btn" data-speak-text="Hozd ide a széket!" data-speak-lang="hu-HU">Hozd ide a széket!</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Vigyél vizet!" data-speak-lang="hu-HU">Vigyél vizet!</button></td>
            <td><button class="speak-btn" data-speak-text="Vidd el ezt a táskát!" data-speak-lang="hu-HU">Vidd el ezt a táskát!</button></td>
          </tr>
        </table>

        <div class="note">
          Сначала классифицируй объект, затем выбирай форму. Неопределённый объект:
          <b>egy üzenetet, egy széket, vizet</b>.
          Определённый объект:
          <b>ezt a címet, a széket, ezt a táskát</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Что именно нужно сказать</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Пример</th><th>Почему эта форма</th></tr>
          <tr>
            <td>скажи что-нибудь</td>
            <td><button class="speak-btn" data-speak-text="Mondj neki valamit!" data-speak-lang="hu-HU">Mondj neki valamit!</button></td>
            <td>объект неопределённый</td>
          </tr>
          <tr>
            <td>сообщи ему это или известную информацию</td>
            <td><button class="speak-btn" data-speak-text="Mondd meg neki!" data-speak-lang="hu-HU">Mondd meg neki!</button></td>
            <td>конкретное содержание понятно из ситуации</td>
          </tr>
          <tr>
            <td>скажи ему правду</td>
            <td><button class="speak-btn" data-speak-text="Mondd meg neki az igazat!" data-speak-lang="hu-HU">Mondd meg neki az igazat!</button></td>
            <td>конкретный объект выражен явно</td>
          </tr>
        </table>

        <div class="warn">
          Не объясняй форму только как «двойная d».
          Написание важно, но сначала нужно понять объект:
          <button class="speak-btn" data-speak-text="mondj" data-speak-lang="hu-HU">mondj</button>
          — неопределённая форма,
          <button class="speak-btn" data-speak-text="mondd" data-speak-lang="hu-HU">mondd</button>
          — определённая.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Восстановление понимания</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Реплика</th></tr>
          <tr>
            <td>попросить подождать</td>
            <td><button class="speak-btn" data-speak-text="Várj egy pillanatot!" data-speak-lang="hu-HU">Várj egy pillanatot!</button></td>
          </tr>
          <tr>
            <td>сказать, что не понял</td>
            <td><button class="speak-btn" data-speak-text="Elnézést, nem értettem." data-speak-lang="hu-HU">Elnézést, nem értettem.</button></td>
          </tr>
          <tr>
            <td>попросить повторить неформально</td>
            <td><button class="speak-btn" data-speak-text="Mondd még egyszer, kérlek!" data-speak-lang="hu-HU">Mondd még egyszer, kérlek!</button></td>
          </tr>
          <tr>
            <td>попросить повторить формально</td>
            <td><button class="speak-btn" data-speak-text="Kérem, mondja még egyszer." data-speak-lang="hu-HU">Kérem, mondja még egyszer.</button></td>
          </tr>
          <tr>
            <td>уточнить действие</td>
            <td><button class="speak-btn" data-speak-text="Mit kell csinálnom?" data-speak-lang="hu-HU">Mit kell csinálnom?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Jön ide!</td>
            <td><button class="speak-btn" data-speak-text="Gyere ide!" data-speak-lang="hu-HU">Gyere ide!</button></td>
          </tr>
          <tr>
            <td>Mond meg neki!</td>
            <td><button class="speak-btn" data-speak-text="Mondd meg neki!" data-speak-lang="hu-HU">Mondd meg neki!</button></td>
          </tr>
          <tr>
            <td>Írj le ezt a címet!</td>
            <td><button class="speak-btn" data-speak-text="Írd le ezt a címet!" data-speak-lang="hu-HU">Írd le ezt a címet!</button></td>
          </tr>
          <tr>
            <td>Fordul balra!</td>
            <td><button class="speak-btn" data-speak-text="Fordulj balra!" data-speak-lang="hu-HU">Fordulj balra!</button></td>
          </tr>
        </table>

        <div class="task">
          Создай инструкцию из шести реплик: начни движение, добавь поворот, попроси принести неопределённый предмет,
          затем перенести конкретный предмет, сообщить известную информацию и в конце попросить повторить одну реплику.
        </div>

        <div class="note">Граница 22.7: здесь мы тренируем готовые формы и выбор объекта. На следующем слайде используем их в одном формальном диалоге.</div>
      `,
    },
    {
      id: 8,
      eyebrow: "УРОК 22 · 8/11 · ДИАЛОГ",
      title: "Útbaigazítás és visszakérdezés",
      subtitle: "Вежливо спросить дорогу, понять маршрут и попросить повторить",
      note: 'Все побуждения в этом диалоге обращены к одному незнакомому человеку на «Вы». Формы совпадают с третьим лицом, но контекст здесь однозначно формальный.',
      warn: 'Не определяй адресата только по окончанию. Сначала установи, кто с кем разговаривает и кому адресована просьба.',
      task: 'Прослушай диалог по ролям, восстанови маршрут, найди формальные формы и затем разыграй новую ситуацию.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Ситуация: прохожий ищет аптеку</h4>
        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Elnézést, legyen szíves, mondja meg, hol van a legközelebbi gyógyszertár." data-speak-lang="hu-HU">Elnézést, legyen szíves, mondja meg, hol van a legközelebbi gyógyszertár.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Menjen egyenesen a lámpáig, aztán forduljon balra." data-speak-lang="hu-HU">Menjen egyenesen a lámpáig, aztán forduljon balra.</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Elnézést, nem értettem. Mondja még egyszer, kérem." data-speak-lang="hu-HU">Elnézést, nem értettem. Mondja még egyszer, kérem.</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Persze. Először menjen egyenesen a lámpáig. Ott forduljon balra, majd menjen át az úton." data-speak-lang="hu-HU">Persze. Először menjen egyenesen a lámpáig. Ott forduljon balra, majd menjen át az úton.</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="A gyógyszertár az út másik oldalán van?" data-speak-lang="hu-HU">A gyógyszertár az út másik oldalán van?</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen. Nézze meg a zöld keresztet. A gyógyszertár a posta mellett van." data-speak-lang="hu-HU">Igen. Nézze meg a zöld keresztet. A gyógyszertár a posta mellett van.</button></p>
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Értem. Köszönöm szépen!" data-speak-lang="hu-HU">Értem. Köszönöm szépen!</button></p>
          <p><b>B:</b> <button class="speak-btn" data-speak-text="Szívesen." data-speak-lang="hu-HU">Szívesen.</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как устроен маршрут</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Инструкция</th><th>Ориентир</th></tr>
          <tr>
            <td>1</td>
            <td><button class="speak-btn" data-speak-text="Menjen egyenesen." data-speak-lang="hu-HU">Menjen egyenesen.</button></td>
            <td>до светофора</td>
          </tr>
          <tr>
            <td>2</td>
            <td><button class="speak-btn" data-speak-text="Forduljon balra." data-speak-lang="hu-HU">Forduljon balra.</button></td>
            <td>у светофора</td>
          </tr>
          <tr>
            <td>3</td>
            <td><button class="speak-btn" data-speak-text="Menjen át az úton." data-speak-lang="hu-HU">Menjen át az úton.</button></td>
            <td>на другую сторону</td>
          </tr>
          <tr>
            <td>4</td>
            <td><button class="speak-btn" data-speak-text="Nézze meg a zöld keresztet." data-speak-lang="hu-HU">Nézze meg a zöld keresztet.</button></td>
            <td>зелёный крест аптеки</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Формы в диалоге</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Адресат в этом диалоге</th><th>Почему</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="legyen szíves" data-speak-lang="hu-HU">legyen szíves</button></td>
            <td>один человек, формально</td>
            <td>устойчивая вежливая рамка</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mondja meg" data-speak-lang="hu-HU">mondja meg</button></td>
            <td>один человек, формально</td>
            <td>просьба сообщить конкретную информацию</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="menjen" data-speak-lang="hu-HU">menjen</button></td>
            <td>один человек, формально</td>
            <td>инструкция без прямого объекта</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="forduljon" data-speak-lang="hu-HU">forduljon</button></td>
            <td>один человек, формально</td>
            <td>инструкция движения</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nézze meg" data-speak-lang="hu-HU">nézze meg</button></td>
            <td>один человек, формально</td>
            <td>конкретный объект: зелёный крест</td>
          </tr>
        </table>

        <div class="warn">
          Формы
          <button class="speak-btn" data-speak-text="menjen" data-speak-lang="hu-HU">menjen</button>
          и
          <button class="speak-btn" data-speak-text="forduljon" data-speak-lang="hu-HU">forduljon</button>
          могут также относиться к третьему лицу: «пусть он идёт», «пусть он повернёт».
          В этом диалоге они означают формальное «идите» и «поверните», потому что один собеседник даёт маршрут другому.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Восстановление понимания</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Реплика</th></tr>
          <tr>
            <td>остановить и извиниться</td>
            <td><button class="speak-btn" data-speak-text="Elnézést." data-speak-lang="hu-HU">Elnézést.</button></td>
          </tr>
          <tr>
            <td>сообщить о проблеме</td>
            <td><button class="speak-btn" data-speak-text="Nem értettem." data-speak-lang="hu-HU">Nem értettem.</button></td>
          </tr>
          <tr>
            <td>попросить повторить</td>
            <td><button class="speak-btn" data-speak-text="Mondja még egyszer, kérem." data-speak-lang="hu-HU">Mondja még egyszer, kérem.</button></td>
          </tr>
          <tr>
            <td>проверить ориентир</td>
            <td><button class="speak-btn" data-speak-text="A gyógyszertár az út másik oldalán van?" data-speak-lang="hu-HU">A gyógyszertár az út másik oldalán van?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Проверка понимания</h4>
        <ol class="tasklist">
          <li>Куда нужно идти сначала?</li>
          <li>Где нужно повернуть?</li>
          <li>Что нужно сделать после поворота?</li>
          <li>Какой визуальный ориентир нужно искать?</li>
          <li>Какая реплика показывает, что человек не понял инструкцию?</li>
          <li>Почему формы в диалоге означают «Вы», а не «они»?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">RolePlay</h4>
        <div class="task">
          Замени аптеку на почту, банк или остановку. Один участник вежливо спрашивает дорогу.
          Второй даёт минимум четыре последовательные инструкции. Первый один раз сообщает, что не понял, просит повторить и проверяет один ориентир.
        </div>

        <div class="note">Самопроверка: в новом диалоге есть формальное обращение, последовательность, ориентир, восстановление понимания и естественное завершение разговора.</div>
      `,
    },
    {
      id: 9,
      eyebrow: "УРОК 22 · 9/11 · ИНТЕГРАЦИОННАЯ ПРАКТИКА",
      title: "Gyakorlatok",
      subtitle: "Исполнитель → объект → регистр → правильная форма",
      activities: L22_ACTIVITIES,
      optionalSpeaking: L22_OPTIONAL_SPEAKING,
      note: 'Не начинай с окончания. Сначала установи, кто должен действовать, есть ли прямой объект и какой регистр нужен.',
      warn: 'В сервисной ситуации грамматически возможная команда не всегда является самым естественным способом попросить. Сравнивай форму и речевую ситуацию.',
      task: 'Выполни пять этапов: анализ, образование формы, исправление ошибок, выбор регистра и связная инструкция.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Контрольный алгоритм</h4>
        <ol class="tasklist">
          <li>Кто должен выполнить действие: один знакомый, один формальный собеседник, группа или мы вместе?</li>
          <li>Есть ли прямой объект?</li>
          <li>Если объект есть, он неопределённый или конкретный?</li>
          <li>Нужна неформальная или формальная форма?</li>
          <li>Есть ли изменение основы, нерегулярная форма или глагольная приставка?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 1. Получи основу и форму</h4>
        <table class="conj">
          <tr><th>Инфинитив</th><th>Основа</th><th>Форма одному знакомому человеку</th><th>Модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanulni" data-speak-lang="hu-HU">tanulni</button></td>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td><button class="speak-btn" data-speak-text="Tanulj!" data-speak-lang="hu-HU">Tanulj!</button></td>
            <td>простое добавление показателя</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="írni" data-speak-lang="hu-HU">írni</button></td>
            <td><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU">ír</button></td>
            <td><button class="speak-btn" data-speak-text="Írj!" data-speak-lang="hu-HU">Írj!</button></td>
            <td>простое добавление показателя</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olvasni" data-speak-lang="hu-HU">olvasni</button></td>
            <td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU">olvas</button></td>
            <td><button class="speak-btn" data-speak-text="Olvass!" data-speak-lang="hu-HU">Olvass!</button></td>
            <td>слияние конечного согласного</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hozni" data-speak-lang="hu-HU">hozni</button></td>
            <td><button class="speak-btn" data-speak-text="hoz" data-speak-lang="hu-HU">hoz</button></td>
            <td><button class="speak-btn" data-speak-text="Hozz!" data-speak-lang="hu-HU">Hozz!</button></td>
            <td>слияние конечного согласного</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mutatni" data-speak-lang="hu-HU">mutatni</button></td>
            <td><button class="speak-btn" data-speak-text="mutat" data-speak-lang="hu-HU">mutat</button></td>
            <td><button class="speak-btn" data-speak-text="Mutass!" data-speak-lang="hu-HU">Mutass!</button></td>
            <td>частая модель глагола на конечный согласный</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 2. Один глагол — два типа объекта</h4>
        <table class="conj">
          <tr><th>Неопределённый объект</th><th>Определённый объект</th><th>Что нужно объяснить</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvass el egy cikket!" data-speak-lang="hu-HU">Olvass el egy cikket!</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasd el ezt a cikket!" data-speak-lang="hu-HU">Olvasd el ezt a cikket!</button></td>
            <td>одна статья или именно эта статья</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Írj egy címet!" data-speak-lang="hu-HU">Írj egy címet!</button></td>
            <td><button class="speak-btn" data-speak-text="Írd le ezt a címet!" data-speak-lang="hu-HU">Írd le ezt a címet!</button></td>
            <td>какой-то адрес или конкретный адрес</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mondj valamit!" data-speak-lang="hu-HU">Mondj valamit!</button></td>
            <td><button class="speak-btn" data-speak-text="Mondd meg az igazat!" data-speak-lang="hu-HU">Mondd meg az igazat!</button></td>
            <td>что-нибудь или конкретная правда</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 3. Исправь ошибку и назови причину</h4>
        <table class="conj">
          <tr><th>Ошибочная форма</th><th>Правильная форма</th><th>Причина</th></tr>
          <tr>
            <td>Olvasj egy cikket!</td>
            <td><button class="speak-btn" data-speak-text="Olvass egy cikket!" data-speak-lang="hu-HU">Olvass egy cikket!</button></td>
            <td>слияние после конечного согласного</td>
          </tr>
          <tr>
            <td>Hozj egy széket!</td>
            <td><button class="speak-btn" data-speak-text="Hozz egy széket!" data-speak-lang="hu-HU">Hozz egy széket!</button></td>
            <td>слияние после конечного согласного</td>
          </tr>
          <tr>
            <td>Mutatj egy képet!</td>
            <td><button class="speak-btn" data-speak-text="Mutass egy képet!" data-speak-lang="hu-HU">Mutass egy képet!</button></td>
            <td>изменение основы у частой группы</td>
          </tr>
          <tr>
            <td>Írj le ezt a címet!</td>
            <td><button class="speak-btn" data-speak-text="Írd le ezt a címet!" data-speak-lang="hu-HU">Írd le ezt a címet!</button></td>
            <td>конкретный прямой объект</td>
          </tr>
          <tr>
            <td>Legyen szíves, várj itt!</td>
            <td><button class="speak-btn" data-speak-text="Legyen szíves, várjon itt!" data-speak-lang="hu-HU">Legyen szíves, várjon itt!</button></td>
            <td>формальная рамка требует формального глагола</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 4. Одна просьба в разных регистрах</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Естественная реплика</th></tr>
          <tr>
            <td>друг</td>
            <td><button class="speak-btn" data-speak-text="Kérlek, segíts!" data-speak-lang="hu-HU">Kérlek, segíts!</button></td>
          </tr>
          <tr>
            <td>один незнакомый человек</td>
            <td><button class="speak-btn" data-speak-text="Legyen szíves, segítsen!" data-speak-lang="hu-HU">Legyen szíves, segítsen!</button></td>
          </tr>
          <tr>
            <td>несколько незнакомых людей</td>
            <td><button class="speak-btn" data-speak-text="Legyenek szívesek, segítsenek!" data-speak-lang="hu-HU">Legyenek szívesek, segítsenek!</button></td>
          </tr>
          <tr>
            <td>заказ в кафе</td>
            <td><button class="speak-btn" data-speak-text="Kérek egy teát, legyen szíves." data-speak-lang="hu-HU">Kérek egy teát, legyen szíves.</button></td>
          </tr>
        </table>

        <div class="note">
          В кафе последняя реплика обычно естественнее прямой команды со значением «дайте чай».
          Цель — не только грамматически правильная, но и уместная речь.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Этап 5. Связная инструкция</h4>
        <p><button class="speak-btn" data-speak-text="Először menjen egyenesen." data-speak-lang="hu-HU">Először menjen egyenesen.</button></p>
        <p><button class="speak-btn" data-speak-text="Aztán forduljon balra." data-speak-lang="hu-HU">Aztán forduljon balra.</button></p>
        <p><button class="speak-btn" data-speak-text="Végül nézze meg a táblát." data-speak-lang="hu-HU">Végül nézze meg a táblát.</button></p>

        <div class="task">
          Создай маршрут или простую рабочую процедуру из шести реплик.
          Используй минимум одну неопределённую форму, две определённые формы, одну формальную просьбу,
          один запрет из уже изученного материала и одну реплику для восстановления понимания.
        </div>

        <div class="note">
          Самопроверка: для каждой формы ты можешь назвать исполнителя, объект, регистр и изменение основы.
          После этого выполни встроенные интерактивные задания и устную практику.
        </div>
      `,
    },
    {
      id: 10,
      eyebrow: "УРОК 22 · 10/11 · РАСШИРЕНИЕ ФУНКЦИИ",
      title: "Felszólító alak a hogy-mondatban",
      subtitle: "Не только прямая команда: желание, просьба и необходимость",
      note: 'После некоторых выражений желания, просьбы, требования и необходимости в придаточной части употребляются формы повелительного наклонения.',
      warn: 'Это не означает, что любая придаточная часть с hogy требует такую форму. Сначала найди выражение, которое задаёт желаемое или необходимое действие.',
      task: 'В каждом примере найди главное выражение, исполнителя действия в придаточной части и коммуникативную функцию.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Прямая команда и встроенное действие</h4>
        <table class="conj">
          <tr><th>Прямая реплика</th><th>То же действие внутри сложного предложения</th><th>Что изменилось</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Gyere ide!" data-speak-lang="hu-HU">Gyere ide!</button></td>
            <td><button class="speak-btn" data-speak-text="Azt akarom, hogy gyere ide." data-speak-lang="hu-HU">Azt akarom, hogy gyere ide.</button></td>
            <td>говорящий выражает желание, а не просто отдаёт команду</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Várjon itt!" data-speak-lang="hu-HU">Várjon itt!</button></td>
            <td><button class="speak-btn" data-speak-text="Arra kérem, hogy várjon itt." data-speak-lang="hu-HU">Arra kérem, hogy várjon itt.</button></td>
            <td>формальная просьба оформлена как сложное предложение</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Írd alá a papírt!" data-speak-lang="hu-HU">Írd alá a papírt!</button></td>
            <td><button class="speak-btn" data-speak-text="Fontos, hogy írd alá a papírt." data-speak-lang="hu-HU">Fontos, hogy írd alá a papírt.</button></td>
            <td>действие представлено как необходимое или важное</td>
          </tr>
        </table>

        <div class="note">
          Форма глагола похожа на прямую команду, но внутри сложного предложения она показывает действие,
          которое кто-то хочет, просит, требует или считает необходимым.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Четыре частые рамки</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Главная часть</th><th>Полный пример</th></tr>
          <tr>
            <td>желание</td>
            <td><button class="speak-btn" data-speak-text="Azt akarom" data-speak-lang="hu-HU">Azt akarom</button></td>
            <td><button class="speak-btn" data-speak-text="Azt akarom, hogy gyere el." data-speak-lang="hu-HU">Azt akarom, hogy gyere el.</button></td>
          </tr>
          <tr>
            <td>просьба</td>
            <td><button class="speak-btn" data-speak-text="Arra kérem" data-speak-lang="hu-HU">Arra kérem</button></td>
            <td><button class="speak-btn" data-speak-text="Arra kérem, hogy írja alá." data-speak-lang="hu-HU">Arra kérem, hogy írja alá.</button></td>
          </tr>
          <tr>
            <td>важность или необходимость</td>
            <td><button class="speak-btn" data-speak-text="Fontos" data-speak-lang="hu-HU">Fontos</button></td>
            <td><button class="speak-btn" data-speak-text="Fontos, hogy időben érkezz." data-speak-lang="hu-HU">Fontos, hogy időben érkezz.</button></td>
          </tr>
          <tr>
            <td>переданная инструкция</td>
            <td><button class="speak-btn" data-speak-text="Az orvos azt mondta" data-speak-lang="hu-HU">Az orvos azt mondta</button></td>
            <td><button class="speak-btn" data-speak-text="Az orvos azt mondta, hogy pihenjek." data-speak-lang="hu-HU">Az orvos azt mondta, hogy pihenjek.</button></td>
          </tr>
        </table>

        <div class="warn">
          В последнем примере действие выполняет сам говорящий.
          Поэтому форма придаточной части относится к первому лицу и не является командой собеседнику.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как анализировать такое предложение</h4>
        <ol class="tasklist">
          <li>Найди главную часть и её функцию: желание, просьба, требование, важность или переданная инструкция.</li>
          <li>Найди союз <b>hogy</b>.</li>
          <li>Определи, кто должен выполнить действие в придаточной части.</li>
          <li>Проверь объект и нужное спряжение так же, как в простом побуждении.</li>
          <li>Не переводи форму автоматически как прямой приказ.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мост к уроку 23</h4>
        <table class="conj">
          <tr><th>Прямая вежливая просьба</th><th>Более косвенный вопрос</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Segítsen, kérem!" data-speak-lang="hu-HU">Segítsen, kérem!</button></td>
            <td><button class="speak-btn" data-speak-text="Segítene, kérem?" data-speak-lang="hu-HU">Segítene, kérem?</button></td>
          </tr>
        </table>
        <div class="note">
          Первая реплика использует повелительную форму. Вторая использует условную форму и часто звучит косвеннее.
          На этом слайде нужно только услышать контраст; образование условного наклонения начинается в уроке 23.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Какая главная часть выражает желание?</li>
          <li>В каком примере оформлена формальная просьба?</li>
          <li>Кто должен отдыхать в примере с врачом?</li>
          <li>Почему не каждое предложение с союзом hogy требует повелительную форму?</li>
          <li>Какая из двух последних просьб является более косвенной?</li>
        </ol>

        <div class="task">
          Преобразуй две прямые реплики в сложные предложения:
          одну через желание, вторую через формальную просьбу.
          Используй только модели, показанные на слайде.
        </div>

        <div class="note">Граница 22.10: здесь мы только распознаём расширенную функцию повелительных форм. Полное образование и употребление условного наклонения начинается в следующем уроке.</div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 22 · 11/11 · ИТОГИ И САМОПРОВЕРКА",
      title: "Összefoglalás",
      subtitle: "Намерение → исполнитель → объект → регистр → форма",
      note: 'Главный результат урока — не запомнить один суффикс, а уметь объяснить выбор формы в конкретной ситуации.',
      warn: 'Показатель повелительного наклонения не всегда остаётся видимым как отдельная буква. Он может сливаться с последним согласным, менять основу или входить в нерегулярную форму.',
      task: 'Пройди итоговый алгоритм, исправь ошибки, выполни мини-проверку и создай собственную инструкцию.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Итоговый алгоритм</h4>
        <ol class="tasklist">
          <li>Определи намерение: просьба, совет, инструкция, предложение совместного действия или пожелание.</li>
          <li>Определи исполнителя: один знакомый, один формальный собеседник, группа, мы вместе или третье лицо.</li>
          <li>Найди прямой объект и установи, неопределённый он или конкретный.</li>
          <li>Выбери неопределённую или определённую парадигму.</li>
          <li>Проверь изменение основы, нерегулярную форму и положение глагольной приставки.</li>
          <li>Согласуй регистр всей реплики: формулу вежливости и форму глагола.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пять опорных контрастов</h4>
        <table class="conj">
          <tr><th>Что проверяем</th><th>Пример</th><th>Вывод</th></tr>
          <tr>
            <td>неформально и формально</td>
            <td>
              <button class="speak-btn" data-speak-text="Várj egy pillanatot!" data-speak-lang="hu-HU">Várj egy pillanatot!</button><br>
              <button class="speak-btn" data-speak-text="Kérem, várjon egy pillanatot." data-speak-lang="hu-HU">Kérem, várjon egy pillanatot.</button>
            </td>
            <td>адресат определяет личную форму</td>
          </tr>
          <tr>
            <td>неопределённый и конкретный объект</td>
            <td>
              <button class="speak-btn" data-speak-text="Olvass el egy cikket!" data-speak-lang="hu-HU">Olvass el egy cikket!</button><br>
              <button class="speak-btn" data-speak-text="Olvasd el ezt a cikket!" data-speak-lang="hu-HU">Olvasd el ezt a cikket!</button>
            </td>
            <td>объект выбирает парадигму</td>
          </tr>
          <tr>
            <td>совместное действие</td>
            <td><button class="speak-btn" data-speak-text="Menjünk!" data-speak-lang="hu-HU">Menjünk!</button></td>
            <td>говорящий включает себя</td>
          </tr>
          <tr>
            <td>нерегулярный глагол</td>
            <td>
              <button class="speak-btn" data-speak-text="Légy türelmes!" data-speak-lang="hu-HU">Légy türelmes!</button><br>
              <button class="speak-btn" data-speak-text="Legyen pontos, kérem." data-speak-lang="hu-HU">Legyen pontos, kérem.</button>
            </td>
            <td>формы глагола «быть» учатся отдельно</td>
          </tr>
          <tr>
            <td>вежливая сервисная просьба</td>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét, legyen szíves." data-speak-lang="hu-HU">Kérek egy kávét, legyen szíves.</button></td>
            <td>уместная просьба не обязана быть прямой командой</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Изменение основы и написания</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Основа → форма</th><th>Что запомнить</th></tr>
          <tr>
            <td>простая модель</td>
            <td><button class="speak-btn" data-speak-text="vár → várj" data-speak-lang="hu-HU">vár → várj</button></td>
            <td>показатель виден</td>
          </tr>
          <tr>
            <td>конечный s</td>
            <td><button class="speak-btn" data-speak-text="olvas → olvass" data-speak-lang="hu-HU">olvas → olvass</button></td>
            <td>s + j → ss</td>
          </tr>
          <tr>
            <td>конечный sz</td>
            <td><button class="speak-btn" data-speak-text="mász → mássz" data-speak-lang="hu-HU">mász → mássz</button></td>
            <td>sz + j → ssz</td>
          </tr>
          <tr>
            <td>конечный z</td>
            <td><button class="speak-btn" data-speak-text="hoz → hozz" data-speak-lang="hu-HU">hoz → hozz</button></td>
            <td>z + j → zz</td>
          </tr>
          <tr>
            <td>частые глаголы на t</td>
            <td>
              <button class="speak-btn" data-speak-text="mutat → mutass" data-speak-lang="hu-HU">mutat → mutass</button><br>
              <button class="speak-btn" data-speak-text="tanít → taníts" data-speak-lang="hu-HU">tanít → taníts</button><br>
              <button class="speak-btn" data-speak-text="lát → láss" data-speak-lang="hu-HU">lát → láss</button>
            </td>
            <td>нет одной формулы для всех основ на t</td>
          </tr>
          <tr>
            <td>частотная нерегулярная форма</td>
            <td>
              <button class="speak-btn" data-speak-text="jön → gyere" data-speak-lang="hu-HU">jön → gyere</button>
              /
              <button class="speak-btn" data-speak-text="jön → jöjj" data-speak-lang="hu-HU">jön → jöjj</button>
            </td>
            <td>учи готовой парой</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Глагольная приставка</h4>
        <table class="conj">
          <tr><th>Инфинитив</th><th>Положительная инструкция</th></tr>
          <tr><td><button class="speak-btn" data-speak-text="elolvasni" data-speak-lang="hu-HU">elolvasni</button></td><td><button class="speak-btn" data-speak-text="Olvasd el!" data-speak-lang="hu-HU">Olvasd el!</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="megnézni" data-speak-lang="hu-HU">megnézni</button></td><td><button class="speak-btn" data-speak-text="Nézd meg!" data-speak-lang="hu-HU">Nézd meg!</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="leírni" data-speak-lang="hu-HU">leírni</button></td><td><button class="speak-btn" data-speak-text="Írd le!" data-speak-lang="hu-HU">Írd le!</button></td></tr>
          <tr><td><button class="speak-btn" data-speak-text="felhívni" data-speak-lang="hu-HU">felhívni</button></td><td><button class="speak-btn" data-speak-text="Hívd fel!" data-speak-lang="hu-HU">Hívd fel!</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пять типичных ошибок</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Причина</th></tr>
          <tr>
            <td>Olvasj!</td>
            <td><button class="speak-btn" data-speak-text="Olvass!" data-speak-lang="hu-HU">Olvass!</button></td>
            <td>слияние после s</td>
          </tr>
          <tr>
            <td>Mászj!</td>
            <td><button class="speak-btn" data-speak-text="Mássz!" data-speak-lang="hu-HU">Mássz!</button></td>
            <td>удвоенная буква sz пишется как ssz</td>
          </tr>
          <tr>
            <td>Írj le ezt a címet!</td>
            <td><button class="speak-btn" data-speak-text="Írd le ezt a címet!" data-speak-lang="hu-HU">Írd le ezt a címet!</button></td>
            <td>конкретный прямой объект</td>
          </tr>
          <tr>
            <td>Legyen szíves, várj!</td>
            <td><button class="speak-btn" data-speak-text="Legyen szíves, várjon!" data-speak-lang="hu-HU">Legyen szíves, várjon!</button></td>
            <td>нельзя смешивать регистры</td>
          </tr>
          <tr>
            <td>Jön ide!</td>
            <td><button class="speak-btn" data-speak-text="Gyere ide!" data-speak-lang="hu-HU">Gyere ide!</button></td>
            <td>нужна повелительная форма</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Попроси друга подождать минуту.</li>
          <li>Вежливо попроси незнакомого человека подождать минуту.</li>
          <li>Попроси прочитать какую-нибудь статью.</li>
          <li>Попроси прочитать именно эту статью.</li>
          <li>Предложи группе вместе пойти.</li>
          <li>Попроси друга позвонить Анне.</li>
        </ol>

        <details>
          <summary><b>Проверить возможные ответы</b></summary>
          <p>
            <button class="speak-btn" data-speak-text="Várj egy pillanatot!" data-speak-lang="hu-HU">Várj egy pillanatot!</button><br>
            <button class="speak-btn" data-speak-text="Kérem, várjon egy pillanatot." data-speak-lang="hu-HU">Kérem, várjon egy pillanatot.</button><br>
            <button class="speak-btn" data-speak-text="Olvass el egy cikket!" data-speak-lang="hu-HU">Olvass el egy cikket!</button><br>
            <button class="speak-btn" data-speak-text="Olvasd el ezt a cikket!" data-speak-lang="hu-HU">Olvasd el ezt a cikket!</button><br>
            <button class="speak-btn" data-speak-text="Menjünk!" data-speak-lang="hu-HU">Menjünk!</button><br>
            <button class="speak-btn" data-speak-text="Hívd fel Annát!" data-speak-lang="hu-HU">Hívd fel Annát!</button>
          </p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Домашняя работа</h4>
        <div class="task">
          Выбери один формат: рецепт или маршрут. Напиши восемь связанных инструкций.
          Используй минимум две формы с изменением основы, две определённые формы,
          одну форму совместного действия, одну вежливую формальную просьбу и одну глагольную приставку после глагола.
        </div>
        <div class="note">
          Чек-лист: адресат понятен; объекты выбраны правильно; регистр не смешан;
          инструкции расположены в логическом порядке; каждую форму можно объяснить.
        </div>

        <div class="warn">
          Граница урока 22: здесь завершены прямые просьбы, инструкции и побуждения.
          Следующий урок вводит условное наклонение для гипотез, желаний и более косвенных просьб.
        </div>
      `,
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
