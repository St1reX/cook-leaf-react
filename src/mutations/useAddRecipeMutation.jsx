import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../constants/axios";

export default function useAddRecipeMutation() {
  return useMutation({
    mutationFn: (recipeData) => {
      const formData = new FormData();

      formData.append("name", recipeData.name);
      formData.append("difficulty_level", recipeData.difficulty_level);
      formData.append("portions_amount", recipeData.portions_amount);

      formData.append("ingredients", JSON.stringify(recipeData.ingredients));
      formData.append("steps", JSON.stringify(recipeData.steps));

      if (recipeData.photo) {
        formData.append("photo", recipeData.photo);
      }

      return axiosInstance
        .post("/recipes", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data);
    },
  });
}
