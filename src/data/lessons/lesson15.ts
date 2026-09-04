import { Lesson, LessonActivity } from '../../types';

const L15_CP_DATIVE: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l15-cp-dative',
  title: 'Контекстная практика: ресторан и дательный падеж',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l15-cp-dative-1', prompt: 'Ты хочешь столик на двоих. Что скажешь?', options: ['Asztalt szeretnék két személyre.', 'Két számlát kérek.', 'Nincs asztalom.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-2', prompt: 'Ты просишь рекомендацию официанта.', options: ['Mit ajánl?', 'Mit fizet?', 'Kinek adja?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-3', prompt: 'Ты хочешь узнать состав блюда.', options: ['Mit tartalmaz ez az étel?', 'Mennyibe kerül a szék?', 'Hol van a kabát?'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l15-cp-dative-4', prompt: 'A ___ egy limonádét kérünk. (gyerek)', accept: ['gyereknek'], explanation: 'gyerek → gyereknek: получатель выражен дательным падежом.' },
    { kind: 'fillGap', id: 'l15-cp-dative-5', prompt: 'Ezt a levest a ___ rendeltem. (barátom)', accept: ['barátomnak'], explanation: 'barátom → barátomnak.' },
    { kind: 'singleChoice', id: 'l15-cp-dative-6', prompt: 'Nekem egy kávét, ...', options: ['neki pedig egy teát kérek.', 'őt pedig egy tea.', 'neki pedig teának.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-7', prompt: 'Как вежливо попросить ещё воды?', options: ['Kérhetek még egy pohár vizet?', 'Vizet adok neked.', 'Van vízem?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-8', prompt: 'Попроси две вилки для вашей компании.', options: ['Hozna nekünk két villát?', 'Hozok neked villának.', 'Két villa van nekem.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-9', prompt: 'Ты заказываешь суп.', options: ['Egy levest kérek.', 'Egy levesnek kérek.', 'Egy leves van.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-10', prompt: 'Принесли чужой заказ. Как отреагировать?', options: ['Elnézést, ezt nem én rendeltem.', 'Nagyon finom volt.', 'Mit ajánl?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-11', prompt: 'Как попросить счёт?', options: ['Kérhetnénk a számlát?', 'A számlának kérek.', 'Kinek a számla?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-12', prompt: 'Каждый платит за себя.', options: ['Külön fizetünk.', 'Együtt fizetünk.', 'Nem fizetünk.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-13', prompt: 'Один человек платит за весь стол.', options: ['Együtt fizetünk.', 'Külön fizetünk.', 'Nincs számla.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l15-cp-dative-14', prompt: 'Официант спрашивает, кому принести кофе. Ответ:', options: ['Nekem, köszönöm.', 'Engem kávé.', 'Énnek.'], correctIndex: 0 },
  ],
};

const L15_READING_MENU: LessonActivity = {
  kind: 'reading',
  id: 'l15-reading-menu',
  title: 'Egy vacsora, ami majdnem tökéletes volt',
  instructions: 'Прочитай связную историю о визите в ресторан и ответь на вопросы по смыслу.',
  content: { type: 'prose', paragraphs: [
    'Réka és Márk péntek este egy kis belvárosi étterembe mentek, mert Réka születésnapját ünnepelték. Márk előre asztalt foglalt két személyre, ezért a pincér rögtön az ablak melletti asztalhoz vezette őket. Az étterem hangulatos volt, az asztalon friss virág és két pohár víz várta őket. Először megnézték az étlapot. Réka zöldséglevest és sült halat választott. Megkérdezte a pincért, hogy a halétel tartalmaz-e tejet, mert azt nem ehet. A pincér elmondta, hogy nincs benne tej, csak hal, zöldség és citrom.',
    'Márk gulyáslevest és rántott sajtot rendelt, inni pedig ásványvizet kért. Réka egy limonádét választott. Néhány perc múlva a pincér véletlenül narancslevet hozott Rékának. Réka udvariasan szólt: „Elnézést, ezt nem én rendeltem. Limonádét kértem.” A pincér bocsánatot kért, és gyorsan kicserélte az italt.',
    'A főételek finomak voltak, ezért a kis hiba után is jó hangulatban vacsoráztak. Desszertet már nem kértek, mert mindketten jóllaktak, de Márk ivott egy kávét. Végül kérték a számlát, és Márk bankkártyával fizetett. Távozáskor Réka azt mondta, hogy szívesen visszajönne: az étel ízletes volt, a pincér pedig gyorsan és kedvesen megoldotta a problémát.',
  ]},
  passCount: 6,
  questions: [
    { id: 'l15-menu-q1', question: 'Miért ment Réka és Márk étterembe, és volt-e foglalásuk?', options: ['Születésnapot ünnepeltek, és Márk foglalt asztalt.', 'Üzleti ebédjük volt foglalás nélkül.', 'Csak kávézni mentek.'], correctIndex: 0 },
    { id: 'l15-menu-q2', question: 'Mit rendelt Márk enni?', options: ['Gulyáslevest és rántott sajtot.', 'Zöldséglevest és sült halat.', 'Csak desszertet.'], correctIndex: 0 },
    { id: 'l15-menu-q3', question: 'Mit kérdezett Réka a halételről?', options: ['Tartalmaz-e tejet.', 'Mennyibe kerül.', 'Kinek készítették.'], correctIndex: 0 },
    { id: 'l15-menu-q4', question: 'Milyen hiba történt?', options: ['Réka limonádé helyett narancslevet kapott.', 'Márk nem kapott főételt.', 'Elveszett a foglalás.'], correctIndex: 0 },
    { id: 'l15-menu-q5', question: 'Hogyan oldotta meg a pincér a problémát?', options: ['Bocsánatot kért és kicserélte az italt.', 'Nem tett semmit.', 'Ingyen desszertet hozott.'], correctIndex: 0 },
    { id: 'l15-menu-q6', question: 'Hogyan fizettek?', options: ['Márk bankkártyával fizetett.', 'Külön, készpénzzel fizettek.', 'Réka nem fizetett.'], correctIndex: 0 },
    { id: 'l15-menu-q7', question: 'Miért menne vissza Réka az étterembe?', options: ['Finom volt az étel, és jól kezelték a hibát.', 'Olcsó volt a szállás.', 'Nem kellett rendelni.'], correctIndex: 0 },
  ],
};

const L15_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l15-listening-restaurant',
  title: 'Аудирование: диалог в ресторане',
  assetId: 'l15_listening_restaurant',
  audioStatus: 'published',
  passCount: 3,
  transcript: 'Pincér: Jó estét! Mit kér?\nVendég: Szeretnék egy gulyáslevest és egy limonádét.\nPincér: Sajnos nincs limonádé, csak narancslé van.\nVendég: Rendben, akkor egy narancslevet kérek.\nPincér: És főételt?\nVendég: Igen, egy rántott sajtot kérek.\nPincér: Rendben, hozom rögtön.',
  questions: [
    { id: 'l15-list-q1', question: 'Hol játszódik a párbeszéd?', options: ['A boltban', 'Az étteremben', 'A vasútállomáson'], correctIndex: 1, explanation: 'Это заказ в ресторане.' },
    { id: 'l15-list-q2', question: 'Mit szeretne inni a vendég?', options: ['Limonádét', 'Kávét', 'Narancslevet'], correctIndex: 0, explanation: 'Vendég просит limonádét.' },
    { id: 'l15-list-q3', question: 'Mi nincs az étteremben?', options: ['Narancslé', 'Limonádé', 'Rántott sajt'], correctIndex: 1, explanation: 'Limonádé нет — есть только narancslé.' },
    { id: 'l15-list-q4', question: 'Milyen főételt kér a vendég?', options: ['Grillezett halat', 'Sült csirkét', 'Rántott sajtot'], correctIndex: 2, explanation: 'Главное блюдо — rántott sajt.' },
  ],
};

const L15_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay',
  id: 'l15-roleplay-restaurant',
  title: 'Ролевая игра: полный визит в ресторан',
  partnerLabel: 'Pincér',
  completionMessage: 'Sikeresen lezártad az éttermi helyzetet.',
  startTurnId: 'l15-rp-w1',
  turns: [
    { id: 'l15-rp-w1', speaker: 'waiter', prompt: 'Jó estét! Segíthetek?', next: 'l15-rp-l1' },
    { id: 'l15-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Попроси столик.', model: 'Jó estét! Asztalt szeretnék.', next: 'l15-rp-w2' },
    { id: 'l15-rp-w2', speaker: 'waiter', prompt: 'Természetesen. Hány személyre?', next: 'l15-rp-l2' },
    { id: 'l15-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови количество гостей.', model: 'Két személyre, kérem.', next: 'l15-rp-w3' },
    { id: 'l15-rp-w3', speaker: 'waiter', prompt: 'Rendben, tessék, itt az étlap. A sült halat ajánlom.', next: 'l15-rp-l3' },
    { id: 'l15-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси, что содержит блюдо.', model: 'Köszönöm. Mit tartalmaz a sült hal?', next: 'l15-rp-w4' },
    { id: 'l15-rp-w4', speaker: 'waiter', prompt: 'Halat, zöldséget és citromot tartalmaz. Mit hozhatok önnek?', next: 'l15-rp-l4' },
    { id: 'l15-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Закажи еду и напиток для себя.', model: 'Én egy sült halat és egy ásványvizet kérek.', next: 'l15-rp-w5' },
    { id: 'l15-rp-w5', speaker: 'waiter', prompt: 'Rendben. És a másik vendégnek?', next: 'l15-rp-l5' },
    { id: 'l15-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Закажи один предмет для другого человека.', model: 'Neki egy zöldséglevest és egy limonádét kérek.', next: 'l15-rp-w6' },
    { id: 'l15-rp-w6', speaker: 'waiter', prompt: 'Sajnos limonádé nincs, de van narancslé vagy ásványvíz.', next: 'l15-rp-l6' },
    { id: 'l15-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вежливо отреагируй и выбери решение.', model: 'Rendben, akkor neki egy narancslevet kérek.', next: 'l15-rp-stage' },
    { id: 'l15-rp-stage', speaker: 'stage', stageLabel: 'Később…', prompt: 'ПОЗЖЕ · ПОСЛЕ ЕДЫ', next: 'l15-rp-w7' },
    { id: 'l15-rp-w7', speaker: 'waiter', prompt: 'Ízlett a vacsora? Kérnek még valamit? Esetleg desszertet?', next: 'l15-rp-l7' },
    { id: 'l15-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Кратко оцени еду и попроси счёт.', model: 'Igen, nagyon finom volt. Kérhetnénk a számlát?', next: 'l15-rp-w8' },
    { id: 'l15-rp-w8', speaker: 'waiter', prompt: 'Természetesen. Külön vagy együtt fizetnek?', next: 'l15-rp-l8' },
    { id: 'l15-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови предпочтение оплаты и вежливо заверши.', model: 'Együtt fizetünk, bankkártyával. Köszönjük szépen!', next: 'l15-rp-w9' },
    { id: 'l15-rp-w9', speaker: 'waiter', prompt: 'Köszönöm szépen. Viszontlátásra!' },
  ],
};

const L15_WRITING: LessonActivity = {
  kind: 'writing',
  id: 'l15-writing-preferences',
  title: 'Письмо: отзыв о посещении ресторана',
  prompt: 'Напиши 80–100 слов о посещении ресторана. Укажи где и когда это было, с кем ты ходил, что заказал ты и другой человек, одну хорошую деталь, небольшую проблему, её решение и итоговое мнение.',
  modelAnswer: ['Szombat este a barátommal egy kis étteremben vacsoráztunk. Én zöldséglevest és sült halat rendeltem, a barátomnak pedig gulyáslevest és rántott sajtot kértünk. Az ételek frissek és nagyon finomak voltak. Sajnos először rossz italt hoztak nekem: limonádé helyett narancslevet kaptam. Udvariasan szóltam a pincérnek, ő pedig gyorsan kicserélte. A hely csendes volt, a pincér pedig figyelmesen válaszolt minden kérdésünkre az étlapról. A vacsora végén együtt kértük a számlát, és bankkártyával fizettünk. A kis hiba ellenére jól éreztük magunkat, ezért szívesen visszamennék.'],
  rubric: [
    '80–100 слов', 'где/когда и с кем', 'оба заказа', 'положительная деталь', 'проблема и решение', 'итоговое мнение',
  ],
};

const L15_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори 1.5–2 минуты о вымышленном посещении ресторана. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Расскажи, с кем ты ходил, что заказал, что понравилось, какая возникла проблема и чем всё закончилось.',
  rubric: ['спутник и место', 'заказ', 'положительная деталь', 'проблема и решение'],
};

const L15_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l15-exit-check',
  title: 'Exit check — достижение целей урока',
  checks: [
    { objectiveId: 'l15_name-food', activityId: 'l15-reading-menu', evidenceKind: 'reading' },
    { objectiveId: 'l15_form-dative', activityId: 'l15-cp-dative', evidenceKind: 'grammar' },
    { objectiveId: 'l15_use-have-construction', activityId: 'l15-cp-dative', evidenceKind: 'grammar' },
    { objectiveId: 'l15_express-likes', activityId: 'l15-writing-preferences', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l15-reading-menu', evidenceKind: 'reading' }] },
    { objectiveId: 'l15_order-food', activityId: 'l15-roleplay-restaurant', evidenceKind: 'interaction', evidenceComponents: [{ activityId: 'l15-cp-dative', evidenceKind: 'grammar' }, { activityId: 'l15-writing-preferences', evidenceKind: 'writing' }] },
    { objectiveId: 'l15_understand-restaurant-dialogue', activityId: 'l15-listening-restaurant', evidenceKind: 'listening' },
  ],
};

export const LESSON_15: Lesson = {
  id: 15,
  number: 15,
  level: 'A2',
  title: 'Урок 15 · Ételek és étterem',
  subtitle: 'Ресторан, заказ и дательный падеж (-nak / -nek)',
  description: 'Полный базовый визит в ресторан: столик, заказ для себя и другого человека, состав блюда, небольшая проблема, счёт и полезные контексты -nak/-nek.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 15 · 1/11 · ДАТЕЛЬНЫЙ ПАДЕЖ",
      title: "A részes eset",
      subtitle: "-nak/-nek — «кому», «для кого»",
      body: `
   <p>Суффикс <span class="hu-word">-nak/-nek</span> соответствует русскому дательному падежу («кому?», «для кого?»). Присоединяется напрямую, без соединительной гласной (гласная уже есть в самом суффиксе).</p>
   <table class="conj">
     <tr><th>Слово</th><th>+ -nak/-nek</th><th>Значение</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ház</button></td><td><button class="speak-btn" data-speak-text="háznak" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> háznak</button></td><td>дому/для дома</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kert</button></td><td><button class="speak-btn" data-speak-text="kertnek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> kertnek</button></td><td>саду/для сада</td></tr>
     <tr><td><button class="speak-btn" data-speak-text="anya" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anya</button></td><td><button class="speak-btn" data-speak-text="anyának" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> anyának</button></td><td>маме/для мамы</td></tr>
   </table>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 15 · 2/11 · МЕСТОИМЕНИЯ",
      title: "Névmások részes esete",
      subtitle: "«Мне», «тебе», «ему»...",
      body: `
   <table class="conj">
     <tr><th>Именительный</th><th>Дательный</th><th>Значение</th></tr>
     <tr><td>én</td><td><button class="speak-btn" data-speak-text="nekem" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekem</button></td><td>мне</td></tr>
     <tr><td>te</td><td><button class="speak-btn" data-speak-text="neked" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> neked</button></td><td>тебе</td></tr>
     <tr><td>ő</td><td><button class="speak-btn" data-speak-text="neki" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> neki</button></td><td>ему/ей</td></tr>
     <tr><td>mi</td><td><button class="speak-btn" data-speak-text="nekünk" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekünk</button></td><td>нам</td></tr>
     <tr><td>ti</td><td><button class="speak-btn" data-speak-text="nektek" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nektek</button></td><td>вам</td></tr>
     <tr><td>ők</td><td><button class="speak-btn" data-speak-text="nekik" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> nekik</button></td><td>им</td></tr>
   </table>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 15 · 3/11 · ГЛАВНОЕ ПРИМЕНЕНИЕ",
      title: "„Nekem van...”",
      subtitle: "Как сказать «у меня есть» — вспоминаем 8-й урок",
      body: `
   <p>В венгерском нет отдельного глагола «иметь». Обладание выражается конструкцией <b>[дательный падеж владельца] + van/vannak + [существительное с притяжательным суффиксом]</b>:</p>
   <p><button class="speak-btn" data-speak-text="Nekem van egy házam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nekem van egy házam.</button> <span style="color:#8a7a68">(У меня есть дом — дословно «мне есть дом-мой»)</span></p>
   <p><button class="speak-btn" data-speak-text="Neked van egy autód." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Neked van egy autód.</button> <span style="color:#8a7a68">(У тебя есть машина)</span></p>
   <p><button class="speak-btn" data-speak-text="Neki van egy testvére." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Neki van egy testvére.</button> <span style="color:#8a7a68">(У него есть сестра/брат)</span></p>
   <div class="note">Заметьте: сочетаются сразу две темы курса — дательный падеж (этот урок) и притяжательный суффикс (8-й урок). Именно так и работает венгерская грамматика — темы постоянно комбинируются друг с другом.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 15 · 4/11 · ОТРИЦАНИЕ",
      title: "„Nincs”",
      subtitle: "«У меня нет...»",
      body: `
   <p>Отрицательная форма van — не „nem van“, а особое слово <span class="hu-word">nincs</span> (ед. ч.) / <span class="hu-word">nincsenek</span> (мн. ч.):</p>
   <p><button class="speak-btn" data-speak-text="Nincs autóm." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincs autóm.</button> <span style="color:#8a7a68">(У меня нет машины)</span></p>
   <p><button class="speak-btn" data-speak-text="Nincsenek gyerekei." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nincsenek gyerekei.</button> <span style="color:#8a7a68">(У неё нет детей)</span></p>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 15 · 5/11 · КОСВЕННОЕ ДОПОЛНЕНИЕ",
      title: "Adok valamit valakinek",
      subtitle: "«Даю кому-то что-то»",
      activities: [L15_CP_DATIVE],
      body: `
   <p>Классическое применение дательного падежа — глаголы передачи (давать, показывать, говорить кому-то):</p>
   <p><button class="speak-btn" data-speak-text="Adok egy könyvet a barátomnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Adok egy könyvet a barátomnak.</button> <span style="color:#8a7a68">(Даю книгу другу)</span></p>
   <p><button class="speak-btn" data-speak-text="Megmutatom a fényképet anyámnak." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Megmutatom a fényképet anyámnak.</button> <span style="color:#8a7a68">(Показываю фотографию маме)</span></p>
   <div class="note">Порядок обычно такой: Подлежащее – глагол – прямое дополнение (винительный) – косвенное дополнение (дательный), но венгерский допускает и другой порядок ради выделения нужного слова.</div>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 15 · 6/11 · ЧТЕНИЕ",
      title: "Ételek",
      subtitle: "Еда — базовый словарь",
      activities: [L15_READING_MENU],
      note: 'Szeretem a gulyáslevest. — люблю / мне вообще нравится гуляшевый суп (gulyáslevest — винительный падеж, объект). Nekem ízlik a gulyásleves. — гуляшевый суп нравится мне на вкус (gulyásleves — подлежащее, nekem — experiencer). Nem ízlik nekem a hal. — рыба мне не по вкусу.',
      body: `
   <div class="grid2">
     <div>
       <p><button class="speak-btn" data-speak-text="leves" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> leves</button> — суп</p>
       <p><button class="speak-btn" data-speak-text="hús" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hús</button> — мясо</p>
       <p><button class="speak-btn" data-speak-text="hal" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> hal</button> — рыба</p>
       <p><button class="speak-btn" data-speak-text="zöldség" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> zöldség</button> — овощи</p>
     </div>
     <div>
       <p><button class="speak-btn" data-speak-text="sajt" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> sajt</button> — сыр</p>
       <p><button class="speak-btn" data-speak-text="saláta" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> saláta</button> — салат</p>
       <p><button class="speak-btn" data-speak-text="desszert" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> desszert</button> — десерт</p>
       <p><button class="speak-btn" data-speak-text="víz" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> víz</button> — вода</p>
     </div>
   </div>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 15 · 7/11 · В РЕСТОРАНЕ",
      title: "Az étteremben",
      subtitle: "Полезные фразы для заказа",
      activities: [L15_LISTENING],
      body: `
   <p><button class="speak-btn" data-speak-text="Szeretnék ezt rendelni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék ezt rendelni.</button> <span style="color:#8a7a68">(Я хотел бы это заказать)</span></p>
   <p><button class="speak-btn" data-speak-text="Mit ajánl?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mit ajánl?</button> <span style="color:#8a7a68">(Что вы посоветуете?)</span></p>
   <p><button class="speak-btn" data-speak-text="Kérem a számlát." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kérem a számlát.</button> <span style="color:#8a7a68">(Принесите мне, пожалуйста, счёт)</span></p>
   <div class="note"><button class="speak-btn" data-speak-text="Szeretnék ezt rendelni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék ezt rendelni.</button> использует условное наклонение („szeretnék“ — «я хотел бы») — вежливая форма заказа. Условное наклонение целиком разберём в 23-м уроке, а пока просто выучите эту фразу как готовый блок.</div>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 15 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Заказ в ресторане",
      activities: [L15_ROLEPLAY],
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Jó napot! Mit ajánl?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Jó napot! Mit ajánl?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="A leves nagyon finom ma, és van friss hal is." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> A leves nagyon finom ma, és van friss hal is.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Akkor kérek egy levest és egy halat." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Akkor kérek egy levest és egy halat.</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Rendben, hozom rögtön." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Rendben, hozom rögtön.</button></p>
   <div class="task">Задание 1. Прочитайте диалог вслух, затем составьте свой заказ из 3 блюд.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 15 · 9/11 · ПИСЬМО",
      title: "Éttermi élmény",
      subtitle: "Связный отзыв о визите",
      activities: [L15_WRITING],
      body: `<p>Напиши 80–100 слов: место и время, спутник, оба заказа, положительная деталь, небольшая проблема, её решение и итоговое мнение.</p>`
    },
    {
      id: 10,
      eyebrow: "УРОК 15 · 10/11 · SPEAKING PRACTICE",
      title: "Egy éttermi látogatás",
      subtitle: "Необязательная практика без записи",
      optionalSpeaking: L15_SPEAKING,
      body: `<p>Свяжи заказ, впечатление, небольшую проблему и её решение в короткий устный рассказ.</p><div class="note">Дательный падеж позже вернётся в конструкции nekem kell в L18.</div>`
    },
    {
      id: 11,
      eyebrow: "УРОК 15 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 15-го урока",
      activities: [L15_EXIT_CHECK],
      body: `
   <ul class="tick">
     <li>-nak/-nek — дательный падеж, «кому/для кого», присоединяется напрямую</li>
     <li>Обладание: [дательный] + van/vannak + [существительное с притяжательным суффиксом]</li>
     <li>Отрицание обладания — особое слово nincs/nincsenek, а не „nem van“</li>
     <li>Косвенное дополнение и ресторанные просьбы: кому принести или заказать</li>
     <li>Столик, рекомендация, состав блюда, проблема, счёт и способ оплаты</li>
   </ul>
   <div class="note">Controlled Practice, Reading и Listening могут дать DIRECT после порога. RolePlay и Writing остаются PARTIAL; speaking practice не создаёт evidence.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l15_v1", hu: "leves", ru: "суп", category: "Food Core", exampleSentence: "A leves nagyon finom.", ipa: "[ˈlɛvɛʃ]" },
    { id: "l15_v2", hu: "hús", ru: "мясо", category: "Food Core", exampleSentence: "Friss hús.", ipa: "[ˈhuːʃ]" },
    { id: "l15_v3", hu: "hal", ru: "рыба", category: "Food Core", exampleSentence: "A hal egészséges.", ipa: "[ˈhɒl]" },
    { id: "l15_v4", hu: "zöldség", ru: "овощи", category: "Food Core", exampleSentence: "Sok zöldséget eszem.", ipa: "[ˈzøltʃeːɡ]" },
    { id: "l15_v5", hu: "sajt", ru: "сыр", category: "Food Core", exampleSentence: "A finom sajt.", ipa: "[ˈʃɒjt]" },
    { id: "l15_v6", hu: "saláta", ru: "салат", category: "Food Core", exampleSentence: "Friss saláta.", ipa: "[ˈʃɒlaːtɒ]" },
    { id: "l15_v7", hu: "desszert", ru: "десерт", category: "Food Core", exampleSentence: "A desszert édes.", ipa: "[ˈdɛsːɛrt]" },
    { id: "l15_v8", hu: "víz", ru: "вода", category: "Food Core", exampleSentence: "Egy üveg víz.", ipa: "[ˈviːz]" },
    { id: "l15_v9", hu: "kér", ru: "просить / заказывать", category: "Functional Core", exampleSentence: "Kérek egy levest.", baseWord: "kér" },
    { id: "l15_v10", hu: "számla", ru: "счёт", category: "Functional Core", exampleSentence: "A számlát kérem." },
    { id: "l15_v11", hu: "nekem", ru: "мне", category: "Supporting Grammar", exampleSentence: "Nekem van egy könyvem." },
    { id: "l15_v12", hu: "nincs", ru: "нет (отрицание van)", category: "Supporting Grammar", exampleSentence: "Nincs autóm." },
    { id: "l15_v13", hu: "étlap", ru: "меню", category: "Passive Menu", exampleSentence: "Az étlap az asztalon van." },
    { id: "l15_v14", hu: "ital", ru: "напиток", category: "Passive Menu", exampleSentence: "Milyen italt kér?" },
    { id: "l15_v15", hu: "főétel", ru: "основное блюдо", category: "Passive Menu", exampleSentence: "A főétel nagyon finom." },
    { id: "l15_v16", hu: "ízlik", ru: "нравиться (на вкус)", category: "Functional Core", exampleSentence: "Nekem ízlik a leves.", ipa: "[ˈiːzlik]" }
  ],
  quiz: [
    {
      id: 1501,
      question: 'Какой суффикс выражает дательный падеж («кому / для кого»)?',
      options: ['-ban / -ben', '-nak / -nek', '-ba / -be', '-val / -vel'],
      correctIndex: 1,
      explanation: 'Дательный падеж в венгерском образуется с помощью суффиксов -nak (для задних гласных) и -nek (для передних гласных).'
    },
    {
      id: 1502,
      question: 'Как по-венгерски сказать «У меня есть машина»?',
      options: ['Én van autó', 'Nekem van egy autóm', 'Nekem autó van', 'Van én autóm'],
      correctIndex: 1,
      explanation: 'Конструкция обладания: [Дательный падеж] + van + [Существительное с притяжательным суффиксом] → Nekem van egy autóm.'
    },
    {
      id: 1503,
      question: 'Какое слово используется для отрицания обладания («У меня нет...») вместо «nem van»?',
      options: ['nem', 'nincs', 'semmi', 'soha'],
      correctIndex: 1,
      explanation: 'В венгерском языке отрицанием van является особое слово nincs (или nincsenek для множественного числа).'
    },
    {
      id: 1504,
      question: 'Как попросить счёт в ресторане по-венгерски?',
      options: ['Kérem a számlát', 'A számla van', 'Mit ajánl?', 'Szeretnék fizetni nem'],
      correctIndex: 0,
      explanation: 'Фраза «Kérem a számlát» переводится как «Принесите мне, пожалуйста, счёт».'
    },
    {
      id: 1505,
      question: 'Как сказать «я даю подарок маме» по-венгерски?',
      options: [
        'Ajándékot adok anyámnak',
        'Ajándékot adok anyám',
        'Ajándékot adok anyámhoz',
        'Ajándékot adok anyámnál'
      ],
      correctIndex: 0,
      explanation: 'Косвенное дополнение (кому?) требует дательного падежа: anya → anyának → anyámnak (моей маме). Правильный порядок: Ajándékot adok anyámnak.'
    },
    {
      id: 1506,
      question: 'Заполните пропуск: «Nekem van egy ___» (от слова ház — «дом»).',
      options: [
        'ház',
        'házam',
        'háznak',
        'házat'
      ],
      correctIndex: 1,
      explanation: 'В конструкции обладания существительное получает притяжательный суффикс 1-го лица: ház → házam («мой дом»). Nekem van egy házam = «У меня есть дом».'
    }
  ],
  objectives: [
    { id: 'l15_name-food', text: 'Называть продукты питания и блюда по-венгерски.', skills: ['speaking', 'reading', 'writing'] },
    { id: 'l15_form-dative', text: 'Образовывать дательный падеж с помощью -nak/-nek.', skills: ['grammar', 'writing'] },
    { id: 'l15_use-have-construction', text: 'Выражать обладание конструкцией «nekem van …» (у меня есть).', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l15_express-likes', text: 'Выражать предпочтения в еде (szeretem, ízlik).', skills: ['speaking', 'writing'] },
    { id: 'l15_order-food', text: 'Делать заказ в кафе или ресторане.', skills: ['speaking', 'interaction'] },
    { id: 'l15_understand-restaurant-dialogue', text: 'Понимать основную информацию и детали короткого диалога в ресторане.', skills: ['listening'] },
  ],
};
