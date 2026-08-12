import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Pencil } from 'lucide-react';
import { motion } from 'motion/react';
import { speakText } from '../utils/speech';
import { getDisplayWord, isAdminLoggedIn, subscribeAdminState } from '../utils/adminStore';
import { EditWordModal } from './EditWordModal';

interface SpeechButtonProps {
  text: string;
  label?: string;
  rate?: number;
  variant?: 'pill' | 'card' | 'icon' | 'primary';
  className?: string;
}

export const SpeechButton: React.FC<SpeechButtonProps> = ({
  text,
  label,
  rate = 0.82,
  variant = 'pill',
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn());
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [displayText, setDisplayText] = useState(() => label || getDisplayWord(text));

  useEffect(() => {
    const unsubscribe = subscribeAdminState((adminStatus) => {
      setIsAdmin(adminStatus);
    });
    return unsubscribe;
  }, []);

  const refreshDisplayText = () => {
    setDisplayText(label || getDisplayWord(text));
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
    speakText(
      getDisplayWord(text),
      'hu-HU',
      rate,
      () => setIsPlaying(false),
      () => setIsPlaying(false)
    );
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditOpen(true);
  };

  if (variant === 'icon') {
    return (
      <>
        <div className="inline-flex items-center gap-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlay}
            aria-label={`Воспроизвести произношение: ${displayText}`}
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7A1E2B]/10 hover:bg-[#7A1E2B] text-[#7A1E2B] hover:text-white transition-colors cursor-pointer ${className}`}
            title={`Послушать произношение: ${displayText}`}
          >
            <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-[#B98A2B]' : ''}`} />
          </motion.button>
          {isAdmin && (
            <button
              onClick={handleEditClick}
              aria-label="Редактировать слово или озвучку"
              className="p-1 rounded-full bg-[#B98A2B]/15 hover:bg-[#B98A2B] text-[#8A6715] hover:text-white transition-colors cursor-pointer"
              title="Админ: изменить слово/звук"
            >
              <Pencil className="w-3 h-3" />
            </button>
          )}
        </div>
        <EditWordModal
          isOpen={isEditOpen}
          originalText={text}
          onClose={() => setIsEditOpen(false)}
          onSaved={refreshDisplayText}
        />
      </>
    );
  }

  if (variant === 'primary') {
    return (
      <>
        <div className="inline-flex items-center gap-1.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePlay}
            aria-label={`Воспроизвести произношение: ${displayText}`}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1E2B] text-[#FBF7EF] font-semibold hover:bg-[#57121C] shadow-sm transition-all cursor-pointer ${className}`}
          >
            <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-bounce text-[#B98A2B]' : ''}`} />
            <span>{displayText}</span>
            {isPlaying && (
              <span className="flex gap-0.5 items-center ml-1">
                <span className="w-1 h-3 bg-[#B98A2B] animate-pulse rounded-full"></span>
                <span className="w-1 h-4 bg-[#B98A2B] animate-pulse delay-75 rounded-full"></span>
                <span className="w-1 h-2 bg-[#B98A2B] animate-pulse delay-150 rounded-full"></span>
              </span>
            )}
          </motion.button>
          {isAdmin && (
            <button
              onClick={handleEditClick}
              aria-label="Редактировать слово или озвучку"
              className="p-1.5 rounded-full bg-[#B98A2B]/20 hover:bg-[#B98A2B] text-[#57121C] hover:text-white transition-colors cursor-pointer"
              title="Админ: изменить слово/звук"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <EditWordModal
          isOpen={isEditOpen}
          originalText={text}
          onClose={() => setIsEditOpen(false)}
          onSaved={refreshDisplayText}
        />
      </>
    );
  }

  // Default 'pill' variant
  return (
    <>
      <div className="inline-flex items-center gap-1">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handlePlay}
          aria-label={`Воспроизвести произношение: ${displayText}`}
          className={`inline-flex items-center gap-1.5 bg-[#7A1E2B] hover:bg-[#57121C] text-[#FBF7EF] font-mono font-medium text-xs md:text-sm px-3 py-1.5 rounded-full transition-all shadow-sm cursor-pointer border border-[#7A1E2B]/20 ${className}`}
        >
          <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#B98A2B] animate-spin' : ''}`} />
          <span className="font-semibold">{displayText}</span>
        </motion.button>
        {isAdmin && (
          <button
            onClick={handleEditClick}
            aria-label="Редактировать слово или озвучку"
            className="p-1.5 rounded-full bg-[#B98A2B]/20 hover:bg-[#B98A2B] text-[#57121C] hover:text-white transition-colors cursor-pointer"
            title="Админ: изменить слово/звук"
          >
            <Pencil className="w-3 h-3" />
          </button>
        )}
      </div>
      <EditWordModal
        isOpen={isEditOpen}
        originalText={text}
        onClose={() => setIsEditOpen(false)}
        onSaved={refreshDisplayText}
      />
    </>
  );
};

