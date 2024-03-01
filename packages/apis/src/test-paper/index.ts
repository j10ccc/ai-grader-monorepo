import ky from "ky";
import { HttpResponse } from "../utils/common";
import { TestPaperEntities } from "@ai-grader/entities";

export function getTestPaperInExam(examId: number) {
  return ky
    .get(`/api/question/list/${examId}`)
    .json<HttpResponse<
      { id: number; question_list: Array<TestPaperEntities.Question> }
    >>();
}

export function createQuestion(examId: number, value: TestPaperEntities.Question) {
  return ky
    .post(`/api/question`, { json: value, searchParams: { exam_id: examId } })
    .json<HttpResponse<null>>();
}