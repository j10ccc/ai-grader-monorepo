import { Link } from "@tanstack/react-router";
import SystemConstants from "@/constants/system";

const NavFeatures = [
  { name: "评阅任务" },
  { name: "班级学情" },
];

export default function Header() {
  return (
    <header className="flex items-center h-14 border-gray-200 border-b-solid">
      <span className="text-[1.2rem] font-semibold px-4 op-80">{SystemConstants.brandName}</span>
      <nav className="flex items-center justify-between bg-white px-4">
        <div className="flex items-center space-x-4">
          { NavFeatures.map(item => (
            <Link className="decoration-none c-gray-5 text-sm">{ item.name }</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}