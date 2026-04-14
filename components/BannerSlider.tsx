"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=80",
    alt: "11xPlay IPL 2026 — Live Cricket Betting & Fantasy. India vs Pakistan.",
  },
  {
    src: "https://images.unsplash.com/photo-1624880357913-a8539238245b?w=1200&q=80",
    alt: "11xPlay Cricket Exchange — Best Odds on Every Match",
  },
  {
    src: "https://images.unsplash.com/photo-1611251135345-18c56206b863?w=1200&q=80",
    alt: "11xPlay Live Casino — Teen Patti, Roulette & More",
  },
  {
    src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
    alt: "11xPlay Pro Kabaddi Fantasy League — Join Now",
  },
  {
    src: "https://images.unsplash.com/photo-1593786082082-3c5bd3b75b58?w=1200&q=80",
    alt: "11xPlay Welcome Bonus — 100% on First Deposit",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="banner-slider"
      role="region"
      aria-label="Promotional banners"
    >
      <div className="banner-slider-track">
        {SLIDES.map((slide, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1200}
            height={400}
            loading={i === 0 ? "eager" : "lazy"}
            className={`banner-slide${i === current ? " active" : ""}`}
          />
        ))}
      </div>
      {/* Navigation dots */}
      <div className="banner-dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`banner-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
