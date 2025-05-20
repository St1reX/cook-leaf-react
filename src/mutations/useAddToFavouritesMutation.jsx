import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useAddToFavouritesMutation() {
  return useMutation({
    mutationFn: (recipeID) => axiosInstance.post("/user/favourites", { recipe_id: recipeID }),
  });
}
