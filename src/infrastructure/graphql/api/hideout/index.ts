import { getClient } from "../../config";
import { Tags } from "../../tags";
import { hideoutQuery } from "./hideout-query";

export type Hideout = {
  imageLink: string | null;
  name: string;
  normalizedName: string;
} | null;

export type NormHideout = { [key: string]: Hideout | null | undefined };

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
