import RecipeBasicData from "./RecipeBasicData/RecipeBasicData";
import FormNav from "./FormNav/FormNav";
import RecipePhotoIngredients from "./RecipePhotoIngredients/RecipePhotoIngredients";
import RecipeStepsCategories from "./RecipeStepsCategories/RecipeStepsCategories";
import FormControl from "./FormControl/FormControl";

export default function AddNewRecipeForm() {
  return (
    <>
      <div data-stepper="" className="bg-base-100 w-full rounded-lg p-4" id="wizard-validation-horizontal">
        <FormNav></FormNav>
        <form id="wizard-validation-form-horizontal" className="needs-validation mt-5 sm:mt-8">
          <RecipeBasicData></RecipeBasicData>
          <RecipePhotoIngredients></RecipePhotoIngredients>
          <RecipeStepsCategories></RecipeStepsCategories>
          <FormControl></FormControl>
        </form>
      </div>
    </>
  );
}
