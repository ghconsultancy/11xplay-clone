import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "speedcdn.io" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "11xplay.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
