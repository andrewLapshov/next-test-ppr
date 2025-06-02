import { fetchAllItems } from "infrastructure/graphql/api/items";
import { normalize, schema } from "normalizr";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

import { TrackerExtItemClient } from "../types";
import { Tags } from "infrastructure/graphql/tags";

import { fetchAllItemsKeysCached } from "infrastructure/graphql/api/items/prepare-all-items-keys";

const totalItemsSchema = new schema.Entity(
  "totalItems",
  {},
  { idAttribute: "id" },
);

const fetchTotalItems = async (
  chunkIndex: number,
): Promise<Record<string, TrackerExtItemClient>> => {
  const { chunksOfIds } = await fetchAllItemsKeysCached();

  const chunkIds = chunksOfIds[chunkIndex];

  const rawData = await fetchAllItems(chunkIds);

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
