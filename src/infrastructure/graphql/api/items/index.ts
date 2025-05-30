import { getClient } from "../../config";
import { allItemsQuery } from "./all-items-query";
import { Tags } from "../../tags";
import { cache } from "react";

export const fetchAllItems = cache(async (ids?: string[]) => {
  return getClient().query({
    query: allItemsQuery,
    context: {
      fetchOptions: {
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24, // 1 день
          tags: [Tags.fetchAllItemsData],
        },
      },
    },
    variables: { lang: "ru", ids },
  });
});
