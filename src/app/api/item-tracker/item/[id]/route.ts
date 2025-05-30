import { NextRequest, NextResponse } from "next/server";

import { removeTypename } from "shared/lib/utils/remove-typename";
import { fetchTotalItemsCached } from "../../../../items-tracker/api";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const { searchParams } = new URL(request.url);
  const chunk = searchParams.get("chunk");

  try {
    const chunkData = await fetchTotalItemsCached(Number(chunk));

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
