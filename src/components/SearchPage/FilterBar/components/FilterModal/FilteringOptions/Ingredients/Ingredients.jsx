import Searchbar from "./Searchbar";

export default function Ingredient() {
  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Ingredients</h3>
        <Searchbar></Searchbar>
        <div className="mt-2">
          <label htmlFor="ingredients-input" className="label-text">
            No ingredients selected
          </label>
          <button className="btn btn-outline btn-warning">Error</button>
        </div>
      </div>
    </>
  );
}
