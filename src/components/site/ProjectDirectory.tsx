import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectDirectory() {
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:py-32">
      <p className="eyebrow mb-4">01 / Project Directory</p>
      <h2 className="font-display text-5xl font-medium tracking-tight md:text-7xl">Explore the work.</h2>
      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.id} className="bg-background">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
