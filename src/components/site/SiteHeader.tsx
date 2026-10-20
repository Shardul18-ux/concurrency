import { Link } from "@tanstack/react-router";

function DbMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V5.5" />
      <path d="M4.5 12v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V12" />
    </svg>
  );
}

const nav = [
  { to: "/", label: "Overview" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="flex items-center gap-2.5 font-mono text-sm tracking-[0.2em]" aria-label="DBMS Hub home">
          <DbMark />
          <span>DBMS <span className="text-muted-foreground">/</span> HUB</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <span className="eyebrow hidden lg:inline">Academic Showcase · 2026</span>
      </div>
    </header>
  );
}
