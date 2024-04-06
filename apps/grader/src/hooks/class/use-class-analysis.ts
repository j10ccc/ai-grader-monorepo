import { ClassAPI } from "@ai-grader/apis";
import { ClassEntities } from "@ai-grader/entities";
import useSWR from "swr";

export default function useClassAnalysis(classId: number) {
  const { data, isLoading } = useSWR<ClassEntities.Class & ClassEntities.ClassAnalysisData | null>(
    [`/class/analysis/${classId}`, classId],
    async ([, id]) => {
      const res = await ClassAPI.getClassAnalysis(id as number);
      if (res.code === 200) return res.data;
      return null;
    }
  );

  return {
    analysisData: data,
    loading: isLoading
  };
}