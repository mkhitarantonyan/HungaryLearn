import type { Lesson, LessonActivity } from '../../types';

const SINGULAR_POSSESSIVES: LessonActivity = {
  kind: 'controlledPractice', id: 'l8-cp-singular-possessives', title: 'Контекстная практика: семья и принадлежность', passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l8-possessive-1', prompt: 'Кто такой testvér?', options: ['брат или сестра', 'родитель', 'супруг'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-2', prompt: 'Представь свою мать.', options: ['Ez az anyukám.', 'Ez az anyukád.', 'Ez az anyja.'], correctIndex: 0 },
    { kind: 'textInput', id: 'l8-possessive-3', prompt: 'ház → мой дом', accept: ['házam'] },
    { kind: 'textInput', id: 'l8-possessive-4', prompt: 'ház → твой дом', accept: ['házad'] },
    { kind: 'textInput', id: 'l8-possessive-5', prompt: 'ház → его/её дом', accept: ['háza'] },
    { kind: 'singleChoice', id: 'l8-possessive-6', prompt: 'У меня есть брат или сестра.', options: ['Van egy testvérem.', 'Nincs testvérem.', 'Ez Anna testvére.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-7', prompt: 'У меня нет брата или сестры.', options: ['Van egy testvérem.', 'Nincs testvérem.', 'A testvéred neve?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-possessive-8', prompt: 'Моя мать — учительница.', options: ['Anyám tanár.', 'Anyád tanár.', 'Anyja tanár.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-9', prompt: 'Брат/сестра собеседника живёт в Будапеште.', options: ['A testvérem Budapesten lakik.', 'A testvéred Budapesten lakik.', 'A testvére Budapest.'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-possessive-10', prompt: 'Спроси имя брата или сестры.', options: ['Mi a testvéred neve?', 'Hol a testvérem?', 'Ki neve testvér?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-11', prompt: 'Спроси, где живут родители.', options: ['Hol laknak a szüleid?', 'Hány éves a szüleid?', 'Mi a szülők?'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l8-possessive-12', prompt: 'Спроси возраст сына.', options: ['Hol lakik a fiad?', 'Hány éves a fiad?', 'Mi a fiad dolgozik?'], correctIndex: 1 },
    { kind: 'singleChoice', id: 'l8-possessive-13', prompt: 'Чья это книга?', options: ['Ez a könyvem.', 'Ez Anna könyve.', 'Оба варианта выражают владельца.'], correctIndex: 2 },
    { kind: 'singleChoice', id: 'l8-possessive-14', prompt: 'У Анны есть дочь; назови её.', options: ['Ő Anna lánya.', 'Ő Anna lányom.', 'Ő Anna lányod.'], correctIndex: 0 },
  ],
};

const FAMILY_READING: LessonActivity = {
  kind: 'reading', id: 'l8-reading-family-profile', title: 'Чтение: две соседские семьи',
  instructions: 'Прочитай описание и сравни две вымышленные семьи: отношения, возраст, работу, место и общие занятия.', passCount: 6,
  content: { type: 'prose', title: 'Két család egy házban', paragraphs: [
    'Budapesten, egy nagy házban két család lakik. A második emeleten lakik a Kovács család. Az apa neve Gábor, negyvenkét éves, és egy iskolában tanár. A felesége, Éva, negyvenéves és orvos. Két gyerekük van. A fiuk, Marci, tizennégy éves, a lányuk, Lili, tízéves. Marci szeret olvasni és focizni, Lili pedig gyakran rajzol és zenét hallgat. A család kutyájának neve Mázli.',
    'A harmadik emeleten Anna és a testvére, Péter lakik. Anna huszonöt éves és egy irodában dolgozik. Péter huszonkét éves egyetemista. A szüleik nem Budapesten laknak, hanem egy kis városban. Anna lakása kisebb, mint a Kovács család lakása, de világos és kényelmes. Péter kerékpárja az udvaron van.',
    'A két család szombaton gyakran együtt reggelizik az udvaron. Gábor kávét készít, Anna süteményt hoz, a gyerekek pedig Mázlival játszanak. A Kovács család nagyobb, Anna családja kisebb, de jó szomszédok és sok időt töltenek együtt.',
  ] },
  questions: [
    { id: 'l8-reading-q1', question: 'Сколько детей в семье Ковач?', options: ['один', 'два', 'три'], correctIndex: 1 },
    { id: 'l8-reading-q2', question: 'Кем Лили приходится Марци?', options: ['сестрой', 'матерью', 'женой'], correctIndex: 0 },
    { id: 'l8-reading-q3', question: 'Кем работает Ева?', options: ['учительницей', 'врачом', 'в офисе'], correctIndex: 1 },
    { id: 'l8-reading-q4', question: 'Сколько лет Петеру?', options: ['22', '25', '42'], correctIndex: 0 },
    { id: 'l8-reading-q5', question: 'Где живут родители Анны и Петера?', options: ['в Будапеште', 'в маленьком городе', 'в школе'], correctIndex: 1 },
    { id: 'l8-reading-q6', question: 'Что семьи часто делают вместе по субботам?', options: ['завтракают во дворе', 'работают в офисе', 'ездят в университет'], correctIndex: 0 },
    { id: 'l8-reading-q7', question: 'Какое различие названо в тексте?', options: ['семья Ковач больше', 'у Анны три ребёнка', 'обе семьи одинакового размера'], correctIndex: 0 },
  ],
};

const POSSESSIVE_LISTENING: LessonActivity = {
  kind: 'listening', id: 'l8-listening-possessives', title: 'Аудирование: кто владелец?',
  assetId: 'l8_listening_possessives', audioStatus: 'published', passCount: 4,
  transcript: 'Az én nevem Anna. Anyám tanár, apám orvos. Péter a testvérem. Péter háza nagy, az én házam kicsi. A te családod nagy?',
  questions: [
    { id: 'l8-listening-q1', question: 'Чья мать — учительница?', options: ['Анны', 'Петера', 'слушателя'], correctIndex: 0 },
    { id: 'l8-listening-q2', question: 'Кто врач?', options: ['отец Анны', 'брат Анны', 'отец слушателя'], correctIndex: 0 },
    { id: 'l8-listening-q3', question: 'Чей дом большой?', options: ['Анны', 'Петера', 'слушателя'], correctIndex: 1 },
    { id: 'l8-listening-q4', question: 'О чьей семье спрашивает Анна?', options: ['о своей', 'о семье Петера', 'о семье слушателя'], correctIndex: 2 },
  ],
};


const FAMILY_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay', id: 'l8-roleplay-family-talk', title: 'Ролевая игра: знакомство и семья', partnerLabel: 'Új osztálytárs', completionMessage: 'Bemutattátok a családotokat.', startTurnId: 'l8-rp-s1',
  turns: [
    { id: 'l8-rp-s1', speaker: 'waiter', prompt: 'Szia! Van testvéred?', next: 'l8-rp-l1' },
    { id: 'l8-rp-l1', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь, есть ли у тебя брат или сестра.', model: 'Igen, van egy testvérem.', next: 'l8-rp-s2' },
    { id: 'l8-rp-s2', speaker: 'waiter', prompt: 'Értem. Mi a testvéred neve?', next: 'l8-rp-l2' },
    { id: 'l8-rp-l2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови имя и возраст.', model: 'A testvérem neve Dóra, és húszéves.', next: 'l8-rp-s3' },
    { id: 'l8-rp-s3', speaker: 'waiter', prompt: 'Dóra húszéves? És mit csinál?', next: 'l8-rp-l3' },
    { id: 'l8-rp-l3', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови занятие или работу.', model: 'Dóra egyetemista.', next: 'l8-rp-s4' },
    { id: 'l8-rp-s4', speaker: 'waiter', prompt: 'Értem. Hol lakik a testvéred?', next: 'l8-rp-l4' },
    { id: 'l8-rp-l4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови место.', model: 'A testvérem Budapesten lakik.', next: 'l8-rp-s5' },
    { id: 'l8-rp-s5', speaker: 'waiter', prompt: 'Aha. És mit csinálnak a szüleid?', next: 'l8-rp-l5' },
    { id: 'l8-rp-l5', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Кратко расскажи о родителях.', model: 'Anyám tanár, apám pedig orvos.', next: 'l8-rp-s6' },
    { id: 'l8-rp-s6', speaker: 'waiter', prompt: 'Értem. És mit csináltok együtt hétvégén?', next: 'l8-rp-l6' },
    { id: 'l8-rp-l6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови совместное занятие.', model: 'Vasárnap együtt ebédelünk, aztán sétálunk.', next: 'l8-rp-s7' },
    { id: 'l8-rp-s7', speaker: 'waiter', prompt: 'Jól hangzik! Érdekes család.', next: 'l8-rp-l7' },
    { id: 'l8-rp-l7', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Задай хотя бы один вопрос о семье собеседника.', model: 'És neked van testvéred?', next: 'l8-rp-s8' },
    { id: 'l8-rp-s8', speaker: 'waiter', prompt: 'Nincs testvérem, de nagy a családom.', next: 'l8-rp-l8' },
    { id: 'l8-rp-l8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Отреагируй и заверши разговор.', model: 'Értem. Jó volt beszélgetni!', next: 'l8-rp-s9' },
    { id: 'l8-rp-s9', speaker: 'waiter', prompt: 'Én is. Szia!' },
  ],
};

const FAMILY_WRITING: LessonActivity = {
  kind: 'writing', id: 'l8-writing-family-description', title: 'Письмо: моя семья',
  prompt: 'Напиши 60–80 слов о вымышленной семье. Представь 3–5 человек, их отношения, возраст или работу, место жизни/работы/учёбы, одну принадлежность и одно совместное занятие.',
  modelAnswer: ['A Szabó családban öten vannak. Az apa neve Tamás, negyvenéves és szakács. Az anya, Júlia, harmincnyolc éves és tanár. Két lányuk és egy fiuk van. A nagyobb lányuk Budapesten tanul, a fiú még iskolás. A kisebb lányuk nyolcéves. A család háza egy kis városban van, és van egy kutyájuk is. Vasárnap együtt ebédelnek, délután pedig gyakran sétálnak. Mindannyian nagyon kedvesek.'],
  rubric: ['60–80 слов', '3–5 членов семьи', 'отношения и возраст или работа', 'место и одна принадлежность', 'одно совместное занятие'],
};

const FAMILY_SPEAKING = {
  title: 'Говорение: коротко о семье',
  instructions: 'Говори 1–1.5 минуты о вымышленной семье: отношения, возраст или работа и место. Это текстовая инструкция без микрофона, score и evidence.',
  prompt: 'Представь 3–5 человек и объясни, кто кому приходится родственником.',
  rubric: ['отношения', 'возраст или работа', 'место', 'понятное описание'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l8-exit-check', title: 'Проверка целей урока 8', checks: [
    { objectiveId: 'l8_name-family', activityId: 'l8-cp-singular-possessives', evidenceKind: 'grammar' },
    { objectiveId: 'l8_form-possessive', activityId: 'l8-cp-singular-possessives', evidenceKind: 'grammar' },
    { objectiveId: 'l8_use-possessive', activityId: 'l8-cp-singular-possessives', evidenceKind: 'grammar' },
    { objectiveId: 'l8_distinguish-possessors', activityId: 'l8-listening-possessives', evidenceKind: 'listening' },
    { objectiveId: 'l8_describe-family', activityId: 'l8-writing-family-description', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l8-roleplay-family-talk', evidenceKind: 'interaction' }] },
  ],
};

export const LESSON_8: Lesson = {
  id: 8,
  number: 8,
  level: 'A1',
  title: 'Урок 8 · A család & Birtokos ragozás',
  subtitle: 'Семья и притяжательные формы: én, te, ő',
  description: 'Семья и принадлежность в раннем A1: формы одного обладаемого предмета для én/te/ő, понятное чтение, разговор и связное описание.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 8 · 1/11 · СЕМЬЯ',
      title: 'A család',
      subtitle: 'Базовые названия членов семьи и важные различия по контексту',
      type: 'info',
      note: 'Слова fiú и lány обозначают возрастно-половую категорию или родственную роль в зависимости от контекста: fiú — мальчик / сын, lány — девочка / дочь.',
      warn: 'Testvér не указывает пол и переводится как «брат или сестра». Для явного уточнения можно сказать fiútestvér — брат и lánytestvér — сестра.',
      task: 'Прочитайте слова по группам, произнесите их вслух и выполните мини-проверку без использования притяжательных окончаний.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Семья и родители</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th><th>Комментарий</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="család" data-speak-lang="hu-HU">
                család
              </button>
            </td>
            <td>семья</td>
            <td>общее название</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="apa" data-speak-lang="hu-HU">
                apa
              </button>
            </td>
            <td>отец, папа</td>
            <td>член семьи мужского пола</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="anya" data-speak-lang="hu-HU">
                anya
              </button>
            </td>
            <td>мать, мама</td>
            <td>член семьи женского пола</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="szülő" data-speak-lang="hu-HU">
                szülő
              </button>
            </td>
            <td>родитель</td>
            <td>один родитель</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="szülők" data-speak-lang="hu-HU">
                szülők
              </button>
            </td>
            <td>родители</td>
            <td>форма множественного числа</td>
          </tr>
        </table>

        <div class="note">
          Полезная связь:
          <b>apa + anya = szülők</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Дети</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Основные значения</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="fiú" data-speak-lang="hu-HU">
                fiú
              </button>
            </td>
            <td>мальчик; сын — значение определяется контекстом</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="lány" data-speak-lang="hu-HU">
                lány
              </button>
            </td>
            <td>девочка; дочь — значение определяется контекстом</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="gyerek" data-speak-lang="hu-HU">
                gyerek
              </button>
            </td>
            <td>ребёнок</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="gyerekek" data-speak-lang="hu-HU">
                gyerekek
              </button>
            </td>
            <td>дети</td>
          </tr>
        </table>

        <div class="note">
          Полезная связь:
          <b>fiú + lány = gyerekek</b>,
          когда речь идёт о мальчике и девочке как о детях.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Брат или сестра</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th><th>Что выражает</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="testvér" data-speak-lang="hu-HU">
                testvér
              </button>
            </td>
            <td>брат или сестра</td>
            <td>пол не указан</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="fiútestvér" data-speak-lang="hu-HU">
                fiútestvér
              </button>
            </td>
            <td>брат</td>
            <td>мужской пол указан</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="lánytestvér" data-speak-lang="hu-HU">
                lánytestvér
              </button>
            </td>
            <td>сестра</td>
            <td>женский пол указан</td>
          </tr>
        </table>

        <div class="note">
          В дальнейшем часто будет использоваться именно нейтральное
          <b>testvér</b>, когда пол родственника неважен или неизвестен.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Бабушка, дедушка и супруги</h4>

        <table class="conj">
          <tr><th>Венгерский</th><th>Русский</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="nagymama" data-speak-lang="hu-HU">
                nagymama
              </button>
            </td>
            <td>бабушка</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="nagypapa" data-speak-lang="hu-HU">
                nagypapa
              </button>
            </td>
            <td>дедушка</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="feleség" data-speak-lang="hu-HU">
                feleség
              </button>
            </td>
            <td>жена</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="férj" data-speak-lang="hu-HU">
                férj
              </button>
            </td>
            <td>муж</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Как сказать «родители»?</li>
          <li>Какое слово может означать и «мальчик», и «сын»?</li>
          <li>Какое слово не указывает, брат это или сестра?</li>
          <li>Как уточнить именно «сестра»?</li>
          <li>Как сказать «муж»?</li>
        </ol>

        <div class="note">
          Ответы:
          <b>szülők; fiú; testvér; lánytestvér; férj</b>.
        </div>

        <div class="warn">
          Формы «мой отец», «твоя сестра», «его дом»
          будут строиться с притяжательными окончаниями на следующих слайдах.
          На 8.1 нужно только уверенно узнавать базовые слова.
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 8 · 2/11 · МОДЕЛЬ',
      title: 'A birtokos személyrag',
      subtitle: 'Владелец выражается окончанием на обладаемом существительном',
      type: 'info',
      note: 'В венгерском значение «мой / твой / его / её» обычно выражается не отдельным обязательным определителем, а личным притяжательным окончанием на существительном.',
      warn: 'Явные местоимения az én, a te, az ő возможны для акцента или противопоставления, но притяжательное окончание на существительном всё равно сохраняется: az én házam, а не az én ház.',
      task: 'Сравните нейтральные и подчёркнутые формы, определите владельца и не путайте владельца с самим обладаемым предметом.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Главная модель</h4>

        <p>
          В русском владелец часто выражается отдельным словом:
          <b>мой дом, твой дом, его дом</b>.
          В венгерском основная информация о владельце находится
          в окончании самого существительного.
        </p>

        <table class="conj">
          <tr><th>Основа</th><th>Форма</th><th>Значение</th></tr>
          <tr>
            <td><b>ház</b></td>
            <td>
              <button class="speak-btn" data-speak-text="házam" data-speak-lang="hu-HU">
                házam
              </button>
            </td>
            <td>мой дом</td>
          </tr>
          <tr>
            <td><b>ház</b></td>
            <td>
              <button class="speak-btn" data-speak-text="házad" data-speak-lang="hu-HU">
                házad
              </button>
            </td>
            <td>твой дом</td>
          </tr>
          <tr>
            <td><b>ház</b></td>
            <td>
              <button class="speak-btn" data-speak-text="háza" data-speak-lang="hu-HU">
                háza
              </button>
            </td>
            <td>его или её дом</td>
          </tr>
        </table>

        <div class="note">
          Окончание сообщает, кому принадлежит дом:
          <b>-m</b> связано с «я»,
          <b>-d</b> — с «ты»,
          форма третьего лица — с «он / она».
          Точные варианты окончаний будут разобраны на следующем слайде.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Местоимение обычно не требуется</h4>

        <p>
          Нейтрально достаточно одной формы:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ez a házam." data-speak-lang="hu-HU">
            Ez a házam.
          </button>
          — Это мой дом.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A házad nagy." data-speak-lang="hu-HU">
            A házad nagy.
          </button>
          — Твой дом большой.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A háza kicsi." data-speak-lang="hu-HU">
            A háza kicsi.
          </button>
          — Его / её дом маленький.
        </p>

        <div class="note">
          Формы <b>házam, házad, háza</b> уже содержат информацию
          о владельце, поэтому отдельные <b>én, te, ő</b>
          в нейтральной фразе обычно не нужны.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Явное местоимение — для акцента</h4>

        <p>
          Когда нужно подчеркнуть или противопоставить владельцев,
          перед существительным появляется местоимение с артиклем:
        </p>

        <table class="conj">
          <tr><th>Подчёркнутая форма</th><th>Смысл</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="az én házam" data-speak-lang="hu-HU">
                az én házam
              </button>
            </td>
            <td>именно мой дом</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="a te házad" data-speak-lang="hu-HU">
                a te házad
              </button>
            </td>
            <td>именно твой дом</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="az ő háza" data-speak-lang="hu-HU">
                az ő háza
              </button>
            </td>
            <td>именно его / её дом</td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Ez az én házam, az pedig a te házad." data-speak-lang="hu-HU">
            Ez az én házam, az pedig a te házad.
          </button>
          — Это мой дом, а тот — твой.
        </p>

        <div class="warn">
          Нельзя убрать окончание у существительного:
          <b>az én házam</b> — правильно;
          <b>az én ház</b> — неправильно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Ő не различает «его» и «её»</h4>

        <p>
          Венгерское местоимение
          <button class="speak-btn" data-speak-text="ő" data-speak-lang="hu-HU">
            ő
          </button>
          означает и «он», и «она».
          Поэтому:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="az ő háza" data-speak-lang="hu-HU">
            az ő háza
          </button>
          может означать и «его дом», и «её дом».
          Пол владельца определяется контекстом.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Владелец и обладаемый предмет</h4>

        <table class="conj">
          <tr><th>Элемент</th><th>В примере házam</th></tr>
          <tr><td>обладаемый предмет</td><td><b>ház</b> — дом</td></tr>
          <tr><td>владелец</td><td>«я», выраженное окончанием</td></tr>
          <tr><td>число предметов</td><td>один дом</td></tr>
        </table>

        <div class="note">
          На этом этапе изучается только:
          <b>один обладаемый предмет + один владелец én / te / ő</b>.
          Множественное число владельцев и нескольких обладаемых предметов
          будет вводиться отдельно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Именной владелец</h4>

        <p>
          Владельцем может быть не только местоимение, но и имя:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ez Anna háza." data-speak-lang="hu-HU">
            Ez Anna háza.
          </button>
          — Это дом Анны.
        </p>

        <div class="note">
          Даже когда владелец назван словом <b>Anna</b>,
          обладаемое существительное всё равно имеет форму
          третьего лица: <b>háza</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Как сказать «мой дом» без отдельного местоимения?</li>
          <li>Как сказать «именно твой дом»?</li>
          <li>Может ли <b>az ő háza</b> означать «её дом»?</li>
          <li>Что неверно: <b>az én házam</b> или <b>az én ház</b>?</li>
          <li>Как сказать «дом Анны»?</li>
        </ol>

        <div class="note">
          Ответы:
          <b>házam; a te házad; да; az én ház; Anna háza</b>.
        </div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 8 · 3/11 · ФОРМЫ',
      title: 'Egy birtok: én, te, ő',
      subtitle: 'Один дом и три владельца: házam, házad, háza',
      type: 'info',
      note: 'На этом этапе продуктивно изучаются только три владельца в единственном числе: én — я, te — ты, ő — он или она. Формы для mi, ti и ők будут систематизированы позже.',
      warn: 'Нельзя переносить модель házam / házad / háza механически на каждое существительное. Соединительная гласная зависит от гармонии и формы слова, а в третьем лице встречаются также -ja/-je.',
      task: 'Выучите три формы ház как единый набор, определите владельца по окончанию и сравните их с переднегласной моделью testvér.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Один предмет: ház</h4>

        <p>
          Исходное слово:
          <button class="speak-btn" data-speak-text="ház" data-speak-lang="hu-HU">
            ház
          </button>
          — дом.
        </p>

        <table class="conj">
          <tr><th>Владелец</th><th>Форма</th><th>Значение</th></tr>
          <tr>
            <td><b>én</b></td>
            <td>
              <button class="speak-btn" data-speak-text="házam" data-speak-lang="hu-HU">
                házam
              </button>
            </td>
            <td>мой дом</td>
          </tr>
          <tr>
            <td><b>te</b></td>
            <td>
              <button class="speak-btn" data-speak-text="házad" data-speak-lang="hu-HU">
                házad
              </button>
            </td>
            <td>твой дом</td>
          </tr>
          <tr>
            <td><b>ő</b></td>
            <td>
              <button class="speak-btn" data-speak-text="háza" data-speak-lang="hu-HU">
                háza
              </button>
            </td>
            <td>его или её дом</td>
          </tr>
        </table>

        <div class="note">
          Запоминайте весь набор:
          <b>ház — házam — házad — háza</b>.
          В нейтральной речи отдельные <b>én, te, ő</b>
          обычно не произносятся.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Что показывает окончание</h4>

        <table class="conj">
          <tr><th>Фрагмент формы</th><th>Владелец</th><th>Учебная подсказка</th></tr>
          <tr><td><b>-m</b></td><td>én</td><td>мой</td></tr>
          <tr><td><b>-d</b></td><td>te</td><td>твой</td></tr>
          <tr><td><b>-a</b></td><td>ő</td><td>его / её</td></tr>
        </table>

        <div class="warn">
          Это учебное разложение конкретной модели <b>ház</b>,
          а не универсальное правило «просто добавь -m, -d или -a».
          В реальных словах между основой и личным показателем
          появляются разные гласные и иногда <b>j</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Почему в házam появляется a</h4>

        <p>
          Слово <b>ház</b> оканчивается на согласный
          и содержит задний гласный <b>á</b>.
          В формах первого и второго лица появляется
          задняя соединительная гласная <b>a</b>:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="házam, házad" data-speak-lang="hu-HU">
            házam, házad
          </button>
        </p>

        <div class="note">
          Гармония гласных помогает выбрать тип соединительной гласной,
          но не позволяет без словаря предсказать абсолютно все формы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Контраст с переднегласным словом</h4>

        <p>
          У слова
          <button class="speak-btn" data-speak-text="testvér" data-speak-lang="hu-HU">
            testvér
          </button>
          — «брат или сестра» —
          используются передние соединительные гласные:
        </p>

        <table class="conj">
          <tr><th>Владелец</th><th>ház</th><th>testvér</th></tr>
          <tr>
            <td>én</td>
            <td><b>házam</b></td>
            <td>
              <button class="speak-btn" data-speak-text="testvérem" data-speak-lang="hu-HU">
                testvérem
              </button>
            </td>
          </tr>
          <tr>
            <td>te</td>
            <td><b>házad</b></td>
            <td>
              <button class="speak-btn" data-speak-text="testvéred" data-speak-lang="hu-HU">
                testvéred
              </button>
            </td>
          </tr>
          <tr>
            <td>ő</td>
            <td><b>háza</b></td>
            <td>
              <button class="speak-btn" data-speak-text="testvére" data-speak-lang="hu-HU">
                testvére
              </button>
            </td>
          </tr>
        </table>

        <div class="note">
          Сравните:
          <b>-am / -ad / -a</b> после заднегласного <b>ház</b>
          и <b>-em / -ed / -e</b> после переднегласного <b>testvér</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Третье лицо требует внимания</h4>

        <p>
          У <b>ház</b> форма третьего лица:
          <button class="speak-btn" data-speak-text="háza" data-speak-lang="hu-HU">
            háza
          </button>.
          Но у других слов встречаются формы с <b>-ja/-je</b>,
          например:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="anyja, apja" data-speak-lang="hu-HU">
            anyja, apja
          </button>
          — его / её мать, его / её отец.
        </p>

        <div class="warn">
          Поэтому утверждение «все слова на согласный образуются полностью
          регулярно и предсказуемо» неверно.
          На уровне A1 частые формы нужно учить как проверенные модели.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Формы в предложениях</h4>

        <p>
          <button class="speak-btn" data-speak-text="A házam nagy." data-speak-lang="hu-HU">
            A házam nagy.
          </button>
          — Мой дом большой.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A házad kicsi." data-speak-lang="hu-HU">
            A házad kicsi.
          </button>
          — Твой дом маленький.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A háza Budapesten van." data-speak-lang="hu-HU">
            A háza Budapesten van.
          </button>
          — Его / её дом находится в Будапеште.
        </p>

        <div class="note">
          Артикль <b>a</b> перед притяжательной формой нормален:
          <b>a házam, a házad, a háza</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Явный владелец только для акцента</h4>

        <table class="conj">
          <tr><th>Нейтрально</th><th>С подчёркиванием</th></tr>
          <tr><td><b>a házam</b></td><td><b>az én házam</b></td></tr>
          <tr><td><b>a házad</b></td><td><b>a te házad</b></td></tr>
          <tr><td><b>a háza</b></td><td><b>az ő háza</b></td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Az én házam nagy, a te házad kicsi." data-speak-lang="hu-HU">
            Az én házam nagy, a te házad kicsi.
          </button>
          — Мой дом большой, а твой маленький.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Граница материала</h4>

        <div class="warn">
          Формы <b>házunk, házatok, házuk</b> существуют,
          но на этом этапе не входят в продуктивную цель урока.
          Не нужно добавлять их в упражнения или итоговый scoring.
          Сначала автоматизируйте <b>házam, házad, háza</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">9. Мини-проверка</h4>

        <ol class="tasklist">
          <li>Как сказать «мой дом»?</li>
          <li>Какая форма указывает на владельца <b>te</b>?</li>
          <li>Может ли <b>háza</b> означать «её дом»?</li>
          <li>Почему нельзя считать модель полностью универсальной?</li>
          <li>Какие три формы нужно продуктивно знать после этого слайда?</li>
        </ol>

        <div class="note">
          Ответы:
          <b>házam; házad; да; соединительные гласные и третье лицо
          различаются у разных слов; házam, házad, háza</b>.
        </div>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 8 · 4/11 · СЕМЕЙНЫЕ ФОРМЫ',
      title: 'Anya, apa, testvér',
      subtitle: 'Три частые модели: anyám, apám, testvérem',
      type: 'info',
      note: 'Слова anya и apa имеют особые частотные формы. В первом и втором лице конечная a удлиняется до á: anyám, anyád; apám, apád. В третьем лице запоминаются формы anyja и apja.',
      warn: 'Не объясняйте anyja и apja правилом «конечная a просто исчезает и появляется j». Это не универсальный механизм. На уровне A1 безопаснее учить три полных набора как готовые модели.',
      task: 'Сопоставьте владельца én / te / ő с формами anya, apa и testvér, затем преобразуйте шесть коротких словосочетаний.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Три модели целиком</h4>

        <table class="conj">
          <tr>
            <th>Владелец</th>
            <th>anya — мать</th>
            <th>apa — отец</th>
            <th>testvér — брат / сестра</th>
          </tr>
          <tr>
            <td><b>én</b></td>
            <td>
              <button class="speak-btn" data-speak-text="anyám" data-speak-lang="hu-HU">
                anyám
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="apám" data-speak-lang="hu-HU">
                apám
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="testvérem" data-speak-lang="hu-HU">
                testvérem
              </button>
            </td>
          </tr>
          <tr>
            <td><b>te</b></td>
            <td>
              <button class="speak-btn" data-speak-text="anyád" data-speak-lang="hu-HU">
                anyád
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="apád" data-speak-lang="hu-HU">
                apád
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="testvéred" data-speak-lang="hu-HU">
                testvéred
              </button>
            </td>
          </tr>
          <tr>
            <td><b>ő</b></td>
            <td>
              <button class="speak-btn" data-speak-text="anyja" data-speak-lang="hu-HU">
                anyja
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="apja" data-speak-lang="hu-HU">
                apja
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="testvére" data-speak-lang="hu-HU">
                testvére
              </button>
            </td>
          </tr>
        </table>

        <div class="note">
          Учите рядами:
          <b>anyám — anyád — anyja</b>;
          <b>apám — apád — apja</b>;
          <b>testvérem — testvéred — testvére</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Anya и apa: удлинение a → á</h4>

        <p>
          В формах первого и второго лица конечная короткая
          <b>a</b> становится долгой <b>á</b>:
        </p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>én</th><th>te</th></tr>
          <tr>
            <td><b>anya</b></td>
            <td><b>anyám</b></td>
            <td><b>anyád</b></td>
          </tr>
          <tr>
            <td><b>apa</b></td>
            <td><b>apám</b></td>
            <td><b>apád</b></td>
          </tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="anyám, anyád, apám, apád" data-speak-lang="hu-HU">
            anyám, anyád, apám, apád
          </button>
        </p>

        <div class="warn">
          Не пишите <b>anyam, anyad, apam, apad</b>.
          Долгое <b>á</b> является частью правильной формы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Третье лицо: anyja и apja</h4>

        <p>
          Для владельца <b>ő</b> используются частые формы:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="anyja, apja" data-speak-lang="hu-HU">
            anyja, apja
          </button>
          — его / её мать, его / её отец.
        </p>

        <div class="note">
          Здесь нужно запомнить именно:
          <b>anya → anyja</b> и <b>apa → apja</b>.
          Не стройте целевые формы как <b>anyája</b> или <b>apája</b>.
        </div>

        <div class="warn">
          Наличие <b>j</b> в этих двух формах не означает,
          что к каждому слову на <b>-a</b> нужно механически
          удалить гласную и добавить <b>-ja</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Testvér: переднегласная модель</h4>

        <p>
          Слово
          <button class="speak-btn" data-speak-text="testvér" data-speak-lang="hu-HU">
            testvér
          </button>
          не оканчивается на <b>-a</b> и образует другой набор:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="testvérem, testvéred, testvére" data-speak-lang="hu-HU">
            testvérem, testvéred, testvére
          </button>
        </p>

        <table class="conj">
          <tr><th>Форма</th><th>Значение</th></tr>
          <tr><td><b>testvérem</b></td><td>мой брат / моя сестра</td></tr>
          <tr><td><b>testvéred</b></td><td>твой брат / твоя сестра</td></tr>
          <tr><td><b>testvére</b></td><td>его / её брат или сестра</td></tr>
        </table>

        <div class="note">
          Сравните соединительные гласные:
          <b>házam</b>, но <b>testvérem</b>;
          <b>házad</b>, но <b>testvéred</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Нейтральные предложения</h4>

        <p>
          <button class="speak-btn" data-speak-text="Anyám tanár." data-speak-lang="hu-HU">
            Anyám tanár.
          </button>
          — Моя мать — учительница.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Apád orvos." data-speak-lang="hu-HU">
            Apád orvos.
          </button>
          — Твой отец — врач.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A testvére Budapesten lakik." data-speak-lang="hu-HU">
            A testvére Budapesten lakik.
          </button>
          — Его / её брат или сестра живёт в Будапеште.
        </p>

        <div class="note">
          В нейтральной речи достаточно форм
          <b>anyám, apád, testvére</b>.
          Отдельные местоимения обычно не требуются.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Подчёркнутый владелец</h4>

        <p>
          Для противопоставления используются полные конструкции:
        </p>

        <table class="conj">
          <tr><th>Владелец</th><th>Подчёркнутая форма</th></tr>
          <tr><td>én</td><td><b>az én anyám / az én apám</b></td></tr>
          <tr><td>te</td><td><b>a te anyád / a te apád</b></td></tr>
          <tr><td>ő</td><td><b>az ő anyja / az ő apja</b></td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Az én anyám tanár, az ő anyja orvos." data-speak-lang="hu-HU">
            Az én anyám tanár, az ő anyja orvos.
          </button>
          — Моя мать — учительница, а его / её мать — врач.
        </p>

        <div class="warn">
          Для третьего лица при явном владельце используйте
          <b>az ő anyja</b>, а не изолированное <b>ő anyja</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Только én, te, ő</h4>

        <div class="warn">
          Формы для <b>mi, ti, ők</b> существуют,
          но не входят в продуктивную цель урока 8.
          На этом этапе не нужно учить или проверять
          <b>anyánk, anyátok, anyjuk</b> и соответствующие формы
          <b>apa</b> и <b>testvér</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Преобразуйте формы</h4>

        <ol class="tasklist">
          <li><b>anya + én</b></li>
          <li><b>apa + te</b></li>
          <li><b>testvér + ő</b></li>
          <li><b>apa + én</b></li>
          <li><b>anya + ő</b></li>
          <li><b>testvér + te</b></li>
        </ol>

        <div class="note">
          Ответы:
          <b>anyám; apád; testvére; apám; anyja; testvéred</b>.
        </div>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 8 · 5/11 · КОНТЕКСТНАЯ ПРАКТИКА',
      title: 'Kié?',
      subtitle: 'Чей предмет, у кого есть родственник и как задать бытовой вопрос',
      type: 'practice',
      note: 'Kié? означает «чей? чья? чьё?». Владелец определяется по притяжательному окончанию или по названному имени: könyvem — моя книга, Anna könyve — книга Анны.',
      warn: 'Van и nincs сами по себе не обозначают владельца. Они сообщают, существует ли человек или предмет. В предложении Van egy testvérem владелец «я» выражен формой testvérem.',
      task: 'Определяйте владельца по форме существительного, различайте van и nincs, задавайте вопросы о семье и выполните 14 заданий controlled practice.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Вопрос Kié?</h4>

        <p>
          <button class="speak-btn" data-speak-text="Kié?" data-speak-lang="hu-HU">
            Kié?
          </button>
          — Чей? Чья? Чьё?
        </p>

        <p>
          Этот вопрос используется, когда нужно узнать владельца:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Kié ez a könyv?" data-speak-lang="hu-HU">
            Kié ez a könyv?
          </button>
          — Чья это книга?
        </p>

        <table class="conj">
          <tr><th>Ответ</th><th>Значение</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Ez a könyvem." data-speak-lang="hu-HU">
                Ez a könyvem.
              </button>
            </td>
            <td>Это моя книга.</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Ez Anna könyve." data-speak-lang="hu-HU">
                Ez Anna könyve.
              </button>
            </td>
            <td>Это книга Анны.</td>
          </tr>
        </table>

        <div class="note">
          В форме <b>könyvem</b> владелец выражен окончанием.
          В конструкции <b>Anna könyve</b> владелец назван именем,
          а обладаемое слово стоит в форме третьего лица.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Определяем владельца по форме</h4>

        <table class="conj">
          <tr><th>Форма</th><th>Владелец</th><th>Значение</th></tr>
          <tr><td><b>anyám</b></td><td>én</td><td>моя мать</td></tr>
          <tr><td><b>anyád</b></td><td>te</td><td>твоя мать</td></tr>
          <tr><td><b>anyja</b></td><td>ő</td><td>его / её мать</td></tr>
          <tr><td><b>testvérem</b></td><td>én</td><td>мой брат / моя сестра</td></tr>
          <tr><td><b>testvéred</b></td><td>te</td><td>твой брат / твоя сестра</td></tr>
          <tr><td><b>testvére</b></td><td>ő</td><td>его / её брат или сестра</td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="anyám, anyád, anyja" data-speak-lang="hu-HU">
            anyám, anyád, anyja
          </button>
        </p>

        <div class="note">
          Короткая подсказка:
          формы с <b>-m</b> указывают на <b>én</b>,
          формы с <b>-d</b> — на <b>te</b>,
          формы третьего лица — на <b>ő</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Van и nincs: наличие и отсутствие</h4>

        <p>
          <button class="speak-btn" data-speak-text="Van egy testvérem." data-speak-lang="hu-HU">
            Van egy testvérem.
          </button>
          — У меня есть брат или сестра.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Nincs testvérem." data-speak-lang="hu-HU">
            Nincs testvérem.
          </button>
          — У меня нет брата или сестры.
        </p>

        <table class="conj">
          <tr><th>Элемент</th><th>Что сообщает</th></tr>
          <tr><td><b>van</b></td><td>есть, существует</td></tr>
          <tr><td><b>nincs</b></td><td>нет, не существует</td></tr>
          <tr><td><b>testvérem</b></td><td>владелец — я</td></tr>
        </table>

        <div class="warn">
          Неверно считать, что <b>van</b> означает «мой».
          Владелец определяется формой <b>testvérem</b>,
          а <b>van</b> показывает наличие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Бытовые вопросы о семье</h4>

        <table class="conj">
          <tr><th>Вопрос</th><th>Значение</th></tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Van testvéred?" data-speak-lang="hu-HU">
                Van testvéred?
              </button>
            </td>
            <td>У тебя есть брат или сестра?</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Mi a testvéred neve?" data-speak-lang="hu-HU">
                Mi a testvéred neve?
              </button>
            </td>
            <td>Как зовут твоего брата или сестру?</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Hol lakik a testvéred?" data-speak-lang="hu-HU">
                Hol lakik a testvéred?
              </button>
            </td>
            <td>Где живёт твой брат или твоя сестра?</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Hol laknak a szüleid?" data-speak-lang="hu-HU">
                Hol laknak a szüleid?
              </button>
            </td>
            <td>Где живут твои родители?</td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="Hány éves a fiad?" data-speak-lang="hu-HU">
                Hány éves a fiad?
              </button>
            </td>
            <td>Сколько лет твоему сыну?</td>
          </tr>
        </table>

        <div class="note">
          В вопросах <b>testvéred, szüleid, fiad</b>
          уже указывают на собеседника как владельца.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Контраст владельцев</h4>

        <p>
          <button class="speak-btn" data-speak-text="Az én házam nagy, a te házad kicsi." data-speak-lang="hu-HU">
            Az én házam nagy, a te házad kicsi.
          </button>
          — Мой дом большой, а твой маленький.
        </p>

        <div class="note">
          Явные <b>az én</b> и <b>a te</b> нужны здесь
          для противопоставления.
          Формы <b>házam</b> и <b>házad</b> всё равно сохраняются.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Кто выполняет действие и чей предмет</h4>

        <p>
          Притяжательная форма сообщает владельца,
          но не обязательно подлежащее всего предложения.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A testvéred Budapesten lakik." data-speak-lang="hu-HU">
            A testvéred Budapesten lakik.
          </button>
          — Твой брат или твоя сестра живёт в Будапеште.
        </p>

        <table class="conj">
          <tr><th>Роль</th><th>Форма</th></tr>
          <tr><td>кто живёт</td><td><b>a testvéred</b></td></tr>
          <tr><td>чей родственник</td><td>собеседника — <b>te</b></td></tr>
          <tr><td>где живёт</td><td><b>Budapesten</b></td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Как выполнять controlled practice</h4>

        <ol class="tasklist">
          <li>Сначала определите, кто владелец: én, te или ő.</li>
          <li>Затем выберите правильную притяжательную форму.</li>
          <li>В предложениях с van / nincs отдельно проверьте наличие.</li>
          <li>В вопросах определите, о чьём родственнике спрашивают.</li>
          <li>Не выбирайте ответ только по последней букве без проверки смысла.</li>
        </ol>

        <div class="note">
          В activity <b>14 заданий</b>.
          Для успешного результата нужно не менее
          <b>11 правильных ответов из 14</b>.
        </div>

        <div class="warn">
          Успешное прохождение подтверждает работу
          с конкретными формами и контекстами этого упражнения.
          Оно не является автоматической оценкой свободного рассказа о семье.
        </div>
      `,
      activities: [SINGULAR_POSSESSIVES],
    },
    {
      id: 6,
      eyebrow: 'УРОК 8 · 6/11 · ЧТЕНИЕ',
      title: 'Két család egy házban',
      subtitle: 'Сравниваем две семьи по отношениям, возрасту, работе, месту и общим занятиям',
      type: 'practice',
      note: 'Цель reading — понять структуру двух семей и найти доказательство для каждого ответа. Не переводите текст слово за словом и не определяйте смысл только по одному окончанию.',
      warn: 'Формы gyerekük, fiuk, lányuk и szüleik встречаются здесь для рецептивного понимания. Они не расширяют продуктивную цель урока beyond én / te / ő и не добавляются в отдельный grammar scoring.',
      task: 'Прочитайте три абзаца в три прохода: сначала разделите две семьи, затем заполните смысловую таблицу, после этого ответьте на 7 вопросов.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Заголовок и структура текста</h4>

        <p>
          <button class="speak-btn" data-speak-text="Két család egy házban." data-speak-lang="hu-HU">
            Két család egy házban.
          </button>
          — Две семьи в одном доме.
        </p>

        <table class="conj">
          <tr><th>Абзац</th><th>Главная функция</th></tr>
          <tr><td>1</td><td>семья Ковач: взрослые, дети, занятия и домашнее животное</td></tr>
          <tr><td>2</td><td>Анна и Петер: родство, возраст, работа / учёба, место и вещи</td></tr>
          <tr><td>3</td><td>что две семьи делают вместе и чем они различаются</td></tr>
        </table>

        <div class="note">
          Сначала определите, к какой из двух семей относится каждое имя.
          Только после этого связывайте возраст, профессию, место и принадлежность.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Первый проход: найдите людей</h4>

        <p>
          При первом чтении отмечайте только имена и родственные слова:
        </p>

        <table class="conj">
          <tr><th>Сигнал</th><th>Что искать</th></tr>
          <tr><td><b>apa, felesége</b></td><td>отец и его жена</td></tr>
          <tr><td><b>fiuk, lányuk</b></td><td>их сын и их дочь</td></tr>
          <tr><td><b>testvére</b></td><td>его / её брат или сестра</td></tr>
          <tr><td><b>szüleik</b></td><td>их родители</td></tr>
          <tr><td><b>gyerekek</b></td><td>дети как группа</td></tr>
        </table>

        <div class="warn">
          Не делайте вывод только по окончанию.
          Например, форма <b>testvére</b> указывает на принадлежность,
          но имя владельца нужно восстановить из соседнего контекста.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Второй проход: заполните пять колонок</h4>

        <table class="conj">
          <tr>
            <th>Человек / группа</th>
            <th>Родство</th>
            <th>Возраст</th>
            <th>Работа / учёба</th>
            <th>Место / занятие</th>
          </tr>
          <tr>
            <td>имя</td>
            <td>кто кому приходится</td>
            <td>сколько лет</td>
            <td>кем работает или учится</td>
            <td>где живёт и что делает</td>
          </tr>
        </table>

        <p>
          Полезные сигналы:
        </p>

        <ul class="tick">
          <li><b>neve</b> — зовут / имя;</li>
          <li><b>éves</b> — возраст;</li>
          <li><b>tanár, orvos, egyetemista</b> — профессия или статус;</li>
          <li><b>dolgozik, lakik, tanul</b> — работа, жизнь или учёба;</li>
          <li><b>szeret, gyakran</b> — интерес или частое занятие.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как распознавать принадлежность</h4>

        <table class="conj">
          <tr><th>Форма из текста</th><th>Что нужно понять</th></tr>
          <tr><td><b>felesége</b></td><td>чья жена названа</td></tr>
          <tr><td><b>gyerekük</b></td><td>у какой пары есть дети</td></tr>
          <tr><td><b>fiuk / lányuk</b></td><td>чей это сын / чья дочь</td></tr>
          <tr><td><b>kutyájának neve</b></td><td>имя чьей собаки названо</td></tr>
          <tr><td><b>szüleik</b></td><td>родители каких двух людей</td></tr>
          <tr><td><b>lakása / kerékpárja</b></td><td>чья квартира / чей велосипед</td></tr>
        </table>

        <div class="note">
          Здесь plural possessor-формы нужно только узнавать по смыслу.
          Образовывать их самостоятельно в этом уроке не требуется.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Контраст и сравнение</h4>

        <p>
          В третьем абзаце особенно важны слова:
        </p>

        <table class="conj">
          <tr><th>Слово</th><th>Функция</th></tr>
          <tr><td><b>pedig</b></td><td>добавляет контраст или параллель</td></tr>
          <tr><td><b>de</b></td><td>но</td></tr>
          <tr><td><b>kisebb</b></td><td>меньше</td></tr>
          <tr><td><b>nagyobb</b></td><td>больше</td></tr>
          <tr><td><b>együtt</b></td><td>вместе</td></tr>
          <tr><td><b>gyakran</b></td><td>часто</td></tr>
        </table>

        <div class="note">
          Эти сигналы помогают ответить на вопросы о различиях
          и совместных занятиях без полного перевода каждого предложения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Третий проход: доказательство для ответа</h4>

        <ol class="tasklist">
          <li>Прочитайте вопрос и определите категорию: родство, возраст, работа, место или действие.</li>
          <li>Найдите абзац, где находится эта категория.</li>
          <li>Прочитайте одно предложение до и одно после ключевой фразы.</li>
          <li>Выберите ответ только после проверки контекста.</li>
          <li>Не используйте знание реальных семей: все семьи в тексте вымышленные.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Проверка перед отправкой</h4>

        <table class="conj">
          <tr><th>Проверьте</th><th>Вопрос к себе</th></tr>
          <tr><td>две семьи</td><td>не смешал ли я людей из разных абзацев?</td></tr>
          <tr><td>родство</td><td>кто кому приходится родственником?</td></tr>
          <tr><td>числа</td><td>не перепутал ли я возраст и этаж?</td></tr>
          <tr><td>работа</td><td>кто учитель, врач, офисный работник или студент?</td></tr>
          <tr><td>место</td><td>где живут люди и где находится предмет?</td></tr>
          <tr><td>совместное действие</td><td>что семьи делают вместе?</td></tr>
          <tr><td>сравнение</td><td>какая семья больше или меньше?</td></tr>
        </table>

        <div class="note">
          В reading-activity <b>7 вопросов</b>.
          Для успешного результата нужно не менее
          <b>6 правильных ответов из 7</b>.
        </div>

        <div class="warn">
          Успешный результат подтверждает понимание именно этого текста.
          Он не означает автоматическое владение всеми
          притяжательными формами в свободной речи и письме.
        </div>
      `,
      activities: [FAMILY_READING],
    },
    {
      id: 7,
      eyebrow: 'УРОК 8 · 7/11 · АУДИРОВАНИЕ',
      title: 'Hallásértés',
      subtitle: 'Слушаем отдельную опубликованную запись и определяем владельца',
      type: 'practice',
      note: 'Аудио 8.7.mp3 содержит только инструкцию к слайду. Само проверяемое аудирование воспроизводится из отдельного опубликованного asset l8_listening_possessives.',
      warn: 'Не используйте transcript до первого самостоятельного прослушивания. Иначе activity перестаёт проверять понимание на слух.',
      task: 'Прослушайте отдельную запись два раза, определите говорящего, родственников и владельцев, затем ответьте на четыре вопроса.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Два разных аудиофайла</h4>

        <table class="conj">
          <tr><th>Файл</th><th>Назначение</th></tr>
          <tr>
            <td><b>8.7.mp3</b></td>
            <td>объясняет стратегию выполнения задания</td>
          </tr>
          <tr>
            <td><b>l8_listening_possessives.mp3</b></td>
            <td>реальная опубликованная запись, по которой оцениваются ответы</td>
          </tr>
        </table>

        <div class="warn">
          Не отвечайте только по инструкции 8.7.mp3.
          Для результата activity нужно прослушать отдельную запись задания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Первый проход: общая ситуация</h4>

        <ol class="tasklist">
          <li>Определите, кто говорит.</li>
          <li>Отметьте, какие родственники названы.</li>
          <li>Не пытайтесь сразу записать каждое слово.</li>
          <li>Сформулируйте одним предложением, о чём запись.</li>
        </ol>

        <div class="note">
          На первом проходе важна общая схема:
          <b>говорящий → родственники → дома → вопрос собеседнику</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Второй проход: формы владельца</h4>

        <p>
          Слушайте не только существительное, но и его притяжательную форму.
        </p>

        <table class="conj">
          <tr><th>Форма</th><th>Что она сообщает</th></tr>
          <tr><td><b>anyám</b></td><td>моя мать</td></tr>
          <tr><td><b>apám</b></td><td>мой отец</td></tr>
          <tr><td><b>testvérem</b></td><td>мой брат / моя сестра</td></tr>
          <tr><td><b>háza</b></td><td>его / её дом</td></tr>
          <tr><td><b>házam</b></td><td>мой дом</td></tr>
          <tr><td><b>családod</b></td><td>твоя семья</td></tr>
        </table>

        <div class="note">
          Окончания помогают различать:
          <b>мой</b>, <b>твой</b> и <b>его / её</b>.
          Но окончательный ответ проверяйте по всему предложению.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Контраст владельцев</h4>

        <p>
          В записи встречается противопоставление двух домов.
          Обратите внимание на сочетание имени и притяжательной формы,
          а также на явно подчёркнутого владельца.
        </p>

        <table class="conj">
          <tr><th>Сигнал</th><th>Что проверить</th></tr>
          <tr><td>имя + <b>háza</b></td><td>чей дом описывается</td></tr>
          <tr><td><b>az én házam</b></td><td>говорящий подчёркивает свой дом</td></tr>
          <tr><td><b>nagy / kicsi</b></td><td>какой дом большой или маленький</td></tr>
        </table>

        <div class="warn">
          Не выбирайте владельца только по прилагательному
          <b>nagy</b> или <b>kicsi</b>.
          Сначала свяжите его с правильным существительным.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Последний вопрос записи</h4>

        <p>
          В конце говорящий обращается к собеседнику.
          Притяжательная форма второго лица показывает,
          что вопрос относится к семье слушателя.
        </p>

        <div class="note">
          Услышав окончание второго лица, проверьте:
          спрашивают о говорящем или о собеседнике?
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Как отвечать на четыре вопроса</h4>

        <ol class="tasklist">
          <li>Прочитайте вопрос до повторного прослушивания.</li>
          <li>Определите категорию: родственник, профессия, дом или адресат вопроса.</li>
          <li>Во втором прослушивании найдите одну ключевую фразу.</li>
          <li>Проверьте владельца по форме существительного.</li>
          <li>Только затем выбирайте ответ.</li>
        </ol>

        <div class="note">
          В activity <b>4 вопроса</b>.
          Для успешного результата нужны
          <b>4 правильных ответа из 4</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Transcript — только после попытки</h4>

        <p>
          После самостоятельных ответов transcript можно использовать
          для разбора ошибок:
        </p>

        <ul class="tick">
          <li>найдите неуслышанную притяжательную форму;</li>
          <li>сравните её с выбранным владельцем;</li>
          <li>прослушайте соответствующее предложение ещё раз;</li>
          <li>повторите его вслух без чтения.</li>
        </ul>

        <div class="warn">
          Успешный результат подтверждает понимание
          этой конкретной опубликованной записи.
          Он не является автоматической оценкой свободной речи
          или полного владения всеми притяжательными формами.
        </div>
      `,
      activities: [POSSESSIVE_LISTENING],
    },
    {
      id: 8,
      eyebrow: 'УРОК 8 · 8/11 · ВЗАИМОДЕЙСТВИЕ',
      title: 'Beszélgetés a családról',
      subtitle: 'Представляем вымышленную семью и поддерживаем двусторонний разговор',
      type: 'practice',
      note: 'Сценарий состоит из восьми ответов ученика. Нужно не только рассказать о вымышленной семье, но и задать собеседнику встречный вопрос.',
      warn: 'Завершение role-play подтверждает прохождение сценария selfPractice, но не оценивает автоматически произношение, грамматику, естественность или спонтанность. Результат остаётся PARTIAL / REVIEW.',
      task: 'Пройдите сценарий три раза: сначала с моделями, затем без чтения моделей, затем с другими именами, возрастом, работой, местом и совместным занятием.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта разговора</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>Что нужно сообщить</th><th>Ключевая форма</th></tr>
          <tr><td>1</td><td>есть ли брат или сестра</td><td><b>Van testvérem / Nincs testvérem</b></td></tr>
          <tr><td>2</td><td>имя и возраст</td><td><b>A testvérem neve... és ... éves</b></td></tr>
          <tr><td>3</td><td>работа или занятие</td><td><b>tanár / orvos / egyetemista</b></td></tr>
          <tr><td>4</td><td>где живёт</td><td><b>Budapesten lakik</b></td></tr>
          <tr><td>5</td><td>что делают родители</td><td><b>Anyám... apám pedig...</b></td></tr>
          <tr><td>6</td><td>совместное действие</td><td><b>együtt...</b></td></tr>
          <tr><td>7</td><td>встречный вопрос</td><td><b>És neked...?</b></td></tr>
          <tr><td>8</td><td>реакция и завершение</td><td><b>Értem. Jó volt beszélgetni!</b></td></tr>
        </table>

        <div class="note">
          Разговор должен двигаться по смысловой цепочке:
          <b>родственник → личные данные → место → родители →
          совместное действие → вопрос собеседнику → завершение</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Первый ответ: есть или нет</h4>

        <p>
          Собеседник начинает:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Szia! Van testvéred?" data-speak-lang="hu-HU">
            Szia! Van testvéred?
          </button>
          — Привет! У тебя есть брат или сестра?
        </p>

        <table class="conj">
          <tr><th>Ситуация</th><th>Ответ</th></tr>
          <tr>
            <td>есть</td>
            <td>
              <button class="speak-btn" data-speak-text="Igen, van egy testvérem." data-speak-lang="hu-HU">
                Igen, van egy testvérem.
              </button>
            </td>
          </tr>
          <tr>
            <td>нет</td>
            <td>
              <button class="speak-btn" data-speak-text="Nincs testvérem." data-speak-lang="hu-HU">
                Nincs testvérem.
              </button>
            </td>
          </tr>
        </table>

        <div class="warn">
          Если вы выбираете ответ <b>Nincs testvérem</b>,
          последующие реплики сценария всё равно можно выполнить
          как рассказ о вымышленном родственнике.
          Цель — языковая практика, а не биографическая точность.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Имя и возраст</h4>

        <p>
          <button class="speak-btn" data-speak-text="Mi a testvéred neve?" data-speak-lang="hu-HU">
            Mi a testvéred neve?
          </button>
          — Как зовут твоего брата или сестру?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A testvérem neve Dóra, és húszéves." data-speak-lang="hu-HU">
            A testvérem neve Dóra, és húszéves.
          </button>
          — Моего брата / мою сестру зовут Дора, ей двадцать лет.
        </p>

        <div class="note">
          Меняйте два элемента:
          <b>имя</b> и <b>возраст</b>.
          Не заучивайте только Dóra и húszéves.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Работа или занятие</h4>

        <p>
          Собеседник спрашивает:
          <button class="speak-btn" data-speak-text="És mit csinál?" data-speak-lang="hu-HU">
            És mit csinál?
          </button>
          — А чем он / она занимается?
        </p>

        <table class="conj">
          <tr><th>Вариант</th><th>Модель</th></tr>
          <tr><td>студент</td><td><b>Egyetemista.</b></td></tr>
          <tr><td>учитель</td><td><b>Tanár.</b></td></tr>
          <tr><td>врач</td><td><b>Orvos.</b></td></tr>
          <tr><td>работает в офисе</td><td><b>Egy irodában dolgozik.</b></td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Dóra egyetemista." data-speak-lang="hu-HU">
            Dóra egyetemista.
          </button>
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Место жизни</h4>

        <p>
          <button class="speak-btn" data-speak-text="Hol lakik a testvéred?" data-speak-lang="hu-HU">
            Hol lakik a testvéred?
          </button>
          — Где живёт твой брат или твоя сестра?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A testvérem Budapesten lakik." data-speak-lang="hu-HU">
            A testvérem Budapesten lakik.
          </button>
          — Мой брат / моя сестра живёт в Будапеште.
        </p>

        <div class="note">
          Замените <b>Budapesten</b> другим знакомым местом,
          не меняя структуру предложения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Родители</h4>

        <p>
          <button class="speak-btn" data-speak-text="És mit csinálnak a szüleid?" data-speak-lang="hu-HU">
            És mit csinálnak a szüleid?
          </button>
          — А чем занимаются твои родители?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Anyám tanár, apám pedig orvos." data-speak-lang="hu-HU">
            Anyám tanár, apám pedig orvos.
          </button>
          — Моя мать — учительница, а отец — врач.
        </p>

        <div class="note">
          <b>pedig</b> связывает два параллельных сообщения
          и создаёт мягкое противопоставление.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Совместное действие</h4>

        <p>
          <button class="speak-btn" data-speak-text="Mit csináltok együtt hétvégén?" data-speak-lang="hu-HU">
            Mit csináltok együtt hétvégén?
          </button>
          — Что вы делаете вместе на выходных?
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Vasárnap együtt ebédelünk, aztán sétálunk." data-speak-lang="hu-HU">
            Vasárnap együtt ebédelünk, aztán sétálunk.
          </button>
          — В воскресенье мы вместе обедаем, а потом гуляем.
        </p>

        <div class="note">
          Для вариации замените действия:
          <b>főzünk, filmet nézünk, sportolunk, beszélgetünk</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Встречный вопрос обязателен</h4>

        <p>
          После рассказа не завершайте разговор сразу.
          Спросите собеседника:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="És neked van testvéred?" data-speak-lang="hu-HU">
            És neked van testvéred?
          </button>
          — А у тебя есть брат или сестра?
        </p>

        <table class="conj">
          <tr><th>Другие вопросы</th><th>Значение</th></tr>
          <tr><td><b>Hol laknak a szüleid?</b></td><td>Где живут твои родители?</td></tr>
          <tr><td><b>Nagy a családod?</b></td><td>У тебя большая семья?</td></tr>
          <tr><td><b>Mit csináltok együtt?</b></td><td>Что вы делаете вместе?</td></tr>
        </table>

        <div class="warn">
          Без встречного вопроса получится монолог,
          а не полноценное взаимодействие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">9. Реакция и завершение</h4>

        <p>
          <button class="speak-btn" data-speak-text="Értem. Jó volt beszélgetni!" data-speak-lang="hu-HU">
            Értem. Jó volt beszélgetni!
          </button>
          — Понятно. Было приятно поговорить!
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Szia!" data-speak-lang="hu-HU">
            Szia!
          </button>
          — Пока!
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">10. Три прохода</h4>

        <ol class="tasklist">
          <li><b>Первый проход:</b> отвечайте по моделям.</li>
          <li><b>Второй проход:</b> закройте модели и сохраните ту же структуру.</li>
          <li><b>Третий проход:</b> измените имена, возраст, работу, место и действия.</li>
        </ol>

        <div class="note">
          После третьего прохода попробуйте говорить целыми фразами,
          не переводя каждую реплику с русского.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">11. Что означает завершение role-play</h4>

        <table class="conj">
          <tr><th>Подтверждается</th><th>Не подтверждается автоматически</th></tr>
          <tr>
            <td>пройдена последовательность реплик</td>
            <td>точность произношения</td>
          </tr>
          <tr>
            <td>использованы модельные ответы</td>
            <td>естественная грамматика свободного ответа</td>
          </tr>
          <tr>
            <td>задан встречный вопрос</td>
            <td>спонтанность и беглость</td>
          </tr>
          <tr>
            <td>сценарий завершён</td>
            <td>полное владение темой семьи</td>
          </tr>
        </table>

        <div class="warn">
          Role-play остаётся <b>PARTIAL / REVIEW</b>.
          Для проверки свободной речи полезна обратная связь
          преподавателя или носителя языка.
        </div>
      `,
      activities: [FAMILY_ROLEPLAY],
    },
    {
      id: 9,
      eyebrow: 'УРОК 8 · 9/11 · ПИСЬМО',
      title: 'Írás: egy kitalált család',
      subtitle: 'Связное описание вымышленной семьи объёмом 60–80 слов',
      type: 'practice',
      note: 'Нужно написать связный текст, а не перечень имён. Представьте 3–5 человек и свяжите отношения, возраст или работу, место, одну принадлежность и одно совместное занятие.',
      warn: 'Writing не получает автоматический DIRECT-статус. Самопроверка подтверждает выполнение рубрики, но не заменяет проверку грамматики, естественности и связности преподавателем или другим компетентным читателем.',
      task: 'Сначала составьте план из пяти частей, затем напишите 60–80 слов и проверьте текст по пяти критериям FAMILY_WRITING.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Что должно быть в тексте</h4>

        <table class="conj">
          <tr><th>Критерий</th><th>Что включить</th><th>Полезная рамка</th></tr>
          <tr>
            <td>3–5 человек</td>
            <td>назовите членов одной вымышленной семьи</td>
            <td>
              <button class="speak-btn" data-speak-text="A családban négyen vannak." data-speak-lang="hu-HU">
                A családban négyen vannak.
              </button>
            </td>
          </tr>
          <tr>
            <td>отношения</td>
            <td>объясните, кто кому приходится родственником</td>
            <td>
              <button class="speak-btn" data-speak-text="Anna Péter testvére." data-speak-lang="hu-HU">
                Anna Péter testvére.
              </button>
            </td>
          </tr>
          <tr>
            <td>возраст или работа</td>
            <td>дайте хотя бы одну характеристику людям</td>
            <td>
              <button class="speak-btn" data-speak-text="Az apa negyvenéves és tanár." data-speak-lang="hu-HU">
                Az apa negyvenéves és tanár.
              </button>
            </td>
          </tr>
          <tr>
            <td>место и принадлежность</td>
            <td>укажите, где живут / работают / учатся, и кому принадлежит одна вещь</td>
            <td>
              <button class="speak-btn" data-speak-text="A család háza egy kis városban van." data-speak-lang="hu-HU">
                A család háza egy kis városban van.
              </button>
            </td>
          </tr>
          <tr>
            <td>совместное занятие</td>
            <td>опишите, что семья делает вместе</td>
            <td>
              <button class="speak-btn" data-speak-text="Vasárnap együtt ebédelnek." data-speak-lang="hu-HU">
                Vasárnap együtt ebédelnek.
              </button>
            </td>
          </tr>
        </table>

        <div class="note">
          Удобная последовательность:
          <b>размер семьи → люди и отношения → возраст / работа →
          место и принадлежность → совместное занятие</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Составьте план до написания</h4>

        <table class="conj">
          <tr><th>Человек</th><th>Родство</th><th>Возраст / работа</th><th>Место</th></tr>
          <tr><td>имя 1</td><td>отец / мать / брат / сестра</td><td>возраст или профессия</td><td>где живёт / работает / учится</td></tr>
          <tr><td>имя 2</td><td>отношение к другим</td><td>возраст или профессия</td><td>место</td></tr>
          <tr><td>имя 3</td><td>отношение к другим</td><td>возраст или занятие</td><td>место</td></tr>
        </table>

        <div class="warn">
          Не начинайте с полного перевода русского абзаца.
          Сначала заполните короткий план венгерскими словами,
          которые уже известны из урока.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Как выражать отношения</h4>

        <table class="conj">
          <tr><th>Рамка</th><th>Значение</th></tr>
          <tr><td><b>Az apa neve...</b></td><td>Отца зовут...</td></tr>
          <tr><td><b>A felesége...</b></td><td>Его жена...</td></tr>
          <tr><td><b>Anna Péter testvére.</b></td><td>Анна — сестра Петера.</td></tr>
          <tr><td><b>Ő Anna lánya.</b></td><td>Она — дочь Анны.</td></tr>
          <tr><td><b>Péter a testvérem.</b></td><td>Петер — мой брат.</td></tr>
        </table>

        <div class="note">
          Выберите точку зрения и сохраняйте её.
          Если рассказ ведётся со стороны внешнего наблюдателя,
          удобно использовать имена:
          <b>Anna testvére, Péter háza</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Возраст и работа</h4>

        <p>
          Для возраста используйте:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Lili tízéves." data-speak-lang="hu-HU">
            Lili tízéves.
          </button>
          — Лили десять лет.
        </p>

        <p>
          Для профессии или занятия:
        </p>

        <table class="conj">
          <tr><th>Форма</th><th>Значение</th></tr>
          <tr><td><b>tanár</b></td><td>учитель</td></tr>
          <tr><td><b>orvos</b></td><td>врач</td></tr>
          <tr><td><b>szakács</b></td><td>повар</td></tr>
          <tr><td><b>egyetemista</b></td><td>студент университета</td></tr>
          <tr><td><b>egy irodában dolgozik</b></td><td>работает в офисе</td></tr>
          <tr><td><b>iskolás</b></td><td>школьник</td></tr>
        </table>

        <div class="note">
          Для каждого человека не требуется писать и возраст,
          и профессию. Рубрика допускает
          <b>возраст или работу</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Место и одна принадлежность</h4>

        <p>
          Место можно выразить через:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Budapesten laknak." data-speak-lang="hu-HU">
            Budapesten laknak.
          </button>
          — Они живут в Будапеште.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Anna egy irodában dolgozik." data-speak-lang="hu-HU">
            Anna egy irodában dolgozik.
          </button>
          — Анна работает в офисе.
        </p>

        <p>
          Для принадлежности достаточно одной ясной конструкции:
        </p>

        <table class="conj">
          <tr><th>Форма</th><th>Значение</th></tr>
          <tr><td><b>Anna lakása</b></td><td>квартира Анны</td></tr>
          <tr><td><b>Péter kerékpárja</b></td><td>велосипед Петера</td></tr>
          <tr><td><b>a család háza</b></td><td>дом семьи</td></tr>
          <tr><td><b>a testvérem könyve</b></td><td>книга моего брата / моей сестры</td></tr>
        </table>

        <div class="warn">
          Не добавляйте сложные новые формы только ради количества.
          Одна понятная и грамматически контролируемая
          конструкция принадлежности соответствует рубрике.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Совместное занятие</h4>

        <table class="conj">
          <tr><th>Рамка</th><th>Значение</th></tr>
          <tr><td><b>Vasárnap együtt ebédelnek.</b></td><td>В воскресенье они вместе обедают.</td></tr>
          <tr><td><b>Gyakran sétálnak.</b></td><td>Они часто гуляют.</td></tr>
          <tr><td><b>Együtt filmet néznek.</b></td><td>Они вместе смотрят фильм.</td></tr>
          <tr><td><b>Hétvégén együtt főznek.</b></td><td>На выходных они вместе готовят.</td></tr>
        </table>

        <div class="note">
          Достаточно одного совместного занятия,
          но оно должно относиться к семье как к группе.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Связный текст, а не список</h4>

        <div class="warn">
          Слабый вариант:
          <b>Anna, Péter, tanár, orvos, Budapest, ház.</b><br />
          Это набор слов, а не описание семьи.
        </div>

        <p>
          Связывайте предложения:
        </p>

        <table class="conj">
          <tr><th>Связка</th><th>Функция</th></tr>
          <tr><td><b>és</b></td><td>добавляет информацию</td></tr>
          <tr><td><b>pedig</b></td><td>сопоставляет людей или действия</td></tr>
          <tr><td><b>de</b></td><td>показывает контраст</td></tr>
          <tr><td><b>is</b></td><td>добавляет «тоже»</td></tr>
          <tr><td><b>gyakran</b></td><td>показывает частотность</td></tr>
          <tr><td><b>vasárnap / hétvégén</b></td><td>указывает время</td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Az apa tanár, az anya pedig orvos." data-speak-lang="hu-HU">
            Az apa tanár, az anya pedig orvos.
          </button>
          — Отец — учитель, а мать — врач.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Контроль объёма 60–80 слов</h4>

        <ol class="tasklist">
          <li>Сначала напишите полный черновик.</li>
          <li>Посчитайте слова, разделённые пробелами.</li>
          <li>Если меньше 60 — добавьте возраст, работу, место или второе описание человека.</li>
          <li>Если больше 80 — уберите повторяющиеся сведения и лишние перечисления.</li>
          <li>Не повторяйте одну и ту же фразу только для увеличения объёма.</li>
        </ol>

        <div class="note">
          Практичный ориентир — примерно
          <b>8–11 коротких предложений</b>.
          Это ориентир, а не дополнительный обязательный критерий.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">9. Самопроверка по рубрике</h4>

        <table class="conj">
          <tr><th>Критерий FAMILY_WRITING</th><th>Проверка</th></tr>
          <tr><td>60–80 слов</td><td>текст находится внутри диапазона</td></tr>
          <tr><td>3–5 членов семьи</td><td>названы минимум три и максимум пять человек</td></tr>
          <tr><td>отношения и возраст или работа</td><td>понятно, кто кому родственник, и есть характеристика людей</td></tr>
          <tr><td>место и одна принадлежность</td><td>есть место и хотя бы одна ясная конструкция владельца</td></tr>
          <tr><td>одно совместное занятие</td><td>указано действие семьи как группы</td></tr>
        </table>

        <div class="warn">
          Не сверяйте черновик с полным model answer до первой попытки.
          Сначала напишите собственный текст, затем используйте модель
          только для анализа структуры и возможных исправлений.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">10. Что означает результат</h4>

        <p>
          После выполнения отметьте самопроверку по пяти критериям.
          При возможности передайте текст преподавателю
          или компетентному читателю.
        </p>

        <div class="note">
          Writing остаётся <b>PARTIAL / REVIEW</b>.
          Система не подтверждает автоматически точность окончаний,
          естественность словоупотребления, связность
          и отсутствие грамматических ошибок.
        </div>
      `,
      activities: [FAMILY_WRITING],
    },
    {
      id: 10,
      eyebrow: 'УРОК 8 · 10/11 · УСТНАЯ САМОПРАКТИКА',
      title: 'Beszéd: egy család',
      subtitle: 'Говорим 1–1,5 минуты о вымышленной семье',
      note: 'Это необязательная текстовая инструкция для самостоятельной тренировки. Представьте 3–5 человек и опишите отношения, возраст или работу и место.',
      warn: 'Слайд не использует микрофон, не записывает голос, не выставляет score и не создаёт evidence. Самостоятельное выполнение нельзя считать автоматической проверкой произношения или свободной речи.',
      task: 'Подготовьте короткий план, говорите 1–1,5 минуты без полного письменного текста, затем повторите рассказ с изменёнными именами и данными.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Цель устной практики</h4>

        <p>
          Нужно коротко и понятно представить
          <b>вымышленную семью из 3–5 человек</b>.
          Рассказ должен включать:
        </p>

        <table class="conj">
          <tr><th>Критерий</th><th>Что сообщить</th></tr>
          <tr><td><b>отношения</b></td><td>кто кому приходится родственником</td></tr>
          <tr><td><b>возраст или работа</b></td><td>одна характеристика каждого основного человека</td></tr>
          <tr><td><b>место</b></td><td>где семья или отдельные люди живут, работают или учатся</td></tr>
          <tr><td><b>понятное описание</b></td><td>логичная последовательность без несвязанных слов</td></tr>
        </table>

        <div class="note">
          Принадлежность и совместное занятие можно добавить,
          но они не заменяют четыре основных критерия
          <b>FAMILY_SPEAKING</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. План из четырёх частей</h4>

        <table class="conj">
          <tr><th>Часть</th><th>Содержание</th><th>Рамка</th></tr>
          <tr>
            <td>1</td>
            <td>размер и состав семьи</td>
            <td>
              <button class="speak-btn" data-speak-text="A családban négyen vannak." data-speak-lang="hu-HU">
                A családban négyen vannak.
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>имена и отношения</td>
            <td>
              <button class="speak-btn" data-speak-text="Anna Péter testvére." data-speak-lang="hu-HU">
                Anna Péter testvére.
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>возраст или работа</td>
            <td>
              <button class="speak-btn" data-speak-text="Az apa negyvenéves és tanár." data-speak-lang="hu-HU">
                Az apa negyvenéves és tanár.
              </button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>место</td>
            <td>
              <button class="speak-btn" data-speak-text="Budapesten laknak." data-speak-lang="hu-HU">
                Budapesten laknak.
              </button>
            </td>
          </tr>
        </table>

        <div class="note">
          Используйте короткие опорные слова,
          а не записанный целиком русский или венгерский текст.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Начало рассказа</h4>

        <p>
          Начните с общего представления семьи:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Ez a Szabó család." data-speak-lang="hu-HU">
            Ez a Szabó család.
          </button>
          — Это семья Сабо.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A családban négyen vannak." data-speak-lang="hu-HU">
            A családban négyen vannak.
          </button>
          — В семье четыре человека.
        </p>

        <div class="warn">
          Не начинайте сразу с длинного перечисления имён.
          Сначала обозначьте, о какой семье идёт речь.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Отношения между людьми</h4>

        <table class="conj">
          <tr><th>Фраза</th><th>Значение</th></tr>
          <tr><td><b>Az apa neve Tamás.</b></td><td>Отца зовут Тамаш.</td></tr>
          <tr><td><b>A felesége Júlia.</b></td><td>Его жена — Юлия.</td></tr>
          <tr><td><b>Anna Péter testvére.</b></td><td>Анна — сестра Петера.</td></tr>
          <tr><td><b>Ő Anna lánya.</b></td><td>Она — дочь Анны.</td></tr>
          <tr><td><b>Péter a testvérem.</b></td><td>Петер — мой брат.</td></tr>
        </table>

        <div class="note">
          После каждого имени должно быть понятно,
          какую роль человек занимает в семье.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Возраст или работа</h4>

        <p>
          Добавьте хотя бы одну характеристику:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Tamás negyvenéves és szakács." data-speak-lang="hu-HU">
            Tamás negyvenéves és szakács.
          </button>
          — Тамашу сорок лет, и он повар.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Júlia tanár." data-speak-lang="hu-HU">
            Júlia tanár.
          </button>
          — Юлия — учительница.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Péter egyetemista." data-speak-lang="hu-HU">
            Péter egyetemista.
          </button>
          — Петер — студент университета.
        </p>

        <div class="note">
          Для каждого человека не требуется говорить
          и возраст, и профессию.
          Достаточно подходящей информации по смыслу.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Место</h4>

        <p>
          Сообщите, где семья живёт
          или где отдельный человек работает или учится:
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A család Budapesten lakik." data-speak-lang="hu-HU">
            A család Budapesten lakik.
          </button>
          — Семья живёт в Будапеште.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Anna egy irodában dolgozik." data-speak-lang="hu-HU">
            Anna egy irodában dolgozik.
          </button>
          — Анна работает в офисе.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Péter Budapesten tanul." data-speak-lang="hu-HU">
            Péter Budapesten tanul.
          </button>
          — Петер учится в Будапеште.
        </p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Связки для понятного рассказа</h4>

        <table class="conj">
          <tr><th>Связка</th><th>Функция</th></tr>
          <tr><td><b>és</b></td><td>и</td></tr>
          <tr><td><b>pedig</b></td><td>а, в свою очередь</td></tr>
          <tr><td><b>de</b></td><td>но</td></tr>
          <tr><td><b>is</b></td><td>тоже</td></tr>
          <tr><td><b>aztán</b></td><td>затем</td></tr>
        </table>

        <p>
          <button class="speak-btn" data-speak-text="Az apa tanár, az anya pedig orvos." data-speak-lang="hu-HU">
            Az apa tanár, az anya pedig orvos.
          </button>
          — Отец — учитель, а мать — врач.
        </p>

        <div class="warn">
          Не произносите только отдельные слова:
          <b>apa, tanár, anya, orvos, Budapest</b>.
          Соединяйте информацию в законченные предложения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Как говорить без полного текста</h4>

        <ol class="tasklist">
          <li>Запишите 3–5 имён или семейных ролей.</li>
          <li>Рядом укажите одно слово об отношениях.</li>
          <li>Добавьте возраст или профессию.</li>
          <li>Запишите одно или два места.</li>
          <li>Говорите по этим опорам, не читая готовый абзац.</li>
        </ol>

        <div class="note">
          Опорная карточка может выглядеть так:
          <b>Szabó család — 4 человек — Tamás / apa / szakács —
          Júlia / anya / tanár — Budapest</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">9. Три попытки</h4>

        <table class="conj">
          <tr><th>Попытка</th><th>Задача</th></tr>
          <tr><td>1</td><td>говорите медленно по опорным словам</td></tr>
          <tr><td>2</td><td>говорите без паузы после каждого предложения</td></tr>
          <tr><td>3</td><td>измените имена, возраст, работу и место</td></tr>
        </table>

        <div class="note">
          Целевой объём — примерно <b>1–1,5 минуты</b>.
          Не ускоряйтесь искусственно ради времени:
          приоритет — понятное описание.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">10. Самопроверка</h4>

        <ol class="tasklist">
          <li>Я представил 3–5 человек?</li>
          <li>Понятно, кто кому приходится родственником?</li>
          <li>Я назвал возраст или работу?</li>
          <li>Я указал место?</li>
          <li>Рассказ имеет понятное начало и последовательность?</li>
        </ol>

        <div class="warn">
          Эта самопроверка не создаёт автоматический score или evidence.
          Для проверки произношения и грамматики можно отдельно
          записать себя на телефон и показать запись преподавателю,
          но сайт сам голос не записывает и не оценивает.
        </div>
      `,
      optionalSpeaking: FAMILY_SPEAKING,
    },
    {
      id: 11,
      eyebrow: 'УРОК 8 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Пять целей урока, границы материала и итоговая проверка',
      note: 'Продуктивная грамматическая цель урока: один обладаемый предмет и владельцы én, te, ő. Нужно образовывать и понимать формы типа házam, házad, háza и частые семейные модели.',
      warn: 'Házaim означает «мои дома»: владелец один, а обладаемых предметов несколько. Эта форма остаётся только необязательным распознаванием и не входит в scoring урока 8.',
      task: 'Проверьте пять целей, затем запустите EXIT_CHECK. Различайте автоматически проверяемые задания и результаты, которые требуют дополнительной проверки.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Цель: семейная лексика</h4>

        <p>
          Вы должны узнавать и использовать основные слова:
        </p>

        <table class="conj">
          <tr><th>Венгерский</th><th>Значение</th></tr>
          <tr><td><b>apa</b></td><td>отец</td></tr>
          <tr><td><b>anya</b></td><td>мать</td></tr>
          <tr><td><b>testvér</b></td><td>брат или сестра без указания пола</td></tr>
          <tr><td><b>fiú / lány</b></td><td>сын или мальчик / дочь или девочка</td></tr>
          <tr><td><b>nagymama / nagypapa</b></td><td>бабушка / дедушка</td></tr>
          <tr><td><b>feleség / férj</b></td><td>жена / муж</td></tr>
          <tr><td><b>gyerek</b></td><td>ребёнок</td></tr>
        </table>

        <div class="note">
          Контрольный вопрос:
          можете ли вы назвать минимум пять членов семьи
          без подсказки на русском?
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Цель: один предмет и три владельца</h4>

        <table class="conj">
          <tr><th>Владелец</th><th>Форма</th><th>Значение</th></tr>
          <tr>
            <td><b>én</b></td>
            <td>
              <button class="speak-btn" data-speak-text="házam" data-speak-lang="hu-HU">
                házam
              </button>
            </td>
            <td>мой дом</td>
          </tr>
          <tr>
            <td><b>te</b></td>
            <td>
              <button class="speak-btn" data-speak-text="házad" data-speak-lang="hu-HU">
                házad
              </button>
            </td>
            <td>твой дом</td>
          </tr>
          <tr>
            <td><b>ő</b></td>
            <td>
              <button class="speak-btn" data-speak-text="háza" data-speak-lang="hu-HU">
                háza
              </button>
            </td>
            <td>его или её дом</td>
          </tr>
        </table>

        <div class="note">
          Владелец обычно выражается на существительном.
          Явные <b>az én, a te, az ő</b>
          используются главным образом для акцента или контраста.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Цель: семейные притяжательные формы</h4>

        <table class="conj">
          <tr><th>Слово</th><th>én</th><th>te</th><th>ő</th></tr>
          <tr>
            <td><b>anya</b></td>
            <td>
              <button class="speak-btn" data-speak-text="anyám" data-speak-lang="hu-HU">
                anyám
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="anyád" data-speak-lang="hu-HU">
                anyád
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="anyja" data-speak-lang="hu-HU">
                anyja
              </button>
            </td>
          </tr>
          <tr>
            <td><b>apa</b></td>
            <td>
              <button class="speak-btn" data-speak-text="apám" data-speak-lang="hu-HU">
                apám
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="apád" data-speak-lang="hu-HU">
                apád
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="apja" data-speak-lang="hu-HU">
                apja
              </button>
            </td>
          </tr>
          <tr>
            <td><b>testvér</b></td>
            <td>
              <button class="speak-btn" data-speak-text="testvérem" data-speak-lang="hu-HU">
                testvérem
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="testvéred" data-speak-lang="hu-HU">
                testvéred
              </button>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="testvére" data-speak-lang="hu-HU">
                testvére
              </button>
            </td>
          </tr>
        </table>

        <div class="warn">
          Не выводите все формы из одного механического правила.
          На уровне A1 эти частые наборы нужно знать как проверенные модели.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Цель: использовать формы в контексте</h4>

        <p>
          <button class="speak-btn" data-speak-text="Anyám tanár, apám orvos." data-speak-lang="hu-HU">
            Anyám tanár, apám orvos.
          </button>
          — Моя мать — учительница, отец — врач.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Van egy testvérem." data-speak-lang="hu-HU">
            Van egy testvérem.
          </button>
          — У меня есть брат или сестра.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="A testvéred Budapesten lakik." data-speak-lang="hu-HU">
            A testvéred Budapesten lakik.
          </button>
          — Твой брат или твоя сестра живёт в Будапеште.
        </p>

        <p>
          <button class="speak-btn" data-speak-text="Az én házam nagy, a te házad kicsi." data-speak-lang="hu-HU">
            Az én házam nagy, a te házad kicsi.
          </button>
          — Мой дом большой, а твой маленький.
        </p>

        <div class="note">
          Контрольный вопрос:
          можете ли вы определить владельца
          в каждой из этих фраз без перевода окончания отдельно?
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Цель: различать владельца на слух и в тексте</h4>

        <table class="conj">
          <tr><th>Сигнал</th><th>Обычный владелец в изученных моделях</th></tr>
          <tr><td><b>-m</b></td><td>én — мой / моя</td></tr>
          <tr><td><b>-d</b></td><td>te — твой / твоя</td></tr>
          <tr><td><b>-a / -e / -ja / -je</b></td><td>ő — его / её</td></tr>
        </table>

        <div class="warn">
          Эти окончания являются подсказкой,
          но окончательный смысл определяется всей формой и контекстом.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Цель: связное описание семьи</h4>

        <p>
          Итоговое описание должно содержать:
        </p>

        <ul class="tick">
          <li>3–5 членов семьи;</li>
          <li>понятные родственные отношения;</li>
          <li>возраст или работу;</li>
          <li>место;</li>
          <li>для writing — одну принадлежность и совместное занятие;</li>
          <li>для role-play — встречный вопрос собеседнику.</li>
        </ul>

        <div class="note">
          Эта цель подтверждается через writing
          и дополнительный компонент interaction.
          Поэтому она требует проверки качества ответа,
          а не только факта прохождения экрана.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Граница продуктивного материала</h4>

        <table class="conj">
          <tr><th>Продуктивно</th><th>Только распознавание / позже</th></tr>
          <tr>
            <td><b>én / te / ő</b></td>
            <td><b>mi / ti / ők</b> как полная система владельцев</td>
          </tr>
          <tr>
            <td><b>házam / házad / háza</b></td>
            <td><b>házaim</b> — мои дома</td>
          </tr>
          <tr>
            <td>один обладаемый предмет</td>
            <td>несколько обладаемых предметов</td>
          </tr>
        </table>

        <div class="warn">
          <b>Házaim</b> — это не «наши дома» и не несколько владельцев.
          Это «мои дома»: владелец <b>én</b>,
          обладаемых предметов несколько.
          Форма не входит в scoring урока 8.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Что может проверяться напрямую</h4>

        <table class="conj">
          <tr><th>Компонент</th><th>Порог / статус</th><th>Что подтверждает</th></tr>
          <tr>
            <td>Controlled Practice</td>
            <td><b>11 из 14</b></td>
            <td>лексика, формы и контекстные конструкции</td>
          </tr>
          <tr>
            <td>Reading</td>
            <td><b>6 из 7</b></td>
            <td>понимание конкретного текста</td>
          </tr>
          <tr>
            <td>Listening</td>
            <td><b>4 из 4</b></td>
            <td>понимание конкретной опубликованной записи</td>
          </tr>
        </table>

        <div class="note">
          Эти результаты могут фиксироваться автоматически,
          но каждый из них подтверждает только заявленный тип задания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">9. Что требует дополнительной проверки</h4>

        <table class="conj">
          <tr><th>Компонент</th><th>Статус</th><th>Почему</th></tr>
          <tr>
            <td>Writing</td>
            <td><b>PARTIAL / REVIEW</b></td>
            <td>нужно проверить грамматику, связность и естественность текста</td>
          </tr>
          <tr>
            <td>Role-play</td>
            <td><b>PARTIAL / REVIEW</b></td>
            <td>selfPractice не оценивает спонтанность, произношение и точность ответа</td>
          </tr>
          <tr>
            <td>Optional Speaking</td>
            <td><b>без score и evidence</b></td>
            <td>это только текстовая инструкция для самостоятельной практики</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">10. Финальная самопроверка</h4>

        <ol class="tasklist">
          <li>Я могу назвать основных членов семьи?</li>
          <li>Я образую <b>házam, házad, háza</b>?</li>
          <li>Я знаю три ряда <b>anya, apa, testvér</b>?</li>
          <li>Я различаю владельца по форме и контексту?</li>
          <li>Я могу написать или рассказать связное описание семьи?</li>
        </ol>

        <div class="note">
          После самопроверки выполните <b>EXIT_CHECK</b>.
          Он использует существующие mappings целей и activities;
          этот слайд не изменяет progress logic.
        </div>
      `,
      activities: [EXIT_CHECK],
    },
  ],
  vocabulary: [
    { id: 'l8_v1', hu: 'apa', ru: 'отец', category: 'Семья' },
    { id: 'l8_v2', hu: 'anya', ru: 'мать', category: 'Семья' },
    { id: 'l8_v3', hu: 'fiú', ru: 'сын / мальчик', category: 'Семья' },
    { id: 'l8_v4', hu: 'lány', ru: 'дочь / девочка', category: 'Семья' },
    { id: 'l8_v5', hu: 'testvér', ru: 'брат / сестра; sibling', category: 'Семья' },
    { id: 'l8_v6', hu: 'nagymama', ru: 'бабушка', category: 'Семья' },
    { id: 'l8_v7', hu: 'nagypapa', ru: 'дедушка', category: 'Семья' },
    { id: 'l8_v8', hu: 'feleség', ru: 'жена', category: 'Семья' },
    { id: 'l8_v9', hu: 'férj', ru: 'муж', category: 'Семья' },
    { id: 'l8_v10', hu: 'gyerek', ru: 'ребёнок', category: 'Семья' },
  ],
  quiz: [
    { id: 801, question: 'Как сказать «мой дом»?', options: ['házam', 'házad', 'háza', 'házem'], correctIndex: 0, explanation: 'Для én используется форма házam. Явное én обычно не требуется.' },
    { id: 802, question: 'Как сказать «твой отец»?', options: ['apám', 'apád', 'apja', 'apa'], correctIndex: 1, explanation: 'Форма для te — apád: apa → apád. Конечная a удлиняется: a → á.' },
    { id: 803, question: 'Как сказать «его/её мать»?', options: ['anyám', 'anyád', 'anyja', 'anya'], correctIndex: 2, explanation: 'Форма 3-го лица единственного числа anyja означает «его/её мать».' },
    { id: 804, question: 'Как подчеркнуть: именно МОЙ дом?', options: ['házam', 'az én házam', 'én házam', 'az én háza'], correctIndex: 1, explanation: 'Для контраста добавляется az én: az én házam. Обычно достаточно házam; суффикс сохраняется.' },
    { id: 805, question: 'Какая форма означает «твой брат / твоя сестра»?', options: ['testvérem', 'testvéred', 'testvére', 'testvér'], correctIndex: 1, explanation: 'Для te используется testvéred.' },
    { id: 806, question: 'Какое слово означает «брат / сестра» без указания пола?', options: ['testvér', 'fiú', 'lány', 'gyerek'], correctIndex: 0, explanation: 'Testvér — брат или сестра; само слово не указывает пол.' },
  ],
  objectives: [
    { id: 'l8_name-family', text: 'Называть членов семьи по-венгерски.', skills: ['speaking', 'reading', 'writing'] },
    { id: 'l8_form-possessive', text: 'Образовывать притяжательные формы 1-го, 2-го и 3-го лица единственного числа (házam, házad, háza).', skills: ['grammar', 'writing'] },
    { id: 'l8_use-possessive', text: 'Употреблять притяжательные суффиксы «мой», «твой», «его» в описании семьи.', skills: ['speaking', 'writing'] },
    { id: 'l8_distinguish-possessors', text: 'Различать на слух и в тексте, к какому лицу относится притяжательная форма.', skills: ['listening', 'reading', 'grammar'] },
    { id: 'l8_describe-family', text: 'Составлять связное описание своей семьи с притяжательными формами.', skills: ['speaking', 'writing'] },
  ],
};
