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
      subtitle: 'Прямое дополнение: kit? — кого? · mit? — что?',
      type: 'info',
      note: 'Главная цель 7.1 — научиться замечать прямое дополнение. В венгерском существительное-объект обычно имеет показатель -t; конкретные модели образования разбираются на 7.2.',
      warn: 'Не пытайтесь на этом слайде выводить форму только по последней букве слова. Сначала определите функцию: кого? что? Формы házat, könyvet и almát пока воспринимайте как готовые пары.',
      task: 'Сравните три пары, затем найдите прямое дополнение в двух коротких предложениях.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Кого? Что?</h4>

        <p>
          <b>A tárgyeset</b> — винительный, или объектный, падеж.
          Он показывает <b>прямое дополнение</b>: человека или предмет,
          на который непосредственно направлено действие.
        </p>

        <table class="conj">
          <tr><th>Вопрос</th><th>Перевод</th><th>Пример</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Kit?" data-speak-lang="hu-HU">Kit?</button>
            </td>
            <td>кого?</td>
            <td>
              <button class="speak-btn" data-speak-text="Látom Annát." data-speak-lang="hu-HU">
                Látom Annát.
              </button>
              <br />Я вижу Анну.
            </td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Mit?" data-speak-lang="hu-HU">Mit?</button>
            </td>
            <td>что?</td>
            <td>
              <button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">
                Olvasok egy könyvet.
              </button>
              <br />Я читаю одну / какую-то книгу.
            </td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Как выглядит существительное-объект</h4>

        <p>
          Когда существительное становится прямым дополнением, оно обычно получает
          показатель винительного падежа <b>-t</b>. На этом слайде запомните три готовые пары:
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Форма объекта</th><th>Пример</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">ház</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU">házat</button>
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
              <button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="könyvet" data-speak-lang="hu-HU">könyvet</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">
                Olvasok egy könyvet.
              </button>
              <br />Я читаю одну / какую-то книгу.
            </td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU">alma</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="almát" data-speak-lang="hu-HU">almát</button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="Veszek egy almát." data-speak-lang="hu-HU">
                Veszek egy almát.
              </button>
              <br />Я покупаю одно яблоко.
            </td>
          </tr>
        </table>

        <div class="note">
          Почему получаются именно <b>házat</b>, <b>könyvet</b> и <b>almát</b>,
          подробно разбирается на 7.2. Здесь важно увидеть общий принцип:
          словарная форма и форма прямого дополнения — не одно и то же.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Две готовые модели</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Значение</th><th>Прямое дополнение</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Látok egy házat." data-speak-lang="hu-HU">
                Látok egy házat.
              </button>
            </td>
            <td>Я вижу один / какой-то дом.</td>
            <td><b>egy házat</b></td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">
                Látom a házat.
              </button>
            </td>
            <td>Я вижу конкретный / уже известный дом.</td>
            <td><b>a házat</b></td>
          </tr>
        </table>

        <div class="note">
          В обоих предложениях существительное имеет форму <b>házat</b>.
          Разницу между <b>látok</b> и <b>látom</b> здесь не анализируем:
          пока запомните обе фразы как готовые модели.
        </div>

        <div class="warn">
          Неверно: <b>Látom a ház.</b><br />
          Верно:
          <button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">
            Látom a házat.
          </button>
          <br />В этом примере существительное-прямое дополнение должно стоять в форме винительного падежа.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Мини-проверка</h4>

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
            — какая часть является прямым дополнением?
          </li>
        </ol>

        <details class="note">
          <summary><b>Проверить ответы</b></summary>
          <p>
            1) Нет: <b>könyv</b> здесь называет, что это за предмет.<br />
            2) <b>egy könyvet</b> — прямое дополнение: «одну / какую-то книгу».
          </p>
        </details>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 7 · 2/11 · ОБРАЗОВАНИЕ',
      title: 'Hogyan képezzük a tárgyesetet?',
      subtitle: 'Один показатель -t, четыре частые модели и словарные пары',
      type: 'info',
      note: 'У винительного падежа один основной показатель — -t. Однако готовая форма слова не всегда строится механически: перед -t может появиться соединительная гласная, конечные a/e удлиняются, а у некоторых частотных слов изменяется основа.',
      warn: 'Гармония гласных помогает сузить выбор соединительной гласной, но не сообщает автоматически, нужна ли она вообще и какая точная форма получится. Особенно важно не выводить форму только по огублённости: könyv содержит ö, но правильно könyvet, а не könyvöt.',
      task: 'Разберите четыре модели, затем исправьте пять ошибочных форм в мини-проверке. Частотные пары с изменением основы пока узнавайте и запоминайте целиком.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Главный принцип</h4>

        <p>
          Показатель винительного падежа — <b>-t</b>.
          В готовом слове он может выглядеть как
          <b>-t, -at, -et, -ot</b> или <b>-öt</b>.
          Это не пять разных падежей, а разные способы присоединения одного показателя.
        </p>

        <div class="grid2 my-4">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#57121C] mb-1">Без соединительной гласной</div>
            <div><b>autó → autót</b></div>
            <div><b>tanár → tanárt</b></div>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58] mb-1">С соединительной гласной</div>
            <div><b>ház → házat</b></div>
            <div><b>könyv → könyvet</b></div>
          </div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Модель A: конечная гласная + -t</h4>

        <p>
          После большинства конечных гласных добавляется <b>-t</b>.
          Долгая гласная сохраняется.
          Конечные <b>a</b> и <b>e</b> относятся к следующей модели.
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Винительный падеж</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button></td>
            <td><button class="speak-btn" data-speak-text="autót" data-speak-lang="hu-HU">autót</button></td>
            <td><button class="speak-btn" data-speak-text="Látok egy autót." data-speak-lang="hu-HU">Látok egy autót.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kávé" data-speak-lang="hu-HU">kávé</button></td>
            <td><button class="speak-btn" data-speak-text="kávét" data-speak-lang="hu-HU">kávét</button></td>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="taxi" data-speak-lang="hu-HU">taxi</button></td>
            <td><button class="speak-btn" data-speak-text="taxit" data-speak-lang="hu-HU">taxit</button></td>
            <td><button class="speak-btn" data-speak-text="Hívok egy taxit." data-speak-lang="hu-HU">Hívok egy taxit.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Модель B: конечные a и e удлиняются</h4>

        <p>
          Перед <b>-t</b> конечная <b>a</b> становится <b>á</b>,
          а конечная <b>e</b> становится <b>é</b>.
        </p>

        <table class="conj">
          <tr><th>Изменение</th><th>Пара</th><th>Правильная форма</th></tr>
          <tr>
            <td><b>a → á</b></td>
            <td><button class="speak-btn" data-speak-text="alma, almát" data-speak-lang="hu-HU">alma → almát</button></td>
            <td><b>almát</b>, не <s>almat</s></td>
          </tr>
          <tr>
            <td><b>e → é</b></td>
            <td><button class="speak-btn" data-speak-text="kefe, kefét" data-speak-lang="hu-HU">kefe → kefét</button></td>
            <td><b>kefét</b>, не <s>kefet</s></td>
          </tr>
          <tr>
            <td><b>e → é</b></td>
            <td><button class="speak-btn" data-speak-text="mese, mesét" data-speak-lang="hu-HU">mese → mesét</button></td>
            <td><b>mesét</b>, не <s>meset</s></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Модель C: некоторые согласные основы принимают только -t</h4>

        <p>
          У ряда частотных слов после согласной соединительная гласная не появляется.
          Эти формы безопаснее запоминать как готовые пары.
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Винительный падеж</th><th>Мини-фраза</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU">tanár</button></td>
            <td><button class="speak-btn" data-speak-text="tanárt" data-speak-lang="hu-HU">tanárt</button></td>
            <td><button class="speak-btn" data-speak-text="Látom a tanárt." data-speak-lang="hu-HU">Látom a tanárt.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU">asztal</button></td>
            <td><button class="speak-btn" data-speak-text="asztalt" data-speak-lang="hu-HU">asztalt</button></td>
            <td><button class="speak-btn" data-speak-text="Látom az asztalt." data-speak-lang="hu-HU">Látom az asztalt.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lány" data-speak-lang="hu-HU">lány</button></td>
            <td><button class="speak-btn" data-speak-text="lányt" data-speak-lang="hu-HU">lányt</button></td>
            <td><button class="speak-btn" data-speak-text="Ismerem a lányt." data-speak-lang="hu-HU">Ismerem a lányt.</button></td>
          </tr>
        </table>

        <div class="warn">
          Это не правило о «мягких» или «твёрдых» согласных.
          Нельзя по одной последней букве надёжно решить,
          будет ли только <b>-t</b> или появится соединительная гласная.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Модель D: появляется соединительная гласная</h4>

        <table class="conj">
          <tr><th>Пара</th><th>Модель</th><th>Мини-фраза</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ház, házat" data-speak-lang="hu-HU">ház → házat</button></td>
            <td><b>-at</b></td>
            <td><button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">Látom a házat.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ablak, ablakot" data-speak-lang="hu-HU">ablak → ablakot</button></td>
            <td><b>-ot</b></td>
            <td><button class="speak-btn" data-speak-text="Kinyitom az ablakot." data-speak-lang="hu-HU">Kinyitom az ablakot.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kert, kertet" data-speak-lang="hu-HU">kert → kertet</button></td>
            <td><b>-et</b></td>
            <td><button class="speak-btn" data-speak-text="Látom a kertet." data-speak-lang="hu-HU">Látom a kertet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyv, könyvet" data-speak-lang="hu-HU">könyv → könyvet</button></td>
            <td><b>-et</b></td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyümölcs, gyümölcsöt" data-speak-lang="hu-HU">gyümölcs → gyümölcsöt</button></td>
            <td><b>-öt</b></td>
            <td><button class="speak-btn" data-speak-text="Veszek gyümölcsöt." data-speak-lang="hu-HU">Veszek gyümölcsöt.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что действительно даёт гармония гласных</h4>

        <table class="conj">
          <tr><th>Тип основы</th><th>Возможная соединительная гласная</th><th>Примеры</th></tr>
          <tr>
            <td>основа с задними гласными</td>
            <td><b>a</b> или <b>o</b></td>
            <td><b>házat, ablakot</b></td>
          </tr>
          <tr>
            <td>основа с передними гласными</td>
            <td><b>e</b> или <b>ö</b></td>
            <td><b>kertet, könyvet, gyümölcsöt</b></td>
          </tr>
        </table>

        <div class="note">
          Гармония помогает выбрать семейство гласных: заднее или переднее.
          Но она не решает две вещи:
          <ol class="tasklist mt-2">
            <li>нужна ли соединительная гласная вообще: <b>tanárt</b>, но <b>házat</b>;</li>
            <li>какая точная гласная нужна внутри семейства: <b>házat</b>, но <b>ablakot</b>; <b>könyvet</b>, но <b>gyümölcsöt</b>.</li>
          </ol>
        </div>

        <div class="warn">
          В слове <b>könyv</b> есть огублённая гласная <b>ö</b>,
          но правильная форма — <b>könyvet</b>.
          Поэтому правило «огублённая гласная всегда даёт -öt» неверно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Частотные словарные изменения основы</h4>

        <p>
          У некоторых частотных слов перед окончанием меняется долгота
          или форма гласной основы. На уровне A1 эти пары не обобщаем на все слова,
          а узнаём и запоминаем целиком.
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Винительный падеж</th><th>Что изменилось</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="út" data-speak-lang="hu-HU">út</button></td>
            <td><button class="speak-btn" data-speak-text="utat" data-speak-lang="hu-HU">utat</button></td>
            <td><b>ú → u</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="víz" data-speak-lang="hu-HU">víz</button></td>
            <td><button class="speak-btn" data-speak-text="vizet" data-speak-lang="hu-HU">vizet</button></td>
            <td><b>í → i</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kéz" data-speak-lang="hu-HU">kéz</button></td>
            <td><button class="speak-btn" data-speak-text="kezet" data-speak-lang="hu-HU">kezet</button></td>
            <td><b>é → e</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kenyér" data-speak-lang="hu-HU">kenyér</button></td>
            <td><button class="speak-btn" data-speak-text="kenyeret" data-speak-lang="hu-HU">kenyeret</button></td>
            <td><b>é → e</b></td>
          </tr>
        </table>

        <div class="note">
          Эти изменения нельзя переносить на все односложные или все похожие слова.
          Запоминайте: <b>út–utat, víz–vizet, kéz–kezet, kenyér–kenyeret</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка</h4>

        <p>Исправьте формы:</p>
        <ol class="tasklist">
          <li><s>almat</s></li>
          <li><s>könyvöt</s></li>
          <li><s>házot</s></li>
          <li><s>tanárat</s></li>
          <li><s>gyümölcset</s></li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>almát</b></li>
            <li><b>könyvet</b></li>
            <li><b>házat</b></li>
            <li><b>tanárt</b></li>
            <li><b>gyümölcsöt</b></li>
          </ol>
        </details>

        <div class="note">
          <b>Итог:</b> ищите не «одну универсальную формулу», а модель слова.
          Учите словарную форму вместе с винительным падежом:
          <b>alma–almát, tanár–tanárt, ház–házat, könyv–könyvet</b>.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 7 · 3/11 · ЧАСТЫЕ ФОРМЫ',
      title: 'Alakok együtt',
      subtitle: 'Словарная форма → форма дополнения → короткая фраза',
      type: 'practice',
      note: 'На этом слайде не выводим новые окончания: используем модели из 7.2 и закрепляем готовые пары в предложениях. Форма должна узнаваться не изолированно, а после вопроса Kit? или Mit?',
      warn: 'Формы látok и látom здесь даются как готовые фразовые модели. Полная система неопределённого и определённого спряжения изучается позже. Сейчас важно различать объект с egy и конкретный объект с a/az.',
      task: 'Прочитайте каждую тройку вслух. Затем закройте второй столбец, восстановите форму дополнения и составьте короткое предложение. После этого выполните проверяемую практику.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Учим не одно слово, а тройку</h4>

        <p>
          Полезная единица запоминания:
          <strong>словарная форма → форма прямого дополнения → короткое предложение</strong>.
          Так окончание сразу связывается со смыслом и глаголом.
        </p>

        <table class="conj">
          <tr>
            <th>Словарная форма</th>
            <th>Kit? / Mit?</th>
            <th>Модель в предложении</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kutya" data-speak-lang="hu-HU">kutya</button></td>
            <td><button class="speak-btn" data-speak-text="kutyát" data-speak-lang="hu-HU">kutyát</button></td>
            <td><button class="speak-btn" data-speak-text="Látok egy kutyát." data-speak-lang="hu-HU">Látok egy kutyát.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU">alma</button></td>
            <td><button class="speak-btn" data-speak-text="almát" data-speak-lang="hu-HU">almát</button></td>
            <td><button class="speak-btn" data-speak-text="Veszek egy almát." data-speak-lang="hu-HU">Veszek egy almát.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button></td>
            <td><button class="speak-btn" data-speak-text="autót" data-speak-lang="hu-HU">autót</button></td>
            <td><button class="speak-btn" data-speak-text="Látok egy autót." data-speak-lang="hu-HU">Látok egy autót.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU">tanár</button></td>
            <td><button class="speak-btn" data-speak-text="tanárt" data-speak-lang="hu-HU">tanárt</button></td>
            <td><button class="speak-btn" data-speak-text="Látom a tanárt." data-speak-lang="hu-HU">Látom a tanárt.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kert" data-speak-lang="hu-HU">kert</button></td>
            <td><button class="speak-btn" data-speak-text="kertet" data-speak-lang="hu-HU">kertet</button></td>
            <td><button class="speak-btn" data-speak-text="Látom a kertet." data-speak-lang="hu-HU">Látom a kertet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button></td>
            <td><button class="speak-btn" data-speak-text="könyvet" data-speak-lang="hu-HU">könyvet</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">ház</button></td>
            <td><button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU">házat</button></td>
            <td><button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">Látom a házat.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="asztal" data-speak-lang="hu-HU">asztal</button></td>
            <td><button class="speak-btn" data-speak-text="asztalt" data-speak-lang="hu-HU">asztalt</button></td>
            <td><button class="speak-btn" data-speak-text="Látom az asztalt." data-speak-lang="hu-HU">Látom az asztalt.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Две безопасные фразовые модели</h4>

        <div class="grid2 my-4">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58] mb-2">Один / какой-то предмет</div>
            <p class="mb-2"><b>egy + форма на -t</b></p>
            <ul class="tick">
              <li><b>Látok egy kutyát.</b></li>
              <li><b>Veszek egy almát.</b></li>
              <li><b>Olvasok egy könyvet.</b></li>
            </ul>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#57121C] mb-2">Конкретный известный предмет</div>
            <p class="mb-2"><b>a/az + форма на -t</b></p>
            <ul class="tick">
              <li><b>Látom a tanárt.</b></li>
              <li><b>Látom a kertet.</b></li>
              <li><b>Látom az asztalt.</b></li>
            </ul>
          </div>
        </div>

        <div class="note">
          На этом этапе запоминайте эти предложения как цельные модели.
          Не нужно пока строить полную таблицу определённого спряжения:
          системно она изучается позже.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Вопрос показывает роль слова</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Короткий ответ</th><th>Полный ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kit látsz?" data-speak-lang="hu-HU">Kit látsz?</button><br><small>Кого ты видишь?</small></td>
            <td><button class="speak-btn" data-speak-text="A tanárt." data-speak-lang="hu-HU">A tanárt.</button></td>
            <td><button class="speak-btn" data-speak-text="A tanárt látom." data-speak-lang="hu-HU">A tanárt látom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit olvasol?" data-speak-lang="hu-HU">Mit olvasol?</button><br><small>Что ты читаешь?</small></td>
            <td><button class="speak-btn" data-speak-text="Egy könyvet." data-speak-lang="hu-HU">Egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">Egy könyvet olvasok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit veszel?" data-speak-lang="hu-HU">Mit veszel?</button><br><small>Что ты покупаешь?</small></td>
            <td><button class="speak-btn" data-speak-text="Egy almát." data-speak-lang="hu-HU">Egy almát.</button></td>
            <td><button class="speak-btn" data-speak-text="Egy almát veszek." data-speak-lang="hu-HU">Egy almát veszek.</button></td>
          </tr>
        </table>

        <div class="note">
          Короткие ответы <b>A tanárt</b>, <b>Egy könyvet</b> и <b>Egy almát</b>
          естественны, потому что вопрос уже называет действие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Правильно</th><th>Почему</th></tr>
          <tr>
            <td><s>Látok egy kutya.</s></td>
            <td><b>Látok egy kutyát.</b></td>
            <td>После látok нужен объект: mit? → kutyát.</td>
          </tr>
          <tr>
            <td><s>Látom a tanár.</s></td>
            <td><b>Látom a tanárt.</b></td>
            <td>Конкретный учитель — прямое дополнение.</td>
          </tr>
          <tr>
            <td><s>Látom a asztalt.</s></td>
            <td><b>Látom az asztalt.</b></td>
            <td>Перед гласной используется артикль az.</td>
          </tr>
          <tr>
            <td><s>Olvasok egy könyvöt.</s></td>
            <td><b>Olvasok egy könyvet.</b></td>
            <td>Правильная словарная пара: könyv → könyvet.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Активное восстановление</h4>

        <ol class="tasklist">
          <li>Закройте второй столбец и восстановите восемь форм дополнения.</li>
          <li>Для каждой формы задайте вопрос <b>Kit?</b> или <b>Mit?</b>.</li>
          <li>Составьте три фразы с <b>egy</b> и три фразы с <b>a/az</b>.</li>
          <li>Только после устной попытки откройте таблицу и проверьте себя.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка</summary>
          <ol class="tasklist mt-3">
            <li><b>kutya → ?</b></li>
            <li><b>ház → ?</b></li>
            <li>Напишите: «Я читаю одну / какую-то книгу».</li>
            <li>Ответьте кратко: <b>Kit látsz?</b> — «Учителя».</li>
          </ol>
          <div class="mt-3">
            Ответы: <b>kutyát; házat; Olvasok egy könyvet.; A tanárt.</b>
          </div>
        </details>

        <div class="note">
          <b>Цель слайда:</b> увидеть словарную форму и без подсказки
          восстановить объектную форму и естественную короткую фразу.
        </div>
      `,
      activities: [L7_CP_FORMS],
    },
    {
      id: 4,
      eyebrow: 'УРОК 7 · 4/11 · МЕСТОИМЕНИЯ',
      title: 'A személyes névmások tárgyesete',
      subtitle: 'Кого? Меня, тебя, его/её, нас, вас, их',
      type: 'info',
      note: 'У личных местоимений нет одной общей модели «добавить -t». Формы винительного падежа нужно выучить как отдельный ряд и сразу закреплять в коротких предложениях.',
      warn: 'Не делайте вывод, что пропущенное местоимение всегда однозначно определяется формой глагола. В формуле Péternek hívnak значение «меня» восстанавливается из устойчивой ситуации представления и контекста; форма hívnak сама по себе не кодирует объект первого лица.',
      task: 'Выучите шесть пар, затем восстановите объектную форму по русскому значению и используйте её в одном коротком предложении. После этого сравните нейтральную и подчёркнутую форму.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Почему формы нужно учить отдельно</h4>

        <p>
          Обычное существительное образует винительный падеж с показателем <b>-t</b>:
          <b>könyv → könyvet</b>.
          У личных местоимений нет единой прозрачной формулы для всего ряда.
          Поэтому запоминайте готовые пары.
        </p>

        <table class="conj">
          <tr>
            <th>Именительный падеж</th>
            <th>Кто?</th>
            <th>Винительный падеж</th>
            <th>Кого?</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU">én</button></td>
            <td>я</td>
            <td><button class="speak-btn" data-speak-text="engem" data-speak-lang="hu-HU">engem</button></td>
            <td>меня</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="te" data-speak-lang="hu-HU">te</button></td>
            <td>ты</td>
            <td><button class="speak-btn" data-speak-text="téged" data-speak-lang="hu-HU">téged</button></td>
            <td>тебя</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU">ő</button></td>
            <td>он / она</td>
            <td><button class="speak-btn" data-speak-text="őt" data-speak-lang="hu-HU">őt</button></td>
            <td>его / её</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mi" data-speak-lang="hu-HU">mi</button></td>
            <td>мы</td>
            <td><button class="speak-btn" data-speak-text="minket" data-speak-lang="hu-HU">minket</button></td>
            <td>нас</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ti" data-speak-lang="hu-HU">ti</button></td>
            <td>вы, неофициально, нескольким людям</td>
            <td><button class="speak-btn" data-speak-text="titeket" data-speak-lang="hu-HU">titeket</button></td>
            <td>вас</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ők" data-speak-lang="hu-HU">ők</button></td>
            <td>они</td>
            <td><button class="speak-btn" data-speak-text="őket" data-speak-lang="hu-HU">őket</button></td>
            <td>их</td>
          </tr>
        </table>

        <div class="note">
          Венгерское <b>ő</b> не различает «он» и «она».
          Поэтому <b>őt</b> означает и «его», и «её»;
          точное значение сообщает контекст.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Формы в коротких предложениях</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th><th>На что обратить внимание</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Engem keresel?" data-speak-lang="hu-HU">Engem keresel?</button></td>
            <td>Ты ищешь меня?</td>
            <td><b>engem</b> — объект, не <s>én</s></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Téged várnak." data-speak-lang="hu-HU">Téged várnak.</button></td>
            <td>Тебя ждут.</td>
            <td><b>téged</b> — тебя</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Őt látom." data-speak-lang="hu-HU">Őt látom.</button></td>
            <td>Я вижу его / её.</td>
            <td>пол не выражен формой <b>őt</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Minket hívnak." data-speak-lang="hu-HU">Minket hívnak.</button></td>
            <td>Нас зовут / вызывают.</td>
            <td><b>minket</b> — нас</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Titeket keresnek." data-speak-lang="hu-HU">Titeket keresnek.</button></td>
            <td>Вас ищут.</td>
            <td>неофициально о нескольких людях</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Őket ismerem." data-speak-lang="hu-HU">Őket ismerem.</button></td>
            <td>Я знаю их.</td>
            <td><b>őket</b> — их</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Kit? — кого?</h4>

        <p>
          Когда речь идёт о человеке как о прямом дополнении,
          задаём вопрос <b>Kit?</b> — «кого?».
        </p>

        <table class="conj">
          <tr><th>Вопрос</th><th>Короткий ответ</th><th>Полный ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kit keresel?" data-speak-lang="hu-HU">Kit keresel?</button></td>
            <td><button class="speak-btn" data-speak-text="Őt." data-speak-lang="hu-HU">Őt.</button></td>
            <td><button class="speak-btn" data-speak-text="Őt keresem." data-speak-lang="hu-HU">Őt keresem.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kit várnak?" data-speak-lang="hu-HU">Kit várnak?</button></td>
            <td><button class="speak-btn" data-speak-text="Téged." data-speak-lang="hu-HU">Téged.</button></td>
            <td><button class="speak-btn" data-speak-text="Téged várnak." data-speak-lang="hu-HU">Téged várnak.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kit ismersz?" data-speak-lang="hu-HU">Kit ismersz?</button></td>
            <td><button class="speak-btn" data-speak-text="Őket." data-speak-lang="hu-HU">Őket.</button></td>
            <td><button class="speak-btn" data-speak-text="Őket ismerem." data-speak-lang="hu-HU">Őket ismerem.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Когда местоимение можно не произносить</h4>

        <p>
          Венгерский часто опускает местоимение, если участник уже понятен из ситуации.
          Однако пропуск не означает, что объект всегда записан внутри глагольного окончания.
        </p>

        <div class="grid2 my-4">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58] mb-2">Обычная формула представления</div>
            <button class="speak-btn" data-speak-text="Péternek hívnak." data-speak-lang="hu-HU">Péternek hívnak.</button>
            <div class="mt-2">Меня зовут Петер.</div>
            <div class="text-xs text-[#8A7A68] mt-2">
              Значение «меня» понятно из ситуации самопредставления.
            </div>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#57121C] mb-2">Явное выделение объекта</div>
            <button class="speak-btn" data-speak-text="Engem Péternek hívnak." data-speak-lang="hu-HU">Engem Péternek hívnak.</button>
            <div class="mt-2">Именно меня зовут Петер.</div>
            <div class="text-xs text-[#8A7A68] mt-2">
              <b>engem</b> добавляет явное выделение или противопоставление.
            </div>
          </div>
        </div>

        <div class="warn">
          Не учите правило «hívnak уже означает меня».
          Вне ситуации представления форма <b>hívnak</b> может иметь другое значение.
          Нужный объект восстанавливается из контекста.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Нейтрально и с подчёркиванием</h4>

        <p>
          Личное местоимение часто произносится, когда объект нужно выделить,
          противопоставить или уточнить.
        </p>

        <table class="conj">
          <tr><th>Без специального контраста</th><th>С явным выделением</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Péternek hívnak." data-speak-lang="hu-HU">Péternek hívnak.</button></td>
            <td><button class="speak-btn" data-speak-text="Engem Péternek hívnak, nem őt." data-speak-lang="hu-HU">Engem Péternek hívnak, nem őt.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Látom őt." data-speak-lang="hu-HU">Látom őt.</button></td>
            <td><button class="speak-btn" data-speak-text="Őt látom, nem Pétert." data-speak-lang="hu-HU">Őt látom, nem Pétert.</button></td>
          </tr>
        </table>

        <div class="note">
          Оба варианта могут быть грамматически правильными.
          Порядок слов и произнесённое местоимение зависят от того,
          что говорящий хочет выделить.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Вежливое обращение</h4>

        <p>
          <b>te / ti</b> — неофициальные формы.
          Для вежливого обращения используются <b>Ön / Önök</b>,
          а в винительном падеже — <b>Önt / Önöket</b>.
        </p>

        <table class="conj">
          <tr><th>Кто?</th><th>Кого?</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ön" data-speak-lang="hu-HU">Ön</button></td>
            <td><button class="speak-btn" data-speak-text="Önt" data-speak-lang="hu-HU">Önt</button></td>
            <td><button class="speak-btn" data-speak-text="Önt keresem." data-speak-lang="hu-HU">Önt keresem.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Önök" data-speak-lang="hu-HU">Önök</button></td>
            <td><button class="speak-btn" data-speak-text="Önöket" data-speak-lang="hu-HU">Önöket</button></td>
            <td><button class="speak-btn" data-speak-text="Önöket várják." data-speak-lang="hu-HU">Önöket várják.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Правильно</th><th>Почему</th></tr>
          <tr>
            <td><s>Én keresel?</s></td>
            <td><b>Engem keresel?</b></td>
            <td>Нужна форма «меня», а не «я».</td>
          </tr>
          <tr>
            <td><s>Látom ő.</s></td>
            <td><b>Látom őt.</b></td>
            <td>Ő — «он/она», őt — «его/её».</td>
          </tr>
          <tr>
            <td><s>Mi hívnak.</s></td>
            <td><b>Minket hívnak.</b></td>
            <td>Нужна форма «нас».</td>
          </tr>
          <tr>
            <td><s>Ön keresem.</s></td>
            <td><b>Önt keresem.</b></td>
            <td>Вежливое «Вас» — Önt.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка</h4>

        <ol class="tasklist">
          <li>én → «меня»</li>
          <li>te → «тебя»</li>
          <li>mi → «нас»</li>
          <li>ők → «их»</li>
          <li>Переведите: «Они ждут тебя».</li>
          <li>Переведите вежливо: «Я ищу Вас».</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>engem</b></li>
            <li><b>téged</b></li>
            <li><b>minket</b></li>
            <li><b>őket</b></li>
            <li><b>Téged várnak.</b></li>
            <li><b>Önt keresem.</b></li>
          </ol>
        </details>

        <div class="note">
          На следующем слайде будет узкая специальная модель:
          <b>én → téged</b> с окончанием <b>-lak / -lek</b>:
          <b>Látlak. Szeretlek.</b>
        </div>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 7 · 5/11 · СПЕЦИАЛЬНАЯ ФОРМА',
      title: 'Látlak · Szeretlek',
      subtitle: 'én → te/ti: специальное окончание -lak/-lek',
      type: 'info',
      note: 'Форма -lak/-lek одновременно показывает подлежащее первого лица единственного числа — «я» — и прямое дополнение второго лица — «тебя» или «вас» при неофициальном обращении.',
      warn: 'Без явного местоимения форма обычно понимается как обращение к одному человеку: Látlak — «Я вижу тебя». Для нескольких людей добавьте titeket: Látlak titeket. Вежливые Ön и Önök грамматически относятся к третьему лицу, поэтому с ними используется не -lak/-lek.',
      task: 'Определите подлежащее и объект, выберите -lak или -lek, затем сравните формы для téged/titeket, őt и Önt. Полную систему спряжения на этом слайде не выводим.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Когда используется -lak/-lek</h4>

        <div class="grid2 my-4">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58] mb-2">Подлежащее</div>
            <div class="text-xl font-bold">én — я</div>
            <div class="text-sm text-[#8A7A68] mt-2">Действие выполняю я.</div>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#57121C] mb-2">Прямое дополнение</div>
            <div class="text-xl font-bold">téged / titeket</div>
            <div class="text-sm text-[#8A7A68] mt-2">Тебя или вас, неофициально.</div>
          </div>
        </div>

        <div class="note">
          Окончание <b>-lak/-lek</b> объединяет обе информации:
          <b>я → тебя/вас</b>.
          Поэтому <b>Látlak</b> уже содержит смысл «я вижу тебя».
        </div>

        <table class="conj">
          <tr><th>Основа</th><th>Форма</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lát" data-speak-lang="hu-HU">lát</button></td>
            <td><button class="speak-btn" data-speak-text="látlak" data-speak-lang="hu-HU">látlak</button></td>
            <td>я вижу тебя / вас</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szeret" data-speak-lang="hu-HU">szeret</button></td>
            <td><button class="speak-btn" data-speak-text="szeretlek" data-speak-lang="hu-HU">szeretlek</button></td>
            <td>я люблю тебя / вас</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Частые формы</h4>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Я → тебя/вас</th><th>Короткий пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lát" data-speak-lang="hu-HU">lát</button></td>
            <td><button class="speak-btn" data-speak-text="látlak" data-speak-lang="hu-HU">látlak</button></td>
            <td><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU">vár</button></td>
            <td><button class="speak-btn" data-speak-text="várlak" data-speak-lang="hu-HU">várlak</button></td>
            <td><button class="speak-btn" data-speak-text="Várlak." data-speak-lang="hu-HU">Várlak.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hall" data-speak-lang="hu-HU">hall</button></td>
            <td><button class="speak-btn" data-speak-text="hallak" data-speak-lang="hu-HU">hallak</button></td>
            <td><button class="speak-btn" data-speak-text="Jól hallak." data-speak-lang="hu-HU">Jól hallak.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hív" data-speak-lang="hu-HU">hív</button></td>
            <td><button class="speak-btn" data-speak-text="hívlak" data-speak-lang="hu-HU">hívlak</button></td>
            <td><button class="speak-btn" data-speak-text="Holnap hívlak." data-speak-lang="hu-HU">Holnap hívlak.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szeret" data-speak-lang="hu-HU">szeret</button></td>
            <td><button class="speak-btn" data-speak-text="szeretlek" data-speak-lang="hu-HU">szeretlek</button></td>
            <td><button class="speak-btn" data-speak-text="Szeretlek." data-speak-lang="hu-HU">Szeretlek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU">kér</button></td>
            <td><button class="speak-btn" data-speak-text="kérlek" data-speak-lang="hu-HU">kérlek</button></td>
            <td><button class="speak-btn" data-speak-text="Kérlek, segíts." data-speak-lang="hu-HU">Kérlek, segíts.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ért" data-speak-lang="hu-HU">ért</button></td>
            <td><button class="speak-btn" data-speak-text="értelek" data-speak-lang="hu-HU">értelek</button></td>
            <td><button class="speak-btn" data-speak-text="Értelek." data-speak-lang="hu-HU">Értelek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ismer" data-speak-lang="hu-HU">ismer</button></td>
            <td><button class="speak-btn" data-speak-text="ismerlek" data-speak-lang="hu-HU">ismerlek</button></td>
            <td><button class="speak-btn" data-speak-text="Ismerlek." data-speak-lang="hu-HU">Ismerlek.</button></td>
          </tr>
        </table>

        <div class="note">
          Выбор <b>-lak</b> или <b>-lek</b> связан с гармонией гласных,
          но точную форму лучше учить вместе с глаголом.
          Особенно не пытайтесь выводить <b>hívlak</b> только по букве <b>í</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Нужно ли произносить téged или titeket?</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Значение</th><th>Когда употреблять</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></td>
            <td>Я вижу тебя.</td>
            <td>Нейтрально; обычно об одном собеседнике.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Látlak téged." data-speak-lang="hu-HU">Látlak téged.</button></td>
            <td>Я вижу именно тебя.</td>
            <td>Уточнение, выделение или противопоставление.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Látlak titeket." data-speak-lang="hu-HU">Látlak titeket.</button></td>
            <td>Я вижу вас.</td>
            <td>Несколько людей; titeket уточняет число объекта.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Én látlak téged." data-speak-lang="hu-HU">Én látlak téged.</button></td>
            <td>Именно я вижу именно тебя.</td>
            <td>Выделено и подлежащее, и дополнение.</td>
          </tr>
        </table>

        <div class="warn">
          Форма <b>-lak/-lek</b> сама не различает единственное и множественное число объекта.
          Без местоимения обычно понимается «тебя».
          Для значения «вас» безопасно добавляйте <b>titeket</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Неофициальное и вежливое «вы»</h4>

        <p>
          <b>-lak/-lek</b> относится к неофициальным <b>te/ti</b>.
          Вежливые <b>Ön/Önök</b> требуют формы для объекта третьего лица.
        </p>

        <table class="conj">
          <tr><th>Объект</th><th>Правильная фраза</th><th>Нельзя</th></tr>
          <tr>
            <td>тебя, неофициально</td>
            <td><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></td>
            <td>—</td>
          </tr>
          <tr>
            <td>вас, несколько знакомых людей</td>
            <td><button class="speak-btn" data-speak-text="Látlak titeket." data-speak-lang="hu-HU">Látlak titeket.</button></td>
            <td>—</td>
          </tr>
          <tr>
            <td>Вас, вежливо, один человек</td>
            <td><button class="speak-btn" data-speak-text="Látom Önt." data-speak-lang="hu-HU">Látom Önt.</button></td>
            <td><s>Látlak Önt.</s></td>
          </tr>
          <tr>
            <td>Вас, вежливо, несколько человек</td>
            <td><button class="speak-btn" data-speak-text="Látom Önöket." data-speak-lang="hu-HU">Látom Önöket.</button></td>
            <td><s>Látlak Önöket.</s></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Сравните объект</h4>

        <table class="conj">
          <tr><th>Кого / что я вижу?</th><th>Форма</th></tr>
          <tr>
            <td>тебя, неофициально</td>
            <td><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></td>
          </tr>
          <tr>
            <td>его / её</td>
            <td><button class="speak-btn" data-speak-text="Látom őt." data-speak-lang="hu-HU">Látom őt.</button></td>
          </tr>
          <tr>
            <td>Вас, вежливо</td>
            <td><button class="speak-btn" data-speak-text="Látom Önt." data-speak-lang="hu-HU">Látom Önt.</button></td>
          </tr>
          <tr>
            <td>дом</td>
            <td><button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">Látom a házat.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Отрицание и вопрос</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>утверждение</td>
            <td><button class="speak-btn" data-speak-text="Értelek." data-speak-lang="hu-HU">Értelek.</button></td>
            <td>Я тебя понимаю.</td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Nem értelek." data-speak-lang="hu-HU">Nem értelek.</button></td>
            <td>Я тебя не понимаю.</td>
          </tr>
          <tr>
            <td>проверка понимания</td>
            <td><button class="speak-btn" data-speak-text="Jól értelek?" data-speak-lang="hu-HU">Jól értelek?</button></td>
            <td>Я правильно тебя понимаю?</td>
          </tr>
          <tr>
            <td>слышимость</td>
            <td><button class="speak-btn" data-speak-text="Jól hallak." data-speak-lang="hu-HU">Jól hallak.</button></td>
            <td>Я тебя хорошо слышу.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Правильно</th><th>Почему</th></tr>
          <tr>
            <td><s>Látom téged.</s></td>
            <td><b>Látlak.</b> / <b>Látlak téged.</b></td>
            <td>При én → téged нужна специальная форма.</td>
          </tr>
          <tr>
            <td><s>Látlak őt.</s></td>
            <td><b>Látom őt.</b></td>
            <td>Őt — объект третьего лица.</td>
          </tr>
          <tr>
            <td><s>Szeretlak.</s></td>
            <td><b>Szeretlek.</b></td>
            <td>У этого глагола используется -lek.</td>
          </tr>
          <tr>
            <td><s>Látlek.</s></td>
            <td><b>Látlak.</b></td>
            <td>У lát используется -lak.</td>
          </tr>
          <tr>
            <td><s>Látlak Önt.</s></td>
            <td><b>Látom Önt.</b></td>
            <td>Ön — вежливая форма третьего лица.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка</h4>

        <ol class="tasklist">
          <li>vár + téged → ?</li>
          <li>szeret + téged → ?</li>
          <li>Переведите: «Я тебя понимаю».</li>
          <li>Переведите: «Я вижу вас», нескольким знакомым людям.</li>
          <li>Переведите: «Я вижу его / её».</li>
          <li>Переведите вежливо: «Я вижу Вас».</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>várlak</b></li>
            <li><b>szeretlek</b></li>
            <li><b>Értelek.</b></li>
            <li><b>Látlak titeket.</b></li>
            <li><b>Látom őt.</b></li>
            <li><b>Látom Önt.</b></li>
          </ol>
        </details>

        <div class="note">
          <b>Итог:</b> используйте <b>-lak/-lek</b> только в узкой модели
          <b>én → te/ti</b>. Для объекта третьего лица или вежливого обращения
          выбирается другая форма глагола.
        </div>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 7 · 6/11 · ПОРЯДОК СЛОВ',
      title: 'A tárgy a mondatban',
      subtitle: 'Роль показывает форма, порядок слов показывает контекст и фокус',
      type: 'info',
      note: 'Венгерское окончание винительного падежа сохраняет роль прямого дополнения даже при изменении порядка слов. Позиция слова чаще сообщает, что уже известно, что является новой информацией и что говорящий выделяет.',
      warn: 'Не считайте любой объект перед глаголом автоматически контрастным фокусом. На этом слайде фокус показывается только в ясных моделях с противопоставлением: A könyvet olvasom, nem az újságot.',
      task: 'Сначала используйте безопасные нейтральные модели. Затем сравните нейтральное предложение с контрастным и объясните, что изменилось: грамматическая роль или фокус.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Роль слова показывает не только позиция</h4>

        <p>
          В русском порядок слов сильно помогает распознать подлежащее и дополнение.
          В венгерском важную роль играет форма слова.
          Прямое дополнение отвечает на <b>Kit?</b> или <b>Mit?</b>
          и обычно имеет показатель винительного падежа.
        </p>

        <table class="conj">
          <tr><th>Предложение</th><th>Кто выполняет действие?</th><th>Что является объектом?</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A fiú olvas." data-speak-lang="hu-HU">A fiú olvas.</button></td>
            <td><b>a fiú</b> — мальчик</td>
            <td>объекта нет</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A fiú könyvet olvas." data-speak-lang="hu-HU">A fiú könyvet olvas.</button></td>
            <td><b>a fiú</b></td>
            <td><b>könyvet</b> — книгу</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna látja Pétert." data-speak-lang="hu-HU">Anna látja Pétert.</button></td>
            <td><b>Anna</b></td>
            <td><b>Pétert</b></td>
          </tr>
        </table>

        <div class="note">
          Сравните <b>Anna</b> и <b>Annát</b>:
          <b>Anna</b> может быть подлежащим,
          а <b>Annát</b> — формой «Анну» как прямого дополнения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Безопасная нейтральная модель для начала</h4>

        <p>
          Для первого самостоятельного построения используйте модель:
          <b>подлежащее + глагол + дополнение</b>.
          Это удобная отправная точка, но не единственно возможный порядок слов.
        </p>

        <table class="conj">
          <tr><th>Модель</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>подлежащее + глагол + дополнение</td>
            <td><button class="speak-btn" data-speak-text="Péter olvas egy könyvet." data-speak-lang="hu-HU">Péter olvas egy könyvet.</button></td>
            <td>Петер читает одну / какую-то книгу.</td>
          </tr>
          <tr>
            <td>подлежащее + глагол + дополнение</td>
            <td><button class="speak-btn" data-speak-text="Nóra vesz egy almát." data-speak-lang="hu-HU">Nóra vesz egy almát.</button></td>
            <td>Нора покупает одно яблоко.</td>
          </tr>
          <tr>
            <td>подлежащее + глагол + дополнение</td>
            <td><button class="speak-btn" data-speak-text="Péter látja Annát." data-speak-lang="hu-HU">Péter látja Annát.</button></td>
            <td>Петер видит Анну.</td>
          </tr>
        </table>

        <div class="warn">
          Эта схема — учебная опора, а не жёсткий закон.
          Венгерский порядок слов меняется в зависимости от темы,
          новой информации и фокуса.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Подлежащее часто можно опустить</h4>

        <p>
          Личное окончание глагола часто показывает лицо,
          поэтому отдельное местоимение <b>én</b> в нейтральной фразе обычно не требуется.
        </p>

        <table class="conj">
          <tr><th>Нейтрально</th><th>С явным местоимением</th><th>Зачем произносить местоимение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td><button class="speak-btn" data-speak-text="Én olvasok egy könyvet." data-speak-lang="hu-HU">Én olvasok egy könyvet.</button></td>
            <td>én возможно, но без контраста часто избыточно</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
            <td><button class="speak-btn" data-speak-text="Én kérek egy kávét." data-speak-lang="hu-HU">Én kérek egy kávét.</button></td>
            <td>выделение: именно я</td>
          </tr>
        </table>

        <div class="note">
          Контраст делает местоимение естественным:
          <button class="speak-btn" data-speak-text="Én olvasok, ő pedig ír." data-speak-lang="hu-HU">Én olvasok, ő pedig ír.</button>
          — «Я читаю, а он или она пишет».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Нейтральные готовые фразы с объектом</h4>

        <p>
          В нейтральном сообщении объект часто можно встретить после глагола.
          Учите следующие предложения как готовые модели,
          не выводя пока полную систему спряжения.
        </p>

        <table class="conj">
          <tr><th>Модель</th><th>Пример</th><th>Что сообщает объект</th></tr>
          <tr>
            <td><b>egy + объект</b></td>
            <td><button class="speak-btn" data-speak-text="Keresek egy könyvet." data-speak-lang="hu-HU">Keresek egy könyvet.</button></td>
            <td>ищу одну / какую-то книгу</td>
          </tr>
          <tr>
            <td><b>egy + объект</b></td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>читаю одну / какую-то книгу</td>
          </tr>
          <tr>
            <td><b>a/az + объект</b></td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>читаю конкретную / известную книгу</td>
          </tr>
          <tr>
            <td>имя как объект</td>
            <td><button class="speak-btn" data-speak-text="Látom Annát." data-speak-lang="hu-HU">Látom Annát.</button></td>
            <td>вижу Анну</td>
          </tr>
          <tr>
            <td><b>a/az + объект</b></td>
            <td><button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">Látom a házat.</button></td>
            <td>вижу конкретный дом</td>
          </tr>
        </table>

        <div class="note">
          Пока запоминайте две модели:
          <b>Olvasok egy könyvet</b> и <b>Olvasom a könyvet</b>.
          Полную систему неопределённого и определённого спряжения изучим отдельно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Контрастный фокус перед глаголом</h4>

        <p>
          Если объект противопоставляется другому объекту,
          выделяемая часть ставится непосредственно перед глаголом.
        </p>

        <table class="conj">
          <tr><th>Контрастная модель</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A könyvet olvasom, nem az újságot." data-speak-lang="hu-HU">A könyvet olvasom, nem az újságot.</button></td>
            <td>Именно книгу я читаю, а не газету.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Annát látom, nem Pétert." data-speak-lang="hu-HU">Annát látom, nem Pétert.</button></td>
            <td>Именно Анну я вижу, а не Петера.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy almát veszek, nem egy körtét." data-speak-lang="hu-HU">Egy almát veszek, nem egy körtét.</button></td>
            <td>Я покупаю яблоко, а не грушу.</td>
          </tr>
        </table>

        <div class="warn">
          Не переносите это объяснение на любой объект перед глаголом.
          Здесь фокус ясен благодаря прямому противопоставлению с <b>nem</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Роль сохраняется при перемещении</h4>

        <table class="conj">
          <tr><th>Предложение</th><th>Роль Annát</th><th>Информационный эффект</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Látom Annát." data-speak-lang="hu-HU">Látom Annát.</button></td>
            <td>прямое дополнение</td>
            <td>нейтральная готовая фраза</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Annát látom." data-speak-lang="hu-HU">Annát látom.</button></td>
            <td>прямое дополнение</td>
            <td>контекст может выделять Анну</td>
          </tr>
        </table>

        <div class="note">
          Окончание <b>-t</b> не исчезает:
          <b>Annát</b> остаётся формой «Анну» в обоих предложениях.
          Меняется не грамматическая роль, а информационный акцент.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно или неточно</th><th>Правильно</th><th>Комментарий</th></tr>
          <tr>
            <td><s>A fiú könyv olvas.</s></td>
            <td><b>A fiú könyvet olvas.</b></td>
            <td>Объект требует формы винительного падежа.</td>
          </tr>
          <tr>
            <td><s>Látom Anna.</s></td>
            <td><b>Látom Annát.</b></td>
            <td>Имя как прямое дополнение получает -t.</td>
          </tr>
          <tr>
            <td><s>Olvasok a könyvet.</s></td>
            <td><b>Olvasom a könyvet.</b></td>
            <td>На этом уровне запоминаем готовую модель с конкретной книгой.</td>
          </tr>
          <tr>
            <td>«Объект перед глаголом всегда является фокусом»</td>
            <td><b>Фокус определяет контекст.</b></td>
            <td>В наших примерах контраст явно выражен через nem.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Кто и что в предложении: <b>Anna látja Pétert</b>?</li>
          <li>Скажите без местоимения: «Я читаю одну / какую-то книгу».</li>
          <li>Скажите: «Я читаю конкретную книгу».</li>
          <li>Противопоставьте: «Именно Анну я вижу, а не Петера».</li>
          <li>Объясните, почему <b>Annát</b> остаётся объектом в фразе <b>Annát látom</b>.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>Anna</b> — подлежащее; <b>Pétert</b> — прямое дополнение.</li>
            <li><b>Olvasok egy könyvet.</b></li>
            <li><b>Olvasom a könyvet.</b></li>
            <li><b>Annát látom, nem Pétert.</b></li>
            <li>Потому что окончание <b>-t</b> сохраняет объектную форму.</li>
          </ol>
        </details>

        <div class="note">
          <b>Итог:</b> используйте нейтральные модели как опору,
          распознавайте объект по форме и изучайте изменение порядка слов
          только вместе с конкретным контекстом.
        </div>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 7 · 7/11 · ЧТЕНИЕ',
      title: 'Bevásárlás vacsorához',
      subtitle: 'Находим действия, дополнения и логику связного рассказа',
      type: 'practice',
      note: 'Полный рассказ находится в задании ниже. Озвучка не читает его вместо ученика и не раскрывает ответы: цель — самостоятельно понять связный текст, найти доказательства и распознать формы прямого дополнения.',
      warn: 'Не каждое название продукта является прямым дополнением и не каждый упомянутый продукт Нора покупает. Сначала определите глагол и смысл действия, а затем решайте, какую роль выполняет существительное.',
      task: 'Прочитайте рассказ без словаря, распределите информацию по четырём категориям, затем ответьте на семь вопросов и найдите в тексте подтверждение каждого ответа. Для зачёта нужно не менее 6 из 7.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Цель чтения</h4>

        <p>
          Здесь нужно понять не отдельные слова, а последовательность событий:
          что уже есть, чего не хватает, что героиня делает в магазине
          и чем заканчивается рассказ.
        </p>

        <div class="grid2 my-4">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58] mb-2">Содержание</div>
            <ul class="tick">
              <li>что уже есть дома;</li>
              <li>чего недостаточно или нет;</li>
              <li>что кладут в корзину или покупают;</li>
              <li>что не покупают или чем заменяют.</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#57121C] mb-2">Язык</div>
            <ul class="tick">
              <li>формы на <b>-t</b>;</li>
              <li>глаголы действия;</li>
              <li>отрицание <b>nem / nincs</b>;</li>
              <li>слова, связывающие события.</li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Карта четырёх категорий</h4>

        <table class="conj">
          <tr><th>Категория</th><th>Что записывать</th><th>Вопрос к тексту</th></tr>
          <tr>
            <td>Уже есть дома</td>
            <td>продукты, которые не нужно покупать</td>
            <td><b>Mi van már otthon?</b></td>
          </tr>
          <tr>
            <td>Не хватает / отсутствует</td>
            <td>продукт или группа продуктов, которых недостаточно</td>
            <td><b>Mi nincs, vagy miből nincs elég?</b></td>
          </tr>
          <tr>
            <td>Покупает</td>
            <td>то, что действительно кладёт в корзину или берёт</td>
            <td><b>Mit vesz?</b></td>
          </tr>
          <tr>
            <td>Не покупает / заменяет</td>
            <td>отказ, отсутствие товара и выбранная замена</td>
            <td><b>Mit nem vesz? Mit választ helyette?</b></td>
          </tr>
        </table>

        <div class="note">
          Не заполняйте категории по одному упоминанию слова.
          Например, слово может появиться в тексте как то,
          что Нора ищет, но это ещё не доказывает, что она его купила.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Слова, которые показывают структуру рассказа</h4>

        <table class="conj">
          <tr><th>Сигнал в тексте</th><th>Функция</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Otthon már van..." data-speak-lang="hu-HU">Otthon már van...</button></td>
            <td>исходная ситуация</td>
            <td>Дома уже есть…</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="de nincs elég..." data-speak-lang="hu-HU">de nincs elég...</button></td>
            <td>проблема</td>
            <td>но недостаточно…</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button></td>
            <td>следствие</td>
            <td>поэтому</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nem vesz, mert..." data-speak-lang="hu-HU">nem vesz, mert...</button></td>
            <td>отказ и причина</td>
            <td>не покупает, потому что…</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nem talál" data-speak-lang="hu-HU">nem talál</button></td>
            <td>неудачный поиск</td>
            <td>не находит</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="helyette" data-speak-lang="hu-HU">helyette</button></td>
            <td>замена</td>
            <td>вместо этого / вместо него</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="utána" data-speak-lang="hu-HU">utána</button></td>
            <td>следующий этап</td>
            <td>после этого</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Мини-словарь перед чтением</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vacsora" data-speak-lang="hu-HU">vacsora</button></td>
            <td>ужин</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kosár" data-speak-lang="hu-HU">kosár</button></td>
            <td>корзина</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="hűtő" data-speak-lang="hu-HU">hűtő</button></td>
            <td>холодильник / холодильная витрина</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="eladó" data-speak-lang="hu-HU">eladó</button></td>
            <td>продавец</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="csomag" data-speak-lang="hu-HU">csomag</button></td>
            <td>упаковка</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="elég" data-speak-lang="hu-HU">elég</button></td>
            <td>достаточно</td>
          </tr>
        </table>

        <div class="note">
          Этот словарь помогает начать чтение, но не заменяет работу с контекстом.
          Незнакомое слово сначала попробуйте понять по соседним действиям.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как распознавать прямое дополнение</h4>

        <p>
          Сначала найдите глагол, затем задайте вопрос <b>Kit?</b> или <b>Mit?</b>.
          В тексте встречаются действия разных типов.
        </p>

        <table class="conj">
          <tr><th>Глагол</th><th>Что искать рядом</th><th>Что это помогает понять</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="készít" data-speak-lang="hu-HU">készít</button></td>
            <td>что готовит?</td>
            <td>цель действия</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tesz" data-speak-lang="hu-HU">tesz</button></td>
            <td>что кладёт?</td>
            <td>что попадает в корзину</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vesz" data-speak-lang="hu-HU">vesz</button></td>
            <td>что покупает?</td>
            <td>фактическая покупка</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="keres" data-speak-lang="hu-HU">keres</button></td>
            <td>что ищет?</td>
            <td>намерение, но ещё не результат</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="talál" data-speak-lang="hu-HU">talál</button></td>
            <td>что находит?</td>
            <td>результат поиска</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ajánl" data-speak-lang="hu-HU">ajánl</button></td>
            <td>что предлагает?</td>
            <td>возможная замена</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU">kér</button></td>
            <td>что просит?</td>
            <td>заказ или просьба</td>
          </tr>
        </table>

        <div class="warn">
          Формы после <b>van / nincs</b> не нужно автоматически считать прямым дополнением:
          эти глаголы сообщают, что что-то есть или отсутствует.
          Поэтому анализируйте не только окончание, но и глагол.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Три абзаца — три этапа</h4>

        <ol class="tasklist">
          <li>
            <b>Первый абзац:</b>
            отделите то, что уже есть дома, от того, что оказывается в корзине.
          </li>
          <li>
            <b>Второй абзац:</b>
            найдите отсутствующий товар, разговор с продавцом и выбранную замену.
          </li>
          <li>
            <b>Третий абзац:</b>
            определите, что готовят и что происходит после основного блюда.
          </li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Стратегия выполнения</h4>

        <ol class="tasklist">
          <li>Прочитайте весь рассказ один раз без словаря.</li>
          <li>Во втором чтении отметьте четыре категории.</li>
          <li>Подчеркните глаголы действия и связанные с ними формы объекта.</li>
          <li>Прочитайте семь вопросов.</li>
          <li>Для каждого ответа найдите конкретное предложение-доказательство.</li>
          <li>Перепроверьте отрицания <b>nem / nincs</b> и слово <b>helyette</b>.</li>
        </ol>

        <div class="note">
          Для успешного выполнения нужно не менее <b>6 правильных ответов из 7</b>.
          Не угадывайте по отдельному слову: ответ должен подтверждаться смыслом предложения.
        </div>
      `,
      activities: [L7_READING],
    },
    {
      id: 8,
      eyebrow: 'УРОК 7 · 8/11 · АУДИРОВАНИЕ',
      title: 'Hallásértés',
      subtitle: 'Три прослушивания: общий смысл → пять действий → проверка',
      type: 'practice',
      note: 'Озвучка этого слайда содержит только инструкцию. Реальная проверяемая запись запускается отдельно в задании L7_LISTENING ниже. Транскрипт открывается только после отправки ответов.',
      warn: 'Не выбирайте вариант только потому, что слово выглядит знакомым. Ответ должен совпадать с глаголом, объектом и последовательностью событий в записи.',
      task: 'Прослушайте основную запись до трёх раз, ответьте на все пять вопросов и только после отправки откройте транскрипт. Для успешного результата нужно не менее 4 правильных ответов из 5.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Как устроено задание</h4>

        <div class="grid2 my-4">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58] mb-2">Озвучка слайда</div>
            <p>
              Объясняет стратегию выполнения.
              Она не является проверяемым текстом аудирования.
            </p>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#57121C] mb-2">Запись в задании ниже</div>
            <p>
              Содержит короткую ситуацию и пять проверяемых смысловых пунктов.
            </p>
          </div>
        </div>

        <div class="note">
          Сначала нажмите воспроизведение внутри задания
          <b>«Аудирование: формы дополнения»</b>.
          Не пытайтесь отвечать по озвучке этого информационного слайда.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Первое прослушивание — общий смысл</h4>

        <ol class="tasklist">
          <li>Слушайте от начала до конца без пауз.</li>
          <li>Не читайте транскрипт — он пока скрыт.</li>
          <li>Определите ситуацию и последовательность действий.</li>
          <li>Не пытайтесь запомнить каждое окончание.</li>
        </ol>

        <div class="note">
          После первого прослушивания вы должны понимать,
          что говорящий последовательно что-то ищет,
          получает рекомендацию, просит ещё один предмет,
          что-то видит и произносит короткую форму другу.
          Конкретные ответы восстановите на следующих этапах.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Второе прослушивание — пять действий</h4>

        <table class="conj">
          <tr><th>№</th><th>Что нужно услышать</th><th>На какой глагол опираться</th></tr>
          <tr>
            <td>1</td>
            <td>Что ищет говорящий?</td>
            <td><button class="speak-btn" data-speak-text="keresek" data-speak-lang="hu-HU">keresek</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Что рекомендует продавец?</td>
            <td><button class="speak-btn" data-speak-text="ajánlja" data-speak-lang="hu-HU">ajánlja</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Что ещё просит говорящий?</td>
            <td><button class="speak-btn" data-speak-text="kérek" data-speak-lang="hu-HU">kérek</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Что он видит?</td>
            <td><button class="speak-btn" data-speak-text="látom" data-speak-lang="hu-HU">látom</button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Какую короткую форму он говорит другу?</td>
            <td><button class="speak-btn" data-speak-text="azt mondom" data-speak-lang="hu-HU">azt mondom</button></td>
          </tr>
        </table>

        <div class="warn">
          Таблица показывает только ориентиры-глаголы и не раскрывает ответы.
          Существительное или короткую форму нужно услышать в реальной записи.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Слушайте связку «глагол + объект»</h4>

        <p>
          Не ловите отдельное знакомое слово.
          Слушайте небольшой смысловой блок:
          <b>действие + кого? / что?</b>
        </p>

        <table class="conj">
          <tr><th>Ориентир</th><th>Вопрос</th><th>Что проверить</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kit?" data-speak-lang="hu-HU">Kit?</button></td>
            <td>кого?</td>
            <td>речь идёт о человеке как объекте</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit?" data-speak-lang="hu-HU">Mit?</button></td>
            <td>что?</td>
            <td>речь идёт о предмете или содержании действия</td>
          </tr>
          <tr>
            <td>артикль или указательное слово</td>
            <td>какой именно объект?</td>
            <td><b>egy, a/az, ezt/azt</b> помогают определить контекст</td>
          </tr>
          <tr>
            <td>форма на <b>-t</b></td>
            <td>объект ли это?</td>
            <td>сопоставьте окончание с глаголом, а не отдельно</td>
          </tr>
        </table>

        <div class="note">
          В короткой записи один и тот же объект может сначала
          называться неопределённо, а затем упоминаться как уже известный.
          Следите за артиклями и указательными словами.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Третье прослушивание — проверка вариантов</h4>

        <ol class="tasklist">
          <li>Прочитайте один вопрос и варианты ответа.</li>
          <li>Снова включите запись целиком или нужный фрагмент.</li>
          <li>Сопоставьте услышанный глагол с объектом.</li>
          <li>Проверьте, не перепутали ли вы действие и предмет.</li>
          <li>Ответьте на все пять вопросов.</li>
        </ol>

        <div class="warn">
          Похожее написание не является доказательством.
          Например, вариант может содержать знакомую форму на <b>-t</b>,
          но относиться к другому действию.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Транскрипт — только после ответа</h4>

        <p>
          После отправки ответов откройте транскрипт и проведите разбор,
          а не просто прочитайте правильный текст.
        </p>

        <table class="conj">
          <tr><th>Шаг</th><th>Что сделать</th></tr>
          <tr>
            <td>1</td>
            <td>Найдите фрагмент, который услышали неправильно.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Сравните услышанную и написанную форму объекта.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Отметьте глагол, артикль и окончание <b>-t</b>.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Прослушайте этот фрагмент ещё раз, уже глядя в текст.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Закройте транскрипт и повторите фразу на слух.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Критерий результата</h4>

        <div class="grid2 my-4">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58] mb-2">Успешно</div>
            <div class="text-2xl font-bold">4–5 из 5</div>
            <p class="mt-2">Основной смысл и большинство связок распознаны.</p>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#57121C] mb-2">Нужно повторить</div>
            <div class="text-2xl font-bold">0–3 из 5</div>
            <p class="mt-2">Снова используйте три этапа, а не угадывание.</p>
          </div>
        </div>

        <div class="note">
          <b>Итог:</b> сначала понимайте ситуацию,
          затем находите пять действий,
          и только после ответа используйте транскрипт для анализа ошибок.
        </div>
      `,
      activities: [L7_LISTENING],
    },
    {
      id: 9,
      eyebrow: 'УРОК 7 · 9/11 · РОЛЕВАЯ ПРАКТИКА',
      title: 'Mit kér?',
      subtitle: 'Попросить товар, уточнить количество, принять замену и завершить покупку',
      type: 'practice',
      note: 'Интерактивный сценарий ниже тренирует восемь последовательных реплик покупателя. Завершение диалога подтверждает прохождение сценария, но не является автоматической оценкой произношения, грамматики или свободной речи.',
      warn: 'Mit kér? — вежливый вопрос продавца с подразумеваемым Ön. Форма kér является 3-м лицом единственного числа, а не отдельным «вежливым окончанием». Покупатель говорит о себе формой kérek.',
      task: 'Сначала пройдите диалог по моделям, затем повторите без подсказок и в третий раз замените товары и количества. Используйте формы прямого дополнения и сохраняйте вежливую структуру разговора.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Цель сценария</h4>

        <p>
          В конце практики вы должны уметь выполнить восемь действий:
        </p>

        <ol class="tasklist">
          <li>поприветствовать продавца и попросить первый товар;</li>
          <li>уточнить количество;</li>
          <li>добавить ещё два товара;</li>
          <li>принять предложенную замену;</li>
          <li>добавить один товар и отказаться от другого;</li>
          <li>подтвердить заказ;</li>
          <li>сказать, что это всё;</li>
          <li>вежливо попрощаться.</li>
        </ol>

        <div class="note">
          Ниже находится настоящий интерактивный сценарий.
          Озвучка слайда объясняет модели, но не заменяет участие в диалоге.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Продавец и покупатель используют разные формы</h4>

        <table class="conj">
          <tr><th>Кто говорит</th><th>Форма</th><th>Почему</th></tr>
          <tr>
            <td>продавец покупателю</td>
            <td><button class="speak-btn" data-speak-text="Mit kér?" data-speak-lang="hu-HU">Mit kér?</button></td>
            <td>подразумевается вежливое <b>Ön</b>; глагол стоит в 3-м лице</td>
          </tr>
          <tr>
            <td>покупатель о себе</td>
            <td><button class="speak-btn" data-speak-text="Egy kenyeret kérek." data-speak-lang="hu-HU">Egy kenyeret kérek.</button></td>
            <td><b>kérek</b> — «я прошу / мне, пожалуйста»</td>
          </tr>
          <tr>
            <td>неофициально знакомому</td>
            <td><button class="speak-btn" data-speak-text="Mit kérsz?" data-speak-lang="hu-HU">Mit kérsz?</button></td>
            <td>форма 2-го лица; в магазине с незнакомым продавцом обычно не используется</td>
          </tr>
        </table>

        <div class="warn">
          Не объясняйте <b>kér</b> как самостоятельную «вежливую форму».
          Вежливость создаёт обращение через <b>Ön</b>,
          которое в вопросе обычно не произносится.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Просьба и количество</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Модель</th><th>Пример</th></tr>
          <tr>
            <td>попросить один товар</td>
            <td><b>egy + объект + kérek</b></td>
            <td><button class="speak-btn" data-speak-text="Egy kenyeret kérek." data-speak-lang="hu-HU">Egy kenyeret kérek.</button></td>
          </tr>
          <tr>
            <td>назвать другое количество</td>
            <td><b>числительное + объект + kérek</b></td>
            <td><button class="speak-btn" data-speak-text="Két almát kérek." data-speak-lang="hu-HU">Két almát kérek.</button></td>
          </tr>
          <tr>
            <td>уточнить количество</td>
            <td><b>Egy vagy két...?</b></td>
            <td><button class="speak-btn" data-speak-text="Egy vagy két kenyeret kér?" data-speak-lang="hu-HU">Egy vagy két kenyeret kér?</button></td>
          </tr>
        </table>

        <div class="note">
          После числительного существительное остаётся в единственном числе:
          <b>két alma</b>, а как прямое дополнение — <b>két almát</b>.
          Не говорите <s>két almák</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Добавить товары</h4>

        <p>
          Для продолжения заказа используйте <b>még</b> — «ещё».
          Каждый товар, который вы просите, ставится в форме прямого дополнения.
        </p>

        <table class="conj">
          <tr><th>Модель</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td><b>Igen, még ... kérek.</b></td>
            <td><button class="speak-btn" data-speak-text="Igen, még egy kávét kérek." data-speak-lang="hu-HU">Igen, még egy kávét kérek.</button></td>
            <td>Да, ещё один кофе, пожалуйста.</td>
          </tr>
          <tr>
            <td><b>... és ... kérek.</b></td>
            <td><button class="speak-btn" data-speak-text="Még egy kávét és egy vizet kérek." data-speak-lang="hu-HU">Még egy kávét és egy vizet kérek.</button></td>
            <td>Ещё кофе и воду, пожалуйста.</td>
          </tr>
        </table>

        <div class="note">
          В полной реплике сценария:
          <button class="speak-btn" data-speak-text="Igen, még egy kávét és egy vizet kérek." data-speak-lang="hu-HU">Igen, még egy kávét és egy vizet kérek.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Товара нет: понять и выбрать замену</h4>

        <table class="conj">
          <tr><th>Реплика</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Sajnos kávé nincs." data-speak-lang="hu-HU">Sajnos kávé nincs.</button></td>
            <td>К сожалению, кофе нет.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Teát tudok adni." data-speak-lang="hu-HU">Teát tudok adni.</button></td>
            <td>Могу предложить / дать чай.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó lesz?" data-speak-lang="hu-HU">Jó lesz?</button></td>
            <td>Подойдёт?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Rendben, akkor egy teát kérek." data-speak-lang="hu-HU">Rendben, akkor egy teát kérek.</button></td>
            <td>Хорошо, тогда чай, пожалуйста.</td>
          </tr>
        </table>

        <div class="note">
          Модель принятия замены:
          <b>Rendben, akkor + новый товар в винительном падеже + kérek.</b>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Добавить один товар и отказаться от другого</h4>

        <table class="conj">
          <tr><th>Действие</th><th>Форма</th></tr>
          <tr>
            <td>добавить</td>
            <td><button class="speak-btn" data-speak-text="Kérek két almát." data-speak-lang="hu-HU">Kérek két almát.</button></td>
          </tr>
          <tr>
            <td>отказаться</td>
            <td><button class="speak-btn" data-speak-text="Sajtot nem kérek." data-speak-lang="hu-HU">Sajtot nem kérek.</button></td>
          </tr>
          <tr>
            <td>объединить</td>
            <td><button class="speak-btn" data-speak-text="Kérek két almát, de sajtot nem kérek." data-speak-lang="hu-HU">Kérek két almát, de sajtot nem kérek.</button></td>
          </tr>
        </table>

        <div class="note">
          В отрицательной части объект <b>sajtot</b> стоит перед <b>nem kérek</b>,
          потому что контрастируется: яблоки прошу, а сыр не прошу.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Подтвердить и завершить заказ</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Фраза</th><th>Значение</th></tr>
          <tr>
            <td>подтвердить выбранное</td>
            <td><button class="speak-btn" data-speak-text="Ezt kérem." data-speak-lang="hu-HU">Ezt kérem.</button></td>
            <td>Это, пожалуйста / это я беру.</td>
          </tr>
          <tr>
            <td>отказаться от дополнительного</td>
            <td><button class="speak-btn" data-speak-text="Nem, köszönöm." data-speak-lang="hu-HU">Nem, köszönöm.</button></td>
            <td>Нет, спасибо.</td>
          </tr>
          <tr>
            <td>сказать «это всё»</td>
            <td><button class="speak-btn" data-speak-text="Ennyit kérek." data-speak-lang="hu-HU">Ennyit kérek.</button></td>
            <td>Это всё, что мне нужно.</td>
          </tr>
          <tr>
            <td>попрощаться</td>
            <td><button class="speak-btn" data-speak-text="Viszontlátásra!" data-speak-lang="hu-HU">Viszontlátásra!</button></td>
            <td>До свидания.</td>
          </tr>
        </table>

        <div class="warn">
          <b>Ezt kérem</b> подтверждает конкретно выбранный товар или набор,
          а <b>Ennyit kérek</b> сообщает, что больше ничего не нужно.
          Эти фразы не взаимозаменяемы во всех ситуациях.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Почему продавец перечисляет формы без -t</h4>

        <p>
          В подтверждении заказа продавец может назвать товары списком:
        </p>

        <div class="note">
          <button class="speak-btn" data-speak-text="Egy kenyér, egy víz, egy tea és két alma." data-speak-lang="hu-HU">Egy kenyér, egy víz, egy tea és két alma.</button>
        </div>

        <p>
          Это сокращённый список наименований, а не полное предложение с глаголом
          <b>kérek</b>. Поэтому формы без винительного окончания здесь нормальны.
          В реплике покупателя с глаголом нужны объектные формы:
          <b>kenyeret, vizet, teát, almát</b>.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">9. Три прохода практики</h4>

        <ol class="tasklist">
          <li>
            <b>Первый проход:</b>
            используйте все модели и прочитайте реплики вслух.
          </li>
          <li>
            <b>Второй проход:</b>
            закройте модели и восстановите восемь реплик самостоятельно.
          </li>
          <li>
            <b>Третий проход:</b>
            замените товары и количества своими вариантами,
            но сохраните функции каждой реплики.
          </li>
        </ol>

        <div class="note">
          Полезные замены:
          <b>kenyér, tej, tea, víz, sajt, alma, körte, paradicsom</b>.
          Проверяйте форму объекта перед глаголом <b>kérek</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">10. Что означает завершение role-play</h4>

        <p>
          Сообщение о завершении подтверждает только то,
          что вы прошли все ветви сценария.
        </p>

        <ul class="tick">
          <li>не проверяется автоматическое произношение;</li>
          <li>не оценивается свободная речь;</li>
          <li>не проверяется точность вашей собственной замены товаров;</li>
          <li>результат остаётся <b>PARTIAL / REVIEW</b>.</li>
        </ul>

        <div class="note">
          <b>Итог:</b> роль покупателя выполнена успешно,
          если вы можете без подсказки попросить товар,
          уточнить количество, принять замену,
          отказаться от лишнего и завершить разговор.
        </div>
      `,
      activities: [L7_ROLEPLAY],
    },
    {
      id: 10,
      eyebrow: 'УРОК 7 · 10/11 · ПИСЬМО И САМОПРАКТИКА',
      title: 'Bevásárló üzenet',
      subtitle: 'Связное сообщение о покупках: 60–80 слов',
      type: 'practice',
      note: 'Письменная работа проверяет связность, содержание и осмысленное употребление форм прямого дополнения. Она остаётся PARTIAL / REVIEW и требует самопроверки: система не оценивает автоматически качество всего текста.',
      warn: 'Не пишите только список продуктов и не вставляйте формы на -t механически. Сначала выберите глагол, затем определите, является ли существительное прямым дополнением: Otthon van kenyér, но Kenyeret veszek.',
      task: 'Напишите 60–80 венгерских слов по пятичастному плану. Используйте не менее четырёх осмысленных форм прямого дополнения, одну причину или замену и ясное заключительное действие.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что нужно написать</h4>

        <p>
          Создайте короткое связное сообщение о покупках объёмом
          <b>60–80 слов</b>. Текст должен описывать одну понятную ситуацию,
          а не быть перечнем продуктов.
        </p>

        <table class="conj">
          <tr><th>Часть</th><th>Содержание</th><th>Контрольный вопрос</th></tr>
          <tr>
            <td>1</td>
            <td>ситуация и цель</td>
            <td>Что вы готовите или зачем идёте за покупками?</td>
          </tr>
          <tr>
            <td>2</td>
            <td>что уже есть дома</td>
            <td>Что покупать не нужно?</td>
          </tr>
          <tr>
            <td>3</td>
            <td>необходимые покупки</td>
            <td>Что вы хотите купить или попросить?</td>
          </tr>
          <tr>
            <td>4</td>
            <td>один отказ, отсутствие или замена</td>
            <td>Чего вы не хотите или что возьмёте вместо отсутствующего?</td>
          </tr>
          <tr>
            <td>5</td>
            <td>понятный итог</td>
            <td>Что вы приготовите или сделаете вечером?</td>
          </tr>
        </table>

        <div class="note">
          Образец внутри задания содержит ровно <b>60 слов</b> —
          нижнюю границу допустимого объёма.
          Не копируйте его дословно: используйте как модель структуры.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Полные фразы-шаблоны</h4>

        <p>
          Шаблон должен быть законченным предложением.
          Заменяйте выделенные части своими словами.
        </p>

        <table class="conj">
          <tr><th>Функция</th><th>Полная модель</th></tr>
          <tr>
            <td>ситуация</td>
            <td><button class="speak-btn" data-speak-text="Ma vacsorát készítek a családomnak." data-speak-lang="hu-HU">Ma vacsorát készítek a családomnak.</button></td>
          </tr>
          <tr>
            <td>что уже есть</td>
            <td><button class="speak-btn" data-speak-text="Otthon már van rizs, só és hagyma." data-speak-lang="hu-HU">Otthon már van rizs, só és hagyma.</button></td>
          </tr>
          <tr>
            <td>планы покупки</td>
            <td><button class="speak-btn" data-speak-text="Paradicsomot, kenyeret és almát szeretnék venni." data-speak-lang="hu-HU">Paradicsomot, kenyeret és almát szeretnék venni.</button></td>
          </tr>
          <tr>
            <td>отказ с причиной</td>
            <td><button class="speak-btn" data-speak-text="Tejet nem kérek, mert senki sem iszik tejet." data-speak-lang="hu-HU">Tejet nem kérek, mert senki sem iszik tejet.</button></td>
          </tr>
          <tr>
            <td>условие и замена</td>
            <td><button class="speak-btn" data-speak-text="Ha nincs csirke, akkor pulykát veszek." data-speak-lang="hu-HU">Ha nincs csirke, akkor pulykát veszek.</button></td>
          </tr>
          <tr>
            <td>итог</td>
            <td><button class="speak-btn" data-speak-text="Este a rizst, a húst és a zöldséget együtt készítem el." data-speak-lang="hu-HU">Este a rizst, a húst és a zöldséget együtt készítem el.</button></td>
          </tr>
        </table>

        <div class="warn">
          Фрагменты <b>Otthon már van</b> или <b>Szeretnék venni</b>
          сами по себе ещё не являются полноценным содержательным предложением.
          Обязательно добавьте, что есть или что хотите купить.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Van и прямое дополнение — не одно и то же</h4>

        <p>
          После <b>van / nincs</b> существительное обычно называет то,
          что имеется или отсутствует. С глаголом действия оно может стать
          прямым дополнением и получить форму на <b>-t</b>.
        </p>

        <table class="conj">
          <tr><th>Что есть / чего нет</th><th>Действие с объектом</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Otthon van kenyér." data-speak-lang="hu-HU">Otthon van kenyér.</button></td>
            <td><button class="speak-btn" data-speak-text="Kenyeret veszek." data-speak-lang="hu-HU">Kenyeret veszek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van tej." data-speak-lang="hu-HU">Van tej.</button></td>
            <td><button class="speak-btn" data-speak-text="Tejet nem kérek." data-speak-lang="hu-HU">Tejet nem kérek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nincs csirke." data-speak-lang="hu-HU">Nincs csirke.</button></td>
            <td><button class="speak-btn" data-speak-text="Pulykát veszek." data-speak-lang="hu-HU">Pulykát veszek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Van alma." data-speak-lang="hu-HU">Van alma.</button></td>
            <td><button class="speak-btn" data-speak-text="Almát eszem." data-speak-lang="hu-HU">Almát eszem.</button></td>
          </tr>
        </table>

        <div class="note">
          Проверяйте не отдельную букву <b>-t</b>,
          а смысловую пару <b>глагол + объект</b>:
          <b>vacsorát készítek, kenyeret veszek, vizet kérek,
          sajtot nem kérek, almát eszem</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как сделать текст связным</h4>

        <table class="conj">
          <tr><th>Связка</th><th>Функция</th><th>Мини-модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="és" data-speak-lang="hu-HU">és</button></td>
            <td>добавление</td>
            <td><b>kenyeret és almát</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button></td>
            <td>контраст</td>
            <td><b>Csirkét keresek, de nincs.</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button></td>
            <td>причина</td>
            <td><b>Tejet nem kérek, mert...</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button></td>
            <td>условие</td>
            <td><b>Ha nincs csirke...</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="akkor" data-speak-lang="hu-HU">akkor</button></td>
            <td>результат условия</td>
            <td><b>...akkor pulykát veszek.</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="utána" data-speak-lang="hu-HU">utána</button></td>
            <td>следующее действие</td>
            <td><b>Utána almát eszünk.</b></td>
          </tr>
        </table>

        <div class="note">
          Не обязательно использовать все связки.
          Достаточно нескольких естественных соединений,
          чтобы предложения образовали одну ситуацию.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. План перед написанием</h4>

        <ol class="tasklist">
          <li>Запишите цель: что готовите и для кого.</li>
          <li>Разделите продукты на «уже есть» и «нужно купить».</li>
          <li>Выберите один отказ или условную замену.</li>
          <li>Запишите четыре–шесть полезных форм прямого дополнения.</li>
          <li>Выберите заключительное действие.</li>
          <li>Только после этого пишите связный текст.</li>
        </ol>

        <div class="note">
          Возможные объектные формы:
          <b>vacsorát, paradicsomot, paprikát, kenyeret, tejet,
          csirkét, pulykát, vizet, almát, sajtot</b>.
          Используйте только те слова, которые подходят вашему содержанию.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Как считать слова</h4>

        <ol class="tasklist">
          <li>Считайте каждую отдельную написанную единицу как одно слово.</li>
          <li>Знаки препинания не создают отдельного слова.</li>
          <li>Сначала напишите текст, затем посчитайте слова.</li>
          <li>Если меньше 60 — добавьте причину, условие или итог.</li>
          <li>Если больше 80 — удалите повторения, а не важную часть плана.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Самопроверка письменной работы</h4>

        <table class="conj">
          <tr><th>Критерий</th><th>Проверка</th></tr>
          <tr>
            <td>объём</td>
            <td>60–80 слов</td>
          </tr>
          <tr>
            <td>содержание</td>
            <td>есть ситуация, домашние запасы, покупки, отказ/замена и итог</td>
          </tr>
          <tr>
            <td>грамматика</td>
            <td>не менее четырёх осмысленных форм прямого дополнения</td>
          </tr>
          <tr>
            <td>связность</td>
            <td>использованы подходящие связки, а не только список</td>
          </tr>
          <tr>
            <td>ясность</td>
            <td>понятно, что и зачем происходит</td>
          </tr>
        </table>

        <div class="warn">
          Автоматическое завершение задания не доказывает,
          что весь текст грамматически и стилистически правильный.
          Письменная работа остаётся <b>PARTIAL / REVIEW</b>
          и требует проверки по критериям.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Необязательная устная самопрактика</h4>

        <p>
          После письма расскажите ту же ситуацию примерно за одну минуту.
          Используйте текст как план, но не читайте его дословно.
        </p>

        <ol class="tasklist">
          <li>назовите цель покупок;</li>
          <li>скажите, что уже есть дома;</li>
          <li>перечислите основные покупки;</li>
          <li>добавьте отказ или замену;</li>
          <li>завершите итоговым действием.</li>
        </ol>

        <div class="note">
          Устная часть является только самостоятельной тренировкой.
          Здесь нет микрофона, записи, автоматического <b>score</b>
          или подтверждения <b>evidence</b>.
        </div>

        <div class="note">
          <b>Итог:</b> сначала создайте план,
          затем напишите связный текст на 60–80 слов,
          посчитайте слова и проверьте пять критериев.
        </div>
      `,
      activities: [L7_WRITING], optionalSpeaking: L7_SPEAKING,
    },
    {
      id: 11,
      eyebrow: 'УРОК 7 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что вы умеете после урока 7',
      type: 'summary',
      note: 'Итоговый слайд объединяет языковой результат и результаты проверяемых заданий. Урок не получает одну общую автоматическую оценку: каждый тип задания подтверждает только конкретную цель.',
      warn: 'Успешное закрытое упражнение не доказывает автоматически свободную речь или безошибочное письмо. Controlled Practice поддерживает две цели урока, но остаётся одним источником результата, а не двумя независимыми проверками.',
      task: 'Сначала выполните самопроверку без подсказок, затем откройте ответы и запустите итоговую проверку целей. По ошибкам вернитесь к указанному слайду, а не повторяйте весь урок вслепую.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Пять результатов урока</h4>

        <ul class="tick">
          <li>распознавать прямое дополнение по вопросам <b>Kit?</b> и <b>Mit?</b>;</li>
          <li>образовывать и узнавать частые формы винительного падежа;</li>
          <li>использовать отдельные формы личных местоимений;</li>
          <li>различать узкую модель <b>én → te/ti</b> с <b>-lak/-lek</b>;</li>
          <li>понимать и создавать короткие фразы о покупках, чтении и видимых объектах.</li>
        </ul>

        <div class="note">
          На этом уровне вы используете готовые модели
          <b>Olvasok egy könyvet</b> и <b>Olvasom a könyvet</b>,
          но полную систему неопределённого и определённого спряжения
          ещё не требуется воспроизводить.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Частые формы существительных</h4>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Прямое дополнение</th><th>Короткая модель</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button></td>
            <td><button class="speak-btn" data-speak-text="autót" data-speak-lang="hu-HU">autót</button></td>
            <td><button class="speak-btn" data-speak-text="Látok egy autót." data-speak-lang="hu-HU">Látok egy autót.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="alma" data-speak-lang="hu-HU">alma</button></td>
            <td><button class="speak-btn" data-speak-text="almát" data-speak-lang="hu-HU">almát</button></td>
            <td><button class="speak-btn" data-speak-text="Veszek egy almát." data-speak-lang="hu-HU">Veszek egy almát.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanár" data-speak-lang="hu-HU">tanár</button></td>
            <td><button class="speak-btn" data-speak-text="tanárt" data-speak-lang="hu-HU">tanárt</button></td>
            <td><button class="speak-btn" data-speak-text="Látom a tanárt." data-speak-lang="hu-HU">Látom a tanárt.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könyv" data-speak-lang="hu-HU">könyv</button></td>
            <td><button class="speak-btn" data-speak-text="könyvet" data-speak-lang="hu-HU">könyvet</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">ház</button></td>
            <td><button class="speak-btn" data-speak-text="házat" data-speak-lang="hu-HU">házat</button></td>
            <td><button class="speak-btn" data-speak-text="Látom a házat." data-speak-lang="hu-HU">Látom a házat.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="út" data-speak-lang="hu-HU">út</button></td>
            <td><button class="speak-btn" data-speak-text="utat" data-speak-lang="hu-HU">utat</button></td>
            <td>частая словарная пара с изменением основы</td>
          </tr>
        </table>

        <div class="note">
          Показатель падежа один — <b>-t</b>,
          но готовая форма может включать соединительную гласную,
          удлинение конечной гласной или изменение основы.
          Поэтому учите пары целиком.
        </div>

        <div class="warn">
          Не выводите точную форму только по одному правилу гармонии:
          правильно <b>könyvet</b>, а не <s>könyvöt</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Личные местоимения</h4>

        <table class="conj">
          <tr><th>Кто?</th><th>Кого?</th><th>Русский</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="én" data-speak-lang="hu-HU">én</button></td>
            <td><button class="speak-btn" data-speak-text="engem" data-speak-lang="hu-HU">engem</button></td>
            <td>я → меня</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="te" data-speak-lang="hu-HU">te</button></td>
            <td><button class="speak-btn" data-speak-text="téged" data-speak-lang="hu-HU">téged</button></td>
            <td>ты → тебя</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU">ő</button></td>
            <td><button class="speak-btn" data-speak-text="őt" data-speak-lang="hu-HU">őt</button></td>
            <td>он/она → его/её</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mi" data-speak-lang="hu-HU">mi</button></td>
            <td><button class="speak-btn" data-speak-text="minket" data-speak-lang="hu-HU">minket</button></td>
            <td>мы → нас</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ti" data-speak-lang="hu-HU">ti</button></td>
            <td><button class="speak-btn" data-speak-text="titeket" data-speak-lang="hu-HU">titeket</button></td>
            <td>вы, неофициально → вас</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ők" data-speak-lang="hu-HU">ők</button></td>
            <td><button class="speak-btn" data-speak-text="őket" data-speak-lang="hu-HU">őket</button></td>
            <td>они → их</td>
          </tr>
        </table>

        <div class="note">
          Формы нужно запомнить отдельным рядом:
          <b>engem, téged, őt, minket, titeket, őket</b>.
          Не образуйте формы <s>ént</s> или <s>tet</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Узкая модель -lak/-lek</h4>

        <table class="conj">
          <tr><th>Объект</th><th>Правильная форма</th><th>Значение</th></tr>
          <tr>
            <td>тебя, неофициально</td>
            <td><button class="speak-btn" data-speak-text="Látlak." data-speak-lang="hu-HU">Látlak.</button></td>
            <td>Я вижу тебя.</td>
          </tr>
          <tr>
            <td>тебя, неофициально</td>
            <td><button class="speak-btn" data-speak-text="Szeretlek." data-speak-lang="hu-HU">Szeretlek.</button></td>
            <td>Я люблю тебя.</td>
          </tr>
          <tr>
            <td>вас, несколько знакомых людей</td>
            <td><button class="speak-btn" data-speak-text="Látlak titeket." data-speak-lang="hu-HU">Látlak titeket.</button></td>
            <td>Я вижу вас.</td>
          </tr>
          <tr>
            <td>его / её</td>
            <td><button class="speak-btn" data-speak-text="Látom őt." data-speak-lang="hu-HU">Látom őt.</button></td>
            <td>Объект третьего лица.</td>
          </tr>
          <tr>
            <td>Вас, вежливо</td>
            <td><button class="speak-btn" data-speak-text="Látom Önt." data-speak-lang="hu-HU">Látom Önt.</button></td>
            <td>Ön грамматически относится к третьему лицу.</td>
          </tr>
        </table>

        <div class="warn">
          Используйте <b>-lak/-lek</b> только для модели
          <b>én → te/ti</b>. Нельзя говорить
          <s>Látlak őt</s> или <s>Látlak Önt</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Объект в предложении</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Что заметить</th></tr>
          <tr>
            <td>наличие</td>
            <td><button class="speak-btn" data-speak-text="Van kenyér." data-speak-lang="hu-HU">Van kenyér.</button></td>
            <td>kenyér не является прямым дополнением</td>
          </tr>
          <tr>
            <td>действие с объектом</td>
            <td><button class="speak-btn" data-speak-text="Kenyeret veszek." data-speak-lang="hu-HU">Kenyeret veszek.</button></td>
            <td>kenyeret отвечает на Mit?</td>
          </tr>
          <tr>
            <td>одна / какая-то книга</td>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>готовая неопределённая модель</td>
          </tr>
          <tr>
            <td>конкретная книга</td>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>готовая определённая модель</td>
          </tr>
          <tr>
            <td>ясный контраст</td>
            <td><button class="speak-btn" data-speak-text="A könyvet olvasom, nem az újságot." data-speak-lang="hu-HU">A könyvet olvasom, nem az újságot.</button></td>
            <td>выделяется именно книга</td>
          </tr>
        </table>

        <div class="note">
          Окончание сохраняет роль объекта,
          а порядок слов сообщает контекст и фокус.
          Не считайте любой объект перед глаголом автоматически контрастным.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Финальная самопроверка</h4>

        <ol class="tasklist">
          <li>alma → форма прямого дополнения</li>
          <li>könyv → форма прямого дополнения</li>
          <li>én → «меня»</li>
          <li>Переведите: «Я вижу тебя».</li>
          <li>Переведите: «Я вижу его / её».</li>
          <li>Переведите вежливо: «Я вижу Вас».</li>
          <li>Назовите подлежащее и объект: <b>Anna látja Pétert.</b></li>
          <li>Скажите: «Я покупаю хлеб».</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>almát</b></li>
            <li><b>könyvet</b></li>
            <li><b>engem</b></li>
            <li><b>Látlak.</b></li>
            <li><b>Látom őt.</b></li>
            <li><b>Látom Önt.</b></li>
            <li><b>Anna</b> — подлежащее; <b>Pétert</b> — прямое дополнение.</li>
            <li><b>Kenyeret veszek.</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Что подтверждают задания</h4>

        <table class="conj">
          <tr><th>Задание</th><th>Порог / статус</th><th>Что подтверждает</th></tr>
          <tr>
            <td>Controlled Practice</td>
            <td><b>11 из 14</b></td>
            <td>образование форм и употребление объекта; один источник для двух целей</td>
          </tr>
          <tr>
            <td>Reading</td>
            <td><b>6 из 7</b></td>
            <td>понимание форм и различение ролей в связном тексте</td>
          </tr>
          <tr>
            <td>Listening</td>
            <td><b>4 из 5</b></td>
            <td>распознавание объекта в реальной опубликованной записи</td>
          </tr>
          <tr>
            <td>Writing</td>
            <td><b>PARTIAL / REVIEW</b></td>
            <td>связное самостоятельное употребление требует проверки</td>
          </tr>
          <tr>
            <td>Role-play</td>
            <td><b>PARTIAL / REVIEW</b></td>
            <td>прохождение сценария без автоматической оценки свободной речи</td>
          </tr>
          <tr>
            <td>Optional Speaking</td>
            <td>без автоматического результата</td>
            <td>самостоятельная практика без микрофона, score и evidence</td>
          </tr>
        </table>

        <div class="warn">
          Результат относится только к конкретному проверяемому заданию.
          Он не подтверждает автоматически свободную речь,
          безошибочное письмо или владение всеми формами.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Куда вернуться при ошибке</h4>

        <table class="conj">
          <tr><th>Проблема</th><th>Повторить</th></tr>
          <tr>
            <td>образование форм существительных</td>
            <td><b>7.2–7.3</b></td>
          </tr>
          <tr>
            <td>личные местоимения</td>
            <td><b>7.4</b></td>
          </tr>
          <tr>
            <td>-lak/-lek</td>
            <td><b>7.5</b></td>
          </tr>
          <tr>
            <td>порядок слов и фокус</td>
            <td><b>7.6</b></td>
          </tr>
          <tr>
            <td>понимание рассказа</td>
            <td><b>7.7</b></td>
          </tr>
          <tr>
            <td>аудирование</td>
            <td><b>7.8</b></td>
          </tr>
          <tr>
            <td>диалог в магазине</td>
            <td><b>7.9</b></td>
          </tr>
          <tr>
            <td>письменное сообщение</td>
            <td><b>7.10</b></td>
          </tr>
        </table>

        <div class="note">
          После точечного повторения снова выполните только то задание,
          где результат был ниже порога или требовал ручной проверки.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">9. Завершение урока</h4>

        <p>
          Если вы прошли самопроверку и понимаете свои результаты,
          запустите итоговую проверку целей ниже.
        </p>

        <div class="note">
          <button class="speak-btn" data-speak-text="A hetedik lecke véget ért." data-speak-lang="hu-HU">A hetedik lecke véget ért.</button>
          — Седьмой урок завершён.
        </div>
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
