import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Database,
  Bell,
  KeyRound,
  LogOut,
  CheckCircle2,
} from 'lucide-react';
import { logoutAdmin } from '../../utils/adminStore';
import { PageHeader, PrimaryButton, SecondaryButton } from '../../components/admin/AdminUi';

function Toggle({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div>
        <div className="text-sm font-medium text-gray-900">{label}</div>
        <div className="mt-0.5 text-xs text-gray-500">{description}</div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors shrink-0 cursor-pointer ${
          checked ? 'bg-indigo-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : ''
          }`}
        />
      </button>
    </div>
  );
}

export default function AdminSettings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleLogout = async () => {
    await logoutAdmin();
    navigate('/');
  };

  return (
    <div>
      <PageHeader title="Настройки" subtitle="Параметры административной панели" />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* General settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
              <Bell className="w-4 h-4 text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900">Уведомления и обслуживание</h2>
            </div>
            <div className="px-5 divide-y divide-gray-100">
              <Toggle
                checked={notifications}
                onChange={setNotifications}
                label="Уведомления о новых регистрациях"
                description="Присылать на e-mail администратора сообщение о каждой новой учётной записи."
              />
              <Toggle
                checked={autoBackup}
                onChange={setAutoBackup}
                label="Автоматическое резервное копирование"
                description="Ежедневный бэкап базы данных пользователей и уроков в защищённое хранилище."
              />
            </div>
            <div className="px-5 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {saved ? 'Изменения сохранены' : 'Настройки применяются мгновенно'}
              </span>
              {saved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </div>
          </div>

          {/* Security info */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-200">
              <ShieldCheck className="w-4 h-4 text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900">Безопасность</h2>
            </div>
            <div className="px-5 py-4 space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <p className="text-xs text-emerald-900/80 leading-relaxed">
                  Сессия администратора защищена паролем, заданным на сервере через переменные
                  окружения <code className="font-mono">ADMIN_PASSWORD</code> /{' '}
                  <code className="font-mono">ADMIN_PASSWORD_HASH</code>. Вход подтверждается
                  сервером по безопасному cookie.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50 border border-amber-100">
                <KeyRound className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-900/80 leading-relaxed">
                  Смена пароля администратора выполняется на сервере. Управление пользователями и
                  уроками в этой панели пока работает на демо-данных в памяти браузера.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side column */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-gray-900">Хранилище</h2>
                <p className="text-xs text-gray-500">Демо-режим</p>
              </div>
            </div>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Пользователей в памяти</span>
                <span className="font-semibold text-gray-900">10</span>
              </div>
              <div className="flex justify-between">
                <span>Уроков в памяти</span>
                <span className="font-semibold text-gray-900">28</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <h2 className="text-sm font-bold text-gray-900 mb-3">Сессия администратора</h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Выход из режима администратора завершит сессию на сервере. Для повторного входа
              потребуется пароль.
            </p>
            <PrimaryButton onClick={handleLogout} className="w-full bg-red-600! hover:bg-red-700!">
              <LogOut className="w-4 h-4" />
              Выйти из режима администратора
            </PrimaryButton>
            <div className="mt-3">
              <SecondaryButton onClick={() => navigate('/')} className="w-full">
                На главную страницу
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
