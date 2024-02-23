import { ExamAPI } from "@ai-grader/apis";
import useSWR from "swr";

export default function useReviewRask() {
  const { data } = useSWR("/exam", ExamAPI.getReviewTasks);

  return {
    tasks: data?.data || []
  };
}