import { useRecipes } from "../../../context/RecipesContext";
import formatTime from "../../../utils/formatTIme";
import RecipeCard from "./components/RecipeCard";
import ShowMore from "./components/ShowMore";
import { Link } from "react-router-dom";

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
