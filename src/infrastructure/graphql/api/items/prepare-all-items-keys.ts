import { fetchAllItems } from "./index";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

const MAX_CHUNK_SIZE = 1_700_000;

function splitArrayByByteLength<T>(array: T[]) {
  const result: T[][] = [];
  const resultSize = [];
  let chunk: T[] = [];
  let chunkSize = 0;

  for (const item of array) {
    const itemString = JSON.stringify(item);
    const itemSize = Buffer.byteLength(itemString, "utf8");

    // Проверяем, не превышает ли добавление элемента лимит
    if (chunkSize + itemSize > MAX_CHUNK_SIZE) {
      if (chunk.length === 0) {
        // Если один элемент превышает лимит, кладём его отдельно
        result.push([item]);
        resultSize.push(itemSize / 1024 / 1024);
        chunkSize = 0;
        chunk = [];
      } else {
        // Сохраняем текущий чанк и начинаем новый
        result.push(chunk);
        resultSize.push(chunkSize / 1024 / 1024);
        chunk = [item];
        chunkSize = itemSize;
      }
    } else {
      chunk.push(item);
      chunkSize += itemSize;
    }
  }

  // Добавляем последний чанк, если он не пустой
  if (chunk.length > 0) {
    result.push(chunk);
  }

  // console.log("Result length", result.length);
  // console.log("Sizes:", resultSize);
  //
  // result.forEach((item) => {
  //   console.log(item.length);
  // });

  return result;
}

export const prepareAllItemsKeys = async () => {
  const totalData = await fetchAllItems(undefined, false);

  const dataChunks = splitArrayByByteLength(totalData.data.items);

  const chunksOfIds = dataChunks.map((chunk) => chunk.map(({ id }) => id));

  const idsInChunkMap = dataChunks.reduce<Record<string, number>>(
    (acc, chunk, index) => {
      chunk.forEach((item) => {
        acc[item.id] = index;
      });

      return acc;
    },
    {},
  );

  return { idsInChunkMap, chunksOfIds };
};

export const fetchAllItemsKeysCached = unstable_cache(
  prepareAllItemsKeys,
  ["fetchAllItemsKeys"],
  {
    revalidate: 3600 * 24 * 7,
    tags: ["fetchAllItemsKeys"],
  },
);
