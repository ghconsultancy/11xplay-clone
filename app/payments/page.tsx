import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";

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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://11xplay.black" },
      { "@type": "ListItem", position: 2, name: "Payments", item: "https://11xplay.black/payments" },
    ],
  },
];

export const metadata: Metadata = {
  title: "11xPlay Payments — UPI, Paytm & Instant Withdrawals",
  description:
    "Deposit and withdraw on 11xPlay using UPI, Paytm, and more. Instant withdrawal processing for verified accounts.",
  alternates: { canonical: "https://11xplay.black/payments" },
  robots: { index: true, follow: true },
};

const paymentMethods = [
  { icon: "📱", name: "UPI", desc: "Instant deposits & withdrawals", time: "Instant" },
  { icon: "💙", name: "Paytm", desc: "One-tap payments with Paytm wallet", time: "~30 min" },
  { icon: "🟣", name: "PhonePe", desc: "Fast UPI transfers via PhonePe", time: "Instant" },
  { icon: "🟡", name: "Google Pay", desc: "Quick deposits via Google Pay UPI", time: "Instant" },
  { icon: "🏦", name: "Bank Transfer", desc: "NEFT / IMPS direct bank transfer", time: "Up to 24h" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paymentsSchema) }}
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
              💰 Deposits &amp; Withdrawals — UPI, Paytm &amp; Instant Processing
            </h1>
            <p className="sport-hero-desc">
              Fast, secure deposits and instant withdrawals. Supports all major
              Indian payment methods.
            </p>
          </div>

          {/* Payment methods */}
          <div style={{ padding: "16px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 700,
                marginBottom: "12px",
                color: "var(--color-white)",
              }}
            >
              Supported Payment Methods
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{method.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "14px" }}>{method.name}</div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
                      {method.desc}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-gold)",
                      background: "rgba(232,93,4,0.1)",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {method.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deposit / Withdraw CTAs */}
          <div
            style={{
              padding: "0 16px 16px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <button
              style={{
                background: "var(--theme-primary)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "12px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              + Deposit
            </button>
            <button
              style={{
                background: "var(--color-surface)",
                color: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "12px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Withdraw
            </button>
          </div>

          {/* FAQ section */}
          <div style={{ padding: "0 16px 16px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 700,
                marginBottom: "12px",
                color: "var(--color-white)",
              }}
            >
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
                    padding: "12px 14px",
                  }}
                >
                  <summary
                    style={{
                      fontWeight: 600,
                      fontSize: "13px",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {faq.q}
                    <span style={{ fontSize: "16px", color: "var(--color-gold)" }}>+</span>
                  </summary>
                  <p
                    style={{
                      marginTop: "8px",
                      fontSize: "12px",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Security note */}
          <div
            style={{
              margin: "0 16px 16px",
              padding: "12px 16px",
              background: "rgba(39,174,96,0.05)",
              border: "1px solid rgba(39,174,96,0.2)",
              borderRadius: "6px",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
            }}
          >
            🔒 <strong style={{ color: "#2ecc71" }}>256-bit SSL secured.</strong> All transactions
            are encrypted and processed through RBI-compliant payment gateways.{" "}
            <Link href="/responsible-gaming" style={{ color: "var(--color-gold)" }}>
              Responsible Gaming Policy →
            </Link>
          </div>
        </main>
      </div>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
