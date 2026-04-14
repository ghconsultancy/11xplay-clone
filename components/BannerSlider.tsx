"use client";

import { useState, useEffect } from "react";

// Using picsum for placeholder banners — replace with real 11xPlay CDN images
const SLIDES = [
  {
    src: "https://picsum.photos/seed/11xplay-cricket/1200/400",
    alt: "11xPlay IPL 2026 — Live Fantasy Cricket. Win Big Today.",
  },
  {
    src: "https://picsum.photos/seed/11xplay-casino/1200/400",
    alt: "11xPlay Live Casino — Teen Patti, Roulette & More",
  },
  {
    src: "https://picsum.photos/seed/11xplay-kabaddi/1200/400",
    alt: "11xPlay Pro Kabaddi Fantasy League — Join Now",
  },
  {
    src: "https://picsum.photos/seed/11xplay-app/1200/400",
    alt: "11xPlay App — Download Free APK for Android",
  },
  {
    src: "https://picsum.photos/seed/11xplay-bonus/1200/400",
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
