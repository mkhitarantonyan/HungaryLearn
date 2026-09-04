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
      subtitle: '7 кратких гласных: произношение, примеры и перевод',
      type: 'vowels-short',
      note: 'На этом слайде важно не только запомнить буквы, но и услышать разницу между венгерскими и похожими русскими звуками.',
      warn: 'Русские описания — только приблизительные подсказки. Основной образец произношения дают венгерская озвучка и кнопки примеров.',
      body: `
        <p>В венгерской письменности семь кратких гласных букв: <strong>a, e, i, o, ö, u, ü</strong>. Каждая обозначает отдельный краткий гласный звук.</p>
        <p>Произносите гласные ясно. Не заменяйте их автоматически похожими русскими звуками, особенно <strong>a, e, ö</strong> и <strong>ü</strong>.</p>
        <table class="conj">
          <tr><th>Буква</th><th>Как произносить</th><th>Пример</th><th>Перевод</th></tr>
          <tr>
            <td><b>a</b></td>
            <td>Краткий округлённый звук, приблизительно между русскими «о» и «а»</td>
            <td><button class="speak-btn" data-speak-text="alma">alma</button></td>
            <td>яблоко</td>
          </tr>
          <tr>
            <td><b>e</b></td>
            <td>Открытый краткий звук, похожий на русское «э», но более открытый</td>
            <td><button class="speak-btn" data-speak-text="ember">ember</button></td>
            <td>человек</td>
          </tr>
          <tr>
            <td><b>i</b></td>
            <td>Близок к русскому «и»</td>
            <td><button class="speak-btn" data-speak-text="itt">itt</button></td>
            <td>здесь</td>
          </tr>
          <tr>
            <td><b>o</b></td>
            <td>Краткий звук «о»</td>
            <td><button class="speak-btn" data-speak-text="orvos">orvos</button></td>
            <td>врач</td>
          </tr>
          <tr>
            <td><b>ö</b></td>
            <td>Округлите губы как для «о», язык держите ближе к положению для «э»</td>
            <td><button class="speak-btn" data-speak-text="öt">öt</button></td>
            <td>пять</td>
          </tr>
          <tr>
            <td><b>u</b></td>
            <td>Краткий звук «у»</td>
            <td><button class="speak-btn" data-speak-text="utca">utca</button></td>
            <td>улица</td>
          </tr>
          <tr>
            <td><b>ü</b></td>
            <td>Округлите губы как для «у», язык держите в положении для «и»</td>
            <td><button class="speak-btn" data-speak-text="üveg">üveg</button></td>
            <td>стекло; также бутылка или банка в зависимости от контекста</td>
          </tr>
        </table>
        <div class="note"><b>Как работать со слайдом:</b> нажмите на каждый пример, прослушайте его несколько раз и повторите вслух. Сравнивайте не только отдельную гласную, но и звучание всего слова.</div>
      `,
    },
    {
      id: 4,
      eyebrow: 'УРОК 1 · 4/11 · ГЛАСНЫЕ',
      title: 'Hosszú magánhangzók',
      subtitle: '7 пар кратких и долгих гласных',
      type: 'vowels-long',
      note: 'Долгота гласной является частью правильного написания и произношения слова. Замена краткой гласной на долгую может изменить слово или его значение.',
      warn: 'Долгая гласная — не всегда просто растянутая краткая. В парах a/á и e/é меняются и длительность, и качество звука.',
      task: 'Прослушайте каждую пару, повторите оба примера и обратите внимание на точный знак над буквой. Затем выполните аудирование и упражнение на написание.',
      body: `
        <p>В венгерском языке семь пар кратких и долгих гласных:</p>
        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-white text-center">
          <div class="text-xl font-bold font-mono text-[#7A1E2B]">a–á · e–é · i–í · o–ó · ö–ő · u–ú · ü–ű</div>
        </div>

        <p><strong>Как обозначается долгота на письме:</strong></p>
        <ul class="list-disc pl-6 my-3 space-y-1">
          <li><b>á, é, í, ó, ú</b> имеют один штрих;</li>
          <li><b>ő, ű</b> имеют двойной штрих;</li>
          <li>точки в <b>ö</b> и <b>ü</b> обозначают качество звука, а двойной штрих в <b>ő</b> и <b>ű</b> дополнительно обозначает долготу.</li>
        </ul>

        <p>У пар <b>a/á</b> и <b>e/é</b> меняются одновременно <strong>длительность и положение органов речи</strong>. В остальных пяти парах начинающему важнее всего сначала научиться отчётливо слышать и сохранять разницу по длительности.</p>

        <table class="conj">
          <tr>
            <th>Пара</th>
            <th>Краткий пример</th>
            <th>Долгий пример</th>
            <th>Что важно услышать</th>
          </tr>
          <tr>
            <td><b>a / á</b></td>
            <td><button class="speak-btn" data-speak-text="alma">alma</button><br><span class="text-xs">яблоко</span></td>
            <td><button class="speak-btn" data-speak-text="ár">ár</button><br><span class="text-xs">цена</span></td>
            <td>Меняются качество и длительность: a ≈ /ɒ/, á ≈ /aː/</td>
          </tr>
          <tr>
            <td><b>e / é</b></td>
            <td><button class="speak-btn" data-speak-text="ember">ember</button><br><span class="text-xs">человек</span></td>
            <td><button class="speak-btn" data-speak-text="élet">élet</button><br><span class="text-xs">жизнь</span></td>
            <td>Меняются качество и длительность: e ≈ /ɛ/, é ≈ /eː/</td>
          </tr>
          <tr>
            <td><b>i / í</b></td>
            <td><button class="speak-btn" data-speak-text="itt">itt</button><br><span class="text-xs">здесь</span></td>
            <td><button class="speak-btn" data-speak-text="íz">íz</button><br><span class="text-xs">вкус</span></td>
            <td>Прежде всего следите за длительностью</td>
          </tr>
          <tr>
            <td><b>o / ó</b></td>
            <td><button class="speak-btn" data-speak-text="orvos">orvos</button><br><span class="text-xs">врач</span></td>
            <td><button class="speak-btn" data-speak-text="óra">óra</button><br><span class="text-xs">час; часы</span></td>
            <td>Прежде всего следите за длительностью</td>
          </tr>
          <tr>
            <td><b>ö / ő</b></td>
            <td><button class="speak-btn" data-speak-text="öt">öt</button><br><span class="text-xs">пять</span></td>
            <td><button class="speak-btn" data-speak-text="ő">ő</button><br><span class="text-xs">он; она</span></td>
            <td>У долгой буквы ő вместо двух точек стоит двойной штрих</td>
          </tr>
          <tr>
            <td><b>u / ú</b></td>
            <td><button class="speak-btn" data-speak-text="utca">utca</button><br><span class="text-xs">улица</span></td>
            <td><button class="speak-btn" data-speak-text="út">út</button><br><span class="text-xs">дорога; путь</span></td>
            <td>Прежде всего следите за длительностью</td>
          </tr>
          <tr>
            <td><b>ü / ű</b></td>
            <td><button class="speak-btn" data-speak-text="üveg">üveg</button><br><span class="text-xs">стекло; бутылка</span></td>
            <td><button class="speak-btn" data-speak-text="tűz">tűz</button><br><span class="text-xs">огонь</span></td>
            <td>У долгой буквы ű вместо двух точек стоит двойной штрих</td>
          </tr>
        </table>

        <div class="note">
          <b>Не путайте долготу с ударением.</b> Долгая гласная может находиться не в первом слоге, но основное словесное ударение в венгерском обычно падает на первый слог. Долгую гласную всё равно нужно произнести долгой.
        </div>
      `,
      activities: [
        {
          kind: 'listening', id: 'l1-listening-vowel-length', title: 'Аудирование: краткие и долгие гласные', assetId: 'l1_listening_vowel_length', audioStatus: 'published', transcript: L1_VOWEL_LISTENING_TRANSCRIPT, passCount: 8,
          questions: L1_VOWEL_LISTENING_TOKENS.map((token, index) => ({ kind: 'textInput' as const, id: `l1-vowel-listen-q${index + 1}`, question: `Слово ${index + 1}: введите услышанное слово, сохраняя все штрихи и точки над буквами.`, accept: [token.word], explanation: token.explanation })),
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
      subtitle: 'gy, ty, ny и звук /j/, записываемый j или ly',
      type: 'consonants-soft',
      note: 'Gy, ty, ny и ly — диграфы: они состоят из двух знаков, но в венгерском алфавите считаются отдельными буквенными единицами. J — одна буква.',
      warn: 'Русские сочетания «дь», «ть» и «нь» дают только приблизительное направление. Венгерские gy /ɟ/, ty /c/ и ny /ɲ/ — самостоятельные палатальные согласные, а не обычные русские согласные со смягчением.',
      task: 'Прослушайте каждый пример, повторите его несколько раз и свяжите написание с одним цельным звуком. Не произносите две буквы диграфа по отдельности.',
      body: `
        <p>В этой группе нужно освоить три особых палатальных согласных — <b>gy</b>, <b>ty</b>, <b>ny</b> — и звук <b>/j/</b>, который на письме передаётся буквами <b>j</b> или <b>ly</b>.</p>

        <table class="conj">
          <tr>
            <th>Запись</th>
            <th>Звук</th>
            <th>Как произносить</th>
            <th>Пример</th>
            <th>Перевод</th>
          </tr>
          <tr>
            <td><b>gy</b></td>
            <td><b>/ɟ/</b></td>
            <td>Звонкий палатальный согласный: середина языка касается твёрдого нёба. Русское «дь» — только грубое приближение.</td>
            <td><button class="speak-btn" data-speak-text="gyerek">gyerek</button></td>
            <td>ребёнок</td>
          </tr>
          <tr>
            <td><b>ty</b></td>
            <td><b>/c/</b></td>
            <td>Глухая пара звука gy: положение языка похоже, но голосовые связки не вибрируют. Русское «ть» — лишь ориентир.</td>
            <td><button class="speak-btn" data-speak-text="kutya">kutya</button></td>
            <td>собака</td>
          </tr>
          <tr>
            <td><b>ny</b></td>
            <td><b>/ɲ/</b></td>
            <td>Палатальный носовой согласный: середина языка поднята к твёрдому нёбу, а воздух проходит через нос. Похож на «нь», но не совпадает с ним полностью.</td>
            <td><button class="speak-btn" data-speak-text="anya">anya</button></td>
            <td>мать; мама</td>
          </tr>
          <tr>
            <td><b>j</b></td>
            <td><b>/j/</b></td>
            <td>Звук, близкий к русскому «й».</td>
            <td><button class="speak-btn" data-speak-text="jó">jó</button></td>
            <td>хороший; хорошо</td>
          </tr>
          <tr>
            <td><b>ly</b></td>
            <td><b>/j/</b></td>
            <td>В современном стандартном венгерском произносится так же, как j. По звучанию определить написание j или ly обычно нельзя.</td>
            <td><button class="speak-btn" data-speak-text="hely">hely</button></td>
            <td>место</td>
          </tr>
        </table>

        <div class="note">
          <b>Главное различие:</b> gy, ty и ny обозначают три разных согласных звука. J и ly, наоборот, в современном стандартном произношении обозначают один и тот же звук /j/. Поэтому написание слов с j и ly нужно запоминать.
        </div>

        <div class="note">
          <b>Как тренироваться:</b> сначала слушайте всё слово, затем повторяйте его медленно, сохраняя один цельный согласный звук. После этого произнесите слово в обычном темпе.
        </div>
      `,
      activities: [
        {
          kind: 'listening', id: 'l1-listening-soft-consonants', title: 'Аудирование: различаем gy, ty, ny и звук /j/', assetId: 'l1_listening_soft_consonants', audioStatus: 'published', transcript: L1_SOFT_CONSONANT_LISTENING_TRANSCRIPT, passCount: 8,
          questions: L1_SOFT_CONSONANT_LISTENING_TOKENS.map((token, index) => ({ id: `l1-soft-listen-q${index + 1}`, question: `Слово ${index + 1}: какой согласный звук вы слышите?`, options: ['gy /ɟ/', 'ty /c/', 'ny /ɲ/', '/j/ (на письме j или ly)'], correctIndex: token.correctIndex, explanation: token.explanation })),
        },
        {
          kind: 'controlledPractice', id: 'l1-cp-consonant-graphemes', title: 'Чтение gy, ty, ny, j и ly', passCount: 7,
          exercises: [
            { kind: 'singleChoice', id: 'l1-soft-cp-1', prompt: 'Какой звук обозначает gy?', options: ['/ɟ/', '/c/', '/ɲ/', '/j/'], correctIndex: 0 },
            { kind: 'singleChoice', id: 'l1-soft-cp-2', prompt: 'Какой звук обозначает ty?', options: ['/ɟ/', '/c/', '/ɲ/', '/j/'], correctIndex: 1 },
            { kind: 'singleChoice', id: 'l1-soft-cp-3', prompt: 'Какой звук обозначает ny?', options: ['/ɟ/', '/c/', '/ɲ/', '/j/'], correctIndex: 2 },
            { kind: 'singleChoice', id: 'l1-soft-cp-4', prompt: 'Какой звук обозначает j?', options: ['/ɟ/', '/c/', '/ɲ/', '/j/'], correctIndex: 3 },
            { kind: 'singleChoice', id: 'l1-soft-cp-5', prompt: 'Какой звук обозначает ly в современном стандартном венгерском?', options: ['/j/', '/ɲ/', '/lʲ/', '/ɟ/'], correctIndex: 0 },
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
      subtitle: 's, sz, zs, cs и dzs: шипящие и свистящие звуки',
      type: 'consonants-sibilants',
      note: 'S — одна буква. Sz, zs и cs — диграфы из двух знаков. Dzs — триграф из трёх знаков. Каждый диграф или триграф произносится как один цельный согласный звук.',
      warn: 'Главная ловушка: в венгерском s обозначает звук /ʃ/, похожий на русское «ш», а sz обозначает /s/, похожий на русское «с». Это противоположно тому, что многие ожидают по английскому или другим европейским языкам.',
      task: 'Сначала прочитайте таблицу и прослушайте каждый пример. Затем отдельно потренируйте основной контраст s /ʃ/ и sz /s/ в аудировании.',
      body: `
        <p>На этом слайде пять важных записей. Не читайте знаки внутри диграфа или триграфа по отдельности: вся запись обозначает один согласный звук.</p>

        <table class="conj">
          <tr>
            <th>Запись</th>
            <th>Звук</th>
            <th>Русский ориентир</th>
            <th>Пример</th>
            <th>Перевод</th>
          </tr>
          <tr>
            <td><b>s</b><br><span class="text-xs">одна буква</span></td>
            <td><b>/ʃ/</b></td>
            <td>похоже на «ш»</td>
            <td><button class="speak-btn" data-speak-text="sok">sok</button></td>
            <td>много</td>
          </tr>
          <tr>
            <td><b>sz</b><br><span class="text-xs">диграф</span></td>
            <td><b>/s/</b></td>
            <td>похоже на «с»</td>
            <td><button class="speak-btn" data-speak-text="szép">szép</button></td>
            <td>красивый; красивая; красивое</td>
          </tr>
          <tr>
            <td><b>zs</b><br><span class="text-xs">диграф</span></td>
            <td><b>/ʒ/</b></td>
            <td>похоже на «ж»</td>
            <td><button class="speak-btn" data-speak-text="zsír">zsír</button></td>
            <td>жир</td>
          </tr>
          <tr>
            <td><b>cs</b><br><span class="text-xs">диграф</span></td>
            <td><b>/t͡ʃ/</b></td>
            <td>похоже на «ч»</td>
            <td><button class="speak-btn" data-speak-text="csók">csók</button></td>
            <td>поцелуй</td>
          </tr>
          <tr>
            <td><b>dzs</b><br><span class="text-xs">триграф</span></td>
            <td><b>/d͡ʒ/</b></td>
            <td>похоже на «дж»</td>
            <td><button class="speak-btn" data-speak-text="dzsungel">dzsungel</button></td>
            <td>джунгли</td>
          </tr>
        </table>

        <div class="note">
          <b>Как не перепутать s и sz:</b> одиночная <b>s</b> читается как «ш», а запись <b>sz</b> — как «с». Сначала закрепите эту пару на словах <span class="hu-word">sok</span> и <span class="hu-word">szép</span>.
        </div>

        <div class="note">
          <b>Не разделяйте запись:</b> sz — не два звука «с-з», cs — не «ц-с», а dzs — не три отдельных звука. Каждая запись произносится как одна согласная.
        </div>
      `,
      activities: [
        {
          kind: 'listening', id: 'l1-listening-s-sz', title: 'Аудирование: различаем s /ʃ/ и sz /s/', assetId: 'l1_listening_s_sz', audioStatus: 'published', transcript: L1_S_SZ_LISTENING_TRANSCRIPT, passCount: 8,
          questions: L1_S_SZ_LISTENING_TOKENS.map((token, index) => ({ id: `l1-s-sz-listen-q${index + 1}`, question: `Слово ${index + 1}: какой начальный звук и какая запись подходят?`, options: ['s /ʃ/', 'sz /s/'], correctIndex: token.correctIndex, explanation: token.explanation })),
        },
        {
          kind: 'controlledPractice', id: 'l1-cp-s-sz-reading', title: 'Чтение слов с s и sz', passCount: 8,
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
      subtitle: 'Как услышать и правильно записать долгий согласный',
      type: 'consonants-double',
      note: 'Долгий согласный произносится заметно дольше краткого. Эта разница может различать слова, значения и грамматические формы.',
      warn: 'Долгий согласный — не два отдельных звука. Произнесите один цельный согласный дольше и не вставляйте между его частями дополнительную гласную.',
      task: 'Прослушайте каждую пару. Сначала повторите слова медленно, подчёркивая длительность согласного, затем произнесите их в обычном темпе.',
      body: `
        <p>В венгерском языке согласные бывают <strong>краткими</strong> и <strong>долгими</strong>. При долгом согласном смычка или шум удерживаются дольше. Например, в <b>toll</b> звук <b>l</b> длится дольше, чем в <b>tol</b>.</p>

        <h4 class="font-bold text-[#57121C] mt-4 mb-2">Как обозначается долгота на письме</h4>
        <div class="grid2 my-3">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#7A1E2B]">Одна согласная буква</div>
            <div class="font-mono text-lg mt-2">t → tt · l → ll · k → kk</div>
            <p class="text-xs text-[#2A2320]/80 mt-2">Вся буква пишется дважды.</p>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58]">Диграф или триграф</div>
            <div class="font-mono text-lg mt-2">gy → ggy · sz → ssz · dzs → ddzs</div>
            <p class="text-xs text-[#2A2320]/80 mt-2">Удваивается только первый знак буквенной единицы.</p>
          </div>
        </div>

        <p>То же правило применяется к другим многознаковым согласным:</p>
        <div class="p-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4] font-mono text-center">
          cs → ccs · ly → lly · ny → nny · ty → tty · zs → zzs
        </div>

        <table class="conj mt-4">
          <tr>
            <th>Краткий согласный</th>
            <th>Долгий согласный</th>
            <th>Что меняется</th>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="tol">tol</button>
              <br><span class="text-xs">он/она толкает</span>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="toll">toll</button>
              <br><span class="text-xs">перо; ручка</span>
            </td>
            <td><b>l → ll</b><br><span class="text-xs">долгий l удерживается дольше</span></td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="megy">megy</button>
              <br><span class="text-xs">он/она идёт</span>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="meggy">meggy</button>
              <br><span class="text-xs">кислая вишня</span>
            </td>
            <td><b>gy → ggy</b><br><span class="text-xs">удваивается первый знак диграфа</span></td>
          </tr>
          <tr>
            <td>
              <button class="speak-btn" data-speak-text="kasza">kasza</button>
              <br><span class="text-xs">коса, сельскохозяйственный инструмент</span>
            </td>
            <td>
              <button class="speak-btn" data-speak-text="kassza">kassza</button>
              <br><span class="text-xs">касса</span>
            </td>
            <td><b>sz → ssz</b><br><span class="text-xs">долгий звук /sː/ записывается ssz</span></td>
          </tr>
        </table>

        <div class="note">
          <b>Как услышать разницу:</b> обращайте внимание не на громкость, а на время удержания согласного. В быстром произношении различие может быть коротким, но оно остаётся значимым.
        </div>
      `,
    },
    {
      id: 8,
      eyebrow: 'УРОК 1 · 8/11 · УДАРЕНИЕ',
      title: 'Hangsúly',
      subtitle: 'Основное ударение падает на первый слог',
      type: 'stress',
      note: 'Практическое правило уровня A0: в нейтральном произношении отдельного венгерского слова основное словесное ударение падает на первый слог.',
      warn: 'Не путайте ударение с долготой гласной. Знаки á, é, í, ó, ő, ú, ű показывают долготу звука, а не место ударения.',
      task: 'Прослушайте примеры, произнесите слова по слогам, затем повторите их целиком, слегка выделяя первый слог.',
      body: `
        <p>В нейтральном произношении отдельно взятого венгерского слова <strong>основное словесное ударение падает на первый слог</strong>. Длина слова не меняет это базовое правило.</p>

        <div class="p-4 my-3 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]">
          <div class="font-bold text-[#57121C] mb-2">Ударение и долгота — разные явления</div>
          <p class="text-sm">В слове может быть долгая гласная не в первом слоге, но основное ударение всё равно остаётся на первом. Например: <b><u>fo</u>lyó</b>. Последняя <b>ó</b> произносится долго, однако ударение падает на <b>fo</b>.</p>
        </div>

        <table class="conj">
          <tr>
            <th>Слово</th>
            <th>По слогам</th>
            <th>Где ударение</th>
            <th>Перевод</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Budapest">Budapest</button></td>
            <td><b><u>Bu</u></b>-da-pest</td>
            <td>первый слог <b>Bu</b></td>
            <td>Будапешт</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="magyar">magyar</button></td>
            <td><b><u>ma</u></b>-gyar</td>
            <td>первый слог <b>ma</b></td>
            <td>венгр; венгерский язык; венгерский</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="folyó">folyó</button></td>
            <td><b><u>fo</u></b>-lyó</td>
            <td>первый слог <b>fo</b>, не долгая ó</td>
            <td>река</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="köszönöm">köszönöm</button></td>
            <td><b><u>kö</u></b>-szö-nöm</td>
            <td>первый слог <b>kö</b></td>
            <td>спасибо</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tanuló">tanuló</button></td>
            <td><b><u>ta</u></b>-nu-ló</td>
            <td>первый слог <b>ta</b>, не долгая ó</td>
            <td>ученик; учащийся</td>
          </tr>
        </table>

        <div class="note">
          <b>Как произносить:</b> первый слог должен звучать немного заметнее и яснее, но его не нужно выкрикивать или искусственно растягивать. Долгие гласные в других слогах сохраняют свою длительность.
        </div>

        <div class="note">
          <b>Уточнение:</b> во фразе интонация и смысловое выделение могут добавлять дополнительную выразительность отдельным словам или частям фразы. Это не отменяет базового ударения слова на первом слоге.
        </div>
      `,
      activities: [
        {
          kind: 'controlledPractice', id: 'l1-cp-stress-rule', title: 'Ударение на первом слоге', passCount: 5,
          exercises: [
            { kind: 'singleChoice', id: 'l1-stress-cp-1', prompt: 'Куда падает основное словесное ударение в отдельно произнесённом венгерском слове?', options: ['На первый слог', 'На последний слог', 'Обязательно на долгую гласную'], correctIndex: 0 },
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
      subtitle: '12 первых слов и 6 коротких фраз',
      type: 'words-practice',
      note: 'Сначала изучите слова с переводами и особенностями чтения. Затем скройте переводы, прослушайте слова и проверьте, узнаёте ли вы их на слух и при чтении.',
      warn: 'Не пытайтесь угадывать произношение по русской транскрипции. Основным образцом остаётся венгерская озвучка. Русский перевод объясняет значение, но не передаёт звучание слова.',
      task: 'Прослушайте каждое слово, повторите его вслух и обратите внимание на выделенную особенность написания. После этого прочитайте шесть коротких фраз и переходите к упражнениям.',
      body: `
        <p>Эти слова объединяют основные правила урока: <b>s/sz</b>, <b>cs</b>, <b>zs</b>, <b>gy</b>, <b>ty</b>, <b>ny</b>, <b>j/ly</b>, долгие гласные и ударение на первом слоге.</p>

        <table class="conj">
          <tr>
            <th>Слово</th>
            <th>Перевод</th>
            <th>Что заметить при чтении</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="szia">szia</button></td>
            <td>привет</td>
            <td><b>sz</b> читается как /s/, примерно «с»</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="sör">sör</button></td>
            <td>пиво</td>
            <td><b>s</b> читается как /ʃ/, примерно «ш»; <b>ö</b> — особая гласная</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="sok">sok</button></td>
            <td>много</td>
            <td>начальная <b>s</b> передаёт звук /ʃ/</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="család">család</button></td>
            <td>семья</td>
            <td><b>cs</b> читается как /t͡ʃ/, примерно «ч»; <b>á</b> — долгая гласная</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyerek">gyerek</button></td>
            <td>ребёнок</td>
            <td><b>gy</b> обозначает один палатальный согласный /ɟ/</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nyár">nyár</button></td>
            <td>лето</td>
            <td><b>ny</b> обозначает /ɲ/; <b>á</b> произносится долго</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kenyér">kenyér</button></td>
            <td>хлеб</td>
            <td>внутри слова есть <b>ny</b>; <b>é</b> — долгая гласная</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="magyar">magyar</button></td>
            <td>венгр; венгерский язык; венгерский</td>
            <td><b>gy</b> произносится как один звук; ударение на первом слоге</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kutya">kutya</button></td>
            <td>собака</td>
            <td><b>ty</b> обозначает один палатальный согласный /c/</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="zsák">zsák</button></td>
            <td>мешок</td>
            <td><b>zs</b> читается как /ʒ/, примерно «ж»; <b>á</b> — долгая</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="jó">jó</button></td>
            <td>хороший; хорошо</td>
            <td><b>j</b> читается как /j/, примерно «й»; <b>ó</b> — долгая</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="folyó">folyó</button></td>
            <td>река</td>
            <td><b>ly</b> читается как /j/; ударение на <b>fo</b>, а последняя <b>ó</b> остаётся долгой</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] mt-5 mb-2">Короткие фразы</h4>
        <table class="conj">
          <tr><th>Венгерская фраза</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Szia!">Szia!</button></td>
            <td>Привет!</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó napot!">Jó napot!</button></td>
            <td>Добрый день!</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Magyar vagyok.">Magyar vagyok.</button></td>
            <td>Я венгр / Я венгерка.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Ez egy könyv.">Ez egy könyv.</button></td>
            <td>Это книга.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="A gyerek itt van.">A gyerek itt van.</button></td>
            <td>Ребёнок здесь.</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="Jó a kenyér.">Jó a kenyér.</button></td>
            <td>Хлеб хороший.</td>
          </tr>
        </table>

        <div class="note">
          <b>Порядок работы:</b> 1) слушайте и повторяйте; 2) прочитайте слово самостоятельно; 3) закройте перевод и вспомните значение; 4) откройте перевод и проверьте себя.
        </div>
      `,
      activities: [P1_L1_PRACTICE, P1_L1_DECODING],
    },
    {
      id: 10,
      eyebrow: 'УРОК 1 · 10/11 · ЧТЕНИЕ ВСЛУХ',
      title: 'Öt szó hangosan',
      subtitle: 'Пять слов для самостоятельной тренировки произношения',
      type: 'read-aloud-practice',
      note: 'Эта практика необязательна и не оценивается автоматически. Её цель — осознанно соединить написание, звук, перевод, долготу гласных и ударение.',
      warn: 'Не читайте слова по русским буквам. Сначала слушайте венгерский образец, затем повторяйте. Русские пояснения описывают только приблизительное направление произношения.',
      task: 'Для каждого слова выполните четыре шага: прослушайте; повторите медленно; произнесите в обычном темпе; сравните себя с образцом ещё раз.',
      body: `
        <p>Пять слов выбраны так, чтобы повторить основные правила урока. Нажмите на каждое слово и следите за указанной особенностью.</p>

        <table class="conj">
          <tr>
            <th>Слово</th>
            <th>Перевод</th>
            <th>Что проверить при произношении</th>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="gyár">gyár</button></td>
            <td>завод</td>
            <td><b>gy</b> — один палатальный согласный /ɟ/; <b>á</b> произносится долго</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tyúk">tyúk</button></td>
            <td>курица; домашняя птица</td>
            <td><b>ty</b> — один палатальный согласный /c/; <b>ú</b> произносится долго</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="nyolc">nyolc</button></td>
            <td>восемь</td>
            <td><b>ny</b> — один палатальный носовой /ɲ/; конечная <b>c</b> читается как /t͡s/, примерно «ц»</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="játék">játék</button></td>
            <td>игра</td>
            <td><b>j</b> читается как /j/, примерно «й»; <b>á</b> и <b>é</b> — долгие гласные</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="folyó">folyó</button></td>
            <td>река</td>
            <td><b>ly</b> читается как /j/; ударение на первом слоге <b>fo</b>, последняя <b>ó</b> остаётся долгой</td>
          </tr>
        </table>

        <div class="note">
          <b>Самопроверка после чтения:</b>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>gy, ty и ny прозвучали как три разных цельных согласных;</li>
            <li>j и ly прозвучали как /j/, примерно «й»;</li>
            <li>á, é, ó и ú не были сокращены;</li>
            <li>основное ударение начиналось на первом слоге;</li>
            <li>между знаками диграфов не появилась лишняя гласная.</li>
          </ul>
        </div>

        <div class="note">
          <b>После устной практики:</b> выполните короткую письменную самопроверку ниже. Напишите знакомые слова и фразы, сохраняя все долгие гласные и буквосочетания.
        </div>
      `,
      activities: [P1_L1_WRITING],
      optionalSpeaking: {
        title: 'Устная практика пяти слов — необязательно',
        instructions: 'Прослушайте и произнесите по порядку gyár, tyúk, nyolc, játék и folyó. Микрофон и автоматическая оценка не используются: сравните свою запись или произношение с венгерскими образцами самостоятельно.',
        prompt: L1_READ_ALOUD_WORDS.join(', '),
        rubric: [
          'Произнесены все пять слов',
          'gy, ty и ny звучат как три разные цельные согласные',
          'j и ly передают звук /j/',
          'Долгие á, é, ó и ú не сокращены',
          'Основное ударение начинается на первом слоге',
        ],
      },
    },
    {
      id: 11,
      eyebrow: 'УРОК 1 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Что нужно знать и уметь после урока',
      type: 'summary',
      note: 'Этот слайд собирает основные правила урока в одну систему. Сначала повторите примеры, затем выполните итоговую проверку ниже.',
      warn: 'Русские звуковые подсказки являются приблизительными. Не заменяйте ими венгерское произношение: ориентируйтесь на аудио и сохраняйте долготу гласных и согласных.',
      task: 'Прочитайте каждый раздел, прослушайте примеры и убедитесь, что можете объяснить правило своими словами. После этого выполните итоговую проверку.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Алфавит и принцип чтения</h4>
        <ul class="tick">
          <li>Венгерский алфавит традиционно содержит <b>44 буквы и буквенные единицы</b>. В это число входят обычные буквы, диграфы и триграф <b>dzs</b>.</li>
          <li>Это число <b>не является количеством звуков</b> венгерского языка.</li>
          <li>Написание в целом достаточно регулярно: изучив основные соответствия между записью и звуком, обычно можно предсказать чтение слова.</li>
          <li>Диграф или триграф произносится как <b>один цельный звук</b>; его знаки не читаются по отдельности.</li>
        </ul>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Краткие и долгие гласные</h4>
        <div class="grid2 my-3">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#7A1E2B]">7 кратких гласных</div>
            <div class="font-mono text-lg mt-2">a · e · i · o · ö · u · ü</div>
            <p class="text-xs text-[#2A2320]/80 mt-2">Особенно внимательно слушайте a, e, ö и ü: они не совпадают полностью с русскими гласными.</p>
          </div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div class="font-bold text-[#2C5F58]">7 пар по долготе</div>
            <div class="font-mono text-lg mt-2">a–á · e–é · i–í · o–ó · ö–ő · u–ú · ü–ű</div>
            <p class="text-xs text-[#2A2320]/80 mt-2">В парах a/á и e/é меняются и длительность, и качество. В остальных парах начинающему прежде всего важно сохранить долготу.</p>
          </div>
        </div>

        <table class="conj">
          <tr><th>Пример</th><th>Перевод</th><th>Что показывает</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="alma">alma</button> — <button class="speak-btn" data-speak-text="ár">ár</button></td>
            <td>яблоко — цена</td>
            <td>a и á различаются качеством и длительностью</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ember">ember</button> — <button class="speak-btn" data-speak-text="élet">élet</button></td>
            <td>человек — жизнь</td>
            <td>e и é различаются качеством и длительностью</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="utca">utca</button> — <button class="speak-btn" data-speak-text="út">út</button></td>
            <td>улица — дорога</td>
            <td>u и ú различаются прежде всего длительностью</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Особые согласные</h4>
        <table class="conj">
          <tr><th>Запись</th><th>Звук</th><th>Пример</th><th>Перевод</th></tr>
          <tr><td><b>s</b></td><td>/ʃ/, примерно «ш»</td><td><button class="speak-btn" data-speak-text="sok">sok</button></td><td>много</td></tr>
          <tr><td><b>sz</b></td><td>/s/, примерно «с»</td><td><button class="speak-btn" data-speak-text="szép">szép</button></td><td>красивый</td></tr>
          <tr><td><b>zs</b></td><td>/ʒ/, примерно «ж»</td><td><button class="speak-btn" data-speak-text="zsák">zsák</button></td><td>мешок</td></tr>
          <tr><td><b>cs</b></td><td>/t͡ʃ/, примерно «ч»</td><td><button class="speak-btn" data-speak-text="család">család</button></td><td>семья</td></tr>
          <tr><td><b>dzs</b></td><td>/d͡ʒ/, примерно «дж»</td><td><button class="speak-btn" data-speak-text="dzsungel">dzsungel</button></td><td>джунгли</td></tr>
          <tr><td><b>gy</b></td><td>/ɟ/, самостоятельный палатальный согласный</td><td><button class="speak-btn" data-speak-text="gyerek">gyerek</button></td><td>ребёнок</td></tr>
          <tr><td><b>ty</b></td><td>/c/, глухая пара gy</td><td><button class="speak-btn" data-speak-text="kutya">kutya</button></td><td>собака</td></tr>
          <tr><td><b>ny</b></td><td>/ɲ/, палатальный носовой</td><td><button class="speak-btn" data-speak-text="nyár">nyár</button></td><td>лето</td></tr>
          <tr><td><b>j и ly</b></td><td>/j/, примерно «й»</td><td><button class="speak-btn" data-speak-text="jó">jó</button> · <button class="speak-btn" data-speak-text="folyó">folyó</button></td><td>хороший · река</td></tr>
        </table>

        <div class="note">
          <b>Главное о j и ly:</b> в современном стандартном произношении они звучат одинаково. По одному звучанию обычно нельзя определить написание, поэтому форму слова нужно запоминать.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Долгие согласные</h4>
        <p>Долгий согласный является одним звуком, который удерживается дольше. Если согласная записывается одной буквой, буква удваивается. В диграфе или триграфе удваивается только первый знак.</p>
        <table class="conj">
          <tr><th>Краткий</th><th>Долгий</th><th>Перевод</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tol">tol</button></td>
            <td><button class="speak-btn" data-speak-text="toll">toll</button></td>
            <td>он/она толкает — перо, ручка</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="megy">megy</button></td>
            <td><button class="speak-btn" data-speak-text="meggy">meggy</button></td>
            <td>он/она идёт — кислая вишня</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="kasza">kasza</button></td>
            <td><button class="speak-btn" data-speak-text="kassza">kassza</button></td>
            <td>коса — касса</td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Ударение</h4>
        <p>В нейтральном произношении отдельного венгерского слова основное словесное ударение падает на <strong>первый слог</strong>. Долгота и ударение — разные явления.</p>
        <div class="grid2 my-3">
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><b><u>Bu</u>-da-pest</b><br><span class="text-xs">Будапешт: ударение на Bu</span></div>
          <div class="p-4 rounded-xl border border-[#D9CBB0] bg-white"><b><u>fo</u>-lyó</b><br><span class="text-xs">река: ударение на fo, последняя ó остаётся долгой</span></div>
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Что вы уже должны уметь</h4>
        <ul class="tick">
          <li>объяснить, почему 44 буквенные единицы — не то же самое, что 44 звука;</li>
          <li>прочитать и различить <b>s</b> и <b>sz</b>;</li>
          <li>узнать и произнести <b>gy, ty, ny</b> как три разные согласные;</li>
          <li>помнить, что <b>j</b> и <b>ly</b> произносятся одинаково, но пишутся по-разному;</li>
          <li>сохранять долгие гласные и согласные;</li>
          <li>ставить основное ударение на первый слог, не сокращая долгие гласные в других слогах;</li>
          <li>прочитать слова <b>gyár, tyúk, nyolc, játék, folyó</b> и объяснить их значение.</li>
        </ul>

        <div class="note">
          <b>Перед переходом к следующему уроку:</b> ещё раз прослушайте слова, в которых допустили ошибки, затем выполните итоговую проверку. Необязательную устную практику оценивайте самостоятельно по венгерским образцам.
        </div>
      `,
      activities: [
        {
          kind: 'exitCheck', id: 'l1-exit-check', title: 'Итоговая проверка урока',
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
