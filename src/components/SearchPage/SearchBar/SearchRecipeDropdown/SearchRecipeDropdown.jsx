import React, { useState } from "react";
import useRecipesAutoCompleteQuery from "../../../../queries/useRecipesAutoCompleteQuery";
import { Link } from "react-router-dom";

const SearchRecipeDropdown = ({ className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const shouldShowDropdown = inputValue.trim().length > 0 && isFocused;

  const { data: recipes, isLoading, isError } = useRecipesAutoCompleteQuery(inputValue);

  return (
    <div className="relative inline-block w-3/4">
      <input
        type="text"
        placeholder="Search for recipes"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 500)}
        className={`input input-xl pl-10 ${className}`}
      />

      <span
        className="icon-[mingcute--search-3-line] absolute left-0 top-[50%] -translate-y-1/2 ml-2"
        style={{ width: 24, height: 24, color: "#040404" }}
      />

      {shouldShowDropdown && (
        <ul className="absolute z-20 w-full menu bg-white border border-gray-200 shadow-lg max-h-80 overflow-auto">
          {isLoading && (
            <li className="w-full flex justify-center p-2">
              <span className="loading loading-dots"></span>
            </li>
          )}

          {!isLoading && isError && (
            <li className="text-error p-2">Server error occurred! Try again later...</li>
          )}

          {!isLoading && !isError && recipes?.length === 0 && <li className="p-2">No results found.</li>}

          {!isLoading &&
            !isError &&
            recipes?.length > 0 &&
            recipes.map((value, index) => (
              <li key={index}>
                <Link
                  to={`/recipe/${value._id}`}
                  className="w-full flex justify-between items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={value.photo_path}
                      alt={`${value.recipe_name} icon`}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <span>{value.recipe_name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>{value.avg_rating}</span>
                    <span
                      className="icon-[mingcute--star-fill]"
                      style={{ width: 24, height: 24, color: "#040404" }}
                    />
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchRecipeDropdown;
