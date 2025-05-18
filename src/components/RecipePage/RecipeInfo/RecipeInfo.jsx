import { Link } from "react-router-dom";
import RecipeRating from "./RecipeRating/RecipeRating";
import RecipeMeta from "./RecipeMeta/RecipeMeta";
import { useRecipeDetails } from "../../../context/RecipeDetailsContext";

export default function RecipeInfo() {
  const { recipe } = useRecipeDetails();

  return (
    <>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="flex justify-start gap-2 mb-4">
          {recipe.categories.map((value, index) => (
            <span
              key={value.category_name}
              className="badge text-black uppercase rounded-lg font-semibold bg-accent/20 border-0 badge-xl p-6"
            >
              #{value.category_name.replace(" ", "_")}
            </span>
          ))}
        </div>
        <h2 className="font-semibold text-4xl mb-6">{recipe.recipe_name}</h2>
        <RecipeRating rating={recipe.avg_rating} reviewsAmount={recipe.reviews_count}></RecipeRating>
        <RecipeMeta></RecipeMeta>
        <Link to={"/register"} className="btn btn-primary btn-xl w-fit">
          Register for free now
        </Link>
      </div>
    </>
  );
}
