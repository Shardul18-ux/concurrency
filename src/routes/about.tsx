import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DBMS Project Hub" },
      { name: "description", content: "About the DBMS Project Hub academic showcase." },
      { property: "og:title", content: "About — DBMS Project Hub" },
      { property: "og:description", content: "About the DBMS Project Hub academic showcase." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <p className="eyebrow mb-4">02 / About</p>
        <h1 className="font-display text-5xl font-medium tracking-tight md:text-7xl">A shared showcase.</h1>
        <p className="mt-8 text-lg text-muted-foreground">
          The DBMS Project Hub collects the work of four student groups in a single place. Each group's
          project lives on its own page, so its content can be added independently as it is completed.
        </p>
      </section>
    </PageShell>
  );
}
