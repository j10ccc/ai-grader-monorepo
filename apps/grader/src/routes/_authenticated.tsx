import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import RouteAuthGuard from "@/components/auth/route-auth-guard";

export const Route = createFileRoute("/_authenticated")({
  component: Authenticated
});

function Authenticated() {
  const navigate = useNavigate();

  return (
    <RouteAuthGuard
      onCheck={(authenticated) => !authenticated && navigate({ to: "/login" })}>
      <Outlet />
    </RouteAuthGuard>
  );
}