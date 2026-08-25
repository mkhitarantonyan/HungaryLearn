import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L28_ACTIVITIES = createMigrationActivities({
  lessonId: 28,
  controlledTitle: 'Итоговое повторение: форма, значение и связь',
  controlledPassCount: 4,
  controlledExercises: [
    { kind: 'singleChoice', id: 'l28-cp-1', prompt: 'ház + ban + possessive «мой»', options: ['házamban', 'házbanom'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l28-cp-2', prompt: '«Я прочитал эту книгу».', options: ['Elolvastam ezt a könyvet.', 'Elolvasok ezt a könyvet.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l28-cp-3', prompt: 'Вежливая просьба.', options: ['Legyen szíves, segítsen!', 'Segítettem tegnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l28-cp-4', prompt: 'Гипотеза.', options: ['Ha lenne időm, utaznék.', 'Mert tegnap utaztam.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l28-cp-5', prompt: 'Причина и контраст.', options: ['Szeretem, mert érdekes, de nehéz.', 'Szeretem ha érdekes mert.'], correctIndex: 0 },
  ],
  readingTitle: 'Чтение: личный опыт изучения языка',
  readingParagraphs: ['Két éve kezdtem magyarul tanulni, mert Budapestre költöztem. Eleinte nehéz volt a sok toldalék, de ma már megértem a hétköznapi beszélgetéseket. Szeretnék folyékonyabban beszélni, ezért minden nap hallgatok magyar műsorokat.'],
  readingPassCount: 2,
  readingQuestions: [
    { id: 'l28-read-1', question: 'Miért kezdett magyarul tanulni?', options: ['Budapestre költözött', 'Új munkát keresett', 'Vizsgára készült'], correctIndex: 0 },
    { id: 'l28-read-2', question: 'Mi volt eleinte nehéz?', options: ['A sok toldalék', 'Az ábécé', 'A számok'], correctIndex: 0 },
    { id: 'l28-read-3', question: 'Mit csinál minden nap?', options: ['Magyar műsorokat hallgat', 'Levelet ír', 'Nyelvtant tanít'], correctIndex: 0 },
  ],
  listeningTitle: 'Аудирование: планы дальнейшего обучения',
  listeningTranscript: 'Jövőre szeretnék nyelvvizsgát tenni. Ha több időm lesz, hetente kétszer beszélgetek majd magyar barátokkal, mert a folyékony beszédet szeretném fejleszteni.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l28-listen-1', question: 'Mit szeretne tenni jövőre?', options: ['Nyelvvizsgát tenni', 'Elköltözni', 'Munkát váltani'], correctIndex: 0 },
    { id: 'l28-listen-2', question: 'Milyen gyakran szeretne beszélgetni?', options: ['Naponta', 'Hetente kétszer', 'Havonta'], correctIndex: 1 },
    { id: 'l28-listen-3', question: 'Mit szeretne fejleszteni?', options: ['A folyékony beszédet', 'A kézírást', 'A fordítást'], correctIndex: 0 },
  ],
  writingTitle: 'Итоговый текст: мой опыт, мнение и план',
  writingPrompt: 'Напиши 10–12 связанных фраз: коротко расскажи о прошлом опыте, опиши настоящее, объясни мнение и назови будущий план с условием.',
  writingModel: ['Két éve kezdtem magyarul tanulni.', 'Most már sok mindent megértek, de még szeretnék folyékonyabban beszélni.', 'Ha lesz időm, jövőre nyelvvizsgát teszek.'],
  writingRubric: ['Есть прошлое, настоящее и будущее', 'Мнение подкреплено причиной', 'Есть условие и связный переход между мыслями'],
  recordingTitle: 'Итоговое говорение: связный рассказ',
  recordingInstructions: 'Запиши 1–2 минуты связной речи: прошлый опыт, нынешняя ситуация, мнение с причиной и будущий план.',
  recordingTarget: 'Két éve kezdtem tanulni. Most rendszeresen gyakorlok, mert szeretnék folyékonyabban beszélni. Ha lesz időm, jövőre vizsgát teszek.',
  objectiveChecks: [
    { objectiveId: 'l28_review-agglutination', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l28_review-cases', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l28_review-moods', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l28_integrate-skills', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l28_self-assess', activity: 'recording', evidenceKind: 'speaking' },
  ],
});

export const LESSON_28: Lesson = {
  id: 28,
  number: 28,
  level: 'B1',
  title: 'Урок 28 · A B1 szint összefoglalása',
  subtitle: 'Итоговое повторение уровня B1',
  description: 'Финальный обзор всей грамматической системы венгерского языка от A1 до B1: падежи, спряжения, наклонения, приставки, союзы и рекомендации по дальнейшему изучению.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 28 · 1/11 · ФИНАЛ КУРСА",
      title: "A B1 szint összefoglalása",
      subtitle: "Поздравляем с выходом на уровень B1!",
      body: `
   <p>Вы прошли огромный путь от первых букв алфавита в 1-м уроке до сложных гипотетических предложений, падежных систем и беглой речи B1! В этом финальном уроке соберем всю грамматику венгерского языка в единую гармоничную карту.</p>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 28 · 2/11 · АРХИТЕКТУРА ЯЗЫКА",
      title: "A magyar nyelv rendszere",
      subtitle: "Главные столпы венгерской грамматики",
      body: `
   <ul class="tick">
     <li><b>Агглютинация:</b> Венгерский широко использует агглютинацию: многие грамматические значения выражаются последовательным присоединением аффиксов к основе (ház → házam → házamban → házamból). Но язык не сводится только к суффиксам: используются также приставки, послелоги, служебные элементы и разные модели словосочетаний.</li>
     <li><b>Гармония гласных (Hangrend):</b> Гласные делится на задние (a, á, o, ó, u, ú) и передние (e, é, i, í, ö, ő, ü, ű). Суффиксы подстраиваются под корень!</li>
     <li><b>Два спряжения глаголов:</b> Alanyi (неопределённое) vs Tárgyas (определённое — когда есть конкретный объект с a/az, ezt/azt, имя собственное...).</li>
     <li><b>Отсутствие рода:</b> В венгерском нет категории рода (ő = он / она / оно).</li>
   </ul>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 28 · 3/11 · ВРЕМЕНА И НАКЛОНЕНИЯ",
      title: "Igeidők és igemódok",
      subtitle: "Полная матрица глагола",
      body: `
   <table class="conj">
     <tr><th>Форма</th><th>Маркер</th><th>Пример (tanul)</th></tr>
     <tr><td>Настоящее время (Jelen idő)</td><td>чистый корень + окончания</td><td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanul</button></td></tr>
     <tr><td>Прошедшее время (Múlt idő)</td><td>-t / -ott/-ett/-ött + личные окончания; модель зависит от глагола (урок 20)</td><td><button class="speak-btn" data-speak-text="tanult" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanult</button></td></tr>
     <tr><td>Будущее время (Jövő idő)</td><td>fog + инфинитив (урок 19)</td><td><button class="speak-btn" data-speak-text="tanulni fog" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulni fog</button></td></tr>
     <tr><td>Повелительное наклонение (Felszólító mód)</td><td>суффикс -j- (урок 22)</td><td><button class="speak-btn" data-speak-text="tanuljon!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanuljon!</button></td></tr>
     <tr><td>Условное наклонение (Feltételes mód)</td><td>-na/-ne/-ná/-né + личные окончания (урок 23)</td><td><button class="speak-btn" data-speak-text="tanulna" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> tanulna</button></td></tr>
   </table>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 28 · 4/11 · СПРЯЖЕНИЯ",
      title: "A két igeragozás",
      subtitle: "Сравнение неопределённого и определённого спряжения",
      body: `
   <table class="conj">
     <tr><th>Кто</th><th>Alanyi (неопределённое)</th><th>Tárgyas (определённое)</th></tr>
     <tr><td>én</td><td>olvasok (одну книгу)</td><td>olvasom (эту книгу)</td></tr>
     <tr><td>te</td><td>olvasol</td><td>olvasod</td></tr>
     <tr><td>ő</td><td>olvas</td><td>olvassa</td></tr>
     <tr><td>mi</td><td>olvasunk</td><td>olvassuk</td></tr>
     <tr><td>ti</td><td>olvastok</td><td>olvassátok</td></tr>
     <tr><td>ők</td><td>olvasnak</td><td>olvassák</td></tr>
   </table>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 28 · 5/11 · ПАДЕЖИ И ПРИТЯЖАТЕЛЬНОСТЬ",
      title: "A névszóragozás és az esetek",
      subtitle: "Пространственные триады и принадлежность",
      body: `
   <p><b>Пространственная триада венгерских падежей:</b></p>
   <ul class="tick">
     <li><b>Куда? (Hová?):</b> -ba/-be (внутрь), -ra/-re (на поверхность), -hoz/-hez/-höz (к объекту)</li>
     <li><b>Где? (Hol?):</b> -ban/-ben (внутри), -on/-en/-ön (на поверхности), -nál/-nél (у объекта)</li>
     <li><b>Откуда? (Honnan?):</b> -ból/-ből (изнутри), -ról/-ről (с поверхности), -tól/-től (от объекта)</li>
   </ul>
   <p><b>Притяжательность (Birtokos személyjelek):</b> házam (мой дом), házad (твой дом), háza (его дом)...</p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 28 · 6/11 · ПРИСТАВКИ И ПОРЯДОК СЛОВ",
      title: "Igekötők és szórend",
      subtitle: "Поведение приставок (be, ki, fel, le, el, meg, át, vissza...)",
      body: `
   <p>1. В обычном утверждении приставка стоит перед глаголом: <button class="speak-btn" data-speak-text="Elmegyek a boltba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elmegyek a boltba.</button></p>
   <p>2. В нейтральном отрицании приставка отделяется и следует после спрягаемого глагола: <button class="speak-btn" data-speak-text="Nem megyek el." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem megyek el.</button></p>
   <p>3. С модальным глаголом нейтральное утверждение: <button class="speak-btn" data-speak-text="El akarok menni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> El akarok menni.</button> При отрицании модального глагола: <button class="speak-btn" data-speak-text="Nem akarok elmenni." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem akarok elmenni.</button></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 28 · 7/11 · ТИПЫ ПРЕДЛОЖЕНИЙ",
      title: "Mondattípusok és kötőszavak",
      subtitle: "Сложные предложения B1",
      body: `
   <p>Вы умеете связывать мысли союзами:</p>
   <ul class="tick">
     <li><b>mert</b> (потому что) — Nem jöttem, <i>mert</i> beteg voltam.</li>
     <li><b>ezért</b> (поэтому) — Esik az eső, <i>ezért</i> itthon maradok.</li>
     <li><b>hogy</b> (что / чтобы) — Tudom, <i>hogy</i> itt vagy. / Azért jöttem, <i>hogy</i> segítsek.</li>
     <li><b>bár</b> (хотя) — Elmegyek, <i>bár</i> fáradt vagyok.</li>
     <li><b>ha</b> (если / если бы) — <i>Ha</i> ráérsz, gyere át! / <i>Ha</i> lenne időm, mennék.</li>
   </ul>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 28 · 8/11 · ФИНАЛЬНЫЙ МИКС",
      title: "Gyakorló mondatok",
      subtitle: "Сумма всей грамматики в предложениях",
      body: `
   <p><button class="speak-btn" data-speak-text="Ha tegnap nem lett volna dolgom, elmentem volna veled a moziba." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha tegnap nem lett volna dolgom, elmentem volna veled a moziba.</button></p>
   <p><button class="speak-btn" data-speak-text="Mondd meg neki, hogy azonnal hívjon fel!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Mondd meg neki, hogy azonnal hívjon fel!</button></p>
   <p><button class="speak-btn" data-speak-text="Már három éve élek Magyarországon, és nagyon szeretem ezt az országot." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Már három éve élek Magyarországon, és nagyon szeretem ezt az országot.</button></p>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 28 · 9/11 · ИТОГОВЫЙ ТЕСТ",
      title: "Záróteszt",
      subtitle: "Финальный самоконтроль B1",
      activities: L28_ACTIVITIES,
      body: `
   <ol class="tasklist">
     <li>Напишите 3 формы глагола tanul: прошедшее (ő), повелительное (ő), условное (ő)</li>
     <li>Составьте условное предложение с ha и lenne</li>
     <li>Объясните разницу между «Tudom, hogy jön» и «Azt akarom, hogy jöjjön»</li>
     <li>Переведите: «Если бы у меня было время, я поехал бы в Будапешт»</li>
     <li>Напишите сочинение о себе из 10 предложений (имя, профессия, где живете, почему учите венгерский, планы)</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 28 · 10/11 · КАК ИДТИ ДАЛЬШЕ",
      title: "Hogyan tovább?",
      subtitle: "Рекомендации по поддержанию и развитию языка",
      body: `
   <ul class="tick">
     <li><b>Чтение:</b> Читайте венгерские новости (например, telex.hu, index.hu) и адаптивные книги.</li>
     <li><b>Аудирование:</b> Слушайте венгерские подкасты, радио и смотрите фильмы с венгерскими субтитрами.</li>
     <li><b>Разговор:</b> Не бойтесь делать ошибки! Общайтесь с носителями языка при любой возможности.</li>
     <li><b>Словарь:</b> Ведите тематический словарь и повторяйте слова каждый день.</li>
   </ul>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 28 · 11/11 · ПОЗДРАВЛЯЕМ!",
      title: "Gratulálunk!",
      subtitle: "Вы завершили программу материалов уровня B1",
      body: `
   <div style="text-align:center; padding: 20px 0;">
     <h3 style="color:#d97706; font-size:1.5rem; margin-bottom:12px;">Gratulálunk!</h3>
     <p style="font-size:1.1rem; color:#4b5563;">Поздравляем! Вы завершили программу материалов уровня B1.</p>
     <p style="font-size:1rem; color:#6b7280; margin-top:8px;">Это означает, что вы прошли весь заявленный учебный материал курса. Сам по себе факт прохождения уроков не является независимым подтверждением CEFR-уровня B1. Для объективной оценки нужны отдельные задания на reading, listening, writing и speaking.</p>
   </div>
   <div class="note"><b>Köszönjük, hogy velünk tanultál! Sok sikert a továbblépéshez!</b></div>
 `
    }
  ],
  vocabulary: [
    { id: "l28_v1", hu: "összefoglalás", ru: "итог / резюме / обобщение", category: "Грамматика", exampleSentence: "Ez a B1 szint összefoglalása.",
        ipa: "[ˈøʃʃɛfoglɒlɒːʃ]"
    },
    { id: "l28_v2", hu: "rendszer", ru: "система", category: "Грамматика", exampleSentence: "A magyar nyelv rendszere logikus.",
        ipa: "[rˈɛndʃɛr]"
    },
    { id: "l28_v3", hu: "sikeresen", ru: "успешно", category: "Наречия", exampleSentence: "Sikeresen befejeztem a tanfolyamot.",
        ipa: "[ʃˈikɛrɛʃɛn]"
    }
  ],
    quiz: [
    {
      id: 2801,
      question: 'Что такое агглютинация в венгерском языке?',
      options: [
        'Присоединение суффиксов к основе слова для выражения грамматических значений',
        'Изменение корня слова в зависимости от времени',
        'Использование предлогов перед словами',
        'Согласование слов по роду, числу и падежу'
      ],
      correctIndex: 0,
      explanation: 'Агглютинация – это последовательное присоединение аффиксов к основе: ház → házam → házamban → házamból. Но язык не сводится только к суффиксам: используются также приставки, послелоги и другие средства (урок 28, слайд 2).'
    },
    {
      id: 2802,
      question: 'Какой маркер используется для образования прошедшего времени в венгерском языке?',
      options: ['-t / -ott/-ett/-ött', '-na/-ne/-ná/-né', 'суффикс -j-', 'вспомогательный глагол fog'],
      correctIndex: 0,
      explanation: 'Прошедшее время образуется по моделям -t и -ott/-ett/-ött с личными окончаниями; выбор модели зависит от глагола (tanult, olvasott). Fog используется для будущего времени, -na/-ne/-ná/-né — для условного наклонения, -j- — для повелительного.'
    },
    {
      id: 2803,
      question: 'Когда в венгерском языке используется ОПРЕДЕЛЁННОЕ спряжение (tárgyas ragozás)?',
      options: [
        'Когда глагол управляет конкретным определённым объектом (a könyvet, ezt, őt)',
        'Когда прямое дополнение отсутствует',
        'Всегда, независимо от дополнения',
        'Только в прошедшем времени'
      ],
      correctIndex: 0,
      explanation: 'Определённое спряжение используется, когда действие направлено на конкретный объект (a/az, ezt/azt, имя собственное, придаточное с hogy). Без конкретного объекта – неопределённое спряжение.'
    },
    {
      id: 2804,
      question: 'Какие суффиксы используются для ответа на вопрос "Где? (Hol?)" в венгерском языке?',
      options: [
        '-ban/-ben, -on/-en/-ön, -nál/-nél',
        '-ba/-be, -ra/-re, -hoz/-hez/-höz',
        '-ból/-ből, -ról/-ről, -tól/-től',
        '-nak/-nek, -val/-vel, -ért'
      ],
      correctIndex: 0,
      explanation: 'Три группы падежей для вопроса "Где?": -ban/-ben (внутри), -on/-en/-ön (на поверхности), -nál/-nél (около/у). Это пространственная триада (урок 28, слайд 5).'
    },
    {
      id: 2805,
      question: 'Что происходит с глагольной приставкой в отрицательном предложении (например, "elmegyek" → "nem megyek el")?',
      options: [
        'Приставка отделяется и в нейтральном отрицании следует после спрягаемого глагола',
        'Приставка остаётся перед глаголом (nem elmegyek)',
        'Приставка исчезает',
        'Приставка и глагол меняются местами'
      ],
      correctIndex: 0,
      explanation: 'В нейтральном отрицании приставка отделяется и следует после спрягаемого глагола: elmegyek → Nem megyek el. Это не означает, что она обязана стоять в конце всего предложения.'
    },
    {
      id: 2806,
      question: 'Как правильно выразить гипотетическое условие «Если бы у меня было больше времени, я бы больше путешествовал(а)»?',
      options: [
        'Ha több időm lenne, többet utaznék.',
        'Ha több időm van, többet utaznék.',
        'Ha több időm lenne, többet utazok.',
        'Ha több időm volt, többet utaznék.'
      ],
      correctIndex: 0,
      explanation: 'В гипотетическом условии с ha условное наклонение используется в обеих частях: lenne («было бы») и utaznék («я путешествовал(а) бы»).'
    }
  ],
  objectives: [
    { id: 'l28_review-agglutination', text: 'Анализировать агглютинацию: собирать и разбирать слова по морфемам.', skills: ['grammar', 'reading'] },
    { id: 'l28_review-cases', text: 'Применять систему местных и грамматических падежей.', skills: ['grammar', 'writing'] },
    { id: 'l28_review-moods', text: 'Различать и использовать изъявительное, повелительное и условное наклонения.', skills: ['grammar', 'writing', 'speaking'] },
    { id: 'l28_integrate-skills', text: 'Строить связные высказывания, объединяя весь материал уровня B1.', skills: ['speaking', 'writing'] },
    { id: 'l28_self-assess', text: 'Оценивать свой уровень и определять темы для повторения.', skills: ['writing', 'speaking'] },
  ],
};
