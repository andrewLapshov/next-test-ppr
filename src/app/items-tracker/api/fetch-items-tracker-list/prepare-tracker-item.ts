import { ItemType, TrackerItem } from "../../types";

export const prepareTrackerItem = (
  item: TrackerItem,
  { type = "item" }: { type?: ItemType } = {},
): TrackerItem => {
  const { craftsFor, ...restItem } = item;

  return { ...restItem, isCraft: Boolean(craftsFor?.length), type };
};
