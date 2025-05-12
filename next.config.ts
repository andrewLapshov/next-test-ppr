import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // хак для обхода ограничения лимита кэша для запросов в 2МБ
  cacheHandler: require.resolve(
    "next/dist/server/lib/incremental-cache/file-system-cache.js",
  ),

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
