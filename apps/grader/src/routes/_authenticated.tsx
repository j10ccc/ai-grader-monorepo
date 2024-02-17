import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async () => {
    const isAuthenticated = () => true;

    if (!isAuthenticated()) {
      throw redirect({
        to: "/login"
      });
    }
  },
  component: () => <Outlet />
});
