/**
 * Shared answer normalization for Hungarian text inputs.
 *
 * Rules (from MODEL_LESSON_L15_SPEC):
 * - trim
 * - lower case with 'hu-HU' locale
 * - collapse whitespace
 * - trailing punctuation may be ignored
 * - diacritics are NEVER stripped: á ≠ a, é ≠ e, ö ≠ o, ő ≠ ö, ü ≠ u, ű ≠ ü
 *
 * `toLocaleLowerCase('hu-HU')` keeps Hungarian diacritics distinct and correctly
 * lowercases characters such as 'Á' → 'á', 'Ő' → 'ő', 'Ü' → 'ü'.
 */

export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase('hu-HU')
    .replace(/[.!?,;:]+$/u, '')
    .trim()
    .replace(/\s+/g, ' ');
}

/**
 * Returns true if the user input matches any of the accepted answers after
 * normalization. Diacritics are part of correctness.
 */
export function isAnswerAccepted(userInput: string, acceptedAnswers: string[]): boolean {
  const normalizedUser = normalizeAnswer(userInput);
  return acceptedAnswers.some((answer) => normalizeAnswer(answer) === normalizedUser);
}
