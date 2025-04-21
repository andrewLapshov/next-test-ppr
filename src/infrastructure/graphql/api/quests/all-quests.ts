import { graphql } from '../../generated';

export const allQuestsQuery = graphql(`
  query allQuests($lang: LanguageCode) {
    # TODO добавить прокидывание фракции, чтобы избавиться от дублей квестов. Пока хардкод "BEAR"
    tasks(lang: $lang, faction: "BEAR") {
      ...BaseQuestFields

      objectives {
        id
        description
        ... on TaskObjectiveBasic {
          description
          requiredKeys {
            ...BaseQuestItemFields
          }
        }

        ... on TaskObjectiveBuildItem {
          description
          item {
            ...BaseQuestItemFields
            properties {
              ... on ItemPropertiesWeapon {
                defaultPreset {
                  ...BaseQuestItemFields
                }
              }
            }
          }
        }

        ... on TaskObjectiveItem {
          type
          count
          foundInRaid
          items {
            ...BaseQuestItemFields
            types
            properties {
              ... on ItemPropertiesWeapon {
                defaultPreset {
                  ...BaseQuestItemFields
                }
              }
            }
          }
          requiredKeys {
            ...BaseQuestItemFields
          }
        }

        ... on TaskObjectiveMark {
          id
          markerItem {
            ...BaseQuestItemFields
          }
          requiredKeys {
            ...BaseQuestItemFields
          }
        }

        ... on TaskObjectiveQuestItem {
          id
          requiredKeys {
            ...BaseQuestItemFields
          }
        }

        ... on TaskObjectiveShoot {
          wearing {
            ...BaseQuestItemFields
          }
        }
      }
    }
  }

  fragment BaseQuestFields on Task {
    id
    name
    normalizedName
    kappaRequired
    taskImageLink
    minPlayerLevel
    experience
    trader {
      imageLink
      name
      normalizedName
    }

    taskRequirements {
      status
      task {
        id
        ...QuestRequirements
      }
    }

    startRewards {
      ...BaseQuestRewards
    }
    finishRewards {
      ...BaseQuestRewards
    }
    failureOutcome {
      ...BaseQuestRewards
    }
  }

  fragment BaseQuestItemFields on Item {
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
