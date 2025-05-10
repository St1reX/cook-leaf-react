import { useState } from "react";

import { handleFilterUpdate } from "../../FilterHandlers/FilterHandlers";

export default function PortionsAmount({ onPortionsAmountChange }) {
  const [selectedPortionsAmount, setPortionsAmount] = useState(null);

  const handleLocalChange = (e) => {
    const newPortionsAmount = e.target.value === selectedPortionsAmount ? null : e.target.value;
    setPortionsAmount(newPortionsAmount);
    handleFilterUpdate("portionsAmount", newPortionsAmount, onPortionsAmountChange);
  };

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
                checked={value === selectedPortionsAmount}
                onChange={handleLocalChange}
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
