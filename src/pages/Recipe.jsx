import RecipeInfo from "../components/RecipePage/RecipeInfo/RecipeInfo";
import RecipeDetails from "../components/RecipePage/RecipeDetails/RecipeDetails";

export default function Recipe() {
  return (
    <>
      <div className="w-full flex gap-6 items-center justify-between h-[500px] mb-16">
        <div className="w-1/2">
          <img
            src="https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/888F339B-27B2-42E9-AE20-D29EC53DB095/Derivates/9F59D488-D38C-4BFC-B7DF-5AC3D4A303E4.jpg"
            alt="Breed"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <RecipeInfo></RecipeInfo>
      </div>
      <RecipeDetails></RecipeDetails>
    </>
  );
}
