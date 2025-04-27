export default function Rating() {
  return (
    <>
      <div className="w-full">
        <h3 className="text-xl mb-3">Rating</h3>

        <ul className="text-base-content/80 list-inside">
          {[1, 2, 3, 4, 5].map(star => (
            <li key={star} className="flex justify-between items-center gap-1 mb-3">
              <div className="flex items-center">
                <input type="checkbox" className="checkbox checkbox-primary mr-1" id={`rating-${star}`} />
                <label htmlFor={`rating-${star}`} className="flex items-center gap-1 cursor-pointer">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className="icon-[mingcute--star-fill]"
                      style={{
                        width: 24,
                        height: 24,
                        color: i < star ? '#000' : '#ccc',
                      }}
                    />
                  ))}
                </label>
              </div>
              <span>12312 Results</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
