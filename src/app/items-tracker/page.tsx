import { fetchTotalItemsCached } from "./api";
import { fetchDictionariesCached } from "infrastructure/graphql/api/dictionaries/api/fetch-dictionaries";
import { fetchItemsTrackerListCached } from "./api/fetch-items-tracker-list";

export const revalidate = 86_400;
export const dynamicParams = true;

const ItemsTracker = async () => {
  await Promise.all([
    fetchDictionariesCached(),
    fetchTotalItemsCached(),
    fetchItemsTrackerListCached(),
  ]);

  return <div>ItemsTracker</div>;
};

export default ItemsTracker;
