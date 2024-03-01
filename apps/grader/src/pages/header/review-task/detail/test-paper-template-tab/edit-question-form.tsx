import { TestPaperEntities } from "@ai-grader/entities";
import { Alert, Button, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";

interface IProps {
  questionId: number,
  onCreate: (value: TestPaperEntities.Question) => Promise<void>;
  onClose: () => void;
}

export default function EditQuestionForm(props: IProps) {
  const { questionId, onClose, onCreate } = props;
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>();

  async function handleFinish(data: any) {
    setSubmitting(true);
    setError(undefined);
    try {
      const valid = await TestPaperEntities.QuestionSchema.safeParseAsync(data);
      if (!valid.success) throw valid.error;
      await onCreate(valid.data);
      // TODO: clear form fields
    } catch(e: any) {
      setError(JSON.stringify(e));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      className="border-t-solid border-color-gray-200"
      labelCol={{ span: 6 }}
      initialValues={{ id: questionId, knowledge_points: [] }}
      onFinish={handleFinish}
    >
      <div className="max-w-lg px-lg pt-lg">
        { error && <Alert closable className="mb-sm" type="error" message={error} /> }
        <Form.Item label="题号" name="id" required>
          <Input disabled />
        </Form.Item>
        <Form.Item label="AI 评阅" name={"ai_mark"} valuePropName="checked" initialValue={true}>
          <Checkbox />
        </Form.Item>
        <Form.Item label="知识点分类" name="knowledge_points">
          <Select mode="tags" placeholder="创建或选择推荐分类" />
        </Form.Item>
        <Form.Item label="问题" name={"question"} required>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="标准答案" name={"answer"} required>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="分值" name={"points"} required>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-right gap-sm">
            <Button danger onClick={onClose}>取消编辑</Button>
            <Button type="primary" htmlType="submit" loading={submitting}>保存题目</Button>
          </div>
        </Form.Item>
      </div>
    </Form>
  );
}