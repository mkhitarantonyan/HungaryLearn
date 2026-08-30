import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { normalizeLemonStatus, type Entitlement, type SubscriptionStatus } from '../domain/entitlements.js';

export const SUPPORTED_LEMON_EVENTS = new Set([
  'subscription_created',
  'subscription_updated',
  'subscription_cancelled',
  'subscription_resumed',
  'subscription_expired',
  'subscription_paused',
  'subscription_unpaused',
  'subscription_payment_success',
  'subscription_payment_failed',
  'subscription_payment_recovered',
  'order_refunded',
]);

export interface LemonWebhookPayload {
  meta?: { event_name?: unknown; custom_data?: { firebase_uid?: unknown } };
  data?: { id?: unknown; type?: unknown; attributes?: Record<string, unknown> };
}

export interface WebhookUpdate {
  uid: string;
  eventName: string;
  objectId: string;
  subscriptionId: string | null;
  entitlement: Entitlement;
  subscription: Record<string, unknown> | null;
}

export function webhookHash(rawBody: Buffer): string {
  return createHash('sha256').update(rawBody).digest('hex');
}

export function verifyLemonSignature(rawBody: Buffer, signature: string | undefined, secret: string): boolean {
  if (!signature || !/^[a-f0-9]{64}$/i.test(signature)) return false;
  const expected = Buffer.from(createHmac('sha256', secret).update(rawBody).digest('hex'), 'utf8');
  const actual = Buffer.from(signature.toLowerCase(), 'utf8');
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

function stringValue(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function idValue(value: unknown): string | null {
  if (typeof value === 'number' && Number.isSafeInteger(value)) return String(value);
  return stringValue(value);
}

function dateValue(value: unknown): string | null {
  const text = stringValue(value);
  if (!text || !Number.isFinite(Date.parse(text))) return null;
  return new Date(text).toISOString();
}

function boolValue(value: unknown): boolean {
  return value === true;
}

export function parseWebhook(rawBody: Buffer): LemonWebhookPayload {
  const parsed = JSON.parse(rawBody.toString('utf8')) as unknown;
  if (!parsed || typeof parsed !== 'object') throw new Error('Webhook payload must be an object');
  return parsed as LemonWebhookPayload;
}

export function getWebhookIdentity(payload: LemonWebhookPayload): { eventName: string; uid: string; objectId: string } {
  const eventName = stringValue(payload.meta?.event_name);
  const uid = stringValue(payload.meta?.custom_data?.firebase_uid);
  const objectId = idValue(payload.data?.id);
  if (!eventName || !SUPPORTED_LEMON_EVENTS.has(eventName)) throw new Error('Unsupported event');
  if (!uid || uid.length > 128) throw new Error('Missing Firebase UID');
  if (!objectId) throw new Error('Missing object ID');
  return { eventName, uid, objectId };
}

function relationId(payload: LemonWebhookPayload, name: string): string | null {
  const data = payload.data as Record<string, unknown> | undefined;
  const relationships = data?.relationships as Record<string, { data?: { id?: unknown } }> | undefined;
  return idValue(relationships?.[name]?.data?.id);
}

function subscriptionIdFrom(payload: LemonWebhookPayload, attributes: Record<string, unknown>): string | null {
  if (payload.data?.type === 'subscriptions') return idValue(payload.data.id);
  return idValue(attributes.subscription_id) || relationId(payload, 'subscription');
}

export function buildWebhookUpdate(
  payload: LemonWebhookPayload,
  expectedStoreId: string,
  expectedVariantId: string,
  hydratedSubscription?: Record<string, unknown>
): WebhookUpdate | null {
  const { eventName, uid, objectId } = getWebhookIdentity(payload);
  const originalAttributes = payload.data?.attributes || {};
  const hydratedAttributes = hydratedSubscription?.attributes as Record<string, unknown> | undefined;
  const attributes = hydratedAttributes || originalAttributes;

  const storeId = idValue(attributes.store_id) || relationId(payload, 'store');
  const variantId = idValue(attributes.variant_id)
    || idValue((attributes.first_order_item as Record<string, unknown> | undefined)?.variant_id)
    || relationId(payload, 'variant');
  if (storeId !== expectedStoreId || variantId !== expectedVariantId) return null;

  const testMode = boolValue(attributes.test_mode);
  const subscriptionId = subscriptionIdFrom(payload, attributes)
    || (hydratedSubscription?.type === 'subscriptions' ? idValue(hydratedSubscription.id) : null);
  const customerId = idValue(attributes.customer_id) || relationId(payload, 'customer');
  const orderId = idValue(attributes.order_id) || (payload.data?.type === 'orders' ? objectId : null);
  const cancelled = boolValue(attributes.cancelled) || eventName === 'subscription_cancelled';

  let rawStatus = stringValue(attributes.status) || 'unpaid';
  if (eventName === 'subscription_expired' || eventName === 'order_refunded') rawStatus = 'expired';
  if (eventName === 'subscription_paused') rawStatus = 'paused';
  const status: SubscriptionStatus = normalizeLemonStatus(rawStatus, cancelled);

  const renewsAt = dateValue(attributes.renews_at);
  const endsAt = dateValue(attributes.ends_at);
  const accessUntil = status === 'active' ? renewsAt : status === 'cancelled' ? endsAt : null;
  const entitlement: Entitlement = {
    subscriptionStatus: status,
    accessUntil,
    provider: 'lemonsqueezy',
    lemonCustomerId: customerId,
    lemonSubscriptionId: subscriptionId,
    lemonOrderId: orderId,
    lemonVariantId: variantId,
    cancelAtPeriodEnd: cancelled,
    rawProviderStatus: rawStatus,
    testMode,
  };
  const subscription = subscriptionId ? {
    firebaseUid: uid,
    provider: 'lemonsqueezy',
    status,
    rawProviderStatus: rawStatus,
    renewsAt,
    endsAt,
    cancelled,
    customerId,
    orderId,
    variantId,
    testMode,
  } : null;
  return { uid, eventName, objectId, subscriptionId, entitlement, subscription };
}
