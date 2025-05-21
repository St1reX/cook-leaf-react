import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useScheduleRecipeMutation() {
  return useMutation({
    mutationFn: ({ recipeID, dates }) =>
      axiosInstance
        .post(`/user/schedule`, { recipe_id: recipeID, scheduled_dates: dates })
        .then((res) => res.data),
  });
}
