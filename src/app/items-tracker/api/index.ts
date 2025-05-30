import { fetchAllItems } from "infrastructure/graphql/api/items";
import { normalize, schema } from "normalizr";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

import { TrackerExtItemClient } from "../types";
import { Tags } from "infrastructure/graphql/tags";
import { fetchItemsTrackerListCached } from "./fetch-items-tracker-list";
import { TOTAL_ITEMS_SPLIT_STEP } from "../constants";

const totalItemsSchema = new schema.Entity(
  "totalItems",
  {},
  { idAttribute: "id" },
);

const fetchTotalItems = async (
  chunkIndex: number,
): Promise<Record<string, TrackerExtItemClient>> => {
  const trackerItemsIds = (await fetchItemsTrackerListCached()).itemsIds;
  const chunkLength = Math.ceil(
    trackerItemsIds.length / TOTAL_ITEMS_SPLIT_STEP,
  );

  const offset = chunkIndex * chunkLength;
  const chunkIds = trackerItemsIds.slice(offset, offset + chunkLength - 1);

  const rawTotalItemsData = await fetchAllItems(chunkIds);

  const extTotalItemsData = rawTotalItemsData.data.items.filter(Boolean);
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
