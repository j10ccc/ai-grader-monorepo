import { createLazyFileRoute } from "@tanstack/react-router";
import WorkspaceLayout from "@/components/layout/workspace";

export const Route = createLazyFileRoute("/_authenticated/_workspace")({
  component: WorkspaceLayout
});