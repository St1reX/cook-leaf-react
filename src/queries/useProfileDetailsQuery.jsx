import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useProfileDetailsQuery(id) {
  return useQuery({
    queryFn: () => axiosInstance.get("/auth/me").then((res) => res.data),
    queryKey: ["profileDetails", id],
  });
}
