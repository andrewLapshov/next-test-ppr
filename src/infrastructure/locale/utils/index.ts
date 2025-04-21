// Для роутинга без префикса

// 'use server';
//
// import { cookies, headers } from 'next/headers';
//
// import { match } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';
//
// import { defaultLocale, locales } from '../constants';
// import { Locale } from '../types';
//
// const NEXT_LOCALE_COOKIE = 'NEXT_LOCALE';
// const ACCEPT_LANGUAGE_COOKIE = 'accept-language';
//
// export const getUserLocale = async () => {
//   const nextLocale = (await cookies()).get(NEXT_LOCALE_COOKIE)?.value;
//
//   if (nextLocale) return nextLocale;
//
//   const headersList = await headers();
//   const headerLocale = headersList.get(ACCEPT_LANGUAGE_COOKIE);
//   const languages = new Negotiator({
//     headers: { [ACCEPT_LANGUAGE_COOKIE]: headerLocale || defaultLocale },
//   }).languages();
//
//   return match(languages, locales, defaultLocale);
// };
//
// export const setUserLocale = async (locale: Locale) => {
//   (await cookies()).set(NEXT_LOCALE_COOKIE, locale);
// };
