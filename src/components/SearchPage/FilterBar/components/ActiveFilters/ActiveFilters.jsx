export default function ActiveFilters({ filters }) {
  console.log(filters);

  const filtersToDisplay = Object.values(filters).filter(({ displayLocation, value }) => {
    return displayLocation === "filtersList" && typeof value === "string";
  });

  return (
    <>
      {filtersToDisplay.map(({ value }) => (
        <button key={value} className="btn btn-soft btn-primary">
          {value}
        </button>
      ))}
    </>
  );
}
