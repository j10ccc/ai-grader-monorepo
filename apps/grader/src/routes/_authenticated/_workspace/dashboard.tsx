import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_workspace/dashboard")({
  component: () => (
    <h1>Dashboard</h1>
  )
});