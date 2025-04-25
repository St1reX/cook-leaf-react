export default function PortionsAmount() {
  const portions = ['1', '2', '4', '6', '8+'];
  const elementWidth = Math.floor(100 / portions.length);

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Portions amount</h3>
        <div className="flex gap-1 w-full">
          {portions.map(amount => (
            <label key={amount} className="custom-soft-option flex flex-row items-start">
              <input type="checkbox" className="checkbox hidden" />
              <span className="flex justify-center items-center label-text w-full text-lg font-medium text-start">{amount}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
