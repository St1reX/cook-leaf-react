export default function RecipeMeta({ preparationTime, totalTime, portionsAmount }) {
  return (
    <>
      <div className="flex flex-col font-medium gap-4 mb-8">
        <div className="flex items-center">
          <span
            className="icon-[mingcute--knife-line] mr-2"
            style={{ width: 24, height: 24, color: "#000" }}
          />
          <span>Preparation time: {preparationTime} minutes</span>
        </div>
        <div className="flex items-center">
          <span
            className="icon-[mingcute--history-anticlockwise-line] mr-2"
            style={{ width: 24, height: 24, color: "#000" }}
          />
          <span>Total time: {totalTime} minutes</span>
        </div>
        <div className="flex items-center">
          <span
            className="icon-[mingcute--bowl-2-line] mr-2"
            style={{ width: 24, height: 24, color: "#000" }}
          />
          <span>{portionsAmount} portions</span>
        </div>
      </div>
    </>
  );
}
