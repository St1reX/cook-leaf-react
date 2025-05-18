import { useRecipeDetails } from "../../context/RecipeDetailsContext";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeInfo from "./RecipeInfo/RecipeInfo";
import RecipeMeta from "./RecipeInfo/RecipeMeta/RecipeMeta";
import RecipePhoto from "./RecipePhoto/RecipePhoto";
import RecipeSkeleton from "./RecipesSkeleton";

export default function RecipeContent() {
  const { isLoading } = useRecipeDetails();

  if (isLoading) return <RecipeSkeleton />;

  return (
    <>
      <div className="w-full flex gap-6 items-center justify-between h-[500px] mb-16">
        <RecipePhoto></RecipePhoto>
        <RecipeInfo></RecipeInfo>
      </div>
      <RecipeDetails />
    </>
  );
}
