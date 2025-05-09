const query = `
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
            id
            name
            shortName
            normalizedName
            iconLink
            craftsFor {
              id
            }
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
`;

export const fetchHideoutItems = async () => {
  return fetch("https://api.tarkov.dev/graphql", {
    body: JSON.stringify({
      query,
      variables: { lang: "ru" },
    }),
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    next: { revalidate: 60 * 60 * 24 },
  })
    .then((response) => response.json())
    .then((data) => data);
};
