export const SUPPORTED_LANGUAGES = ['ru', 'en', 'es'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export type InstructionLanguage = SupportedLanguage;
export const TARGET_LANGUAGE = 'hu' as const;

export function parseInstructionLanguage(value: unknown): InstructionLanguage {
  return typeof value === 'string' && SUPPORTED_LANGUAGES.includes(value as SupportedLanguage)
    ? value as InstructionLanguage
    : 'ru';
}
