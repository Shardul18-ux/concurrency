import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ProjectDirectory } from "@/components/site/ProjectDirectory";
import { NetworkIllustration } from "@/components/site/NetworkIllustration";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DBMS Project Hub — Four groups. One data story." },
      { name: "description", content: "Explore the concepts, experiments, and interactive demonstrations behind our DBMS projects." },
      { property: "og:title", content: "DBMS Project Hub" },
      { property: "og:description", content: "Four groups. One data story. An academic DBMS showcase." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-20 pb-16 md:pt-32 lg:grid-cols-[1.3fr_1fr]">
        <div className="fade-up">
          <p className="eyebrow mb-8 text-primary">Database Management Systems</p>
          <h1 className="font-display text-6xl font-medium leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
            Four groups.<br />
            <span className="text-muted-foreground">One data story.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            Explore the concepts, experiments, and interactive demonstrations behind our DBMS projects.
          </p>
          <a
            href="#projects"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-shadow hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Explore Projects <span aria-hidden>↓</span>
          </a>
        </div>
        <div className="fade-up mx-auto aspect-[400/420] w-full max-w-md [animation-delay:200ms]">
          <NetworkIllustration />
        </div>
      </section>
      <ProjectDirectory />
    </PageShell>
  );
}
