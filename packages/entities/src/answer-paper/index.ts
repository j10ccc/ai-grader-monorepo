import { z } from "zod";

export const TemplateItemSchema = z.object({
  id: z.string(),
  page_nums: z.number(),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number()
})

export interface TemplateItem extends Zod.infer<typeof TemplateItemSchema> { }

export interface Template {
  id: number,
  question_list: Array<TemplateItem>
}