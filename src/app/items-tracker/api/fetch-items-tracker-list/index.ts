import { Tags } from "infrastructure/graphql/tags";
import { getEntitiesDataByIds } from "shared/lib/mapping/get-entities-data-by-ids";
import { convertRecordSetToArrays } from "shared/lib/utils/convert-record-set-to-arrays";
import { removeTypename } from "shared/lib/utils/remove-typename";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

import { addHideoutModuleItemToStorage } from "./add-hideout-module-item-to-storage";
import { addQuestItemToStorages } from "./add-quest-item-to-storages";
import { fetchHideoutItems } from "infrastructure/graphql/api/hideout";
import { fetchAllQuests } from "infrastructure/graphql/api/quests";
import { HideoutModule } from "infrastructure/graphql/generated/graphql";
import { BaseExtraData, TrackerItem, TrackerQuest } from "../../types";

const DOGTAGS = ["USEC", "BEAR"];

export type FullItemsDataMap = {
  [itemId: string]: {
    hideoutData: Record<string, HideoutModule>;
    hideoutExtraData: { [moduleId: string]: BaseExtraData };
    hideoutIds: string[];
    isAnyFIR: boolean;
    isAnyKappa: boolean;
    questsData: Record<string, TrackerQuest>;
    questsExtraData: { [questId: string]: BaseExtraData };
    questsIds: string[];
  };
};

export type ItemsStorage = {
  hideoutModulesByItemsIdsMap: Record<string, Set<string>>;
  hideoutModulesData: Record<string, HideoutModule>;
  hideoutModulesExtraData: Record<string, { [key: string]: BaseExtraData }>;

  itemsCount: Record<string, number>;
  itemsData: Record<string, TrackerItem>;
  itemsIds: Set<string>;

  questItemsMap: { [questId: string]: Set<string> };
  questsData: Record<string, TrackerQuest>;
  questsExtraData: Record<string, { [key: string]: BaseExtraData }>;
  questsIdsMap: Record<string, Set<string>>;
};

export type BatchStorage = Pick<
  ItemsStorage,
  "itemsCount" | "itemsData" | "itemsIds"
>;

const createBatchStorage = (): BatchStorage => {
  return {
    itemsCount: {},
    itemsData: {},
    itemsIds: new Set<string>(),
  };
};

const createDataStorage = (): ItemsStorage => {
  return {
    // Hideout
    hideoutModulesByItemsIdsMap: {},
    hideoutModulesData: {},
    hideoutModulesExtraData: {},

    // Items
    itemsCount: {},
    itemsData: {},
    itemsIds: new Set<string>(),

    // Quests
    questItemsMap: {},
    questsData: {},
    questsExtraData: {},
    questsIdsMap: {},
  };
};

export const fetchItemsTrackerList = async () => {
  const allData = await Promise.all([fetchAllQuests(), fetchHideoutItems()]);

  const [{ data: rawQuestsData }, { data: rawHideoutData }] = allData;

  const storage = createDataStorage();
  let batch = createBatchStorage();

  // Hideout
  rawHideoutData.hideoutStations.forEach((module) => {
    if (!module || !module.levels) return;

    const { levels, ...hideoutModule } = module;

    levels.forEach((level) => {
      if (!level || !level.itemRequirements) return null;

      level.itemRequirements.forEach((requirement) => {
        if (!requirement || !requirement.item) return null;

        addHideoutModuleItemToStorage(storage, requirement.item, {
          count: requirement.count,
          hideoutModule: {
            id: Number(level.id),
            level: level.level,
            // @ts-expect-error 123
            normalizedName: hideoutModule.normalizedName,
          },
        });
      });
    });
  });

  // Quests
  rawQuestsData.tasks.forEach((task) => {
    if (!task || !task.objectives) return;

    const { objectives, ...quest } = task;

    objectives.forEach((objective) => {
      if (!objective) return;

      // Ключи для заданий
      if (
        "requiredKeys" in objective &&
        Array.isArray(objective.requiredKeys)
      ) {
        objective.requiredKeys.flat().forEach((requiredKey) => {
          if (requiredKey) {
            addQuestItemToStorages(storage, batch, requiredKey, {
              quest,
              type: "key",
            });
          }
        });
      }

      // Собрать предмет (обычно оружие)
      if ("item" in objective) {
        addQuestItemToStorages(storage, batch, objective.item, { quest });
      }

      // Найти и принести предметы
      if ("items" in objective) {
        const { foundInRaid } = objective;
        if (
          objective.items[0]?.shortName &&
          DOGTAGS.includes(objective.items[0]?.shortName)
        ) {
          // Для жетонов добавляем только первый, т.к. в items включаются жетоны всех изданий отдельным item
          const item = objective.items[0];

          addQuestItemToStorages(storage, batch, item, {
            count: objective.count,
            foundInRaid,
            objectiveType: objective.type,
            quest,
          });
        } else if (
          (objective.count < objective.items.length && objective.items[0]) ||
          (objective.count >= 50 &&
            objective.items[0]?.types.includes("wearable"))
        ) {
          // если items больше count, значит нужно принести любой из
          // ИЛИ если предметов нужно больше 50, и это надеваемый предмет,
          // ТО добавляемый только первый элемент (подумать, как это решить)
          const item = objective.items[0];

          addQuestItemToStorages(storage, batch, item, {
            foundInRaid,
            objectiveType: objective.type,
            quest,
          });
        } else {
          objective.items.forEach((item) => {
            addQuestItemToStorages(storage, batch, item!, {
              count: objective.count,
              foundInRaid,
              objectiveType: objective.type,
              quest,
            });
          });
        }
      }

      // Предметы для маркировки
      if ("markerItem" in objective) {
        addQuestItemToStorages(storage, batch, objective.markerItem, { quest });
      }

      // Надеваемые вещи
      // TODO Не добавлены используемые для устранения оружия и моды
      // if ('wearing' in objective && Array.isArray(objective.wearing)) {
      //   objective.wearing.flat().forEach((item) => item && addQuestItem(item));
      // }
    });

    // очищаем батч
    batch = createBatchStorage();
  });

  // Упаковываем данные по каждому предмету в мапу
  const itemsIds = Array.from(storage.itemsIds);
  const itemsData = storage.itemsData;

  const questsIdsMap = convertRecordSetToArrays(storage.questsIdsMap);
  const hideoutIdsMap = convertRecordSetToArrays(
    storage.hideoutModulesByItemsIdsMap,
  );

  const questItemsMap = convertRecordSetToArrays(storage.questItemsMap);

  const questsItemsData = storage.questsData;
  const hideoutItemsData = storage.hideoutModulesData;

  const totalHideoutModulesExtraData = storage.hideoutModulesExtraData;
  const totalQuestsExtraData = storage.questsExtraData;

  const fullItemsDataMap = itemsIds.reduce<FullItemsDataMap>((acc, id) => {
    const questsIds = questsIdsMap[id] ?? [];
    const hideoutIds = hideoutIdsMap[id] ?? [];

    const questsData = removeTypename(
      getEntitiesDataByIds(questsIds, questsItemsData),
    );
    const hideoutData = removeTypename(
      getEntitiesDataByIds(hideoutIds, hideoutItemsData),
    );

    const questsExtraData = totalQuestsExtraData[id] || {};
    const hideoutExtraData = totalHideoutModulesExtraData[id] || {};

    const isAnyFIR = Object.values(questsExtraData).some(
      ({ foundInRaid }) => foundInRaid,
    );
    const isAnyKappa = Object.values(questsData).some(
      ({ kappaRequired }) => kappaRequired,
    );

    acc[id] = {
      hideoutData,
      hideoutExtraData,
      hideoutIds,
      isAnyFIR,
      isAnyKappa,
      questsData,
      questsExtraData,
      questsIds,
    };

    return acc;
  }, {});

  return {
    fullItemsDataMap,
    itemsData,
    itemsIds,
    questItemsMap,
  };
};

export const fetchItemsTrackerListCached = unstable_cache(
  fetchItemsTrackerList,
  [Tags.fetchItemsTrackerList],
  {
    revalidate: 86400 * 7, // 1 неделя
    tags: [Tags.fetchItemsTrackerList],
  },
);
