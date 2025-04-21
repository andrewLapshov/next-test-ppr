import { graphql } from '../../generated';

export const hideoutQuery = graphql(`
  query hideoutQuery($lang: LanguageCode) {
    hideoutStations(lang: $lang) {
      id
      imageLink
      name
      normalizedName
      levels {
        id
        level
        constructionTime
        itemRequirements {
          count
          item {
            ...BaseHideoutItemFields
          }
        }
        stationLevelRequirements {
          id
          level
          station {
            name
            imageLink
            normalizedName
          }
        }
        skillRequirements {
          name
          level
        }
        description
        traderRequirements {
          id
          requirementType
          compareMethod
          value
          trader {
            name
            imageLink
          }
        }
        bonuses {
          name
          passive
          production
          skillName
          value
        }
      }
    }
  }

  fragment BaseHideoutItemFields on Item {
    id
    name
    shortName
    normalizedName
    iconLink

    craftsFor {
      id
    }
  }
`);
