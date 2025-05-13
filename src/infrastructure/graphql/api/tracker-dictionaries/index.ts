import { getClient } from "../../config";
import { FleaQuery } from "./flea-query";
import { HideoutQuery } from "./hideout-query";
import { TradersQuery } from "./traders-query";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

export const fetchHideoutDictionary = () => {
  return getClient().query({
    query: HideoutQuery,
    context: {
      fetchOptions: {
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24 * 7, // 1 неделя
        },
      },
    },
    variables: { lang: "ru" },
  });
};

export const fetchTradersDictionary = () => {
  return Promise.all([
    getClient().query({
      query: TradersQuery,
      context: {
        fetchOptions: {
          cache: "force-cache",
          next: {
            revalidate: 60 * 60 * 24 * 7, // 1 неделя
          },
        },
      },
      variables: { lang: "ru" },
    }),
    getClient().query({
      query: FleaQuery,
      context: {
        fetchOptions: {
          cache: "force-cache",
          next: {
            revalidate: 60 * 60 * 24 * 7, // 1 неделя
          },
        },
      },
      variables: { lang: "ru" },
    }),
  ]);
};

export const fetchTraders = () =>
  getClient().query({
    query: TradersQuery,
    context: {
      fetchOptions: {
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24 * 7, // 1 неделя
        },
      },
    },
    variables: { lang: "ru" },
  });

export const fetchTradersDictionaryCached = unstable_cache(
  fetchTradersDictionary,
  ["fetchTradersDictionary"],
  {
    revalidate: 3600 * 24 * 7,
    tags: ["fetchTradersDictionary"],
  },
);
