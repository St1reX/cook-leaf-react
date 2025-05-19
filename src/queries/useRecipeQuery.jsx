import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useRecipeQuery(id) {
  const apiUrl = import.meta.env.VITE_API_URL;

  return useQuery({
    queryFn: () => axiosInstance.get(`/recipes/${id}`).then((res) => res.data),
    queryKey: ["recipe", id],
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
  });
}
