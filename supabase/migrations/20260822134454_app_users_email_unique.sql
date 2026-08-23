-- Apply manually after checking for duplicate normalized e-mail addresses.
-- This index makes the application's trim/lowercase uniqueness rule safe
-- against concurrent registrations at the database boundary.
create unique index if not exists app_users_email_lower_unique_idx
  on public.app_users (lower(email));
