import { fetchTradersDictionary } from "infrastructure/graphql/api/tracker-dictionaries";
import { normalize, schema } from "normalizr";

const tradersSchema = new schema.Entity(
  "traders",
  {},
  { idAttribute: "normalizedName" },
);

export const fetchTraders = async () => {
  const [{ data: rawTradersData }, { data: rawFleaData }] =
    await fetchTradersDictionary();

  const normalizedTradersData = normalize(rawTradersData.traders, [
    tradersSchema,
  ]);

  if (!normalizedTradersData.entities.traders || !rawFleaData.fleaMarket) {
    throw new Error("No traders found");
  }

  const normalizedFleaData = {
    [rawFleaData.fleaMarket.normalizedName]: {
      ...rawFleaData.fleaMarket,
      id: "flea-market",
      imageLink: null,
      levels: [],
    },
  };

  return {
    ...normalizedTradersData.entities.traders,
    ...normalizedFleaData,
  };
};
