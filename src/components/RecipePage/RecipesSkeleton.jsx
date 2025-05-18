export default function RecipeSkeleton() {
  return (
    <>
      <div className="w-full flex gap-6 items-center justify-between h-[500px] mb-16">
        <div className="skeleton skeleton-animated h-full w-1/2" />
        <div className="flex flex-col items-start justify-center h-full w-1/2 gap-4">
          <div className="skeleton h-12 w-full" />
          <div className="skeleton h-6 w-1/2 mb-5" />
          <div className="skeleton h-3 w-1/3" />
          <div className="skeleton h-3 w-1/3" />
          <div className="skeleton h-3 w-1/3" />
          <div className="skeleton h-3 w-1/3 mb-5" />
          <div className="skeleton h-12 w-1/3" />
        </div>
      </div>
    </>
  );
}
