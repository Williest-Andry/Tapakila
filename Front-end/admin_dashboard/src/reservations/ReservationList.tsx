import { List, Datagrid, TextField, DateField, NumberField } from "react-admin";

const ReservationList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <DateField source="date_time" showTime />
      <TextField source="id_user" label="User ID" />
      <TextField source="id_ticket" label="Ticket ID" />
      <NumberField source="quantity" />
    </Datagrid>
  </List>
);

export default ReservationList;
