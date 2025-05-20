import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useLoginMutation() {
  return useMutation({
    mutationFn: (loginData) =>
      axiosInstance
        .post("/auth/login", {
          email: loginData.mail,
          password: loginData.password,
        })
        .then((res) => res.data),
  });
}
