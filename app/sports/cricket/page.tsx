import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://11xplay.in";

export const metadata: Metadata = {
  title: "IPL Fantasy Cricket 2026 — 11xPlay Cricket Prediction App",
  description:
    "Play IPL 2026 fantasy cricket on 11xPlay. Build your dream team, predict match outcomes, and win with India's best cricket prediction app.",
  alternates: {
    canonical: `${siteUrl}/sports/cricket`,
    languages: { "en-IN": `${siteUrl}/sports/cricket` },
  },
};

const cricketSchema = [
  {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "IPL 2026 Fantasy Cricket",
    sport: "https://en.wikipedia.org/wiki/Cricket",
    startDate: "2026-03-22",
    endDate: "2026-05-25",
    location: {
      "@type": "Place",
      name: "India",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
    },
    url: `${siteUrl}/sports/cricket`,
    description:
      "Play IPL 2026 fantasy cricket on 11xPlay. Build your dream team and predict match outcomes.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Sports", item: `${siteUrl}/sports` },
      { "@type": "ListItem", position: 3, name: "Cricket Fantasy", item: `${siteUrl}/sports/cricket` },
    ],
  },
];

const matches = [
  {
    id: 1,
    teams: "India vs Pakistan",
    league: "T20 World Cup 2026",
    time: "Live",
    format: "T20",
    back1: "1.85",
    draw: "3.40",
    lay1: "2.05",
    isLive: true,
  },
  {
    id: 2,
    teams: "CSK vs MI",
    league: "IPL 2026",
    time: "Today 7:30 PM IST",
    format: "T20",
    back1: "1.72",
    draw: "-",
    lay1: "1.95",
    isLive: false,
  },
  {
    id: 3,
    teams: "RCB vs KKR",
    league: "IPL 2026",
    time: "Today 3:30 PM IST",
    format: "T20",
    back1: "2.10",
    draw: "-",
    lay1: "2.30",
    isLive: false,
  },
  {
    id: 4,
    teams: "England vs Australia",
    league: "The Ashes 2026",
    time: "Tomorrow 10:00 AM IST",
    format: "Test",
    back1: "2.30",
    draw: "3.20",
    lay1: "2.55",
    isLive: false,
  },
  {
    id: 5,
    teams: "GT vs SRH",
    league: "IPL 2026",
    time: "Apr 16, 7:30 PM IST",
    format: "T20",
    back1: "1.60",
    draw: "-",
    lay1: "1.80",
    isLive: false,
  },
  {
    id: 6,
    teams: "DC vs PBKS",
    league: "IPL 2026",
    time: "Apr 17, 3:30 PM IST",
    format: "T20",
    back1: "1.90",
    draw: "-",
    lay1: "2.10",
    isLive: false,
  },
];

export default function CricketPage() {
  return (
    <>
      {cricketSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <div
        className="dashboard-grid"
        style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}
      >
        <LeftSidebar />

        <main id="main-content" className="main-content">
          {/* Hero */}
          <div className="sport-hero">
            <h1 className="sport-hero-title">🏏 IPL Fantasy Cricket 2026 — Build Your Dream Team</h1>
            <p className="sport-hero-desc">
              Play IPL 2026 fantasy cricket on 11xPlay — predict match outcomes,
              build your dream XI, and win with India&apos;s best cricket prediction app.
            </p>
          </div>

          {/* Tabs */}
          <div className="sport-tab-list" role="tablist">
            {["All Matches", "Live", "IPL 2026", "International", "Domestic"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`sport-tab${i === 0 ? " active" : ""}`}
                  role="tab"
                  aria-selected={i === 0}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Match list */}
          <div className="match-list">
            {matches.map((match) => (
              <div key={match.id} className="match-row">
                <div className="match-info">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {match.isLive && <span className="live-badge">● LIVE</span>}
                    <span className="match-title">{match.teams}</span>
                  </div>
                  <div className="match-meta">
                    <span>{match.league}</span>
                    <span>•</span>
                    <span>{match.format}</span>
                    <span>•</span>
                    <span>{match.time}</span>
                  </div>
                </div>
                <div className="match-odds-group">
                  <button className="odds-btn odds-back" aria-label="Back odds">
                    <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>1</div>
                    <div>{match.back1}</div>
                  </button>
                  {match.draw !== "-" && (
                    <button className="odds-btn" aria-label="Draw odds">
                      <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>X</div>
                      <div>{match.draw}</div>
                    </button>
                  )}
                  <button className="odds-btn odds-lay" aria-label="Lay odds">
                    <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>2</div>
                    <div>{match.lay1}</div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Responsible gaming */}
          <div
            style={{
              margin: "16px",
              padding: "12px 16px",
              background: "rgba(255,0,0,0.05)",
              border: "1px solid rgba(255,0,0,0.15)",
              borderRadius: "6px",
              fontSize: "12px",
              color: "var(--color-text-muted)",
            }}
          >
            <strong style={{ color: "#ff6b6b" }}>18+ Only.</strong> Fantasy
            sports involve financial risk. Skill-based predictions for
            entertainment. Not available in restricted states.{" "}
            <Link href="/responsible-gaming" style={{ color: "var(--color-gold)" }}>
              Play Responsibly →
            </Link>
          </div>
        </main>

        <RightSidebar />
      </div>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
