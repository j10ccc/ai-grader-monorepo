import { Link } from "@tanstack/react-router";
import SystemConstants from "@/constants/system";

function Navigator() {
  const NavFeatures = [
    { name: "评阅任务" },
    { name: "班级学情" },
  ];

  return (
    <nav className="flex items-center justify-between bg-white px-4">
      <div className="flex items-center space-x-4">
        { NavFeatures.map(item => (
          <Link className="decoration-none c-gray-5 text-sm">{ item.name }</Link>
        ))}
      </div>
    </nav>
  );
}

function Profile() {
  // TODO: use auth state
  const role = "教师";

  return (
    <div className="text-sm">
      <span className="op-50">身份：</span>
      <span>{ role }</span>
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