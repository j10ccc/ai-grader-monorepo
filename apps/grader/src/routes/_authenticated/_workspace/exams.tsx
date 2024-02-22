import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_workspace/exams")({
  component: () => (
    <h1>Exams</h1>
  )
});