import { Lesson, VocabularyItem, QuizQuestion, TranslationItem } from '../types';
import { LESSON_TRANSLATION_MAP } from '../data/lessonTranslations';

export { LESSON_TRANSLATION_MAP };

// Vocabulary data for lessons 1-28: 6 curated VocabularyItem per lesson.
// Priority is given to words/forms explicitly introduced in that lesson's slides.
let _vocabMap: Record<number, VocabularyItem[]> | null = null;
const LESSON_VOCABULARY_MAP: Record<number, VocabularyItem[]> = new Proxy({} as Record<number, VocabularyItem[]>, {
  get: (_, k) => {
    if (!_vocabMap) _vocabMap = buildVocabMap();
    return _vocabMap[k as unknown as number];
  },
  has: (_, k) => {
    if (!_vocabMap) _vocabMap = buildVocabMap();
    return k in _vocabMap;
  },
});

export { LESSON_VOCABULARY_MAP };

function buildVocabMap(): Record<number, VocabularyItem[]> { return {
  1: [
    { id: "l1_v1", hu: "gyerek", ru: "ребёнок", phonetic: "[дьэрэк]", category: "Алфавит и звуки", exampleSentence: "A gyerek játszik." },
    { id: "l1_v2", hu: "kutya", ru: "собака", phonetic: "[кутя]", category: "Алфавит и звуки", exampleSentence: "A kutya okos." },
    { id: "l1_v3", hu: "szép", ru: "красивый", phonetic: "[сэ̄п]", category: "Алфавит и звуки", exampleSentence: "A kert szép." },
    { id: "l1_v4", hu: "sok", ru: "много", phonetic: "[шок]", category: "Алфавит и звуки", exampleSentence: "Sok munka." },
    { id: "l1_v5", hu: "üveg", ru: "бутылка / стекло", phonetic: "[ювэг]", category: "Алфавит и звуки", exampleSentence: "Egy üveg víz." },
    { id: "l1_v6", hu: "alma", ru: "яблоко", phonetic: "[алма]", category: "Алфавит и звуки", exampleSentence: "Az alma piros." },
  ],
  2: [
    { id: "l2_v1", hu: "Szia", ru: "Привет / Пока", phonetic: "[сиа]", category: "Приветствия", exampleSentence: "Szia, Péter!" },
    { id: "l2_v2", hu: "vagyok", ru: "я есть (глагол lenni)", phonetic: "[вадёк]", category: "Глагол lenni", exampleSentence: "Diák vagyok.", baseWord: "lenni", grammaticalTag: "lenni-jelen-1sg", relatedLessonId: 2 },
    { id: "l2_v3", hu: "van", ru: "он/она есть", phonetic: "[ван]", category: "Глагол lenni", exampleSentence: "Itt van.", baseWord: "lenni" },
    { id: "l2_v4", hu: "magyar", ru: "венгерский / венгр", phonetic: "[мадьар]", category: "Страны и языки" },
    { id: "l2_v5", hu: "diák", ru: "студент", phonetic: "[диа̄к]", category: "Лексика", exampleSentence: "Diák vagyok." },
    { id: "l2_v6", hu: "én", ru: "я", phonetic: "[э̄н]", category: "Местоимения" },
  ],
  3: [
    { id: "l3_v1", hu: "a", ru: "определённый артикль (перед согласной)", phonetic: "[а]", category: "Артикли", exampleSentence: "a ház" },
    { id: "l3_v2", hu: "az", ru: "определённый артикль (перед гласной)", phonetic: "[аз]", category: "Артикли", exampleSentence: "az alma" },
    { id: "l3_v3", hu: "egy", ru: "неопределённый артикль / один", phonetic: "[эдь]", category: "Артикли", exampleSentence: "egy könyv" },
    { id: "l3_v4", hu: "házak", ru: "дома (мн.ч.)", phonetic: "[ха̄зак]", category: "Множественное число", exampleSentence: "A házak nagyok.", baseWord: "ház", grammaticalTag: "tobbes-szam-k", relatedLessonId: 3 },
    { id: "l3_v5", hu: "könyvek", ru: "книги (мн.ч.)", phonetic: "[кёнйвэк]", category: "Множественное число", baseWord: "könyv" },
    { id: "l3_v6", hu: "asztalok", ru: "столы (мн.ч.)", phonetic: "[асталок]", category: "Множественное число", baseWord: "asztal" },
  ],
  4: [
    { id: "l4_v1", hu: "tanulok", ru: "я учусь", phonetic: "[танулок]", category: "Настоящее время", exampleSentence: "Magyarul tanulok.", baseWord: "tanul", grammaticalTag: "alanyi-ragozas-jelen-1sg", relatedLessonId: 4 },
    { id: "l4_v2", hu: "olvasol", ru: "ты читаешь", phonetic: "[олвашол]", category: "Настоящее время", baseWord: "olvas" },
    { id: "l4_v3", hu: "dolgozik", ru: "он/она работает", phonetic: "[долгозик]", category: "Настоящее время", baseWord: "dolgozik" },
    { id: "l4_v4", hu: "tanulunk", ru: "мы учимся", phonetic: "[танулунк]", category: "Настоящее время", baseWord: "tanul" },
    { id: "l4_v5", hu: "eszik", ru: "ест (-ik глагол)", phonetic: "[эсик]", category: "Глаголы", baseWord: "eszik" },
    { id: "l4_v6", hu: "ír", ru: "пишет", phonetic: "[ӣр]", category: "Глаголы", exampleSentence: "Péter ír." },
  ],
  5: [
    { id: "l5_v1", hu: "kettő", ru: "два (2)", phonetic: "[кэттё̄]", category: "Числа", exampleSentence: "két könyv" },
    { id: "l5_v2", hu: "három", ru: "три (3)", phonetic: "[ха̄ром]", category: "Числа" },
    { id: "l5_v3", hu: "hét", ru: "семь (7) / неделя", phonetic: "[хе̄т]", category: "Числа" },
    { id: "l5_v4", hu: "tíz", ru: "десять (10)", phonetic: "[тӣз]", category: "Числа" },
    { id: "l5_v5", hu: "húsz", ru: "двадцать (20)", phonetic: "[хӯс]", category: "Числа" },
    { id: "l5_v6", hu: "hétfő", ru: "понедельник", phonetic: "[хе̄дьфё̄]", category: "Дни недели", grammaticalTag: "kor-suffix-napok", relatedLessonId: 5 },
  ],
  6: [
    { id: "l6_v1", hu: "Hogy vagy?", ru: "Как дела?", phonetic: "[ходь вадь]", category: "Повторение A0", exampleSentence: "Hogy vagy?" },
    { id: "l6_v2", hu: "jól", ru: "хорошо", phonetic: "[йо̄л]", category: "Повторение A0", exampleSentence: "Jól vagyok." },
    { id: "l6_v3", hu: "nehéz", ru: "трудный / тяжёлый", phonetic: "[нэхэ̄з]", category: "Повторение A0", exampleSentence: "Néha nehéz." },
    { id: "l6_v4", hu: "nyelv", ru: "язык", phonetic: "[ньэлв]", category: "Повторение A0", exampleSentence: "A magyar nyelv nehéz." },
    { id: "l6_v5", hu: "néha", ru: "иногда", phonetic: "[не̄ха]", category: "Повторение A0" },
    { id: "l6_v6", hu: "ma", ru: "сегодня", phonetic: "[ма]", category: "Повторение A0", exampleSentence: "Ma tanulok." },
  ],
  7: [
    { id: "l7_v1", hu: "házat", ru: "дом (вин. падеж)", phonetic: "[ха̄зат]", category: "Винительный падеж -t", exampleSentence: "Látom a házat.", baseWord: "ház", grammaticalTag: "targyeset-t", relatedLessonId: 7 },
    { id: "l7_v2", hu: "kávét", ru: "кофе (вин. падеж)", phonetic: "[ка̄вэ̄т]", category: "Винительный падеж -t", exampleSentence: "Szeretem a kávét.", baseWord: "kávé" },
    { id: "l7_v3", hu: "könyvet", ru: "книгу (вин. падеж)", phonetic: "[кёнйвэт]", category: "Винительный падеж -t", baseWord: "könyv" },
    { id: "l7_v4", hu: "látom", ru: "я вижу (его/её/это)", phonetic: "[ла̄том]", category: "Определённое спряжение", baseWord: "lát" },
    { id: "l7_v5", hu: "szeretem", ru: "я люблю (его/её/это)", phonetic: "[сэретэм]", category: "Определённое спряжение", baseWord: "szeret" },
    { id: "l7_v6", hu: "almát", ru: "яблоко (вин. падеж)", phonetic: "[алма̄т]", category: "Винительный падеж -t", baseWord: "alma" },
  ],
  8: [
    { id: "l8_v1", hu: "apám", ru: "мой отец", phonetic: "[апа̄м]", category: "Притяжательные суффиксы", exampleSentence: "Az apám orvos.", baseWord: "apa", grammaticalTag: "birtokos-suffix-1sg", relatedLessonId: 8 },
    { id: "l8_v2", hu: "anyám", ru: "моя мать", phonetic: "[аня̄м]", category: "Притяжательные суффиксы", baseWord: "anya" },
    { id: "l8_v3", hu: "testvérem", ru: "мой брат / моя сестра", phonetic: "[тэштве̄рэм]", category: "Притяжательные суффиксы", exampleSentence: "Van egy testvérem.", baseWord: "testvér" },
    { id: "l8_v4", hu: "házam", ru: "мой дом", phonetic: "[ха̄зам]", category: "Притяжательные суффиксы", baseWord: "ház" },
    { id: "l8_v5", hu: "család", ru: "семья", phonetic: "[чала̄д]", category: "Семья" },
    { id: "l8_v6", hu: "férj", ru: "муж", phonetic: "[фе̄рь]", category: "Семья" },
  ],
  9: [
    { id: "l9_v1", hu: "nagyobb", ru: "больше", phonetic: "[надьобб]", category: "Степени сравнения", exampleSentence: "Ez a ház nagyobb.", baseWord: "nagy", grammaticalTag: "kozepfok-bb", relatedLessonId: 9 },
    { id: "l9_v2", hu: "szebb", ru: "красивее", phonetic: "[сэбб]", category: "Степени сравнения", baseWord: "szép" },
    { id: "l9_v3", hu: "legjobb", ru: "самый лучший", phonetic: "[легйобб]", category: "Превосходная степень", baseWord: "jó" },
    { id: "l9_v4", hu: "mint", ru: "чем (при сравнении)", phonetic: "[минт]", category: "Сравнение", exampleSentence: "A kávé jobb, mint a tea." },
    { id: "l9_v5", hu: "piros", ru: "красный", phonetic: "[пирос]", category: "Цвета" },
    { id: "l9_v6", hu: "hideg", ru: "холодный", phonetic: "[хидэг]", category: "Прилагательные" },
  ],
  10: [
    { id: "l10_v1", hu: "házban", ru: "в доме (где?)", phonetic: "[ха̄збан]", category: "Местные падежи I — Внутри", exampleSentence: "A házban vagyok.", baseWord: "ház", grammaticalTag: "belso-csoport-ban-ben", relatedLessonId: 10 },
    { id: "l10_v2", hu: "iskolába", ru: "в школу (куда?)", phonetic: "[ишкола̄ба]", category: "Местные падежи I — Внутри", exampleSentence: "Az iskolába megyek.", baseWord: "iskola" },
    { id: "l10_v3", hu: "házból", ru: "из дома (откуда?)", phonetic: "[ха̄збо̄л]", category: "Местные падежи I — Внутри", baseWord: "ház" },
    { id: "l10_v4", hu: "kertben", ru: "в саду", phonetic: "[кэртбэн]", category: "Местные падежи I — Внутри", baseWord: "kert" },
    { id: "l10_v5", hu: "városba", ru: "в город", phonetic: "[ва̄рошба]", category: "Местные падежи I — Внутри", baseWord: "város" },
    { id: "l10_v6", hu: "szobából", ru: "из комнаты", phonetic: "[соба̄бо̄л]", category: "Местные падежи I — Внутри", baseWord: "szoba" },
  ],
  11: [
    { id: "l11_v1", hu: "asztalon", ru: "на столе (где?)", phonetic: "[асталон]", category: "Местные падежи II — На поверхности", exampleSentence: "A könyv az asztalon van.", baseWord: "asztal" },
    { id: "l11_v2", hu: "asztalra", ru: "на стол (куда?)", phonetic: "[асталра]", category: "Местные падежи II — На поверхности", exampleSentence: "A könyvet az asztalra teszem.", baseWord: "asztal", grammaticalTag: "kulso-csoport-ra-re", relatedLessonId: 11 },
    { id: "l11_v3", hu: "asztalról", ru: "со стола (откуда?)", phonetic: "[асталро̄л]", category: "Местные падежи II — На поверхности", baseWord: "asztal" },
    { id: "l11_v4", hu: "utcán", ru: "на улице", phonetic: "[утца̄н]", category: "Местные падежи II — На поверхности", baseWord: "utca" },
    { id: "l11_v5", hu: "főtéren", ru: "на площади", phonetic: "[фё̄тэ̄рэн]", category: "Местные падежи II — На поверхности", baseWord: "főtér" },
    { id: "l11_v6", hu: "Budapesten", ru: "в Будапеште", phonetic: "[будапэштэн]", category: "Города", baseWord: "Budapest" },
  ],
  12: [
    { id: "l12_v1", hu: "orvosnál", ru: "у врача (где?)", phonetic: "[орвосна̄л]", category: "Местные падежи III — Около/рядом", exampleSentence: "Péter az orvosnál van.", baseWord: "orvos" },
    { id: "l12_v2", hu: "Annához", ru: "к Анне (куда?)", phonetic: "[анна̄хоз]", category: "Местные падежи III — Около/рядом", exampleSentence: "Annához megyek.", baseWord: "Anna", grammaticalTag: "kornel-csoport-hoz-hez-hoz", relatedLessonId: 12 },
    { id: "l12_v3", hu: "baráttól", ru: "от друга (откуда?)", phonetic: "[бара̄тто̄л]", category: "Местные падежи III — Около/рядом", baseWord: "barát" },
    { id: "l12_v4", hu: "Péternél", ru: "у Петера", phonetic: "[пе̄тэрне̄л]", category: "Местные падежи III — Около/рядом", baseWord: "Péter" },
    { id: "l12_v5", hu: "alatt", ru: "под", phonetic: "[алатт]", category: "Послелоги" },
    { id: "l12_v6", hu: "felett", ru: "над", phonetic: "[фэлэтт]", category: "Послелоги" },
  ],
  13: [
    { id: "l13_v1", hu: "tanultam", ru: "я учился", phonetic: "[танултам]", category: "Прошедшее время", exampleSentence: "Tegnap tanultam.", baseWord: "tanul", grammaticalTag: "mult-ido-t-1sg", relatedLessonId: 13 },
    { id: "l13_v2", hu: "vártam", ru: "я ждал", phonetic: "[ва̄ртам]", category: "Прошедшее время", baseWord: "vár" },
    { id: "l13_v3", hu: "volt", ru: "был / была / было", phonetic: "[волт]", category: "Прошедшее время", exampleSentence: "Péter orvos volt.", baseWord: "lenni" },
    { id: "l13_v4", hu: "tegnap", ru: "вчера", phonetic: "[тэгнап]", category: "Временные маркеры" },
    { id: "l13_v5", hu: "tavaly", ru: "в прошлом году", phonetic: "[тавай]", category: "Временные маркеры", exampleSentence: "Tavaly Budapestre utaztam." },
    { id: "l13_v6", hu: "dolgozott", ru: "он/она работал(а)", phonetic: "[долгозотт]", category: "Прошедшее время", baseWord: "dolgozik" },
  ],
  14: [
    { id: "l14_v1", hu: "mosakodik", ru: "умываться", phonetic: "[мошакодик]", category: "Возвратные глаголы", exampleSentence: "Mosakodom.", baseWord: "mosakodik", grammaticalTag: "reflexiv-ik-glagok", relatedLessonId: 14 },
    { id: "l14_v2", hu: "felébred", ru: "просыпаться", phonetic: "[фэлэ̄брэд]", category: "Распорядок дня", exampleSentence: "Hét órakor felébredek." },
    { id: "l14_v3", hu: "reggelizik", ru: "завтракать", phonetic: "[рэггэлэзик]", category: "Распорядок дня" },
    { id: "l14_v4", hu: "felöltözik", ru: "одеваться", phonetic: "[фэлё̄тё̄зик]", category: "Распорядок дня" },
    { id: "l14_v5", hu: "lefekszik", ru: "ложиться спать", phonetic: "[лэфэкшик]", category: "Распорядок дня" },
    { id: "l14_v6", hu: "magam", ru: "себя (я сам)", phonetic: "[магам]", category: "Возвратное местоимение", exampleSentence: "Látom magamat a tükörben." },
  ],
  15: [
    { id: "l15_v1", hu: "nekem", ru: "мне (дательный падеж)", phonetic: "[нэ́кэм]", category: "Дательный падеж", exampleSentence: "Nekem van egy könyvem.", grammaticalTag: "reszes-eset-nak-nek", relatedLessonId: 15 },
    { id: "l15_v2", hu: "neked", ru: "тебе", phonetic: "[нэ́кэд]", category: "Дательный падеж" },
    { id: "l15_v3", hu: "adok", ru: "я даю", phonetic: "[адок]", category: "Глаголы", baseWord: "ad", exampleSentence: "Adok egy kávét az anyámnak." },
    { id: "l15_v4", hu: "kell", ru: "нужно / надо", phonetic: "[кэлл]", category: "Модальные конструкции", exampleSentence: "Nekem kávé kell." },
    { id: "l15_v5", hu: "házam", ru: "мой дом (притяж.)", phonetic: "[ха̄зам]", category: "Притяжательность", baseWord: "ház" },
    { id: "l15_v6", hu: "étterem", ru: "ресторан", phonetic: "[э̄ттэрэм]", category: "Лексика" },
  ],
  16: [
    { id: "l16_v1", hu: "vonattal", ru: "поездом", phonetic: "[вонаттал]", category: "Творительный падеж -val/-vel", exampleSentence: "Vonattal utazom.", baseWord: "vonat", grammaticalTag: "eszkozhatarozo-val-vel-asszimilacio", relatedLessonId: 16 },
    { id: "l16_v2", hu: "késsel", ru: "ножом", phonetic: "[ке̄шшэл]", category: "Творительный падеж -val/-vel", baseWord: "kés" },
    { id: "l16_v3", hu: "tollal", ru: "ручкой", phonetic: "[толлал]", category: "Творительный падеж -val/-vel", baseWord: "toll" },
    { id: "l16_v4", hu: "kutyával", ru: "с собакой", phonetic: "[кутя̄вал]", category: "Творительный падеж -val/-vel", baseWord: "kutya" },
    { id: "l16_v5", hu: "autóval", ru: "машиной", phonetic: "[ауто̄вал]", category: "Творительный падеж -val/-vel", baseWord: "autó" },
    { id: "l16_v6", hu: "vásárlás", ru: "покупка", phonetic: "[ва̄ша̄рла̄ш]", category: "Лексика" },
  ],
  17: [
    { id: "l17_v1", hu: "eső", ru: "дождь", phonetic: "[эшё̄]", category: "Погода", exampleSentence: "Esik az eső." },
    { id: "l17_v2", hu: "szél", ru: "ветер", phonetic: "[се̄л]", category: "Погода", exampleSentence: "Fúj a szél." },
    { id: "l17_v3", hu: "havazik", ru: "идёт снег", phonetic: "[хавазик]", category: "Погода", grammaticalTag: "idojaras-ige", relatedLessonId: 17 },
    { id: "l17_v4", hu: "tavasz", ru: "весна", phonetic: "[таваз]", category: "Времена года" },
    { id: "l17_v5", hu: "nyár", ru: "лето", phonetic: "[ня̄р]", category: "Времена года" },
    { id: "l17_v6", hu: "fok", ru: "градус", phonetic: "[фок]", category: "Температура", exampleSentence: "Húsz fok van." },
  ],
  18: [
    { id: "l18_v1", hu: "tanulni", ru: "учиться (инфинитив)", phonetic: "[танулни]", category: "Инфинитив", baseWord: "tanul", exampleSentence: "Tanulni kell." },
    { id: "l18_v2", hu: "menni", ru: "идти (инфинитив)", phonetic: "[мэнни]", category: "Инфинитив", baseWord: "megy" },
    { id: "l18_v3", hu: "kell", ru: "нужно / надо", phonetic: "[кэлл]", category: "Модальный глагол", exampleSentence: "Nekem mennem kell.", grammaticalTag: "kell-szemelyragos-fonevi-igennev", relatedLessonId: 18 },
    { id: "l18_v4", hu: "tud", ru: "уметь / мочь", phonetic: "[туд]", category: "Модальный глагол", exampleSentence: "Tudok magyarul beszélni." },
    { id: "l18_v5", hu: "szeretnék", ru: "я хотел бы", phonetic: "[сэрэтне̄к]", category: "Модальный глагол", baseWord: "szeret" },
    { id: "l18_v6", hu: "lehet", ru: "можно / возможно", phonetic: "[лэхэт]", category: "Модальный глагол" },
  ],
  19: [
    { id: "l19_v1", hu: "fogok", ru: "я буду (вспом. глагол fog)", phonetic: "[фогок]", category: "Будущее время", exampleSentence: "Tanulni fogok.", baseWord: "fog", grammaticalTag: "jovo-ido-fog-infinitiv", relatedLessonId: 19 },
    { id: "l19_v2", hu: "fogsz", ru: "ты будешь", phonetic: "[фогс]", category: "Будущее время", baseWord: "fog" },
    { id: "l19_v3", hu: "fogunk", ru: "мы будем", phonetic: "[фогунк]", category: "Будущее время", baseWord: "fog" },
    { id: "l19_v4", hu: "holnap", ru: "завтра", phonetic: "[холнап]", category: "Временные маркеры", exampleSentence: "Holnap iskolába fogok menni." },
    { id: "l19_v5", hu: "venni", ru: "купить (инфинитив)", phonetic: "[вэнни]", category: "Инфинитив", baseWord: "vesz" },
    { id: "l19_v6", hu: "iskolába", ru: "в школу", phonetic: "[ишкола̄ба]", category: "Направление", baseWord: "iskola" },
  ],
  20: [
    { id: "l20_v1", hu: "vártam", ru: "я ждал", phonetic: "[ва̄ртам]", category: "Прошедшее время", exampleSentence: "Tegnap vártam.", baseWord: "vár", grammaticalTag: "mult-ido-t-ott-ett-ott", relatedLessonId: 20 },
    { id: "l20_v2", hu: "kértem", ru: "я просил", phonetic: "[ке̄ртэм]", category: "Прошедшее время", baseWord: "kér" },
    { id: "l20_v3", hu: "dolgozott", ru: "он/она работал(а)", phonetic: "[долгозотт]", category: "Прошедшее время", baseWord: "dolgozik" },
    { id: "l20_v4", hu: "festett", ru: "он/она рисовал(а)", phonetic: "[фэштэтт]", category: "Прошедшее время", baseWord: "fest" },
    { id: "l20_v5", hu: "volt", ru: "был / была", phonetic: "[волт]", category: "Прошедшее время", baseWord: "lenni" },
    { id: "l20_v6", hu: "ment", ru: "он/она шёл(а)", phonetic: "[мэнт]", category: "Прошедшее время", baseWord: "megy" },
  ],
  21: [
    { id: "l21_v1", hu: "látlak", ru: "я тебя вижу (-lak/-lek)", phonetic: "[ла̄тлак]", category: "Определённое спряжение II", exampleSentence: "Látlak téged.", baseWord: "lát", grammaticalTag: "targyas-ragozas-lak-lek", relatedLessonId: 21 },
    { id: "l21_v2", hu: "olvasom", ru: "я читаю (эту книгу)", phonetic: "[олвашом]", category: "Определённое спряжение", baseWord: "olvas", exampleSentence: "Olvasom a könyvet." },
    { id: "l21_v3", hu: "engem", ru: "меня (вин. падеж)", phonetic: "[энгэм]", category: "Местоимения" },
    { id: "l21_v4", hu: "téged", ru: "тебя (вин. падеж)", phonetic: "[те̄гэд]", category: "Местоимения" },
    { id: "l21_v5", hu: "látom", ru: "я вижу (его/её/это)", phonetic: "[ла̄том]", category: "Определённое спряжение", baseWord: "lát" },
    { id: "l21_v6", hu: "könyveket", ru: "книги (вин. падеж мн.ч.)", phonetic: "[кёнйвэкэт]", category: "Винительный падеж", baseWord: "könyv" },
  ],
  22: [
    { id: "l22_v1", hu: "várj", ru: "подожди! (повелит.)", phonetic: "[ва̄рй]", category: "Повелительное наклонение", exampleSentence: "Várj egy percet!", baseWord: "vár", grammaticalTag: "felszolito-mod-j", relatedLessonId: 22 },
    { id: "l22_v2", hu: "írj", ru: "пиши! (повелит.)", phonetic: "[ӣрй]", category: "Повелительное наклонение", baseWord: "ír" },
    { id: "l22_v3", hu: "hozz", ru: "принеси! (повелит.)", phonetic: "[хозз]", category: "Повелительное наклонение", baseWord: "hoz" },
    { id: "l22_v4", hu: "olvass", ru: "читай! (повелит.)", phonetic: "[олвашш]", category: "Повелительное наклонение", baseWord: "olvas" },
    { id: "l22_v5", hu: "mutass", ru: "покажи! (повелит.)", phonetic: "[муташш]", category: "Повелительное наклонение", baseWord: "mutat" },
    { id: "l22_v6", hu: "légy", ru: "будь! (повелит. от lenni)", phonetic: "[ле̄дь]", category: "Повелительное наклонение", baseWord: "lenni" },
  ],
  23: [
    { id: "l23_v1", hu: "tanulnék", ru: "я учился бы", phonetic: "[танулне̄к]", category: "Условное наклонение", exampleSentence: "Tanulnék magyarul.", baseWord: "tanul", grammaticalTag: "felteteles-mod-na-ne", relatedLessonId: 23 },
    { id: "l23_v2", hu: "kérnék", ru: "я просил бы", phonetic: "[ке̄рне̄к]", category: "Условное наклонение", baseWord: "kér" },
    { id: "l23_v3", hu: "lenne", ru: "было бы (от lenni)", phonetic: "[лэннэ]", category: "Условное наклонение", baseWord: "lenni" },
    { id: "l23_v4", hu: "szeretnék", ru: "я хотел бы", phonetic: "[сэрэтне̄к]", category: "Условное наклонение", baseWord: "szeret" },
    { id: "l23_v5", hu: "tanulna", ru: "он/она учился бы", phonetic: "[танулна]", category: "Условное наклонение", baseWord: "tanul" },
    { id: "l23_v6", hu: "ha", ru: "если", phonetic: "[ха]", category: "Условные предложения", exampleSentence: "Ha időm lenne, utaznék." },
  ],
  24: [
    { id: "l24_v1", hu: "mert", ru: "потому что", phonetic: "[мэрт]", category: "Подчинительные союзы", exampleSentence: "Nem mentem, mert beteg voltam.", grammaticalTag: "osszetett-mondat-kotoszo-mert", relatedLessonId: 24 },
    { id: "l24_v2", hu: "hogy", ru: "что (союз)", phonetic: "[ходь]", category: "Подчинительные союзы", exampleSentence: "Azt mondta, hogy holnap jön." },
    { id: "l24_v3", hu: "ha", ru: "если", phonetic: "[ха]", category: "Подчинительные союзы" },
    { id: "l24_v4", hu: "bár", ru: "хотя", phonetic: "[ба̄р]", category: "Подчинительные союзы" },
    { id: "l24_v5", hu: "ezért", ru: "поэтому", phonetic: "[эзэ̄рт]", category: "Сочинительные союзы", exampleSentence: "Esik az eső, ezért itthon maradunk." },
    { id: "l24_v6", hu: "de", ru: "но", phonetic: "[дэ]", category: "Сочинительные союзы", exampleSentence: "Szeretnék menni, de nincs időm." },
  ],
  25: [
    { id: "l25_v1", hu: "mérnök", ru: "инженер", phonetic: "[ме̄рнок]", category: "Профессии", exampleSentence: "Mérnök vagyok." },
    { id: "l25_v2", hu: "foglalkozik", ru: "заниматься (чем-то)", phonetic: "[фоглалкозик]", category: "Профессии", exampleSentence: "Mivel foglalkozol?", baseWord: "foglalkozik", grammaticalTag: "munka-szokincs-foglalkozas", relatedLessonId: 25 },
    { id: "l25_v3", hu: "iroda", ru: "офис", phonetic: "[ирода]", category: "Лексика", exampleSentence: "Irodában dolgozom." },
    { id: "l25_v4", hu: "munka", ru: "работа", phonetic: "[мунка]", category: "Лексика" },
    { id: "l25_v5", hu: "állásinterjú", ru: "собеседование", phonetic: "[а̄ла̄шинтэрвӯ]", category: "Лексика" },
    { id: "l25_v6", hu: "kolléga", ru: "коллега", phonetic: "[колле̄га]", category: "Лексика" },
  ],
  26: [
    { id: "l26_v1", hu: "fáj", ru: "болит", phonetic: "[фа̄й]", category: "Здоровье", exampleSentence: "Fáj a fejem.", baseWord: "fáj", grammaticalTag: "egeszseg-faj-birtokos", relatedLessonId: 26 },
    { id: "l26_v2", hu: "fejem", ru: "моя голова", phonetic: "[фэ̄йэм]", category: "Части тела", baseWord: "fej" },
    { id: "l26_v3", hu: "torkom", ru: "моё горло", phonetic: "[торком]", category: "Части тела", baseWord: "torok" },
    { id: "l26_v4", hu: "láz", ru: "температура / жар", phonetic: "[ла̄з]", category: "Симптомы", exampleSentence: "Lázam van." },
    { id: "l26_v5", hu: "köhögés", ru: "кашель", phonetic: "[кёхэ̄гэ̄ш]", category: "Симптомы" },
    { id: "l26_v6", hu: "orvos", ru: "врач", phonetic: "[орвос]", category: "Лексика", exampleSentence: "Az orvoshoz megyek." },
  ],
  27: [
    { id: "l27_v1", hu: "vonattal", ru: "поездом", phonetic: "[вонаттал]", category: "Транспорт", exampleSentence: "Vonattal utazom Budapestre.", baseWord: "vonat", grammaticalTag: "utazas-val-vel-kozlekedes", relatedLessonId: 27 },
    { id: "l27_v2", hu: "busz", ru: "автобус", phonetic: "[бус]", category: "Транспорт" },
    { id: "l27_v3", hu: "jegy", ru: "билет", phonetic: "[йэдь]", category: "Лексика", exampleSentence: "Jegyet akarok venni." },
    { id: "l27_v4", hu: "szálloda", ru: "отель", phonetic: "[са̄ллода]", category: "Лексика" },
    { id: "l27_v5", hu: "foglalás", ru: "бронирование", phonetic: "[фогла̄ла̄ш]", category: "Лексика", exampleSentence: "Foglaltam egy szobát." },
    { id: "l27_v6", hu: "repülő", ru: "самолёт", phonetic: "[рэпюлё̄]", category: "Транспорт" },
  ],
  28: [
    { id: "l28_v1", hu: "agglutináció", ru: "агглютинация", phonetic: "[агглютина̄цио̄]", category: "Повторение B1", exampleSentence: "A magyar nyelv agglutinatív." },
    { id: "l28_v2", hu: "hangrend", ru: "гармония гласных", phonetic: "[хангрэнд]", category: "Повторение B1" },
    { id: "l28_v3", hu: "igeidő", ru: "время глагола", phonetic: "[игэ̄йё̄]", category: "Повторение B1" },
    { id: "l28_v4", hu: "igemód", ru: "наклонение глагола", phonetic: "[игэмо̄д]", category: "Повторение B1" },
    { id: "l28_v5", hu: "mondat", ru: "предложение", phonetic: "[мондат]", category: "Повторение B1" },
    { id: "l28_v6", hu: "összefoglalás", ru: "итоговое повторение", phonetic: "[ё̄ссэфоггала̄ш]", category: "Повторение B1", grammaticalTag: "b1-osszefoglalas", relatedLessonId: 28 },
  ],
}; }

let _quizMap: Record<number, QuizQuestion[]> | null = null;
const LESSON_QUIZ_MAP: Record<number, QuizQuestion[]> = new Proxy({} as Record<number, QuizQuestion[]>, {
  get: (_, k) => {
    if (!_quizMap) _quizMap = buildQuizMap();
    return _quizMap[k as unknown as number];
  },
  has: (_, k) => {
    if (!_quizMap) _quizMap = buildQuizMap();
    return k in _quizMap;
  },
});

function buildQuizMap(): Record<number, QuizQuestion[]> { return {
  1: [
    {
      id: 1,
      question: "Как в венгерском языке произносится отдельная буква «s»?",
      options: ["Как русский звук [с]", "Как русский звук [ш]", "Как англо-венгерский [з]", "Как мягкий [сь]"],
      correctIndex: 1,
      explanation: "Буква «s» в венгерском языке ВСЕГДА читается как [ш] (sok = шок). А звук [с] записывается комбинацией «sz»!"
    },
    {
      id: 2,
      question: "Какое сочетание букв передает звук [с]?",
      options: ["s", "sz", "zs", "cs"],
      correctIndex: 1,
      explanation: "Буквосочетание «sz» даёт звук [с] (например, szép = сэ̄п)."
    },
    {
      id: 3,
      question: "На какой слог ВСЕГДА падает ударение в венгерских словах?",
      options: ["На последний слог", "На слог с долгой гласной", "На первый слог", "Зависит от части речи"],
      correctIndex: 2,
      explanation: "Золотое правило венгерской фонетики: ударение всегда падает на ПЕРВЫЙ слог."
    },
    {
      id: 4,
      question: "Как произносится буквосочетание «ly» в современном венгерском?",
      options: ["Как мягкое [ль]", "Как звук [й] (так же, как j)", "Как глухое [х]", "Как двойное [лл]"],
      correctIndex: 1,
      explanation: "В современном венгерском «ly» и «j» произносятся одинаково — как звук [й] (hely = хэй)."
    },
    {
      id: 5,
      question: "Какой звук передает сочетание «gy» в слове «gyerek»?",
      options: ["Глухой [т]", "Смягчённый звонкий [дь]", "Твёрдый [г]", "Звук [ж]"],
      correctIndex: 1,
      explanation: "Сочетание «gy» передает мягкий звук [дь] (gyerek = дьэрэк)."
    }
  ],
  2: [
    {
      id: 1,
      question: "Какое из следующих приветствий является официальным?",
      options: ["Szia", "Szevasz", "Jó napot", "Cső"],
      correctIndex: 2,
      explanation: "«Jó napot» (Добрый день) — официальное вежливое приветствие."
    },
    {
      id: 2,
      question: "Что означает местоимение «ő» в венгерском языке?",
      options: ["Только он", "Только она", "И он, и она (род грамматически не разграничивается)", "Оно"],
      correctIndex: 2,
      explanation: "В венгерском языке нет грамматического рода. «Ő» означает и «он», и «она»."
    },
    {
      id: 3,
      question: "Какая форма глагола lenni (быть) соответствует 1-му лицу единственного числа (én)?",
      options: ["vagy", "vagyok", "van", "vagyunk"],
      correctIndex: 1,
      explanation: "«én vagyok» = «я есть» (например, Diák vagyok = Я студент)."
    },
    {
      id: 4,
      question: "Как правильно сказать «Она красивая» по-венгерски?",
      options: ["Ő van szép", "Ő szép", "Ő vagyok szép", "Szép van ő"],
      correctIndex: 1,
      explanation: "В 3-м лице с прилагательными глагол «van» опускается: «Ő szép»."
    },
    {
      id: 5,
      question: "Как сказать «До свидания» в официальной обстановке?",
      options: ["Szia", "Viszontlátásra", "Jó estét", "Köszönöm"],
      correctIndex: 1,
      explanation: "«Viszontlátásra» — общепринятая официальная формула прощания."
    }
  ],
  3: [
    {
      id: 1,
      question: "Какой определенный артикль используется перед словом, начинающимся с гласного звука (например, alma)?",
      options: ["a", "az", "egy", "не используется"],
      correctIndex: 1,
      explanation: "Перед словами, начинающимися с гласной буквы, используется артикль «az» (az alma)."
    },
    {
      id: 2,
      question: "Какой показатель/буква отвечает за множественное число венгерских существительных?",
      options: ["-s", "-t", "-k", "-n"],
      correctIndex: 2,
      explanation: "Множественное число образуется прибавлением суффикса «-k» (например, ház -> házak)."
    },
    {
      id: 3,
      question: "Что происходит с конечной краткой гласной «a» (например, macska) при прибавлении -k?",
      options: ["Она выпадает", "Она удлиняется в «á» (macskák)", "Она превращается в «o»", "Остается без изменений"],
      correctIndex: 1,
      explanation: "Конечные гласные -a/-e удлиняются при присоединении суффиксов: macska -> macskák."
    },
    {
      id: 4,
      question: "В каком числе стоит существительное после числительного (например, «5 человек»)?",
      options: ["Во множественном числе (öt emberek)", "В единственном числе (öt ember)", "В родительном падеже", "Зависит от контекста"],
      correctIndex: 1,
      explanation: "После числительных существительное ВСЕГДА употребляется в единственном числе: öt ember (пять человек)."
    },
    {
      id: 5,
      question: "Что означает венгерское слово «egy»?",
      options: ["Только число 1", "И число 1, и неопределенный артикль (как a/an)", "Определенный артикль", "Множественное число"],
      correctIndex: 1,
      explanation: "«Egy» используется и как числительное «один», и как неопределенный артикль."
    }
  ],
  4: [
    {
      id: 1,
      question: "Когда используется неопределенное спряжение (alanyi ragozás)?",
      options: ["Всегда для любых глаголов", "Когда нет прямого дополнения или оно неопределенное", "Только с прошедшим временем", "Только с непереходными глаголами"],
      correctIndex: 1,
      explanation: "Неопределенное спряжение применяется, когда дополнение отсутствует или выражено неопределенно."
    },
    {
      id: 2,
      question: "Каковы личные окончания 1-го лица ед.ч. (én) в неопределенном спряжении?",
      options: ["-sz", "-ok / -ek / -ök", "-unk / -ünk", "-nak / -nek"],
      correctIndex: 1,
      explanation: "Для «én» используются окончания -ok / -ek / -ök в зависимости от гласных основы (tanulok, olvasok, ülök)."
    },
    {
      id: 3,
      question: "Какова особенность так называемых «-ik» глаголов (например, dolgozik, eszik)?",
      options: ["Они не имеют прошедшего времени", "В 3-м лице единственного числа словарная форма оканчивается на -ik", "Они спрягаются только во множественном числе", "Они не подчиняются гармонии гласных"],
      correctIndex: 1,
      explanation: "-ik глаголы в 3-м лице ед.ч. имеют окончание -ik (dolgozik, alszik)."
    },
    {
      id: 4,
      question: "Что такое гармония гласных в венгерском языке?",
      options: ["Совпадение ударения во всех словах", "Правило, по которому суффиксы выбирают заднеязычные или переднеязычные гласные под стать основе", "Чередование согласных в корне", "Использование рифмы в предложении"],
      correctIndex: 1,
      explanation: "Гармония гласных требует, чтобы суффиксы гармонировали с гласными звуками в корне слова."
    }
  ]
}; }

/**
 * Returns vocabulary for the specified lesson.
 * Checks localStorage overrides from admin panel first, then falls back to built-in data.
 */
export function getLessonVocabulary(lesson: Lesson): VocabularyItem[] {
  if (lesson.vocabulary && lesson.vocabulary.length > 0) {
    return lesson.vocabulary;
  }

  // Check admin overrides in localStorage
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem('admin_content_vocab_overrides');
      if (raw) {
        const overrides: Record<number, VocabularyItem[]> = JSON.parse(raw);
        if (lesson.number in overrides) {
          return overrides[lesson.number];
        }
      }
    } catch { /* ignore */ }
  }

  if (LESSON_VOCABULARY_MAP[lesson.number]) {
    return LESSON_VOCABULARY_MAP[lesson.number];
  }

  return [];
}

/**
 * Returns quiz questions tailored for the specified lesson.
 */
export function getLessonQuiz(lesson: Lesson): QuizQuestion[] {

  if (lesson.quiz && lesson.quiz.length > 0) {
    return lesson.quiz;
  }

  if (LESSON_QUIZ_MAP[lesson.number]) {
    return LESSON_QUIZ_MAP[lesson.number];
  }

  // Dynamic tailored fallback quiz for lessons 5..28
  return [
    {
      id: 1,
      question: `Какова главная тема Урока ${lesson.number} («${lesson.title.replace(/^Урок \d+ · /, '')}»)?`,
      options: [
        lesson.subtitle,
        "Основные правила счета и чисел",
        "Прошедшее время венгерского глагола",
        "Официальные приветствия в Венгрии"
      ],
      correctIndex: 0,
      explanation: `Тематика Урока ${lesson.number} полностью посвящена материалу: ${lesson.description}`
    },
    {
      id: 2,
      question: `Какое базовое правило следует помнить в контексте темы Урока ${lesson.number}?`,
      options: [
        "Ударение всегда падает на первый слог в венгерском языке",
        "В венгерском языке отсутствует грамматический род",
        "Суффиксы присоединяются к корню последовательно (агглютинация)",
        "Все вышеперечисленные утверждения верны"
      ],
      correctIndex: 3,
      explanation: "Все три утверждения являются базовыми незыблемыми законами венгерского языка."
    },
    {
      id: 3,
      question: `Сколько слайдов с учебным материалом содержит Урок ${lesson.number}?`,
      options: [`${lesson.slidesCount} слайдов`, "5 слайдов", "50 слайдов", "1 слайд"],
      correctIndex: 0,
      explanation: `Урок ${lesson.number} содержит ровно ${lesson.slidesCount} обучающих слайдов.`
    },
    {
      id: 4,
      question: `К какому уровню владения языком относится Урок ${lesson.number}?`,
      options: [`Уровень ${lesson.level}`, "Уровень C2", "Продвинутый уровень", "Нулевой курс"],
      correctIndex: 0,
      explanation: `Этот урок входит в программу уровня ${lesson.level}.`
    }
  ];
}

/**
 * Returns translation exercises for the specified lesson.
 * Checks localStorage overrides from admin panel first, then falls back to built-in data.
 */
export function getLessonTranslations(lesson: Lesson): TranslationItem[] {
  // Check admin overrides in localStorage
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem('admin_content_trans_overrides');
      if (raw) {
        const overrides: Record<number, TranslationItem[]> = JSON.parse(raw);
        if (lesson.number in overrides) {
          return overrides[lesson.number];
        }
      }
    } catch { /* ignore */ }
  }

  return LESSON_TRANSLATION_MAP[lesson.number] ?? [];
}
