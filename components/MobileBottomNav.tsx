import Link from "next/link";

const navItems = [
  { href: "/", icon: "🏠", label: "Home" },
  { href: "/sports/cricket", icon: "🏏", label: "Sports" },
  { href: "/casino", icon: "🎰", label: "Casino" },
  { href: "/app", icon: "📲", label: "App" },
  { href: "/login", icon: "👤", label: "Account" },
];

export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {navItems.map((item) => (
        <Link key={item.label} href={item.href} className="mobile-nav-item">
          <span className="mobile-nav-icon" aria-hidden="true">
            {item.icon}
          </span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
