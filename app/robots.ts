import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/", "/_next/", "/static/"],
    },
    sitemap: "https://tetsuo.ai/sitemap.xml",
    host: "https://tetsuo.ai",
  };
}
