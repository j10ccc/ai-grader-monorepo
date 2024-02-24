import { createFileRoute } from "@tanstack/react-router";
import HeaderReviewTaskDetail from "@/pages/header/review-task/detail";

export const Route = createFileRoute("/_authenticated/_workspace/header/review-tasks/detail/$examId")({
  component: HeaderReviewTaskDetail
});