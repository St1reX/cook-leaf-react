import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";
import { useAuth } from "../context/AuthContext";

export default function useLogoutMutation() {
  const { logout } = useAuth();

  return useMutation({
    mutationFn: () =>
      axiosInstance.post("/auth/logout", {}).then((res) => {
        logout();
        return res.data;
      }),
  });
}
