import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Responsible Gaming Policy",
  description:
    "11xPlay Responsible Gaming — our commitment to player safety, self-exclusion tools, deposit limits, and support resources for India.",
  alternates: { canonical: "/responsible-gaming" },
};

export default function ResponsibleGamingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="text-page">
          <h1 className="text-page-title">Responsible Gaming</h1>
          <p className="text-page-updated">Last updated: April 2026</p>

          <p>
            At 11xPlay, we are committed to providing a safe and responsible
            gaming environment. We believe that fantasy sports and skill-based
            gaming should be an enjoyable entertainment activity, not a source
            of financial stress or harm.
          </p>

          <h2>Who Can Play</h2>
          <ul>
            <li>
              You must be <strong>18 years of age or older</strong> to use
              11xPlay.
            </li>
            <li>
              11xPlay is not available in the states of{" "}
              <strong>
                Assam, Odisha, Nagaland, Sikkim, and Telangana
              </strong>{" "}
              due to local regulations.
            </li>
            <li>
              By using our platform, you confirm that you are a resident of an
              eligible state and are aged 18 or above.
            </li>
          </ul>

          <h2 id="self-exclusion">Self-Exclusion</h2>
          <p>
            If you feel that gaming is becoming a problem, you can request a
            self-exclusion by contacting our support team. Self-exclusion options
            include:
          </p>
          <ul>
            <li>
              <strong>Cooling off period:</strong> 24 hours, 7 days, or 30 days
            </li>
            <li>
              <strong>Permanent exclusion:</strong> Contact support to
              permanently close your account
            </li>
            <li>
              <strong>Deposit limits:</strong> Set daily, weekly, or monthly
              deposit caps
            </li>
          </ul>

          <h2>Deposit &amp; Spending Limits</h2>
          <p>
            We encourage all users to set personal spending limits. You can
            configure:
          </p>
          <ul>
            <li>Daily deposit limits</li>
            <li>Weekly deposit limits</li>
            <li>Monthly deposit limits</li>
            <li>Session time reminders</li>
          </ul>

          <h2>Warning Signs of Problem Gaming</h2>
          <p>
            Please take a break and seek help if you experience any of the
            following:
          </p>
          <ul>
            <li>Spending more money than you can afford to lose</li>
            <li>Gaming to escape stress, anxiety, or depression</li>
            <li>Neglecting work, family, or personal responsibilities</li>
            <li>Borrowing money to fund gaming activity</li>
            <li>Feeling restless or irritable when not gaming</li>
            <li>Chasing losses by playing more</li>
          </ul>

          <h2>Support Resources</h2>
          <p>
            If you or someone you know needs help with gaming-related issues,
            please reach out to:
          </p>
          <ul>
            <li>
              <strong>iCall (TISS):</strong> +91-9152987821 — free counselling
              helpline
            </li>
            <li>
              <strong>Vandrevala Foundation:</strong> 1860-2662-345 — 24/7 mental
              health support
            </li>
            <li>
              <strong>11xPlay Support:</strong> Contact us at support@11xplay.in
            </li>
          </ul>

          <h2>Our Commitments</h2>
          <ul>
            <li>We never market to underage users</li>
            <li>We do not extend credit to players</li>
            <li>We provide transparent terms and fair game mechanics</li>
            <li>We keep your winnings secure and pay out promptly</li>
            <li>We train our staff to identify signs of problem gaming</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            For any responsible gaming queries, email us at{" "}
            <strong>responsiblegaming@11xplay.in</strong> or use the in-app
            support chat. We aim to respond within 24 hours.
          </p>

          <div
            style={{
              marginTop: "32px",
              padding: "16px",
              background: "rgba(255,0,0,0.05)",
              border: "1px solid rgba(255,0,0,0.2)",
              borderRadius: "8px",
            }}
          >
            <p style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "4px" }}>
              🔞 18+ Only
            </p>
            <p>
              Fantasy sports and skill-based gaming involve financial risk. If
              gaming stops being fun,{" "}
              <strong>please stop and seek help</strong>. 11xPlay supports
              responsible gaming.
            </p>
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
