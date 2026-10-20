import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const awaiting = project.status === "awaiting";
  return (
    <Link
      to="/projects/$groupId"
      params={{ groupId: project.id }}
      className="group relative flex min-h-80 flex-col justify-between border border-border bg-surface/60 p-8 transition-all duration-500 hover:border-primary/60 hover:bg-surface-raised hover:shadow-glow focus-visible:outline-2 focus-visible:outline-ring"
      aria-label={`Open project: ${project.title}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-7xl font-light leading-none text-muted-foreground/40 transition-colors duration-500 group-hover:text-primary md:text-8xl">
          {project.index}
        </span>
        <span className={`eyebrow border px-2 py-1 ${awaiting ? "border-border" : "border-primary/40 text-primary"}`}>
          {project.category}
        </span>
      </div>
      <div className="mt-10">
        <p className="eyebrow mb-3">{project.group}</p>
        <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">{project.title}</h3>
        <p className="mt-3 max-w-md text-muted-foreground">{project.description}</p>
        <span className="mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Open Project
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </span>
      </div>
    </Link>
  );
}
