// import { fetchTotalItemsCached } from "./api";
import { fetchTraders } from "infrastructure/graphql/api/tracker-dictionaries";
// import { fetchItemsTrackerListCached } from "./api/fetch-items-tracker-list";

const FilterTypes = {
  hideCompleted: "hideCompleted",
  hideout: "hideout",
  quests: "quests",
} as const;

export const revalidate = 86_400;
export const dynamicParams = true;

type Props = {
  searchParams: Promise<{
    filters?: string;
    search?: string;
  }>;
};

const ItemsTracker = async ({ searchParams }: Props) => {
  const [
    dictionaries,
    // totalItems,
    // itemsTrackerList
  ] = await Promise.all([
    fetchTraders(),
    // fetchTotalItemsCached(),
    // fetchItemsTrackerListCached(),
  ]);

  const { filters, search } = await searchParams;

  const filterCategories = filters ? filters.split(",") : [];
  const showQuests = filterCategories.includes(FilterTypes.quests);
  const showHideout = filterCategories.includes(FilterTypes.hideout);
  const hideCompleted = filterCategories.includes(FilterTypes.hideCompleted);

  const searchValue = search?.toLowerCase();

  return (
    <div className={"flex flex-col gap-1"}>
      ItemsTracker
      <span>{Object.keys(dictionaries?.data?.traders).length}</span>
      {/*<span>{Object.keys(totalItems).length}</span>*/}
      {/*<span>{Object.keys(itemsTrackerList).length}</span>*/}
      <li>showQuests: {showQuests}</li>
      <li>showHideout: {showHideout}</li>
      <li>hideCompleted: {hideCompleted}</li>
      <li>search: {searchValue}</li>
    </div>
  );
};

export default ItemsTracker;
