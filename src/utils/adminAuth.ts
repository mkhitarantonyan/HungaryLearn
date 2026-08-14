import bcrypt from 'bcryptjs';

export interface AdminCredentialOptions {
  username: string;
  password: string;
  adminUsername: string;
  adminPassword?: string;
  adminPasswordHash?: string;
}

export async function verifyAdminCredentials({
  username,
  password,
  adminUsername,
  adminPassword = '',
  adminPasswordHash = '',
}: AdminCredentialOptions): Promise<boolean> {
  if (typeof username !== 'string' || typeof password !== 'string') {
    return false;
  }

  if (!username.trim() || !password) {
    return false;
  }

  if (username.trim().toLowerCase() !== adminUsername.trim().toLowerCase()) {
    return false;
  }

  const normalizedHash = adminPasswordHash?.trim();

  // If a password hash is configured, it is the ONLY accepted credential.
  // Never fall back to plaintext comparison — otherwise a leaked plaintext
  // ADMIN_PASSWORD remains a valid login even when a hash is in place.
  if (normalizedHash) {
    try {
      return await bcrypt.compare(password, normalizedHash);
    } catch {
      return false;
    }
  }

  if (process.env.NODE_ENV === 'production') {
    return false;
  }

  // Plaintext fallback only in non-production when no hash is configured.
  const normalizedPassword = adminPassword?.trim();
  return !!normalizedPassword && password === normalizedPassword;
}
