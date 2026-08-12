import { VocabularyItem } from '../types';

export const VOCABULARY_LIST: VocabularyItem[] = [
  // Short Vowels
  { id: "v1", hu: "kalap", ru: "шляпа", phonetic: "[калап]", category: "Краткие гласные", exampleSentence: "A kalap barna." },
  { id: "v2", hu: "kert", ru: "сад", phonetic: "[кэрт]", category: "Краткие гласные", exampleSentence: "A kert szép." },
  { id: "v3", hu: "ing", ru: "рубашка", phonetic: "[инг]", category: "Краткие гласные", exampleSentence: "Fehér ing." },
  { id: "v4", hu: "bor", ru: "вино", phonetic: "[бор]", category: "Краткие гласные", exampleSentence: "A magyar bor jó." },
  { id: "v5", hu: "fut", ru: "бежит", phonetic: "[фут]", category: "Краткие гласные", exampleSentence: "A fiú fut." },
  { id: "v6", hu: "öt", ru: "пять", phonetic: "[ёт]", category: "Краткие гласные", exampleSentence: "Öt ember." },
  { id: "v7", hu: "üveg", ru: "стекло / бутылка", phonetic: "[ювэг]", category: "Краткие гласные", exampleSentence: "Egy üveg víz." },

  // Long Vowels
  { id: "vl1", hu: "ár", ru: "цена", phonetic: "[а̄р]", category: "Долгие гласные", exampleSentence: "Mi az ára?" },
  { id: "vl2", hu: "élet", ru: "жизнь", phonetic: "[э̄лэт]", category: "Долгие гласные", exampleSentence: "Az élet szép." },
  { id: "vl3", hu: "íz", ru: "вкус", phonetic: "[ӣз]", category: "Долгие гласные", exampleSentence: "Jó az íze." },
  { id: "vl4", hu: "óra", ru: "часы / час / урок", phonetic: "[о̄ра]", category: "Долгие гласные", exampleSentence: "Hány óra van?" },
  { id: "vl5", hu: "ő", ru: "он / она", phonetic: "[ё̄]", category: "Долгие гласные", exampleSentence: "Ő barát." },
  { id: "vl6", hu: "út", ru: "дорога / путь", phonetic: "[ӯт]", category: "Долгие гласные", exampleSentence: "Hosszú út." },
  { id: "vl7", hu: "tűz", ru: "огонь", phonetic: "[тӱ̄з]", category: "Долгие гласные", exampleSentence: "A tűz meleg." },

  // Soft Consonants
  { id: "sc1", hu: "gyerek", ru: "ребёнок", phonetic: "[дьэрэк]", category: "Согласные (gy, ty, ny, ly)", exampleSentence: "A gyerek játszik." },
  { id: "sc2", hu: "kutya", ru: "собака", phonetic: "[кутя]", category: "Согласные (gy, ty, ny, ly)", exampleSentence: "A kutya okos." },
  { id: "sc3", hu: "anya", ru: "мать", phonetic: "[аня]", category: "Согласные (gy, ty, ny, ly)", exampleSentence: "Kedves anya." },
  { id: "sc4", hu: "hely", ru: "место", phonetic: "[хэй]", category: "Согласные (gy, ty, ny, ly)", exampleSentence: "Jó hely." },

  // Sibilants
  { id: "sb1", hu: "sok", ru: "много", phonetic: "[шок]", category: "Свистящие/шипящие (s, sz)", exampleSentence: "Sok munka." },
  { id: "sb2", hu: "szép", ru: "красивый", phonetic: "[сэ̄п]", category: "Свистящие/шипящие (s, sz)", exampleSentence: "Budapest szép." },
  { id: "sb3", hu: "zsír", ru: "жир", phonetic: "[жӣр]", category: "Свистящие/шипящие (s, sz)", exampleSentence: "Friss zsír." },
  { id: "sb4", hu: "csók", ru: "поцелуй", phonetic: "[чо̄к]", category: "Свистящие/шипящие (s, sz)", exampleSentence: "Egy csók." },
  { id: "sb5", hu: "dzsungel", ru: "джунгли", phonetic: "[джунгэл]", category: "Свистящие/шипящие (s, sz)", exampleSentence: "Zöld dzsungel." },

  // First 10 core words
  { id: "w1", hu: "víz", ru: "вода", phonetic: "[вӣз]", category: "Первые слова" },
  { id: "w2", hu: "kenyér", ru: "хлеб", phonetic: "[кэнйэ̄р]", category: "Первые слова" },
  { id: "w3", hu: "ház", ru: "дом", phonetic: "[ха̄з]", category: "Первые слова" },
  { id: "w4", hu: "ember", ru: "человек", phonetic: "[эмбэр]", category: "Первые слова" },
  { id: "w5", hu: "barát", ru: "друг", phonetic: "[бара̄т]", category: "Первые слова" },
  { id: "w6", hu: "könyv", ru: "книга", phonetic: "[кёнйв]", category: "Первые слова" },
  { id: "w7", hu: "ég", ru: "небо", phonetic: "[э̄г]", category: "Первые слова" },
  { id: "w8", hu: "nap", ru: "солнце / день", phonetic: "[нап]", category: "Первые слова" },
  { id: "w9", hu: "szerelem", ru: "любовь", phonetic: "[сэрэлэм]", category: "Первые слова" },
  { id: "w10", hu: "boldog", ru: "счастливый", phonetic: "[болдог]", category: "Первые слова" }
];
