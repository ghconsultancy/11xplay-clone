import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Live Casino — Roulette, Teen Patti, Baccarat",
  description:
    "Play live casino games on 11xPlay — Roulette, Teen Patti, Andar Bahar, Dragon Tiger, Baccarat, Blackjack and more. Real dealers, instant UPI payouts.",
  alternates: { canonical: "/casino" },
};

const categories = [
  "All Games",
  "Live Tables",
  "Teen Patti",
  "Roulette",
  "Baccarat",
  "Andar Bahar",
  "Dragon Tiger",
  "Slots",
  "Indian Games",
];

const casinoGames = [
  { name: "Live Roulette", icon: "🎡", players: "2.4K live", category: "Roulette", hot: true },
  { name: "Teen Patti Gold", icon: "🃏", players: "8.1K live", category: "Teen Patti", hot: true },
  { name: "Andar Bahar Live", icon: "🎴", players: "3.2K live", category: "Andar Bahar", hot: false },
  { name: "Dragon Tiger", icon: "🐉", players: "1.8K live", category: "Dragon Tiger", hot: false },
  { name: "Live Baccarat", icon: "🎰", players: "1.1K live", category: "Baccarat", hot: false },
  { name: "Speed Roulette", icon: "⚡", players: "980 live", category: "Roulette", hot: true },
  { name: "Lucky 7", icon: "7️⃣", players: "2.7K live", category: "Indian Games", hot: false },
  { name: "Sic Bo", icon: "🎲", players: "640 live", category: "Indian Games", hot: false },
  { name: "Live Blackjack", icon: "🃏", players: "1.5K live", category: "Live Tables", hot: false },
  { name: "Jhandi Munda", icon: "🌺", players: "3.4K live", category: "Indian Games", hot: true },
  { name: "Lightning Roulette", icon: "⚡", players: "5.2K live", category: "Roulette", hot: true },
  { name: "Crazy Time", icon: "🎪", players: "4.9K live", category: "Live Tables", hot: true },
];

const bgColors = [
  "#1a0a00", "#0a1a0a", "#0a0a1a", "#1a0a1a",
  "#1a1a0a", "#0a1a1a", "#150a00", "#001a0a",
  "#0a0015", "#15000a", "#001515", "#0a1500",
];

export default function CasinoPage() {
  return (
    <>
      <Header />
      <div
        className="dashboard-grid"
        style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}
      >
        <LeftSidebar />

        <main id="main-content" className="main-content">
          {/* Casino hero */}
          <div className="casino-hero">
            <h1 className="casino-hero-title">
              🎰 Live Casino
            </h1>
            <p style={{ fontSize: "14px", color: "var(--color-text-muted)", marginTop: "6px" }}>
              Real dealers. Instant payouts. The best skill games in India.
            </p>
          </div>

          {/* Filter bar */}
          <div className="casino-filter-bar">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`filter-chip${i === 0 ? " active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Games grid */}
          <div className="game-grid" style={{ padding: "16px" }}>
            {casinoGames.map((game, i) => (
              <button
                key={game.name}
                className="game-card"
                style={{ background: bgColors[i % bgColors.length] }}
                aria-label={`Play ${game.name}`}
              >
                <div className="game-card-fallback" style={{ background: "transparent" }}>
                  <span className="game-card-fallback-icon">{game.icon}</span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    {game.name}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "var(--color-gold)",
                      fontWeight: 600,
                    }}
                  >
                    {game.players}
                  </span>
                </div>
                {game.hot && (
                  <div
                    style={{
                      position: "absolute",
                      top: "6px",
                      right: "6px",
                      background: "var(--theme-secondary)",
                      color: "#fff",
                      fontSize: "9px",
                      fontWeight: 800,
                      padding: "2px 5px",
                      borderRadius: "3px",
                    }}
                  >
                    HOT
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Disclaimer */}
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
            <strong style={{ color: "#ff6b6b" }}>18+ Only.</strong> Skill-based
            games involve financial risk. Play for entertainment.{" "}
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
