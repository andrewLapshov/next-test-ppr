import { Hono } from "hono";
import { handle } from "hono/vercel";
// import { allItemsKeysQuery } from "infrastructure/graphql/api/items/all-items-keys";
// import { getClient } from "infrastructure/graphql/config";
// import { allItemsQuery } from "infrastructure/graphql/api/items/all-items-query";
import { fetchAllItems } from "infrastructure/graphql/api/items";
import { NextResponse } from "next/server";
import { removeTypename } from "shared/lib/utils/remove-typename";
import { getCloudflareContext } from "@opennextjs/cloudflare";
export const dynamic = "force-dynamic";
import Cloudflare from "cloudflare";

const client = new Cloudflare({
  apiToken: "IRtQEue87UaHsu9wtcK6jNkWfOHGd4HRPy5xbT9v",
});

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

app.get("/items-tracker/purge", async (c) => {
  await getCloudflareContext().env.NEXT_INC_CACHE_KV.delete("ALL_ITEMS");

  return c.json({
    message: `Success!`,
  });
});

app.get("/items-tracker/item/warmup", async () => {
  let cachedFlag: Response | null = null;

  try {
    cachedFlag = await client.kv.namespaces.values.get(
      "1bbebb4e023a436c8dcb532e4715df2c",
      "items-tracker-all-items-set",
      {
        account_id: "eabd94460dcbcf675f80a7579c07956a",
      },
    );
  } catch (e) {
    console.log("key error", e);
  }

  if (!cachedFlag) {
    console.log("❌ MISS CACHE FOR ALL ITEMS...");

    const rawData = await fetchAllItems(undefined, undefined, false);

    const totalItemsKeyValue = rawData.data.items
      .filter(Boolean)
      .map((item) => ({
        key: `items-tracker-total-items-"${item.id}`,
        value: JSON.stringify(item),
        expiration_ttl: 60 * 60 * 24,
      }));

    await client.kv.namespaces.bulkUpdate("1bbebb4e023a436c8dcb532e4715df2c", {
      account_id: "eabd94460dcbcf675f80a7579c07956a",
      body: totalItemsKeyValue,
    });
    await client.kv.namespaces.bulkUpdate("1bbebb4e023a436c8dcb532e4715df2c", {
      account_id: "eabd94460dcbcf675f80a7579c07956a",
      body: [
        {
          key: "items-tracker-all-items-set",
          value: "SET",
          expiration_ttl: 60 * 60 * 24,
        },
      ],
    });

    console.log("💾 CACHE SET!");
  } else {
    console.log("🎯 CACHE READY!");
  }

  // for (const chunk of result) {
  return NextResponse.json(
    { success: true },
    {
      status: 200,
    },
  );
});

app.get("/items-tracker/item/:id", async (c) => {
  const id = c.req.param("id");

  const cachedItem = await client.kv.namespaces.values.get(
    "1bbebb4e023a436c8dcb532e4715df2c",
    `items-tracker-total-items-"${id}`,
    { account_id: "eabd94460dcbcf675f80a7579c07956a" },
  );

  const itemData = await cachedItem.json();

  if (itemData) {
    return NextResponse.json(removeTypename(itemData), {
      status: 200,
    });
  }

  return NextResponse.json(
    { error: "Failed to get item data" },
    { status: 500 },
  );
});

export const GET = handle(app);
