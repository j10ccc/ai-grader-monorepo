import { TestPaperEntities } from "@ai-grader/entities";
import { Button, Tag } from "antd";
import { useState } from "react";

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
          <span>{question.question}</span>
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
        <div className="mt-xs ml-sm ws-pre-line">{question.answer}</div>
      </p>
    </div>
  );
}

export default function QuestionBlock(props: { question: TestPaperEntities.Question}) {
  const { question } = props;
  const [editing, setEditing] = useState(false);

  return (
    <>
      {editing
        ? null
        : <QuestionShowcase question={question} onEdit={() => setEditing(false)} />
      }
    </>
  );
}