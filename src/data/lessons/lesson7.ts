import type { Lesson, LessonActivity } from '../../types';

const L7_CP_FORMS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l7-cp-accusative-forms',
  title: 'Контекстная практика: что видим, покупаем и просим?',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l7-form-1', prompt: 'Какой вопрос задаёт продавец об объекте?', options: ['Mi ez?', 'Mit kérsz?', 'Ki vagy?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-form-2', prompt: 'Это кофе: ___', options: ['Ez egy kávé.', 'Ez egy kávét.', 'Ezt egy kávé.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-3', prompt: 'Ты заказываешь кофе.', options: ['Kávé kérek.', 'Kávét kérek.', 'Kávén kérek.'], correctIndex: 1 },
    { kind: 'textInput', id: 'l7-form-4', prompt: 'alma → винительный падеж', accept: ['almát'] },
    { kind: 'textInput', id: 'l7-form-5', prompt: 'könyv → винительный падеж', accept: ['könyvet'] },
    { kind: 'textInput', id: 'l7-form-6', prompt: 'asztal → винительный падеж', accept: ['asztalt'] },
    { kind: 'singleChoice', id: 'l7-form-7', prompt: 'Что покупает говорящий?', options: ['Kenyeret veszek.', 'Kenyér veszek.', 'Kenyerem veszek.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-8', prompt: 'Автобус уже виден.', options: ['Látom a busz.', 'Látok a buszt.', 'Látom a buszt.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l7-form-9', prompt: 'Выбери естественную фразу о предпочтении.', options: ['Szeretem ezt a filmet.', 'Szeretek ezt a film.', 'Szeretem ez film.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-10', prompt: 'Ты читаешь какую-то одну книгу.', options: ['Olvasok egy könyvet.', 'Olvasom egy könyv.', 'Olvasok a könyv.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-11', prompt: 'Кто выполняет действие?', options: ['A fiú olvas.', 'A fiú könyvet olvas.', 'Könyvet.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l7-form-12', prompt: 'Что читает мальчик?', options: ['A fiú.', 'Könyvet.', 'Olvas.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-form-13', prompt: 'Ты видишь Анну.', options: ['Látom Anna.', 'Látom Annát.', 'Látok Anná.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l7-form-14', prompt: 'Как попросить одну воду?', options: ['Kérek egy vizet.', 'Kérem egy víz.', 'Kér egy vizet én.'], correctIndex: 0 },
  ],
};

const L7_READING: LessonActivity = {
  kind: 'reading',
  id: 'l7-reading-bookshop',
  title: 'Чтение: покупки для ужина',
  instructions: 'Прочитай рассказ и ответь по смыслу: что уже есть у Норы, что она покупает и чем заменяет отсутствующий продукт.',
  passCount: 6,
  content: {
    type: 'prose',
    title: 'Bevásárlás vacsorához',
    paragraphs: [
      'Nóra péntek este vacsorát készít két barátjának. Otthon már van rizs, só, hagyma és egy kis sajt, de nincs elég zöldség. Munka után bemegy egy kis boltba. Először paradicsomot, paprikát és két répát tesz a kosarába. Kenyeret is szeretne venni, ezért választ egy barna kenyeret. Tejet nem vesz, mert azt senki sem kéri a vacsorához.',
      'Nóra csirkét keres, de nem talál a hűtőben. Megkérdez egy eladót: „Elnézést, hol találok csirkét?” Az eladó azt mondja, hogy ma már nincs csirke. Pulykát ajánl helyette. Nóra megnézi a pulykát, és vesz egy kis csomagot. Még egy üveg vizet és almát is vásárol.',
      'Otthon Nóra megmossa és felvágja a zöldséget. Rizzsel és pulykával meleg vacsorát készít. A barátai hét órakor érkeznek. Együtt eszik a vacsorát, utána pedig almát és sajtot kérnek. Mindenkinek ízlik az étel.',
    ],
  },
  questions: [
    { id: 'l7-reading-q1', question: 'Какой приём пищи готовит Нора?', options: ['завтрак', 'обед', 'ужин'], correctIndex: 2 },
    { id: 'l7-reading-q2', question: 'Что у неё уже есть дома?', options: ['рис, соль, лук и сыр', 'курица и хлеб', 'молоко и яблоки'], correctIndex: 0 },
    { id: 'l7-reading-q3', question: 'Что Нора сначала кладёт в корзину?', options: ['овощи', 'сыр', 'молоко'], correctIndex: 0 },
    { id: 'l7-reading-q4', question: 'Какой продукт она не может найти?', options: ['рис', 'курицу', 'хлеб'], correctIndex: 1 },
    { id: 'l7-reading-q5', question: 'Кого Нора спрашивает?', options: ['друга', 'продавца', 'соседа'], correctIndex: 1 },
    { id: 'l7-reading-q6', question: 'Что она выбирает вместо курицы?', options: ['индейку', 'рыбу', 'сыр'], correctIndex: 0 },
    { id: 'l7-reading-q7', question: 'Что Нора в итоге готовит?', options: ['тёплый ужин с рисом, индейкой и овощами', 'только бутерброды', 'яблочный пирог'], correctIndex: 0 },
  ],
};

const L7_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l7-roleplay-shop', title: 'Ролевая игра: покупка в маленьком магазине', partnerLabel: 'Eladó', completionMessage: 'Sikeresen befejezted a vásárlást.', startTurnId: 'l7-rp-s1',
  turns: [
    { id: 'l7-rp-s1', speaker: 'waiter', prompt: 'Jó napot! Mit kér?', next: 'l7-rp-l1' },
    { id: 'l7-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поприветствуй и попроси хлеб.', model: 'Jó napot! Egy kenyeret kérek.', next: 'l7-rp-s2' },
    { id: 'l7-rp-s2', speaker: 'waiter', prompt: 'Rendben. Egy vagy két kenyeret kér?', next: 'l7-rp-l2' },
    { id: 'l7-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови количество.', model: 'Egy kenyeret kérek.', next: 'l7-rp-s3' },
    { id: 'l7-rp-s3', speaker: 'waiter', prompt: 'Rendben. Kér még valamit?', next: 'l7-rp-l3' },
    { id: 'l7-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Добавь кофе и воду.', model: 'Igen, még egy kávét és egy vizet kérek.', next: 'l7-rp-s4' },
    { id: 'l7-rp-s4', speaker: 'waiter', prompt: 'Sajnos kávé nincs, de teát tudok adni. Jó lesz?', next: 'l7-rp-l4' },
    { id: 'l7-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Выбери предложенную замену.', model: 'Rendben, akkor egy teát kérek.', next: 'l7-rp-s5' },
    { id: 'l7-rp-s5', speaker: 'waiter', prompt: 'Rendben. Kér még almát vagy sajtot?', next: 'l7-rp-l5' },
    { id: 'l7-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Добавь один продукт и откажись от другого.', model: 'Kérek két almát, de sajtot nem kérek.', next: 'l7-rp-s6' },
    { id: 'l7-rp-s6', speaker: 'waiter', prompt: 'Rendben, akkor egy kenyér, egy víz, egy tea és két alma.', next: 'l7-rp-l6' },
    { id: 'l7-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди заказ.', model: 'Igen, köszönöm. Ezt kérem.', next: 'l7-rp-s7' },
    { id: 'l7-rp-s7', speaker: 'waiter', prompt: 'Rendben. Mást nem kér?', next: 'l7-rp-l7' },
    { id: 'l7-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Заверши покупку.', model: 'Nem, köszönöm. Ennyit kérek.', next: 'l7-rp-s8' },
    { id: 'l7-rp-s8', speaker: 'waiter', prompt: 'Köszönöm szépen. Viszontlátásra!', next: 'l7-rp-l8' },
    { id: 'l7-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вежливо попрощайся.', model: 'Köszönöm szépen. Viszontlátásra!', next: 'l7-rp-s9' },
    { id: 'l7-rp-s9', speaker: 'waiter', prompt: 'Viszontlátásra!' },
  ],
};

const L7_WRITING: LessonActivity = {
  kind: 'writing', id: 'l7-writing-shopping-note', title: 'Письмо: сообщение о покупках',
  prompt: 'Напиши 60–80 слов: что тебе нужно, что уже есть дома, что ты хочешь купить, чего не хочешь и что приготовишь или используешь. Включи несколько естественных форм винительного падежа.',
  modelAnswer: ['Ma vacsorát készítek a barátaimnak. Otthon már van rizs, só és egy kis sajt. A boltban paradicsomot, paprikát, kenyeret és két almát szeretnék venni. Tejet nem kérek, mert senki sem iszik tejet. Csirkét is keresek, de ha nincs, pulykát veszek. Még egy üveg vizet kérek. Este a rizst, a húst és a zöldséget együtt készítem el. Utána együtt almát eszünk.'],
  rubric: ['60–80 слов', 'что нужно и что уже есть', 'покупки и один отказ', 'несколько осмысленных форм винительного падежа', 'понятный итог'],
};

const L7_SPEAKING = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Говори около 1 минуты о том, что ты обычно ешь, пьёшь, покупаешь, читаешь или смотришь. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Назови несколько предметов и используй их как прямые дополнения.',
  rubric: ['еда и напитки', 'покупки', 'чтение или фильм', 'несколько объектов'],
};

const L7_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l7-listening-accusative',
  title: 'Аудирование: формы дополнения',
  assetId: 'l7_listening_accusative',
  audioStatus: 'published',
  transcript: 'Egy magyar könyvet keresek. Az eladó ezt a könyvet ajánlja. Kérek egy kávét is. Az ablakból látom a házat. A barátomnak azt mondom: „Látlak.”',
  passCount: 4,
  questions: [
    { id: 'l7-listening-q1', question: 'Что ищет говорящий?', options: ['egy magyar könyvet', 'egy magyar újságot', 'egy szótárt'], correctIndex: 0 },
    { id: 'l7-listening-q2', question: 'Что ему рекомендуют?', options: ['ezt a könyvet', 'azt a házat', 'egy kávét'], correctIndex: 0 },
    { id: 'l7-listening-q3', question: 'Что ещё просит говорящий?', options: ['egy kávét', 'egy almát', 'egy autót'], correctIndex: 0 },
    { id: 'l7-listening-q4', question: 'Что он видит из окна?', options: ['a kertet', 'a házat', 'az autót'], correctIndex: 1 },
    { id: 'l7-listening-q5', question: 'Какую форму он говорит другу?', options: ['Látlak.', 'Látom őt.', 'Látsz engem.'], correctIndex: 0 },
  ],
};

const L7_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l7-exit-check',
  title: 'Проверка целей урока 7',
  checks: [
    { objectiveId: 'l7_form-accusative', activityId: 'l7-cp-accusative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l7_use-accusative-object', activityId: 'l7-cp-accusative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l7_distinguish-nom-acc', activityId: 'l7-reading-bookshop', evidenceKind: 'reading' },
    { objectiveId: 'l7_listen-accusative', activityId: 'l7-listening-accusative', evidenceKind: 'listening' },
    { objectiveId: 'l7_translate-acc', activityId: 'l7-writing-shopping-note', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l7-roleplay-shop', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_7: Lesson = {
  id: 7,
  number: 7,
  level: 'A1',
  title: 'Урок 7 · A tárgyeset',
  subtitle: 'Винительный падеж — суффикс -t',
  description: 'Прямое дополнение с -t в бытовых ситуациях: предметы, покупки, просьбы, доступное чтение и текстовая практика без преждевременной полной системы спряжения.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 7 · 1/11 · ПОНЯТИЕ',
      title: 'A tárgyeset',
      subtitle: 'Прямое дополнение: kit? — кого? mit? — что?',
      type: 'info',
      note: 'Винительный падеж показывает, на кого или на что непосредственно направлено действие. Его основной показатель — -t, но реальная форма слова может включать соединительную гласную или изменение основы.',
      warn: 'Не говорите, что венгерский использует -t «вместо предлогов». Прямое дополнение не требует предлога ни в венгерском, ни в русском примере «вижу дом». Различие состоит в способе изменения формы существительного.',
      task: 'Сравните словарную форму и форму прямого дополнения, затем найдите объект в трёх коротких предложениях.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что такое tárgyeset</h4>

        <p>
          <b>A tárgyeset</b> — винительный, или объектный, падеж.
          Он отмечает <b>прямое дополнение</b>: человека или предмет,
          на который непосредственно направлено действие.
        </p>

        <table class="conj">
          <tr><th>Вопрос</th><th>Перевод</th><th>Пример ответа</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Kit?" data-speak-lang="hu-HU">Kit?</button>
            </td>
            <td>кого?</td>
            <td>
              <button class="speak-btn" data-speak-text="Annát." data-speak-lang="hu-HU">Annát.</button>
              — Анну.
            </td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Mit?" data-speak-lang="hu-HU">Mit?</button>
            </td>
            <td>что?</td>
            <td>
              <button class="speak-btn" data-speak-text="Egy könyvet." data-speak-lang="hu-HU">Egy könyvet.</button>
              — одну / какую-то книгу.
            </td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Словарная форма и форма объекта</h4>

        <p>
          Словарная форма называет предмет. Когда тот же предмет становится
          прямым дополнением, существительное обычно получает показатель
          винительного падежа <b>-t</b>.
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Прямое дополнение</th><th>Значение</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">ház</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU">házat</button>
            </td>
            <td>дом → дом как объект действия</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="könyvet" data-speak-lang="hu-HU">könyvet</button>
            </td>
            <td>книга → книгу</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU">alma</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="almát" data-speak-lang="hu-HU">almát</button>
            </td>
            <td>яблоко → яблоко как объект действия</td>
          </tr>
        </table>

        <div class="note">
          Основной падежный показатель — <b>-t</b>, но форма не всегда получается
          механическим добавлением одной буквы. В <b>házat</b> и <b>könyvet</b>
          появляется соединительная гласная, а в <b>almát</b> конечная
          <b>a</b> удлиняется до <b>á</b>. Эти модели подробно разбираются на 7.2.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Одна и та же основа в разных ролях</h4>

        <table class="conj">
          <tr><th>Без прямого дополнения</th><th>С прямым дополнением</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Ez egy ház." data-speak-lang="hu-HU">
                Ez egy ház.
              </button>
              <br />Это дом.
            </td>
            <td>
              <button class="speak-btn" data-speak-text="Látok egy házat." data-speak-lang="hu-HU">
                Látok egy házat.
              </button>
              <br />Я вижу один / какой-то дом.
            </td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU">
                A ház nagy.
              </button>
              <br />Дом большой.
            </td>
            <td>
              <button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">
                Látom a házat.
              </button>
              <br />Я вижу этот / известный дом.
            </td>
          </tr>
        </table>

        <div class="warn">
          Неверно: <b>Látom a ház.</b><br />
          Верно:
          <button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">
            Látom a házat.
          </button>
          — Я вижу этот / известный дом.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Пока только замечаем форму глагола</h4>

        <p>
          В примерах встречаются две формы глагола <b>lát</b> — «видеть»:
        </p>

        <ul class="tick">
          <li>
            <button class="speak-btn" data-speak-text="Látok egy házat." data-speak-lang="hu-HU">
              Látok egy házat.
            </button>
            — Я вижу один / какой-то дом.
          </li>
          <li>
            <button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">
              Látom a házat.
            </button>
            — Я вижу этот / известный дом.
          </li>
        </ul>

        <div class="note">
          Сейчас не нужно учить полную систему неопределённого и определённого
          спряжения. На этом уроке достаточно запомнить эти модели и сосредоточиться
          на форме существительного с <b>-t</b>. Полная система спряжения изучается отдельно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Мини-проверка</h4>

        <ol class="tasklist">
          <li>
            В предложении
            <button class="speak-btn" data-speak-text="Ez egy könyv." data-speak-lang="hu-HU">
              Ez egy könyv.
            </button>
            — «Это книга» — есть ли прямое дополнение?
          </li>
          <li>
            В предложении
            <button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">
              Olvasok egy könyvet.
            </button>
            — «Я читаю одну / какую-то книгу» — какое слово является дополнением?
          </li>
          <li>
            Какой вопрос подходит к слову
            <button class="speak-btn" data-speak-text="Annát" data-speak-lang="hu-HU">Annát</button>:
            <b>kit?</b> или <b>mit?</b>
          </li>
        </ol>

        <div class="note">
          Ответы: 1) нет; 2) <b>egy könyvet</b> — «одну / какую-то книгу»;
          3) <b>kit?</b> — «кого?».
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 7 · 2/11 · ОБРАЗОВАНИЕ',
      title: 'Hogyan képezzük?',
      subtitle: 'Формы -t, -at/-et/-ot/-öt и изменения основы',
      type: 'info',
      note: 'У винительного падежа один основной показатель — -t. Но перед ним может появляться соединительная гласная, а некоторые основы изменяются. Поэтому важно различать надёжные модели и словарные формы.',
      warn: 'Нельзя свести образование винительного падежа к правилу «мягкий согласный — просто -t». Слово tanár заканчивается на r, а выбор между tanárt, házat, ablakot и könyvet зависит от типа основы, фонетики и словарной модели.',
      task: 'Разберите четыре основные модели, сравните соединительные гласные и исправьте типичные ошибочные формы.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Основной показатель — <span class="hu-word">-t</span></h4>

        <p>
          Винительный падеж имеет основной показатель <b>-t</b>.
          В реальном слове он проявляется как:
          <b>-t, -at, -et, -ot</b> или <b>-öt</b>.
        </p>

        <div class="note">
          Эти варианты не являются пятью разными падежами.
          Это разные формы одного и того же винительного окончания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Модель A: слово заканчивается на гласную</h4>

        <p>
          После большинства конечных гласных добавляется <b>-t</b>.
          Долгая гласная сохраняется.
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Винительный падеж</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button></td>
            <td><button class="speak-btn" data-speak-text="autót" data-speak-lang="hu-HU">autót</button></td>
            <td>машина → машину</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kávé" data-speak-lang="hu-HU">kávé</button></td>
            <td><button class="speak-btn" data-speak-text="kávét" data-speak-lang="hu-HU">kávét</button></td>
            <td>кофе → кофе как объект действия</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="taxi" data-speak-lang="hu-HU">taxi</button></td>
            <td><button class="speak-btn" data-speak-text="taxit" data-speak-lang="hu-HU">taxit</button></td>
            <td>такси → такси как объект действия</td>
          </tr>
        </table>

        <div class="warn">
          Конечные <b>a</b> и <b>e</b> образуют отдельную модель:
          они не остаются краткими.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Модель B: конечные a и e удлиняются</h4>

        <table class="conj">
          <tr><th>Изменение</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td><b>a → á</b></td>
            <td>
              <button class="speak-btn" data-speak-text="alma, almát" data-speak-lang="hu-HU">
                alma → almát
              </button>
            </td>
            <td>яблоко → яблоко как объект действия</td>
          </tr>
          <tr>
            <td><b>e → é</b></td>
            <td>
              <button class="speak-btn" data-speak-text="kefe, kefét" data-speak-lang="hu-HU">
                kefe → kefét
              </button>
            </td>
            <td>щётка → щётку</td>
          </tr>
          <tr>
            <td><b>e → é</b></td>
            <td>
              <button class="speak-btn" data-speak-text="mese, mesét" data-speak-lang="hu-HU">
                mese → mesét
              </button>
            </td>
            <td>сказка → сказку</td>
          </tr>
        </table>

        <div class="note">
          Неверно: <b>almat</b>, <b>kefet</b>.<br />
          Верно: <b>almát</b>, <b>kefét</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Модель C: после согласной иногда добавляется только -t</h4>

        <p>
          Некоторые согласные основы принимают голое <b>-t</b>
          без соединительной гласной.
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Винительный падеж</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU">tanár</button></td>
            <td><button class="speak-btn" data-speak-text="tanárt" data-speak-lang="hu-HU">tanárt</button></td>
            <td>учитель → учителя</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU">asztal</button></td>
            <td><button class="speak-btn" data-speak-text="asztalt" data-speak-lang="hu-HU">asztalt</button></td>
            <td>стол → стол как объект действия</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lány" data-speak-lang="hu-HU">lány</button></td>
            <td><button class="speak-btn" data-speak-text="lányt" data-speak-lang="hu-HU">lányt</button></td>
            <td>девочка → девочку</td>
          </tr>
        </table>

        <div class="warn">
          Это не универсальное правило для всех слов на <b>r, l</b> или <b>ny</b>.
          На уровне A1 безопаснее запоминать частотные пары.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Модель D: появляется соединительная гласная</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td><b>-at</b></td>
            <td>
              <button class="speak-btn" data-speak-text="ház, házat" data-speak-lang="hu-HU">
                ház → házat
              </button>
            </td>
            <td>дом → дом как объект действия</td>
          </tr>
          <tr>
            <td><b>-ot</b></td>
            <td>
              <button class="speak-btn" data-speak-text="ablak, ablakot" data-speak-lang="hu-HU">
                ablak → ablakot
              </button>
            </td>
            <td>окно → окно как объект действия</td>
          </tr>
          <tr>
            <td><b>-et</b></td>
            <td>
              <button class="speak-btn" data-speak-text="kert, kertet" data-speak-lang="hu-HU">
                kert → kertet
              </button>
            </td>
            <td>сад → сад как объект действия</td>
          </tr>
          <tr>
            <td><b>-et</b></td>
            <td>
              <button class="speak-btn" data-speak-text="könyv, könyvet" data-speak-lang="hu-HU">
                könyv → könyvet
              </button>
            </td>
            <td>книга → книгу</td>
          </tr>
          <tr>
            <td><b>-öt</b></td>
            <td>
              <button class="speak-btn" data-speak-text="gyümölcs, gyümölcsöt" data-speak-lang="hu-HU">
                gyümölcs → gyümölcsöt
              </button>
            </td>
            <td>фрукт → фрукт как объект действия</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что даёт гармония гласных</h4>

        <p>
          Гармония помогает выбрать <b>качество</b> соединительной гласной:
        </p>

        <table class="conj">
          <tr><th>Тип гласных основы</th><th>Частый вариант</th><th>Пример</th></tr>
          <tr>
            <td>заднего ряда</td>
            <td><b>-at / -ot</b></td>
            <td><b>házat, ablakot</b></td>
          </tr>
          <tr>
            <td>переднего ряда, неогублённые</td>
            <td><b>-et</b></td>
            <td><b>kertet, könyvet</b></td>
          </tr>
          <tr>
            <td>переднего ряда, огублённые</td>
            <td><b>-öt</b></td>
            <td><b>gyümölcsöt</b></td>
          </tr>
        </table>

        <div class="warn">
          Гармония не сообщает автоматически:
          нужна ли вообще соединительная гласная и будет ли у заднерядного слова
          <b>-at</b> или <b>-ot</b>.
          Поэтому учим: <b>tanárt</b>, но <b>házat</b> и <b>ablakot</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Некоторые основы дополнительно изменяются</h4>

        <p>
          У части частотных односложных слов долгий гласный основы
          сокращается перед окончанием. Это словарные формы:
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Винительный падеж</th><th>Перевод</th></tr>
          <tr><td>út</td><td>utat</td><td>дорога → дорогу</td></tr>
          <tr><td>víz</td><td>vizet</td><td>вода → воду</td></tr>
          <tr><td>kéz</td><td>kezet</td><td>рука → руку</td></tr>
        </table>

        <div class="note">
          Не применяйте сокращение ко всем односложным словам.
          Запоминайте такие формы вместе со словом:
          <b>út — utat, víz — vizet, kéz — kezet</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Исправьте ошибки</h4>

        <ol class="tasklist">
          <li><b>alma → almat</b></li>
          <li><b>könyv → könyvt</b></li>
          <li><b>ház → házot</b></li>
          <li><b>tanár → tanárat</b></li>
          <li><b>gyümölcs → gyümölcset</b></li>
        </ol>

        <div class="note">
          Ответы:
          <b>almát, könyvet, házat, tanárt, gyümölcsöt</b>.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 7 · 3/11 · ЧАСТЫЕ ФОРМЫ',
      title: 'Alakok együtt',
      subtitle: 'Учим форму вместе с короткой фразой',
      type: 'practice',
      note: 'Форма винительного падежа запоминается надёжнее не как отдельное окончание, а в паре со словарной формой и в коротком предложении.',
      warn: 'Не пытайтесь каждый раз строить форму только по последней букве слова. Сравнивайте готовые модели: tanárt, но házat; asztalt, но kertet.',
      task: 'Прочитайте пары вслух, определите модель образования и затем выполните проверяемую практику.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Частые пары</h4>

        <table class="conj">
          <tr>
            <th>Словарная форма</th>
            <th>Форма дополнения</th>
            <th>Короткий контекст</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU">kutya</button></td>
            <td><button class="speak-btn" data-speak-text="kutyát" data-speak-lang="hu-HU">kutyát</button></td>
            <td>
              <button class="speak-btn" data-speak-text="Látok egy kutyát." data-speak-lang="hu-HU">
                Látok egy kutyát.
              </button>
              — Я вижу одну / какую-то собаку.
            </td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU">alma</button></td>
            <td><button class="speak-btn" data-speak-text="almát" data-speak-lang="hu-HU">almát</button></td>
            <td>
              <button class="speak-btn" data-speak-text="Veszek egy almát." data-speak-lang="hu-HU">
                Veszek egy almát.
              </button>
              — Я покупаю одно яблоко.
            </td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button></td>
            <td><button class="speak-btn" data-speak-text="autót" data-speak-lang="hu-HU">autót</button></td>
            <td>
              <button class="speak-btn" data-speak-text="Látok egy autót." data-speak-lang="hu-HU">
                Látok egy autót.
              </button>
              — Я вижу одну / какую-то машину.
            </td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU">tanár</button></td>
            <td><button class="speak-btn" data-speak-text="tanárt" data-speak-lang="hu-HU">tanárt</button></td>
            <td>
              <button class="speak-btn" data-speak-text="Látom a tanárt." data-speak-lang="hu-HU">
                Látom a tanárt.
              </button>
              — Я вижу учителя.
            </td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU">kert</button></td>
            <td><button class="speak-btn" data-speak-text="kertet" data-speak-lang="hu-HU">kertet</button></td>
            <td>
              <button class="speak-btn" data-speak-text="Látom a kertet." data-speak-lang="hu-HU">
                Látom a kertet.
              </button>
              — Я вижу сад.
            </td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button></td>
            <td><button class="speak-btn" data-speak-text="könyvet" data-speak-lang="hu-HU">könyvet</button></td>
            <td>
              <button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">
                Olvasok egy könyvet.
              </button>
              — Я читаю одну / какую-то книгу.
            </td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">ház</button></td>
            <td><button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU">házat</button></td>
            <td>
              <button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">
                Látom a házat.
              </button>
              — Я вижу дом.
            </td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU">asztal</button></td>
            <td><button class="speak-btn" data-speak-text="asztalt" data-speak-lang="hu-HU">asztalt</button></td>
            <td>
              <button class="speak-btn" data-speak-text="Látom az asztalt." data-speak-lang="hu-HU">
                Látom az asztalt.
              </button>
              — Я вижу стол.
            </td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Распределите формы по моделям</h4>

        <table class="conj">
          <tr><th>Модель</th><th>Примеры</th></tr>
          <tr>
            <td>конечная гласная + <b>-t</b></td>
            <td><b>autó → autót</b></td>
          </tr>
          <tr>
            <td><b>a → á</b> перед <b>-t</b></td>
            <td><b>kutya → kutyát, alma → almát</b></td>
          </tr>
          <tr>
            <td>голое <b>-t</b> после согласной</td>
            <td><b>tanár → tanárt, asztal → asztalt</b></td>
          </tr>
          <tr>
            <td>соединительная гласная</td>
            <td><b>kert → kertet, könyv → könyvet, ház → házat</b></td>
          </tr>
        </table>

        <div class="note">
          Важно видеть не только окончание, но и всю форму:
          <b>kutyát, almát, autót, tanárt, kertet, könyvet, házat, asztalt</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Форма должна работать в предложении</h4>

        <p>
          Существительное в винительном падеже отвечает на вопрос
          <b>kit?</b> или <b>mit?</b> и является объектом действия.
        </p>

        <table class="conj">
          <tr><th>Предложение</th><th>Вопрос</th><th>Ответ</th></tr>
          <tr>
            <td><b>Látom a tanárt.</b></td>
            <td><b>Kit látsz?</b></td>
            <td><b>A tanárt.</b></td>
          </tr>
          <tr>
            <td><b>Olvasok egy könyvet.</b></td>
            <td><b>Mit olvasol?</b></td>
            <td><b>Egy könyvet.</b></td>
          </tr>
          <tr>
            <td><b>Veszek egy almát.</b></td>
            <td><b>Mit veszel?</b></td>
            <td><b>Egy almát.</b></td>
          </tr>
        </table>

        <div class="warn">
          В переводе может не быть отдельного русского окончания,
          которое точно соответствует венгерскому <b>-t</b>.
          Поэтому ориентируйтесь на функцию слова: кого или что видят,
          читают, покупают, просят.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Перед проверяемой практикой</h4>

        <ol class="tasklist">
          <li>Произнесите каждую пару дважды.</li>
          <li>Закройте второй столбец и восстановите форму дополнения.</li>
          <li>Составьте по одному предложению с <b>látok, látom, olvasok</b> или <b>veszek</b>.</li>
          <li>Затем выполните упражнение ниже.</li>
        </ol>
      `,
      activities: [L7_CP_FORMS],
    },
    {
      id: 4,
      eyebrow: 'УРОК 7 · 4/11 · МЕСТОИМЕНИЯ',
      title: 'Névmások tárgyesete',
      subtitle: 'Особые формы',
      body: `
        <p>Формы личных местоимений нужно запомнить отдельно.</p>
        <table class="conj">
          <tr><th>Кто?</th><th>Кого?</th><th>Значение</th></tr>
          <tr><td>én</td><td>engem</td><td>меня</td></tr>
          <tr><td>te</td><td>téged</td><td>тебя</td></tr>
          <tr><td>ő</td><td>őt</td><td>его / её</td></tr>
          <tr><td>mi</td><td>minket</td><td>нас</td></tr>
          <tr><td>ti</td><td>titeket</td><td>вас</td></tr>
          <tr><td>ők</td><td>őket</td><td>их</td></tr>
        </table>
        <p><span class="hu-word">Szeretsz engem?</span> — Ты любишь меня? <span class="hu-word">Látom őt.</span> — Я вижу его / её.</p>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 7 · 5/11 · УЗКИЙ ПРЕДПРОСМОТР',
      title: 'Látlak',
      subtitle: 'Я → тебя: -lak/-lek',
      body: `
        <p>Когда подлежащее — <span class="hu-word">én</span> («я»), а дополнение — грамматическое 2-е лицо <span class="hu-word">téged</span> («тебя»), у глагола есть особая форма <b>-lak/-lek</b>.</p>
        <p><span class="hu-word">Látlak.</span> — Я вижу тебя. Можно уточнить или подчеркнуть: <span class="hu-word">Látlak téged.</span></p>
        <p><span class="hu-word">Szeretlek.</span> — Я люблю тебя.</p>
        <div class="note">Формальное <span class="hu-word">Ön</span> грамматически ведёт себя как 3-е лицо: <span class="hu-word">Látom Önt.</span> — Я вижу Вас. Здесь изучаем только одну модель 1-го лица с объектом 2-го лица, а не полную парадигму <b>-lak/-lek</b>.</div>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 7 · 6/11 · ПОРЯДОК СЛОВ',
      title: 'A tárgy a mondatban',
      subtitle: 'Окончание сохраняет роль слова',
      body: `
        <p>В венгерском порядок слов зависит от контекста и фокуса. Для начала используй надёжные нейтральные образцы:</p>
        <p><span class="hu-word">Keresek egy könyvet.</span> — Я ищу книгу. <span class="hu-word">Látom a házat.</span> — Я вижу дом.</p>
        <p>Неопределённое дополнение сочетается с формой вроде <span class="hu-word">keresek</span>, а определённое — с формой вроде <span class="hu-word">látom</span>. Полную систему спряжения изучим отдельно.</p>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 7 · 7/11 · ЧТЕНИЕ',
      title: 'Bevásárlás vacsorához',
      subtitle: 'Покупки и дополнения в естественном контексте',
      body: `
        <p>Проследи, что уже есть у Норы, какие продукты она покупает и чем заменяет отсутствующую курицу.</p>
      `,
      activities: [L7_READING],
    },
    {
      id: 8,
      eyebrow: 'УРОК 7 · 8/11 · АУДИРОВАНИЕ',
      title: 'Hallásértés',
      subtitle: 'Только по существующей реальной записи',
      body: `
        <p>Прослушай запись и ответь на вопросы по содержанию. Транскрипт открывается только после отправки ответов.</p>
      `,
      activities: [L7_LISTENING],
    },
    {
      id: 9,
      eyebrow: 'УРОК 7 · 9/11 · ВЗАИМОДЕЙСТВИЕ',
      title: 'Mit kér?',
      subtitle: 'Покупка и замена отсутствующего товара',
      body: `
        <p>Попроси товары, уточни количество, выбери замену и подтверди заказ. RolePlay остаётся PARTIAL.</p>
      `,
      activities: [L7_ROLEPLAY],
    },
    {
      id: 10,
      eyebrow: 'УРОК 7 · 10/11 · ПИСЬМО И САМОПРАКТИКА',
      title: 'Bevásárló üzenet',
      subtitle: 'Связный текст о покупках',
      body: `
        <p>Напиши сообщение на 60–80 слов. Optional Speaking — только текстовая инструкция, без микрофона, score и evidence.</p>
      `,
      activities: [L7_WRITING], optionalSpeaking: L7_SPEAKING,
    },
    {
      id: 11,
      eyebrow: 'УРОК 7 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что подтверждено',
      body: `
        <ul class="tick">
          <li>Прямое дополнение обычно получает окончание <b>-t</b>.</li>
          <li>После согласных выбор голого <b>-t</b> или соединительной гласной частично лексический: учи частые пары.</li>
          <li><span class="hu-word">Látlak.</span> — основная форма «Я вижу тебя».</li>
          <li>Controlled Practice, Reading и загруженный Listening могут дать DIRECT только после порога.</li>
          <li>Writing и RolePlay остаются PARTIAL; optional Speaking не создаёт evidence.</li>
        </ul>
      `,
      activities: [L7_EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l7_v1', hu: 'házat', ru: 'дом (вин. падеж)', phonetic: '[ха̄зат]', category: 'Винительный падеж -t', exampleSentence: 'Látom a házat.', baseWord: 'ház', grammaticalTag: 'targyeset-t', relatedLessonId: 7 },
    { id: 'l7_v2', hu: 'kávét', ru: 'кофе (вин. падеж)', phonetic: '[ка̄вэ̄т]', category: 'Винительный падеж -t', exampleSentence: 'Szeretem a kávét.', baseWord: 'kávé' },
    { id: 'l7_v3', hu: 'könyvet', ru: 'книгу (вин. падеж)', phonetic: '[кёнйвэт]', category: 'Винительный падеж -t', baseWord: 'könyv' },
    { id: 'l7_v4', hu: 'látom', ru: 'я вижу (его/её/это)', phonetic: '[ла̄том]', category: 'Определённое спряжение', baseWord: 'lát' },
    { id: 'l7_v5', hu: 'szeretem', ru: 'я люблю (его/её/это)', phonetic: '[сэретэм]', category: 'Определённое спряжение', baseWord: 'szeret' },
    { id: 'l7_v6', hu: 'almát', ru: 'яблоко (вин. падеж)', phonetic: '[алма̄т]', category: 'Винительный падеж -t', baseWord: 'alma' },
  ],
  quiz: [
    {
      id: 701,
      question: 'Как образуется винительный падеж от слова «autó»?',
      options: ['autót', 'autó', 'autóat', 'autóet'],
      correctIndex: 0,
      explanation: 'После этой конечной гласной добавляется -t: autó → autót.',
    },
    {
      id: 702,
      question: 'Как будет винительный падеж слова «ház»?',
      options: ['házot', 'házat', 'ház', 'házt'],
      correctIndex: 1,
      explanation: 'Частую пару ház → házat лучше учить вместе: выбор соединительной гласной частично лексический.',
    },
    {
      id: 703,
      question: 'Как сказать «Я вижу тебя» по-венгерски?',
      options: ['Látlak.', 'Látok.', 'Látom őt.', 'Látsz engem.'],
      correctIndex: 0,
      explanation: 'При подлежащем «я» и дополнении «тебя» используется особая форма 1-го лица с объектом 2-го лица: Látlak. При необходимости можно сказать Látlak téged.',
    },
    {
      id: 704,
      question: 'Как сказать «Я прошу один кофе»?',
      options: ['Kérek egy kávét.', 'Kérem egy kávé.', 'Kérsz egy kávét.', 'Kérek egy kávé.'],
      correctIndex: 0,
      explanation: 'Неопределённое дополнение egy kávét сочетается здесь с формой kérek.',
    },
    {
      id: 705,
      question: 'Что из перечисленного НЕ является формой винительного падежа?',
      options: ['könyvet', 'kutyát', 'ember', 'házat'],
      correctIndex: 2,
      explanation: 'ember — словарная форма; винительный падеж — embert.',
    },
    {
      id: 706,
      question: 'В каком варианте сначала дана словарная форма, затем винительный падеж?',
      options: ['kert → kertet', 'házat → ház', 'könyvet → könyv', 'almát → alma'],
      correctIndex: 0,
      explanation: 'kert — словарная форма, kertet — форма прямого дополнения.',
    },
  ],
  objectives: [
    { id: 'l7_form-accusative', text: 'Образовывать винительный падеж с помощью -t и связующих гласных.', skills: ['grammar', 'writing'] },
    { id: 'l7_use-accusative-object', text: 'Употреблять прямое дополнение в винительном падеже в предложении.', skills: ['grammar', 'speaking'] },
    { id: 'l7_distinguish-nom-acc', text: 'Различать именительный и винительный падеж в тексте.', skills: ['reading', 'grammar'] },
    { id: 'l7_listen-accusative', text: 'Понимать формы винительного падежа на слух.', skills: ['listening'] },
    { id: 'l7_translate-acc', text: 'Переводить простые фразы с винительным падежом.', skills: ['writing', 'reading'] },
  ],
};
