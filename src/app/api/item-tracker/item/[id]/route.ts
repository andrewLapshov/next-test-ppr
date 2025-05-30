import { NextRequest, NextResponse } from "next/server";

import { removeTypename } from "shared/lib/utils/remove-typename";
import { fetchAllItems } from "infrastructure/graphql/api/items";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const itemData = await fetchAllItems([id]);

    if (!itemData) {
      return NextResponse.json(
        { error: "Failed to get item data" },
        { status: 500 },
      );
    }

    return NextResponse.json(removeTypename(itemData), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to get item data" },
      { status: 500 },
    );
  }
}
