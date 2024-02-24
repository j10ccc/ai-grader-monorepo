import { Button } from "antd";
import { useState } from "react";
import CreateReviewTaskForm from "./create-review-task-form";

export default function HeaderReviewTasksPage() {
  const [openCreateForm, setOpenCreateForm] = useState(false);

  return (
    <section className="px-lg">
      <h1>阅卷任务管理</h1>
      <Button type="primary" onClick={() => setOpenCreateForm(true)}>创建阅卷任务</Button>

      <CreateReviewTaskForm open={openCreateForm} onClose={() => setOpenCreateForm(false)} />
    </section>
  );
}