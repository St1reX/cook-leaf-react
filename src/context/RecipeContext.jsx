import { createContext, useContext, useEffect, useState } from "react";
import useRecipesQuery from "../queries/useRecipesQuery";

const RecipeContext = createContext();

export default function RecipeContext({ children }) {
  const recipe, isLoading, isError;

  return (
    <>
      <RecipeContext.Provider value = {{recipe, isLoading, isError}}>{children}</RecipeContext.Provider>
    </>
  );
}

export const useRecipe = () => useContext(RecipeContext);
