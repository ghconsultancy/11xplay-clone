import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import BannerSlider from "@/components/BannerSlider";
import RightSidebar from "@/components/RightSidebar";
import GameGrid from "@/components/GameGrid";
import MobileBottomNav from "@/components/MobileBottomNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://11xplay.in";

export const metadata: Metadata = {
  title: {
    absolute: "11xPlay — India's Trusted Cricket ID & Fantasy Sports Platform",
  },
  description:
    "Sign up on 11xPlay for cricket fantasy sports, live skill games, and fast UPI deposits. India's most trusted cricket ID provider.",
  alternates: {
    canonical: siteUrl,
    languages: { "en-IN": siteUrl },
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "11xPlay",
      description:
        "India's Trusted Cricket ID & Fantasy Sports Platform",
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "11xPlay",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
    },
  ],
};

const featuredSports = [
  {
    icon: "🏏",
    title: "IPL 2026",
    desc: "Live fantasy cricket — build your team, win daily prizes",
    href: "/sports/ipl",
    badge: "LIVE",
  },
  {
    icon: "🏆",
    title: "Cricket",
    desc: "India vs Pakistan, T20 World Cup, county matches and more",
    href: "/sports/cricket",
    badge: null,
  },
  {
    icon: "🤼",
    title: "Kabaddi",
    desc: "Pro Kabaddi League — predict match outcomes, win big",
    href: "/sports/kabaddi",
    badge: null,
  },
  {
    icon: "⚽",
    title: "Football",
    desc: "EPL, La Liga, Champions League — all live on 11xPlay",
    href: "#",
    badge: null,
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Header />
      <div className="dashboard-wrapper">
        <div
          className="dashboard-grid"
          style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}
        >
          {/* Left sidebar */}
          <LeftSidebar />

          {/* Main content */}
          <main id="main-content" className="main-content">
            {/* Hero banner slider — LCP element */}
            <BannerSlider />

            {/* App download CTA strip */}
            <div className="app-cta-strip">
              <p>
                <span className="text-gold font-bold">📲 11xPlay App</span>
                {" — "}
                Live IPL fantasy, instant UPI payouts. Free download for
                Android.
              </p>
              <Link href="/app" className="app-cta-btn">
                Download APK
              </Link>
            </div>

            {/* Featured sports */}
            <div className="section-header">
              <h2 className="section-title">
                <span className="section-title-icon">⚡</span>
                Featured Sports
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "8px",
                padding: "12px",
              }}
            >
              {featuredSports.map((sport) => (
                <Link
                  key={sport.title}
                  href={sport.href}
                  className="sport-card-link"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{sport.icon}</span>
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "var(--color-white)",
                      }}
                    >
                      {sport.title}
                    </span>
                    {sport.badge && (
                      <span className="live-badge">{sport.badge}</span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {sport.desc}
                  </p>
                </Link>
              ))}
            </div>

            {/* Game grid */}
            <GameGrid />

            {/* Responsible gaming notice */}
            <div
              style={{
                margin: "12px 16px",
                padding: "12px 16px",
                background: "rgba(255,0,0,0.05)",
                border: "1px solid rgba(255,0,0,0.15)",
                borderRadius: "6px",
                fontSize: "12px",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "#ff6b6b" }}>18+ Only.</strong>{" "}
              Fantasy sports and skill-based gaming involve financial risk.
              Not available in Assam, Odisha, Nagaland, Sikkim, and Telangana.{" "}
              <Link href="/responsible-gaming" style={{ color: "var(--color-gold)" }}>
                Play Responsibly →
              </Link>
            </div>
          </main>

          {/* Right sidebar */}
          <RightSidebar />
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
