import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_workspace/classes")({
  component: () => (
    <h1>Classes</h1>
  )
});