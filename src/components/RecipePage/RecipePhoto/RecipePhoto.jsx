import { useRecipeDetails } from "../../../context/RecipeDetailsContext";

export default function RecipePhoto() {
  const { recipe, isLoading } = useRecipeDetails();

  return (
    <>
      {isLoading ? (
        <div class="skeleton skeleton-animated w-1/2 h-full"></div>
      ) : (
        <div className="w-1/2">
          <img
            src={recipe.photo_path}
            alt={`${recipe.recipe_name} picture`}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      )}
    </>
  );
}
