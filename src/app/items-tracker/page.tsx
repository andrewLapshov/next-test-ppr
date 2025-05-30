import { fetchTradersDictionaryCached } from "infrastructure/graphql/api/tracker-dictionaries";
import { fetchItemsTrackerListCached } from "./api/fetch-items-tracker-list";
import { TrackerClient } from "./tracker-client";
import { TOTAL_ITEMS_SPLIT_STEP } from "./constants";
import { fetchTotalItemsCached } from "./api";

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
    ...[...new Array(TOTAL_ITEMS_SPLIT_STEP)].map((_, index) =>
      fetchTotalItemsCached(index),
    ),
  ]);

  return (
    <div className={"flex flex-col gap-1"}>
      ItemsTracker
      <TrackerClient itemsTracker={itemsTrackerList} />
    </div>
  );
};

export default ItemsTracker;
