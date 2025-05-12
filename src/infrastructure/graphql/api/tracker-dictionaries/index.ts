import { getClient } from "../../config";
import { FleaQuery } from "./flea-query";
import { HideoutQuery } from "./hideout-query";
import { TradersQuery } from "./traders-query";

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
