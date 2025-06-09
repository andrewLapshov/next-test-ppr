import { getClient } from "../../config";
import { allItemsQuery } from "./all-items-query";
import { Tags } from "../../tags";
import { cache } from "react";

export const fetchAllItems = cache(
  async (offset?: number, limit?: number, withCache = true) => {
    return getClient().query({
      query: allItemsQuery,
      ...(withCache && {
        context: {
          fetchOptions: {
            cache: "force-cache",
            next: {
              revalidate: 60 * 60 * 24, // 1 день
              tags: [Tags.fetchAllItemsData],
            },
          },
        },
      }),
      variables: { lang: "ru", offset, limit },
    });
  },
);

export const fetchAllItemsUncached = cache(
  async (locale: "ru" | "en", offset?: number, limit?: number) => {
    return getClient().query({
      query: allItemsQuery,
      variables: { lang: locale, offset, limit },
    });
  },
);
