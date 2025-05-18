import { useRecipes } from "../../../../../../context/RecipesContext";
import { handleFilterUpdate } from "../../../../../../utils/FiltersHandler";
import DropdownInput from "./Helpers/DropdownInput";

export default function ExcludedIngredients() {
  const {
    filters: {
      excludedIngredients: { value: currentIngredients },
    },
    setFilters,
  } = useRecipes();

  const handleLocalChange = (ingredient) => {
    const updatedArray = currentIngredients.filter(() => !currentIngredients.includes(ingredient));

    handleFilterUpdate("excludedIngredients", updatedArray, setFilters);
  };

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Excluded ingredients</h3>
        <DropdownInput type={"excludedIngredients"}></DropdownInput>
        <div className="mt-2">
          {currentIngredients.map((value, key) => (
            <button onClick={() => handleLocalChange(value)} key={value} className="btn btn-soft btn-warning">
              {value}{" "}
              <span
                className="icon-[mingcute--close-line]"
                style={{ width: 24, height: 24, color: "#000" }}
              />
            </button>
          ))}
          <label htmlFor="excludedIngredientsInput" className="label-text">
            No ingredients selected
          </label>
        </div>
      </div>
    </>
  );
}
