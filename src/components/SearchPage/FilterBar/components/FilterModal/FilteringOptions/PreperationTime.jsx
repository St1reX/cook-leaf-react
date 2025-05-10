import { useState } from "react";

import { handleFilterUpdate } from "../../FilterHandlers/FilterHandlers";

export default function PreperationTime({ onPreparationTimeChange }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleLocalChange = (e) => {
    const newTime = e.target.value === selectedTime ? null : e.target.value;
    setSelectedTime(newTime);
    handleFilterUpdate("preparationTime", newTime, onPreparationTimeChange);
  };

  const time = ["≤15", "≤30", "≤45"];

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Preperation time</h3>
        <div className="w-full flex gap-1">
          {time.map((value) => (
            <label key={value} className="custom-soft-option flex flex-row items-start">
              <input
                type="checkbox"
                className="checkbox hidden"
                value={value}
                checked={value === selectedTime}
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
