import * as Yup from "yup";

export default function NumberInput({ quantity, onQuantityChange, label, elementIndex = null }) {
  let numberSchema = Yup.number().min(1);

  const handleQuantityChange = async (newValue) => {
    try {
      await numberSchema.validate(newValue);

      if (elementIndex != null) {
        onQuantityChange(newValue, elementIndex);
        return;
      }

      onQuantityChange(newValue);
    } catch (err) {
      if (elementIndex != null) {
        onQuantityChange(quantity, elementIndex);
        return;
      }

      onQuantityChange(quantity);
    }
  };

  return (
    <div className="max-w-sm" data-input-number="">
      <label className="label-text" htmlFor={`${label}-input`}>
        {label}:
      </label>
      <div className="input">
        <input
          type="text"
          className="placeholder::text-black"
          id={`${label}-input`}
          placeholder="0"
          min={1}
          value={quantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
        />
        <span className="my-auto flex gap-3">
          <button
            type="button"
            className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0"
            disabled={quantity == 1}
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            <span className="icon-[tabler--minus] size-3.5 shrink-0" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            <span className="icon-[tabler--plus] size-3.5 shrink-0" />
          </button>
        </span>
      </div>
    </div>
  );
}
