const LEMON_API = 'https://api.lemonsqueezy.com/v1';

export interface LemonConfig {
  apiKey: string;
  storeId: string;
  variantId: string;
  appUrl: string;
  testMode: boolean;
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

export function normalizeLemonConfig(config: LemonConfig): LemonConfig {
  if (typeof config.testMode !== 'boolean') {
    throw new LemonConfigurationError('LEMONSQUEEZY_TEST_MODE', 'LEMONSQUEEZY_TEST_MODE must be boolean');
  }
  const storeId = resourceId(config.storeId, 'LEMONSQUEEZY_STORE_ID');
  const variantId = resourceId(config.variantId, 'LEMONSQUEEZY_VARIANT_ID');
  if (storeId === variantId) {
    throw new LemonConfigurationError('LEMONSQUEEZY_VARIANT_ID', 'Store and variant IDs must be different');
  }
  return {
    ...config,
    storeId,
    variantId,
    appUrl: config.appUrl.trim().replace(/\/+$/, ''),
  };
}

async function lemonRequest<T>(
  config: LemonConfig,
  path: string,
  init: RequestInit,
  fetchImpl: typeof fetch = fetch,
): Promise<T> {
  const response = await fetchImpl(`${LEMON_API}${path}`, {
    ...init,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${config.apiKey}`,
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

export async function retrieveSubscription(config: LemonConfig, subscriptionId: string): Promise<Record<string, unknown>> {
  const result = await lemonRequest<{ data: Record<string, unknown> }>(config, `/subscriptions/${encodeURIComponent(subscriptionId)}`, {
    method: 'GET',
  });
  return result.data;
}

export async function getCustomerPortalUrl(config: LemonConfig, subscriptionId: string): Promise<string> {
  const data = await retrieveSubscription(config, subscriptionId);
  const attributes = data.attributes as { store_id?: unknown; variant_id?: unknown; test_mode?: unknown; urls?: { customer_portal?: unknown } } | undefined;
  if (String(attributes?.store_id) !== config.storeId || String(attributes?.variant_id) !== config.variantId
    || Boolean(attributes?.test_mode) !== config.testMode) {
    throw new Error('Subscription does not match the configured Lemon environment');
  }
  const url = attributes?.urls?.customer_portal;
  if (typeof url !== 'string' || !url.startsWith('https://')) throw new Error('Customer portal URL is unavailable');
  return url;
}
