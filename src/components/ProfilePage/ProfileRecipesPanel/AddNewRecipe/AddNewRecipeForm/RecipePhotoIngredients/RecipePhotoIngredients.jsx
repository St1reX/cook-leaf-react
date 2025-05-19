export default function RecipePhotoIngredients() {
  return (
    <>
      <div
        id="personal-info-validation"
        className="space-y-5"
        data-stepper-content-item='{ "index": 2 }'
        style={{ display: "none" }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="label-text" htmlFor="profileHorizontal">
              Recipe Image
            </label>
            <input type="file" className="input" id="profileHorizontal" required="" />
          </div>
          <div>
            <label className="label-text" htmlFor="profileHorizontal">
              Recipe Image
            </label>
            <input type="file" className="input" id="profileHorizontal" required="" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2"></div>
      </div>
    </>
  );
}
