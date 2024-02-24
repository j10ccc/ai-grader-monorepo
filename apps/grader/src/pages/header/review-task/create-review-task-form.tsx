import { ExamAPI } from "@ai-grader/apis";
import { ExamEntities } from "@ai-grader/entities";
import { Alert, Button, Checkbox, Drawer, Form, Input, Select, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

interface IProps {
  open: boolean;
  onClose: (created?: boolean) => void;
}

const FormDataSchema = ExamEntities.ExamSchema
  .pick({ name: true, subject: true, ai_mark: true });

type FormDataType = Zod.infer<typeof FormDataSchema>

export default function CreateReviewTaskForm(props: IProps) {
  const { open, onClose } = props;
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>();

  async function handleFormSubmit(value: Partial<FormDataType>) {
    setSubmitting(true);
    setError(undefined);
    try {
      const valid = await FormDataSchema.safeParseAsync(value);
      if (valid.success) {
        const res = await ExamAPI.createReviewTask(value as FormDataType);
        if (res.code !== 200) throw res.msg;
        else {
          onClose(true);
          message.success("成功创建考试：" + value.name);
        }
      } else {
        throw "请完成表单";
      }
    } catch (e: any) {
      setError(e);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Drawer title="创建阅卷任务" open={open} onClose={() => onClose(false)}>
      <Form
        disabled={submitting}
        layout="vertical"
        initialValues={{
          subject: ExamEntities.ExamSubjectEnum.Chinese,
          ai_mark: true
        }}
        onFinish={handleFormSubmit}
      >
        { error && <Alert className="mb-lg" message={error} closable type="error" /> }
        <FormItem name="name" label="考试名称" required>
          <Input />
        </FormItem>
        <FormItem name="subject" label="科目" required>
          <Select
            options={[
              { value: ExamEntities.ExamSubjectEnum.Chinese, label: ExamEntities.ExamSubjectEnum.Chinese },
              { value: ExamEntities.ExamSubjectEnum.Politics, label: ExamEntities.ExamSubjectEnum.Politics },
            ]} />
        </FormItem>
        <FormItem name="ai_mark" label="开启 AI 预评阅" valuePropName="checked">
          <Checkbox />
        </FormItem>
        <FormItem className="flex justify-end">
          <Button loading={submitting} type="primary" htmlType="submit">创建</Button>
        </FormItem>
      </Form>
    </Drawer>
  );
}