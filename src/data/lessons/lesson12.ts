import type { Lesson, LessonActivity } from '../../types';

const NEAR_MEANINGS: LessonActivity = {
  kind: 'controlledPractice', id: 'l12-cp-near-meanings', title: 'Hol? Hová? Honnan?', passCount: 8,
  exercises: [
    ['Anna lakásán vagyok. Hol?', ['Annánál', 'Annához', 'Annától'], 0],
    ['Péter irányába megyek. Hová?', ['Péternél', 'Péterhez', 'Pétertől'], 1],
    ['Most jövök az orvostól. Honnan?', ['orvosnál', 'orvoshoz', 'orvostól'], 2],
    ['A barátom otthonában vagyok. Hol?', ['barátnál', 'baráthoz', 'baráttól'], 0],
    ['A testvéremhez indulok. Hová?', ['testvérnél', 'testvérhez', 'testvértől'], 1],
    ['Péter házától jövök. Honnan?', ['Péternél', 'Péterhez', 'Pétertől'], 2],
    ['Az asztalnál állok. Hol?', ['asztalnál', 'asztalhoz', 'asztaltól'], 0],
    ['Az elnök irányába megyek. Hová?', ['elnöknél', 'elnökhöz', 'elnöktől'], 1],
    ['Annától kaptam a könyvet. Kitől?', ['Annánál', 'Annához', 'Annától'], 2],
    ['A doktor rendelőjében vagyok. Kinél?', ['orvosnál', 'orvoshoz', 'orvostól'], 0],
  ].map(([prompt, options, correctIndex], index) => ({ kind: 'singleChoice' as const, id: `l12-meaning-${index + 1}`, prompt: prompt as string, options: options as string[], correctIndex: correctIndex as number })),
};

const formPractice = (id: string, title: string, prompts: string[], answers: string[]): LessonActivity => ({
  kind: 'controlledPractice', id, title, passCount: 5,
  exercises: prompts.map((prompt, index) => ({ kind: 'textInput' as const, id: `${id}-${index + 1}`, prompt, accept: [answers[index]] })),
});

const ADESSIVE = formPractice('l12-cp-adessive-forms', 'Формы -nál/-nél', ['orvos → Hol?', 'asztal → Hol?', 'Péter → Kinél?', 'testvér → Kinél?', 'Anna → Kinél?', 'elnök → Kinél?'], ['orvosnál', 'asztalnál', 'Péternél', 'testvérnél', 'Annánál', 'elnöknél']);
const ALLATIVE = formPractice('l12-cp-allative-forms', 'Формы -hoz/-hez/-höz', ['orvos → Hová?', 'barát → Kihez?', 'Péter → Kihez?', 'testvér → Kihez?', 'elnök → Kihez?', 'Anna → Kihez?'], ['orvoshoz', 'baráthoz', 'Péterhez', 'testvérhez', 'elnökhöz', 'Annához']);
const ABLATIVE = formPractice('l12-cp-ablative-forms', 'Формы -tól/-től', ['orvos → Honnan?', 'barát → Kitől?', 'Péter → Kitől?', 'testvér → Kitől?', 'Anna → Kitől?', 'elnök → Kitől?'], ['orvostól', 'baráttól', 'Pétertől', 'testvértől', 'Annától', 'elnöktől']);

const LISTENING: LessonActivity = {
  kind: 'listening', id: 'l12-listening-near-locations', title: 'Аудирование: у кого, к кому, от кого?',
  assetId: 'l12_listening_near_locations', audioStatus: 'missing', passCount: 4,
  transcript: 'Anna Péterhez megy. Péter most az orvosnál van. Az orvostól jön, utána Annához megy egy könyvért.',
  questions: [
    { id: 'l12-listening-q1', question: 'К кому идёт Анна?', options: ['Péterhez', 'az orvoshoz', 'a testvéréhez'], correctIndex: 0 },
    { id: 'l12-listening-q2', question: 'Где сейчас Петер?', options: ['Annánál', 'az orvosnál', 'otthon'], correctIndex: 1 },
    { id: 'l12-listening-q3', question: 'Откуда он идёт?', options: ['az orvostól', 'Pétertől', 'Annától'], correctIndex: 0 },
    { id: 'l12-listening-q4', question: 'К кому он идёт после врача?', options: ['az orvoshoz', 'Annához', 'Péterhez'], correctIndex: 1 },
    { id: 'l12-listening-q5', question: 'Какие отношения звучат?', options: ['только Hol?', 'Hová?, Hol? и Honnan?', 'только Honnan?'], correctIndex: 1 },
  ],
};

const WRITING: LessonActivity = {
  kind: 'writing', id: 'l12-writing-near-exchange', title: 'Письмо: короткий обмен',
  prompt: 'Напиши 2–4 короткие реплики или предложения о том, у кого ты находишься, к кому идёшь и/или от кого возвращаешься. Используй осмысленно минимум две из трёх изученных групп.',
  modelAnswer: ['Hová mész?', 'Péterhez megyek.', 'Honnan jössz?', 'Az orvostól jövök.'],
  rubric: ['Есть 2–4 связанные короткие реплики или предложения', 'Осмысленно использованы минимум две relation-группы', 'Формы отвечают выбранным Hol? / Hová? / Honnan?'],
};

const RECORDING: LessonActivity = {
  kind: 'recording', id: 'l12-recording-near-exchange', title: 'Говорение: практический обмен',
  instructions: 'Запиши короткий ответ или обмен с формами у/к/от. Запись остаётся PARTIAL evidence и требует проверки человеком.',
  targetText: 'Hová mész? Péterhez megyek. Honnan jössz? Az orvostól jövök.',
  targetTranslation: 'К кому ты идёшь? Я иду к Петеру. Откуда ты идёшь? Я иду от врача.',
  rubric: ['Есть минимум две короткие связанные реплики', 'Использованы минимум две изученные relation-группы', 'Ответ понятен в практическом контексте'],
};

const EXIT_CHECK: LessonActivity = {
  kind: 'exitCheck', id: 'l12-exit-check', title: 'Exit check — цели урока 12', checks: [
    { objectiveId: 'l12_distinguish-near-cases', activityId: 'l12-cp-near-meanings', evidenceKind: 'grammar' },
    { objectiveId: 'l12_form-adessive', activityId: 'l12-cp-adessive-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l12_form-allative', activityId: 'l12-cp-allative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l12_form-ablative', activityId: 'l12-cp-ablative-forms', evidenceKind: 'grammar' },
    { objectiveId: 'l12_use-near-cases', activityId: 'l12-listening-near-locations', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l12-writing-near-exchange', evidenceKind: 'writing' }, { activityId: 'l12-recording-near-exchange', evidenceKind: 'speaking' }] },
  ],
};

export const LESSON_12: Lesson = {
  id: 12, number: 12, level: 'A1', title: 'Урок 12 · Helyhatározók III',
  subtitle: 'Hol? Hová? Honnan? — формы у/к/от',
  description: 'Формы -nál/-nél, -hoz/-hez/-höz и -tól/-től для местонахождения, направления и источника; короткие практические обмены и выбранные послелоги как дополнение.',
  slidesCount: 11,
  slides: [
    { id: 1, eyebrow: 'УРОК 12 · 1/11 · БЛОК A · ЗНАЧЕНИЯ', title: 'Hol? Hová? Honnan?', subtitle: 'Местонахождение, цель и источник', body: `
      <p><b>Hol?</b> — у кого/чего: <b>Annánál vagyok.</b> <b>Hová?</b> — к кому/чему: <b>Péterhez megyek.</b> <b>Honnan?</b> — от кого/чего: <b>Az orvostól jövök.</b></p>
      <div class="note">Эти формы выражают конкретное отношение «у/к/от». Другие отношения с людьми, например «рядом с Петером» или «перед Петером», выражаются другими конструкциями.</div>`, activities: [NEAR_MEANINGS] },
    { id: 2, eyebrow: 'УРОК 12 · 2/11 · БЛОК A · HOL?', title: '-nál / -nél', subtitle: 'Местонахождение у/около', body: `
      <p><b>-nál:</b> orvosnál, asztalnál. <b>-nél:</b> Péternél, testvérnél.</p><p><b>Annánál vagyok.</b> — Я у Анны / вместе с Анной.</p>
      <div class="note"><b>testvér</b> означает брат или сестра; <b>testvérnél</b> — у брата/сестры.</div>`, activities: [ADESSIVE] },
    { id: 3, eyebrow: 'УРОК 12 · 3/11 · БЛОК A · HOVÁ?', title: '-hoz / -hez / -höz', subtitle: 'Направление к человеку или объекту', body: `
      <p><b>-hoz:</b> orvoshoz, baráthoz. <b>-hez:</b> Péterhez, testvérhez. <b>-höz:</b> elnökhöz.</p><p><b>Annához megyek.</b> — Я иду к Анне.</p>
      <div class="note">Учим формы вместе с частыми словами; полная форма зависит от гармонии гласных, а у некоторых основ встречаются словарные изменения.</div>`, activities: [ALLATIVE] },
    { id: 4, eyebrow: 'УРОК 12 · 4/11 · БЛОК A · HONNAN?', title: '-tól / -től', subtitle: 'Движение или происхождение от источника', body: `
      <p><b>-tól:</b> orvostól, baráttól. <b>-től:</b> Pétertől, testvértől.</p><p><b>Annától jövök.</b> — Я иду от Анны.</p>`, activities: [ABLATIVE] },
    { id: 5, eyebrow: 'УРОК 12 · 5/11 · УЧЕБНАЯ МАТРИЦА', title: 'Három gyakori helycsalád', subtitle: 'Три частые пространственные семьи', body: `
      <table class="conj"><tr><th>Отношение</th><th>Hol?</th><th>Hová?</th><th>Honnan?</th></tr><tr><td>внутри</td><td>-ban/-ben</td><td>-ba/-be</td><td>-ból/-ből</td></tr><tr><td>на поверхности</td><td>-n/-on/-en/-ön</td><td>-ra/-re</td><td>-ról/-ről</td></tr><tr><td>у / около / к / от</td><td>-nál/-nél</td><td>-hoz/-hez/-höz</td><td>-tól/-től</td></tr></table>
      <div class="note">Таблица сравнивает три часто используемые пространственные группы по Hol? / Hová? / Honnan?. Это учебная модель, а не полное описание всех способов выражения пространства в венгерском.</div>` },
    { id: 6, eyebrow: 'УРОК 12 · 6/11 · ДИАЛОГ', title: 'Párbeszéd', subtitle: 'К врачу и от врача', body: `<p><b>A:</b> Hová mész?</p><p><b>B:</b> Az orvoshoz megyek, mert beteg vagyok.</p><p><b>A:</b> Honnan jössz?</p><p><b>B:</b> Az orvostól jövök.</p><p><b>A:</b> És utána?</p><p><b>B:</b> Utána Péterhez megyek.</p><p>Отдельный статический пример: <b>Péternél vagyok.</b></p>` },
    { id: 7, eyebrow: 'УРОК 12 · 7/11 · АУДИРОВАНИЕ', title: 'Kihez? Kinél? Kitől?', subtitle: 'Короткий обмен на слух', body: `<p>Определи отношение, цель и источник в коротком разговоре.</p><div class="note">Assessment MP3 ещё не опубликован. Озвучка слайда не заменяет запись и не создаёт listening evidence.</div>`, activities: [LISTENING] },
    { id: 8, eyebrow: 'УРОК 12 · 8/11 · ПРАКТИЧЕСКИЙ ОБМЕН', title: 'Írás és beszéd', subtitle: 'Письмо и говорение', body: `<p>Используй ядро урока в коротком обмене. Открытые ответы требуют проверки и не становятся автоматически правильными после отправки или записи.</p>`, activities: [WRITING, RECORDING] },
    { id: 9, eyebrow: 'УРОК 12 · 9/11 · БЛОК B · ДОПОЛНИТЕЛЬНО', title: 'Kiválasztott névutók', subtitle: 'Выбранные послелоги — enrichment', body: `
      <p><b>Дополнительно, вне целей и проходных заданий:</b> alatt — под; felett/fölött — над; mellett — рядом; előtt — перед; mögött — позади; között — между.</p><p><b>A macska az asztal alatt van.</b> — Кошка под столом.</p>
      <p>В изучаемых здесь базовых конструкциях эти послелоги стоят после существительного без дополнительного пространственного падежного суффикса.</p>
      <div class="note">У нескольких частых послелогов есть полезный контраст: alatt/alá/alól, előtt/elé/elől, mellett/mellé/mellől. Это дополнительное распознавание, не универсальное правило и не оцениваемая цель L12.</div>` },
    { id: 10, eyebrow: 'УРОК 12 · 10/11 · БЛОК B · ДОПОЛНИТЕЛЬНО', title: 'Személyes alakok és idő', subtitle: 'Личные формы и временные chunks — enrichment', body: `
      <p><b>Дополнительное распознавание:</b> nálam/nálad/nála; hozzám/<b>hozzád</b>/hozzá; tőlem/tőled/tőle. У этих падежных форм есть личные формы: nálam «у меня», hozzám «ко мне», tőlem «от меня».</p>
      <p>Полезные временные chunks: <b>kilenctől</b> — с девяти часов; <b>ebéd előtt</b> — до обеда; <b>ebéd után</b> — после обеда; <b>két nap múlva</b> — через два дня.</p>
      <div class="note">Эти формы и chunks не входят в ControlledPractice, Quiz или ExitCheck урока 12.</div>` },
    { id: 11, eyebrow: 'УРОК 12 · 11/11 · ИТОГИ', title: 'Összefoglalás', subtitle: 'Три отношения в практическом контексте', body: `<ul class="tick"><li>Hol? — -nál/-nél</li><li>Hová? — -hoz/-hez/-höz</li><li>Honnan? — -tól/-től</li><li>Выбранные послелоги и личные формы остаются дополнительным материалом</li></ul><div class="note">Следующий урок вводит прошедшее время. В L12 остаёмся в настоящем времени и работаем с местом и направлением.</div>`, activities: [EXIT_CHECK] },
  ],
  vocabulary: [
    ['orvosnál', 'у врача'], ['orvoshoz', 'к врачу'], ['orvostól', 'от врача'], ['Péternél', 'у Петера'], ['Péterhez', 'к Петеру'], ['Pétertől', 'от Петера'],
    ['Annánál', 'у Анны'], ['Annához', 'к Анне'], ['Annától', 'от Анны'], ['alatt', 'под'], ['felett', 'над'], ['mellett', 'рядом с'], ['előtt', 'перед'], ['mögött', 'позади'], ['között', 'между'], ['nálam', 'у меня'],
  ].map(([hu, ru], index) => ({ id: `l12_v${index + 1}`, hu, ru, category: index < 9 ? 'Основные формы' : 'Дополнительно' })),
  quiz: [
    { id: 1201, question: 'Как сказать «у врача» (Hol?)?', options: ['orvosnál', 'orvoshoz', 'orvostól', 'orvosban'], correctIndex: 0, explanation: 'Для местонахождения у врача используется orvosnál.' },
    { id: 1202, question: 'Как сказать «к Петеру» (Hová?)?', options: ['Péternél', 'Péterhez', 'Pétertől', 'Péterben'], correctIndex: 1, explanation: 'Для направления к Петеру используется Péterhez.' },
    { id: 1203, question: 'Как сказать «от врача» (Honnan?)?', options: ['orvosnál', 'orvoshoz', 'orvostól', 'orvosban'], correctIndex: 2, explanation: 'Для движения от врача используется orvostól.' },
    { id: 1204, question: 'Ты находишься у Анны. Какая форма подходит?', options: ['Annánál', 'Annához', 'Annától', 'Annában'], correctIndex: 0, explanation: 'Статическое местонахождение у Анны: Annánál.' },
    { id: 1205, question: 'Ты идёшь к брату или сестре. Какая форма подходит?', options: ['testvérnél', 'testvérhez', 'testvértől', 'testvérben'], correctIndex: 1, explanation: 'Направление к брату или сестре: testvérhez.' },
    { id: 1206, question: 'Какой ответ естественно подходит к вопросу „Honnan jössz?”', options: ['Az orvostól jövök.', 'Az orvoshoz megyek.', 'Az orvosnál vagyok.', 'Péterhez megyek.'], correctIndex: 0, explanation: 'Honnan? спрашивает об источнике: Az orvostól jövök.' },
  ],
  objectives: [
    { id: 'l12_distinguish-near-cases', text: 'Различать значения местонахождения, направления к цели и движения от источника в группе -nál/-nél, -hoz/-hez/-höz, -tól/-től.', skills: ['grammar'] },
    { id: 'l12_form-adessive', text: 'Образовывать формы -nál/-nél для местонахождения у/около человека или объекта.', skills: ['grammar', 'writing'] },
    { id: 'l12_form-allative', text: 'Образовывать формы -hoz/-hez/-höz для направления к человеку или объекту.', skills: ['grammar', 'writing'] },
    { id: 'l12_form-ablative', text: 'Образовывать формы -tól/-től для движения или происхождения от человека или объекта.', skills: ['grammar', 'writing'] },
    { id: 'l12_use-near-cases', text: 'Использовать три изученные группы форм в коротких практических обменах.', skills: ['speaking', 'listening', 'writing'] },
  ],
};
