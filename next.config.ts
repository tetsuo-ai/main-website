import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    domains: [],
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
