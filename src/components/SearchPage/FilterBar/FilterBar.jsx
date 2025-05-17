import { useEffect, useState } from "react";
import Waves from "node-waves";
import FilterModal from "./components/FilterModal/FilterModal";
import SortByDropdown from "./components/SortByDropdown/SortByDropdown";
import ActiveFilters from "./components/ActiveFilters/ActiveFilters";

export default function FilterBar() {
  useEffect(() => {
    Waves.init();
    Waves.attach("#filter-button");
  }, []);

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

          <FilterModal></FilterModal>
        </div>

        <div className="navbar-center flex gap-2 grow-1 max-md:hidden flex-wrap">
          <ActiveFilters></ActiveFilters>
        </div>

        <div className="navbar-end w-auto items-center gap-4 ml-auto">
          <SortByDropdown></SortByDropdown>
        </div>
      </nav>
    </>
  );
}
