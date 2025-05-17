import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRecipeQuery from "../queries/useRecipeQuery";

const RecipeDetailsContext = createContext();

export default function RecipeDetailsProvider({ children }) {
  const { id } = useParams();
  const { data: recipe, isLoading, isError } = useRecipeQuery(id);

  return (
    <>
      <RecipeDetailsContext.Provider value={{ recipe, isLoading, isError }}>
        {children}
      </RecipeDetailsContext.Provider>
    </>
  );
}

export const useRecipeDetails = () => useContext(RecipeDetailsContext);
