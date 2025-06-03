import { fetchAllItems } from "./index";
import { unstable_cache } from "shared/lib/utils/unstable-cache";

const MAX_CHUNK_SIZE = 1_900_000; // Лимит кеша 2МБ, берем с небольшим запасом

function splitArrayByByteLength<T>(array: T[]) {
  const result: T[][] = [];
  // const resultSize = [];
  const ranges: [number, number][] = [];
  let chunk: T[] = [];
  let chunkSize = 0;

  let chunkIndex = 0;
  let itemIndex = 0;

  for (const item of array) {
    const itemString = JSON.stringify(item);
    const itemSize = Buffer.byteLength(itemString, "utf8");

    // Проверяем, не превышает ли добавление элемента лимит
    if (chunkSize + itemSize > MAX_CHUNK_SIZE) {
      if (chunk.length === 0) {
        // Если один элемент превышает лимит, кладём его отдельно
        result.push([item]);
        // resultSize.push(itemSize / 1024 / 1024);
        ranges[chunkIndex + 1] = [
          chunkIndex === 0 ? 0 : ranges[chunkIndex][1] + 1,
          itemIndex,
        ];
        chunkSize = 0;
        chunk = [];
      } else {
        // Сохраняем текущий чанк и начинаем новый
        result.push(chunk);
        ranges[chunkIndex] = [
          chunkIndex === 0 ? 0 : ranges[chunkIndex - 1][1] + 1,
          itemIndex,
        ];
        // resultSize.push(chunkSize / 1024 / 1024);
        chunk = [item];
        chunkSize = itemSize;
      }

      chunkIndex++;
    } else {
      chunk.push(item);
      chunkSize += itemSize;
    }

    itemIndex++;
  }

  // Добавляем последний чанк, если он не пустой
  if (chunk.length > 0) {
    result.push(chunk);
    ranges[chunkIndex] = [
      chunkIndex === 0 ? 0 : ranges[chunkIndex - 1][1] + 1,
      itemIndex - 1,
    ];
  }
  // console.log(array.length);
  // console.log("splitRanges:", ranges);

  // console.log("Result length", result.length);
  // console.log("Sizes:", resultSize);
  //
  // result.forEach((item, index) => {
  //   console.log(`${index}:`, item.length);
  // });

  return { chunkRanges: ranges, dataChunks: result };
}

export const prepareAllItemsKeys = async () => {
  const totalData = await fetchAllItems(undefined, undefined, false);

  const { dataChunks, chunkRanges } = splitArrayByByteLength(
    totalData.data.items,
  );

  const idsInChunkMap = dataChunks.reduce<Record<string, number>>(
    (acc, chunk, index) => {
      chunk.forEach((item) => {
        acc[item.id] = index;
      });

      return acc;
    },
    {},
  );

  return { idsInChunkMap, chunkRanges };
};

export const fetchAllItemsKeysCached = unstable_cache(
  prepareAllItemsKeys,
  ["fetchAllItemsKeys"],
  {
    revalidate: 3600 * 24 * 7,
    tags: ["fetchAllItemsKeys"],
  },
);
