import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    domains: [],
  },
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
