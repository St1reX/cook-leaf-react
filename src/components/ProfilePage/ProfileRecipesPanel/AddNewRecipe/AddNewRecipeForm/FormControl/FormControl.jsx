export default function FormControl() {
  return (
    <>
      <div data-stepper-content-item='{ "isFinal": true }' style={{ display: "none" }}>
        <div className="border-base-content/40 bg-base-200/50 flex h-48 items-center justify-center rounded-xl border border-dashed p-4">
          <h3 className="text-base-content/50 text-3xl">Your Form has been Submitted</h3>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-y-2">
        <button type="button" className="btn btn-primary btn-prev max-sm:btn-square" data-stepper-back-btn="">
          <span className="icon-[tabler--chevron-left] text-primary-content size-5 rtl:rotate-180" />
          <span className="max-sm:hidden">Back</span>
        </button>
        <button type="button" className="btn btn-primary btn-next max-sm:btn-square" data-stepper-next-btn="">
          <span className="max-sm:hidden">Next</span>
          <span className="icon-[tabler--chevron-right] text-primary-content size-5 rtl:rotate-180" />
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-stepper-finish-btn=""
          style={{ display: "none" }}
        >
          Finish
        </button>
        <button
          type="reset"
          className="btn btn-primary"
          data-stepper-reset-btn=""
          style={{ display: "none" }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
