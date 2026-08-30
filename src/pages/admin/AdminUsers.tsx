import { useMemo, useState } from 'react';
import { BadgeCheck, KeyRound, Loader2, Mail, RefreshCw, Search } from 'lucide-react';
import { useAdminData } from '../../admin/AdminDataContext';
import type { AdminUser } from '../../admin/types';
import { PageHeader, Pill, SecondaryButton } from '../../components/admin/AdminUi';

function subscriptionLabel(user: AdminUser): string {
  if (user.isPrivileged) return 'Полный доступ';
  if (user.subscriptionStatus === 'active') return 'Премиум';
  if (user.subscriptionStatus === 'cancelled') return 'Отменена';
  if (user.subscriptionStatus === 'past_due') return 'Просрочено';
  if (user.subscriptionStatus === 'paused') return 'Приостановлена';
  if (user.subscriptionStatus === 'expired') return 'Закончилась';
  return 'Без подписки';
}

function accessDate(value: string | undefined): string {
  if (!value) return '—';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '—' : date.toLocaleDateString('ru-RU');
}

export default function AdminUsers() {
  const { users, loading, error, pendingUserIds, refresh, setUserPrivilege } = useAdminData();
  const [search, setSearch] = useState('');
  const [actionError, setActionError] = useState('');
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return query ? users.filter((user) => user.email.toLowerCase().includes(query)) : users;
  }, [search, users]);

  const togglePrivilege = async (user: AdminUser) => {
    setActionError('');
    try {
      await setUserPrivilege(user.id, !user.isPrivileged);
    } catch (cause) {
      setActionError(cause instanceof Error ? cause.message : 'Не удалось сохранить изменение.');
    }
  };

  return (
    <div>
      <PageHeader
        title="Пользователи"
        subtitle={`${users.length} учётных записей Firebase`}
        action={
          <SecondaryButton onClick={() => void refresh()} disabled={loading}>
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Обновить
          </SecondaryButton>
        }
      />

      <div className="mb-5 rounded-xl border border-indigo-100 bg-indigo-50 p-3.5 text-xs leading-relaxed text-indigo-900/80">
        Подписками управляет Lemon Squeezy. Здесь можно выдать или отозвать привилегию полного доступа; изменение подтверждается Cloud Function и сохраняется в Firestore.
      </div>

      {(error || actionError) && (
        <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {actionError || error}
        </div>
      )}

      <div className="relative mb-5 max-w-md">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 w-4 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Поиск по e-mail..."
          className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center gap-2 p-10 text-sm text-gray-500">
            <Loader2 className="w-4 animate-spin" /> Загрузка пользователей…
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-sm text-gray-500">
            {search ? 'Пользователи по этому запросу не найдены.' : 'В базе пока нет пользователей.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left">
              <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                <tr><th className="px-5 py-3">E-mail</th><th className="px-5 py-3">Регистрация</th><th className="px-5 py-3">Доступ</th><th className="px-5 py-3">До</th><th className="px-5 py-3">Lemon Squeezy</th><th className="px-5 py-3 text-right">Привилегия</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((user) => {
                  const pending = pendingUserIds.has(user.id);
                  return (
                    <tr key={user.id} className="hover:bg-gray-50/80">
                      <td className="px-5 py-3.5 text-sm text-gray-700">
                        <span className="inline-flex items-center gap-1.5"><Mail className="w-3.5 text-gray-400" />{user.email}{user.isPrivileged && <BadgeCheck className="w-4 text-indigo-500" />}</span>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{new Date(user.createdAt).toLocaleDateString('ru-RU')}</td>
                      <td className="px-5 py-3.5"><Pill tone={user.isPrivileged ? 'green' : user.subscriptionStatus === 'past_due' ? 'red' : 'gray'}>{subscriptionLabel(user)}</Pill></td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{accessDate(user.accessUntil)}</td>
                      <td className="px-5 py-3.5 text-xs text-gray-500">
                        {user.provider === 'lemonsqueezy' ? (
                          <div className="space-y-0.5 font-mono">
                            <div title={user.lemonSubscriptionId || ''}>sub: {user.lemonSubscriptionId || '—'}</div>
                            <div title={user.lemonCustomerId || ''}>customer: {user.lemonCustomerId || '—'}</div>
                            <div>variant: {user.lemonVariantId || '—'}{user.testMode ? ' · TEST' : ''}</div>
                          </div>
                        ) : '—'}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <button
                          type="button"
                          onClick={() => void togglePrivilege(user)}
                          disabled={pending}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {pending ? <Loader2 className="w-3.5 animate-spin" /> : <KeyRound className="w-3.5" />}
                          {user.isPrivileged ? 'Отозвать' : 'Выдать'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
