import { useEffect } from "react";
import Waves from "node-waves";
import FilterModal from "./components/FilterModal/FilterModal";
import SortByDropdown from "./components/SortByDropdown/SortByDropdown";

export default function FilterBar() {
  useEffect(() => {
    Waves.init();
    Waves.attach("#filter-button");
  }, []);

  return (
    <>
      <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 mb-4">
        <div className="navbar-start max-md:w-1/4">
          <button
            className="btn btn-outline btn-primary waves"
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
        <div className="navbar-center max-md:hidden"></div>
        <div className="navbar-end items-center gap-4">
          <SortByDropdown></SortByDropdown>
        </div>
      </nav>
    </>
  );
}
