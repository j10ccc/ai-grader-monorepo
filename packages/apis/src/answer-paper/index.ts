import { AnswerPaperEntities } from "@ai-grader/entities";
import ky from "ky";
import { HttpResponse } from "../utils/common";

export function getTemplateMeta(examId: number) {
  return ky
    .get(`/api/answer_template/list/${examId}`)
    .json<HttpResponse<AnswerPaperEntities.Template>>();
}