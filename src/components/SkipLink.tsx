import { useI18n } from '../i18n';

export function SkipLink() {
  const { t } = useI18n();

  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-[#0D5ED0] px-4 py-3 font-semibold text-white shadow-lg transition-transform focus:translate-y-0 motion-reduce:transition-none"
    >
      {t('common.skipToContent')}
    </a>
  );
}
