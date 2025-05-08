import { useState } from "react";

export default function PortionsAmount() {
  const [portionsAmount, setPortions] = useState(null);
  const handlePortionsChange = (e) => setPortions(e.target.value === portionsAmount ? null : e.target.value);

  const portions = ["1", "2", "4", "6", "8+"];

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Portions amount</h3>
        <div className="flex gap-1 w-full">
          {portions.map((value) => (
            <label key={value} className="custom-soft-option flex flex-row items-start">
              <input
                type="checkbox"
                className="checkbox hidden"
                value={value}
                checked={value === portionsAmount}
                onChange={handlePortionsChange}
              />
              <span className="flex justify-center items-center label-text w-full text-lg font-medium text-start">
                {value}
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
