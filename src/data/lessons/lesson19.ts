import { Lesson, LessonActivity } from '../../types';

const cp = (
  id: string,
  title: string,
  passCount: number,
  exercises: Extract<LessonActivity, { kind: 'controlledPractice' }>['exercises'],
): LessonActivity => ({ kind: 'controlledPractice', id, title, passCount, exercises });

const L19_CP_FUTURE_FORMS = cp('l19-cp-future-forms', 'Будущее с fog + инфинитив', 8, [
  { kind: 'textInput', id: 'l19-future-1', prompt: 'én + tanulni, holnap → «Завтра я буду учиться.»', accept: ['Holnap tanulni fogok', 'Holnap tanulni fogok.'] },
  { kind: 'textInput', id: 'l19-future-2', prompt: 'te + dolgozni, holnap → «Завтра ты будешь работать.»', accept: ['Holnap dolgozni fogsz', 'Holnap dolgozni fogsz.'] },
  { kind: 'textInput', id: 'l19-future-3', prompt: 'ő + utazni, jövő héten → «На следующей неделе он/она будет путешествовать.»', accept: ['Jövő héten utazni fog', 'Jövő héten utazni fog.'] },
  { kind: 'textInput', id: 'l19-future-4', prompt: 'mi + főzni, holnap → «Завтра мы будем готовить.»', accept: ['Holnap főzni fogunk', 'Holnap főzni fogunk.'] },
  { kind: 'textInput', id: 'l19-future-5', prompt: 'ti + tanulni, jövő héten → «На следующей неделе вы будете учиться.»', accept: ['Jövő héten tanulni fogtok', 'Jövő héten tanulni fogtok.'] },
  { kind: 'textInput', id: 'l19-future-6', prompt: 'ők + dolgozni, holnapután → «Послезавтра они будут работать.»', accept: ['Holnapután dolgozni fognak', 'Holnapután dolgozni fognak.'] },
  { kind: 'textInput', id: 'l19-future-7', prompt: 'én + nem + dolgozni, holnap → «Завтра я не буду работать.»', accept: ['Holnap nem fogok dolgozni', 'Holnap nem fogok dolgozni.'] },
  { kind: 'textInput', id: 'l19-future-8', prompt: 'te + nem + tanulni, holnap → «Завтра ты не будешь учиться.»', accept: ['Holnap nem fogsz tanulni', 'Holnap nem fogsz tanulni.'] },
  { kind: 'textInput', id: 'l19-future-9', prompt: 'én + olvasni, jövő héten → «На следующей неделе я буду читать.»', accept: ['Jövő héten olvasni fogok', 'Jövő héten olvasni fogok.'] },
  { kind: 'textInput', id: 'l19-future-10', prompt: 'ők + utazni, jövő hónapban → «В следующем месяце они будут путешествовать.»', accept: ['Jövő hónapban utazni fognak', 'Jövő hónapban utazni fognak.'] },
]);

const L19_CP_FOG_CONJUGATION = cp('l19-cp-fog-conjugation', 'Неопределённая парадигма fog', 6, [
  { kind: 'fillGap', id: 'l19-fog-1', prompt: 'én: Holnap tanulni ___.', accept: ['fogok'] },
  { kind: 'fillGap', id: 'l19-fog-2', prompt: 'te: Holnap dolgozni ___.', accept: ['fogsz'] },
  { kind: 'fillGap', id: 'l19-fog-3', prompt: 'ő: Holnap utazni ___.', accept: ['fog'] },
  { kind: 'fillGap', id: 'l19-fog-4', prompt: 'mi: Holnap főzni ___.', accept: ['fogunk'] },
  { kind: 'fillGap', id: 'l19-fog-5', prompt: 'ti: Holnap tanulni ___.', accept: ['fogtok'] },
  { kind: 'fillGap', id: 'l19-fog-6', prompt: 'ők: Holnap dolgozni ___.', accept: ['fognak'] },
]);

const L19_CP_PRESENT_VS_FOG = cp('l19-cp-present-vs-fog', 'План: настоящее или fog-будущее?', 5, [
  { kind: 'singleChoice', id: 'l19-plan-form-1', prompt: 'Holnap Budapestre megyek. Какая грамматическая форма выражает будущий план?', options: ['Настоящее время с будущим значением', 'Прошедшее время', 'fog + инфинитив'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l19-plan-form-2', prompt: 'Holnap Budapestre fogok menni. Какая форма используется?', options: ['Настоящее время с будущим значением', 'Прошедшее время', 'fog + инфинитив'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l19-plan-form-3', prompt: 'Jövő héten dolgozom. Какая грамматическая форма выражает будущий план?', options: ['Настоящее время с будущим значением', 'Прошедшее время', 'fog + инфинитив'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l19-plan-form-4', prompt: 'Jövő héten dolgozni fogok. Какая форма используется?', options: ['Настоящее время с будущим значением', 'Прошедшее время', 'fog + инфинитив'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l19-plan-form-5', prompt: 'Szombaton találkozunk. Какая грамматическая форма выражает договорённый будущий план?', options: ['Настоящее время с будущим значением', 'Прошедшее время', 'fog + инфинитив'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l19-plan-form-6', prompt: 'Szombaton találkozni fogunk. Какая форма используется?', options: ['Настоящее время с будущим значением', 'Прошедшее время', 'fog + инфинитив'], correctIndex: 2 },
]);

const L19_CP_TENSE_READING = cp('l19-cp-tense-reading-sort', 'Чтение: настоящее, прошлое или fog-будущее?', 8, [
  { kind: 'singleChoice', id: 'l19-tense-1', prompt: 'Most magyarul tanulok.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l19-tense-2', prompt: 'Ma otthon dolgozom.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l19-tense-3', prompt: 'Péter most a könyvtárban van.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l19-tense-4', prompt: 'Tegnap magyarul tanultam.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l19-tense-5', prompt: 'A múlt héten dolgoztam.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l19-tense-6', prompt: 'Tegnap Anna otthon volt.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l19-tense-7', prompt: 'Holnap tanulni fogok.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l19-tense-8', prompt: 'Jövő héten dolgozni fogunk.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l19-tense-9', prompt: 'Hamarosan találkozni fognak.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l19-tense-10', prompt: 'Holnap nem fogsz dolgozni.', options: ['jelen idő', 'múlt idő', 'fog-jövő'], correctIndex: 2 },
]);

const L19_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l19-listening-future',
  title: 'Аудирование: три времени и планы',
  assetId: 'l19_listening_future',
  audioStatus: 'published',
  passCount: 4,
  transcript: 'Tegnap Ádám otthon dolgozott. Ma a könyvtárban tanul. Holnap Budapestre fog utazni. A hétvégén pihenni fog. Szerinte vasárnap esni fog. Jövő héten a barátai is dolgozni fognak.',
  questions: [
    { id: 'l19-list-1', question: 'Melyik mondat beszél a múltról?', options: ['Tegnap Ádám otthon dolgozott.', 'Ma a könyvtárban tanul.', 'Holnap Budapestre fog utazni.'], correctIndex: 0 },
    { id: 'l19-list-2', question: 'Melyik mondat van jelen időben?', options: ['A hétvégén pihenni fog.', 'Ma a könyvtárban tanul.', 'Tegnap Ádám otthon dolgozott.'], correctIndex: 1 },
    { id: 'l19-list-3', question: 'Mit fog Ádám csinálni holnap?', options: ['Otthon dolgozik.', 'Budapestre fog utazni.', 'A könyvtárban tanul.'], correctIndex: 1 },
    { id: 'l19-list-4', question: 'Mit fog Ádám csinálni a hétvégén?', options: ['Pihenni fog.', 'Dolgozni fog.', 'Tanulni fog.'], correctIndex: 0 },
    { id: 'l19-list-5', question: 'Mi a jóslat vasárnapra?', options: ['Havazni fog.', 'Esni fog.', 'Sütni fog a nap.'], correctIndex: 1 },
  ],
};

const L19_WRITING: LessonActivity = {
  kind: 'writing',
  id: 'l19-writing-plans-predictions',
  title: 'Письмо: планы и прогнозы',
  prompt: 'Напиши 6 коротких предложений: 3 реальных плана и 3 простых прогноза. В планах используй минимум два маркера времени; минимум два плана должны быть с fog + инфинитив, один можно выразить настоящим временем с будущим значением. Прогнозы начни с szerintem и используй конструкцию с fog и инфинитивом. Открытый текст требует проверки.',
  modelAnswer: [
    'Holnap dolgozni fogok.',
    'Jövő héten találkozni fogok a barátaimmal.',
    'Szombaton Budapestre megyek.',
    'Szerintem holnap esni fog.',
    'Szerintem Anna tanulni fog.',
    'Szerintem Péter jövő hónapban utazni fog.',
  ],
  rubric: ['6 предложений', '3 плана', 'минимум 2 плана с fog + инфинитив', 'минимум 2 маркера будущего времени', '3 прогноза с szerintem и конструкцией fog + инфинитив'],
};

const L19_RECORDING: LessonActivity = {
  kind: 'recording',
  id: 'l19-recording-plans-predictions',
  title: 'Говорение: планы и прогнозы',
  instructions: 'Запиши 6 коротких фраз: 3 плана и 3 прогноза. В планах используй минимум два маркера времени и минимум две конструкции fog + инфинитив. В прогнозах используй szerintem и конструкцию с fog и инфинитивом. Запись требует проверки языковой точности.',
  targetText: 'Holnap dolgozni fogok. Jövő héten találkozni fogok a barátaimmal. Szombaton Budapestre megyek. Szerintem holnap esni fog. Szerintem Anna tanulni fog. Szerintem Péter jövő hónapban utazni fog.',
  targetTranslation: 'Завтра я буду работать. На следующей неделе я встречусь с друзьями. В субботу я еду в Будапешт. Думаю, завтра будет дождь. Думаю, Анна будет учиться. Думаю, в следующем месяце Петер будет путешествовать.',
  rubric: ['3 плана', 'минимум 2 fog + инфинитив в планах', 'минимум 2 маркера времени', '3 прогноза', 'szerintem + конструкция с fog и инфинитивом'],
};

const L19_EXIT: LessonActivity = {
  kind: 'exitCheck',
  id: 'l19-exit-check',
  title: 'Проверка целей урока',
  checks: [
    { objectiveId: 'l19_form-future', activityId: 'l19-cp-future-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l19_conjugate-fog', activityId: 'l19-cp-fog-conjugation', evidenceKind: 'grammar' },
    { objectiveId: 'l19_use-future-plans', activityId: 'l19-writing-plans-predictions', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l19-recording-plans-predictions', evidenceKind: 'speaking' }] },
    { objectiveId: 'l19_distinguish-tenses', activityId: 'l19-cp-tense-reading-sort', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l19-listening-future', evidenceKind: 'listening' }] },
    { objectiveId: 'l19_make-predictions', activityId: 'l19-writing-plans-predictions', evidenceKind: 'writing', evidenceComponents: [{ activityId: 'l19-recording-plans-predictions', evidenceKind: 'speaking' }] },
  ],
};

export const LESSON_19: Lesson = {
  id: 19,
  number: 19,
  level: 'A2',
  title: 'Урок 19 · A jövő idő',
  subtitle: 'Будущее с fog + инфинитив и планы',
  description: 'Будущее с fog + инфинитив, неопределённая парадигма fog, отрицание, настоящее время для будущих планов, знакомство с определёнными формами, планы, прогнозы и различение времён.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 19 · 1/11 · ЛИНИЯ ВРЕМЕНИ',
      title: 'Tegnap — ma — holnap',
      subtitle: 'Связываем знакомое прошлое и настоящее с будущим',
      body: `<p><b>Tegnap dolgoztam.</b> — Вчера я работал. Это знакомая модель прошлого из L13.</p><p><b>Ma dolgozom.</b> — Сегодня я работаю. Это настоящее время.</p><p><b>Holnap dolgozni fogok.</b> — Завтра я буду работать. В L19 добавляем продуктивную конструкцию будущего <b>fog + инфинитив</b>.</p><div class="note">L19 не переучивает прошедшее время полностью: здесь оно нужно для контраста трёх временных зон. Полная систематизация прошедшего будет в L20.</div>`,
    },
    {
      id: 2,
      eyebrow: 'УРОК 19 · 2/11 · FOG + ИНФИНИТИВ',
      title: 'Dolgozni fogok',
      subtitle: 'Базовая конструкция будущего',
      activities: [L19_CP_FUTURE_FORMS],
      body: `<p>Для явного будущего часто используется <b>инфинитив + спрягаемая форма fog</b>: <b>tanulni fogok</b>, <b>dolgozni fogsz</b>, <b>utazni fog</b>.</p><p>Удобная нейтральная модель для L19: <b>маркер времени + инфинитив + fog-форма</b>: <b>Holnap tanulni fogok.</b></p><div class="note">Венгерский порядок слов зависит от фокуса, поэтому не считай другой порядок автоматически ошибочным. В контролируемых упражнениях L19 используем одну нейтральную модель, чтобы сначала закрепить саму конструкцию.</div><div class="note">Инфинитивы опираются на L18: <b>tanulni, dolgozni, utazni, főzni, olvasni</b>. Из L17 уже знакомо <b>Holnap napos idő lesz.</b> Форма <b>lesz</b> — частотная будущая форма <b>van / lenni</b>; в L19 держим её как знакомую отдельную форму, а продуктивно тренируем <b>fog + инфинитив</b>.</div>`,
    },
    {
      id: 3,
      eyebrow: 'УРОК 19 · 3/11 · СПРЯЖЕНИЕ FOG',
      title: 'fogok, fogsz, fog...',
      subtitle: 'Продуктивно: неопределённая парадигма',
      activities: [L19_CP_FOG_CONJUGATION],
      body: `<table class="conj"><tr><th>Лицо</th><th>Форма</th><th>Пример</th></tr><tr><td>én</td><td><b>fogok</b></td><td>tanulni fogok</td></tr><tr><td>te</td><td><b>fogsz</b></td><td>dolgozni fogsz</td></tr><tr><td>ő</td><td><b>fog</b></td><td>utazni fog</td></tr><tr><td>mi</td><td><b>fogunk</b></td><td>főzni fogunk</td></tr><tr><td>ti</td><td><b>fogtok</b></td><td>tanulni fogtok</td></tr><tr><td>ők</td><td><b>fognak</b></td><td>dolgozni fognak</td></tr></table><div class="note"><b>Главное в L19:</b> эти шесть неопределённых форм нужно уметь образовать. С определёнными формами fog познакомимся на следующем слайде.</div>`,
    },
    {
      id: 4,
      eyebrow: 'УРОК 19 · 4/11 · ЗНАКОМСТВО С ОПРЕДЕЛЁННЫМИ ФОРМАМИ',
      title: 'fogok или fogom?',
      subtitle: 'Пока учимся узнавать контраст',
      body: `<p>Знакомый контраст объекта влияет и на форму <b>fog</b>. Сравни:</p><p><b>Olvasni fogok egy könyvet.</b> — Я буду читать одну / какую-то книгу.</p><p><b>El fogom olvasni a könyvet.</b> — Я прочитаю эту / определённую книгу.</p><p>Можно встретить формы <b>fogom, fogod, fogja, fogjuk, fogjátok, fogják</b>. Они принадлежат определённому спряжению.</p><div class="warn"><b>Граница L19:</b> здесь достаточно узнавать этот контраст и форму <b>fogom</b> в знакомом контексте. Полное продуктивное владение системой определённого/неопределённого спряжения не является условием прохождения L19.</div>`,
    },
    {
      id: 5,
      eyebrow: 'УРОК 19 · 5/11 · ОТРИЦАНИЕ И ВОПРОС',
      title: 'Nem fogok... Dolgozni fogsz?',
      subtitle: 'Два частотных шаблона',
      body: `<p>В отрицании <b>nem</b> ставим перед спрягаемой формой <b>fog</b>: <b>Holnap nem fogok dolgozni.</b> — Завтра я не буду работать.</p><p>В простом вопросе можно сохранить знакомую структуру и вопросительную интонацию: <b>Holnap dolgozni fogsz?</b> — Ты завтра будешь работать?</p><p>Короткий ответ: <b>Igen, fogok.</b> / <b>Nem, nem fogok.</b></p><div class="note">В L19 контролируем утверждение, отрицание и базовый вопрос; отдельную теорию фокуса и всех вариантов порядка слов здесь не вводим.</div>`,
    },
    {
      id: 6,
      eyebrow: 'УРОК 19 · 6/11 · ПЛАНЫ',
      title: 'Holnap megyek / Holnap menni fogok',
      subtitle: 'Настоящая форма тоже может говорить о будущем',
      activities: [L19_CP_PRESENT_VS_FOG],
      body: `<p>С ясным будущим маркером венгерское настоящее время часто описывает запланированное будущее:</p><p><b>Holnap Budapestre megyek.</b> — Завтра я еду в Будапешт.</p><p>Можно явно использовать fog-будущее: <b>Holnap Budapestre fogok menni.</b> — Завтра я поеду / буду ехать в Будапешт.</p><div class="note">Обе конструкции могут обозначать реальное будущее. Не выводи из одной только формы жёсткое правило «fog = неуверенность» или «настоящее = полная уверенность»: выбор зависит от контекста, фокуса и речевой ситуации.</div>`,
    },
    {
      id: 7,
      eyebrow: 'УРОК 19 · 7/11 · МАРКЕРЫ И ПРОГНОЗ',
      title: 'Holnapután, jövő héten, szerintem...',
      subtitle: 'Когда? И что, по-моему, произойдёт?',
      body: `<div class="grid2"><div><p><b>holnap</b> — завтра</p><p><b>holnapután</b> — послезавтра</p><p><b>jövő héten</b> — на следующей неделе</p></div><div><p><b>jövő hónapban</b> — в следующем месяце</p><p><b>jövőre</b> — в следующем году</p><p><b>hamarosan</b> — скоро (дополнительно)</p></div></div><p>Для простого прогноза используй готовый вводный блок <b>szerintem</b> — «по-моему / я думаю»:</p><p><b>Szerintem holnap esni fog.</b> — Думаю, завтра будет дождь.</p><p><b>Szerintem Anna tanulni fog.</b> — Думаю, Анна будет учиться.</p><div class="note">В L19 прогнозы строим через знакомый инфинитив и спрягаемую форму fog; дополнительных моделей будущего здесь не вводим.</div>`,
    },
    {
      id: 8,
      eyebrow: 'УРОК 19 · 8/11 · ЧТЕНИЕ И РАЗЛИЧЕНИЕ ВРЕМЁН',
      title: 'Jelen, múlt vagy fog-jövő?',
      subtitle: 'Определяем грамматическую форму по тексту',
      activities: [L19_CP_TENSE_READING],
      body: `<p>Смотри одновременно на форму глагола и на маркер времени:</p><ul class="tick"><li><b>Most tanulok.</b> → jelen idő</li><li><b>Tegnap tanultam.</b> → múlt idő</li><li><b>Holnap tanulni fogok.</b> → fog-jövő</li></ul><div class="note">Отдельный случай <b>Holnap tanulok</b> уже разобран на слайде 6: грамматически это настоящее время, хотя по смыслу речь идёт о будущем плане.</div>`,
    },
    {
      id: 9,
      eyebrow: 'УРОК 19 · 9/11 · АУДИРОВАНИЕ',
      title: 'Mikor történik?',
      subtitle: 'Прошлое, настоящее, планы и прогноз на слух',
      activities: [L19_LISTENING],
      body: `<p>Прослушай короткий рассказ: одно событие произошло вчера, одно происходит сегодня, остальные относятся к будущему.</p>`,
    },
    {
      id: 10,
      eyebrow: 'УРОК 19 · 10/11 · ПИСЬМО И ГОВОРЕНИЕ',
      title: 'Tervek és jóslatok',
      subtitle: 'Три плана и три простых прогноза',
      activities: [L19_WRITING, L19_RECORDING],
      body: `<p>Теперь используем будущее не только в таблице. Сначала сформулируй реальные планы, затем простые предположения о будущем.</p><p>Опора для плана: <b>Jövő héten ... fogok.</b> / <b>Szombaton ... megyek.</b></p><p>Опора для прогноза: <b>Szerintem + инфинитив + fog.</b></p><div class="note">После выполнения перечитай и прослушай ответы: проверь маркеры времени и формы fog.</div>`,
    },
    {
      id: 11,
      eyebrow: 'УРОК 19 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что должно остаться после L19',
      activities: [L19_EXIT],
      body: `<ul class="tick"><li>Явное будущее: <b>инфинитив + fog</b>.</li><li>Основная неопределённая парадигма: <b>fogok, fogsz, fog, fogunk, fogtok, fognak</b>.</li><li>Отрицание: <b>nem</b> перед fog-формой.</li><li>Настоящее время с будущим маркером тоже может выражать план.</li><li><b>szerintem</b> + конструкция с <b>fog</b> даёт простую модель прогноза.</li><li>Определённые формы <b>fogom...</b> пока достаточно узнавать.</li></ul><div class="note">L20 продолжит временную систему: там систематизируем прошедшее время и оба типа спряжения.</div>`,
    },
  ],
  vocabulary: [
    { id: 'l19_v1', hu: 'holnapután', ru: 'послезавтра', category: 'Время', exampleSentence: 'Holnapután dolgozni fogok.' },
    { id: 'l19_v2', hu: 'jövő héten', ru: 'на следующей неделе', category: 'Время', exampleSentence: 'Jövő héten találkozni fogunk.' },
    { id: 'l19_v3', hu: 'jövő hónapban', ru: 'в следующем месяце', category: 'Время', exampleSentence: 'Jövő hónapban utazni fogok.' },
    { id: 'l19_v4', hu: 'jövőre', ru: 'в следующем году', category: 'Время', exampleSentence: 'Jövőre többet fogok tanulni.' },
    { id: 'l19_v5', hu: 'szerintem', ru: 'по-моему; я думаю', category: 'Прогноз', exampleSentence: 'Szerintem holnap esni fog.' },
  ],
  quiz: [
    {
      id: 1901,
      question: 'Какое предложение использует изученную конструкцию будущего fog + инфинитив?',
      options: ['Holnap tanulni fogok.', 'Tegnap tanultam.', 'Most tanulok.', 'Holnap tanultam.'],
      correctIndex: 0,
      explanation: 'В L19 явное будущее строим как инфинитив + спрягаемая форма fog: tanulni fogok.',
    },
    {
      id: 1902,
      question: 'Какая неопределённая форма fog нужна для te?',
      options: ['fogok', 'fogsz', 'fog', 'fogtok'],
      correctIndex: 1,
      explanation: 'В продуктивной неопределённой парадигме L19: én fogok, te fogsz, ő fog.',
    },
    {
      id: 1903,
      question: 'Как нейтрально сказать «Завтра я не буду работать» в модели L19?',
      options: ['Holnap nem fogok dolgozni.', 'Holnap fogok nem dolgozni.', 'Tegnap nem fogok dolgozni.', 'Holnap nem dolgoztam.'],
      correctIndex: 0,
      explanation: 'Nem ставится перед спрягаемой fog-формой: Holnap nem fogok dolgozni.',
    },
    {
      id: 1904,
      question: 'Что означает holnapután?',
      options: ['вчера', 'завтра', 'послезавтра', 'на следующей неделе'],
      correctIndex: 2,
      explanation: 'Holnapután означает «послезавтра».',
    },
    {
      id: 1905,
      question: 'Что верно о предложении «Holnap Budapestre megyek»?',
      options: ['Форма настоящего времени может выражать будущий план благодаря контексту holnap.', 'Это прошедшее время.', 'Без fog предложение всегда неграмматично.', 'Форма обязательно означает неуверенность.'],
      correctIndex: 0,
      explanation: 'Венгерское настоящее время с ясным будущим контекстом часто выражает запланированное будущее.',
    },
    {
      id: 1906,
      question: 'Какой вариант соответствует изученной модели простого прогноза?',
      options: ['Szerintem holnap esni fog.', 'Szerintem tegnap esni fog.', 'Szerintem holnap esett fog.', 'Szerintem holnap fog esett.'],
      correctIndex: 0,
      explanation: 'Для простого прогноза L19 использует szerintem + будущую конструкцию с инфинитивом и fog.',
    },
  ],
  objectives: [
    { id: 'l19_form-future', text: 'Образовывать изученные утвердительные и отрицательные конструкции будущего с fog + инфинитив.', skills: ['grammar', 'writing'] },
    { id: 'l19_conjugate-fog', text: 'Спрягать fog по шести лицам в изученной неопределённой парадигме.', skills: ['grammar', 'writing'] },
    { id: 'l19_use-future-plans', text: 'Описывать 3 простых будущих плана с изученными маркерами времени.', skills: ['speaking', 'writing'] },
    { id: 'l19_distinguish-tenses', text: 'Различать настоящее, знакомое прошедшее и fog-будущее в коротких фразах на слух и в тексте.', skills: ['listening', 'reading'] },
    { id: 'l19_make-predictions', text: 'Формулировать 3 простых прогноза с szerintem и изученной конструкцией fog + инфинитив.', skills: ['speaking', 'writing'] },
  ],
};
