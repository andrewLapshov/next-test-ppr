import { graphql } from '../../generated';

export const TradersQuery = graphql(`
  query Traders($lang: LanguageCode) {
    traders(lang: $lang) {
      id
      imageLink
      name
      normalizedName
      levels {
        id
        level
        imageLink
      }
    }
  }
`);
