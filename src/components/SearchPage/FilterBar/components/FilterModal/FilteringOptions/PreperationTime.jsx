import { useState } from "react";

export default function PreperationTime() {
  const [preparationTime, setTime] = useState(null);
  const handleTimeChange = (e) => setTime(e.target.value === preparationTime ? null : e.target.value);

  const preparationTimes = ["≤15", "≤30", "≤45"];

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Preperation time</h3>
        <div className="w-full flex gap-1">
          {preparationTimes.map((value) => (
            <label key={value} className="custom-soft-option flex flex-row items-start">
              <input
                type="checkbox"
                className="checkbox hidden"
                value={value}
                checked={value === preparationTime}
                onChange={handleTimeChange}
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
