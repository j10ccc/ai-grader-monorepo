import ky from "ky";
import { HttpResponse } from "../utils/common";
import { ClassEntities } from "@ai-grader/entities";

export function getMyClasses() {
  return ky.get("/api/class")
    .json<HttpResponse<Array<ClassEntities.Class>>>()
}

export function getClassAnalysis(classId: number) {
  return ky.get(`/api/class/analysis/${classId}`)
    .json<HttpResponse<ClassEntities.Class & ClassEntities.ClassAnalysisData>>()
}