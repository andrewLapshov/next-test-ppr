import { cache } from 'react';

import { cookies } from 'next/headers';

import { createServerClient as sbCreateServerClient } from '@supabase/ssr';

import 'server-only';

export const createServerClient = async () => {
  const cookieStore = await cookies();

  return sbCreateServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, options, value }) => cookieStore.set(name, value, options));
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};

export const getUser = cache(async () => {
  const supabase = await createServerClient();

  return supabase.auth.getUser();
});

export const getSession = cache(async () => {
  const supabase = await createServerClient();

  return supabase.auth.getSession();
});
