import { fetchTotalItemsCached } from "./api";
import { fetchTradersDictionaryCached } from "infrastructure/graphql/api/tracker-dictionaries";
import { fetchItemsTrackerListCached } from "./api/fetch-items-tracker-list";
import { TrackerClient } from "./tracker-client";

export const revalidate = 86_400;
export const dynamicParams = true;

// type Props = {
//   searchParams: Promise<{
//     filters?: string;
//     search?: string;
//   }>;
// };

const ItemsTracker = async () => {
  const [, totalItems, itemsTrackerList] = await Promise.all([
    fetchTradersDictionaryCached(),
    fetchTotalItemsCached(),
    fetchItemsTrackerListCached(),
  ]);

  return (
    <div className={"flex flex-col gap-1"}>
      ItemsTracker
      <TrackerClient totalItems={totalItems} itemsTracker={itemsTrackerList} />
    </div>
  );
};

export default ItemsTracker;
