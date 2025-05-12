import { ReactNode } from "react";

import {
  BaseItemFieldsFragment,
  BasePropertiesFragment,
  BaseQuestItemFieldsFragment,
  BaseHideoutItemFieldsFragment,
} from "infrastructure/graphql/generated/graphql";

import {
  BaseBarterFragment,
  BaseBuyForFragment,
  BaseCraftingFragment,
  BaseSellForFragment,
  BaseVendorItemFragment,
} from "infrastructure/graphql/generated/graphql";

import { BaseQuestFieldsFragment } from "infrastructure/graphql/generated/graphql";

type TrackerQuestTrader = {
  trader: Pick<BaseQuestFieldsFragment["trader"], "normalizedName">;
};

export type TrackerQuest = Pick<
  BaseQuestFieldsFragment,
  "id" | "kappaRequired" | "name" | "normalizedName"
> &
  TrackerQuestTrader;

export type WithNulls<T> = {
  [K in keyof T]: T[K] extends object ? WithNulls<T[K]> | null : T[K] | null;
};

export type ItemType = "item" | "key";

export type TradesType =
  | "avg24hPrice"
  | "bestBuyVendor"
  | "bestSellVendor"
  | "flea"
  | "profit";
export type Trades = {
  [key in TradesType]: Partial<BaseTradeData> | null | undefined;
};

export type BaseVendorItem = BaseVendorItemFragment & {
  trades?: Partial<Trades>;
};

export type BaseCraftingItem = {
  count: number;
  item: BaseVendorItem;
};

export type RequiredItem = BaseCraftingItem &
  WithNulls<{
    isTool?: boolean;
    attributes?: ({
      type: string;
    } | null)[];
  }>;
export type RewardItem = BaseCraftingItem;

export type Barter = WithNulls<
  Omit<BaseBarterFragment, "requiredItems" | "rewardItems"> & {
    requiredItems: WithNulls<RequiredItem>[];
    rewardItems: WithNulls<RewardItem>[];
  }
> | null;

export type Barters = {
  bartersFor?: Barter[] | null;
  bartersUsing?: Barter[] | null;
};

export type Crafting = WithNulls<
  Omit<BaseCraftingFragment, "duration" | "requiredItems" | "rewardItems"> & {
    duration: number | string;
    requiredItems: WithNulls<RequiredItem>[];
    rewardItems: WithNulls<RewardItem>[];
  }
> | null;

export type Crafts = {
  craftsFor?: Crafting[] | null;
  craftsUsing?: Crafting[] | null;
};

export type BuyForVendor = BaseBuyForFragment &
  WithNulls<{
    displayedValue?: string;
  }>;

export type SellForVendor = BaseSellForFragment &
  WithNulls<{
    displayedValue?: string;
  }>;

export type BaseTradeData = BuyForVendor | SellForVendor;

export type BaseExtraData = {
  totalCount: number;
  foundInRaid?: boolean;
  kappaRequired?: boolean;
};

type EntityItemFields =
  | BaseHideoutItemFieldsFragment
  | BaseQuestItemFieldsFragment;

export type TrackerItem = Omit<EntityItemFields, "craftsFor"> & {
  craftsFor?: EntityItemFields["craftsFor"];
  id: string;
  isCraft?: boolean;
  type?: ItemType;
};

export type TrackerListItem = {
  maxCount: number;
  hideCompleted?: boolean;
  icons: ReactNode[];
  isAnyFIR: boolean;
  itemData: TrackerItem;
};

export type TrackerBaseItem = BaseItemFieldsFragment &
  Partial<BasePropertiesFragment> & {
    id: string;
    isCraft?: boolean;
    trades?: Trades;
    type?: ItemType;
  };

type ExcludedBaseItemFields = Omit<
  TrackerBaseItem,
  | "avg24hPrice"
  | "bartersFor"
  | "bartersUsing"
  | "buyFor"
  | "categories"
  | "craftsFor"
  | "craftsUsing"
  | "gridImageLink"
  | "inspectImageLink"
  | "properties"
  | "sellFor"
>;

export type TrackerExtItemClient = ExcludedBaseItemFields & {
  barters: Barters;
  crafts: Crafts;
  id: string;
  isCraft: boolean;
  trades: Trades;
  type: ItemType;
};
