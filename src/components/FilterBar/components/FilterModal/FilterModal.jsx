import Ingredient from './components/Ingredients';
import ExcludedIngredient from './components/ExcludedIngredients';
import DifficultyLevel from './components/DifficultyLevel';
import PreperationTime from './components/PreperationTime';
import PortionsAmount from './components/PortionsAmount';
import Rating from './components/Rating';

import './FilterModal.css';

export default function FilterModal() {
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

            <div className="modal-body">
              <Ingredient></Ingredient>
              <div className="divider"></div>
              <ExcludedIngredient></ExcludedIngredient>
              <div className="divider"></div>
              <DifficultyLevel></DifficultyLevel>
              <div className="divider"></div>
              <PreperationTime></PreperationTime>
              <div className="divider"></div>
              <PortionsAmount></PortionsAmount>
              <div className="divider"></div>
              <Rating></Rating>
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
