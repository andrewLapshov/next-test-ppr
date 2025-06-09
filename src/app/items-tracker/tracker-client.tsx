"use client";

import { useSearchParams } from "next/navigation";
import { fetchItemsTrackerList } from "./api/fetch-items-tracker-list";
import {
  getTrackerItem,
  purgeTrackerCache,
} from "./api/client/get-tracker-item";
import { Fragment, useState } from "react";
import { TrackerExtItemClient } from "./types";
import { TOTAL_ITEMS_SPLIT_STEP } from "./constants";

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

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [itemData, setItemData] = useState<TrackerExtItemClient | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const chunkLength = Math.ceil(
    itemsTracker.itemsIds.length / TOTAL_ITEMS_SPLIT_STEP,
  );

  return (
    <div className={"flex flex-col gap-1"}>
      <span>{filters}</span>
      <span>{search}</span>

      <button
        className={"border rounded-md self-start p-1"}
        onClick={purgeTrackerCache}
      >
        PURGE CACHE
      </button>

      <div className={"flex flex-col gap-2"}>
        {[...new Array(TOTAL_ITEMS_SPLIT_STEP)].map((_, index) => {
          const offset = index * chunkLength;

          return (
            <Fragment key={index}>
              {index > 0 && (
                <div className={"border border-amber-200 w-1/2"}></div>
              )}

              <div className={"flex gap-2 flex-wrap"}>
                {itemsTracker.itemsIds.slice(offset, offset + 5).map((id) => (
                  <button
                    disabled={isLoading}
                    key={id}
                    type={"button"}
                    className={`border-2 border-black p-2 disabled:opacity-50 ${selectedId === id ? "bg-red-300" : ""}`}
                    onClick={async () => {
                      try {
                        setIsLoading(true);
                        setSelectedId(id);
                        const response = await getTrackerItem(id);
                        setItemData(response);
                        setIsLoading(false);
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    fetch{" "}
                    {itemsTracker.itemsData[id]
                      ? itemsTracker.itemsData[id].name
                      : id}
                  </button>
                ))}
              </div>
            </Fragment>
          );
        })}
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
