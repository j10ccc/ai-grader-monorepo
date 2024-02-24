import { createLazyFileRoute } from "@tanstack/react-router";
import HeaderReviewTaskPage from "@/pages/header/review-task";

export const Route = createLazyFileRoute("/_authenticated/_workspace/header/review-tasks/")({
  component: HeaderReviewTaskPage
});