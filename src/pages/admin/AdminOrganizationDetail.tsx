import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Clipboard, Download, KeyRound, Loader2, Pause, Play, Plus, RefreshCw, UserPlus, XCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import type { AdminOrganizationDetail, AdminOrganizationLicense } from '../../admin/types';
import {
  assignAdminOrganizationUser,
  changeAdminLicenseSeats,
  createAdminOrganizationLicense,
  extendAdminLicense,
  generateAdminOrganizationKeys,
  getAdminOrganization,
  releaseAdminOrganizationSeat,
  revokeAdminOrganizationKey,
  setAdminLicenseLifecycle,
  updateAdminOrganization,
} from '../../api/adminApi';
import { Field, Modal, PageHeader, Pill, PrimaryButton, SecondaryButton, Select, TextArea, TextInput, type PillTone } from '../../components/admin/AdminUi';

type Tab = 'overview' | 'licenses' | 'learners' | 'keys' | 'audit';
type ModalKind = 'license' | 'keys' | 'assign' | 'seats' | 'extend' | null;

const statusLabels = { scheduled: 'Запланирована', active: 'Активна', paused: 'Приостановлена', expired: 'Истекла', cancelled: 'Закрыта' } as const;
const statusTones: Record<keyof typeof statusLabels, PillTone> = { scheduled: 'indigo', active: 'green', paused: 'amber', expired: 'gray', cancelled: 'red' };

function dateOnly(value: string | null): string {
  return value ? value.slice(0, 10).split('-').reverse().join('.') : '—';
}

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function addCalendarMonthsToDateString(start: string, months: number): string {
  const [year, month, day] = start.split('-').map(Number);
  if (!year || !month || !day) throw new Error('Некорректная дата');
  const target = new Date(Date.UTC(year, month - 1 + months, 1));
  const lastDay = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
  return new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth(), Math.min(day, lastDay))).toISOString().slice(0, 10);
}

export default function AdminOrganizationDetailPage() {
  const { organizationId = '' } = useParams();
  const [detail, setDetail] = useState<AdminOrganizationDetail | null>(null);
  const [tab, setTab] = useState<Tab>('overview');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [modal, setModal] = useState<ModalKind>(null);
  const [selectedLicense, setSelectedLicense] = useState<AdminOrganizationLicense | null>(null);
  const [generatedKeys, setGeneratedKeys] = useState<Array<{ id: string; key: string }> | null>(null);
  const [licenseForm, setLicenseForm] = useState({ displayName: '', seatsTotal: 10, startsAt: todayUtc(), duration: '3', expiresAt: '', paymentReceivedAt: '', paymentReference: '', internalNotes: '' });
  const [numberValue, setNumberValue] = useState(1);
  const [email, setEmail] = useState('');
  const [customExpiry, setCustomExpiry] = useState('');

  const load = useCallback(async () => {
    setLoading(true); setError('');
    try { setDetail(await getAdminOrganization(organizationId)); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Не удалось загрузить организацию.'); }
    finally { setLoading(false); }
  }, [organizationId]);
  useEffect(() => { void load(); }, [load]);

  const expiryPreview = useMemo(() => {
    if (licenseForm.duration === 'custom') return licenseForm.expiresAt || '—';
    try { return addCalendarMonthsToDateString(licenseForm.startsAt, Number(licenseForm.duration)); }
    catch { return '—'; }
  }, [licenseForm.duration, licenseForm.expiresAt, licenseForm.startsAt]);

  const run = async (operation: () => Promise<void>) => {
    setBusy(true); setError('');
    try { await operation(); await load(); setModal(null); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Операция не выполнена.'); }
    finally { setBusy(false); }
  };

  const openLicenseModal = (kind: Exclude<ModalKind, 'license' | null>, license: AdminOrganizationLicense) => {
    setSelectedLicense(license);
    if (kind === 'keys') setNumberValue(Math.max(1, license.seatsTotal - license.seatsUsed - license.availableKeys));
    if (kind === 'seats') setNumberValue(license.seatsTotal);
    if (kind === 'extend') { setNumberValue(3); setCustomExpiry(''); }
    setEmail('');
    setModal(kind);
  };

  const createLicense = () => run(async () => {
    await createAdminOrganizationLicense(organizationId, {
      displayName: licenseForm.displayName,
      seatsTotal: licenseForm.seatsTotal,
      startsAt: licenseForm.startsAt,
      durationMonths: licenseForm.duration === 'custom' ? 'custom' : Number(licenseForm.duration),
      expiresAt: licenseForm.duration === 'custom' ? licenseForm.expiresAt : undefined,
      paymentReceivedAt: licenseForm.paymentReceivedAt || undefined,
      paymentReference: licenseForm.paymentReference || undefined,
      internalNotes: licenseForm.internalNotes || undefined,
    });
    setLicenseForm({ displayName: '', seatsTotal: 10, startsAt: todayUtc(), duration: '3', expiresAt: '', paymentReceivedAt: '', paymentReference: '', internalNotes: '' });
  });

  const lifecycle = async (license: AdminOrganizationLicense, action: 'pause' | 'resume' | 'cancel') => {
    const message = action === 'pause'
      ? 'Приостановка немедленно отключит Premium, предоставленный этой лицензией. Назначения мест сохранятся.'
      : action === 'cancel'
        ? 'Закрытие немедленно отключит Premium и сохранит историю. Возобновить закрытую лицензию нельзя.'
        : 'Доступ восстановится только если организация активна и текущая дата входит в срок лицензии.';
    if (!window.confirm(message)) return;
    await run(() => setAdminLicenseLifecycle(license.id, action));
  };

  const generateKeys = async () => {
    if (!selectedLicense) return;
    setBusy(true); setError('');
    try {
      const keys = await generateAdminOrganizationKeys(selectedLicense.id, numberValue);
      setGeneratedKeys(keys);
      await load();
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Не удалось создать ключи.'); }
    finally { setBusy(false); }
  };

  const copyKeys = async () => {
    if (generatedKeys) await navigator.clipboard.writeText(generatedKeys.map(item => item.key).join('\n'));
  };

  const downloadKeys = () => {
    if (!generatedKeys || !selectedLicense) return;
    const csv = `access_key\n${generatedKeys.map(item => item.key).join('\n')}\n`;
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url; anchor.download = `${selectedLicense.displayName.replace(/[^a-z0-9]+/gi, '-')}-keys.csv`; anchor.click();
    URL.revokeObjectURL(url);
  };

  if (loading && !detail) return <div className="flex min-h-64 items-center justify-center gap-2 text-sm text-gray-500"><Loader2 className="h-5 w-5 animate-spin" />Загрузка…</div>;
  if (!detail) return <div><Link className="text-sm text-indigo-600" to="/admin/organizations">← К организациям</Link><div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error || 'Организация не найдена.'}</div></div>;

  const { organization, summary } = detail;
  return (
    <div>
      <Link to="/admin/organizations" className="mb-5 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800"><ArrowLeft className="h-4 w-4" />Все организации</Link>
      <PageHeader
        title={organization.name}
        subtitle={[organization.contactName, organization.contactEmail, organization.contactPhone].filter(Boolean).join(' · ') || 'Контактные данные не указаны'}
        action={<div className="flex gap-2"><Pill tone={organization.status === 'active' ? 'green' : 'gray'}>{organization.status === 'active' ? 'Активна' : 'Отключена'}</Pill><SecondaryButton onClick={() => void run(() => updateAdminOrganization(organizationId, { status: organization.status === 'active' ? 'inactive' : 'active' }))}>{organization.status === 'active' ? 'Отключить' : 'Включить'}</SecondaryButton></div>}
      />
      {error && <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>}

      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-6">
        {[
          ['Лицензии', summary.licensesCount], ['Активные', summary.activeLicenses], ['Всего мест', summary.totalSeats],
          ['Занято', summary.usedSeats], ['Свободно', summary.availableSeats], ['Ближайшее окончание', dateOnly(summary.nearestExpiry)],
        ].map(([label, value]) => <div key={String(label)} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"><div className="text-lg font-bold text-[#116eee]">{value}</div><div className="mt-1 text-[11px] text-gray-500">{label}</div></div>)}
      </div>

      <div className="mb-6 flex gap-1 overflow-x-auto rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
        {([['overview','Обзор'],['licenses','Лицензии'],['learners','Ученики'],['keys','Ключи доступа'],['audit','Аудит']] as Array<[Tab,string]>).map(([key,label]) => (
          <button key={key} onClick={() => setTab(key)} className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold ${tab === key ? 'bg-[#116eee] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>{label}</button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="grid gap-5 lg:grid-cols-2">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><h2 className="text-sm font-bold">Контакт и заметки</h2><dl className="mt-4 space-y-3 text-sm"><div><dt className="text-xs text-gray-500">Контакт</dt><dd>{organization.contactName || '—'}</dd></div><div><dt className="text-xs text-gray-500">E-mail</dt><dd>{organization.contactEmail || '—'}</dd></div><div><dt className="text-xs text-gray-500">Телефон</dt><dd>{organization.contactPhone || '—'}</dd></div><div><dt className="text-xs text-gray-500">Заметки</dt><dd className="whitespace-pre-wrap">{organization.notes || '—'}</dd></div></dl></section>
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><h2 className="text-sm font-bold">Правила доступа</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600"><li>Начало включительно, окончание исключительно.</li><li>Сервер проверяет статус организации, лицензии, места и текущее время.</li><li>Окончание или пауза отключает только организационный источник Premium.</li><li>Личная подписка Lemon Squeezy продолжает действовать независимо.</li></ul></section>
        </div>
      )}

      {tab === 'licenses' && (
        <div className="space-y-4">
          <div className="flex justify-end"><PrimaryButton onClick={() => setModal('license')}><Plus className="h-4 w-4" />Добавить лицензию</PrimaryButton></div>
          {detail.licenses.map(license => (
            <article key={license.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start"><div><div className="flex flex-wrap items-center gap-2"><h2 className="text-base font-bold">{license.displayName}</h2><Pill tone={statusTones[license.effectiveStatus]}>{statusLabels[license.effectiveStatus]}</Pill></div><p className="mt-1 text-xs text-gray-500">{dateOnly(license.startsAt)} — {dateOnly(license.expiresAt)} · окончание исключительно</p></div><div className="flex flex-wrap gap-2"><SecondaryButton onClick={() => openLicenseModal('keys', license)}><KeyRound className="h-4 w-4" />Ключи</SecondaryButton><SecondaryButton onClick={() => openLicenseModal('assign', license)}><UserPlus className="h-4 w-4" />Назначить</SecondaryButton><SecondaryButton onClick={() => openLicenseModal('seats', license)}>Изменить места</SecondaryButton><SecondaryButton onClick={() => openLicenseModal('extend', license)}><RefreshCw className="h-4 w-4" />Продлить</SecondaryButton></div></div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div className="rounded-xl bg-[#f2f7fd] p-3"><strong>{license.seatsTotal}</strong><span className="block text-[11px] text-gray-500">всего мест</span></div><div className="rounded-xl bg-[#f2f7fd] p-3"><strong>{license.seatsUsed}</strong><span className="block text-[11px] text-gray-500">занято</span></div><div className="rounded-xl bg-[#f2f7fd] p-3"><strong>{license.seatsAvailable}</strong><span className="block text-[11px] text-gray-500">свободно</span></div><div className="rounded-xl bg-[#f2f7fd] p-3"><strong>{license.availableKeys}</strong><span className="block text-[11px] text-gray-500">свободных ключей</span></div></div>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-100 pt-4">{license.status !== 'cancelled' && (license.status === 'paused' ? <SecondaryButton onClick={() => void lifecycle(license,'resume')}><Play className="h-4 w-4" />Возобновить</SecondaryButton> : <SecondaryButton onClick={() => void lifecycle(license,'pause')}><Pause className="h-4 w-4" />Приостановить</SecondaryButton>)}{license.status !== 'cancelled' && <button className="inline-flex items-center gap-2 rounded-[10px] border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700" onClick={() => void lifecycle(license,'cancel')}><XCircle className="h-4 w-4" />Закрыть</button>}</div>
            </article>
          ))}
          {detail.licenses.length === 0 && <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-500">У организации пока нет лицензий.</div>}
        </div>
      )}

      {tab === 'learners' && (
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm"><table className="min-w-full text-left text-sm"><thead className="bg-gray-50 text-xs text-gray-500"><tr><th className="px-4 py-3">Пользователь</th><th className="px-4 py-3">Лицензия</th><th className="px-4 py-3">Назначен</th><th className="px-4 py-3">Доступ до</th><th className="px-4 py-3">Статус</th><th className="px-4 py-3" /></tr></thead><tbody className="divide-y divide-gray-100">{detail.seats.map(seat => <tr key={seat.id}><td className="px-4 py-3"><strong>{seat.displayName || seat.email || seat.uid || 'Удалённый аккаунт'}</strong>{seat.email && seat.displayName && <div className="text-xs text-gray-500">{seat.email}</div>}</td><td className="px-4 py-3">{seat.licenseName}</td><td className="px-4 py-3">{dateOnly(seat.assignedAt)}</td><td className="px-4 py-3">{dateOnly(seat.accessUntil)}</td><td className="px-4 py-3"><Pill tone={seat.status === 'active' ? 'green' : 'gray'}>{seat.status}</Pill></td><td className="px-4 py-3 text-right">{seat.status === 'active' && <button className="text-xs font-semibold text-red-600" onClick={() => { if (window.confirm('Удаление ученика немедленно отключит Premium от организации. Личная подписка, если она есть, останется активной.')) void run(() => releaseAdminOrganizationSeat(seat.id)); }}>Освободить место</button>}</td></tr>)}</tbody></table>{detail.seats.length === 0 && <div className="p-8 text-center text-sm text-gray-500">Назначенных учеников нет.</div>}</div>
      )}

      {tab === 'keys' && (
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm"><table className="min-w-full text-left text-sm"><thead className="bg-gray-50 text-xs text-gray-500"><tr><th className="px-4 py-3">Ключ</th><th className="px-4 py-3">Лицензия</th><th className="px-4 py-3">Статус</th><th className="px-4 py-3">Создан</th><th className="px-4 py-3">Использован</th><th className="px-4 py-3" /></tr></thead><tbody className="divide-y divide-gray-100">{detail.accessKeys.map(key => <tr key={key.id}><td className="px-4 py-3 font-mono text-xs">{key.maskedKey}</td><td className="px-4 py-3">{key.licenseName}</td><td className="px-4 py-3"><Pill tone={key.status === 'available' ? 'green' : key.status === 'revoked' ? 'red' : 'gray'}>{key.status}</Pill></td><td className="px-4 py-3">{dateOnly(key.createdAt)}</td><td className="px-4 py-3">{key.redeemedByEmail || dateOnly(key.redeemedAt)}</td><td className="px-4 py-3 text-right">{key.status === 'available' && <button className="text-xs font-semibold text-red-600" onClick={() => { if (window.confirm('Отозванный ключ больше нельзя активировать.')) void run(() => revokeAdminOrganizationKey(key.id)); }}>Отозвать</button>}</td></tr>)}</tbody></table>{detail.accessKeys.length === 0 && <div className="p-8 text-center text-sm text-gray-500">Ключи ещё не создавались.</div>}</div>
      )}

      {tab === 'audit' && <div className="space-y-2">{detail.auditLogs.map(log => <div key={log.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"><div className="flex flex-wrap justify-between gap-2"><strong className="text-sm">{log.action}</strong><span className="text-xs text-gray-500">{log.createdAt ? new Date(log.createdAt).toLocaleString('ru-RU') : '—'}</span></div><div className="mt-1 text-xs text-gray-500">actor: {log.actorUid}{log.targetUid ? ` · target: ${log.targetUid}` : ''}</div></div>)}</div>}

      {modal === 'license' && <Modal title="Новая лицензия" subtitle="Даты хранятся в UTC. Начало включительно, окончание исключительно." size="lg" onClose={() => setModal(null)} footer={<><SecondaryButton onClick={() => setModal(null)}>Отмена</SecondaryButton><PrimaryButton disabled={busy || !licenseForm.displayName.trim()} onClick={() => void createLicense()}>{busy && <Loader2 className="h-4 w-4 animate-spin" />}Создать лицензию</PrimaryButton></>}><div className="grid gap-4 sm:grid-cols-2"><Field label="Название лицензии" required><TextInput value={licenseForm.displayName} onChange={event => setLicenseForm(current => ({ ...current, displayName:event.target.value }))} /></Field><Field label="Места" required><TextInput type="number" min={1} max={10000} value={licenseForm.seatsTotal} onChange={event => setLicenseForm(current => ({ ...current, seatsTotal:Number(event.target.value) }))} /></Field><Field label="Дата начала" required><TextInput type="date" value={licenseForm.startsAt} onChange={event => setLicenseForm(current => ({ ...current, startsAt:event.target.value }))} /></Field><Field label="Срок" required><Select value={licenseForm.duration} onChange={event => setLicenseForm(current => ({ ...current, duration:event.target.value }))}><option value="1">1 месяц</option><option value="3">3 месяца</option><option value="6">6 месяцев</option><option value="12">12 месяцев</option><option value="custom">Своя дата</option></Select></Field>{licenseForm.duration === 'custom' && <Field label="Дата окончания" required><TextInput type="date" value={licenseForm.expiresAt} onChange={event => setLicenseForm(current => ({ ...current, expiresAt:event.target.value }))} /></Field>}<div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm"><span className="block text-xs text-emerald-700">Предварительная дата окончания</span><strong>{dateOnly(expiryPreview === '—' ? null : expiryPreview)}</strong></div><Field label="Дата получения оплаты"><TextInput type="date" value={licenseForm.paymentReceivedAt} onChange={event => setLicenseForm(current => ({ ...current, paymentReceivedAt:event.target.value }))} /></Field><Field label="Счёт / заметка об оплате"><TextInput value={licenseForm.paymentReference} onChange={event => setLicenseForm(current => ({ ...current, paymentReference:event.target.value }))} /></Field><div className="sm:col-span-2"><Field label="Внутренние заметки" hint="Не храните банковские реквизиты."><TextArea rows={3} value={licenseForm.internalNotes} onChange={event => setLicenseForm(current => ({ ...current, internalNotes:event.target.value }))} /></Field></div></div></Modal>}

      {modal === 'keys' && selectedLicense && !generatedKeys && <Modal title="Создать ключи доступа" subtitle={`${selectedLicense.displayName}: свободно ${selectedLicense.seatsAvailable}, уже доступно ключей ${selectedLicense.availableKeys}.`} onClose={() => setModal(null)} footer={<><SecondaryButton onClick={() => setModal(null)}>Отмена</SecondaryButton><PrimaryButton disabled={busy || numberValue < 1} onClick={() => void generateKeys()}>{busy && <Loader2 className="h-4 w-4 animate-spin" />}Создать</PrimaryButton></>}><Field label="Количество ключей" required hint="Количество не может превышать свободную ёмкость с учётом уже созданных ключей."><TextInput type="number" min={1} max={1000} value={numberValue} onChange={event => setNumberValue(Number(event.target.value))} /></Field></Modal>}

      {generatedKeys && <Modal title={`${generatedKeys.length} ключей создано`} subtitle="Полные ключи показаны только один раз. После закрытия восстановить их нельзя." size="lg" onClose={() => { setGeneratedKeys(null); setModal(null); }} footer={<><SecondaryButton onClick={() => void copyKeys()}><Clipboard className="h-4 w-4" />Копировать все</SecondaryButton><SecondaryButton onClick={downloadKeys}><Download className="h-4 w-4" />CSV</SecondaryButton><PrimaryButton onClick={() => { setGeneratedKeys(null); setModal(null); }}>Готово</PrimaryButton></>}><pre className="max-h-80 overflow-auto rounded-xl bg-slate-950 p-4 text-sm leading-7 text-emerald-300">{generatedKeys.map(item => item.key).join('\n')}</pre></Modal>}

      {modal === 'assign' && selectedLicense && <Modal title="Назначить существующего пользователя" subtitle={selectedLicense.displayName} onClose={() => setModal(null)} footer={<><SecondaryButton onClick={() => setModal(null)}>Отмена</SecondaryButton><PrimaryButton disabled={busy || !email.trim()} onClick={() => void run(() => assignAdminOrganizationUser(selectedLicense.id,email))}>{busy && <Loader2 className="h-4 w-4 animate-spin" />}Назначить</PrimaryButton></>}><Field label="E-mail существующего аккаунта" required hint="Новый Firebase-пользователь не создаётся."><TextInput type="email" value={email} onChange={event => setEmail(event.target.value)} /></Field></Modal>}

      {modal === 'seats' && selectedLicense && <Modal title="Изменить количество мест" subtitle={`Сейчас ${selectedLicense.seatsTotal}, активно занято ${selectedLicense.seatsUsed}.`} onClose={() => setModal(null)} footer={<><SecondaryButton onClick={() => setModal(null)}>Отмена</SecondaryButton><PrimaryButton disabled={busy || numberValue < 1} onClick={() => { if (numberValue < selectedLicense.seatsTotal && !window.confirm(`Уменьшить лимит до ${numberValue}? Активных учеников: ${selectedLicense.seatsUsed}.`)) return; void run(() => changeAdminLicenseSeats(selectedLicense.id,numberValue)); }}>{busy && <Loader2 className="h-4 w-4 animate-spin" />}Сохранить</PrimaryButton></>}><Field label="Общее количество мест" required hint="Сервер не позволит установить значение ниже числа активных учеников."><TextInput type="number" min={1} max={10000} value={numberValue} onChange={event => setNumberValue(Number(event.target.value))} /></Field></Modal>}

      {modal === 'extend' && selectedLicense && <Modal title="Продлить лицензию" subtitle={`Текущее окончание: ${dateOnly(selectedLicense.expiresAt)}`} onClose={() => setModal(null)} footer={<><SecondaryButton onClick={() => setModal(null)}>Отмена</SecondaryButton><PrimaryButton disabled={busy || (!numberValue && !customExpiry)} onClick={() => void run(() => extendAdminLicense(selectedLicense.id,customExpiry ? { expiresAt:customExpiry } : { months:numberValue }))}>{busy && <Loader2 className="h-4 w-4 animate-spin" />}Продлить</PrimaryButton></>}><div className="space-y-4"><Field label="Продлить на календарные месяцы"><Select value={customExpiry ? 'custom' : String(numberValue)} onChange={event => { if (event.target.value === 'custom') setCustomExpiry(selectedLicense.expiresAt.slice(0,10)); else { setCustomExpiry(''); setNumberValue(Number(event.target.value)); } }}><option value="1">1 месяц</option><option value="3">3 месяца</option><option value="6">6 месяцев</option><option value="12">12 месяцев</option><option value="custom">Установить дату</option></Select></Field>{customExpiry && <Field label="Новая дата окончания"><TextInput type="date" value={customExpiry} onChange={event => setCustomExpiry(event.target.value)} /></Field>}</div></Modal>}
    </div>
  );
}
