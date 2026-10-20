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
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Link to="/" hash="projects" className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-primary">
          <span aria-hidden>←</span> Back to Hub
        </Link>
        <div className="mt-12 flex flex-wrap items-baseline gap-6">
          <span className="font-display text-8xl font-light leading-none text-primary md:text-9xl">{project.index}</span>
          <span className="eyebrow border border-border px-2 py-1">{project.category}</span>
        </div>
        <p className="eyebrow mt-8">{project.group}</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.description}</p>

        <div className="mt-16 flex min-h-72 flex-col items-center justify-center border border-dashed border-border bg-surface/50 p-10 text-center">
          <span className="mb-5 h-2 w-2 animate-pulse rounded-full bg-primary" aria-hidden />
          <p className="eyebrow">{awaiting ? "Awaiting Submission" : "Integration Pending"}</p>
          <h2 className="mt-4 font-display text-2xl md:text-3xl">
            {awaiting ? "Project coming soon" : "Project content will be added here"}
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            {awaiting
              ? "This page will display the group's work once their files are added."
              : "This space is reserved for the group's standalone project page."}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
