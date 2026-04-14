import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

const promotionsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://11xplay.black" },
      { "@type": "ListItem", position: 2, name: "Bonus & Promotions", item: "https://11xplay.black/promotions" },
    ],
  },
];

export const metadata: Metadata = {
  title: "11xPlay Bonus & Promotions — Welcome Offer & Cashback",
  description:
    "Claim your 11xPlay welcome bonus. Ongoing promotions for cricket fantasy sports and skill games.",
  alternates: { canonical: "https://11xplay.black/promotions" },
  robots: { index: true, follow: true },
};

const promos = [
  {
    icon: "🎁",
    title: "Welcome Bonus",
    desc: "Get up to ₹5,000 bonus on your first deposit. Use code WELCOME11X.",
    badge: "NEW USER",
    badgeColor: "#e85d04",
    cta: "Claim Now",
  },
  {
    icon: "🏏",
    title: "IPL Fantasy Cashback",
    desc: "Play IPL 2026 fantasy contests and earn up to 20% cashback every week.",
    badge: "LIMITED",
    badgeColor: "#7b2ff7",
    cta: "Join Now",
  },
  {
    icon: "💰",
    title: "First Deposit Double",
    desc: "Your first UPI deposit gets doubled instantly. Min deposit ₹500.",
    badge: "HOT",
    badgeColor: "#c0392b",
    cta: "Deposit Now",
  },
  {
    icon: "🎰",
    title: "Casino Reload Bonus",
    desc: "10% reload bonus every Monday on skill game deposits. No max cap.",
    badge: "WEEKLY",
    badgeColor: "#27ae60",
    cta: "Play Now",
  },
  {
    icon: "👥",
    title: "Refer & Earn",
    desc: "Refer a friend and earn ₹200 when they make their first deposit.",
    badge: null,
    badgeColor: null,
    cta: "Refer Now",
  },
  {
    icon: "📲",
    title: "App Download Bonus",
    desc: "Download the 11xPlay app and get ₹100 free play credit instantly.",
    badge: null,
    badgeColor: null,
    cta: "Download App",
  },
];

export default function PromotionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(promotionsSchema) }}
      />
      <Header />
      <div
        className="dashboard-grid"
        style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}
      >
        <LeftSidebar />

        <main id="main-content" className="main-content">
          {/* Hero */}
          <div className="sport-hero">
            <h1 className="sport-hero-title">
              🎁 11xPlay Bonus &amp; Promotions — Welcome Offer &amp; Cashback Deals
            </h1>
            <p className="sport-hero-desc">
              Exclusive welcome bonuses, reload offers, and cashback promotions
              for cricket fantasy and skill games.
            </p>
          </div>

          {/* Promotions grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "12px",
              padding: "16px",
            }}
          >
            {promos.map((promo) => (
              <div
                key={promo.title}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  padding: "16px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {promo.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: promo.badgeColor ?? "var(--color-gold)",
                      color: "#fff",
                      fontSize: "9px",
                      fontWeight: 800,
                      padding: "3px 6px",
                      borderRadius: "4px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {promo.badge}
                  </span>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "24px" }}>{promo.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: "15px" }}>{promo.title}</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  {promo.desc}
                </p>
                <button
                  style={{
                    alignSelf: "flex-start",
                    background: "var(--theme-primary)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {promo.cta}
                </button>
              </div>
            ))}
          </div>

          {/* T&C note */}
          <div
            style={{
              margin: "16px",
              padding: "12px 16px",
              background: "rgba(255,0,0,0.05)",
              border: "1px solid rgba(255,0,0,0.15)",
              borderRadius: "6px",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#ff6b6b" }}>18+ Only.</strong> All promotions
            are subject to Terms &amp; Conditions. Fantasy sports and skill games
            involve financial risk. Not available in restricted states.{" "}
            <Link href="/responsible-gaming" style={{ color: "var(--color-gold)" }}>
              Play Responsibly →
            </Link>
          </div>
        </main>
      </div>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
