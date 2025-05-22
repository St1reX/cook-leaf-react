import { RECIPE_DIFFICULTIES } from "../../../../../../constants/recipeDifficulties";
import { PORTIONS_AMOUNT } from "../../../../../../constants/portionsAmount";
import { capitalizeFirstLetter } from "../../../../../../utils/stringUtils";

export default function RecipeBasicData() {
  return (
    <>
      <div id="account-details-validation" className="space-y-5" data-stepper-content-item='{ "index": 1 }'>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="label-text" htmlFor="recipeTitle">
              Recipe Title
            </label>
            <input
              type="text"
              placeholder="Spaghetti Bolognese"
              className="input"
              id="recipeTitle"
              required=""
            />
          </div>

          <div>
            <label className="label-text" htmlFor="recipeDifficultyLevel">
              Difficulty level
            </label>
            <select className="select" id="recipeDifficultyLevel">
              {RECIPE_DIFFICULTIES.map((level) => (
                <option key={level} value={level}>
                  {capitalizeFirstLetter(level)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="label-text" htmlFor="recipePortionsAmount">
              Portions Amount
            </label>
            <select className="select" id="recipePortionsAmount">
              {PORTIONS_AMOUNT.map((amount) => (
                <option key={amount} value={amount}>
                  {amount}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
