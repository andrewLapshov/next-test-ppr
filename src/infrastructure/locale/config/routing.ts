import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { defaultLocale, locales } from '../constants';

export const routing = defineRouting({
  defaultLocale,
  localePrefix: 'never',
  locales,
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
