import { AppEvent } from '@/app/types/event';
import EventListItem from '@/features/events/dashboard/EventListItem';

type EventListProps = {
  events: AppEvent[];
};

export default function EventList(props: EventListProps) {
  return (
    <>
      {props.events.map((event: AppEvent) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
}
