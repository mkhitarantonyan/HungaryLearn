import type { CSSProperties } from 'react';
import './AppPreloader.css';
import { useI18n } from '../i18n';

interface AppPreloaderProps {
  message?: string;
}

const WORDMARK = Array.from('Magyaro');

export function AppPreloader({ message }: AppPreloaderProps) {
  const { t } = useI18n();
  const resolvedMessage = message ?? t('common.loading');
  return (
    <div
      className="magyaro-preloader"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={resolvedMessage}
    >
      <div className="magyaro-preloader__stage">
        <div className="magyaro-preloader__mark" aria-hidden="true">
          <svg viewBox="0 0 68 48">
            <polyline points="32,4 60,17 32,30 4,17 32,4" />
            <path d="M16,22 L16,34 C16,38 47,38 47,34 L47,22" />
            <path d="M60,17 L60,32" />
            <path
              className="magyaro-preloader__tassel"
              d="M60,32 c0,4 6,4 6,8 c0,3 -3,4 -3,4 l-1,-2 c1,-1 2,-2 1,-3 c-1,-2 -4,-2 -4,-5 z"
            />
          </svg>
        </div>

        <div className="magyaro-preloader__word" aria-label="Magyaro">
          {WORDMARK.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              aria-hidden="true"
              style={{ '--letter-delay': `${0.05 + index * 0.05}s` } as CSSProperties}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="magyaro-preloader__rotator" aria-hidden="true">
          <span>Szia! 👋</span>
          <span>{t('preloader.hello')}</span>
          <span>Բարեւ Ձեզ</span>
          <span>Tanuljunk magyarul!</span>
        </div>

        <div className="magyaro-preloader__progress" aria-hidden="true">
          <div className="magyaro-preloader__progress-fill" />
        </div>
        <p className="magyaro-preloader__message">{resolvedMessage}</p>
      </div>

      <span className="magyaro-preloader__spark magyaro-preloader__spark--one" aria-hidden="true" />
      <span className="magyaro-preloader__spark magyaro-preloader__spark--two" aria-hidden="true" />
      <span className="magyaro-preloader__spark magyaro-preloader__spark--three" aria-hidden="true" />
      <span className="magyaro-preloader__spark magyaro-preloader__spark--four" aria-hidden="true" />
      <span className="magyaro-preloader__spark magyaro-preloader__spark--five" aria-hidden="true" />
    </div>
  );
}
