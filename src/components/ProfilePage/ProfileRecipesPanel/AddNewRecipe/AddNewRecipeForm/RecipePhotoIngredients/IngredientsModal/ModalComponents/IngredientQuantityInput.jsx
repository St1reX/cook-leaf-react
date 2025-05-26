export default function IngredientQuantityInput({ quantity, onQuantityChange }) {
  return (
    <div className="max-w-sm" data-input-number="">
      <label className="label-text" htmlFor="ingredient-quantity-input">
        Quantity:
      </label>
      <div className="input">
        <input
          type="text"
          aria-label="Ingredient quantity"
          data-input-number-input=""
          id="ingredient-quantity-input"
          min={1}
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
        />
        <span className="my-auto flex gap-3">
          <button
            type="button"
            className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0"
            aria-label="Decrement button"
            data-input-number-decrement=""
            disabled={quantity == 1}
            onClick={() => onQuantityChange(Number(quantity) - 1)}
          >
            <span className="icon-[tabler--minus] size-3.5 shrink-0" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-soft size-5.5 min-h-0 rounded-sm p-0"
            aria-label="Increment button"
            data-input-number-increment=""
            onClick={() => onQuantityChange(Number(quantity) + 1)}
          >
            <span className="icon-[tabler--plus] size-3.5 shrink-0" />
          </button>
        </span>
      </div>
    </div>
  );
}
