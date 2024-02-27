import { Link, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { Breadcrumb, Menu } from "antd";
import { useEffect, useState } from "react";
import useExam from "@/hooks/exam/use-exam";
import AnswerPaperManage from "./answer-paper-manage.tab";
import ReviewConfig from "./review-config.tab";
import TestPaperTemplate from "./test-paper-template.tab";

const Tabs = [
  { label: "答卷管理", key: "answer-paper-manage" },
  { label: "试卷模板", key: "test-paper-template" },
  { label: "评阅设置", key: "review-config" }
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
        <nav id="menu" className="w-60 bg-white h-full">
          <Menu
            className="px-xs h-full"
            selectedKeys={currentTab ? [currentTab] : undefined}
            onClick={({ key }) => handleSwitchTab(key)}
            items={Tabs}
          />
        </nav>
        <div className="flex-auto of-y-auto">
          { currentTab === "answer-paper-manage" && <AnswerPaperManage /> }
          { currentTab === "test-paper-template" && <TestPaperTemplate /> }
          { (currentTab === "review-config" && exam !== null) && <ReviewConfig exam={exam} /> }
        </div>
      </div>
    </section>
  );
}