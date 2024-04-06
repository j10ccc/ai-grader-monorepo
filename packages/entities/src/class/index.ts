import { z } from "zod";
import { ExamEntities } from "..";

export const ClassSchema = z.object({
  id: z.number(),
  name: z.string(),
  stuCount: z.number()
})

export const ClassAnalysisDataSchema = z.object({
  examHistory: z.array(ExamEntities.ExamSchema)
})

export interface Class extends Zod.infer<typeof ClassSchema> {}

export interface ClassAnalysisData extends Zod.infer<typeof ClassAnalysisDataSchema> {}