import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "Kabaddi Fantasy & Predictions — Pro Kabaddi League",
  description:
    "Pro Kabaddi League 2026 live on 11xPlay — play fantasy kabaddi, predict raid and tackle outcomes, win instant UPI payouts.",
  alternates: { canonical: "/sports/kabaddi" },
};

const matches = [
  {
    id: 1,
    teams: "Patna Pirates vs Bengal Warriors",
    time: "Today 8:00 PM IST",
    back1: "1.80",
    lay1: "2.00",
    isLive: false,
  },
  {
    id: 2,
    teams: "U Mumba vs Jaipur Pink Panthers",
    time: "Tomorrow 7:30 PM IST",
    back1: "1.90",
    lay1: "2.10",
    isLive: false,
  },
  {
    id: 3,
    teams: "Dabang Delhi vs Telugu Titans",
    time: "Apr 16, 8:00 PM IST",
    back1: "1.65",
    lay1: "1.85",
    isLive: false,
  },
  {
    id: 4,
    teams: "Puneri Paltan vs UP Yoddhas",
    time: "Apr 17, 7:30 PM IST",
    back1: "2.00",
    lay1: "2.20",
    isLive: false,
  },
];

export default function KabaddiPage() {
  return (
    <>
      <Header />
      <div
        className="dashboard-grid"
        style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}
      >
        <LeftSidebar />

        <main id="main-content" className="main-content">
          <div className="sport-hero">
            <h1 className="sport-hero-title">🤼 Kabaddi</h1>
            <p className="sport-hero-desc">
              Pro Kabaddi League 2026 — play fantasy kabaddi, predict raid
              outcomes, and win big with instant UPI payouts on 11xPlay.
            </p>
          </div>

          <div className="sport-tab-list">
            {["All Matches", "Live", "Pro Kabaddi League", "Fantasy"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`sport-tab${i === 0 ? " active" : ""}`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <div className="match-list">
            {matches.map((match) => (
              <div key={match.id} className="match-row">
                <div className="match-info">
                  <span className="match-title">{match.teams}</span>
                  <div className="match-meta">
                    <span>Pro Kabaddi League 2026</span>
                    <span>•</span>
                    <span>{match.time}</span>
                  </div>
                </div>
                <div className="match-odds-group">
                  <button className="odds-btn odds-back">
                    <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>1</div>
                    {match.back1}
                  </button>
                  <button className="odds-btn odds-lay">
                    <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>2</div>
                    {match.lay1}
                  </button>
                </div>
              </div>
            ))}
          </div>

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
            sports involve financial risk.{" "}
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
