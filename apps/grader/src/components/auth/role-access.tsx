import { UserEntities } from "@ai-grader/entities";
import { type ReactNode } from "react";
import useAuth from "@/hooks/use-auth";

interface IProps {
  roles: Array<UserEntities.RoleNameEnum>
  children: ReactNode;
}

export default function RoleAccess(props: IProps) {
  const currentRole = useAuth(store => store.role);

  const { children, roles } = props;

  const isRoleValid = currentRole && roles.find((role) => role === currentRole)!;

  if (isRoleValid) return children;
  else return null;
}