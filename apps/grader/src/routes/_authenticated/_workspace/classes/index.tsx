import { createFileRoute } from "@tanstack/react-router";
import ClassPage from "@/pages/class";

export const Route = createFileRoute("/_authenticated/_workspace/classes/")({
  component: ClassPage
});