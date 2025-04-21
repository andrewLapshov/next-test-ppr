import { graphql } from '../../generated';

export const allItemsQuery = graphql(`
  query allItems($lang: LanguageCode) {
    items(lang: $lang) {
      ...BaseItemFields
      ...BaseProperties
    }
  }

  fragment BaseVendorItem on Item {
    gridImageLink
    shortName
    normalizedName
    name

    sellFor {
      ...BaseSellFor
    }
  }

  fragment BaseItemFields on Item {
    id
    name
    normalizedName
    shortName
    description
    inspectImageLink
    gridImageLink
    iconLink
    wikiLink
    updated
    avg24hPrice

    categories {
      normalizedName
    }

    craftsFor {
      ...BaseCrafting
    }
    craftsUsing {
      ...BaseCrafting
    }

    sellFor {
      ...BaseSellFor
    }
    buyFor {
      ...BaseBuyFor
    }

    bartersFor {
      ...BaseBarter
    }
    bartersUsing {
      ...BaseBarter
    }
  }

  fragment BaseProperties on Item {
    properties {
      ... on ItemPropertiesWeapon {
        defaultPreset {
          ...BaseItemFields
        }
        presets {
          craftsFor {
            ...BaseCrafting
          }
          craftsUsing {
            ...BaseCrafting
          }

          bartersFor {
            ...BaseBarter
          }
          bartersUsing {
            ...BaseBarter
          }
        }
      }
      ... on ItemPropertiesPreset {
        baseItem {
          description
        }
      }
    }
  }

  fragment BaseCrafting on Craft {
    id
    duration
    level
    station {
      normalizedName
    }
    requiredItems {
      count
      item {
        ...BaseVendorItem
      }
      attributes {
        type
      }
    }
    rewardItems {
      count
      item {
        ...BaseVendorItem
      }
    }
  }

  fragment BaseSellFor on ItemPrice {
    ...BaseTradeData
    vendor {
      normalizedName
      ... on TraderOffer {
        minTraderLevel
      }
    }
  }

  fragment BaseBuyFor on ItemPrice {
    ...BaseTradeData
    vendor {
      normalizedName
      ... on TraderOffer {
        minTraderLevel
        taskUnlock {
          normalizedName
          name
          id
        }
      }
    }
  }

  fragment BaseTradeData on ItemPrice {
    currency
    price
    priceRUB
  }

  fragment BaseBarter on Barter {
    id
    level
    requiredItems {
      count
      item {
        ...BaseVendorItem
      }
    }
    rewardItems {
      count
      item {
        ...BaseVendorItem
      }
    }
    trader {
      name
      normalizedName
      imageLink
    }
    taskUnlock {
      normalizedName
      name
      id
    }
  }
`);
