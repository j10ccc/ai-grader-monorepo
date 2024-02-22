import { UserEntities } from "@ai-grader/entities";
import { Link, ToPathOption } from "@tanstack/react-router";
import { useMemo } from "react";
import SystemConstants from "@/constants/system";
import useAuth from "@/hooks/use-auth";
import { routeTree } from "@/routeTree.gen";

function Navigator() {
  const NavFeatures: Array<{ name: string; route: ToPathOption<typeof routeTree>}>  = [
    { name: "工作台", route: "/dashboard" },
    { name: "评阅任务", route: "/exams" },
    { name: "班级学情", route: "/classes" },
  ];

  return (
    <nav className="flex items-center justify-between bg-white px-4">
      <div className="flex items-center space-x-4">
        { NavFeatures.map(item => (
          <Link
            key={item.route}
            to={item.route}
            className="decoration-none c-gray-5 text-sm"
          >{ item.name }</Link>
        ))}
      </div>
    </nav>
  );
}

function Profile() {
  const { role } = useAuth();
  const roleName = useMemo(() => {
    if (role !== null) return UserEntities.RoleEnumNameMap[role];
    return "未知";
  }, [role]);

  return (
    <div className="text-sm">
      <span className="op-50">身份：</span>
      <span>{ roleName }</span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex items-center h-14 border-gray-200 border-b-solid px-4">
      <span className="text-[1.2rem] font-semibold space-x-4 op-80">{SystemConstants.brandName}</span>
      <Navigator />
      <div className="flex-auto" />
      <Profile />
    </header>
  );
}