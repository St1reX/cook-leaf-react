import React, { useState } from "react";
import useIngredientsQuery from "../../../../../../../queries/useIngredientsQuery";
import { useRecipes } from "../../../../../../../context/RecipesContext";
import { handleFilterUpdate } from "../../../../../../../utils/FiltersHandler";

const DropdownInput = ({ type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const shouldShowDropdown = inputValue.trim().length > 0 && isFocused;

  const { filters, setFilters } = useRecipes();
  const currentArray = filters[type].value;

  const handleLocalChange = (ingredient) => {
    const updatedArray = [...currentArray, ingredient];

    handleFilterUpdate(type, updatedArray, setFilters);
    setIsFocused(false);
    setInputValue("");
  };

  const { data: ingredients, isLoading, isError } = useIngredientsQuery(inputValue);
  const filteredIngredients = ingredients?.filter(
    (value) =>
      !filters["ingredients"].value.includes(value.ingredient_name) &&
      !filters["excludedIngredients"].value.includes(value.ingredient_name)
  );

  return (
    <div className="relative inline-block w-full max-w-sm">
      <input
        type="text"
        placeholder="Search for ingredients"
        id={`${type}Input`}
        name={`${type}Input`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 500)}
        className="input input-xl max-w-sm"
      />
      {shouldShowDropdown && (
        <ul className="absolute z-10 w-full menu bg-white border border-gray-200 shadow-lg">
          {isLoading && (
            <li className="w-full flex justify-center p-2">
              <span className="loading loading-dots"></span>
            </li>
          )}

          {!isLoading && isError && (
            <li className="text-error p-2">Server error ocurred! Try again later...</li>
          )}

          {!isLoading && !isError && filteredIngredients?.length === 0 && (
            <li className="p-2">No results found.</li>
          )}

          {!isLoading &&
            !isError &&
            filteredIngredients?.length > 0 &&
            filteredIngredients.map((value, index) => (
              <li key={index}>
                <div
                  onClick={() => handleLocalChange(value.ingredient_name)}
                  className="w-full flex items-center gap-2 p-2"
                >
                  <img
                    src={value.photo_path}
                    alt={`${value.ingredient_name} icon`}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <span>{value.ingredient_name}</span>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
