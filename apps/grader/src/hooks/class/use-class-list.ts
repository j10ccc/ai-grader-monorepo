import { ClassAPI } from "@ai-grader/apis";
import { ClassEntities } from "@ai-grader/entities";
import useSWR from "swr";

export default function useClassList() {
  const { data, mutate, isLoading } = useSWR<ClassEntities.Class[]>(
    "/class",
    async () => {
      const res = await ClassAPI.getMyClasses();
      if (res.code === 200) return res.data;
      else return [];
    }
  );

  return {
    classes: data || [],
    refetch: mutate,
    isLoading
  };
}