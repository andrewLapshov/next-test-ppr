import { getClient } from "../../config";
// import { Tags } from "../../tags";
import { allItemsQuery } from "./all-items-query";
import { fetchItemsTrackerListCached } from "app/items-tracker/api/fetch-items-tracker-list";

export const fetchAllItems = async () => {
  const trackerItemsIds = (await fetchItemsTrackerListCached()).itemsIds;

  return getClient().query({
    query: allItemsQuery,
    // context: {
    //   fetchOptions: {
    //     cache: "force-cache",
    //     next: {
    //       revalidate: 60 * 60 * 24, // 1 день
    //       tags: [Tags.fetchAllItemsData],
    //     },
    //   },
    // },
    variables: { lang: "ru", ids: trackerItemsIds },
  });
};
