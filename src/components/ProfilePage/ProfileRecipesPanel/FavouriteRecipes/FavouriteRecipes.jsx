import { useAuth } from "../../../../context/AuthContext";
import RecipeCard from "./RecipeCard/RecipeCard";

export default function FavouriteRecipes() {
  const {
    user: { favourite_recipes: favouriteRecipes },
  } = useAuth();

  //console.log(favouriteRecipes);

  const favourite_recipes_to_display = favouriteRecipes.slice(0, 3);
  const favourite_recipes_hidden = favouriteRecipes.slice(4, favouriteRecipes.length);

  return (
    <>
      <div className="card w-full">
        <div className="card-body">
          <div className="mb-2">
            <h5 className="card-title mb-2.5">Favourite recipes</h5>
            <p className="mb-4">
              This section allows you to browse through all your favorite recipes. Whether it's a dish you
              loved recently or a long-time favorite, you'll find them all here for quick access and
              inspiration whenever you need it.
            </p>
          </div>

          {favourite_recipes_to_display.map((value, index) => (
            <RecipeCard key={value.recipe_name} recipe={value} recipeNumber={index}></RecipeCard>
          ))}

          <div
            id="favourite-collapse-heading"
            className="collapse hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="favourite-collapse"
          >
            <div className="flex justify-start gap-4 items-center flex-wrap w-full">
              {favourite_recipes_hidden.map((value, index) => (
                <RecipeCard key={value.recipe_name} recipe={value} recipeNumber={index}></RecipeCard>
              ))}
            </div>
          </div>

          <div className="card-actions justify-center">
            <button
              type="button"
              className="collapse-toggle btn btn-primary"
              id="basic-collapse"
              aria-expanded="false"
              aria-controls="favourite-collapse-heading"
              data-collapse="#favourite-collapse-heading"
            >
              Collapse
              <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
