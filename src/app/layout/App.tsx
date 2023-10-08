import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/dashboard/EventDashboard';

function App() {
  return (
    <>
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
