import React, { useState, useEffect } from 'react';
import { Layers, HelpCircle, BookOpen, Volume2, ShieldCheck, ArrowLeft, User, Languages } from 'lucide-react';
import { isAdminLoggedIn, subscribeAdminState } from '../utils/adminStore';
import { getCurrentUser, subscribeUserState, UserProfile } from '../utils/userStore';

interface HeaderProps {
  lessonNumber: number;
  lessonLevel: string;
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
  onOpenTrainer: () => void;
  onOpenTranslations: () => void;
  onOpenQuiz: () => void;
  onOpenDrawer: () => void;
  onOpenAdmin: () => void;
  onOpenUserModal?: () => void;
  onBackToLessons: () => void;
  isNarrating: boolean;
  dueReviewCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  lessonNumber,
  lessonLevel,
  currentSlide,
  totalSlides,
  onSelectSlide,
  onOpenTrainer,
  onOpenTranslations,
  onOpenQuiz,
  onOpenDrawer,
  onOpenAdmin,
  onOpenUserModal,
  onBackToLessons,
  isNarrating,
  dueReviewCount = 0
}) => {
  const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn());
  const [user, setUser] = useState<UserProfile | null>(getCurrentUser());

  useEffect(() => {
    const unsubscribeAdmin = subscribeAdminState((status) => {
      setIsAdmin(status);
    });
    const unsubscribeUser = subscribeUserState((u) => {
      setUser(u);
    });
    return () => {
      unsubscribeAdmin();
      unsubscribeUser();
    };
  }, []);

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 py-3.5 border-b border-[#D9CBB0] bg-[#FBF7EF] gap-3">
      {/* Brand & Back Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBackToLessons}
          aria-label="Вернуться ко всем урокам"
          className="px-2.5 py-1 rounded-lg border border-[#D9CBB0] bg-white text-[#7A1E2B] hover:bg-[#7A1E2B] hover:text-white transition-all cursor-pointer font-mono text-xs font-bold flex items-center gap-1.5 shadow-xs"
          title="Вернуться на главную страницу со всеми уроками"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Все уроки</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#7A1E2B]"></div>
          <div className="font-mono text-xs md:text-sm font-bold tracking-tight text-[#57121C]">
            MAGYAR <span className="text-[#B98A2B]">·</span> ВЕНГЕРСКИЙ <span className="text-[#B98A2B]">·</span> УРОК {lessonNumber} · {lessonLevel}
          </div>
        </div>
      </div>

      {/* Slide Progress Dots */}
      <div className="flex items-center gap-1.5 max-w-full overflow-x-auto py-1">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={idx}
              onClick={() => onSelectSlide(idx)}
              aria-label={`Перейти к слайду ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'w-6 bg-[#7A1E2B]' 
                  : 'w-2 bg-[#D9CBB0] hover:bg-[#7A1E2B]/50'
              }`}
              title={`Перейти к слайду ${idx + 1}`}
            />
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="flex items-center gap-2 flex-wrap justify-end">
        {dueReviewCount > 0 && (
          <div
            className="px-2.5 py-1 rounded-lg bg-[#B98A2B]/20 border border-[#B98A2B]/40 text-[#57121C] text-xs font-mono font-semibold"
            title="Карточки готовы к повторению"
          >
            {dueReviewCount} к повторению
          </div>
        )}

        {/* Student User Profile / Login Button */}
        {onOpenUserModal && (
          <button
            onClick={onOpenUserModal}
            aria-label={user ? "Личный кабинет" : "Вход или регистрация"}
            className="px-2.5 py-1 rounded-lg border border-[#7A1E2B]/30 bg-white hover:bg-[#7A1E2B]/5 text-[#7A1E2B] transition-colors cursor-pointer text-xs font-mono font-semibold flex items-center gap-1.5 shadow-xs"
            title={user ? `Личный кабинет: ${user.email}` : "Войти или зарегистрироваться"}
          >
            <User className="w-3.5 h-3.5 text-[#7A1E2B]" />
            <span>{user ? user.email.split('@')[0] : 'Вход'}</span>
          </button>
        )}

        {/* Admin Login Button - Hidden from regular users, visible only when logged in as admin */}
        {isAdmin && (
          <button
            onClick={onOpenAdmin}
            aria-label="Администратор вошел в систему"
            className="px-2.5 py-1 rounded-lg border text-xs font-mono font-medium flex items-center gap-1 transition-colors cursor-pointer bg-[#2C5F58] text-white border-[#2C5F58]"
            title="Администратор вошел в систему"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#B98A2B]" />
            <span>Админ: Вход выполнен</span>
          </button>
        )}

        {isNarrating && (
          <div className="px-2.5 py-1 rounded-lg bg-[#7A1E2B] text-white text-xs font-mono font-semibold flex items-center gap-1.5 animate-pulse">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Озвучка</span>
          </div>
        )}

        <button
          onClick={onOpenDrawer}
          aria-label="Оглавление слайдов"
          className="p-1.5 rounded-lg border border-[#D9CBB0] text-[#57121C] hover:bg-[#7A1E2B]/10 transition-colors cursor-pointer text-xs font-mono font-medium flex items-center gap-1"
          title="Список всех слайдов"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Слайды</span>
        </button>

        <button
          onClick={onOpenTrainer}
          aria-label="Тренажер слов"
          className="px-2.5 py-1 rounded-lg bg-[#B98A2B]/15 border border-[#B98A2B]/30 text-[#57121C] hover:bg-[#B98A2B]/30 transition-colors cursor-pointer text-xs font-mono font-semibold flex items-center gap-1"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#B98A2B]" />
          <span>Слова</span>
        </button>

        <button
          onClick={onOpenTranslations}
          aria-label="Тренажер перевода"
          className="px-2.5 py-1 rounded-lg bg-[#57121C]/10 border border-[#57121C]/20 text-[#57121C] hover:bg-[#57121C]/15 transition-colors cursor-pointer text-xs font-mono font-semibold flex items-center gap-1"
        >
          <Languages className="w-3.5 h-3.5 text-[#57121C]" />
          <span>Перевод</span>
        </button>

        <button
          onClick={onOpenQuiz}
          aria-label="Тест по уроку"
          className="px-2.5 py-1 rounded-lg bg-[#2C5F58] text-white hover:bg-[#2C5F58]/90 transition-colors cursor-pointer text-xs font-mono font-semibold flex items-center gap-1"
        >
          <HelpCircle className="w-3.5 h-3.5 text-white" />
          <span>Тест</span>
        </button>
      </div>
    </header>
  );
};
