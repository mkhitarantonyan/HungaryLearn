import React, { useState, useEffect } from 'react';
import { X, User, Lock, Mail, CreditCard, CheckCircle2, LogOut, ArrowRight, Loader2, Clock3, Check } from 'lucide-react';
import {
  UserProfile,
  getCurrentUser,
  subscribeUserState,
  loginUserServer,
  registerUserServer,
  logoutUserServer,
  createStripeCheckoutSession
} from '../utils/userStore';

interface UserAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register' | 'profile';
}

export const UserAuthModal: React.FC<UserAuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const [user, setUser] = useState<UserProfile | null>(getCurrentUser());
  const [mode, setMode] = useState<'login' | 'register' | 'profile'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeUserState((u) => {
      setUser(u);
      if (u) {
        setMode('profile');
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      setMode('profile');
    } else {
      setMode(initialMode === 'profile' ? 'login' : initialMode);
    }
  }, [isOpen, initialMode, user]);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!email.trim() || !password) {
      setErrorMsg('Пожалуйста, введите e-mail и пароль.');
      return;
    }

    setIsLoading(true);
    const result = await loginUserServer(email, password);
    setIsLoading(false);

    if (result.success) {
      setSuccessMsg('Успешный вход в аккаунт!');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setSuccessMsg('');
      }, 2000);
    } else {
      setErrorMsg(result.message);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!email.trim() || !password) {
      setErrorMsg('Пожалуйста, укажите e-mail и пароль.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Пароль должен быть длинее 6 символов.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Пароли не совпадают.');
      return;
    }

    setIsLoading(true);
    const result = await registerUserServer(email, password);
    setIsLoading(false);

    if (result.success) {
      setSuccessMsg('Аккаунт успешно создан! Доступ открыт.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setSuccessMsg('');
      }, 2000);
    } else if (result.alreadyExists) {
      // Email already registered — switch to login tab with a helpful message
      setErrorMsg(result.message);
      setMode('login');
      setPassword('');
      setConfirmPassword('');
    } else {
      setErrorMsg(result.message);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    await logoutUserServer();
    setIsLoading(false);
    setMode('login');
  };

  const handlePaymentCheckout = async () => {
    setIsUpgrading(true);
    setErrorMsg('');
    setSuccessMsg('');
    
    // Call server to create Stripe Checkout Session
    const result = await createStripeCheckoutSession();
    setIsUpgrading(false);

    if (result.success && result.url) {
      // Redirect browser directly to official Stripe Checkout page
      window.location.href = result.url;
    } else {
      setErrorMsg(
        result.message || 'Платёжная система Stripe не настроена в .env. Для включения приёма платежей укажите STRIPE_SECRET_KEY.'
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF6EE] text-[#2C2421] w-full max-w-md rounded-2xl shadow-2xl border border-[#D9CBB0] overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-[#7A1E2B] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">
                {user ? 'Личный кабинет ученика' : mode === 'login' ? 'Вход в аккаунт' : 'Регистрация ученика'}
              </h3>
              <p className="text-xs text-[#EAD0C3]">
                {user ? user.email : 'Сохранение прогресса и доступ к урокам'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-800 text-xs rounded-lg flex items-center gap-2">
              <span className="font-bold">⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs rounded-lg flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* LOGGED IN USER PROFILE MODE */}
          {user ? (
            <div className="space-y-5">
              <div className="bg-white p-4 rounded-xl border border-[#E5D7C3] shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs text-gray-500">Учётная запись</span>
                  <span className="text-sm font-semibold text-[#7A1E2B] font-mono">{user.email}</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-gray-500">Статус подписки</span>
                  {user.isPrivileged ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 border border-indigo-300">
                      <CheckCircle2 className="w-3 h-3" /> Полный доступ (привилегия)
                    </span>
                  ) : user.subscriptionStatus === 'active' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-300">
                      <Check className="w-3 h-3" /> Активная премиум
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-300">
                      <Clock3 className="w-3 h-3 text-amber-600" /> Пробный период
                    </span>
                  )}
                </div>

                {user.subscriptionEnd && (
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span>Действует до</span>
                    <span>{new Date(user.subscriptionEnd).toLocaleDateString('ru-RU')}</span>
                  </div>
                )}
              </div>

              {/* SUBSCRIPTION / PAYMENT CARD */}
              <div className="bg-gradient-to-br from-[#7A1E2B] to-[#57121C] text-white p-5 rounded-xl shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#EAD0C3]" />
                  <h4 className="font-semibold text-sm">Полный доступ ко всем урокам</h4>
                </div>
                <p className="text-xs text-[#EAD0C3] leading-relaxed">
                  Подписка включает неограниченный доступ ко всем интерактивным урокам венгерского языка, озвучке слов и аудио-тренажерам.
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className="text-xs font-medium text-white/90">Стоимость: $9.99 / месяц</span>
                  {user.isPrivileged ? (
                    <span className="text-xs font-semibold text-indigo-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Доступ предоставлен администратором
                    </span>
                  ) : user.subscriptionStatus === 'active' ? (
                    <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Оплачено
                    </span>
                  ) : (
                    <button
                      onClick={handlePaymentCheckout}
                      disabled={isUpgrading}
                      className="px-3.5 py-1.5 bg-[#B98A2B] hover:bg-[#a37923] text-white rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs disabled:opacity-50"
                    >
                      {isUpgrading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Обработка...</span>
                        </>
                      ) : (
                        <>
                          <span>Оплатить подписку</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* LOGOUT BUTTON */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4 text-gray-500" />
                  <span>Выйти из аккаунта</span>
                </button>
              </div>
            </div>
          ) : (
            /* AUTH FORM MODE (LOGIN / REGISTER) */
            <div>
              {/* Tab Selector */}
              <div className="flex rounded-xl bg-[#EFE6D5] p-1 mb-5">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrorMsg('');
                  }}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    mode === 'login'
                      ? 'bg-white text-[#7A1E2B] shadow-xs font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Вход
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('register');
                    setErrorMsg('');
                  }}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    mode === 'register'
                      ? 'bg-white text-[#7A1E2B] shadow-xs font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Регистрация
                </button>
              </div>

              {mode === 'login' ? (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Электронная почта (e-mail)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D9CBB0] rounded-xl text-xs focus:outline-none focus:border-[#7A1E2B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Пароль
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D9CBB0] rounded-xl text-xs focus:outline-none focus:border-[#7A1E2B]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 bg-[#7A1E2B] hover:bg-[#57121C] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 mt-2"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <span>Войти в систему</span>
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Ваш e-mail
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D9CBB0] rounded-xl text-xs focus:outline-none focus:border-[#7A1E2B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Придумайте пароль (минимум 6 символов)
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D9CBB0] rounded-xl text-xs focus:outline-none focus:border-[#7A1E2B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Повторите пароль
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D9CBB0] rounded-xl text-xs focus:outline-none focus:border-[#7A1E2B]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 bg-[#7A1E2B] hover:bg-[#57121C] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 mt-2"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <span>Зарегистрироваться и начать учебу</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
