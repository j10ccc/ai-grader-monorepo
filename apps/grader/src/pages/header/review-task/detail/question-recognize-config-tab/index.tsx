import { ExamEntities } from "@ai-grader/entities";
import { Button, Divider, GetProp, Image, Upload, UploadProps } from "antd";
import { useState } from "react";
import useAnswerPaperTemplate from "@/hooks/answer-paper/use-answer-paper-template";

interface IProps {
  exam: ExamEntities.Exam;
}

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export default function QuestionRecognizeConfig(props: IProps) {
  const { exam } = props;
  const [imageUrl, setImageUrl] = useState<string>();
  const [uploading, setUploading] = useState(false);
  const { template } = useAnswerPaperTemplate(exam.id);

  // TODO: handle multiple photos
  const handleUpload: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setUploading(true);
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setImageUrl(url);
        setUploading(false);
      });
    }
  };

  return (
    <div className="px-lg">
      <h1>题目扫描调整</h1>
      <div className="flex">
        <div className="flex-auto" />
        <Upload
          name="answer-paper-template-figure"
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          onChange={handleUpload}
          showUploadList={false}
        >
          <Button type="primary" disabled={uploading} loading={uploading}>上传答题卡扫描图像</Button>
        </Upload>
      </div>
      <Divider orientation="left">答题卡图像</Divider>
      <div className="flex gap-lg px-lg">
        { imageUrl &&
          <div className="bg-gray-100 rd-lg border-solid border-gray-300 of-hidden">
            <div className="size-[240]">
              <Image width={240} height={240} src={imageUrl} />
            </div>
            <div className="px-sm pt-1 pb-2 text-sm op-70">{imageUrl.slice(0, 20)}</div>
          </div>
        }
      </div>
    </div>
  );
}