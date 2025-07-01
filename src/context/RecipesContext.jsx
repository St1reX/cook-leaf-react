import { createContext, useContext, useState, useEffect } from "react";
import useRecipesQuery from "../queries/useRecipesQuery";

const RecipesContext = createContext();

export default function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

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

  const { data: recipesData, isLoading } = useRecipesQuery();
  useEffect(() => {
    if (recipesData) {
      setRecipes(recipesData);
    }
  }, [recipesData]);

  return (
    <>
      <RecipesContext.Provider value={{ filters, setFilters, recipes, setRecipes, isLoading }}>
        {children}
      </RecipesContext.Provider>
    </>
  );
}

export const useRecipes = () => useContext(RecipesContext);
