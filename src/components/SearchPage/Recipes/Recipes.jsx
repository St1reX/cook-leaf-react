import { useRecipes } from "../../../context/RecipesContext";
import RecipeCard from "../../Shared/RecipeCard/RecipeCard";

export default function Recipes() {
  const { recipes, isLoading } = useRecipes();

  return (
    <>
      <div id="gridWrapper" className="grid gap-6 grid-cols-[repeat(auto-fit,240px)] justify-center mb-4">
        {isLoading ? (
          <span className="loading loading-spinner text-success loading-xl text-center justify-self-center"></span>
        ) : (
          recipes.map((value, index) => (
            <RecipeCard key={value.recipe_name} recipe={value} recipeNumber={index}></RecipeCard>
          ))
        )}
      </div>
    </>
  );
}
