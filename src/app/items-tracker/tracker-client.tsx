"use client";

import { useSearchParams } from "next/navigation";
import { fetchItemsTrackerList } from "./api/fetch-items-tracker-list";

const Params = {
  filters: "filters",
  itemId: "itemId",
  search: "search",
} as const;

type Props = {
  itemsTracker: Awaited<ReturnType<typeof fetchItemsTrackerList>>;
};

export const TrackerClient = ({ itemsTracker }: Props) => {
  const searchParams = useSearchParams();
  const filters = searchParams?.get(Params.filters) ?? "";
  const search = searchParams?.get(Params.search) ?? "";

  return (
    <div className={"flex flex-col gap-1"}>
      <span>{filters}</span>
      <span>{search}</span>
      <span>{Object.keys(itemsTracker).length}</span>
    </div>
  );
};
