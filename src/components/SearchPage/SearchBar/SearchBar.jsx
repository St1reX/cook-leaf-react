export default function SearchBar() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4">
          <div
            className="relative"
            data-combo-box='{
                            "groupingType": "default",
                            "preventSelection": true,
                            "isOpenOnFocus": true,
                            "groupingTitleTemplate": "<div class=\"block text-xs text-base-content/50 m-3 mb-1\"></div>"
                                }'
          >
            <div className="relative">
              <input
                className="input ps-8 pl-10 h-12"
                type="text"
                placeholder="Search in CookLeaf®"
                role="combobox"
                aria-expanded="false"
                defaultValue=""
                data-combo-box-input=""
              />
              <span className="icon-[tabler--search] text-base-content absolute start-3 top-1/2 size-4 shrink-0 -translate-y-1/2" />
            </div>
            <div
              className="absolute left-0 w-full z-50 bg-base-100 rounded-box p-2 shadow-base-300/20 shadow-lg "
              style={{ display: "none" }}
              data-combo-box-output=""
            >
              <div data-combo-box-output-items-wrapper="" className="space-y-0.5">
                <div
                  data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
                  tabIndex={4}
                >
                  <a className="dropdown-item combo-box-selected:dropdown-active" href="#">
                    <img
                      className="size-6 shrink-0 rounded-full"
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png"
                      alt="Image Description"
                    />
                    <span
                      className="text-base-content"
                      data-combo-box-search-text="Alice Johnson"
                      data-combo-box-value=""
                    >
                      Alice Johnson
                    </span>
                    <span
                      className="ms-auto text-xs text-teal-600"
                      data-combo-box-search-text="Online"
                      data-combo-box-value=""
                    >
                      Online
                    </span>
                  </a>
                </div>
                <div
                  data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
                  tabIndex={5}
                >
                  <a className="dropdown-item combo-box-selected:dropdown-active" href="#">
                    <img
                      className="size-6 shrink-0 rounded-full"
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png"
                      alt="Image Description"
                    />
                    <span
                      className="text-base-content"
                      data-combo-box-search-text="David Kim"
                      data-combo-box-value=""
                    >
                      David Kim
                    </span>
                    <span
                      className="text-base-content/50 ms-auto text-xs"
                      data-combo-box-search-text="Offline"
                      data-combo-box-value=""
                    >
                      Offline
                    </span>
                  </a>
                </div>
                <div
                  data-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
                  tabIndex={6}
                >
                  <a className="dropdown-item combo-box-selected:dropdown-active" href="#">
                    <img
                      className="size-6 shrink-0 rounded-full"
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png"
                      alt="Image Description"
                    />
                    <span
                      className="text-base-content"
                      data-combo-box-search-text="Rosa Martinez"
                      data-combo-box-value=""
                    >
                      Rosa Martinez
                    </span>
                    <span
                      className="text-base-content/50 ms-auto text-xs"
                      data-combo-box-search-text="Offline"
                      data-combo-box-value=""
                    >
                      Offline
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
