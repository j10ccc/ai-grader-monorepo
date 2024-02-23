import { AuthAPI } from "@ai-grader/apis";
import { useNavigate } from "@tanstack/react-router";
import { Button, Form, Input, message } from "antd";
import { useState } from "react";
import useAuth from "@/hooks/use-auth";

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuth(store => store.setAuth);

  async function handleSubmit(e: any) {
    setSubmitting(true);
    const res = await AuthAPI.login(e);
    setSubmitting(false);
    try {
      if (res.code === 200) {
        setAuth(res.data);
        navigate({ to: "/dashboard" });
      } else {
      }
    } catch(e: any) {
      message.error({ content: e.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form size="large" onFinish={handleSubmit}>
      <Form.Item name="username">
        <Input placeholder="教职工账号" />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password placeholder="密码" autoComplete="password" />
      </Form.Item>
      <Button
        type="primary"
        loading={submitting}
        block
        htmlType="submit"
      >登录</Button>
    </Form>
  );
}