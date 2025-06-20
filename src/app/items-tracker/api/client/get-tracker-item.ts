import { TrackerExtItemClient } from "../../types";

export const getTrackerItem = async (
  itemId: string,
): Promise<TrackerExtItemClient> => {
  const response = await fetch(`/api/items-tracker/item/${itemId}`, {});
  if (!response.ok) {
    throw new Error("Failed to get item");
  }
  return response.json();
};

export const purgeTrackerCache = async (): Promise<TrackerExtItemClient> => {
  const response = await fetch(`/api/items-tracker/purge`, {});
  if (!response.ok) {
    throw new Error("Failed to get item");
  }
  return response.json();
};

export const warmupTrackerCache = async (): Promise<void> => {
  const response = await fetch(`/api/items-tracker/item/warmup`, {});
  if (!response.ok) {
    throw new Error("Failed to warmup");
  }
  return response.json();
};
