import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '@/app/layout/nav/NavBar';
import { AppEvent } from '@/app/types/event';
import EventDashboard from '@/features/events/dashboard/EventDashboard';

function App() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  function handleSelectEvent(event: AppEvent | null): void {
    setSelectedEvent(event);
    setIsFormOpen(true);
  }

  function handleCreateFormOpen(): void {
    setSelectedEvent(null);
    setIsFormOpen(true);
  }

  return (
    <>
      <NavBar setIsFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          selectedEvent={selectedEvent}
          selectEvent={handleSelectEvent}
        />
      </Container>
    </>
  );
}

export default App;
