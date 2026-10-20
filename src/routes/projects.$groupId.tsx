import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getProject } from "@/data/projects";

// Each group's content is isolated. To integrate a standalone HTML project,
// place it in public/projects/<group-id>/index.html (with its own CSS/JS/images)
// and embed or link it from this page.
export const Route = createFileRoute("/projects/$groupId")({
  loader: ({ params }) => {
    const project = getProject(params.groupId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.project.title} — DBMS Project Hub` : "Project — DBMS Project Hub";
    const d = loaderData?.project.description ?? "DBMS group project.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const awaiting = project.status === "awaiting";
  const Icon = project.icon;
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Link to="/" hash="projects" className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-primary">
          <span aria-hidden>←</span> Back to Hub
        </Link>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-baseline gap-6">
            <span className="font-display text-8xl font-light leading-none text-primary md:text-9xl">{project.index}</span>
            <span className="eyebrow border border-border px-2 py-1">{project.category}</span>
          </div>
          <Icon aria-hidden className="h-10 w-10 text-muted-foreground/40" strokeWidth={1.25} />
        </div>
        <p className="eyebrow mt-8">{project.group}</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-6xl">{project.title}</h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-primary/80">{project.tagline}</p>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.description}</p>

        <div className="mt-16 flex min-h-72 flex-col items-center justify-center border border-dashed border-border bg-surface/50 p-10 text-center">
          <span className="mb-5 h-2 w-2 animate-pulse rounded-full bg-primary" aria-hidden />
          <p className="eyebrow">{awaiting ? "Awaiting Submission" : "Reserved for Group 1"}</p>
          <h2 className="mt-4 font-display text-2xl md:text-3xl">
            {awaiting ? "Blog coming soon" : "Blog space ready"}
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            {awaiting
              ? "This page will display the group's blog once their HTML files are added."
              : "This space is ready for the existing Online Ticket Booking blog. Once the standalone HTML is placed here, it will appear on this page."}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
