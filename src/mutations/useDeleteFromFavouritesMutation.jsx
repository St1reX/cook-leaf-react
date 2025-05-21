import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useDeleteFromFavouritesMutation() {
  return useMutation({
    mutationFn: (recipeID) =>
      axiosInstance.delete(`/user/favourites`, { data: { recipe_id: recipeID } }).then((res) => res.data),
  });
}
