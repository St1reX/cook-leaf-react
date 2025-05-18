import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useIngredientsQuery(prompt) {
  const apiUrl = import.meta.env.VITE_API_URL;

  return useQuery({
    queryFn: () => axios.get(`${apiUrl}/ingredients`, { params: { name: prompt } }).then((res) => res.data),
    queryKey: ["ingredients", prompt],
    enabled: prompt?.trim().length > 0,
    staleTime: 60 * 1000 * 60,
  });
}
