import { TrackerExtItemClient } from "../../types";

export const getTrackerItem = async (
  itemId: string,
  chunk: number,
): Promise<TrackerExtItemClient> => {
  const response = await fetch(
    `/api/item-tracker/item/${itemId}?chunk=${chunk}`,
    {},
  );
  if (!response.ok) {
    throw new Error("Failed to get item");
  }
  return response.json();
};
