import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useRecipesQuery() {
  const apiUrl = import.meta.env.VITE_API_URL;

  return useQuery({
    queryFn: () => axios.get(`${apiUrl}/recipes`).then((res) => res.data),
    queryKey: ["recipes"],
    staleTime: 1000 * 60 * 5,
  });
}
