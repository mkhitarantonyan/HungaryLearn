export interface SessionData {
  token: string;
  createdAt: number;
  expiresAt: number;
}

export function isValidAdminSession(
  token: string | undefined,
  sessions: Map<string, SessionData>
): boolean {
  if (!token) return false;
  const session = sessions.get(token);
  if (!session) return false;
  if (Date.now() > session.expiresAt) {
    sessions.delete(token);
    return false;
  }
  return true;
}

export function isValidUserSession(
  token: string | undefined,
  sessions: Map<string, { token: string; userId: string; createdAt: number; expiresAt: number }>
): boolean {
  if (!token) return false;
  const session = sessions.get(token);
  if (!session) return false;
  if (Date.now() > session.expiresAt) {
    sessions.delete(token);
    return false;
  }
  return true;
}