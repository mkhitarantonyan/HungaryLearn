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
  objectiveChecks: [
    { objectiveId: 'l28_review-agglutination', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l28_review-cases', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l28_review-moods', activity: 'controlled', evidenceKind: 'grammar' },
    { objectiveId: 'l28_integrate-skills', activity: 'writing', evidenceKind: 'writing' },
    { objectiveId: 'l28_self-assess', activity: 'writing', evidenceKind: 'writing' },
  ],
});

const L28_OPTIONAL_SPEAKING = {
  title: 'Итоговое говорение: связный рассказ',
  instructions: 'Скажи 1–2 минуты связной речи: прошлый опыт, нынешняя ситуация, мнение с причиной и будущий план.',
  prompt: 'Két éve kezdtem tanulni. Most rendszeresen gyakorlok, mert szeretnék folyékonyabban beszélni. Ha lesz időm, jövőre vizsgát teszek.',
  rubric: ['Задача выполнена', 'Фразы связаны по смыслу', 'Целевые формы использованы уместно'],
};

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
      eyebrow: "УРОК 28 · 1/11 · ФИНАЛЬНЫЙ ОБЗОР",
      title: "A B1 szint összefoglalása",
      subtitle: "Финальный обзор курса: систематизация, интеграция навыков и следующий шаг",
      note: 'Завершение курса подтверждает прохождение программы, но само по себе не является официальным сертификатом B1. Итоговый урок показывает сильные стороны и темы для дальнейшей работы.',
      warn: 'Цель финала — устойчивое и понятное использование языка, а не абсолютная безошибочность и не механическое воспроизведение всех таблиц.',
      task: 'Выбери один личный учебный сценарий и используй его в чтении, письме и говорении: прошлый опыт, нынешний уровень, трудность, способ практики и будущий план.',
      body: `
        <p>
          Финальный урок собирает не «всю венгерскую грамматику», а ключевые
          системы и коммуникативные навыки, которые изучались от начального
          уровня до целевого содержания B1.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Маршрут итогового урока</h4>
        <table class="conj">
          <tr><th>Блок</th><th>Что систематизируем</th><th>Контрольная модель</th></tr>
          <tr>
            <td>архитектура слова</td>
            <td>корень, принадлежность, падеж и гармония</td>
            <td><button class="speak-btn" data-speak-text="házamban" data-speak-lang="hu-HU">házamban</button></td>
          </tr>
          <tr>
            <td>глагольная система</td>
            <td>время и наклонение</td>
            <td><button class="speak-btn" data-speak-text="tanulok, tanultam, tanulni fogok, tanulnék" data-speak-lang="hu-HU">tanulok, tanultam, tanulni fogok, tanulnék</button></td>
          </tr>
          <tr>
            <td>два спряжения</td>
            <td>неопределённый и определённый объект</td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet. Olvasom a könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet. Olvasom a könyvet.</button></td>
          </tr>
          <tr>
            <td>связная речь</td>
            <td>причина, контраст, следствие и условие</td>
            <td><button class="speak-btn" data-speak-text="Tanulok, mert szükségem van rá, de még sokat kell gyakorolnom." data-speak-lang="hu-HU">Tanulok, mert szükségem van rá, de még sokat kell gyakorolnom.</button></td>
          </tr>
          <tr>
            <td>интеграция навыков</td>
            <td>чтение, аудирование, письмо и говорение</td>
            <td><button class="speak-btn" data-speak-text="Két éve kezdtem magyarul tanulni." data-speak-lang="hu-HU">Két éve kezdtem magyarul tanulni.</button></td>
          </tr>
          <tr>
            <td>следующий шаг</td>
            <td>реалистичный план дальнейшей практики</td>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm, jövőre nyelvvizsgát teszek." data-speak-lang="hu-HU">Ha lesz időm, jövőre nyelvvizsgát teszek.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как работать с повторением</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Действие</th></tr>
          <tr>
            <td>1. Распознать</td>
            <td>найти корень, окончания, время, наклонение и объект</td>
          </tr>
          <tr>
            <td>2. Объяснить</td>
            <td>сказать, почему выбрана именно эта форма</td>
          </tr>
          <tr>
            <td>3. Преобразовать</td>
            <td>изменить лицо, время, объект, место или условие</td>
          </tr>
          <tr>
            <td>4. Применить</td>
            <td>использовать форму в связном личном высказывании</td>
          </tr>
          <tr>
            <td>5. Проверить</td>
            <td>оценить понятность, точность и связь между мыслями</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Четыре итоговых продукта</h4>
        <table class="conj">
          <tr><th>Навык</th><th>Финальный результат</th></tr>
          <tr>
            <td>чтение</td>
            <td>понять личный рассказ и найти причины, контраст и временные формы</td>
          </tr>
          <tr>
            <td>аудирование</td>
            <td>понять будущий план, частоту действий и цель обучения</td>
          </tr>
          <tr>
            <td>письмо</td>
            <td>написать десять–двенадцать связанных фраз о прошлом, настоящем и будущем</td>
          </tr>
          <tr>
            <td>говорение</td>
            <td>дать связный рассказ продолжительностью одну–две минуты</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Модель связного ответа</h4>
        <p><button class="speak-btn" data-speak-text="Két éve kezdtem magyarul tanulni, mert Budapestre költöztem." data-speak-lang="hu-HU">Két éve kezdtem magyarul tanulni, mert Budapestre költöztem.</button></p>
        <p><button class="speak-btn" data-speak-text="Most már sok mindent megértek, de még szeretnék folyékonyabban beszélni." data-speak-lang="hu-HU">Most már sok mindent megértek, de még szeretnék folyékonyabban beszélni.</button></p>
        <p><button class="speak-btn" data-speak-text="Minden nap gyakorlok, ezért egyre magabiztosabb vagyok." data-speak-lang="hu-HU">Minden nap gyakorlok, ezért egyre magabiztosabb vagyok.</button></p>
        <p><button class="speak-btn" data-speak-text="Ha lesz időm, jövőre nyelvvizsgát teszek." data-speak-lang="hu-HU">Ha lesz időm, jövőre nyelvvizsgát teszek.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Самооценка перед началом</h4>
        <ul class="tick">
          <li>я могу разобрать знакомую словоформу на значимые части;</li>
          <li>я различаю основные времена и наклонения;</li>
          <li>я выбираю спряжение по типу объекта;</li>
          <li>я связываю предложения причиной, контрастом, следствием и условием;</li>
          <li>я могу рассказать о своём опыте и будущем плане;</li>
          <li>я умею назвать конкретную тему, которую нужно повторить.</li>
        </ul>

        <div class="note">
          Критерий успеха: ученик понимает структуру, выбирает форму осознанно
          и передаёт смысл в реальной коммуникации. Официальный уровень
          подтверждается отдельной стандартизированной оценкой.
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 28 · 2/11 · АРХИТЕКТУРА ЯЗЫКА",
      title: "A magyar nyelv rendszere",
      subtitle: "Как соединяются корень, окончания, спряжение, порядок слов и местоимения",
      note: 'Венгерский язык часто строит длинные словоформы, но смысл выражается не только окончаниями. Важны также приставки, послелоги, вспомогательные конструкции и порядок слов.',
      warn: 'Не учи форму как механическую цепочку букв. Для каждого элемента определяй функцию: принадлежность, падеж, число, лицо, время, объект или фокус.',
      task: 'Разбери четыре модели: выдели корень и окончания, объясни гармонию, выбери спряжение и укажи, какая часть предложения находится в фокусе.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Агглютинация: значения соединяются в упорядоченную словоформу</h4>
        <table class="conj">
          <tr><th>Форма</th><th>Разбор</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">ház</button></td>
            <td>корень</td>
            <td>дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="házam" data-speak-lang="hu-HU">házam</button></td>
            <td><span class="hu-word">ház + -am</span></td>
            <td>мой дом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="házamban" data-speak-lang="hu-HU">házamban</button></td>
            <td><span class="hu-word">ház + -am + -ban</span></td>
            <td>в моём доме</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="házamból" data-speak-lang="hu-HU">házamból</button></td>
            <td><span class="hu-word">ház + -am + -ból</span></td>
            <td>из моего дома</td>
          </tr>
        </table>

        <div class="warn">
          <button class="speak-btn" data-speak-text="házamban" data-speak-lang="hu-HU">házamban</button>
          и
          <button class="speak-btn" data-speak-text="házamból" data-speak-lang="hu-HU">házamból</button>
          — две альтернативные формы. Окончание места заменяется окончанием
          исходной точки; они не присоединяются друг после друга.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Порядок морфем</h4>
        <p>
          Упрощённая учебная схема:
          <b>корень → словообразовательный элемент → число → принадлежность → падеж</b>.
          Не каждый слот обязан быть заполнен.
        </p>
        <p><button class="speak-btn" data-speak-text="könyveimben" data-speak-lang="hu-HU">könyveimben</button> = <span class="hu-word">könyv + -e + -im + -ben</span> — «в моих книгах».</p>
        <p><button class="speak-btn" data-speak-text="barátainkhoz" data-speak-lang="hu-HU">barátainkhoz</button> = <span class="hu-word">barát + -ai + -nk + -hoz</span> — «к нашим друзьям».</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Не весь смысл находится в суффиксах</h4>
        <table class="conj">
          <tr><th>Средство</th><th>Пример</th><th>Функция</th></tr>
          <tr>
            <td>глагольная приставка</td>
            <td><button class="speak-btn" data-speak-text="Elolvasom a könyvet." data-speak-lang="hu-HU">Elolvasom a könyvet.</button></td>
            <td>завершённость действия в данном контексте</td>
          </tr>
          <tr>
            <td>послелог</td>
            <td><button class="speak-btn" data-speak-text="A ház előtt várok." data-speak-lang="hu-HU">A ház előtt várok.</button></td>
            <td>пространственное отношение «перед»</td>
          </tr>
          <tr>
            <td>вспомогательная конструкция</td>
            <td><button class="speak-btn" data-speak-text="Tanulni fogok." data-speak-lang="hu-HU">Tanulni fogok.</button></td>
            <td>будущее время</td>
          </tr>
          <tr>
            <td>порядок слов и фокус</td>
            <td><button class="speak-btn" data-speak-text="Péter Bécsbe megy, nem Pécsre." data-speak-lang="hu-HU">Péter Bécsbe megy, nem Pécsre.</button></td>
            <td>выделение пункта назначения</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Гармония гласных</h4>
        <table class="conj">
          <tr><th>Группа</th><th>Гласные</th><th>Примеры вариантов</th></tr>
          <tr>
            <td>заднего ряда</td>
            <td><button class="speak-btn" data-speak-text="a, á, o, ó, u, ú" data-speak-lang="hu-HU">a, á, o, ó, u, ú</button></td>
            <td><button class="speak-btn" data-speak-text="házban, háznak, házhoz" data-speak-lang="hu-HU">házban, háznak, házhoz</button></td>
          </tr>
          <tr>
            <td>переднего ряда, неогублённые</td>
            <td><button class="speak-btn" data-speak-text="e, é, i, í" data-speak-lang="hu-HU">e, é, i, í</button></td>
            <td><button class="speak-btn" data-speak-text="kertben, kertnek, kerthez" data-speak-lang="hu-HU">kertben, kertnek, kerthez</button></td>
          </tr>
          <tr>
            <td>переднего ряда, огублённые</td>
            <td><button class="speak-btn" data-speak-text="ö, ő, ü, ű" data-speak-lang="hu-HU">ö, ő, ü, ű</button></td>
            <td><button class="speak-btn" data-speak-text="könyvben, könyvnek, könyvhöz" data-speak-lang="hu-HU">könyvben, könyvnek, könyvhöz</button></td>
          </tr>
        </table>

        <div class="note">
          У двухвариантных окончаний обычно выбирается задний или передний вариант:
          <button class="speak-btn" data-speak-text="házban, kertben" data-speak-lang="hu-HU">házban, kertben</button>.
          У трёхвариантных окончаний передние огублённые гласные могут требовать отдельную форму:
          <button class="speak-btn" data-speak-text="házhoz, kerthez, könyvhöz" data-speak-lang="hu-HU">házhoz, kerthez, könyvhöz</button>.
        </div>

        <div class="warn">
          Слова со смешанными гласными и некоторые слова только с
          <span class="hu-word">i/í</span> не всегда предсказываются одной простой таблицей.
          Изучай готовую форму и проверяй словарь:
          <button class="speak-btn" data-speak-text="papírban, hídon" data-speak-lang="hu-HU">papírban, hídon</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Неопределённое и определённое спряжение</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Модель</th><th>Почему</th></tr>
          <tr>
            <td>объекта нет</td>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>нет прямого объекта</td>
          </tr>
          <tr>
            <td>объект неопределён</td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>одна, пока не идентифицированная книга</td>
          </tr>
          <tr>
            <td>объект определён</td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>конкретная известная книга</td>
          </tr>
          <tr>
            <td>указательное слово</td>
            <td><button class="speak-btn" data-speak-text="Elolvasom ezt a könyvet." data-speak-lang="hu-HU">Elolvasom ezt a könyvet.</button></td>
            <td>объект явно идентифицирован</td>
          </tr>
          <tr>
            <td>имя собственное как прямой объект</td>
            <td><button class="speak-btn" data-speak-text="Ismerem Pétert." data-speak-lang="hu-HU">Ismerem Pétert.</button></td>
            <td>конкретный человек; имя получает винительный показатель</td>
          </tr>
          <tr>
            <td>неопределённое местоимение</td>
            <td><button class="speak-btn" data-speak-text="Látok valakit." data-speak-lang="hu-HU">Látok valakit.</button></td>
            <td>человек не идентифицирован</td>
          </tr>
        </table>

        <div class="note">
          Наличие <span class="hu-word">a/az</span> в предложении само по себе
          не выбирает спряжение. Важно, является ли определённая группа
          прямым объектом:
          <button class="speak-btn" data-speak-text="A könyv érdekes." data-speak-lang="hu-HU">A könyv érdekes.</button>
          — здесь прямого объекта нет.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. В венгерском нет грамматического рода</h4>
        <p>
          Существительные и прилагательные не меняются по мужскому, женскому
          или среднему роду.
        </p>
        <p><button class="speak-btn" data-speak-text="Ő a tanárom." data-speak-lang="hu-HU">Ő a tanárom.</button> — по контексту это может быть мужчина или женщина.</p>
        <p><button class="speak-btn" data-speak-text="Ez a könyv új. Az nagyon érdekes." data-speak-lang="hu-HU">Ez a könyv új. Az nagyon érdekes.</button> — о неодушевлённом предмете обычно используется <span class="hu-word">az</span>, а не <span class="hu-word">ő</span>.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Порядок слов гибкий, но не свободный</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Пример</th><th>Что выделено</th></tr>
          <tr>
            <td>нейтральное сообщение</td>
            <td><button class="speak-btn" data-speak-text="Péter ma vonattal megy Bécsbe." data-speak-lang="hu-HU">Péter ma vonattal megy Bécsbe.</button></td>
            <td>обычная последовательность информации</td>
          </tr>
          <tr>
            <td>фокус на месте</td>
            <td><button class="speak-btn" data-speak-text="Péter ma Bécsbe megy, nem Pécsre." data-speak-lang="hu-HU">Péter ma Bécsbe megy, nem Pécsre.</button></td>
            <td>именно в Вену, а не в Печ</td>
          </tr>
          <tr>
            <td>фокус на времени</td>
            <td><button class="speak-btn" data-speak-text="Péter holnap megy Bécsbe, nem ma." data-speak-lang="hu-HU">Péter holnap megy Bécsbe, nem ma.</button></td>
            <td>именно завтра</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Контрольные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка или неверный вывод</th><th>Исправление</th></tr>
          <tr>
            <td>házambanból</td>
            <td><button class="speak-btn" data-speak-text="házamban" data-speak-lang="hu-HU">házamban</button> или <button class="speak-btn" data-speak-text="házamból" data-speak-lang="hu-HU">házamból</button></td>
          </tr>
          <tr>
            <td>Все значения выражаются только суффиксами.</td>
            <td>Используются также приставки, послелоги, вспомогательные конструкции и порядок слов.</td>
          </tr>
          <tr>
            <td>Olvasok a könyvet.</td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
          </tr>
          <tr>
            <td>Ismerek Péter.</td>
            <td><button class="speak-btn" data-speak-text="Ismerem Pétert." data-speak-lang="hu-HU">Ismerem Pétert.</button></td>
          </tr>
          <tr>
            <td>Ő — универсальное «он, она, оно».</td>
            <td>Для человека — <button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU">ő</button>; для неодушевлённого предмета обычно <button class="speak-btn" data-speak-text="az" data-speak-lang="hu-HU">az</button>.</td>
          </tr>
          <tr>
            <td>Порядок слов не влияет на смысл.</td>
            <td>Позиция перед глаголом часто обозначает фокус или контраст.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-анализ</h4>
        <ol class="tasklist">
          <li>Разбери <span class="hu-word">könyveimben</span> на части.</li>
          <li>Объясни выбор окончаний в формах <span class="hu-word">házhoz, kerthez, könyvhöz</span>.</li>
          <li>Объясни разницу между двумя предложениями о чтении книги.</li>
          <li>Скажи, почему в примере с Веной место стоит перед глаголом.</li>
        </ol>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 28 · 3/11 · ВРЕМЕНА И НАКЛОНЕНИЯ",
      title: "Igeidők és igemódok",
      subtitle: "Как различать время, наклонение, лицо и коммуникативную функцию",
      note: 'Сначала определи функцию: факт, прошлое событие, план, просьба или гипотеза. Затем выбери время или наклонение, лицо и спряжение.',
      warn: 'Формы в таблице — контрольные модели, а не универсальные формулы для всех глаголов. Основа и окончания могут изменяться.',
      task: 'Преобразуй одну ситуацию в настоящее, прошлое, будущее, вежливую просьбу и условное предложение.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Время и наклонение — разные категории</h4>
        <table class="conj">
          <tr><th>Категория</th><th>Функция</th><th>Контрольная модель</th></tr>
          <tr>
            <td>настоящее время</td>
            <td>факт, привычка или действие сейчас</td>
            <td><button class="speak-btn" data-speak-text="Minden nap tanulok." data-speak-lang="hu-HU">Minden nap tanulok.</button></td>
          </tr>
          <tr>
            <td>прошедшее время</td>
            <td>завершённое или происходившее ранее действие</td>
            <td><button class="speak-btn" data-speak-text="Tegnap két órát tanultam." data-speak-lang="hu-HU">Tegnap két órát tanultam.</button></td>
          </tr>
          <tr>
            <td>будущее значение</td>
            <td>план или прогноз</td>
            <td><button class="speak-btn" data-speak-text="Holnap tanulni fogok." data-speak-lang="hu-HU">Holnap tanulni fogok.</button></td>
          </tr>
          <tr>
            <td>повелительное наклонение</td>
            <td>просьба, инструкция или побуждение</td>
            <td><button class="speak-btn" data-speak-text="Tanuljon rendszeresen!" data-speak-lang="hu-HU">Tanuljon rendszeresen!</button></td>
          </tr>
          <tr>
            <td>условное наклонение</td>
            <td>желание, вежливость или гипотеза</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne több időm, többet tanulnék." data-speak-lang="hu-HU">Ha lenne több időm, többet tanulnék.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Настоящее время</h4>
        <p>
          У настоящего времени нет одного отдельного временного суффикса.
          Лицо и число выражаются личными окончаниями, а форма основы зависит от глагола.
        </p>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Пример</th></tr>
          <tr>
            <td>я</td>
            <td><button class="speak-btn" data-speak-text="tanulok" data-speak-lang="hu-HU">tanulok</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU">Magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>ты</td>
            <td><button class="speak-btn" data-speak-text="tanulsz" data-speak-lang="hu-HU">tanulsz</button></td>
            <td><button class="speak-btn" data-speak-text="Mit tanulsz?" data-speak-lang="hu-HU">Mit tanulsz?</button></td>
          </tr>
          <tr>
            <td>он или она</td>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td><button class="speak-btn" data-speak-text="Péter otthon tanul." data-speak-lang="hu-HU">Péter otthon tanul.</button></td>
          </tr>
        </table>

        <div class="note">
          <button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button>
          — это не «глагол вообще», а форма третьего лица единственного числа
          неопределённого спряжения. В этой форме окончание часто нулевое.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Прошедшее время</h4>
        <p>
          Прошедшее время содержит показатель <span class="hu-word">-t-</span>,
          но конкретная поверхность формы и соединительные гласные зависят от глагола,
          лица и спряжения.
          Основные модели: <span class="hu-word">-t / -ott/-ett/-ött</span> + личные окончания.
        </p>
        <table class="conj">
          <tr><th>Глагол</th><th>Прошедшая форма</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td><button class="speak-btn" data-speak-text="tanultam" data-speak-lang="hu-HU">tanultam</button></td>
            <td><button class="speak-btn" data-speak-text="Tegnap tanultam." data-speak-lang="hu-HU">Tegnap tanultam.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU">olvas</button></td>
            <td><button class="speak-btn" data-speak-text="olvasott" data-speak-lang="hu-HU">olvasott</button></td>
            <td><button class="speak-btn" data-speak-text="Este olvasott." data-speak-lang="hu-HU">Este olvasott.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="megy" data-speak-lang="hu-HU">megy</button></td>
            <td><button class="speak-btn" data-speak-text="ment" data-speak-lang="hu-HU">ment</button></td>
            <td><button class="speak-btn" data-speak-text="Reggel dolgozni ment." data-speak-lang="hu-HU">Reggel dolgozni ment.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jön" data-speak-lang="hu-HU">jön</button></td>
            <td><button class="speak-btn" data-speak-text="jött" data-speak-lang="hu-HU">jött</button></td>
            <td><button class="speak-btn" data-speak-text="Tegnap későn jött." data-speak-lang="hu-HU">Tegnap későn jött.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Будущее значение</h4>
        <table class="conj">
          <tr><th>Модель</th><th>Когда естественна</th><th>Пример</th></tr>
          <tr>
            <td>настоящее + указание будущего времени</td>
            <td>план уже понятен из контекста</td>
            <td><button class="speak-btn" data-speak-text="Holnap vizsgázom." data-speak-lang="hu-HU">Holnap vizsgázom.</button></td>
          </tr>
          <tr>
            <td>инфинитив + личная форма fog</td>
            <td>явно обозначенное будущее или прогноз</td>
            <td><button class="speak-btn" data-speak-text="Holnap tanulni fogok." data-speak-lang="hu-HU">Holnap tanulni fogok.</button></td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td>отрицательная форма с fog</td>
            <td><button class="speak-btn" data-speak-text="Holnap nem fogok dolgozni." data-speak-lang="hu-HU">Holnap nem fogok dolgozni.</button></td>
          </tr>
        </table>

        <div class="note">
          В нейтральном утверждении обычно:
          <button class="speak-btn" data-speak-text="tanulni fogok" data-speak-lang="hu-HU">tanulni fogok</button>.
          При отрицании:
          <button class="speak-btn" data-speak-text="nem fogok tanulni" data-speak-lang="hu-HU">nem fogok tanulni</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Повелительное наклонение</h4>
        <p>
          Исторический показатель связан с <span class="hu-word">-j-</span>,
          но в реальных формах происходят чередования. Поэтому учи готовую форму
          вместе с лицом и объектом.
        </p>
        <table class="conj">
          <tr><th>Инфинитив</th><th>Вежливая форма</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanulni" data-speak-lang="hu-HU">tanulni</button></td>
            <td><button class="speak-btn" data-speak-text="tanuljon" data-speak-lang="hu-HU">tanuljon</button></td>
            <td><button class="speak-btn" data-speak-text="Tanuljon rendszeresen!" data-speak-lang="hu-HU">Tanuljon rendszeresen!</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="segíteni" data-speak-lang="hu-HU">segíteni</button></td>
            <td><button class="speak-btn" data-speak-text="segítsen" data-speak-lang="hu-HU">segítsen</button></td>
            <td><button class="speak-btn" data-speak-text="Legyen szíves, segítsen!" data-speak-lang="hu-HU">Legyen szíves, segítsen!</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="menni" data-speak-lang="hu-HU">menni</button></td>
            <td><button class="speak-btn" data-speak-text="menjen" data-speak-lang="hu-HU">menjen</button></td>
            <td><button class="speak-btn" data-speak-text="Menjen egyenesen!" data-speak-lang="hu-HU">Menjen egyenesen!</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olvasni" data-speak-lang="hu-HU">olvasni</button></td>
            <td><button class="speak-btn" data-speak-text="olvassa" data-speak-lang="hu-HU">olvassa</button></td>
            <td><button class="speak-btn" data-speak-text="Olvassa el a szöveget!" data-speak-lang="hu-HU">Olvassa el a szöveget!</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Условное наклонение</h4>
        <p>
          Основная модель: <span class="hu-word">-na/-ne/-ná/-né + личные окончания</span>.
        </p>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Пример</th></tr>
          <tr>
            <td>я</td>
            <td><button class="speak-btn" data-speak-text="tanulnék" data-speak-lang="hu-HU">tanulnék</button></td>
            <td><button class="speak-btn" data-speak-text="Többet tanulnék." data-speak-lang="hu-HU">Többet tanulnék.</button></td>
          </tr>
          <tr>
            <td>ты</td>
            <td><button class="speak-btn" data-speak-text="tanulnál" data-speak-lang="hu-HU">tanulnál</button></td>
            <td><button class="speak-btn" data-speak-text="Te mit tanulnál?" data-speak-lang="hu-HU">Te mit tanulnál?</button></td>
          </tr>
          <tr>
            <td>он или она</td>
            <td><button class="speak-btn" data-speak-text="tanulna" data-speak-lang="hu-HU">tanulna</button></td>
            <td><button class="speak-btn" data-speak-text="Ő is tanulna." data-speak-lang="hu-HU">Ő is tanulna.</button></td>
          </tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Ha lenne több időm, többet tanulnék." data-speak-lang="hu-HU">Ha lenne több időm, többet tanulnék.</button></p>
        <p><button class="speak-btn" data-speak-text="Szeretnék folyékonyabban beszélni." data-speak-lang="hu-HU">Szeretnék folyékonyabban beszélni.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Одна ситуация — пять форм</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Форма</th></tr>
          <tr><td>обычный факт</td><td><button class="speak-btn" data-speak-text="Ma magyarul tanulok." data-speak-lang="hu-HU">Ma magyarul tanulok.</button></td></tr>
          <tr><td>прошлое</td><td><button class="speak-btn" data-speak-text="Tegnap magyarul tanultam." data-speak-lang="hu-HU">Tegnap magyarul tanultam.</button></td></tr>
          <tr><td>будущее</td><td><button class="speak-btn" data-speak-text="Holnap magyarul fogok tanulni." data-speak-lang="hu-HU">Holnap magyarul fogok tanulni.</button></td></tr>
          <tr><td>просьба</td><td><button class="speak-btn" data-speak-text="Kérem, tanuljon magyarul!" data-speak-lang="hu-HU">Kérem, tanuljon magyarul!</button></td></tr>
          <tr><td>гипотеза</td><td><button class="speak-btn" data-speak-text="Ha lenne időm, magyarul tanulnék." data-speak-lang="hu-HU">Ha lenne időm, magyarul tanulnék.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr><td>Én tanul magyarul.</td><td><button class="speak-btn" data-speak-text="Én magyarul tanulok." data-speak-lang="hu-HU">Én magyarul tanulok.</button></td></tr>
          <tr><td>Tegnap tanulok.</td><td><button class="speak-btn" data-speak-text="Tegnap tanultam." data-speak-lang="hu-HU">Tegnap tanultam.</button></td></tr>
          <tr><td>Holnap fog tanulok.</td><td><button class="speak-btn" data-speak-text="Holnap tanulni fogok." data-speak-lang="hu-HU">Holnap tanulni fogok.</button></td></tr>
          <tr><td>Tanuljön rendszeresen!</td><td><button class="speak-btn" data-speak-text="Tanuljon rendszeresen!" data-speak-lang="hu-HU">Tanuljon rendszeresen!</button></td></tr>
          <tr><td>Ha lenne időm, többet tanulok.</td><td><button class="speak-btn" data-speak-text="Ha lenne időm, többet tanulnék." data-speak-lang="hu-HU">Ha lenne időm, többet tanulnék.</button></td></tr>
        </table>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 28 · 4/11 · ДВА СПРЯЖЕНИЯ",
      title: "A két igeragozás",
      subtitle: "Как определить прямой объект и выбрать правильную глагольную форму",
      note: 'Выбор начинается не с окончания глагола, а с вопроса: есть ли прямой объект и является ли он определённым.',
      warn: 'Артикль a/az где-либо в предложении не автоматически вызывает определённое спряжение. Определённой должна быть именно группа прямого объекта.',
      task: 'Для каждого предложения найди прямой объект, определи его тип и только затем выбери спряжение.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Алгоритм выбора</h4>
        <ol class="tasklist">
          <li>Найди сказуемое.</li>
          <li>Задай вопрос <span class="hu-word">kit? mit?</span> — кого? что?</li>
          <li>Если прямого объекта нет, используй неопределённое спряжение.</li>
          <li>Если объект есть, определи, известен ли он и идентифицирован ли он.</li>
          <li>Проверь особую модель: субъект «я» и объект «тебя/вас».</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Когда используется неопределённое спряжение</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Пример</th><th>Объект</th></tr>
          <tr>
            <td>прямого объекта нет</td>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>нет</td>
          </tr>
          <tr>
            <td>объект с egy</td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>одна неидентифицированная книга</td>
          </tr>
          <tr>
            <td>неопределённое местоимение</td>
            <td><button class="speak-btn" data-speak-text="Látok valakit." data-speak-lang="hu-HU">Látok valakit.</button></td>
            <td>кто-то, не установленный говорящим</td>
          </tr>
          <tr>
            <td>вопросительное слово</td>
            <td><button class="speak-btn" data-speak-text="Mit olvasol?" data-speak-lang="hu-HU">Mit olvasol?</button></td>
            <td>объект пока неизвестен</td>
          </tr>
          <tr>
            <td>количество без идентификации</td>
            <td><button class="speak-btn" data-speak-text="Két könyvet veszek." data-speak-lang="hu-HU">Két könyvet veszek.</button></td>
            <td>две книги, не определённые заранее</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Когда используется определённое спряжение</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Пример</th><th>Почему объект определён</th></tr>
          <tr>
            <td>известный объект с a/az</td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>конкретная известная книга</td>
          </tr>
          <tr>
            <td>указательное слово</td>
            <td><button class="speak-btn" data-speak-text="Elolvasom ezt a könyvet." data-speak-lang="hu-HU">Elolvasom ezt a könyvet.</button></td>
            <td>именно эта книга</td>
          </tr>
          <tr>
            <td>притяжательная группа</td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvedet." data-speak-lang="hu-HU">Olvasom a könyvedet.</button></td>
            <td>твоя конкретная книга</td>
          </tr>
          <tr>
            <td>имя собственное как прямой объект</td>
            <td><button class="speak-btn" data-speak-text="Ismerem Annát." data-speak-lang="hu-HU">Ismerem Annát.</button></td>
            <td>конкретный человек; имя имеет винительный показатель</td>
          </tr>
          <tr>
            <td>личное местоимение третьего лица</td>
            <td><button class="speak-btn" data-speak-text="Látom őt." data-speak-lang="hu-HU">Látom őt.</button></td>
            <td>конкретный человек</td>
          </tr>
        </table>

        <div class="note">
          Сравни:
          <button class="speak-btn" data-speak-text="A könyv érdekes." data-speak-lang="hu-HU">A könyv érdekes.</button>
          — определённая группа является подлежащим, прямого объекта нет;
          <button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button>
          — определённая группа является прямым объектом.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Полная таблица настоящего времени</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>Неопределённый объект</th><th>Определённый объект</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU">én</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="te" data-speak-lang="hu-HU">te</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasol egy könyvet." data-speak-lang="hu-HU">Olvasol egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasod a könyvet." data-speak-lang="hu-HU">Olvasod a könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU">ő</button></td>
            <td><button class="speak-btn" data-speak-text="Olvas egy könyvet." data-speak-lang="hu-HU">Olvas egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Olvassa a könyvet." data-speak-lang="hu-HU">Olvassa a könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mi" data-speak-lang="hu-HU">mi</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasunk egy könyvet." data-speak-lang="hu-HU">Olvasunk egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Olvassuk a könyvet." data-speak-lang="hu-HU">Olvassuk a könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ti" data-speak-lang="hu-HU">ti</button></td>
            <td><button class="speak-btn" data-speak-text="Olvastok egy könyvet." data-speak-lang="hu-HU">Olvastok egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Olvassátok a könyvet." data-speak-lang="hu-HU">Olvassátok a könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ők" data-speak-lang="hu-HU">ők</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasnak egy könyvet." data-speak-lang="hu-HU">Olvasnak egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Olvassák a könyvet." data-speak-lang="hu-HU">Olvassák a könyvet.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Особая форма: я → тебя или вас</h4>
        <p>
          Когда субъект — «я», а прямой объект — «тебя» или «вас»,
          используется окончание <span class="hu-word">-lak/-lek</span>.
        </p>
        <p><button class="speak-btn" data-speak-text="Szeretlek." data-speak-lang="hu-HU">Szeretlek.</button></p>
        <p><button class="speak-btn" data-speak-text="Látlak téged." data-speak-lang="hu-HU">Látlak téged.</button></p>
        <p><button class="speak-btn" data-speak-text="Várlak titeket." data-speak-lang="hu-HU">Várlak titeket.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Два спряжения работают и в других формах</h4>
        <table class="conj">
          <tr><th>Категория</th><th>Неопределённый объект</th><th>Определённый объект</th></tr>
          <tr>
            <td>прошедшее</td>
            <td><button class="speak-btn" data-speak-text="Olvastam egy könyvet." data-speak-lang="hu-HU">Olvastam egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Elolvastam a könyvet." data-speak-lang="hu-HU">Elolvastam a könyvet.</button></td>
          </tr>
          <tr>
            <td>условное</td>
            <td><button class="speak-btn" data-speak-text="Olvasnék egy könyvet." data-speak-lang="hu-HU">Olvasnék egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Elolvasnám a könyvet." data-speak-lang="hu-HU">Elolvasnám a könyvet.</button></td>
          </tr>
          <tr>
            <td>повелительное</td>
            <td><button class="speak-btn" data-speak-text="Olvass el egy könyvet!" data-speak-lang="hu-HU">Olvass el egy könyvet!</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasd el a könyvet!" data-speak-lang="hu-HU">Olvasd el a könyvet!</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Не каждый человек в предложении — прямой объект</h4>
        <p><button class="speak-btn" data-speak-text="Segítek Péternek." data-speak-lang="hu-HU">Segítek Péternek.</button></p>
        <p>
          Здесь имя стоит с окончанием получателя и отвечает не на вопрос
          «кого?», а на вопрос «кому?». Поэтому определённое спряжение не выбирается.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr><td>Olvasok a könyvet.</td><td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td></tr>
          <tr><td>Olvasom egy könyvet.</td><td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td></tr>
          <tr><td>Ismerek Annát.</td><td><button class="speak-btn" data-speak-text="Ismerem Annát." data-speak-lang="hu-HU">Ismerem Annát.</button></td></tr>
          <tr><td>Szeretem téged.</td><td><button class="speak-btn" data-speak-text="Szeretlek." data-speak-lang="hu-HU">Szeretlek.</button></td></tr>
          <tr><td>A könyv érdekes, ezért olvasok a könyvet.</td><td><button class="speak-btn" data-speak-text="A könyv érdekes, ezért olvasom." data-speak-lang="hu-HU">A könyv érdekes, ezért olvasom.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-проверка</h4>
        <ol class="tasklist">
          <li>Объясни выбор формы в предложении <span class="hu-word">Mit olvasol?</span></li>
          <li>Объясни, почему <span class="hu-word">Ismerem Annát</span> требует определённого спряжения.</li>
          <li>Преобразуй предложение с одной книгой в предложение с конкретной книгой.</li>
          <li>Составь собственный пример с окончанием <span class="hu-word">-lak/-lek</span>.</li>
        </ol>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 28 · 5/11 · ПАДЕЖИ И ПРИТЯЖАТЕЛЬНОСТЬ",
      title: "A névszóragozás és az esetek",
      subtitle: "Как выбирать пространственную триаду и присоединять притяжательные окончания",
      note: 'Сначала выбери тип пространственного отношения: внутрь, на поверхность или к объекту. Затем выбери направление: куда, где или откуда.',
      warn: 'Русские предлоги не позволяют механически выбрать венгерскую серию. Форму места лучше запоминать как тройку вместе с существительным.',
      task: 'Построй три пространственные тройки, затем добавь к существительному притяжательное окончание и подходящий падеж.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Три вопроса пространственной системы</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Функция</th><th>Контрольный пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hová?" data-speak-lang="hu-HU">Hová?</button></td>
            <td>куда направлено движение</td>
            <td><button class="speak-btn" data-speak-text="Bemegyek a szobába." data-speak-lang="hu-HU">Bemegyek a szobába.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hol?" data-speak-lang="hu-HU">Hol?</button></td>
            <td>где находится объект</td>
            <td><button class="speak-btn" data-speak-text="A szobában vagyok." data-speak-lang="hu-HU">A szobában vagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Honnan?" data-speak-lang="hu-HU">Honnan?</button></td>
            <td>откуда начинается движение</td>
            <td><button class="speak-btn" data-speak-text="Kijövök a szobából." data-speak-lang="hu-HU">Kijövök a szobából.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Внутренняя триада</h4>
        <table class="conj">
          <tr><th>Куда?</th><th>Где?</th><th>Откуда?</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szobába" data-speak-lang="hu-HU">szobába</button></td>
            <td><button class="speak-btn" data-speak-text="szobában" data-speak-lang="hu-HU">szobában</button></td>
            <td><button class="speak-btn" data-speak-text="szobából" data-speak-lang="hu-HU">szobából</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="iskolába" data-speak-lang="hu-HU">iskolába</button></td>
            <td><button class="speak-btn" data-speak-text="iskolában" data-speak-lang="hu-HU">iskolában</button></td>
            <td><button class="speak-btn" data-speak-text="iskolából" data-speak-lang="hu-HU">iskolából</button></td>
          </tr>
        </table>
        <p><button class="speak-btn" data-speak-text="A gyerek bemegy az iskolába, az iskolában tanul, majd kijön az iskolából." data-speak-lang="hu-HU">A gyerek bemegy az iskolába, az iskolában tanul, majd kijön az iskolából.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Поверхностная триада</h4>
        <table class="conj">
          <tr><th>Куда?</th><th>Где?</th><th>Откуда?</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="asztalra" data-speak-lang="hu-HU">asztalra</button></td>
            <td><button class="speak-btn" data-speak-text="asztalon" data-speak-lang="hu-HU">asztalon</button></td>
            <td><button class="speak-btn" data-speak-text="asztalról" data-speak-lang="hu-HU">asztalról</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Budapestre" data-speak-lang="hu-HU">Budapestre</button></td>
            <td><button class="speak-btn" data-speak-text="Budapesten" data-speak-lang="hu-HU">Budapesten</button></td>
            <td><button class="speak-btn" data-speak-text="Budapestről" data-speak-lang="hu-HU">Budapestről</button></td>
          </tr>
        </table>

        <div class="note">
          У окончания местонахождения есть варианты
          <button class="speak-btn" data-speak-text="-on, -en, -ön, -n" data-speak-lang="hu-HU">-on, -en, -ön, -n</button>:
          <button class="speak-btn" data-speak-text="asztalon, széken, földön, Budapesten" data-speak-lang="hu-HU">asztalon, széken, földön, Budapesten</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Триада близости или контакта с объектом</h4>
        <table class="conj">
          <tr><th>Куда?</th><th>Где?</th><th>Откуда?</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="orvoshoz" data-speak-lang="hu-HU">orvoshoz</button></td>
            <td><button class="speak-btn" data-speak-text="orvosnál" data-speak-lang="hu-HU">orvosnál</button></td>
            <td><button class="speak-btn" data-speak-text="orvostól" data-speak-lang="hu-HU">orvostól</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="baráthoz" data-speak-lang="hu-HU">baráthoz</button></td>
            <td><button class="speak-btn" data-speak-text="barátnál" data-speak-lang="hu-HU">barátnál</button></td>
            <td><button class="speak-btn" data-speak-text="baráttól" data-speak-lang="hu-HU">baráttól</button></td>
          </tr>
        </table>
        <p><button class="speak-btn" data-speak-text="Elmegyek az orvoshoz, az orvosnál várok, majd hazajövök az orvostól." data-speak-lang="hu-HU">Elmegyek az orvoshoz, az orvosnál várok, majd hazajövök az orvostól.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Серия выбирается вместе со словом</h4>
        <table class="conj">
          <tr><th>Словарная тройка</th><th>Комментарий</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="boltba, boltban, boltból" data-speak-lang="hu-HU">boltba, boltban, boltból</button></td>
            <td>магазин осмысляется как внутреннее пространство</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="piacra, piacon, piacról" data-speak-lang="hu-HU">piacra, piacon, piacról</button></td>
            <td>с рынком употребляется поверхностная серия</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fodrászhoz, fodrásznál, fodrásztól" data-speak-lang="hu-HU">fodrászhoz, fodrásznál, fodrásztól</button></td>
            <td>человек или услуга выражается серией близости</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Притяжательные окончания: один предмет</h4>
        <table class="conj">
          <tr><th>Владелец</th><th>Форма</th><th>Значение</th></tr>
          <tr><td>я</td><td><button class="speak-btn" data-speak-text="házam" data-speak-lang="hu-HU">házam</button></td><td>мой дом</td></tr>
          <tr><td>ты</td><td><button class="speak-btn" data-speak-text="házad" data-speak-lang="hu-HU">házad</button></td><td>твой дом</td></tr>
          <tr><td>он или она</td><td><button class="speak-btn" data-speak-text="háza" data-speak-lang="hu-HU">háza</button></td><td>его или её дом — род определяется контекстом</td></tr>
          <tr><td>мы</td><td><button class="speak-btn" data-speak-text="házunk" data-speak-lang="hu-HU">házunk</button></td><td>наш дом</td></tr>
          <tr><td>вы</td><td><button class="speak-btn" data-speak-text="házatok" data-speak-lang="hu-HU">házatok</button></td><td>ваш дом</td></tr>
          <tr><td>они</td><td><button class="speak-btn" data-speak-text="házuk" data-speak-lang="hu-HU">házuk</button></td><td>их дом</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Когда предметов несколько</h4>
        <table class="conj">
          <tr><th>Владелец</th><th>Форма</th><th>Значение</th></tr>
          <tr><td>я</td><td><button class="speak-btn" data-speak-text="házaim" data-speak-lang="hu-HU">házaim</button></td><td>мои дома</td></tr>
          <tr><td>ты</td><td><button class="speak-btn" data-speak-text="házaid" data-speak-lang="hu-HU">házaid</button></td><td>твои дома</td></tr>
          <tr><td>он или она</td><td><button class="speak-btn" data-speak-text="házai" data-speak-lang="hu-HU">házai</button></td><td>его или её дома</td></tr>
          <tr><td>мы</td><td><button class="speak-btn" data-speak-text="házaink" data-speak-lang="hu-HU">házaink</button></td><td>наши дома</td></tr>
          <tr><td>вы</td><td><button class="speak-btn" data-speak-text="házaitok" data-speak-lang="hu-HU">házaitok</button></td><td>ваши дома</td></tr>
          <tr><td>они</td><td><button class="speak-btn" data-speak-text="házaik" data-speak-lang="hu-HU">házaik</button></td><td>их дома</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Порядок: принадлежность перед падежом</h4>
        <table class="conj">
          <tr><th>Разбор</th><th>Форма</th><th>Значение</th></tr>
          <tr>
            <td><span class="hu-word">ház + -am + -ban</span></td>
            <td><button class="speak-btn" data-speak-text="házamban" data-speak-lang="hu-HU">házamban</button></td>
            <td>в моём доме</td>
          </tr>
          <tr>
            <td><span class="hu-word">ház + -ad + -ból</span></td>
            <td><button class="speak-btn" data-speak-text="házadból" data-speak-lang="hu-HU">házadból</button></td>
            <td>из твоего дома</td>
          </tr>
          <tr>
            <td><span class="hu-word">ház + -a + -hoz</span></td>
            <td><button class="speak-btn" data-speak-text="házához" data-speak-lang="hu-HU">házához</button></td>
            <td>к его или её дому</td>
          </tr>
          <tr>
            <td><span class="hu-word">könyv + -e + -im + -ben</span></td>
            <td><button class="speak-btn" data-speak-text="könyveimben" data-speak-lang="hu-HU">könyveimben</button></td>
            <td>в моих книгах</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как назвать владельца</h4>
        <p><button class="speak-btn" data-speak-text="Péter háza nagy." data-speak-lang="hu-HU">Péter háza nagy.</button></p>
        <p><button class="speak-btn" data-speak-text="Péternek a háza nagy." data-speak-lang="hu-HU">Péternek a háza nagy.</button></p>
        <div class="note">
          Обе модели возможны. В конструкции с
          <button class="speak-btn" data-speak-text="Péternek" data-speak-lang="hu-HU">Péternek</button>
          артикль перед обладаемым предметом обычно сохраняется.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr><td>házbanom</td><td><button class="speak-btn" data-speak-text="házamban" data-speak-lang="hu-HU">házamban</button></td></tr>
          <tr><td>házambanból</td><td><button class="speak-btn" data-speak-text="házamból" data-speak-lang="hu-HU">házamból</button></td></tr>
          <tr><td>Bemegyek a szobához. — если движение внутрь комнаты</td><td><button class="speak-btn" data-speak-text="Bemegyek a szobába." data-speak-lang="hu-HU">Bemegyek a szobába.</button></td></tr>
          <tr><td>A könyv az asztalban van.</td><td><button class="speak-btn" data-speak-text="A könyv az asztalon van." data-speak-lang="hu-HU">A könyv az asztalon van.</button></td></tr>
          <tr><td>Az orvosban vagyok.</td><td><button class="speak-btn" data-speak-text="Az orvosnál vagyok." data-speak-lang="hu-HU">Az orvosnál vagyok.</button></td></tr>
          <tr><td>Péternek háza nagy.</td><td><button class="speak-btn" data-speak-text="Péternek a háza nagy." data-speak-lang="hu-HU">Péternek a háza nagy.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-практика</h4>
        <ol class="tasklist">
          <li>Построй тройки для комнаты, стола и врача.</li>
          <li>Скажи: «в моём доме», «из твоего дома», «к её дому».</li>
          <li>Объясни, почему у магазина, рынка и парикмахера разные серии.</li>
          <li>Составь предложение с названным владельцем и притяжательной формой.</li>
        </ol>
      `,
    },
    {
      id: 6,
      eyebrow: "УРОК 28 · 6/11 · ПРИСТАВКИ И ПОРЯДОК СЛОВ",
      title: "Igekötők és szórend",
      subtitle: "Как приставка взаимодействует с отрицанием, вопросом, фокусом и инфинитивом",
      note: 'Сначала определи, что находится непосредственно перед спрягаемым глаголом: приставка, отрицание, вопросительное слово или контрастный фокус.',
      warn: 'Правило положения приставки зависит от структуры и смысла предложения. Нельзя автоматически переносить её после глагола при любом отрицательном слове или вопросе.',
      task: 'Преобразуй нейтральное утверждение в отрицание, вопрос, повелительную форму, предложение с модальным глаголом и контрастным фокусом.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Что делают глагольные приставки</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Без приставки</th><th>С приставкой</th></tr>
          <tr>
            <td>направление</td>
            <td><button class="speak-btn" data-speak-text="megy" data-speak-lang="hu-HU">megy</button></td>
            <td><button class="speak-btn" data-speak-text="elmegy" data-speak-lang="hu-HU">elmegy</button></td>
          </tr>
          <tr>
            <td>возвращение</td>
            <td><button class="speak-btn" data-speak-text="jön" data-speak-lang="hu-HU">jön</button></td>
            <td><button class="speak-btn" data-speak-text="visszajön" data-speak-lang="hu-HU">visszajön</button></td>
          </tr>
          <tr>
            <td>завершённость в контексте</td>
            <td><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU">ír</button></td>
            <td><button class="speak-btn" data-speak-text="megír" data-speak-lang="hu-HU">megír</button></td>
          </tr>
          <tr>
            <td>прочитать до конца</td>
            <td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU">olvas</button></td>
            <td><button class="speak-btn" data-speak-text="elolvas" data-speak-lang="hu-HU">elolvas</button></td>
          </tr>
        </table>

        <div class="note">
          Значение сочетания не всегда равно простой сумме приставки и глагола.
          Учи глагол вместе с типичным контекстом:
          <button class="speak-btn" data-speak-text="felhív, megtalál, átad, visszakap" data-speak-lang="hu-HU">felhív, megtalál, átad, visszakap</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Нейтральное утверждение</h4>
        <p>
          Если перед глаголом нет отрицания или специального фокуса,
          приставка обычно стоит непосредственно перед глаголом и пишется слитно.
        </p>
        <p><button class="speak-btn" data-speak-text="Elmegyek a boltba." data-speak-lang="hu-HU">Elmegyek a boltba.</button></p>
        <p><button class="speak-btn" data-speak-text="Megírom a levelet." data-speak-lang="hu-HU">Megírom a levelet.</button></p>
        <p><button class="speak-btn" data-speak-text="Visszajövök délután." data-speak-lang="hu-HU">Visszajövök délután.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Нейтральное отрицание действия</h4>
        <p>
          Отрицание занимает позицию перед спрягаемым глаголом,
          поэтому приставка обычно отделяется и следует после спрягаемого глагола.
        </p>
        <p><button class="speak-btn" data-speak-text="Nem megyek el a boltba." data-speak-lang="hu-HU">Nem megyek el a boltba.</button></p>
        <p><button class="speak-btn" data-speak-text="Nem írom meg a levelet." data-speak-lang="hu-HU">Nem írom meg a levelet.</button></p>
        <p><button class="speak-btn" data-speak-text="Nem jövök vissza délután." data-speak-lang="hu-HU">Nem jövök vissza délután.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Вопросы</h4>
        <table class="conj">
          <tr><th>Тип вопроса</th><th>Модель</th><th>Положение приставки</th></tr>
          <tr>
            <td>нейтральный вопрос да или нет</td>
            <td><button class="speak-btn" data-speak-text="Elmegy holnap?" data-speak-lang="hu-HU">Elmegy holnap?</button></td>
            <td>обычно остаётся перед глаголом</td>
          </tr>
          <tr>
            <td>вопросительное слово перед глаголом</td>
            <td><button class="speak-btn" data-speak-text="Mikor megy el?" data-speak-lang="hu-HU">Mikor megy el?</button></td>
            <td>следует после глагола</td>
          </tr>
          <tr>
            <td>вопрос о месте назначения</td>
            <td><button class="speak-btn" data-speak-text="Hová megy el?" data-speak-lang="hu-HU">Hová megy el?</button></td>
            <td>следует после глагола</td>
          </tr>
          <tr>
            <td>вопрос о выполненном действии</td>
            <td><button class="speak-btn" data-speak-text="Mit írt meg?" data-speak-lang="hu-HU">Mit írt meg?</button></td>
            <td>следует после глагола</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Контрастный фокус</h4>
        <p>
          Выделяемая часть ставится непосредственно перед глаголом.
          Приставка перемещается после глагола.
        </p>
        <p><button class="speak-btn" data-speak-text="Péter megy el, nem Anna." data-speak-lang="hu-HU">Péter megy el, nem Anna.</button></p>
        <p><button class="speak-btn" data-speak-text="Holnap megyek el, nem ma." data-speak-lang="hu-HU">Holnap megyek el, nem ma.</button></p>
        <p><button class="speak-btn" data-speak-text="A levelet írom meg, nem az üzenetet." data-speak-lang="hu-HU">A levelet írom meg, nem az üzenetet.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Повелительное наклонение</h4>
        <p>
          В положительной и отрицательной повелительной форме приставка обычно
          стоит после спрягаемого глагола.
        </p>
        <p><button class="speak-btn" data-speak-text="Menjen el a boltba!" data-speak-lang="hu-HU">Menjen el a boltba!</button></p>
        <p><button class="speak-btn" data-speak-text="Írja meg a levelet!" data-speak-lang="hu-HU">Írja meg a levelet!</button></p>
        <p><button class="speak-btn" data-speak-text="Ne menjen el!" data-speak-lang="hu-HU">Ne menjen el!</button></p>
        <p><button class="speak-btn" data-speak-text="Ne írja meg!" data-speak-lang="hu-HU">Ne írja meg!</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Модальный глагол и инфинитив</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Что отрицается</th></tr>
          <tr>
            <td>желание выполнить действие</td>
            <td><button class="speak-btn" data-speak-text="El akarok menni." data-speak-lang="hu-HU">El akarok menni.</button></td>
            <td>утвердительное желание</td>
          </tr>
          <tr>
            <td>отсутствие желания</td>
            <td><button class="speak-btn" data-speak-text="Nem akarok elmenni." data-speak-lang="hu-HU">Nem akarok elmenni.</button></td>
            <td>отрицается желание</td>
          </tr>
          <tr>
            <td>невозможность выполнить действие</td>
            <td><button class="speak-btn" data-speak-text="Nem tudok elmenni." data-speak-lang="hu-HU">Nem tudok elmenni.</button></td>
            <td>отрицается возможность</td>
          </tr>
          <tr>
            <td>необходимость</td>
            <td><button class="speak-btn" data-speak-text="El kell mennem." data-speak-lang="hu-HU">El kell mennem.</button></td>
            <td>действие необходимо</td>
          </tr>
        </table>

        <div class="note">
          В инфинитиве приставка пишется слитно:
          <button class="speak-btn" data-speak-text="elmenni, megírni, visszajönni" data-speak-lang="hu-HU">elmenni, megírni, visszajönni</button>.
          В конструкции
          <button class="speak-btn" data-speak-text="El akarok menni." data-speak-lang="hu-HU">El akarok menni.</button>
          приставка отделена от инфинитива модальным глаголом, но сама форма
          <button class="speak-btn" data-speak-text="elmenni" data-speak-lang="hu-HU">elmenni</button>
          остаётся одним словом, когда стоит вместе.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Одна модель — шесть преобразований</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Форма</th></tr>
          <tr><td>утверждение</td><td><button class="speak-btn" data-speak-text="Elolvasom a könyvet." data-speak-lang="hu-HU">Elolvasom a könyvet.</button></td></tr>
          <tr><td>отрицание</td><td><button class="speak-btn" data-speak-text="Nem olvasom el a könyvet." data-speak-lang="hu-HU">Nem olvasom el a könyvet.</button></td></tr>
          <tr><td>вопрос</td><td><button class="speak-btn" data-speak-text="Mikor olvasod el a könyvet?" data-speak-lang="hu-HU">Mikor olvasod el a könyvet?</button></td></tr>
          <tr><td>фокус на объекте</td><td><button class="speak-btn" data-speak-text="A könyvet olvasom el, nem a cikket." data-speak-lang="hu-HU">A könyvet olvasom el, nem a cikket.</button></td></tr>
          <tr><td>просьба</td><td><button class="speak-btn" data-speak-text="Olvassa el a könyvet!" data-speak-lang="hu-HU">Olvassa el a könyvet!</button></td></tr>
          <tr><td>модальность</td><td><button class="speak-btn" data-speak-text="El szeretném olvasni a könyvet." data-speak-lang="hu-HU">El szeretném olvasni a könyvet.</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr><td>Nem elmegyek a boltba.</td><td><button class="speak-btn" data-speak-text="Nem megyek el a boltba." data-speak-lang="hu-HU">Nem megyek el a boltba.</button></td></tr>
          <tr><td>Mikor elmegy?</td><td><button class="speak-btn" data-speak-text="Mikor megy el?" data-speak-lang="hu-HU">Mikor megy el?</button></td></tr>
          <tr><td>El menjen a boltba!</td><td><button class="speak-btn" data-speak-text="Menjen el a boltba!" data-speak-lang="hu-HU">Menjen el a boltba!</button></td></tr>
          <tr><td>Nem akarok el menni.</td><td><button class="speak-btn" data-speak-text="Nem akarok elmenni." data-speak-lang="hu-HU">Nem akarok elmenni.</button></td></tr>
          <tr><td>Akarok elmenni. — как нейтральная модель без специального фокуса</td><td><button class="speak-btn" data-speak-text="El akarok menni." data-speak-lang="hu-HU">El akarok menni.</button></td></tr>
          <tr><td>Ne elmenjen!</td><td><button class="speak-btn" data-speak-text="Ne menjen el!" data-speak-lang="hu-HU">Ne menjen el!</button></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-практика</h4>
        <ol class="tasklist">
          <li>Преобразуй <span class="hu-word">Megírom a levelet</span> в отрицание и вопрос с вопросительным словом.</li>
          <li>Поставь в фокус время, субъект и объект.</li>
          <li>Сделай положительную и отрицательную вежливую инструкцию.</li>
          <li>Объясни разницу между отрицанием действия и отрицанием желания.</li>
        </ol>
      `,
    },
    {
      id: 7,
      eyebrow: "УРОК 28 · 7/11 · СЛОЖНЫЕ ПРЕДЛОЖЕНИЯ",
      title: "Mondattípusok és kötőszavak",
      subtitle: "Как выразить причину, результат, содержание, цель, уступку и условие",
      note: 'Сначала определи логическую связь между частями. Затем выбери связующее слово, форму глагола и место запятой.',
      warn: 'Не переводи русский союз автоматически. Одна и та же русская форма может передавать содержание, цель или условие разными венгерскими конструкциями.',
      task: 'Соедини пары простых предложений шестью способами и объясни, почему выбраны именно эти связующие элементы.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Карта логических связей</h4>
        <table class="conj">
          <tr><th>Связь</th><th>Средство</th><th>Контрольная модель</th></tr>
          <tr>
            <td>добавление</td>
            <td><button class="speak-btn" data-speak-text="és" data-speak-lang="hu-HU">és</button></td>
            <td><button class="speak-btn" data-speak-text="Tanulok, és jegyzeteket készítek." data-speak-lang="hu-HU">Tanulok, és jegyzeteket készítek.</button></td>
          </tr>
          <tr>
            <td>контраст</td>
            <td><button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button></td>
            <td><button class="speak-btn" data-speak-text="Sokat értek, de még lassan beszélek." data-speak-lang="hu-HU">Sokat értek, de még lassan beszélek.</button></td>
          </tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button></td>
            <td><button class="speak-btn" data-speak-text="Nem jöttem, mert beteg voltam." data-speak-lang="hu-HU">Nem jöttem, mert beteg voltam.</button></td>
          </tr>
          <tr>
            <td>результат</td>
            <td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button></td>
            <td><button class="speak-btn" data-speak-text="Beteg voltam, ezért otthon maradtam." data-speak-lang="hu-HU">Beteg voltam, ezért otthon maradtam.</button></td>
          </tr>
          <tr>
            <td>уступка</td>
            <td><button class="speak-btn" data-speak-text="bár" data-speak-lang="hu-HU">bár</button></td>
            <td><button class="speak-btn" data-speak-text="Bár fáradt vagyok, elmegyek." data-speak-lang="hu-HU">Bár fáradt vagyok, elmegyek.</button></td>
          </tr>
          <tr>
            <td>условие</td>
            <td><button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button></td>
            <td><button class="speak-btn" data-speak-text="Ha ráérsz, gyere át!" data-speak-lang="hu-HU">Ha ráérsz, gyere át!</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Причина и результат: mert или ezért</h4>
        <table class="conj">
          <tr><th>Логика</th><th>Модель</th><th>Вопрос</th></tr>
          <tr>
            <td>сначала результат, затем причина</td>
            <td><button class="speak-btn" data-speak-text="Nem jöttem, mert beteg voltam." data-speak-lang="hu-HU">Nem jöttem, mert beteg voltam.</button></td>
            <td>Почему я не пришёл?</td>
          </tr>
          <tr>
            <td>сначала причина, затем результат</td>
            <td><button class="speak-btn" data-speak-text="Beteg voltam, ezért nem jöttem." data-speak-lang="hu-HU">Beteg voltam, ezért nem jöttem.</button></td>
            <td>Что произошло из-за болезни?</td>
          </tr>
        </table>

        <div class="note">
          <button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button>
          вводит придаточную причину.
          <button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button>
          — наречие результата внутри второго самостоятельного предложения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Hogy: содержание и цель</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Модель</th><th>Форма глагола</th></tr>
          <tr>
            <td>сообщить содержание мысли или речи</td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></td>
            <td>обычная форма по смыслу сообщения</td>
          </tr>
          <tr>
            <td>выразить цель</td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
            <td>форма повелительного или сослагательного типа</td>
          </tr>
          <tr>
            <td>передать просьбу или требование</td>
            <td><button class="speak-btn" data-speak-text="Azt kérem, hogy várjon egy percet." data-speak-lang="hu-HU">Azt kérem, hogy várjon egy percet.</button></td>
            <td>вежливая форма третьего лица</td>
          </tr>
        </table>

        <div class="note">
          Для цели часто используется рамка
          <button class="speak-btn" data-speak-text="azért, hogy" data-speak-lang="hu-HU">azért ... hogy</button>.
          Слово
          <button class="speak-btn" data-speak-text="azért" data-speak-lang="hu-HU">azért</button>
          можно опустить, если цель и без него ясна.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Уступка с bár</h4>
        <p><button class="speak-btn" data-speak-text="Bár fáradt vagyok, elmegyek." data-speak-lang="hu-HU">Bár fáradt vagyok, elmegyek.</button></p>
        <p><button class="speak-btn" data-speak-text="Elmegyek, bár fáradt vagyok." data-speak-lang="hu-HU">Elmegyek, bár fáradt vagyok.</button></p>
        <p>
          Обе позиции возможны. Смысл: ожидаемая причина могла бы остановить
          действие, но действие всё равно происходит.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Реальное и гипотетическое условие</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Условие</th><th>Результат</th></tr>
          <tr>
            <td>реальное или возможное</td>
            <td><button class="speak-btn" data-speak-text="Ha ráérsz" data-speak-lang="hu-HU">Ha ráérsz</button></td>
            <td><button class="speak-btn" data-speak-text="gyere át!" data-speak-lang="hu-HU">gyere át!</button></td>
          </tr>
          <tr>
            <td>реальный будущий план</td>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm" data-speak-lang="hu-HU">Ha lesz időm</button></td>
            <td><button class="speak-btn" data-speak-text="jövőre nyelvvizsgát teszek." data-speak-lang="hu-HU">jövőre nyelvvizsgát teszek.</button></td>
          </tr>
          <tr>
            <td>гипотеза сейчас</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm" data-speak-lang="hu-HU">Ha lenne időm</button></td>
            <td><button class="speak-btn" data-speak-text="többet tanulnék." data-speak-lang="hu-HU">többet tanulnék.</button></td>
          </tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Ha ráérsz, gyere át!" data-speak-lang="hu-HU">Ha ráérsz, gyere át!</button></p>
        <p><button class="speak-btn" data-speak-text="Ha lesz időm, jövőre nyelvvizsgát teszek." data-speak-lang="hu-HU">Ha lesz időm, jövőre nyelvvizsgát teszek.</button></p>
        <p><button class="speak-btn" data-speak-text="Ha lenne időm, többet tanulnék." data-speak-lang="hu-HU">Ha lenne időm, többet tanulnék.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Запятая и порядок частей</h4>
        <ul class="tick">
          <li>Между главным и придаточным предложением ставится запятая.</li>
          <li>Придаточное может стоять до или после главного, если смысл остаётся ясным.</li>
          <li>После начального условия или уступки запятая отделяет главную часть.</li>
        </ul>
        <p><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></p>
        <p><button class="speak-btn" data-speak-text="Ha ráérsz, gyere át!" data-speak-lang="hu-HU">Ha ráérsz, gyere át!</button></p>
        <p><button class="speak-btn" data-speak-text="Bár fáradt vagyok, elmegyek." data-speak-lang="hu-HU">Bár fáradt vagyok, elmegyek.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Одна мысль — разные связи</h4>
        <table class="conj">
          <tr><th>Связь</th><th>Предложение</th></tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok, mert Budapesten élek." data-speak-lang="hu-HU">Magyarul tanulok, mert Budapesten élek.</button></td>
          </tr>
          <tr>
            <td>результат</td>
            <td><button class="speak-btn" data-speak-text="Budapesten élek, ezért magyarul tanulok." data-speak-lang="hu-HU">Budapesten élek, ezért magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>цель</td>
            <td><button class="speak-btn" data-speak-text="Azért tanulok magyarul, hogy magabiztosabban kommunikáljak." data-speak-lang="hu-HU">Azért tanulok magyarul, hogy magabiztosabban kommunikáljak.</button></td>
          </tr>
          <tr>
            <td>контраст</td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok, de még sokat kell gyakorolnom." data-speak-lang="hu-HU">Magyarul tanulok, de még sokat kell gyakorolnom.</button></td>
          </tr>
          <tr>
            <td>уступка</td>
            <td><button class="speak-btn" data-speak-text="Bár nehéz, minden nap gyakorlok." data-speak-lang="hu-HU">Bár nehéz, minden nap gyakorlok.</button></td>
          </tr>
          <tr>
            <td>условие</td>
            <td><button class="speak-btn" data-speak-text="Ha lesz időm, este is gyakorlok." data-speak-lang="hu-HU">Ha lesz időm, este is gyakorlok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Nem jöttem, ezért beteg voltam.</td>
            <td><button class="speak-btn" data-speak-text="Nem jöttem, mert beteg voltam." data-speak-lang="hu-HU">Nem jöttem, mert beteg voltam.</button></td>
          </tr>
          <tr>
            <td>Esik az eső, mert itthon maradok.</td>
            <td><button class="speak-btn" data-speak-text="Esik az eső, ezért itthon maradok." data-speak-lang="hu-HU">Esik az eső, ezért itthon maradok.</button></td>
          </tr>
          <tr>
            <td>Azért jöttem, mert segítsek.</td>
            <td><button class="speak-btn" data-speak-text="Azért jöttem, hogy segítsek." data-speak-lang="hu-HU">Azért jöttem, hogy segítsek.</button></td>
          </tr>
          <tr>
            <td>Ha lenne időm, többet tanulok.</td>
            <td><button class="speak-btn" data-speak-text="Ha lenne időm, többet tanulnék." data-speak-lang="hu-HU">Ha lenne időm, többet tanulnék.</button></td>
          </tr>
          <tr>
            <td>Tudom hogy itt vagy.</td>
            <td><button class="speak-btn" data-speak-text="Tudom, hogy itt vagy." data-speak-lang="hu-HU">Tudom, hogy itt vagy.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Мини-практика</h4>
        <ol class="tasklist">
          <li>Соедини причину и результат сначала с <span class="hu-word">mert</span>, затем с <span class="hu-word">ezért</span>.</li>
          <li>Создай одно придаточное содержания и одно придаточное цели с <span class="hu-word">hogy</span>.</li>
          <li>Составь реальное и гипотетическое условие.</li>
          <li>Переставь придаточное до и после главного предложения.</li>
        </ol>
      `,
    },
    {
      id: 8,
      eyebrow: "УРОК 28 · 8/11 · ФИНАЛЬНЫЙ ГРАММАТИЧЕСКИЙ МИКС",
      title: "Gyakorló mondatok",
      subtitle: "Управляемый анализ: время, наклонение, падеж, спряжение, приставка и связь",
      note: 'Каждое предложение разбирай в одном порядке: логическая связь → время или наклонение → спряжение → падежи → положение приставки.',
      warn: 'Прошедшее нереальное условие — сложная модель. Здесь оно только повторяется и анализируется; не образуй его по аналогии без проверки форм.',
      task: 'Разбери шесть предложений, выполни преобразования и создай связный мини-текст из пяти–шести фраз.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Алгоритм полного анализа</h4>
        <ol class="tasklist">
          <li>Найди границы частей и связующее слово.</li>
          <li>Определи время и наклонение каждого глагола.</li>
          <li>Найди прямой объект и проверь спряжение.</li>
          <li>Разбери падежные и притяжательные формы.</li>
          <li>Объясни положение глагольной приставки.</li>
          <li>Скажи, какой смысл создаёт вся конструкция.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Нереальное условие в прошлом</h4>
        <p><button class="speak-btn" data-speak-text="Ha tegnap nem lett volna dolgom, elmentem volna veled a moziba." data-speak-lang="hu-HU">Ha tegnap nem lett volna dolgom, elmentem volna veled a moziba.</button></p>

        <table class="conj">
          <tr><th>Элемент</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button></td>
            <td>вводит условие</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nem lett volna dolgom" data-speak-lang="hu-HU">nem lett volna dolgom</button></td>
            <td>нереальное прошлое условие: «если бы у меня не было дел»</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elmentem volna" data-speak-lang="hu-HU">elmentem volna</button></td>
            <td>нереализованный результат в прошлом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="veled" data-speak-lang="hu-HU">veled</button></td>
            <td>с тобой</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a moziba" data-speak-lang="hu-HU">a moziba</button></td>
            <td>направление внутрь кинотеатра</td>
          </tr>
        </table>

        <div class="note">
          Сравни реальный будущий план:
          <button class="speak-btn" data-speak-text="Ha holnap nem lesz dolgom, elmegyek veled a moziba." data-speak-lang="hu-HU">Ha holnap nem lesz dolgom, elmegyek veled a moziba.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Переданная инструкция</h4>
        <p><button class="speak-btn" data-speak-text="Mondd meg neki, hogy azonnal hívjon fel!" data-speak-lang="hu-HU">Mondd meg neki, hogy azonnal hívjon fel!</button></p>

        <table class="conj">
          <tr><th>Элемент</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mondd meg" data-speak-lang="hu-HU">Mondd meg</button></td>
            <td>повелительная форма второго лица</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="neki" data-speak-lang="hu-HU">neki</button></td>
            <td>получатель сообщения: ему или ей</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hogy" data-speak-lang="hu-HU">hogy</button></td>
            <td>вводит содержание передаваемой инструкции</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hívjon fel" data-speak-lang="hu-HU">hívjon fel</button></td>
            <td>побуждение в третьем лице; приставка стоит после глагола</td>
          </tr>
        </table>

        <p><button class="speak-btn" data-speak-text="Mondd meg neki, hogy ne hívjon fel későn!" data-speak-lang="hu-HU">Mondd meg neki, hogy ne hívjon fel későn!</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Длительность, которая продолжается сейчас</h4>
        <p><button class="speak-btn" data-speak-text="Már három éve élek Magyarországon, és nagyon szeretem ezt az országot." data-speak-lang="hu-HU">Már három éve élek Magyarországon, és nagyon szeretem ezt az országot.</button></p>

        <table class="conj">
          <tr><th>Элемент</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="már három éve" data-speak-lang="hu-HU">már három éve</button></td>
            <td>длительность от прошлого до настоящего</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="élek" data-speak-lang="hu-HU">élek</button></td>
            <td>настоящее время, потому что ситуация продолжается</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyarországon" data-speak-lang="hu-HU">Magyarországon</button></td>
            <td>местонахождение</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szeretem ezt az országot" data-speak-lang="hu-HU">szeretem ezt az országot</button></td>
            <td>определённое спряжение с указанным прямым объектом</td>
          </tr>
        </table>

        <div class="note">
          Завершённый период выражается иначе:
          <button class="speak-btn" data-speak-text="Három évig éltem Magyarországon." data-speak-lang="hu-HU">Három évig éltem Magyarországon.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Уступка и результат</h4>
        <p><button class="speak-btn" data-speak-text="Bár néha nehéz, minden nap gyakorlok, ezért egyre többet értek." data-speak-lang="hu-HU">Bár néha nehéz, minden nap gyakorlok, ezért egyre többet értek.</button></p>
        <ul class="tick">
          <li><span class="hu-word">bár</span> вводит препятствие, которое не останавливает действие;</li>
          <li><span class="hu-word">ezért</span> связывает практику с её результатом;</li>
          <li>все действия актуальны сейчас, поэтому используются формы настоящего времени.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Цель обучения</h4>
        <p><button class="speak-btn" data-speak-text="Azért tanulok magyarul, hogy magabiztosabban kommunikáljak." data-speak-lang="hu-HU">Azért tanulok magyarul, hogy magabiztosabban kommunikáljak.</button></p>
        <ul class="tick">
          <li><span class="hu-word">azért ... hogy</span> создаёт рамку цели;</li>
          <li><span class="hu-word">kommunikáljak</span> имеет форму первого лица сослагательного или повелительного типа;</li>
          <li>цель относится к субъекту главного предложения.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Приставка в утверждении и отрицании</h4>
        <p><button class="speak-btn" data-speak-text="Megírtam a levelet, de még nem küldtem el." data-speak-lang="hu-HU">Megírtam a levelet, de még nem küldtem el.</button></p>
        <ul class="tick">
          <li><span class="hu-word">megírtam</span> — приставка перед глаголом в утвердительной части;</li>
          <li><span class="hu-word">nem küldtem el</span> — отрицание перед глаголом, приставка после него;</li>
          <li><span class="hu-word">a levelet</span> — определённый прямой объект.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Преобразования</h4>
        <table class="conj">
          <tr><th>Исходная функция</th><th>Новая задача</th></tr>
          <tr>
            <td>нереальное прошлое условие</td>
            <td>преобразуй в реальный план на завтра</td>
          </tr>
          <tr>
            <td>положительная инструкция</td>
            <td>сделай отрицательную инструкцию</td>
          </tr>
          <tr>
            <td>продолжающаяся длительность</td>
            <td>сделай завершённый период</td>
          </tr>
          <tr>
            <td>цель</td>
            <td>замени целью с другим субъектом</td>
          </tr>
          <tr>
            <td>утверждение с приставкой</td>
            <td>сделай отрицание и вопрос</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Типичные ошибки</h4>
        <table class="conj">
          <tr><th>Ошибка</th><th>Исправление</th></tr>
          <tr>
            <td>Ha tegnap nem volt dolgom, elmentem volna.</td>
            <td><button class="speak-btn" data-speak-text="Ha tegnap nem lett volna dolgom, elmentem volna." data-speak-lang="hu-HU">Ha tegnap nem lett volna dolgom, elmentem volna.</button></td>
          </tr>
          <tr>
            <td>Mondd meg neki, hogy azonnal felhívjon.</td>
            <td><button class="speak-btn" data-speak-text="Mondd meg neki, hogy azonnal hívjon fel!" data-speak-lang="hu-HU">Mondd meg neki, hogy azonnal hívjon fel!</button></td>
          </tr>
          <tr>
            <td>Már három éve éltem Magyarországon. — если человек всё ещё живёт там</td>
            <td><button class="speak-btn" data-speak-text="Már három éve élek Magyarországon." data-speak-lang="hu-HU">Már három éve élek Magyarországon.</button></td>
          </tr>
          <tr>
            <td>Nagyon szeretek ezt az országot.</td>
            <td><button class="speak-btn" data-speak-text="Nagyon szeretem ezt az országot." data-speak-lang="hu-HU">Nagyon szeretem ezt az országot.</button></td>
          </tr>
          <tr>
            <td>Azért tanulok magyarul, mert magabiztosabban kommunikáljak.</td>
            <td><button class="speak-btn" data-speak-text="Azért tanulok magyarul, hogy magabiztosabban kommunikáljak." data-speak-lang="hu-HU">Azért tanulok magyarul, hogy magabiztosabban kommunikáljak.</button></td>
          </tr>
          <tr>
            <td>Megírtam a levelet, de még nem elküldtem.</td>
            <td><button class="speak-btn" data-speak-text="Megírtam a levelet, de még nem küldtem el." data-speak-lang="hu-HU">Megírtam a levelet, de még nem küldtem el.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Связный мини-текст</h4>
        <p><button class="speak-btn" data-speak-text="Már három éve élek Magyarországon, ezért minden nap magyarul tanulok." data-speak-lang="hu-HU">Már három éve élek Magyarországon, ezért minden nap magyarul tanulok.</button></p>
        <p><button class="speak-btn" data-speak-text="Bár néha nehéz, egyre többet értek, és magabiztosabban beszélek." data-speak-lang="hu-HU">Bár néha nehéz, egyre többet értek, és magabiztosabban beszélek.</button></p>
        <p><button class="speak-btn" data-speak-text="Azért gyakorlok rendszeresen, hogy jövőre nyelvvizsgát tegyek." data-speak-lang="hu-HU">Azért gyakorlok rendszeresen, hogy jövőre nyelvvizsgát tegyek.</button></p>
        <p><button class="speak-btn" data-speak-text="Ha több időm lenne, még többet olvasnék és beszélgetnék." data-speak-lang="hu-HU">Ha több időm lenne, még többet olvasnék és beszélgetnék.</button></p>
      `,
    },
    {
      id: 9,
      eyebrow: "УРОК 28 · 9/11 · ИТОГОВЫЙ ТЕСТ",
      title: "Záróteszt",
      subtitle: "Итоговый самоконтроль по материалам курса: форма, анализ, письмо и говорение",
      note: 'Выполни задания без таблиц и переводчика. После завершения используй упражнения урока и свои записи для проверки и исправления.',
      warn: 'Это внутренний самоконтроль курса, а не официальный экзамен и не независимое подтверждение уровня B1.',
      task: 'Выполни шесть блоков. Запиши ответы, отметь сомнения и после проверки составь список из трёх тем для повторения.',
      activities: L28_ACTIVITIES,
      optionalSpeaking: L28_OPTIONAL_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Условия выполнения</h4>
        <table class="conj">
          <tr><th>Параметр</th><th>Рекомендация</th></tr>
          <tr><td>время</td><td>примерно шестьдесят–девяносто минут без длительных перерывов</td></tr>
          <tr><td>материалы</td><td>без конспекта на первом проходе; проверка только после завершения</td></tr>
          <tr><td>письмо</td><td>полные предложения, понятная логика и проверка окончаний</td></tr>
          <tr><td>говорение</td><td>запись голоса продолжительностью одну–две минуты</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Формы глагола — 10 баллов</h4>
        <ol class="tasklist">
          <li>
            От глагола
            <button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button>
            образуй третье лицо единственного числа:
            прошедшее время, вежливое повелительное и условное наклонение.
          </li>
          <li>
            От глагола
            <button class="speak-btn" data-speak-text="megír" data-speak-lang="hu-HU">megír</button>
            образуй форму первого лица прошедшего времени с определённым объектом.
          </li>
          <li>
            От
            <button class="speak-btn" data-speak-text="elmegy" data-speak-lang="hu-HU">elmegy</button>
            образуй нейтральное отрицание, вопрос с вопросительным словом и вежливую инструкцию.
          </li>
          <li>
            Объясни, какое лицо и наклонение выражают формы
            <button class="speak-btn" data-speak-text="tanulnék, tanulnál, tanulna" data-speak-lang="hu-HU">tanulnék, tanulnál, tanulna</button>.
          </li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Падежи и принадлежность — 10 баллов</h4>
        <ol class="tasklist">
          <li>Построй триаду «куда, где, откуда» для комнаты, стола и врача.</li>
          <li>
            Разбери форму
            <button class="speak-btn" data-speak-text="könyveimben" data-speak-lang="hu-HU">könyveimben</button>
            на корень, число обладаемого, владельца и падеж.
          </li>
          <li>Скажи по-венгерски: «в моём доме», «из твоего дома», «к её дому».</li>
          <li>Объясни, почему рынок и магазин используют разные пространственные серии.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Два спряжения и прямой объект — 10 баллов</h4>
        <ol class="tasklist">
          <li>
            Составь два предложения с глаголом
            <button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU">olvas</button>:
            с одной неидентифицированной книгой и с конкретной известной книгой.
          </li>
          <li>
            Объясни выбор формы в вопросе
            <button class="speak-btn" data-speak-text="Mit olvasol?" data-speak-lang="hu-HU">Mit olvasol?</button>
          </li>
          <li>
            Исправь выбор спряжения:
            <button class="speak-btn" data-speak-text="Nagyon szeretek ezt az országot." data-speak-lang="hu-HU">Nagyon szeretek ezt az országot.</button>
          </li>
          <li>Составь одно предложение по модели «я → тебя или вас».</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Сложные предложения — 10 баллов</h4>
        <ol class="tasklist">
          <li>
            Объясни разницу между
            <button class="speak-btn" data-speak-text="Tudom, hogy jön." data-speak-lang="hu-HU">Tudom, hogy jön.</button>
            и
            <button class="speak-btn" data-speak-text="Azt akarom, hogy jöjjön." data-speak-lang="hu-HU">Azt akarom, hogy jöjjön.</button>
          </li>
          <li>Соедини одну пару предложений сначала как причину, затем как результат.</li>
          <li>Составь реальное будущее условие и гипотетическое условие.</li>
          <li>
            Переведи без готовой модели: «Если бы у меня было больше времени,
            я бы поехал или поехала в Будапешт».
          </li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Полный грамматический анализ — 10 баллов</h4>
        <p><button class="speak-btn" data-speak-text="Már három éve élek Magyarországon, és nagyon szeretem ezt az országot." data-speak-lang="hu-HU">Már három éve élek Magyarországon, és nagyon szeretem ezt az országot.</button></p>
        <ol class="tasklist">
          <li>Найди выражение длительности и объясни выбор настоящего времени.</li>
          <li>Определи падеж названия страны.</li>
          <li>Найди прямой объект и объясни выбор спряжения.</li>
        </ol>

        <p><button class="speak-btn" data-speak-text="Megírtam a levelet, de még nem küldtem el." data-speak-lang="hu-HU">Megírtam a levelet, de még nem küldtem el.</button></p>
        <ol class="tasklist">
          <li>Объясни положение обеих приставок.</li>
          <li>Найди контраст и определённый прямой объект.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Письмо и говорение — 10 баллов</h4>
        <p>
          Напиши десять–двенадцать связанных предложений о себе.
          Обязательно включи:
        </p>
        <ul class="tick">
          <li>кто ты, где живёшь и чем занимаешься;</li>
          <li>когда и почему начал или начала изучать венгерский;</li>
          <li>что уже понимаешь и что остаётся трудным;</li>
          <li>как регулярно практикуешь язык;</li>
          <li>одну причину, один контраст, одну цель и одно условие;</li>
          <li>конкретный план на следующие три месяца.</li>
        </ul>

        <p>
          Затем расскажи то же содержание без чтения в течение одной–двух минут.
          Не требуется дословно повторять письменный текст.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Критерии оценки письменной и устной части</h4>
        <table class="conj">
          <tr><th>Критерий</th><th>2 балла</th><th>1 балл</th><th>0 баллов</th></tr>
          <tr><td>содержание</td><td>все пункты раскрыты</td><td>часть пунктов раскрыта</td><td>задача не выполнена</td></tr>
          <tr><td>связность</td><td>мысли логично соединены</td><td>связь местами нарушена</td><td>изолированные фразы</td></tr>
          <tr><td>грамматика</td><td>ошибки не мешают смыслу</td><td>некоторые ошибки затрудняют понимание</td><td>смысл часто непонятен</td></tr>
          <tr><td>словарь</td><td>достаточен для всех пунктов</td><td>заметны повторы и нехватка слов</td><td>задача не выражена</td></tr>
          <tr><td>самокоррекция</td><td>ошибки найдены и исправлены</td><td>исправлена часть ошибок</td><td>проверка не выполнена</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Интерпретация результата</h4>
        <table class="conj">
          <tr><th>Баллы</th><th>Учебное решение</th></tr>
          <tr><td>48–60</td><td>переходи к более длинным текстам, дискуссиям и подготовке к отдельной стандартизированной оценке</td></tr>
          <tr><td>36–47</td><td>повтори две–три слабые темы и выполни тест повторно через две недели</td></tr>
          <tr><td>24–35</td><td>нужен систематический повтор грамматики и управляемой речи</td></tr>
          <tr><td>0–23</td><td>вернись к базовым моделям и проходи повторение небольшими блоками</td></tr>
        </table>

        <div class="note">
          Балл показывает результат именно этого самоконтроля.
          Он не заменяет независимую оценку чтения, аудирования, письма и говорения.
        </div>
      `,
    },
    {
      id: 10,
      eyebrow: "УРОК 28 · 10/11 · КАК ИДТИ ДАЛЬШЕ",
      title: "Hogyan tovább?",
      subtitle: "Практический план на неделю, месяц и девяносто дней",
      note: 'Устойчивый прогресс строится на четырёх действиях: понятный вход, регулярный выход, обратная связь и повторение.',
      warn: 'Не пытайся ежедневно делать всё сразу. Небольшая стабильная нагрузка эффективнее редких длинных занятий без повторения.',
      task: 'Выбери реалистичный недельный график, запиши его по-венгерски и назначь дату первого месячного самоконтроля.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">Четыре опоры дальнейшего развития</h4>
        <table class="conj">
          <tr><th>Опора</th><th>Что делать</th><th>Измеримый результат</th></tr>
          <tr>
            <td>понятный вход</td>
            <td>читать и слушать материал, общий смысл которого уже доступен</td>
            <td>кратко пересказать основную мысль и три детали</td>
          </tr>
          <tr>
            <td>активный выход</td>
            <td>говорить и писать на знакомые темы</td>
            <td>одна запись голоса и один текст каждую неделю</td>
          </tr>
          <tr>
            <td>обратная связь</td>
            <td>получать исправления от преподавателя, партнёра или надёжного инструмента</td>
            <td>исправить и повторно использовать три ошибки</td>
          </tr>
          <tr>
            <td>интервальное повторение</td>
            <td>повторять не отдельные переводы, а слова в устойчивых сочетаниях и предложениях</td>
            <td>активно вспомнить материал через день, неделю и месяц</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как выбирать материал</h4>
        <ul class="tick">
          <li>Текст или аудио должен быть немного сложнее текущего уровня, но основной смысл должен оставаться понятным.</li>
          <li>Выбирай одну знакомую тему на неделю: работа, школа, здоровье, поездки или новости города.</li>
          <li>Для чтения используй адаптированные книги, короткие статьи и понятные официальные материалы.</li>
          <li>Для аудирования сначала слушай общий смысл, затем детали и только после этого проверяй субтитры или текст.</li>
          <li>Не собирай все незнакомые слова. Выбери пять–восемь выражений, которые реально нужны для пересказа.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Недельный цикл</h4>
        <table class="conj">
          <tr><th>День</th><th>Основная работа</th><th>Продукт</th></tr>
          <tr><td>понедельник</td><td>короткое чтение и выделение ключевых выражений</td><td>пять–восемь полезных сочетаний</td></tr>
          <tr><td>вторник</td><td>аудирование по той же теме в два–три прохода</td><td>основная мысль и три детали</td></tr>
          <tr><td>среда</td><td>грамматическое преобразование примеров</td><td>шесть собственных предложений</td></tr>
          <tr><td>четверг</td><td>разговор или голосовая запись</td><td>одна–две минуты речи</td></tr>
          <tr><td>пятница</td><td>короткий связный текст</td><td>десять–двенадцать предложений</td></tr>
          <tr><td>выходной</td><td>повтор ошибок и свободный контакт с языком</td><td>обновлённый журнал ошибок</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Личный план по-венгерски</h4>
        <p><button class="speak-btn" data-speak-text="Minden nap húsz percet olvasok magyarul." data-speak-lang="hu-HU">Minden nap húsz percet olvasok magyarul.</button></p>
        <p><button class="speak-btn" data-speak-text="Hetente háromszor hallgatok magyar hanganyagokat." data-speak-lang="hu-HU">Hetente háromszor hallgatok magyar hanganyagokat.</button></p>
        <p><button class="speak-btn" data-speak-text="Minden héten írok egy rövid szöveget." data-speak-lang="hu-HU">Minden héten írok egy rövid szöveget.</button></p>
        <p><button class="speak-btn" data-speak-text="Hetente egyszer felveszem a saját beszédemet." data-speak-lang="hu-HU">Hetente egyszer felveszem a saját beszédemet.</button></p>
        <p><button class="speak-btn" data-speak-text="A kijavított hibákat új mondatokban használom." data-speak-lang="hu-HU">A kijavított hibákat új mondatokban használom.</button></p>
        <p><button class="speak-btn" data-speak-text="Havonta egyszer felmérem a fejlődésemet." data-speak-lang="hu-HU">Havonta egyszer felmérem a fejlődésemet.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Как работать с новыми словами</h4>
        <table class="conj">
          <tr><th>Неэффективно</th><th>Эффективнее</th></tr>
          <tr><td>одно слово и один русский перевод</td><td>слово, типичное сочетание, собственное предложение и аудио</td></tr>
          <tr><td>перечитывать список</td><td>вспоминать без подсказки и использовать в новой ситуации</td></tr>
          <tr><td>учить десятки случайных слов</td><td>выбирать выражения одной темы и регулярно возвращаться к ним</td></tr>
        </table>

        <p><button class="speak-btn" data-speak-text="döntést hoz" data-speak-lang="hu-HU">döntést hoz</button> — принять решение.</p>
        <p><button class="speak-btn" data-speak-text="Tegnap fontos döntést hoztam." data-speak-lang="hu-HU">Tegnap fontos döntést hoztam.</button></p>
        <p><button class="speak-btn" data-speak-text="figyelmet fordít valamire" data-speak-lang="hu-HU">figyelmet fordít valamire</button> — уделять чему-либо внимание.</p>
        <p><button class="speak-btn" data-speak-text="Több figyelmet fordítok a kiejtésre." data-speak-lang="hu-HU">Több figyelmet fordítok a kiejtésre.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Журнал ошибок</h4>
        <table class="conj">
          <tr><th>Запиши</th><th>Пример действия</th></tr>
          <tr><td>исходную ошибку</td><td>зафиксируй точную фразу, а не только название правила</td></tr>
          <tr><td>исправленную модель</td><td>прочитай и произнеси правильную форму</td></tr>
          <tr><td>причину</td><td>кратко объясни выбор окончания, спряжения или порядка слов</td></tr>
          <tr><td>новый пример</td><td>создай другое предложение с той же моделью</td></tr>
          <tr><td>дату повторения</td><td>вернись к ошибке через день, неделю и месяц</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">План на девяносто дней</h4>
        <table class="conj">
          <tr><th>Период</th><th>Цель</th><th>Проверка</th></tr>
          <tr>
            <td>дни 1–30</td>
            <td>закрепить регулярность и повторить три слабые грамматические темы</td>
            <td>четыре текста, четыре записи голоса и один повторный тест</td>
          </tr>
          <tr>
            <td>дни 31–60</td>
            <td>увеличить длину материалов и время свободной речи</td>
            <td>пересказ статьи, беседа и текст на новую тему</td>
          </tr>
          <tr>
            <td>дни 61–90</td>
            <td>выполнить пробную интегрированную работу без подсказок</td>
            <td>чтение, аудирование, письмо и говорение в один день</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Если цель — официальный экзамен</h4>
        <ul class="tick">
          <li>выбери конкретный экзамен и изучи его актуальный формат отдельно;</li>
          <li>работай с официальными образцами заданий и критериями;</li>
          <li>тренируй ограничение времени и все проверяемые навыки;</li>
          <li>получай внешнюю оценку письменной и устной части.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Месячная самопроверка</h4>
        <ul class="tick">
          <li>могу ли я понять основную мысль нового материала без перевода каждого слова;</li>
          <li>могу ли я говорить одну–две минуты с понятной структурой;</li>
          <li>могу ли я написать связный текст и самостоятельно исправить часть ошибок;</li>
          <li>использую ли я исправленные конструкции в новых ситуациях;</li>
          <li>стал ли список повторяющихся ошибок короче.</li>
        </ul>

        <div class="note">
          Не измеряй прогресс только количеством выученных слов.
          Отслеживай, что ты понял, пересказал, написал, произнёс и исправил.
        </div>
      `,
    },
    {
      id: 11,
      eyebrow: "УРОК 28 · 11/11 · ЗАВЕРШЕНИЕ КУРСА",
      title: "Gratulálunk!",
      subtitle: "Зафиксируйте результат, границы курса и следующий учебный шаг",
      note: 'Вы завершили все уроки и итоговое повторение программы. Это важный учебный результат, который нужно закрепить дальнейшей практикой.',
      warn: 'Завершение курса не является автоматическим или официальным подтверждением уровня B1. Независимая оценка отдельно проверяет чтение, аудирование, письмо и говорение.',
      task: 'Заполните финальную самооценку, сохраните один письменный текст и одну запись речи, затем назначьте дату следующего контроля.',
      body: `
        <div style="text-align:center; padding: 20px 0;">
          <h3 style="color:#d97706; font-size:1.7rem; margin-bottom:12px;">
            <button class="speak-btn" data-speak-text="Gratulálunk!" data-speak-lang="hu-HU">Gratulálunk!</button>
          </h3>
          <p style="font-size:1.12rem; color:#4b5563;">
            Вы завершили программу курса и дошли до итогового самоконтроля.
          </p>
          <p style="margin-top:12px;">
            <button class="speak-btn" data-speak-text="Sikeresen befejezted a tanfolyamot." data-speak-lang="hu-HU">Sikeresen befejezted a tanfolyamot.</button>
          </p>
          <p>
            <button class="speak-btn" data-speak-text="Végigvetted a kurzus B1 szintű tananyagát." data-speak-lang="hu-HU">Végigvetted a kurzus B1 szintű tananyagát.</button>
          </p>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Что подтверждает завершение курса</h4>
        <table class="conj">
          <tr><th>Подтверждает</th><th>Не подтверждает автоматически</th></tr>
          <tr>
            <td>вы прошли все 28 уроков и итоговое повторение</td>
            <td>официальный сертификат уровня</td>
          </tr>
          <tr>
            <td>вы работали с ключевыми грамматическими системами курса</td>
            <td>безошибочную речь во всех ситуациях</td>
          </tr>
          <tr>
            <td>вы выполнили задания на связное письмо и говорение</td>
            <td>одинаково сильный результат по всем навыкам</td>
          </tr>
          <tr>
            <td>вы можете определить темы для дальнейшей практики</td>
            <td>завершение развития языка</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Итоговая карта навыков</h4>
        <p>Отметьте только то, что можете выполнить без готовой модели.</p>
        <ul class="tick">
          <li>я разбираю знакомую словоформу на корень и окончания;</li>
          <li>я выбираю пространственный падеж и притяжательную форму;</li>
          <li>я различаю времена, наклонения и два спряжения;</li>
          <li>я объясняю положение глагольной приставки;</li>
          <li>я связываю мысли причиной, результатом, контрастом, целью и условием;</li>
          <li>я понимаю основную мысль доступного текста или аудио и нахожу ключевые детали;</li>
          <li>я пишу десять–двенадцать связанных предложений на знакомую тему;</li>
          <li>я говорю одну–две минуты с понятной структурой;</li>
          <li>я замечаю часть собственных ошибок и могу их исправить.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Финальное заявление ученика</h4>
        <p><button class="speak-btn" data-speak-text="Sok mindent megtanultam, de továbbra is rendszeresen gyakorolok." data-speak-lang="hu-HU">Sok mindent megtanultam, de továbbra is rendszeresen gyakorolok.</button></p>
        <p><button class="speak-btn" data-speak-text="Tudom, mit tudok önállóan használni, és azt is, mit kell még gyakorolnom." data-speak-lang="hu-HU">Tudom, mit tudok önállóan használni, és azt is, mit kell még gyakorolnom.</button></p>
        <p><button class="speak-btn" data-speak-text="A következő három hónapban rendszeresen olvasok, hallgatok, írok és beszélek magyarul." data-speak-lang="hu-HU">A következő három hónapban rendszeresen olvasok, hallgatok, írok és beszélek magyarul.</button></p>
        <p><button class="speak-btn" data-speak-text="Havonta egyszer felmérem a fejlődésemet." data-speak-lang="hu-HU">Havonta egyszer felmérem a fejlődésemet.</button></p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Сохраните доказательства результата</h4>
        <table class="conj">
          <tr><th>Материал</th><th>Что сохранить</th><th>Что сравнить позже</th></tr>
          <tr>
            <td>письмо</td>
            <td>финальный текст без исправлений и его исправленную версию</td>
            <td>связность, грамматику, словарь и самокоррекцию</td>
          </tr>
          <tr>
            <td>говорение</td>
            <td>запись речи продолжительностью одну–две минуты</td>
            <td>паузу, понятность, структуру и повторяющиеся ошибки</td>
          </tr>
          <tr>
            <td>самоконтроль</td>
            <td>балл итогового теста и три слабые темы</td>
            <td>изменение результата через один месяц</td>
          </tr>
          <tr>
            <td>план</td>
            <td>конкретный график на следующие девяносто дней</td>
            <td>выполненные действия, а не только намерения</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Финальная рефлексия</h4>
        <ol class="tasklist">
          <li>Назовите три навыка, которые стали заметно сильнее.</li>
          <li>Запишите три повторяющиеся ошибки, над которыми продолжите работать.</li>
          <li>Выберите одну тему для чтения, одну для аудирования и одну для разговора.</li>
          <li>Назначьте точную дату повторного самоконтроля через один месяц.</li>
          <li>Сформулируйте первый конкретный шаг, который выполните завтра.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Заключение</h4>
        <p><button class="speak-btn" data-speak-text="A tanfolyam véget ért, de a nyelvtanulás folytatódik." data-speak-lang="hu-HU">A tanfolyam véget ért, de a nyelvtanulás folytatódik.</button></p>
        <p><button class="speak-btn" data-speak-text="Köszönjük, hogy velünk tanultál!" data-speak-lang="hu-HU">Köszönjük, hogy velünk tanultál!</button></p>
        <p><button class="speak-btn" data-speak-text="Sok sikert a továbblépéshez!" data-speak-lang="hu-HU">Sok sikert a továbblépéshez!</button></p>

        <div class="note">
          Следующий результат создаётся не ещё одним поздравлением, а регулярным
          чтением, аудированием, письмом, говорением, обратной связью и повторением.
        </div>
      `,
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
