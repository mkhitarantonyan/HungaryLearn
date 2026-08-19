import React, { useState, useEffect } from 'react';
import { ListOrdered, ShieldCheck, ArrowLeft, User } from 'lucide-react';
import { isAdminLoggedIn, subscribeAdminState } from '../utils/adminStore';
import { getCurrentUser, subscribeUserState, UserProfile } from '../utils/userStore';
import { LessonProgress } from './LessonProgress';

interface HeaderProps {
  lessonNumber: number;
  lessonLevel: string;
  lessonTitle: string;
  currentSlide: number;
  totalSlides: number;
  onOpenDrawer: () => void;
  onOpenAdmin: () => void;
  onOpenUserModal?: () => void;
  onBackToLessons: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lessonNumber,
  lessonLevel,
  lessonTitle,
  currentSlide,
  totalSlides,
  onOpenDrawer,
  onOpenAdmin,
  onOpenUserModal,
  onBackToLessons,
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

  const conceptTitle = lessonTitle.replace(/^Урок\s+\d+\s*·\s*/i, '').trim() || lessonTitle;

  return (
    <header className="border-b border-[#D9CBB0] bg-[#FBF7EF] px-4 md:px-8 py-3">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToLessons}
            aria-label="Вернуться ко всем урокам"
            className="shrink-0 h-9 w-9 rounded-lg border border-[#D9CBB0] bg-white text-[#7A1E2B] hover:bg-[#7A1E2B] hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            title="Все уроки"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7A68]">
              {lessonLevel} · Урок {lessonNumber}
            </div>
            <h1 className="text-sm md:text-base font-bold text-[#57121C] truncate leading-snug">
              {conceptTitle}
            </h1>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {isAdmin && (
              <button
                onClick={onOpenAdmin}
                aria-label="Администратор"
                className="h-9 w-9 rounded-lg bg-[#2C5F58] text-white cursor-pointer flex items-center justify-center"
                title="Администратор"
              >
                <ShieldCheck className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onOpenDrawer}
              aria-label="Содержание урока"
              className="h-9 px-2.5 rounded-lg border border-[#D9CBB0] text-[#57121C] hover:bg-[#F6EFE4] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title="Этапы урока"
            >
              <ListOrdered className="w-4 h-4" />
              <span className="hidden md:inline">Содержание</span>
            </button>

            {onOpenUserModal && (
              <button
                onClick={onOpenUserModal}
                aria-label={user ? 'Личный кабинет' : 'Вход или регистрация'}
                className="h-9 w-9 rounded-lg border border-[#D9CBB0] text-[#7A1E2B] hover:bg-[#F6EFE4] transition-colors cursor-pointer flex items-center justify-center"
                title={user ? `Личный кабинет: ${user.email}` : 'Войти или зарегистрироваться'}
              >
                <User className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-2.5">
          <LessonProgress current={currentSlide} total={totalSlides} />
        </div>
      </div>
    </header>
  );
};
