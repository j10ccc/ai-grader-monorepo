import { Tabs } from "antd";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

export default function LoginPage() {
  // const [formType, setFormType] = useState<"login" | "register">("login");

  return (
    <main>
      <h1>Login</h1>
      <Tabs
        className="w-sm"
        centered
        items={[
          { key: "login", label: "登录", children: <LoginForm /> },
          { key: "register", label: "注册", children: <RegisterForm /> }
        ]} />
    </main>
  );
}