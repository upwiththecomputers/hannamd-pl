import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://cdn.sanity.io/images/s1yhlmxl/production/**"),
    ],
  },
};

export default nextConfig;
