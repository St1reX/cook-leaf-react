import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useRegisterMutation() {
  return useMutation({
    mutationFn: (registerData) =>
      axiosInstance.post("/auth/register", {
        email: registerData.mail,
        password: registerData.password,
      }),
  });
}
