import type {
  ContentReadingTaskData,
  ControlledPracticeData,
  OptionalSpeakingPracticeData,
  ProseReadingContent,
  RolePlayData,
  WritingTaskData,
} from '../../types';

type ProseReadingTask = ContentReadingTaskData & { content: ProseReadingContent };

export const P1_L1_PRACTICE: ControlledPracticeData = {
  kind: 'controlledPractice',
  id: 'l1-cp-foundation-discrimination',
  title: 'Итоговая дискриминация: буква, звук и знакомое слово',
  passCount: 13,
  exercises: [
    { kind: 'singleChoice', id: 'l1-p1-cp1', prompt: 'Где написан долгий á?', options: ['hat', 'hát', 'hét'], correctIndex: 1, explanation: 'hát содержит á.' },
    { kind: 'singleChoice', id: 'l1-p1-cp2', prompt: 'Где написан долгий é?', options: ['meg', 'még', 'mag'], correctIndex: 1, explanation: 'még содержит é.' },
    { kind: 'singleChoice', id: 'l1-p1-cp3', prompt: 'Выбери слово с долгим ú.', options: ['üt', 'ut', 'út'], correctIndex: 2, explanation: 'út содержит ú.' },
    { kind: 'singleChoice', id: 'l1-p1-cp4', prompt: 'Выбери слово с долгим ű.', options: ['tűz', 'tüz', 'tíz'], correctIndex: 0, explanation: 'tűz содержит ű.' },
    { kind: 'singleChoice', id: 'l1-p1-cp5', prompt: 'В каком слове начало /s/?', options: ['sok', 'szia', 'zsák'], correctIndex: 1, explanation: 'sz = /s/.' },
    { kind: 'singleChoice', id: 'l1-p1-cp6', prompt: 'В каком слове начало /ʃ/?', options: ['szia', 'sör', 'család'], correctIndex: 1, explanation: 's = /ʃ/.' },
    { kind: 'singleChoice', id: 'l1-p1-cp7', prompt: 'Какое буквосочетание начинается в család?', options: ['zs', 'cs', 'sz'], correctIndex: 1, explanation: 'család начинается с cs.' },
    { kind: 'singleChoice', id: 'l1-p1-cp8', prompt: 'Какое буквосочетание начинается в gyerek?', options: ['gy', 'ny', 'ty'], correctIndex: 0, explanation: 'gyerek начинается с gy.' },
    { kind: 'singleChoice', id: 'l1-p1-cp9', prompt: 'Какое буквосочетание начинается в nyár?', options: ['ty', 'gy', 'ny'], correctIndex: 2, explanation: 'nyár начинается с ny.' },
    { kind: 'singleChoice', id: 'l1-p1-cp10', prompt: 'Какое буквосочетание слышится и пишется в kutya?', options: ['ny', 'ty', 'gy'], correctIndex: 1, explanation: 'kutya содержит ty.' },
    { kind: 'singleChoice', id: 'l1-p1-cp11', prompt: 'Какое буквосочетание начинается в zsák?', options: ['s', 'zs', 'sz'], correctIndex: 1, explanation: 'zsák начинается с zs.' },
    { kind: 'singleChoice', id: 'l1-p1-cp12', prompt: 'Какое утверждение о j и ly верно?', options: ['В стандартной речи оба передают /j/.', 'ly всегда передаёт /l/.', 'j всегда передаёт /ʒ/.'], correctIndex: 0, explanation: 'Современное стандартное произношение совпадает: /j/.' },
    { kind: 'singleChoice', id: 'l1-p1-cp13', prompt: 'Выбери правильное написание знакомого слова /joː/.', options: ['lyó', 'jo', 'jó'], correctIndex: 2, explanation: 'Правильно: jó.' },
    { kind: 'singleChoice', id: 'l1-p1-cp14', prompt: 'Где основное ударение в слове magyar?', options: ['на втором слоге', 'на первом слоге', 'на последнем слоге'], correctIndex: 1, explanation: 'Обычно основное словесное ударение падает на первый слог.' },
    { kind: 'singleChoice', id: 'l1-p1-cp15', prompt: 'Какое слово является знакомым приветствием?', options: ['kenyér', 'Szia!', 'folyó'], correctIndex: 1, explanation: 'Szia! — приветствие.' },
    { kind: 'singleChoice', id: 'l1-p1-cp16', prompt: 'Где ly произносится как /j/?', options: ['folyó', 'nyár', 'kutya'], correctIndex: 0, explanation: 'В folyó написано ly, произносимое /j/.' },
  ],
};

export const P1_L1_DECODING: ProseReadingTask = {
  kind: 'reading',
  id: 'l1-reading-decoding',
  title: 'Чтение и декодирование: первые формы',
  instructions: 'Прочитай слова и короткие фразы. Отвечай только о буквах, звуках и знакомом значении.',
  content: {
    type: 'prose',
    title: 'Első szavak',
    paragraphs: [
      'szia · sör · sok · család · gyerek · nyár · kenyér · magyar · kutya · zsák · jó · folyó',
      'Szia! Jó napot! Magyar vagyok. Ez egy könyv. A gyerek itt van. Jó a kenyér.',
    ],
  },
  passCount: 5,
  questions: [
    { id: 'l1-reading-q1', question: 'В каком слове sz читается как /s/?', options: ['szia', 'sör', 'zsák'], correctIndex: 0, explanation: 'В szia начало sz передаёт /s/.' },
    { id: 'l1-reading-q2', question: 'В каком слове s читается как /ʃ/?', options: ['szia', 'sok', 'család'], correctIndex: 1, explanation: 'Начальная s в sok передаёт /ʃ/.' },
    { id: 'l1-reading-q3', question: 'Где есть буквосочетание gy?', options: ['gyerek', 'kenyér', 'kutya'], correctIndex: 0, explanation: 'gyerek начинается с gy.' },
    { id: 'l1-reading-q4', question: 'В каком слове есть долгий гласный á?', options: ['sok', 'szia', 'nyár'], correctIndex: 2, explanation: 'В nyár написана долгая á.' },
    { id: 'l1-reading-q5', question: 'Какая фраза означает «Я венгр / венгерка»?', options: ['Magyar vagyok.', 'Jó napot!', 'Ez egy könyv.'], correctIndex: 0, explanation: 'Magyar vagyok — знакомая цельная фраза.' },
    { id: 'l1-reading-q6', question: 'На какой слог обычно падает основное ударение в magyar?', options: ['на первый', 'на второй', 'на последний'], correctIndex: 0, explanation: 'В венгерском основное словесное ударение обычно на первом слоге.' },
  ],
};

export const P1_L1_WRITING: WritingTaskData = {
  kind: 'writing',
  id: 'l1-writing-first-forms',
  title: 'Письмо: 5–8 знакомых форм',
  prompt: 'Напечатай 5–8 знакомых венгерских слов, затем 3 очень короткие фразы. Сохрани долгие гласные и буквосочетания точно. Это открытая самопроверка, а не оценка произношения.',
  modelAnswer: ['szia, sör, család, gyerek, nyár, kenyér, jó', 'Szia!', 'Jó napot!', 'Magyar vagyok.'],
  rubric: ['Есть 5–8 знакомых слов', 'Есть 3 очень короткие знакомые фразы', 'Сохранены долгие гласные и буквосочетания', 'Произношение автоматически не оценивается'],
};

export const P1_L1_SPEAKING: OptionalSpeakingPracticeData = {
  title: 'Необязательная устная самопрактика',
  instructions: 'Прочитай вслух слова и фразы, следя за долгими гласными и ударением на первом слоге. Без микрофона, score и evidence.',
  prompt: 'szia · sör · család · gyerek · nyár · kenyér · Magyar vagyok.',
  rubric: ['Долгие гласные не сокращены', 'Основное ударение начинается с первого слога'],
};

export const P1_L2_PRACTICE: ControlledPracticeData = {
  kind: 'controlledPractice',
  id: 'l2-cp-contextual-foundation',
  title: 'Контекстная практика: приветствие, знакомство и lenni',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l2-p1-cp1', prompt: 'Ты встречаешь знакомого ровесника.', options: ['Jó napot kívánok!', 'Szia!', 'Viszlát!'], correctIndex: 1, explanation: 'Szia — неофициальное приветствие.' },
    { kind: 'singleChoice', id: 'l2-p1-cp2', prompt: 'Ты вежливо приветствуешь незнакомого взрослого днём.', options: ['Szia!', 'Jó éjszakát!', 'Jó napot kívánok!'], correctIndex: 2, explanation: 'Jó napot kívánok — вежливое дневное приветствие.' },
    { kind: 'singleChoice', id: 'l2-p1-cp3', prompt: 'Разговор заканчивается.', options: ['Hogy hívnak?', 'Viszlát!', 'Jó reggelt!'], correctIndex: 1, explanation: 'Viszlát — прощание.' },
    { kind: 'textInput', id: 'l2-p1-cp4', prompt: 'A nevem Anna. Én Anna ___.', accept: ['vagyok'], explanation: 'С én используется vagyok.' },
    { kind: 'textInput', id: 'l2-p1-cp5', prompt: 'Te Péter ___?', accept: ['vagy'], explanation: 'С te используется vagy.' },
    { kind: 'textInput', id: 'l2-p1-cp6', prompt: 'Ő diák. Ő itt ___.', accept: ['van'], explanation: 'С ő используется van.' },
    { kind: 'singleChoice', id: 'l2-p1-cp7', prompt: 'Как сказать «Я не венгр / венгерка»?', options: ['Nem vagy magyar.', 'Ő nem magyar vagyok.', 'Nem vagyok magyar.'], correctIndex: 2, explanation: 'Для én: nem vagyok.' },
    { kind: 'singleChoice', id: 'l2-p1-cp8', prompt: 'Как неофициально спросить имя?', options: ['Hogy hívják?', 'Hogy hívnak?', 'Ki ő van?'], correctIndex: 1, explanation: 'Hogy hívnak? — неофициальный вопрос.' },
    { kind: 'singleChoice', id: 'l2-p1-cp9', prompt: 'Как вежливо спросить имя?', options: ['Hogy hívják?', 'Hogy hívnak?', 'Te ki vagyok?'], correctIndex: 0, explanation: 'Hogy hívják? — вежливая форма.' },
    { kind: 'singleChoice', id: 'l2-p1-cp10', prompt: 'Рецепционист спрашивает: Ön magyar?', options: ['Igen, magyar vagyok.', 'Igen, magyar vagy.', 'Igen, magyar van.'], correctIndex: 0, explanation: 'О себе отвечаем vagyok.' },
    { kind: 'singleChoice', id: 'l2-p1-cp11', prompt: 'Szia! Hogy hívnak? — выбери ответ.', options: ['Anna vagyok.', 'Viszlát!', 'Jó estét!'], correctIndex: 0, explanation: 'Anna vagyok отвечает на вопрос об имени.' },
    { kind: 'singleChoice', id: 'l2-p1-cp12', prompt: 'Anna: Magyar vagy? Péter: ...', options: ['Igen, magyar vagyok.', 'Jó reggelt!', 'Örülök.'], correctIndex: 0, explanation: 'Это прямой ответ о национальности.' },
    { kind: 'singleChoice', id: 'l2-p1-cp13', prompt: 'После знакомства естественно сказать:', options: ['Örülök.', 'Jó éjszakát!', 'Ő vannak.'], correctIndex: 0, explanation: 'Örülök — «приятно познакомиться / рад(а)» в этом контексте.' },
    { kind: 'singleChoice', id: 'l2-p1-cp14', prompt: 'Выбери полный мини-диалог.', options: ['Szia! — Szia! — Hogy hívnak? — Anna vagyok. — Viszlát!', 'Viszlát! — Jó reggelt! — Ő vagyok?', 'Hogy hívják? — Nem vagy. — Szia?'], correctIndex: 0, explanation: 'Первый вариант сохраняет понятную последовательность знакомства.' },
  ],
};

export const P1_L2_READING: ProseReadingTask = {
  kind: 'reading', id: 'l2-reading-first-meeting', title: 'Чтение: Első találkozás',
  instructions: 'Прочитай очень короткий диалог и ответь на простые вопросы по фактам.',
  content: { type: 'prose', title: 'Első találkozás', paragraphs: [
    'Anna reggel egy új tanfolyamon van. Az ajtóban találkozik Péterrel. – Szia! Anna vagyok. Hogy hívnak? – kérdezi. – Szia! Péter vagyok. Örülök – mondja Péter. Anna magyar, Péter pedig örmény. Mindketten diákok. Anna megkérdezi: – Te is itt tanulsz? – Igen, itt tanulok – válaszolja Péter. A teremben két szék és egy asztal van. Péter leül, Anna pedig a tanárra vár. A tanár belép a terembe. Anna és Péter azt mondja: – Viszlát, később találkozunk!',
  ] },
  passCount: 5,
  questions: [
    { id: 'l2-reading-q1', question: 'Hol találkozik Anna és Péter?', options: ['egy tanfolyamon', 'egy boltban', 'otthon'], correctIndex: 0, explanation: 'Anna egy új tanfolyamon van.' },
    { id: 'l2-reading-q2', question: 'Как зовут нового знакомого Анны?', options: ['Márk', 'Péter', 'Bence'], correctIndex: 1, explanation: 'Он говорит: Péter vagyok.' },
    { id: 'l2-reading-q3', question: 'Кто Анна по национальности?', options: ['magyar', 'örmény', 'német'], correctIndex: 0, explanation: 'В тексте: Anna magyar.' },
    { id: 'l2-reading-q4', question: 'Что общего у Анны и Петера?', options: ['Они оба студенты.', 'Они оба учителя.', 'Они родственники.'], correctIndex: 0, explanation: 'Mindketten diákok — оба студенты.' },
    { id: 'l2-reading-q5', question: 'Что Анна спрашивает у Петера?', options: ['Где он работает.', 'Который час.', 'Учится ли он здесь.'], correctIndex: 2, explanation: 'Te is itt tanulsz? — «Ты тоже здесь учишься?»' },
    { id: 'l2-reading-q6', question: 'Чем заканчивается встреча?', options: ['прощанием', 'знакомством с семьёй', 'заказом еды'], correctIndex: 0, explanation: 'Они говорят Viszlát.' },
  ],
};

export const P1_L2_ROLEPLAY: RolePlayData = {
  kind: 'rolePlay', id: 'l2-roleplay-first-meeting', title: 'Ролевая игра: первое знакомство', partnerLabel: 'Új osztálytárs · Новый одногруппник',
  completionMessage: 'Короткое знакомство завершено. Это PARTIAL: проверь реплики по моделям.', startTurnId: 'l2-p1-rp1',
  turns: [
    { id: 'l2-p1-rp1', speaker: 'waiter', prompt: 'Szia!', next: 'l2-p1-rp2' },
    { id: 'l2-p1-rp2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поздоровайся и спроси имя.', model: 'Szia! Hogy hívnak?', next: 'l2-p1-rp3' },
    { id: 'l2-p1-rp3', speaker: 'waiter', prompt: 'Péter vagyok. És te?', next: 'l2-p1-rp4' },
    { id: 'l2-p1-rp4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови своё имя.', model: 'Anna vagyok.', next: 'l2-p1-rp4b' },
    { id: 'l2-p1-rp4b', speaker: 'waiter', prompt: 'Hogy vagy?', next: 'l2-p1-rp4c' },
    { id: 'l2-p1-rp4c', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Коротко ответь о самочувствии.', model: 'Jól vagyok, köszönöm.', next: 'l2-p1-rp5' },
    { id: 'l2-p1-rp5', speaker: 'waiter', prompt: 'Magyar vagy?', next: 'l2-p1-rp6' },
    { id: 'l2-p1-rp6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь одним простым фактом о себе.', model: 'Igen, magyar vagyok.', next: 'l2-p1-rp7' },
    { id: 'l2-p1-rp7', speaker: 'waiter', prompt: 'Itt tanulsz?', next: 'l2-p1-rp8' },
    { id: 'l2-p1-rp8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь и задай тот же вопрос собеседнику.', model: 'Igen, itt tanulok. És te?', next: 'l2-p1-rp9' },
    { id: 'l2-p1-rp9', speaker: 'waiter', prompt: 'Én is itt tanulok. Örülök!', next: 'l2-p1-rp10' },
    { id: 'l2-p1-rp10', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Попрощайся.', model: 'Én is örülök. Viszlát!', next: 'l2-p1-rp-end' },
    { id: 'l2-p1-rp-end', speaker: 'stage', stageLabel: 'Знакомство завершено' },
  ],
};

export const P1_L2_WRITING: WritingTaskData = {
  kind: 'writing', id: 'l2-writing-fictional-introduction', title: 'Письмо: короткое знакомство (30–50 слов)',
  prompt: 'Напиши 30–50 слов: приветствие, имя, один факт о себе, один простой вопрос собеседнику и прощание.',
  modelAnswer: ['Szia! Anna vagyok. Magyar vagyok, és diák vagyok. Ma jól vagyok, köszönöm. Ma itt tanulok magyarul. Te magyar vagy? Te is itt tanulsz? Te hogy vagy? Hogy hívnak? Örülök. Viszlát!'],
  rubric: ['30–50 слов', 'Есть приветствие и прощание', 'Есть имя и один факт', 'Есть один простой вопрос'],
};

export const P1_L2_SPEAKING: OptionalSpeakingPracticeData = {
  title: 'Устная самопрактика: знакомство', instructions: 'Говори 30–60 секунд по опорам. Без микрофона, score и evidence.',
  prompt: 'Szia! … vagyok. … vagyok. Hogy hívnak? Viszlát!', rubric: ['Понятное приветствие', 'Имя и один факт', 'Вопрос и прощание'],
};

export const P1_L3_PRACTICE: ControlledPracticeData = {
  kind: 'controlledPractice', id: 'l3-cp-contextual-foundation', title: 'Контекстная практика: предметы, артикли и множественное число', passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l3-p1-cp1', prompt: '___ könyv', options: ['az', 'a', 'egyik'], correctIndex: 1, explanation: 'Перед согласным: a könyv.' },
    { kind: 'singleChoice', id: 'l3-p1-cp2', prompt: '___ asztal', options: ['a', 'ők', 'az'], correctIndex: 2, explanation: 'Перед гласным: az asztal.' },
    { kind: 'singleChoice', id: 'l3-p1-cp3', prompt: 'В комнате есть один, пока не известный стол.', options: ['egy asztal', 'az asztal', 'asztalok'], correctIndex: 0, explanation: 'Новый единичный предмет: egy asztal.' },
    { kind: 'singleChoice', id: 'l3-p1-cp4', prompt: 'Покажи на одну книгу рядом.', options: ['Ezek könyvek.', 'Ez egy könyv.', 'Azok székek.'], correctIndex: 1, explanation: 'Ez — один предмет рядом.' },
    { kind: 'singleChoice', id: 'l3-p1-cp5', prompt: 'Покажи на один стол дальше.', options: ['Az egy asztal.', 'Ez egy asztal.', 'Ezek asztalok.'], correctIndex: 0, explanation: 'Az — один предмет дальше.' },
    { kind: 'textInput', id: 'l3-p1-cp6', prompt: 'könyv → множественное число', accept: ['könyvek'], explanation: 'könyv + -ek → könyvek.' },
    { kind: 'textInput', id: 'l3-p1-cp7', prompt: 'szék → множественное число', accept: ['székek'], explanation: 'szék + -ek → székek.' },
    { kind: 'textInput', id: 'l3-p1-cp8', prompt: 'asztal → множественное число', accept: ['asztalok'], explanation: 'asztal + -ok → asztalok.' },
    { kind: 'singleChoice', id: 'l3-p1-cp9', prompt: 'Рядом несколько книг.', options: ['Ez egy könyv.', 'Az egy könyv.', 'Ezek könyvek.'], correctIndex: 2, explanation: 'Ezek — несколько предметов рядом.' },
    { kind: 'singleChoice', id: 'l3-p1-cp10', prompt: 'Дальше несколько стульев.', options: ['Azok székek.', 'Az egy szék.', 'Ez székek.'], correctIndex: 0, explanation: 'Azok — несколько предметов дальше.' },
    { kind: 'singleChoice', id: 'l3-p1-cp11', prompt: 'Mi ez?', options: ['Ez egy telefon.', 'Ezek telefonok.', 'Azok telefon.'], correctIndex: 0, explanation: 'Mi ez? спрашивает об одном предмете рядом.' },
    { kind: 'singleChoice', id: 'l3-p1-cp12', prompt: 'Mik ezek?', options: ['Ezek könyvek.', 'Ez egy könyv.', 'Az egy könyv.'], correctIndex: 0, explanation: 'Mik ezek? спрашивает о нескольких предметах.' },
    { kind: 'singleChoice', id: 'l3-p1-cp13', prompt: 'Телефон уже известен и находится здесь.', options: ['A telefon itt van.', 'Egy telefonok itt van.', 'Az telefon itt vannak.'], correctIndex: 0, explanation: 'A telefon — конкретный предмет.' },
    { kind: 'singleChoice', id: 'l3-p1-cp14', prompt: 'Выбери естественный мини-диалог.', options: ['Mi az? — Az egy asztal.', 'Mik ez? — Ez könyvek.', 'Mi ezek? — Az asztalok egy.'], correctIndex: 0, explanation: 'Mi az? — вопрос об одном дальнем предмете.' },
  ],
};

export const P1_L3_READING: ProseReadingTask = {
  kind: 'reading', id: 'l3-reading-classroom', title: 'Чтение: Mi van a tanteremben?', instructions: 'Прочитай описание комнаты и ответь по смыслу.',
  content: { type: 'prose', title: 'Mi van a tanteremben?', paragraphs: [
    'Ez egy kis tanterem. Az ajtó itt van, az ablak pedig ott van. A tanteremben van egy nagy asztal és egy kis asztal. A nagy asztal a tanáré. A kis asztalon egy telefon és egy könyv van.',
    'Itt vannak a székek. Hat szék van a teremben. Azok ott könyvek és füzetek. Két diák is itt van: Anna és Péter. Anna mellett egy táska van. Péter mellett két füzet van. Az ablakok nagyok. Az ajtó itt van. A tanári asztal ott van. A terem világos és nyugodt. A tanár megkérdezi: „Mi ez?” Anna válaszol: „Ez egy magyar könyv.”',
  ] }, passCount: 6,
  questions: [
    { id: 'l3-p1-reading-q1', question: 'Какая это комната?', options: ['маленький класс', 'большой магазин', 'кухня'], correctIndex: 0, explanation: 'Ez egy kis tanterem.' },
    { id: 'l3-p1-reading-q2', question: 'Сколько столов?', options: ['один', 'два', 'шесть'], correctIndex: 1, explanation: 'Есть большой и маленький стол.' },
    { id: 'l3-p1-reading-q3', question: 'Что лежит на маленьком столе?', options: ['телефон и книга', 'сумка и стул', 'две книги'], correctIndex: 0, explanation: 'На маленьком столе телефон и книга.' },
    { id: 'l3-p1-reading-q4', question: 'Сколько стульев в классе?', options: ['шесть', 'два', 'четыре'], correctIndex: 0, explanation: 'Hat szék van.' },
    { id: 'l3-p1-reading-q5', question: 'Кто находится в классе?', options: ['Anna és Péter', 'только учитель', 'Bence és Márk'], correctIndex: 0, explanation: 'В тексте названы Anna и Péter.' },
    { id: 'l3-p1-reading-q6', question: 'Что находится рядом с Анной?', options: ['два блокнота', 'телефон', 'сумка'], correctIndex: 2, explanation: 'Anna mellett egy táska van.' },
    { id: 'l3-p1-reading-q7', question: 'Что Анна называет венгерской книгой?', options: ['предмет, о котором спросил учитель', 'окно', 'сумку'], correctIndex: 0, explanation: 'Она отвечает: Ez egy magyar könyv.' },
  ],
};

export const P1_L3_ROLEPLAY: RolePlayData = {
  kind: 'rolePlay', id: 'l3-roleplay-classroom-objects', title: 'Ролевая игра: предметы в комнате', partnerLabel: 'Osztálytárs · Одногруппник',
  completionMessage: 'Предметы названы. Ответы остаются PARTIAL до проверки человеком.', startTurnId: 'l3-p1-rp1', turns: [
    { id: 'l3-p1-rp1', speaker: 'waiter', prompt: 'Mi ez?', next: 'l3-p1-rp2' },
    { id: 'l3-p1-rp2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови один предмет рядом.', model: 'Ez egy könyv.', next: 'l3-p1-rp3' },
    { id: 'l3-p1-rp3', speaker: 'waiter', prompt: 'Mi az?', next: 'l3-p1-rp4' },
    { id: 'l3-p1-rp4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови один предмет дальше.', model: 'Az egy asztal.', next: 'l3-p1-rp5' },
    { id: 'l3-p1-rp5', speaker: 'waiter', prompt: 'Mik ezek?', next: 'l3-p1-rp6' },
    { id: 'l3-p1-rp6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови несколько предметов рядом.', model: 'Ezek könyvek.', next: 'l3-p1-rp7' },
    { id: 'l3-p1-rp7', speaker: 'waiter', prompt: 'És azok mik?', next: 'l3-p1-rp8' },
    { id: 'l3-p1-rp8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови несколько предметов дальше.', model: 'Azok székek.', next: 'l3-p1-rp9' },
    { id: 'l3-p1-rp9', speaker: 'waiter', prompt: 'Hol van a telefon?', next: 'l3-p1-rp10' },
    { id: 'l3-p1-rp10', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь только с уже знакомым itt или ott.', model: 'A telefon itt van.', next: 'l3-p1-rp11' },
    { id: 'l3-p1-rp11', speaker: 'waiter', prompt: 'Most kérdezz te!', next: 'l3-p1-rp12' },
    { id: 'l3-p1-rp12', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Задай один вопрос о предмете.', model: 'Mi az?', next: 'l3-p1-rp13' },
    { id: 'l3-p1-rp13', speaker: 'waiter', prompt: 'Az egy táska.', next: 'l3-p1-rp14' },
    { id: 'l3-p1-rp14', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди и заверши.', model: 'Igen, az egy táska. Köszönöm!', next: 'l3-p1-rp-end' },
    { id: 'l3-p1-rp-end', speaker: 'stage', stageLabel: 'Диалог завершён' },
  ],
};

export const P1_L3_WRITING: WritingTaskData = {
  kind: 'writing', id: 'l3-writing-fictional-room', title: 'Письмо: вымышленная комната (40–60 слов)',
  prompt: 'Опиши вымышленную комнату в 40–60 словах. Используй a/az/egy, единственное и множественное число, itt/ott. Не используй винительный падеж.',
  modelAnswer: ['Ez egy kis szoba. Az ajtó itt van, az ablak ott van. A szobában van egy asztal. Az asztal nagy. Itt vannak a székek és a könyvek. A telefon itt van. Azok ott füzetek. Ezek új könyvek. Ez egy egyszerű, világos szoba.'],
  rubric: ['40–60 слов', 'Есть a, az и egy', 'Есть формы единственного и множественного числа', 'Нет обязательного винительного падежа'],
};

export const P1_L3_SPEAKING: OptionalSpeakingPracticeData = {
  title: 'Устная самопрактика: предметы', instructions: 'Около 1 минуты назови предметы в вымышленной комнате. Без микрофона, score и evidence.',
  prompt: 'Ez egy… Az egy… Ezek… Azok… A … itt van.', rubric: ['Названы несколько предметов', 'Есть один вопрос Mi ez? / Mi az?'],
};

export const P1_L4_PRACTICE: ControlledPracticeData = {
  kind: 'controlledPractice', id: 'l4-cp-contextual-foundation', title: 'Контекстная практика: действия в настоящем времени', passCount: 12,
  exercises: [
    { kind: 'textInput', id: 'l4-p1-cp1', prompt: 'én + tanul', accept: ['tanulok'], explanation: 'Én tanulok.' },
    { kind: 'textInput', id: 'l4-p1-cp2', prompt: 'te + dolgozik', accept: ['dolgozol'], explanation: 'Te dolgozol.' },
    { kind: 'textInput', id: 'l4-p1-cp3', prompt: 'ő + olvas', accept: ['olvas'], explanation: 'Ő olvas.' },
    { kind: 'textInput', id: 'l4-p1-cp4', prompt: 'mi + beszél', accept: ['beszélünk'], explanation: 'Mi beszélünk.' },
    { kind: 'singleChoice', id: 'l4-p1-cp5', prompt: 'Они учатся.', options: ['Tanulok.', 'Tanulnak.', 'Tanulsz.'], correctIndex: 1, explanation: 'Ők tanulnak.' },
    { kind: 'singleChoice', id: 'l4-p1-cp6', prompt: 'Я работаю.', options: ['Dolgozol.', 'Dolgoznak.', 'Dolgozom.'], correctIndex: 2, explanation: 'Для én: dolgozom.' },
    { kind: 'singleChoice', id: 'l4-p1-cp7', prompt: 'Я ем.', options: ['Eszel.', 'Eszem.', 'Esznek.'], correctIndex: 1, explanation: 'Для én: eszem.' },
    { kind: 'singleChoice', id: 'l4-p1-cp8', prompt: 'Он / она пьёт.', options: ['Iszik.', 'Iszom.', 'Iszol.'], correctIndex: 0, explanation: 'Для ő: iszik.' },
    { kind: 'singleChoice', id: 'l4-p1-cp9', prompt: 'Сделай отрицательным: Ma dolgozom.', options: ['Ma dolgozom nem.', 'Nem ma dolgozol.', 'Ma nem dolgozom.'], correctIndex: 2, explanation: 'nem ставится перед глаголом.' },
    { kind: 'singleChoice', id: 'l4-p1-cp10', prompt: 'Mit csinálsz reggel?', options: ['Reggel tanulok.', 'Reggel tanulsz.', 'Reggel tanul.'], correctIndex: 0, explanation: 'О себе: tanulok.' },
    { kind: 'singleChoice', id: 'l4-p1-cp11', prompt: 'Dolgozol vagy tanulsz?', options: ['Tanulok.', 'Tanulsz.', 'Tanulnak.'], correctIndex: 0, explanation: 'О себе отвечаем формой én.' },
    { kind: 'singleChoice', id: 'l4-p1-cp12', prompt: 'Mit csinál Anna délután?', options: ['Olvas.', 'Olvasok.', 'Olvasol.'], correctIndex: 0, explanation: 'Anna = ő, поэтому olvas.' },
    { kind: 'singleChoice', id: 'l4-p1-cp13', prompt: 'Péter este nem ___.', options: ['dolgozik', 'dolgozom', 'dolgozol'], correctIndex: 0, explanation: 'Péter = ő.' },
    { kind: 'singleChoice', id: 'l4-p1-cp14', prompt: 'Выбери вопрос к ответу «Délután olvasok.»', options: ['Mit csinálsz délután?', 'Ki vagy?', 'Hány óra van?'], correctIndex: 0, explanation: 'Вопрос спрашивает о действии днём.' },
    { kind: 'singleChoice', id: 'l4-p1-cp15', prompt: 'Мини-диалог: – Mit csinálsz este? – ...', options: ['Este olvasok, de nem dolgozom.', 'Este olvasol.', 'Este olvasnak.'], correctIndex: 0, explanation: 'Это корректный ответ в рамках неопределённого спряжения L4.' },
  ],
};

export const P1_L4_READING: ProseReadingTask = {
  kind: 'reading', id: 'l4-reading-simple-day', title: 'Чтение: Egy egyszerű nap', instructions: 'Прочитай описание простого дня и ответь по смыслу.',
  content: { type: 'prose', title: 'Egy egyszerű nap', paragraphs: [
    'Anna reggel otthon van. Felkel, vizet iszik és kenyeret eszik. Ezután magyarul tanul. Reggel minden egyszerű és csendes. Anna diák, de hétfőn egy kis irodában is dolgozik. Délelőtt ír és olvas. A telefon az asztalon van, de Anna most nem telefonál. Ma nem beszél sokat, mert csendben dolgozik.',
    'Délután Anna újra tanul. Egy magyar könyv van az asztalon. Anna olvas, majd teát iszik. Péter is ott van. Péter kérdez, Anna pedig válaszol. Később együtt írnak és beszélnek. Este Anna már nem dolgozik. Otthon zenét hallgat, egy kicsit olvas, majd pihen. A könyv este is az asztalon van. Ez egy egyszerű, nyugodt nap.',
  ] }, passCount: 6,
  questions: [
    { id: 'l4-reading-q1', question: 'Что Анна делает утром сначала?', options: ['пьёт воду и ест хлеб', 'работает вечером', 'слушает музыку'], correctIndex: 0, explanation: 'Утром она пьёт воду и ест хлеб.' },
    { id: 'l4-reading-q2', question: 'Кто Анна?', options: ['учительница', 'студентка', 'врач'], correctIndex: 1, explanation: 'Anna diák.' },
    { id: 'l4-reading-q3', question: 'Что она делает в офисе?', options: ['пишет и читает', 'ест и спит', 'гуляет'], correctIndex: 0, explanation: 'Délelőtt ír és olvas.' },
    { id: 'l4-reading-q4', question: 'Какое отрицательное действие есть утром?', options: ['Она мало говорит.', 'Она не читает.', 'Она не учится.'], correctIndex: 0, explanation: 'Ma nem beszél sokat.' },
    { id: 'l4-reading-q5', question: 'Что Анна пьёт днём?', options: ['кофе', 'воду', 'чай'], correctIndex: 2, explanation: 'Délután teát iszik.' },
    { id: 'l4-reading-q6', question: 'Кто задаёт вопрос?', options: ['Péter', 'Anna', 'учитель'], correctIndex: 0, explanation: 'Péter kérdez.' },
    { id: 'l4-reading-q7', question: 'Что Анна делает вечером?', options: ['слушает музыку, читает и отдыхает', 'работает в офисе', 'учится весь вечер'], correctIndex: 0, explanation: 'Вечером она слушает музыку, читает и отдыхает.' },
  ],
};

export const P1_L4_ROLEPLAY: RolePlayData = {
  kind: 'rolePlay', id: 'l4-roleplay-simple-day', title: 'Ролевая игра: что ты делаешь днём?', partnerLabel: 'Osztálytárs · Одногруппник',
  completionMessage: 'Диалог о дне завершён. Он остаётся PARTIAL.', startTurnId: 'l4-p1-rp1', turns: [
    { id: 'l4-p1-rp1', speaker: 'waiter', prompt: 'Mit csinálsz reggel?', next: 'l4-p1-rp2' },
    { id: 'l4-p1-rp2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови одно утреннее действие.', model: 'Reggel teát iszom és tanulok.', next: 'l4-p1-rp3' },
    { id: 'l4-p1-rp3', speaker: 'waiter', prompt: 'Dolgozol vagy tanulsz?', next: 'l4-p1-rp4' },
    { id: 'l4-p1-rp4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь положительно и добавь одно отрицание.', model: 'Tanulok, de ma nem dolgozom.', next: 'l4-p1-rp5' },
    { id: 'l4-p1-rp5', speaker: 'waiter', prompt: 'Mit csinálsz délután?', next: 'l4-p1-rp6' },
    { id: 'l4-p1-rp6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови одно дневное действие.', model: 'Délután olvasok.', next: 'l4-p1-rp7' },
    { id: 'l4-p1-rp7', speaker: 'waiter', prompt: 'Mit csinálsz este?', next: 'l4-p1-rp8' },
    { id: 'l4-p1-rp8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови одно вечернее действие.', model: 'Este zenét hallgatok.', next: 'l4-p1-rp9' },
    { id: 'l4-p1-rp9', speaker: 'waiter', prompt: 'Most kérdezz te!', next: 'l4-p1-rp10' },
    { id: 'l4-p1-rp10', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Задай собеседнику вопрос о дне.', model: 'Mit csinálsz délután?', next: 'l4-p1-rp11' },
    { id: 'l4-p1-rp11', speaker: 'waiter', prompt: 'Délután dolgozom. És te?', next: 'l4-p1-rp12' },
    { id: 'l4-p1-rp12', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Коротко ответь и попрощайся.', model: 'Én tanulok. Viszlát!', next: 'l4-p1-rp-end' },
    { id: 'l4-p1-rp-end', speaker: 'stage', stageLabel: 'Диалог завершён' },
  ],
};

export const P1_L4_WRITING: WritingTaskData = {
  kind: 'writing', id: 'l4-writing-fictional-day', title: 'Письмо: простой день (50–70 слов)',
  prompt: 'Напиши 50–70 слов о вымышленном простом дне. Используй 4–6 действий в настоящем времени, одно отрицание и слова reggel, délután, este. Не используй полное определённое спряжение.',
  modelAnswer: ['Reggel otthon vagyok. Vizet iszom és kenyeret eszem. Ezután magyarul tanulok. Délelőtt írok és olvasok. Ma nem dolgozom. Délután egy barát is itt van. Együtt beszélünk, olvasunk és teát iszunk. Később zenét hallgatunk. Este otthon vagyok, egy kicsit olvasok, majd pihenek. Este már nem dolgozom. Ez egy egyszerű, nyugodt nap.'],
  rubric: ['50–70 слов', 'Есть 4–6 действий', 'Есть одно отрицание', 'Есть reggel, délután и este'],
};

export const P1_L4_SPEAKING: OptionalSpeakingPracticeData = {
  title: 'Устная самопрактика: обычный день', instructions: 'Около 1 минуты расскажи, что обычно делаешь. Без микрофона, score и evidence.',
  prompt: 'Reggel… Délután… Este… Ma nem…', rubric: ['Несколько действий', 'Одно отрицание', 'Понятная последовательность'],
};

export const P1_L5_PRACTICE: ControlledPracticeData = {
  kind: 'controlledPractice', id: 'l5-cp-contextual-foundation', title: 'Контекстная практика: числа, дни и расписание', passCount: 13,
  exercises: [
    { kind: 'singleChoice', id: 'l5-p1-cp1', prompt: 'Какое число означает tizenkettő?', options: ['20', '12', '2'], correctIndex: 1, explanation: 'tizenkettő = 12.' },
    { kind: 'singleChoice', id: 'l5-p1-cp2', prompt: 'Телефонный фрагмент: harmincöt.', options: ['35', '53', '30'], correctIndex: 0, explanation: 'harmincöt = 35.' },
    { kind: 'singleChoice', id: 'l5-p1-cp3', prompt: 'Hány óra van? — 8:00', options: ['Nyolc nap van.', 'Hétfő van.', 'Nyolc óra van.'], correctIndex: 2, explanation: 'Для полного часа: Nyolc óra van.' },
    { kind: 'singleChoice', id: 'l5-p1-cp4', prompt: 'Встреча начинается в 3:00.', options: ['Háromkor kezdődik.', 'Három nap kezdődik.', 'Kedden három.'], correctIndex: 0, explanation: 'háromkor = в три часа.' },
    { kind: 'singleChoice', id: 'l5-p1-cp5', prompt: 'Какой день идёт после hétfő?', options: ['szerda', 'kedd', 'vasárnap'], correctIndex: 1, explanation: 'После понедельника идёт вторник.' },
    { kind: 'singleChoice', id: 'l5-p1-cp6', prompt: 'Какой день идёт перед péntek?', options: ['csütörtök', 'szombat', 'kedd'], correctIndex: 0, explanation: 'Перед пятницей — четверг.' },
    { kind: 'singleChoice', id: 'l5-p1-cp7', prompt: 'Когда начинается урок? — спроси по-венгерски.', options: ['Mikor kezdődik?', 'Hány nap van?', 'Ki vagy?'], correctIndex: 0, explanation: 'Mikor kezdődik? — «Когда начинается?»' },
    { kind: 'singleChoice', id: 'l5-p1-cp8', prompt: 'Hétfőn nyolckor dolgozom. Когда работа?', options: ['во вторник в восемь', 'в понедельник в пять', 'в понедельник в восемь'], correctIndex: 2, explanation: 'hétfőn = в понедельник, nyolckor = в восемь.' },
    { kind: 'singleChoice', id: 'l5-p1-cp9', prompt: 'Kedden nem jó. Какой день не подходит?', options: ['вторник', 'понедельник', 'среда'], correctIndex: 0, explanation: 'kedden = во вторник.' },
    { kind: 'singleChoice', id: 'l5-p1-cp10', prompt: 'Találkozunk háromkor. О чём договорились?', options: ['встретиться в три', 'учиться три дня', 'позвонить в понедельник'], correctIndex: 0, explanation: 'Фраза означает «Встретимся в три».' },
    { kind: 'singleChoice', id: 'l5-p1-cp11', prompt: '– Hétfőn jó? – ... (ты занят)', options: ['Nem, hétfőn dolgozom.', 'Igen, hétfő van.', 'Három óra van.'], correctIndex: 0, explanation: 'Ответ сообщает, почему понедельник не подходит.' },
    { kind: 'singleChoice', id: 'l5-p1-cp12', prompt: '– Kedden ötkor? – ... (согласись)', options: ['Igen, kedden ötkor jó.', 'Nem vagyok magyar.', 'Viszlát kedden van.'], correctIndex: 0, explanation: 'Реплика подтверждает день и время.' },
    { kind: 'singleChoice', id: 'l5-p1-cp13', prompt: 'Сейчас свободное время.', options: ['Most ráérek.', 'Most dolgozol.', 'Holnap hétfőn.'], correctIndex: 0, explanation: 'Most ráérek — «Сейчас я свободен / свободна».' },
    { kind: 'singleChoice', id: 'l5-p1-cp14', prompt: 'Завтра я учусь в пять.', options: ['Holnap ötkor tanulok.', 'Ma öt nap van.', 'Öt tanulnak holnap.'], correctIndex: 0, explanation: 'holnap = завтра, ötkor = в пять.' },
    { kind: 'singleChoice', id: 'l5-p1-cp15', prompt: 'Выбери подходящий порядок.', options: ['предложить день → уточнить время → подтвердить', 'попрощаться → спросить имя → назвать число', 'назвать месяц → отрицать имя → приветствовать'], correctIndex: 0, explanation: 'Так естественно согласуют встречу.' },
    { kind: 'singleChoice', id: 'l5-p1-cp16', prompt: '– Pénteken háromkor találkozunk? – ...', options: ['Igen, pénteken háromkor.', 'Péntek öt nap.', 'Három péntek van.'], correctIndex: 0, explanation: 'Ответ точно подтверждает договорённость.' },
  ],
};

export const P1_L5_READING: ProseReadingTask = {
  kind: 'reading', id: 'l5-reading-weekly-program', title: 'Чтение: Egy heti program', instructions: 'Прочитай расписание и ответь о днях, времени и последовательности.',
  content: { type: 'prose', title: 'Egy heti program', paragraphs: [
    'Anna hétfőn nyolckor dolgozik. Délután ötkor magyarul tanul. Hétfő este hatkor Anna még egy rövid üzenetet ír. Kedden délelőtt szabad, de háromkor Péterrel találkozik. Együtt teát isznak és beszélnek. Szerdán kilenckor kezdődik a tanfolyam, és tizenkettőkor van vége. Utána Anna otthon olvas. Este hétkor Mária telefonál, és a csütörtöki programról kérdez.',
    'Csütörtökön eredetileg négykor találkozik Máriával, de Mária dolgozik. Ezért hatkor találkoznak. Pénteken Anna nyolckor dolgozik, este pedig otthon pihen. Szombaton nincs munka és nincs tanfolyam. Délelőtt szabad, délután háromkor egy baráttal találkozik. A találkozó után együtt olvasnak. Vasárnap Anna otthon van, olvas és teát iszik. Délután szabad, ezért nem siet. Ez a hét nyugodt, de minden nap más program van.',
  ] }, passCount: 6,
  questions: [
    { id: 'l5-reading-q1', question: 'Когда Анна работает в понедельник?', options: ['в восемь', 'в пять', 'в три'], correctIndex: 0, explanation: 'Hétfőn nyolckor dolgozik.' },
    { id: 'l5-reading-q2', question: 'Когда она встречается с Петером?', options: ['в четверг в шесть', 'во вторник в три', 'в субботу в три'], correctIndex: 1, explanation: 'Kedden háromkor.' },
    { id: 'l5-reading-q3', question: 'Что начинается в среду в девять?', options: ['курс', 'работа', 'встреча'], correctIndex: 0, explanation: 'Szerdán kilenckor kezdődik a tanfolyam.' },
    { id: 'l5-reading-q4', question: 'Почему встреча в четверг переносится?', options: ['Анна учится.', 'Курс закрыт.', 'Мária работает.'], correctIndex: 2, explanation: 'Mária dolgozik.' },
    { id: 'l5-reading-q5', question: 'На какое время перенесли встречу?', options: ['на шесть', 'на четыре', 'на восемь'], correctIndex: 0, explanation: 'Hatkor találkoznak.' },
    { id: 'l5-reading-q6', question: 'Когда у Анны свободно в субботу?', options: ['утром', 'днём после трёх', 'вечером в восемь'], correctIndex: 0, explanation: 'Szombaton délelőtt szabad.' },
    { id: 'l5-reading-q7', question: 'Что Анна делает в воскресенье?', options: ['работает', 'читает и пьёт чай', 'идёт на курс'], correctIndex: 1, explanation: 'Olvas és teát iszik.' },
    { id: 'l5-reading-q8', question: 'Какой простой вывод верен?', options: ['У Анны разные планы в разные дни.', 'Анна работает каждый день.', 'Все встречи начинаются в восемь.'], correctIndex: 0, explanation: 'В последней фразе сказано, что каждый день программа другая.' },
  ],
};

export const P1_L5_ROLEPLAY: RolePlayData = {
  kind: 'rolePlay', id: 'l5-roleplay-arrange-meeting', title: 'Ролевая игра: договориться о встрече', partnerLabel: 'Barát · Друг',
  completionMessage: 'День и время подтверждены. Взаимодействие остаётся PARTIAL.', startTurnId: 'l5-p1-rp1', turns: [
    { id: 'l5-p1-rp1', speaker: 'waiter', prompt: 'Találkozunk hétfőn?', next: 'l5-p1-rp2' },
    { id: 'l5-p1-rp2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Скажи, что в понедельник ты занят(а).', model: 'Hétfőn nem jó, dolgozom.', next: 'l5-p1-rp3' },
    { id: 'l5-p1-rp3', speaker: 'waiter', prompt: 'Akkor kedden?', next: 'l5-p1-rp4' },
    { id: 'l5-p1-rp4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Согласись на вторник и спроси время.', model: 'Kedden jó. Hány órakor?', next: 'l5-p1-rp5' },
    { id: 'l5-p1-rp5', speaker: 'waiter', prompt: 'Háromkor.', next: 'l5-p1-rp6' },
    { id: 'l5-p1-rp6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Скажи, что три часа не подходит.', model: 'Háromkor nem jó.', next: 'l5-p1-rp7' },
    { id: 'l5-p1-rp7', speaker: 'waiter', prompt: 'Ötkor jó?', next: 'l5-p1-rp8' },
    { id: 'l5-p1-rp8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Согласись на пять.', model: 'Igen, ötkor jó.', next: 'l5-p1-rp9' },
    { id: 'l5-p1-rp9', speaker: 'waiter', prompt: 'Tehát kedden ötkor találkozunk.', next: 'l5-p1-rp10' },
    { id: 'l5-p1-rp10', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди день и время.', model: 'Igen, kedden ötkor.', next: 'l5-p1-rp11' },
    { id: 'l5-p1-rp11', speaker: 'waiter', prompt: 'És holnap ráérsz?', next: 'l5-p1-rp12' },
    { id: 'l5-p1-rp12', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь о завтрашнем дне.', model: 'Holnap nem jó, dolgozom.', next: 'l5-p1-rp13' },
    { id: 'l5-p1-rp13', speaker: 'waiter', prompt: 'Rendben. Szia!', next: 'l5-p1-rp14' },
    { id: 'l5-p1-rp14', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Попрощайся.', model: 'Szia!', next: 'l5-p1-rp-end' },
    { id: 'l5-p1-rp-end', speaker: 'stage', stageLabel: 'Встреча согласована' },
  ],
};

export const P1_L5_WRITING: WritingTaskData = {
  kind: 'writing', id: 'l5-writing-weekly-message', title: 'Письмо: недельное расписание (50–70 слов)',
  prompt: 'Напиши 50–70 слов: минимум 3 дня, 3 времени, одна встреча, один свободный период и один вопрос или приглашение.',
  modelAnswer: ['Hétfőn nyolckor dolgozom, délután ötkor tanulok. Kedden délelőtt szabad vagyok. Találkozunk kedden háromkor? Szerdán kilenckor kezdődik a tanfolyam, délben pedig otthon olvasok. Pénteken hatkor egy baráttal találkozom. Szombaton nincs munka, ezért délelőtt szabad vagyok, délután pedig pihenek. Vasárnap este otthon pihenek és olvasok. Mikor érsz rá? Találkozunk szombaton háromkor? Írj, kérlek!'],
  rubric: ['50–70 слов', 'Минимум 3 дня и 3 времени', 'Есть встреча и свободный период', 'Есть вопрос или приглашение'],
};

export const P1_L5_SPEAKING: OptionalSpeakingPracticeData = {
  title: 'Устная самопрактика: моя неделя', instructions: '1–1.5 минуты опиши неделю и несколько времён. Без микрофона, score и evidence.',
  prompt: 'Hétfőn… Kedden… … órakor… Szabad vagyok… Találkozunk…?', rubric: ['Несколько дней и времён', 'Одна встреча', 'Понятная последовательность'],
};

export const P1_L6_CHECKPOINT: ControlledPracticeData = {
  kind: 'controlledPractice', id: 'l6-cp-integrated-checkpoint', title: 'Интегрированный A0 checkpoint', passCount: 15,
  exercises: [
    { kind: 'singleChoice', id: 'l6-p1-cp1', prompt: 'В каком слове sz = /s/?', options: ['sok', 'szia', 'zsák'], correctIndex: 1, explanation: 'szia начинается с sz /s/.' },
    { kind: 'singleChoice', id: 'l6-p1-cp2', prompt: 'Где есть долгий á?', options: ['nyár', 'sok', 'kert'], correctIndex: 0, explanation: 'В nyár написана á.' },
    { kind: 'singleChoice', id: 'l6-p1-cp3', prompt: 'Вежливое дневное приветствие.', options: ['Szia!', 'Viszlát!', 'Jó napot kívánok!'], correctIndex: 2, explanation: 'Это вежливое приветствие.' },
    { kind: 'textInput', id: 'l6-p1-cp4', prompt: 'Én Anna ___.', accept: ['vagyok'], explanation: 'Én vagyok.' },
    { kind: 'singleChoice', id: 'l6-p1-cp5', prompt: 'Как сказать «Я не студент»?', options: ['Nem vagyok diák.', 'Nem vagy diák.', 'Nincs diák vagyok.'], correctIndex: 0, explanation: 'Для én: nem vagyok.' },
    { kind: 'singleChoice', id: 'l6-p1-cp6', prompt: '___ ablak', options: ['a', 'az', 'egyik'], correctIndex: 1, explanation: 'Перед гласным используется az.' },
    { kind: 'singleChoice', id: 'l6-p1-cp7', prompt: 'Один, пока не известный стол.', options: ['egy asztal', 'az asztal', 'asztalok'], correctIndex: 0, explanation: 'Новый единичный предмет: egy asztal.' },
    { kind: 'textInput', id: 'l6-p1-cp8', prompt: 'könyv → множественное число', accept: ['könyvek'], explanation: 'könyv + -ek.' },
    { kind: 'singleChoice', id: 'l6-p1-cp9', prompt: 'Рядом несколько стульев.', options: ['Ez egy szék.', 'Az egy szék.', 'Ezek székek.'], correctIndex: 2, explanation: 'Ezek — несколько предметов рядом.' },
    { kind: 'textInput', id: 'l6-p1-cp10', prompt: 'én + tanul', accept: ['tanulok'], explanation: 'Én tanulok.' },
    { kind: 'singleChoice', id: 'l6-p1-cp11', prompt: 'Anna délután ___.', options: ['olvas', 'olvasok', 'olvasol'], correctIndex: 0, explanation: 'Anna = ő.' },
    { kind: 'singleChoice', id: 'l6-p1-cp12', prompt: 'Сделай отрицательным: Ma dolgozom.', options: ['Ma nem dolgozom.', 'Ma dolgozom nem.', 'Nem dolgozol ma.'], correctIndex: 0, explanation: 'nem перед глаголом.' },
    { kind: 'singleChoice', id: 'l6-p1-cp13', prompt: 'tizenöt =', options: ['15', '50', '5'], correctIndex: 0, explanation: 'tizenöt = 15.' },
    { kind: 'singleChoice', id: 'l6-p1-cp14', prompt: 'Hétfőn nyolckor tanulok.', options: ['Учусь в понедельник в восемь.', 'Работаю во вторник в восемь.', 'Учусь в пятницу в пять.'], correctIndex: 0, explanation: 'hétfőn + nyolckor.' },
    { kind: 'singleChoice', id: 'l6-p1-cp15', prompt: '– Találkozunk kedden? – ... (ты занят)', options: ['Kedden nem jó, dolgozom.', 'Kedden három nap.', 'Igen, magyar vagyok.'], correctIndex: 0, explanation: 'Ответ сообщает, что вторник не подходит.' },
    { kind: 'singleChoice', id: 'l6-p1-cp16', prompt: '– Akkor szerdán ötkor? – ...', options: ['Igen, szerdán ötkor jó.', 'Szerda egy könyv.', 'Öt szerdák vannak.'], correctIndex: 0, explanation: 'День и время подтверждены.' },
    { kind: 'singleChoice', id: 'l6-p1-cp17', prompt: '– Hogy hívnak? – ...', options: ['Anna vagyok.', 'Ötkor találkozunk.', 'Ezek könyvek.'], correctIndex: 0, explanation: 'Вопрос спрашивает имя.' },
    { kind: 'singleChoice', id: 'l6-p1-cp18', prompt: 'Правильная последовательность первого дня:', options: ['приветствие → представление → занятие → договорённость → прощание', 'прощание → число → приветствие', 'предмет → прощание → имя'], correctIndex: 0, explanation: 'Первая последовательность связна и естественна.' },
  ],
};

export const P1_L6_READING: ProseReadingTask = {
  kind: 'reading', id: 'l6-reading-new-course-day', title: 'Чтение: Egy új tanfolyami nap', instructions: 'Прочитай интегрированный текст и ответь по смыслу.',
  content: { type: 'prose', title: 'Egy új tanfolyami nap', paragraphs: [
    'Hétfő reggel Anna egy új magyar tanfolyamra érkezik. A tanfolyam kilenckor kezdődik. Az ajtóban Péter áll. – Szia! Péter vagyok. Hogy hívnak? – kérdezi. – Anna vagyok. Örmény vagyok, és Budapesten élek – válaszolja Anna. Mindketten diákok. Péter már jól ismeri a termet, Anna viszont ma van itt először.',
    'A tanteremben van egy nagy asztal, nyolc szék, két ablak és sok könyv. Anna megkérdezi: – Mi ez? Péter válaszol: – Ez egy magyar könyv. A tanár belép, beszél, ír, majd a diákok olvasnak. Anna figyel, de ma még nem beszél sokat.',
    'Tízkor rövid szünet van. Anna teát iszik, Péter vizet iszik. Megbeszélik, hogy kedden öt órakor együtt tanulnak. A szünet után újra olvasnak és írnak. A tanár kérdez, és Péter válaszol. Délben vége a tanfolyamnak. Anna és Péter azt mondja: – Viszlát! Kedden ötkor találkozunk.',
  ] }, passCount: 7,
  questions: [
    { id: 'l6-reading-p1-q1', question: 'Как зовут нового ученика, который встречает Анну?', options: ['Péter', 'Márk', 'Bence'], correctIndex: 0, explanation: 'Он представляется: Péter vagyok.' },
    { id: 'l6-reading-p1-q2', question: 'Во сколько начинается курс?', options: ['в десять', 'в девять', 'в пять'], correctIndex: 1, explanation: 'A tanfolyam kilenckor kezdődik.' },
    { id: 'l6-reading-p1-q3', question: 'Какой предмет Петер называет?', options: ['венгерскую книгу', 'телефон', 'сумку'], correctIndex: 0, explanation: 'Ez egy magyar könyv.' },
    { id: 'l6-reading-p1-q4', question: 'Что делают ученики после слов учителя?', options: ['читают', 'уходят домой', 'работают'], correctIndex: 0, explanation: 'A diákok olvasnak.' },
    { id: 'l6-reading-p1-q5', question: 'Когда начинается перерыв?', options: ['в десять', 'в девять', 'в полдень'], correctIndex: 0, explanation: 'Tízkor rövid szünet van.' },
    { id: 'l6-reading-p1-q6', question: 'Что пьют Анна и Петер?', options: ['оба кофе', 'Анна воду, Петер чай', 'Анна чай, Петер воду'], correctIndex: 2, explanation: 'Anna teát, Péter vizet iszik.' },
    { id: 'l6-reading-p1-q7', question: 'О чём они договариваются?', options: ['учиться вместе во вторник в пять', 'работать в понедельник', 'встретиться в воскресенье'], correctIndex: 0, explanation: 'Kedden öt órakor együtt tanulnak.' },
    { id: 'l6-reading-p1-q8', question: 'Какой простой вывод верен?', options: ['Анна пока говорит мало, потому что это новый курс.', 'Анна уже учитель.', 'Курс проходит вечером.'], correctIndex: 0, explanation: 'Это её новый курс, и в тексте сказано, что сегодня она ещё мало говорит.' },
  ],
};

export const P1_L6_ROLEPLAY: RolePlayData = {
  kind: 'rolePlay', id: 'l6-roleplay-first-course-day', title: 'Ролевая игра: первый день на курсе', partnerLabel: 'Koordinátor · Координатор',
  completionMessage: 'Первый день разыгран. Interaction остаётся PARTIAL.', startTurnId: 'l6-p1-rp1', turns: [
    { id: 'l6-p1-rp1', speaker: 'waiter', prompt: 'Jó napot!', next: 'l6-p1-rp2' },
    { id: 'l6-p1-rp2', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Поздоровайся и представься.', model: 'Jó napot! Anna vagyok.', next: 'l6-p1-rp3' },
    { id: 'l6-p1-rp3', speaker: 'waiter', prompt: 'Magyar vagy?', next: 'l6-p1-rp4' },
    { id: 'l6-p1-rp4', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Ответь одним фактом об идентичности.', model: 'Nem, örmény vagyok.', next: 'l6-p1-rp5' },
    { id: 'l6-p1-rp5', speaker: 'waiter', prompt: 'Ez a tanterem. Mi ez itt?', next: 'l6-p1-rp6' },
    { id: 'l6-p1-rp6', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Назови один предмет.', model: 'Ez egy könyv.', next: 'l6-p1-rp7' },
    { id: 'l6-p1-rp7', speaker: 'waiter', prompt: 'Mit csinálsz?', next: 'l6-p1-rp8' },
    { id: 'l6-p1-rp8', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Скажи, что ты изучаешь венгерский.', model: 'Magyarul tanulok.', next: 'l6-p1-rp9' },
    { id: 'l6-p1-rp9', speaker: 'waiter', prompt: 'A tanfolyam hétfőn kilenckor van. Jó?', next: 'l6-p1-rp10' },
    { id: 'l6-p1-rp10', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Подтверди день и время.', model: 'Igen, hétfőn kilenckor jó.', next: 'l6-p1-rp11' },
    { id: 'l6-p1-rp11', speaker: 'waiter', prompt: 'Találkozunk a szünetben tízkor?', next: 'l6-p1-rp12' },
    { id: 'l6-p1-rp12', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Согласись на встречу.', model: 'Igen, találkozunk tízkor.', next: 'l6-p1-rp13' },
    { id: 'l6-p1-rp13', speaker: 'waiter', prompt: 'Van kérdésed?', next: 'l6-p1-rp14' },
    { id: 'l6-p1-rp14', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Задай один простой вопрос о времени.', model: 'Mikor kezdődik a tanfolyam?', next: 'l6-p1-rp15' },
    { id: 'l6-p1-rp15', speaker: 'waiter', prompt: 'Kilenckor. Viszlát!', next: 'l6-p1-rp16' },
    { id: 'l6-p1-rp16', speaker: 'learner', responseMode: 'selfPractice', prompt: 'Попрощайся.', model: 'Köszönöm. Viszlát!', next: 'l6-p1-rp-end' },
    { id: 'l6-p1-rp-end', speaker: 'stage', stageLabel: 'Ситуация завершена' },
  ],
};

export const P1_L6_WRITING: WritingTaskData = {
  kind: 'writing', id: 'l6-writing-integrated-profile', title: 'Письмо: интегрированный A0-профиль (60–80 слов)',
  prompt: 'Напиши 60–80 слов: приветствие, имя, базовая идентичность, 2–3 действия, один день, одно время, один простой план или вопрос и заключительное прощание.',
  modelAnswer: ['Szia! Anna vagyok. Örmény vagyok, és Budapesten élek. Magyarul tanulok, délután olvasok, hétfőn pedig dolgozom. Reggel teát iszom, este pedig otthon pihenek. A tanfolyamon sok könyv és nyolc szék van. A tanfolyam kedden öt órakor van. Kedden négykor szabad vagyok. Találkozunk a tanfolyam előtt? Együtt teát iszunk, majd tanulunk és olvasunk. Hány órakor érsz rá? Írj nekem, kérlek! Örülök. Viszlát kedden!'],
  rubric: ['60–80 слов', 'Есть имя и базовая идентичность', 'Есть 2–3 действия, день и время', 'Есть простой план или вопрос и прощание'],
};

export const P1_L6_SPEAKING: OptionalSpeakingPracticeData = {
  title: 'Устная самопрактика: мой A0-профиль', instructions: '1–1.5 минуты представься и расскажи о распорядке. Без микрофона, score и evidence.',
  prompt: 'Szia! … vagyok. … tanulok/dolgozom. Hétfőn… … órakor… Találkozunk…? Viszlát!',
  rubric: ['Имя и базовая идентичность', 'Несколько действий', 'День, время и простой план'],
};
