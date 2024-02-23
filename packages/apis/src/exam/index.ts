import ky from "ky";
import { HttpResponse } from "../utils/common";
import { ExamEntities } from "@ai-grader/entities";

export function getReviewTasks() {
  return ky.get("/api/exam", {
  }).json<HttpResponse<Array<ExamEntities.Exam>>>()
}