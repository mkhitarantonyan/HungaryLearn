import { Lesson, LessonActivity } from '../../types';

const L19_CONTROLLED: LessonActivity = {
  kind: 'controlledPractice',
  id: 'l19-cp-contextual-future',
  title: 'Планы, прогнозы и изменение договорённости',
  passCount: 11,
  exercises: [
    { kind: 'singleChoice', id: 'l19-p5-cp-1', prompt: 'A · У вас назначена встреча с Анной сегодня вечером.', options: ['Este találkozom Annával.', 'Este találkozni fogtam Annával.', 'Este találkoztam Annával.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l19-p5-cp-2', prompt: 'A · У тебя фиксированная поездка на следующей неделе.', options: ['Jövő héten Budapestre utazom.', 'Jövő héten Budapestre utaztam.', 'Jövő héten utazni fogott.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l19-p5-cp-3', prompt: 'A · Какое предложение грамматически в настоящем, но обозначает будущий график?', options: ['Holnap dolgozom.', 'Tegnap dolgoztam.', 'Most dolgozni fogok.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l19-p5-cp-4', prompt: 'B · Mit ___ csinálni hétvégén? (te)', accept: ['fogsz'] },
    { kind: 'fillGap', id: 'l19-p5-cp-5', prompt: 'B · Este tanulni ___. (ti)', accept: ['fogtok'] },
    { kind: 'singleChoice', id: 'l19-p5-cp-6', prompt: 'B · Ты обещаешь позвонить позже.', options: ['Majd felhívlak.', 'Majd felhívtalak.', 'Most felhívtalak.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l19-p5-cp-7', prompt: 'C · Явное будущее, отрицание.', options: ['Holnap nem fogok dolgozni.', 'Holnap fogok nem dolgozni.', 'Holnap nem dolgoztam.'], correctIndex: 0 },
    { kind: 'fillGap', id: 'l19-p5-cp-8', prompt: 'C · Vasárnap pihenni ___. (mi)', accept: ['fogunk'] },
    { kind: 'singleChoice', id: 'l19-p5-cp-9', prompt: 'D · Прогноз погоды.', options: ['Szerintem esni fog.', 'Szerintem esik tegnap.', 'Szerintem esett fog.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l19-p5-cp-10', prompt: 'D · Какое предложение является прогнозом, а не фиксированной договорённостью?', options: ['Szerintem holnap sokat fogok dolgozni.', 'Holnap tízkor dolgozom.', 'Tegnap sokat dolgoztam.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l19-p5-cp-11', prompt: 'D · Простой прогноз о друзьях.', options: ['A barátaim is dolgozni fognak.', 'A barátaim is dolgozni fogok.', 'A barátaim is dolgoztak holnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l19-p5-cp-12', prompt: 'E · Друг отменил встречу в 10:00. Как естественно отреагировать?', options: ['Rendben. Mikor tudunk találkozni?', 'Tegnap találkozunk.', 'Nem tudtam holnap.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l19-p5-cp-13', prompt: 'E · Предложи новое время.', options: ['Találkozzunk inkább délután kettőkor!', 'Találkoztunk délután kettőkor!', 'Délután kettőkor esett.'], correctIndex: 0 },
    { kind: 'singleChoice', id: 'l19-p5-cp-14', prompt: 'E · Подтверди новую договорённость.', options: ['Jó, akkor kettőkor találkozunk a pályaudvarnál.', 'Jó, akkor kettőkor találkoztunk.', 'Jó, akkor kettőkor fog esni.'], correctIndex: 0 },
  ],
};

const L19_READING: LessonActivity = {
  kind: 'reading',
  id: 'l19-reading-busy-weekend',
  title: 'Egy sűrű hétvége',
  instructions: 'Прочитай текст и восстанови планы, изменения и итоговые договорённости.',
  content: {
    type: 'prose',
    title: 'Egy sűrű hétvége',
    paragraphs: [
      'Nóra és Márk már hétfőn megtervezik a hétvégét. Péntek este hétkor találkoznak egy kis étteremben, mert régóta nem beszélgettek nyugodtan. Utána moziba mennek, de még nem döntötték el, melyik filmet nézik meg. Nóra péntek délután asztalt foglal, Márk pedig megnézi a moziműsort, és üzenetet küld két lehetséges filmről.',
      'Szombat reggel tízkor vonattal Szentendrére utaznak. Azt tervezik, hogy megnézik a múzeumot, sétálnak a Duna-parton, és délután egy kávézóban pihennek. Péntek délután azonban Márk üzenetet kap: szombaton délig dolgoznia kell. Ezért a tízórás vonatot lemondják, és kettőkor találkoznak a pályaudvaron.',
      'Az időjárás-előrejelzés szerint délután esni fog. Nóra először azt javasolja, hogy maradjanak Budapesten, de Márk szerint az eső nem fog egész nap tartani. Végül úgy döntenek, hogy elutaznak, de a hosszú séta helyett először a múzeumba mennek. Ha később jó lesz az idő, a Duna-parton is sétálnak. Nóra esernyőt fog vinni, Márk pedig előre megveszi a vonatjegyeket, hogy délután ne kelljen sokáig várniuk.',
      'Vasárnap Nóra a családjával ebédel, Márk pedig otthon fog pihenni és készülni a következő hétre. Este felhívják egymást, és megbeszélik, milyen volt a megváltozott program. Ha lesz idejük, a következő közös hétvégét is elkezdik tervezni.',
    ],
  },
  passCount: 6,
  questions: [
    { id: 'l19-p5-read-1', question: 'Mit csinálnak péntek este?', options: ['Étteremben találkoznak, majd moziba mennek', 'Szentendrére utaznak', 'Otthon dolgoznak'], correctIndex: 0 },
    { id: 'l19-p5-read-2', question: 'Mi volt az eredeti szombati utazási terv?', options: ['A tízórás vonattal mennek Szentendrére', 'Autóval mennek délben', 'Este repülővel utaznak'], correctIndex: 0 },
    { id: 'l19-p5-read-3', question: 'Miért kell megváltoztatni a találkozó idejét?', options: ['Márknak délig dolgoznia kell', 'Nóra beteg', 'A múzeum bezárt'], correctIndex: 0 },
    { id: 'l19-p5-read-4', question: 'Mikor és hol találkoznak végül szombaton?', options: ['Kettőkor a pályaudvaron', 'Tízkor az étteremben', 'Hétkor a múzeumban'], correctIndex: 0 },
    { id: 'l19-p5-read-5', question: 'Milyen időt jósolnak szombat délutánra?', options: ['Esni fog', 'Havazni fog', 'Biztosan sütni fog a nap'], correctIndex: 0 },
    { id: 'l19-p5-read-6', question: 'Mi az alternatív program rossz idő esetén?', options: ['Először a múzeumba mennek, a séta később lehetséges', 'Hazamennek és dolgoznak', 'Lemondják az egész hétvégét'], correctIndex: 0 },
    { id: 'l19-p5-read-7', question: 'Mit csinál Nóra vasárnap?', options: ['A családjával ebédel', 'Egész nap dolgozik', 'Szentendrén marad'], correctIndex: 0 },
    { id: 'l19-p5-read-8', question: 'Mi mutatja, hogy a program rugalmas?', options: ['A munka és az időjárás miatt új időt és sorrendet választanak', 'Minden pontosan az eredeti terv szerint történik', 'Nem beszélnek egymással'], correctIndex: 0 },
  ],
};

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

const L19_ROLEPLAY: LessonActivity = {
  kind: 'rolePlay',
  id: 'l19-roleplay-saturday-plan',
  title: 'RolePlay: меняем планы на субботу',
  partnerLabel: 'Друг',
  completionMessage: 'Новая договорённость достигнута. Проверь реакцию, предложение, погоду и финальное подтверждение времени и места.',
  startTurnId: 'l19-rp-1',
  turns: [
    { id: 'l19-rp-1', speaker: 'waiter', prompt: 'Mit szólsz hozzá? Találkozzunk szombaton délelőtt tízkor a pályaudvarnál!', next: 'l19-rp-2' },
    { id: 'l19-rp-2', speaker: 'learner', prompt: 'Согласись и спроси, что вы будете делать.', responseMode: 'selfPractice', model: 'Jó ötlet! Mit fogunk csinálni?', next: 'l19-rp-3' },
    { id: 'l19-rp-3', speaker: 'waiter', prompt: 'Elutazunk Szentendrére, és sétálunk a Duna-parton. Viszont most szóltak, hogy délig dolgoznom kell.', next: 'l19-rp-4' },
    { id: 'l19-rp-4', speaker: 'learner', prompt: 'Отреагируй и спроси о новом времени.', responseMode: 'selfPractice', model: 'Értem, semmi baj. Mikor tudunk akkor találkozni?', next: 'l19-rp-5' },
    { id: 'l19-rp-5', speaker: 'waiter', prompt: 'Talán délután kettőkor már jó lesz. Neked megfelel?', next: 'l19-rp-6' },
    { id: 'l19-rp-6', speaker: 'learner', prompt: 'Предложи новое занятие или порядок программы.', responseMode: 'selfPractice', model: 'Találkozzunk kettőkor, és menjünk először a múzeumba!', next: 'l19-rp-7' },
    { id: 'l19-rp-7', speaker: 'waiter', prompt: 'Jó, benne vagyok. Vonattal menjünk, vagy inkább autóval?', next: 'l19-rp-8' },
    { id: 'l19-rp-8', speaker: 'learner', prompt: 'Обсуди транспорт и место встречи.', responseMode: 'selfPractice', model: 'Menjünk vonattal, és találkozzunk a főbejáratnál.', next: 'l19-rp-9' },
    { id: 'l19-rp-9', speaker: 'waiter', prompt: 'Egyébként az előrejelzés szerint délután esni fog.', next: 'l19-rp-10' },
    { id: 'l19-rp-10', speaker: 'learner', prompt: 'Отреагируй на прогноз и предложи запасной план.', responseMode: 'selfPractice', model: 'Ha esik, maradjunk tovább a múzeumban, és utána üljünk be egy kávézóba.', next: 'l19-rp-11' },
    { id: 'l19-rp-11', speaker: 'waiter', prompt: 'Rendben. Akkor a séta majd az időjárástól függ.', next: 'l19-rp-12' },
    { id: 'l19-rp-12', speaker: 'learner', prompt: 'Подтверди итоговые время, место и программу.', responseMode: 'selfPractice', model: 'Tehát szombaton kettőkor találkozunk a pályaudvar főbejáratánál, és először a múzeumba megyünk.', next: 'l19-rp-13' },
    { id: 'l19-rp-13', speaker: 'waiter', prompt: 'Pontosan. Írok majd, ha még változik valami.', next: 'l19-rp-14' },
    { id: 'l19-rp-14', speaker: 'learner', prompt: 'Вежливо заверши разговор.', responseMode: 'selfPractice', model: 'Rendben, várom az üzenetedet. Szia!', next: 'l19-rp-15' },
    { id: 'l19-rp-15', speaker: 'waiter', prompt: 'Szia, akkor szombaton találkozunk!' },
  ],
};

const L19_WRITING: LessonActivity = {
  kind: 'writing',
  id: 'l19-writing-plans-predictions',
  title: 'Письмо другу: планы на следующие выходные',
  prompt: 'Напиши другу 90–110 слов о планах на следующие выходные. Упомяни пятницу, субботу и воскресенье; одну фиксированную договорённость; одно намерение; один прогноз; одно возможное изменение и его причину. Заверши вопросом другу.',
  modelAnswer: [
    'Holnap dolgozni fogok.',
    'Jövő héten találkozni fogok a barátaimmal.',
    'Szombaton Budapestre megyek.',
    'Szerintem holnap esni fog.',
    'Szerintem Anna tanulni fog.',
    'Szerintem Péter jövő hónapban utazni fog.',
  ],
  rubric: ['90–110 слов', 'Упомянуты пятница, суббота и воскресенье', 'Есть фиксированная договорённость', 'Есть намерение и прогноз', 'Есть возможное изменение с причиной', 'Есть вопрос другу'],
};

const L19_SPEAKING = {
  title: 'Говорение: планы и прогнозы',
  instructions: 'Говори около 2 минут о следующей неделе: работа или учёба, одна назначенная встреча, планы на выходные, одно ожидаемое событие и одно возможное изменение. Это текстовая self-practice без микрофона, score и evidence.',
  prompt: 'Jövő héten... Kedden ... találkozom. A hétvégén ... fogok. Szerintem... Lehet, hogy a terv megváltozik, mert...',
  rubric: ['Около 2 минут', 'Есть работа или учёба', 'Есть назначенная встреча', 'Есть план на выходные', 'Есть прогноз', 'Есть возможное изменение'],
};

const L19_EXIT: LessonActivity = {
  kind: 'exitCheck',
  id: 'l19-exit-check',
  title: 'Проверка целей урока',
  checks: [
    { objectiveId: 'l19_form-future', activityId: 'l19-cp-contextual-future', evidenceKind: 'grammar' },
    { objectiveId: 'l19_conjugate-fog', activityId: 'l19-cp-contextual-future', evidenceKind: 'grammar' },
    { objectiveId: 'l19_use-future-plans', activityId: 'l19-writing-plans-predictions', evidenceKind: 'writing' },
    { objectiveId: 'l19_distinguish-tenses', activityId: 'l19-reading-busy-weekend', evidenceKind: 'reading', evidenceComponents: [{ activityId: 'l19-listening-future', evidenceKind: 'listening' }] },
    { objectiveId: 'l19_make-predictions', activityId: 'l19-cp-contextual-future', evidenceKind: 'grammar', evidenceComponents: [{ activityId: 'l19-roleplay-saturday-plan', evidenceKind: 'interaction' }] },
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
      subtitle: 'Будущее определяется не только формой глагола, но и временным контекстом',
      type: 'overview',
      note: 'В венгерском не каждое будущее предложение требует fog. Если будущий момент уже понятен из времени или ситуации, настоящее время часто звучит естественно.',
      warn: 'Не переноси автоматически английское правило «будущее = отдельная форма». Сначала посмотри на маркер времени и контекст.',
      task: 'Для каждого примера сначала определи время по контексту: прошлое, настоящее или будущее. Затем объясни, почему в будущем примере fog может быть или не быть.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Одна линия времени</h4>

        <table class="conj">
          <tr><th>Время</th><th>Пример</th><th>Что замечаем</th></tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="tegnap" data-speak-lang="hu-HU">tegnap</button></td>
            <td><button class="speak-btn" data-speak-text="Tegnap dolgoztam." data-speak-lang="hu-HU">Tegnap dolgoztam.</button></td>
            <td>прошлое — здесь только знакомый ориентир</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="ma" data-speak-lang="hu-HU">ma</button></td>
            <td><button class="speak-btn" data-speak-text="Ma dolgozom." data-speak-lang="hu-HU">Ma dolgozom.</button></td>
            <td>настоящее / текущий день</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="holnap" data-speak-lang="hu-HU">holnap</button></td>
            <td><button class="speak-btn" data-speak-text="Holnap dolgozom." data-speak-lang="hu-HU">Holnap dolgozom.</button></td>
            <td>форма настоящего, но значение будущее</td>
          </tr>
          <tr>
            <td><button class="speak-btn" data-speak-text="holnap" data-speak-lang="hu-HU">holnap</button></td>
            <td><button class="speak-btn" data-speak-text="Holnap dolgozni fogok." data-speak-lang="hu-HU">Holnap dolgozni fogok.</button></td>
            <td>будущее выражено явно</td>
          </tr>
        </table>

        <div class="note">
          Два последних предложения могут говорить об одном и том же завтрашнем действии.
          Разница не сводится к «правильно / неправильно».
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Будущее через настоящее время</h4>

        <p><button class="speak-btn" data-speak-text="Este találkozom Annával." data-speak-lang="hu-HU">Este találkozom Annával.</button></p>
        <p><button class="speak-btn" data-speak-text="Jövő héten Budapestre utazom." data-speak-lang="hu-HU">Jövő héten Budapestre utazom.</button></p>

        <div class="note">
          Когда план или будущий момент уже понятен, настоящее время очень часто используется для будущего.
          Особенно естественно это звучит с конкретным временем, расписанием или договорённостью.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Явное будущее</h4>

        <p><button class="speak-btn" data-speak-text="Holnap dolgozni fogok." data-speak-lang="hu-HU">Holnap dolgozni fogok.</button></p>

        <div class="note">
          Конструкция с fog делает будущую перспективу явной.
          Она будет особенно полезна дальше для прогнозов, обещаний и нейтрального сообщения о будущем.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Маркеры будущего</h4>

        <p>
          <button class="speak-btn" data-speak-text="holnap" data-speak-lang="hu-HU">holnap</button>,
          <button class="speak-btn" data-speak-text="ma este" data-speak-lang="hu-HU">ma este</button>,
          <button class="speak-btn" data-speak-text="hétvégén" data-speak-lang="hu-HU">hétvégén</button>,
          <button class="speak-btn" data-speak-text="jövő héten" data-speak-lang="hu-HU">jövő héten</button>,
          <button class="speak-btn" data-speak-text="később" data-speak-lang="hu-HU">később</button>
        </p>

        <div class="warn">
          Сам маркер будущего не заставляет автоматически использовать fog.
          Сначала выбери смысл и контекст, затем форму.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Какое время обозначает предложение с holnap и формой настоящего?</p>
          <p>Почему фраза о встрече вечером может стоять в настоящем времени?</p>
          <p>Нужно ли обязательно добавлять fog после каждого будущего маркера?</p>
        </details>

        <div class="note">
          Граница 19.1: здесь только линия времени и две стратегии будущего.
          На 19.2 разберём явную конструкцию, а на 19.3 — её формы по лицам.
        </div>
      `,
    },    {
      id: 2,
      eyebrow: 'УРОК 19 · 2/11 · FOG + ИНФИНИТИВ',
      title: 'Dolgozni fogok',
      subtitle: 'Явное будущее: действие остаётся в инфинитиве, лицо выражает форма fog',
      type: 'grammar',
      note: 'Для уровня A2 закрепляем одну нейтральную учебную модель с простыми глаголами. Это не означает, что венгерский порядок слов всегда фиксирован.',
      warn: 'Не спрягая смысловой глагол дважды. В явной будущей конструкции действие стоит в инфинитиве, а лицо показывает форма fog.',
      task: 'В каждом примере найди три части: маркер времени, инфинитив действия и форму fog. Формы по всем шести лицам пока не учи — это 19.3.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Базовая учебная схема</h4>

        <div class="note">
          <b>маркер времени + инфинитив + форма fog</b>
        </div>

        <p><button class="speak-btn" data-speak-text="Holnap tanulni fogok." data-speak-lang="hu-HU">Holnap tanulni fogok.</button></p>

        <table class="conj">
          <tr><th>Часть</th><th>Что делает</th></tr>
          <tr><td><b>Holnap</b></td><td>задаёт будущий момент</td></tr>
          <tr><td><b>tanulni</b></td><td>называет действие в инфинитиве</td></tr>
          <tr><td><b>fogok</b></td><td>показывает явное будущее и лицо</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Действие не получает личное окончание</h4>

        <p><button class="speak-btn" data-speak-text="tanulni fogok" data-speak-lang="hu-HU">tanulni fogok</button></p>
        <p><button class="speak-btn" data-speak-text="dolgozni fogsz" data-speak-lang="hu-HU">dolgozni fogsz</button></p>
        <p><button class="speak-btn" data-speak-text="utazni fog" data-speak-lang="hu-HU">utazni fog</button></p>

        <div class="note">
          Инфинитив сохраняется как название действия.
          Меняется вспомогательная форма — именно она показывает лицо.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Добавь временной контекст</h4>

        <p><button class="speak-btn" data-speak-text="Holnap tanulni fogok." data-speak-lang="hu-HU">Holnap tanulni fogok.</button></p>
        <p><button class="speak-btn" data-speak-text="Este dolgozni fogsz." data-speak-lang="hu-HU">Este dolgozni fogsz.</button></p>
        <p><button class="speak-btn" data-speak-text="Jövő héten utazni fog." data-speak-lang="hu-HU">Jövő héten utazni fog.</button></p>

        <div class="note">
          Для первых упражнений удобно держать именно такой порядок.
          Позже ты увидишь другие порядки слов в вопросах, фокусе и естественном диалоге.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Не превращай схему в абсолютное правило порядка слов</h4>

        <div class="warn">
          Венгерский порядок слов зависит от того, что говорящий выделяет.
          Поэтому другая позиция формы fog не означает автоматически грамматическую ошибку.
          На 19.2 нужна стабильная тренировочная модель, а не вся система фокуса.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Отдельная частотная будущая форма</h4>

        <p><button class="speak-btn" data-speak-text="Holnap napos idő lesz." data-speak-lang="hu-HU">Holnap napos idő lesz.</button></p>

        <div class="note">
          Форма <b>lesz</b> уже знакома по погоде и означает будущее для глагола «быть».
          На этом уроке узнаём её как отдельную частотную форму, а продуктивно строим будущее через fog + инфинитив.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">В каком слове выражается лицо в явной будущей конструкции?</p>
          <p>Что происходит со смысловым глаголом?</p>
          <p>Почему учебный порядок слов нельзя считать единственно возможным?</p>
        </details>

        <div class="note">
          Граница 19.2: только устройство явного будущего.
          На 19.3 выучим шесть неопределённых форм fog; другие парадигмы пока не вводим.
        </div>
      `,
    },    {
      id: 3,
      eyebrow: 'УРОК 19 · 3/11 · СПРЯЖЕНИЕ FOG',
      title: 'fogok, fogsz, fog...',
      subtitle: 'Шесть продуктивных неопределённых форм: лицо выражает fog, действие остаётся инфинитивом',
      type: 'grammar',
      note: 'Это обязательная продуктивная мини-парадигма Lesson 19. Местоимения én, te, ő, mi, ti, ők нужны как учебная опора, но в обычной фразе часто опускаются.',
      warn: 'Не добавляй личное окончание к инфинитиву. В конструкции будущего меняется fog, а действие остаётся в базовом инфинитиве.',
      task: 'Закрой столбец с формами fog и восстанови 6 форм по лицам. Затем выбери форму для трёх новых инфинитивов без подсказки.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Единственное число</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>Форма fog</th><th>Пример</th></tr>
          <tr>
            <td>én</td>
            <td><button class="speak-btn" data-speak-text="fogok" data-speak-lang="hu-HU">fogok</button></td>
            <td><button class="speak-btn" data-speak-text="tanulni fogok" data-speak-lang="hu-HU">tanulni fogok</button></td>
          </tr>
          <tr>
            <td>te</td>
            <td><button class="speak-btn" data-speak-text="fogsz" data-speak-lang="hu-HU">fogsz</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozni fogsz" data-speak-lang="hu-HU">dolgozni fogsz</button></td>
          </tr>
          <tr>
            <td>ő</td>
            <td><button class="speak-btn" data-speak-text="fog" data-speak-lang="hu-HU">fog</button></td>
            <td><button class="speak-btn" data-speak-text="utazni fog" data-speak-lang="hu-HU">utazni fog</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Множественное число</h4>

        <table class="conj">
          <tr><th>Лицо</th><th>Форма fog</th><th>Пример</th></tr>
          <tr>
            <td>mi</td>
            <td><button class="speak-btn" data-speak-text="fogunk" data-speak-lang="hu-HU">fogunk</button></td>
            <td><button class="speak-btn" data-speak-text="főzni fogunk" data-speak-lang="hu-HU">főzni fogunk</button></td>
          </tr>
          <tr>
            <td>ti</td>
            <td><button class="speak-btn" data-speak-text="fogtok" data-speak-lang="hu-HU">fogtok</button></td>
            <td><button class="speak-btn" data-speak-text="tanulni fogtok" data-speak-lang="hu-HU">tanulni fogtok</button></td>
          </tr>
          <tr>
            <td>ők</td>
            <td><button class="speak-btn" data-speak-text="fognak" data-speak-lang="hu-HU">fognak</button></td>
            <td><button class="speak-btn" data-speak-text="dolgozni fognak" data-speak-lang="hu-HU">dolgozni fognak</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Алгоритм выбора формы</h4>

        <ol class="tasklist">
          <li>определи, кто выполняет действие;</li>
          <li>оставь действие в базовом инфинитиве;</li>
          <li>выбери форму fog по лицу;</li>
          <li>добавь временной маркер, если он нужен контексту.</li>
        </ol>

        <p class="mt-3"><button class="speak-btn" data-speak-text="Holnap főzni fogunk." data-speak-lang="hu-HU">Holnap főzni fogunk.</button></p>
        <p><button class="speak-btn" data-speak-text="Este tanulni fogtok." data-speak-lang="hu-HU">Este tanulni fogtok.</button></p>
        <p><button class="speak-btn" data-speak-text="Jövő héten dolgozni fognak." data-speak-lang="hu-HU">Jövő héten dolgozni fognak.</button></p>

        <div class="note">
          По форме fog уже видно лицо, поэтому отдельное местоимение обычно не обязательно.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Типичные ошибки</h4>

        <div class="warn">
          Не смешивай лица: для «мы» нужна форма <b>fogunk</b>, для «они» — <b>fognak</b>.
          И не изменяй инфинитив ради лица.
        </div>

        <div class="warn">
          На 19.3 тренируем только эту неопределённую парадигму.
          Формы определённого спряжения — следующий слайд и только для узнавания.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Какая форма нужна для «ты»?</p>
          <p>Какая для «мы»?</p>
          <p>Какая для «они»?</p>
          <p>Как сказать: «завтра мы будем готовить»?</p>
          <p>Как сказать: «вечером вы будете учиться»?</p>
        </details>

        <div class="note">
          Граница 19.3: шесть неопределённых форм fog — активно.
          Отрицание и вопрос оставляем для 19.5.
        </div>
      `,
    },    {
      id: 4,
      eyebrow: 'УРОК 19 · 4/11 · ЗНАКОМСТВО С ОПРЕДЕЛЁННЫМИ ФОРМАМИ',
      title: 'fogok или fogom?',
      subtitle: 'Главная цель — узнать контраст, а не выучить вторую парадигму наизусть',
      type: 'grammar',
      note: 'На 19.4 определённые формы только узнаём. Для прохождения Lesson 19 продуктивно нужна неопределённая парадигма с предыдущего слайда.',
      warn: 'Не выводи общее правило только из артикля a/az или egy. Здесь два примера служат знакомым ориентиром; полная система определённого/неопределённого спряжения шире.',
      task: 'Сравни две фразы и объясни только одно: почему в первой узнаём fogok, а во второй fogom. Остальные определённые формы достаточно распознать визуально и на слух.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Сравни два знакомых объекта</h4>

        <p><button class="speak-btn" data-speak-text="Olvasni fogok egy könyvet." data-speak-lang="hu-HU">Olvasni fogok egy könyvet.</button></p>
        <p><button class="speak-btn" data-speak-text="El fogom olvasni a könyvet." data-speak-lang="hu-HU">El fogom olvasni a könyvet.</button></p>

        <table class="conj">
          <tr><th>В этом примере</th><th>Объект</th><th>Форма</th></tr>
          <tr><td>одна / какая-то книга</td><td><button class="speak-btn" data-speak-text="egy könyvet" data-speak-lang="hu-HU">egy könyvet</button></td><td><button class="speak-btn" data-speak-text="fogok" data-speak-lang="hu-HU">fogok</button></td></tr>
          <tr><td>конкретная книга</td><td><button class="speak-btn" data-speak-text="a könyvet" data-speak-lang="hu-HU">a könyvet</button></td><td><button class="speak-btn" data-speak-text="fogom" data-speak-lang="hu-HU">fogom</button></td></tr>
        </table>

        <div class="note">
          На этом уровне достаточно увидеть знакомый контраст объекта и узнать форму <b>fogom</b>.
          Полную систему выбора спряжения здесь не строим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Почему во второй фразе стоит el отдельно</h4>

        <p><button class="speak-btn" data-speak-text="El fogom olvasni a könyvet." data-speak-lang="hu-HU">El fogom olvasni a könyvet.</button></p>

        <div class="note">
          В этой будущей конструкции приставка <b>el</b> стоит перед формой fog, а инфинитив <b>olvasni</b> — после неё.
          Просто узнавай готовый шаблон; отдельную теорию порядка приставок здесь не вводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Банк распознавания — не активная парадигма</h4>

        <p>
          <button class="speak-btn" data-speak-text="fogom" data-speak-lang="hu-HU">fogom</button>,
          <button class="speak-btn" data-speak-text="fogod" data-speak-lang="hu-HU">fogod</button>,
          <button class="speak-btn" data-speak-text="fogja" data-speak-lang="hu-HU">fogja</button>,
          <button class="speak-btn" data-speak-text="fogjuk" data-speak-lang="hu-HU">fogjuk</button>,
          <button class="speak-btn" data-speak-text="fogjátok" data-speak-lang="hu-HU">fogjátok</button>,
          <button class="speak-btn" data-speak-text="fogják" data-speak-lang="hu-HU">fogják</button>
        </p>

        <div class="warn">
          Эти шесть форм сейчас не нужно воспроизводить по памяти.
          Задача — не удивляться им в тексте и узнавать, что это формы определённого спряжения fog.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Что нужно уметь после 19.4</h4>

        <ol class="tasklist">
          <li>уверенно строить неопределённые формы с 19.3;</li>
          <li>узнавать контраст fogok / fogom в знакомой паре;</li>
          <li>распознавать остальные определённые формы без требования активно их спрягать;</li>
          <li>не переносить упрощённый пример на всю систему объектов.</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Какая из двух форм на этом уроке продуктивная для «я» в неопределённой парадигме?</p>
          <p>Какую определённую форму «я» нужно уверенно узнавать?</p>
          <p>Нужно ли сейчас воспроизводить все шесть определённых форм по памяти?</p>
        </details>

        <div class="note">
          Граница 19.4: распознавание определённых форм.
          На 19.5 возвращаемся к продуктивной модели и добавляем отрицание и базовый вопрос.
        </div>
      `,
    },    {
      id: 5,
      eyebrow: 'УРОК 19 · 5/11 · ОТРИЦАНИЕ И ВОПРОС',
      title: 'Nem fogok... Dolgozni fogsz?',
      subtitle: 'Нейтральное отрицание и два базовых вопросительных шаблона',
      type: 'grammar',
      note: 'На 19.5 закрепляем нейтральные учебные модели. Полную систему фокуса и всех возможных порядков слов не вводим.',
      warn: 'В нейтральном отрицании nem ставим перед личной формой fog. Не переносим немеханически порядок из русского.',
      task: 'Построй 3 типа фраз: отрицательное будущее, вопрос да/нет и вопрос с вопросительным словом. В каждом примере найди форму fog и инфинитив.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Нейтральное отрицание</h4>

        <p><button class="speak-btn" data-speak-text="Holnap nem fogok dolgozni." data-speak-lang="hu-HU">Holnap nem fogok dolgozni.</button></p>

        <table class="conj">
          <tr><th>Часть</th><th>Функция</th></tr>
          <tr><td><b>Holnap</b></td><td>будущий момент</td></tr>
          <tr><td><b>nem</b></td><td>отрицание</td></tr>
          <tr><td><b>fogok</b></td><td>лицо + явное будущее</td></tr>
          <tr><td><b>dolgozni</b></td><td>действие в инфинитиве</td></tr>
        </table>

        <div class="note">
          Для нейтрального отрицания держи рабочую схему:
          <b>маркер времени + nem + форма fog + инфинитив</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Вопрос да / нет</h4>

        <p><button class="speak-btn" data-speak-text="Holnap dolgozni fogsz?" data-speak-lang="hu-HU">Holnap dolgozni fogsz?</button></p>

        <p><button class="speak-btn" data-speak-text="Igen, fogok." data-speak-lang="hu-HU">Igen, fogok.</button></p>
        <p><button class="speak-btn" data-speak-text="Nem, nem fogok." data-speak-lang="hu-HU">Nem, nem fogok.</button></p>

        <div class="note">
          В простом вопросе этого урока сохраняем знакомую учебную структуру и используем вопросительную интонацию.
          Короткий ответ повторяет личную форму.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Вопрос с вопросительным словом</h4>

        <p><button class="speak-btn" data-speak-text="Mit fogsz csinálni hétvégén?" data-speak-lang="hu-HU">Mit fogsz csinálni hétvégén?</button></p>

        <div class="note">
          Этот шаблон напрямую пригодится в Controlled Practice:
          сначала вопросительное слово, затем личная форма, затем инфинитив действия.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Типичные ошибки</h4>

        <div class="warn">
          Для нейтрального задания не используй порядок <s>Holnap fogok nem dolgozni.</s>
          Целевая форма: <b>Holnap nem fogok dolgozni.</b>
        </div>

        <div class="warn">
          Не перепутай будущее и знакомое прошедшее:
          <b>holnap</b> требует будущего смысла, а форма прошлого относится к уже завершённому действию.
        </div>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Мини-проверка без ответов</summary>
          <p class="mt-3">Как сказать «завтра я не буду работать»?</p>
          <p>Как спросить «ты завтра будешь работать?»?</p>
          <p>Как спросить «что ты будешь делать на выходных?»?</p>
          <p>Как кратко ответить отрицательно?</p>
        </details>

        <div class="note">
          Граница 19.5: нейтральное отрицание и базовые вопросы.
          На 19.6 соберём планы, прогнозы и изменение договорённости в одну контекстную практику.
        </div>
      `,
    },    {
      id: 6,
      eyebrow: 'УРОК 19 · 6/11 · ПЛАНЫ',
      title: 'Holnap megyek / Holnap menni fogok',
      subtitle: 'Планы, прогнозы и изменение договорённости: выбирай модель по функции',
      type: 'practice',
      activities: [L19_CONTROLLED],
      note: 'Controlled Practice собирает материал 19.1–19.6. Порог прохождения — 11 правильных из 14.',
      warn: 'Не превращай различие «настоящее / fog» в жёсткое правило. Обе модели могут говорить о будущем; контекст и коммуникативная функция важнее одной формы.',
      task: 'Пройди 5 функциональных блоков: план → явное будущее → отрицание → прогноз → изменение договорённости. После ошибки назови функцию, а не только правильный вариант.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">A. Будущий план в настоящей форме</h4>

        <p><button class="speak-btn" data-speak-text="Este találkozom Annával." data-speak-lang="hu-HU">Este találkozom Annával.</button></p>
        <p><button class="speak-btn" data-speak-text="Jövő héten Budapestre utazom." data-speak-lang="hu-HU">Jövő héten Budapestre utazom.</button></p>
        <p><button class="speak-btn" data-speak-text="Holnap dolgozom." data-speak-lang="hu-HU">Holnap dolgozom.</button></p>

        <div class="note">
          Конкретное время, расписание или договорённость часто позволяют использовать настоящее время с будущим значением.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">B. Явное будущее и разговорное majd</h4>

        <p><button class="speak-btn" data-speak-text="Mit fogsz csinálni hétvégén?" data-speak-lang="hu-HU">Mit fogsz csinálni hétvégén?</button></p>
        <p><button class="speak-btn" data-speak-text="Este tanulni fogtok." data-speak-lang="hu-HU">Este tanulni fogtok.</button></p>
        <p><button class="speak-btn" data-speak-text="Majd felhívlak." data-speak-lang="hu-HU">Majd felhívlak.</button></p>

        <div class="note">
          <b>Majd felhívlak.</b> здесь учим как готовый разговорный блок «позже / потом позвоню».
          Окончание внутри этой формы отдельно не разбираем.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">C. Отрицание и множественное число</h4>

        <p><button class="speak-btn" data-speak-text="Holnap nem fogok dolgozni." data-speak-lang="hu-HU">Holnap nem fogok dolgozni.</button></p>
        <p><button class="speak-btn" data-speak-text="Vasárnap pihenni fogunk." data-speak-lang="hu-HU">Vasárnap pihenni fogunk.</button></p>

        <div class="note">
          Если здесь ошибаешься, вернись к 19.3 для формы по лицу и к 19.5 для нейтрального отрицания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">D. Прогноз</h4>

        <p><button class="speak-btn" data-speak-text="Szerintem esni fog." data-speak-lang="hu-HU">Szerintem esni fog.</button></p>
        <p><button class="speak-btn" data-speak-text="Szerintem holnap sokat fogok dolgozni." data-speak-lang="hu-HU">Szerintem holnap sokat fogok dolgozni.</button></p>
        <p><button class="speak-btn" data-speak-text="A barátaim is dolgozni fognak." data-speak-lang="hu-HU">A barátaim is dolgozni fognak.</button></p>

        <div class="note">
          <b>szerintem</b> помогает явно маркировать прогноз или личное предположение.
          Здесь fog естественно показывает будущую перспективу.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">E. Измени договорённость по шагам</h4>

        <p><button class="speak-btn" data-speak-text="Rendben. Mikor tudunk találkozni?" data-speak-lang="hu-HU">Rendben. Mikor tudunk találkozni?</button></p>
        <p><button class="speak-btn" data-speak-text="Találkozzunk inkább délután kettőkor!" data-speak-lang="hu-HU">Találkozzunk inkább délután kettőkor!</button></p>
        <p><button class="speak-btn" data-speak-text="Jó, akkor kettőkor találkozunk a pályaudvarnál." data-speak-lang="hu-HU">Jó, akkor kettőkor találkozunk a pályaudvarnál.</button></p>

        <div class="note">
          Логика диалога: спокойно отреагировать → спросить новое время → предложить вариант → подтвердить точное время и место.
        </div>

        <div class="warn">
          <b>Találkozzunk...</b> здесь только готовый функциональный блок для предложения нового плана.
          Систему повелительного наклонения на 19.6 не выводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">Карта Controlled Practice</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Что проверяет</th></tr>
          <tr><td>A</td><td>будущий план в настоящей форме</td></tr>
          <tr><td>B</td><td>явное будущее и готовый блок с majd</td></tr>
          <tr><td>C</td><td>отрицание и формы множественного числа</td></tr>
          <tr><td>D</td><td>прогнозы</td></tr>
          <tr><td>E</td><td>реакция и новая договорённость</td></tr>
        </table>

        <div class="warn">
          Порог: <b>11 из 14</b>.
          Если ошибся, возвращайся к конкретной функции, а не перечитывай весь урок подряд.
        </div>

        <div class="note">
          Граница 19.6: контекстная интеграция изученных моделей.
          На 19.7 эти же функции нужно будет распознавать внутри связного текста.
        </div>
      `,
    },    {
      id: 7,
      eyebrow: 'УРОК 19 · 7/11 · ЧТЕНИЕ',
      title: 'Egy sűrű hétvége',
      subtitle: 'Восстанови не отдельные предложения, а изменение плана по хронологии',
      type: 'reading',
      activities: [L19_READING],
      note: 'Текст состоит из нескольких этапов одного уикенда. На первом проходе ищи время и события, на втором — причины изменений и форму будущего.',
      warn: 'Не выбирай вариант ответа по одному знакомому слову. Сначала найди в тексте доказательство: исходный план, причину изменения, новую договорённость или прогноз.',
      task: 'Прочитай текст в два прохода и ответь на 8 вопросов. Для прохождения нужно минимум 6 правильных.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Первый проход — собери хронологию</h4>

        <table class="conj">
          <tr><th>Этап</th><th>Что нужно найти</th></tr>
          <tr><td>пятница</td><td>что было запланировано на вечер</td></tr>
          <tr><td>суббота: исходный план</td><td>как собирались провести день до изменения</td></tr>
          <tr><td>изменение</td><td>какая причина заставила поменять время</td></tr>
          <tr><td>суббота: новый план</td><td>какая договорённость стала актуальной</td></tr>
          <tr><td>погода</td><td>какой прогноз влияет на программу</td></tr>
          <tr><td>запасной вариант</td><td>что меняют в порядке действий</td></tr>
          <tr><td>воскресенье</td><td>что делает каждый герой</td></tr>
        </table>

        <div class="note">
          Не заполняй эту карту из вариантов ответа.
          Сначала найди соответствующий абзац и только потом формулируй краткую заметку.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Сигналы изменения плана</h4>

        <p>
          <button class="speak-btn" data-speak-text="azonban" data-speak-lang="hu-HU">azonban</button> —
          однако, появляется препятствие.
        </p>
        <p>
          <button class="speak-btn" data-speak-text="ezért" data-speak-lang="hu-HU">ezért</button> —
          поэтому, следствие причины.
        </p>
        <p>
          <button class="speak-btn" data-speak-text="végül" data-speak-lang="hu-HU">végül</button> —
          в итоге, окончательное решение.
        </p>
        <p>
          <button class="speak-btn" data-speak-text="az előrejelzés szerint" data-speak-lang="hu-HU">az előrejelzés szerint</button> —
          по прогнозу.
        </p>
        <p>
          <button class="speak-btn" data-speak-text="ha" data-speak-lang="hu-HU">ha</button> —
          если; сигнал условия.
        </p>

        <div class="warn">
          На этом слайде <b>ha</b> нужно только узнавать как сигнал условия.
          Новую систему условных конструкций здесь не выводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Второй проход — как выражено будущее</h4>

        <table class="conj">
          <tr><th>Что ищем</th><th>Как распознать</th></tr>
          <tr><td>запланированное будущее</td><td>форма настоящего + ясный будущий контекст</td></tr>
          <tr><td>явное будущее / прогноз</td><td>инфинитив рядом с формой fog</td></tr>
          <tr><td>причина изменения</td><td>знакомая необходимость с kell</td></tr>
          <tr><td>окончательное решение</td><td>слова связи + новая последовательность действий</td></tr>
        </table>

        <div class="note">
          Главный навык 19.7 — не считать каждую форму настоящего «событием сейчас».
          Смотри на время, абзац и общий план.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как отвечать на 8 вопросов</h4>

        <ol class="tasklist">
          <li>определи, к какому этапу выходных относится вопрос;</li>
          <li>найди предложение-доказательство в тексте;</li>
          <li>проверь, спрашивают исходный план или уже изменённый;</li>
          <li>если речь о погоде, отдели прогноз от решения героев;</li>
          <li>если варианты похожи, сравни время, причину и итог.</li>
        </ol>

        <div class="warn">
          Порог Reading: <b>6 из 8</b>.
          Ошибка между исходным и новым планом означает, что нужно восстановить хронологию, а не перечитывать текст слово в слово.
        </div>

        <div class="note">
          Граница 19.7: чтение планов, изменений и прогноза.
          На 19.8 те же временные контрасты нужно будет распознавать уже на слух.
        </div>
      `,
    },    {
      id: 8,
      eyebrow: 'УРОК 19 · 8/11 · АУДИРОВАНИЕ',
      title: 'Mikor történik?',
      subtitle: 'Сначала временной маркер, затем форма глагола: прошлое → настоящее → будущее',
      type: 'listening',
      activities: [L19_LISTENING],
      note: 'Это опубликованное Listening. Transcript открывай только после первой самостоятельной попытки: цель — различить время на слух.',
      warn: 'Не пытайся запомнить весь текст после одного прослушивания. Сначала поймай только временной маркер, затем действие и форму.',
      task: 'Прослушай запись минимум два раза и ответь на 5 вопросов. Для прохождения нужно минимум 4 правильных.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Первый проход — поймай время</h4>

        <p>
          <button class="speak-btn" data-speak-text="tegnap" data-speak-lang="hu-HU">tegnap</button>,
          <button class="speak-btn" data-speak-text="ma" data-speak-lang="hu-HU">ma</button>,
          <button class="speak-btn" data-speak-text="holnap" data-speak-lang="hu-HU">holnap</button>,
          <button class="speak-btn" data-speak-text="a hétvégén" data-speak-lang="hu-HU">a hétvégén</button>,
          <button class="speak-btn" data-speak-text="vasárnap" data-speak-lang="hu-HU">vasárnap</button>,
          <button class="speak-btn" data-speak-text="jövő héten" data-speak-lang="hu-HU">jövő héten</button>
        </p>

        <table class="conj">
          <tr><th>Маркер</th><th>Какую временную зону отмечаем</th></tr>
          <tr><td>вчера</td><td>завершённое прошлое</td></tr>
          <tr><td>сегодня</td><td>настоящее / текущая ситуация</td></tr>
          <tr><td>завтра, выходные, следующая неделя</td><td>будущая перспектива</td></tr>
        </table>

        <div class="note">
          На первом прослушивании можно записать только последовательность временных зон.
          Действия добавляй на втором проходе.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Второй проход — проверь форму</h4>

        <table class="conj">
          <tr><th>Сигнал</th><th>Что распознаём</th></tr>
          <tr><td>знакомая форма прошедшего</td><td>действие уже произошло</td></tr>
          <tr><td>форма настоящего</td><td>что происходит сейчас</td></tr>
          <tr><td>инфинитив + форма fog</td><td>явное будущее / прогноз</td></tr>
        </table>

        <div class="note">
          Слушай маркер времени вместе с глагольной формой.
          Один элемент подтверждает другой.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Отдельно поймай прогноз</h4>

        <p><button class="speak-btn" data-speak-text="szerinte" data-speak-lang="hu-HU">szerinte</button> — по его мнению / как он считает.</p>

        <div class="note">
          Это сигнал личного прогноза.
          После него нужно услышать содержание прогноза самостоятельно — слайд ответ не раскрывает.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Как отвечать на 5 вопросов</h4>

        <ol class="tasklist">
          <li>сначала выдели временной маркер;</li>
          <li>определи временную форму;</li>
          <li>только затем восстанови действие;</li>
          <li>для прогноза отдельно найди маркер мнения;</li>
          <li>после ответа проверь transcript и разберись, что именно не услышал.</li>
        </ol>

        <div class="warn">
          Порог Listening: <b>4 из 5</b>.
          Transcript — инструмент разбора ошибки после ответа, а не замена аудирования.
        </div>

        <div class="note">
          Граница 19.8: распознавание прошлого, настоящего и будущего на слух.
          На 19.9 эти модели переходят в живое согласование нового плана.
        </div>
      `,
    },    {
      id: 9,
      eyebrow: 'УРОК 19 · 9/11 · ИНТЕРАКЦИЯ',
      title: 'Mit csináljunk szombaton?',
      subtitle: '7 реплик ученика: согласие → изменение времени → новый план → запасной вариант → подтверждение',
      type: 'roleplay',
      activities: [L19_ROLEPLAY],
      note: 'RolePlay содержит 15 ходов, из них 7 реплик ученика. Это открытая интеракция, поэтому evidence остаётся PARTIAL.',
      warn: 'Не заучивай полные model answers. Сначала определи коммуникативную функцию своей реплики и только потом собирай фразу.',
      task: 'Пройди 7 функций ученика: согласись и спроси план → уточни новое время → предложи программу → обсуди транспорт → предложи запасной план → подтверди итог → вежливо заверши.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Карта 7 реплик ученика</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>Что нужно сделать</th><th>Опора</th></tr>
          <tr><td>1</td><td>согласиться и спросить о программе</td><td>вопрос о будущем</td></tr>
          <tr><td>2</td><td>спокойно отреагировать и спросить новое время</td><td>реакция + tud</td></tr>
          <tr><td>3</td><td>предложить новое занятие / порядок</td><td>готовый блок предложения</td></tr>
          <tr><td>4</td><td>обсудить транспорт и место встречи</td><td>выбор варианта</td></tr>
          <tr><td>5</td><td>отреагировать на прогноз и дать запасной план</td><td>ha как сигнал условия</td></tr>
          <tr><td>6</td><td>подтвердить точные время, место и программу</td><td>итог договорённости</td></tr>
          <tr><td>7</td><td>вежливо завершить разговор</td><td>короткое закрытие</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Спросить план и новое время</h4>

        <p><button class="speak-btn" data-speak-text="Mit fogunk csinálni?" data-speak-lang="hu-HU">Mit fogunk csinálni?</button></p>
        <p><button class="speak-btn" data-speak-text="Mikor tudunk találkozni?" data-speak-lang="hu-HU">Mikor tudunk találkozni?</button></p>

        <div class="note">
          Первая фраза проверяет будущее, вторая повторно использует знакомую модель возможности из Lesson 18.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Предложить другой вариант</h4>

        <p><button class="speak-btn" data-speak-text="Találkozzunk inkább később!" data-speak-lang="hu-HU">Találkozzunk inkább később!</button></p>
        <p><button class="speak-btn" data-speak-text="Vonattal menjünk?" data-speak-lang="hu-HU">Vonattal menjünk?</button></p>

        <div class="warn">
          Эти формы здесь используются как готовые разговорные блоки для совместного предложения.
          Систему повелительного наклонения на этом уроке не выводим.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Запасной план из-за погоды</h4>

        <p><button class="speak-btn" data-speak-text="Ha esik, maradjunk bent." data-speak-lang="hu-HU">Ha esik, maradjunk bent.</button></p>

        <div class="note">
          <b>ha</b> здесь только показывает условие: «если».
          Не разбирай новую грамматическую парадигму — важно понять логику запасного плана.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Подтвердить итог</h4>

        <p><button class="speak-btn" data-speak-text="Tehát kettőkor találkozunk." data-speak-lang="hu-HU">Tehát kettőkor találkozunk.</button></p>
        <p><button class="speak-btn" data-speak-text="Rendben, szia!" data-speak-lang="hu-HU">Rendben, szia!</button></p>

        <div class="note">
          Перед завершением разговора обязательно проверь три детали:
          <b>когда</b>, <b>где</b> и <b>что делаете сначала</b>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Самопроверка RolePlay</h4>

        <ol class="tasklist">
          <li>я отреагировал(а), а не сразу выдал(а) новый план;</li>
          <li>уточнил(а) новое время;</li>
          <li>предложил(а) занятие или порядок программы;</li>
          <li>обсудил(а) транспорт / место;</li>
          <li>учёл(а) прогноз и запасной вариант;</li>
          <li>в конце подтвердил(а) итоговые детали;</li>
          <li>не копировал(а) полный model answer.</li>
        </ol>

        <div class="warn">
          PARTIAL evidence не означает плохой результат.
          Это означает только, что свободную реплику нельзя полностью проверить автоматикой.
        </div>

        <div class="note">
          Граница 19.9: интеракция и изменение плана.
          На 19.10 те же функции нужно будет связно выразить письменно и устно.
        </div>
      `,
    },    {
      id: 10,
      eyebrow: 'УРОК 19 · 10/11 · ПИСЬМО И ГОВОРЕНИЕ',
      title: 'A következő hétvége',
      subtitle: 'Writing 90–110 слов + optional speaking около 2 минут: одинаковая тема, разные задачи',
      type: 'production',
      activities: [L19_WRITING],
      optionalSpeaking: L19_SPEAKING,
      note: 'Writing даёт PARTIAL evidence. Optional Speaking — только self-practice без микрофона, score и evidence.',
      warn: 'Не пиши полный текст по готовому образцу. Сначала собери содержание по рубрике, затем выбери формы будущего по контексту.',
      task: 'Сначала напиши сообщение 90–110 слов о следующих выходных. После этого отдельно проговори около 2 минут о следующей неделе без чтения готового текста.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">A. Writing — план 90–110 слов</h4>

        <table class="conj">
          <tr><th>Блок</th><th>Что обязательно включить</th></tr>
          <tr><td>1</td><td>пятница: одно конкретное событие / договорённость</td></tr>
          <tr><td>2</td><td>суббота: план или намерение</td></tr>
          <tr><td>3</td><td>воскресенье: ещё один план</td></tr>
          <tr><td>4</td><td>один прогноз</td></tr>
          <tr><td>5</td><td>одно возможное изменение + причина</td></tr>
          <tr><td>6</td><td>финальный вопрос другу</td></tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">B. Формы для связного письма</h4>

        <p><button class="speak-btn" data-speak-text="Péntek este találkozom egy barátommal." data-speak-lang="hu-HU">Péntek este találkozom egy barátommal.</button></p>
        <p><button class="speak-btn" data-speak-text="Szombaton kirándulni fogok." data-speak-lang="hu-HU">Szombaton kirándulni fogok.</button></p>
        <p><button class="speak-btn" data-speak-text="Szerintem vasárnap jó idő lesz." data-speak-lang="hu-HU">Szerintem vasárnap jó idő lesz.</button></p>
        <p><button class="speak-btn" data-speak-text="Lehet, hogy a terv megváltozik, mert dolgoznom kell." data-speak-lang="hu-HU">Lehet, hogy a terv megváltozik, mert dolgoznom kell.</button></p>
        <p><button class="speak-btn" data-speak-text="És te mit fogsz csinálni hétvégén?" data-speak-lang="hu-HU">És te mit fogsz csinálni hétvégén?</button></p>

        <div class="note">
          Здесь <b>Lehet, hogy...</b> — готовая опора для «возможно, что...».
          Не выводим новую систему сложных предложений; важно выразить возможное изменение и его причину.
        </div>

        <div class="note">
          Настоящая форма удобно показывает конкретную договорённость, а fog — явное будущее и прогноз.
          Это полезная стратегия, но не абсолютное правило для всех будущих фраз.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">C. Writing — чек-лист перед отправкой</h4>

        <ol class="tasklist">
          <li>90–110 слов;</li>
          <li>есть пятница, суббота и воскресенье;</li>
          <li>есть одна фиксированная договорённость;</li>
          <li>есть намерение и прогноз;</li>
          <li>есть возможное изменение с причиной;</li>
          <li>последняя часть содержит вопрос другу.</li>
        </ol>

        <div class="warn">
          Если не хватает объёма, добавь конкретику о времени, месте или причине.
          Не добавляй новую грамматику только ради количества слов.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">D. Optional Speaking — около 2 минут</h4>

        <table class="conj">
          <tr><th>Шаг</th><th>О чём сказать</th></tr>
          <tr><td>1</td><td>работа или учёба на следующей неделе</td></tr>
          <tr><td>2</td><td>одна назначенная встреча</td></tr>
          <tr><td>3</td><td>план на выходные</td></tr>
          <tr><td>4</td><td>одно ожидаемое событие / прогноз</td></tr>
          <tr><td>5</td><td>одно возможное изменение</td></tr>
        </table>

        <p class="mt-3"><button class="speak-btn" data-speak-text="Jövő héten sokat fogok dolgozni." data-speak-lang="hu-HU">Jövő héten sokat fogok dolgozni.</button></p>
        <p><button class="speak-btn" data-speak-text="Kedden találkozom Annával." data-speak-lang="hu-HU">Kedden találkozom Annával.</button></p>
        <p><button class="speak-btn" data-speak-text="A hétvégén pihenni fogok." data-speak-lang="hu-HU">A hétvégén pihenni fogok.</button></p>

        <div class="note">
          Для Speaking подготовь только 6–8 ключевых слов.
          Не читай свой Writing вслух как готовый монолог.
        </div>

        <div class="warn">
          Optional Speaking не создаёт evidence и не меняет статус целей автоматически.
          Это практика свободного устного использования уже изученных моделей.
        </div>

        <div class="note">
          Граница 19.10: связная письменная и устная продукция без новой грамматической парадигмы.
          На 19.11 останется итоговая проверка целей Lesson 19.
        </div>
      `,
    },    {
      id: 11,
      eyebrow: 'УРОК 19 · 11/11 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Проверь 5 целей Lesson 19: форма будущего → fog → планы → времена → прогнозы',
      type: 'summary',
      activities: [L19_EXIT],
      note: 'Это учебный checkpoint Lesson 19, а не официальный сертификат уровня. DIRECT означает прямое автоматическое подтверждение после порога; PARTIAL — открытую продукцию, которую автоматика не может оценить полностью.',
      warn: 'Финальная ошибка урока: не превращай будущее в правило «всегда нужен fog». Настоящая форма с ясным будущим контекстом тоже естественно говорит о будущем.',
      task: 'Перед Exit Check выполни 5 действий без подсказки: выбери стратегию будущего → восстанови форму fog → построй отрицание/вопрос → отличи три времени → сформулируй прогноз.',
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Две стратегии будущего</h4>

        <p><button class="speak-btn" data-speak-text="Holnap dolgozom." data-speak-lang="hu-HU">Holnap dolgozom.</button></p>
        <p><button class="speak-btn" data-speak-text="Holnap dolgozni fogok." data-speak-lang="hu-HU">Holnap dolgozni fogok.</button></p>

        <div class="note">
          Первая фраза имеет форму настоящего, но будущий смысл задаёт контекст.
          Вторая делает будущую перспективу явной через fog + инфинитив.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Шесть активных неопределённых форм fog</h4>

        <p>
          <button class="speak-btn" data-speak-text="fogok" data-speak-lang="hu-HU">fogok</button>,
          <button class="speak-btn" data-speak-text="fogsz" data-speak-lang="hu-HU">fogsz</button>,
          <button class="speak-btn" data-speak-text="fog" data-speak-lang="hu-HU">fog</button>,
          <button class="speak-btn" data-speak-text="fogunk" data-speak-lang="hu-HU">fogunk</button>,
          <button class="speak-btn" data-speak-text="fogtok" data-speak-lang="hu-HU">fogtok</button>,
          <button class="speak-btn" data-speak-text="fognak" data-speak-lang="hu-HU">fognak</button>
        </p>

        <div class="note">
          Именно эти шесть форм нужно уметь продуктивно восстановить по лицам.
          Определённые формы вроде <b>fogom</b> в Lesson 19 остаются уровнем распознавания.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Отрицание и вопрос</h4>

        <p><button class="speak-btn" data-speak-text="Holnap nem fogok dolgozni." data-speak-lang="hu-HU">Holnap nem fogok dolgozni.</button></p>
        <p><button class="speak-btn" data-speak-text="Mit fogsz csinálni hétvégén?" data-speak-lang="hu-HU">Mit fogsz csinálni hétvégén?</button></p>

        <div class="note">
          Для нейтрального отрицания держи nem перед личной формой fog.
          Для вопроса сначала определи, какую информацию нужно получить.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. План и прогноз — не одно и то же</h4>

        <p><button class="speak-btn" data-speak-text="Este találkozom Annával." data-speak-lang="hu-HU">Este találkozom Annával.</button></p>
        <p><button class="speak-btn" data-speak-text="Szerintem esni fog." data-speak-lang="hu-HU">Szerintem esni fog.</button></p>

        <div class="note">
          Конкретная договорённость часто естественно стоит в настоящей форме.
          Для прогноза fog особенно удобен, а szerintem явно показывает, что это предположение говорящего.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Три времени в одном контексте</h4>

        <p><button class="speak-btn" data-speak-text="tegnap" data-speak-lang="hu-HU">tegnap</button> → прошлое</p>
        <p><button class="speak-btn" data-speak-text="ma" data-speak-lang="hu-HU">ma</button> → настоящее</p>
        <p><button class="speak-btn" data-speak-text="holnap" data-speak-lang="hu-HU">holnap</button> → будущее</p>

        <div class="note">
          В Reading и Listening проверяй вместе временной маркер, форму глагола и контекст.
          Не определяй время только по одному слову.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Изменившийся план</h4>

        <p><button class="speak-btn" data-speak-text="Mikor tudunk találkozni?" data-speak-lang="hu-HU">Mikor tudunk találkozni?</button></p>
        <p><button class="speak-btn" data-speak-text="Találkozzunk inkább később!" data-speak-lang="hu-HU">Találkozzunk inkább később!</button></p>
        <p><button class="speak-btn" data-speak-text="Tehát kettőkor találkozunk." data-speak-lang="hu-HU">Tehát kettőkor találkozunk.</button></p>

        <div class="note">
          Рабочая последовательность: отреагировать → уточнить новое время → предложить альтернативу → подтвердить итог.
          Готовые формы совместного предложения здесь остаются функциональными блоками, а не новой парадигмой.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Что реально подтверждают задания</h4>

        <table class="conj">
          <tr><th>Цель</th><th>Основное evidence</th><th>Статус</th></tr>
          <tr><td>строить изученное fog-будущее, включая отрицание</td><td>Controlled Practice</td><td><b>DIRECT</b> после порога</td></tr>
          <tr><td>восстанавливать шесть неопределённых форм fog</td><td>Controlled Practice</td><td><b>DIRECT</b> после порога</td></tr>
          <tr><td>связно описывать будущие планы</td><td>Writing</td><td><b>PARTIAL</b></td></tr>
          <tr><td>различать прошлое, настоящее и будущее</td><td>Reading + Published Listening</td><td><b>DIRECT + DIRECT</b></td></tr>
          <tr><td>формулировать прогнозы</td><td>Controlled Practice + RolePlay</td><td><b>DIRECT + PARTIAL</b></td></tr>
        </table>

        <div class="note">
          Пороги: Controlled Practice — <b>11/14</b>, Reading — <b>6/8</b>, Published Listening — <b>4/5</b>.
          Writing и RolePlay остаются PARTIAL.
          Optional Speaking Practice evidence не создаёт.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Финальная самопроверка</h4>

        <details class="note">
          <summary class="font-bold cursor-pointer">Открой после собственной попытки</summary>
          <p class="mt-3">Можешь сказать о завтрашнем плане двумя способами?</p>
          <p>Можешь без таблицы восстановить шесть неопределённых форм fog?</p>
          <p>Можешь построить нейтральное отрицание и вопрос?</p>
          <p>Можешь на слух отличить вчера, сегодня и будущее?</p>
          <p>Можешь сформулировать простой прогноз и изменить договорённость?</p>
        </details>

        <div class="warn">
          Quiz — retrieval checkpoint, а не доказательство полного коммуникативного владения.
          Lesson 20 будет интегрировать уже изученные времена; новую грамматику следующего урока здесь не вводим.
        </div>
      `,
    }
  ],
  vocabulary: [    { id: 'l19_v1', hu: 'holnapután', ru: 'послезавтра', category: 'Время', exampleSentence: 'Holnapután dolgozni fogok.' },
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
