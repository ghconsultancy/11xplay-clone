import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://11xplay.in";

export const metadata: Metadata = {
  title: "11xPlay Bonus & Promotions — Welcome Offer & Cashback",
  description:
    "Claim your 11xPlay welcome bonus. Ongoing promotions for cricket fantasy sports and skill games.",
  alternates: {
    canonical: `${siteUrl}/promotions`,
    languages: { "en-IN": `${siteUrl}/promotions` },
  },
};

const promotionsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Bonus & Promotions", item: `${siteUrl}/promotions` },
    ],
  },
];

const promos = [
  {
    title: "Welcome Bonus",
    desc: "Get a 100% match bonus on your first deposit. Play cricket fantasy and skill games with double the balance.",
    badge: "NEW USERS",
    icon: "🎁",
  },
  {
    title: "IPL 2026 Cashback",
    desc: "Get 10% cashback on all losses during IPL 2026. Limited time offer for cricket fantasy players.",
    badge: "LIVE",
    icon: "🏏",
  },
  {
    title: "Daily Reload Bonus",
    desc: "Deposit every day and get a 5% reload bonus. Maximum bonus ₹500 per day.",
    badge: "DAILY",
    icon: "🔄",
  },
  {
    title: "Refer & Earn",
    desc: "Refer a friend and earn ₹200 for every successful referral. No limit on referrals.",
    badge: "ONGOING",
    icon: "👥",
  },
];

export default function PromotionsPage() {
  return (
    <>
      {promotionsSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main id="main-content">
        <div className="app-page">
          <div
            style={{
              padding: "24px 16px 16px",
              background: "linear-gradient(135deg, rgba(232,93,4,0.12) 0%, rgba(247,165,33,0.06) 100%)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <h1
              style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}
            >
              🎁 Bonus &amp; Promotions
            </h1>
            <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
              Claim your 11xPlay welcome bonus and ongoing cashback deals for cricket fantasy sports and skill games.
            </p>
          </div>

          <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {promos.map((promo) => (
              <div
                key={promo.title}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  padding: "16px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(232,93,4,0.15)",
                    border: "1px solid rgba(232,93,4,0.3)",
                    color: "var(--color-gold)",
                    fontSize: "10px",
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: "20px",
                  }}
                >
                  {promo.badge}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "24px" }}>{promo.icon}</span>
                  <h2 style={{ fontSize: "16px", fontWeight: 700 }}>{promo.title}</h2>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  {promo.desc}
                </p>
                <Link
                  href="/register"
                  style={{
                    display: "inline-block",
                    marginTop: "12px",
                    background: "var(--theme-primary)",
                    color: "#fff",
                    padding: "8px 20px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Claim Now
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              margin: "0 16px 24px",
              padding: "12px 16px",
              background: "rgba(255,0,0,0.05)",
              border: "1px solid rgba(255,0,0,0.15)",
              borderRadius: "6px",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#ff6b6b" }}>18+ Only.</strong> Bonus terms and wagering requirements apply. Fantasy sports and skill-based gaming involve financial risk.{" "}
            <Link href="/responsible-gaming" style={{ color: "var(--color-gold)" }}>
              Responsible Gaming Policy →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
