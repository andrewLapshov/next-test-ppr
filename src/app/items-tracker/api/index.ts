import { fetchAllItemsDataCached } from "infrastructure/graphql/api/items";
import { normalize, schema } from "normalizr";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

import { TrackerExtItemClient } from "../types";
import { Tags } from "infrastructure/graphql/tags";

const totalItemsSchema = new schema.Entity(
  "totalItems",
  {},
  { idAttribute: "id" },
);

const fetchTotalItems = async (): Promise<
  Record<string, TrackerExtItemClient>
> => {
  const rawTotalItemsData = await fetchAllItemsDataCached();

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
