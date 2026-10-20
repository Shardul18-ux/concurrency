// Single source of truth for the project directory.
// Edit titles/descriptions here when groups submit their work.
import type { LucideIcon } from "lucide-react";
import { Lock, Clock3, Undo2, DatabaseBackup } from "lucide-react";

export type ProjectStatus = "ready" | "awaiting";

export interface Project {
  id: "group-1" | "group-2" | "group-3" | "group-4";
  index: string;
  group: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  icon: LucideIcon;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "group-1",
    index: "01",
    group: "Group 1",
    title: "Last Seat, One Winner",
    tagline: "Two customers. One seat. One committed booking.",
    category: "Concurrency Control",
    description:
      "See how concurrency control prevents two customers from booking the same last seat. Model transactions, analyze conflicting operations, apply exclusive locks with Strict 2PL, and trace a deadlock using a wait-for graph before recovering from it.",
    icon: Lock,
    status: "ready",
  },
  {
    id: "group-2",
    index: "02",
    group: "Group 2",
    title: "Two ATMs, One Balance",
    tagline: "Timestamps decide who goes first.",
    category: "Timestamp Ordering",
    description:
      "Follow two ATMs updating the same account concurrently. Trace timestamp ordering step by step, identify conflicting operations, determine when a transaction must roll back, and understand how consistency is maintained.",
    icon: Clock3,
    status: "awaiting",
  },
  {
    id: "group-3",
    index: "03",
    group: "Group 3",
    title: "Paid, But No Order",
    tagline: "Money left the account. The order never finished. Now what?",
    category: "Transaction Recovery",
    description:
      "Investigate a payment that fails midway. Examine log records, determine which operations require UNDO or REDO, explore how checkpoints speed up recovery, and compare log-based recovery with shadow paging.",
    icon: Undo2,
    status: "awaiting",
  },
  {
    id: "group-4",
    index: "04",
    group: "Group 4",
    title: "Restore Without Regret",
    tagline: "Full, differential, transaction log: what do you restore, and in what order?",
    category: "Backup & Recovery",
    description:
      "Compare backup strategies for an e-commerce database after a crash. Determine the correct recovery sequence, assess potential data loss, balance recovery time against storage requirements, and recommend an appropriate backup strategy.",
    icon: DatabaseBackup,
    status: "awaiting",
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
