import { Lesson } from '../../types';
import { createMigrationActivities } from './migrationActivityFactory';

const L24_ACTIVITIES = createMigrationActivities({
  lessonId: 24,
  controlledTitle: 'Союзы: смысловая связь между частями',
  controlledPassCount: 4,
  controlledExercises: [
    { kind: 'singleChoice', id: 'l24-cp-1', prompt: 'Nem megyek el, ___ fáradt vagyok.', options: ['mert', 'de', 'és'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-2', prompt: 'Fáradt vagyok, ___ befejezem a munkát.', options: ['de', 'mert', 'hogy'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-3', prompt: 'Tudom, ___ holnap jössz.', options: ['hogy', 'bár', 'és'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-4', prompt: '___ esik, sétálni megyünk.', options: ['Bár', 'Mert', 'És'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l24-cp-5', prompt: '___ jó idő lesz, kirándulunk.', options: ['Ha', 'De', 'Hogy'], correctIndex: 0 },
  ],
  readingTitle: 'Чтение: решение на выходные',
  readingParagraphs: ['Szombaton kirándulni szeretnénk, de az időjárás bizonytalan. Ha süt a nap, a hegyekbe megyünk. Ha esik, otthon maradunk, mert nem szeretünk esőben sétálni.'],
  readingPassCount: 2,
  readingQuestions: [
    { id: 'l24-read-1', question: 'Miért bizonytalan a program?', options: ['Az időjárás miatt', 'A munka miatt', 'A pénz miatt'], correctIndex: 0 },
    { id: 'l24-read-2', question: 'Mikor mennek a hegyekbe?', options: ['Ha süt a nap', 'Ha esik', 'Ha dolgoznak'], correctIndex: 0 },
    { id: 'l24-read-3', question: 'Miért maradnak otthon esőben?', options: ['Mert fáradtak', 'Mert nem szeretnek esőben sétálni', 'Mert nincs autójuk'], correctIndex: 1 },
  ],
  listeningTitle: 'Аудирование: мнение и причина',
  listeningTranscript: 'Szerintem jó ez a lakás, mert világos és közel van a munkámhoz. Bár kicsi, mégis kényelmes. Megnézem még egyszer, és utána döntök.',
  listeningPassCount: 2,
  listeningQuestions: [
    { id: 'l24-listen-1', question: 'Miért tetszik a lakás?', options: ['Világos és közel van', 'Nagy és olcsó', 'Új és csendes'], correctIndex: 0 },
    { id: 'l24-listen-2', question: 'Mi a lakás hátránya?', options: ['Sötét', 'Kicsi', 'Messze van'], correctIndex: 1 },
    { id: 'l24-listen-3', question: 'Mikor dönt a beszélő?', options: ['Azonnal', 'Egy újabb megtekintés után', 'Jövőre'], correctIndex: 1 },
  ],
  writingTitle: 'Письмо: мнение с аргументами',
  writingPrompt: 'Напиши 7–8 связанных фраз о выборе жилья, работы или поездки. Вырази мнение, две причины, контраст и условие.',
  writingModel: ['Szerintem ez a munka érdekes, mert sok emberrel találkozom.', 'Bár messze van, jól fizet.', 'Ha megkapom az állást, elfogadom.'],
  writingRubric: ['Есть мнение и причины', 'Использованы контраст и условие', 'Фразы образуют связный текст'],
  recordingTitle: 'Говорение: объясни своё решение',
  recordingInstructions: 'Выскажи мнение, назови две причины и один контраргумент. Свяжи реплики союзами урока.',
  recordingTarget: 'Szerintem ez jó döntés, mert hasznos. Bár nehéz, megpróbálom, ha lesz időm.',
  objectiveChecks: [
    { objectiveId: 'l24_use-conjunctions', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l24_build-complex-sentences', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l24_express-cause', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l24_express-contrast', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l24_connect-ideas', activity: 'recording', evidenceKind: 'speaking' },
  ],
});

export const LESSON_24: Lesson = {
  id: 24,
  number: 24,
  level: 'B1',
  title: 'Урок 24 · Összetett mondatok',
  subtitle: 'Сложные предложения и союзы',
  description: 'Сочинительные и подчинительные союзы (és, de, vagy, ezért, mert, hogy, bár, ha), порядок слов и пунктуация (запятая перед союзами обязательна!).',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 24 · 1/11 · ВВЕДЕНИЕ",
      title: "Összetett mondatok",
      subtitle: "Связываем мысли в единую речь",
      body: `
   <p>Чтобы говорить красиво на уровне B1, мало простых предложений — нужно уметь связывать их в логические цепочки: «я не пришёл, <b>потому что</b> болел», «он сказал, <b>что</b> приедет», «мы пошли, <b>хотя</b> шёл дождь». В этом уроке разберём главные союзы и правила их употребления.</p>
   <div class="note">Запятая в венгерском определяется прежде всего границами частей предложения, а не самим словом-союзом. В сложном предложении граница между частями обычно обозначается запятой. Но перед <b>és</b> и другими союзами между однородными членами запятая не ставится.</div>
 `
    },
    {
      id: 2,
      eyebrow: "УРОК 24 · 2/11 · СОЧИНИТЕЛЬНЫЕ СОЮЗЫ",
      title: "Mellérendelő kötőszavak",
      subtitle: "Союзы, связывающие равноправные части",
      body: `
   <table class="conj">
     <tr><th>Союз</th><th>Значение</th><th>Пример</th></tr>
     <tr><td><button class="speak-btn" data-speak-text="és / s" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> és / s</button></td><td>и / а</td><td><button class="speak-btn" data-speak-text="Péter tanul, én pedig olvasok." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Péter tanul, én pedig olvasok.</button></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> de</button></td><td>но / однако</td><td><button class="speak-btn" data-speak-text="Szeretnék menni, de nincs időm." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Szeretnék menni, de nincs időm.</button></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="vagy" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> vagy</button></td><td>или</td><td><button class="speak-btn" data-speak-text="Kávét kérsz, vagy teát?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kávét kérsz, vagy teát?</button></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> ezért</button></td><td>поэтому</td><td><button class="speak-btn" data-speak-text="Esik az eső, ezért itthon maradunk." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Esik az eső, ezért itthon maradunk.</button></td></tr>
     <tr><td><button class="speak-btn" data-speak-text="így" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> így</button></td><td>так что / таким образом</td><td><button class="speak-btn" data-speak-text="Kész vagyok, így elmehetek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Kész vagyok, így elmehetek.</button></td></tr>
   </table>
 `
    },
    {
      id: 3,
      eyebrow: "УРОК 24 · 3/11 · МЕРТ",
      title: "Alárendelő kötőszavak: mert",
      subtitle: "Причинный союз mert — «потому что»",
      body: `
   <p><span class="hu-word">mert</span> вводит причину действия («потому что» / «так как»):</p>
   <p><button class="speak-btn" data-speak-text="Nem jöttem, mert beteg voltam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem jöttem, mert beteg voltam.</button> <span style="color:#8a7a68">(Я не пришёл, потому что был болен)</span></p>
   <p><button class="speak-btn" data-speak-text="Azért tanulok magyarul, mert Budapesten élek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azért tanulok magyarul, mert Budapesten élek.</button> <span style="color:#8a7a68">(Я учился венгерскому потому, что живу в Будапеште)</span></p>
   <div class="note">Парная конструкция <span class="hu-word">azért..., mert...</span> («потому..., что...») делает акцент на причине ещё более упругим и четким.</div>
 `
    },
    {
      id: 4,
      eyebrow: "УРОК 24 · 4/11 · ХОДЬ",
      title: "Alárendelő kötőszavak: hogy",
      subtitle: "Изъяснительный и целевой союз hogy — «что» / «чтобы»",
      body: `
   <p><span class="hu-word">hogy</span> имеет два основных значения в зависимости от контекста и наклонения глагола:</p>
   <p><b>1. «что» (с изъявительным наклонением)</b> — передаёт мысли, слова, факты:</p>
   <p><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudom, hogy itt vagy.</button> <span style="color:#8a7a68">(Знаю, что ты здесь)</span></p>
   <p><button class="speak-btn" data-speak-text="Azt mondta, hogy holnap jön." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azt mondta, hogy holnap jön.</button> <span style="color:#8a7a68">(Он сказал, что придёт завтра)</span></p>
   <p><b>2. «чтобы» (с повелительным наклонением из 22-го урока!)</b> — передаёт цель или приказ:</p>
   <p><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azért jöttem, hogy segítsek.</button> <span style="color:#8a7a68">(Я пришёл [для того], чтобы помочь — segítsek = повелительное наклонение 1-го лица!)</span></p>
   <div class="warn"><b>Критическое правило:</b> В значении «чтобы» глагол в придаточном предложении ОБЯЗАТЕЛЬНО ставится в повелительное наклонение (felszólító mód)! Инфинитив, как в русском «чтобы помочь», тут использовать нельзя.</div>
 `
    },
    {
      id: 5,
      eyebrow: "УРОК 24 · 5/11 · БАР И ХА",
      title: "Alárendelő kötőszavak: bár / ha",
      subtitle: "Уступительный bár («хотя») и условный ha («если»)",
      body: `
   <p><span class="hu-word">bár / habár</span> — «хотя / несмотря на то что»:</p>
   <p><button class="speak-btn" data-speak-text="Elmentem, bár fáradt voltam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Elmentem, bár fáradt voltam.</button> <span style="color:#8a7a68">(Я пошёл, хотя был уставшим)</span></p>
   <p><span class="hu-word">ha</span> — «если» (реальное или гипотетическое условие):</p>
   <p><button class="speak-btn" data-speak-text="Ha ráérsz, gyere át!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Ha ráérsz, gyere át!</button> <span style="color:#8a7a68">(Если свободен, приходи ко мне!)</span></p>
 `
    },
    {
      id: 6,
      eyebrow: "УРОК 24 · 6/11 · ПОРЯДОК СЛОВ",
      title: "Szórend összetett mondatokban",
      subtitle: "Как ведут себя глагольные приставки в придаточных",
      body: `
   <p>Само придаточное предложение не заставляет глагольную приставку отделяться. Внутри него действуют обычные правила фокуса, вопроса и отрицания; сравните со знакомыми приставочными глаголами из 14-го урока:</p>
   <p><button class="speak-btn" data-speak-text="Tudom, hol van a bolt." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Tudom, hol van a bolt.</button></p>
   <p><button class="speak-btn" data-speak-text="Azt mondta, hogy nem jön el." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azt mondta, hogy nem jön el.</button> <span style="color:#8a7a68">(nem оторвало el от jön)</span></p>
 `
    },
    {
      id: 7,
      eyebrow: "УРОК 24 · 7/11 · ПРАКТИКА",
      title: "Gyakorló mondatok",
      subtitle: "Тренировка союзов",
      body: `
   <p><button class="speak-btn" data-speak-text="Nem mentem dolgozni, mert beteg voltam, ezért itthon maradtam." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Nem mentem dolgozni, mert beteg voltam, ezért itthon maradtam.</button> <span style="color:#8a7a68">(Я не пошёл работать, потому что был болен, поэтому остался дома)</span></p>
   <p><button class="speak-btn" data-speak-text="Azt akarom, hogy sokat tanulj." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azt akarom, hogy sokat tanulj.</button> <span style="color:#8a7a68">(Я хочу, чтобы ты много учился — hogy + повелительное tanulj!)</span></p>
 `
    },
    {
      id: 8,
      eyebrow: "УРОК 24 · 8/11 · ДИАЛОГ",
      title: "Párbeszéd",
      subtitle: "Объяснение причин",
      body: `
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Miért nem jöttél tegnap a buliba?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Miért nem jöttél tegnap a buliba?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Azért nem mentem, mert sokat kellett tanulnom, hogy átmenjek a vizsgán." data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Azért nem mentem, mert sokat kellett tanulnom, hogy átmenjek a vizsgán.</button></p>
   <p><b>A:</b> <button class="speak-btn" data-speak-text="Értem. És sikerült a vizsga?" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Értem. És sikerült a vizsga?</button></p>
   <p><b>B:</b> <button class="speak-btn" data-speak-text="Igen, sikerült, így most nagyon boldog vagyok!" data-speak-lang="hu-HU"><svg viewBox='0 0 24 24'><path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.29-2-4.14v8.27c1.23-.85 2-2.37 2-4.13z'/></svg> Igen, sikerült, így most nagyon boldog vagyok!</button></p>
   <div class="task">Задание 1. Найдите все союзы в диалоге (mert, hogy, így) и объясните роль каждого.</div>
 `
    },
    {
      id: 9,
      eyebrow: "УРОК 24 · 9/11 · ЗАДАНИЯ",
      title: "Gyakorlatok",
      subtitle: "Проверьте себя",
      activities: L24_ACTIVITIES,
      body: `
   <ol class="tasklist">
     <li>Соедините два предложения с помощью mert: „Nem jöttem“ + „Sok dolgom volt“</li>
     <li>Соедините с помощью ezért: „Esik az eső“ + „Nem megyünk ki“</li>
     <li>Переведите: «Он пришёл, чтобы помочь» (помните про hogy + повелительное наклонение!)</li>
     <li>Переведите: «Я знаю, что ты здесь»</li>
     <li>Составьте сложное предложение с 2 союзами (например, mert и ezért)</li>
   </ol>
 `
    },
    {
      id: 10,
      eyebrow: "УРОК 24 · 10/11 · СВЯЗЬ С ДРУГИМИ ТЕМАМИ",
      title: "Előretekintés",
      subtitle: "Что дальше",
      body: `
   <p>Теперь вы умеете свободно строить сложные предложения. В следующих 4 уроках (25-28) мы перейдём к лексическому обогащению речи уровня B1: работа и карьера (25-й), здоровье и врач (26-й), путешествия и транспорт (27-й) и итоговое повторение всей грамматики (28-й).</p>
 `
    },
    {
      id: 11,
      eyebrow: "УРОК 24 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Итоги 24-го урока",
      body: `
   <ul class="tick">
     <li>Запятая перед союзами обязательна практически всегда</li>
     <li>Сочинительные: és, de, vagy, ezért (поэтому), így (так что)</li>
     <li>mert — «потому что» (причина)</li>
     <li>hogy + изъявительное = «что», hogy + повелительное = «чтобы»</li>
     <li>bár = «хотя», ha = «если»</li>
   </ul>
   <div class="note"><b>Домашнее задание.</b> Напишите мини-рассказ из 6 сложных предложений с союзами mert, hogy, de, ezért, bár, ha.</div>
 `
    }
  ],
  vocabulary: [
    { id: "l24_v1", hu: "ezért", ru: "поэтому", category: "Союзы", exampleSentence: "Esik az eső, ezért nem megyünk.",
        ipa: "[ˈɛzɛːrt]"
    },
    { id: "l24_v2", hu: "mert", ru: "потому что", category: "Союзы", exampleSentence: "Azért jöttem, mert szeretem.",
        ipa: "[mˈɛrt]"
    },
    { id: "l24_v3", hu: "hogy", ru: "что / чтобы", category: "Союзы", exampleSentence: "Tudom, hogy itt vagy.",
        ipa: "[hˈoɟ]"
    },
    { id: "l24_v4", hu: "bár", ru: "хотя", category: "Союзы", exampleSentence: "Elmegyek, bár fáradt vagyok.",
        ipa: "[bɒːr]"
    }
  ],
    quiz: [
    {
      id: 2401,
      question: 'Какая форма наклонения глагола требуется после союза "hogy" в значении «чтобы»?',
      options: [
        'Повелительное наклонение (felszólító mód)',
        'Изъявительное настоящее',
        'Прошедшее время',
        'Условное наклонение'
      ],
      correctIndex: 0,
      explanation: 'В конструкциях цели с "hogy" смысл «чтобы» реализуется повелительным наклонением: "Azért jöttem, hogy segítsek." (Я пришёл, чтобы помочь). "Segítsek" – это повелительное наклонение 1-го лица.'
    },
    {
      id: 2402,
      question: 'Как переводится союз "mert" в венгерском языке?',
      options: ['поэтому', 'потому что', 'хотя', 'если'],
      correctIndex: 1,
      explanation: '"Mert" – это причинный союз, переводится как «потому что» или «так как»: "Nem jöttem, mert beteg voltam." (Я не пришёл, потому что болел).'
    },
    {
      id: 2403,
      question: 'Когда перед союзом "és" в венгерском языке ставится запятая?',
      options: [
        'Когда "és" соединяет части сложного предложения',
        'Когда "és" соединяет однородные члены',
        'Перед "és" запятая никогда не ставится',
        'Перед "és" запятая ставится всегда'
      ],
      correctIndex: 0,
      explanation: 'Запятая ставится на границе частей сложного предложения. Между однородными членами, соединёнными "és", запятая обычно не нужна (урок 24, слайд 1).'
    },
    {
      id: 2404,
      question: 'Какое слово означает «хотя» в венгерском языке?',
      options: ['mert', 'ezért', 'bár', 'ha'],
      correctIndex: 2,
      explanation: '"Bár" (или "habár") переводится как «хотя» / «несмотря на то что»: "Elmentem, bár fáradt voltam." (Я пошёл, хотя был уставшим).'
    },
    {
      id: 2405,
      question: 'В чём разница между "ezért" и "mert" в венгерском языке?',
      options: [
        'ezért – причина, mert – следствие',
        'ezért – следствие (поэтому), mert – причина (потому что)',
        'Разницы нет, это синонимы',
        'ezért – только в начале предложения, mert – в середине'
      ],
      correctIndex: 1,
      explanation: '"Ezért" означает «поэтому» и указывает на следствие: "Esik az eső, ezért itthon maradunk." (Идёт дождь, поэтому мы остаёмся дома). "Mert" – «потому что» и указывает на причину: "Nem jöttem, mert beteg voltam." (Я не пришёл, потому что болел).'
    },
    {
      id: 2406,
      question: 'В каком из этих предложений "hogy" переводится как «чтобы» (а не «что»)?',
      options: [
        'Tudom, hogy itt vagy. (Я знаю, что ты здесь)',
        'Azt mondta, hogy holnap jön. (Он сказал, что придёт завтра)',
        'Azért jöttem, hogy segítsek. (Я пришёл, чтобы помочь)',
        'Látom, hogy dolgozol. (Я вижу, что ты работаешь)'
      ],
      correctIndex: 2,
      explanation: '"Hogy" + повелительное наклонение = «чтобы»: "Azért jöttem, hogy segítsek." (Я пришёл, чтобы помочь). Во всех остальных примерах "hogy" + изъявительное наклонение = «что».'
    }
  ],
  objectives: [
    { id: 'l24_use-conjunctions', text: 'Использовать союзы és, de, mert, hogy, bár, ha для соединения предложений.', skills: ['grammar', 'writing'] },
    { id: 'l24_build-complex-sentences', text: 'Строить сложносочинённые и сложноподчинённые предложения.', skills: ['grammar', 'writing', 'speaking'] },
    { id: 'l24_express-cause', text: 'Выражать причину с помощью союза mert.', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l24_express-contrast', text: 'Выражать противопоставление с de и уступку с bár.', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l24_connect-ideas', text: 'Связывать мысли в устном рассказе с помощью союзов.', skills: ['speaking', 'writing'] },
  ],
};
