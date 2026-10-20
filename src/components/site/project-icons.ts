import type { LucideIcon } from "lucide-react";
import { Lock, Clock3, Undo2, DatabaseBackup } from "lucide-react";
import type { Project } from "@/data/projects";

// Icons live outside the data module so loader results stay serializable.
export const projectIcons: Record<Project["id"], LucideIcon> = {
  "group-1": Lock,
  "group-2": Clock3,
  "group-3": Undo2,
  "group-4": DatabaseBackup,
};
