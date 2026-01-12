import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/subscribe", label: "Subscribe"},
  { href: "/watchlist", label: "Watchlist" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">
          SkyTrackR
        </Link>

        <nav className="flex gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
