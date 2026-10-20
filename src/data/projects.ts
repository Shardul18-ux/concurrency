// Single source of truth for the project directory.
// Edit titles/descriptions here when groups submit their work.
export type ProjectStatus = "ready" | "awaiting";

export interface Project {
  id: "group-1" | "group-2" | "group-3" | "group-4";
  index: string;
  group: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "group-1",
    index: "01",
    group: "Group 1",
    title: "Online Ticket Booking",
    category: "Concurrency Control",
    description:
      "Transaction conflicts, exclusive locks, two-phase locking, and deadlock detection.",
    status: "ready",
  },
  {
    id: "group-2",
    index: "02",
    group: "Group 2",
    title: "Project Title — Group 2",
    category: "Awaiting Submission",
    description: "Project description will appear here once Group 2 submits their work.",
    status: "awaiting",
  },
  {
    id: "group-3",
    index: "03",
    group: "Group 3",
    title: "Project Title — Group 3",
    category: "Awaiting Submission",
    description: "Project description will appear here once Group 3 submits their work.",
    status: "awaiting",
  },
  {
    id: "group-4",
    index: "04",
    group: "Group 4",
    title: "Project Title — Group 4",
    category: "Awaiting Submission",
    description: "Project description will appear here once Group 4 submits their work.",
    status: "awaiting",
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
