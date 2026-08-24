import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Database, KeyRound, LogOut, ShieldCheck } from 'lucide-react';
import { useAdminData } from '../../admin/AdminDataContext';
import { PageHeader, PrimaryButton, SecondaryButton } from '../../components/admin/AdminUi';
import { logoutAdmin } from '../../utils/adminStore';

export default function AdminSettings() {
  const navigate = useNavigate();
  const { users, lessons } = useAdminData();
  const handleLogout = async () => {
    await logoutAdmin();
    navigate('/');
  };

  return (
    <div>
      <PageHeader title="Настройки" subtitle="Состояние административной панели" />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4"><ShieldCheck className="w-4 text-gray-400" /><h2 className="text-sm font-bold">Безопасность</h2></div>
            <div className="space-y-3 px-5 py-4">
              <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3.5"><CheckCircle2 className="mt-0.5 w-4 shrink-0 text-emerald-600" /><p className="text-xs leading-relaxed text-emerald-900/80">Все admin reads и mutations проверяют серверную admin-сессию. Изменения пользователей подтверждаются PostgreSQL до обновления интерфейса.</p></div>
              <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 p-3.5"><KeyRound className="mt-0.5 w-4 shrink-0 text-amber-600" /><p className="text-xs leading-relaxed text-amber-900/80">Подписки синхронизируются через Stripe webhook. Панель не выдаёт себя за интерфейс управления Stripe и не изменяет платёжный статус напрямую.</p></div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><Database className="w-4" /></span><div><h2 className="text-sm font-bold">Хранилище</h2><p className="text-xs text-gray-500">Server source of truth</p></div></div>
            <div className="space-y-2 text-xs text-gray-600"><div className="flex justify-between"><span>Пользователей PostgreSQL</span><strong>{users.length}</strong></div><div className="flex justify-between"><span>Уроков в сборке</span><strong>{lessons.length}</strong></div></div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><h2 className="mb-3 text-sm font-bold">Сессия администратора</h2><p className="mb-4 text-xs leading-relaxed text-gray-500">Выход завершит серверную сессию администратора.</p><PrimaryButton onClick={handleLogout} className="w-full bg-red-600! hover:bg-red-700!"><LogOut className="w-4" />Выйти</PrimaryButton><div className="mt-3"><SecondaryButton onClick={() => navigate('/')} className="w-full">На главную</SecondaryButton></div></div>
        </div>
      </div>
    </div>
  );
}
