import { Link, useParams } from "@tanstack/react-router";
import { Breadcrumb } from "antd";
import useExam from "@/hooks/exam/use-exam";

export default function ExamDetailPage() {
  const params = useParams({ strict: false }) as { examId: string };

  const { exam } = useExam(parseInt(params.examId));

  return (
    <section className="px-lg">
      <Breadcrumb
        className="my-sm"
        items={[
          { title: <Link to={"/exams"}>所有考试</Link>},
          { title: exam?.name },
        ]}
      />
    </section>
  );
}