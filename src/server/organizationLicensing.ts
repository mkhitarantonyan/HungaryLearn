import { createHash, randomBytes } from 'node:crypto';

export const MAX_ORGANIZATION_SEATS = 10_000;
export const MAX_KEYS_PER_REQUEST = 1_000;
export const ORGANIZATION_KEY_ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';

export type OrganizationStatus = 'active' | 'inactive';
export type LicenseStatus = 'scheduled' | 'active' | 'paused' | 'cancelled';
export type EffectiveLicenseStatus = LicenseStatus | 'expired';

export class OrganizationValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OrganizationValidationError';
  }
}

function objectInput(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new OrganizationValidationError('Некорректный формат запроса.');
  }
  return value as Record<string, unknown>;
}

function requiredText(value: unknown, label: string, maxLength: number): string {
  if (typeof value !== 'string' || !value.trim()) {
    throw new OrganizationValidationError(`${label}: обязательное поле.`);
  }
  const normalized = value.trim();
  if (normalized.length > maxLength) {
    throw new OrganizationValidationError(`${label}: максимум ${maxLength} символов.`);
  }
  return normalized;
}

function optionalText(value: unknown, label: string, maxLength: number): string | null {
  if (value === undefined || value === null || value === '') return null;
  if (typeof value !== 'string') throw new OrganizationValidationError(`${label}: ожидается текст.`);
  const normalized = value.trim();
  if (!normalized) return null;
  if (normalized.length > maxLength) {
    throw new OrganizationValidationError(`${label}: максимум ${maxLength} символов.`);
  }
  return normalized;
}

function optionalEmail(value: unknown): string | null {
  const email = optionalText(value, 'Контактный e-mail', 254);
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    throw new OrganizationValidationError('Проверьте контактный e-mail.');
  }
  return email?.toLowerCase() ?? null;
}

function positiveInteger(value: unknown, label: string, maximum: number): number {
  if (!Number.isInteger(value) || Number(value) < 1 || Number(value) > maximum) {
    throw new OrganizationValidationError(`${label}: введите целое число от 1 до ${maximum}.`);
  }
  return Number(value);
}

export function normalizeOrganizationName(name: string): string {
  return name.trim().replace(/\s+/g, ' ').toLocaleLowerCase('hu-HU');
}

export function parseOrganizationCreate(input: unknown) {
  const body = objectInput(input);
  const name = requiredText(body.name, 'Название организации', 160);
  return {
    name,
    normalizedName: normalizeOrganizationName(name),
    status: 'active' as OrganizationStatus,
    contactName: optionalText(body.contactName, 'Контактное лицо', 160),
    contactEmail: optionalEmail(body.contactEmail),
    contactPhone: optionalText(body.contactPhone, 'Телефон', 64),
    notes: optionalText(body.notes, 'Заметки', 4_000),
  };
}

export function parseOrganizationUpdate(input: unknown) {
  const body = objectInput(input);
  const result: Partial<ReturnType<typeof parseOrganizationCreate>> = {};
  if ('name' in body) {
    const name = requiredText(body.name, 'Название организации', 160);
    result.name = name;
    result.normalizedName = normalizeOrganizationName(name);
  }
  if ('status' in body) {
    if (body.status !== 'active' && body.status !== 'inactive') {
      throw new OrganizationValidationError('Некорректный статус организации.');
    }
    result.status = body.status;
  }
  if ('contactName' in body) result.contactName = optionalText(body.contactName, 'Контактное лицо', 160);
  if ('contactEmail' in body) result.contactEmail = optionalEmail(body.contactEmail);
  if ('contactPhone' in body) result.contactPhone = optionalText(body.contactPhone, 'Телефон', 64);
  if ('notes' in body) result.notes = optionalText(body.notes, 'Заметки', 4_000);
  if (Object.keys(result).length === 0) throw new OrganizationValidationError('Нет полей для изменения.');
  return result;
}

export function parseUtcDate(value: unknown, label: string): Date {
  if (typeof value !== 'string') throw new OrganizationValidationError(`${label}: выберите дату.`);
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) throw new OrganizationValidationError(`${label}: используйте формат YYYY-MM-DD.`);
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    throw new OrganizationValidationError(`${label}: некорректная календарная дата.`);
  }
  return date;
}

export function addCalendarMonthsUtc(start: Date, months: number): Date {
  if (!Number.isInteger(months) || months < 1 || months > 120) {
    throw new OrganizationValidationError('Срок должен быть от 1 до 120 календарных месяцев.');
  }
  const year = start.getUTCFullYear();
  const month = start.getUTCMonth();
  const day = start.getUTCDate();
  const targetMonthStart = new Date(Date.UTC(year, month + months, 1));
  const lastDay = new Date(Date.UTC(
    targetMonthStart.getUTCFullYear(),
    targetMonthStart.getUTCMonth() + 1,
    0,
  )).getUTCDate();
  return new Date(Date.UTC(
    targetMonthStart.getUTCFullYear(),
    targetMonthStart.getUTCMonth(),
    Math.min(day, lastDay),
    start.getUTCHours(),
    start.getUTCMinutes(),
    start.getUTCSeconds(),
    start.getUTCMilliseconds(),
  ));
}

export function addCalendarMonthsToDateString(start: string, months: number): string {
  return addCalendarMonthsUtc(parseUtcDate(start, 'Дата начала'), months).toISOString().slice(0, 10);
}

export function parseLicenseCreate(input: unknown, now = new Date()) {
  const body = objectInput(input);
  const displayName = requiredText(body.displayName, 'Название лицензии', 160);
  const seatsTotal = positiveInteger(body.seatsTotal, 'Количество мест', MAX_ORGANIZATION_SEATS);
  const startsAt = parseUtcDate(body.startsAt, 'Дата начала');
  let durationMonths: number | null = null;
  let expiresAt: Date;
  if (body.durationMonths === null || body.durationMonths === 'custom') {
    expiresAt = parseUtcDate(body.expiresAt, 'Дата окончания');
  } else {
    durationMonths = positiveInteger(body.durationMonths, 'Срок лицензии', 120);
    expiresAt = addCalendarMonthsUtc(startsAt, durationMonths);
  }
  if (expiresAt.getTime() <= startsAt.getTime()) {
    throw new OrganizationValidationError('Дата окончания должна быть позже даты начала.');
  }
  return {
    displayName,
    seatsTotal,
    startsAt,
    expiresAt,
    durationMonths,
    status: (now.getTime() < startsAt.getTime() ? 'scheduled' : 'active') as LicenseStatus,
    paymentReceivedAt: body.paymentReceivedAt ? parseUtcDate(body.paymentReceivedAt, 'Дата оплаты') : null,
    paymentReference: optionalText(body.paymentReference, 'Ссылка на оплату или счёт', 500),
    internalNotes: optionalText(body.internalNotes, 'Внутренние заметки', 4_000),
  };
}

export function parseKeyQuantity(input: unknown): number {
  return positiveInteger(objectInput(input).quantity, 'Количество ключей', MAX_KEYS_PER_REQUEST);
}

export function parseSeatCount(input: unknown): number {
  return positiveInteger(objectInput(input).seatsTotal, 'Количество мест', MAX_ORGANIZATION_SEATS);
}

export function parseExtendLicense(input: unknown) {
  const body = objectInput(input);
  if (body.months !== undefined) {
    return { months: positiveInteger(body.months, 'Срок продления', 120), expiresAt: null as Date | null };
  }
  return { months: null as number | null, expiresAt: parseUtcDate(body.expiresAt, 'Новая дата окончания') };
}

export function parseAssignUser(input: unknown): { email: string | null; uid: string | null } {
  const body = objectInput(input);
  const uid = optionalText(body.uid, 'UID', 128);
  const email = optionalEmail(body.email);
  if (!uid && !email) throw new OrganizationValidationError('Укажите e-mail или UID существующего пользователя.');
  return { uid, email };
}

export function effectiveLicenseStatus(
  status: LicenseStatus,
  startsAt: Date,
  expiresAt: Date,
  now = new Date(),
): EffectiveLicenseStatus {
  if (status === 'cancelled') return 'cancelled';
  if (status === 'paused') return 'paused';
  if (now.getTime() >= expiresAt.getTime()) return 'expired';
  if (now.getTime() < startsAt.getTime()) return 'scheduled';
  return 'active';
}

export function licenseGrantsAccess(
  organizationStatus: OrganizationStatus,
  licenseStatus: LicenseStatus,
  startsAt: Date,
  expiresAt: Date,
  now = new Date(),
): boolean {
  return organizationStatus === 'active'
    && effectiveLicenseStatus(licenseStatus, startsAt, expiresAt, now) === 'active';
}

export function normalizeOrganizationKey(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const compact = value.trim().toUpperCase().replace(/[\s-]+/g, '');
  if (!/^MG[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{16}$/.test(compact)) return null;
  return compact;
}

export function hashOrganizationKey(normalizedKey: string): string {
  return createHash('sha256').update(normalizedKey, 'utf8').digest('hex');
}

function randomAlphabetCharacter(): string {
  const rejectionLimit = 256 - (256 % ORGANIZATION_KEY_ALPHABET.length);
  for (;;) {
    const value = randomBytes(1)[0];
    if (value < rejectionLimit) return ORGANIZATION_KEY_ALPHABET[value % ORGANIZATION_KEY_ALPHABET.length];
  }
}

export function generateOrganizationKey(): { plaintext: string; normalized: string; hash: string; prefix: string; suffix: string } {
  const token = Array.from({ length: 16 }, randomAlphabetCharacter).join('');
  const normalized = `MG${token}`;
  const groups = token.match(/.{4}/g) ?? [];
  const plaintext = `MG-${groups.join('-')}`;
  return {
    plaintext,
    normalized,
    hash: hashOrganizationKey(normalized),
    prefix: `MG-${groups[0]}`,
    suffix: groups.at(-1) ?? '',
  };
}

export function maskOrganizationKey(prefix: string, suffix: string): string {
  return `${prefix}-••••-••••-${suffix}`;
}
