"use client";

import { useSearchParams } from "next/navigation";
import { TrackerExtItemClient } from "./types";
import { fetchItemsTrackerList } from "./api/fetch-items-tracker-list";

const Params = {
  filters: "filters",
  itemId: "itemId",
  search: "search",
} as const;

type Props = {
  totalItems: Record<string, TrackerExtItemClient>;
  itemsTracker: Awaited<ReturnType<typeof fetchItemsTrackerList>>;
};

export const TrackerClient = ({ totalItems, itemsTracker }: Props) => {
  const searchParams = useSearchParams();
  const filters = searchParams?.get(Params.filters) ?? "";
  const search = searchParams?.get(Params.search) ?? "";

  return (
    <div className={"flex flex-col gap-1"}>
      <span>{filters}</span>
      <span>{search}</span>
      <span>{Object.keys(totalItems).length}</span>
      <span>{Object.keys(itemsTracker).length}</span>
    </div>
  );
};
