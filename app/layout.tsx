import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo2",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://11xplay.in";

const verificationMeta: Metadata["verification"] = {};
if (process.env.GOOGLE_SITE_VERIFICATION) {
  verificationMeta.google = process.env.GOOGLE_SITE_VERIFICATION;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: verificationMeta,
  title: {
    default: "11xPlay — India's #1 Fantasy Sports & Skill Gaming Platform",
    template: "%s | 11xPlay",
  },
  description:
    "11xPlay is India's premier fantasy sports and skill-based gaming platform. Play cricket, football, IPL fantasy leagues and more with the best odds, instant payouts, and 24/7 support.",
  keywords: [
    "fantasy sports India",
    "skill-based games India",
    "cricket fantasy",
    "IPL fantasy",
    "sports prediction",
    "11xPlay",
    "online gaming India",
  ],
  authors: [{ name: "11xPlay" }],
  creator: "11xPlay",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "11xPlay",
    title: "11xPlay — India's #1 Fantasy Sports & Skill Gaming Platform",
    description:
      "India's premier fantasy sports and skill-based gaming platform. Best odds, instant payouts, 24/7 support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "11xPlay — India's #1 Fantasy Sports Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "11xPlay — India's #1 Fantasy Sports & Skill Gaming Platform",
    description:
      "Best odds on cricket, football, IPL. Instant UPI payouts. 24/7 support.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={exo2.variable}>
      <body className="font-body antialiased bg-bg text-white">{children}</body>
    </html>
  );
}
