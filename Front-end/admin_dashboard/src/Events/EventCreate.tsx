import { Create, SimpleForm, TextInput, DateTimeInput, NumberInput } from "react-admin";

const EventCreate = () => (
  <Create>
    <SimpleForm>
    <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="organizer" />
      <TextInput source="description" multiline />
      <TextInput source="image" />
      <DateTimeInput source="dateTime" />
      <TextInput source="location" />
      <TextInput source="category" />
      <NumberInput source="availablePlace" />
    </SimpleForm>
  </Create>
);

export default EventCreate;
