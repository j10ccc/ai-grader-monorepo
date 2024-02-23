import { ExamEntities } from "@ai-grader/entities";
import { Link } from "@tanstack/react-router";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { format } from "date-fns";
import useReviewRask from "@/hooks/exam/use-review-task";

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
      <Link to={"/exam/$examId"} params={{ examId: record.id.toString() }}>查看</Link>
    </div>
  )}
];

export default function ExamsTable() {
  const { tasks: exams } = useReviewRask();

  return (
    <Table
      dataSource={exams}
      columns={columns}
      bordered
    />
  );
}