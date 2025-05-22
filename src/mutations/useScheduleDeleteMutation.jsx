import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useScheduleDeleteMutation() {
  return useMutation({
    mutationFn: ({ recipeID, date }) =>
      axiosInstance
        .delete(`/user/schedule`, {
          data: {
            recipe_id: recipeID,
            scheduled_date: date,
          },
        })
        .then((res) => res.data),
  });
}
