import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://morsenow.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
