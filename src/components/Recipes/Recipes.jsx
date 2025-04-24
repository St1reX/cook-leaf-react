export default function Recipes() {
  return (
    <>
      <div id="gridWrapper" className="grid gap-4 grid-cols-[repeat(auto-fit,280px)] justify-center">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="card group shadow-none sm:max-w-sm h-[350px]">
            <figure className="h-[75%]">
              <img
                src="https://cdn.flyonui.com/fy-assets/components/card/image-8.png"
                alt="Shoes"
                className="transition-transform rounded-lg duration-500 group-hover:scale-110 h-full"
              />
            </figure>
            <div className="card-body p-1">
              <h5 className="text-lg font-bold mb-2.5">Card title</h5>
              <div className="card-actions flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <span>5</span>
                  <span className="icon-[mingcute--star-fill]" style={{ width: 16, height: 16 }} />
                  <span className="text-accent/60">{'(54)'}</span>
                </div>
                <div>
                  <span>2 godz. 35 min</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
