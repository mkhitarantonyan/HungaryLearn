import { Lesson, LessonActivity } from '../../types';

const cp = (
  id: string,
  title: string,
  passCount: number,
  exercises: Extract<LessonActivity, { kind: 'controlledPractice' }>['exercises'],
): LessonActivity => ({ kind: 'controlledPractice', id, title, passCount, exercises });

const L18_CP_INFINITIVES = cp('l18-cp-infinitive-forms', 'Базовые инфинитивы', 8, [
  { kind: 'textInput', id: 'l18-inf-1', prompt: 'tanul → инфинитив', accept: ['tanulni'] },
  { kind: 'textInput', id: 'l18-inf-2', prompt: 'ír → инфинитив', accept: ['írni'] },
  { kind: 'textInput', id: 'l18-inf-3', prompt: 'olvas → инфинитив', accept: ['olvasni'] },
  { kind: 'textInput', id: 'l18-inf-4', prompt: 'főz → инфинитив', accept: ['főzni'] },
  { kind: 'textInput', id: 'l18-inf-5', prompt: 'beszél → инфинитив', accept: ['beszélni'] },
  { kind: 'textInput', id: 'l18-inf-6', prompt: 'dolgozik → инфинитив', accept: ['dolgozni'], explanation: 'У -ik-глагола словарное -ik не сохраняется: dolgozik → dolgozni.' },
  { kind: 'textInput', id: 'l18-inf-7', prompt: 'megy → инфинитив', accept: ['menni'] },
  { kind: 'textInput', id: 'l18-inf-8', prompt: 'eszik → инфинитив', accept: ['enni'] },
  { kind: 'textInput', id: 'l18-inf-9', prompt: 'iszik → инфинитив', accept: ['inni'] },
  { kind: 'textInput', id: 'l18-inf-10', prompt: 'van → инфинитив', accept: ['lenni'] },
]);

const L18_CP_PERSONAL_INFINITIVE = cp('l18-cp-personal-infinitive', 'Личный инфинитив с kell', 6, [
  { kind: 'textInput', id: 'l18-pers-1', prompt: 'én + menni + kell → «мне нужно идти»', accept: ['Mennem kell', 'mennem kell'] },
  { kind: 'textInput', id: 'l18-pers-2', prompt: 'te + menni + kell → «тебе нужно идти»', accept: ['Menned kell', 'menned kell'] },
  { kind: 'textInput', id: 'l18-pers-3', prompt: 'ő + menni + kell → «ему/ей нужно идти»', accept: ['Mennie kell', 'mennie kell'] },
  { kind: 'textInput', id: 'l18-pers-4', prompt: 'én + dolgozni + kell → «мне нужно работать»', accept: ['Dolgoznom kell', 'dolgoznom kell'] },
  { kind: 'textInput', id: 'l18-pers-5', prompt: 'te + dolgozni + kell → «тебе нужно работать»', accept: ['Dolgoznod kell', 'dolgoznod kell'] },
  { kind: 'textInput', id: 'l18-pers-6', prompt: 'ő + dolgozni + kell → «ему/ей нужно работать»', accept: ['Dolgoznia kell', 'dolgoznia kell'] },
  { kind: 'textInput', id: 'l18-pers-7', prompt: 'én + tanulni + kell → «мне нужно учиться»', accept: ['Tanulnom kell', 'tanulnom kell'] },
  { kind: 'textInput', id: 'l18-pers-8', prompt: 'te + tanulni + kell → «тебе нужно учиться»', accept: ['Tanulnod kell', 'tanulnod kell'] },
]);

const L18_CP_MODAL_FUNCTIONS = cp('l18-cp-modal-functions', 'Какую модальную модель выбрать?', 8, [
  { kind: 'singleChoice', id: 'l18-mod-1', prompt: '«Я умею плавать.»', options: ['Tudok úszni.', 'Lehet úszni.', 'Úsznom kell.', 'Úszni akarok.'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l18-mod-2', prompt: '«Здесь можно парковаться?» — спрашиваем о разрешении/возможности.', options: ['Tudok itt parkolni?', 'Lehet itt parkolni?', 'Parkolnom kell?', 'Parkolni akarok?'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l18-mod-3', prompt: '«Мне нужно работать.»', options: ['Dolgozni tudok.', 'Lehet dolgozni.', 'Dolgoznom kell.', 'Dolgozni akarok.'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l18-mod-4', prompt: '«Я хотел(а) бы отдохнуть.» — вежливо.', options: ['Pihenni akarok.', 'Pihennem kell.', 'Szeretnék pihenni.', 'Tudok pihenni.'], correctIndex: 2 },
  { kind: 'singleChoice', id: 'l18-mod-5', prompt: '«Я хочу остаться дома.» — прямое желание/намерение.', options: ['Otthon akarok maradni.', 'Otthon kell maradnom?', 'Lehet otthon maradni?', 'Szeretnék?'], correctIndex: 0 },
  { kind: 'fillGap', id: 'l18-mod-6', prompt: 'Holnap korán kelnem ___. (нужно)', accept: ['kell'] },
  { kind: 'fillGap', id: 'l18-mod-7', prompt: 'Itt ___ fényképezni? (можно?)', accept: ['lehet', 'Lehet'] },
  { kind: 'fillGap', id: 'l18-mod-8', prompt: '___ magyarul beszélni. (я умею)', accept: ['Tudok', 'tudok'] },
  { kind: 'fillGap', id: 'l18-mod-9', prompt: '___ egy kicsit pihenni. (я хотел(а) бы)', accept: ['Szeretnék', 'szeretnék'] },
  { kind: 'fillGap', id: 'l18-mod-10', prompt: 'Most haza ___ menni. (я хочу)', accept: ['akarok'] },
]);

const L18_CP_DESIRE = cp('l18-cp-desire-register', 'Вежливое или прямое желание?', 4, [
  { kind: 'singleChoice', id: 'l18-des-1', prompt: 'В кафе: «Я хотел(а) бы заказать.»', options: ['Szeretnék rendelni.', 'Rendelni akarok.', 'Rendelnem kell.', 'Tudok rendelni.'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l18-des-2', prompt: 'Нейтрально сообщаешь о сильном намерении: «Я хочу домой пойти.»', options: ['Szeretnék hazamenni.', 'Haza akarok menni.', 'Haza kell mennem?', 'Lehet hazamenni?'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l18-des-3', prompt: 'Вежливая просьба/желание: «Я хотел(а) бы поговорить.»', options: ['Beszélni akarok.', 'Szeretnék beszélni.', 'Beszélnem kell.', 'Tudok beszélni.'], correctIndex: 1 },
  { kind: 'singleChoice', id: 'l18-des-4', prompt: 'Прямое личное желание: «Я хочу отдохнуть.»', options: ['Pihenni akarok.', 'Szeretnék pihenni.', 'Pihennem kell.', 'Lehet pihenni.'], correctIndex: 0 },
  { kind: 'singleChoice', id: 'l18-des-5', prompt: 'Какой вариант лучше как вежливый заказ?', options: ['Kávét akarok.', 'Szeretnék egy kávét.', 'Kávét tudok.', 'Kávé kell?'], correctIndex: 1 },
]);

const L18_LISTENING: LessonActivity = {
  kind: 'listening',
  id: 'l18-listening-modals',
  title: 'Аудирование: что люди могут, должны и хотят?',
  assetId: 'l18_listening_modals',
  audioStatus: 'published',
  passCount: 4,
  transcript: 'A: Ma este szeretnék moziba menni, de előbb dolgoznom kell. Holnap tudok veled találkozni.\nB: Jó. Lehet a parkban sétálni?\nA: Igen. Péter nem tud jönni, mert tanulnia kell. Anna otthon akar maradni.',
  questions: [
    { id: 'l18-list-1', question: 'Mit szeretne az első beszélő ma este?', options: ['Moziba menni', 'Otthon maradni', 'Dolgozni egész este'], correctIndex: 0 },
    { id: 'l18-list-2', question: 'Mit kell tennie az első beszélőnek előbb?', options: ['Tanulnia kell', 'Dolgoznia kell', 'Sétálnia kell'], correctIndex: 1 },
    { id: 'l18-list-3', question: 'Mikor tud találkozni az első beszélő?', options: ['Ma reggel', 'Ma este', 'Holnap'], correctIndex: 2 },
    { id: 'l18-list-4', question: 'Miért nem tud Péter jönni?', options: ['Dolgoznia kell', 'Tanulnia kell', 'Otthon akar maradni'], correctIndex: 1 },
    { id: 'l18-list-5', question: 'Mit akar Anna?', options: ['Moziba menni', 'Otthon maradni', 'A parkban sétálni'], correctIndex: 1 },
  ],
};

const L18_WRITING: LessonActivity = {
  kind: 'writing',
  id: 'l18-writing-modal-responses',
  title: 'Письмо: пять модальных функций',
  prompt: 'Напиши 5 коротких предложений: 1) что тебе нужно сделать; 2) что ты умеешь; 3) что где-то можно делать; 4) что ты хотел(а) бы сделать; 5) что ты прямо хочешь сделать. Открытый текст требует проверки.',
  modelAnswer: [
    'Holnap dolgoznom kell.',
    'Tudok úszni.',
    'Itt lehet parkolni.',
    'Szeretnék pihenni.',
    'Otthon akarok maradni.',
  ],
  rubric: ['5 предложений', 'есть kell + личный инфинитив', 'есть tud + инфинитив', 'есть lehet + инфинитив', 'есть szeretnék и akarok в разных функциях'],
};

const L18_RECORDING: LessonActivity = {
  kind: 'recording',
  id: 'l18-recording-modal-responses',
  title: 'Говорение: могу, нужно, можно, хочу',
  instructions: 'Запиши 4–5 коротких фраз о себе: необходимость с kell, способность с tud, разрешение/возможность с lehet, вежливое желание с szeretnék и прямое желание с akarok. Запись требует проверки.',
  targetText: 'Holnap dolgoznom kell. Tudok úszni. Itt lehet parkolni. Szeretnék pihenni. Otthon akarok maradni.',
  targetTranslation: 'Завтра мне нужно работать. Я умею плавать. Здесь можно парковаться. Я хотел(а) бы отдохнуть. Я хочу остаться дома.',
  rubric: ['kell + личный инфинитив', 'tud + инфинитив', 'lehet + инфинитив', 'szeretnék + инфинитив', 'akarok + инфинитив'],
};

const L18_EXIT: LessonActivity = {
  kind: 'exitCheck',
  id: 'l18-exit-check',
  title: 'Проверка целей урока',
  checks: [
    { objectiveId: 'l18_form-infinitive', activityId: 'l18-cp-infinitive-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l18_use-modal-verbs', activityId: 'l18-cp-modal-functions', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l18-writing-modal-responses', evidenceKind: 'writing' }, { activityId: 'l18-recording-modal-responses', evidenceKind: 'speaking' }] },
    { objectiveId: 'l18_express-necessity', activityId: 'l18-cp-modal-functions', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l18-writing-modal-responses', evidenceKind: 'writing' }, { activityId: 'l18-recording-modal-responses', evidenceKind: 'speaking' }] },
    { objectiveId: 'l18_express-desire', activityId: 'l18-cp-desire-register', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l18-writing-modal-responses', evidenceKind: 'writing' }, { activityId: 'l18-recording-modal-responses', evidenceKind: 'speaking' }] },
    { objectiveId: 'l18_understand-modals', activityId: 'l18-listening-modals', evidenceKind: 'listening' },
  ],
};

export const LESSON_18: Lesson = {
  id: 18,
  number: 18,
  level: 'A2',
  title: 'Урок 18 · Módbeli segédigék',
  subtitle: 'Инфинитив и частотные модальные конструкции',
  description: 'Базовый инфинитив, ограниченная модель личного инфинитива с kell и различие kell, lehet, tud, szeretnék и akarok в практических ситуациях.',
  slidesCount: 12,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 18 · 1/12 · ИНФИНИТИВ',
      title: 'A főnévi igenév',
      subtitle: 'Базовая форма на -ni',
      activities: [L18_CP_INFINITIVES],
      body: `<p>Венгерский инфинитив обычно узнаётся по <b>-ni</b>: <b>tanul → tanulni</b>, <b>ír → írni</b>, <b>olvas → olvasni</b>, <b>főz → főzni</b>.</p><p>Но правило не сводится к механическому «добавь -ni к словарной форме». У <b>-ik</b>-глаголов словарное <b>-ik</b> не сохраняется: <b>dolgozik → dolgozni</b>. Есть и частые формы, которые полезно выучить целиком: <b>megy → menni</b>, <b>eszik → enni</b>, <b>iszik → inni</b>, <b>van → lenni</b>.</p><div class="note">Цель L18 — уверенно образовывать и узнавать изученный набор инфинитивов, а не вывести универсальный алгоритм для каждого венгерского глагола.</div>`,
    },
    {
      id: 2,
      eyebrow: 'УРОК 18 · 2/12 · КАРТА МОДАЛЬНЫХ ФУНКЦИЙ',
      title: 'Kell, lehet, tud, szeretnék, akarok',
      subtitle: 'Не все модели означают одно и то же',
      body: `<table class="conj"><tr><th>Модель</th><th>Функция в L18</th><th>Пример</th></tr><tr><td><b>kell</b></td><td>необходимость</td><td>Mennem kell. — Мне нужно идти.</td></tr><tr><td><b>lehet + инф.</b></td><td>разрешение / ситуационная возможность</td><td>Itt lehet parkolni. — Здесь можно парковаться.</td></tr><tr><td><b>tud + инф.</b></td><td>способность / умение субъекта</td><td>Tudok úszni. — Я умею плавать.</td></tr><tr><td><b>szeretnék + инф.</b></td><td>вежливое желание</td><td>Szeretnék pihenni. — Я хотел(а) бы отдохнуть.</td></tr><tr><td><b>akarok + инф.</b></td><td>прямое желание / намерение</td><td>Otthon akarok maradni. — Я хочу остаться дома.</td></tr></table><div class="note">Эти конструкции нельзя считать одним и тем же «модальным глаголом + одинаковый инфинитив»: у kell есть отдельная модель личного инфинитива, которую разберём дальше.</div>`,
    },
    {
      id: 3,
      eyebrow: 'УРОК 18 · 3/12 · KELL',
      title: 'Mennem kell',
      subtitle: 'Лицо выражает личный инфинитив',
      body: `<p>Когда нужно сказать, <b>кому именно</b> надо выполнить действие, с <b>kell</b> используется личный инфинитив:</p><p><b>Mennem kell.</b> — Мне нужно идти.<br><b>Menned kell.</b> — Тебе нужно идти.<br><b>Mennie kell.</b> — Ему / ей нужно идти.</p><p>Можно явно назвать лицо дательным местоимением: <b>Nekem mennem kell.</b> Здесь <b>nekem</b> подчёркивает «мне», но личное окончание в <b>mennem</b> всё равно остаётся.</p><div class="note">Не разбирай форму как <b>menni + m</b>. В учебной модели запоминаем <b>menn-em, menn-ed, menn-ie</b>; аналогично <b>dolgoz-n-om, dolgoz-n-od, dolgoz-n-ia</b>.</div><div class="note">Без указания конкретного лица возможна общая конструкция: <b>Itt várni kell.</b> — Здесь нужно ждать.</div>`,
    },
    {
      id: 4,
      eyebrow: 'УРОК 18 · 4/12 · ЛИЧНЫЙ ИНФИНИТИВ',
      title: 'Személyragos főnévi igenév',
      subtitle: 'Продуктивно только ограниченный набор',
      activities: [L18_CP_PERSONAL_INFINITIVE],
      body: `<table class="conj"><tr><th>Кто</th><th>menni</th><th>dolgozni</th><th>tanulni</th></tr><tr><td>én</td><td><b>mennem kell</b></td><td><b>dolgoznom kell</b></td><td><b>tanulnom kell</b></td></tr><tr><td>te</td><td><b>menned kell</b></td><td><b>dolgoznod kell</b></td><td><b>tanulnod kell</b></td></tr><tr><td>ő</td><td><b>mennie kell</b></td><td><b>dolgoznia kell</b></td><td><b>tanulnia kell</b></td></tr></table><div class="note"><b>Граница урока:</b> в упражнениях формируем только én/te/ő с menni, dolgozni и tanulni. Формы <b>mennünk, mennetek, menniük</b> пока достаточно узнавать.</div>`,
    },
    {
      id: 5,
      eyebrow: 'УРОК 18 · 5/12 · LEHET И TUD',
      title: 'Lehet ≠ tud',
      subtitle: 'Разрешение/ситуация и способность человека',
      body: `<p><b>Tudok úszni.</b> — Я умею плавать: речь о способности человека.</p><p><b>Lehet itt úszni?</b> — Здесь можно плавать?: речь о разрешении или о том, допускает ли ситуация это действие.</p><p><b>Nem lehet itt parkolni.</b> — Здесь нельзя парковаться.</p><div class="note">Русское «могу/можно» легко смешивает эти значения. В L18 держим контраст: <b>tud + инфинитив</b> = субъект умеет/способен; <b>lehet + инфинитив</b> = действие разрешено или возможно в ситуации.</div><div class="note"><b>Lehet, hogy...</b> («может быть, что...») — другая конструкция. Здесь достаточно её узнавать; продуктивно тренируем именно <b>lehet + инфинитив</b>.</div>`,
    },
    {
      id: 6,
      eyebrow: 'УРОК 18 · 6/12 · ЖЕЛАНИЕ',
      title: 'Szeretnék és akarok',
      subtitle: 'Вежливое и прямое желание',
      activities: [L18_CP_DESIRE],
      body: `<p><b>Szeretnék pihenni.</b> — Я хотел(а) бы отдохнуть. Это знакомый из L15 вежливый блок.</p><p><b>Pihenni akarok.</b> — Я хочу отдохнуть. <b>akarok</b> выражает желание или намерение более прямо.</p><p>В просьбе или заказе обычно уместнее: <b>Szeretnék rendelni.</b> / <b>Szeretnék egy kávét.</b></p><div class="note">В L18 <b>szeretnék</b> изучается как готовый частотный блок. Мы не выводим из него полную парадигму условного наклонения — это тема L23.</div>`,
    },
    {
      id: 7,
      eyebrow: 'УРОК 18 · 7/12 · ВЫБОР МОДЕЛИ',
      title: 'Mit jelent a mondat?',
      subtitle: 'Необходимость, способность, разрешение и желание',
      activities: [L18_CP_MODAL_FUNCTIONS],
      body: `<p>Сначала определи функцию, затем выбери конструкцию:</p><ul class="tick"><li><b>Нужно мне/тебе/ему сделать</b> → личный инфинитив + kell</li><li><b>Умею / способен</b> → tud + инфинитив</li><li><b>Можно / разрешено в ситуации</b> → lehet + инфинитив</li><li><b>Хотел(а) бы</b> → szeretnék + инфинитив</li><li><b>Хочу / намерен прямо</b> → akarok + инфинитив</li></ul><div class="note">После упражнений используй эти модели в собственных письменных и устных фразах.</div>`,
    },
    {
      id: 8,
      eyebrow: 'УРОК 18 · 8/12 · АУДИРОВАНИЕ',
      title: 'Mit kell, lehet, tud és akar?',
      subtitle: 'Узнаём функцию на слух',
      activities: [L18_LISTENING],
      body: `<p>В коротком диалоге слушай не отдельное «модальное слово», а связку целиком: <b>что человек должен сделать, что умеет/может, что разрешено и чего он хочет</b>.</p><div class="warn">Отдельная запись для этого задания ещё не опубликована, поэтому аудирование пока недоступно.</div>`,
    },
    {
      id: 9,
      eyebrow: 'УРОК 18 · 9/12 · ПИСЬМО',
      title: 'Öt rövid válasz',
      subtitle: 'Пять функций в собственных фразах',
      activities: [L18_WRITING],
      body: `<p>Теперь используй модели в своих коротких фразах: необходимость, способность, разрешение/возможность, вежливое желание и прямое желание.</p><div class="note">После написания проверь, соответствует ли каждая конструкция нужному смыслу.</div>`,
    },
    {
      id: 10,
      eyebrow: 'УРОК 18 · 10/12 · ГОВОРЕНИЕ',
      title: 'Mondd el!',
      subtitle: 'Короткие модальные фразы вслух',
      activities: [L18_RECORDING],
      body: `<p>Запиши 4–5 коротких фраз, используя модели L18. Смысл важнее скорости: каждая конструкция должна выполнять свою функцию.</p><div class="note">Прослушай запись и проверь, ясно ли различаются необходимость, способность, возможность и желание.</div>`,
    },
    {
      id: 11,
      eyebrow: 'УРОК 18 · 11/12 · ГРАНИЦЫ УРОКА',
      title: 'Mit nem tanulunk még?',
      subtitle: 'Что оставляем следующим урокам',
      body: `<p><b>akarok</b> может выражать намерение, но это не отдельное будущее время. Системное будущее с <b>fog + инфинитив</b> начинается в L19 и будет опираться на инфинитивы этого урока.</p><p><b>szeretnék</b> здесь — готовый вежливый блок из L15. Полную систему условного наклонения мы не строим: она будет в L23.</p><p><b>kell + существительное</b> тоже возможно, например <b>Kell egy jegy.</b> («Нужен билет»), но отдельной целью L18 остаются конструкции с действием и инфинитивом.</p>`,
    },
    {
      id: 12,
      eyebrow: 'УРОК 18 · 12/12 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Проверка целей 18-го урока',
      activities: [L18_EXIT],
      body: `<ul class="tick"><li>Базовые инфинитивы на -ni и частые формы menni, enni, inni, lenni</li><li>Ограниченная модель личного инфинитива с kell: mennem/menned/mennie и изученные аналоги</li><li>tud + инфинитив — способность; lehet + инфинитив — разрешение/ситуационная возможность</li><li>szeretnék + инфинитив — вежливое желание; akarok + инфинитив — прямое желание/намерение</li><li>Модальные значения на слух будут проверяться по отдельной записи</li></ul><div class="note"><b>Домашнее задание.</b> Напиши и запиши пять коротких фраз: с kell, tud, lehet, szeretnék и akarok. Не ставь личный инфинитив после tud/lehet/szeretnék/akarok: модель <b>mennem kell</b> относится к kell.</div>`,
    },
  ],
  vocabulary: [
    { id: 'l18_v1', hu: 'tanulni', ru: 'учиться', category: 'Инфинитив', exampleSentence: 'Magyarul szeretnék tanulni.' },
    { id: 'l18_v2', hu: 'dolgozni', ru: 'работать', category: 'Инфинитив', exampleSentence: 'Holnap dolgoznom kell.' },
    { id: 'l18_v3', hu: 'menni', ru: 'идти', category: 'Инфинитив', exampleSentence: 'Mennem kell.' },
    { id: 'l18_v4', hu: 'mennem kell', ru: 'мне нужно идти', category: 'Модальная модель', exampleSentence: 'Most mennem kell.' },
    { id: 'l18_v5', hu: 'lehet', ru: 'можно / возможно', category: 'Модальная модель', exampleSentence: 'Itt lehet parkolni.' },
    { id: 'l18_v6', hu: 'tudok', ru: 'я умею / могу', category: 'Модальная модель', exampleSentence: 'Tudok úszni.' },
    { id: 'l18_v7', hu: 'szeretnék', ru: 'я хотел(а) бы', category: 'Вежливый блок', exampleSentence: 'Szeretnék pihenni.' },
    { id: 'l18_v8', hu: 'akarok', ru: 'я хочу', category: 'Желание / намерение', exampleSentence: 'Otthon akarok maradni.' },
  ],
  quiz: [
    { id: 1801, question: 'Какой инфинитив соответствует глаголу tanul («учиться»)?', options: ['tanulni', 'tanulok', 'tanulom', 'tanulnom'], correctIndex: 0, explanation: 'Базовый инфинитив: tanul → tanulni. Tanulnom — личный инфинитив, например Tanulnom kell.' },
    { id: 1802, question: 'Как сказать «Мне нужно идти» без явного nekem?', options: ['Menni kell.', 'Mennem kell.', 'Megyek kell.', 'Menni tudok.'], correctIndex: 1, explanation: 'С kell конкретное лицо выражает личный инфинитив: mennem kell — «мне нужно идти».' },
    { id: 1803, question: 'Какой контраст между tud и lehet тренируется в L18?', options: ['tud — способность субъекта; lehet + инфинитив — разрешение/ситуационная возможность', 'tud — прошлое; lehet — будущее', 'это полные синонимы', 'lehet используется только с людьми'], correctIndex: 0, explanation: 'Tudok úszni описывает способность человека; Lehet itt úszni? спрашивает, разрешено/возможно ли действие в ситуации.' },
    { id: 1804, question: 'Какой готовый блок вежливо выражает «я хотел(а) бы»?', options: ['akarok', 'szeretnék', 'kell', 'tudok'], correctIndex: 1, explanation: 'Szeretnék — частотный вежливый блок. Полная система условного наклонения будет изучаться позже, в L23.' },
    { id: 1805, question: 'Как сказать «Здесь можно парковаться» в изученной модели?', options: ['Itt tudok parkolni.', 'Itt lehet parkolni.', 'Itt parkolnom kell.', 'Itt parkolni akarok.'], correctIndex: 1, explanation: 'Lehet + инфинитив выражает разрешение или ситуационную возможность: Itt lehet parkolni.' },
    { id: 1806, question: 'Какой вариант прямо выражает «Я хочу отдохнуть»?', options: ['Pihenni akarok.', 'Szeretnék pihenni.', 'Pihennem kell.', 'Tudok pihenni.'], correctIndex: 0, explanation: 'Pihenni akarok — прямое желание. Szeretnék pihenni — более вежливое «я хотел(а) бы отдохнуть».' },
  ],
  objectives: [
    { id: 'l18_form-infinitive', text: 'Образовывать и узнавать изученные базовые инфинитивы на -ni.', skills: ['grammar', 'writing'] },
    { id: 'l18_use-modal-verbs', text: 'Выбирать и использовать изученные модели kell, lehet, tud, szeretnék и akarok с инфинитивом.', skills: ['grammar', 'speaking', 'writing'] },
    { id: 'l18_express-necessity', text: 'Выражать необходимость, способность и разрешение/ситуационную возможность в изученных моделях kell, tud и lehet.', skills: ['speaking', 'writing'] },
    { id: 'l18_express-desire', text: 'Различать и выражать вежливое и прямое желание через szeretnék + инфинитив и akarok + инфинитив.', skills: ['speaking', 'writing'] },
    { id: 'l18_understand-modals', text: 'Понимать функции изученных модальных конструкций в коротком диалоге на слух.', skills: ['listening'] },
  ],
};
