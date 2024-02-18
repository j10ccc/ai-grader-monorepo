import { AuthAPI } from "@ai-grader/apis";
import { Button, Form, Input } from "antd";
import { useState } from "react";

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: any) {
    setSubmitting(true);
    const res = await AuthAPI.login(e);
    setSubmitting(false);
  }

  return (
    <Form size="large" onFinish={handleSubmit}>
      <Form.Item name="username">
        <Input placeholder="教职工账号" />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password placeholder="密码" />
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