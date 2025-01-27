import withMDXFactory from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = withMDXFactory();

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: [],
  },
};

export default withMDX(nextConfig);
