import { createFileRoute, useNavigate } from "@tanstack/react-router";
import RouteAuthGuard from "@/components/auth/route-auth-guard";
import WelcomePage from "@/pages/welcome";

export const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  const navigate = useNavigate();

  return (
    <RouteAuthGuard
      placeholder={<WelcomePage />}
      onCheck={(authenticated) => {
        navigate({ to: authenticated ? "/dashboard" : "/login" });
      }}
    />
  );
}