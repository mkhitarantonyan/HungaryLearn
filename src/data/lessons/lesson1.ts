import { Lesson } from '../../types';
import { P1_L1_DECODING, P1_L1_PRACTICE, P1_L1_WRITING } from './p1FoundationActivities';

export const L1_S_SZ_LISTENING_TOKENS = [
  { word: 'sál', correctIndex: 0, explanation: 'sál начинается с s, то есть /ʃ/.' },
  { word: 'szó', correctIndex: 1, explanation: 'szó начинается с sz, то есть /s/.' },
  { word: 'sör', correctIndex: 0, explanation: 'sör начинается с s, то есть /ʃ/.' },
  { word: 'szoba', correctIndex: 1, explanation: 'szoba начинается с sz, то есть /s/.' },
  { word: 'séta', correctIndex: 0, explanation: 'séta начинается с s, то есть /ʃ/.' },
  { word: 'szín', correctIndex: 1, explanation: 'szín начинается с sz, то есть /s/.' },
  { word: 'sima', correctIndex: 0, explanation: 'sima начинается с s, то есть /ʃ/.' },
  { word: 'sziget', correctIndex: 1, explanation: 'sziget начинается с sz, то есть /s/.' },
  { word: 'só', correctIndex: 0, explanation: 'só начинается с s, то есть /ʃ/.' },
  { word: 'szőlő', correctIndex: 1, explanation: 'szőlő начинается с sz, то есть /s/.' },
] as const;

export const L1_SOFT_CONSONANT_LISTENING_TOKENS = [
  { word: 'magyar', correctIndex: 0, explanation: 'В magyar слышится gy /ɟ/.' },
  { word: 'kutya', correctIndex: 1, explanation: 'В kutya слышится ty /c/.' },
  { word: 'nyár', correctIndex: 2, explanation: 'В nyár слышится ny /ɲ/.' },
  {
    word: 'jó',
    correctIndex: 3,
    explanation: 'В jó слышится /j/. По одному звуку /j/ нельзя определить написание j или ly.',
  },
  { word: 'hegy', correctIndex: 0, explanation: 'В конце hegy слышится gy /ɟ/.' },
  { word: 'kártya', correctIndex: 1, explanation: 'В kártya слышится ty /c/.' },
  { word: 'kenyér', correctIndex: 2, explanation: 'В kenyér слышится ny /ɲ/.' },
  {
    word: 'hely',
    correctIndex: 3,
    explanation: 'В hely буквосочетание ly передаёт /j/, тот же звук, что и j.',
  },
  { word: 'hagyma', correctIndex: 0, explanation: 'В hagyma слышится gy /ɟ/.' },
  { word: 'lány', correctIndex: 2, explanation: 'В lány слышится ny /ɲ/.' },
] as const;

export const L1_VOWEL_LISTENING_TOKENS = [
  { word: 'hat', explanation: 'hat — «шесть», с кратким a приблизительно /ɒ/.' },
  { word: 'hát', explanation: 'hát — «спина», с долгим á приблизительно /aː/.' },
  { word: 'meg', explanation: 'meg содержит краткий e приблизительно /ɛ/.' },
  { word: 'még', explanation: 'még содержит долгий é приблизительно /eː/.' },
  { word: 'kor', explanation: 'kor — «возраст», с кратким o.' },
  { word: 'kór', explanation: 'kór — «болезнь», с долгим ó.' },
  { word: 'öröm', explanation: 'öröm — «радость», с кратким ö.' },
  { word: 'őr', explanation: 'őr — «сторож», с долгим ő.' },
  { word: 'út', explanation: 'út — «дорога», с долгим ú.' },
  { word: 'tűz', explanation: 'tűz — «огонь», с долгим ű.' },
] as const;

export const L1_READ_ALOUD_WORDS = ['gyár', 'tyúk', 'nyolc', 'játék', 'folyó'] as const;

// Listening briefs: one speaker, one token at a time, with a short pause.
// S/sz and consonant-category assets target 15–25 s; vowel asset targets 20–30 s.
export const L1_S_SZ_LISTENING_TRANSCRIPT =
  L1_S_SZ_LISTENING_TOKENS.map((token) => token.word).join('. ') + '.';
export const L1_SOFT_CONSONANT_LISTENING_TRANSCRIPT =
  L1_SOFT_CONSONANT_LISTENING_TOKENS.map((token) => token.word).join('. ') + '.';
export const L1_VOWEL_LISTENING_TRANSCRIPT =
  L1_VOWEL_LISTENING_TOKENS.map((token) => token.word).join('. ') + '.';

export const LESSON_1: Lesson = {
  id: 1,
  number: 1,
  level: 'A0',
  title: 'Урок 1 · Üdvözöllek! Алфавит и базовые звуки',
  subtitle: 'Алфавит, особые согласные, долгие гласные, ударение',
  description:
    'Введение в 44 буквы/буквенные единицы венгерского алфавита, предсказуемое чтение, контрасты s/sz, gy/ty/ny и j/ly, гласные и начальное словесное ударение.',
  slidesCount: 11,
  slides: [
    {
      id: 1,
      eyebrow: 'УРОК 1 · 1/11 · ВВЕДЕНИЕ',
      title: 'Üdvözöllek! Добро пожаловать',
      subtitle: 'Как устроен этот курс',
      type: 'intro',
      note: 'Начинаем с практической системы чтения и ключевых звуковых контрастов: они станут опорой для следующих уроков.',
      body: `
        <p>Этот курс представляет собой структурный путь из <strong>28 уроков</strong>: от первых венгерских слов к уверенному общению, с объяснениями на русском.</p>
        <div class="grid3 my-4">
          <div class="p-4 bg-[#7A1E2B]/5 border-l-4 border-[#7A1E2B] rounded-r-xl"><div class="font-bold text-[#57121C] text-sm font-mono mb-1">1. Модель</div><div class="text-xs text-[#2A2320]/80">Короткое и точное объяснение букв и звуков.</div></div>
          <div class="p-4 bg-[#2C5F58]/5 border-l-4 border-[#2C5F58] rounded-r-xl"><div class="font-bold text-[#2C5F58] text-sm font-mono mb-1">2. Слушание</div><div class="text-xs text-[#2A2320]/80">Реальные задания на различение категорий; TTS остаётся только практикой.</div></div>
          <div class="p-4 bg-[#B98A2B]/10 border-l-4 border-[#B98A2B] rounded-r-xl"><div class="font-bold text-[#B98A2B] text-sm font-mono mb-1">3. Практика</div><div class="text-xs text-[#2A2320]/80">Орфографический выбор и необязательное чтение пяти слов вслух.</div></div>
        </div>
      `,
    },
    {
      id: 2,
      eyebrow: 'УРОК 1 · 2/11 · АЛФАВИТ',
      title: 'A magyar ábécé',
      subtitle: 'Буквы, буквенные единицы и звуки',
      type: 'info',
      note: 'Стандартный венгерский алфавит традиционно насчитывает 44 буквы/буквенные единицы. Это число относится к алфавиту, а не является количеством фонем или звуков языка.',
      body: `
        <p>Венгерский использует латинскую графику. В алфавите отдельными буквенными единицами считаются и <strong>диграфы</strong>, например <span class="hu-word">sz</span>, <span class="hu-word">gy</span>, и триграф <span class="hu-word">dzs</span>.</p>
        <div class="grid2 my-3">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><div class="text-2xl font-bold font-mono text-[#7A1E2B]">44</div><div class="text-xs text-[#8A7A68] mt-1">буквы/буквенные единицы по традиционной алфавитной конвенции</div></div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><div class="text-lg font-bold font-mono text-[#2C5F58]">sz · gy · dzs</div><div class="text-xs text-[#8A7A68] mt-1">примеры единиц из двух и трёх знаков</div></div>
        </div>
        <div class="note"><b>Практическая модель A0:</b> венгерское написание относительно регулярно, а соответствия графем и звуков хорошо предсказуемы. Это удобная основа чтения, но не универсальный закон идеального взаимно-однозначного соответствия.</div>
      `,
    },
    {
      id: 3,
      eyebrow: 'УРОК 1 · 3/11 · ГЛАСНЫЕ',
      title: 'Rövid magánhangzók',
      subtitle: 'Краткие гласные',
      type: 'vowels-short',
      warn: 'Русская передача служит только приблизительной подсказкой. Ориентируйтесь на IPA и венгерский образец: a примерно /ɒ/, e примерно /ɛ/.',
      body: `
        <p>В венгерском семь кратких гласных букв. Произносите их ясно и не заменяйте русскими звуками автоматически.</p>
        <table class="conj">
          <tr><th>Буква</th><th>Ориентир IPA</th><th>Пример</th><th>Перевод</th></tr>
          <tr><td><b>a</b></td><td>/ɒ/ приблизительно</td><td><button class="speak-btn" data-speak-text="alma">alma</button></td><td>яблоко</td></tr>
          <tr><td><b>e</b></td><td>/ɛ/ приблизительно</td><td><button class="speak-btn" data-speak-text="ember">ember</button></td><td>человек</td></tr>
          <tr><td><b>i</b></td><td>/i/</td><td><button class="speak-btn" data-speak-text="itt">itt</button></td><td>здесь</td></tr>
          <tr><td><b>o</b></td><td>/o/</td><td><button class="speak-btn" data-speak-text="orvos">orvos</button></td><td>врач</td></tr>
          <tr><td><b>ö</b></td><td>/ø/</td><td><button class="speak-btn" data-speak-text="öt">öt</button></td><td>пять</td></tr>
          <tr><td><b>u</b></td><td>/u/</td><td><button class="speak-btn" data-speak-text="utca">utca</button></td><td>улица</td></tr>
          <tr><td><b>ü</b></td><td>/y/</td><td><button class="speak-btn" data-speak-text="üveg">üveg</button></td><td>бутылка / стекло</td></tr>
        </table>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 1 · 4/11 · ГЛАСНЫЕ',
      title: 'Hosszú magánhangzók',
      subtitle: 'Количество и качество гласных',
      type: 'vowels-long',
      task: 'Сначала прослушайте десять токенов, затем отдельно проверьте написание всех шести целевых пар. TTS и кнопки примеров — только экспозиция/практика.',
      body: `
        <p>Знаки <strong>´</strong> и <strong>˝</strong> различают краткие и долгие гласные. У пар <b>a/á</b> и <b>e/é</b> меняются и <strong>длительность, и качество</strong>: a ≈ /ɒ/, á ≈ /aː/; e ≈ /ɛ/, é ≈ /eː/.</p>
        <p>В парах <b>i/í, o/ó, ö/ő, u/ú, ü/ű</b> для уровня A0 центрально различие по долготе; точную артикуляцию закрепляйте по качественному образцу.</p>
        <table class="conj">
          <tr><th>Пара</th><th>Примеры</th><th>Что отслеживать</th></tr>
          <tr><td><b>a / á</b></td><td><button class="speak-btn" data-speak-text="alma">alma</button> · <button class="speak-btn" data-speak-text="ár">ár</button></td><td>качество + длительность</td></tr>
          <tr><td><b>e / é</b></td><td><button class="speak-btn" data-speak-text="ember">ember</button> · <button class="speak-btn" data-speak-text="élet">élet</button></td><td>качество + длительность</td></tr>
          <tr><td><b>i / í</b></td><td><button class="speak-btn" data-speak-text="itt">itt</button> · <button class="speak-btn" data-speak-text="íz">íz</button></td><td>прежде всего длительность</td></tr>
          <tr><td><b>o / ó</b></td><td><button class="speak-btn" data-speak-text="orvos">orvos</button> · <button class="speak-btn" data-speak-text="óra">óra</button></td><td>прежде всего длительность</td></tr>
          <tr><td><b>ö / ő</b></td><td><button class="speak-btn" data-speak-text="öt">öt</button> · <button class="speak-btn" data-speak-text="ő">ő</button></td><td>прежде всего длительность</td></tr>
          <tr><td><b>u / ú</b></td><td><button class="speak-btn" data-speak-text="utca">utca</button> · <button class="speak-btn" data-speak-text="út">út</button></td><td>прежде всего длительность</td></tr>
          <tr><td><b>ü / ű</b></td><td><button class="speak-btn" data-speak-text="üveg">üveg</button> · <button class="speak-btn" data-speak-text="tűz">tűz</button></td><td>прежде всего длительность</td></tr>
        </table>
      `,
      activities: [
        {
          kind: 'listening', id: 'l1-listening-vowel-length', title: 'Аудирование: гласные · план 20–30 с', assetId: 'l1_listening_vowel_length', audioStatus: 'published', transcript: L1_VOWEL_LISTENING_TRANSCRIPT, passCount: 8,
          questions: L1_VOWEL_LISTENING_TOKENS.map((token, index) => ({ kind: 'textInput' as const, id: `l1-vowel-listen-q${index + 1}`, question: `Токен ${index + 1}: введите услышанное слово с точными диакритиками.`, accept: [token.word], explanation: token.explanation })),
        },
        {
          kind: 'controlledPractice', id: 'l1-cp-vowel-spelling', title: 'Орфография: выберите краткую или долгую букву', passCount: 10,
          exercises: [
            { kind: 'textInput', id: 'l1-vowel-cp-1', prompt: 'Впишите всё слово: _lma (яблоко), a или á?', accept: ['alma'] },
            { kind: 'textInput', id: 'l1-vowel-cp-2', prompt: 'Впишите всё слово: _r (цена), a или á?', accept: ['ár'] },
            { kind: 'textInput', id: 'l1-vowel-cp-3', prompt: 'Впишите всё слово: _mber (человек), e или é?', accept: ['ember'] },
            { kind: 'textInput', id: 'l1-vowel-cp-4', prompt: 'Впишите всё слово: _let (жизнь), e или é?', accept: ['élet'] },
            { kind: 'textInput', id: 'l1-vowel-cp-5', prompt: 'Впишите всё слово: _rvos (врач), o или ó?', accept: ['orvos'] },
            { kind: 'textInput', id: 'l1-vowel-cp-6', prompt: 'Впишите всё слово: _ra (час), o или ó?', accept: ['óra'] },
            { kind: 'textInput', id: 'l1-vowel-cp-7', prompt: 'Впишите всё слово: _t (пять), ö или ő?', accept: ['öt'] },
            { kind: 'textInput', id: 'l1-vowel-cp-8', prompt: 'Впишите местоимение «он/она»: ö или ő?', accept: ['ő'] },
            { kind: 'textInput', id: 'l1-vowel-cp-9', prompt: 'Впишите всё слово: _tca (улица), u или ú?', accept: ['utca'] },
            { kind: 'textInput', id: 'l1-vowel-cp-10', prompt: 'Впишите всё слово: _t (дорога), u или ú?', accept: ['út'] },
            { kind: 'textInput', id: 'l1-vowel-cp-11', prompt: 'Впишите всё слово: _veg (бутылка), ü или ű?', accept: ['üveg'] },
            { kind: 'textInput', id: 'l1-vowel-cp-12', prompt: 'Впишите всё слово: t_z (огонь), ü или ű?', accept: ['tűz'] },
          ],
        },
      ],
    },
    {
      id: 5,
      eyebrow: 'УРОК 1 · 5/11 · СОГЛАСНЫЕ',
      title: 'Különleges mássalhangzók I.',
      subtitle: 'gy /ɟ/, ty /c/, ny /ɲ/; j и ly → /j/',
      type: 'consonants-soft',
      note: 'Русские «дь/ть/нь» допустимы лишь как грубая подсказка. Венгерские /ɟ c ɲ/ — отдельные фонемы, а не обычное русское смягчение d/t/n.',
      body: `
        <div class="grid2">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><div class="text-xl font-bold font-mono text-[#7A1E2B]">gy → /ɟ/</div><button class="speak-btn mt-2" data-speak-text="gyerek">gyerek</button><p class="text-xs text-[#2A2320]/80 mt-2">Отдельная венгерская согласная фонема. Русское «дь» — только приблизительная подсказка.</p></div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><div class="text-xl font-bold font-mono text-[#7A1E2B]">ty → /c/</div><button class="speak-btn mt-2" data-speak-text="atya">atya</button><p class="text-xs text-[#2A2320]/80 mt-2">Отдельная венгерская согласная фонема. Русское «ть» — лишь приблизительный ориентир.</p></div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><div class="text-xl font-bold font-mono text-[#7A1E2B]">ny → /ɲ/</div><button class="speak-btn mt-2" data-speak-text="anya">anya</button><p class="text-xs text-[#2A2320]/80 mt-2">Отдельная венгерская согласная фонема. Не сводите её к обычному русскому «нь».</p></div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><div class="text-xl font-bold font-mono text-[#2C5F58]">j = ly → /j/</div><button class="speak-btn mt-2" data-speak-text="jég">jég</button><button class="speak-btn mt-2" data-speak-text="mély">mély</button><p class="text-xs text-[#2A2320]/80 mt-2">В современном стандартном венгерском нормального акустического контраста j и ly нет. Их написание запоминают по слову.</p></div>
        </div>
      `,
      activities: [
        {
          kind: 'listening', id: 'l1-listening-soft-consonants', title: 'Аудирование: /ɟ/, /c/, /ɲ/ или /j/ · план 15–25 с', assetId: 'l1_listening_soft_consonants', audioStatus: 'published', transcript: L1_SOFT_CONSONANT_LISTENING_TRANSCRIPT, passCount: 8,
          questions: L1_SOFT_CONSONANT_LISTENING_TOKENS.map((token, index) => ({ id: `l1-soft-listen-q${index + 1}`, question: `Токен ${index + 1}: какую согласную категорию вы слышите?`, options: ['gy /ɟ/', 'ty /c/', 'ny /ɲ/', '/j/ (на письме j или ly)'], correctIndex: token.correctIndex, explanation: token.explanation })),
        },
        {
          kind: 'controlledPractice', id: 'l1-cp-consonant-graphemes', title: 'Буква/буквосочетание → звуковая категория', passCount: 7,
          exercises: [
            { kind: 'singleChoice', id: 'l1-soft-cp-1', prompt: 'Какова целевая фонема gy?', options: ['/ɟ/', '/c/', '/ɲ/', '/j/'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-soft-cp-2', prompt: 'Какова целевая фонема ty?', options: ['/ɟ/', '/c/', '/ɲ/', '/j/'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-soft-cp-3', prompt: 'Какова целевая фонема ny?', options: ['/ɟ/', '/c/', '/ɲ/', '/j/'], correctIndex: 2 },
            { kind: 'singleChoice', id: 'l1-soft-cp-4', prompt: 'Какова целевая фонема j?', options: ['/ɟ/', '/c/', '/ɲ/', '/j/'], correctIndex: 3 },
            { kind: 'singleChoice', id: 'l1-soft-cp-5', prompt: 'Какова целевая фонема ly в современном стандарте?', options: ['/j/', '/ɲ/', '/lʲ/', '/ɟ/'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-soft-cp-6', prompt: 'Какие две записи обычно передают один современный стандартный звук /j/?', options: ['gy и ty', 'j и ly', 'ny и ly', 's и sz'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-soft-cp-7', prompt: 'Как понимать русские подсказки «дь/ть/нь»?', options: ['Как точное описание венгерских фонем', 'Как правило написания j/ly', 'Только как грубое приближение, не как обычное русское смягчение', 'Как обозначение долготы'], correctIndex: 2 },
            { kind: 'singleChoice', id: 'l1-soft-cp-8', prompt: 'Как читается ly в написанном слове mély?', options: ['/j/', '/ɟ/', '/c/', '/ɲ/'], correctIndex: 0 },
          ],
        },
      ],
    },
    {
      id: 6,
      eyebrow: 'УРОК 1 · 6/11 · СОГЛАСНЫЕ',
      title: 'Különleges mássalhangzók II.',
      subtitle: 's /ʃ/ и sz /s/',
      type: 'consonants-sibilants',
      warn: 'Не переносите английскую орфографическую интуицию: в венгерском s обозначает /ʃ/, а диграф sz — /s/.',
      task: 'Сначала различите десять новых токенов на слух, затем проверьте визуальное чтение других слов. Порог обеих частей — 8/10.',
      body: `
        <table class="conj">
          <tr><th>Запись</th><th>IPA</th><th>Пример</th><th>Перевод</th></tr>
          <tr><td><b>s</b></td><td><b>/ʃ/</b></td><td><button class="speak-btn" data-speak-text="sok">sok</button></td><td>много</td></tr>
          <tr><td><b>sz</b></td><td><b>/s/</b></td><td><button class="speak-btn" data-speak-text="szép">szép</button></td><td>красивый</td></tr>
          <tr><td><b>zs</b></td><td><b>/ʒ/</b></td><td><button class="speak-btn" data-speak-text="zsír">zsír</button></td><td>жир</td></tr>
          <tr><td><b>cs</b></td><td><b>/t͡ʃ/</b></td><td><button class="speak-btn" data-speak-text="csók">csók</button></td><td>поцелуй</td></tr>
          <tr><td><b>dzs</b></td><td><b>/d͡ʒ/</b></td><td><button class="speak-btn" data-speak-text="dzsungel">dzsungel</button></td><td>джунгли</td></tr>
        </table>
      `,
      activities: [
        {
          kind: 'listening', id: 'l1-listening-s-sz', title: 'Аудирование: s /ʃ/ или sz /s/ · план 15–25 с', assetId: 'l1_listening_s_sz', audioStatus: 'published', transcript: L1_S_SZ_LISTENING_TRANSCRIPT, passCount: 8,
          questions: L1_S_SZ_LISTENING_TOKENS.map((token, index) => ({ id: `l1-s-sz-listen-q${index + 1}`, question: `Токен ${index + 1}: какой начальный звук и запись подходят?`, options: ['s /ʃ/', 'sz /s/'], correctIndex: token.correctIndex, explanation: token.explanation })),
        },
        {
          kind: 'controlledPractice', id: 'l1-cp-s-sz-reading', title: 'Визуальное чтение s и sz', passCount: 8,
          exercises: [
            { kind: 'singleChoice', id: 'l1-s-sz-cp-1', prompt: 'В слове sok начальная s обозначает…', options: ['/ʃ/', '/s/'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-2', prompt: 'В слове mese буква s обозначает…', options: ['/s/', '/ʃ/'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-3', prompt: 'В слове iskola буква s обозначает…', options: ['/ʃ/', '/s/'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-4', prompt: 'В слове este буква s обозначает…', options: ['/s/', '/ʃ/'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-5', prompt: 'В слове sajt начальная s обозначает…', options: ['/ʃ/', '/s/'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-6', prompt: 'В слове szép начальный диграф sz обозначает…', options: ['/ʃ/', '/s/'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-7', prompt: 'В слове asztal диграф sz обозначает…', options: ['/s/', '/ʃ/'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-8', prompt: 'В конце слова tavasz диграф sz обозначает…', options: ['/ʃ/', '/s/'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-9', prompt: 'В слове szombat начальный диграф sz обозначает…', options: ['/s/', '/ʃ/'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-s-sz-cp-10', prompt: 'В конце слова húsz диграф sz обозначает…', options: ['/ʃ/', '/s/'], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: 7,
      eyebrow: 'УРОК 1 · 7/11 · ДОЛГИЕ СОГЛАСНЫЕ',
      title: 'Hosszú mássalhangzók',
      subtitle: 'Долгота согласных на письме и в речи',
      type: 'consonants-double',
      note: 'У диграфов долгота обычно видна по удвоению первого знака: hosszú содержит hossz + ú, а ssz представляет долгий вариант sz.',
      body: `
        <p>Долгие согласные удерживаются дольше кратких и обозначаются удвоением. Это ещё один контраст, где длительность может различать формы и слова.</p>
        <div class="grid2 my-3"><div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><div class="font-mono font-bold text-[#7A1E2B]">üt ↔ ütött</div><div class="text-xs text-[#8A7A68] mt-1">краткий t ↔ долгий tt</div></div><div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><div class="font-mono font-bold text-[#7A1E2B]">tol ↔ toll</div><div class="text-xs text-[#8A7A68] mt-1">краткий l ↔ долгий ll</div></div></div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 1 · 8/11 · УДАРЕНИЕ',
      title: 'Hangsúly',
      subtitle: 'Основное словесное ударение',
      type: 'stress',
      note: 'В изолированных венгерских словах основное лексическое ударение падает на первый слог. Это базовое правило произношения курса; фразовая интонация и контрастное выделение — отдельные явления.',
      body: `
        <div class="p-5 bg-white border border-[#D9CBB0] rounded-xl space-y-4"><h4 class="font-bold text-[#57121C] text-lg">Первый слог получает основное словесное ударение</h4><div class="grid2"><div class="p-3.5 rounded-lg bg-[#F6EFE4] border border-[#D9CBB0]"><b><u>Bu</u>dapest</b> — ударение на Bu</div><div class="p-3.5 rounded-lg bg-[#F6EFE4] border border-[#D9CBB0]"><b><u>ma</u>gyar</b> — ударение на ma</div></div></div>
      `,
      activities: [
        {
          kind: 'controlledPractice', id: 'l1-cp-stress-rule', title: 'Правило начального словесного ударения', passCount: 5,
          exercises: [
            { kind: 'singleChoice', id: 'l1-stress-cp-1', prompt: 'Куда падает основное лексическое ударение в изолированном венгерском слове?', options: ['На первый слог', 'На последний слог', 'Обязательно на долгую гласную'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-stress-cp-2', prompt: 'Какой слог получает основное ударение в Budapest?', options: ['-da-', 'Bu-', '-pest'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-stress-cp-3', prompt: 'Какой слог получает основное ударение в magyar?', options: ['-gyar', 'ma-'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-stress-cp-4', prompt: 'Какой слог получает основное ударение в folyó?', options: ['fo-', '-lyó'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-stress-cp-5', prompt: 'Какой слог получает основное ударение в köszönöm?', options: ['-szö-', 'kö-', '-nöm'], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: 9,
      eyebrow: 'УРОК 1 · 9/11 · ТРЕНАЖЁР СЛОВ',
      title: 'Első szavak',
      subtitle: 'Первые 10 слов для практики чтения',
      type: 'words-practice',
      task: 'Прослушайте каждое слово, затем скройте переводы и проверьте узнавание. Карточки помогают тренироваться, но не оценивают произношение.',
      activities: [P1_L1_PRACTICE, P1_L1_DECODING],
    },
    {
      id: 10,
      eyebrow: 'УРОК 1 · 10/11 · ЧТЕНИЕ ВСЛУХ',
      title: 'Öt szó hangosan',
      subtitle: 'Необязательная устная самопрактика',
      type: 'read-aloud-practice',
      task: 'По желанию прочитайте все пять слов вслух. Микрофон и автоматическая оценка не используются.',
      body: `<div class="p-5 rounded-xl bg-white border border-[#D9CBB0] space-y-3"><div class="text-xs font-mono text-[#8A7A68] font-semibold uppercase">Пять обязательных слов</div><div class="text-lg md:text-xl font-mono font-bold text-[#57121C] leading-relaxed [overflow-wrap:anywhere]">gyár · tyúk · nyolc · játék · folyó</div><div class="text-sm text-[#2C5F58]">завод · курица · восемь · игра · река</div></div>`,
      activities: [P1_L1_WRITING],
      optionalSpeaking: {
        title: 'Устная практика пяти слов (необязательно)',
        instructions: 'Произнесите по порядку пять слов и самостоятельно сравните их со звуковыми моделями урока. Без микрофона, score и evidence.',
        prompt: L1_READ_ALOUD_WORDS.join(', '),
        rubric: ['Все пять слов произнесены', 'gy, ty и ny различаются', 'j и ly звучат как /j/', 'Ударение начинается на первом слоге'],
      },
    },
    {
      id: 11,
      eyebrow: 'УРОК 1 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что подтверждено в уроке',
      type: 'summary',
      note: 'После урока пройдите короткую проверку. Выполните три задания на слух по опубликованным аудио; необязательная устная практика не создаёт evidence.',
      body: `
        <ul class="tick">
          <li>Венгерский алфавит традиционно содержит <b>44 буквы/буквенные единицы</b>, включая диграфы и триграф dzs; это не подсчёт звуков.</li>
          <li><b>s = /ʃ/</b>, а <b>sz = /s/</b>.</li>
          <li><b>gy = /ɟ/</b>, <b>ty = /c/</b>, <b>ny = /ɲ/</b> — отдельные венгерские фонемы.</li>
          <li><b>j = ly = /j/</b> в современном стандартном произношении; различие остаётся в написании.</li>
          <li>У a/á и e/é важны качество и длительность; в остальных изученных парах долгота остаётся центральной.</li>
          <li>В изолированном слове основное лексическое ударение начинается на первом слоге.</li>
        </ul>
      `,
      activities: [
        {
          kind: 'exitCheck', id: 'l1-exit-check', title: 'Проверка целей урока',
          checks: [
            { objectiveId: 'l1_distinguish-s-sz', activityId: 'l1-listening-s-sz', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l1-cp-s-sz-reading', evidenceKind: 'reading' }] },
            { objectiveId: 'l1_distinguish-soft-consonants', activityId: 'l1-listening-soft-consonants', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l1-cp-consonant-graphemes', evidenceKind: 'reading' }] },
            { objectiveId: 'l1_distinguish-long-vowels', activityId: 'l1-listening-vowel-length', evidenceKind: 'listening', evidenceComponents: [{ activityId: 'l1-cp-vowel-spelling', evidenceKind: 'reading' }] },
            { objectiveId: 'l1_apply-stress', activityId: 'l1-cp-stress-rule', evidenceKind: 'grammar' },
          ],
        },
      ],
    },
  ],
  vocabulary: [
    { id: 'l1_v1', hu: 'gyerek', ru: 'ребёнок', phonetic: '[дьэрэк]', category: 'Алфавит и звуки', exampleSentence: 'A gyerek játszik.' },
    { id: 'l1_v2', hu: 'kutya', ru: 'собака', phonetic: '[кутя]', category: 'Алфавит и звуки', exampleSentence: 'A kutya okos.' },
    { id: 'l1_v3', hu: 'szép', ru: 'красивый', phonetic: '[сэ̄п]', category: 'Алфавит и звуки', exampleSentence: 'A kert szép.' },
    { id: 'l1_v4', hu: 'sok', ru: 'много', phonetic: '[шок]', category: 'Алфавит и звуки', exampleSentence: 'Sok munka.' },
    { id: 'l1_v5', hu: 'üveg', ru: 'бутылка / стекло', phonetic: '[ювэг]', category: 'Алфавит и звуки', exampleSentence: 'Egy üveg víz.' },
    { id: 'l1_v6', hu: 'alma', ru: 'яблоко', phonetic: '[алма]', category: 'Алфавит и звуки', exampleSentence: 'Az alma piros.' },
  ],
  quiz: [
    { id: 101, question: 'Как в венгерском произносится отдельная буква s?', options: ['/s/', '/ʃ/', '/z/', '/ʒ/'], correctIndex: 1, explanation: 'В стандартном венгерском s обозначает /ʃ/; звук /s/ записывается диграфом sz.' },
    { id: 102, question: 'Какое сочетание букв передаёт звук /s/?', options: ['s', 'sz', 'zs', 'cs'], correctIndex: 1, explanation: 'Диграф sz передаёт /s/, например в слове szép.' },
    { id: 103, question: 'Куда падает основное лексическое ударение в изолированном венгерском слове?', options: ['На последний слог', 'На слог с долгой гласной', 'На первый слог', 'На любой слог по части речи'], correctIndex: 2, explanation: 'Базовое правило курса: в изолированном слове основное лексическое ударение падает на первый слог. Фразовая интонация рассматривается отдельно.' },
    { id: 104, question: 'Как произносятся j и ly в современном стандартном венгерском?', options: ['j = /j/, ly = /lʲ/', 'Оба обозначают /j/', 'Оба обозначают /ɲ/', 'j = /ʒ/, ly = /j/'], correctIndex: 1, explanation: 'j и ly обычно произносятся одинаково как /j/; по звуку нельзя восстановить написание.' },
    { id: 105, question: 'Какова целевая фонема сочетания gy в слове gyerek?', options: ['/c/', '/ɟ/', '/g/', '/ʒ/'], correctIndex: 1, explanation: 'gy обозначает /ɟ/. Русское «дь» может быть лишь грубой подсказкой: /ɟ/ не является обычным русским смягчением d.' },
    { id: 106, question: 'Какое утверждение о базовой системе чтения НЕВЕРНО?', options: ['Алфавит традиционно насчитывает 44 буквы/буквенные единицы', 's обозначает /ʃ/, а sz — /s/', 'j и ly образуют нормальный акустический контраст', 'Основное словесное ударение в изолированном слове падает на первый слог'], correctIndex: 2, explanation: 'В современном стандартном венгерском j и ly обычно звучат одинаково как /j/; различается их написание.' },
  ],
  objectives: [
    { id: 'l1_distinguish-s-sz', text: 'Различать на слух и при чтении s [ʃ] и sz [s].', skills: ['listening', 'reading'] },
    { id: 'l1_distinguish-soft-consonants', text: 'Различать на слух gy /ɟ/, ty /c/, ny /ɲ/ и категорию /j/ (j/ly), а также практиковать их произношение вслух.', skills: ['pronunciation', 'listening'] },
    { id: 'l1_distinguish-long-vowels', text: 'Различать a/á, e/é, o/ó, ö/ő, u/ú и ü/ű на слух и в написании.', skills: ['listening', 'reading'] },
    { id: 'l1_apply-stress', text: 'Распознавать правило начального словесного ударения и пытаться применять его в речи.', skills: ['grammar', 'pronunciation'] },
    { id: 'l1_read-aloud', text: 'Читать вслух простые венгерские слова по изученным буквенно-звуковым соответствиям.', skills: ['reading', 'pronunciation', 'speaking'] },
  ],
};
