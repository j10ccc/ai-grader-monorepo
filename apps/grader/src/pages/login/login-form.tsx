import { AuthAPI } from "@ai-grader/apis";
import { Button, Form, Input } from "antd";

export default function LoginForm() {
  async function handleSubmit(e: any) {
    const res = await AuthAPI.login(e);

    console.log(res);
  }

  return (
    <Form className="w-sm" size="large" onFinish={handleSubmit}>
      <Form.Item name="username">
        <Input placeholder="教职工账号" />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password placeholder="密码" />
      </Form.Item>
      <Button type="primary" block htmlType="submit">登录</Button>
    </Form>
  );
}