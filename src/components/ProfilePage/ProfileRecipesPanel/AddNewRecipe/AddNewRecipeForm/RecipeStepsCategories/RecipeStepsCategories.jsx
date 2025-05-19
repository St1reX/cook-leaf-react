export default function RecipeStepsCategories() {
  return (
    <>
      <div
        id="social-links-validation"
        className="space-y-5"
        data-stepper-content-item='{ "index": 3}'
        style={{ display: "none" }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="label-text" htmlFor="forTwitterHorizontal">
              Steps
            </label>
            <input
              type="text"
              name="forTwitterHorizontal"
              id="forTwitterHorizontal"
              className="input"
              placeholder="https://twitter.com/abc"
            />
          </div>

          <div>
            <label className="label-text" htmlFor="forFacebookHorizontal">
              {" "}
              FACEBOOK{" "}
            </label>
            <input
              type="text"
              name="forFacebookHorizontal"
              id="forFacebookHorizontal"
              className="input"
              placeholder="https://facebook.com/abc"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2"></div>
      </div>
    </>
  );
}
