import { graphql } from 'infrastructure/graphql/generated';

graphql(`
  fragment BaseHideoutLevelFields on HideoutStationLevel {
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

  fragment BaseHideoutModuleFields on HideoutStation {
    id
    imageLink
    name
    normalizedName
    levels {
      ...BaseHideoutLevelFields
    }
  }
`);
