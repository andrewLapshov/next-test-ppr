import { graphql } from '../../generated';

export const HideoutQuery = graphql(`
  query Hideout($lang: LanguageCode) {
    hideoutStations(lang: $lang) {
      imageLink
      normalizedName
      name
    }
  }
`);
