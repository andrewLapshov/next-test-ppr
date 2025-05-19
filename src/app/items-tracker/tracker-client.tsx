"use client";

import { useSearchParams } from "next/navigation";
import { fetchItemsTrackerList } from "./api/fetch-items-tracker-list";
import { getTrackerItem } from "./api/client/get-tracker-item";
import { useState } from "react";
import { TrackerExtItemClient } from "./types";

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

  const [itemData, setItemData] = useState<TrackerExtItemClient | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={"flex flex-col gap-1"}>
      <span>{filters}</span>
      <span>{search}</span>
      <div className={"flex gap-4 flex-wrap"}>
        {itemsTracker.itemsIds.slice(0, 10).map((id) => (
          <button
            disabled={isLoading}
            key={id}
            type={"button"}
            className={"border-2 border-black p-2 disabled:opacity-50"}
            onClick={async () => {
              try {
                setIsLoading(true);
                const response = await getTrackerItem(id);
                setItemData(response);
                setIsLoading(false);
              } catch (error) {
                console.error(error);
              }
            }}
          >
            fetch{" "}
            {itemsTracker.itemsData[id] ? itemsTracker.itemsData[id].name : id}
          </button>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
      {itemData && (
        <div>
          <pre>{JSON.stringify(itemData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
