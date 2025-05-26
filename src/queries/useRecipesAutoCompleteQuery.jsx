import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useRecipesAutoCompleteQuery(prompt) {
  return useQuery({
    queryFn: () =>
      axiosInstance.get(`/recipes/search/autocomplete`, { params: { name: prompt } }).then((res) => res.data),
    queryKey: ["recipes_autocomplete", prompt],
    enabled: prompt?.trim().length > 0,
    staleTime: 60 * 1000 * 60,
  });
}
