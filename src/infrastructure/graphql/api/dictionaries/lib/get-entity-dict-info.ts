import { Dictionaries } from "../types/dictionaries";
import { TrackerQuest } from "app/items-tracker/types";
import { HideoutModule } from "../../../generated/graphql";

export const getEntityDictInfo =
  ({ hideout, traders }: Dictionaries) =>
  (entity: HideoutModule | TrackerQuest) => {
    if (!entity) return null;

    if ("trader" in entity) {
      const {
        name,
        trader: { normalizedName },
      } = entity;

      const { imageLink: traderImageLink, name: traderName } =
        traders[normalizedName]!;

      return {
        entityName: name,
        imageLink: traderImageLink,
        imageTitle: traderName,
      };
    }

    if ("normalizedName" in entity) {
      const { level, normalizedName } = entity;

      const { imageLink, name } = hideout[normalizedName as string]!;

      const hideoutModuleName = `${name} ${level}`;

      return {
        entityName: hideoutModuleName,
        imageLink,
        imageTitle: hideoutModuleName,
      };
    }
  };
