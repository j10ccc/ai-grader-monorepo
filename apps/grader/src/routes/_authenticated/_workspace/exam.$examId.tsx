import { createFileRoute } from "@tanstack/react-router";
import ExamDetailPage from "@/pages/exam/detail";

export const Route = createFileRoute("/_authenticated/_workspace/exam/$examId")({
  component: ExamDetailPage
});