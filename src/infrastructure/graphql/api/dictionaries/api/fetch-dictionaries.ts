import { Tags } from "infrastructure/graphql/tags";
import { removeTypename } from "shared/lib/utils/remove-typename";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

import { Dictionaries } from "../types/dictionaries";
import { fetchHideout } from "./fetch-hideout";
import { fetchTraders } from "./fetch-traders";

export const fetchDictionaries = async (): Promise<Dictionaries> => {
  const [rawTraders, rawHideout] = await Promise.all([
    fetchTraders(),
    fetchHideout(),
  ]);

  return {
    hideout: removeTypename(rawHideout),
    traders: removeTypename(rawTraders),
  };
};

export const fetchDictionariesCached = unstable_cache(
  fetchDictionaries,
  [Tags.fetchItemsTrackerDictionaries],
  {
    revalidate: 3600 * 24,
    tags: [Tags.fetchItemsTrackerDictionaries],
  },
);
