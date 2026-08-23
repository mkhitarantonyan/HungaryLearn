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
    <div className="sticky top-0 z-30 bg-[#FBF7EF]/95 backdrop-blur border-b border-[#D9CBB0]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-2 flex items-center gap-2 md:gap-3">
        {/* Play / Pause */}
        <button
          type="button"
          onClick={onPlayPause}
          aria-label={isPlaying ? 'Остановить пересказ слайда' : 'Пересказать слайд'}
          className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer ${
            isPlaying ? 'bg-[#7A1E2B]' : 'bg-[#2C5F58] hover:bg-[#2C5F58]/90'
          }`}
        >
          {isPlaying ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-px" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-[#57121C] truncate">
            {isPlaying ? 'Пересказ слайда…' : 'Пересказ слайда'}
          </div>
          <div className="text-[11px] text-[#8A7A68] truncate">{slideLabel}</div>
        </div>

        {/* Speed cycle */}
        <button
          type="button"
          onClick={cycleRate}
          aria-label={`Скорость воспроизведения: ${playbackRate}×`}
          className="shrink-0 h-8 px-2 rounded-lg border border-[#D9CBB0] text-[#57121C] text-xs font-semibold hover:bg-[#F6EFE4] transition-colors cursor-pointer font-mono"
        >
          {playbackRate}×
        </button>

        {/* Autoplay toggle */}
        <button
          type="button"
          onClick={onToggleAutoplay}
          aria-pressed={autoplayEnabled}
          aria-label="Автопересказ слайдов"
          className={`shrink-0 h-8 px-2.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
            autoplayEnabled
              ? 'bg-[#7A1E2B] text-white border-[#7A1E2B]'
              : 'border-[#D9CBB0] text-[#57121C] hover:bg-[#F6EFE4]'
          }`}
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Авто</span>
          <span
            aria-hidden="true"
            className={`w-1.5 h-1.5 rounded-full ${autoplayEnabled ? 'bg-white' : 'bg-[#D9CBB0]'}`}
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
            className="h-8 w-8 rounded-lg border border-[#D9CBB0] text-[#57121C] hover:bg-[#F6EFE4] transition-colors cursor-pointer flex items-center justify-center"
          >
            <Settings2 className="w-4 h-4" />
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 mt-1 w-56 rounded-xl border border-[#D9CBB0] bg-white shadow-lg py-1 z-40"
            >
              <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenAudioEditor();
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-[#2A2320] hover:bg-[#F6EFE4] cursor-pointer flex items-center gap-2"
                >
                  <Mic className="w-4 h-4 text-[#2C5F58]" />
                  Изменить аудио слайда
              </button>
            </div>
          )}
        </div>}
      </div>

      {needsUserGesture && (
        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-2">
          <p className="text-[11px] text-[#B98A2B] font-medium" role="status">
            Нажмите ▶ один раз, чтобы разрешить автопересказ.
          </p>
        </div>
      )}
      {audioUnavailable && (
        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-2">
          <p className="text-[11px] text-red-700 font-medium" role="alert">
            Записанное аудио для этого слайда недоступно.
          </p>
        </div>
      )}
    </div>
  );
};
