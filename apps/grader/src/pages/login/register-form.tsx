import { AuthAPI } from "@ai-grader/apis";
import { UserEntities } from "@ai-grader/entities";
import { Button, Form, Input, Select } from "antd";
import { useState } from "react";

export default function RegisterForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: any) {
    setSubmitting(true);
    const res = await AuthAPI.register(e);
    console.log(res);
    setSubmitting(false);
  }

  return (
    <Form
      size="large"
      onFinish={handleSubmit}
      initialValues={{
        type: UserEntities.RoleCodeEnum.Teacher
      }}
    >
      <div className="flex gap-sm">
        <Form.Item name="type" className="w-30">
          <Select
            placeholder="身份"
            options={[
              { value: UserEntities.RoleCodeEnum.Teacher, label: UserEntities.RoleNameEnum.Teacher },
              { value: UserEntities.RoleCodeEnum.Header, label: UserEntities.RoleNameEnum.Header },
            ]}
          />
        </Form.Item>
        <Form.Item name="username" className="flex-auto">
          <Input placeholder="教职工账号" />
        </Form.Item>
      </div>
      <Form.Item name="password">
        <Input.Password placeholder="密码" autoComplete="password" />
      </Form.Item>
      <Form.Item name="re-password">
        <Input.Password placeholder="确认密码" autoComplete="re-password" />
      </Form.Item>
      <Button
        type="primary"
        loading={submitting}
        block
        htmlType="submit"
      >注册</Button>
    </Form>
  );
}