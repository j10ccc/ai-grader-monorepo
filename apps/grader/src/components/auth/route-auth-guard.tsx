import { type ReactNode, useEffect, useState } from "react";
import useAuth from "@/hooks/use-auth";

interface IProps {
  children?: ReactNode;
  placeholder?: ReactNode;
  onCheck?: (isAuthenticated: boolean) => void;
}

export default function RouteAuthGuard(props: IProps) {
  const { _hasHydrated, checkLoginExpire } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const { children, placeholder, onCheck } = props;

  useEffect(() => {
    if (_hasHydrated) {
      // TODO: handle login by cookie
      const isExpired = checkLoginExpire();
      const pass = !isExpired;
      onCheck?.(pass);
      setAuthenticated(pass);
    }
  }, [_hasHydrated]);

  return (
    <>
      { authenticated ? children : placeholder }
    </>
  );
}