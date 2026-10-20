import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="relative min-h-screen">
      <div className="grid-texture pointer-events-none absolute inset-x-0 top-0 h-[80vh]" aria-hidden />
      <SiteHeader />
      <main className="relative">{children}</main>
      <SiteFooter />
    </div>
  );
}
