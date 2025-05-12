import { BaseQuestFieldsFragment } from "infrastructure/graphql/generated/graphql";

import { BatchStorage, ItemsStorage } from "./index";
import { modifyIfWeapon } from "./modifiers";
import { prepareQuest } from "./prepare-quest";
import { prepareTrackerItem } from "./prepare-tracker-item";
import { ItemType, TrackerItem } from "../../types";

export const addQuestItemToStorages = (
  storage: ItemsStorage,
  batch: BatchStorage,
  item: TrackerItem | null,
  {
    count = 1,
    foundInRaid,
    objectiveType,
    quest,
    type = "item",
  }: {
    count?: number;
    foundInRaid?: boolean;
    objectiveType?: string;
    quest?: BaseQuestFieldsFragment;
    type?: ItemType;
  } = {},
) => {
  if (!item) return;

  const modifiedItem = modifyIfWeapon(item);

  const { id } = modifiedItem;

  if (
    (batch.itemsIds.has(id) &&
      batch.itemsCount[id] === count &&
      objectiveType === "giveItem") ||
    (batch.itemsIds.has(id) && batch.itemsData[id]?.type === "key") ||
    objectiveType === "sellItem"
  ) {
    return;
  }

  const trackerItem = prepareTrackerItem(modifiedItem, { type });

  // добавление данных о предмете в батч
  batch.itemsIds.add(id);
  batch.itemsData[id] = trackerItem;
  batch.itemsCount[id] = batch.itemsCount[id]
    ? batch.itemsCount[id] + count
    : count;

  storage.itemsIds.add(id);
  storage.itemsData[id] = storage.itemsData[id]
    ? { ...storage.itemsData[id], ...trackerItem }
    : trackerItem;
  storage.itemsCount[id] = storage.itemsCount[id]
    ? storage.itemsCount[id] + count
    : count;

  if (!quest || !quest.id) return;

  storage.questsData[quest.id] = prepareQuest(quest);

  if (!storage.questsIdsMap[id]) {
    storage.questsIdsMap[id] = new Set();
  }
  storage.questsIdsMap[id].add(quest.id);

  if (!storage.questsExtraData[id]) {
    storage.questsExtraData[id] = {};
  }
  storage.questsExtraData[id][quest.id] = {
    totalCount: storage.questsExtraData[id]?.[quest.id]?.totalCount
      ? storage.questsExtraData[id][quest.id].totalCount + count
      : count,
    foundInRaid,
  };

  if (!storage.questItemsMap[quest.id]) {
    storage.questItemsMap[quest.id] = new Set();
  }
  storage.questItemsMap[quest.id].add(id);
};
