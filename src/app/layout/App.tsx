import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '@/features/events/dashboard/EventDashboard';
import NavBar from '@/app/layout/nav/NavBar';

function App() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <>
      <NavBar setIsFormOpen={setIsFormOpen} />
      <Container className='main'>
        <EventDashboard isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      </Container>
    </>
  );
}

export default App;
