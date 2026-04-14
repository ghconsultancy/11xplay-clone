import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand">
          <h3>
            11x<span>Play</span>
          </h3>
          <p>
            India&apos;s premier fantasy sports and skill-based gaming platform.
            Play cricket, football, IPL fantasy leagues and enjoy live skill
            games with instant UPI payouts.
          </p>
          <p style={{ fontSize: "12px", color: "#777" }}>
            This platform is intended for entertainment purposes. Skill-based
            gaming involves real money and may not be suitable for all users.
          </p>
        </div>

        {/* Sports */}
        <div>
          <p className="footer-col-title">Sports</p>
          <div className="footer-links">
            <Link href="/sports/cricket">Cricket</Link>
            <Link href="/sports/ipl">IPL 2026</Link>
            <Link href="/sports/kabaddi">Kabaddi</Link>
            <Link href="#">Football</Link>
            <Link href="#">Tennis</Link>
            <Link href="#">Horse Racing</Link>
          </div>
        </div>

        {/* Casino */}
        <div>
          <p className="footer-col-title">Games</p>
          <div className="footer-links">
            <Link href="/casino">Live Casino</Link>
            <Link href="/casino">Roulette</Link>
            <Link href="/casino">Teen Patti</Link>
            <Link href="/casino">Andar Bahar</Link>
            <Link href="/casino">Dragon Tiger</Link>
            <Link href="/casino">Baccarat</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="footer-col-title">Company</p>
          <div className="footer-links">
            <Link href="/app">Download App</Link>
            <Link href="/responsible-gaming">Responsible Gaming</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/terms#privacy">Privacy Policy</Link>
            <Link href="/responsible-gaming#self-exclusion">
              Self Exclusion
            </Link>
          </div>
        </div>
      </div>

      {/* 18+ disclaimer */}
      <div className="disclaimer-bar">
        <span className="disclaimer-badge">18+</span>
        <p className="disclaimer-text">
          This platform is strictly for users aged 18 and above. Fantasy sports
          and skill-based gaming involve financial risk. Play responsibly. If you
          feel you have a problem, contact our{" "}
          <Link href="/responsible-gaming" style={{ color: "#f7a521" }}>
            Responsible Gaming
          </Link>{" "}
          team. Not available in Assam, Odisha, Nagaland, Sikkim, and Telangana.
        </p>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} 11xPlay. All rights reserved.
        </span>
        <div className="footer-legal-links">
          <Link href="/terms">Terms</Link>
          <Link href="/terms#privacy">Privacy</Link>
          <Link href="/responsible-gaming">Responsible Gaming</Link>
        </div>
      </div>
    </footer>
  );
}
