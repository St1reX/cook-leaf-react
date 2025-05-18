import RecipeContent from "../components/RecipePage/RecipeContent";
import RecipeDetailsProvider from "../context/RecipeDetailsContext";

export default function Recipe() {
  return (
    <>
      <RecipeDetailsProvider>
        <RecipeContent></RecipeContent>
      </RecipeDetailsProvider>
    </>
  );
}
