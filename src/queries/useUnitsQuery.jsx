import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useUnitsQuery() {
  return useQuery({
    queryFn: () => axiosInstance.get("/units").then((res) => res.data),
    queryKey: ["units"],
    staleTime: 60 * 1000 * 120,
  });
}
