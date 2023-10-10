import { Dispatch, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '@/features/events/dashboard/EventList';
import EventForm from '@/features/events/form/EventForm';
import { sampleData } from '@/app/api/sampleData';
import { AppEvent } from '@/app/types/event';

type EventDashboardProps = {
  isFormOpen: boolean;
  setIsFormOpen: Dispatch<React.SetStateAction<boolean>>;
  selectEvent: (event: AppEvent | null) => void;
  selectedEvent: AppEvent | null;
};

export default function EventDashboard({
  isFormOpen,
  setIsFormOpen,
  selectEvent,
  selectedEvent,
}: EventDashboardProps) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(event: AppEvent): void {
    setEvents((prev) => [...prev, event]);
  }

  function updateEvent(updatedEvent: AppEvent): void {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
    selectEvent(null);
    setIsFormOpen(false);
  }

  function deleteEvent(eventId: string): void {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {isFormOpen && (
          <EventForm
            setIsFormOpen={setIsFormOpen}
            updateEvent={updateEvent}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : 'create'}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
