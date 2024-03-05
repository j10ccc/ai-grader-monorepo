import { Link, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { Breadcrumb, Menu } from "antd";
import { useEffect, useState } from "react";
import useExam from "@/hooks/exam/use-exam";
import AnswerPaperManage from "./answer-paper-manage.tab";
import QuestionRecognizeConfig from "./question-recognize-config-tab";
import ReviewConfig from "./review-config.tab";
import TestPaperTemplate from "./test-paper-template-tab";

const Tabs = [
  { label: "评阅基本信息", key: "review-config" },
  { label: "学生答卷管理", key: "answer-paper-manage" },
  { label: "考卷题目管理", key: "test-paper-template" },
  { label: "题目扫描调整", key: "question-recognize-config" },
];

export default function HeaderReviewTaskDetail() {
  const params = useParams({ strict: false }) as { examId: string };
  const { exam } = useExam(parseInt(params.examId));
  const [currentTab, setCurrentTab] = useState<string>();
  const search = useSearch({ strict: false });
  const navigate = useNavigate();

  function handleSwitchTab(tab: string) {
    navigate({ search: () => ({ tab }), params: {} });
    setCurrentTab(tab);
  }

  useEffect(() => {
    if ("tab" in search) {
      setCurrentTab(Tabs.find(tab => tab.key === search.tab)?.key || Tabs[0].key);
    }
  }, []);

  return (
    <section className="px-lg h-full py-sm box-border flex flex-col">
      <Breadcrumb
        className="mb-lg"
        items={[
          { title: <Link to="/header/review-tasks">阅卷管理</Link> },
          { title: exam?.name }
        ]}/>
      <div className="bg-white flex-auto py-sm rd-lg flex of-y-auto">
        <nav id="menu" className="w-60 bg-white h-full shrink-0">
          <Menu
            className="px-xs h-full"
            selectedKeys={currentTab ? [currentTab] : undefined}
            onClick={({ key }) => handleSwitchTab(key)}
            items={Tabs}
          />
        </nav>
        <div className="flex-auto of-y-auto">
          { currentTab === "answer-paper-manage" && <AnswerPaperManage /> }
          { (currentTab === "test-paper-template" && exam !== null) && <TestPaperTemplate exam={exam} /> }
          { (currentTab === "review-config" && exam !== null) && <ReviewConfig exam={exam} /> }
          { (currentTab === "question-recognize-config" && exam !== null) && <QuestionRecognizeConfig exam={exam} /> }
        </div>
      </div>
    </section>
  );
}