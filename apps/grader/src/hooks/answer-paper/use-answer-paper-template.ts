import { AnswerPaperAPI } from "@ai-grader/apis";
import useSWR from "swr";

export default function useAnswerPaperTemplate(examId: number) {
  const { data } = useSWR(
    [`/answer-paper/template/${examId}`, examId],
    async ([, id]) => {
      const res = await AnswerPaperAPI.getTemplateMeta(id);
      if (res.code === 200) return res.data.question_list;
      return null;
    }
  );

  return {
    template: data || []
  };
}