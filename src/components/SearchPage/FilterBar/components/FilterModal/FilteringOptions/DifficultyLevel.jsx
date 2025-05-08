import { useState } from "react";

export default function DifficultyLevel() {
  const [difficultyLevel, setLevel] = useState(null);
  const handleLevelChange = (e) => setLevel(e.target.value === difficultyLevel ? null : e.target.value);

  const difficultyLevels = ["easy", "average", "hard"];

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Difficulty level</h3>
        <div className="flex gap-1 w-full">
          {difficultyLevels.map((value) => (
            <label key={value} className="custom-soft-option flex flex-row items-start">
              <input
                type="checkbox"
                name="difficultyLevel"
                className="checkbox hidden"
                value={value}
                checked={difficultyLevel === value}
                onChange={handleLevelChange}
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
