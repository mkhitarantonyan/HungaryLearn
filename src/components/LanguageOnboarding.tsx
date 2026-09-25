import { ArrowRight, BookOpenCheck, Languages, Sparkles } from 'lucide-react';
import { SUPPORTED_LANGUAGES, useI18n } from '../i18n';

export function LanguageOnboarding() {
  const { preferenceSelected, setLanguage, t } = useI18n();
  if (preferenceSelected) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#152033]/70 p-4 backdrop-blur-md">
      <section role="dialog" aria-modal="true" aria-labelledby="language-onboarding-title" aria-describedby="language-onboarding-description" className="relative my-auto w-full max-w-[620px] overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_30px_100px_rgba(11,25,49,0.34)]">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_15%_0%,rgba(17,110,238,0.22),transparent_48%),radial-gradient(circle_at_85%_10%,rgba(92,58,180,0.18),transparent_45%)]" />
        <div aria-hidden="true" className="absolute -right-12 top-9 h-28 w-28 rounded-full border-[18px] border-[#116EEE]/[0.06]" />

        <div className="relative p-6 sm:p-8 md:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#116EEE] to-[#5145CD] text-white shadow-[0_10px_24px_rgba(17,110,238,0.28)]">
              <BookOpenCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#116EEE]">
                <Sparkles className="h-3.5 w-3.5" />
                {t('onboarding.eyebrow')}
              </div>
              <p className="mt-0.5 text-sm font-bold text-[#667287]">Hungarian, step by step</p>
            </div>
          </div>

          <h1 id="language-onboarding-title" className="mt-7 max-w-lg text-[26px] font-black leading-[1.18] tracking-[-0.025em] text-[#202A3B] sm:text-[32px]">
            {t('onboarding.title')}
          </h1>
          <p id="language-onboarding-description" className="mt-3 max-w-lg text-sm leading-6 text-[#667287] sm:text-[15px]">
            {t('onboarding.description')}
          </p>

          <div className="mt-7 grid gap-2.5">
            {SUPPORTED_LANGUAGES.map((language) => (
              <button key={language} type="button" onClick={() => setLanguage(language)} className="group flex min-h-[70px] w-full items-center gap-4 rounded-2xl border border-[#DCE5EF] bg-white px-4 py-3 text-left shadow-[0_3px_12px_rgba(35,55,80,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-[#9FC1ED] hover:bg-[#F7FAFF] hover:shadow-[0_10px_25px_rgba(35,55,80,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#116EEE]/35 sm:px-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F2FF] to-[#F1EDFF] text-xs font-black tracking-[0.08em] text-[#116EEE] transition group-hover:from-[#116EEE] group-hover:to-[#5145CD] group-hover:text-white">
                  {t(`language.short.${language}`)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-extrabold text-[#202A3B]">{t(`language.${language}`)}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-[#707C8F]">{t(`language.description.${language}`)}</span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0F4F9] text-[#7D899B] transition group-hover:bg-[#116EEE] group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-center text-[11px] font-medium text-[#8490A2]">
            <Languages className="h-3.5 w-3.5" />
            {t('onboarding.hint')}
          </div>
        </div>
      </section>
    </div>
  );
}
