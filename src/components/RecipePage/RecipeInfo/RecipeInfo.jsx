export default function RecipeInfo() {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="flex justify-start gap-2 mb-4">
          <span class="badge text-black uppercase rounded-lg font-semibold bg-accent/20 border-0 badge-xl p-6">
            #test12
          </span>
          <span class="badge text-black uppercase rounded-lg font-semibold bg-accent/20 border-0 badge-xl p-6">
            #test12
          </span>
          <span class="badge text-black uppercase rounded-lg font-semibold bg-accent/20 border-0 badge-xl p-6">
            #test12
          </span>
        </div>
        <h2 className="font-semibold text-4xl mb-6">Bułka test</h2>
        <span className="flex items-center gap-1 cursor-pointer">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className="icon-[mingcute--star-fill]"
              style={{
                width: 24,
                height: 24,
                color: i < 3 ? "#000" : "#ccc",
              }}
            />
          ))}
        </span>
      </div>
    </>
  );
}
