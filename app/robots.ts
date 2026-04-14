import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://11xplay.in";
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/login", "/register", "/api/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
