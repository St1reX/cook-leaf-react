import FilterModal from "./components/FilterModal/FilterModal";

export default function FilterBar() {
  return (
    <>
      <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 mb-4">
        <div className="navbar-start max-md:w-1/4">
          <button
            className="btn btn-outline btn-primary waves waves-primary"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="filter-modal"
            data-overlay="#filter-modal"
          >
            <span
              className="icon-[mingcute--filter-2-line]"
              style={{ width: 24, height: 24 }}
            />
            Filters
          </button>

          <FilterModal></FilterModal>
        </div>
        <div className="navbar-center max-md:hidden"></div>
        <div className="navbar-end items-center gap-4">
          <div className="dropdown relative inline-flex [--auto-close:inside]">
            <button
              id="dropdown-transportation"
              type="button"
              className="dropdown-toggle btn-text btn-primary"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              Sort By
              <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4" />
            </button>
            <div
              className="dropdown-menu dropdown-open:opacity-100 hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-transportation"
            >
              <div className="dropdown-item gap-4">
                <input
                  id="dropdown-radio-car-2"
                  name="dropdown-item-radio"
                  type="radio"
                  className="radio radio-primary"
                  defaultChecked=""
                />
                <label
                  htmlFor="dropdown-radio-car-2"
                  className="label-text text-base-content block text-sm font-semibold"
                >
                  Car{" "}
                </label>
              </div>
              <div className="dropdown-item gap-4">
                <input
                  id="dropdown-radio-bicycle-2"
                  name="dropdown-item-radio"
                  type="radio"
                  className="radio radio-primary"
                />
                <label
                  htmlFor="dropdown-radio-bicycle-2"
                  className="label-text text-base-content text-sm font-semibold"
                >
                  {" "}
                  Bicycle{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
