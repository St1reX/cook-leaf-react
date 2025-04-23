export default function PortionsAmount() {
  const portions = ["1", "2", "4", "6", "8+"];
  const width = 100 / portions.length;

  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Portions amount</h3>
        <div className="flex join w-full">
          {portions.map((amount) => (
            <button key={amount} className={`btn btn-xl btn-outline btn-default join-item w-[${width}%]`}>
              {amount}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
