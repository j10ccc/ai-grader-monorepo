import { Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/_workspace")({
  component: () => (
    <main>
      <h1>Workspace</h1>
      <Outlet />
    </main>
  )
});