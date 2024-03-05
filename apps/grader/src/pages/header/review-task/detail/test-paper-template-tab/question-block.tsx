import { TestPaperEntities } from "@ai-grader/entities";
import { Button, Tag } from "antd";
import { useState } from "react";
import EditQuestionForm from "./edit-question-form";

function UpdateQuestionForm(props: {
  initialValues: TestPaperEntities.Question,
  onSave: (value: TestPaperEntities.Question) => Promise<void>,
  onClose: () => void
}) {
  return (
    <EditQuestionForm { ...props } />
  );
}

function QuestionShowcase(props:
  { question: TestPaperEntities.Question, onEdit: () => void }
) {
  const { question, onEdit } = props;

  return (
    <div id="question" className="border-t-dashed border-color-gray-200 pl-sm">
      <div className="flex gap-lg justify-between">
        <p>
          <span className="text-sm op-50 mr-xs">{question.id}.</span>
          <span className="text-sm c-red-500">({question.points}分) </span>
          <span className="ws-pre-line">{question.question}</span>
        </p>
        <div className="flex mt-sm">
          <Button size="small" type="link" onClick={onEdit}>编辑</Button>
          <Button size="small" danger type="link">删除</Button>
        </div>
      </div>
      {question.knowledge_points.length > 0
       && <p>
         <span className="text-sm op-50">知识点分类</span>
         <span className="ml-sm">
           {question.knowledge_points.map(point =>
             <Tag key={point}>{point}</Tag>
           )}
         </span>
       </p>}
      <p>
        <span className="text-sm op-50 mr-xs">参考答案</span>
        { question.ai_mark && <Tag color="purple">AI 评阅</Tag> }
        <span className="mt-xs ml-sm ws-pre-line block">{question.answer}</span>
      </p>
    </div>
  );
}

export default function QuestionBlock(props:
  { question: TestPaperEntities.Question, onUpdate: (value: TestPaperEntities.Question) => Promise<void> }
) {
  const { question, onUpdate } = props;
  const [editing, setEditing] = useState(false);

  async function handleSave(data: any) {
    const res = await onUpdate(data);
    setEditing(false);
    return res;
  }

  return (
    <>
      {editing
        ? <UpdateQuestionForm initialValues={question} onSave={handleSave} onClose={() => setEditing(false)} />
        : <QuestionShowcase question={question} onEdit={() => setEditing(true)} />
      }
    </>
  );
}