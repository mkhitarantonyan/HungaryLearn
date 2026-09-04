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
      eyebrow: "УРОК 25 · 1/11 · ТЕМА «РАБОТА»",
      title: "Munka és karrier",
      subtitle: "Разговоры о профессии и трудоустройстве",
      body: `
   <p>Тема работы — одна из самых частых при знакомстве и на уровне B1. В этом уроке научимся говорить о своей специальности, обсуждать обязанности на рабочем месте, проходить собеседование и писать профессиональный отклик по-венгерски.</p>
   <div class="note"><b>Can-Do:</b> описать опыт и обязанности, назвать сильные стороны, понять реалистичную вакансию, ответить на обычный и неожиданный вопрос собеседования, задать работодателю практический вопрос и написать короткий профессиональный отклик.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 25 · 2/11 · КЕМ ТЫ РАБОТАЕШЬ?",
      title: "Mivel foglalkozol?",
      subtitle: "Как спросить и ответить о профессии",
      body: `
   <p>Главный вопрос о роде занятий:</p>
   <p><button class="speak-btn" data-speak-text="Mivel foglalkozol?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mivel foglalkozol?</button> <span style="color:#8a7a68">(Чем ты занимаешься? / Кем работаешь?)</span></p>
   <p><button class="speak-btn" data-speak-text="Mivel foglalkozik?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mivel foglalkozik?</button> <span style="color:#8a7a68">(на «Вы»)</span></p>
   <p>Способы ответа (сравните с именным сказуемым из 2-го урока: в настоящем времени 3-го лица связка van обычно не ставится):</p>
   <p><button class="speak-btn" data-speak-text="Mérnök vagyok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mérnök vagyok.</button> <span style="color:#8a7a68">(Я инженер)</span></p>
   <p><button class="speak-btn" data-speak-text="Informatikusként dolgozom." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Informatikusként dolgozom.</button> <span style="color:#8a7a68">(Работаю в качестве айтишника/программиста; -ként означает «в качестве / в роли» и здесь дано как дополнительная модель)</span></p>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 25 · 3/11 · РАБОЧЕЕ МЕСТО",
      title: "A munkahelyen",
      subtitle: "Офис, коллеги, задачи",
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="munkahely" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> munkahely</button> — место работы</p>
       <p><button class="speak-btn" data-speak-text="kolléga / munkatárs" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kolléga / munkatárs</button> — коллега</p>
       <p><button class="speak-btn" data-speak-text="főnök" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> főnök</button> — начальник / босс</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="iroda" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> iroda</button> — офис</p>
       <p><button class="speak-btn" data-speak-text="fizetés" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> fizetés</button> — зарплата</p>
       <p><button class="speak-btn" data-speak-text="értekezlet / megbeszélés" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> értekezlet / megbeszélés</button> — собрание / совещание</p>
     </div>
   </div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 25 · 4/11 · СОБЕСЕДОВАНИЕ",
      title: "Állásinterjú",
      subtitle: "Ключевые вопросы и фразы",
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretnék jelentkezni erre az állásra." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék jelentkezni erre az állásra.</button> <span style="color:#8a7a68">(Я хотел бы подать заявку на эту вакансию)</span></p>
   <p><button class="speak-btn" data-speak-text="Milyen tapasztalata van?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen tapasztalata van?</button> <span style="color:#8a7a68">(Какой у вас опыт?)</span></p>
   <p><button class="speak-btn" data-speak-text="Öt év tapasztalatom van ebben a munkában." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Öt év tapasztalatom van ebben a munkában.</button> <span style="color:#8a7a68">(У меня 5 лет опыта в этой работе)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 25 · 5/11 · РЕЗЮМЕ",
      title: "Önéletrajz",
      subtitle: "Составление CV по-венгерски",
      body: `
   <p>Основные разделы венгерского резюме (<span class="hu-word">önéletrajz</span>):</p>
   <ul class="tick">
     <li><b>Személyes adatok</b> — Личные данные</li>
     <li><b>Tanulmányok</b> — Образование / учёба</li>
     <li><b>Munkatapasztalat</b> — Опыт работы</li>
     <li><b>Nyelvismeret</b> — Знание языков (например: <button class="speak-btn" data-speak-text="angol középfok, magyar alapfok" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> angol középfok, magyar alapfok</button>)</li>
     <li><b>Készségek</b> — Навыки / умения</li>
   </ul>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 25 · 6/11 · ОФИСНЫЕ ФРАЗЫ",
      title: "Munkahelyi kifejezések",
      subtitle: "Рабочая переписка и устное общение",
      body: `
   <p><button class="speak-btn" data-speak-text="Küldök egy e-mailt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Küldök egy e-mailt.</button> <span style="color:#8a7a68">(Я отправлю имейл)</span></p>
   <p><button class="speak-btn" data-speak-text="Mikorra lesz kész a projekt?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mikorra lesz kész a projekt?</button> <span style="color:#8a7a68">(К какому сроку будет готов проект?)</span></p>
   <p><button class="speak-btn" data-speak-text="Péntekre kész lesz." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péntekre kész lesz.</button> <span style="color:#8a7a68">(К пятнице будет готов — суффикс -ra/re для срока!)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 25 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Разговор о работе",
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretem a munkámat, mert nagyon érdekes." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretem a munkámat, mert nagyon érdekes.</button> <span style="color:#8a7a68">(Я люблю свою работу, потому что она очень интересная — союз mert из 24-го урока!)</span></p>
   <p><button class="speak-btn" data-speak-text="A kollégáim nagyon kedvesek és segítőkészek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A kollégáim nagyon kedvesek és segítőkészek.</button> <span style="color:#8a7a68">(Мои коллеги очень милые и отзывчивые)</span></p>
   <div class="note"><b>Функциональные реплики:</b> Mivel foglalkozik? · Korábban … dolgoztam. · … év tapasztalatom van. · A feladataim közé tartozott… · Főleg … foglalkoztam. · Jól tudok… · Az egyik erősségem… · Szeretek csapatban dolgozni. · Önállóan is tudok dolgozni. · Gyorsan tanulok. · Miért szeretne nálunk dolgozni? · Mikor tudna kezdeni? · Milyen a munkaidő? · Van lehetőség otthoni munkára? · Szeretnék többet megtudni a pozícióról. · Köszönöm a lehetőséget.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 25 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Фрагмент собеседования",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot! Miért szeretne nálunk dolgozni?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot! Miért szeretne nálunk dolgozni?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Mert ez a cég nagyon sikeres, és szeretnék új dolgokat tanulni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mert ez a cég nagyon sikeres, és szeretnék új dolgokat tanulni.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Milyen nyelveken beszél?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Milyen nyelveken beszél?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Folyékonyan beszélek angolul és oroszul, és tanulok magyarul." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Folyékonyan beszélek angolul és oroszul, és tanulok magyarul.</button></p>
   <div class="task">Задание 1. Ответьте на вопрос «Milyen nyelveken beszél?» своими реальными знаниями языков.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 25 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: L25_ACTIVITIES,
      optionalSpeaking: L25_OPTIONAL_SPEAKING,
      body: `
   <ol class="tasklist">
     <li>Ответьте на вопрос „Mivel foglalkozol?“ двумя способами (через або через -ként)</li>
     <li>Назовите 5 офисных терминов (коллега, зарплата, совещание, офис, начальник)</li>
     <li>Переведите: «У меня 3 года опыта в сфере программирования»</li>
     <li>Переведите: «Проект будет готов к понедельнику»</li>
     <li>Составьте краткое устное резюме из 4 предложений про себя</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 25 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>В следующем, 26-м уроке — еще одна важнейшая бытовая и социальная тема: здоровье, самочувствие, визит к врачу (orvosnál) и описание симптомов.</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 25 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 25-го урока",
      body: `
   <ul class="tick">
     <li>Вопрос Mivel foglalkozol? / Mivel foglalkozik?</li>
     <li>Ответ: [профессия] vagyok или [профессия]-ként dolgozom</li>
     <li>Собеседование: állásinterjú, munkatapasztalat, jelentkezni</li>
     <li>Резюме: önéletrajz (tanulmányok, készségek, nyelvismeret)</li>
     <li>Сроки: péntekre (к пятнице) — суффикс -ra/re</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите мини-резюме про себя по 5 разделам (раздел önéletrajz) по-венгерски.</div>
 `
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
