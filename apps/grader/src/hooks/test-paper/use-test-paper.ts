import { TestPaperAPI } from "@ai-grader/apis";
import { TestPaperEntities } from "@ai-grader/entities";
import useSWR from "swr";

export default function useTestPaper(examId: number) {
  const { data, isLoading, mutate } = useSWR(
    [`/test-paper/${examId}`, examId],
    async ([, examId]) => {
      const res = await TestPaperAPI.getTestPaperInExam(examId);
      return res.data.question_list;
    }
  );

  async function createQuestion(value: TestPaperEntities.Question) {
    const res = await TestPaperAPI.createQuestion(examId, value);
    if (res.code !== 200) throw res.msg;
    mutate([...data || [], value]);
  }

  return {
    questions: data || [],
    loading: isLoading,
    createQuestion
  };
}