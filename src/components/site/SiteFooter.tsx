export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-xs tracking-[0.2em]">DBMS PROJECT HUB / 2026</span>
        <p className="text-sm text-muted-foreground">An academic project for the Database Management Systems course.</p>
        <a href="#top" className="eyebrow transition-colors hover:text-primary">Back to top ↑</a>
      </div>
    </footer>
  );
}
