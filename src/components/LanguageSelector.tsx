import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Languages } from 'lucide-react';
import { SUPPORTED_LANGUAGES, useI18n } from '../i18n';

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t('language.label')}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${compact ? 'h-9 px-2.5 sm:px-3' : 'h-10 px-3.5'} group inline-flex items-center gap-2 rounded-xl border border-[#D8E1EC] bg-white/95 text-xs font-bold text-[#263247] shadow-[0_3px_12px_rgba(35,55,80,0.08)] transition hover:-translate-y-px hover:border-[#AFC8EA] hover:shadow-[0_6px_18px_rgba(35,55,80,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#116EEE]/30`}
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#E8F2FF] to-[#F0ECFF] text-[#116EEE]">
          <Languages aria-hidden="true" className="h-3.5 w-3.5" />
        </span>
        <span className={compact ? 'hidden sm:inline' : ''}>{t(`language.${language}`)}</span>
        <span className={compact ? 'sm:hidden' : 'hidden'}>{t(`language.short.${language}`)}</span>
        <ChevronDown aria-hidden="true" className={`h-3.5 w-3.5 text-[#718096] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[80] mt-2 w-[286px] overflow-hidden rounded-2xl border border-[#DCE5EF] bg-white p-2 shadow-[0_20px_60px_rgba(30,47,70,0.20)]" role="listbox" aria-label={t('language.menuTitle')}>
          <div className="px-3 pb-2 pt-2">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#8491A4]">{t('language.menuTitle')}</p>
          </div>
          {SUPPORTED_LANGUAGES.map((code) => {
            const selected = code === language;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setLanguage(code);
                  setOpen(false);
                }}
                className={`group/option flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${selected ? 'bg-[#EDF5FF]' : 'hover:bg-[#F6F8FB]'}`}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-black tracking-wide ${selected ? 'bg-[#116EEE] text-white shadow-[0_5px_14px_rgba(17,110,238,0.24)]' : 'bg-[#EEF2F7] text-[#526176] group-hover/option:bg-white'}`}>
                  {t(`language.short.${code}`)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-extrabold text-[#202B3C]">{t(`language.${code}`)}</span>
                  <span className="mt-0.5 block text-[11px] leading-4 text-[#6B778A]">{t(`language.description.${code}`)}</span>
                </span>
                {selected && <Check aria-label={t('language.active')} className="h-4 w-4 shrink-0 text-[#116EEE]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
