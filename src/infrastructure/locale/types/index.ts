export type Locale = "en" | "ru"; // TODO после добавления всех локалей убрать хардкод
// export type Locale = introspection_types['LanguageCode']['enumValues'];
type LocaleOptions<T extends Locale> = { label: Uppercase<T>; value: T };

export type LocalesOptions = { [L in Locale]: LocaleOptions<L> };
