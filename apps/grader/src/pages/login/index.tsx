import { Tabs } from "antd";
import SystemConstants from "@/constants/system";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

export default function LoginPage() {

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <h1 className="text-2xl font-bold">{SystemConstants.brandName}</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            { SystemConstants.brandSlogan }
          </p>
        </div>
        <Tabs
          className="w-sm"
          centered
          items={[
            { key: "login", label: "教职工登录", children: <LoginForm /> },
            { key: "register", label: "新职工注册", children: <RegisterForm /> }
          ]} />
      </div>
    </main>
  );
}