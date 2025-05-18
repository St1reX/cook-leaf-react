import { useRecipeDetails } from "../../../../context/RecipeDetailsContext";
import formatTime from "../../../../utils/formatTime";

export default function RecipeMeta() {
  const { recipe } = useRecipeDetails();

  return (
    <>
      <div className="flex flex-col font-medium gap-4 mb-8">
        <div className="flex items-center">
          <span
            className="icon-[mingcute--knife-line] mr-2"
            style={{ width: 24, height: 24, color: "#000" }}
          />
          <span>
            Preparation time: <strong>{formatTime(recipe.estimated_time)} </strong>
          </span>
        </div>
        <div className="flex items-center">
          <span
            className="icon-[mingcute--chart-bar-line] mr-2"
            style={{ width: 24, height: 24, color: "#000" }}
          />

          <span>
            Difficulty level:{" "}
            <strong>
              {recipe.difficulty_level.charAt(0).toUpperCase() + recipe.difficulty_level.slice(1)}
            </strong>
          </span>
        </div>
        <div className="flex items-center">
          <span
            className="icon-[mingcute--bowl-2-line] mr-2"
            style={{ width: 24, height: 24, color: "#000" }}
          />
          <span>
            Portions: <strong>{recipe.portions_amount}</strong>
          </span>
        </div>
      </div>
    </>
  );
}
