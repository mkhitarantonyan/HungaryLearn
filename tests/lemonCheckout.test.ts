import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createCheckout,
  LemonApiError,
  LemonConfigurationError,
  normalizeLemonConfig,
  type LemonConfig,
} from '../functions/src/billing/lemon.ts';

const config: LemonConfig = {
  apiKey: 'test-only-api-key',
  storeId: '461197',
  variantId: '2064547',
  appUrl: 'https://hungarylearn.example/',
  testMode: true,
};

test('checkout sends the exact Lemon JSON:API relationships, string IDs and boolean test mode', async () => {
  let requestUrl = '';
  let requestInit: RequestInit | undefined;
  const fetchStub = async (input: string | URL | Request, init?: RequestInit): Promise<Response> => {
    requestUrl = String(input);
    requestInit = init;
    return new Response(JSON.stringify({ data: { attributes: { url: 'https://app.lemonsqueezy.com/checkout/test' } } }), {
      status: 201,
      headers: { 'Content-Type': 'application/vnd.api+json' },
    });
  };

  const url = await createCheckout(config, 'firebase-user-1', 'student@example.com', fetchStub);

  assert.equal(url, 'https://app.lemonsqueezy.com/checkout/test');
  assert.equal(requestUrl, 'https://api.lemonsqueezy.com/v1/checkouts');
  assert.equal(requestInit?.method, 'POST');
  const headers = new Headers(requestInit?.headers);
  assert.equal(headers.get('accept'), 'application/vnd.api+json');
  assert.equal(headers.get('content-type'), 'application/vnd.api+json');
  assert.equal(headers.get('authorization'), 'Bearer test-only-api-key');

  const payload = JSON.parse(String(requestInit?.body)) as Record<string, unknown>;
  assert.deepEqual(payload, {
    data: {
      type: 'checkouts',
      attributes: {
        checkout_data: { email: 'student@example.com', custom: { firebase_uid: 'firebase-user-1' } },
        checkout_options: { skip_trial: true },
        product_options: { redirect_url: 'https://hungarylearn.example/?payment=success' },
        test_mode: true,
      },
      relationships: {
        store: { data: { type: 'stores', id: '461197' } },
        variant: { data: { type: 'variants', id: '2064547' } },
      },
    },
  });
  const data = payload.data as { attributes: { test_mode: unknown }; relationships: Record<string, { data: { id: unknown } }> };
  assert.equal(typeof data.relationships.store.data.id, 'string');
  assert.equal(typeof data.relationships.variant.data.id, 'string');
  assert.equal(typeof data.attributes.test_mode, 'boolean');
});

test('checkout config trims IDs and rejects stale/default/missing resource IDs', () => {
  const normalized = normalizeLemonConfig({ ...config, storeId: ' 461197 ', variantId: ' 2064547 ' });
  assert.equal(normalized.storeId, '461197');
  assert.equal(normalized.variantId, '2064547');
  assert.equal(normalized.testMode, true);

  for (const invalid of ['1', '', 'undefined', 'null']) {
    assert.throws(
      () => normalizeLemonConfig({ ...config, variantId: invalid }),
      (error) => error instanceof LemonConfigurationError && error.parameter === 'LEMONSQUEEZY_VARIANT_ID',
    );
  }
  assert.throws(
    () => normalizeLemonConfig({ ...config, storeId: undefined as unknown as string }),
    LemonConfigurationError,
  );
});

test('Lemon API failures preserve safe status, title and detail without request secrets', async () => {
  const fetchStub = async (): Promise<Response> => new Response(JSON.stringify({
    errors: [{ status: '404', title: 'Not Found', detail: 'The related resource does not exist.' }],
  }), { status: 404, headers: { 'Content-Type': 'application/vnd.api+json' } });

  await assert.rejects(
    () => createCheckout(config, 'firebase-user-1', 'student@example.com', fetchStub),
    (error) => {
      assert.ok(error instanceof LemonApiError);
      assert.equal(error.status, 404);
      assert.equal(error.title, 'Not Found');
      assert.equal(error.detail, 'The related resource does not exist.');
      assert.doesNotMatch(error.message, /test-only-api-key|student@example\.com|firebase-user-1/);
      return true;
    },
  );
});
