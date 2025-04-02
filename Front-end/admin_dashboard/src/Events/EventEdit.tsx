import { Edit, SimpleForm, TextInput, DateTimeInput, NumberInput } from "react-admin";

const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="organizer" />
      <TextInput source="description" multiline />
      <TextInput source="image" />
      <DateTimeInput source="dateTime" />
      <TextInput source="location" />
      <TextInput source="category" />
      <NumberInput source="availablePlace" />
    </SimpleForm>
  </Edit>
);

export default EventEdit;
