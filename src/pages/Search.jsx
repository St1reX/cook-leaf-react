import SearchBar from "../components/SearchPage/SearchBar/SearchBar";
import FilterBar from "../components/SearchPage/FilterBar/FilterBar";
import Recipes from "../components/SearchPage/Recipes/Recipes";
import RecipesProvider from "../context/RecipesContext";

export default function Search() {
  return (
    <>
      <RecipesProvider>
        <SearchBar></SearchBar>
        <FilterBar></FilterBar>
        <Recipes></Recipes>
      </RecipesProvider>
    </>
  );
}
