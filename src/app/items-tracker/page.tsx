import { fetchTradersDictionaryCached } from "infrastructure/graphql/api/tracker-dictionaries";
import { fetchItemsTrackerListCached } from "./api/fetch-items-tracker-list";
import { TrackerClient } from "./tracker-client";
import { fetchTotalItemsCached } from "./api";
import { fetchAllItemsKeysCached } from "infrastructure/graphql/api/items/prepare-all-items-keys";

export const revalidate = 86_400;
export const dynamicParams = true;
export const generateStaticParams = async () => [];

// type Props = {
//   searchParams: Promise<{
//     filters?: string;
//     search?: string;
//   }>;
// };

const ItemsTracker = async () => {
  const [, itemsTrackerList] = await Promise.all([
    fetchTradersDictionaryCached(),
    fetchItemsTrackerListCached(),
  ]);

  // Прогрев кеша
  const { chunksOfIds } = await fetchAllItemsKeysCached();

  await Promise.all(
    chunksOfIds.map((_, index) => fetchTotalItemsCached(index)),
  );

  return (
    <div className={"flex flex-col gap-1"}>
      ItemsTracker
      <TrackerClient itemsTracker={itemsTrackerList} />
    </div>
  );
};

export default ItemsTracker;
