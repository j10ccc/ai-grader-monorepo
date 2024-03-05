import { AnswerPaperAPI } from "@ai-grader/apis";
import useSWR from "swr";

export default function useAnswerPaperTemplate(examId: number) {
  const { data } = useSWR(
    [`/answer-paper/template/${examId}`, examId],
    async ([, id]) => {
      const res = await AnswerPaperAPI.getTemplateMeta(id);
      return res.question_list;
    }
  );

  return {
    template: data || []
  };
}