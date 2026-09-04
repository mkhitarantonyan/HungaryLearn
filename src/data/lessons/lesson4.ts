import { Lesson, LessonActivity } from '../../types';
import { P1_L4_PRACTICE, P1_L4_READING, P1_L4_ROLEPLAY, P1_L4_SPEAKING, P1_L4_WRITING } from './p1FoundationActivities';

const L4_CP_RECOGNIZE_TEXT: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-recognize-text',
  title: 'Распознавание форм в тексте',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l4-recognize-text-1', prompt: 'tanulunk → напиши местоимение лица', accept: ['mi'], explanation: '-unk обозначает mi: tanulunk.' },
    { kind: 'textInput', id: 'l4-recognize-text-2', prompt: 'olvasol → напиши местоимение лица', accept: ['te'], explanation: 'После основы на s форма te получает -ol: olvasol.' },
    { kind: 'textInput', id: 'l4-recognize-text-3', prompt: 'írnak → напиши местоимение лица', accept: ['ők'], explanation: '-nak обозначает ők: írnak.' },
    { kind: 'textInput', id: 'l4-recognize-text-4', prompt: 'kérek → напиши местоимение лица', accept: ['én'], explanation: '-ek обозначает én: kérek.' },
    { kind: 'textInput', id: 'l4-recognize-text-5', prompt: 'vár → напиши местоимение лица', accept: ['ő'], explanation: 'У обычного глагола vár форма ő совпадает с основой.' },
  ],
};

const L4_CP_CONJUGATION: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-conjugation',
  title: 'Спряжение: лицо + глагол',
  passCount: 8,
  exercises: [
    { kind: 'textInput', id: 'l4-conjugation-1', prompt: 'én + tanul → ?', accept: ['tanulok'], explanation: 'tanul + -ok → tanulok.' },
    { kind: 'textInput', id: 'l4-conjugation-2', prompt: 'te + olvas → ?', accept: ['olvasol'], explanation: 'После основы на s форма te получает -ol: olvasol.' },
    { kind: 'textInput', id: 'l4-conjugation-3', prompt: 'ő + ír → ?', accept: ['ír'], explanation: 'У обычного глагола форма ő совпадает с основой: ír.' },
    { kind: 'textInput', id: 'l4-conjugation-4', prompt: 'mi + beszél → ?', accept: ['beszélünk'], explanation: 'Передние гласные требуют -ünk: beszélünk.' },
    { kind: 'textInput', id: 'l4-conjugation-5', prompt: 'ti + tanul → ?', accept: ['tanultok'], explanation: 'tanul + -tok → tanultok.' },
    { kind: 'textInput', id: 'l4-conjugation-6', prompt: 'ők + olvas → ?', accept: ['olvasnak'], explanation: 'Форма ők получает -nak: olvasnak.' },
    { kind: 'textInput', id: 'l4-conjugation-7', prompt: 'én + kér → ?', accept: ['kérek'], explanation: 'Передняя неогублённая основа: kér + -ek → kérek.' },
    { kind: 'textInput', id: 'l4-conjugation-8', prompt: 'mi + köt → ?', accept: ['kötünk'], explanation: 'Передняя огублённая основа: köt + -ünk → kötünk.' },
    { kind: 'textInput', id: 'l4-conjugation-9', prompt: 'ők + vár → ?', accept: ['várnak'], explanation: 'vár + -nak → várnak.' },
    { kind: 'textInput', id: 'l4-conjugation-10', prompt: 'te + ír → ?', accept: ['írsz'], explanation: 'ír + -sz → írsz.' },
  ],
};

const L4_CP_NEGATION: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-negation',
  title: 'Утверждение → отрицание с nem',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l4-negation-1', prompt: 'Сделай отрицательным: Tanulok.', accept: ['Nem tanulok.', 'nem tanulok'], explanation: 'nem ставится перед спрягаемым глаголом: Nem tanulok.' },
    { kind: 'textInput', id: 'l4-negation-2', prompt: 'Сделай отрицательным: Olvasol.', accept: ['Nem olvasol.', 'nem olvasol'], explanation: 'Nem olvasol.' },
    { kind: 'textInput', id: 'l4-negation-3', prompt: 'Сделай отрицательным: Péter ír.', accept: ['Péter nem ír.', 'péter nem ír'], explanation: 'Подлежащее сохраняется, nem стоит перед глаголом: Péter nem ír.' },
    { kind: 'textInput', id: 'l4-negation-4', prompt: 'Сделай отрицательным: Beszélünk.', accept: ['Nem beszélünk.', 'nem beszélünk'], explanation: 'Nem beszélünk.' },
    { kind: 'textInput', id: 'l4-negation-5', prompt: 'Сделай отрицательным: Ők dolgoznak.', accept: ['Ők nem dolgoznak.', 'ők nem dolgoznak', 'Nem dolgoznak.', 'nem dolgoznak'], explanation: 'nem ставится перед глаголом: Ők nem dolgoznak.' },
  ],
};

const L4_LISTENING_PRESENT_FORMS: LessonActivity = {
  kind: 'listening',
  id: 'l4-listening-present-forms',
  title: 'Аудирование: кто что делает?',
  assetId: 'l4_listening_present_forms',
  audioStatus: 'published',
  passCount: 4,
  transcript: 'Én minden nap magyarul tanulok.\nTe reggel otthon sokat olvasol.\nPéter most ír, Anna pedig olvas.\nMi magyarul beszélünk és együtt tanulunk.\nŐk minden nap dolgoznak.',
  questions: [
    { id: 'l4-listen-q1', question: 'Какое лицо выражено в первой реплике?', options: ['én', 'te', 'mi'], correctIndex: 0, explanation: 'В первой реплике слышно tanulok — форма én.' },
    { id: 'l4-listen-q2', question: 'Какое действие названо во второй реплике?', options: ['учиться — tanul', 'читать — olvas', 'писать — ír'], correctIndex: 1, explanation: 'Во второй реплике слышно olvasol — «ты читаешь».' },
    { id: 'l4-listen-q3', question: 'Какое лицо выражают формы глаголов в третьей реплике?', options: ['én', 'ő', 'ők'], correctIndex: 1, explanation: 'Péter ír и Anna olvas — обе формы относятся к ő.' },
    { id: 'l4-listen-q4', question: 'Какое лицо выражено в четвёртой реплике?', options: ['ő', 'mi', 'ti'], correctIndex: 1, explanation: 'В четвёртой реплике слышно beszélünk — форма mi.' },
    { id: 'l4-listen-q5', question: 'Какое лицо выражено в пятой реплике?', options: ['te', 'ti', 'ők'], correctIndex: 2, explanation: 'В пятой реплике слышно dolgoznak — форма ők.' },
  ],
};

const L4_CP_QUESTIONS: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-questions',
  title: 'Построй общий вопрос',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l4-question-1', prompt: 'Te magyarul tanulsz. → ?', accept: ['Magyarul tanulsz?', 'Te magyarul tanulsz?', 'magyarul tanulsz', 'te magyarul tanulsz'], explanation: 'В общем вопросе инверсия не нужна; местоимение te можно опустить: Magyarul tanulsz?' },
    { kind: 'textInput', id: 'l4-question-2', prompt: 'Péter olvas. → ?', accept: ['Péter olvas?', 'péter olvas'], explanation: 'Порядок слов сохраняется, а в речи вопрос передаёт интонация: Péter olvas?' },
    { kind: 'textInput', id: 'l4-question-3', prompt: 'Ti magyarul beszéltek. → ?', accept: ['Magyarul beszéltek?', 'Ti magyarul beszéltek?', 'magyarul beszéltek', 'ti magyarul beszéltek'], explanation: 'Местоимение ti можно опустить: Magyarul beszéltek?' },
    { kind: 'textInput', id: 'l4-question-4', prompt: 'Anna ír. → ?', accept: ['Anna ír?', 'anna ír'], explanation: 'Anna ír? — тот же порядок слов, вопросительная интонация.' },
    { kind: 'textInput', id: 'l4-question-5', prompt: 'Ők dolgoznak. → ?', accept: ['Dolgoznak?', 'Ők dolgoznak?', 'dolgoznak', 'ők dolgoznak'], explanation: 'Местоимение ők можно опустить: Dolgoznak?' },
  ],
};

const L4_CP_CONTEXT: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l4-cp-context',
  title: 'Глаголы в простых ситуациях',
  passCount: 4,
  exercises: [
    { kind: 'textInput', id: 'l4-context-1', prompt: 'Напиши: «Я учу венгерский».', accept: ['Magyarul tanulok.', 'magyarul tanulok'], explanation: 'Magyarul tanulok.' },
    { kind: 'textInput', id: 'l4-context-2', prompt: 'Напиши: «Ты читаешь».', accept: ['Olvasol.', 'olvasol'], explanation: 'Olvasol.' },
    { kind: 'textInput', id: 'l4-context-3', prompt: 'Напиши: «Мы пишем».', accept: ['Írunk.', 'írunk'], explanation: 'Írunk.' },
    { kind: 'textInput', id: 'l4-context-4', prompt: 'Напиши: «Они говорят по-венгерски».', accept: ['Ők magyarul beszélnek.', 'ők magyarul beszélnek', 'Magyarul beszélnek.', 'magyarul beszélnek'], explanation: 'Ők magyarul beszélnek.' },
    { kind: 'textInput', id: 'l4-context-5', prompt: 'Напиши: «Петер работает».', accept: ['Péter dolgozik.', 'péter dolgozik'], explanation: 'Péter dolgozik.' },
  ],
};

const L4_WRITING_ACTIONS: LessonActivity = {
  kind: 'writing',
  id: 'l4-writing-actions',
  title: 'Письмо: мои простые действия',
  prompt: 'Напиши 3–4 коротких предложения о простых действиях. Используй глаголы урока и сделай хотя бы одно предложение отрицательным с nem.',
  modelAnswer: [
    'Magyarul tanulok.',
    'Sokat olvasok.',
    'Nem dolgozom ma.',
    'Péter magyarul beszél.',
  ],
  rubric: [
    'Есть 3–4 законченных предложения',
    'Использованы формы настоящего времени из урока',
    'Хотя бы одно предложение содержит nem перед глаголом',
    'Текст понятен читателю',
  ],
};

const L4_EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck',
  id: 'l4-exit-check',
  title: 'Проверка целей урока 4',
  checks: [
    { objectiveId: 'l4_conjugate-present', activityId: 'l4-cp-conjugation', evidenceKind: 'grammar' },
    {
      objectiveId: 'l4_use-verbs-context',
      activityId: 'l4-cp-context',
      evidenceKind: 'writing',
      evidenceComponents: [{ activityId: 'l4-cp-context', evidenceKind: 'grammar' }],
      practiceComponents: ['speaking'],
    },
    {
      objectiveId: 'l4_recognize-forms',
      activityId: 'l4-listening-present-forms',
      evidenceKind: 'listening',
      evidenceComponents: [{ activityId: 'l4-cp-recognize-text', evidenceKind: 'reading' }],
    },
    {
      objectiveId: 'l4_build-sentences',
      activityId: 'l4-cp-negation',
      evidenceKind: 'writing',
      evidenceComponents: [{ activityId: 'l4-cp-negation', evidenceKind: 'grammar' }],
      practiceComponents: ['speaking'],
    },
    {
      objectiveId: 'l4_ask-questions',
      activityId: 'l4-cp-questions',
      evidenceKind: 'grammar',
      practiceComponents: ['speaking'],
    },
  ],
};

export const LESSON_4: Lesson = {
  id: 4,
  number: 4,
  level: 'A0',
  title: 'Урок 4 · Jelen idő',
  subtitle: 'Спряжение глаголов в настоящем времени',
  description: 'Неопределённое спряжение (alanyi ragozás) в настоящем времени, утвердительные и отрицательные предложения с nem, простые общие вопросы и ограниченное знакомство с частотными -ik глаголами.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 4 · 1/12 · НАСТОЯЩЕЕ ВРЕМЯ',
      title: 'A jelen idő',
      subtitle: 'Настоящее время и две системы спряжения — карта урока',
      type: 'info',
      note: 'В этом уроке подробно изучается только неопределённое, или alanyi, спряжение. Определённое, или tárgyas, спряжение показано здесь только для контраста и системно рассматривается в уроке 21.',
      warn: 'Выбор спряжения определяется не просто тем, «известен ли предмет», а грамматической определённостью прямого дополнения. Для уровня A0 используйте безопасный контраст: нет дополнения / egy + предмет → неопределённое спряжение; a/az или ez/az + предмет → определённое спряжение.',
      task: 'Прочитайте четыре пары примеров. Для каждой определите: есть ли прямое дополнение, является ли оно определённым и какое спряжение используется.',
      body: `
        <p><strong>Jelen idő</strong> означает «настоящее время». Оно используется и для действия сейчас, и для обычного повторяющегося действия.</p>

        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Most olvasok." data-speak-lang="hu-HU">Most olvasok.</button></td>
            <td>Сейчас я читаю.</td>
            <td>действие в данный момент</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Minden nap olvasok." data-speak-lang="hu-HU">Minden nap olvasok.</button></td>
            <td>Я читаю каждый день.</td>
            <td>обычное повторяющееся действие</td>
          </tr>
        </table>

        <div class="note">
          В венгерском нет отдельной формы, полностью соответствующей английскому Present Continuous. Контекстные слова
          <span class="hu-word">most</span> — «сейчас» и
          <span class="hu-word">minden nap</span> — «каждый день»
          показывают нужное значение.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Почему существуют две системы спряжения</h4>
        <p>В настоящем времени окончания глагола зависят не только от лица, но у переходного глагола также от типа прямого дополнения.</p>

        <table class="conj">
          <tr><th>Система</th><th>Венгерское название</th><th>Когда используется</th></tr>
          <tr>
            <td><b>неопределённое спряжение</b></td>
            <td>
              <button class="speak-btn" data-speak-text="alanyi ragozás" data-speak-lang="hu-HU">alanyi ragozás</button>
              / határozatlan ragozás
            </td>
            <td>нет прямого дополнения или оно неопределённое</td>
          </tr>
          <tr>
            <td><b>определённое спряжение</b></td>
            <td>
              <button class="speak-btn" data-speak-text="tárgyas ragozás" data-speak-lang="hu-HU">tárgyas ragozás</button>
              / határozott ragozás
            </td>
            <td>есть грамматически определённое прямое дополнение третьего лица</td>
          </tr>
        </table>

        <div class="note">
          <b>Прямое дополнение</b> отвечает на вопросы
          <span class="hu-word">kit?</span> — «кого?» и
          <span class="hu-word">mit?</span> — «что?».
          В примерах оно получает показатель винительного падежа <b>-t</b>:
          <span class="hu-word">könyv → könyvet</span>.
          Подробно винительный падеж изучается отдельно; здесь формы даны как готовые образцы.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Неопределённое спряжение: нет прямого дополнения</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th><th>Почему alanyi</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>Я читаю.</td>
            <td>прямое дополнение не названо</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tanulok." data-speak-lang="hu-HU">Tanulok.</button></td>
            <td>Я учусь.</td>
            <td>у глагола нет прямого дополнения</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Dolgozom." data-speak-lang="hu-HU">Dolgozom.</button></td>
            <td>Я работаю.</td>
            <td>прямого дополнения нет</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Неопределённое спряжение: один неопределённый предмет</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th><th>Дополнение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>Я читаю одну / какую-то книгу.</td>
            <td><b>egy könyvet</b> — неопределённое</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
            <td>Я прошу / заказываю кофе.</td>
            <td><b>egy kávét</b> — один пока не определённый предмет</td>
          </tr>
        </table>

        <div class="note">
          На уровне этого урока безопасная модель:
          <span class="hu-word">глагол в alanyi ragozás + egy + дополнение</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Определённое спряжение: только предварительный контраст</h4>
        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th><th>Почему tárgyas</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>Я читаю конкретную книгу.</td>
            <td><b>a könyvet</b> имеет определённый артикль</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasom ezt a könyvet." data-speak-lang="hu-HU">Olvasom ezt a könyvet.</button></td>
            <td>Я читаю эту книгу.</td>
            <td><b>ezt a könyvet</b> — указательное определённое дополнение</td>
          </tr>
        </table>

        <div class="warn">
          Нельзя выбирать спряжение только по русскому переводу «конкретный / известный».
          Сначала смотрите на грамматическую форму венгерского дополнения:
          <span class="hu-word">egy könyvet</span> → неопределённое;
          <span class="hu-word">a könyvet</span> и
          <span class="hu-word">ezt a könyvet</span> → определённое.
          Полная система имеет дополнительные случаи и изучается позже.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Сравните одну основу olvas-</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Спряжение</th><th>Что изменилось</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>неопределённое</td>
            <td>нет прямого дополнения</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>неопределённое</td>
            <td>дополнение с egy</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>определённое</td>
            <td>дополнение с a</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasom ezt a könyvet." data-speak-lang="hu-HU">Olvasom ezt a könyvet.</button></td>
            <td>определённое</td>
            <td>дополнение с ez a</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Личное местоимение обычно можно опустить</h4>
        <table class="conj">
          <tr><th>С местоимением</th><th>Обычная нейтральная форма</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Én olvasok." data-speak-lang="hu-HU">Én olvasok.</button></td>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>Я читаю.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mi tanulunk." data-speak-lang="hu-HU">Mi tanulunk.</button></td>
            <td><button class="speak-btn" data-speak-text="Tanulunk." data-speak-lang="hu-HU">Tanulunk.</button></td>
            <td>Мы учимся.</td>
          </tr>
        </table>

        <div class="note">
          Окончание глагола уже показывает лицо. Местоимение обычно добавляется для контраста или логического выделения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Что изучается в этом уроке</h4>
        <ul class="tick">
          <li>личные окончания неопределённого спряжения;</li>
          <li>гармония гласных в окончаниях;</li>
          <li>частотные обычные и -ik-глаголы;</li>
          <li>отрицание с <b>nem</b>;</li>
          <li>простые вопросы в настоящем времени;</li>
          <li>короткие предложения о повседневных действиях.</li>
        </ul>

        <div class="note">
          <b>В этом уроке:</b> активно образуем только <span class="hu-word">alanyi ragozás</span>.<br>
          <b>Позже:</b> полная система <span class="hu-word">tárgyas ragozás</span> рассматривается в уроке 21.
        </div>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Быстрая самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>Я читаю. → <b>Olvasok.</b></li>
            <li>Я читаю какую-то книгу. → <b>Olvasok egy könyvet.</b></li>
            <li>Я читаю конкретную книгу. → <b>Olvasom a könyvet.</b></li>
            <li>Я читаю эту книгу. → <b>Olvasom ezt a könyvet.</b></li>
          </ol>
        </details>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 4 · 2/12 · ЛИЧНЫЕ ОКОНЧАНИЯ',
      title: 'Személyragok',
      subtitle: 'Базовая модель неопределённого спряжения обычных не-ik глаголов',
      type: 'info',
      note: 'Таблица показывает базовую модель обычных глаголов, которые не оканчиваются на -ik. Формы te после основ на s, sz, z и dz, а также частотные -ik-глаголы рассматриваются на отдельных слайдах.',
      warn: 'Не читайте окончания как английские названия букв. Запоминайте их внутри целых венгерских форм: várok, kérsz, várunk, köttök, kérnek. Для ő нулевое окончание действует только у обычных не-ik глаголов.',
      task: 'Прочитайте три модельных ряда vár, kér и köt. Затем закройте местоимения и определите лицо по окончанию каждой формы.',
      body: `
        <p><strong>Személyragok</strong> — личные окончания. Они показывают, кто выполняет действие: я, ты, он или она, мы, вы, они.</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">основа глагола + личное окончание = спрягаемая форма</div>
          <div class="mt-2">
            <span class="hu-word">vár + ok → várok</span> ·
            <span class="hu-word">kér + ek → kérek</span> ·
            <span class="hu-word">köt + ök → kötök</span>
          </div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Базовая таблица</h4>
        <table class="conj">
          <tr>
            <th>Лицо</th>
            <th>Задние гласные</th>
            <th>Передние неогублённые</th>
            <th>Передние огублённые</th>
            <th>Примеры</th>
          </tr>
          <tr>
            <td><b>én</b> — я</td>
            <td>-ok</td>
            <td>-ek</td>
            <td>-ök</td>
            <td>
              <button class="speak-btn" data-speak-text="várok, kérek, kötök" data-speak-lang="hu-HU">
                várok · kérek · kötök
              </button>
            </td>
          </tr>
          <tr>
            <td><b>te</b> — ты</td>
            <td>-sz</td>
            <td>-sz</td>
            <td>-sz</td>
            <td>
              <button class="speak-btn" data-speak-text="vársz, kérsz, kötsz" data-speak-lang="hu-HU">
                vársz · kérsz · kötsz
              </button>
            </td>
          </tr>
          <tr>
            <td><b>ő</b> — он / она</td>
            <td>нулевое</td>
            <td>нулевое</td>
            <td>нулевое</td>
            <td>
              <button class="speak-btn" data-speak-text="vár, kér, köt" data-speak-lang="hu-HU">
                vár · kér · köt
              </button>
            </td>
          </tr>
          <tr>
            <td><b>mi</b> — мы</td>
            <td>-unk</td>
            <td>-ünk</td>
            <td>-ünk</td>
            <td>
              <button class="speak-btn" data-speak-text="várunk, kérünk, kötünk" data-speak-lang="hu-HU">
                várunk · kérünk · kötünk
              </button>
            </td>
          </tr>
          <tr>
            <td><b>ti</b> — вы</td>
            <td>-tok</td>
            <td>-tek</td>
            <td>-tök</td>
            <td>
              <button class="speak-btn" data-speak-text="vártok, kértek, köttök" data-speak-lang="hu-HU">
                vártok · kértek · köttök
              </button>
            </td>
          </tr>
          <tr>
            <td><b>ők</b> — они</td>
            <td>-nak</td>
            <td>-nek</td>
            <td>-nek</td>
            <td>
              <button class="speak-btn" data-speak-text="várnak, kérnek, kötnek" data-speak-lang="hu-HU">
                várnak · kérnek · kötnek
              </button>
            </td>
          </tr>
        </table>

        <div class="note">
          <b>Почему köttök с двумя t?</b>
          Основа <span class="hu-word">köt</span> оканчивается на t, а окончание
          <span class="hu-word">-tök</span> начинается с t:
          <span class="hu-word">köt + tök → köttök</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Гармония гласных</h4>
        <table class="conj">
          <tr><th>Группа основы</th><th>Гласные</th><th>Характерные окончания</th><th>Модель</th></tr>
          <tr>
            <td>задние</td>
            <td>a, á, o, ó, u, ú</td>
            <td>-ok, -unk, -tok, -nak</td>
            <td><button class="speak-btn" data-speak-text="vár, várok, várunk, vártok, várnak" data-speak-lang="hu-HU">vár</button></td>
          </tr>
          <tr>
            <td>передние неогублённые</td>
            <td>e, é, i, í</td>
            <td>-ek, -ünk, -tek, -nek</td>
            <td><button class="speak-btn" data-speak-text="kér, kérek, kérünk, kértek, kérnek" data-speak-lang="hu-HU">kér</button></td>
          </tr>
          <tr>
            <td>передние огублённые</td>
            <td>ö, ő, ü, ű</td>
            <td>-ök, -ünk, -tök, -nek</td>
            <td><button class="speak-btn" data-speak-text="köt, kötök, kötünk, köttök, kötnek" data-speak-lang="hu-HU">köt</button></td>
          </tr>
        </table>

        <div class="note">
          Различие трёх вариантов особенно видно в формах <b>én</b> и <b>ti</b>:
          <span class="hu-word">várok / kérek / kötök</span> и
          <span class="hu-word">vártok / kértek / köttök</span>.
          Для <b>mi</b> и <b>ők</b> передние неогублённые и огублённые основы используют одинаковые варианты.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Особенность формы te</h4>
        <p>Для большинства обычных основ используется <b>-sz</b>:</p>

        <p class="font-mono font-bold">
          vár → vársz · kér → kérsz · köt → kötsz
        </p>

        <div class="warn">
          После основ на <b>s, sz, z, dz</b> обычно употребляются варианты
          <b>-ol, -el, -öl</b>:
          <span class="hu-word">olvas → olvasol</span>.
          Поэтому правило «te всегда получает -sz» неверно. Эта группа подробно рассматривается на слайде 4.6.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Особенность формы ő</h4>
        <p>У обычных не-ik глаголов форма третьего лица единственного числа совпадает с основой:</p>

        <table class="conj">
          <tr><th>Основа</th><th>Форма ő</th><th>Перевод</th></tr>
          <tr>
            <td>vár</td>
            <td><button class="speak-btn" data-speak-text="Ő vár." data-speak-lang="hu-HU">Ő vár.</button></td>
            <td>Он / она ждёт.</td>
          </tr>
          <tr>
            <td>kér</td>
            <td><button class="speak-btn" data-speak-text="Ő kér." data-speak-lang="hu-HU">Ő kér.</button></td>
            <td>Он / она просит.</td>
          </tr>
          <tr>
            <td>köt</td>
            <td><button class="speak-btn" data-speak-text="Ő köt." data-speak-lang="hu-HU">Ő köt.</button></td>
            <td>Он / она вяжет или связывает.</td>
          </tr>
        </table>

        <div class="note">
          Это не универсальное правило для всех глаголов. Частотные <b>-ik-глаголы</b> имеют в словарной форме третьего лица окончание
          <span class="hu-word">-ik</span>:
          <span class="hu-word">dolgozik</span>, <span class="hu-word">lakik</span>.
          Они рассматриваются отдельно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Как распознать лицо по форме</h4>
        <table class="conj">
          <tr><th>Что слышно в конце</th><th>Вероятное лицо</th><th>Пример</th></tr>
          <tr>
            <td>-ok / -ek / -ök</td>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="várok" data-speak-lang="hu-HU">várok</button></td>
          </tr>
          <tr>
            <td>-sz или -ol / -el / -öl</td>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="kérsz, olvasol" data-speak-lang="hu-HU">kérsz · olvasol</button></td>
          </tr>
          <tr>
            <td>основа без окончания у обычного не-ik глагола</td>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU">vár</button></td>
          </tr>
          <tr>
            <td>-unk / -ünk</td>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="kérünk" data-speak-lang="hu-HU">kérünk</button></td>
          </tr>
          <tr>
            <td>-tok / -tek / -tök</td>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="köttök" data-speak-lang="hu-HU">köttök</button></td>
          </tr>
          <tr>
            <td>-nak / -nek</td>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="várnak" data-speak-lang="hu-HU">várnak</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Местоимение можно опустить</h4>
        <p>Личное окончание уже показывает лицо:</p>

        <table class="conj">
          <tr><th>С местоимением</th><th>Нейтральная форма</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Én várok." data-speak-lang="hu-HU">Én várok.</button></td>
            <td><button class="speak-btn" data-speak-text="Várok." data-speak-lang="hu-HU">Várok.</button></td>
            <td>Я жду.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mi kérünk." data-speak-lang="hu-HU">Mi kérünk.</button></td>
            <td><button class="speak-btn" data-speak-text="Kérünk." data-speak-lang="hu-HU">Kérünk.</button></td>
            <td>Мы просим.</td>
          </tr>
        </table>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Быстрая самопроверка</summary>
          <ol class="tasklist mt-3">
            <li><b>várok</b> → én</li>
            <li><b>kérsz</b> → te</li>
            <li><b>köt</b> → ő, обычный не-ik глагол</li>
            <li><b>várunk</b> → mi</li>
            <li><b>kértek</b> → ti</li>
            <li><b>kötnek</b> → ők</li>
          </ol>
        </details>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 4 · 3/12 · МОДЕЛЬ С ЗАДНИМИ ГЛАСНЫМИ',
      title: 'A vár ige',
      subtitle: 'Глагол vár — «ждать»: полная парадигма и употребление',
      type: 'info',
      note: 'Vár — обычный не-ik глагол с задней гласной á. Эта же форма используется как словарная форма и как форма третьего лица единственного числа: ő vár.',
      warn: 'Не сокращайте долгую á: vár и var — не одно и то же написание. Во всех формах этого глагола основа vár- сохраняет долгую á: várok, vársz, várunk, vártok, várnak.',
      task: 'Прочитайте парадигму сначала с местоимениями, затем без них. После этого образуйте отрицание и вопрос для каждой формы.',
      body: `
        <p><strong>Vár</strong> означает «ждать». Это модель обычного глагола с задней гласной, поэтому личные окончания выбираются из заднего ряда.</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">Основа: vár-</div>
          <div class="mt-2">
            <span class="hu-word">vár + ok → várok</span> ·
            <span class="hu-word">vár + unk → várunk</span> ·
            <span class="hu-word">vár + nak → várnak</span>
          </div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Полная парадигма</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Строение</th><th>Перевод</th></tr>
          <tr>
            <td><b>én</b> — я</td>
            <td><button class="speak-btn" data-speak-text="várok" data-speak-lang="hu-HU">várok</button></td>
            <td>vár + ok</td>
            <td>я жду</td>
          </tr>
          <tr>
            <td><b>te</b> — ты</td>
            <td><button class="speak-btn" data-speak-text="vársz" data-speak-lang="hu-HU">vársz</button></td>
            <td>vár + sz</td>
            <td>ты ждёшь</td>
          </tr>
          <tr>
            <td><b>ő</b> — он / она</td>
            <td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU">vár</button></td>
            <td>основа без отдельного окончания</td>
            <td>он / она ждёт</td>
          </tr>
          <tr>
            <td><b>mi</b> — мы</td>
            <td><button class="speak-btn" data-speak-text="várunk" data-speak-lang="hu-HU">várunk</button></td>
            <td>vár + unk</td>
            <td>мы ждём</td>
          </tr>
          <tr>
            <td><b>ti</b> — вы</td>
            <td><button class="speak-btn" data-speak-text="vártok" data-speak-lang="hu-HU">vártok</button></td>
            <td>vár + tok</td>
            <td>вы ждёте</td>
          </tr>
          <tr>
            <td><b>ők</b> — они</td>
            <td><button class="speak-btn" data-speak-text="várnak" data-speak-lang="hu-HU">várnak</button></td>
            <td>vár + nak</td>
            <td>они ждут</td>
          </tr>
        </table>

        <div class="note">
          Окончания заднего ряда в этой парадигме:
          <b>-ok, -sz, нулевое, -unk, -tok, -nak</b>.
          Запоминайте их через целые формы, а не как отдельный список букв.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Словарная форма и форма ő совпадают</h4>
        <table class="conj">
          <tr><th>Употребление</th><th>Пример</th><th>Значение</th></tr>
          <tr>
            <td>название глагола</td>
            <td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU">vár</button></td>
            <td>ждать</td>
          </tr>
          <tr>
            <td>форма третьего лица</td>
            <td><button class="speak-btn" data-speak-text="Péter vár." data-speak-lang="hu-HU">Péter vár.</button></td>
            <td>Петер ждёт.</td>
          </tr>
          <tr>
            <td>с местоимением</td>
            <td><button class="speak-btn" data-speak-text="Ő vár." data-speak-lang="hu-HU">Ő vár.</button></td>
            <td>Он / она ждёт.</td>
          </tr>
        </table>

        <div class="note">
          Это свойство обычных не-ik глаголов. Не переносите его автоматически на
          <span class="hu-word">dolgozik</span> или <span class="hu-word">lakik</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Местоимение обычно опускается</h4>
        <table class="conj">
          <tr><th>С местоимением</th><th>Обычная нейтральная форма</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Én várok." data-speak-lang="hu-HU">Én várok.</button></td>
            <td><button class="speak-btn" data-speak-text="Várok." data-speak-lang="hu-HU">Várok.</button></td>
            <td>Я жду.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Te vársz." data-speak-lang="hu-HU">Te vársz.</button></td>
            <td><button class="speak-btn" data-speak-text="Vársz." data-speak-lang="hu-HU">Vársz.</button></td>
            <td>Ты ждёшь.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mi várunk." data-speak-lang="hu-HU">Mi várunk.</button></td>
            <td><button class="speak-btn" data-speak-text="Várunk." data-speak-lang="hu-HU">Várunk.</button></td>
            <td>Мы ждём.</td>
          </tr>
        </table>

        <p>Местоимение используется, когда нужно подчеркнуть или противопоставить лицо:</p>

        <button class="speak-btn" data-speak-text="Én várok, te nem vársz." data-speak-lang="hu-HU">
          Én várok, te nem vársz.
        </button>
        <span> — Я жду, а ты не ждёшь.</span>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Утверждение, отрицание и вопрос</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td>утверждение</td>
            <td><button class="speak-btn" data-speak-text="Várok." data-speak-lang="hu-HU">Várok.</button></td>
            <td>Я жду.</td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Nem várok." data-speak-lang="hu-HU">Nem várok.</button></td>
            <td>Я не жду.</td>
          </tr>
          <tr>
            <td>общий вопрос</td>
            <td><button class="speak-btn" data-speak-text="Vársz?" data-speak-lang="hu-HU">Vársz?</button></td>
            <td>Ты ждёшь?</td>
          </tr>
          <tr>
            <td>короткий ответ</td>
            <td><button class="speak-btn" data-speak-text="Igen, várok. Nem, nem várok." data-speak-lang="hu-HU">Igen, várok. / Nem, nem várok.</button></td>
            <td>Да, жду. / Нет, не жду.</td>
          </tr>
        </table>

        <div class="note">
          Для отрицания <b>nem</b> ставится перед спрягаемым глаголом.
          В общем вопросе форма глагола и порядок слов обычно не меняются; вопрос передаётся интонацией и знаком вопроса.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Формы в коротких предложениях</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Перевод</th><th>Лицо</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Most várok." data-speak-lang="hu-HU">Most várok.</button></td>
            <td>Сейчас я жду.</td>
            <td>én</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Te is vársz?" data-speak-lang="hu-HU">Te is vársz?</button></td>
            <td>Ты тоже ждёшь?</td>
            <td>te</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna itt vár." data-speak-lang="hu-HU">Anna itt vár.</button></td>
            <td>Анна ждёт здесь.</td>
            <td>ő</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Együtt várunk." data-speak-lang="hu-HU">Együtt várunk.</button></td>
            <td>Мы ждём вместе.</td>
            <td>mi</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ti itt vártok?" data-speak-lang="hu-HU">Ti itt vártok?</button></td>
            <td>Вы ждёте здесь?</td>
            <td>ti</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ők nem várnak." data-speak-lang="hu-HU">Ők nem várnak.</button></td>
            <td>Они не ждут.</td>
            <td>ők</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Произношение и написание</h4>
        <ul class="tick">
          <li>Ударение во всех формах падает на первый слог.</li>
          <li>Долгая <b>á</b> сохраняется: vár, várok, vársz, várunk, vártok, várnak.</li>
          <li>В форме <b>vársz</b> сочетание <b>rsz</b> произносится слитно, без добавления гласной.</li>
          <li>Не пишите <s>varok</s>, <s>varsz</s> или <s>varnak</s>.</li>
        </ul>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Быстрая самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>я жду → <b>várok</b></li>
            <li>ты не ждёшь → <b>nem vársz</b></li>
            <li>Анна ждёт → <b>Anna vár</b></li>
            <li>мы ждём → <b>várunk</b></li>
            <li>вы ждёте? → <b>vártok?</b></li>
            <li>они не ждут → <b>nem várnak</b></li>
          </ol>
        </details>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 4 · 4/12 · МОДЕЛЬ С ПЕРЕДНИМИ НЕОГУБЛЁННЫМИ ГЛАСНЫМИ',
      title: 'A kér ige',
      subtitle: 'Глагол kér — просить, запрашивать и заказывать',
      type: 'info',
      note: 'Kér — обычный не-ik глагол с передней неогублённой гласной é. Поэтому в формах én, mi, ti и ők используются передние варианты окончаний: kérek, kérünk, kértek, kérnek.',
      warn: 'Не путайте kér и kérdez. Kér valamit означает «просить, запрашивать или заказывать что-либо». Kérdez означает «спрашивать, задавать вопрос».',
      task: 'Прочитайте парадигму без местоимений. Затем составьте шесть бытовых реплик: заказ напитка, предложение воды, просьба о помощи, заказ билетов, вопрос Mit kértek? и отрицание.',
      body: `
        <p><strong>Kér</strong> употребляется, когда человек просит, запрашивает, хочет получить или заказывает что-либо.</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">Основа: kér-</div>
          <div class="mt-2">
            <span class="hu-word">kér + ek → kérek</span> ·
            <span class="hu-word">kér + ünk → kérünk</span> ·
            <span class="hu-word">kér + nek → kérnek</span>
          </div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Полная парадигма</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Строение</th><th>Основной перевод</th></tr>
          <tr>
            <td><b>én</b> — я</td>
            <td><button class="speak-btn" data-speak-text="kérek" data-speak-lang="hu-HU">kérek</button></td>
            <td>kér + ek</td>
            <td>я прошу / заказываю</td>
          </tr>
          <tr>
            <td><b>te</b> — ты</td>
            <td><button class="speak-btn" data-speak-text="kérsz" data-speak-lang="hu-HU">kérsz</button></td>
            <td>kér + sz</td>
            <td>ты просишь / заказываешь</td>
          </tr>
          <tr>
            <td><b>ő</b> — он / она</td>
            <td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU">kér</button></td>
            <td>основа без отдельного окончания</td>
            <td>он / она просит</td>
          </tr>
          <tr>
            <td><b>mi</b> — мы</td>
            <td><button class="speak-btn" data-speak-text="kérünk" data-speak-lang="hu-HU">kérünk</button></td>
            <td>kér + ünk</td>
            <td>мы просим / заказываем</td>
          </tr>
          <tr>
            <td><b>ti</b> — вы</td>
            <td><button class="speak-btn" data-speak-text="kértek" data-speak-lang="hu-HU">kértek</button></td>
            <td>kér + tek</td>
            <td>вы просите / заказываете</td>
          </tr>
          <tr>
            <td><b>ők</b> — они</td>
            <td><button class="speak-btn" data-speak-text="kérnek" data-speak-lang="hu-HU">kérnek</button></td>
            <td>kér + nek</td>
            <td>они просят / заказывают</td>
          </tr>
        </table>

        <div class="note">
          Передняя неогублённая гласная <b>é</b> требует передних вариантов:
          <b>-ek, -ünk, -tek, -nek</b>.
          Формы <b>te</b> и <b>ő</b> здесь: <span class="hu-word">kérsz</span> и <span class="hu-word">kér</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Kér — не только «просить»</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Пример</th><th>Естественный перевод</th></tr>
          <tr>
            <td>кафе или ресторан</td>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
            <td>Мне, пожалуйста, кофе. / Я буду кофе.</td>
          </tr>
          <tr>
            <td>предложение</td>
            <td><button class="speak-btn" data-speak-text="Kérsz vizet?" data-speak-lang="hu-HU">Kérsz vizet?</button></td>
            <td>Хочешь воды?</td>
          </tr>
          <tr>
            <td>просьба о помощи</td>
            <td><button class="speak-btn" data-speak-text="Anna segítséget kér." data-speak-lang="hu-HU">Anna segítséget kér.</button></td>
            <td>Анна просит помощи.</td>
          </tr>
          <tr>
            <td>покупка билетов</td>
            <td><button class="speak-btn" data-speak-text="Két jegyet kérünk." data-speak-lang="hu-HU">Két jegyet kérünk.</button></td>
            <td>Нам два билета, пожалуйста.</td>
          </tr>
          <tr>
            <td>вопрос группе</td>
            <td><button class="speak-btn" data-speak-text="Ti mit kértek?" data-speak-lang="hu-HU">Ti mit kértek?</button></td>
            <td>Что вы будете / что вы хотите заказать?</td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Ők nem kérnek semmit." data-speak-lang="hu-HU">Ők nem kérnek semmit.</button></td>
            <td>Они ничего не просят.</td>
          </tr>
        </table>

        <div class="note">
          Русский перевод зависит от ситуации. В кафе <span class="hu-word">kérek</span>
          естественно переводить «мне, пожалуйста» или «я буду», а не тяжёлым буквальным «я прошу».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Kér и kérdez</h4>
        <table class="conj">
          <tr><th>Глагол</th><th>Что делает человек</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU">kér</button></td>
            <td>просит или хочет получить что-либо</td>
            <td><button class="speak-btn" data-speak-text="Kérek egy pohár vizet." data-speak-lang="hu-HU">Kérek egy pohár vizet.</button> — Прошу стакан воды.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kérdez" data-speak-lang="hu-HU">kérdez</button></td>
            <td>задаёт вопрос</td>
            <td><button class="speak-btn" data-speak-text="Anna kérdez." data-speak-lang="hu-HU">Anna kérdez.</button> — Анна спрашивает.</td>
          </tr>
        </table>

        <div class="warn">
          Для русского «задать вопрос» не используйте просто <b>kér</b>.
          Нужен глагол <span class="hu-word">kérdez</span>:
          <span class="hu-word">Kérdezek valamit</span> — «Я кое-что спрошу».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Формы дополнения пока учим как готовые</h4>
        <p>После kér часто называется то, что человек просит или заказывает. Такое дополнение обычно имеет показатель <b>-t</b>.</p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Форма после kér</th><th>Пример</th></tr>
          <tr>
            <td>kávé — кофе</td>
            <td><button class="speak-btn" data-speak-text="kávét" data-speak-lang="hu-HU">kávét</button></td>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
          </tr>
          <tr>
            <td>víz — вода</td>
            <td><button class="speak-btn" data-speak-text="vizet" data-speak-lang="hu-HU">vizet</button></td>
            <td><button class="speak-btn" data-speak-text="Kérsz vizet?" data-speak-lang="hu-HU">Kérsz vizet?</button></td>
          </tr>
          <tr>
            <td>jegy — билет</td>
            <td><button class="speak-btn" data-speak-text="jegyet" data-speak-lang="hu-HU">jegyet</button></td>
            <td><button class="speak-btn" data-speak-text="Két jegyet kérünk." data-speak-lang="hu-HU">Két jegyet kérünk.</button></td>
          </tr>
          <tr>
            <td>segítség — помощь</td>
            <td><button class="speak-btn" data-speak-text="segítséget" data-speak-lang="hu-HU">segítséget</button></td>
            <td><button class="speak-btn" data-speak-text="Segítséget kérek." data-speak-lang="hu-HU">Segítséget kérek.</button></td>
          </tr>
        </table>

        <div class="note">
          Винительный падеж системно изучается позже. Сейчас запоминайте частотные сочетания целиком:
          <span class="hu-word">kávét kérek</span>,
          <span class="hu-word">vizet kérsz</span>,
          <span class="hu-word">segítséget kér</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Неопределённое и определённое дополнение</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Тип дополнения</th><th>Что происходит с глаголом</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérek egy kávét." data-speak-lang="hu-HU">Kérek egy kávét.</button></td>
            <td>один неопределённый кофе</td>
            <td>неопределённая форма <b>kérek</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kérem a kávét." data-speak-lang="hu-HU">Kérem a kávét.</button></td>
            <td>конкретный кофе</td>
            <td>определённая форма <b>kérem</b></td>
          </tr>
        </table>

        <div class="warn">
          На этом уроке активно образуем только форму <b>kérek</b>.
          <span class="hu-word">Kérem a kávét</span> приведено только как предварительный контраст.
          Полное определённое спряжение изучается позже.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Утверждение, отрицание и вопрос</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td>утверждение</td>
            <td><button class="speak-btn" data-speak-text="Kérek egy teát." data-speak-lang="hu-HU">Kérek egy teát.</button></td>
            <td>Мне чай, пожалуйста.</td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Nem kérek kávét." data-speak-lang="hu-HU">Nem kérek kávét.</button></td>
            <td>Я не хочу кофе.</td>
          </tr>
          <tr>
            <td>вопрос</td>
            <td><button class="speak-btn" data-speak-text="Kérsz teát?" data-speak-lang="hu-HU">Kérsz teát?</button></td>
            <td>Хочешь чаю?</td>
          </tr>
          <tr>
            <td>вопросительное слово</td>
            <td><button class="speak-btn" data-speak-text="Mit kérsz?" data-speak-lang="hu-HU">Mit kérsz?</button></td>
            <td>Что ты будешь / что ты хочешь?</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Произношение и написание</h4>
        <ul class="tick">
          <li>Долгая <b>é</b> сохраняется во всех формах: kér, kérek, kérsz, kérünk, kértek, kérnek.</li>
          <li>Ударение падает на первый слог.</li>
          <li>В форме <b>kérsz</b> сочетание <b>rsz</b> произносится слитно.</li>
          <li>Не пишите <s>kerek</s>, <s>kersz</s> или <s>kernek</s>.</li>
        </ul>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Быстрая самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>Мне кофе, пожалуйста. → <b>Kérek egy kávét.</b></li>
            <li>Хочешь воды? → <b>Kérsz vizet?</b></li>
            <li>Анна просит помощи. → <b>Anna segítséget kér.</b></li>
            <li>Нам два билета, пожалуйста. → <b>Két jegyet kérünk.</b></li>
            <li>Что вы будете? → <b>Ti mit kértek?</b></li>
            <li>Они ничего не просят. → <b>Ők nem kérnek semmit.</b></li>
          </ol>
        </details>
      `,
    },
    {
      id: 5,
      eyebrow: 'УРОК 4 · 5/12 · МОДЕЛЬ С ПЕРЕДНИМИ ОГУБЛЁННЫМИ ГЛАСНЫМИ',
      title: 'A köt ige',
      subtitle: 'Глагол köt — вязать, завязывать и связывать',
      type: 'info',
      note: 'Köt — обычный не-ik глагол с передней огублённой гласной ö. Особенно заметны огублённые варианты в формах kötök и köttök; формы kötünk и kötnek совпадают по типу с другими передними основами.',
      warn: 'В форме ti пишется köttök с двойной t. Это не отдельная неправильная форма: основа köt заканчивается на t, и окончание -tök тоже начинается с t. Две t пишутся и произносятся как долгая согласная.',
      task: 'Прочитайте парадигму без местоимений. Затем составьте по одному предложению со значениями «вязать шарф», «завязать узел» и «связывать предметы».',
      activities: [L4_CP_RECOGNIZE_TEXT, L4_CP_CONJUGATION],
      body: `
        <p><strong>Köt</strong> имеет несколько связанных значений: «вязать», «завязывать», «связывать», а в более широких контекстах — «соединять» или «заключать».</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">Основа: köt-</div>
          <div class="mt-2">
            <span class="hu-word">köt + ök → kötök</span> ·
            <span class="hu-word">köt + ünk → kötünk</span> ·
            <span class="hu-word">köt + tök → köttök</span>
          </div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Полная парадигма</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Строение</th><th>Перевод</th></tr>
          <tr>
            <td><b>én</b> — я</td>
            <td><button class="speak-btn" data-speak-text="kötök" data-speak-lang="hu-HU">kötök</button></td>
            <td>köt + ök</td>
            <td>я вяжу / связываю</td>
          </tr>
          <tr>
            <td><b>te</b> — ты</td>
            <td><button class="speak-btn" data-speak-text="kötsz" data-speak-lang="hu-HU">kötsz</button></td>
            <td>köt + sz</td>
            <td>ты вяжешь / связываешь</td>
          </tr>
          <tr>
            <td><b>ő</b> — он / она</td>
            <td><button class="speak-btn" data-speak-text="köt" data-speak-lang="hu-HU">köt</button></td>
            <td>основа без отдельного окончания</td>
            <td>он / она вяжет / связывает</td>
          </tr>
          <tr>
            <td><b>mi</b> — мы</td>
            <td><button class="speak-btn" data-speak-text="kötünk" data-speak-lang="hu-HU">kötünk</button></td>
            <td>köt + ünk</td>
            <td>мы вяжем / связываем</td>
          </tr>
          <tr>
            <td><b>ti</b> — вы</td>
            <td><button class="speak-btn" data-speak-text="köttök" data-speak-lang="hu-HU">köttök</button></td>
            <td>köt + tök</td>
            <td>вы вяжете / связываете</td>
          </tr>
          <tr>
            <td><b>ők</b> — они</td>
            <td><button class="speak-btn" data-speak-text="kötnek" data-speak-lang="hu-HU">kötnek</button></td>
            <td>köt + nek</td>
            <td>они вяжут / связывают</td>
          </tr>
        </table>

        <div class="note">
          Передняя огублённая гласная <b>ö</b> особенно влияет на формы:
          <span class="hu-word">kötök</span> и <span class="hu-word">köttök</span>.
          В формах <span class="hu-word">kötünk</span> и <span class="hu-word">kötnek</span>
          используются общие передние варианты.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Почему köttök пишется с двумя t</h4>
        <table class="conj">
          <tr><th>Шаг</th><th>Форма</th><th>Пояснение</th></tr>
          <tr>
            <td>основа</td>
            <td><button class="speak-btn" data-speak-text="köt" data-speak-lang="hu-HU">köt</button></td>
            <td>последняя согласная основы — t</td>
          </tr>
          <tr>
            <td>окончание ti</td>
            <td><button class="speak-btn" data-speak-text="tök" data-speak-lang="hu-HU">-tök</button></td>
            <td>окончание тоже начинается с t</td>
          </tr>
          <tr>
            <td>готовая форма</td>
            <td><button class="speak-btn" data-speak-text="köttök" data-speak-lang="hu-HU">köttök</button></td>
            <td>две t образуют долгую согласную</td>
          </tr>
        </table>

        <div class="warn">
          Не пишите <s>kötök</s> для лица <b>ti</b>. 
          <span class="hu-word">kötök</span> означает «я вяжу», а
          <span class="hu-word">köttök</span> — «вы вяжете».
          Различие двойной согласной меняет грамматическое лицо.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Три основных значения</h4>
        <table class="conj">
          <tr><th>Значение</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>вязать</td>
            <td><button class="speak-btn" data-speak-text="Kötök egy sálat." data-speak-lang="hu-HU">Kötök egy sálat.</button></td>
            <td>Я вяжу шарф.</td>
          </tr>
          <tr>
            <td>завязывать</td>
            <td><button class="speak-btn" data-speak-text="Kötsz egy csomót?" data-speak-lang="hu-HU">Kötsz egy csomót?</button></td>
            <td>Ты завязываешь узел?</td>
          </tr>
          <tr>
            <td>связывать</td>
            <td><button class="speak-btn" data-speak-text="Anna két dobozt köt össze." data-speak-lang="hu-HU">Anna két dobozt köt össze.</button></td>
            <td>Анна связывает две коробки вместе.</td>
          </tr>
        </table>

        <div class="note">
          Значение определяется существительным и ситуацией:
          <span class="hu-word">sálat köt</span> — вяжет шарф;
          <span class="hu-word">csomót köt</span> — завязывает узел;
          <span class="hu-word">összeköt</span> — соединяет или связывает вместе.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Формы в предложениях</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Перевод</th><th>Лицо</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Most kötök." data-speak-lang="hu-HU">Most kötök.</button></td>
            <td>Сейчас я вяжу.</td>
            <td>én</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Te mit kötsz?" data-speak-lang="hu-HU">Te mit kötsz?</button></td>
            <td>Что ты вяжешь / завязываешь?</td>
            <td>te</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Péter csomót köt." data-speak-lang="hu-HU">Péter csomót köt.</button></td>
            <td>Петер завязывает узел.</td>
            <td>ő</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Együtt kötünk." data-speak-lang="hu-HU">Együtt kötünk.</button></td>
            <td>Мы вяжем вместе.</td>
            <td>mi</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ti mit köttök?" data-speak-lang="hu-HU">Ti mit köttök?</button></td>
            <td>Что вы вяжете?</td>
            <td>ti</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ők nem kötnek." data-speak-lang="hu-HU">Ők nem kötnek.</button></td>
            <td>Они не вяжут.</td>
            <td>ők</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Неопределённое и определённое дополнение</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Дополнение</th><th>Спряжение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kötök egy sálat." data-speak-lang="hu-HU">Kötök egy sálat.</button></td>
            <td>egy sálat — один неопределённый шарф</td>
            <td>неопределённая форма <b>kötök</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Kötöm a sálat." data-speak-lang="hu-HU">Kötöm a sálat.</button></td>
            <td>a sálat — конкретный шарф</td>
            <td>определённая форма <b>kötöm</b></td>
          </tr>
        </table>

        <div class="warn">
          На этом уроке активно образуем только <b>kötök</b>.
          Форма <span class="hu-word">kötöm</span> показана только как предварительный контраст.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Отрицание и вопрос</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td>утверждение</td>
            <td><button class="speak-btn" data-speak-text="Kötök." data-speak-lang="hu-HU">Kötök.</button></td>
            <td>Я вяжу.</td>
          </tr>
          <tr>
            <td>отрицание</td>
            <td><button class="speak-btn" data-speak-text="Nem kötök." data-speak-lang="hu-HU">Nem kötök.</button></td>
            <td>Я не вяжу.</td>
          </tr>
          <tr>
            <td>общий вопрос</td>
            <td><button class="speak-btn" data-speak-text="Kötsz?" data-speak-lang="hu-HU">Kötsz?</button></td>
            <td>Ты вяжешь?</td>
          </tr>
          <tr>
            <td>вопросительное слово</td>
            <td><button class="speak-btn" data-speak-text="Mit köttök?" data-speak-lang="hu-HU">Mit köttök?</button></td>
            <td>Что вы вяжете?</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Произношение и написание</h4>
        <ul class="tick">
          <li>Буквы <b>ö</b> и <b>ő</b> — разные гласные; в köt используется короткая ö.</li>
          <li>Ударение во всех формах падает на первый слог.</li>
          <li>В <b>köttök</b> двойная t произносится дольше, чем одиночная t в <b>kötök</b>.</li>
          <li>Не пишите <s>kotok</s>, <s>kotsz</s>, <s>kotunk</s> или <s>kotnek</s>.</li>
        </ul>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Быстрая самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>я вяжу → <b>kötök</b></li>
            <li>ты завязываешь узел → <b>csomót kötsz</b></li>
            <li>Петер вяжет → <b>Péter köt</b></li>
            <li>мы вяжем → <b>kötünk</b></li>
            <li>что вы вяжете? → <b>Mit köttök?</b></li>
            <li>они не вяжут → <b>nem kötnek</b></li>
          </ol>
        </details>
      `,
    },
    {
      id: 6,
      eyebrow: 'УРОК 4 · 6/12 · ФОРМА TE',
      title: 'Sziszegő tövek',
      subtitle: 'Форма te после основ на s, sz, z и dz',
      type: 'info',
      note: 'Это не случайное исключение, а регулярная модель неопределённого спряжения. После основ на s, sz, z и dz форма te обычно получает -ol, -el или -öl вместо обычного -sz.',
      warn: 'Не образуйте формы olvassz, nézsz, főzsz или edzsz. Правильно: olvasol, nézel, főzöl, edzel. Вариант окончания выбирается по гармонии гласных.',
      task: 'Разделите глаголы на три группы по окончанию te: -ol, -el и -öl. Затем составьте вопросы Mit olvasol?, Mit nézel?, Mit főzöl? и Ma edzel?',
      body: `
        <p>У большинства обычных глаголов форма <b>te</b> имеет окончание <b>-sz</b>:</p>

        <p class="font-mono font-bold">
          vár → vársz · kér → kérsz · köt → kötsz
        </p>

        <p>Но после основ, которые заканчиваются на <b>s, sz, z</b> или <b>dz</b>, используется другая регулярная модель:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">
            основа на s / sz / z / dz + -ol / -el / -öl
          </div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Почему обычное -sz не используется</h4>
        <p>После свистящего или шипящего конца основы ещё одно <b>-sz</b> не является нормальной формой настоящего времени. Венгерский использует более удобные варианты с гласной.</p>

        <table class="conj">
          <tr><th>Обычная модель</th><th>Особая модель после s/sz/z/dz</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="vár, vársz" data-speak-lang="hu-HU">vár → vársz</button></td>
            <td><button class="speak-btn" data-speak-text="olvas, olvasol" data-speak-lang="hu-HU">olvas → olvasol</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kér, kérsz" data-speak-lang="hu-HU">kér → kérsz</button></td>
            <td><button class="speak-btn" data-speak-text="néz, nézel" data-speak-lang="hu-HU">néz → nézel</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="köt, kötsz" data-speak-lang="hu-HU">köt → kötsz</button></td>
            <td><button class="speak-btn" data-speak-text="főz, főzöl" data-speak-lang="hu-HU">főz → főzöl</button></td>
          </tr>
        </table>

        <div class="warn">
          Формы <s>olvassz</s>, <s>nézsz</s>, <s>főzsz</s> и <s>edzsz</s>
          не являются формами te настоящего времени.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Три варианта по гармонии гласных</h4>
        <table class="conj">
          <tr><th>Тип основы</th><th>Окончание te</th><th>Примеры</th></tr>
          <tr>
            <td>задние гласные</td>
            <td><b>-ol</b></td>
            <td>
              <button class="speak-btn" data-speak-text="olvasol, mosol" data-speak-lang="hu-HU">
                olvas → olvasol · mos → mosol
              </button>
            </td>
          </tr>
          <tr>
            <td>передние неогублённые</td>
            <td><b>-el</b></td>
            <td>
              <button class="speak-btn" data-speak-text="nézel, keresel, edzel" data-speak-lang="hu-HU">
                néz → nézel · keres → keresel · edz → edzel
              </button>
            </td>
          </tr>
          <tr>
            <td>передние огублённые</td>
            <td><b>-öl</b></td>
            <td>
              <button class="speak-btn" data-speak-text="főzöl" data-speak-lang="hu-HU">
                főz → főzöl
              </button>
            </td>
          </tr>
        </table>

        <div class="note">
          Выбор <b>-ol/-el/-öl</b> подчиняется той же гармонии гласных, что и другие личные окончания:
          задние → <b>-ol</b>;
          передние неогублённые → <b>-el</b>;
          передние огублённые → <b>-öl</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Основные примеры</h4>
        <table class="conj">
          <tr><th>Глагол</th><th>Форма te</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="olvas" data-speak-lang="hu-HU">olvas</button></td>
            <td><button class="speak-btn" data-speak-text="olvasol" data-speak-lang="hu-HU">olvasol</button></td>
            <td>читать → ты читаешь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="mos" data-speak-lang="hu-HU">mos</button></td>
            <td><button class="speak-btn" data-speak-text="mosol" data-speak-lang="hu-HU">mosol</button></td>
            <td>мыть → ты моешь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="néz" data-speak-lang="hu-HU">néz</button></td>
            <td><button class="speak-btn" data-speak-text="nézel" data-speak-lang="hu-HU">nézel</button></td>
            <td>смотреть → ты смотришь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="keres" data-speak-lang="hu-HU">keres</button></td>
            <td><button class="speak-btn" data-speak-text="keresel" data-speak-lang="hu-HU">keresel</button></td>
            <td>искать → ты ищешь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="főz" data-speak-lang="hu-HU">főz</button></td>
            <td><button class="speak-btn" data-speak-text="főzöl" data-speak-lang="hu-HU">főzöl</button></td>
            <td>готовить → ты готовишь</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="edz" data-speak-lang="hu-HU">edz</button></td>
            <td><button class="speak-btn" data-speak-text="edzel" data-speak-lang="hu-HU">edzel</button></td>
            <td>тренироваться → ты тренируешься</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Формы в вопросах и ответах</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Возможный ответ</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit olvasol?" data-speak-lang="hu-HU">Mit olvasol?</button></td>
            <td><button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">Egy könyvet olvasok.</button></td>
            <td>Что ты читаешь? — Я читаю книгу.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit nézel?" data-speak-lang="hu-HU">Mit nézel?</button></td>
            <td><button class="speak-btn" data-speak-text="Egy filmet nézek." data-speak-lang="hu-HU">Egy filmet nézek.</button></td>
            <td>Что ты смотришь? — Я смотрю фильм.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit főzöl?" data-speak-lang="hu-HU">Mit főzöl?</button></td>
            <td><button class="speak-btn" data-speak-text="Levest főzök." data-speak-lang="hu-HU">Levest főzök.</button></td>
            <td>Что ты готовишь? — Я готовлю суп.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ma edzel?" data-speak-lang="hu-HU">Ma edzel?</button></td>
            <td><button class="speak-btn" data-speak-text="Igen, ma edzek." data-speak-lang="hu-HU">Igen, ma edzek.</button></td>
            <td>Ты сегодня тренируешься? — Да, сегодня тренируюсь.</td>
          </tr>
        </table>

        <div class="note">
          Форма <b>te</b> и форма <b>én</b> строятся по разным правилам:
          <span class="hu-word">olvasol — olvasok</span>,
          <span class="hu-word">nézel — nézek</span>,
          <span class="hu-word">főzöl — főzök</span>,
          <span class="hu-word">edzel — edzek</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Отрицание</h4>
        <table class="conj">
          <tr><th>Утверждение</th><th>Отрицание</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasol." data-speak-lang="hu-HU">Olvasol.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem olvasol." data-speak-lang="hu-HU">Nem olvasol.</button></td>
            <td>Ты читаешь. — Ты не читаешь.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Főzöl." data-speak-lang="hu-HU">Főzöl.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem főzöl." data-speak-lang="hu-HU">Nem főzöl.</button></td>
            <td>Ты готовишь. — Ты не готовишь.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Как применять правило</h4>
        <ol class="tasklist">
          <li>Найдите основу глагола.</li>
          <li>Проверьте её последний звук.</li>
          <li>Если основа заканчивается на s, sz, z или dz, не используйте обычное -sz.</li>
          <li>Выберите -ol, -el или -öl по гармонии гласных.</li>
          <li>Произнесите и запишите готовую форму целиком.</li>
        </ol>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Быстрая самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>ты читаешь → <b>olvasol</b></li>
            <li>ты моешь → <b>mosol</b></li>
            <li>ты смотришь → <b>nézel</b></li>
            <li>ты ищешь → <b>keresel</b></li>
            <li>ты готовишь → <b>főzöl</b></li>
            <li>ты тренируешься → <b>edzel</b></li>
          </ol>
        </details>
      `,
    },
    {
      id: 7,
      eyebrow: 'УРОК 4 · 7/12 · ГЛАГОЛЫ НА -ik',
      title: 'Ikes igék',
      subtitle: 'Первое знакомство с частотными глаголами на -ik',
      type: 'info',
      note: 'У традиционных -ik-глаголов словарная форма совпадает с формой ő и заканчивается на -ik: dolgozik, lakik. Формы единственного числа могут отличаться от базовой модели обычных глаголов.',
      warn: 'Не превращайте окончание -ik в универсальный алгоритм. Не все современные глаголы на -ik ведут себя одинаково, а в разговорной речи встречается вариативность. Для уровня A0 учите частотный глагол вместе с формами én, te и ő.',
      task: 'Прочитайте две парадигмы. Затем ответьте на вопросы Hol dolgozol? и Hol laksz? и сравните формы dolgozom–dolgozol–dolgozik и lakom–laksz–lakik.',
      body: `
        <p><strong>Ikes igék</strong> — традиционное название глаголов, словарная форма которых в третьем лице единственного числа заканчивается на <b>-ik</b>.</p>

        <div class="note">
          В венгерском словаре глагол обычно приводится в форме <b>ő</b>, а не в инфинитиве:
          <span class="hu-word">dolgozik</span> — он / она работает;
          <span class="hu-word">lakik</span> — он / она живёт.
          Инфинитивы этих глаголов:
          <span class="hu-word">dolgozni</span> и
          <span class="hu-word">lakni</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Dolgozik — работать</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Перевод</th><th>Комментарий</th></tr>
          <tr>
            <td><b>én</b></td>
            <td><button class="speak-btn" data-speak-text="dolgozom" data-speak-lang="hu-HU">dolgozom</button></td>
            <td>я работаю</td>
            <td>традиционная форма первого лица</td>
          </tr>
          <tr>
            <td><b>te</b></td>
            <td><button class="speak-btn" data-speak-text="dolgozol" data-speak-lang="hu-HU">dolgozol</button></td>
            <td>ты работаешь</td>
            <td>основа заканчивается на z, поэтому используется -ol</td>
          </tr>
          <tr>
            <td><b>ő</b></td>
            <td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td>
            <td>он / она работает</td>
            <td>словарная форма на -ik</td>
          </tr>
          <tr>
            <td><b>mi</b></td>
            <td><button class="speak-btn" data-speak-text="dolgozunk" data-speak-lang="hu-HU">dolgozunk</button></td>
            <td>мы работаем</td>
            <td>обычное окончание множественного числа</td>
          </tr>
          <tr>
            <td><b>ti</b></td>
            <td><button class="speak-btn" data-speak-text="dolgoztok" data-speak-lang="hu-HU">dolgoztok</button></td>
            <td>вы работаете</td>
            <td>основа dolgoz- + окончание ti</td>
          </tr>
          <tr>
            <td><b>ők</b></td>
            <td><button class="speak-btn" data-speak-text="dolgoznak" data-speak-lang="hu-HU">dolgoznak</button></td>
            <td>они работают</td>
            <td>обычное окончание множественного числа</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Lakik — жить, проживать</h4>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th><th>Перевод</th><th>Комментарий</th></tr>
          <tr>
            <td><b>én</b></td>
            <td><button class="speak-btn" data-speak-text="lakom" data-speak-lang="hu-HU">lakom</button></td>
            <td>я живу / проживаю</td>
            <td>традиционная форма первого лица</td>
          </tr>
          <tr>
            <td><b>te</b></td>
            <td><button class="speak-btn" data-speak-text="laksz" data-speak-lang="hu-HU">laksz</button></td>
            <td>ты живёшь</td>
            <td>обычная форма te на -sz</td>
          </tr>
          <tr>
            <td><b>ő</b></td>
            <td><button class="speak-btn" data-speak-text="lakik" data-speak-lang="hu-HU">lakik</button></td>
            <td>он / она живёт</td>
            <td>словарная форма на -ik</td>
          </tr>
          <tr>
            <td><b>mi</b></td>
            <td><button class="speak-btn" data-speak-text="lakunk" data-speak-lang="hu-HU">lakunk</button></td>
            <td>мы живём</td>
            <td>обычное окончание множественного числа</td>
          </tr>
          <tr>
            <td><b>ti</b></td>
            <td><button class="speak-btn" data-speak-text="laktok" data-speak-lang="hu-HU">laktok</button></td>
            <td>вы живёте</td>
            <td>обычное окончание множественного числа</td>
          </tr>
          <tr>
            <td><b>ők</b></td>
            <td><button class="speak-btn" data-speak-text="laknak" data-speak-lang="hu-HU">laknak</button></td>
            <td>они живут</td>
            <td>обычное окончание множественного числа</td>
          </tr>
        </table>

        <div class="note">
          Наиболее заметные особенности находятся в единственном числе:
          <span class="hu-word">dolgozom – dolgozol – dolgozik</span>;
          <span class="hu-word">lakom – laksz – lakik</span>.
          Во множественном числе используются знакомые окончания:
          <span class="hu-word">dolgozunk, dolgoztok, dolgoznak</span> и
          <span class="hu-word">lakunk, laktok, laknak</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Почему dolgozol, но laksz</h4>
        <table class="conj">
          <tr><th>Основа</th><th>Последний звук</th><th>Форма te</th><th>Правило</th></tr>
          <tr>
            <td>dolgoz-</td>
            <td>z</td>
            <td><button class="speak-btn" data-speak-text="dolgozol" data-speak-lang="hu-HU">dolgozol</button></td>
            <td>после z используется вариант с гласной</td>
          </tr>
          <tr>
            <td>lak-</td>
            <td>k</td>
            <td><button class="speak-btn" data-speak-text="laksz" data-speak-lang="hu-HU">laksz</button></td>
            <td>обычное окончание te</td>
          </tr>
        </table>

        <div class="note">
          Форма <span class="hu-word">dolgozol</span> связана не только с тем, что глагол заканчивается на -ik.
          Она также следует правилу предыдущего слайда: основа dolgoz- заканчивается на z.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Вопросы о работе и месте жительства</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Возможный ответ</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hol dolgozol?" data-speak-lang="hu-HU">Hol dolgozol?</button></td>
            <td><button class="speak-btn" data-speak-text="Budapesten dolgozom." data-speak-lang="hu-HU">Budapesten dolgozom.</button></td>
            <td>Где ты работаешь? — Я работаю в Будапеште.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hol laksz?" data-speak-lang="hu-HU">Hol laksz?</button></td>
            <td><button class="speak-btn" data-speak-text="Budapesten lakom." data-speak-lang="hu-HU">Budapesten lakom.</button></td>
            <td>Где ты живёшь? — Я живу в Будапеште.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna hol dolgozik?" data-speak-lang="hu-HU">Anna hol dolgozik?</button></td>
            <td><button class="speak-btn" data-speak-text="Egy iskolában dolgozik." data-speak-lang="hu-HU">Egy iskolában dolgozik.</button></td>
            <td>Где работает Анна? — Она работает в школе.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Péter hol lakik?" data-speak-lang="hu-HU">Péter hol lakik?</button></td>
            <td><button class="speak-btn" data-speak-text="A városban lakik." data-speak-lang="hu-HU">A városban lakik.</button></td>
            <td>Где живёт Петер? — Он живёт в городе.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Отрицание</h4>
        <table class="conj">
          <tr><th>Утверждение</th><th>Отрицание</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Dolgozom." data-speak-lang="hu-HU">Dolgozom.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem dolgozom." data-speak-lang="hu-HU">Nem dolgozom.</button></td>
            <td>Я работаю. — Я не работаю.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Itt lakik." data-speak-lang="hu-HU">Itt lakik.</button></td>
            <td><button class="speak-btn" data-speak-text="Nem itt lakik." data-speak-lang="hu-HU">Nem itt lakik.</button></td>
            <td>Он / она живёт здесь. — Он / она живёт не здесь.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Как учить новый -ik-глагол</h4>
        <p>Для каждого нового частотного глагола записывайте минимум четыре формы:</p>

        <table class="conj">
          <tr><th>Словарная форма</th><th>Én</th><th>Te</th><th>Ő</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozom" data-speak-lang="hu-HU">dolgozom</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozol" data-speak-lang="hu-HU">dolgozol</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="lakik" data-speak-lang="hu-HU">lakik</button></td>
            <td><button class="speak-btn" data-speak-text="lakom" data-speak-lang="hu-HU">lakom</button></td>
            <td><button class="speak-btn" data-speak-text="laksz" data-speak-lang="hu-HU">laksz</button></td>
            <td><button class="speak-btn" data-speak-text="lakik" data-speak-lang="hu-HU">lakik</button></td>
          </tr>
        </table>

        <div class="warn">
          У некоторых частотных глаголов формы отличаются от этих двух моделей.
          Например, <span class="hu-word">eszik</span> имеет форму
          <span class="hu-word">eszem</span>.
          Поэтому форму нового глагола нужно проверять, а не угадывать только по окончанию словарной формы.
        </div>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Быстрая самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>я работаю → <b>dolgozom</b></li>
            <li>ты работаешь → <b>dolgozol</b></li>
            <li>она работает → <b>dolgozik</b></li>
            <li>я живу → <b>lakom</b></li>
            <li>ты живёшь → <b>laksz</b></li>
            <li>они живут → <b>laknak</b></li>
          </ol>
        </details>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 4 · 8/12 · ЧАСТОТНЫЕ ГЛАГОЛЫ',
      title: 'Gyakori igék',
      subtitle: 'Частотные глаголы и их опорные формы',
      type: 'info',
      note: 'Список включает разные модели: обычные глаголы, основы с дополнительной гласной в некоторых формах и два частотных -ik-глагола. Поэтому их нельзя объединять под названием «все правильные».',
      warn: 'Не пытайтесь автоматически проспрягать каждый новый глагол только по словарной форме. Сначала определите модель, затем проверьте формы én, te и ő. Особенно внимательно учите ért, szeret, dolgozik и játszik.',
      task: 'Выучите восемь глаголов через готовое предложение. Затем проспрягайте tanul во всех шести лицах и проверьте себя по ключу внизу слайда.',
      body: `
        <p><strong>Gyakori igék</strong> — частотные глаголы. Полезнее учить не отдельный русский перевод, а четыре элемента вместе:</p>

        <ol class="tasklist">
          <li>словарную форму;</li>
          <li>значение;</li>
          <li>опорные формы én–te–ő;</li>
          <li>одно естественное предложение.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Обычные глаголы базовой модели</h4>
        <table class="conj">
          <tr><th>Глагол</th><th>Значение</th><th>Én – te – ő</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
            <td>учиться; изучать</td>
            <td><button class="speak-btn" data-speak-text="tanulok, tanulsz, tanul" data-speak-lang="hu-HU">tanulok · tanulsz · tanul</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU">Magyarul tanulok.</button> — Я учу венгерский.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ír" data-speak-lang="hu-HU">ír</button></td>
            <td>писать</td>
            <td><button class="speak-btn" data-speak-text="írok, írsz, ír" data-speak-lang="hu-HU">írok · írsz · ír</button></td>
            <td><button class="speak-btn" data-speak-text="Egy levelet írok." data-speak-lang="hu-HU">Egy levelet írok.</button> — Я пишу письмо.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="beszél" data-speak-lang="hu-HU">beszél</button></td>
            <td>говорить</td>
            <td><button class="speak-btn" data-speak-text="beszélek, beszélsz, beszél" data-speak-lang="hu-HU">beszélek · beszélsz · beszél</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarul beszélünk." data-speak-lang="hu-HU">Magyarul beszélünk.</button> — Мы говорим по-венгерски.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="él" data-speak-lang="hu-HU">él</button></td>
            <td>жить; быть живым</td>
            <td><button class="speak-btn" data-speak-text="élek, élsz, él" data-speak-lang="hu-HU">élek · élsz · él</button></td>
            <td><button class="speak-btn" data-speak-text="Budapesten élek." data-speak-lang="hu-HU">Budapesten élek.</button> — Я живу в Будапеште.</td>
          </tr>
        </table>

        <div class="note">
          <b>Él и lakik:</b>
          <span class="hu-word">él</span> имеет более широкое значение «жить, существовать»;
          <span class="hu-word">lakik</span> чаще указывает, где человек проживает.
          На начальном уровне фразы <span class="hu-word">Budapesten élek</span> и
          <span class="hu-word">Budapesten lakom</span> обе возможны, но имеют немного разный акцент.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Частотные глаголы с важными формами</h4>
        <table class="conj">
          <tr><th>Глагол</th><th>Значение</th><th>Én – te – ő</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szeret" data-speak-lang="hu-HU">szeret</button></td>
            <td>любить; нравиться</td>
            <td><button class="speak-btn" data-speak-text="szeretek, szeretsz, szeret" data-speak-lang="hu-HU">szeretek · szeretsz · szeret</button></td>
            <td><button class="speak-btn" data-speak-text="Szeretek olvasni." data-speak-lang="hu-HU">Szeretek olvasni.</button> — Я люблю читать.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ért" data-speak-lang="hu-HU">ért</button></td>
            <td>понимать; разбираться</td>
            <td><button class="speak-btn" data-speak-text="értek, értesz, ért" data-speak-lang="hu-HU">értek · értesz · ért</button></td>
            <td><button class="speak-btn" data-speak-text="Értesz magyarul?" data-speak-lang="hu-HU">Értesz magyarul?</button> — Ты понимаешь по-венгерски?</td>
          </tr>
        </table>

        <div class="warn">
          У <span class="hu-word">ért</span> форма te —
          <span class="hu-word">értesz</span>, а не <s>értsz</s>.
          У <span class="hu-word">szeret</span> форма ti —
          <span class="hu-word">szerettek</span> с двойной t.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Частотные -ik-глаголы</h4>
        <table class="conj">
          <tr><th>Глагол</th><th>Значение</th><th>Én – te – ő</th><th>Пример</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td>
            <td>работать</td>
            <td><button class="speak-btn" data-speak-text="dolgozom, dolgozol, dolgozik" data-speak-lang="hu-HU">dolgozom · dolgozol · dolgozik</button></td>
            <td><button class="speak-btn" data-speak-text="Budapesten dolgozom." data-speak-lang="hu-HU">Budapesten dolgozom.</button> — Я работаю в Будапеште.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="játszik" data-speak-lang="hu-HU">játszik</button></td>
            <td>играть</td>
            <td><button class="speak-btn" data-speak-text="játszom, játszol, játszik" data-speak-lang="hu-HU">játszom · játszol · játszik</button></td>
            <td><button class="speak-btn" data-speak-text="A gyerekek játszanak." data-speak-lang="hu-HU">A gyerekek játszanak.</button> — Дети играют.</td>
          </tr>
        </table>

        <div class="note">
          У <span class="hu-word">játszik</span> основа для большинства форм —
          <span class="hu-word">játsz-</span>:
          <span class="hu-word">játszom, játszol, játszunk, játszotok, játszanak</span>.
          Форму нового -ik-глагола всё равно нужно проверять.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Один глагол — одна полезная модель</h4>
        <table class="conj">
          <tr><th>Ситуация</th><th>Венгерский</th><th>Перевод</th></tr>
          <tr>
            <td>учёба</td>
            <td><button class="speak-btn" data-speak-text="Minden nap tanulok." data-speak-lang="hu-HU">Minden nap tanulok.</button></td>
            <td>Я учусь каждый день.</td>
          </tr>
          <tr>
            <td>письмо</td>
            <td><button class="speak-btn" data-speak-text="Most írok." data-speak-lang="hu-HU">Most írok.</button></td>
            <td>Сейчас я пишу.</td>
          </tr>
          <tr>
            <td>язык</td>
            <td><button class="speak-btn" data-speak-text="Beszélsz magyarul?" data-speak-lang="hu-HU">Beszélsz magyarul?</button></td>
            <td>Ты говоришь по-венгерски?</td>
          </tr>
          <tr>
            <td>место жизни</td>
            <td><button class="speak-btn" data-speak-text="Hol élsz?" data-speak-lang="hu-HU">Hol élsz?</button></td>
            <td>Где ты живёшь?</td>
          </tr>
          <tr>
            <td>предпочтение</td>
            <td><button class="speak-btn" data-speak-text="Szeretek olvasni." data-speak-lang="hu-HU">Szeretek olvasni.</button></td>
            <td>Я люблю читать.</td>
          </tr>
          <tr>
            <td>понимание</td>
            <td><button class="speak-btn" data-speak-text="Nem értek mindent." data-speak-lang="hu-HU">Nem értek mindent.</button></td>
            <td>Я понимаю не всё.</td>
          </tr>
          <tr>
            <td>работа</td>
            <td><button class="speak-btn" data-speak-text="Ma nem dolgozom." data-speak-lang="hu-HU">Ma nem dolgozom.</button></td>
            <td>Сегодня я не работаю.</td>
          </tr>
          <tr>
            <td>игра</td>
            <td><button class="speak-btn" data-speak-text="A gyerekek együtt játszanak." data-speak-lang="hu-HU">A gyerekek együtt játszanak.</button></td>
            <td>Дети играют вместе.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Задание: проспрягайте tanul</h4>
        <p>Сначала заполните самостоятельно, не открывая ключ:</p>

        <table class="conj">
          <tr><th>Лицо</th><th>Ваша форма</th></tr>
          <tr><td>én</td><td>____________</td></tr>
          <tr><td>te</td><td>____________</td></tr>
          <tr><td>ő</td><td>____________</td></tr>
          <tr><td>mi</td><td>____________</td></tr>
          <tr><td>ti</td><td>____________</td></tr>
          <tr><td>ők</td><td>____________</td></tr>
        </table>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Ключ и критерий проверки</summary>
          <table class="conj mt-3">
            <tr><th>Лицо</th><th>Правильная форма</th><th>Пример</th></tr>
            <tr><td>én</td><td><b>tanulok</b></td><td>Magyarul tanulok.</td></tr>
            <tr><td>te</td><td><b>tanulsz</b></td><td>Magyarul tanulsz?</td></tr>
            <tr><td>ő</td><td><b>tanul</b></td><td>Anna magyarul tanul.</td></tr>
            <tr><td>mi</td><td><b>tanulunk</b></td><td>Együtt tanulunk.</td></tr>
            <tr><td>ti</td><td><b>tanultok</b></td><td>Ti is tanultok?</td></tr>
            <tr><td>ők</td><td><b>tanulnak</b></td><td>Ők minden nap tanulnak.</td></tr>
          </table>
          <p class="mt-3"><b>Готовность:</b> минимум 5 из 6 форм без подсказки и одно собственное предложение.</p>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Активный минимум</h4>
        <p>Для перехода дальше произнесите без текста:</p>
        <ul class="tick">
          <li><b>tanulok – tanulsz – tanul</b>;</li>
          <li><b>beszélek – beszélsz – beszél</b>;</li>
          <li><b>értek – értesz – ért</b>;</li>
          <li><b>dolgozom – dolgozol – dolgozik</b>;</li>
          <li><b>játszom – játszol – játszik</b>.</li>
        </ul>
      `,
    },
    {
      id: 9,
      eyebrow: 'УРОК 4 · 9/12 · ПОРЯДОК СЛОВ',
      title: 'Szórend',
      subtitle: 'Нейтральное сообщение, тема и контрастный фокус',
      type: 'info',
      note: 'Венгерский порядок слов нельзя свести к жёсткой формуле «подлежащее–глагол–дополнение». Формы слов показывают их грамматическую роль, а порядок помогает организовать информацию: что уже является темой и что сообщается как новое или контрастное.',
      warn: 'Не каждый элемент перед глаголом автоматически является контрастным фокусом. В нейтральной фразе перед глаголом также могут стоять обычные дополнения и обстоятельства. Фокус определяется контекстом, ударением и расположением остальных элементов.',
      task: 'Сравните нейтральные предложения и три контрастных варианта. Затем перестройте предложение так, чтобы отдельно выделить время, язык и действующее лицо.',
      activities: [L4_CP_NEGATION],
      body: `
        <p><strong>Szórend</strong> означает «порядок слов». В венгерском он тесно связан не только с грамматикой, но и с тем, какую информацию говорящий считает темой, новой частью или контрастом.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">1. Почему схема S–V–O недостаточна</h4>
        <p>Личное местоимение обычно опускается, поэтому предложение часто вообще не начинается с явного подлежащего:</p>

        <table class="conj">
          <tr><th>Венгерский</th><th>Перевод</th><th>Что видно по форме</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Tanulok." data-speak-lang="hu-HU">Tanulok.</button></td>
            <td>Я учусь.</td>
            <td>окончание глагола уже обозначает én</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU">Magyarul tanulok.</button></td>
            <td>Я учу венгерский / учусь по-венгерски.</td>
            <td>обстоятельство языка стоит перед глаголом</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Minden nap magyarul tanulok." data-speak-lang="hu-HU">Minden nap magyarul tanulok.</button></td>
            <td>Я каждый день учу венгерский.</td>
            <td>время + язык + глагол</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Anna minden nap magyarul tanul." data-speak-lang="hu-HU">Anna minden nap magyarul tanul.</button></td>
            <td>Анна каждый день учит венгерский.</td>
            <td>тема + время + язык + глагол</td>
          </tr>
        </table>

        <div class="note">
          Все четыре предложения могут быть нейтральными в подходящем контексте.
          Наличие слова непосредственно перед глаголом ещё не означает обязательный контраст.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Тема и сообщение</h4>
        <p>Удобная начальная модель — <b>тема + сообщение о теме</b>.</p>

        <table class="conj">
          <tr><th>Тема</th><th>Сообщение</th><th>Полное предложение</th></tr>
          <tr>
            <td>Anna</td>
            <td>minden nap magyarul tanul</td>
            <td><button class="speak-btn" data-speak-text="Anna minden nap magyarul tanul." data-speak-lang="hu-HU">Anna minden nap magyarul tanul.</button></td>
          </tr>
          <tr>
            <td>Én</td>
            <td>Budapesten dolgozom</td>
            <td><button class="speak-btn" data-speak-text="Én Budapesten dolgozom." data-speak-lang="hu-HU">Én Budapesten dolgozom.</button></td>
          </tr>
        </table>

        <div class="note">
          Если лицо не нужно подчёркивать, местоимение обычно убирается:
          <span class="hu-word">Budapesten dolgozom.</span>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Контрастный фокус</h4>
        <p>Если говорящий исправляет, противопоставляет или точно выделяет один элемент, этот элемент обычно ставится непосредственно перед спрягаемым глаголом и получает сильное ударение.</p>

        <table class="conj">
          <tr><th>Что выделяется</th><th>Предложение</th><th>Подразумеваемый контраст</th></tr>
          <tr>
            <td>время</td>
            <td><button class="speak-btn" data-speak-text="Minden nap tanulok magyarul." data-speak-lang="hu-HU"><b>Minden nap</b> tanulok magyarul.</button></td>
            <td>каждый день, а не только иногда</td>
          </tr>
          <tr>
            <td>язык</td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok minden nap." data-speak-lang="hu-HU"><b>Magyarul</b> tanulok minden nap.</button></td>
            <td>венгерский, а не другой язык</td>
          </tr>
          <tr>
            <td>действующее лицо</td>
            <td><button class="speak-btn" data-speak-text="Én tanulok magyarul minden nap." data-speak-lang="hu-HU"><b>Én</b> tanulok magyarul minden nap.</button></td>
            <td>я, а не кто-то другой</td>
          </tr>
        </table>

        <div class="warn">
          Старое объяснение «Minden nap magyarul tanulok подчёркивает minden nap» было неточным:
          непосредственно перед глаголом там стоит <span class="hu-word">magyarul</span>.
          Без контекста и специального ударения предложение лучше понимать как нейтральное сообщение.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Нейтральный порядок для начинающего</h4>
        <p>Для обычного сообщения используйте безопасную последовательность:</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C]">
            (тема / подлежащее) + время + другие обстоятельства или дополнения + глагол
          </div>
          <div class="mt-2">
            <span class="hu-word">Anna minden nap magyarul tanul.</span>
          </div>
        </div>

        <p>Это не абсолютный закон, а рабочая модель для нейтральных предложений уровня A0.</p>

        <table class="conj">
          <tr><th>Модель</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td>время + глагол</td>
            <td><button class="speak-btn" data-speak-text="Ma dolgozom." data-speak-lang="hu-HU">Ma dolgozom.</button></td>
            <td>Сегодня я работаю.</td>
          </tr>
          <tr>
            <td>место + глагол</td>
            <td><button class="speak-btn" data-speak-text="Budapesten lakom." data-speak-lang="hu-HU">Budapesten lakom.</button></td>
            <td>Я живу в Будапеште.</td>
          </tr>
          <tr>
            <td>дополнение + глагол</td>
            <td><button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">Egy könyvet olvasok.</button></td>
            <td>Я читаю книгу.</td>
          </tr>
          <tr>
            <td>тема + время + дополнение + глагол</td>
            <td><button class="speak-btn" data-speak-text="Anna este egy könyvet olvas." data-speak-lang="hu-HU">Anna este egy könyvet olvas.</button></td>
            <td>Анна вечером читает книгу.</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Общий вопрос</h4>
        <p>В общем вопросе порядок слов часто остаётся таким же. В устной речи вопрос выражается интонацией.</p>

        <table class="conj">
          <tr><th>Утверждение</th><th>Вопрос</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulsz." data-speak-lang="hu-HU">Magyarul tanulsz.</button></td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulsz?" data-speak-lang="hu-HU">Magyarul tanulsz?</button></td>
            <td>Ты учишь венгерский?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ma dolgozol." data-speak-lang="hu-HU">Ma dolgozol.</button></td>
            <td><button class="speak-btn" data-speak-text="Ma dolgozol?" data-speak-lang="hu-HU">Ma dolgozol?</button></td>
            <td>Ты сегодня работаешь?</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Вопросительное слово</h4>
        <p>Вопросительное слово обычно занимает позицию непосредственно перед глаголом:</p>

        <table class="conj">
          <tr><th>Вопрос</th><th>Перевод</th><th>Ответ</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit olvasol?" data-speak-lang="hu-HU">Mit olvasol?</button></td>
            <td>Что ты читаешь?</td>
            <td><button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">Egy könyvet olvasok.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Hol dolgozol?" data-speak-lang="hu-HU">Hol dolgozol?</button></td>
            <td>Где ты работаешь?</td>
            <td><button class="speak-btn" data-speak-text="Budapesten dolgozom." data-speak-lang="hu-HU">Budapesten dolgozom.</button></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mikor tanulsz magyarul?" data-speak-lang="hu-HU">Mikor tanulsz magyarul?</button></td>
            <td>Когда ты учишь венгерский?</td>
            <td><button class="speak-btn" data-speak-text="Este tanulok magyarul." data-speak-lang="hu-HU">Este tanulok magyarul.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Отрицание и область отрицания</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Перевод</th><th>Что отрицается</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nem tanulok." data-speak-lang="hu-HU">Nem tanulok.</button></td>
            <td>Я не учусь.</td>
            <td>действие целиком</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nem magyarul tanulok." data-speak-lang="hu-HU">Nem magyarul tanulok.</button></td>
            <td>Я учу не венгерский.</td>
            <td>контрастно отрицается язык</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ma nem dolgozom." data-speak-lang="hu-HU">Ma nem dolgozom.</button></td>
            <td>Сегодня я не работаю.</td>
            <td>действие в указанное время</td>
          </tr>
        </table>

        <div class="note">
          Для простого отрицания ставьте <b>nem</b> непосредственно перед спрягаемым глаголом:
          <span class="hu-word">Nem tanulok.</span>
          Более тонкая область отрицания изучается постепенно.
        </div>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Самопроверка: измените фокус</summary>
          <ol class="tasklist mt-3">
            <li>Нейтрально: Я каждый день учу венгерский. → <b>Minden nap magyarul tanulok.</b></li>
            <li>Именно каждый день: → <b>Minden nap tanulok magyarul.</b></li>
            <li>Именно венгерский: → <b>Magyarul tanulok minden nap.</b></li>
            <li>Именно я: → <b>Én tanulok magyarul minden nap.</b></li>
            <li>Ты учишь венгерский? → <b>Magyarul tanulsz?</b></li>
            <li>Когда ты учишь венгерский? → <b>Mikor tanulsz magyarul?</b></li>
          </ol>
        </details>
      `,
    },
    {
      id: 10,
      eyebrow: 'УРОК 4 · 10/12 · ДИАЛОГ',
      title: 'Párbeszéd',
      subtitle: 'Mit csinálsz most? — что ты делаешь сейчас?',
      type: 'info',
      note: 'Слово most указывает, что действие происходит сейчас, но глагол остаётся в обычном настоящем времени. В венгерском нет отдельной обязательной формы, соответствующей английскому Present Continuous.',
      warn: 'Не соединяйте два самостоятельных сообщения только запятой: Magyarul tanulok, egy könyvet olvasok. Используйте союз és или разделите фразы точкой: Magyarul tanulok, és egy könyvet olvasok.',
      task: 'Прослушайте диалог дважды. Сначала поймите общий смысл, затем ответьте на пять вопросов и составьте собственный диалог из шести реплик по модели.',
      activities: [P1_L4_READING, L4_LISTENING_PRESENT_FORMS, L4_CP_QUESTIONS],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Диалог</h4>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <p>
            <b>A:</b>
            <button class="speak-btn" data-speak-text="Szia! Mit csinálsz most?" data-speak-lang="hu-HU">
              Szia! Mit csinálsz most?
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Привет! Что ты сейчас делаешь?</p>

          <p>
            <b>B:</b>
            <button class="speak-btn" data-speak-text="Szia! Magyarul tanulok, és egy könyvet olvasok." data-speak-lang="hu-HU">
              Szia! Magyarul tanulok, és egy könyvet olvasok.
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Привет! Я учу венгерский и читаю книгу.</p>

          <p>
            <b>A:</b>
            <button class="speak-btn" data-speak-text="Nehéz a könyv?" data-speak-lang="hu-HU">
              Nehéz a könyv?
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Книга трудная?</p>

          <p>
            <b>B:</b>
            <button class="speak-btn" data-speak-text="Nem túl nehéz, de sok új szót tanulok belőle." data-speak-lang="hu-HU">
              Nem túl nehéz, de sok új szót tanulok belőle.
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Не слишком трудная, но я учу из неё много новых слов.</p>

          <p>
            <b>A:</b>
            <button class="speak-btn" data-speak-text="Minden nap tanulsz?" data-speak-lang="hu-HU">
              Minden nap tanulsz?
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Ты занимаешься каждый день?</p>

          <p>
            <b>B:</b>
            <button class="speak-btn" data-speak-text="Igen, minden este tanulok." data-speak-lang="hu-HU">
              Igen, minden este tanulok.
            </button>
          </p>
          <p class="text-sm text-[#6f6255]">Да, я занимаюсь каждый вечер.</p>
        </div>

        <div class="note">
          <b>Естественная связь:</b>
          <span class="hu-word">és</span> соединяет два действия одного человека:
          <span class="hu-word">tanulok, és olvasok</span>.
          Перед és в длинном предложении ставится запятая.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Разбор ключевых выражений</h4>
        <table class="conj">
          <tr><th>Выражение</th><th>Разбор</th><th>Значение</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Mit csinálsz most?" data-speak-lang="hu-HU">Mit csinálsz most?</button></td>
            <td><b>mit</b> — что; <b>csinálsz</b> — ты делаешь; <b>most</b> — сейчас</td>
            <td>Что ты сейчас делаешь?</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU">Magyarul tanulok.</button></td>
            <td><b>magyarul</b> — по-венгерски / венгерский язык; <b>tanulok</b> — я учусь</td>
            <td>Я учу венгерский.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">Egy könyvet olvasok.</button></td>
            <td><b>egy könyvet</b> — одну / какую-то книгу; <b>olvasok</b> — я читаю</td>
            <td>Я читаю книгу.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Sok új szót tanulok." data-speak-lang="hu-HU">Sok új szót tanulok.</button></td>
            <td>после <b>sok</b> существительное стоит в единственном числе: <b>szót</b>, не <s>szavakat</s></td>
            <td>Я учу много новых слов.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="belőle" data-speak-lang="hu-HU">belőle</button></td>
            <td>готовое местоименное выражение «из него / из неё»</td>
            <td>в диалоге: из книги</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Почему используется неопределённое спряжение</h4>
        <table class="conj">
          <tr><th>Фраза</th><th>Дополнение</th><th>Форма глагола</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Egy könyvet olvasok." data-speak-lang="hu-HU">Egy könyvet olvasok.</button></td>
            <td><b>egy könyvet</b> — неопределённое</td>
            <td><b>olvasok</b></td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Sok új szót tanulok." data-speak-lang="hu-HU">Sok új szót tanulok.</button></td>
            <td><b>sok új szót</b> — неопределённое количество</td>
            <td><b>tanulok</b></td>
          </tr>
        </table>

        <div class="warn">
          Сравнение только для узнавания:
          <span class="hu-word">Egy könyvet olvasok</span> — читаю одну / какую-то книгу;
          <span class="hu-word">Olvasom a könyvet</span> — читаю конкретную книгу.
          Определённую форму <b>olvasom</b> в этом уроке самостоятельно не образуем.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Nehéz a könyv? — качество без van</h4>
        <table class="conj">
          <tr><th>Вопрос</th><th>Ответ</th><th>Правило</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Nehéz a könyv?" data-speak-lang="hu-HU">Nehéz a könyv?</button></td>
            <td><button class="speak-btn" data-speak-text="Nem túl nehéz." data-speak-lang="hu-HU">Nem túl nehéz.</button></td>
            <td>прилагательное сообщает качество; форма van не ставится</td>
          </tr>
        </table>

        <div class="note">
          Неверно: <s>A könyv nehéz van.</s><br>
          Правильно:
          <span class="hu-word">A könyv nehéz.</span> или в вопросе
          <span class="hu-word">Nehéz a könyv?</span>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Понимание диалога</h4>
        <ol class="tasklist">
          <li>Mit csinál B most?</li>
          <li>Milyen nyelvet tanul?</li>
          <li>Mit olvas?</li>
          <li>Nehéz a könyv?</li>
          <li>Mikor tanul?</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ответы</summary>
          <ol class="tasklist mt-3">
            <li><b>Magyarul tanul, és egy könyvet olvas.</b></li>
            <li><b>Magyarul tanul.</b></li>
            <li><b>Egy könyvet olvas.</b></li>
            <li><b>Nem túl nehéz.</b></li>
            <li><b>Minden este tanul.</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Модель для замены</h4>
        <table class="conj">
          <tr><th>Реплика</th><th>Что можно заменить</th></tr>
          <tr>
            <td><b>Mit csinálsz most?</b></td>
            <td>оставьте вопрос без изменения</td>
          </tr>
          <tr>
            <td><b>Most egy levelet írok.</b></td>
            <td>írok / olvasok / tanulok / főzök / dolgozom</td>
          </tr>
          <tr>
            <td><b>Nehéz?</b></td>
            <td>Jó? Érdekes? Könnyű?</td>
          </tr>
          <tr>
            <td><b>Nem túl nehéz.</b></td>
            <td>Igen, nagyon érdekes. / Nem, elég könnyű.</td>
          </tr>
          <tr>
            <td><b>Minden nap csinálod?</b></td>
            <td>на этом уровне можно заменить на конкретный глагол: Minden nap írsz?</td>
          </tr>
          <tr>
            <td><b>Igen, minden este írok.</b></td>
            <td>утро / день / вечер и нужная форма глагола</td>
          </tr>
        </table>

        <div class="note">
          Для активной практики используйте конкретный глагол:
          <span class="hu-word">Minden nap olvasol?</span>,
          <span class="hu-word">Minden nap főzöl?</span>,
          <span class="hu-word">Minden nap dolgozol?</span>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Собственный диалог</h4>
        <p>Напишите шесть реплик по структуре:</p>
        <ol class="tasklist">
          <li>приветствие и вопрос <b>Mit csinálsz most?</b>;</li>
          <li>ответ с одним или двумя действиями;</li>
          <li>вопрос о предмете или действии;</li>
          <li>ответ с прилагательным или отрицанием;</li>
          <li>вопрос о регулярности: <b>Minden nap...?</b>;</li>
          <li>ответ с <b>minden reggel / délután / este</b>.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Образец второго диалога</summary>
          <p class="mt-3"><b>A:</b> Szia! Mit csinálsz most?</p>
          <p><b>B:</b> Szia! Egy levelet írok.</p>
          <p><b>A:</b> Nehéz magyarul írni?</p>
          <p><b>B:</b> Kicsit nehéz, de sokat tanulok.</p>
          <p><b>A:</b> Minden nap írsz?</p>
          <p><b>B:</b> Nem, csak néha írok.</p>
        </details>
      `,
    },
    {
      id: 11,
      eyebrow: 'УРОК 4 · 11/12 · УПРАЖНЕНИЯ',
      title: 'Gyakorlatok',
      subtitle: 'Итоговая практика настоящего времени',
      type: 'info',
      note: 'Сначала выполните все задания письменно без ключа. Проверяйте не только окончание, но и модель глагола, гармонию гласных, форму te, наличие -ik и тип дополнения.',
      warn: 'В задании с olvas типичная ошибочная форма — olvassz, а не olvas. Olvas — форма ő: «он / она читает». Правильная форма te — olvasol.',
      task: 'Выполните восемь блоков. После проверки исправьте каждую ошибку полным предложением и объясните правило одним предложением.',
      activities: [P1_L4_PRACTICE, P1_L4_ROLEPLAY, P1_L4_WRITING, L4_CP_CONTEXT, L4_WRITING_ACTIONS],
      optionalSpeaking: P1_L4_SPEAKING,
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Проспрягайте szeret</h4>
        <p>Запишите формы для всех шести лиц:</p>
        <table class="conj">
          <tr><th>Лицо</th><th>Форма</th></tr>
          <tr><td>én</td><td>____________</td></tr>
          <tr><td>te</td><td>____________</td></tr>
          <tr><td>ő</td><td>____________</td></tr>
          <tr><td>mi</td><td>____________</td></tr>
          <tr><td>ti</td><td>____________</td></tr>
          <tr><td>ők</td><td>____________</td></tr>
        </table>

        <div class="note">
          Обратите особое внимание на форму <b>ti</b>: основа заканчивается на t, а окончание тоже начинается с t.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Выберите правильную форму te</h4>
        <ol class="tasklist">
          <li><b>olvas:</b> olvassz или olvasol?</li>
          <li><b>néz:</b> nézsz или nézel?</li>
          <li><b>főz:</b> főzsz или főzöl?</li>
          <li><b>edz:</b> edzsz или edzel?</li>
        </ol>
        <p>После каждого ответа укажите, почему используется окончание с гласной.</p>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Формы частотных -ik-глаголов</h4>
        <table class="conj">
          <tr><th>Задание</th><th>Ответ</th></tr>
          <tr><td>én + lakik</td><td>____________</td></tr>
          <tr><td>te + dolgozik</td><td>____________</td></tr>
          <tr><td>ő + dolgozik</td><td>____________</td></tr>
          <tr><td>mi + lakik</td><td>____________</td></tr>
          <tr><td>ők + lakik</td><td>____________</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Переведите на венгерский</h4>
        <ol class="tasklist">
          <li>Мы каждый день учим венгерский.</li>
          <li>Я сейчас читаю одну книгу.</li>
          <li>Ты понимаешь по-венгерски?</li>
          <li>Анна работает в Будапеште.</li>
          <li>Дети играют вместе.</li>
        </ol>

        <div class="note">
          В нейтральном предложении местоимения <b>mi</b> и <b>én</b> обычно не нужны: лицо уже выражено окончанием.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Дополните предложения</h4>
        <ol class="tasklist">
          <li>Mi ott __________. <b>(dolgoz-)</b></li>
          <li>Ti magyarul __________? <b>(tanul-)</b></li>
          <li>Ők nem __________. <b>(olvas-)</b></li>
          <li>Én egy levelet __________. <b>(ír-)</b></li>
          <li>Te mit __________? <b>(főz-)</b></li>
        </ol>

        <div class="warn">
          <span class="hu-word">Mi ott dolgozunk</span> грамматически правильно, но местоимение mi обычно используется для контраста.
          Нейтральнее: <span class="hu-word">Ott dolgozunk.</span>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Сделайте отрицание и вопрос</h4>
        <table class="conj">
          <tr><th>Исходное предложение</th><th>Отрицание</th><th>Общий вопрос</th></tr>
          <tr>
            <td>Magyarul tanulsz.</td>
            <td>________________________</td>
            <td>________________________</td>
          </tr>
          <tr>
            <td>Ma dolgozik.</td>
            <td>________________________</td>
            <td>________________________</td>
          </tr>
          <tr>
            <td>Egy könyvet olvasunk.</td>
            <td>________________________</td>
            <td>________________________</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Нейтральный порядок и контраст</h4>
        <p>Постройте три варианта из элементов <b>én / minden nap / magyarul / tanulok</b>:</p>
        <ol class="tasklist">
          <li>нейтральное сообщение;</li>
          <li>именно каждый день;</li>
          <li>именно я.</li>
        </ol>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Распознайте систему спряжения</h4>
        <p>Укажите: неопределённое или определённое спряжение. Самостоятельно определённые формы пока образовывать не нужно.</p>
        <table class="conj">
          <tr><th>Предложение</th><th>Система</th><th>Почему</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>____________</td>
            <td>________________________</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>____________</td>
            <td>________________________</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>____________</td>
            <td>________________________</td>
          </tr>
        </table>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Полный ключ</summary>

          <h5 class="font-bold mt-4">1. Szeret</h5>
          <p>
            <b>szeretek · szeretsz · szeret · szeretünk · szerettek · szeretnek</b>
          </p>

          <h5 class="font-bold mt-4">2. Форма te</h5>
          <p>
            <b>olvasol · nézel · főzöl · edzel</b>.
            Основы заканчиваются на s, z или dz, поэтому используются варианты -ol/-el/-öl.
          </p>

          <h5 class="font-bold mt-4">3. -ik-глаголы</h5>
          <p>
            <b>lakom · dolgozol · dolgozik · lakunk · laknak</b>
          </p>

          <h5 class="font-bold mt-4">4. Перевод</h5>
          <ol class="tasklist">
            <li><b>Minden nap magyarul tanulunk.</b></li>
            <li><b>Most egy könyvet olvasok.</b></li>
            <li><b>Értesz magyarul?</b></li>
            <li><b>Anna Budapesten dolgozik.</b></li>
            <li><b>A gyerekek együtt játszanak.</b></li>
          </ol>

          <h5 class="font-bold mt-4">5. Дополнение форм</h5>
          <ol class="tasklist">
            <li><b>Mi ott dolgozunk.</b> Нейтрально: <b>Ott dolgozunk.</b></li>
            <li><b>Ti magyarul tanultok?</b></li>
            <li><b>Ők nem olvasnak.</b></li>
            <li><b>Én egy levelet írok.</b></li>
            <li><b>Te mit főzöl?</b></li>
          </ol>

          <h5 class="font-bold mt-4">6. Отрицание и вопрос</h5>
          <ol class="tasklist">
            <li><b>Nem tanulsz magyarul. / Magyarul tanulsz?</b></li>
            <li><b>Ma nem dolgozik. / Ma dolgozik?</b></li>
            <li><b>Nem olvasunk egy könyvet. / Egy könyvet olvasunk?</b></li>
          </ol>

          <h5 class="font-bold mt-4">7. Порядок слов</h5>
          <ol class="tasklist">
            <li>нейтрально: <b>Minden nap magyarul tanulok.</b></li>
            <li>именно каждый день: <b>Minden nap tanulok magyarul.</b></li>
            <li>именно я: <b>Én tanulok magyarul minden nap.</b></li>
          </ol>

          <h5 class="font-bold mt-4">8. Две системы</h5>
          <ol class="tasklist">
            <li><b>Olvasok.</b> — неопределённое: дополнение отсутствует.</li>
            <li><b>Olvasok egy könyvet.</b> — неопределённое: дополнение с egy.</li>
            <li><b>Olvasom a könyvet.</b> — определённое: дополнение с a.</li>
          </ol>
        </details>

        <div class="note">
          <b>Оценивание:</b> 32 основных пункта. 
          28–32 — можно переходить к итогам;
          23–27 — повторите только блоки с ошибками;
          18–22 — снова пройдите слайды 4.2, 4.6 и 4.7;
          меньше 18 — повторите модели спряжения до итогового слайда.
        </div>
      `,
    },
    {
      id: 12,
      eyebrow: 'УРОК 4 · 12/12 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Контрольная карта настоящего времени',
      type: 'info',
      note: 'Итог урока состоит из двух уровней: продуктивно образуем формы обычных не-ik глаголов и используем как готовые модели изученные частотные -ik-глаголы.',
      warn: 'Фраза «в форме ő нет никаких окончаний» верна только для обычных не-ik глаголов: vár, kér, köt, tanul. У -ik-глаголов словарная форма ő заканчивается на -ik: dolgozik, lakik, játszik.',
      task: 'Пройдите семь итоговых блоков и выполните финальную самопроверку. Переходите к уроку 5, если можете объяснить каждую форму, а не только воспроизвести таблицу.',
      activities: [L4_EXIT_CHECK],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Базовая модель обычных не-ik глаголов</h4>
        <p>Для обычного глагола сначала определите гармонию гласных, затем добавьте личное окончание.</p>

        <table class="conj">
          <tr>
            <th>Лицо</th>
            <th>Задние</th>
            <th>Передние неогублённые</th>
            <th>Передние огублённые</th>
          </tr>
          <tr>
            <td><b>én</b></td>
            <td><button class="speak-btn" data-speak-text="várok" data-speak-lang="hu-HU">várok</button></td>
            <td><button class="speak-btn" data-speak-text="kérek" data-speak-lang="hu-HU">kérek</button></td>
            <td><button class="speak-btn" data-speak-text="kötök" data-speak-lang="hu-HU">kötök</button></td>
          </tr>
          <tr>
            <td><b>te</b></td>
            <td><button class="speak-btn" data-speak-text="vársz" data-speak-lang="hu-HU">vársz</button></td>
            <td><button class="speak-btn" data-speak-text="kérsz" data-speak-lang="hu-HU">kérsz</button></td>
            <td><button class="speak-btn" data-speak-text="kötsz" data-speak-lang="hu-HU">kötsz</button></td>
          </tr>
          <tr>
            <td><b>ő</b></td>
            <td><button class="speak-btn" data-speak-text="vár" data-speak-lang="hu-HU">vár</button></td>
            <td><button class="speak-btn" data-speak-text="kér" data-speak-lang="hu-HU">kér</button></td>
            <td><button class="speak-btn" data-speak-text="köt" data-speak-lang="hu-HU">köt</button></td>
          </tr>
          <tr>
            <td><b>mi</b></td>
            <td><button class="speak-btn" data-speak-text="várunk" data-speak-lang="hu-HU">várunk</button></td>
            <td><button class="speak-btn" data-speak-text="kérünk" data-speak-lang="hu-HU">kérünk</button></td>
            <td><button class="speak-btn" data-speak-text="kötünk" data-speak-lang="hu-HU">kötünk</button></td>
          </tr>
          <tr>
            <td><b>ti</b></td>
            <td><button class="speak-btn" data-speak-text="vártok" data-speak-lang="hu-HU">vártok</button></td>
            <td><button class="speak-btn" data-speak-text="kértek" data-speak-lang="hu-HU">kértek</button></td>
            <td><button class="speak-btn" data-speak-text="köttök" data-speak-lang="hu-HU">köttök</button></td>
          </tr>
          <tr>
            <td><b>ők</b></td>
            <td><button class="speak-btn" data-speak-text="várnak" data-speak-lang="hu-HU">várnak</button></td>
            <td><button class="speak-btn" data-speak-text="kérnek" data-speak-lang="hu-HU">kérnek</button></td>
            <td><button class="speak-btn" data-speak-text="kötnek" data-speak-lang="hu-HU">kötnek</button></td>
          </tr>
        </table>

        <div class="note">
          Запоминайте окончания внутри целых форм. Не произносите их как названия отдельных латинских букв.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Форма te: две регулярные модели</h4>
        <table class="conj">
          <tr><th>Конец основы</th><th>Модель</th><th>Примеры</th></tr>
          <tr>
            <td>обычная согласная</td>
            <td>форма с -sz</td>
            <td>
              <button class="speak-btn" data-speak-text="vársz, kérsz, kötsz, tanulsz" data-speak-lang="hu-HU">
                vársz · kérsz · kötsz · tanulsz
              </button>
            </td>
          </tr>
          <tr>
            <td>s, sz, z или dz</td>
            <td>-ol / -el / -öl</td>
            <td>
              <button class="speak-btn" data-speak-text="olvasol, nézel, főzöl, edzel" data-speak-lang="hu-HU">
                olvasol · nézel · főzöl · edzel
              </button>
            </td>
          </tr>
        </table>

        <div class="warn">
          Неправильно:
          <s>olvassz</s>, <s>nézsz</s>, <s>főzsz</s>, <s>edzsz</s>.
          Правильно:
          <span class="hu-word">olvasol, nézel, főzöl, edzel</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Обычная форма ő и -ik-глаголы</h4>
        <table class="conj">
          <tr><th>Тип</th><th>Én</th><th>Te</th><th>Ő / словарная форма</th></tr>
          <tr>
            <td>обычный не-ik</td>
            <td><button class="speak-btn" data-speak-text="tanulok" data-speak-lang="hu-HU">tanulok</button></td>
            <td><button class="speak-btn" data-speak-text="tanulsz" data-speak-lang="hu-HU">tanulsz</button></td>
            <td><button class="speak-btn" data-speak-text="tanul" data-speak-lang="hu-HU">tanul</button></td>
          </tr>
          <tr>
            <td>частотный -ik</td>
            <td><button class="speak-btn" data-speak-text="dolgozom" data-speak-lang="hu-HU">dolgozom</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozol" data-speak-lang="hu-HU">dolgozol</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozik" data-speak-lang="hu-HU">dolgozik</button></td>
          </tr>
          <tr>
            <td>частотный -ik</td>
            <td><button class="speak-btn" data-speak-text="lakom" data-speak-lang="hu-HU">lakom</button></td>
            <td><button class="speak-btn" data-speak-text="laksz" data-speak-lang="hu-HU">laksz</button></td>
            <td><button class="speak-btn" data-speak-text="lakik" data-speak-lang="hu-HU">lakik</button></td>
          </tr>
          <tr>
            <td>частотный -ik</td>
            <td><button class="speak-btn" data-speak-text="játszom" data-speak-lang="hu-HU">játszom</button></td>
            <td><button class="speak-btn" data-speak-text="játszol" data-speak-lang="hu-HU">játszol</button></td>
            <td><button class="speak-btn" data-speak-text="játszik" data-speak-lang="hu-HU">játszik</button></td>
          </tr>
        </table>

        <div class="note">
          Урок 14 расширяет практику распорядка дня и вводит новые частотные формы:
          <span class="hu-word">mosakodom, felöltözöm, lefekszem, eszem</span>.
          Это не означает, что существует один универсальный алгоритм для всех -ik-глаголов. Новые формы проверяйте по учебнику или словарю.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Неопределённое и определённое спряжение</h4>
        <table class="conj">
          <tr><th>Предложение</th><th>Система</th><th>Почему</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok." data-speak-lang="hu-HU">Olvasok.</button></td>
            <td>неопределённое</td>
            <td>прямое дополнение не названо</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasok egy könyvet." data-speak-lang="hu-HU">Olvasok egy könyvet.</button></td>
            <td>неопределённое</td>
            <td>дополнение с egy</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Olvasom a könyvet." data-speak-lang="hu-HU">Olvasom a könyvet.</button></td>
            <td>определённое</td>
            <td>дополнение с определённым артиклем</td>
          </tr>
        </table>

        <div class="warn">
          В уроке 4 продуктивно изучается неопределённое спряжение.
          Определённые формы здесь нужны только для узнавания и сравнения.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Утверждение, отрицание и вопрос</h4>
        <table class="conj">
          <tr><th>Функция</th><th>Пример</th><th>Правило</th></tr>
          <tr>
            <td>утверждение</td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulok." data-speak-lang="hu-HU">Magyarul tanulok.</button></td>
            <td>местоимение én не требуется</td>
          </tr>
          <tr>
            <td>простое отрицание</td>
            <td><button class="speak-btn" data-speak-text="Nem olvasok." data-speak-lang="hu-HU">Nem olvasok.</button></td>
            <td>nem стоит перед спрягаемым глаголом</td>
          </tr>
          <tr>
            <td>общий вопрос</td>
            <td><button class="speak-btn" data-speak-text="Magyarul tanulsz?" data-speak-lang="hu-HU">Magyarul tanulsz?</button></td>
            <td>порядок слов часто сохраняется; вопрос выражается интонацией</td>
          </tr>
          <tr>
            <td>вопросительное слово</td>
            <td><button class="speak-btn" data-speak-text="Mit olvasol?" data-speak-lang="hu-HU">Mit olvasol?</button></td>
            <td>вопросительное слово обычно стоит перед глаголом</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Нейтральный порядок и фокус</h4>
        <table class="conj">
          <tr><th>Задача</th><th>Пример</th></tr>
          <tr>
            <td>нейтральное сообщение</td>
            <td><button class="speak-btn" data-speak-text="Minden nap magyarul tanulok." data-speak-lang="hu-HU">Minden nap magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>выделить время</td>
            <td><button class="speak-btn" data-speak-text="Minden nap tanulok magyarul." data-speak-lang="hu-HU"><b>Minden nap</b> tanulok magyarul.</button></td>
          </tr>
          <tr>
            <td>выделить действующее лицо</td>
            <td><button class="speak-btn" data-speak-text="Én tanulok magyarul minden nap." data-speak-lang="hu-HU"><b>Én</b> tanulok magyarul minden nap.</button></td>
          </tr>
        </table>

        <div class="note">
          Не сводите венгерский порядок слов к жёсткой формуле S–V–O.
          На уровне A0 сначала стройте нейтральное сообщение, а контраст используйте только при реальном противопоставлении.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Проверка готовности</h4>
        <p>Перед переходом к уроку 5 вы должны уметь:</p>
        <ul class="tick">
          <li>проспрягать обычный глагол заднего и переднего ряда;</li>
          <li>образовать форму te после s, sz, z и dz;</li>
          <li>отличить обычную форму ő от словарной формы на -ik;</li>
          <li>использовать готовые формы dolgozom, dolgozol, dolgozik и lakom, laksz, lakik;</li>
          <li>составить утверждение, отрицание, общий вопрос и вопрос с вопросительным словом;</li>
          <li>распознать неопределённое и определённое спряжение в простых примерах;</li>
          <li>описать три–пять своих регулярных действий.</li>
        </ul>

        <details class="note mt-5">
          <summary class="font-bold cursor-pointer">Финальная самопроверка</summary>
          <ol class="tasklist mt-3">
            <li>я учусь → <b>tanulok</b></li>
            <li>ты читаешь → <b>olvasol</b></li>
            <li>она работает → <b>dolgozik</b></li>
            <li>мы говорим по-венгерски → <b>Magyarul beszélünk.</b></li>
            <li>они не читают → <b>Nem olvasnak.</b></li>
            <li>ты сегодня работаешь? → <b>Ma dolgozol?</b></li>
            <li>где ты живёшь? → <b>Hol laksz?</b></li>
            <li>я читаю одну книгу → <b>Egy könyvet olvasok.</b></li>
          </ol>
        </details>

        <div class="note">
          <b>Домашнее задание:</b>
          проспрягайте три обычных глагола —
          <span class="hu-word">tanul, ír, beszél</span>.
          Для двух -ik-глаголов —
          <span class="hu-word">dolgozik, lakik</span> —
          запишите формы én, te, ő, mi, ti, ők по изученному ключу.
          Затем составьте пять предложений: утверждение, отрицание, общий вопрос, вопрос с <b>hol</b> и предложение с <b>minden nap</b>.
        </div>

        <div class="note">
          <b>Следующий урок:</b> числа, календарь, время и дни недели. Вы научитесь говорить, когда происходит действие.
        </div>
      `,
    }
  ],
  vocabulary: [
    { id: 'l4_v1', hu: 'tanul', ru: 'учиться / изучать', category: 'Core Verbs', exampleSentence: 'Magyarul tanulok.', grammaticalTag: 'alanyi-ragozas-jelen', relatedLessonId: 4 },
    { id: 'l4_v2', hu: 'olvas', ru: 'читать', category: 'Core Verbs', exampleSentence: 'Péter olvas.' },
    { id: 'l4_v3', hu: 'ír', ru: 'писать', category: 'Core Verbs', exampleSentence: 'Anna ír.' },
    { id: 'l4_v4', hu: 'beszél', ru: 'говорить', category: 'Core Verbs', exampleSentence: 'Magyarul beszélünk.' },
    { id: 'l4_v5', hu: 'dolgozik', ru: 'работать', category: '-ik · знакомство', exampleSentence: 'Péter dolgozik.', baseWord: 'dolgozik' },
    { id: 'l4_v6', hu: 'lakik', ru: 'жить / проживать', category: '-ik · знакомство', exampleSentence: 'Budapesten lakom.', baseWord: 'lakik' },
    { id: 'l4_v7', hu: 'nem', ru: 'не (отрицательная частица)', category: 'Functional Core', exampleSentence: 'Nem tanulok.' },
  ],
  quiz: [
    {
      id: 401,
      question: 'Какая форма обычного глагола "vár" соответствует 3-му лицу единственного числа (ő)?',
      options: ['várt', 'vársz', 'vár', 'várik'],
      correctIndex: 2,
      explanation: 'У изучаемого обычного глагола форма ő совпадает с основой: ő vár. Частотные -ik глаголы рассматриваются отдельно как предварительное знакомство.'
    },
    {
      id: 402,
      question: 'Какое окончание используется для 1-го лица единственного числа (én) у глаголов с задними гласными (например, vár)?',
      options: ['-ok', '-ek', '-ök', '-om'],
      correctIndex: 0,
      explanation: 'Для задних гласных (a, o, u) используется окончание -ok: vár + ok = várok.'
    },
    {
      id: 403,
      question: 'Как правильно сказать "ты читаешь" от глагола "olvas"?',
      options: ['olvassz', 'olvasol', 'olvasa', 'olvas'],
      correctIndex: 1,
      explanation: 'Основа оканчивается на шипящий "s", поэтому вместо -sz используется -ol: olvas + ol = olvasol.'
    },
    {
      id: 404,
      question: 'Какая форма глагола "lakik" (жить) соответствует 1-му лицу единственного числа (én)?',
      options: ['lakok', 'lakom', 'lakik', 'laksz'],
      correctIndex: 1,
      explanation: 'В изучаемом примере правильно: én lakom. Это предварительное знакомство, а не универсальная формула для всех -ik глаголов; например, eszik → eszem.'
    },
    {
      id: 405,
      question: 'Что из перечисленного НЕ является окончанием неопределенного спряжения?',
      options: ['-ok', '-sz', '-unk', '-ja'],
      correctIndex: 3,
      explanation: 'Окончание "-ja" используется в определённом спряжении (tárgyas ragozás). В неопределённом спряжении таких окончаний нет.'
    },
    {
      id: 406,
      question: 'Как правильно сделать отрицательным предложение «Magyarul tanulunk»?',
      options: ['Magyarul nem tanulunk.', 'Magyarul tanulunk nem.', 'Nem magyarul tanulunkok.', 'Magyarul nincs tanulunk.'],
      correctIndex: 0,
      explanation: 'Для простого отрицания nem ставится перед спрягаемым глаголом: Magyarul nem tanulunk.'
    }
  ],
  objectives: [
    { id: 'l4_conjugate-present', text: 'Спрягать обычные не-ik глаголы в настоящем времени и использовать изученные формы частотных -ik-глаголов.', skills: ['grammar', 'writing'] },
    { id: 'l4_use-verbs-context', text: 'Употреблять изученные глаголы (olvas, ír, beszél, tanul) в простых предложениях.', skills: ['speaking', 'writing'] },
    { id: 'l4_recognize-forms', text: 'Распознавать формы настоящего времени на слух и в тексте.', skills: ['listening', 'reading'] },
    { id: 'l4_build-sentences', text: 'Составлять простые утвердительные и отрицательные предложения с nem.', skills: ['writing', 'grammar', 'speaking'] },
    { id: 'l4_ask-questions', text: 'Строить общие вопросы с помощью интонации и порядка слов.', skills: ['speaking', 'grammar'] },
  ],
};
