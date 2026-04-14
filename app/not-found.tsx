import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found-page">
        <div className="not-found-code" aria-hidden="true">
          404
        </div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-home">
          ← Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
