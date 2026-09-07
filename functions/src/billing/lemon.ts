const LEMON_API = 'https://api.lemonsqueezy.com/v1';

export interface LemonBaseConfig {
  apiKey: string;
  storeId: string;
  appUrl: string;
  testMode: boolean;
}

export interface LemonConfig extends LemonBaseConfig {
  variantId: string;
}

interface LemonErrorDocument {
  errors?: Array<{ status?: unknown; title?: unknown; detail?: unknown }>;
}

function safeProviderText(value: unknown, fallback: string): string {
  if (typeof value !== 'string') return fallback;
  const text = value.replace(/\s+/g, ' ').trim();
  return text ? text.slice(0, 300) : fallback;
}

export class LemonApiError extends Error {
  constructor(
    readonly status: number,
    readonly title: string,
    readonly detail: string,
  ) {
    super(`${title}: ${detail}`);
    this.name = 'LemonApiError';
  }
}

export class LemonConfigurationError extends Error {
  constructor(readonly parameter: string, message: string) {
    super(message);
    this.name = 'LemonConfigurationError';
  }
}

function resourceId(value: unknown, parameter: string): string {
  const id = typeof value === 'string' ? value.trim() : '';
  if (!/^[1-9]\d+$/.test(id) || id === '1') {
    throw new LemonConfigurationError(parameter, `${parameter} must be a configured Lemon resource ID`);
  }
  return id;
}

export function normalizeLemonBaseConfig(config: LemonBaseConfig): LemonBaseConfig {
  if (typeof config.testMode !== 'boolean') {
    throw new LemonConfigurationError('LEMONSQUEEZY_TEST_MODE', 'LEMONSQUEEZY_TEST_MODE must be boolean');
  }
  const apiKey = typeof config.apiKey === 'string' ? config.apiKey.trim() : '';
  if (!apiKey) throw new LemonConfigurationError('LEMONSQUEEZY_API_KEY', 'LEMONSQUEEZY_API_KEY is required');
  const storeId = resourceId(config.storeId, 'LEMONSQUEEZY_STORE_ID');
  let appUrl: URL;
  try { appUrl = new URL(config.appUrl.trim()); }
  catch { throw new LemonConfigurationError('APP_URL', 'APP_URL must be an absolute URL'); }
  if (!['http:', 'https:'].includes(appUrl.protocol)) {
    throw new LemonConfigurationError('APP_URL', 'APP_URL must use http or https');
  }
  if (!config.testMode && appUrl.protocol !== 'https:') {
    throw new LemonConfigurationError('APP_URL', 'Production APP_URL must use https');
  }
  return {
    ...config,
    apiKey,
    storeId,
    appUrl: appUrl.toString().replace(/\/+$/, ''),
  };
}

export function normalizeLemonConfig(config: LemonConfig): LemonConfig {
  const base = normalizeLemonBaseConfig(config);
  const variantId = resourceId(config.variantId, 'LEMONSQUEEZY_VARIANT_ID');
  if (base.storeId === variantId) {
    throw new LemonConfigurationError('LEMONSQUEEZY_VARIANT_ID', 'Store and variant IDs must be different');
  }
  return { ...base, variantId };
}

async function lemonRequest<T>(
  config: LemonBaseConfig,
  path: string,
  init: RequestInit,
  fetchImpl: typeof fetch = fetch,
): Promise<T> {
  const normalized = normalizeLemonBaseConfig(config);
  const response = await fetchImpl(`${LEMON_API}${path}`, {
    ...init,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${normalized.apiKey}`,
      ...(init.headers || {}),
    },
  });
  const body = await response.json().catch(() => null) as T | LemonErrorDocument | null;
  if (!response.ok) {
    const providerError = body && typeof body === 'object' && 'errors' in body ? body.errors?.[0] : undefined;
    throw new LemonApiError(
      response.status,
      safeProviderText(providerError?.title, 'Lemon Squeezy API error'),
      safeProviderText(providerError?.detail, `Request failed with status ${response.status}`),
    );
  }
  return body as T;
}

export function buildCheckoutPayload(config: LemonConfig, uid: string, email: string) {
  const normalized = normalizeLemonConfig(config);
  return {
    data: {
      type: 'checkouts',
      attributes: {
        checkout_data: { email, custom: { firebase_uid: uid } },
        checkout_options: { skip_trial: true },
        product_options: { redirect_url: `${normalized.appUrl}/?payment=success` },
        test_mode: normalized.testMode,
      },
      relationships: {
        store: { data: { type: 'stores', id: normalized.storeId } },
        variant: { data: { type: 'variants', id: normalized.variantId } },
      },
    },
  };
}

export async function createCheckout(
  config: LemonConfig,
  uid: string,
  email: string,
  fetchImpl: typeof fetch = fetch,
): Promise<string> {
  const normalized = normalizeLemonConfig(config);
  const body = buildCheckoutPayload(normalized, uid, email);
  const result = await lemonRequest<{ data: { attributes: { url: string } } }>(config, '/checkouts', {
    method: 'POST',
    body: JSON.stringify(body),
  }, fetchImpl);
  return result.data.attributes.url;
}

export async function retrieveSubscription(config: LemonBaseConfig, subscriptionId: string, fetchImpl: typeof fetch = fetch): Promise<Record<string, unknown>> {
  const result = await lemonRequest<{ data: Record<string, unknown> }>(config, `/subscriptions/${encodeURIComponent(subscriptionId)}`, {
    method: 'GET',
  }, fetchImpl);
  return result.data;
}

export async function getCustomerPortalUrl(config: LemonBaseConfig, subscriptionId: string, allowedVariantIds: readonly string[], fetchImpl: typeof fetch = fetch): Promise<string> {
  const normalized = normalizeLemonBaseConfig(config);
  const data = await retrieveSubscription(normalized, subscriptionId, fetchImpl);
  const attributes = data.attributes as { store_id?: unknown; variant_id?: unknown; test_mode?: unknown; urls?: { customer_portal?: unknown } } | undefined;
  if (String(attributes?.store_id) !== normalized.storeId || !allowedVariantIds.includes(String(attributes?.variant_id))
    || attributes?.test_mode !== normalized.testMode) {
    throw new Error('Subscription does not match the configured Lemon environment');
  }
  const url = attributes?.urls?.customer_portal;
  if (typeof url !== 'string' || !url.startsWith('https://')) throw new Error('Customer portal URL is unavailable');
  return url;
}
