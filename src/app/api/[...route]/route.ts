import { Hono } from "hono";
import { handle } from "hono/vercel";
import { TrackerExtItemClient } from "../../items-tracker/types";
// import { allItemsKeysQuery } from "infrastructure/graphql/api/items/all-items-keys";
// import { getClient } from "infrastructure/graphql/config";
// import { allItemsQuery } from "infrastructure/graphql/api/items/all-items-query";
import { fetchAllItems } from "infrastructure/graphql/api/items";
import { normalize, schema } from "normalizr";
import { NextResponse } from "next/server";
import { removeTypename } from "shared/lib/utils/remove-typename";
import { getCloudflareContext } from "@opennextjs/cloudflare";
export const dynamic = "force-dynamic";

const app = new Hono<{ Bindings: CloudflareEnv }>().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono on Vercel!",
  });
});

app.get("/:wild", (c) => {
  const wild = c.req.param("wild");
  return c.json({
    message: `Hello from Hono on Vercel! You're now on /api/${wild}!`,
  });
});

const totalItemsSchema = new schema.Entity(
  "totalItems",
  {},
  { idAttribute: "id" },
);

app.get("/items-tracker/purge", async (c) => {
  await getCloudflareContext().env.NEXT_INC_CACHE_KV.delete("ALL_ITEMS");

  return c.json({
    message: `Success!`,
  });
});

app.get("/items-tracker/item/:id", async (c) => {
  // const cachedChunk1 = (await c.env.NEXT_INC_CACHE_KV.get("ALL_ITEMS_0", {
  //   type: "json",
  // })) as Record<string, TrackerExtItemClient> | null;
  // const cachedChunk2 = (await c.env.NEXT_INC_CACHE_KV.get("ALL_ITEMS_0", {
  //   type: "json",
  // })) as Record<string, TrackerExtItemClient> | null;

  const cached = (await getCloudflareContext().env.NEXT_INC_CACHE_KV.get(
    "ALL_ITEMS",
    {
      type: "json",
    },
  )) as Record<string, TrackerExtItemClient> | null;

  let items = cached;

  if (!cached) {
    console.log("❌ MISS CACHE FOR ALL ITEMS...");
    // if (!cachedChunk1 && !cachedChunk2) {
    // const allKeys = await getClient().query({
    //   query: allItemsKeysQuery,
    //   variables: { lang: "ru" },
    // });
    //
    // const totalItemsLength = allKeys.data.items.length;
    //
    // const chunksParams = [
    //   { offset: 0, limit: totalItemsLength / 2 },
    //   { offset: totalItemsLength / 2, limit: totalItemsLength / 2 },
    // ];

    // const result: Record<string, TrackerExtItemClient>[] = [];

    // for (let i = 0; i < chunksParams.length; i++) {
    //   const chunksParam = chunksParams[i];
    //   const { offset, limit } = chunksParam;

    const rawData = await fetchAllItems(undefined, undefined, false);

    const extTotalItemsData = rawData.data.items.filter(Boolean);
    // .map((item) => prepareExtItem(item!, { locale }));

    const normalizedExtTotalItemsData = normalize<TrackerExtItemClient>(
      extTotalItemsData,
      [totalItemsSchema],
    );

    if (!normalizedExtTotalItemsData.entities.totalItems) {
      throw new Error("No total items found");
    }

    const chunk = removeTypename(
      normalizedExtTotalItemsData.entities.totalItems,
    );

    try {
      await getCloudflareContext().env.NEXT_INC_CACHE_KV.put(
        `ALL_ITEMS`,
        JSON.stringify(chunk),
        {
          expirationTtl: 3600 * 24,
        },
      );
    } catch (error) {
      console.log("CACHE ERROR:", error);
    }

    console.log("💾 CACHE SET!");
    items = chunk;
    // result.push(chunk)
    // }

    // }
  } else {
    console.log("🎯 CACHE HIT!");
  }

  const id = c.req.param("id");

  // for (const chunk of result) {
  if (items[id]) {
    return NextResponse.json(items[id], {
      status: 200,
    });
  }

  return NextResponse.json(
    { error: "Failed to get item data" },
    { status: 500 },
  );
});

export const GET = handle(app);
