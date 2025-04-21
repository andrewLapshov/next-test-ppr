import { Locale, LocalesOptions } from '../types';

export const localesMap: LocalesOptions = {
  // cs: { label: 'CS', value: 'cs' },
  // de: { label: 'DE', value: 'de' },
  en: { label: 'EN', value: 'en' },
  // es: { label: 'ES', value: 'es' },
  // fr: { label: 'FR', value: 'fr' },
  // hu: { label: 'HU', value: 'hu' },
  // it: { label: 'IT', value: 'it' },
  // ja: { label: 'JA', value: 'ja' },
  // ko: { label: 'KO', value: 'ko' },
  // pl: { label: 'PL', value: 'pl' },
  // pt: { label: 'PT', value: 'pt' },
  // ro: { label: 'RO', value: 'ro' },
  ru: { label: 'RU', value: 'ru' },
  // sk: { label: 'SK', value: 'sk' },
  // tr: { label: 'TR', value: 'tr' },
  // zh: { label: 'ZH', value: 'zh' },
} as const;

export const locales = Object.keys(localesMap) as Locale[];

export const localesOptions = Object.values(localesMap);

export const defaultLocale: Locale = 'en';
