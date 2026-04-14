import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "IPL 2026 Fantasy & Predictions",
  description:
    "IPL 2026 live on 11xPlay — play fantasy cricket, predict match outcomes, win instant UPI payouts. All IPL teams: CSK, MI, RCB, KKR, GT, SRH, DC, PBKS, RR, LSG.",
  alternates: { canonical: "/sports/ipl" },
};

const iplMatches = [
  {
    id: 1,
    home: "CSK",
    away: "MI",
    homeColor: "#ffdd00",
    awayColor: "#004ba0",
    venue: "MA Chidambaram Stadium, Chennai",
    time: "Today 7:30 PM IST",
    back1: "1.72",
    lay1: "1.95",
    isLive: true,
  },
  {
    id: 2,
    home: "RCB",
    away: "KKR",
    homeColor: "#e20000",
    awayColor: "#3a1f7a",
    venue: "M Chinnaswamy Stadium, Bengaluru",
    time: "Today 3:30 PM IST",
    back1: "2.10",
    lay1: "2.30",
    isLive: false,
  },
  {
    id: 3,
    home: "GT",
    away: "SRH",
    homeColor: "#1d4e8f",
    awayColor: "#f47a20",
    venue: "Narendra Modi Stadium, Ahmedabad",
    time: "Tomorrow 7:30 PM IST",
    back1: "1.60",
    lay1: "1.80",
    isLive: false,
  },
  {
    id: 4,
    home: "DC",
    away: "PBKS",
    homeColor: "#0062b8",
    awayColor: "#aa2029",
    venue: "Arun Jaitley Stadium, Delhi",
    time: "Apr 16, 3:30 PM IST",
    back1: "1.90",
    lay1: "2.10",
    isLive: false,
  },
  {
    id: 5,
    home: "RR",
    away: "LSG",
    homeColor: "#ea1a85",
    awayColor: "#a4dd00",
    venue: "Sawai Mansingh Stadium, Jaipur",
    time: "Apr 17, 7:30 PM IST",
    back1: "2.00",
    lay1: "2.20",
    isLive: false,
  },
];

const iplTeams = [
  { name: "CSK", full: "Chennai Super Kings", color: "#ffdd00", wins: 8, played: 11 },
  { name: "MI", full: "Mumbai Indians", color: "#004ba0", wins: 7, played: 11 },
  { name: "RCB", full: "Royal Challengers Bangalore", color: "#e20000", wins: 6, played: 11 },
  { name: "GT", full: "Gujarat Titans", color: "#1d4e8f", wins: 6, played: 11 },
  { name: "SRH", full: "Sunrisers Hyderabad", color: "#f47a20", wins: 5, played: 11 },
  { name: "KKR", full: "Kolkata Knight Riders", color: "#3a1f7a", wins: 5, played: 11 },
  { name: "DC", full: "Delhi Capitals", color: "#0062b8", wins: 4, played: 11 },
  { name: "PBKS", full: "Punjab Kings", color: "#aa2029", wins: 4, played: 11 },
  { name: "RR", full: "Rajasthan Royals", color: "#ea1a85", wins: 3, played: 11 },
  { name: "LSG", full: "Lucknow Super Giants", color: "#a4dd00", wins: 3, played: 11 },
];

export default function IPLPage() {
  return (
    <>
      <Header />
      <div
        className="dashboard-grid"
        style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}
      >
        <LeftSidebar />

        <main id="main-content" className="main-content">
          {/* Hero */}
          <div
            className="sport-hero"
            style={{
              background: "linear-gradient(135deg, #1a0a00 0%, var(--color-surface) 100%)",
            }}
          >
            <div className="live-badge" style={{ marginBottom: "8px" }}>
              ● LIVE
            </div>
            <h1 className="sport-hero-title">
              🏆 IPL 2026 Fantasy
            </h1>
            <p className="sport-hero-desc">
              India&apos;s biggest cricket league — live on 11xPlay. Build your
              fantasy team, predict match outcomes, and win big with instant UPI
              payouts.
            </p>
          </div>

          {/* Tabs */}
          <div className="sport-tab-list">
            {["Fixtures", "Points Table", "Fantasy Teams", "Top Scorers"].map(
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

          {/* Match list */}
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-title-icon">📅</span>
              Upcoming Fixtures
            </h2>
          </div>
          <div className="match-list">
            {iplMatches.map((match) => (
              <div key={match.id} className="match-row">
                <div className="match-info">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {match.isLive && <span className="live-badge">● LIVE</span>}
                    <span className="match-title">
                      <span style={{ color: match.homeColor, fontWeight: 800 }}>
                        {match.home}
                      </span>
                      {" vs "}
                      <span style={{ color: match.awayColor, fontWeight: 800 }}>
                        {match.away}
                      </span>
                    </span>
                  </div>
                  <div className="match-meta">
                    <span>{match.venue}</span>
                    <span>•</span>
                    <span>{match.time}</span>
                  </div>
                </div>
                <div className="match-odds-group">
                  <button className="odds-btn odds-back" aria-label="Back odds">
                    <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>
                      {match.home}
                    </div>
                    <div>{match.back1}</div>
                  </button>
                  <button className="odds-btn odds-lay" aria-label="Lay odds">
                    <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>
                      {match.away}
                    </div>
                    <div>{match.lay1}</div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Points Table */}
          <div className="section-header" style={{ marginTop: "16px" }}>
            <h2 className="section-title">
              <span className="section-title-icon">📊</span>
              Points Table
            </h2>
          </div>
          <div style={{ overflowX: "auto", padding: "0 16px 16px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "13px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "var(--color-surface-2)",
                    textAlign: "left",
                  }}
                >
                  {["#", "Team", "P", "W", "L", "Pts"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "8px 10px",
                        color: "var(--color-gold)",
                        fontWeight: 700,
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {iplTeams.map((team, i) => (
                  <tr
                    key={team.name}
                    style={{
                      borderBottom: "1px solid var(--color-border)",
                      background: i < 4 ? "rgba(232,93,4,0.04)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "8px 10px", color: "var(--color-text-muted)" }}>
                      {i + 1}
                    </td>
                    <td style={{ padding: "8px 10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: team.color,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontWeight: 600 }}>{team.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: "8px 10px", color: "var(--color-text-muted)" }}>
                      {team.played}
                    </td>
                    <td style={{ padding: "8px 10px", color: "var(--color-text-muted)" }}>
                      {team.wins}
                    </td>
                    <td style={{ padding: "8px 10px", color: "var(--color-text-muted)" }}>
                      {team.played - team.wins}
                    </td>
                    <td
                      style={{
                        padding: "8px 10px",
                        fontWeight: 700,
                        color: i < 4 ? "var(--color-gold)" : "var(--color-white)",
                      }}
                    >
                      {team.wins * 2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
