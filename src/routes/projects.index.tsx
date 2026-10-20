import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ProjectDirectory } from "@/components/site/ProjectDirectory";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — DBMS Project Hub" },
      { name: "description", content: "Directory of the four DBMS group projects." },
      { property: "og:title", content: "Projects — DBMS Project Hub" },
      { property: "og:description", content: "Directory of the four DBMS group projects." },
    ],
  }),
  component: () => (
    <PageShell>
      <ProjectDirectory />
    </PageShell>
  ),
});
