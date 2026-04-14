import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://11xplay.black";

export const metadata: Metadata = {
  title: "Download 11xPlay App — Cricket ID APK for Android & iOS",
  description:
    "Download the 11xPlay APK for Android or install on iOS. Free app for cricket fantasy sports and skill-based games in India.",
  alternates: { canonical: `${siteUrl}/app` },
  openGraph: {
    title: "Download 11xPlay App — Cricket ID APK for Android & iOS",
    description:
      "Download the 11xPlay APK for Android or install on iOS. Free app for cricket fantasy sports and skill-based games in India.",
    url: `${siteUrl}/app`,
  },
  robots: { index: true, follow: true },
};

const steps = [
  {
    num: "1",
    title: "Tap Download APK",
    desc: "Click the 'Download APK' button on this page to download the 11xPlay Android app file directly to your phone.",
    icon: "📥",
  },
  {
    num: "2",
    title: "Allow Unknown Sources",
    desc: "Go to Settings → Security → Enable 'Install from Unknown Sources' (or 'Install Unknown Apps'). This is required for APK installs.",
    icon: "⚙️",
  },
  {
    num: "3",
    title: "Open the APK File",
    desc: "Tap the downloaded 11xPlay APK file from your notification bar or Downloads folder to begin installation.",
    icon: "📂",
  },
  {
    num: "4",
    title: "Install & Play",
    desc: "Tap 'Install' on the installation screen. Once done, open 11xPlay and log in or register to start playing instantly.",
    icon: "🚀",
  },
];

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Optimized for Indian 4G networks. Load times under 2 seconds.",
  },
  {
    icon: "🔒",
    title: "100% Secure",
    desc: "SSL encrypted. Your money and data are always protected.",
  },
  {
    icon: "💰",
    title: "Instant UPI Payouts",
    desc: "Withdraw winnings instantly to any UPI ID, bank account, or Paytm.",
  },
  {
    icon: "🏏",
    title: "Live IPL Fantasy",
    desc: "Build your dream XI and compete in IPL 2026 daily fantasy contests.",
  },
  {
    icon: "🎰",
    title: "Live Casino",
    desc: "Teen Patti, Roulette, Andar Bahar — all live with real dealers.",
  },
  {
    icon: "📲",
    title: "Push Notifications",
    desc: "Get live score alerts, payout confirmations, and offer updates instantly.",
  },
];

const appSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "11xPlay App",
    applicationCategory: "SportsApplication",
    operatingSystem: "Android, iOS",
    url: `${siteUrl}/app`,
    downloadUrl: `${siteUrl}/app`,
    description:
      "Download the 11xPlay APK for Android or install on iOS. Free app for cricket fantasy sports and skill-based games in India.",
    inLanguage: "en-IN",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      bestRating: "5",
      ratingCount: "10000",
    },
    publisher: { "@type": "Organization", name: "11xPlay", url: siteUrl },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I download the 11xPlay APK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit 11xplay.black/app and tap the Download APK button. Enable 'Install from unknown sources' in your Android settings, then open the downloaded APK file to install. The process takes under 2 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Is the 11xPlay app available on iOS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the 11xPlay app is available for iOS devices. Visit 11xplay.black/app and follow the iOS installation guide to add it to your iPhone or iPad.",
        },
      },
      {
        "@type": "Question",
        name: "What cricket fantasy sports are available on the 11xPlay app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 11xPlay app features IPL 2026 fantasy cricket, live match prediction games, T20 fantasy leagues, and skill-based cricket ID contests for Indian players.",
        },
      },
      {
        "@type": "Question",
        name: "Is the 11xPlay app safe to download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The 11xPlay APK is officially distributed via 11xplay.black/app. Always download from the official site to ensure you get the authentic, malware-free version.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Download App", item: `${siteUrl}/app` },
    ],
  },
];

export default function AppDownloadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <Header />

      <main id="main-content">
        <div className="app-page">
          {/* Hero section */}
          <section className="app-hero" aria-label="App download hero">
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(232,93,4,0.12)",
                  border: "1px solid rgba(232,93,4,0.3)",
                  color: "var(--color-gold)",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "14px",
                }}
              >
                📲 FREE DOWNLOAD
              </div>
              <h1 className="app-hero-title">
                Download 11xPlay App —{" "}
                <span>Cricket ID APK for Android &amp; iOS</span>
              </h1>
              <p className="app-hero-desc">
                India&apos;s fastest fantasy sports and skill gaming app. Live IPL
                cricket, casino games, instant UPI withdrawals — all in one app.
                Completely free to download.
              </p>

              <div className="app-dl-btns">
                <a
                  href="#download"
                  className="btn-dl-primary"
                  aria-label="Download 11xPlay APK for Android"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7 7-7Z" />
                  </svg>
                  Download APK (Free)
                </a>
                <a
                  href="#steps"
                  className="btn-dl-secondary"
                >
                  How to Install
                </a>
              </div>

              <p
                style={{
                  fontSize: "12px",
                  color: "var(--color-text-muted)",
                  marginTop: "12px",
                }}
              >
                ✅ Version 4.2.1 &nbsp;•&nbsp; ✅ 28 MB &nbsp;•&nbsp; ✅ Android 6.0+
              </p>
            </div>

            {/* Phone mockup */}
            <div className="app-mockup" aria-hidden="true">
              <div className="app-mockup-frame">
                <div className="app-mockup-screen">
                  <span style={{ fontSize: "36px" }}>11x</span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "var(--color-gold)",
                    }}
                  >
                    Play
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      width: "100%",
                      padding: "0 8px",
                    }}
                  >
                    {["🏏 Cricket", "🏆 IPL 2026", "🎰 Casino"].map((item) => (
                      <div
                        key={item}
                        style={{
                          background: "rgba(232,93,4,0.15)",
                          border: "1px solid rgba(232,93,4,0.25)",
                          borderRadius: "6px",
                          padding: "6px 8px",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "var(--color-gold)",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-step install guide */}
          <section id="steps" className="app-steps-section" aria-label="Installation guide">
            <h2 className="steps-title">
              📋 How to Install 11xPlay APK
            </h2>
            <div className="steps-grid">
              {steps.map((step) => (
                <div key={step.num} className="step-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="step-num">{step.num}</span>
                    <span style={{ fontSize: "20px" }}>{step.icon}</span>
                  </div>
                  <p className="step-title">{step.title}</p>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots placeholder */}
          <section aria-label="App screenshots" style={{ marginBottom: "32px" }}>
            <h2 className="steps-title">
              📸 App Screenshots
            </h2>
            <div
              style={{
                display: "flex",
                gap: "12px",
                overflowX: "auto",
                paddingBottom: "8px",
                scrollbarWidth: "thin",
              }}
            >
              {[
                "Home Screen",
                "IPL Fantasy",
                "Live Casino",
                "Deposit / Withdraw",
                "Match Predictions",
              ].map((screen, i) => (
                <div
                  key={screen}
                  style={{
                    flexShrink: 0,
                    width: "160px",
                    height: "280px",
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, #1a3da6, #0f2462)"
                        : "linear-gradient(135deg, #0f2462, #0a1a40)",
                    border: "2px solid var(--color-border)",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px",
                  }}
                >
                  <span style={{ fontSize: "28px" }}>
                    {["🏠", "🏏", "🎰", "💰", "📊"][i]}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textAlign: "center",
                    }}
                  >
                    {screen}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section aria-label="App features" style={{ marginBottom: "32px" }}>
            <h2 className="steps-title">
              ✨ Why Choose 11xPlay?
            </h2>
            <div className="features-grid">
              {features.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <span className="feature-icon">{feature.icon}</span>
                  <p className="feature-title">{feature.title}</p>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Download CTA again */}
          <section
            id="download"
            aria-label="Final download CTA"
            style={{
              background: "linear-gradient(135deg, rgba(232,93,4,0.12) 0%, rgba(247,165,33,0.06) 100%)",
              border: "1px solid rgba(232,93,4,0.25)",
              borderRadius: "12px",
              padding: "28px 24px",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                fontWeight: 800,
                marginBottom: "8px",
              }}
            >
              Ready to Play?
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-text-muted)",
                marginBottom: "20px",
              }}
            >
              Download the 11xPlay APK now — free, fast &amp; secure
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#download"
                className="btn-dl-primary"
                style={{ fontSize: "16px", padding: "14px 28px" }}
              >
                📥 Download APK — Free
              </a>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "var(--color-text-muted)",
                marginTop: "12px",
              }}
            >
              Version 4.2.1 • 28 MB • Android 6.0+ • iOS coming soon
            </p>
          </section>

          {/* Responsible gaming */}
          <div
            style={{
              padding: "12px 16px",
              background: "rgba(255,0,0,0.05)",
              border: "1px solid rgba(255,0,0,0.15)",
              borderRadius: "6px",
              fontSize: "12px",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#ff6b6b" }}>18+ Only.</strong> Fantasy
            sports and skill-based gaming involve financial risk. Not available
            in Assam, Odisha, Nagaland, Sikkim, and Telangana. Play
            responsibly.{" "}
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
