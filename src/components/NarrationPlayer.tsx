import React, { useEffect, useRef, useState } from 'react';
import { Play, Square, Settings2, Mic, RotateCw } from 'lucide-react';
import { NARRATION_PLAYBACK_RATES, type NarrationPlaybackRate } from '../hooks/useLessonNarration';

interface NarrationPlayerProps {
  isPlaying: boolean;
  autoplayEnabled: boolean;
  playbackRate: NarrationPlaybackRate;
  needsUserGesture: boolean;
  audioUnavailable: boolean;
  slideLabel?: string;
  onPlayPause: () => void;
  onToggleAutoplay: () => void;
  onSetPlaybackRate: (rate: NarrationPlaybackRate) => void;
  isAdmin?: boolean;
  onOpenAudioEditor?: () => void;
}

export const NarrationPlayer: React.FC<NarrationPlayerProps> = ({
  isPlaying,
  autoplayEnabled,
  playbackRate,
  needsUserGesture,
  audioUnavailable,
  slideLabel,
  onPlayPause,
  onToggleAutoplay,
  onSetPlaybackRate,
  isAdmin = false,
  onOpenAudioEditor,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [menuOpen]);

  const cycleRate = () => {
    const current = NARRATION_PLAYBACK_RATES.indexOf(playbackRate);
    const next = NARRATION_PLAYBACK_RATES[(current + 1) % NARRATION_PLAYBACK_RATES.length];
    onSetPlaybackRate(next);
  };

  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-[#D6DEE6]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center gap-3 md:gap-4">
        {/* Play / Pause */}
        <button
          type="button"
          onClick={onPlayPause}
          aria-label={isPlaying ? 'Остановить пересказ слайда' : 'Пересказать слайд'}
          className={`shrink-0 h-11 w-11 rounded-full flex items-center justify-center text-white shadow-sm transition-all cursor-pointer ${
            isPlaying ? 'bg-[#3B1E90]' : 'bg-[#116EEE] hover:bg-[#0D5ED0] hover:shadow-md'
          }`}
        >
          {isPlaying ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-px" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-[#252B2F] truncate">
            {isPlaying ? 'Пересказ слайда…' : 'Пересказ слайда'}
          </div>
          <div className="text-[11px] text-[#666E7E] truncate">{slideLabel}</div>
        </div>

        {/* Speed cycle */}
        <button
          type="button"
          onClick={cycleRate}
          aria-label={`Скорость воспроизведения: ${playbackRate}×`}
          className="shrink-0 h-9 px-3 rounded-[10px] border border-[#D6DEE6] bg-white text-[#252B2F] text-xs font-semibold hover:border-[#116EEE]/35 hover:bg-[#EDF4FB] transition-colors cursor-pointer font-mono"
        >
          {playbackRate}×
        </button>

        {/* Autoplay toggle */}
        <button
          type="button"
          onClick={onToggleAutoplay}
          aria-pressed={autoplayEnabled}
          aria-label="Автопересказ слайдов"
          className={`shrink-0 h-9 px-3 rounded-[10px] border text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
            autoplayEnabled
              ? 'bg-[#116EEE] text-white border-[#116EEE]'
              : 'border-[#D6DEE6] text-[#252B2F] hover:bg-[#EDF4FB]'
          }`}
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Авто</span>
          <span
            aria-hidden="true"
            className={`w-1.5 h-1.5 rounded-full ${autoplayEnabled ? 'bg-white' : 'bg-[#D6DEE6]'}`}
          />
        </button>

        {/* Overflow */}
        {isAdmin && onOpenAudioEditor && <div className="relative shrink-0" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label="Дополнительные настройки пересказа"
            className="h-9 w-9 rounded-[10px] border border-[#D6DEE6] text-[#252B2F] hover:bg-[#EDF4FB] transition-colors cursor-pointer flex items-center justify-center"
          >
            <Settings2 className="w-4 h-4" />
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 mt-1 w-56 rounded-xl border border-[#D6DEE6] bg-white shadow-lg py-1 z-40"
            >
              <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenAudioEditor();
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-[#252B2F] hover:bg-[#EDF4FB] cursor-pointer flex items-center gap-2"
                >
                  <Mic className="w-4 h-4 text-[#3B1E90]" />
                  Изменить аудио слайда
              </button>
            </div>
          )}
        </div>}
      </div>

      {needsUserGesture && (
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-2">
          <p className="text-[11px] text-[#C77B00] font-medium" role="status">
            Нажмите ▶ один раз, чтобы разрешить автопересказ.
          </p>
        </div>
      )}
      {audioUnavailable && (
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-2">
          <p className="text-[11px] text-red-700 font-medium" role="alert">
            Записанное аудио для этого слайда недоступно.
          </p>
        </div>
      )}
    </div>
  );
};
