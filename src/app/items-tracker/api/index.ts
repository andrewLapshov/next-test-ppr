import { fetchAllItems } from "infrastructure/graphql/api/items";
import { normalize, schema } from "normalizr";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

import { TrackerExtItemClient } from "../types";
import { Tags } from "infrastructure/graphql/tags";

const totalItemsSchema = new schema.Entity(
  "totalItems",
  {},
  { idAttribute: "id" },
);

const fetchTotalItems = async (
  itemsRange: [number, number],
): Promise<Record<string, TrackerExtItemClient>> => {
  const offset = itemsRange[0];
  const limit = itemsRange[1] - offset;

  const rawData = await fetchAllItems(offset, limit);

  const extTotalItemsData = rawData.data.items.filter(Boolean);
  // .map((item) => prepareExtItem(item!, { locale }));

  const normalizedExtTotalItemsData = normalize<TrackerExtItemClient>(
    extTotalItemsData,
    [totalItemsSchema],
  );

  if (!normalizedExtTotalItemsData.entities.totalItems) {
    throw new Error("No total items found");
  }

  return normalizedExtTotalItemsData.entities.totalItems;
};

export const fetchTotalItemsCached = unstable_cache(
  fetchTotalItems,
  [Tags.fetchItemsTrackerTotalItems],
  {
    revalidate: 3600 * 24 * 7,
    tags: [Tags.fetchItemsTrackerTotalItems],
  },
);
