export default function FullCalendarRenderFunc(eventInfo) {
  const {
    event: {
      extendedProps: { recipe_data, setSelectedRecipe, modalRef },
    },
  } = eventInfo;

  const handleClick = () => {
    setSelectedRecipe(recipe_data);

    if (modalRef) {
      HSOverlay.open(modalRef.current);
    }
  };

  return (
    <>
      <button type="button" className="fc-event-title overflow-hidden">
        <span onClick={handleClick} className="badge badge-success cursor-pointer text-white">
          {eventInfo.event.title}
        </span>
      </button>
    </>
  );
}
