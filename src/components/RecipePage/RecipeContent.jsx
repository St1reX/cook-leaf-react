import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeInfo from "./RecipeInfo/RecipeInfo";
import RecipePhoto from "./RecipePhoto/RecipePhoto";
import RecipeSkeleton from "./RecipesSkeleton";

export default function RecipeContent({ recipe, isLoading, isError }) {
  if (isLoading) return <RecipeSkeleton />;
  if (isError) return <div>Error loading recipe</div>;

  return (
    <>
      <div className="w-full flex gap-6 items-center justify-between h-[500px] mb-16">
        <RecipePhoto recipe={recipe} />
        <RecipeInfo recipe={recipe} />
      </div>
      <RecipeDetails recipe={recipe} />
    </>
  );
}
