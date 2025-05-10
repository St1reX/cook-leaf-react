import Ingredient from "./FilteringOptions/Ingredients";
import ExcludedIngredient from "./FilteringOptions/ExcludedIngredients";
import DifficultyLevel from "./FilteringOptions/DifficultyLevel";
import PreperationTime from "./FilteringOptions/PreperationTime";
import PortionsAmount from "./FilteringOptions/PortionsAmount";
import Rating from "./FilteringOptions/Rating";

export default function FilterModal({ onFiltersChange }) {
  return (
    <>
      <div
        id="filter-modal"
        className="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden"
        role="dialog"
        tabIndex={-1}
      >
        <div className="modal-dialog  overlay-open:opacity-100 overlay-open:duration-300 transition-all ease-out">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Filters</h3>
              <button
                type="button"
                className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
                aria-label="Close"
                data-overlay="#filter-modal"
              >
                <span className="icon-[tabler--x] size-4" />
              </button>
            </div>

            <div className="modal-body flex flex-col gap-[27px]">
              <Ingredient></Ingredient>
              <div className="divider"></div>
              <ExcludedIngredient></ExcludedIngredient>
              <div className="divider"></div>
              <DifficultyLevel onDifficultyChange={onFiltersChange}></DifficultyLevel>
              <div className="divider"></div>
              <PreperationTime onPreparationTimeChange={onFiltersChange}></PreperationTime>
              <div className="divider"></div>
              <PortionsAmount onPortionsAmountChange={onFiltersChange}></PortionsAmount>
              <div className="divider"></div>
              <Rating onRatingChange={onFiltersChange}></Rating>
            </div>

            <div className="modal-footer pt-2">
              <button type="button" className="btn btn-soft btn-secondary" data-overlay="#filter-modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
