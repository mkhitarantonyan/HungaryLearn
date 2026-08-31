import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  isOpen,
  title = 'Подтверждение действия',
  message,
  confirmLabel = 'Удалить',
  cancelLabel = 'Отмена',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-dialog-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#EDF4FB] border-2 border-[#D6DEE6] rounded-2xl p-6 max-w-sm w-full shadow-2xl text-[#252B2F]"
        >
          <div className="flex items-center justify-between mb-4 border-b border-[#E6DBC9] pb-3">
            <div className="flex items-center gap-2 text-[#116EEE]">
              <AlertTriangle className="w-5 h-5 text-[#116EEE]" />
              <h3 id="confirm-dialog-title" className="font-serif font-bold text-base">{title}</h3>
            </div>
            <button
              onClick={onCancel}
              aria-label="Закрыть"
              className="text-[#666E7E] hover:text-[#252B2F] transition-colors p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#5C5046] mb-6 leading-relaxed">{message}</p>

          <div className="flex justify-end gap-3">
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-xl bg-[#E6DBC9] hover:bg-[#D6DEE6] text-[#252B2F] text-xs font-semibold transition-colors cursor-pointer"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-xl bg-[#116EEE] hover:bg-[#0D5ED0] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              {confirmLabel}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
