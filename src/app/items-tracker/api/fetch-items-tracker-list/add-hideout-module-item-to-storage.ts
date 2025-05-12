import { ItemsStorage } from "./index";
import { prepareTrackerItem } from "./prepare-tracker-item";
import { TrackerItem } from "../../types";
import { HideoutModule } from "infrastructure/graphql/generated/graphql";

export const addHideoutModuleItemToStorage = (
  storage: ItemsStorage,
  item: TrackerItem | null,
  { count, hideoutModule }: { count: number; hideoutModule: HideoutModule },
) => {
  if (!item) return;

  const { id } = item;

  storage.itemsIds.add(id);
  storage.itemsData[id] = prepareTrackerItem(item);
  storage.itemsCount[id] = storage.itemsCount[id]
    ? storage.itemsCount[id] + count
    : count;

  storage.hideoutModulesData[hideoutModule.id] = { ...hideoutModule };

  if (!storage.hideoutModulesByItemsIdsMap[id]) {
    storage.hideoutModulesByItemsIdsMap[id] = new Set();
  }
  storage.hideoutModulesByItemsIdsMap[id].add(String(hideoutModule.id));

  if (!storage.hideoutModulesExtraData[id]) {
    storage.hideoutModulesExtraData[id] = {};
  }
  storage.hideoutModulesExtraData[id][hideoutModule.id] = {
    totalCount: storage.hideoutModulesExtraData[id]?.[hideoutModule.id]
      ?.totalCount
      ? storage.hideoutModulesExtraData[id][hideoutModule.id].totalCount + count
      : count,
  };
};
