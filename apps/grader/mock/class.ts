import { ClassEntities, ExamEntities } from "@ai-grader/entities";
import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "./_utils";

export default [
  {
    url: "/api/class",
    method: "get",
    response: () => {
      return resultSuccess<Array<ClassEntities.Class>>([
        { id: 1, name: "2024高二(1)班", stuCount: 38 },
        { id: 2, name: "2024高二(2)班", stuCount: 42 },
        { id: 3, name: "2024高二(3)班", stuCount: 40 }
      ]);
    }
  },
  {
    url: "/api/class/analysis/:id",
    method: "get",
    response: () => {
      return resultSuccess<ClassEntities.Class & ClassEntities.ClassAnalysisData>({
        id: 1,
        name: "2024高二(1)班",
        stuCount: 38 ,
        examHistory: [
          { id: 1, name: "[202304 十校联考]物理", create_at: "2024-02-23T15:54:40.000+00:00", status: "未判题", ai_mark: true, subject: "语文" },
          { id: 5, name: "2023语文期末考试", create_at: "2024-02-24T10:59:16.000+00:00", status: "已判题", ai_mark: true, subject: "语文" },
          { id: 6, name: "2024 上 语文期末考试", create_at: "2024-02-24T11:00:44.000+00:00", status: "等待判题", ai_mark: true, subject: "政治" },
        ] as any
      });
    }
  }
] as MockMethod[];
