export default function StepsTimeInput({ stepTime, onStepTimeChange, inputIndex }) {
  return (
    <div className="max-w-sm" data-input-number="">
      <label className="label-text" htmlFor={`step-time-input-${inputIndex}`}>
        Estimated time:
      </label>
      <div className="input">
        <input
          type="text"
          aria-label="Step time input"
          data-input-number-input=""
          id={`step-time-input-${inputIndex}`}
          min={1}
          value={stepTime}
          onChange={(e) => onStepTimeChange(e.target.value, inputIndex)}
        />
        <span className="my-auto flex gap-3">
          <button
            type="button"
            className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0"
            aria-label="Decrement button"
            data-input-number-decrement=""
            disabled={stepTime == 1}
            onClick={() => onStepTimeChange(Number(stepTime) - 1, inputIndex)}
          >
            <span className="icon-[tabler--minus] size-3.5 shrink-0" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0"
            aria-label="Increment button"
            data-input-number-increment=""
            onClick={() => onStepTimeChange(Number(stepTime) + 1, inputIndex)}
          >
            <span className="icon-[tabler--plus] size-3.5 shrink-0" />
          </button>
        </span>
      </div>
    </div>
  );
}
