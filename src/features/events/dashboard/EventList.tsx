import { AppEvent } from '@/app/types/event';
import EventListItem from '@/features/events/dashboard/EventListItem';

type EventListProps = {
  events: AppEvent[];
  selectEvent: (event: AppEvent) => void;
  deleteEvent: (eventId: string) => void;
};

export default function EventList({
  events,
  selectEvent,
  deleteEvent,
}: EventListProps) {
  return (
    <>
      {events.map((event: AppEvent) => (
        <EventListItem
          key={event.id}
          event={event}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
}
