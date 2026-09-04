const COPY_RULES: Array<[RegExp, string]> = [
  [
    /Writing оста(?:ё|е)тся PARTIAL(?: до квалифицированной проверки)?\.?/giu,
    'Написанный текст лучше дополнительно проверить с преподавателем или носителем языка.',
  ],
  [
    /RolePlay оста(?:ё|е)тся PARTIAL[^.<]*\.?/giu,
    'Диалог выполнен; свободную речь полезно дополнительно проверить с преподавателем или носителем языка.',
  ],
  [
    /Optional speaking[^.<]*(?:score|evidence)[^.<]*\.?/giu,
    'Устная практика предназначена для самостоятельной тренировки.',
  ],
  [
    /необязательн(?:ая|ое) (?:устная )?самопрактика[^.<]*(?:score|evidence)[^.<]*\.?/giu,
    'Необязательная устная практика: произнеси ответ вслух и сравни его с примерами урока.',
  ],
  [
    /(?:Это )?текстовая инструкция без микрофона, score и evidence\.?/giu,
    'Произнеси ответ вслух и сравни его с примерами урока.',
  ],
  [
    /(?:не использует микрофон, )?не оценивается и не созда(?:ё|е)т evidence\.?/giu,
    'предназначена для самостоятельной тренировки.',
  ],
  [
    /без микрофона, score и evidence\.?/giu,
    'для самостоятельной тренировки.',
  ],
  [
    /Controlled Practice, Reading и (?:загруженный )?Listening могут дать DIRECT после порога\.?/giu,
    'Выполни упражнения, чтение и аудирование и проверь результат.',
  ],
  [
    /Controlled Practice, Reading и Listening могут дать DIRECT после порога\.?/giu,
    'Выполни упражнения, чтение и аудирование и проверь результат.',
  ],
  [
    /Quiz или завершение урока не означает автоматически «A1 achieved» и не является CEFR-сертификацией\.?/giu,
    'Переходи дальше, когда основные задания урока стали понятными и уверенными.',
  ],
  [
    /Quiz и просмотр 11 слайдов сами по себе не выдают CEFR-сертификацию\.?/giu,
    'Если основные задания ещё вызывают трудности, вернись к ним перед следующим уроком.',
  ],
  [
    /не автоматическое утверждение «A2 достигнут»\.?/giu,
    'это ориентир для повторения, а не формальная отметка уровня.',
  ],
  [/\bPRACTICE\s*·\s*not qualified\b/giu, 'Дополнительная практика'],
  [/\bDIRECT\s*·\s*met\b/giu, 'Готово'],
  [/\bDIRECT\s*·\s*не met\b/giu, 'Попробуй ещё раз'],
  [/\bNONE\s*·\s*direct evidence отсутствует\b/giu, 'Пока недоступно'],
  [/\bPARTIAL\b/gu, 'требует дополнительной проверки'],
  [/\bDIRECT\b/gu, 'проверено'],
  [/\bNONE\b/gu, 'пока недоступно'],
  [/\bevidence\b/giu, 'результат'],
  [/\bscore\b/giu, 'оценка'],
  [/\bRolePlay\b/giu, 'диалог'],
  [/\bWriting\b/giu, 'письмо'],
  [/\bListening\b/giu, 'аудирование'],
  [/\bControlled Practice\b/giu, 'упражнения'],
  [/\bExit Check\b/giu, 'итоговая проверка'],
  [/\bquiz\b/giu, 'проверка'],
  [/\btranscript\b/giu, 'текст записи'],
];

export function humanizeLearnerText(value: string): string {
  let result = value;
  for (const [pattern, replacement] of COPY_RULES) {
    result = result.replace(pattern, replacement);
  }
  return result
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
}

export function humanizeLearnerHtml(value: string): string {
  return humanizeLearnerText(value);
}

export function containsLearnerMetaLanguage(value: string): boolean {
  return /\b(?:PARTIAL|DIRECT|NONE|evidence|score)\b|CEFR-сертификац|A[012]\s+achieved/iu.test(value);
}