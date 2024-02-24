import { z } from "zod";

export enum ExamStatusEnum {
  Wait = "未判题",
  AIMarking = "AI 判题中",
  ManualMarking = "手动判题中",
  Marked = "阅卷完毕",
}

export enum ExamSubjectEnum {
  Chinese = "语文",
  Politics = "政治"
}

export const ExamSchema = z.object({
  ai_mark: z.boolean(),
  create_at: z.string(),
  id: z.number(),
  name: z.string(),
  status: z.nativeEnum(ExamStatusEnum),
  subject: z.nativeEnum(ExamSubjectEnum)
})

export interface Exam extends z.infer<typeof ExamSchema> { }