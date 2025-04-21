import { getClient } from "../../config";
import { hideoutQuery } from "./hideout-query";

export const fetchHideoutItems = async () => {
  "use cache";
  return getClient().query({
    query: hideoutQuery,
    variables: { lang: "ru" },
  });
};
