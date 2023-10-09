import { Attendee } from '@/app/types/event';
import { Image, List } from 'semantic-ui-react';

type EventListAttendeeProps = {
  attendee: Attendee;
};

export default function EventListAttendee({
  attendee,
}: EventListAttendeeProps) {
  return (
    <List.Item>
      <Image size='mini' circular src={attendee.photoURL} />
    </List.Item>
  );
}
