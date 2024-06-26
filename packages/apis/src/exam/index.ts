import ky from "ky";
import { HttpResponse } from "../utils/common";
import { ExamEntities } from "@ai-grader/entities";

export function getExamList() {
  return ky.get("/api/exam")
    .json<HttpResponse<Array<ExamEntities.Exam>>>()
}

export function getExamDetail(examId: number) {
  return ky.get(`/api/exam/${examId}`)
    .json<HttpResponse<ExamEntities.Exam>>();
}

export function createReviewTask(
  value: Pick<ExamEntities.Exam, "name" | "subject" | "ai_mark">
) {
  return ky.post("/api/exam", {
    json: value
  }).json<HttpResponse<null>>();
}

export function updateReviewTask(
  value: Pick<ExamEntities.Exam, "id" | "name" | "subject" | "ai_mark">
) {
  return ky.put("/api/exam", {
    json: value
  }).json<HttpResponse<null>>();
}

export function getAnswerPaperInExam(examId: number) {
  return ky.get("/api/exam/answer-paper", {
    searchParams: {
      examId
    },
  }).json<HttpResponse<any>>()
}