import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "11xPlay Terms and Conditions — rules for using 11xPlay fantasy sports and skill gaming services in India.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="text-page">
          <h1 className="text-page-title">Terms &amp; Conditions</h1>
          <p className="text-page-updated">Last updated: April 2026</p>

          <p>
            Please read these Terms and Conditions carefully before using
            11xPlay. By accessing or using our platform, you agree to be bound
            by these terms.
          </p>

          <h2>1. Eligibility</h2>
          <ul>
            <li>You must be at least 18 years of age to use 11xPlay.</li>
            <li>
              You must be a resident of an eligible Indian state. 11xPlay is not
              available in Assam, Odisha, Nagaland, Sikkim, or Telangana.
            </li>
            <li>
              You confirm that all information you provide is accurate and
              complete.
            </li>
          </ul>

          <h2>2. Nature of Games</h2>
          <p>
            11xPlay offers fantasy sports and skill-based games that require
            knowledge, judgment, and strategic ability. These are distinct from
            games of pure chance. However, all games involve a degree of
            financial risk and users should play responsibly.
          </p>

          <h2>3. Account Registration</h2>
          <ul>
            <li>One account per user. Multiple accounts will be suspended.</li>
            <li>You are responsible for maintaining the security of your password.</li>
            <li>
              KYC (Know Your Customer) verification is required before
              withdrawals.
            </li>
          </ul>

          <h2>4. Deposits &amp; Withdrawals</h2>
          <ul>
            <li>
              Deposits are processed instantly via UPI, Net Banking, and Paytm.
            </li>
            <li>
              Withdrawals are processed within 24 hours to your registered UPI
              ID or bank account.
            </li>
            <li>
              Minimum withdrawal amount is ₹200. Maximum daily withdrawal is
              ₹5,00,000.
            </li>
            <li>
              TDS (Tax Deducted at Source) of 30% applies on net winnings above
              ₹10,000 per year as per Indian tax law.
            </li>
          </ul>

          <h2>5. Bonus &amp; Promotions</h2>
          <ul>
            <li>Bonuses are subject to wagering requirements specified in each offer.</li>
            <li>
              Welcome bonuses are available to new users only on first deposit.
            </li>
            <li>11xPlay reserves the right to modify or cancel promotions at any time.</li>
          </ul>

          <h2>6. Prohibited Activities</h2>
          <ul>
            <li>Use of bots, scripts, or automated tools is strictly prohibited.</li>
            <li>Collusion with other players will result in immediate account suspension.</li>
            <li>Any attempt to defraud 11xPlay or other players will be reported to authorities.</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on 11xPlay — including logos, graphics, software, and
            text — is the property of 11xPlay and may not be reproduced without
            written permission.
          </p>

          <h2 id="privacy">8. Privacy Policy</h2>
          <p>
            We collect and process personal data as described in our Privacy
            Policy. By using 11xPlay, you consent to our data practices. We do
            not sell your personal data to third parties. Data is stored
            securely and encrypted.
          </p>

          <h2>9. Responsible Gaming</h2>
          <p>
            11xPlay is committed to responsible gaming. Please review our{" "}
            <Link href="/responsible-gaming" style={{ color: "var(--color-gold)" }}>
              Responsible Gaming Policy
            </Link>{" "}
            for self-exclusion tools and support resources.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of courts in Mumbai,
            Maharashtra.
          </p>

          <h2>11. Contact</h2>
          <p>
            For any queries regarding these Terms, contact:{" "}
            <strong>legal@11xplay.in</strong>
          </p>

          <div
            style={{
              marginTop: "32px",
              padding: "16px",
              background: "rgba(255,0,0,0.05)",
              border: "1px solid rgba(255,0,0,0.2)",
              borderRadius: "8px",
              fontSize: "12px",
              color: "var(--color-text-muted)",
            }}
          >
            <strong style={{ color: "#ff6b6b" }}>18+ Only.</strong> Fantasy
            sports and skill-based gaming involve financial risk. Not available
            in Assam, Odisha, Nagaland, Sikkim, and Telangana.
          </div>

          <div style={{ marginTop: "20px" }}>
            <Link href="/" style={{ color: "var(--color-gold)", fontWeight: 600 }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
