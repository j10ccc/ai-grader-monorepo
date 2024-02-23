import { ExamAPI } from "@ai-grader/apis";
import { useMemo } from "react";
import useSWR from "swr";

export default function useExamList() {
  const { data } = useSWR("/exam", ExamAPI.getExamList);

  const exams = useMemo(() => {
    if (data?.data && data.data.length)
      return data.data || [];
    return [];
  }, [data]);

  return {
    exams
  };
}