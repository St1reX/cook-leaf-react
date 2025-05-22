import RecipeContent from "../components/RecipePage/RecipeContent";
import { useParams } from "react-router-dom";
import useRecipeQuery from "../queries/useRecipeQuery";

export default function Recipe() {
  const { id } = useParams();
  const { data: recipe, isLoading, isError } = useRecipeQuery(id);

  return (
    <>
      <RecipeContent recipe={recipe} isLoading={isLoading} isError={isError} />
    </>
  );
}
