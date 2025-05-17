import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useRecipeQuery(id) {
  const apiUrl = import.meta.env.VITE_API_URL;

  return useQuery({
    queryFn: () => axios.get(`${apiUrl}/recipes/${id}`).then((res) => res.data),
    queryKey: ["recipe", id],
    enabled: !!id,
  });
}
