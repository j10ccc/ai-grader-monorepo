import { ExamAPI } from "@ai-grader/apis";
import { useMemo } from "react";
import useSWR from "swr";

export default function useExam(examId: number) {
  const { data } = useSWR(
    [`/exam/${examId}`, examId],
    ([, id]) => ExamAPI.getExamDetail(id)
  );

  const exam = useMemo(() => {
    if (data?.code === 200) {
      return data.data;
    }
    return null;
  }, [data]);

  return {
    exam
  };
}