import { createFileRoute } from "@tanstack/react-router";
import ClassAnalysisPage from "@/pages/class/analysis";

export const Route = createFileRoute("/_authenticated/_workspace/classes/analysis/$classId")({
  component: ClassAnalysisPage
});