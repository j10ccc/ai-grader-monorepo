import { z } from "zod";

export const QuestionSchema = z.object({
  ai_mark: z.boolean(),
  answer: z.string(),
  id: z.number(),
  knowledge_points: z.array(z.string()),
  points: z.number(),
  question: z.string(),
})

export interface Question extends Zod.infer<typeof QuestionSchema> { }