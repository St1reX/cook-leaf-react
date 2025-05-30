import formatTime from "../../../../utils/formatTIme";
import { capitalizeFirstLetter } from "../../../../utils/stringUtils";

export default function RecipeMeta({ recipe }) {
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
            Difficulty level: <strong>{capitalizeFirstLetter(recipe.difficulty_level)}</strong>
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
