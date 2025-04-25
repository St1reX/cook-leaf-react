export default function PreperationTime() {
  const preparatioTimes = ['≤15', '≤30', '≤45'];
  const elementWidth = Math.floor(100 / preparatioTimes.length);

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Preperation time</h3>
        <div className="w-full flex gap-1">
          {preparatioTimes.map(time => (
            <label key={time} className="custom-soft-option flex flex-row items-start">
              <input type="checkbox" className="checkbox hidden" />
              <span className="flex justify-center items-center label-text w-full text-lg font-medium text-start">{time}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
