import { ExamEntities, TestPaperEntities } from "@ai-grader/entities";
import { Button, Spin } from "antd";
import { useState } from "react";
import useTestPaper from "@/hooks/test-paper/use-test-paper";
import EditQuestionForm from "./edit-question-form";
import QuestionBlock from "./question-block";

interface IProps {
  exam: ExamEntities.Exam;
}

function CreateQuestionBlock(props:
  { questionId: number, onCreate: (value: TestPaperEntities.Question) => Promise<void> }
) {
  const [showForm, setShowForm] = useState(false);

  return (
    showForm
      ? <EditQuestionForm { ...props } onClose={() => setShowForm(false)}/>
      : <Button onClick={() => setShowForm(true)}>添加题目</Button>
  );
}

export default function TestPaperTemplate(props: IProps) {
  const { exam } = props;
  const { questions, loading, createQuestion } = useTestPaper(exam.id);

  return (
    <div className="px-lg">
      <h1>考卷题目管理</h1>
      <div className="mb-lg">
        { loading
          ? <Spin />
          : questions.map(question => (
            <QuestionBlock key={question.id} question={question} />
          ))
        }
      </div>
      <CreateQuestionBlock questionId={questions.length + 1} onCreate={createQuestion} />
    </div>
  );
}