import SearchRecipeDropdown from "./SearchRecipeDropdown/SearchRecipeDropdown";

export default function SearchBar() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <SearchRecipeDropdown className={"w-full"}></SearchRecipeDropdown>
      </div>
    </>
  );
}
