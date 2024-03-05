import { ExamAPI } from "@ai-grader/apis";
import { useMemo } from "react";
import useSWR from "swr";

export default function useExam(examId: number) {
  const { data, isLoading } = useSWR(
    [`/exam/${examId}`, examId],
    ([, id]) => ExamAPI.getExamDetail(id)
  );

  // TODO: replace memo with update swr callback
  const exam = useMemo(() => {
    if (data?.code === 200) {
      return data.data;
    }
    return null;
  }, [data]);

  return {
    exam,
    loading: isLoading
  };
}