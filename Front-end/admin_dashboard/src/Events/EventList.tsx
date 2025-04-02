import { List, Datagrid, TextField, DateField, NumberField, ImageField } from "react-admin";

const EventList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="organizer" />
      <TextField source="description" />
      <ImageField source="image" title="title" />
      <TextField source="title" />
      <DateField source="dateTime" showTime />
      <TextField source="location" />
      <TextField source="category" />
      <NumberField source="availablePlace" />
    </Datagrid>
  </List>
);

export default EventList;