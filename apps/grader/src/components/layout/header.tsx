import { UserEntities } from "@ai-grader/entities";
import { Link, ToPathOption, useNavigate } from "@tanstack/react-router";
import { Dropdown } from "antd";
import SystemConstants from "@/constants/system";
import useAuth from "@/hooks/use-auth";
import { routeTree } from "@/routeTree.gen";
import RoleAccess from "../auth/role-access";

function Navigator() {
  const NavFeatures: Array<
    { name: string; route: ToPathOption<typeof routeTree>, access: UserEntities.RoleNameEnum[] }
  > = [
    { name: "工作台", route: "/dashboard", access: [UserEntities.RoleNameEnum.Header, UserEntities.RoleNameEnum.Teacher] },
    { name: "评阅任务", route: "/exams", access: [UserEntities.RoleNameEnum.Teacher] },
    { name: "班级学情", route: "/classes", access: [UserEntities.RoleNameEnum.Teacher] },
  ];

  return (
    <nav className="flex items-center justify-between bg-white px-4">
      <div className="flex items-center space-x-4">
        { NavFeatures.map(item => (
          <RoleAccess roles={item.access}>
            <Link
              key={item.route}
              to={item.route}
              className="decoration-none c-gray-5 text-sm"
              params={{}}
            >{ item.name }</Link>
          </RoleAccess>
        ))}
      </div>
    </nav>
  );
}

function Profile() {
  const { role } = useAuth();
  const navigate = useNavigate();
  const reset = useAuth(store => store.reset);

  function handleLogout() {
    reset();
    navigate({ to: "/login" });
  }

  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items: [
          { key: "logout", danger: true, label: <span onClick={handleLogout}>退出登录</span> }
        ]
      }}>
      <div className="text-sm px-xs py-1 border border-gray-200 rounded-1 border-solid bg-gray-50 cursor-pointer">
        <span className="op-50">身份：</span>
        <span>{ role }</span>
      </div>
    </Dropdown>
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