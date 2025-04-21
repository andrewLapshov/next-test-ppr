import { unstable_cache } from "next/cache";

import { normalize, schema } from "normalizr";

import { HideoutPageExtModule } from "../../../types";
import { prepareHideoutModules } from "./prepare-hideout-modules";
import { fetchHideoutItems } from "../../fetch-hideout";

const hideoutModulesSchema = new schema.Entity(
  "allHideoutModules",
  {},
  { idAttribute: "normalizedName" },
);

const fetchHideoutModulesPage = async (): Promise<
  Record<string, HideoutPageExtModule>
> => {
  'use cache';
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

export const fetchHideoutModulesPageCached = unstable_cache(
  fetchHideoutModulesPage,
  undefined,
  {
    revalidate: 60 * 60 * 24, // 1 день
  },
);
