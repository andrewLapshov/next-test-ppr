import {
  BaseHideoutItemFieldsFragment,
  BaseHideoutLevelFieldsFragment,
  BaseHideoutModuleFieldsFragment,
} from "../../../infrastructure/graphql/generated/graphql";

export type HideoutPageExtModule = Omit<
  BaseHideoutModuleFieldsFragment,
  "levels"
> & {
  levels: (
    | (Omit<BaseHideoutLevelFieldsFragment, "itemRequirements"> & {
        itemRequirements?: ({
          count?: number;
          item: HideoutExtItem;
        } | null)[];
      })
    | null
  )[];
};

export type HideoutPageHideoutModuleLevel = NonNullable<
  HideoutPageExtModule["levels"][number]
>;

export type HideoutExtItem = Omit<
  BaseHideoutItemFieldsFragment,
  "craftsFor"
> & {
  isCraft?: boolean;
};
