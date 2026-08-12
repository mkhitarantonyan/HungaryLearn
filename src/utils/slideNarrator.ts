import { SlideData } from '../types';
import { SpeechItem } from './speech';
import { VOCABULARY_LIST } from '../data/lessonData';
import { getAudioFileUrl, getSlideCandidateKeys } from './audioRegistry';

export function getSlideNarrativeSequence(slide: SlideData, lessonNumber: number = 1): SpeechItem[] {
  const defaultTextSequence = getSlideDefaultSequence(slide, lessonNumber);

  // Check candidate audio keys for this slide specifically for this lesson
  const candidates = getSlideCandidateKeys(slide.id, lessonNumber);

  let audioKey: string | null = null;
  for (const cand of candidates) {
    if (cand && getAudioFileUrl(cand)) {
      audioKey = cand;
      break;
    }
  }

  if (audioKey) {
    return [{ text: audioKey, lang: 'ru-RU', fallbackSequence: defaultTextSequence }];
  }

  return defaultTextSequence;
}

function getSlideDefaultSequence(slide: SlideData, lessonNumber: number = 1): SpeechItem[] {
  const sequence: SpeechItem[] = [];

  // If lesson 1, use specific curated speech sequence
  if (lessonNumber === 1) {
    switch (slide.type) {
      case 'intro':
        sequence.push({ text: 'Üdvözöllek!', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Добро пожаловать. Как устроен этот курс.', lang: 'ru-RU', rate: 0.95 });
        sequence.push({
          text: 'Этот курс представляет собой полный структурный путь из 28 уроков: с нуля до уверенного разговорного венгерского языка, с понятными объяснениями на русском.',
          lang: 'ru-RU'
        });
        sequence.push({
          text: 'В каждом уроке есть три части: Первое — Теория, правила простым языком. Второе — Примеры с аудио от носителя речи. Третье — Тренажёры и задания для самопроверки.',
          lang: 'ru-RU'
        });
        sequence.push({
          text: 'Структура программы по уровням: Уровень А0, уроки 1–6 — алфавит и базовая фонетика. Уровень А1, уроки 7–14 — базовая грамматика. Уровень А2, уроки 15–20 — падежи и времена. Уровень Б1, уроки 21–28 — свободное общение.',
          lang: 'ru-RU'
        });
        sequence.push({
          text: slide.note || 'Начнем с самого важного — со звуков. Без правильной базы произношения все последующие уроки будут даваться гораздо сложнее.',
          lang: 'ru-RU'
        });
        return sequence;

      case 'info':
        sequence.push({ text: 'A magyar ábécé.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Логика венгерского алфавита.', lang: 'ru-RU' });
        sequence.push({
          text: 'Венгерский язык использует латинский алфавит. В венгерском как написано — так и читается! Одна буква или диграф равна одному звуку.',
          lang: 'ru-RU'
        });
        sequence.push({
          text: slide.note || 'Всего в венгерском языке 44 звука: гласные и согласные. В латинском алфавите всего 26 букв, поэтому используются буквосочетания и значки над буквами.',
          lang: 'ru-RU'
        });
        return sequence;

      case 'vowels-short': {
        sequence.push({ text: 'Rövid magánhangzók.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Краткие гласные звуки.', lang: 'ru-RU' });
        sequence.push({ text: 'Слушаем примеры кратких гласных:', lang: 'ru-RU' });
        
        const items = VOCABULARY_LIST.filter(v => v.category === 'Краткие гласные');
        items.forEach(item => {
          sequence.push({ text: item.hu, lang: 'hu-HU', rate: 0.8 });
          sequence.push({ text: item.ru, lang: 'ru-RU' });
        });

        if (slide.warn) sequence.push({ text: slide.warn, lang: 'ru-RU' });
        return sequence;
      }

      case 'vowels-long': {
        sequence.push({ text: 'Hosszú magánhangzók.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Долгие гласные со штрихами и точками.', lang: 'ru-RU' });
        sequence.push({ text: 'Слушаем долгие гласные:', lang: 'ru-RU' });

        const items = VOCABULARY_LIST.filter(v => v.category === 'Долгие гласные');
        items.forEach(item => {
          sequence.push({ text: item.hu, lang: 'hu-HU', rate: 0.75 });
          sequence.push({ text: item.ru, lang: 'ru-RU' });
        });

        if (slide.task) sequence.push({ text: slide.task, lang: 'ru-RU' });
        return sequence;
      }

      case 'consonants-soft': {
        sequence.push({ text: 'Különleges mássalhangzók.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Мягкие согласные: дь, ть, нь, й.', lang: 'ru-RU' });

        const softs = [
          { hu: 'gyerek', ru: 'ребёнок' },
          { hu: 'kutya', ru: 'собака' },
          { hu: 'anya', ru: 'мать' },
          { hu: 'hely', ru: 'место' }
        ];
        softs.forEach(item => {
          sequence.push({ text: item.hu, lang: 'hu-HU', rate: 0.8 });
          sequence.push({ text: item.ru, lang: 'ru-RU' });
        });

        if (slide.note) sequence.push({ text: slide.note, lang: 'ru-RU' });
        return sequence;
      }

      case 'consonants-sibilants': {
        sequence.push({ text: 'S, sz, zs, cs, dzs.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Свистящие и шипящие звуки.', lang: 'ru-RU' });
        sequence.push({ text: 'Главная ловушка: буква s читается как ш, а буквосочетание sz читается как с.', lang: 'ru-RU' });

        const sibilants = [
          { hu: 'sok', ru: 'много' },
          { hu: 'szép', ru: 'красивый' },
          { hu: 'zsír', ru: 'жир' },
          { hu: 'csók', ru: 'поцелуй' },
          { hu: 'dzsungel', ru: 'джунгли' }
        ];
        sibilants.forEach(item => {
          sequence.push({ text: item.hu, lang: 'hu-HU', rate: 0.8 });
          sequence.push({ text: item.ru, lang: 'ru-RU' });
        });

        if (slide.warn) sequence.push({ text: slide.warn, lang: 'ru-RU' });
        return sequence;
      }

      case 'consonants-double': {
        sequence.push({ text: 'Hosszú mássalhangzók.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Долгие согласные удваиваются на письме.', lang: 'ru-RU' });
        
        sequence.push({ text: 'üt', lang: 'hu-HU', rate: 0.8 });
        sequence.push({ text: 'бить', lang: 'ru-RU' });
        sequence.push({ text: 'ütött', lang: 'hu-HU', rate: 0.8 });
        sequence.push({ text: 'ударил', lang: 'ru-RU' });
        sequence.push({ text: 'tol', lang: 'hu-HU', rate: 0.8 });
        sequence.push({ text: 'толкать', lang: 'ru-RU' });
        sequence.push({ text: 'toll', lang: 'hu-HU', rate: 0.8 });
        sequence.push({ text: 'ручка', lang: 'ru-RU' });

        if (slide.note) sequence.push({ text: slide.note, lang: 'ru-RU' });
        return sequence;
      }

      case 'stress': {
        sequence.push({ text: 'Hangsúly.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Ударение всегда падает исключительно на первый слог.', lang: 'ru-RU' });
        
        sequence.push({ text: 'Budapest', lang: 'hu-HU', rate: 0.8 });
        sequence.push({ text: 'magyar', lang: 'hu-HU', rate: 0.8 });
        sequence.push({ text: 'köszönöm', lang: 'hu-HU', rate: 0.8 });
        sequence.push({ text: 'Magyarország', lang: 'hu-HU', rate: 0.8 });
        return sequence;
      }

      case 'words-practice': {
        sequence.push({ text: 'Első szavak.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Десять главных первых слов:', lang: 'ru-RU' });

        const words = VOCABULARY_LIST.filter(v => v.category === 'Первые слова');
        words.forEach(item => {
          sequence.push({ text: item.hu, lang: 'hu-HU', rate: 0.8 });
          sequence.push({ text: item.ru, lang: 'ru-RU' });
        });
        return sequence;
      }

      case 'sentence-reading': {
        sequence.push({ text: 'Mondatolvasás.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({ text: 'Прочтем предложение целиком:', lang: 'ru-RU' });
        sequence.push({ text: 'Budapesten élek, és nagyon szeretek magyarul tanulni.', lang: 'hu-HU', rate: 0.8 });
        sequence.push({ text: 'Я живу в Будапеште, и мне очень нравится учить венгерский.', lang: 'ru-RU' });
        return sequence;
      }

      case 'summary': {
        sequence.push({ text: 'Összefoglalás.', lang: 'hu-HU', rate: 0.85 });
        sequence.push({
          text: 'Итоги первого урока. Написание и произношение совпадают. Буква s это ш, sz это с. Ударение всегда на первый слог. До встречи на следующем уроке!',
          lang: 'ru-RU'
        });
        return sequence;
      }
    }
  }

  // Generic slide narration for any lesson
  if (slide.title) {
    sequence.push({ text: slide.title, lang: 'ru-RU' });
  }
  if (slide.subtitle) {
    sequence.push({ text: slide.subtitle, lang: 'ru-RU' });
  }
  if (slide.note) {
    sequence.push({ text: slide.note, lang: 'ru-RU' });
  }
  if (slide.warn) {
    sequence.push({ text: slide.warn, lang: 'ru-RU' });
  }
  if (slide.task) {
    sequence.push({ text: slide.task, lang: 'ru-RU' });
  }

  return sequence;
}
