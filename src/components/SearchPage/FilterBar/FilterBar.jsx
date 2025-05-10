import { useEffect, useState } from "react";
import Waves from "node-waves";
import FilterModal from "./components/FilterModal/FilterModal";
import SortByDropdown from "./components/SortByDropdown/SortByDropdown";
import ActiveFilters from "./components/ActiveFilters/ActiveFilters";
import { handleSortChange } from "./components/FilterHandlers/FilterHandlers";

export default function FilterBar() {
  useEffect(() => {
    Waves.init();
    Waves.attach("#filter-button");
  }, []);

  const [filters, setFilters] = useState({
    ingredients: {
      displayLocation: "modal",
      prefix: "",
      value: null,
    },
    excludedIngredients: {
      displayLocation: "modal",
      prefix: "",
      value: null,
    },
    difficultyLevel: {
      displayLocation: "filtersList",
      prefix: "Difficulty level: ",
      value: null,
    },
    preparationTime: {
      displayLocation: "filtersList",
      prefix: "Preparation time: ",
      value: null,
    },
    portionsAmount: {
      displayLocation: "filtersList",
      prefix: "Portions amount: ",
      value: null,
    },
    rating: {
      displayLocation: "filtersList",
      prefix: "",
      value: null,
    },
    sortBy: {
      displayLocation: "dropdown",
      prefix: "",
      value: null,
    },
  });

  return (
    <>
      <nav className="navbar rounded-box flex w-full items-center justify-start gap-6 mb-4">
        <div className="navbar-start w-fit flex justify-start items-start">
          <button
            className="btn btn-outline btn-primary rounded-lg waves"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="filter-modal"
            data-overlay="#filter-modal"
            id="filter-button"
          >
            <span className="icon-[mingcute--filter-2-line]" style={{ width: 24, height: 24 }} />
            Filters
          </button>

          <FilterModal onFiltersChange={setFilters}></FilterModal>
        </div>

        <div className="navbar-center flex gap-2 grow-1 max-md:hidden">
          <ActiveFilters filters={filters} onFilterDelete={setFilters}></ActiveFilters>
        </div>

        <div className="navbar-end w-auto items-center gap-4 ml-auto">
          <SortByDropdown onChange={(newSort) => handleSortChange(newSort, setFilters)}></SortByDropdown>
        </div>
      </nav>
    </>
  );
}
