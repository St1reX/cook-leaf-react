import { useState } from "react";

export default function DifficultyLevel({ onChange }) {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLocalChange = (e) => {
    let newLevel = e.target.value === selectedLevel ? null : e.target.value;
    setSelectedLevel(newLevel);
    onChange(newLevel);
  };

  const levels = ["easy", "average", "hard"];

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Difficulty level</h3>
        <div className="flex gap-1 w-full">
          {levels.map((value) => (
            <label key={value} className="custom-soft-option flex flex-row items-start">
              <input
                type="checkbox"
                name="difficultyLevel"
                className="checkbox hidden"
                value={value}
                checked={selectedLevel === value}
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
