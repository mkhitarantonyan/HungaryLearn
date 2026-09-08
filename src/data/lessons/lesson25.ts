import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L25_ACTIVITIES = createMigrationActivities({
  lessonId: 25,
  activitySequence: 'communication',
  controlledTitle: 'Работа и собеседование: ключевые формулировки',
  controlledPassCount: 10,
  controlledExercises: [
    { kind: 'singleChoice', id: 'l25-cp-1', prompt: 'A · На собеседовании вежливо спрашивают о профессии.', options: ['Mivel foglalkozik?', 'Hol lakik?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-2', prompt: 'B · Сообщи о количестве опыта.', options: ['Három év tapasztalatom van.', 'Három évig tapasztalat vagyok.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-3', prompt: 'B · Сообщи, где и как долго работал(а).', options: ['Két évig egy szállodában dolgoztam.', 'Két éve egy szállodába dolgozom.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-4', prompt: 'C · Назови прежнюю обязанность.', options: ['A feladataim közé tartozott az ügyfelek segítése.', 'A feladataim három év tapasztalatom van.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l25-cp-5', prompt: 'C · Főleg az ügyfelek kérdéseivel ___.', accept: ['foglalkoztam'] },
    { kind: 'singleChoice', id: 'l25-cp-6', prompt: 'D · Назови умение профессионально.', options: ['Jól tudok problémákat megoldani.', 'Jó vagyok egy problémát.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-7', prompt: 'D · Вырази сильную сторону.', options: ['Az egyik erősségem, hogy gyorsan tanulok.', 'Az egyik munkám gyorsan tanul.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-8', prompt: 'D · Подчеркни командную работу.', options: ['Szeretek csapatban dolgozni.', 'Szeretem csapatot dolgozom.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-9', prompt: 'D · Подчеркни самостоятельность.', options: ['Önállóan is tudok dolgozni.', 'Önállóan is munkát vagyok.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-10', prompt: 'E · Работодатель вежливо спрашивает о доступности.', options: ['Mikor tudna kezdeni?', 'Mikor tudsz kezdett?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-11', prompt: 'E · Кандидат просит больше информации.', options: ['Szeretnék többet megtudni a pozícióról.', 'Többet tudom a pozíciót.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-12', prompt: 'E · Кандидат спрашивает о графике.', options: ['Milyen a munkaidő?', 'Milyen dolgozik az idő?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l25-cp-13', prompt: 'E · Вежливо заверши собеседование.', options: ['Köszönöm a lehetőséget.', 'Köszönök a lehetőségben.'], correctIndex: 0 },
  ],
  readingTitle: 'Ügyfélszolgálati munkatársat keresünk',
  readingParagraphs: [
    'Egy budapesti szolgáltató cég ügyfélszolgálati munkatársat keres teljes munkaidőben. A munkatárs fő feladata, hogy telefonon és e-mailben segítsen az ügyfeleknek, válaszoljon a kérdéseikre, és egyszerűbb problémákat önállóan megoldjon.',
    'Olyan jelentkezőt keresünk, aki jól kommunikál, türelmes, pontos és szívesen dolgozik emberekkel. Fontos a magabiztos angol nyelvtudás, a magyar nyelv ismerete pedig előnyt jelent. Korábbi ügyfélszolgálati vagy irodai tapasztalat előny, de nem feltétel, mert az új kollégák képzést kapnak.',
    'A munka hétfőtől péntekig tart, általában 9 és 17 óra között. A betanulási időszak után heti két nap otthoni munkára is van lehetőség.',
    'Jelentkezéshez rövid önéletrajzot és néhány mondatos bemutatkozást kérünk. A kiválasztott jelentkezőket személyes vagy online interjúra hívjuk.',
  ],
  readingPassCount: 6,
  readingQuestions: [
    { id: 'l25-read-1', question: 'Mi a munkatárs fő feladata?', options: ['Segíteni az ügyfeleknek és egyszerűbb problémákat megoldani', 'Új termékeket gyártani', 'Külföldre utazni'], correctIndex: 0 },
    { id: 'l25-read-2', question: 'Milyen csatornákon kommunikál az ügyfelekkel?', options: ['Telefonon és e-mailben', 'Csak személyesen', 'Postai levélben'], correctIndex: 0 },
    { id: 'l25-read-3', question: 'Milyen személyes tulajdonságokat keresnek?', options: ['Jó kommunikációt, türelmet és pontosságot', 'Gyors futást és fizikai erőt', 'Művészi tapasztalatot'], correctIndex: 0 },
    { id: 'l25-read-4', question: 'Melyik nyelvtudás fontos feltétel?', options: ['Magabiztos angol', 'Magabiztos francia', 'Anyanyelvi német'], correctIndex: 0 },
    { id: 'l25-read-5', question: 'Kötelező a korábbi ügyfélszolgálati tapasztalat?', options: ['Nem, előny, de nem feltétel', 'Igen, legalább öt év kell', 'Csak vezetői tapasztalat kell'], correctIndex: 0 },
    { id: 'l25-read-6', question: 'Milyen a munkaidő?', options: ['Hétfőtől péntekig, általában 9–17 óráig', 'Csak hétvégén', 'Minden éjjel'], correctIndex: 0 },
    { id: 'l25-read-7', question: 'Mikor lehet heti két napot otthonról dolgozni?', options: ['A betanulási időszak után', 'Az első naptól feltétel nélkül', 'Csak a próba előtt'], correctIndex: 0 },
    { id: 'l25-read-8', question: 'Mit kell elküldeni a jelentkezéshez?', options: ['Rövid önéletrajzot és néhány mondatos bemutatkozást', 'Útlevelet és fényképet', 'Hosszú szakdolgozatot'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: фрагмент собеседования',
  listeningTranscript: 'Interjúztató: Mivel foglalkozott korábban?\nJelölt: Két évig egy szállodában dolgoztam. Jól beszélek angolul, és szeretek emberekkel dolgozni.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l25-listen-1', question: 'Hol dolgozott a jelölt?', options: ['Egy szállodában', 'Egy iskolában', 'Egy kórházban'], correctIndex: 0 },
    { id: 'l25-listen-2', question: 'Mennyi ideig dolgozott ott?', options: ['Két hónapig', 'Két évig', 'Tíz évig'], correctIndex: 1 },
    { id: 'l25-listen-3', question: 'Mit szeret?', options: ['Egyedül dolgozni', 'Emberekkel dolgozni', 'Utazni'], correctIndex: 1 },
  ],
  rolePlay: {
    title: 'RolePlay: собеседование на офисную должность',
    partnerLabel: 'Интервьюер',
    completionMessage: 'Собеседование завершено. Проверь, описал(а) ли ты опыт, обязанности, сильную сторону, мотивацию и задал(а) ли практический вопрос.',
    startTurnId: 'l25-rp-1',
    turns: [
      { id: 'l25-rp-1', speaker: 'waiter', prompt: 'Jó napot kívánok! Köszönöm, hogy eljött. Kérem, röviden mutatkozzon be.', next: 'l25-rp-2' },
      { id: 'l25-rp-2', speaker: 'learner', prompt: 'Поприветствуй и кратко представься без реальных персональных данных.', responseMode: 'selfPractice', model: 'Jó napot kívánok! Irodai és ügyfélszolgálati munka érdekel.', next: 'l25-rp-3' },
      { id: 'l25-rp-3', speaker: 'waiter', prompt: 'Értem. Hol dolgozott korábban?', next: 'l25-rp-4' },
      { id: 'l25-rp-4', speaker: 'learner', prompt: 'Расскажи о вымышленном предыдущем месте и продолжительности работы своими словами.', responseMode: 'selfPractice', model: 'Korábban két évig egy szállodában dolgoztam.', next: 'l25-rp-5' },
      { id: 'l25-rp-5', speaker: 'waiter', prompt: 'Rendben. Mik voltak ott a fő feladatai?', next: 'l25-rp-6' },
      { id: 'l25-rp-6', speaker: 'learner', prompt: 'Назови две обязанности.', responseMode: 'selfPractice', model: 'A feladataim közé tartozott az ügyfelek segítése és az e-mailek megválaszolása.', next: 'l25-rp-7' },
      { id: 'l25-rp-7', speaker: 'waiter', prompt: 'Értem. Mi az egyik erőssége, és miért szeretne nálunk dolgozni?', next: 'l25-rp-8' },
      { id: 'l25-rp-8', speaker: 'learner', prompt: 'Назови сильную сторону и естественную причину интереса к работе.', responseMode: 'selfPractice', model: 'Az egyik erősségem, hogy gyorsan tanulok. Azért szeretnék itt dolgozni, mert érdekel az ügyfélszolgálat.', next: 'l25-rp-9' },
      { id: 'l25-rp-9', speaker: 'waiter', prompt: 'Rendben, akkor egy helyzetkérdés: Mit tenne, ha egy ügyfél nagyon mérges lenne?', next: 'l25-rp-10' },
      { id: 'l25-rp-10', speaker: 'learner', prompt: 'Ответь своими словами: спокойно выслушай, уточни проблему и предложи помощь.', responseMode: 'selfPractice', model: 'Először nyugodtan meghallgatnám, aztán pontosítanám a problémát, és megpróbálnék segíteni.', next: 'l25-rp-11' },
      { id: 'l25-rp-11', speaker: 'waiter', prompt: 'Köszönöm. Mikor tudna kezdeni?', next: 'l25-rp-12' },
      { id: 'l25-rp-12', speaker: 'learner', prompt: 'Назови вымышленную доступность.', responseMode: 'selfPractice', model: 'Két hét múlva tudnék kezdeni.', next: 'l25-rp-13' },
      { id: 'l25-rp-13', speaker: 'waiter', prompt: 'Rendben. Van esetleg kérdése a pozícióval kapcsolatban?', next: 'l25-rp-14' },
      { id: 'l25-rp-14', speaker: 'learner', prompt: 'Задай минимум один вопрос о графике, условиях или возможности удалённой работы.', responseMode: 'selfPractice', model: 'Milyen a munkaidő, és van lehetőség otthoni munkára?', next: 'l25-rp-15' },
      { id: 'l25-rp-15', speaker: 'waiter', prompt: 'A munkaidő 9-től 17 óráig tart, és a betanulás után heti két nap otthoni munkára is van lehetőség.', next: 'l25-rp-16' },
      { id: 'l25-rp-16', speaker: 'learner', prompt: 'Вежливо поблагодари и заверши.', responseMode: 'selfPractice', model: 'Köszönöm a lehetőséget és a tájékoztatást. Viszontlátásra!', next: 'l25-rp-17' },
      { id: 'l25-rp-17', speaker: 'waiter', prompt: 'Köszönjük, hogy eljött. Hamarosan jelentkezünk. Viszontlátásra!' },
    ],
  },
  writingTitle: 'Письмо: отклик на вакансию',
  writingPrompt: 'Напиши 100–130 слов: профессиональное письмо-отклик на вакансию ügyfélszolgálati munkatárs. Используй вымышленные данные. Включи приветствие, название позиции, краткий опыт, релевантные навыки, языки, причину интереса, доступность и вежливое завершение.',
  writingModel: ['Tisztelt Hölgyem/Uram!', 'Az ügyfélszolgálati munkatárs pozícióra szeretnék jelentkezni.', 'Köszönöm, hogy elolvasta a jelentkezésemet.'],
  writingRubric: ['100–130 слов', 'Есть приветствие и точное название позиции', 'Кратко описаны опыт и релевантные навыки', 'Указаны языки и причина интереса', 'Указана доступность', 'Есть вежливое завершение', 'Не требуются реальные персональные данные'],
  objectiveChecks: [
    { objectiveId: 'l25_name-professions', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l25_ask-answer-job', activity: 'listening', evidenceKind: 'listening' },
    { objectiveId: 'l25_describe-skills', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l25_write-cv', activity: 'writing', evidenceKind: 'writing' },
    {
      objectiveId: 'l25_interview-dialogue',
      activity: 'roleplay',
      evidenceKind: 'interaction',
      evidenceComponents: [{ activity: 'reading', evidenceKind: 'reading' }],
    },
  ],
});

const L25_OPTIONAL_SPEAKING = {
  title: 'Говорение: профессиональный профиль',
  instructions: 'Говори 2–3 минуты по теме: Beszéljen a munkatapasztalatáról, a feladatairól, két erősségéről, és arról, milyen munkát keres. Назови прежнюю роль/опыт, обязанности, две сильные стороны, желаемую работу, одну причину и доступность для начала.',
  prompt: 'Korábban ügyfélszolgálaton dolgoztam. A feladataim közé tartozott az ügyfelek segítése. Két erősségem a türelem és a pontos munkavégzés. Irodai munkát keresek, és két hét múlva tudnék kezdeni.',
  rubric: ['2–3 минуты', 'Есть прежняя роль или опыт', 'Названы обязанности', 'Названы две сильные стороны', 'Указаны желаемая работа и причина', 'Указана доступность для начала', 'Речь связная и понятная'],
};

export const LESSON_25: Lesson = {
  id: 25,
  number: 25,
  level: 'B1',
  title: 'Урок 25 · Munka és karrier',
  subtitle: 'Работа, профессии и собеседование',
  description: 'Названия профессий, вопрос Mivel foglalkozol?, фразы для собеседования (állásinterjú), составление резюме и офисная лексика.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 25 · 1/11 · РАБОТА И КАРЬЕРА",
      title: "Munka és karrier",
      subtitle: "Карта урока: от знакомства до профессионального отклика",
      note: 'В уроке используются вымышленные профессиональные данные. Ученик тренирует язык, а не обязан раскрывать реальные сведения о себе.',
      warn: 'Разговор при знакомстве и собеседование требуют разного регистра. С другом обычно говорят на te, с работодателем — на Ön и используют вежливые формы.',
      task: 'До начала выбери вымышленный профессиональный профиль: профессия, место работы или статус, один вид опыта и две сильные стороны.',
      body: `
        <p>
          Тема работы нужна не только на собеседовании. Она появляется при знакомстве,
          в анкете, в разговоре с коллегами, при чтении вакансии и в профессиональной переписке.
          В этом уроке мы будем переходить от короткого ответа о профессии к полноценному собеседованию и письму.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Четыре коммуникативные ситуации</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Главная задача</th><th>Контрольная реплика</th></tr>
          <tr>
            <td>знакомство</td>
            <td>назвать профессию или сферу</td>
            <td><button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU">Mivel foglalkozol?</button></td>
          </tr>
          <tr>
            <td>чтение вакансии</td>
            <td>понять обязанности, требования и условия</td>
            <td><button class="speak-btn" data-speak-text="Mik a fő feladatok?" data-speak-lang="hu-HU">Mik a fő feladatok?</button></td>
          </tr>
          <tr>
            <td>собеседование</td>
            <td>описать опыт, навыки и мотивацию</td>
            <td><button class="speak-btn" data-speak-text="Három év tapasztalatom van." data-speak-lang="hu-HU">Három év tapasztalatom van.</button></td>
          </tr>
          <tr>
            <td>профессиональный отклик</td>
            <td>кратко и вежливо представить себя письменно</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék jelentkezni a pozícióra." data-speak-lang="hu-HU">Szeretnék jelentkezni a pozícióra.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Маршрут урока</h4>
        <table class="conj">
          <tr><th>Этап</th><th>Что учимся делать</th><th>Пример</th></tr>
          <tr>
            <td>1. Профессия и статус</td>
            <td>спросить, чем человек занимается, и ответить несколькими способами</td>
            <td><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></td>
          </tr>
          <tr>
            <td>2. Опыт и обязанности</td>
            <td>назвать продолжительность опыта и рабочие задачи</td>
            <td><button class="speak-btn" data-speak-text="Két évig egy szállodában dolgoztam." data-speak-lang="hu-HU">Két évig egy szállodában dolgoztam.</button></td>
          </tr>
          <tr>
            <td>3. Навыки и сильные стороны</td>
            <td>объяснить, что умеешь и чем полезен работодателю</td>
            <td><button class="speak-btn" data-speak-text="Az egyik erősségem, hogy gyorsan tanulok." data-speak-lang="hu-HU">Az egyik erősségem, hogy gyorsan tanulok.</button></td>
          </tr>
          <tr>
            <td>4. Мотивация</td>
            <td>дать конкретную причину интереса к должности</td>
            <td><button class="speak-btn" data-speak-text="Azért szeretnék itt dolgozni, mert érdekel az ügyfélszolgálat." data-speak-lang="hu-HU">Azért szeretnék itt dolgozni, mert érdekel az ügyfélszolgálat.</button></td>
          </tr>
          <tr>
            <td>5. Практический вопрос</td>
            <td>уточнить график, начало работы или удалённый формат</td>
            <td><button class="speak-btn" data-speak-text="Milyen a munkaidő?" data-speak-lang="hu-HU">Milyen a munkaidő?</button></td>
          </tr>
          <tr>
            <td>6. Завершение</td>
            <td>вежливо закончить разговор или письмо</td>
            <td><button class="speak-btn" data-speak-text="Köszönöm a lehetőséget." data-speak-lang="hu-HU">Köszönöm a lehetőséget.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Can-Do после урока</h4>
        <ul class="tick">
          <li>спросить о профессии в неофициальной и вежливой форме;</li>
          <li>назвать профессию, сферу, место работы или текущий статус;</li>
          <li>описать прошлый опыт и основные обязанности;</li>
          <li>назвать профессиональные навыки и сильные стороны;</li>
          <li>понять реалистичную вакансию уровня B1;</li>
          <li>ответить на стандартный и ситуационный вопрос собеседования;</li>
          <li>задать работодателю практический вопрос;</li>
          <li>написать короткий профессиональный отклик.</li>
        </ul>

        <div class="note">
          Граница урока: мы тренируем базовое профессиональное общение уровня B1.
          Юридические детали трудового договора, налоги и узкоспециальная терминология в этот урок не входят.
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 25 · 2/11 · ПРОФЕССИЯ И СФЕРА",
      title: "Mivel foglalkozol?",
      subtitle: "Профессия, место работы, сфера деятельности и текущий статус",
      note: 'Вопрос Mivel foglalkozol? шире, чем буквальное «кем ты работаешь»: ответ может называть профессию, сферу, основную деятельность или текущий статус.',
      warn: 'Не смешивай модели: профессия + vagyok; профессия + -ként dolgozom; деятельность + -val/-vel foglalkozom.',
      task: 'Подготовь ответ из трёх частей: профессия или статус, место или сфера работы, одна конкретная деятельность.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Как спросить</h4>
        <table class="conj">
          <tr><th>Регистр</th><th>Естественный вопрос</th><th>Когда использовать</th></tr>
          <tr>
            <td>неофициально</td>
            <td><button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU">Mivel foglalkozol?</button></td>
            <td>друг, знакомый, ровесник</td>
          </tr>
          <tr>
            <td>вежливо</td>
            <td><button class="speak-btn" data-speak-text="Mivel foglalkozik?" data-speak-lang="hu-HU">Mivel foglalkozik?</button></td>
            <td>незнакомый взрослый, формальная беседа</td>
          </tr>
          <tr>
            <td>прямой вопрос о профессии</td>
            <td><button class="speak-btn" data-speak-text="Mi a foglalkozásod?" data-speak-lang="hu-HU">Mi a foglalkozásod?</button></td>
            <td>когда нужна именно профессия</td>
          </tr>
          <tr>
            <td>вежливо и прямо</td>
            <td><button class="speak-btn" data-speak-text="Mi a foglalkozása?" data-speak-lang="hu-HU">Mi a foglalkozása?</button></td>
            <td>анкета или официальный разговор</td>
          </tr>
        </table>

        <div class="note">
          Не путай:
          <button class="speak-btn" data-speak-text="Hol dolgozol?" data-speak-lang="hu-HU">Hol dolgozol?</button>
          спрашивает о месте работы, а
          <button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU">Mivel foglalkozol?</button>
          — о профессии или деятельности.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Четыре модели ответа</h4>
        <table class="conj">
          <tr><th>Что сообщаем</th><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>профессию</td>
            <td>[профессия] + <b>vagyok</b></td>
            <td><button class="speak-btn" data-speak-text="Mérnök vagyok." data-speak-lang="hu-HU">Mérnök vagyok.</button></td>
          </tr>
          <tr>
            <td>роль, в которой работаем</td>
            <td>[профессия] + <b>-ként dolgozom</b></td>
            <td><button class="speak-btn" data-speak-text="Grafikusként dolgozom." data-speak-lang="hu-HU">Grafikusként dolgozom.</button></td>
          </tr>
          <tr>
            <td>место работы</td>
            <td>[организация] + <b>-nál/-nél dolgozom</b></td>
            <td><button class="speak-btn" data-speak-text="Egy reklámügynökségnél dolgozom." data-speak-lang="hu-HU">Egy reklámügynökségnél dolgozom.</button></td>
          </tr>
          <tr>
            <td>основную деятельность</td>
            <td>[деятельность] + <b>-val/-vel foglalkozom</b></td>
            <td><button class="speak-btn" data-speak-text="Arculattervezéssel és webdesignnal foglalkozom." data-speak-lang="hu-HU">Arculattervezéssel és webdesignnal foglalkozom.</button></td>
          </tr>
        </table>

        <p>
          Модель <b>[профессия] + vagyok</b> уже знакома по работе с именным сказуемым из 2-го урока.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как работает -ként</h4>
        <p>
          Суффикс <b>-ként</b> означает «в качестве / в роли».
          Он присоединяется к названию профессии и не меняется по гармонии гласных.
        </p>
        <table class="conj">
          <tr><th>Профессия</th><th>В роли кого?</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mérnök" data-speak-lang="hu-HU">mérnök</button></td>
            <td><button class="speak-btn" data-speak-text="mérnökként" data-speak-lang="hu-HU">mérnökként</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="grafikus" data-speak-lang="hu-HU">grafikus</button></td>
            <td><button class="speak-btn" data-speak-text="grafikusként" data-speak-lang="hu-HU">grafikusként</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU">tanár</button></td>
            <td><button class="speak-btn" data-speak-text="tanárként" data-speak-lang="hu-HU">tanárként</button></td>
          </tr>
        </table>

        <div class="note">
          С глаголом
          <button class="speak-btn" data-speak-text="foglalkozom" data-speak-lang="hu-HU">foglalkozom</button>
          деятельность обычно получает
          <span class="hu-word">-val/-vel</span>:
          <button class="speak-btn" data-speak-text="ügyfélszolgálattal foglalkozom" data-speak-lang="hu-HU">ügyfélszolgálattal foglalkozom</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Если сейчас не работаешь</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Естественный ответ</th></tr>
          <tr>
            <td>ищу работу</td>
            <td><button class="speak-btn" data-speak-text="Jelenleg munkát keresek." data-speak-lang="hu-HU">Jelenleg munkát keresek.</button></td>
          </tr>
          <tr>
            <td>сейчас не работаю</td>
            <td><button class="speak-btn" data-speak-text="Most nem dolgozom." data-speak-lang="hu-HU">Most nem dolgozom.</button></td>
          </tr>
          <tr>
            <td>сначала прошлый опыт, затем статус</td>
            <td><button class="speak-btn" data-speak-text="Korábban egy bankban dolgoztam, most pedig munkát keresek." data-speak-lang="hu-HU">Korábban egy bankban dolgoztam, most pedig munkát keresek.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полный ответ из трёх частей</h4>
        <p><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></p>
        <p><button class="speak-btn" data-speak-text="Egy reklámügynökségnél dolgozom." data-speak-lang="hu-HU">Egy reklámügynökségnél dolgozom.</button></p>
        <p><button class="speak-btn" data-speak-text="Főleg arculattervezéssel és webdesignnal foglalkozom." data-speak-lang="hu-HU">Főleg arculattervezéssel és webdesignnal foglalkozom.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th><th>Почему</th></tr>
          <tr>
            <td>Informatikus dolgozom.</td>
            <td><button class="speak-btn" data-speak-text="Informatikus vagyok." data-speak-lang="hu-HU">Informatikus vagyok.</button></td>
            <td>профессия с именным сказуемым</td>
          </tr>
          <tr>
            <td>Informatikusként vagyok.</td>
            <td><button class="speak-btn" data-speak-text="Informatikusként dolgozom." data-speak-lang="hu-HU">Informatikusként dolgozom.</button></td>
            <td>-ként естественно сочетается здесь с dolgozom</td>
          </tr>
          <tr>
            <td>Webdesign vagyok.</td>
            <td><button class="speak-btn" data-speak-text="Webdesignnal foglalkozom." data-speak-lang="hu-HU">Webdesignnal foglalkozom.</button></td>
            <td>это деятельность, а не профессия человека</td>
          </tr>
          <tr>
            <td>Hol foglalkozol?</td>
            <td><button class="speak-btn" data-speak-text="Hol dolgozol?" data-speak-lang="hu-HU">Hol dolgozol?</button></td>
            <td>о месте работы спрашивают с hol и dolgozol</td>
          </tr>
        </table>

        <div class="task">
          Ответь на вопрос тремя предложениями.
          Назови профессию или текущий статус, место или сферу работы
          и одну конкретную деятельность. Можно использовать вымышленные данные.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 25 · 3/11 · НА РАБОЧЕМ МЕСТЕ",
      title: "A munkahelyen",
      subtitle: "Люди, места, процессы и рабочие сочетания",
      note: 'Учи рабочую лексику не отдельными словами, а короткими сочетаниями: с кем работаешь, где работаешь и что конкретно делаешь.',
      warn: 'Munkahely — место работы в широком смысле; iroda — физический офис. Kolléga и munkatárs нейтральны, а főnök разговорнее, чем vezető.',
      task: 'Выбери вымышленное рабочее место и составь четыре предложения: где работаешь, с кем, какие задачи выполняешь и что для тебя важно.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Люди на работе</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Значение и употребление</th><th>Сочетание</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kolléga" data-speak-lang="hu-HU">kolléga</button></td>
            <td>коллега; обычное нейтральное слово</td>
            <td><button class="speak-btn" data-speak-text="a kollégáimmal dolgozom" data-speak-lang="hu-HU">a kollégáimmal dolgozom</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="munkatárs" data-speak-lang="hu-HU">munkatárs</button></td>
            <td>сотрудник, коллега; часто в официальной речи и вакансиях</td>
            <td><button class="speak-btn" data-speak-text="új munkatársat keresünk" data-speak-lang="hu-HU">új munkatársat keresünk</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="főnök" data-speak-lang="hu-HU">főnök</button></td>
            <td>начальник, босс; общеупотребительное и более разговорное</td>
            <td><button class="speak-btn" data-speak-text="beszélek a főnökömmel" data-speak-lang="hu-HU">beszélek a főnökömmel</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vezető" data-speak-lang="hu-HU">vezető</button></td>
            <td>руководитель; нейтральнее в профессиональном контексте</td>
            <td><button class="speak-btn" data-speak-text="a csoport vezetője" data-speak-lang="hu-HU">a csoport vezetője</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ügyfél" data-speak-lang="hu-HU">ügyfél</button></td>
            <td>клиент, пользователь услуги</td>
            <td><button class="speak-btn" data-speak-text="segítek az ügyfeleknek" data-speak-lang="hu-HU">segítek az ügyfeleknek</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Место и условия работы</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Значение</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="munkahely" data-speak-lang="hu-HU">munkahely</button></td>
            <td>место работы, рабочая организация или среда</td>
            <td><button class="speak-btn" data-speak-text="Szeretem a munkahelyemet." data-speak-lang="hu-HU">Szeretem a munkahelyemet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="iroda" data-speak-lang="hu-HU">iroda</button></td>
            <td>офис как помещение</td>
            <td><button class="speak-btn" data-speak-text="Egy modern irodában dolgozom." data-speak-lang="hu-HU">Egy modern irodában dolgozom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="munkaidő" data-speak-lang="hu-HU">munkaidő</button></td>
            <td>рабочее время, график</td>
            <td><button class="speak-btn" data-speak-text="Rugalmas a munkaidőm." data-speak-lang="hu-HU">Rugalmas a munkaidőm.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fizetés" data-speak-lang="hu-HU">fizetés</button></td>
            <td>зарплата; также оплата в других контекстах</td>
            <td><button class="speak-btn" data-speak-text="Mennyi a fizetés?" data-speak-lang="hu-HU">Mennyi a fizetés?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="otthoni munka" data-speak-lang="hu-HU">otthoni munka</button></td>
            <td>работа из дома</td>
            <td><button class="speak-btn" data-speak-text="Heti két nap otthoni munkára is van lehetőség." data-speak-lang="hu-HU">Heti két nap otthoni munkára is van lehetőség.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Задачи и рабочие процессы</h4>
        <table class="conj">
          <tr><th>Слово</th><th>Естественное сочетание</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="feladat" data-speak-lang="hu-HU">feladat</button></td>
            <td><button class="speak-btn" data-speak-text="elvégzem a feladatot" data-speak-lang="hu-HU">elvégzem a feladatot</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="projekt" data-speak-lang="hu-HU">projekt</button></td>
            <td><button class="speak-btn" data-speak-text="egy projekten dolgozom" data-speak-lang="hu-HU">egy projekten dolgozom</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="határidő" data-speak-lang="hu-HU">határidő</button></td>
            <td><button class="speak-btn" data-speak-text="betartom a határidőt" data-speak-lang="hu-HU">betartom a határidőt</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="értekezlet" data-speak-lang="hu-HU">értekezlet</button></td>
            <td><button class="speak-btn" data-speak-text="részt veszek egy értekezleten" data-speak-lang="hu-HU">részt veszek egy értekezleten</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="megbeszélés" data-speak-lang="hu-HU">megbeszélés</button></td>
            <td><button class="speak-btn" data-speak-text="megbeszélést tartunk" data-speak-lang="hu-HU">megbeszélést tartunk</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="e-mail" data-speak-lang="hu-HU">e-mail</button></td>
            <td><button class="speak-btn" data-speak-text="válaszolok az e-mailekre" data-speak-lang="hu-HU">válaszolok az e-mailekre</button></td>
          </tr>
        </table>

        <div class="note">
          <b>Értekezlet</b> часто звучит официальнее и обозначает организованное совещание.
          <b>Megbeszélés</b> шире: обсуждение, рабочая встреча или договорённость.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Три полезные модели места и участников</h4>
        <table class="conj">
          <tr><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>организация + -nál/-nél</td>
            <td><button class="speak-btn" data-speak-text="Egy szolgáltató cégnél dolgozom." data-speak-lang="hu-HU">Egy szolgáltató cégnél dolgozom.</button></td>
          </tr>
          <tr>
            <td>помещение + -ban/-ben</td>
            <td><button class="speak-btn" data-speak-text="Egy irodában dolgozom." data-speak-lang="hu-HU">Egy irodában dolgozom.</button></td>
          </tr>
          <tr>
            <td>человек или группа + -val/-vel</td>
            <td><button class="speak-btn" data-speak-text="A kollégáimmal és az ügyfelekkel dolgozom." data-speak-lang="hu-HU">A kollégáimmal és az ügyfelekkel dolgozom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель рабочего описания</h4>
        <p><button class="speak-btn" data-speak-text="Egy budapesti szolgáltató cégnél dolgozom." data-speak-lang="hu-HU">Egy budapesti szolgáltató cégnél dolgozom.</button></p>
        <p><button class="speak-btn" data-speak-text="Az irodában főleg ügyfelekkel beszélek és e-mailekre válaszolok." data-speak-lang="hu-HU">Az irodában főleg ügyfelekkel beszélek és e-mailekre válaszolok.</button></p>
        <p><button class="speak-btn" data-speak-text="Hetente kétszer részt veszek egy megbeszélésen." data-speak-lang="hu-HU">Hetente kétszer részt veszek egy megbeszélésen.</button></p>
        <p><button class="speak-btn" data-speak-text="Fontos számomra a rugalmas munkaidő és a jó csapat." data-speak-lang="hu-HU">Fontos számomra a rugalmas munkaidő és a jó csapat.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Egy irodán dolgozom.</td>
            <td><button class="speak-btn" data-speak-text="Egy irodában dolgozom." data-speak-lang="hu-HU">Egy irodában dolgozom.</button></td>
          </tr>
          <tr>
            <td>Részt veszek egy megbeszélést.</td>
            <td><button class="speak-btn" data-speak-text="Részt veszek egy megbeszélésen." data-speak-lang="hu-HU">Részt veszek egy megbeszélésen.</button></td>
          </tr>
          <tr>
            <td>Válaszolok az e-maileket.</td>
            <td><button class="speak-btn" data-speak-text="Válaszolok az e-mailekre." data-speak-lang="hu-HU">Válaszolok az e-mailekre.</button></td>
          </tr>
          <tr>
            <td>Beszélek az ügyfelek.</td>
            <td><button class="speak-btn" data-speak-text="Beszélek az ügyfelekkel." data-speak-lang="hu-HU">Beszélek az ügyfelekkel.</button></td>
          </tr>
        </table>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 25 · 4/11 · СОБЕСЕДОВАНИЕ",
      title: "Állásinterjú",
      subtitle: "Логика вопроса, структура ответа и вежливый регистр",
      note: 'На собеседовании не нужен один заученный монолог. Сначала дай прямой ответ на вопрос, затем добавь одну деталь и при необходимости короткий пример.',
      warn: 'Интервьюер обычно обращается в вежливой форме третьего лица: dolgozott, szeretne, tudna, tenne. Кандидат отвечает от первого лица: dolgoztam, szeretnék, tudnék, tennék.',
      task: 'Выбери вымышленную вакансию и подготовь ответы минимум на шесть вопросов. Каждый ответ должен содержать прямую информацию, а не общую фразу.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">До собеседования: заявка на вакансию</h4>
        <p>
          <button class="speak-btn" data-speak-text="Szeretnék jelentkezni az ügyfélszolgálati munkatárs pozícióra." data-speak-lang="hu-HU">Szeretnék jelentkezni az ügyfélszolgálati munkatárs pozícióra.</button>
        </p>
        <div class="note">
          Эта реплика подходит для письма, телефонного обращения или начала разговора о вакансии.
          На самом собеседовании обычно уже известно, на какую должность вы пришли.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Структура хорошего ответа</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Что сказать</th></tr>
          <tr><td>1</td><td>прямо ответить на заданный вопрос</td></tr>
          <tr><td>2</td><td>добавить одну конкретную деталь</td></tr>
          <tr><td>3</td><td>при необходимости привести короткий рабочий пример</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Основные вопросы и модели ответов</h4>
        <table class="conj">
          <tr><th>Вопрос интервьюера</th><th>Модель ответа кандидата</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérem, röviden mutatkozzon be." data-speak-lang="hu-HU">Kérem, röviden mutatkozzon be.</button></td>
            <td><button class="speak-btn" data-speak-text="Két év ügyfélszolgálati tapasztalatom van, és szeretek emberekkel dolgozni." data-speak-lang="hu-HU">Két év ügyfélszolgálati tapasztalatom van, és szeretek emberekkel dolgozni.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen szakmai tapasztalata van?" data-speak-lang="hu-HU">Milyen szakmai tapasztalata van?</button></td>
            <td><button class="speak-btn" data-speak-text="Három év tapasztalatom van ezen a területen." data-speak-lang="hu-HU">Három év tapasztalatom van ezen a területen.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hol dolgozott korábban?" data-speak-lang="hu-HU">Hol dolgozott korábban?</button></td>
            <td><button class="speak-btn" data-speak-text="Korábban két évig egy szállodában dolgoztam." data-speak-lang="hu-HU">Korábban két évig egy szállodában dolgoztam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mik voltak a fő feladatai?" data-speak-lang="hu-HU">Mik voltak a fő feladatai?</button></td>
            <td><button class="speak-btn" data-speak-text="A feladataim közé tartozott az ügyfelek segítése és az e-mailek megválaszolása." data-speak-lang="hu-HU">A feladataim közé tartozott az ügyfelek segítése és az e-mailek megválaszolása.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mi az egyik erőssége?" data-speak-lang="hu-HU">Mi az egyik erőssége?</button></td>
            <td><button class="speak-btn" data-speak-text="Az egyik erősségem, hogy gyorsan tanulok és pontosan dolgozom." data-speak-lang="hu-HU">Az egyik erősségem, hogy gyorsan tanulok és pontosan dolgozom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Miért szeretne nálunk dolgozni?" data-speak-lang="hu-HU">Miért szeretne nálunk dolgozni?</button></td>
            <td><button class="speak-btn" data-speak-text="Azért szeretnék Önöknél dolgozni, mert érdekel az ügyfélszolgálat és szeretnék szakmailag fejlődni." data-speak-lang="hu-HU">Azért szeretnék Önöknél dolgozni, mert érdekel az ügyfélszolgálat és szeretnék szakmailag fejlődni.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit tenne, ha egy ügyfél nagyon mérges lenne?" data-speak-lang="hu-HU">Mit tenne, ha egy ügyfél nagyon mérges lenne?</button></td>
            <td><button class="speak-btn" data-speak-text="Először nyugodtan meghallgatnám, aztán pontosítanám a problémát, és megpróbálnék segíteni." data-speak-lang="hu-HU">Először nyugodtan meghallgatnám, aztán pontosítanám a problémát, és megpróbálnék segíteni.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor tudna kezdeni?" data-speak-lang="hu-HU">Mikor tudna kezdeni?</button></td>
            <td><button class="speak-btn" data-speak-text="Két hét múlva tudnék kezdeni." data-speak-lang="hu-HU">Két hét múlva tudnék kezdeni.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van kérdése a pozícióval kapcsolatban?" data-speak-lang="hu-HU">Van kérdése a pozícióval kapcsolatban?</button></td>
            <td><button class="speak-btn" data-speak-text="Milyen a munkaidő, és van lehetőség otthoni munkára?" data-speak-lang="hu-HU">Milyen a munkaidő, és van lehetőség otthoni munkára?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Вежливый регистр: кто какую форму использует</h4>
        <table class="conj">
          <tr><th>Интервьюер</th><th>Кандидат</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hol dolgozott korábban?" data-speak-lang="hu-HU">Hol dolgozott korábban?</button></td>
            <td><button class="speak-btn" data-speak-text="Korábban egy bankban dolgoztam." data-speak-lang="hu-HU">Korábban egy bankban dolgoztam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Miért szeretne nálunk dolgozni?" data-speak-lang="hu-HU">Miért szeretne nálunk dolgozni?</button></td>
            <td><button class="speak-btn" data-speak-text="Szeretnék Önöknél dolgozni." data-speak-lang="hu-HU">Szeretnék Önöknél dolgozni.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor tudna kezdeni?" data-speak-lang="hu-HU">Mikor tudna kezdeni?</button></td>
            <td><button class="speak-btn" data-speak-text="Jövő hónapban tudnék kezdeni." data-speak-lang="hu-HU">Jövő hónapban tudnék kezdeni.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Продолжительность: не перепутай</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két évig dolgoztam ott." data-speak-lang="hu-HU">Két évig dolgoztam ott.</button></td>
            <td>я работал там два года; период завершён</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két éve dolgozom ott." data-speak-lang="hu-HU">Két éve dolgozom ott.</button></td>
            <td>я работаю там уже два года; работа продолжается</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Öt évet tapasztalatom van.</td>
            <td><button class="speak-btn" data-speak-text="Öt év tapasztalatom van." data-speak-lang="hu-HU">Öt év tapasztalatom van.</button></td>
          </tr>
          <tr>
            <td>Öt év tapasztalatom van ebben a munkában.</td>
            <td><button class="speak-btn" data-speak-text="Öt év tapasztalatom van ezen a területen." data-speak-lang="hu-HU">Öt év tapasztalatom van ezen a területen.</button></td>
          </tr>
          <tr>
            <td>Szeretnék nálatok dolgozni.</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék Önöknél dolgozni." data-speak-lang="hu-HU">Szeretnék Önöknél dolgozni.</button></td>
          </tr>
          <tr>
            <td>Miért akarsz itt dolgozni?</td>
            <td><button class="speak-btn" data-speak-text="Miért szeretne nálunk dolgozni?" data-speak-lang="hu-HU">Miért szeretne nálunk dolgozni?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как завершить собеседование</h4>
        <p><button class="speak-btn" data-speak-text="Köszönöm a lehetőséget és a tájékoztatást." data-speak-lang="hu-HU">Köszönöm a lehetőséget és a tájékoztatást.</button></p>
        <p><button class="speak-btn" data-speak-text="Viszontlátásra!" data-speak-lang="hu-HU">Viszontlátásra!</button></p>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 25 · 5/11 · РЕЗЮМЕ",
      title: "Önéletrajz",
      subtitle: "Структура, язык и достоверность венгерского резюме",
      note: 'Хорошее резюме краткое, конкретное и правдивое. Для учебного задания используй вымышленные данные, но соблюдай реальную профессиональную структуру.',
      warn: 'Не добавляй лишние чувствительные сведения и не завышай уровень языка или опыт. Указывай только информацию, полезную для конкретной вакансии.',
      task: 'Составь учебное резюме на одну страницу: контакты, профиль, опыт, образование, навыки и языки. Используй вымышленные данные.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Основные разделы</h4>
        <table class="conj">
          <tr><th>Раздел</th><th>Что включить</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Elérhetőségek" data-speak-lang="hu-HU">Elérhetőségek</button></td>
            <td>имя, телефон, профессиональный адрес электронной почты, город</td>
            <td><button class="speak-btn" data-speak-text="Budapest, telefon, e-mail" data-speak-lang="hu-HU">Budapest, telefon, e-mail</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szakmai profil" data-speak-lang="hu-HU">Szakmai profil</button></td>
            <td>две–три строки: опыт, сильная сторона, цель</td>
            <td><button class="speak-btn" data-speak-text="Pontos és ügyfélközpontú irodai munkatárs vagyok." data-speak-lang="hu-HU">Pontos és ügyfélközpontú irodai munkatárs vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Munkatapasztalat" data-speak-lang="hu-HU">Munkatapasztalat</button></td>
            <td>должность, организация, период, основные результаты и задачи</td>
            <td><button class="speak-btn" data-speak-text="Ügyfélszolgálati munkatárs, Példa Kft., 2022–2025" data-speak-lang="hu-HU">Ügyfélszolgálati munkatárs, Példa Kft., 2022–2025</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tanulmányok" data-speak-lang="hu-HU">Tanulmányok</button></td>
            <td>учебное заведение, специальность или квалификация, период</td>
            <td><button class="speak-btn" data-speak-text="Gazdasági ügyintéző, Példa Iskola" data-speak-lang="hu-HU">Gazdasági ügyintéző, Példa Iskola</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Készségek" data-speak-lang="hu-HU">Készségek</button></td>
            <td>проверяемые профессиональные навыки</td>
            <td><button class="speak-btn" data-speak-text="ügyfélkommunikáció, problémamegoldás, irodai programok" data-speak-lang="hu-HU">ügyfélkommunikáció, problémamegoldás, irodai programok</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nyelvtudás" data-speak-lang="hu-HU">Nyelvtudás</button></td>
            <td>язык и реальный уровень по общеевропейской шкале</td>
            <td><button class="speak-btn" data-speak-text="angol B2, magyar A2" data-speak-lang="hu-HU">angol B2, magyar A2</button></td>
          </tr>
        </table>

        <div class="note">
          Заголовок
          <button class="speak-btn" data-speak-text="Nyelvismeret" data-speak-lang="hu-HU">Nyelvismeret</button>
          тоже встречается. В одном резюме выбери один вариант и используй его последовательно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Порядок опыта</h4>
        <p>
          Обычно сначала указывают самое недавнее место работы, затем более ранние.
          Для завершённой работы используй прошедшее время, для текущей — настоящее.
        </p>
        <table class="conj">
          <tr><th>Ситуация</th><th>Пример</th></tr>
          <tr>
            <td>завершённая работа</td>
            <td><button class="speak-btn" data-speak-text="2022-től 2025-ig ügyfélszolgálati munkatársként dolgoztam." data-speak-lang="hu-HU">2022-től 2025-ig ügyfélszolgálati munkatársként dolgoztam.</button></td>
          </tr>
          <tr>
            <td>текущая работа</td>
            <td><button class="speak-btn" data-speak-text="2025 óta irodai munkatársként dolgozom." data-speak-lang="hu-HU">2025 óta irodai munkatársként dolgozom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Действия вместо общих слов</h4>
        <table class="conj">
          <tr><th>Слабая формулировка</th><th>Конкретная формулировка</th></tr>
          <tr>
            <td>Ügyfelekkel foglalkoztam.</td>
            <td><button class="speak-btn" data-speak-text="Válaszoltam az ügyfelek kérdéseire." data-speak-lang="hu-HU">Válaszoltam az ügyfelek kérdéseire.</button></td>
          </tr>
          <tr>
            <td>Irodai feladataim voltak.</td>
            <td><button class="speak-btn" data-speak-text="E-maileket kezeltem és időpontokat egyeztettem." data-speak-lang="hu-HU">E-maileket kezeltem és időpontokat egyeztettem.</button></td>
          </tr>
          <tr>
            <td>Problémákkal dolgoztam.</td>
            <td><button class="speak-btn" data-speak-text="Egyszerűbb problémákat önállóan oldottam meg." data-speak-lang="hu-HU">Egyszerűbb problémákat önállóan oldottam meg.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Короткий учебный образец</h4>
        <p><button class="speak-btn" data-speak-text="Szakmai profil" data-speak-lang="hu-HU">Szakmai profil</button></p>
        <p><button class="speak-btn" data-speak-text="Pontos és türelmes irodai munkatárs vagyok, két év ügyfélszolgálati tapasztalattal." data-speak-lang="hu-HU">Pontos és türelmes irodai munkatárs vagyok, két év ügyfélszolgálati tapasztalattal.</button></p>
        <p><button class="speak-btn" data-speak-text="Munkatapasztalat" data-speak-lang="hu-HU">Munkatapasztalat</button></p>
        <p><button class="speak-btn" data-speak-text="Ügyfélszolgálati munkatárs, Példa Kft., 2022–2025." data-speak-lang="hu-HU">Ügyfélszolgálati munkatárs, Példa Kft., 2022–2025.</button></p>
        <p><button class="speak-btn" data-speak-text="Válaszoltam az ügyfelek kérdéseire, e-maileket kezeltem és egyszerűbb problémákat oldottam meg." data-speak-lang="hu-HU">Válaszoltam az ügyfelek kérdéseire, e-maileket kezeltem és egyszerűbb problémákat oldottam meg.</button></p>
        <p><button class="speak-btn" data-speak-text="Nyelvtudás: angol B2, magyar A2." data-speak-lang="hu-HU">Nyelvtudás: angol B2, magyar A2.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Három évig tapasztalat vagyok.</td>
            <td><button class="speak-btn" data-speak-text="Három év munkatapasztalatom van." data-speak-lang="hu-HU">Három év munkatapasztalatom van.</button></td>
          </tr>
          <tr>
            <td>Jól számítógép.</td>
            <td><button class="speak-btn" data-speak-text="Magabiztosan használom az irodai programokat." data-speak-lang="hu-HU">Magabiztosan használom az irodai programokat.</button></td>
          </tr>
          <tr>
            <td>Angolul perfekt.</td>
            <td><button class="speak-btn" data-speak-text="Angol nyelvtudás: B2." data-speak-lang="hu-HU">Angol nyelvtudás: B2.</button></td>
          </tr>
          <tr>
            <td>длинные абзацы без дат и результатов</td>
            <td>короткие пункты, конкретные действия и единый формат дат</td>
          </tr>
        </table>

        <div class="task">
          Напиши учебное резюме на одну страницу. Затем проверь:
          можно ли быстро найти должность, период работы, три конкретных действия,
          реальные языковые уровни и контакты.
        </div>
      `,
    },
    {
      id: 6,
      eyebrow: "УРОК 25 · 6/11 · РАБОЧЕЕ ОБЩЕНИЕ",
      title: "Munkahelyi kifejezések",
      subtitle: "Письмо, уточнение, срок и статус задачи",
      note: 'В рабочем сообщении сначала укажи действие или вопрос, затем нужную деталь: файл, срок, статус или следующую договорённость.',
      warn: 'Не считай -ra/-re универсальным окончанием времени: pénteken — в пятницу, péntekre — к пятнице, péntekig — до пятницы.',
      task: 'Напиши короткое рабочее письмо: отправь документ, попроси подтвердить получение, назови срок и сообщи текущий статус.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Отправить письмо или файл</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Фраза</th></tr>
          <tr>
            <td>сообщить об отправке письма</td>
            <td><button class="speak-btn" data-speak-text="Küldök egy e-mailt." data-speak-lang="hu-HU">Küldök egy e-mailt.</button></td>
          </tr>
          <tr>
            <td>сообщить о вложении</td>
            <td><button class="speak-btn" data-speak-text="Csatolva küldöm a kért dokumentumot." data-speak-lang="hu-HU">Csatolva küldöm a kért dokumentumot.</button></td>
          </tr>
          <tr>
            <td>попросить подтверждение</td>
            <td><button class="speak-btn" data-speak-text="Kérem, jelezze, hogy megkapta-e." data-speak-lang="hu-HU">Kérem, jelezze, hogy megkapta-e.</button></td>
          </tr>
          <tr>
            <td>попросить отправить файл</td>
            <td><button class="speak-btn" data-speak-text="El tudná küldeni a fájlt?" data-speak-lang="hu-HU">El tudná küldeni a fájlt?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Уточнить задачу</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Фраза</th></tr>
          <tr>
            <td>уточнить, что именно нужно сделать</td>
            <td><button class="speak-btn" data-speak-text="Pontosan mit kell elkészítenem?" data-speak-lang="hu-HU">Pontosan mit kell elkészítenem?</button></td>
          </tr>
          <tr>
            <td>попросить повторить</td>
            <td><button class="speak-btn" data-speak-text="Meg tudná ismételni?" data-speak-lang="hu-HU">Meg tudná ismételni?</button></td>
          </tr>
          <tr>
            <td>уточнить приоритет</td>
            <td><button class="speak-btn" data-speak-text="Melyik feladat a sürgősebb?" data-speak-lang="hu-HU">Melyik feladat a sürgősebb?</button></td>
          </tr>
          <tr>
            <td>договориться о встрече</td>
            <td><button class="speak-btn" data-speak-text="Mikor kezdődik a megbeszélés?" data-speak-lang="hu-HU">Mikor kezdődik a megbeszélés?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Срок: когда, к какому моменту или до какого момента</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Значение</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="pénteken" data-speak-lang="hu-HU">pénteken</button></td>
            <td>в пятницу</td>
            <td><button class="speak-btn" data-speak-text="Pénteken beszélünk róla." data-speak-lang="hu-HU">Pénteken beszélünk róla.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="péntekre" data-speak-lang="hu-HU">péntekre</button></td>
            <td>к пятнице, результат должен быть готов</td>
            <td><button class="speak-btn" data-speak-text="Péntekre kész lesz." data-speak-lang="hu-HU">Péntekre kész lesz.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="péntekig" data-speak-lang="hu-HU">péntekig</button></td>
            <td>до пятницы, конечная граница периода</td>
            <td><button class="speak-btn" data-speak-text="Péntekig be kell fejeznem." data-speak-lang="hu-HU">Péntekig be kell fejeznem.</button></td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Mikorra lesz kész a projekt?" data-speak-lang="hu-HU">Mikorra lesz kész a projekt?</button>
        </p>
        <p>
          <button class="speak-btn" data-speak-text="A projekt péntekre kész lesz." data-speak-lang="hu-HU">A projekt péntekre kész lesz.</button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Сообщить статус</h4>
        <table class="conj">
          <tr><th>Статус</th><th>Фраза</th></tr>
          <tr>
            <td>работа продолжается</td>
            <td><button class="speak-btn" data-speak-text="Még dolgozom rajta." data-speak-lang="hu-HU">Még dolgozom rajta.</button></td>
          </tr>
          <tr>
            <td>работа уже завершена</td>
            <td><button class="speak-btn" data-speak-text="Már elkészültem vele." data-speak-lang="hu-HU">Már elkészültem vele.</button></td>
          </tr>
          <tr>
            <td>задача почти готова</td>
            <td><button class="speak-btn" data-speak-text="Majdnem kész vagyok." data-speak-lang="hu-HU">Majdnem kész vagyok.</button></td>
          </tr>
          <tr>
            <td>срок не соблюдается</td>
            <td><button class="speak-btn" data-speak-text="Sajnos nem készül el péntekre." data-speak-lang="hu-HU">Sajnos nem készül el péntekre.</button></td>
          </tr>
          <tr>
            <td>предложить новый срок</td>
            <td><button class="speak-btn" data-speak-text="Hétfőre tudom befejezni." data-speak-lang="hu-HU">Hétfőre tudom befejezni.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Короткое формальное письмо</h4>
        <p><button class="speak-btn" data-speak-text="Tisztelt Kovács Anna!" data-speak-lang="hu-HU">Tisztelt Kovács Anna!</button></p>
        <p><button class="speak-btn" data-speak-text="Csatolva küldöm a kért dokumentumot." data-speak-lang="hu-HU">Csatolva küldöm a kért dokumentumot.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, jelezze, hogy megkapta-e." data-speak-lang="hu-HU">Kérem, jelezze, hogy megkapta-e.</button></p>
        <p><button class="speak-btn" data-speak-text="Üdvözlettel:" data-speak-lang="hu-HU">Üdvözlettel:</button></p>
        <p><button class="speak-btn" data-speak-text="Péter" data-speak-lang="hu-HU">Péter</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Mikor lesz készre a projekt?</td>
            <td><button class="speak-btn" data-speak-text="Mikorra lesz kész a projekt?" data-speak-lang="hu-HU">Mikorra lesz kész a projekt?</button></td>
          </tr>
          <tr>
            <td>Pénteken kész lesz. — если имеется в виду «к пятнице»</td>
            <td><button class="speak-btn" data-speak-text="Péntekre kész lesz." data-speak-lang="hu-HU">Péntekre kész lesz.</button></td>
          </tr>
          <tr>
            <td>Csatolva küldöm a dokumentum.</td>
            <td><button class="speak-btn" data-speak-text="Csatolva küldöm a dokumentumot." data-speak-lang="hu-HU">Csatolva küldöm a dokumentumot.</button></td>
          </tr>
          <tr>
            <td>Válaszolok az e-mailt.</td>
            <td><button class="speak-btn" data-speak-text="Válaszolok az e-mailre." data-speak-lang="hu-HU">Válaszolok az e-mailre.</button></td>
          </tr>
        </table>
      `,
    },
    {
      id: 7,
      eyebrow: "УРОК 25 · 7/11 · ИНТЕГРИРОВАННАЯ ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "От короткой фразы к профессиональному мини-ответу",
      note: 'Хороший ответ строится по модели: прямой факт → конкретная деталь → причина или пример. Не перечисляй заученные формы без связи.',
      warn: 'Для учебной практики можно использовать вымышленные данные. Не смешивай завершённый опыт, текущую работу и желаемую должность.',
      task: 'Выполни пять этапов и подготовь профессиональный профиль из шести–восьми предложений.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Выбери функцию фразы</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Модель</th></tr>
          <tr>
            <td>профессия</td>
            <td><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></td>
          </tr>
          <tr>
            <td>текущий статус</td>
            <td><button class="speak-btn" data-speak-text="Jelenleg munkát keresek." data-speak-lang="hu-HU">Jelenleg munkát keresek.</button></td>
          </tr>
          <tr>
            <td>место работы</td>
            <td><button class="speak-btn" data-speak-text="Egy budapesti szolgáltató cégnél dolgozom." data-speak-lang="hu-HU">Egy budapesti szolgáltató cégnél dolgozom.</button></td>
          </tr>
          <tr>
            <td>прошлый опыт</td>
            <td><button class="speak-btn" data-speak-text="Két évig egy szállodában dolgoztam." data-speak-lang="hu-HU">Két évig egy szállodában dolgoztam.</button></td>
          </tr>
          <tr>
            <td>обязанности</td>
            <td><button class="speak-btn" data-speak-text="A feladataim közé tartozott az ügyfelek segítése." data-speak-lang="hu-HU">A feladataim közé tartozott az ügyfelek segítése.</button></td>
          </tr>
          <tr>
            <td>умение</td>
            <td><button class="speak-btn" data-speak-text="Jól tudok problémákat megoldani." data-speak-lang="hu-HU">Jól tudok problémákat megoldani.</button></td>
          </tr>
          <tr>
            <td>сильная сторона</td>
            <td><button class="speak-btn" data-speak-text="Az egyik erősségem, hogy gyorsan tanulok." data-speak-lang="hu-HU">Az egyik erősségem, hogy gyorsan tanulok.</button></td>
          </tr>
          <tr>
            <td>мотивация</td>
            <td><button class="speak-btn" data-speak-text="Azért szeretnék itt dolgozni, mert érdekel az ügyfélszolgálat." data-speak-lang="hu-HU">Azért szeretnék itt dolgozni, mert érdekel az ügyfélszolgálat.</button></td>
          </tr>
          <tr>
            <td>практический вопрос</td>
            <td><button class="speak-btn" data-speak-text="Milyen a munkaidő?" data-speak-lang="hu-HU">Milyen a munkaidő?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Собери естественное предложение</h4>
        <table class="conj">
          <tr><th>Опорные элементы</th><th>Готовая модель</th></tr>
          <tr>
            <td>mérnök + budapesti cég</td>
            <td><button class="speak-btn" data-speak-text="Mérnökként egy budapesti cégnél dolgozom." data-speak-lang="hu-HU">Mérnökként egy budapesti cégnél dolgozom.</button></td>
          </tr>
          <tr>
            <td>két év + szálloda + múlt</td>
            <td><button class="speak-btn" data-speak-text="Két évig egy szállodában dolgoztam." data-speak-lang="hu-HU">Két évig egy szállodában dolgoztam.</button></td>
          </tr>
          <tr>
            <td>ügyfelek + e-mailek + feladatok</td>
            <td><button class="speak-btn" data-speak-text="A feladataim közé tartozott az ügyfelek segítése és az e-mailek megválaszolása." data-speak-lang="hu-HU">A feladataim közé tartozott az ügyfelek segítése és az e-mailek megválaszolása.</button></td>
          </tr>
          <tr>
            <td>gyors tanulás + pontosság</td>
            <td><button class="speak-btn" data-speak-text="Gyorsan tanulok, és pontosan dolgozom." data-speak-lang="hu-HU">Gyorsan tanulok, és pontosan dolgozom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Различи период</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két évig dolgoztam ott." data-speak-lang="hu-HU">Két évig dolgoztam ott.</button></td>
            <td>работал два года; период завершён</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két éve dolgozom ott." data-speak-lang="hu-HU">Két éve dolgozom ott.</button></td>
            <td>работаю там уже два года; ситуация продолжается</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Свяжи мысли</h4>
        <table class="conj">
          <tr><th>Связь</th><th>Пример</th></tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="Szeretem a munkámat, mert érdekes és változatos." data-speak-lang="hu-HU">Szeretem a munkámat, mert érdekes és változatos.</button></td>
          </tr>
          <tr>
            <td>уступка</td>
            <td><button class="speak-btn" data-speak-text="Bár néha sok a feladat, mégis szívesen dolgozom a csapatban." data-speak-lang="hu-HU">Bár néha sok a feladat, mégis szívesen dolgozom a csapatban.</button></td>
          </tr>
          <tr>
            <td>условная рабочая ситуация</td>
            <td><button class="speak-btn" data-speak-text="Ha egy ügyfél mérges lenne, nyugodtan meghallgatnám." data-speak-lang="hu-HU">Ha egy ügyfél mérges lenne, nyugodtan meghallgatnám.</button></td>
          </tr>
          <tr>
            <td>цель</td>
            <td><button class="speak-btn" data-speak-text="Azért tanulok magyarul, hogy magabiztosabban kommunikáljak a munkahelyen." data-speak-lang="hu-HU">Azért tanulok magyarul, hogy magabiztosabban kommunikáljak a munkahelyen.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Исправь типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Mérnök dolgozom.</td>
            <td><button class="speak-btn" data-speak-text="Mérnök vagyok." data-speak-lang="hu-HU">Mérnök vagyok.</button></td>
          </tr>
          <tr>
            <td>Három évig tapasztalatom van.</td>
            <td><button class="speak-btn" data-speak-text="Három év tapasztalatom van." data-speak-lang="hu-HU">Három év tapasztalatom van.</button></td>
          </tr>
          <tr>
            <td>Jól tudok angol.</td>
            <td><button class="speak-btn" data-speak-text="Jól beszélek angolul." data-speak-lang="hu-HU">Jól beszélek angolul.</button></td>
          </tr>
          <tr>
            <td>Szeretnék itt dolgozni, ezért érdekel ez a terület.</td>
            <td><button class="speak-btn" data-speak-text="Szeretnék itt dolgozni, mert érdekel ez a terület." data-speak-lang="hu-HU">Szeretnék itt dolgozni, mert érdekel ez a terület.</button></td>
          </tr>
          <tr>
            <td>Milyen a munka idő?</td>
            <td><button class="speak-btn" data-speak-text="Milyen a munkaidő?" data-speak-lang="hu-HU">Milyen a munkaidő?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель мини-профиля</h4>
        <p><button class="speak-btn" data-speak-text="Jelenleg munkát keresek." data-speak-lang="hu-HU">Jelenleg munkát keresek.</button></p>
        <p><button class="speak-btn" data-speak-text="Korábban két évig egy szállodában dolgoztam." data-speak-lang="hu-HU">Korábban két évig egy szállodában dolgoztam.</button></p>
        <p><button class="speak-btn" data-speak-text="A feladataim közé tartozott az ügyfelek segítése és az e-mailek megválaszolása." data-speak-lang="hu-HU">A feladataim közé tartozott az ügyfelek segítése és az e-mailek megválaszolása.</button></p>
        <p><button class="speak-btn" data-speak-text="Jól beszélek angolul, és gyorsan tanulok." data-speak-lang="hu-HU">Jól beszélek angolul, és gyorsan tanulok.</button></p>
        <p><button class="speak-btn" data-speak-text="Az egyik erősségem, hogy nyugodtan oldom meg a problémákat." data-speak-lang="hu-HU">Az egyik erősségem, hogy nyugodtan oldom meg a problémákat.</button></p>
        <p><button class="speak-btn" data-speak-text="Azért érdekel ez a pozíció, mert szeretek emberekkel dolgozni." data-speak-lang="hu-HU">Azért érdekel ez a pozíció, mert szeretek emberekkel dolgozni.</button></p>

        <div class="task">
          Készíts hat–nyolc mondatos szakmai bemutatkozást.
          Használj legalább egy múlt idejű tapasztalatot, két feladatot,
          egy készséget, egy erősséget és egy konkrét motivációt.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: "УРОК 25 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Полное собеседование: опыт, мотивация, ситуация и вопросы",
      note: 'A — интервьюер, B — кандидат. Реплики кандидата являются учебной моделью: замени должность, опыт, языки и доступность на правдивые или явно вымышленные данные.',
      warn: 'Не отвечай на вопрос о языках заученной фразой, если уровень не соответствует действительности. На собеседовании точность важнее впечатляющего ответа.',
      task: 'Ответь на семь вопросов по содержанию, затем разыграй диалог для другой вакансии, сохранив его структуру.',
      body: `
        <div class="dialogue">
          <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Köszönöm, hogy eljött. Kérem, röviden mutatkozzon be." data-speak-lang="hu-HU">Jó napot kívánok! Köszönöm, hogy eljött. Kérem, röviden mutatkozzon be.</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Jó napot kívánok! Két év ügyfélszolgálati tapasztalatom van, és szeretek emberekkel dolgozni." data-speak-lang="hu-HU">Jó napot kívánok! Két év ügyfélszolgálati tapasztalatom van, és szeretek emberekkel dolgozni.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Hol dolgozott korábban?" data-speak-lang="hu-HU">Hol dolgozott korábban?</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Korábban két évig egy szállodában dolgoztam." data-speak-lang="hu-HU">Korábban két évig egy szállodában dolgoztam.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Mik voltak a fő feladatai?" data-speak-lang="hu-HU">Mik voltak a fő feladatai?</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Az ügyfelek kérdéseire válaszoltam, e-maileket kezeltem, és egyszerűbb problémákat oldottam meg." data-speak-lang="hu-HU">Az ügyfelek kérdéseire válaszoltam, e-maileket kezeltem, és egyszerűbb problémákat oldottam meg.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Mi az egyik erőssége?" data-speak-lang="hu-HU">Mi az egyik erőssége?</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Az egyik erősségem, hogy türelmesen kommunikálok, és gyorsan tanulok." data-speak-lang="hu-HU">Az egyik erősségem, hogy türelmesen kommunikálok, és gyorsan tanulok.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Miért szeretne nálunk dolgozni?" data-speak-lang="hu-HU">Miért szeretne nálunk dolgozni?</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Azért szeretnék Önöknél dolgozni, mert érdekel az ügyfélszolgálat, és szeretnék szakmailag fejlődni." data-speak-lang="hu-HU">Azért szeretnék Önöknél dolgozni, mert érdekel az ügyfélszolgálat, és szeretnék szakmailag fejlődni.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Milyen nyelveken beszél?" data-speak-lang="hu-HU">Milyen nyelveken beszél?</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Angolul B2-es szinten beszélek, magyarul pedig A2-es szinten tanulok." data-speak-lang="hu-HU">Angolul B2-es szinten beszélek, magyarul pedig A2-es szinten tanulok.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Mit tenne, ha egy ügyfél nagyon mérges lenne?" data-speak-lang="hu-HU">Mit tenne, ha egy ügyfél nagyon mérges lenne?</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Először nyugodtan meghallgatnám, aztán pontosítanám a problémát, és megpróbálnék megoldást találni." data-speak-lang="hu-HU">Először nyugodtan meghallgatnám, aztán pontosítanám a problémát, és megpróbálnék megoldást találni.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Mikor tudna kezdeni?" data-speak-lang="hu-HU">Mikor tudna kezdeni?</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Két hét múlva tudnék kezdeni." data-speak-lang="hu-HU">Két hét múlva tudnék kezdeni.</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="Van kérdése a pozícióval kapcsolatban?" data-speak-lang="hu-HU">Van kérdése a pozícióval kapcsolatban?</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen. Milyen a munkaidő, és van lehetőség otthoni munkára?" data-speak-lang="hu-HU">Igen. Milyen a munkaidő, és van lehetőség otthoni munkára?</button></p>

          <p><b>A:</b> <button class="speak-btn" data-speak-text="A munkaidő kilenctől tizenhét óráig tart, és a betanulás után heti két nap otthoni munkára is van lehetőség." data-speak-lang="hu-HU">A munkaidő kilenctől tizenhét óráig tart, és a betanulás után heti két nap otthoni munkára is van lehetőség.</button></p>

          <p><b>B:</b> <button class="speak-btn" data-speak-text="Köszönöm a lehetőséget és a tájékoztatást. Viszontlátásra!" data-speak-lang="hu-HU">Köszönöm a lehetőséget és a tájékoztatást. Viszontlátásra!</button></p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что делает каждый блок</h4>
        <table class="conj">
          <tr><th>Блок</th><th>Функция</th></tr>
          <tr><td>представление</td><td>кратко назвать релевантный опыт и рабочую направленность</td></tr>
          <tr><td>опыт и обязанности</td><td>дать место, длительность и конкретные действия</td></tr>
          <tr><td>сильная сторона</td><td>назвать качество, которое связано с работой</td></tr>
          <tr><td>мотивация</td><td>связать интерес к должности с задачами и развитием</td></tr>
          <tr><td>языки</td><td>указать реальный уровень, а не общее слово «свободно»</td></tr>
          <tr><td>ситуационный вопрос</td><td>показать последовательность профессиональных действий</td></tr>
          <tr><td>вопрос кандидата</td><td>уточнить реальные условия работы</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Проверь понимание</h4>
        <ol class="tasklist">
          <li>Сколько лет опыта у кандидата?</li>
          <li>Где кандидат работал раньше?</li>
          <li>Какие три обязанности он называет?</li>
          <li>Какую сильную сторону он выделяет?</li>
          <li>Почему его интересует должность?</li>
          <li>Что он сделает, если клиент рассержен?</li>
          <li>О чём кандидат спрашивает работодателя?</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Ролевая замена</h4>
        <div class="task">
          Выбери одну вакансию: офисный сотрудник, сотрудник гостиницы или специалист поддержки.
          Замени в диалоге опыт, обязанности, сильную сторону, мотивацию,
          языковые уровни, дату начала и вопрос работодателю.
        </div>
      `,
    },
    {
      id: 9,
      eyebrow: "УРОК 25 · 9/11 · ИТОГОВАЯ ПРАКТИКА",
      title: "Gyakorlatok",
      subtitle: "Контроль навыков: от профессии до делового сообщения",
      note: 'Сначала выполни задания без подсказок. Затем сравни результат с моделями предыдущих слайдов и исправь только реальные ошибки.',
      warn: 'Не используй реальные персональные данные. Для собеседования, резюме и письма разрешены вымышленные сведения.',
      task: 'Пройди все шесть этапов. В конце подготовь устный ответ и письменный отклик по одной вымышленной вакансии.',
      activities: L25_ACTIVITIES,
      optionalSpeaking: L25_OPTIONAL_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Профессия, место и деятельность</h4>
        <ol class="tasklist">
          <li>Ответь на вопрос <button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU">Mivel foglalkozol?</button> тремя способами: назови профессию, место работы и основную деятельность.</li>
          <li>Объясни разницу между моделями <button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button>, <button class="speak-btn" data-speak-text="Grafikusként dolgozom." data-speak-lang="hu-HU">Grafikusként dolgozom.</button> и <button class="speak-btn" data-speak-text="Arculattervezéssel foglalkozom." data-speak-lang="hu-HU">Arculattervezéssel foglalkozom.</button></li>
          <li>Если человек сейчас ищет работу, сформулируй нейтральный профессиональный ответ.</li>
        </ol>

        <div class="note">
          Контрольная модель:
          <button class="speak-btn" data-speak-text="Jelenleg munkát keresek, korábban pedig egy bankban dolgoztam." data-speak-lang="hu-HU">Jelenleg munkát keresek, korábban pedig egy bankban dolgoztam.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Опыт и обязанности</h4>
        <ol class="tasklist">
          <li>Переведи: «У меня три года опыта в сфере программирования».</li>
          <li>Скажи, где ты работал раньше и как долго.</li>
          <li>Назови минимум две прошлые обязанности.</li>
          <li>Объясни разницу между завершённым периодом и продолжающейся работой.</li>
        </ol>

        <table class="conj">
          <tr><th>Контрольная модель</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Három év programozási tapasztalatom van." data-speak-lang="hu-HU">Három év programozási tapasztalatom van.</button></td>
            <td>три года опыта в программировании</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két évig dolgoztam ott." data-speak-lang="hu-HU">Két évig dolgoztam ott.</button></td>
            <td>работал там два года; период завершён</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két éve dolgozom ott." data-speak-lang="hu-HU">Két éve dolgozom ott.</button></td>
            <td>работаю там уже два года</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Навыки, сильные стороны и мотивация</h4>
        <ol class="tasklist">
          <li>Назови два профессиональных навыка.</li>
          <li>Назови одну сильную сторону и объясни её рабочую пользу.</li>
          <li>Ответь, почему тебя интересует выбранная должность.</li>
        </ol>

        <p><button class="speak-btn" data-speak-text="Jól tudok problémákat megoldani, és magabiztosan használom az irodai programokat." data-speak-lang="hu-HU">Jól tudok problémákat megoldani, és magabiztosan használom az irodai programokat.</button></p>
        <p><button class="speak-btn" data-speak-text="Az egyik erősségem, hogy türelmesen kommunikálok." data-speak-lang="hu-HU">Az egyik erősségem, hogy türelmesen kommunikálok.</button></p>
        <p><button class="speak-btn" data-speak-text="Azért érdekel ez a pozíció, mert szeretek emberekkel dolgozni és szeretnék szakmailag fejlődni." data-speak-lang="hu-HU">Azért érdekel ez a pozíció, mert szeretek emberekkel dolgozni és szeretnék szakmailag fejlődni.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Рабочее сообщение и срок</h4>
        <ol class="tasklist">
          <li>Напиши, что отправляешь запрошенный документ во вложении.</li>
          <li>Попроси подтвердить получение.</li>
          <li>Переведи: «Проект будет готов к понедельнику».</li>
          <li>Сообщи, что срок переносится на вторник.</li>
        </ol>

        <p><button class="speak-btn" data-speak-text="Csatolva küldöm a kért dokumentumot." data-speak-lang="hu-HU">Csatolva küldöm a kért dokumentumot.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, jelezze, hogy megkapta-e." data-speak-lang="hu-HU">Kérem, jelezze, hogy megkapta-e.</button></p>
        <p><button class="speak-btn" data-speak-text="A projekt hétfőre kész lesz." data-speak-lang="hu-HU">A projekt hétfőre kész lesz.</button></p>
        <p><button class="speak-btn" data-speak-text="Sajnos hétfőre nem készül el, de keddre be tudom fejezni." data-speak-lang="hu-HU">Sajnos hétfőre nem készül el, de keddre be tudom fejezni.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Мини-собеседование</h4>
        <p>Ответь на вопросы полными, но короткими репликами:</p>
        <ol class="tasklist">
          <li><button class="speak-btn" data-speak-text="Kérem, röviden mutatkozzon be." data-speak-lang="hu-HU">Kérem, röviden mutatkozzon be.</button></li>
          <li><button class="speak-btn" data-speak-text="Hol dolgozott korábban?" data-speak-lang="hu-HU">Hol dolgozott korábban?</button></li>
          <li><button class="speak-btn" data-speak-text="Mik voltak a fő feladatai?" data-speak-lang="hu-HU">Mik voltak a fő feladatai?</button></li>
          <li><button class="speak-btn" data-speak-text="Mi az egyik erőssége?" data-speak-lang="hu-HU">Mi az egyik erőssége?</button></li>
          <li><button class="speak-btn" data-speak-text="Miért szeretne nálunk dolgozni?" data-speak-lang="hu-HU">Miért szeretne nálunk dolgozni?</button></li>
          <li><button class="speak-btn" data-speak-text="Mit tenne, ha egy ügyfél mérges lenne?" data-speak-lang="hu-HU">Mit tenne, ha egy ügyfél mérges lenne?</button></li>
          <li><button class="speak-btn" data-speak-text="Mikor tudna kezdeni?" data-speak-lang="hu-HU">Mikor tudna kezdeni?</button></li>
        </ol>

        <div class="task">
          В конце задай работодателю минимум один практический вопрос:
          о графике, обучении, удалённой работе или следующих этапах отбора.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Итоговые продукты</h4>
        <table class="conj">
          <tr><th>Устно</th><th>Письменно</th></tr>
          <tr>
            <td>профессиональное представление из шести–восьми предложений</td>
            <td>короткий отклик на вакансию из восьмидесяти–ста двадцати слов</td>
          </tr>
          <tr>
            <td>опыт, обязанности, навык, сильная сторона, мотивация</td>
            <td>обращение, должность, опыт, навыки, доступность, завершение</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Самопроверка</h4>
        <ul class="tick">
          <li>я различаю профессию, место работы и деятельность;</li>
          <li>я правильно использую формы продолжительности;</li>
          <li>я называю конкретные обязанности, а не общие слова;</li>
          <li>я объясняю мотивацию через задачи должности;</li>
          <li>я различаю дату события, срок готовности и конечную границу;</li>
          <li>я использую вежливые формы работодателя и формы первого лица кандидата;</li>
          <li>я задаю работодателю содержательный вопрос.</li>
        </ul>
      `,
    },
    {
      id: 10,
      eyebrow: "УРОК 25 · 10/11 · ПЕРЕХОД",
      title: "Előretekintés",
      subtitle: "Как профессиональный язык помогает в следующей теме",
      note: 'Урок 26 меняет ситуацию общения, но сохраняет важные навыки: описать факты, указать время, уточнить информацию, понять инструкцию и задать практический вопрос.',
      warn: 'Не переносите профессиональные формулы в кабинет врача механически. В новой ситуации будут другие слова, вопросы и формы обращения.',
      task: 'Прочитай пять мостов к уроку 26 и отметь, какие коммуникативные действия ты уже умеешь выполнять.',
      body: `
        <p>
          В уроке 26 тема меняется: здоровье, самочувствие, симптомы, врач и аптека.
          Однако многие коммуникативные действия уже знакомы по теме работы.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Пять переносимых навыков</h4>
        <table class="conj">
          <tr><th>Навык из урока 25</th><th>Применение в уроке 26</th></tr>
          <tr>
            <td>кратко представить ситуацию</td>
            <td>описать главную жалобу без длинного рассказа</td>
          </tr>
          <tr>
            <td>назвать длительность</td>
            <td>сказать, когда начался симптом и как долго он продолжается</td>
          </tr>
          <tr>
            <td>описать конкретные действия</td>
            <td>объяснить, что уже сделал пациент</td>
          </tr>
          <tr>
            <td>уточнить непонятное</td>
            <td>попросить врача повторить или объяснить инструкцию</td>
          </tr>
          <tr>
            <td>задать практический вопрос</td>
            <td>спросить о лекарстве, дозировке или следующем шаге</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мосты между темами</h4>
        <table class="conj">
          <tr><th>Работа</th><th>Здоровье</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Két éve dolgozom itt." data-speak-lang="hu-HU">Két éve dolgozom itt.</button></td>
            <td><button class="speak-btn" data-speak-text="Tegnap óta fáj a torkom." data-speak-lang="hu-HU">Tegnap óta fáj a torkom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Pontosan mit kell elkészítenem?" data-speak-lang="hu-HU">Pontosan mit kell elkészítenem?</button></td>
            <td><button class="speak-btn" data-speak-text="Pontosan hogyan kell szednem a gyógyszert?" data-speak-lang="hu-HU">Pontosan hogyan kell szednem a gyógyszert?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Meg tudná ismételni?" data-speak-lang="hu-HU">Meg tudná ismételni?</button></td>
            <td><button class="speak-btn" data-speak-text="Meg tudná ismételni, kérem?" data-speak-lang="hu-HU">Meg tudná ismételni, kérem?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor tudna kezdeni?" data-speak-lang="hu-HU">Mikor tudna kezdeni?</button></td>
            <td><button class="speak-btn" data-speak-text="Mikor kezdődtek a tünetek?" data-speak-lang="hu-HU">Mikor kezdődtek a tünetek?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van kérdése a pozícióval kapcsolatban?" data-speak-lang="hu-HU">Van kérdése a pozícióval kapcsolatban?</button></td>
            <td><button class="speak-btn" data-speak-text="Van kérdése a gyógyszerrel kapcsolatban?" data-speak-lang="hu-HU">Van kérdése a gyógyszerrel kapcsolatban?</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">К чему подготовиться</h4>
        <ul class="tick">
          <li>части тела и основные симптомы;</li>
          <li>конструкции боли и самочувствия;</li>
          <li>вопросы врача и ответы пациента;</li>
          <li>время начала и продолжительность симптома;</li>
          <li>рекомендации, инструкции и лекарства;</li>
          <li>разговор в аптеке и уточнение дозировки.</li>
        </ul>

        <div class="note">
          Граница перехода: слайд не учит медицине и не заменяет медицинскую консультацию.
          Он только показывает, какие языковые навыки из темы работы переносятся в следующую коммуникативную ситуацию.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 25 · 11/11 · ИТОГ",
      title: "Összefoglalás",
      subtitle: "Итоговая карта профессионального общения",
      note: 'Главный результат урока — не список терминов, а способность выбрать подходящую модель для конкретной рабочей ситуации.',
      warn: 'Используй только правдивые профессиональные сведения. В учебных заданиях можно брать вымышленные данные, но на реальном собеседовании, в CV и письме нельзя завышать опыт или уровень языка.',
      task: 'Пройди итоговую карту, исправь контрольные ошибки и выполни финальный Can-Do без подсказок.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Сначала определи, что именно сообщаешь</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>назвать профессию</td>
            <td>профессия + vagyok</td>
            <td><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></td>
          </tr>
          <tr>
            <td>назвать рабочую роль</td>
            <td>профессия + -ként dolgozom</td>
            <td><button class="speak-btn" data-speak-text="Grafikusként dolgozom." data-speak-lang="hu-HU">Grafikusként dolgozom.</button></td>
          </tr>
          <tr>
            <td>назвать организацию</td>
            <td>организация + -nál/-nél dolgozom</td>
            <td><button class="speak-btn" data-speak-text="Egy reklámügynökségnél dolgozom." data-speak-lang="hu-HU">Egy reklámügynökségnél dolgozom.</button></td>
          </tr>
          <tr>
            <td>назвать деятельность</td>
            <td>деятельность + -val/-vel foglalkozom</td>
            <td><button class="speak-btn" data-speak-text="Arculattervezéssel és webdesignnal foglalkozom." data-speak-lang="hu-HU">Arculattervezéssel és webdesignnal foglalkozom.</button></td>
          </tr>
          <tr>
            <td>сообщить текущий статус</td>
            <td>нейтральная статусная фраза</td>
            <td><button class="speak-btn" data-speak-text="Jelenleg munkát keresek." data-speak-lang="hu-HU">Jelenleg munkát keresek.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Опыт: количество, период и обязанности</h4>
        <table class="conj">
          <tr><th>Что сообщаем</th><th>Пример</th></tr>
          <tr>
            <td>количество опыта</td>
            <td><button class="speak-btn" data-speak-text="Három év ügyfélszolgálati tapasztalatom van." data-speak-lang="hu-HU">Három év ügyfélszolgálati tapasztalatom van.</button></td>
          </tr>
          <tr>
            <td>завершённый период</td>
            <td><button class="speak-btn" data-speak-text="Két évig egy szállodában dolgoztam." data-speak-lang="hu-HU">Két évig egy szállodában dolgoztam.</button></td>
          </tr>
          <tr>
            <td>период продолжается</td>
            <td><button class="speak-btn" data-speak-text="Két éve dolgozom ennél a cégnél." data-speak-lang="hu-HU">Két éve dolgozom ennél a cégnél.</button></td>
          </tr>
          <tr>
            <td>конкретные обязанности</td>
            <td><button class="speak-btn" data-speak-text="Az ügyfelek kérdéseire válaszoltam, e-maileket kezeltem, és egyszerűbb problémákat oldottam meg." data-speak-lang="hu-HU">Az ügyfelek kérdéseire válaszoltam, e-maileket kezeltem, és egyszerűbb problémákat oldottam meg.</button></td>
          </tr>
        </table>

        <div class="note">
          Не заменяй обязанности общими словами. Лучше назвать два–три проверяемых действия:
          что отвечал, организовывал, решал, готовил или координировал.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Хороший ответ на собеседовании</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Содержание</th></tr>
          <tr><td>1</td><td>прямо ответить на вопрос</td></tr>
          <tr><td>2</td><td>добавить конкретную профессиональную деталь</td></tr>
          <tr><td>3</td><td>при необходимости привести короткий пример</td></tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Az egyik erősségem, hogy türelmesen kommunikálok, és gyorsan tanulok." data-speak-lang="hu-HU">Az egyik erősségem, hogy türelmesen kommunikálok, és gyorsan tanulok.</button></p>
        <p><button class="speak-btn" data-speak-text="Azért szeretnék Önöknél dolgozni, mert érdekel az ügyfélszolgálat, és szeretnék szakmailag fejlődni." data-speak-lang="hu-HU">Azért szeretnék Önöknél dolgozni, mert érdekel az ügyfélszolgálat, és szeretnék szakmailag fejlődni.</button></p>
        <p><button class="speak-btn" data-speak-text="Ha egy ügyfél mérges lenne, először nyugodtan meghallgatnám." data-speak-lang="hu-HU">Ha egy ügyfél mérges lenne, először nyugodtan meghallgatnám.</button></p>
        <p><button class="speak-btn" data-speak-text="Milyen a munkaidő, és van lehetőség otthoni munkára?" data-speak-lang="hu-HU">Milyen a munkaidő, és van lehetőség otthoni munkára?</button></p>

        <div class="warn">
          Интервьюер обычно использует вежливые формы:
          <button class="speak-btn" data-speak-text="dolgozott, szeretne, tudna, tenne" data-speak-lang="hu-HU">dolgozott, szeretne, tudna, tenne</button>.
          Кандидат отвечает от первого лица:
          <button class="speak-btn" data-speak-text="dolgoztam, szeretnék, tudnék, tennék" data-speak-lang="hu-HU">dolgoztam, szeretnék, tudnék, tennék</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. CV: структура и язык действия</h4>
        <table class="conj">
          <tr><th>Раздел</th><th>Что должно быть видно</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Elérhetőségek" data-speak-lang="hu-HU">Elérhetőségek</button></td>
            <td>имя, телефон, профессиональная электронная почта, город</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szakmai profil" data-speak-lang="hu-HU">Szakmai profil</button></td>
            <td>опыт, сильная сторона и профессиональная цель</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Munkatapasztalat" data-speak-lang="hu-HU">Munkatapasztalat</button></td>
            <td>должность, организация, период и конкретные действия</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tanulmányok" data-speak-lang="hu-HU">Tanulmányok</button></td>
            <td>образование или квалификация</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Készségek" data-speak-lang="hu-HU">Készségek</button></td>
            <td>проверяемые профессиональные навыки</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nyelvtudás" data-speak-lang="hu-HU">Nyelvtudás</button></td>
            <td>язык и реальный уровень</td>
          </tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Válaszoltam az ügyfelek kérdéseire, és időpontokat egyeztettem." data-speak-lang="hu-HU">Válaszoltam az ügyfelek kérdéseire, és időpontokat egyeztettem.</button></p>
        <p><button class="speak-btn" data-speak-text="Nyelvtudás: angol B2, magyar A2." data-speak-lang="hu-HU">Nyelvtudás: angol B2, magyar A2.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Рабочее письмо и сроки</h4>
        <p><button class="speak-btn" data-speak-text="Csatolva küldöm a kért dokumentumot." data-speak-lang="hu-HU">Csatolva küldöm a kért dokumentumot.</button></p>
        <p><button class="speak-btn" data-speak-text="Kérem, jelezze, hogy megkapta-e." data-speak-lang="hu-HU">Kérem, jelezze, hogy megkapta-e.</button></p>

        <table class="conj">
          <tr><th>Форма</th><th>Значение</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="pénteken" data-speak-lang="hu-HU">pénteken</button></td>
            <td>в пятницу</td>
            <td><button class="speak-btn" data-speak-text="Pénteken beszélünk róla." data-speak-lang="hu-HU">Pénteken beszélünk róla.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="péntekre" data-speak-lang="hu-HU">péntekre</button></td>
            <td>к пятнице</td>
            <td><button class="speak-btn" data-speak-text="Péntekre kész lesz." data-speak-lang="hu-HU">Péntekre kész lesz.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="péntekig" data-speak-lang="hu-HU">péntekig</button></td>
            <td>до пятницы</td>
            <td><button class="speak-btn" data-speak-text="Péntekig be kell fejeznem." data-speak-lang="hu-HU">Péntekig be kell fejeznem.</button></td>
          </tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Még dolgozom rajta." data-speak-lang="hu-HU">Még dolgozom rajta.</button></p>
        <p><button class="speak-btn" data-speak-text="Sajnos péntekre nem készül el, de hétfőre be tudom fejezni." data-speak-lang="hu-HU">Sajnos péntekre nem készül el, de hétfőre be tudom fejezni.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Контрольные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Grafikus dolgozom.</td>
            <td><button class="speak-btn" data-speak-text="Grafikus vagyok." data-speak-lang="hu-HU">Grafikus vagyok.</button></td>
          </tr>
          <tr>
            <td>Három évig tapasztalatom van.</td>
            <td><button class="speak-btn" data-speak-text="Három év tapasztalatom van." data-speak-lang="hu-HU">Három év tapasztalatom van.</button></td>
          </tr>
          <tr>
            <td>Jól tudok angol.</td>
            <td><button class="speak-btn" data-speak-text="Jól beszélek angolul." data-speak-lang="hu-HU">Jól beszélek angolul.</button></td>
          </tr>
          <tr>
            <td>Pénteken kész lesz. — если имеется в виду «к пятнице»</td>
            <td><button class="speak-btn" data-speak-text="Péntekre kész lesz." data-speak-lang="hu-HU">Péntekre kész lesz.</button></td>
          </tr>
          <tr>
            <td>Csatolva küldöm a dokumentum.</td>
            <td><button class="speak-btn" data-speak-text="Csatolva küldöm a dokumentumot." data-speak-lang="hu-HU">Csatolva küldöm a dokumentumot.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Can-Do: урок усвоен, если ты можешь</h4>
        <ul class="tick">
          <li>назвать профессию, рабочую роль, организацию и сферу деятельности;</li>
          <li>описать завершённый и текущий опыт;</li>
          <li>назвать конкретные обязанности, навыки и сильную сторону;</li>
          <li>объяснить мотивацию и ответить на ситуационный вопрос;</li>
          <li>задать работодателю практический вопрос;</li>
          <li>составить краткое, правдивое и структурированное CV;</li>
          <li>написать рабочее письмо с вложением, подтверждением и сроком;</li>
          <li>сообщить статус задачи и предложить новый срок.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Финальное задание</h4>
        <div class="task">
          Для одной вымышленной вакансии подготовь три связанных продукта:
          устное представление из шести–восьми предложений,
          одностраничное учебное резюме
          и короткое письмо-отклик из восьмидесяти–ста двадцати слов.
          Все три продукта должны содержать согласованные сведения.
        </div>

        <div class="note">
          Граница урока 25: освоены базовые модели профессионального общения уровня B1.
          Юридические условия трудового договора, налоги и узкоспециальная терминология требуют отдельных материалов.
        </div>
      `,
    }
  ],
  vocabulary: [
    { id: "l25_v1", hu: "munkahely", ru: "место работы / офис", category: "Работа", exampleSentence: "A munkahelyem a belvárosban van.",
        ipa: "[mˈunkɒhɛj]"
    },
    { id: "l25_v2", hu: "kolléga", ru: "коллега", category: "Работа", exampleSentence: "Jó kollégáim vannak.",
        ipa: "[kˈollɛːgɒ]"
    },
    { id: "l25_v3", hu: "fizetés", ru: "зарплата", category: "Работа", exampleSentence: "Hónap elején van fizetés.",
        ipa: "[fˈizɛtɛːʃ]"
    },
    { id: "l25_v4", hu: "megbeszélés", ru: "совещание", category: "Работа", exampleSentence: "Tíz órakor megbeszélés lesz.",
        ipa: "[mˈɛgbɛʃɛːlɛːʃ]"
    }
  ],
    quiz: [
    {
      id: 2501,
      question: 'Как по-венгерски спросить «Кем ты работаешь / Чем занимаешься?»?',
      options: [
        'Mivel foglalkozol?',
        'Hol laksz?',
        'Hogy hívnak?',
        'Hány éves vagy?'
      ],
      correctIndex: 0,
      explanation: '«Mivel foglalkozol?» – стандартный вопрос о профессии и роде занятий. «Hol laksz?» – «Где ты живёшь?», «Hogy hívnak?» – «Как тебя зовут?», «Hány éves vagy?» – «Сколько тебе лет?».'
    },
    {
      id: 2502,
      question: 'Как ответить на вопрос «Mivel foglalkozol?», используя суффикс -ként (в качестве)?',
      options: [
        'Mérnök vagyok.',
        'Mérnökként dolgozom.',
        'Mérnök munkám van.',
        'Mérnök vagyok dolgozom.'
      ],
      correctIndex: 1,
      explanation: 'Суффикс -ként означает «в качестве»: mérnök + ként = mérnökként. Правильный ответ: «Mérnökként dolgozom.» (Я работаю в качестве инженера). «Mérnök vagyok» – тоже правильный ответ, но без -ként (урок 25, слайд 2).'
    },
    {
      id: 2503,
      question: 'Как сказать по-венгерски «Я отправлю имейл»?',
      options: [
        'Küldök egy e-mailt.',
        'Írok egy e-mailt.',
        'Olvasok egy e-mailt.',
        'Kapok egy e-mailt.'
      ],
      correctIndex: 0,
      explanation: '«Küldök egy e-mailt.» – «Я отправлю имейл». Глагол «küld» означает «отправлять/посылать». «Írok» – «пишу», «olvasok» – «читаю», «kapok» – «получаю».'
    },
    {
      id: 2504,
      question: 'Как называется резюме по-венгерски?',
      options: ['önéletrajz', 'munkahely', 'állásinterjú', 'fizetés'],
      correctIndex: 0,
      explanation: '«Önéletrajz» – это резюме / CV. «Munkahely» – место работы, «állásinterjú» – собеседование, «fizetés» – зарплата (урок 25, слайд 5).'
    },
    {
      id: 2505,
      question: 'Как сказать «К пятнице будет готово» по-венгерски?',
      options: [
        'Péntekre kész lesz.',
        'Pénteken kész lesz.',
        'Péntektől kész lesz.',
        'Péntekkor kész lesz.'
      ],
      correctIndex: 0,
      explanation: 'Для указания срока (к какому времени) используется суффикс -ra/-re: péntek + re = péntekre (к пятнице). «Pénteken» – «в пятницу» (день недели), «Péntektől» – «с пятницы», «Péntekkor» – не используется для дней недели.'
    },
    {
      id: 2506,
      question: 'Как правильно объяснить с помощью mert, почему вам нравится работа?',
      options: [
        'Szeretem a munkámat, mert érdekes.',
        'Szeretem a munkámat, hogy érdekes.',
        'Szeretem a munkámat, ezért mert érdekes.',
        'Szeretem a munkámat, érdekes mert.'
      ],
      correctIndex: 0,
      explanation: 'Mert вводит причину: Szeretem a munkámat, mert érdekes. — «Мне нравится моя работа, потому что она интересная».'
    }
  ],
  objectives: [
    { id: 'l25_name-professions', text: 'Называть профессии и места работы по-венгерски.', skills: ['speaking', 'reading', 'writing'] },
    { id: 'l25_ask-answer-job', text: 'Задавать и отвечать на вопрос «Mivel foglalkozol?».', skills: ['speaking', 'listening'] },
    { id: 'l25_describe-skills', text: 'Описывать свои навыки и рабочие обязанности.', skills: ['speaking', 'writing'] },
    { id: 'l25_write-cv', text: 'Составлять краткое резюме (önéletrajz) с личными данными.', skills: ['writing'] },
    { id: 'l25_interview-dialogue', text: 'Участвовать в диалоге-собеседовании.', skills: ['speaking', 'listening'] },
  ],
};
