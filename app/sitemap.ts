import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://11xplay.in";
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/sports/cricket`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/sports/ipl`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/sports/kabaddi`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/casino`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/app`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/responsible-gaming`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];
}
