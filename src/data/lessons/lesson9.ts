import type { Lesson, LessonActivity } from '../../types';

const COMPARATIVE_FORMS: LessonActivity = {
  kind: 'controlledPractice', id: 'l9-cp-comparative-forms', title: 'Контекстная практика: описание, сравнение и выбор', passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l9-comparative-1', prompt: 'Квартира A просторная, квартира B маленькая.', options: ['Az A lakás nagy, a B lakás kicsi.', 'Az A lakás olcsó, a B gyors.', 'Az A lakás nehéz, a B szép.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-2', prompt: 'Выбери естественную пару противоположностей.', options: ['olcsó ↔ drága', 'gyors ↔ szép', 'nagy ↔ kényelmes'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-3', prompt: 'Новая квартира больше.', options: ['Az új lakás nagyobb.', 'Az új lakás nagybb.', 'Az új lakás legnagy.'], correctIndex: 0 },
    { kind: 'textInput', id: 'l9-comparative-4', prompt: 'kicsi → меньше', accept: ['kisebb'] },
    { kind: 'textInput', id: 'l9-comparative-5', prompt: 'jó → лучше', accept: ['jobb'] },
    { kind: 'textInput', id: 'l9-comparative-6', prompt: 'szép → красивее', accept: ['szebb'] },
    { kind: 'singleChoice', id: 'l9-comparative-7', prompt: 'Квартира B дешевле квартиры A.', options: ['A B lakás olcsóbb, mint az A lakás.', 'Az A lakás olcsóbb, mint a B lakás.', 'A B lakás a legolcsóbb A.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-8', prompt: 'Автобус медленный, метро быстрее.', options: ['A busz lassú, a metró gyorsabb.', 'A busz gyorsabb, a metró lassúbb.', 'A metró leggyors busz.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-9', prompt: 'Как выразить предпочтение меньшему варианту?', options: ['Nekem a kisebb tetszik.', 'Nekem kisebb mint.', 'Én legkisebb jobb.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-10', prompt: 'Выбери вариант с простой причиной.', options: ['Ezt választom, mert olcsóbb.', 'Ezt választom, mint olcsó.', 'Ezt olcsóbb választás mert.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-11', prompt: 'Как сказать «это лучший вариант»?', options: ['Ez a jobb választás.', 'Ez a legjobb választás.', 'Ez jóbb választás.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l9-comparative-12', prompt: 'Телефон A дешевле, но телефон B лучше.', options: ['Az A telefon olcsóbb, de a B jobb.', 'Az A telefon drágább, és a B rosszabb.', 'Az A telefon olcsó mint legjobb.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-13', prompt: 'В каком варианте прилагательное перед существительным не согласуется?', options: ['nagy házak', 'nagyok házak', 'nagyot házak'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l9-comparative-14', prompt: 'Ты узнал, что квартира B очень шумная. Как отреагировать?', options: ['Ez hátrány, de még mindig olcsóbb.', 'Ez gyorsabb, mert zaj.', 'Ez a legzajos mint.'], correctIndex: 0 },
  ],
};

const APARTMENT_READING: LessonActivity = {
  kind: 'reading', id: 'l9-reading-apartments', title: 'Чтение: выбор квартиры', instructions: 'Сравни две квартиры по размеру, цене, месту, транспорту, шуму и состоянию.', passCount: 6,
  content: { type: 'prose', title: 'Melyik lakás jobb?', paragraphs: [
    'Dávid új lakást keres, és szombaton két lakást néz meg. Az A lakás a város központjában van. Hatvan négyzetméteres, világos és szép. Két nagy szobája van, és a bútorok újak. A metró csak három perc gyalog, ezért Dávid gyorsan beér a munkahelyére. A lakás azonban drága, és az utca este nagyon zajos.',
    'A B lakás kisebb: negyvenöt négyzetméteres. A város szélén van, ezért messzebb van Dávid munkahelyétől. Nincs metró a közelben, de két busz is jár arra. A ház és a bútorok régebbiek, viszont a lakás csendesebb és sokkal olcsóbb. Van egy kis erkélye is, ahol Dávid reggel kávézhat.',
    'Dávid sokáig gondolkodik, és minden fontos részletet pontosan leír. Szerinte az A lakás kényelmesebb a közlekedés miatt, de túl drága és zajos. A B lakás nem olyan nagy és nem olyan modern, de nyugodtabb. Végül a B lakást választja, mert az alacsonyabb ár fontosabb neki. A régi bútorokat később lassan kicseréli.',
  ] },
  questions: [
    { id: 'l9-reading-q1', question: 'Какая квартира больше?', options: ['A', 'B', 'они одинаковые'], correctIndex: 0 },
    { id: 'l9-reading-q2', question: 'Какая квартира дешевле?', options: ['A', 'B', 'не сказано'], correctIndex: 1 },
    { id: 'l9-reading-q3', question: 'Где находится квартира A?', options: ['в центре', 'на окраине', 'рядом с деревней'], correctIndex: 0 },
    { id: 'l9-reading-q4', question: 'Какое транспортное различие названо?', options: ['у A метро, у B автобусы', 'у обеих метро', 'у B только поезд'], correctIndex: 0 },
    { id: 'l9-reading-q5', question: 'Какой недостаток квартиры A?', options: ['она маленькая', 'она дорогая и шумная', 'в ней нет мебели'], correctIndex: 1 },
    { id: 'l9-reading-q6', question: 'Какой недостаток квартиры B?', options: ['она меньше и дальше от работы', 'она самая дорогая', 'она шумнее'], correctIndex: 0 },
    { id: 'l9-reading-q7', question: 'Что выбирает Давид?', options: ['квартиру A', 'квартиру B', 'ни одну'], correctIndex: 1 },
    { id: 'l9-reading-q8', question: 'Почему он делает такой выбор?', options: ['для него важнее низкая цена и спокойствие', 'ему нужен новый диван', 'он не пользуется транспортом'], correctIndex: 0 },
  ],
};

const COMPARISON_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l9-roleplay-apartment-choice', title: 'Ролевая игра: выбор квартиры', partnerLabel: 'Ingatlanos', completionMessage: 'Kiválasztottad a megfelelő lakást.', startTurnId: 'l9-rp-s1',
  turns: [
    { id: 'l9-rp-s1', speaker: 'waiter', prompt: 'Két lakást tudok mutatni. Mit szeretne először tudni?', next: 'l9-rp-l1' },
    { id: 'l9-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси о цене.', model: 'Melyik lakás olcsóbb?', next: 'l9-rp-s2' },
    { id: 'l9-rp-s2', speaker: 'waiter', prompt: 'A B lakás olcsóbb, viszont kisebb.', next: 'l9-rp-l2' },
    { id: 'l9-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Спроси, где транспорт лучше.', model: 'Hol jobb a közlekedés?', next: 'l9-rp-s3' },
    { id: 'l9-rp-s3', speaker: 'waiter', prompt: 'Az A lakás jobb, mert a metró közel van.', next: 'l9-rp-l3' },
    { id: 'l9-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Сравни размер.', model: 'Az A lakás nagyobb, mint a B lakás.', next: 'l9-rp-s4' },
    { id: 'l9-rp-s4', speaker: 'waiter', prompt: 'Igen, viszont az A lakás nagyon zajos.', next: 'l9-rp-l4' },
    { id: 'l9-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови этот минус.', model: 'Értem. A zaj nekem nagy hátrány.', next: 'l9-rp-s5' },
    { id: 'l9-rp-s5', speaker: 'waiter', prompt: 'A B lakás csendesebb, és erkélye is van.', next: 'l9-rp-l5' },
    { id: 'l9-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вырази предпочтение и причину.', model: 'Akkor nekem inkább a B lakás tetszik, mert olcsóbb és csendesebb.', next: 'l9-rp-s6' },
    { id: 'l9-rp-s6', speaker: 'waiter', prompt: 'Még egy fontos dolog: a B lakás bútorai régiek.', next: 'l9-rp-l6' },
    { id: 'l9-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Отреагируй на новую деталь.', model: 'Értem. Ez hátrány, de az ár fontosabb nekem.', next: 'l9-rp-s7' },
    { id: 'l9-rp-s7', speaker: 'waiter', prompt: 'Rendben. Akkor melyiket választja?', next: 'l9-rp-l7' },
    { id: 'l9-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди окончательный выбор.', model: 'A B lakást választom. Szerintem nekem a B lakás a jobb választás.', next: 'l9-rp-s8' },
    { id: 'l9-rp-s8', speaker: 'waiter', prompt: 'Rendben. Szeretné még egyszer megnézni?', next: 'l9-rp-l8' },
    { id: 'l9-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Вежливо согласись и заверши.', model: 'Igen, köszönöm. Nézzük meg még egyszer!', next: 'l9-rp-s9' },
    { id: 'l9-rp-s9', speaker: 'waiter', prompt: 'Rendben, menjünk!' },
  ],
};

const WRITING_COMPARISON: LessonActivity = {
  kind: 'writing', id: 'l9-writing-comparison', title: 'Письмо: сравни два объекта',
  prompt: 'Напиши 70–90 слов и сравни два вымышленных варианта: две квартиры, два товара или два места. Дай минимум три характеристики и три сравнительные формы, используй хотя бы одно полное сравнение с mint, назови преимущество каждого варианта, минимум один недостаток, затем сделай окончательный выбор и объясни причину с mert.',
  modelAnswer: ['Két lakást hasonlítok össze. Az A lakás nagyobb, világosabb és modernebb, mint a B lakás. Az A lakás szép és új. Közel van a metró, ezért a közlekedés jobb. Viszont az A lakás drágább és zajosabb. A B lakás kisebb és régebbi, de olcsóbb és csendesebb. A B lakás nem olyan modern. Van egy kis erkélye is. Nekem inkább a B lakás tetszik, mert az ár fontosabb. Én a B lakást választom. Szerintem nekem a B lakás a jobb választás.'],
  rubric: ['70–90 слов', 'два понятных варианта и минимум три характеристики', 'минимум три сравнительные формы и одно сравнение с mint', 'преимущество каждого варианта и минимум один недостаток', 'окончательный выбор и простая причина с mert'],
};

const SPEAKING_COMPARISON = {
  title: 'Говорение: короткое сравнение',
  instructions: 'Говори 1–1.5 минуты и сравни два места, товара или других знакомых варианта. Это необязательная текстовая самопрактика без микрофона, автоматического score и evidence.',
  prompt: 'Назови оба варианта, дай минимум три характеристики, используй минимум две сравнительные формы и хотя бы одно предложение с mint, назови один плюс и один минус, затем вырази предпочтение и простую причину с mert.',
  rubric: ['два варианта и минимум три характеристики', 'минимум две сравнительные формы', 'минимум одно сравнение с mint', 'один плюс и один минус', 'предпочтение и причина с mert'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l9-exit-check', title: 'Проверка целей урока 9', checks: [
    { objectiveId: 'l9_use-adjectives', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_form-comparative', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_form-superlative', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_use-mint', activityId: 'l9-cp-comparative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l9_compare-people', activityId: 'l9-writing-comparison', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l9-roleplay-apartment-choice', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_9: Lesson = {
  id: 9,
  number: 9,
  level: 'A1',
  title: 'Урок 9 · Melléknevek & Összehasonlítás',
  subtitle: 'Прилагательные и степени сравнения',
  description: 'Прилагательные и сравнение в раннем A1: понятные характеристики, выбор между двумя вариантами, причина предпочтения и открытая текстовая практика.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: "УРОК 9 · 1/11 · ПРИЛАГАТЕЛЬНЫЕ",
      title: "Melléknevek",
      subtitle: "Прилагательное перед существительным и в сказуемом",
      note: "Главная модель этого слайда: перед существительным прилагательное обычно остаётся неизменным, а число и падеж выражает существительное.",
      warn: "Не превращай это в правило «прилагательное никогда не меняется». В сказуемом множественное число видно на самом прилагательном: A házak nagyok.",
      task: "Сравни две позиции прилагательного, затем выполни мини-проверку без подсказки. Сравнительную степень пока не образуй: она начинается на следующих слайдах.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что делает прилагательное</h4>

        <p>
          Прилагательное называет признак предмета: размер, качество, возраст, цвет и другие характеристики.
          В обычной группе «прилагательное + существительное» оно стоит <b>перед существительным</b>.
        </p>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th><th>Прилагательное</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy ház" data-speak-lang="hu-HU">nagy ház</button></td>
            <td>большой дом</td>
            <td><b>nagy</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép könyv" data-speak-lang="hu-HU">szép könyv</button></td>
            <td>красивая книга</td>
            <td><b>szép</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="új autó" data-speak-lang="hu-HU">új autó</button></td>
            <td>новая машина</td>
            <td><b>új</b></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Перед существительным прилагательное не получает число и падеж</h4>

        <table class="conj">
          <tr><th>Один предмет</th><th>Несколько</th><th>Прямое дополнение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy ház" data-speak-lang="hu-HU">nagy ház</button></td>
            <td><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button></td>
            <td><button class="speak-btn" data-speak-text="nagy házat" data-speak-lang="hu-HU">nagy házat</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép könyv" data-speak-lang="hu-HU">szép könyv</button></td>
            <td><button class="speak-btn" data-speak-text="szép könyvek" data-speak-lang="hu-HU">szép könyvek</button></td>
            <td><button class="speak-btn" data-speak-text="szép könyvet" data-speak-lang="hu-HU">szép könyvet</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="új autó" data-speak-lang="hu-HU">új autó</button></td>
            <td><button class="speak-btn" data-speak-text="új autók" data-speak-lang="hu-HU">új autók</button></td>
            <td><button class="speak-btn" data-speak-text="új autót" data-speak-lang="hu-HU">új autót</button></td>
          </tr>
        </table>

        <div class="note">
          Сравни: <b>nagy</b> остаётся тем же, а меняется существительное:
          <b>ház → házak → házat</b>.
          То же происходит в <b>szép könyvek</b> и <b>új autót</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Это работает и внутри предложения</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Что несёт -t</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Látok egy nagy házat." data-speak-lang="hu-HU">Látok egy nagy házat.</button></td>
            <td><b>házat</b>, не nagy</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok egy szép könyvet." data-speak-lang="hu-HU">Olvasok egy szép könyvet.</button></td>
            <td><b>könyvet</b>, не szép</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Veszek egy új autót." data-speak-lang="hu-HU">Veszek egy új autót.</button></td>
            <td><b>autót</b>, не új</td>
          </tr>
        </table>

        <div class="note">
          Это повторение винительного падежа из урока 7:
          если вся именная группа является прямым дополнением,
          показатель падежа находится на существительном.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Но в сказуемом правило другое</h4>

        <p>
          Когда прилагательное не стоит перед существительным, а само сообщает,
          <b>каков предмет</b>, оно является частью сказуемого.
          В настоящем времени третьего лица отдельное <b>van</b> здесь не ставится.
        </p>

        <table class="conj">
          <tr><th>Единственное число</th><th>Множественное число</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU">A ház nagy.</button></td>
            <td><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A könyv szép." data-speak-lang="hu-HU">A könyv szép.</button></td>
            <td><button class="speak-btn" data-speak-text="A könyvek szépek." data-speak-lang="hu-HU">A könyvek szépek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Az autó új." data-speak-lang="hu-HU">Az autó új.</button></td>
            <td><button class="speak-btn" data-speak-text="Az autók újak." data-speak-lang="hu-HU">Az autók újak.</button></td>
          </tr>
        </table>

        <div class="warn">
          Поэтому две формы не противоречат друг другу:
          <b>nagy házak</b> — «большие дома»,
          но <b>A házak nagyok.</b> — «Дома большие».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Правильно</th><th>Почему</th></tr>
          <tr>
            <td><s>nagyok házak</s></td>
            <td><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button></td>
            <td>перед существительным число выражает házak</td>
          </tr>
          <tr>
            <td><s>nagyot házat</s></td>
            <td><button class="speak-btn" data-speak-text="nagy házat" data-speak-lang="hu-HU">nagy házat</button></td>
            <td>винительный показатель находится на существительном</td>
          </tr>
          <tr>
            <td><s>A házak nagy.</s></td>
            <td><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button></td>
            <td>в сказуемом прилагательное во множественном числе</td>
          </tr>
          <tr>
            <td><s>A ház nagy van.</s></td>
            <td><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU">A ház nagy.</button></td>
            <td>в настоящем третьем лице связка здесь опускается</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Скажи по-венгерски: «большие дома».</li>
          <li>Скажи: «красивую книгу» как именную группу без глагола.</li>
          <li>Выбери форму для «Книги красивые»: <b>szép könyvek</b> или <b>A könyvek szépek.</b></li>
          <li>Объясни, почему в <b>nagy házat</b> форма <b>nagy</b> не меняется.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button></li>
            <li><button class="speak-btn" data-speak-text="szép könyvet" data-speak-lang="hu-HU">szép könyvet</button></li>
            <li><button class="speak-btn" data-speak-text="A könyvek szépek." data-speak-lang="hu-HU">A könyvek szépek.</button></li>
            <li>Потому что перед существительным число и падеж выражает существительное: <b>házat</b>.</li>
          </ol>
        </details>

        <div class="note">
          На этом слайде нужна только базовая форма прилагательного.
          Формы типа <b>nagyobb</b> и конструкции с <b>mint</b> будут введены отдельно дальше.
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: "УРОК 9 · 2/11 · ПАРЫ ПРОТИВОПОЛОЖНОСТЕЙ",
      title: "Ellentétek",
      subtitle: "Частые прилагательные — не списком, а в контексте",
      note: "На этом слайде закрепляем только базовые формы прилагательных и их значения. Сравнительную степень пока не образуем.",
      warn: "Не учи слова изолированно: одно и то же прилагательное может переводиться по-разному в зависимости от существительного и ситуации.",
      task: "Прослушай каждую пару, затем закрой русский перевод и назови противоположное слово. После этого выполни мини-проверку.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Восемь полезных пар</h4>

        <table class="conj">
          <tr><th>Слово</th><th>Противоположность</th><th>Основное значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU">nagy</button></td>
            <td><button class="speak-btn" data-speak-text="kicsi" data-speak-lang="hu-HU">kicsi</button></td>
            <td>большой ↔ маленький</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU">jó</button></td>
            <td><button class="speak-btn" data-speak-text="rossz" data-speak-lang="hu-HU">rossz</button></td>
            <td>хороший ↔ плохой</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU">szép</button></td>
            <td><button class="speak-btn" data-speak-text="csúnya" data-speak-lang="hu-HU">csúnya</button></td>
            <td>красивый ↔ некрасивый / уродливый</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="új" data-speak-lang="hu-HU">új</button></td>
            <td><button class="speak-btn" data-speak-text="régi" data-speak-lang="hu-HU">régi</button></td>
            <td>новый ↔ старый</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="meleg" data-speak-lang="hu-HU">meleg</button></td>
            <td><button class="speak-btn" data-speak-text="hideg" data-speak-lang="hu-HU">hideg</button></td>
            <td>тёплый ↔ холодный</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="drága" data-speak-lang="hu-HU">drága</button></td>
            <td><button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU">olcsó</button></td>
            <td>дорогой ↔ дешёвый</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könnyű" data-speak-lang="hu-HU">könnyű</button></td>
            <td><button class="speak-btn" data-speak-text="nehéz" data-speak-lang="hu-HU">nehéz</button></td>
            <td>лёгкий ↔ тяжёлый / трудный</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyors" data-speak-lang="hu-HU">gyors</button></td>
            <td><button class="speak-btn" data-speak-text="lassú" data-speak-lang="hu-HU">lassú</button></td>
            <td>быстрый ↔ медленный</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Важная пара: kis и kicsi</h4>

        <p>
          Для значения «маленький» перед существительным очень часто используется
          <button class="speak-btn" data-speak-text="kis" data-speak-lang="hu-HU">kis</button>.
          Форма
          <button class="speak-btn" data-speak-text="kicsi" data-speak-lang="hu-HU">kicsi</button>
          тоже правильная, но особенно полезна, когда прилагательное стоит самостоятельно или в сказуемом.
        </p>

        <table class="conj">
          <tr><th>Позиция</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>перед существительным</td>
            <td><button class="speak-btn" data-speak-text="kis ház" data-speak-lang="hu-HU">kis ház</button></td>
            <td>маленький дом</td>
          </tr>
          <tr>
            <td>перед существительным</td>
            <td><button class="speak-btn" data-speak-text="kicsi ház" data-speak-lang="hu-HU">kicsi ház</button></td>
            <td>маленький дом — тоже возможно</td>
          </tr>
          <tr>
            <td>сказуемое</td>
            <td><button class="speak-btn" data-speak-text="A ház kicsi." data-speak-lang="hu-HU">A ház kicsi.</button></td>
            <td>Дом маленький.</td>
          </tr>
        </table>

        <div class="note">
          Для активной модели запомни:
          <button class="speak-btn" data-speak-text="nagy ház" data-speak-lang="hu-HU">nagy ház</button>
          ↔
          <button class="speak-btn" data-speak-text="kis ház" data-speak-lang="hu-HU">kis ház</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Значение зависит от контекста</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Естественный перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könnyű táska" data-speak-lang="hu-HU">könnyű táska</button></td>
            <td>лёгкая сумка — небольшой вес</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nehéz táska" data-speak-lang="hu-HU">nehéz táska</button></td>
            <td>тяжёлая сумка</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könnyű feladat" data-speak-lang="hu-HU">könnyű feladat</button></td>
            <td>лёгкое задание — несложное</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nehéz feladat" data-speak-lang="hu-HU">nehéz feladat</button></td>
            <td>трудное задание</td>
          </tr>
        </table>

        <div class="note">
          Не привязывай
          <button class="speak-btn" data-speak-text="könnyű" data-speak-lang="hu-HU">könnyű</button>
          только к «лёгкий по весу», а
          <button class="speak-btn" data-speak-text="nehéz" data-speak-lang="hu-HU">nehéz</button>
          только к «тяжёлый».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Пары в коротких фразах</h4>

        <table class="conj">
          <tr><th>Вариант A</th><th>Вариант B</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez egy nagy ház." data-speak-lang="hu-HU">Ez egy nagy ház.</button></td>
            <td><button class="speak-btn" data-speak-text="Ez egy kis ház." data-speak-lang="hu-HU">Ez egy kis ház.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A film jó." data-speak-lang="hu-HU">A film jó.</button></td>
            <td><button class="speak-btn" data-speak-text="A film rossz." data-speak-lang="hu-HU">A film rossz.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Az autó új." data-speak-lang="hu-HU">Az autó új.</button></td>
            <td><button class="speak-btn" data-speak-text="Az autó régi." data-speak-lang="hu-HU">Az autó régi.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A telefon drága." data-speak-lang="hu-HU">A telefon drága.</button></td>
            <td><button class="speak-btn" data-speak-text="A telefon olcsó." data-speak-lang="hu-HU">A telefon olcsó.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A vonat gyors." data-speak-lang="hu-HU">A vonat gyors.</button></td>
            <td><button class="speak-btn" data-speak-text="A busz lassú." data-speak-lang="hu-HU">A busz lassú.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Типичные ошибки</h4>

        <ul class="tick">
          <li>Не объединяй два разных слова в одну «форму»: <button class="speak-btn" data-speak-text="kis" data-speak-lang="hu-HU">kis</button> и <button class="speak-btn" data-speak-text="kicsi" data-speak-lang="hu-HU">kicsi</button> — отдельные формы с перекрывающимся значением.</li>
          <li>Не переводи <button class="speak-btn" data-speak-text="nehéz" data-speak-lang="hu-HU">nehéz</button> всегда как «тяжёлый»: с заданием это обычно «трудный».</li>
          <li>Не начинай пока образовывать сравнительные формы. На этом шаге задача — уверенно узнавать базовые прилагательные.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Назови противоположность словам «дорогой», «быстрый», «новый».</li>
          <li>Скажи «маленький дом» с основной моделью перед существительным.</li>
          <li>Как перевести сочетание «трудное задание»?</li>
          <li>Скажи две короткие фразы: «Фильм хороший» и «Фильм плохой».</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li>
              <button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU">olcsó</button>,
              <button class="speak-btn" data-speak-text="lassú" data-speak-lang="hu-HU">lassú</button>,
              <button class="speak-btn" data-speak-text="régi" data-speak-lang="hu-HU">régi</button>
            </li>
            <li><button class="speak-btn" data-speak-text="kis ház" data-speak-lang="hu-HU">kis ház</button></li>
            <li><button class="speak-btn" data-speak-text="nehéz feladat" data-speak-lang="hu-HU">nehéz feladat</button></li>
            <li>
              <button class="speak-btn" data-speak-text="A film jó." data-speak-lang="hu-HU">A film jó.</button>
              /
              <button class="speak-btn" data-speak-text="A film rossz." data-speak-lang="hu-HU">A film rossz.</button>
            </li>
          </ol>
        </details>
      `,
    },
    {
      id: 3,
      eyebrow: "УРОК 9 · 3/11 · ЦВЕТА",
      title: "Színek",
      subtitle: "Цвета в словах, сочетаниях и коротких фразах",
      note: "Сначала выучи восемь базовых цветов. Затем используй их в модели «цвет + существительное» и в вопросе Milyen színű?",
      warn: "Не учи piros и vörös как два строго разных оттенка. Оба означают «красный», но в повседневном активном словаре начинай с piros; vörös часто встречается в отдельных словах и устойчивых сочетаниях.",
      task: "Нажми на каждый цвет и повтори. Затем закрой русский перевод, назови цвет по образцу и выполни мини-проверку.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Восемь базовых цветов</h4>

        <table class="conj">
          <tr><th>Цвет</th><th>Венгерский</th><th>Русский</th></tr>
          <tr>
            <td><span aria-hidden="true" style="display:inline-block;width:1.25rem;height:1.25rem;border-radius:999px;background:#d32f2f;border:1px solid #8a7a68;"></span></td>
            <td><button class="speak-btn" data-speak-text="piros" data-speak-lang="hu-HU">piros</button></td>
            <td>красный</td>
          </tr>
          <tr>
            <td><span aria-hidden="true" style="display:inline-block;width:1.25rem;height:1.25rem;border-radius:999px;background:#1976d2;border:1px solid #8a7a68;"></span></td>
            <td><button class="speak-btn" data-speak-text="kék" data-speak-lang="hu-HU">kék</button></td>
            <td>синий / голубой</td>
          </tr>
          <tr>
            <td><span aria-hidden="true" style="display:inline-block;width:1.25rem;height:1.25rem;border-radius:999px;background:#388e3c;border:1px solid #8a7a68;"></span></td>
            <td><button class="speak-btn" data-speak-text="zöld" data-speak-lang="hu-HU">zöld</button></td>
            <td>зелёный</td>
          </tr>
          <tr>
            <td><span aria-hidden="true" style="display:inline-block;width:1.25rem;height:1.25rem;border-radius:999px;background:#fbc02d;border:1px solid #8a7a68;"></span></td>
            <td><button class="speak-btn" data-speak-text="sárga" data-speak-lang="hu-HU">sárga</button></td>
            <td>жёлтый</td>
          </tr>
          <tr>
            <td><span aria-hidden="true" style="display:inline-block;width:1.25rem;height:1.25rem;border-radius:999px;background:#ffffff;border:1px solid #8a7a68;"></span></td>
            <td><button class="speak-btn" data-speak-text="fehér" data-speak-lang="hu-HU">fehér</button></td>
            <td>белый</td>
          </tr>
          <tr>
            <td><span aria-hidden="true" style="display:inline-block;width:1.25rem;height:1.25rem;border-radius:999px;background:#111111;border:1px solid #8a7a68;"></span></td>
            <td><button class="speak-btn" data-speak-text="fekete" data-speak-lang="hu-HU">fekete</button></td>
            <td>чёрный</td>
          </tr>
          <tr>
            <td><span aria-hidden="true" style="display:inline-block;width:1.25rem;height:1.25rem;border-radius:999px;background:#808080;border:1px solid #8a7a68;"></span></td>
            <td><button class="speak-btn" data-speak-text="szürke" data-speak-lang="hu-HU">szürke</button></td>
            <td>серый</td>
          </tr>
          <tr>
            <td><span aria-hidden="true" style="display:inline-block;width:1.25rem;height:1.25rem;border-radius:999px;background:#795548;border:1px solid #8a7a68;"></span></td>
            <td><button class="speak-btn" data-speak-text="barna" data-speak-lang="hu-HU">barna</button></td>
            <td>коричневый</td>
          </tr>
        </table>

        <div class="note">
          Венгерское <button class="speak-btn" data-speak-text="kék" data-speak-lang="hu-HU">kék</button>
          покрывает обычное значение «синий / голубой».
          Если нужно специально сказать «светло-синий / голубой», можно уточнить:
          <button class="speak-btn" data-speak-text="világoskék" data-speak-lang="hu-HU">világoskék</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Piros и vörös</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Как использовать на этом уровне</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="piros" data-speak-lang="hu-HU">piros</button></td>
            <td>обычное активное слово «красный»</td>
            <td><button class="speak-btn" data-speak-text="piros autó" data-speak-lang="hu-HU">piros autó</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vörös" data-speak-lang="hu-HU">vörös</button></td>
            <td>тоже «красный»; часто встречается в закреплённых сочетаниях</td>
            <td>
              <button class="speak-btn" data-speak-text="vörösbor" data-speak-lang="hu-HU">vörösbor</button>,
              <button class="speak-btn" data-speak-text="vöröshagyma" data-speak-lang="hu-HU">vöröshagyma</button>
            </td>
          </tr>
        </table>

        <div class="warn">
          Не делай правило «piros = светло-красный, vörös = тёмно-красный».
          Такое механическое деление ненадёжно. Для обычного предмета на A1 безопасная активная модель:
          <button class="speak-btn" data-speak-text="piros autó" data-speak-lang="hu-HU">piros autó</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Цвет перед существительным</h4>

        <p>
          Цвет ведёт себя как обычное прилагательное из 9.1:
          перед существительным он не получает показатель числа или винительного падежа.
        </p>

        <table class="conj">
          <tr><th>Один предмет</th><th>Несколько</th><th>Прямое дополнение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="piros autó" data-speak-lang="hu-HU">piros autó</button></td>
            <td><button class="speak-btn" data-speak-text="piros autók" data-speak-lang="hu-HU">piros autók</button></td>
            <td><button class="speak-btn" data-speak-text="piros autót" data-speak-lang="hu-HU">piros autót</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kék könyv" data-speak-lang="hu-HU">kék könyv</button></td>
            <td><button class="speak-btn" data-speak-text="kék könyvek" data-speak-lang="hu-HU">kék könyvek</button></td>
            <td><button class="speak-btn" data-speak-text="kék könyvet" data-speak-lang="hu-HU">kék könyvet</button></td>
          </tr>
        </table>

        <div class="note">
          Сравни: <b>piros</b> остаётся неизменным, а меняется существительное:
          <button class="speak-btn" data-speak-text="autó" data-speak-lang="hu-HU">autó</button>
          →
          <button class="speak-btn" data-speak-text="autók" data-speak-lang="hu-HU">autók</button>
          →
          <button class="speak-btn" data-speak-text="autót" data-speak-lang="hu-HU">autót</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как спросить «Какого цвета?»</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen színű a kabát?" data-speak-lang="hu-HU">Milyen színű a kabát?</button></td>
            <td><button class="speak-btn" data-speak-text="A kabát kék." data-speak-lang="hu-HU">A kabát kék.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Milyen színű az autó?" data-speak-lang="hu-HU">Milyen színű az autó?</button></td>
            <td><button class="speak-btn" data-speak-text="Az autó piros." data-speak-lang="hu-HU">Az autó piros.</button></td>
          </tr>
        </table>

        <div class="note">
          Полезная готовая модель:
          <button class="speak-btn" data-speak-text="Milyen színű?" data-speak-lang="hu-HU">Milyen színű?</button>
          — «Какого цвета?».
          На этом уровне её можно запомнить целиком, без разбора образования слова <b>színű</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Перед существительным и в сказуемом</h4>

        <table class="conj">
          <tr><th>Перед существительным</th><th>Сказуемое</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="piros autók" data-speak-lang="hu-HU">piros autók</button></td>
            <td><button class="speak-btn" data-speak-text="Az autók pirosak." data-speak-lang="hu-HU">Az autók pirosak.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kék könyvek" data-speak-lang="hu-HU">kék könyvek</button></td>
            <td><button class="speak-btn" data-speak-text="A könyvek kékek." data-speak-lang="hu-HU">A könyvek kékek.</button></td>
          </tr>
        </table>

        <div class="warn">
          Типичная ошибка: <s>pirosak autók</s>.
          Перед существительным правильно:
          <button class="speak-btn" data-speak-text="piros autók" data-speak-lang="hu-HU">piros autók</button>.
          Но в сказуемом:
          <button class="speak-btn" data-speak-text="Az autók pirosak." data-speak-lang="hu-HU">Az autók pirosak.</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Скажи по-венгерски «красная машина».</li>
          <li>Скажи «синие книги».</li>
          <li>Спроси: «Какого цвета куртка?»</li>
          <li>Скажи: «Машины красные».</li>
          <li>Какое слово лучше взять первым для обычного значения «красный»: <b>piros</b> или <b>vörös</b>?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="piros autó" data-speak-lang="hu-HU">piros autó</button></li>
            <li><button class="speak-btn" data-speak-text="kék könyvek" data-speak-lang="hu-HU">kék könyvek</button></li>
            <li><button class="speak-btn" data-speak-text="Milyen színű a kabát?" data-speak-lang="hu-HU">Milyen színű a kabát?</button></li>
            <li><button class="speak-btn" data-speak-text="Az autók pirosak." data-speak-lang="hu-HU">Az autók pirosak.</button></li>
            <li><button class="speak-btn" data-speak-text="piros" data-speak-lang="hu-HU">piros</button></li>
          </ol>
        </details>
      `,
    },
    {
      id: 4,
      eyebrow: "УРОК 9 · 4/11 · СРАВНИТЕЛЬНАЯ СТЕПЕНЬ",
      title: "Középfok (-bb)",
      subtitle: "Как сказать «больше», «дешевле», «лучше»",
      note: "Сравнительная степень имеет показатель -bb, но форма основы и соединительная гласная у частых прилагательных могут меняться. Поэтому активные формы учим как готовые пары.",
      warn: "Не используй механическое правило «слово + bb». Формы *nagybb, *szépbb, *jóbb и *kicsibb неверны.",
      task: "Прослушай базовую и сравнительную форму каждой пары. Затем закрой правый столбец, восстанови формы по памяти и выполни мини-проверку.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что означает сравнительная степень</h4>

        <p>
          Сравнительная степень показывает, что признак выражен <b>сильнее</b>:
          «больше», «красивее», «дешевле», «лучше».
        </p>

        <table class="conj">
          <tr><th>Обычная форма</th><th>Сравнительная форма</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU">nagy</button></td>
            <td><button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button></td>
            <td>большой → больше</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU">szép</button></td>
            <td><button class="speak-btn" data-speak-text="szebb" data-speak-lang="hu-HU">szebb</button></td>
            <td>красивый → красивее</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU">jó</button></td>
            <td><button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button></td>
            <td>хороший → лучше</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kicsi" data-speak-lang="hu-HU">kicsi</button></td>
            <td><button class="speak-btn" data-speak-text="kisebb" data-speak-lang="hu-HU">kisebb</button></td>
            <td>маленький → меньше</td>
          </tr>
        </table>

        <div class="note">
          Во всех этих формах сравнительная степень связана с <b>-bb</b>,
          но результат нельзя надёжно получить простым приписыванием двух букв к словарной форме.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Частые формы, которые нужны сразу</h4>

        <table class="conj">
          <tr><th>Базовая форма</th><th>Сравнительная</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU">olcsó</button></td>
            <td><button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU">olcsóbb</button></td>
            <td>дешевле</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="drága" data-speak-lang="hu-HU">drága</button></td>
            <td><button class="speak-btn" data-speak-text="drágább" data-speak-lang="hu-HU">drágább</button></td>
            <td>дороже</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="új" data-speak-lang="hu-HU">új</button></td>
            <td><button class="speak-btn" data-speak-text="újabb" data-speak-lang="hu-HU">újabb</button></td>
            <td>новее</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyors" data-speak-lang="hu-HU">gyors</button></td>
            <td><button class="speak-btn" data-speak-text="gyorsabb" data-speak-lang="hu-HU">gyorsabb</button></td>
            <td>быстрее</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lassú" data-speak-lang="hu-HU">lassú</button></td>
            <td><button class="speak-btn" data-speak-text="lassabb" data-speak-lang="hu-HU">lassabb</button></td>
            <td>медленнее</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könnyű" data-speak-lang="hu-HU">könnyű</button></td>
            <td><button class="speak-btn" data-speak-text="könnyebb" data-speak-lang="hu-HU">könnyebb</button></td>
            <td>легче</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nehéz" data-speak-lang="hu-HU">nehéz</button></td>
            <td><button class="speak-btn" data-speak-text="nehezebb" data-speak-lang="hu-HU">nehezebb</button></td>
            <td>тяжелее / труднее</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Что именно меняется</h4>

        <table class="conj">
          <tr><th>Наблюдение</th><th>Примеры</th></tr>
          <tr>
            <td>иногда форма выглядит почти прозрачно</td>
            <td>
              <button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU">olcsóbb</button>,
              <button class="speak-btn" data-speak-text="újabb" data-speak-lang="hu-HU">újabb</button>,
              <button class="speak-btn" data-speak-text="gyorsabb" data-speak-lang="hu-HU">gyorsabb</button>
            </td>
          </tr>
          <tr>
            <td>может появиться соединительная гласная или измениться основа</td>
            <td>
              <button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button>,
              <button class="speak-btn" data-speak-text="nehezebb" data-speak-lang="hu-HU">nehezebb</button>,
              <button class="speak-btn" data-speak-text="drágább" data-speak-lang="hu-HU">drágább</button>
            </td>
          </tr>
          <tr>
            <td>некоторые частые формы нужно просто запомнить</td>
            <td>
              <button class="speak-btn" data-speak-text="szebb" data-speak-lang="hu-HU">szebb</button>,
              <button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button>,
              <button class="speak-btn" data-speak-text="kisebb" data-speak-lang="hu-HU">kisebb</button>
            </td>
          </tr>
        </table>

        <div class="note">
          На A1 не нужно выводить каждую форму по сложной морфологической таблице.
          Практичнее запомнить частые пары и замечать в них показатель сравнительной степени.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как использовать сравнительную форму</h4>

        <p>
          Сравнительная форма может стоять перед существительным или быть частью сказуемого.
          Пока не называем второй объект сравнения — слово <b>mint</b> будет на следующем слайде.
        </p>

        <table class="conj">
          <tr><th>Перед существительным</th><th>В сказуемом</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy nagyobb lakás" data-speak-lang="hu-HU">egy nagyobb lakás</button></td>
            <td><button class="speak-btn" data-speak-text="Ez a lakás nagyobb." data-speak-lang="hu-HU">Ez a lakás nagyobb.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy olcsóbb telefon" data-speak-lang="hu-HU">egy olcsóbb telefon</button></td>
            <td><button class="speak-btn" data-speak-text="Ez a telefon olcsóbb." data-speak-lang="hu-HU">Ez a telefon olcsóbb.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="egy jobb választás" data-speak-lang="hu-HU">egy jobb választás</button></td>
            <td><button class="speak-btn" data-speak-text="Ez jobb." data-speak-lang="hu-HU">Ez jobb.</button></td>
          </tr>
        </table>

        <div class="note">
          Перед существительным сравнительное прилагательное остаётся прилагательным:
          <button class="speak-btn" data-speak-text="nagyobb házak" data-speak-lang="hu-HU">nagyobb házak</button>,
          а не <s>nagyobbak házak</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Правильно</th><th>Что запомнить</th></tr>
          <tr>
            <td><s>nagybb</s></td>
            <td><button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button></td>
            <td>готовая форма</td>
          </tr>
          <tr>
            <td><s>szépbb</s></td>
            <td><button class="speak-btn" data-speak-text="szebb" data-speak-lang="hu-HU">szebb</button></td>
            <td>основа меняется</td>
          </tr>
          <tr>
            <td><s>jóbb</s></td>
            <td><button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button></td>
            <td>частая нерегулярная форма</td>
          </tr>
          <tr>
            <td><s>kicsibb</s></td>
            <td><button class="speak-btn" data-speak-text="kisebb" data-speak-lang="hu-HU">kisebb</button></td>
            <td>частая нерегулярная форма</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Образуй «больше» от <b>nagy</b>.</li>
          <li>Образуй «лучше» от <b>jó</b>.</li>
          <li>Образуй «меньше» от <b>kicsi</b>.</li>
          <li>Скажи «более дешёвый телефон».</li>
          <li>Скажи «Эта квартира больше» — без указания второго объекта.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button></li>
            <li><button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button></li>
            <li><button class="speak-btn" data-speak-text="kisebb" data-speak-lang="hu-HU">kisebb</button></li>
            <li><button class="speak-btn" data-speak-text="egy olcsóbb telefon" data-speak-lang="hu-HU">egy olcsóbb telefon</button></li>
            <li><button class="speak-btn" data-speak-text="Ez a lakás nagyobb." data-speak-lang="hu-HU">Ez a lakás nagyobb.</button></li>
          </ol>
        </details>

        <div class="note">
          Следующий шаг — назвать, <b>с чем</b> мы сравниваем:
          конструкция с <b>mint</b> разбирается отдельно на 9.5.
        </div>
      `,
    },
    {
      id: 5,
      eyebrow: "УРОК 9 · 5/11 · СРАВНЕНИЕ С MINT",
      title: "Összehasonlítás (mint)",
      subtitle: "Как назвать второй объект сравнения",
      note: "Сначала нужна сравнительная форма из 9.4, затем mint присоединяет второй объект: X + сравнительная форма + mint + Y.",
      warn: "В письменном сравнении перед mint ставится запятая: nagyobb, mint; jobb, mint; olcsóbb, mint. Не заменяй сравнительную форму обычным прилагательным.",
      task: "Прочитай модель слева направо, затем перестрой четыре пары в полные предложения и выполни мини-проверку.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Базовая модель</h4>

        <div class="note">
          <b>X + сравнительная форма + , mint + Y</b>
        </div>

        <table class="conj">
          <tr><th>Часть</th><th>Пример</th><th>Функция</th></tr>
          <tr>
            <td>X</td>
            <td><button class="speak-btn" data-speak-text="ez a ház" data-speak-lang="hu-HU">ez a ház</button></td>
            <td>что сравниваем</td>
          </tr>
          <tr>
            <td>сравнительная форма</td>
            <td><button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button></td>
            <td>«больше»</td>
          </tr>
          <tr>
            <td>mint</td>
            <td><button class="speak-btn" data-speak-text="mint" data-speak-lang="hu-HU">mint</button></td>
            <td>«чем» в этом сравнении</td>
          </tr>
          <tr>
            <td>Y</td>
            <td><button class="speak-btn" data-speak-text="az a ház" data-speak-lang="hu-HU">az a ház</button></td>
            <td>с чем сравниваем</td>
          </tr>
        </table>

        <p>
          Полное предложение:
          <button class="speak-btn" data-speak-text="Ez a ház nagyobb, mint az a ház." data-speak-lang="hu-HU">Ez a ház nagyobb, mint az a ház.</button>
        </p>

        <div class="note">
          Важно: <b>mint</b> само не делает форму сравнительной.
          Сравнительная форма уже должна быть готова:
          <button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button>,
          <button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button>,
          <button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU">olcsóbb</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Четыре частые модели</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A kávé jobb, mint a tea." data-speak-lang="hu-HU">A kávé jobb, mint a tea.</button></td>
            <td>Кофе лучше, чем чай.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A metró gyorsabb, mint a busz." data-speak-lang="hu-HU">A metró gyorsabb, mint a busz.</button></td>
            <td>Метро быстрее, чем автобус.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button></td>
            <td>Квартира B дешевле квартиры A.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A piros autó gyorsabb, mint a kék autó." data-speak-lang="hu-HU">A piros autó gyorsabb, mint a kék autó.</button></td>
            <td>Красная машина быстрее синей.</td>
          </tr>
        </table>

        <div class="note">
          Цвета из 9.3 и сравнительные формы из 9.4 теперь работают вместе:
          <button class="speak-btn" data-speak-text="piros autó" data-speak-lang="hu-HU">piros autó</button>
          +
          <button class="speak-btn" data-speak-text="gyorsabb" data-speak-lang="hu-HU">gyorsabb</button>
          +
          <button class="speak-btn" data-speak-text="mint a kék autó" data-speak-lang="hu-HU">mint a kék autó</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Вопрос и полный ответ</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik lakás olcsóbb?" data-speak-lang="hu-HU">Melyik lakás olcsóbb?</button></td>
            <td><button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik autó gyorsabb?" data-speak-lang="hu-HU">Melyik autó gyorsabb?</button></td>
            <td><button class="speak-btn" data-speak-text="A piros autó gyorsabb, mint a kék autó." data-speak-lang="hu-HU">A piros autó gyorsabb, mint a kék autó.</button></td>
          </tr>
        </table>

        <div class="note">
          <button class="speak-btn" data-speak-text="Melyik?" data-speak-lang="hu-HU">Melyik?</button>
          означает «который / какой из вариантов?».
          Здесь оно помогает выбрать один объект из двух.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Запятая перед mint</h4>

        <p>
          В сравнительной конструкции <b>mint</b> вводит сравнение, поэтому в письме перед ним ставится запятая.
        </p>

        <table class="conj">
          <tr><th>Правильно</th><th>Обрати внимание</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jobb, mint" data-speak-lang="hu-HU">jobb, mint</button></td>
            <td>запятая перед mint</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagyobb, mint" data-speak-lang="hu-HU">nagyobb, mint</button></td>
            <td>запятая перед mint</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olcsóbb, mint" data-speak-lang="hu-HU">olcsóbb, mint</button></td>
            <td>запятая перед mint</td>
          </tr>
        </table>

        <div class="note">
          В речи запятую, конечно, не произносят; это правило письменного оформления предложения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Правильно</th><th>Почему</th></tr>
          <tr>
            <td><s>Ez a ház nagy, mint az a ház.</s></td>
            <td><button class="speak-btn" data-speak-text="Ez a ház nagyobb, mint az a ház." data-speak-lang="hu-HU">Ez a ház nagyobb, mint az a ház.</button></td>
            <td>нужна сравнительная форма nagyobb</td>
          </tr>
          <tr>
            <td><s>A kávé jó, mint a tea.</s></td>
            <td><button class="speak-btn" data-speak-text="A kávé jobb, mint a tea." data-speak-lang="hu-HU">A kávé jobb, mint a tea.</button></td>
            <td>jó → jobb</td>
          </tr>
          <tr>
            <td><s>A B lakás olcsóbb az A lakás.</s></td>
            <td><button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button></td>
            <td>на этом уровне используй явную модель с mint</td>
          </tr>
          <tr>
            <td><s>A metró gyorsabb mint a busz.</s></td>
            <td><button class="speak-btn" data-speak-text="A metró gyorsabb, mint a busz." data-speak-lang="hu-HU">A metró gyorsabb, mint a busz.</button></td>
            <td>в письме нужна запятая</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Скажи: «Кофе лучше, чем чай».</li>
          <li>Скажи: «Метро быстрее, чем автобус».</li>
          <li>Спроси: «Какая квартира дешевле?»</li>
          <li>Скажи: «Квартира B дешевле квартиры A».</li>
          <li>Объясни, что делает <b>mint</b>, а что делает форма <b>olcsóbb</b>.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="A kávé jobb, mint a tea." data-speak-lang="hu-HU">A kávé jobb, mint a tea.</button></li>
            <li><button class="speak-btn" data-speak-text="A metró gyorsabb, mint a busz." data-speak-lang="hu-HU">A metró gyorsabb, mint a busz.</button></li>
            <li><button class="speak-btn" data-speak-text="Melyik lakás olcsóbb?" data-speak-lang="hu-HU">Melyik lakás olcsóbb?</button></li>
            <li><button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button></li>
            <li><b>olcsóbb</b> выражает «дешевле», а <b>mint</b> присоединяет второй объект: «чем ...».</li>
          </ol>
        </details>

        <div class="note">
          На этом слайде работаем только со сравнительной степенью.
          Превосходная форма с <b>leg-</b> начинается на 9.6.
        </div>
      `,
    },
    {
      id: 6,
      eyebrow: "УРОК 9 · 6/11 · ПРЕВОСХОДНАЯ СТЕПЕНЬ",
      title: "Felsőfok (leg-)",
      subtitle: "Как сказать «самый большой», «лучший», «самый дешёвый»",
      note: "Превосходная степень строится от уже готовой сравнительной формы: сравнительная форма → leg- + сравнительная форма.",
      warn: "Не добавляй leg- к исходному прилагательному наугад: *legnagy, *legjó, *legolcsó неверны. Сначала вспомни nagyobb, jobb, olcsóbb — затем legnagyobb, legjobb, legolcsóbb.",
      task: "Пройди цепочки обычная → сравнительная → превосходная. Затем сравни модели с mint и с leg-, восстанови формы по памяти и выполни мини-проверку.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Главная формула</h4>

        <div class="note">
          <b>обычная форма → сравнительная форма → leg- + сравнительная форма</b>
        </div>

        <table class="conj">
          <tr><th>Обычная</th><th>Сравнительная</th><th>Превосходная</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU">nagy</button></td>
            <td><button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button></td>
            <td><button class="speak-btn" data-speak-text="legnagyobb" data-speak-lang="hu-HU">legnagyobb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép" data-speak-lang="hu-HU">szép</button></td>
            <td><button class="speak-btn" data-speak-text="szebb" data-speak-lang="hu-HU">szebb</button></td>
            <td><button class="speak-btn" data-speak-text="legszebb" data-speak-lang="hu-HU">legszebb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU">jó</button></td>
            <td><button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button></td>
            <td><button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU">legjobb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kicsi" data-speak-lang="hu-HU">kicsi</button></td>
            <td><button class="speak-btn" data-speak-text="kisebb" data-speak-lang="hu-HU">kisebb</button></td>
            <td><button class="speak-btn" data-speak-text="legkisebb" data-speak-lang="hu-HU">legkisebb</button></td>
          </tr>
        </table>

        <div class="note">
          Самая полезная цепочка для запоминания:
          <button class="speak-btn" data-speak-text="jó, jobb, legjobb" data-speak-lang="hu-HU">jó → jobb → legjobb</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Ещё частые цепочки</h4>

        <table class="conj">
          <tr><th>Обычная</th><th>Сравнительная</th><th>Превосходная</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU">olcsó</button></td>
            <td><button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU">olcsóbb</button></td>
            <td><button class="speak-btn" data-speak-text="legolcsóbb" data-speak-lang="hu-HU">legolcsóbb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="drága" data-speak-lang="hu-HU">drága</button></td>
            <td><button class="speak-btn" data-speak-text="drágább" data-speak-lang="hu-HU">drágább</button></td>
            <td><button class="speak-btn" data-speak-text="legdrágább" data-speak-lang="hu-HU">legdrágább</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyors" data-speak-lang="hu-HU">gyors</button></td>
            <td><button class="speak-btn" data-speak-text="gyorsabb" data-speak-lang="hu-HU">gyorsabb</button></td>
            <td><button class="speak-btn" data-speak-text="leggyorsabb" data-speak-lang="hu-HU">leggyorsabb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lassú" data-speak-lang="hu-HU">lassú</button></td>
            <td><button class="speak-btn" data-speak-text="lassabb" data-speak-lang="hu-HU">lassabb</button></td>
            <td><button class="speak-btn" data-speak-text="leglassabb" data-speak-lang="hu-HU">leglassabb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="könnyű" data-speak-lang="hu-HU">könnyű</button></td>
            <td><button class="speak-btn" data-speak-text="könnyebb" data-speak-lang="hu-HU">könnyebb</button></td>
            <td><button class="speak-btn" data-speak-text="legkönnyebb" data-speak-lang="hu-HU">legkönnyebb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nehéz" data-speak-lang="hu-HU">nehéz</button></td>
            <td><button class="speak-btn" data-speak-text="nehezebb" data-speak-lang="hu-HU">nehezebb</button></td>
            <td><button class="speak-btn" data-speak-text="legnehezebb" data-speak-lang="hu-HU">legnehezebb</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Артикль a / az в готовой модели</h4>

        <p>
          Для A1 используй устойчивую модель с определённым артиклем:
          <b>a / az + leg-форма + существительное</b>.
        </p>

        <table class="conj">
          <tr><th>Перед существительным</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a legjobb választás" data-speak-lang="hu-HU">a legjobb választás</button></td>
            <td>лучший выбор</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a legolcsóbb telefon" data-speak-lang="hu-HU">a legolcsóbb telefon</button></td>
            <td>самый дешёвый телефон</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a legnagyobb lakás" data-speak-lang="hu-HU">a legnagyobb lakás</button></td>
            <td>самая большая квартира</td>
          </tr>
        </table>

        <div class="warn">
          На этом уровне для обычной определённой именной группы используй артикль:
          <button class="speak-btn" data-speak-text="a legjobb választás" data-speak-lang="hu-HU">a legjobb választás</button>,
          <button class="speak-btn" data-speak-text="a legolcsóbb telefon" data-speak-lang="hu-HU">a legolcsóbb telefon</button>.
          Не запоминай <b>leg-</b> как замену артиклю.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. В сказуемом</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez a telefon a legolcsóbb." data-speak-lang="hu-HU">Ez a telefon a legolcsóbb.</button></td>
            <td>Этот телефон самый дешёвый.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez a lakás a legnagyobb." data-speak-lang="hu-HU">Ez a lakás a legnagyobb.</button></td>
            <td>Эта квартира самая большая.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez a legjobb." data-speak-lang="hu-HU">Ez a legjobb.</button></td>
            <td>Это лучшее / это самый лучший вариант.</td>
          </tr>
        </table>

        <div class="note">
          В единственном числе настоящего времени отдельного слова «есть» здесь нет:
          <button class="speak-btn" data-speak-text="Ez a legjobb." data-speak-lang="hu-HU">Ez a legjobb.</button>,
          не <s>Ez van a legjobb.</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Сравнительная или превосходная?</h4>

        <table class="conj">
          <tr><th>Сравниваем два объекта</th><th>Выбираем максимум из группы</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button></td>
            <td><button class="speak-btn" data-speak-text="A C lakás a legolcsóbb." data-speak-lang="hu-HU">A C lakás a legolcsóbb.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A metró gyorsabb, mint a busz." data-speak-lang="hu-HU">A metró gyorsabb, mint a busz.</button></td>
            <td><button class="speak-btn" data-speak-text="A metró a leggyorsabb." data-speak-lang="hu-HU">A metró a leggyorsabb.</button></td>
          </tr>
        </table>

        <div class="note">
          В базовой превосходной конструкции второй объект после <b>mint</b> не нужен:
          мы уже говорим «самый / лучший» внутри выбранной группы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Вопрос и ответ</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik a legjobb?" data-speak-lang="hu-HU">Melyik a legjobb?</button></td>
            <td><button class="speak-btn" data-speak-text="Szerintem a B lakás a legjobb." data-speak-lang="hu-HU">Szerintem a B a legjobb.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik telefon a legolcsóbb?" data-speak-lang="hu-HU">Melyik telefon a legolcsóbb?</button></td>
            <td><button class="speak-btn" data-speak-text="A C telefon a legolcsóbb." data-speak-lang="hu-HU">A C telefon a legolcsóbb.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Правильно</th><th>Почему</th></tr>
          <tr>
            <td><s>legnagy</s></td>
            <td><button class="speak-btn" data-speak-text="legnagyobb" data-speak-lang="hu-HU">legnagyobb</button></td>
            <td>leg- добавляется к nagyobb</td>
          </tr>
          <tr>
            <td><s>legjó</s></td>
            <td><button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU">legjobb</button></td>
            <td>jó → jobb → legjobb</td>
          </tr>
          <tr>
            <td><s>legjobbabb</s></td>
            <td><button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU">legjobb</button></td>
            <td>не добавляй ещё один -bb</td>
          </tr>
          <tr>
            <td><s>legolcsó</s></td>
            <td><button class="speak-btn" data-speak-text="legolcsóbb" data-speak-lang="hu-HU">legolcsóbb</button></td>
            <td>olcsó → olcsóbb → legolcsóbb</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Продолжи: <b>jó → jobb → ...</b></li>
          <li>Продолжи: <b>kicsi → kisebb → ...</b></li>
          <li>Скажи «самый дешёвый телефон».</li>
          <li>Спроси: «Какой лучший?»</li>
          <li>Скажи: «Квартира C самая дешёвая».</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU">legjobb</button></li>
            <li><button class="speak-btn" data-speak-text="legkisebb" data-speak-lang="hu-HU">legkisebb</button></li>
            <li><button class="speak-btn" data-speak-text="a legolcsóbb telefon" data-speak-lang="hu-HU">a legolcsóbb telefon</button></li>
            <li><button class="speak-btn" data-speak-text="Melyik a legjobb?" data-speak-lang="hu-HU">Melyik a legjobb?</button></li>
            <li><button class="speak-btn" data-speak-text="A C lakás a legolcsóbb." data-speak-lang="hu-HU">A C lakás a legolcsóbb.</button></li>
          </ol>
        </details>
      `,
      activities: [COMPARATIVE_FORMS]
    },
    {
      id: 7,
      eyebrow: "УРОК 9 · 7/11 · ЧТЕНИЕ",
      title: "Melyik lakás jobb?",
      subtitle: "Подготовка к чтению: сравнение двух квартир",
      note: "Не переводи текст слово за словом. Сначала пойми общую ситуацию, затем второй раз найди конкретные данные про квартиру A и квартиру B.",
      warn: "Этот слайд даёт только опоры для чтения и не раскрывает ответы на вопросы activity. Сначала прочитай текст самостоятельно, затем отвечай по доказательствам из текста.",
      task: "Перед чтением просмотри ключевые слова и связки. Затем прочитай текст два раза и заполни мысленно шесть категорий: размер, место, транспорт, цена, шум, состояние.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Ситуация</h4>

        <p>
          Главный герой ищет квартиру:
          <button class="speak-btn" data-speak-text="Dávid új lakást keres." data-speak-lang="hu-HU">Dávid új lakást keres.</button>
        </p>

        <p>
          Он рассматривает два варианта:
          <button class="speak-btn" data-speak-text="az A lakás" data-speak-lang="hu-HU">az A lakás</button>
          и
          <button class="speak-btn" data-speak-text="a B lakás" data-speak-lang="hu-HU">a B lakás</button>.
          Твоя задача — понять различия и причину окончательного выбора.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Ключевые слова места и квартиры</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Опора для чтения</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a város központjában" data-speak-lang="hu-HU">a város központjában</button></td>
            <td>в центре города</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a város szélén" data-speak-lang="hu-HU">a város szélén</button></td>
            <td>на окраине города</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="négyzetméteres" data-speak-lang="hu-HU">négyzetméteres</button></td>
            <td>площадью ... квадратных метров</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="bútorok" data-speak-lang="hu-HU">bútorok</button></td>
            <td>мебель</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="munkahely" data-speak-lang="hu-HU">munkahely</button></td>
            <td>место работы</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="a közelben" data-speak-lang="hu-HU">a közelben</button></td>
            <td>поблизости</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="erkély" data-speak-lang="hu-HU">erkély</button></td>
            <td>балкон</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Слова, которые показывают контраст и причину</h4>

        <table class="conj">
          <tr><th>Сигнал</th><th>Что он подсказывает</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="azonban" data-speak-lang="hu-HU">azonban</button></td>
            <td>однако — дальше появляется контраст / минус</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="viszont" data-speak-lang="hu-HU">viszont</button></td>
            <td>зато / однако — противопоставление</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button></td>
            <td>поэтому — следствие</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button></td>
            <td>потому что — причина</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button></td>
            <td>в конце концов / наконец — итог</td>
          </tr>
        </table>

        <div class="note">
          В длинном тексте эти слова помогают понять логику даже тогда, когда ты не знаешь каждое существительное.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Узнавай сравнительные формы</h4>

        <p>
          Не нужно заново выводить правила. На чтении достаточно быстро узнавать смысл уже знакомого <b>-bb</b>.
        </p>

        <table class="conj">
          <tr><th>Форма в тексте</th><th>Смысл</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kisebb" data-speak-lang="hu-HU">kisebb</button></td>
            <td>меньше</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="messzebb" data-speak-lang="hu-HU">messzebb</button></td>
            <td>дальше</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="régebbiek" data-speak-lang="hu-HU">régebbiek</button></td>
            <td>более старые / старее, мн. число</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="csendesebb" data-speak-lang="hu-HU">csendesebb</button></td>
            <td>тише</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU">olcsóbb</button></td>
            <td>дешевле</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kényelmesebb" data-speak-lang="hu-HU">kényelmesebb</button></td>
            <td>удобнее</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nyugodtabb" data-speak-lang="hu-HU">nyugodtabb</button></td>
            <td>спокойнее</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="alacsonyabb ár" data-speak-lang="hu-HU">alacsonyabb ár</button></td>
            <td>более низкая цена</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="fontosabb" data-speak-lang="hu-HU">fontosabb</button></td>
            <td>важнее</td>
          </tr>
        </table>

        <div class="warn">
          Форма <b>régebbiek</b> здесь нужна прежде всего для понимания текста.
          На этом слайде не вводим отдельную новую таблицу образования множественного числа сравнительных прилагательных.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Что искать при втором чтении</h4>

        <table class="conj">
          <tr><th>Категория</th><th>A lakás</th><th>B lakás</th></tr>
          <tr><td>размер</td><td>найди в тексте</td><td>найди в тексте</td></tr>
          <tr><td>место</td><td>найди в тексте</td><td>найди в тексте</td></tr>
          <tr><td>транспорт</td><td>найди в тексте</td><td>найди в тексте</td></tr>
          <tr><td>цена</td><td>найди в тексте</td><td>найди в тексте</td></tr>
          <tr><td>шум</td><td>найди в тексте</td><td>найди в тексте</td></tr>
          <tr><td>состояние / мебель</td><td>найди в тексте</td><td>найди в тексте</td></tr>
        </table>

        <div class="note">
          Не выбирай ответ по одному знакомому слову. Для каждого вопроса найди предложение или фразу, которая служит доказательством.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Три шага чтения</h4>

        <ol class="tasklist">
          <li><b>Первый проход:</b> кто выбирает и между сколькими вариантами?</li>
          <li><b>Второй проход:</b> отметь шесть категорий из таблицы выше.</li>
          <li><b>Третий проход:</b> ответь на 8 вопросов activity и вернись к тексту для проверки.</li>
        </ol>

        <div class="note">
          Для прохождения reading activity нужно получить минимум <b>6 из 8</b>.
          Ошибку исправляй не угадыванием, а повторным поиском нужной детали в тексте.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Быстрая разминка перед текстом</h4>

        <ol class="tasklist">
          <li>Что значит <b>olcsóbb</b>?</li>
          <li>Какой союз чаще вводит причину: <b>mert</b> или <b>viszont</b>?</li>
          <li>Какое слово сигнализирует итог: <b>végül</b> или <b>azonban</b>?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Проверить разминку</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU">olcsóbb</button> — дешевле.</li>
            <li><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button> — потому что.</li>
            <li><button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button> — в конце концов / наконец.</li>
          </ol>
        </details>
      `,
      activities: [APARTMENT_READING]
    },
    {
      id: 8,
      eyebrow: "УРОК 9 · 8/11 · ВЗАИМОДЕЙСТВИЕ",
      title: "Melyiket választja?",
      subtitle: "Спроси, сравни, отреагируй и сделай выбор",
      note: "RolePlay тренирует не новое правило, а сборку уже знакомых элементов: вопрос Melyik?, сравнительные формы, mint, mert, de / viszont и винительный падеж в választom.",
      warn: "Не путай Melyik? и Melyiket?. Melyik lakás...? — «Какая квартира...?». Melyiket választja? — «Какую из них Вы выбираете?»: здесь нужен объект с -t.",
      task: "Перед RolePlay пройди пять шагов диалога. Сначала произнеси модель, затем повтори её своими словами. В самом RolePlay отвечай полными фразами, а не одним словом.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта разговора</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>Что нужно сделать</th><th>Опора</th></tr>
          <tr>
            <td>1</td>
            <td>спросить о цене</td>
            <td><button class="speak-btn" data-speak-text="Melyik lakás olcsóbb?" data-speak-lang="hu-HU">Melyik lakás olcsóbb?</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>спросить о транспорте</td>
            <td><button class="speak-btn" data-speak-text="Hol jobb a közlekedés?" data-speak-lang="hu-HU">Hol jobb a közlekedés?</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>сравнить два варианта</td>
            <td><button class="speak-btn" data-speak-text="Az A lakás nagyobb, mint a B lakás." data-speak-lang="hu-HU">Az A lakás nagyobb, mint a B lakás.</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>назвать минус и предпочтение</td>
            <td><button class="speak-btn" data-speak-text="A zaj nekem nagy hátrány." data-speak-lang="hu-HU">A zaj nekem nagy hátrány.</button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>сделать окончательный выбор</td>
            <td><button class="speak-btn" data-speak-text="A B lakást választom." data-speak-lang="hu-HU">A B lakást választom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Melyik? и Melyiket?</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Когда нужна</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyik?" data-speak-lang="hu-HU">Melyik?</button></td>
            <td>«который / какой из вариантов?» + существительное или выбор признака</td>
            <td><button class="speak-btn" data-speak-text="Melyik lakás olcsóbb?" data-speak-lang="hu-HU">Melyik lakás olcsóbb?</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Melyiket?" data-speak-lang="hu-HU">Melyiket?</button></td>
            <td>«какой из них?» как прямой объект</td>
            <td><button class="speak-btn" data-speak-text="Melyiket választja?" data-speak-lang="hu-HU">Melyiket választja?</button></td>
          </tr>
        </table>

        <div class="note">
          Здесь работает знакомый винительный <b>-t</b>:
          <button class="speak-btn" data-speak-text="melyik" data-speak-lang="hu-HU">melyik</button>
          →
          <button class="speak-btn" data-speak-text="melyiket" data-speak-lang="hu-HU">melyiket</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Как назвать предпочтение</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Модель</th></tr>
          <tr>
            <td>«мне больше нравится...»</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik.</button></td>
          </tr>
          <tr>
            <td>добавить причину</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik, mert olcsóbb." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik, mert olcsóbb.</button></td>
          </tr>
          <tr>
            <td>дать две причины</td>
            <td><button class="speak-btn" data-speak-text="Akkor nekem inkább a B lakás tetszik, mert olcsóbb és csendesebb." data-speak-lang="hu-HU">Akkor nekem inkább a B lakás tetszik, mert olcsóbb és csendesebb.</button></td>
          </tr>
        </table>

        <div class="note">
          <button class="speak-btn" data-speak-text="inkább" data-speak-lang="hu-HU">inkább</button>
          помогает выразить предпочтение: «скорее / больше предпочитаю».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как реагировать на минус</h4>

        <table class="conj">
          <tr><th>Ситуация</th><th>Реакция</th></tr>
          <tr>
            <td>узнал о шуме</td>
            <td><button class="speak-btn" data-speak-text="Értem. A zaj nekem nagy hátrány." data-speak-lang="hu-HU">Értem. A zaj nekem nagy hátrány.</button></td>
          </tr>
          <tr>
            <td>минус есть, но цена важнее</td>
            <td><button class="speak-btn" data-speak-text="Értem. Ez hátrány, de az ár fontosabb nekem." data-speak-lang="hu-HU">Értem. Ez hátrány, de az ár fontosabb nekem.</button></td>
          </tr>
        </table>

        <div class="note">
          Полезная логика:
          <button class="speak-btn" data-speak-text="hátrány" data-speak-lang="hu-HU">hátrány</button>
          — минус;
          <button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button>
          / <button class="speak-btn" data-speak-text="viszont" data-speak-lang="hu-HU">viszont</button>
          — контраст;
          <button class="speak-btn" data-speak-text="fontosabb" data-speak-lang="hu-HU">fontosabb</button>
          — важнее.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Окончательный выбор</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>Фраза</th></tr>
          <tr>
            <td>назвать выбранный объект</td>
            <td><button class="speak-btn" data-speak-text="A B lakást választom." data-speak-lang="hu-HU">A B lakást választom.</button></td>
          </tr>
          <tr>
            <td>дать оценку выбора</td>
            <td><button class="speak-btn" data-speak-text="Szerintem nekem a B lakás a jobb választás." data-speak-lang="hu-HU">Szerintem nekem a B lakás a jobb választás.</button></td>
          </tr>
          <tr>
            <td>вежливо завершить</td>
            <td><button class="speak-btn" data-speak-text="Igen, köszönöm. Nézzük meg még egyszer!" data-speak-lang="hu-HU">Igen, köszönöm. Nézzük meg még egyszer!</button></td>
          </tr>
        </table>

        <div class="warn">
          В <button class="speak-btn" data-speak-text="A B lakást választom." data-speak-lang="hu-HU">A B lakást választom.</button>
          объект получает винительный суффикс:
          <button class="speak-btn" data-speak-text="lakás" data-speak-lang="hu-HU">lakás</button>
          →
          <button class="speak-btn" data-speak-text="lakást" data-speak-lang="hu-HU">lakást</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Вежливый регистр собеседника</h4>

        <p>
          Риелтор обращается к клиенту вежливо:
          <button class="speak-btn" data-speak-text="Mit szeretne először tudni?" data-speak-lang="hu-HU">Mit szeretne először tudni?</button>
          и
          <button class="speak-btn" data-speak-text="Melyiket választja?" data-speak-lang="hu-HU">Melyiket választja?</button>.
        </p>

        <div class="note">
          Это тот же принцип вежливого обращения, который уже встречался раньше:
          форма глагола выглядит как 3-е лицо, потому что подразумевается <b>Ön</b>.
          На этом слайде новую таблицу спряжения не вводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Быстрая репетиция</h4>

        <ol class="tasklist">
          <li>Спроси: «Какая квартира дешевле?»</li>
          <li>Сравни размер квартир A и B.</li>
          <li>Скажи, что шум — большой минус для тебя.</li>
          <li>Вырази предпочтение B и дай причину.</li>
          <li>Сделай окончательный выбор в винительном падеже.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Модели</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="Melyik lakás olcsóbb?" data-speak-lang="hu-HU">Melyik lakás olcsóbb?</button></li>
            <li><button class="speak-btn" data-speak-text="Az A lakás nagyobb, mint a B lakás." data-speak-lang="hu-HU">Az A lakás nagyobb, mint a B lakás.</button></li>
            <li><button class="speak-btn" data-speak-text="A zaj nekem nagy hátrány." data-speak-lang="hu-HU">A zaj nekem nagy hátrány.</button></li>
            <li><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik, mert olcsóbb." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik, mert olcsóbb.</button></li>
            <li><button class="speak-btn" data-speak-text="A B lakást választom." data-speak-lang="hu-HU">A B lakást választom.</button></li>
          </ol>
        </details>

        <div class="note">
          RolePlay остаётся <b>PARTIAL</b>: это self-practice без автоматической оценки произношения.
          Цель — пройти весь диалог и дать осмысленные полные ответы.
        </div>
      `,
      activities: [COMPARISON_ROLEPLAY]
    },
    {
      id: 9,
      eyebrow: "УРОК 9 · 9/11 · ПИСЬМО",
      title: "Két lehetőség összehasonlítása",
      subtitle: "Связное сравнение 70–90 слов",
      note: "Не начинай писать сразу длинный абзац. Сначала сделай план из пяти частей: тема → вариант A → вариант B → прямое сравнение → выбор и причина.",
      warn: "В письменной конструкции с mint ставь запятую: nagyobb, mint. После választom выбранный объект нужен в винительном падеже: lakás → lakást.",
      task: "Сначала заполни план короткими словами. Затем напиши 70–90 слов, проверь три сравнительные формы, одно mint-сравнение, преимущества/недостаток и финальный выбор с mert.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. План текста: 5 частей</h4>

        <table class="conj">
          <tr><th>Часть</th><th>Что написать</th><th>Пример начала</th></tr>
          <tr>
            <td>1. Тема</td>
            <td>назови два варианта</td>
            <td><button class="speak-btn" data-speak-text="Két lakást hasonlítok össze." data-speak-lang="hu-HU">Két lakást hasonlítok össze.</button></td>
          </tr>
          <tr>
            <td>2. Вариант A</td>
            <td>2–3 характеристики</td>
            <td><button class="speak-btn" data-speak-text="Az A lakás szép és új." data-speak-lang="hu-HU">Az A lakás szép és új.</button></td>
          </tr>
          <tr>
            <td>3. Вариант B</td>
            <td>2–3 характеристики</td>
            <td><button class="speak-btn" data-speak-text="A B lakás kisebb, de olcsóbb." data-speak-lang="hu-HU">A B lakás kisebb, de olcsóbb.</button></td>
          </tr>
          <tr>
            <td>4. Сравнение</td>
            <td>минимум три формы с -bb; хотя бы одно предложение с mint</td>
            <td><button class="speak-btn" data-speak-text="Az A lakás nagyobb, mint a B lakás." data-speak-lang="hu-HU">Az A lakás nagyobb, mint a B lakás.</button></td>
          </tr>
          <tr>
            <td>5. Выбор</td>
            <td>что выбираешь + почему</td>
            <td><button class="speak-btn" data-speak-text="Én a B lakást választom, mert olcsóbb." data-speak-lang="hu-HU">Én a B lakást választom, mert olcsóbb.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Готовые строительные блоки</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Модель</th></tr>
          <tr>
            <td>начать сравнение</td>
            <td><button class="speak-btn" data-speak-text="Két lehetőséget hasonlítok össze." data-speak-lang="hu-HU">Két lehetőséget hasonlítok össze.</button></td>
          </tr>
          <tr>
            <td>описать A</td>
            <td><button class="speak-btn" data-speak-text="Az A lakás nagy és világos." data-speak-lang="hu-HU">Az A lakás nagy és világos.</button></td>
          </tr>
          <tr>
            <td>описать B с контрастом</td>
            <td><button class="speak-btn" data-speak-text="A B lakás kisebb, de csendesebb." data-speak-lang="hu-HU">A B lakás kisebb, de csendesebb.</button></td>
          </tr>
          <tr>
            <td>сравнить напрямую</td>
            <td><button class="speak-btn" data-speak-text="Az A lakás drágább, mint a B lakás." data-speak-lang="hu-HU">Az A lakás drágább, mint a B lakás.</button></td>
          </tr>
          <tr>
            <td>предпочтение</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik.</button></td>
          </tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik, mert olcsóbb." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik, mert olcsóbb.</button></td>
          </tr>
          <tr>
            <td>окончательный выбор</td>
            <td><button class="speak-btn" data-speak-text="Én a B lakást választom." data-speak-lang="hu-HU">Én a B lakást választom.</button></td>
          </tr>
        </table>

        <div class="note">
          Не обязательно использовать слово <b>előny</b> «преимущество».
          Преимущество можно показать простым предложением:
          <button class="speak-btn" data-speak-text="A B lakás jó, mert olcsóbb." data-speak-lang="hu-HU">A B lakás jó, mert olcsóbb.</button>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Связки, которые делают текст связным</h4>

        <table class="conj">
          <tr><th>Связка</th><th>Функция</th><th>Мини-пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="és" data-speak-lang="hu-HU">és</button></td>
            <td>и</td>
            <td><button class="speak-btn" data-speak-text="nagy és világos" data-speak-lang="hu-HU">nagy és világos</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button></td>
            <td>но</td>
            <td><button class="speak-btn" data-speak-text="kisebb, de olcsóbb" data-speak-lang="hu-HU">kisebb, de olcsóbb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="viszont" data-speak-lang="hu-HU">viszont</button></td>
            <td>зато / однако</td>
            <td><button class="speak-btn" data-speak-text="Viszont az A lakás drágább." data-speak-lang="hu-HU">Viszont az A lakás drágább.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button></td>
            <td>потому что</td>
            <td><button class="speak-btn" data-speak-text="mert olcsóbb" data-speak-lang="hu-HU">mert olcsóbb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button></td>
            <td>поэтому</td>
            <td><button class="speak-btn" data-speak-text="Ezért ezt választom." data-speak-lang="hu-HU">Ezért ezt választom.</button></td>
          </tr>
        </table>

        <div class="warn">
          Не складывай весь текст из <b>és</b>.
          Для контраста используй
          <button class="speak-btn" data-speak-text="de" data-speak-lang="hu-HU">de</button>
          или
          <button class="speak-btn" data-speak-text="viszont" data-speak-lang="hu-HU">viszont</button>,
          а для причины —
          <button class="speak-btn" data-speak-text="mert" data-speak-lang="hu-HU">mert</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Чек-лист перед отправкой</h4>

        <table class="conj">
          <tr><th>Проверь</th><th>Да / нет</th></tr>
          <tr><td>70–90 слов</td><td>□</td></tr>
          <tr><td>два понятных варианта и минимум три характеристики</td><td>□</td></tr>
          <tr><td>минимум три сравнительные формы</td><td>□</td></tr>
          <tr><td>хотя бы одно полное сравнение с <b>mint</b></td><td>□</td></tr>
          <tr><td>показано преимущество каждого варианта</td><td>□</td></tr>
          <tr><td>есть минимум один недостаток</td><td>□</td></tr>
          <tr><td>есть окончательный выбор и причина с <b>mert</b></td><td>□</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Исправь</th><th>Почему</th></tr>
          <tr>
            <td><s>Az A lakás nagyobb mint a B lakás.</s></td>
            <td><button class="speak-btn" data-speak-text="Az A lakás nagyobb, mint a B lakás." data-speak-lang="hu-HU">Az A lakás nagyobb, mint a B lakás.</button></td>
            <td>перед сравнительным mint нужна запятая</td>
          </tr>
          <tr>
            <td><s>Én a B lakás választom.</s></td>
            <td><button class="speak-btn" data-speak-text="Én a B lakást választom." data-speak-lang="hu-HU">Én a B lakást választom.</button></td>
            <td>прямой объект: lakás → lakást</td>
          </tr>
          <tr>
            <td><s>Az A lakás nagy, mint a B lakás.</s></td>
            <td><button class="speak-btn" data-speak-text="Az A lakás nagyobb, mint a B lakás." data-speak-lang="hu-HU">Az A lakás nagyobb, mint a B lakás.</button></td>
            <td>для «больше» нужна форма nagyobb</td>
          </tr>
          <tr>
            <td><s>Nekem a B lakás tetszik mert olcsóbb.</s></td>
            <td><button class="speak-btn" data-speak-text="Nekem a B lakás tetszik, mert olcsóbb." data-speak-lang="hu-HU">Nekem a B lakás tetszik, mert olcsóbb.</button></td>
            <td>перед придаточной причиной с mert ставится запятая</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Мини-проверка перед письмом</h4>

        <ol class="tasklist">
          <li>Начни текст фразой «Я сравниваю две квартиры».</li>
          <li>Сравни размер A и B с <b>mint</b>.</li>
          <li>Скажи: «B меньше, но дешевле».</li>
          <li>Скажи: «Я выбираю квартиру B» — правильно оформи объект.</li>
          <li>Добавь простую причину с <b>mert</b>.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Модели</summary>
          <ol class="tasklist mt-3">
            <li><button class="speak-btn" data-speak-text="Két lakást hasonlítok össze." data-speak-lang="hu-HU">Két lakást hasonlítok össze.</button></li>
            <li><button class="speak-btn" data-speak-text="Az A lakás nagyobb, mint a B lakás." data-speak-lang="hu-HU">Az A lakás nagyobb, mint a B lakás.</button></li>
            <li><button class="speak-btn" data-speak-text="A B lakás kisebb, de olcsóbb." data-speak-lang="hu-HU">A B lakás kisebb, de olcsóbb.</button></li>
            <li><button class="speak-btn" data-speak-text="Én a B lakást választom." data-speak-lang="hu-HU">Én a B lakást választom.</button></li>
            <li><button class="speak-btn" data-speak-text="Én a B lakást választom, mert olcsóbb." data-speak-lang="hu-HU">Én a B lakást választom, mert olcsóbb.</button></li>
          </ol>
        </details>

        <div class="note">
          Сначала напиши свой вариант без подсказки model answer.
          После этого сравни текст с рубрикой: цель — связное понятное сравнение, а не копирование образца.
        </div>
      `,
      activities: [WRITING_COMPARISON]
    },
    {
      id: 10,
      eyebrow: "УРОК 9 · 10/11 · УСТНАЯ САМОПРАКТИКА",
      title: "Rövid összehasonlítás",
      subtitle: "Сравни два варианта за 1–1,5 минуты",
      note: "Это необязательная текстовая самопрактика без микрофона, автоматического score и evidence. Цель — самостоятельно собрать устное сравнение из уже изученных моделей.",
      warn: "Не путай прилагательное перед существительным и прилагательное-сказуемое во множественном числе: nagy házak, но A házak nagyok. В настоящем времени 3-го лица отдельное van с таким сказуемым не ставится.",
      task: "Выбери два знакомых варианта — например, две квартиры или два телефона. Пройди шесть шагов, говори 1–1,5 минуты без чтения готового текста, затем проверь себя по рубрике.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Шесть шагов устного сравнения</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>Что сказать</th><th>Опора</th></tr>
          <tr>
            <td>1</td>
            <td>назови два варианта</td>
            <td><button class="speak-btn" data-speak-text="Két lakást hasonlítok össze." data-speak-lang="hu-HU">Két lakást hasonlítok össze.</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>дай характеристики A</td>
            <td><button class="speak-btn" data-speak-text="Az A lakás nagy és világos." data-speak-lang="hu-HU">Az A lakás nagy és világos.</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>дай характеристики B</td>
            <td><button class="speak-btn" data-speak-text="A B lakás kisebb, de csendesebb." data-speak-lang="hu-HU">A B lakás kisebb, de csendesebb.</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>сравни напрямую</td>
            <td><button class="speak-btn" data-speak-text="Az A lakás drágább, mint a B lakás." data-speak-lang="hu-HU">Az A lakás drágább, mint a B lakás.</button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>назови плюс и минус</td>
            <td><button class="speak-btn" data-speak-text="A B lakás olcsóbb, de kisebb." data-speak-lang="hu-HU">A B lakás olcsóbb, de kisebb.</button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>выбери и объясни</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik, mert olcsóbb." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik, mert olcsóbb.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Короткое повторение: прилагательное-сказуемое</h4>

        <table class="conj">
          <tr><th>Перед существительным</th><th>Единственное число</th><th>Множественное число</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button></td>
            <td><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU">A ház nagy.</button></td>
            <td><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szép könyvek" data-speak-lang="hu-HU">szép könyvek</button></td>
            <td><button class="speak-btn" data-speak-text="A könyv szép." data-speak-lang="hu-HU">A könyv szép.</button></td>
            <td><button class="speak-btn" data-speak-text="A könyvek szépek." data-speak-lang="hu-HU">A könyvek szépek.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="piros autók" data-speak-lang="hu-HU">piros autók</button></td>
            <td><button class="speak-btn" data-speak-text="Az autó piros." data-speak-lang="hu-HU">Az autó piros.</button></td>
            <td><button class="speak-btn" data-speak-text="Az autók pirosak." data-speak-lang="hu-HU">Az autók pirosak.</button></td>
          </tr>
        </table>

        <div class="note">
          Сравни:
          <button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button>
          — «большие дома»,
          но
          <button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button>
          — «Дома большие».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Готовый каркас — меняй только детали</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Модель</th></tr>
          <tr>
            <td>вступление</td>
            <td><button class="speak-btn" data-speak-text="Két lehetőséget hasonlítok össze." data-speak-lang="hu-HU">Két lehetőséget hasonlítok össze.</button></td>
          </tr>
          <tr>
            <td>описание</td>
            <td><button class="speak-btn" data-speak-text="Az A lakás nagy, de drága." data-speak-lang="hu-HU">Az A lakás nagy, de drága.</button></td>
          </tr>
          <tr>
            <td>сравнение</td>
            <td><button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button></td>
          </tr>
          <tr>
            <td>предпочтение</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik.</button></td>
          </tr>
          <tr>
            <td>причина</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik, mert csendesebb." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik, mert csendesebb.</button></td>
          </tr>
          <tr>
            <td>окончательный выбор</td>
            <td><button class="speak-btn" data-speak-text="Én a B lakást választom." data-speak-lang="hu-HU">Én a B lakást választom.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Можно сменить тему</h4>

        <table class="conj">
          <tr><th>Тема</th><th>Пример</th></tr>
          <tr>
            <td>два телефона</td>
            <td>
              <button class="speak-btn" data-speak-text="Két telefont hasonlítok össze." data-speak-lang="hu-HU">Két telefont hasonlítok össze.</button><br/>
              <button class="speak-btn" data-speak-text="Az A telefon nagyobb, mint a B telefon." data-speak-lang="hu-HU">Az A telefon nagyobb, mint a B telefon.</button>
            </td>
          </tr>
          <tr>
            <td>две квартиры</td>
            <td>
              <button class="speak-btn" data-speak-text="Két lakást hasonlítok össze." data-speak-lang="hu-HU">Két lakást hasonlítok össze.</button><br/>
              <button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button>
            </td>
          </tr>
        </table>

        <div class="note">
          После числительного <b>két</b> существительное остаётся в единственном числе,
          а здесь получает винительный падеж как объект:
          <button class="speak-btn" data-speak-text="két lakást" data-speak-lang="hu-HU">két lakást</button>,
          <button class="speak-btn" data-speak-text="két telefont" data-speak-lang="hu-HU">két telefont</button>.
          Не говори <s>két lakásokat</s>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Типичные ошибки</h4>

        <table class="conj">
          <tr><th>Неверно</th><th>Правильно</th><th>Что проверить</th></tr>
          <tr>
            <td><s>nagyok házak</s></td>
            <td><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button></td>
            <td>перед существительным прилагательное не согласуется</td>
          </tr>
          <tr>
            <td><s>A házak nagy.</s></td>
            <td><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button></td>
            <td>в сказуемом множественное число видно на прилагательном</td>
          </tr>
          <tr>
            <td><s>A házak nagyok vannak.</s></td>
            <td><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button></td>
            <td>van здесь не нужен</td>
          </tr>
          <tr>
            <td><s>Az A lakás nagy, mint a B lakás.</s></td>
            <td><button class="speak-btn" data-speak-text="Az A lakás nagyobb, mint a B lakás." data-speak-lang="hu-HU">Az A lakás nagyobb, mint a B lakás.</button></td>
            <td>для сравнения нужна форма nagyobb</td>
          </tr>
          <tr>
            <td><s>Én a B lakás választom.</s></td>
            <td><button class="speak-btn" data-speak-text="Én a B lakást választom." data-speak-lang="hu-HU">Én a B lakást választom.</button></td>
            <td>выбранный объект получает -t</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Самопроверка после 1–1,5 минуты</h4>

        <ul class="tick">
          <li>Я назвал два варианта и минимум три характеристики.</li>
          <li>Я использовал минимум две сравнительные формы.</li>
          <li>У меня есть минимум одно полное сравнение с <b>mint</b>.</li>
          <li>Я назвал один плюс и один минус.</li>
          <li>Я выразил предпочтение и дал причину с <b>mert</b>.</li>
        </ul>

        <div class="note">
          Если один пункт отсутствует, повтори устное сравнение ещё раз.
          Это self-practice: отсутствие автоматического score не означает, что рубрику можно пропустить.
        </div>
      `,
      optionalSpeaking: SPEAKING_COMPARISON
    },
    {
      id: 11,
      eyebrow: "УРОК 9 · 11/11 · ИТОГИ",
      title: "Összefoglalás",
      subtitle: "Что ты уже умеешь после урока 9",
      note: "Финальный слайд не вводит новую грамматику. Используй его как карту повторения: форма прилагательного → сравнение → выбор → причина.",
      warn: "Не считай урок завершённым только потому, что просмотрены слайды. Проверь обязательные activities: controlled practice и reading должны пройти порог; RolePlay и Writing остаются открытой практикой.",
      task: "Пройди шесть итоговых блоков, затем выполни EXIT_CHECK. Если одна модель не получается без подсказки, вернись к указанному слайду и повтори именно её.",
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Прилагательное: перед существительным и в сказуемом</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Модель</th><th>Что помнить</th></tr>
          <tr>
            <td>перед существительным</td>
            <td><button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button></td>
            <td>прилагательное не получает показатель множественного числа</td>
          </tr>
          <tr>
            <td>прямое дополнение</td>
            <td><button class="speak-btn" data-speak-text="Látok egy nagy házat." data-speak-lang="hu-HU">Látok egy nagy házat.</button></td>
            <td>винительный показатель получает существительное</td>
          </tr>
          <tr>
            <td>сказуемое, ед. число</td>
            <td><button class="speak-btn" data-speak-text="A ház nagy." data-speak-lang="hu-HU">A ház nagy.</button></td>
            <td>отдельного van не нужно</td>
          </tr>
          <tr>
            <td>сказуемое, мн. число</td>
            <td><button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button></td>
            <td>множественное число видно на сказуемом-прилагательном</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Сравнительная степень</h4>

        <table class="conj">
          <tr><th>Обычная форма</th><th>Сравнительная</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nagy" data-speak-lang="hu-HU">nagy</button></td>
            <td><button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU">jó</button></td>
            <td><button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kicsi" data-speak-lang="hu-HU">kicsi</button></td>
            <td><button class="speak-btn" data-speak-text="kisebb" data-speak-lang="hu-HU">kisebb</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU">olcsó</button></td>
            <td><button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU">olcsóbb</button></td>
          </tr>
        </table>

        <div class="note">
          Не механическое «слово + bb», а готовые частые формы:
          <button class="speak-btn" data-speak-text="nagyobb" data-speak-lang="hu-HU">nagyobb</button>,
          <button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button>,
          <button class="speak-btn" data-speak-text="kisebb" data-speak-lang="hu-HU">kisebb</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Сравнение с mint</h4>

        <p>
          Модель:
          <b>X + сравнительная форма + , mint + Y</b>
        </p>

        <table class="conj">
          <tr><th>Пример</th><th>Функция</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button></td>
            <td>сравнение цены</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A metró gyorsabb, mint a busz." data-speak-lang="hu-HU">A metró gyorsabb, mint a busz.</button></td>
            <td>сравнение скорости</td>
          </tr>
        </table>

        <div class="note">
          В письме перед сравнительным
          <button class="speak-btn" data-speak-text="mint" data-speak-lang="hu-HU">mint</button>
          ставится запятая.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Превосходная степень</h4>

        <table class="conj">
          <tr><th>Цепочка</th><th>Готовая модель</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="jó" data-speak-lang="hu-HU">jó</button>
              →
              <button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button>
              →
              <button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU">legjobb</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Ez a legjobb." data-speak-lang="hu-HU">Ez a legjobb.</button></td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="olcsó" data-speak-lang="hu-HU">olcsó</button>
              →
              <button class="speak-btn" data-speak-text="olcsóbb" data-speak-lang="hu-HU">olcsóbb</button>
              →
              <button class="speak-btn" data-speak-text="legolcsóbb" data-speak-lang="hu-HU">legolcsóbb</button>
            </td>
            <td><button class="speak-btn" data-speak-text="Ez a telefon a legolcsóbb." data-speak-lang="hu-HU">Ez a telefon a legolcsóbb.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. От сравнения к выбору</h4>

        <table class="conj">
          <tr><th>Задача</th><th>Модель</th></tr>
          <tr>
            <td>спросить, какой вариант дешевле</td>
            <td><button class="speak-btn" data-speak-text="Melyik lakás olcsóbb?" data-speak-lang="hu-HU">Melyik lakás olcsóbb?</button></td>
          </tr>
          <tr>
            <td>спросить, какой выбирают</td>
            <td><button class="speak-btn" data-speak-text="Melyiket választja?" data-speak-lang="hu-HU">Melyiket választja?</button></td>
          </tr>
          <tr>
            <td>выразить предпочтение</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik.</button></td>
          </tr>
          <tr>
            <td>дать причину</td>
            <td><button class="speak-btn" data-speak-text="Nekem inkább a B lakás tetszik, mert olcsóbb." data-speak-lang="hu-HU">Nekem inkább a B lakás tetszik, mert olcsóbb.</button></td>
          </tr>
          <tr>
            <td>сделать выбор</td>
            <td><button class="speak-btn" data-speak-text="A B lakást választom." data-speak-lang="hu-HU">A B lakást választom.</button></td>
          </tr>
        </table>

        <div class="note">
          Снова работает винительный:
          <button class="speak-btn" data-speak-text="lakás" data-speak-lang="hu-HU">lakás</button>
          →
          <button class="speak-btn" data-speak-text="lakást" data-speak-lang="hu-HU">lakást</button>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что должно быть закрыто перед завершением урока</h4>

        <table class="conj">
          <tr><th>Компонент</th><th>Критерий</th></tr>
          <tr><td>Controlled Practice</td><td>минимум <b>11 из 14</b></td></tr>
          <tr><td>Reading</td><td>минимум <b>6 из 8</b></td></tr>
          <tr><td>RolePlay</td><td>открытая self-practice; остаётся <b>PARTIAL</b></td></tr>
          <tr><td>Writing</td><td>70–90 слов по рубрике; открытая практика остаётся <b>PARTIAL</b></td></tr>
          <tr><td>Speaking</td><td>необязательная self-practice без микрофона, score и evidence</td></tr>
        </table>

        <div class="warn">
          Build или просмотр всех слайдов не заменяет учебный результат:
          обязательные пороги должны быть пройдены фактически.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Финальная самопроверка</h4>

        <ol class="tasklist">
          <li>Скажи «большие дома» и «Дома большие».</li>
          <li>Дай формы «лучше» и «лучший» от <b>jó</b>.</li>
          <li>Сравни две квартиры с <b>mint</b>.</li>
          <li>Спроси: «Какую из них Вы выбираете?»</li>
          <li>Сделай выбор и дай простую причину с <b>mert</b>.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Модели для проверки</summary>
          <ol class="tasklist mt-3">
            <li>
              <button class="speak-btn" data-speak-text="nagy házak" data-speak-lang="hu-HU">nagy házak</button>;
              <button class="speak-btn" data-speak-text="A házak nagyok." data-speak-lang="hu-HU">A házak nagyok.</button>
            </li>
            <li>
              <button class="speak-btn" data-speak-text="jobb" data-speak-lang="hu-HU">jobb</button>;
              <button class="speak-btn" data-speak-text="legjobb" data-speak-lang="hu-HU">legjobb</button>
            </li>
            <li><button class="speak-btn" data-speak-text="A B lakás olcsóbb, mint az A lakás." data-speak-lang="hu-HU">A B lakás olcsóbb, mint az A lakás.</button></li>
            <li><button class="speak-btn" data-speak-text="Melyiket választja?" data-speak-lang="hu-HU">Melyiket választja?</button></li>
            <li><button class="speak-btn" data-speak-text="A B lakást választom, mert olcsóbb." data-speak-lang="hu-HU">A B lakást választom, mert olcsóbb.</button></li>
          </ol>
        </details>
      `,
      activities: [EXIT_CHECK]
    },
  ],
  vocabulary: [
    { id: 'l9_v1', hu: 'nagy', ru: 'большой', category: 'Прилагательные' },
    { id: 'l9_v2', hu: 'kicsi', ru: 'маленький', category: 'Прилагательные' },
    { id: 'l9_v3', hu: 'jó', ru: 'хороший', category: 'Прилагательные' },
    { id: 'l9_v4', hu: 'rossz', ru: 'плохой', category: 'Прилагательные' },
    { id: 'l9_v5', hu: 'szép', ru: 'красивый', category: 'Прилагательные' },
    { id: 'l9_v6', hu: 'új', ru: 'новый', category: 'Прилагательные' },
    { id: 'l9_v7', hu: 'régi', ru: 'старый', category: 'Прилагательные' },
    { id: 'l9_v8', hu: 'drága', ru: 'дорогой', category: 'Прилагательные' },
    { id: 'l9_v9', hu: 'olcsó', ru: 'дешёвый', category: 'Прилагательные' },
    { id: 'l9_v10', hu: 'gyors', ru: 'быстрый', category: 'Прилагательные' },
    { id: 'l9_v11', hu: 'lassú', ru: 'медленный', category: 'Прилагательные' },
    { id: 'l9_v12', hu: 'mint', ru: 'чем (при сравнении)', category: 'Сравнение' },
    { id: 'l9_v13', hu: 'piros', ru: 'красный', category: 'Цвета' },
    { id: 'l9_v14', hu: 'kék', ru: 'синий', category: 'Цвета' },
    { id: 'l9_v15', hu: 'nagyobb', ru: 'больше', category: 'Сравнительная степень' },
    { id: 'l9_v16', hu: 'legjobb', ru: 'лучший', category: 'Превосходная степень' },
  ],
    quiz: [
    {
      id: 901,
      question: 'Как сказать "большие дома" по-венгерски?',
      options: [
        'nagy házak',
        'nagyobb házak',
        'nagy ház',
        'legnagyobb házak'
      ],
      correctIndex: 0,
      explanation: 'В сочетании nagy házak суффикс множественного числа получает существительное ház → házak, а прилагательное nagy остаётся в атрибутивной форме.'
    },
    {
      id: 902,
      question: 'Как по-венгерски сказать "красивее"?',
      options: ['szép', 'szebb', 'legszebb', 'szépen'],
      correctIndex: 1,
      explanation: 'Сравнительная степень образуется суффиксом -bb: szép → szebb. "legszebb" – это превосходная степень (самый красивый), "szépen" – наречие (красиво).'
    },
    {
      id: 903,
      question: 'Как сказать "лучший" по-венгерски?',
      options: ['jó', 'legjobb', 'legszebb', 'jobb'],
      correctIndex: 1,
      explanation: 'Частую цепочку нужно запомнить: jó → jobb → legjobb. Jobb означает «лучше», legjobb — «лучший».'
    },
    {
      id: 904,
      question: 'Как переводится предложение "A kávé jobb, mint a tea."?',
      options: [
        'Кофе лучше, чем чай',
        'Чай лучше, чем кофе',
        'Кофе такой же, как чай',
        'Кофе хуже, чем чай'
      ],
      correctIndex: 0,
      explanation: 'Союз "mint" означает "чем" при сравнении. "jobb" – сравнительная степень от "jó" (хороший → лучше). Правильный перевод: "Кофе лучше, чем чай" (урок 9, слайд 5).'
    },
    {
      id: 905,
      question: 'Как сказать «Этот поезд быстрее, чем автобус»?',
      options: [
        'A busz gyorsabb, mint ez a vonat.',
        'Ez a vonat gyorsabb, mint a busz.',
        'Ez a vonat gyors és a busz.',
        'Ez a vonat a leglassabb.'
      ],
      correctIndex: 1,
      explanation: 'Модель сравнения: X + сравнительная форма + mint + Y: Ez a vonat gyorsabb, mint a busz.'
    },
    {
      id: 906,
      question: 'Какая форма является превосходной степенью от olcsó?',
      options: [
        'olcsó',
        'olcsóbb',
        'legolcsóbb',
        'legolcsó'
      ],
      correctIndex: 2,
      explanation: 'Сначала образуется сравнительная форма olcsóbb, затем добавляется leg-: legolcsóbb.'
    }
  ],
  objectives: [
    { id: 'l9_use-adjectives', text: 'Правильно употреблять прилагательные перед существительным без согласования по числу и падежу.', skills: ['grammar', 'writing'] },
    { id: 'l9_form-comparative', text: 'Образовывать частые сравнительные формы с -bb по изученным моделям основы и связующих гласных.', skills: ['grammar', 'writing'] },
    { id: 'l9_form-superlative', text: 'Образовывать превосходную степень по модели: сравнительная форма → leg- + сравнительная форма.', skills: ['grammar', 'writing'] },
    { id: 'l9_use-mint', text: 'Строить сравнительные конструкции со словом mint.', skills: ['grammar', 'speaking'] },
    { id: 'l9_compare-people', text: 'Кратко сравнивать людей, места и предметы в устной и письменной речи.', skills: ['speaking', 'writing'] },
  ],
};
