export default function PreperationTime() {
  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Preperation time</h3>
        <div className="join w-full">
          <button className="btn btn-xl w-1/3 btn-outline btn-default join-item">≤15</button>
          <button className="btn btn-xl w-1/3 btn-outline btn-default join-item">≤30</button>
          <button className="btn btn-xl w-1/3 btn-outline btn-default join-item">≤45</button>
        </div>
      </div>
    </>
  );
}
