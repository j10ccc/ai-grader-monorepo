import { createFileRoute } from "@tanstack/react-router";
import ExamPage from "@/pages/exam";

export const Route = createFileRoute("/_authenticated/_workspace/exams/")({
  component: ExamPage
});