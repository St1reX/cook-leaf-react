export default function DifficultyLevel() {
  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Difficulty level</h3>
        <div className="join w-full">
          <button className="btn btn-xl w-1/3 btn-outline btn-default join-item">easy</button>
          <button className="btn btn-xl w-1/3 btn-outline btn-default join-item">average</button>
          <button className="btn btn-xl w-1/3 btn-outline btn-default join-item">hard</button>
        </div>
      </div>
    </>
  );
}
