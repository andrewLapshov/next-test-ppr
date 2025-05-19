import { NextRequest, NextResponse } from "next/server";

import { removeTypename } from "shared/lib/utils/remove-typename";
import { fetchTotalItemsCached } from "../../../../items-tracker/api";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const items = await fetchTotalItemsCached();

    return NextResponse.json(removeTypename(items[id]), { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to get item data" },
      { status: 500 },
    );
  }
}
