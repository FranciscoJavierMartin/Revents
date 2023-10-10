import { Dispatch, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '@/features/events/dashboard/EventList';
import EventForm from '@/features/events/form/EventForm';
import { sampleData } from '@/app/api/sampleData';
import { AppEvent } from '@/app/types/event';

type EventDashboardProps = {
  isFormOpen: boolean;
  setIsFormOpen: Dispatch<React.SetStateAction<boolean>>;
};

export default function EventDashboard({
  isFormOpen,
  setIsFormOpen,
}: EventDashboardProps) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(event: AppEvent): void {
    setEvents((prev) => [...prev, event]);
    setIsFormOpen(false);
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {isFormOpen && (
          <EventForm setIsFormOpen={setIsFormOpen} addEvent={addEvent} />
        )}
      </Grid.Column>
    </Grid>
  );
}
