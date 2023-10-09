import { Grid } from 'semantic-ui-react';
import EventList from '@/features/events/dashboard/EventList';
import EventForm from '@/features/events/form/EventForm';
import { sampleData } from '@/app/api/sampleData';

export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  );
}
