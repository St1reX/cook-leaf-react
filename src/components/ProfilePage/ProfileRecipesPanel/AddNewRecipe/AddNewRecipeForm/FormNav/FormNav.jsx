export default function FormNav() {
  return (
    <>
      <ul className="relative flex flex-col gap-2 md:flex-row">
        <li
          className="group flex flex-1 flex-col items-center gap-2 md:flex-row"
          data-stepper-nav-item='{ "index": 1 }'
        >
          <span className="min-h-7.5 min-w-7.5 inline-flex flex-col items-center gap-2 align-middle text-sm md:flex-row">
            <span className="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium">
              <span className="stepper-success:hidden stepper-error:hidden stepper-completed:hidden text-sm">
                1
              </span>
              <span className="icon-[tabler--check] stepper-success:block hidden size-4 shrink-0" />
              <span className="icon-[tabler--x] stepper-error:block hidden size-4 shrink-0" />
            </span>
            <span className="text-base-content text-nowrap font-medium">Basic Info</span>
          </span>
          <div className="stepper-success:bg-primary stepper-completed:bg-success bg-base-content/20 h-px w-full group-last:hidden max-md:mt-2 max-md:h-8 max-md:w-px md:flex-1" />
        </li>
        <li
          className="group flex flex-1 flex-col items-center gap-2 md:flex-row"
          data-stepper-nav-item='{ "index": 2 }'
        >
          <span className="min-h-7.5 min-w-7.5 inline-flex flex-col items-center gap-2 align-middle text-sm md:flex-row">
            <span className="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium">
              <span className="stepper-success:hidden stepper-error:hidden stepper-completed:hidden text-sm">
                2
              </span>
              <span className="icon-[tabler--check] stepper-success:block hidden size-4 shrink-0" />
              <span className="icon-[tabler--x] stepper-error:block hidden size-4 shrink-0" />
            </span>
            <span className="text-base-content text-nowrap font-medium">Personal Info</span>
          </span>
          <div className="stepper-success:bg-primary stepper-completed:bg-success bg-base-content/20 h-px w-full group-last:hidden max-md:mt-2 max-md:h-8 max-md:w-px md:flex-1" />
        </li>
        <li
          className="group flex flex-1 flex-col items-center gap-2 md:flex-row"
          data-stepper-nav-item='{ "index": 3 }'
        >
          <span className="min-h-7.5 min-w-7.5 inline-flex flex-col items-center gap-2 align-middle text-sm md:flex-row">
            <span className="stepper-active:text-bg-primary stepper-active:shadow-sm shadow-base-300/20 stepper-success:text-bg-primary stepper-success:shadow-sm stepper-completed:text-bg-success stepper-error:text-bg-error text-bg-soft-neutral flex size-7.5 shrink-0 items-center justify-center rounded-full font-medium">
              <span className="stepper-success:hidden stepper-error:hidden stepper-completed:hidden text-sm">
                3
              </span>
              <span className="icon-[tabler--check] stepper-success:block hidden size-4 shrink-0" />
              <span className="icon-[tabler--x] stepper-error:block hidden size-4 shrink-0" />
            </span>
            <span className="text-base-content text-nowrap font-medium">Social Links</span>
          </span>
          <div className="stepper-success:bg-primary stepper-completed:bg-success bg-base-content/20 h-px w-full group-last:hidden max-md:mt-2 max-md:h-8 max-md:w-px md:flex-1" />
        </li>
        {/* End Item */}
      </ul>
    </>
  );
}
