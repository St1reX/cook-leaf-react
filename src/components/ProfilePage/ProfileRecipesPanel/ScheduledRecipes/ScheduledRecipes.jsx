import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
export default function ScheduledRecipes() {
  const events = [{ title: "Meeting", start: "2025-05-21" }];

  return (
    <>
      <div className="card w-full">
        <div className="card-body">
          <div className="mb-8">
            <h5 className="card-title">Scheduled recipes</h5>
            <p>
              This section shows all your scheduled recipes. Easily keep track of what you plan to cook in the
              coming days, stay organized, and make meal planning more convenient and stress-free.
            </p>
          </div>

          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={events}
          />
        </div>
      </div>
    </>
  );
}
