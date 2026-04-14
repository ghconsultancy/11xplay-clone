import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const registerSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://11xplay.black" },
    { "@type": "ListItem", position: 2, name: "Register", item: "https://11xplay.black/register" },
  ],
};

export const metadata: Metadata = {
  title: "Register on 11xPlay — Create Your Cricket ID in Minutes",
  description:
    "Create your 11xPlay cricket ID in minutes. Join millions of Indian fantasy sports players.",
  alternates: { canonical: "https://11xplay.black/register" },
  robots: { index: false, follow: true },
};

export default function RegisterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(registerSchema) }}
      />
      <Header />
      <main id="main-content" className="login-page">
        <div className="login-card">
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Link href="/" className="logo-text" style={{ fontSize: "28px" }}>
              11x<span style={{ color: "var(--color-gold)" }}>Play</span>
            </Link>
          </div>

          <h1 className="login-title">Create Your 11xPlay Cricket ID — Register in Minutes</h1>
          <p className="login-subtitle">Join millions of Indian fantasy sports players</p>

          {/* Register form */}
          <form action="#" method="POST" noValidate>
            <div className="form-group">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                autoComplete="name"
                className="form-input"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                className="form-input"
                placeholder="Enter your 10-digit mobile number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reg-password" className="form-label">
                Create Password
              </label>
              <input
                id="reg-password"
                name="password"
                type="password"
                autoComplete="new-password"
                className="form-input"
                placeholder="Create a strong password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="referral" className="form-label">
                Referral Code <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>(Optional)</span>
              </label>
              <input
                id="referral"
                name="referral"
                type="text"
                className="form-input"
                placeholder="Enter referral code if you have one"
              />
            </div>

            <button type="submit" className="btn-submit">
              Create My Cricket ID
            </button>
          </form>

          <div className="login-divider">or register with</div>

          {/* WhatsApp register alternative */}
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "#075e54",
              color: "#fff",
              padding: "10px",
              borderRadius: "var(--radius)",
              fontSize: "14px",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get Instant Cricket ID via WhatsApp
          </a>

          <div className="login-alt-link">
            Already have an account?{" "}
            <Link href="/login">Sign In</Link>
          </div>

          {/* 18+ note */}
          <p
            style={{
              textAlign: "center",
              fontSize: "11px",
              color: "var(--color-text-muted)",
              marginTop: "16px",
              lineHeight: 1.6,
            }}
          >
            By registering you confirm you are 18+ and agree to our{" "}
            <Link href="/terms" style={{ color: "var(--color-gold)" }}>
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/responsible-gaming" style={{ color: "var(--color-gold)" }}>
              Responsible Gaming
            </Link>{" "}
            policy. Not available in Assam, Odisha, Nagaland, Sikkim, and Telangana.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
