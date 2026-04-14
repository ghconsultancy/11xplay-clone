import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://11xplay.in";

export const metadata: Metadata = {
  title: "11xPlay Payments — UPI, Paytm & Instant Withdrawals",
  description:
    "Deposit and withdraw on 11xPlay using UPI, Paytm, and more. Instant withdrawal processing for verified accounts.",
  alternates: {
    canonical: `${siteUrl}/payments`,
    languages: { "en-IN": `${siteUrl}/payments` },
  },
};

const paymentsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What payment methods does 11xPlay accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "11xPlay accepts UPI, Paytm, PhonePe, Google Pay, and bank transfers (NEFT/IMPS) for deposits. All major Indian payment methods are supported for instant transactions.",
        },
      },
      {
        "@type": "Question",
        name: "How long does withdrawal take on 11xPlay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Withdrawals via UPI are processed instantly for verified accounts. Bank transfer withdrawals may take up to 24 hours. Paytm withdrawals are typically processed within 30 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum deposit on 11xPlay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The minimum deposit on 11xPlay is ₹100 via UPI or Paytm. There is no maximum deposit limit for verified accounts.",
        },
      },
      {
        "@type": "Question",
        name: "Is UPI safe for deposits on 11xPlay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All UPI transactions on 11xPlay are secured with bank-grade encryption and 256-bit SSL. Your financial data is never stored on 11xPlay servers.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Payments", item: `${siteUrl}/payments` },
    ],
  },
];

const paymentMethods = [
  { name: "UPI", icon: "⚡", desc: "Instant deposits & withdrawals via any UPI app", tag: "Instant" },
  { name: "Paytm", icon: "💙", desc: "Deposit and withdraw with Paytm wallet", tag: "Fast" },
  { name: "PhonePe", icon: "💜", desc: "Direct bank transfers via PhonePe", tag: "Instant" },
  { name: "Google Pay", icon: "🔵", desc: "Pay securely with Google Pay UPI", tag: "Instant" },
  { name: "Net Banking", icon: "🏦", desc: "NEFT/IMPS from any Indian bank account", tag: "1-24 hrs" },
  { name: "Bank Transfer", icon: "💳", desc: "Direct IMPS bank transfer for large amounts", tag: "1-24 hrs" },
];

const faqs = [
  {
    q: "What payment methods does 11xPlay accept?",
    a: "11xPlay accepts UPI, Paytm, PhonePe, Google Pay, and bank transfers (NEFT/IMPS) for deposits. All major Indian payment methods are supported for instant transactions.",
  },
  {
    q: "How long does withdrawal take on 11xPlay?",
    a: "Withdrawals via UPI are processed instantly for verified accounts. Bank transfer withdrawals may take up to 24 hours. Paytm withdrawals are typically processed within 30 minutes.",
  },
  {
    q: "What is the minimum deposit on 11xPlay?",
    a: "The minimum deposit on 11xPlay is ₹100 via UPI or Paytm. There is no maximum deposit limit for verified accounts.",
  },
  {
    q: "Is UPI safe for deposits on 11xPlay?",
    a: "Yes. All UPI transactions on 11xPlay are secured with bank-grade encryption and 256-bit SSL. Your financial data is never stored on 11xPlay servers.",
  },
];

export default function PaymentsPage() {
  return (
    <>
      {paymentsSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main id="main-content">
        <div className="app-page">
          {/* Hero */}
          <div
            style={{
              padding: "24px 16px 16px",
              background: "linear-gradient(135deg, rgba(232,93,4,0.12) 0%, rgba(247,165,33,0.06) 100%)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <h1 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>
              💳 Deposits &amp; Withdrawals — UPI, Paytm &amp; Instant Processing
            </h1>
            <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
              Deposit and withdraw on 11xPlay using UPI, Paytm, and more. Instant withdrawal processing for verified accounts.
            </p>
          </div>

          {/* Payment methods */}
          <div style={{ padding: "16px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
              Accepted Payment Methods
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            >
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    padding: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "20px" }}>{method.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: "14px" }}>{method.name}</span>
                    <span
                      style={{
                        marginLeft: "auto",
                        background: "rgba(232,93,4,0.15)",
                        color: "var(--color-gold)",
                        fontSize: "9px",
                        fontWeight: 800,
                        padding: "2px 6px",
                        borderRadius: "10px",
                      }}
                    >
                      {method.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                    {method.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ section */}
          <div style={{ padding: "0 16px 16px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
              Payments FAQ
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    padding: "14px",
                  }}
                >
                  <summary
                    style={{ fontWeight: 600, fontSize: "14px", cursor: "pointer" }}
                  >
                    {faq.q}
                  </summary>
                  <p style={{ marginTop: "10px", fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Deposit CTA */}
          <div
            style={{
              margin: "0 16px 16px",
              padding: "20px",
              background: "linear-gradient(135deg, rgba(232,93,4,0.12) 0%, rgba(247,165,33,0.06) 100%)",
              border: "1px solid rgba(232,93,4,0.25)",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: 700, marginBottom: "12px" }}>
              Ready to deposit? Create your cricket ID first.
            </p>
            <Link
              href="/register"
              style={{
                display: "inline-block",
                background: "var(--theme-primary)",
                color: "#fff",
                padding: "10px 28px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Register Now — It&apos;s Free
            </Link>
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
            <strong style={{ color: "#ff6b6b" }}>18+ Only.</strong> Fantasy sports and skill-based gaming involve financial risk.{" "}
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
