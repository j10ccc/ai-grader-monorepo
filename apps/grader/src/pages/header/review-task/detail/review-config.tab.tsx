import { ExamAPI } from "@ai-grader/apis";
import { ExamEntities } from "@ai-grader/entities";
import { Button, Checkbox, Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

interface IProps {
  exam: ExamEntities.Exam;
}

const FormDataSchema = ExamEntities.ExamSchema
  .pick({ id: true, name: true, subject: true, ai_mark: true });

type FormDataType = Zod.infer<typeof FormDataSchema>;

export default function ReviewConfig(props: IProps) {
  const { exam } = props;
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(value: Partial<FormDataType>) {
    setSubmitting(true);
    try {
      const valid = await FormDataSchema.safeParseAsync(value);
      console.log(valid);
      if (valid.success) {
        const res = await ExamAPI.updateReviewTask(
          { ...value, id: exam.id } as FormDataType
        );
        if (res.code !== 200) throw res.msg;
      } else {
        throw "请完成表单";
      }
    } catch (e: any) {
      message.error({ content: e });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="px-lg">
      <div className="op-80 mb-lg">
        <h1 className="mb-sm">评阅设置</h1>
        <p className="text-sm op-60">这里可以查看本场考试的评阅设置，并可以修改一些配置</p>
      </div>
      <div className="max-w-sm">
        <Form layout="vertical" onFinish={handleSubmit} initialValues={{
          name: exam.name,
          subject: exam.subject,
          ai_mark: exam.ai_mark,
        }}>
          <FormItem label="考试名称" name="name" required>
            <Input allowClear />
          </FormItem>
          <FormItem label="科目" name="subject" required>
            <Input disabled />
          </FormItem>
          <FormItem name="ai_mark" valuePropName="checked">
            <Checkbox>AI 预评阅</Checkbox>
          </FormItem>
          <FormItem className="flex justify-end">
            <Button loading={submitting} type="primary" htmlType="submit">提交修改</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}