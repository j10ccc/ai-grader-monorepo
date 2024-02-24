import { ExamEntities } from "@ai-grader/entities";
import { Link } from "@tanstack/react-router";
import { Button , Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { format } from "date-fns";
import { useState } from "react";
import useExamList from "@/hooks/exam/use-exam-list";
import CreateReviewTaskForm from "./create-review-task-form";

const columns: ColumnsType<ExamEntities.Exam> = [
  { title: "编号", dataIndex: "id", width: 80 },
  { title: "考试", dataIndex: "name" },
  { title: "创建时间", dataIndex: "create_at", render: (time: string) => (
    <span>
      {format(new Date(time)
        .toLocaleString("zh-CN", {timeZone: "Asia/Shanghai"}), "yyyy年 M月dd日 HH:mm")}
    </span>
  )},
  { title: "阅卷状态", dataIndex: "status" },
  { title: "操作", render: (_, record) => (
    <div className="flex gap-sm">
      <Link to={"/header/review-tasks/detail/$examId"} params={{ examId: record.id.toString() }}>查看</Link>
    </div>
  )}
];

export default function ReviewTaskTable() {
  const { exams, refetch, isLoading } = useExamList();
  const [openCreateForm, setOpenCreateForm] = useState(false);

  function handleCloseCreateForm(created?: boolean) {
    if (created) refetch();
    setOpenCreateForm(false);
  }

  return (
    <section id="review-task-table">
      <div className="mb-sm flex items-end gap-sm">
        <span className="ml-sm">所有阅卷任务({ exams.length })</span>
        <div className="flex-auto" />
        <Button onClick={() => refetch()}>刷新</Button>
        <Button type="primary" onClick={() => setOpenCreateForm(true)}>创建阅卷任务</Button>
      </div>
      <CreateReviewTaskForm open={openCreateForm} onClose={handleCloseCreateForm} />
      <Table
        dataSource={exams}
        columns={columns}
        rowKey="id"
        loading={isLoading}
        pagination={{ total: exams.length, pageSize: 8 }}
        bordered
      />
    </section>
  );
}