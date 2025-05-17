import { useState } from "react";
import useIngredientsQuery from "../../../../../../../queries/useIngredientsQuery";
import "./Searchbar.css";

export default function Searchbar() {
  const [ingredientName, setIngredientName] = useState("");
  const { data: ingredients } = useIngredientsQuery(ingredientName);

  const handleIngredientChange = (e) => {
    setIngredientName(e.target.value);
  };

  return (
    <div className="w-full">
      <div
        className="relative"
        data-combo-box='{
          "preventSelection": true,
          "isOpenOnFocus": true,
          "preventVisibility": false,
          "groupingType": null
        }'
      >
        <div className="relative">
          <input
            className="input ps-8"
            type="text"
            placeholder="Search for ingredients"
            role="combobox"
            aria-expanded="false"
            data-combo-box-input=""
            value={ingredientName}
            onChange={handleIngredientChange}
          />
          <span className="icon-[tabler--search] text-base-content absolute start-3 top-1/2 size-4 shrink-0 -translate-y-1/2" />
        </div>
        <div
          className="absolute left-0 w-full z-50 bg-base-100 rounded-box p-2 shadow-base-300/20 shadow-lg"
          style={{ display: "none" }}
          data-combo-box-output=""
        >
          <div data-combo-box-output-items-wrapper="" className="space-y-0.5" id="outputWrapper">
            {ingredients?.map((value, index) => (
              <div key={value._id}>
                <div className="dropdown-item combo-box-selected:dropdown-active">
                  <img
                    className="size-6 shrink-0 rounded-full"
                    src={value.photo_path}
                    alt={`${value.ingredient_name} icon`}
                  />
                  <span className="text-base-content">{value.ingredient_name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
