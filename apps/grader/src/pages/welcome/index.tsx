import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import useAuth from "@/hooks/use-auth";

export default function WelcomePage() {
  const { _hasHydrated, checkLoginExpire } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (_hasHydrated) {
      const isExpired = checkLoginExpire();
      // TODO: handle login by cookie
      if (isExpired) {
        navigate({ to: "/login" });
      } else {
        navigate({ to: "/dashboard" });
      }
    }
  }, [_hasHydrated]);

  return (
    <main className="mx-auto my-0">
      <p>Welcome...</p>
    </main>
  );
}