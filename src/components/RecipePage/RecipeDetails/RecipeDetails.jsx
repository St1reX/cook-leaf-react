import Ingredients from "./Ingredients/Ingredients";
import Nourishment from "./Nourishment/Nourishment";
import RecipeSteps from "./RecipeSteps/RecipeSteps";

export default function RecipeDetails({ recipe }) {
  return (
    <>
      <div className="flex w-full mb-10 gap-6">
        <Ingredients recipe={recipe}></Ingredients>
        <div className="flex w-3/5 flex-col gap-6">
          <RecipeSteps recipe={recipe}></RecipeSteps>
          <Nourishment recipe={recipe}></Nourishment>
        </div>
      </div>
    </>
  );
}
