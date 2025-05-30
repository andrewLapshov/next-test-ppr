import { getClient } from "../../config";
import { allItemsQuery } from "./all-items-query";

export const fetchAllItems = async (ids?: string[]) => {
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
    variables: { lang: "ru", ids: ids },
  });
};
