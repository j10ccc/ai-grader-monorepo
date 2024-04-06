import { ExamEntities } from "@ai-grader/entities";
import { Link, useParams } from "@tanstack/react-router";
import { Breadcrumb } from "antd";
import { format } from "date-fns";
import AIChatTrigger from "@/components/ai-chat/trigger";
import useClassAnalysis from "@/hooks/class/use-class-analysis";

function AnalysisDataGrid(props: {
  stuCount: number;
  examHistory: Array<ExamEntities.Exam>;
}) {
  const lastExam = props.examHistory[0];

  return (
    <div className="grid grid-cols-3 gap-lg">
      <div className="bg-white p-sm flex flex-col justify-between">
        <span className="text-sm c-gray-4">班级人数</span>
        <h2 className="my-sm mb0 c-gray-6">{props.stuCount}</h2>
      </div>
      <div className="bg-white p-sm flex flex-col justify-between">
        <span className="text-sm c-gray-4">班级人数</span>
        <h2 className="my-sm mb0 c-gray-6">{props.stuCount}</h2>
      </div>
      <div className="bg-white p-sm flex flex-col justify-between">
        <div className="flex justify-between text-sm">
          <span className="c-gray-4">最近考试</span>
          <span className="c-gray-5 text-sm">
            {format(new Date(lastExam.create_at)
              .toLocaleString("zh-CN", {timeZone: "Asia/Shanghai"}), "yyyy年 M月dd日")}
          </span>
        </div>
        <h3 className="my0 c-gray-6 of-hidden text-ellipsis text-nowrap">{lastExam.name}</h3>
      </div>
    </div>
  );
}

export default function ClassAnalysisPage() {
  const params = useParams({ strict: false }) as { classId: string };
  const { analysisData, loading } = useClassAnalysis(parseInt(params.classId));

  return (
    <section className="px-lg">
      <Breadcrumb
        className="my-sm"
        items={[
          { title: <Link to={"/classes"}>所有班级</Link>},
          { title: analysisData?.name },
        ]}
      />
      { loading ? null :
        <AnalysisDataGrid
          stuCount={analysisData?.stuCount || 0}
          examHistory={analysisData?.examHistory || []}
        />
      }
      { <AIChatTrigger title={`${analysisData?.name} - 学情分析`} /> }
    </section>
  );
}