import { createContext, useContext, useState } from "react";
import useRecipesQuery from "../queries/useRecipesQuery";

const RecipesContext = createContext();

export default function RecipesProvider({ children }) {
  const [filters, setFilters] = useState({
    ingredients: {
      displayLocation: "modal",
      prefix: "",
      value: [],
    },
    excludedIngredients: {
      displayLocation: "modal",
      prefix: "",
      value: [],
    },
    difficultyLevel: {
      displayLocation: "filtersList",
      prefix: "Difficulty level: ",
      value: null,
    },
    preparationTime: {
      displayLocation: "filtersList",
      prefix: "Preparation time: ",
      value: null,
    },
    portionsAmount: {
      displayLocation: "filtersList",
      prefix: "Portions amount: ",
      value: null,
    },
    rating: {
      displayLocation: "filtersList",
      prefix: "Rating: ",
      value: [],
    },
    sortBy: {
      displayLocation: "dropdown",
      prefix: "",
      value: null,
    },
  });

  const { data: recipes, isLoading } = useRecipesQuery();

  return (
    <>
      <RecipesContext.Provider value={{ filters, setFilters, recipes, isLoading }}>
        {children}
      </RecipesContext.Provider>
    </>
  );
}

export const useRecipes = () => useContext(RecipesContext);
