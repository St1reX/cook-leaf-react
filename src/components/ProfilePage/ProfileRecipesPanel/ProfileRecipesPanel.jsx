import AddNewRecipe from "./AddNewRecipe/AddNewRecipe";
import FavouriteRecipes from "./FavouriteRecipes/FavouriteRecipes";
import ScheduledRecipes from "./ScheduledRecipes/ScheduledRecipes";

export default function ProfileRecipesPanel() {
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-start">
        <FavouriteRecipes></FavouriteRecipes>
        <ScheduledRecipes></ScheduledRecipes>
        <AddNewRecipe></AddNewRecipe>
      </div>
    </>
  );
}
