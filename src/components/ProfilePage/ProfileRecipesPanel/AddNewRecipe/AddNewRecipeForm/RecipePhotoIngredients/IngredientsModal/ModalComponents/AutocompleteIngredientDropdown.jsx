import { useState } from "react";
import useIngredientsQuery from "../../../../../../../../queries/useIngredientsQuery";

export default function AutocompleteIngredientDropdown({ onSelectIngredient, activeIngredients }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const shouldShowDropdown = inputValue.trim().length > 0 && isFocused;

  const { data: ingredients, isLoading, isError } = useIngredientsQuery(inputValue);

  const unActiveIngredients = ingredients?.filter(
    (ingredient) => !activeIngredients.some((activeIngredient) => ingredient._id === activeIngredient._id)
  );

  return (
    <div className="relative w-full mt-2">
      <input
        type="text"
        placeholder="Search for ingredients"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 500)}
        className="input input-xl pl-10 w-full"
      />

      <span
        className="icon-[mingcute--search-3-line] absolute left-0 top-[50%] -translate-y-1/2 ml-2"
        style={{ width: 24, height: 24, color: "#040404" }}
      />

      {shouldShowDropdown && (
        <ul className="absolute w-full menu bg-white border border-gray-200 shadow-lg max-h-80 overflow-auto">
          {isLoading && (
            <li className="w-full flex justify-center p-2">
              <span className="loading loading-dots"></span>
            </li>
          )}

          {!isLoading && isError && (
            <li className="text-error p-2">Server error occurred! Try again later...</li>
          )}

          {!isLoading && !isError && unActiveIngredients?.length === 0 && (
            <li className="p-2">No results found.</li>
          )}

          {!isLoading &&
            !isError &&
            unActiveIngredients?.length > 0 &&
            unActiveIngredients.map((value, index) => (
              <li key={index}>
                <button
                  onClick={() => onSelectIngredient(value)}
                  className="w-full flex justify-between items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                  type="button"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={value.photo_path}
                      alt={`${value.ingredient_name} icon`}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <span>{value.ingredient_name}</span>
                  </div>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
