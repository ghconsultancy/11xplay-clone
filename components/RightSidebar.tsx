const liveMatches = [
  {
    sport: "🏏",
    teams: "India vs Pakistan",
    score: "IND 287/6 (42 ov)",
    status: "Live",
  },
  {
    sport: "🏏",
    teams: "CSK vs MI",
    score: "CSK 156/4 (18 ov)",
    status: "Live",
  },
  {
    sport: "🏏",
    teams: "RCB vs KKR",
    score: "Starts 7:30 PM",
    status: "Today",
  },
  {
    sport: "⚽",
    teams: "Man City vs Arsenal",
    score: "1 - 1 (HT)",
    status: "Live",
  },
  {
    sport: "🎾",
    teams: "Djokovic vs Alcaraz",
    score: "6-3, 4-5",
    status: "Live",
  },
];

const quickLinks = [
  { label: "🏆 IPL 2026 Fantasy", href: "/sports/ipl" },
  { label: "🏏 Cricket Predictions", href: "/sports/cricket" },
  { label: "🎰 Live Casino", href: "/casino" },
  { label: "📲 Download App", href: "/app" },
];

export default function RightSidebar() {
  return (
    <aside className="right-sidebar" aria-label="Live matches and quick links">
      {/* Live matches */}
      <div className="sidebar-card">
        <p className="sidebar-card-title">🔴 Live &amp; Upcoming</p>
        <div>
          {liveMatches.map((match) => (
            <div key={match.teams} className="live-match-item">
              <span className="live-badge">
                {match.status === "Live" ? "● " : ""}
                {match.status}
              </span>
              <span className="match-teams">
                {match.sport} {match.teams}
              </span>
              <span className="match-score">{match.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="sidebar-card">
        <p className="sidebar-card-title">Quick Links</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="sidebar-quick-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* App download CTA */}
      <div
        className="sidebar-card"
        style={{
          background: "linear-gradient(135deg, rgba(232,93,4,0.15) 0%, rgba(247,165,33,0.08) 100%)",
          borderColor: "rgba(232,93,4,0.3)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "22px", marginBottom: "6px" }}>📲</p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 700,
            marginBottom: "6px",
          }}
        >
          Download 11xPlay App
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "var(--color-text-muted)",
            marginBottom: "12px",
          }}
        >
          Fast. Secure. Instant payouts.
        </p>
        <a
          href="/app"
          style={{
            display: "block",
            background: "var(--theme-secondary)",
            color: "#fff",
            padding: "8px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Get APK Free
        </a>
      </div>
    </aside>
  );
}
