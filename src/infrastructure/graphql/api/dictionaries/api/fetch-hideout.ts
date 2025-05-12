import { fetchHideoutDictionary } from "infrastructure/graphql/api/tracker-dictionaries";
import { normalize, schema } from "normalizr";

const hideoutSchema = new schema.Entity(
  "hideout",
  {},
  { idAttribute: "normalizedName" },
);

export const fetchHideout = async () => {
  const { data: rawHideoutData } = await fetchHideoutDictionary();

  const normalizedHideoutData = normalize(rawHideoutData.hideoutStations, [
    hideoutSchema,
  ]);

  if (!normalizedHideoutData.entities.hideout) {
    throw new Error("No hideout found");
  }

  return normalizedHideoutData.entities.hideout;
};
