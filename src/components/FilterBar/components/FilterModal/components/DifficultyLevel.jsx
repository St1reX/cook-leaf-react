export default function DifficultyLevel() {
  const difficultyLevels = ['easy', 'average', 'hard'];
  const elementWidth = Math.floor(100 / difficultyLevels.length);

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Difficulty level</h3>
        <div className="flex gap-1 w-full">
          {difficultyLevels.map(level => (
            <label key={level} className="custom-soft-option flex flex-row items-start">
              <input type="checkbox" className="checkbox hidden" />
              <span className="flex justify-center items-center label-text w-full text-lg font-medium text-start">{level}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
