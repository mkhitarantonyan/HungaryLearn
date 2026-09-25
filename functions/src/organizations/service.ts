import { createHash } from 'node:crypto';
import { FieldValue, Timestamp, type DocumentData, type DocumentReference, type QueryDocumentSnapshot, type Transaction } from 'firebase-admin/firestore';
import { adminAuth, firestore } from '../firebase/admin.js';
import {
  addCalendarMonthsUtc,
  effectiveLicenseStatus,
  generateOrganizationKey,
  hashOrganizationKey,
  licenseGrantsAccess,
  maskOrganizationKey,
  normalizeOrganizationKey,
  type EffectiveLicenseStatus,
  type LicenseStatus,
  type OrganizationStatus,
} from '../../../src/server/organizationLicensing.ts';

const organizations = () => firestore.collection('organizations');
const licenses = () => firestore.collection('organizationLicenses');
const seats = () => firestore.collection('organizationSeats');
const accessKeys = () => firestore.collection('organizationAccessKeys');
const auditLogs = () => firestore.collection('organizationAuditLogs');
const redeemLimits = () => firestore.collection('organizationRedeemLimits');
const seatGuards = () => firestore.collection('organizationSeatGuards');

function userSeatGuardId(uid: string): string {
  return createHash('sha256').update(uid, 'utf8').digest('hex');
}

function bumpLicenseCapacity(transaction: Transaction, licenseRef: DocumentReference): void {
  transaction.set(licenseRef, { capacityRevision: FieldValue.increment(1) }, { merge: true });
}

export class OrganizationServiceError extends Error {
  constructor(message: string, readonly status = 400) {
    super(message);
    this.name = 'OrganizationServiceError';
  }
}

export interface OrganizationAccessSummary {
  status: EffectiveLicenseStatus | 'inactive';
  organizationName: string;
  accessUntil: string;
}

function dateValue(value: unknown): Date | null {
  if (value instanceof Timestamp) return value.toDate();
  if (typeof value === 'string') {
    const time = Date.parse(value);
    if (Number.isFinite(time)) return new Date(time);
  }
  if (value instanceof Date && Number.isFinite(value.getTime())) return value;
  return null;
}

function iso(value: unknown): string | null {
  return dateValue(value)?.toISOString() ?? null;
}

function requiredDate(data: DocumentData, field: 'startsAt' | 'expiresAt'): Date {
  const value = dateValue(data[field]);
  if (!value) throw new OrganizationServiceError(`Лицензия содержит некорректное поле ${field}.`, 500);
  return value;
}

function storedLicenseStatus(value: unknown): LicenseStatus {
  if (value === 'scheduled' || value === 'paused' || value === 'cancelled') return value;
  return 'active';
}

function storedOrganizationStatus(value: unknown): OrganizationStatus {
  return value === 'inactive' ? 'inactive' : 'active';
}

function audit(
  transaction: Transaction,
  actorUid: string,
  action: string,
  organizationId: string,
  details: { licenseId?: string; targetUid?: string; metadata?: Record<string, unknown> } = {},
): void {
  transaction.create(auditLogs().doc(), {
    organizationId,
    licenseId: details.licenseId ?? null,
    actorUid,
    action,
    targetUid: details.targetUid ?? null,
    metadata: details.metadata ?? {},
    createdAt: FieldValue.serverTimestamp(),
  });
}

function serializeOrganization(id: string, data: DocumentData) {
  return {
    id,
    name: String(data.name || ''),
    status: storedOrganizationStatus(data.status),
    contactName: typeof data.contactName === 'string' ? data.contactName : null,
    contactEmail: typeof data.contactEmail === 'string' ? data.contactEmail : null,
    contactPhone: typeof data.contactPhone === 'string' ? data.contactPhone : null,
    notes: typeof data.notes === 'string' ? data.notes : null,
    createdAt: iso(data.createdAt),
    updatedAt: iso(data.updatedAt),
  };
}

function serializeLicense(id: string, data: DocumentData, now: Date, usedSeats = 0, availableKeys = 0) {
  const startsAt = requiredDate(data, 'startsAt');
  const expiresAt = requiredDate(data, 'expiresAt');
  const status = storedLicenseStatus(data.status);
  const seatsTotal = Number(data.seatsTotal) || 0;
  return {
    id,
    organizationId: String(data.organizationId || ''),
    displayName: String(data.displayName || ''),
    status,
    effectiveStatus: effectiveLicenseStatus(status, startsAt, expiresAt, now),
    seatsTotal,
    seatsUsed: usedSeats,
    seatsAvailable: Math.max(0, seatsTotal - usedSeats),
    availableKeys,
    startsAt: startsAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    durationMonths: Number.isInteger(data.durationMonths) ? Number(data.durationMonths) : null,
    paymentReceivedAt: iso(data.paymentReceivedAt),
    paymentReference: typeof data.paymentReference === 'string' ? data.paymentReference : null,
    internalNotes: typeof data.internalNotes === 'string' ? data.internalNotes : null,
    createdAt: iso(data.createdAt),
    updatedAt: iso(data.updatedAt),
  };
}

function activeSeatCount(documents: QueryDocumentSnapshot[]): number {
  return documents.filter(document => document.data().status === 'active').length;
}

async function requireOrganization(id: string) {
  const snapshot = await organizations().doc(id).get();
  if (!snapshot.exists) throw new OrganizationServiceError('Организация не найдена.', 404);
  return snapshot;
}

async function requireLicense(id: string) {
  const snapshot = await licenses().doc(id).get();
  if (!snapshot.exists) throw new OrganizationServiceError('Лицензия не найдена.', 404);
  return snapshot;
}

export async function createOrganization(actorUid: string, input: Record<string, unknown>) {
  const ref = organizations().doc();
  await firestore.runTransaction(async transaction => {
    const timestamp = FieldValue.serverTimestamp();
    transaction.create(ref, { ...input, createdAt: timestamp, createdBy: actorUid, updatedAt: timestamp, updatedBy: actorUid });
    audit(transaction, actorUid, 'organization.created', ref.id, { metadata: { name: input.name } });
  });
  return serializeOrganization(ref.id, (await ref.get()).data() || {});
}

export async function updateOrganization(actorUid: string, organizationId: string, input: Record<string, unknown>) {
  const ref = organizations().doc(organizationId);
  await firestore.runTransaction(async transaction => {
    const snapshot = await transaction.get(ref);
    if (!snapshot.exists) throw new OrganizationServiceError('Организация не найдена.', 404);
    transaction.set(ref, { ...input, updatedAt: FieldValue.serverTimestamp(), updatedBy: actorUid }, { merge: true });
    audit(transaction, actorUid, 'organization.updated', organizationId, { metadata: { fields: Object.keys(input) } });
  });
  return serializeOrganization(ref.id, (await ref.get()).data() || {});
}

export async function createLicense(actorUid: string, organizationId: string, input: Record<string, unknown>) {
  const organizationRef = organizations().doc(organizationId);
  const licenseRef = licenses().doc();
  await firestore.runTransaction(async transaction => {
    const organization = await transaction.get(organizationRef);
    if (!organization.exists) throw new OrganizationServiceError('Организация не найдена.', 404);
    const timestamp = FieldValue.serverTimestamp();
    transaction.create(licenseRef, {
      ...input,
      organizationId,
      startsAt: Timestamp.fromDate(input.startsAt as Date),
      expiresAt: Timestamp.fromDate(input.expiresAt as Date),
      paymentReceivedAt: input.paymentReceivedAt ? Timestamp.fromDate(input.paymentReceivedAt as Date) : null,
      capacityRevision: 0,
      createdAt: timestamp,
      createdBy: actorUid,
      updatedAt: timestamp,
      updatedBy: actorUid,
    });
    audit(transaction, actorUid, 'license.created', organizationId, {
      licenseId: licenseRef.id,
      metadata: { seatsTotal: input.seatsTotal, startsAt: (input.startsAt as Date).toISOString(), expiresAt: (input.expiresAt as Date).toISOString() },
    });
  });
  return serializeLicense(licenseRef.id, (await licenseRef.get()).data() || {}, new Date());
}

export async function listOrganizations(now = new Date()) {
  const [organizationSnapshot, licenseSnapshot, seatSnapshot] = await Promise.all([
    organizations().get(), licenses().get(), seats().where('status', '==', 'active').get(),
  ]);
  const usedByLicense = new Map<string, number>();
  for (const seat of seatSnapshot.docs) {
    const id = String(seat.data().licenseId || '');
    usedByLicense.set(id, (usedByLicense.get(id) || 0) + 1);
  }
  const licensesByOrganization = new Map<string, ReturnType<typeof serializeLicense>[]>();
  for (const license of licenseSnapshot.docs) {
    const data = license.data();
    const item = serializeLicense(license.id, data, now, usedByLicense.get(license.id) || 0);
    const current = licensesByOrganization.get(item.organizationId) || [];
    current.push(item);
    licensesByOrganization.set(item.organizationId, current);
  }
  return organizationSnapshot.docs.map(document => {
    const organization = serializeOrganization(document.id, document.data());
    const related = licensesByOrganization.get(document.id) || [];
    const active = related.filter(item => item.effectiveStatus === 'active');
    const totalSeats = active.reduce((sum, item) => sum + item.seatsTotal, 0);
    const usedSeats = active.reduce((sum, item) => sum + item.seatsUsed, 0);
    const nearestExpiry = active.map(item => item.expiresAt).sort()[0] ?? null;
    return {
      ...organization,
      licensesCount: related.length,
      activeLicenses: active.length,
      totalSeats,
      usedSeats,
      availableSeats: Math.max(0, totalSeats - usedSeats),
      nearestExpiry,
    };
  }).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

async function userLabels(uids: string[]): Promise<Map<string, { email: string; displayName: string }>> {
  const unique = [...new Set(uids.filter(Boolean))];
  const entries = await Promise.all(unique.map(async uid => {
    try {
      const authUser = await adminAuth.getUser(uid);
      return [uid, { email: authUser.email || '', displayName: authUser.displayName || '' }] as const;
    } catch {
      const profile = (await firestore.collection('users').doc(uid).get()).data() || {};
      return [uid, { email: String(profile.email || ''), displayName: String(profile.displayName || '') }] as const;
    }
  }));
  return new Map(entries);
}

export async function getOrganizationDetail(organizationId: string, now = new Date()) {
  const organizationSnapshot = await requireOrganization(organizationId);
  const [licenseSnapshot, seatSnapshot, keySnapshot, auditSnapshot] = await Promise.all([
    licenses().where('organizationId', '==', organizationId).get(),
    seats().where('organizationId', '==', organizationId).get(),
    accessKeys().where('organizationId', '==', organizationId).get(),
    auditLogs().where('organizationId', '==', organizationId).get(),
  ]);
  const usedByLicense = new Map<string, number>();
  const availableKeysByLicense = new Map<string, number>();
  for (const seat of seatSnapshot.docs) {
    if (seat.data().status !== 'active') continue;
    const id = String(seat.data().licenseId || '');
    usedByLicense.set(id, (usedByLicense.get(id) || 0) + 1);
  }
  for (const key of keySnapshot.docs) {
    if (key.data().status !== 'available') continue;
    const id = String(key.data().licenseId || '');
    availableKeysByLicense.set(id, (availableKeysByLicense.get(id) || 0) + 1);
  }
  const serializedLicenses = licenseSnapshot.docs
    .map(document => serializeLicense(document.id, document.data(), now, usedByLicense.get(document.id) || 0, availableKeysByLicense.get(document.id) || 0))
    .sort((a, b) => b.startsAt.localeCompare(a.startsAt));
  const licenseNames = new Map(serializedLicenses.map(item => [item.id, item.displayName]));
  const licensesById = new Map(serializedLicenses.map(item => [item.id, item]));
  const labels = await userLabels(seatSnapshot.docs.map(item => String(item.data().uid || '')));
  const serializedSeats = seatSnapshot.docs.map(document => {
    const data = document.data();
    const uid = typeof data.uid === 'string' ? data.uid : null;
    const label = uid ? labels.get(uid) : undefined;
    const license = serializedLicenses.find(item => item.id === data.licenseId);
    return {
      id: document.id,
      uid,
      email: label?.email || '',
      displayName: label?.displayName || '',
      licenseId: String(data.licenseId || ''),
      licenseName: licenseNames.get(String(data.licenseId || '')) || '',
      status: String(data.status || 'released'),
      assignedAt: iso(data.assignedAt),
      releasedAt: iso(data.releasedAt),
      accessUntil: license?.expiresAt ?? null,
    };
  }).sort((a, b) => (b.assignedAt || '').localeCompare(a.assignedAt || ''));
  const serializedKeys = keySnapshot.docs.map(document => {
    const data = document.data();
    const uid = typeof data.redeemedByUid === 'string' ? data.redeemedByUid : null;
    const license = licensesById.get(String(data.licenseId || ''));
    const keyStatus = data.status === 'available' && (license?.effectiveStatus === 'expired' || license?.effectiveStatus === 'cancelled')
      ? 'expired'
      : String(data.status || 'expired');
    return {
      id: document.id,
      licenseId: String(data.licenseId || ''),
      licenseName: licenseNames.get(String(data.licenseId || '')) || '',
      maskedKey: maskOrganizationKey(String(data.keyPrefix || 'MG-••••'), String(data.keySuffix || '••••')),
      status: keyStatus,
      createdAt: iso(data.createdAt),
      redeemedAt: iso(data.redeemedAt),
      redeemedByUid: uid,
      redeemedByEmail: uid ? labels.get(uid)?.email || '' : '',
      revokedAt: iso(data.revokedAt),
    };
  }).sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  const serializedAudit = auditSnapshot.docs.map(document => {
    const data = document.data();
    return {
      id: document.id,
      licenseId: typeof data.licenseId === 'string' ? data.licenseId : null,
      actorUid: String(data.actorUid || ''),
      action: String(data.action || ''),
      targetUid: typeof data.targetUid === 'string' ? data.targetUid : null,
      metadata: data.metadata && typeof data.metadata === 'object' ? data.metadata : {},
      createdAt: iso(data.createdAt),
    };
  }).sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  const activeLicenses = serializedLicenses.filter(item => item.effectiveStatus === 'active');
  const totalSeats = activeLicenses.reduce((sum, item) => sum + item.seatsTotal, 0);
  const usedSeats = activeLicenses.reduce((sum, item) => sum + item.seatsUsed, 0);
  return {
    organization: serializeOrganization(organizationSnapshot.id, organizationSnapshot.data() || {}),
    summary: {
      licensesCount: serializedLicenses.length,
      activeLicenses: activeLicenses.length,
      totalSeats,
      usedSeats,
      availableSeats: Math.max(0, totalSeats - usedSeats),
      nearestExpiry: activeLicenses.map(item => item.expiresAt).sort()[0] ?? null,
    },
    licenses: serializedLicenses,
    seats: serializedSeats,
    accessKeys: serializedKeys,
    auditLogs: serializedAudit,
  };
}

export async function changeSeatCount(actorUid: string, licenseId: string, seatsTotal: number) {
  const licenseRef = licenses().doc(licenseId);
  await firestore.runTransaction(async transaction => {
    const activeSeatsQuery = seats().where('licenseId', '==', licenseId).where('status', '==', 'active');
    const [licenseSnapshot, seatSnapshot] = await Promise.all([transaction.get(licenseRef), transaction.get(activeSeatsQuery)]);
    if (!licenseSnapshot.exists) throw new OrganizationServiceError('Лицензия не найдена.', 404);
    if (seatsTotal < seatSnapshot.size) {
      throw new OrganizationServiceError(`Нельзя уменьшить количество мест ниже ${seatSnapshot.size} активных учеников.`, 409);
    }
    const previous = Number(licenseSnapshot.data()?.seatsTotal) || 0;
    transaction.set(licenseRef, { seatsTotal, updatedAt: FieldValue.serverTimestamp(), updatedBy: actorUid }, { merge: true });
    audit(transaction, actorUid, 'license.seats_changed', String(licenseSnapshot.data()?.organizationId || ''), {
      licenseId,
      metadata: { previous, seatsTotal },
    });
  });
  return serializeLicense(licenseId, (await licenseRef.get()).data() || {}, new Date());
}

export async function setLicenseStatus(actorUid: string, licenseId: string, action: 'pause' | 'resume' | 'cancel') {
  const licenseRef = licenses().doc(licenseId);
  await firestore.runTransaction(async transaction => {
    const snapshot = await transaction.get(licenseRef);
    if (!snapshot.exists) throw new OrganizationServiceError('Лицензия не найдена.', 404);
    const current = storedLicenseStatus(snapshot.data()?.status);
    if (current === 'cancelled') throw new OrganizationServiceError('Закрытую лицензию нельзя возобновить.', 409);
    let status: LicenseStatus;
    if (action === 'cancel') status = 'cancelled';
    else if (action === 'pause') status = 'paused';
    else status = new Date().getTime() < requiredDate(snapshot.data() || {}, 'startsAt').getTime() ? 'scheduled' : 'active';
    transaction.set(licenseRef, { status, updatedAt: FieldValue.serverTimestamp(), updatedBy: actorUid }, { merge: true });
    audit(transaction, actorUid, `license.${action === 'cancel' ? 'cancelled' : action === 'pause' ? 'paused' : 'resumed'}`, String(snapshot.data()?.organizationId || ''), { licenseId });
  });
}

export async function extendLicense(actorUid: string, licenseId: string, change: { months: number | null; expiresAt: Date | null }) {
  const licenseRef = licenses().doc(licenseId);
  await firestore.runTransaction(async transaction => {
    const snapshot = await transaction.get(licenseRef);
    if (!snapshot.exists) throw new OrganizationServiceError('Лицензия не найдена.', 404);
    const data = snapshot.data() || {};
    const currentExpiry = requiredDate(data, 'expiresAt');
    const startsAt = requiredDate(data, 'startsAt');
    const nextExpiry = change.months ? addCalendarMonthsUtc(currentExpiry, change.months) : change.expiresAt;
    if (!nextExpiry || nextExpiry.getTime() <= startsAt.getTime()) {
      throw new OrganizationServiceError('Новая дата окончания должна быть позже даты начала.');
    }
    transaction.set(licenseRef, {
      expiresAt: Timestamp.fromDate(nextExpiry),
      durationMonths: change.months ? null : data.durationMonths ?? null,
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: actorUid,
    }, { merge: true });
    audit(transaction, actorUid, 'license.extended', String(data.organizationId || ''), {
      licenseId,
      metadata: { previousExpiry: currentExpiry.toISOString(), expiresAt: nextExpiry.toISOString(), months: change.months },
    });
  });
}

export async function generateAccessKeys(actorUid: string, licenseId: string, quantity: number) {
  const licenseRef = licenses().doc(licenseId);
  const generated = Array.from({ length: quantity }, generateOrganizationKey);
  if (new Set(generated.map(item => item.hash)).size !== generated.length) {
    throw new OrganizationServiceError('Не удалось создать уникальные ключи. Повторите запрос.', 500);
  }
  const keyRefs = generated.map(() => accessKeys().doc());
  await firestore.runTransaction(async transaction => {
    const activeSeatsQuery = seats().where('licenseId', '==', licenseId).where('status', '==', 'active');
    const availableKeysQuery = accessKeys().where('licenseId', '==', licenseId).where('status', '==', 'available');
    const [licenseSnapshot, seatSnapshot, keySnapshot] = await Promise.all([
      transaction.get(licenseRef), transaction.get(activeSeatsQuery), transaction.get(availableKeysQuery),
    ]);
    if (!licenseSnapshot.exists) throw new OrganizationServiceError('Лицензия не найдена.', 404);
    const data = licenseSnapshot.data() || {};
    if (storedLicenseStatus(data.status) === 'cancelled') throw new OrganizationServiceError('Для закрытой лицензии нельзя создавать ключи.', 409);
    const capacity = Number(data.seatsTotal) - seatSnapshot.size - keySnapshot.size;
    if (quantity > capacity) {
      throw new OrganizationServiceError(`Можно создать не более ${Math.max(0, capacity)} ключей для свободных мест.`, 409);
    }
    const timestamp = FieldValue.serverTimestamp();
    generated.forEach((item, index) => transaction.create(keyRefs[index], {
      organizationId: String(data.organizationId || ''),
      licenseId,
      keyHash: item.hash,
      keyPrefix: item.prefix,
      keySuffix: item.suffix,
      status: 'available',
      createdAt: timestamp,
      createdBy: actorUid,
      redeemedAt: null,
      redeemedByUid: null,
      revokedAt: null,
      revokedBy: null,
    }));
    bumpLicenseCapacity(transaction, licenseRef);
    audit(transaction, actorUid, 'keys.generated', String(data.organizationId || ''), { licenseId, metadata: { quantity } });
  });
  return generated.map((item, index) => ({ id: keyRefs[index].id, key: item.plaintext }));
}

export async function revokeAccessKey(actorUid: string, keyId: string) {
  const keyRef = accessKeys().doc(keyId);
  await firestore.runTransaction(async transaction => {
    const snapshot = await transaction.get(keyRef);
    if (!snapshot.exists) throw new OrganizationServiceError('Ключ не найден.', 404);
    const data = snapshot.data() || {};
    if (data.status !== 'available') throw new OrganizationServiceError('Можно отозвать только неиспользованный ключ.', 409);
    const licenseRef = licenses().doc(String(data.licenseId || ''));
    const licenseSnapshot = await transaction.get(licenseRef);
    if (!licenseSnapshot.exists) throw new OrganizationServiceError('Лицензия не найдена.', 404);
    transaction.set(keyRef, { status: 'revoked', revokedAt: FieldValue.serverTimestamp(), revokedBy: actorUid }, { merge: true });
    bumpLicenseCapacity(transaction, licenseRef);
    audit(transaction, actorUid, 'key.revoked', String(data.organizationId || ''), { licenseId: String(data.licenseId || ''), metadata: { keyId } });
  });
}

async function effectiveSeatConflicts(transaction: Transaction, uid: string, now: Date): Promise<DocumentReference[]> {
  const seatSnapshot = await transaction.get(seats().where('uid', '==', uid).where('status', '==', 'active'));
  if (seatSnapshot.empty) return [];
  const licenseSnapshots = await Promise.all(seatSnapshot.docs.map(document => transaction.get(licenses().doc(String(document.data().licenseId || '')))));
  const organizationSnapshots = await Promise.all(licenseSnapshots.map(document => transaction.get(organizations().doc(String(document.data()?.organizationId || '')))));
  const stale: DocumentReference[] = [];
  for (let index = 0; index < seatSnapshot.docs.length; index += 1) {
    const license = licenseSnapshots[index];
    const organization = organizationSnapshots[index];
    if (license.exists && organization.exists) {
      const data = license.data() || {};
      if (licenseGrantsAccess(
        storedOrganizationStatus(organization.data()?.status),
        storedLicenseStatus(data.status),
        requiredDate(data, 'startsAt'),
        requiredDate(data, 'expiresAt'),
        now,
      )) throw new OrganizationServiceError('У пользователя уже есть действующее место организации.', 409);
    }
    stale.push(seatSnapshot.docs[index].ref);
  }
  return stale;
}

async function assignSeatTransaction(
  transaction: Transaction,
  input: { uid: string; licenseId: string; sourceKeyId: string | null; actorUid: string; assignedBy: string; now: Date },
) {
  const licenseRef = licenses().doc(input.licenseId);
  const licenseSnapshot = await transaction.get(licenseRef);
  if (!licenseSnapshot.exists) throw new OrganizationServiceError('Лицензия не найдена.', 404);
  const licenseData = licenseSnapshot.data() || {};
  const organizationRef = organizations().doc(String(licenseData.organizationId || ''));
  const userGuardRef = seatGuards().doc(userSeatGuardId(input.uid));
  const activeSeatsQuery = seats().where('licenseId', '==', input.licenseId).where('status', '==', 'active');
  const [organizationSnapshot, activeSeatSnapshot, _userGuardSnapshot, staleSeats] = await Promise.all([
    transaction.get(organizationRef),
    transaction.get(activeSeatsQuery),
    transaction.get(userGuardRef),
    effectiveSeatConflicts(transaction, input.uid, input.now),
  ]);
  if (!organizationSnapshot.exists) throw new OrganizationServiceError('Организация не найдена.', 404);
  if (!licenseGrantsAccess(
    storedOrganizationStatus(organizationSnapshot.data()?.status),
    storedLicenseStatus(licenseData.status),
    requiredDate(licenseData, 'startsAt'),
    requiredDate(licenseData, 'expiresAt'),
    input.now,
  )) throw new OrganizationServiceError('Лицензия сейчас не даёт доступ.', 409);
  if (activeSeatSnapshot.size >= Number(licenseData.seatsTotal)) {
    throw new OrganizationServiceError('В лицензии нет свободных мест.', 409);
  }
  const timestamp = FieldValue.serverTimestamp();
  for (const stale of staleSeats) transaction.set(stale, { status: 'expired', releasedAt: timestamp, releasedBy: 'system' }, { merge: true });
  const seatRef = seats().doc();
  transaction.create(seatRef, {
    organizationId: organizationRef.id,
    licenseId: input.licenseId,
    uid: input.uid,
    status: 'active',
    sourceKeyId: input.sourceKeyId,
    assignedAt: timestamp,
    assignedBy: input.assignedBy,
    releasedAt: null,
    releasedBy: null,
  });
  transaction.set(userGuardRef, {
    uidHash: userGuardRef.id,
    capacityRevision: FieldValue.increment(1),
    updatedAt: timestamp,
  }, { merge: true });
  bumpLicenseCapacity(transaction, licenseRef);
  audit(transaction, input.actorUid, 'seat.assigned', organizationRef.id, {
    licenseId: input.licenseId,
    targetUid: input.uid,
    metadata: { seatId: seatRef.id, source: input.sourceKeyId ? 'redeem' : 'admin' },
  });
  return { seatRef, organizationName: String(organizationSnapshot.data()?.name || ''), expiresAt: requiredDate(licenseData, 'expiresAt') };
}

export async function assignExistingUser(actorUid: string, licenseId: string, user: { uid: string | null; email: string | null }) {
  let uid = user.uid;
  if (!uid && user.email) uid = (await adminAuth.getUserByEmail(user.email)).uid;
  if (!uid) throw new OrganizationServiceError('Пользователь не найден.', 404);
  await adminAuth.getUser(uid);
  await firestore.runTransaction(transaction => assignSeatTransaction(transaction, { uid: uid!, licenseId, sourceKeyId: null, actorUid, assignedBy: actorUid, now: new Date() }));
}

export async function releaseSeat(actorUid: string, seatId: string, status: 'released' | 'revoked' = 'released') {
  const seatRef = seats().doc(seatId);
  await firestore.runTransaction(async transaction => {
    const snapshot = await transaction.get(seatRef);
    if (!snapshot.exists) throw new OrganizationServiceError('Место не найдено.', 404);
    const data = snapshot.data() || {};
    if (data.status !== 'active') throw new OrganizationServiceError('Это место уже не активно.', 409);
    const licenseRef = licenses().doc(String(data.licenseId || ''));
    const uid = typeof data.uid === 'string' ? data.uid : '';
    const userGuardRef = uid ? seatGuards().doc(userSeatGuardId(uid)) : null;
    const [licenseSnapshot] = await Promise.all([
      transaction.get(licenseRef),
      ...(userGuardRef ? [transaction.get(userGuardRef)] : []),
    ]);
    if (!licenseSnapshot.exists) throw new OrganizationServiceError('Лицензия не найдена.', 404);
    transaction.set(seatRef, { status, releasedAt: FieldValue.serverTimestamp(), releasedBy: actorUid }, { merge: true });
    if (userGuardRef) {
      transaction.set(userGuardRef, {
        uidHash: userGuardRef.id,
        capacityRevision: FieldValue.increment(1),
        updatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
    }
    bumpLicenseCapacity(transaction, licenseRef);
    audit(transaction, actorUid, status === 'revoked' ? 'seat.revoked' : 'seat.released', String(data.organizationId || ''), {
      licenseId: String(data.licenseId || ''), targetUid: typeof data.uid === 'string' ? data.uid : undefined, metadata: { seatId },
    });
  });
}

async function enforceRedeemRateLimit(uid: string, now: Date): Promise<void> {
  const id = createHash('sha256').update(uid, 'utf8').digest('hex');
  const ref = redeemLimits().doc(id);
  await firestore.runTransaction(async transaction => {
    const snapshot = await transaction.get(ref);
    const data = snapshot.data() || {};
    const started = dateValue(data.windowStartedAt);
    const withinWindow = started && now.getTime() - started.getTime() < 60_000;
    const count = withinWindow ? Number(data.count) || 0 : 0;
    if (count >= 10) throw new OrganizationServiceError('Слишком много попыток. Повторите позже.', 429);
    transaction.set(ref, {
      windowStartedAt: Timestamp.fromDate(withinWindow ? started! : now),
      count: count + 1,
      updatedAt: FieldValue.serverTimestamp(),
    });
  });
}

export async function redeemOrganizationKey(uid: string, rawKey: unknown, now = new Date()) {
  await enforceRedeemRateLimit(uid, now);
  const normalized = normalizeOrganizationKey(rawKey);
  if (!normalized) throw new OrganizationServiceError('Invalid or unavailable organization access code.', 400);
  const match = await accessKeys().where('keyHash', '==', hashOrganizationKey(normalized)).limit(1).get();
  if (match.empty) throw new OrganizationServiceError('Invalid or unavailable organization access code.', 400);
  const keyRef = match.docs[0].ref;
  try {
    const result = await firestore.runTransaction(async transaction => {
      const keySnapshot = await transaction.get(keyRef);
      const data = keySnapshot.data() || {};
      if (!keySnapshot.exists || data.status !== 'available') {
        throw new OrganizationServiceError('Invalid or unavailable organization access code.', 400);
      }
      const assigned = await assignSeatTransaction(transaction, {
        uid,
        licenseId: String(data.licenseId || ''),
        sourceKeyId: keyRef.id,
        actorUid: uid,
        assignedBy: 'redeem',
        now,
      });
      transaction.set(keyRef, { status: 'redeemed', redeemedAt: FieldValue.serverTimestamp(), redeemedByUid: uid }, { merge: true });
      audit(transaction, uid, 'key.redeemed', String(data.organizationId || ''), {
        licenseId: String(data.licenseId || ''), targetUid: uid, metadata: { keyId: keyRef.id },
      });
      return { organizationName: assigned.organizationName, expiresAt: assigned.expiresAt };
    });
    return { organizationName: result.organizationName, accessUntil: result.expiresAt.toISOString() };
  } catch (error) {
    if (error instanceof OrganizationServiceError && error.status !== 500) {
      throw new OrganizationServiceError('Invalid or unavailable organization access code.', error.status === 429 ? 429 : 400);
    }
    throw error;
  }
}

export async function resolveOrganizationAccess(uid: string, now = new Date()): Promise<OrganizationAccessSummary | null> {
  const seatSnapshot = await seats().where('uid', '==', uid).where('status', '==', 'active').get();
  if (seatSnapshot.empty) return null;
  const candidates: OrganizationAccessSummary[] = [];
  for (const seat of seatSnapshot.docs) {
    const licenseSnapshot = await licenses().doc(String(seat.data().licenseId || '')).get();
    if (!licenseSnapshot.exists) continue;
    const data = licenseSnapshot.data() || {};
    const organizationSnapshot = await organizations().doc(String(data.organizationId || '')).get();
    if (!organizationSnapshot.exists) continue;
    const startsAt = requiredDate(data, 'startsAt');
    const expiresAt = requiredDate(data, 'expiresAt');
    const organizationStatus = storedOrganizationStatus(organizationSnapshot.data()?.status);
    candidates.push({
      status: organizationStatus === 'inactive'
        ? 'inactive'
        : effectiveLicenseStatus(storedLicenseStatus(data.status), startsAt, expiresAt, now),
      organizationName: String(organizationSnapshot.data()?.name || ''),
      accessUntil: expiresAt.toISOString(),
    });
  }
  return candidates.sort((a, b) => {
    if (a.status === 'active' && b.status !== 'active') return -1;
    if (b.status === 'active' && a.status !== 'active') return 1;
    return b.accessUntil.localeCompare(a.accessUntil);
  })[0] ?? null;
}

export async function organizationGrantsAccess(uid: string, now = new Date()): Promise<{ granted: boolean; organization: OrganizationAccessSummary | null }> {
  const organization = await resolveOrganizationAccess(uid, now);
  return { granted: organization?.status === 'active', organization };
}

export async function licenseForAdmin(licenseId: string, now = new Date()) {
  const license = await requireLicense(licenseId);
  const [seatSnapshot, keySnapshot] = await Promise.all([
    seats().where('licenseId', '==', licenseId).where('status', '==', 'active').get(),
    accessKeys().where('licenseId', '==', licenseId).where('status', '==', 'available').get(),
  ]);
  return serializeLicense(license.id, license.data() || {}, now, activeSeatCount(seatSnapshot.docs), keySnapshot.size);
}
