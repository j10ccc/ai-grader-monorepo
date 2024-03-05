import { ExamAPI } from "@ai-grader/apis";
import useSWR from "swr";

export default function useExamList() {
  const { data, mutate, isLoading } = useSWR(
    "/exam",
    async () => {
      const res = await ExamAPI.getExamList();
      if (res.code === 200) return res.data;
      return [];
    }
  );

  return {
    exams: data || [],
    refetch: mutate,
    isLoading
  };
}