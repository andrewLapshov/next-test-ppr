import { graphql } from '../../generated';

export const FleaQuery = graphql(`
  query Flea($lang: LanguageCode) {
    fleaMarket(lang: $lang) {
      name
      normalizedName
    }
  }
`);
