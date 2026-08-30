import { getFirebaseAuth } from './firebase';

export class ApiRequestError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
    this.name = 'ApiRequestError';
  }
}

export async function apiFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const user = getFirebaseAuth().currentUser;
  const headers = new Headers(options.headers);
  if (user) headers.set('Authorization', `Bearer ${await user.getIdToken()}`);
  const controller = options.signal ? null : new AbortController();
  const timeout = controller ? window.setTimeout(() => controller.abort(), 12_000) : null;
  try {
    return await fetch(url, {
      ...options,
      headers,
      credentials: 'same-origin',
      signal: options.signal || controller?.signal,
    });
  } finally {
    if (timeout !== null) window.clearTimeout(timeout);
  }
}

export async function apiJson<T>(url: string, options: RequestInit = {}): Promise<T> {
  let response: Response;
  try { response = await apiFetch(url, options); }
  catch { throw new ApiRequestError('Не удалось соединиться с сервером.', 0); }
  const body = await response.json().catch(() => null) as ({ message?: unknown } & T) | null;
  if (!response.ok) {
    const message = typeof body?.message === 'string' ? body.message : `Ошибка сервера (${response.status})`;
    throw new ApiRequestError(message, response.status);
  }
  return body as T;
}
