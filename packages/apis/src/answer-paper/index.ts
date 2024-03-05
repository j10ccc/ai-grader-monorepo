import { AnswerPaperEntities } from "@ai-grader/entities";
import ky from "ky";

export function getTemplateMeta(examId: number) {
  return ky
    .get(`/api/answer_template/list/${examId}`)
    .json<AnswerPaperEntities.Template>();
}