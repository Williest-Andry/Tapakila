import { Show, SimpleShowLayout, TextField, ImageField, DateField, NumberField } from "react-admin";

const EventShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="organizer" />
      <TextField source="description" />
      <ImageField source="image" title="title" />
      <TextField source="title" />
      <DateField source="dateTime" showTime />
      <TextField source="location" />
      <TextField source="category" />
      <NumberField source="availablePlace" />
    </SimpleShowLayout>
  </Show>
);

export default EventShow;
