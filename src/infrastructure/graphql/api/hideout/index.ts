import { getClient } from "../../config";
import { Tags } from "../../tags";
import { hideoutQuery } from "./hideout-query";

export const fetchHideoutItems = async () => {
  return getClient().query({
    query: hideoutQuery,
    context: {
      fetchOptions: {
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24 * 7, // 1 неделя
          tags: [Tags.fetchHideout],
        },
      },
    },
    variables: { lang: "ru" },
  });
};
