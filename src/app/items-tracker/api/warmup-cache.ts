import { getCloudflareContext } from "@opennextjs/cloudflare";
import { TrackerExtItemClient } from "../types";
import { normalize, schema } from "normalizr";
import { removeTypename } from "shared/lib/utils/remove-typename";
import { fetchAllItems } from "infrastructure/graphql/api/items";

// const client = new ApolloClient({
//   uri: "https://api.tarkov.dev/graphql", // или твой URL
//   cache: new InMemoryCache(),
// });
//
// const fetchAllItemsWarmUp = async (
//   offset?: number,
//   limit?: number,
//   withCache = true,
// ) => {
//   return client.query({
//     query: allItemsQuery,
//     ...(withCache && {
//       context: {
//         fetchOptions: {
//           cache: "force-cache",
//           next: {
//             revalidate: 60 * 60 * 24, // 1 день
//             tags: [Tags.fetchAllItemsData],
//           },
//         },
//       },
//     }),
//     variables: { lang: "ru", offset, limit },
//   });
// };
//
const totalItemsSchema = new schema.Entity(
  "totalItems",
  {},
  { idAttribute: "id" },
);

export const warmupCache = async () => {
  console.log("⚠️ WARMUP CACHE...");

  const cached = (await (
    await getCloudflareContext({
      async: true,
    })
  ).env.NEXT_INC_CACHE_KV.get("ALL_ITEMS", {
    type: "json",
  })) as Record<string, TrackerExtItemClient> | null;

  let items = cached;

  if (!cached) {
    console.log("❌ MISS CACHE FOR ALL ITEMS...");

    const rawData = await fetchAllItems(undefined, undefined, false);

    const extTotalItemsData = rawData.data.items.filter(Boolean);

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

    items = chunk;

    try {
      await (
        await getCloudflareContext({
          async: true,
        })
      ).env.NEXT_INC_CACHE_KV.put(`ALL_ITEMS`, JSON.stringify(chunk), {
        expirationTtl: 3600 * 24,
      });
    } catch (error) {
      console.log("CACHE ERROR:", error);
    }

    console.log("💾 CACHE SET!");
  } else {
    console.log("🎯 CACHE HIT!");
  }

  return items;
};
