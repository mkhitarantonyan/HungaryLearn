import { useEffect, useMemo, useState } from 'react';
import { Building2, Loader2, Plus, Search, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import type { AdminOrganizationSummary } from '../../admin/types';
import { createAdminOrganization, getAdminOrganizations } from '../../api/adminApi';
import { Field, Modal, PageHeader, Pill, PrimaryButton, SecondaryButton, TextArea, TextInput } from '../../components/admin/AdminUi';

function dateLabel(value: string | null): string {
  return value ? new Date(value).toLocaleDateString('ru-RU') : '—';
}

export default function AdminOrganizations() {
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState<AdminOrganizationSummary[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [creating, setCreating] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', contactName: '', contactEmail: '', contactPhone: '', notes: '' });

  const load = async () => {
    setLoading(true);
    setError('');
    try { setOrganizations(await getAdminOrganizations()); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Не удалось загрузить организации.'); }
    finally { setLoading(false); }
  };

  useEffect(() => { void load(); }, []);

  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase('ru-RU');
    if (!query) return organizations;
    return organizations.filter(item => [item.name, item.contactName, item.contactEmail].some(value => value?.toLocaleLowerCase('ru-RU').includes(query)));
  }, [organizations, search]);

  const create = async () => {
    setCreating(true);
    setError('');
    try {
      const saved = await createAdminOrganization(form);
      setOpen(false);
      navigate(`/admin/organizations/${saved.id}`);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Не удалось создать организацию.');
    } finally { setCreating(false); }
  };

  return (
    <div>
      <PageHeader
        title="Организации"
        subtitle="Лицензии, места, ключи доступа и ученики организаций"
        action={<PrimaryButton onClick={() => setOpen(true)}><Plus className="h-4 w-4" />Новая организация</PrimaryButton>}
      />

      {error && <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>}

      <div className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="relative max-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <TextInput value={search} onChange={event => setSearch(event.target.value)} placeholder="Поиск по названию или контакту" className="pl-9" />
        </div>
      </div>

      {loading ? (
        <div className="flex min-h-52 items-center justify-center gap-2 text-sm text-gray-500"><Loader2 className="h-5 w-5 animate-spin" />Загрузка организаций…</div>
      ) : filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <Building2 className="mx-auto h-10 w-10 text-gray-300" />
          <p className="mt-3 text-sm font-semibold text-gray-800">Организации не найдены</p>
          <p className="mt-1 text-xs text-gray-500">Создайте первую организацию или измените поисковый запрос.</p>
        </div>
      ) : (
        <div className="grid gap-4 xl:grid-cols-2">
          {filtered.map(item => (
            <Link key={item.id} to={`/admin/organizations/${item.id}`} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="truncate text-base font-bold text-gray-900">{item.name}</h2>
                  <p className="mt-1 truncate text-xs text-gray-500">{item.contactName || item.contactEmail || 'Контакт не указан'}</p>
                </div>
                <Pill tone={item.status === 'active' ? 'green' : 'gray'}>{item.status === 'active' ? 'Активна' : 'Отключена'}</Pill>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ['Лицензии', item.activeLicenses],
                  ['Места', item.totalSeats],
                  ['Занято', item.usedSeats],
                  ['Свободно', item.availableSeats],
                ].map(([label, value]) => (
                  <div key={String(label)} className="rounded-xl bg-[#f2f7fd] p-3">
                    <div className="text-lg font-bold text-[#116eee]">{value}</div>
                    <div className="text-[11px] text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-500">
                <Users className="h-4 w-4" />Ближайшее окончание: <strong className="text-gray-700">{dateLabel(item.nearestExpiry)}</strong>
              </div>
            </Link>
          ))}
        </div>
      )}

      {open && (
        <Modal
          title="Новая организация"
          subtitle="Записи создаются только через защищённый admin API."
          onClose={() => setOpen(false)}
          footer={<><SecondaryButton onClick={() => setOpen(false)}>Отмена</SecondaryButton><PrimaryButton onClick={() => void create()} disabled={creating || !form.name.trim()}>{creating && <Loader2 className="h-4 w-4 animate-spin" />}Создать</PrimaryButton></>}
        >
          <div className="space-y-4">
            <Field label="Название организации" required><TextInput value={form.name} maxLength={160} onChange={event => setForm(current => ({ ...current, name: event.target.value }))} /></Field>
            <Field label="Контактное лицо"><TextInput value={form.contactName} maxLength={160} onChange={event => setForm(current => ({ ...current, contactName: event.target.value }))} /></Field>
            <Field label="Контактный e-mail"><TextInput type="email" value={form.contactEmail} onChange={event => setForm(current => ({ ...current, contactEmail: event.target.value }))} /></Field>
            <Field label="Телефон"><TextInput value={form.contactPhone} maxLength={64} onChange={event => setForm(current => ({ ...current, contactPhone: event.target.value }))} /></Field>
            <Field label="Заметки" hint="Не сохраняйте банковские реквизиты и другие чувствительные данные."><TextArea rows={4} value={form.notes} maxLength={4000} onChange={event => setForm(current => ({ ...current, notes: event.target.value }))} /></Field>
          </div>
        </Modal>
      )}
    </div>
  );
}
