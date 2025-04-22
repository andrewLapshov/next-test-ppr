import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    dynamicIO: true,
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
