import { TrackerItem } from "../../types";

type ItemProperties = {
  properties?:
    | { __typename?: string }
    | {
        defaultPreset?: TrackerItem | null;
      }
    | null;
};

export const modifyIfWeapon = (
  item: TrackerItem & ItemProperties,
): TrackerItem => {
  if (
    item.properties &&
    "defaultPreset" in item.properties &&
    item.properties.defaultPreset
  ) {
    const { defaultPreset } = item.properties;

    return {
      ...defaultPreset,
      id: item.id,
      name: item.name,
      shortName: item.shortName,
    };
  }

  return item;
};
