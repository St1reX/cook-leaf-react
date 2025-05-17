import RecipeInfo from "../components/RecipePage/RecipeInfo/RecipeInfo";
import RecipeDetails from "../components/RecipePage/RecipeDetails/RecipeDetails";
import RecipeDetailsProvider from "../context/RecipeDetailsContext";
import RecipePhoto from "../components/RecipePage/RecipePhoto/RecipePhoto";

export default function Recipe() {
  return (
    <>
      <RecipeDetailsProvider>
        <div className="w-full flex gap-6 items-center justify-between h-[500px] mb-16">
          <RecipePhoto></RecipePhoto>
          <RecipeInfo></RecipeInfo>
        </div>
        <RecipeDetails></RecipeDetails>
      </RecipeDetailsProvider>
    </>
  );
}
