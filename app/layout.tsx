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
    default: "11xPlay — India's Trusted Cricket ID & Fantasy Sports Platform",
    template: "%s | 11xPlay",
  },
  description:
    "Sign up on 11xPlay for cricket fantasy sports, live skill games, and fast UPI deposits. India's most trusted cricket ID provider.",
  keywords: [
    "11xplay",
    "11x play",
    "11xplay cricket id",
    "cricket fantasy app India",
    "IPL fantasy sports app",
    "skill-based games India",
    "fantasy sports India",
    "11xplay apk download",
    "online gaming India",
  ],
  authors: [{ name: "11xPlay" }],
  creator: "11xPlay",
  alternates: {
    languages: {
      "en-IN": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "11xPlay",
    title: "11xPlay — India's Trusted Cricket ID & Fantasy Sports Platform",
    description:
      "Sign up on 11xPlay for cricket fantasy sports, live skill games, and fast UPI deposits. India's most trusted cricket ID provider.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "11xPlay — India's Trusted Cricket ID & Fantasy Sports Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "11xPlay — India's Trusted Cricket ID & Fantasy Sports Platform",
    description:
      "Cricket fantasy sports, live skill games, instant UPI deposits. India's most trusted cricket ID provider.",
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
