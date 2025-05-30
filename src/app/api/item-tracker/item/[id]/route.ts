import { NextRequest, NextResponse } from "next/server";

import { removeTypename } from "shared/lib/utils/remove-typename";
import { fetchTotalItemsCached } from "../../../../items-tracker/api";
import { fetchItemsTrackerListCached } from "../../../../items-tracker/api/fetch-items-tracker-list";

const SPLIT_STEP = 8;

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const trackerItemsIds = (await fetchItemsTrackerListCached()).itemsIds;
    const chunkLength = Math.ceil(trackerItemsIds.length / SPLIT_STEP);

    const itemsDataChunks = await Promise.all(
      [...new Array(SPLIT_STEP)].map(async (_, index) => {
        const offset = index * chunkLength;
        const chunk = trackerItemsIds.slice(offset, offset + chunkLength - 1);

        return fetchTotalItemsCached(chunk);
      }),
    );

    const chunkWithData = itemsDataChunks.find((dataChunk) => !!dataChunk[id]);

    if (!chunkWithData) {
      return NextResponse.json(
        { error: "Failed to get item data" },
        { status: 500 },
      );
    }

    return NextResponse.json(removeTypename(chunkWithData[id]), {
      status: 200,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to get item data" },
      { status: 500 },
    );
  }
}
