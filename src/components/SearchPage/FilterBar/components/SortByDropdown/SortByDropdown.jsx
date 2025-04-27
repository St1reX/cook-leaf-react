export default function SortByDropdown() {
  return (
    <>
      <div className="dropdown relative inline-flex [--auto-close:inside]">
        <button
          id="dropdown-transportation"
          type="button"
          className="dropdown-toggle btn-text btn-primary flex justify-center items-center"
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
            <label htmlFor="dropdown-radio-car-2" className="label-text text-base-content block text-sm font-semibold">
              Car{" "}
            </label>
          </div>
          <div className="dropdown-item gap-4">
            <input id="dropdown-radio-bicycle-2" name="dropdown-item-radio" type="radio" className="radio radio-primary" />
            <label htmlFor="dropdown-radio-bicycle-2" className="label-text text-base-content text-sm font-semibold">
              {" "}
              Bicycle{" "}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
