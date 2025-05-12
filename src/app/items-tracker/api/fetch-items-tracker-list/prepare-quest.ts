import { BaseQuestFieldsFragment } from "infrastructure/graphql/generated/graphql";
import { TrackerQuest } from "../../types";

export const prepareQuest = (quest: BaseQuestFieldsFragment): TrackerQuest => {
  return {
    id: quest.id,
    kappaRequired: quest.kappaRequired,
    name: quest.name,
    normalizedName: quest.normalizedName,
    trader: { normalizedName: quest.trader.normalizedName },
  };
};
