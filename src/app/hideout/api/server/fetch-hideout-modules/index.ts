"use cache";

import { normalize, schema } from "normalizr";

import { HideoutPageExtModule } from "../../../types";
import { prepareHideoutModules } from "./prepare-hideout-modules";
import { fetchHideoutItems } from "../../fetch-hideout";

export const fetchHideoutModulesPage = async (): Promise<
  Record<string, HideoutPageExtModule>
> => {
  const hideoutModulesSchema = new schema.Entity(
    "allHideoutModules",
    {},
    { idAttribute: "normalizedName" },
  );
  const rawHideoutModulesData = await fetchHideoutItems();

  const extHideoutModulesData = rawHideoutModulesData.data.hideoutStations.map(
    (station) => prepareHideoutModules(station!),
  );

  const normalizedExtHideoutModulesData = normalize<HideoutPageExtModule>(
    extHideoutModulesData,
    [hideoutModulesSchema],
  );

  if (!normalizedExtHideoutModulesData.entities.allHideoutModules) {
    throw new Error("No hideout modules found");
  }

  return normalizedExtHideoutModulesData.entities.allHideoutModules;
};
