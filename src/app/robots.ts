import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: ["/"] },
    sitemap: ["https://morsenow.vercel.app/sitemap.xml"],
  };
}
