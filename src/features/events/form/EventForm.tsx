import { AppEvent } from '@/app/types/event';
import { ChangeEvent, Dispatch, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

type EventFormProps = {
  setIsFormOpen: Dispatch<React.SetStateAction<boolean>>;
  addEvent: (event: AppEvent) => void;
};

export default function EventForm({ setIsFormOpen, addEvent }: EventFormProps) {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(): void {
    addEvent({
      ...values,
      attendees: [],
      hostedBy: '',
      hostPhotoURL: '',
      id: Math.random().toString(),
    });
  }

  return (
    <Segment clearing>
      <Header content='Create event' />
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <input
            type='text'
            name='title'
            placeholder='Event title'
            value={values.title}
            onInput={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='category'
            placeholder='Category'
            value={values.category}
            onInput={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={values.description}
            onInput={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='city'
            placeholder='City'
            value={values.city}
            onInput={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='venue'
            placeholder='Venue'
            value={values.venue}
            onInput={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='date'
            placeholder='Date'
            value={values.date}
            onInput={handleInputChange}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          onClick={() => setIsFormOpen(false)}
          type='button'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
