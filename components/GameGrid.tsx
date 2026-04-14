import Link from "next/link";

const games = [
  {
    name: "Roulette",
    img: "https://picsum.photos/seed/roulette/300/200",
    w: 300,
    h: 200,
    href: "/casino",
  },
  {
    name: "Teen Patti",
    img: "https://picsum.photos/seed/teenpatti/300/200",
    w: 300,
    h: 200,
    href: "/casino",
  },
  {
    name: "Dragon Tiger",
    img: "https://picsum.photos/seed/dragontiger/300/200",
    w: 300,
    h: 200,
    href: "/casino",
  },
  {
    name: "Andar Bahar",
    img: "https://picsum.photos/seed/andarbahar/300/200",
    w: 300,
    h: 200,
    href: "/casino",
  },
  {
    name: "Lucky 7",
    img: "https://picsum.photos/seed/lucky7/300/200",
    w: 300,
    h: 200,
    href: "/casino",
  },
  {
    name: "Live Blackjack",
    img: null,
    bg: "#1a3da6",
    icon: "🃏",
    href: "/casino",
  },
  {
    name: "Baccarat",
    img: null,
    bg: "#0f2462",
    icon: "🎰",
    href: "/casino",
  },
  {
    name: "Sic Bo",
    img: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=200&fit=crop&q=80",
    w: 300,
    h: 200,
    href: "/casino",
  },
  {
    name: "Cricket Fantasy",
    img: null,
    bg: "#1a3da6",
    icon: "🏏",
    href: "/sports/cricket",
  },
  {
    name: "IPL 2026",
    img: null,
    bg: "#0f2462",
    icon: "🏆",
    href: "/sports/ipl",
  },
  {
    name: "Kabaddi",
    img: null,
    bg: "#1a3da6",
    icon: "🤼",
    href: "/sports/kabaddi",
  },
  {
    name: "Horse Racing",
    img: null,
    bg: "#0f2462",
    icon: "🏇",
    href: "#",
  },
];

export default function GameGrid() {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-title-icon">🎮</span>
          Popular Games
        </h2>
        <Link href="/casino" className="section-link-all">
          View All →
        </Link>
      </div>
      <div className="game-grid">
        {games.map((game) => (
          <Link key={game.name} href={game.href} className="game-card">
            {game.img ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={game.img}
                  alt={game.name}
                  width={game.w}
                  height={game.h}
                  loading="lazy"
                  className="game-card-img"
                />
                <div className="game-card-overlay">
                  <span className="game-card-name">{game.name}</span>
                </div>
              </>
            ) : (
              <div
                className="game-card-fallback"
                style={{ background: game.bg }}
              >
                <span className="game-card-fallback-icon">{game.icon}</span>
                <span className="game-card-name" style={{ color: "#fff" }}>
                  {game.name}
                </span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}
