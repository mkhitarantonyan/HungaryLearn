import React, { useState, useEffect } from 'react';
import { ListOrdered, ShieldCheck, ArrowLeft, User } from 'lucide-react';
import { isAdminLoggedIn, subscribeAdminState } from '../utils/adminStore';
import { getCurrentUser, subscribeUserState, UserProfile } from '../utils/userStore';
import { LessonProgress } from './LessonProgress';
import { LanguageSelector } from './LanguageSelector';
import { useI18n } from '../i18n';

interface HeaderProps {
  lessonNumber: number;
  lessonLevel: string;
  lessonTitle: string;
  currentSlide: number;
  totalSlides: number;
  lessonProgress: { percentage: number; completedUnitCount: number; totalUnitCount: number };
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
  lessonProgress,
  onOpenDrawer,
  onOpenAdmin,
  onOpenUserModal,
  onBackToLessons,
}) => {
  const { t } = useI18n();
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

  const conceptTitle = lessonTitle.replace(/^(?:Урок|Lesson|Lección)\s+\d+\s*·\s*/iu, '').trim() || lessonTitle;

  return (
    <header className="border-b border-[#D6DEE6] bg-white px-4 md:px-8 py-3.5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToLessons}
            aria-label={t('header.backToLessons')}
            className="shrink-0 h-10 w-10 rounded-[10px] border border-[#D6DEE6] bg-white text-[#252B2F] hover:border-[#116EEE]/40 hover:bg-[#EDF4FB] hover:text-[#116EEE] transition-colors cursor-pointer flex items-center justify-center"
            title={t('header.allLessons')}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#666E7E]">
              {lessonLevel} · {t('common.lesson')} {lessonNumber}
            </div>
            <h1 className="text-sm md:text-base font-bold text-[#252B2F] truncate leading-snug">
              {conceptTitle}
            </h1>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <LanguageSelector compact />
            {isAdmin && (
              <button
                onClick={onOpenAdmin}
                aria-label={t('header.admin')}
                className="h-10 w-10 rounded-[10px] bg-[#3B1E90] text-white cursor-pointer flex items-center justify-center shadow-sm"
                title={t('header.administrator')}
              >
                <ShieldCheck className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onOpenDrawer}
              aria-label={t('header.contents')}
              className="h-10 px-3 rounded-[10px] border border-[#D6DEE6] bg-white text-[#252B2F] hover:border-[#116EEE]/35 hover:bg-[#EDF4FB] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title={t('header.lessonStages')}
            >
              <ListOrdered className="w-4 h-4" />
              <span className="hidden md:inline">{t('header.contents')}</span>
            </button>

            {onOpenUserModal && (
              <button
                onClick={onOpenUserModal}
                aria-label={t('header.profile')}
                className="h-10 w-10 rounded-[10px] border border-[#D6DEE6] bg-white text-[#252B2F] hover:border-[#116EEE]/35 hover:bg-[#EDF4FB] hover:text-[#116EEE] transition-colors cursor-pointer flex items-center justify-center"
                title={user ? t('header.accountTitle', { email: user.email }) : t('header.signInTitle')}
              >
                <User className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-2.5">
          <LessonProgress
            current={currentSlide}
            total={totalSlides}
            percentage={lessonProgress.percentage}
            completedUnits={lessonProgress.completedUnitCount}
            totalUnits={lessonProgress.totalUnitCount}
          />
        </div>
      </div>
    </header>
  );
};
