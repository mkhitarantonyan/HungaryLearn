import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X, Pencil, Upload, Trash2, Volume2, Save, Check, Mic, Square, Loader2 } from 'lucide-react';
import { getWordOverride, setWordOverride, removeWordOverride, WordOverride } from '../utils/adminStore';
import { playRecordedAudio, stopRecordedAudio } from '../utils/speech';
import { ConfirmDialog } from './ConfirmDialog';

interface EditWordModalProps {
  isOpen: boolean;
  originalText: string;
  onClose: () => void;
  onSaved?: () => void;
}

export const EditWordModal: React.FC<EditWordModalProps> = ({
  isOpen,
  originalText,
  onClose,
  onSaved
}) => {
  const [customText, setCustomText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [hasExistingAudio, setHasExistingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [audioError, setAudioError] = useState('');

  // Microphone recording state
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    if (isOpen && originalText) {
      const override = getWordOverride(originalText);
      if (override) {
        setCustomText(override.customText || originalText);
        setHasExistingAudio(!!override.customAudioUrl);
      } else {
        setCustomText(originalText);
        setHasExistingAudio(false);
      }
      setSelectedFile(null);
      setSavedSuccess(false);
      setIsRecording(false);
    }
  }, [isOpen, originalText]);

  if (!isOpen || !originalText) return null;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const recordedFile = new File([blob], 'recorded_word.webm', { type: 'audio/webm' });
        setSelectedFile(recordedFile);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      alert("Не удалось получить доступ к микрофону. Проверьте разрешения браузера.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const result = await setWordOverride(
        originalText,
        customText !== originalText ? customText : undefined,
        selectedFile || undefined
      );

      if (!result.ok) {
        alert(result.error || "Не удалось сохранить файл.");
        return;
      }

      setSavedSuccess(true);
      setTimeout(() => {
        if (onSaved) onSaved();
        onClose();
      }, 600);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = async () => {
    setShowConfirmReset(true);
  };

  const confirmReset = async () => {
    setShowConfirmReset(false);
    await removeWordOverride(originalText);
    setCustomText(originalText);
    setSelectedFile(null);
    setHasExistingAudio(false);
    if (onSaved) onSaved();
    onClose();
  };

  const handleTestAudio = () => {
    stopRecordedAudio();
    setAudioError('');
    setIsPlaying(true);

    if (selectedFile) {
      const tempUrl = URL.createObjectURL(selectedFile);
      const audio = new Audio(tempUrl);
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        setIsPlaying(false);
        setAudioError('Записанное аудио недоступно.');
      };
      audio.play().catch(() => {
        setIsPlaying(false);
        setAudioError('Записанное аудио недоступно.');
      });
    } else {
      playRecordedAudio(
        originalText,
        0.82,
        () => setIsPlaying(false),
        () => {
          setIsPlaying(false);
          setAudioError('Записанное аудио недоступно.');
        }
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2320]/60 backdrop-blur-xs">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-word-modal-title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl w-full max-w-lg p-6 shadow-2xl relative space-y-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#D9CBB0]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#7A1E2B]/10 text-[#7A1E2B] flex items-center justify-center">
              <Pencil className="w-4 h-4" />
            </div>
            <div>
              <h3 id="edit-word-modal-title" className="font-mono font-bold text-[#57121C] text-base">
                Редактирование слова / произношения
              </h3>
              <div className="text-xs text-[#8A7A68]">Только для Администратора</div>
            </div>
          </div>
          {audioError && <p className="text-xs text-red-700" role="alert">{audioError}</p>}

          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="p-1.5 rounded-full hover:bg-[#7A1E2B]/10 text-[#7A1E2B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Original Word Display */}
          <div className="p-3 bg-[#F6EFE4] border border-[#D9CBB0] rounded-xl flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono font-bold text-[#8A7A68] uppercase">Оригинальная фраза</div>
              <div className="font-mono font-bold text-[#57121C] text-sm">{originalText}</div>
            </div>
            <button
              type="button"
              onClick={handleTestAudio}
              className="px-3 py-1.5 rounded-lg bg-[#7A1E2B] text-white hover:bg-[#57121C] transition-colors text-xs font-mono font-medium flex items-center gap-1.5 cursor-pointer"
            >
              <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce text-[#B98A2B]' : ''}`} />
              <span>Прослушать</span>
            </button>
          </div>

          {/* Edit Display Word */}
          <div className="space-y-1">
            <label className="text-xs font-mono font-semibold text-[#57121C] flex items-center justify-between">
              <span>Измененный текст / произносимое слово</span>
              <span className="text-[10px] text-[#8A7A68] font-normal">(венгерский)</span>
            </label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder={originalText}
              className="w-full p-2.5 rounded-xl border border-[#D9CBB0] bg-white font-mono text-sm text-[#2A2320] outline-none focus:border-[#7A1E2B]"
            />
          </div>

          {/* Audio recording & file upload */}
          <div className="p-4 rounded-xl border border-[#D9CBB0] bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono font-bold text-[#57121C]">
                Озвучка для этого слова
              </div>
              {hasExistingAudio && (
                <span className="text-[11px] font-mono text-[#2C5F58] bg-[#2C5F58]/10 px-2 py-0.5 rounded border border-[#2C5F58]/20">
                  ✓ MP3/Запись прикреплена
                </span>
              )}
            </div>

            {/* Mic Record option */}
            {!isRecording ? (
              <button
                type="button"
                onClick={startRecording}
                className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Mic className="w-4 h-4" />
                <span>Записать с микрофона</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={stopRecording}
                className="w-full py-2 rounded-xl bg-red-800 text-white font-mono font-semibold text-xs flex items-center justify-center gap-2 animate-pulse cursor-pointer"
              >
                <Square className="w-4 h-4 fill-current" />
                <span>Остановить запись...</span>
              </button>
            )}

            <div className="text-[11px] text-[#8A7A68] text-center font-mono">или</div>

            {/* File upload option */}
            <div className="flex items-center gap-2">
              <label className="flex-1 px-3 py-2 rounded-xl border border-dashed border-[#7A1E2B]/40 bg-[#7A1E2B]/5 hover:bg-[#7A1E2B]/10 text-[#7A1E2B] font-mono text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors">
                <Upload className="w-4 h-4" />
                <span className="truncate">
                  {selectedFile ? selectedFile.name : 'Выбрать MP3 файл с диска...'}
                </span>
                <input
                  type="file"
                  accept="audio/mp3,audio/wav,audio/m4a,audio/webm"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFile(e.target.files[0]);
                    }
                  }}
                />
              </label>

              {(selectedFile || hasExistingAudio) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  title="Удалить прикрепленный файл"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {savedSuccess && (
            <div className="p-2.5 rounded-xl bg-[#2C5F58]/10 border border-[#2C5F58]/30 text-[#2C5F58] font-mono text-xs font-bold flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>Изменения сохранены!</span>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#D9CBB0]">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 rounded-xl text-xs font-mono text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
            >
              Сбросить к оригиналу
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-[#D9CBB0] text-[#57121C] font-semibold text-xs hover:bg-[#F6EFE4] transition-colors cursor-pointer"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-5 py-2 rounded-xl bg-[#7A1E2B] text-white font-semibold text-xs hover:bg-[#57121C] disabled:bg-[#D9CBB0] disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Сохранение...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Сохранить</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </motion.div>

      <ConfirmDialog
        isOpen={showConfirmReset}
        title="Сбросить к оригиналу"
        message={`Вы уверены, что хотите удалить пользовательские изменения для слова "${originalText}"?`}
        confirmLabel="Удалить"
        cancelLabel="Отмена"
        onConfirm={confirmReset}
        onCancel={() => setShowConfirmReset(false)}
      />
    </div>
  );
};
