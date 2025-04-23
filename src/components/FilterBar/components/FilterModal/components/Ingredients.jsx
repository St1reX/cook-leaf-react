export default function Ingredient() {
  return (
    <>
      <div className="max-w-sm">
        <h3 className="text-xl mb-3">Ingredients</h3>
        <input type="text" placeholder="Search for ingredients" className="input input-xl max-w-sm" id="ingredients-input" />

        <div className="mt-2">
          <label htmlFor="ingredients-input" className="label-text">
            No ingredients selected
          </label>
          <button className="btn btn-outline btn-error">Error</button>
        </div>
      </div>
    </>
  );
}
