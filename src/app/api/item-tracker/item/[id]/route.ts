import { NextResponse } from "next/server";

import { removeTypename } from "shared/lib/utils/remove-typename";
import { fetchTotalItemsCached } from "../../../../items-tracker/api";
import { fetchAllItemsKeysCached } from "infrastructure/graphql/api/items/prepare-all-items-keys";

export async function GET(_, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const { idsInChunkMap, chunksOfIds } = await fetchAllItemsKeysCached();

    const chunkIndex = idsInChunkMap[id];
    const chunkIds = chunksOfIds[chunkIndex];

    const chunkData = await fetchTotalItemsCached(chunkIds);

    const itemData = chunkData[id];

    if (itemData) {
      return NextResponse.json(removeTypename(itemData), {
        status: 200,
      });
    }

    return NextResponse.json(
      { error: "Failed to get item data" },
      { status: 500 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get item data" },
      { status: 500 },
    );
  }
}
