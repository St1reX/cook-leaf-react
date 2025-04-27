import SearchBar from "../components/SearchPage/SearchBar/SearchBar";
import FilterBar from "../components/SearchPage/FilterBar/FilterBar";
import Recipes from "../components/SearchPage/Recipes/Recipes";

export default function Search() {
  return (
    <>
      <SearchBar></SearchBar>
      <FilterBar></FilterBar>
      <Recipes></Recipes>
    </>
  );
}
