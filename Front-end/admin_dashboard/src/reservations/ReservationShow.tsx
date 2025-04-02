import { Show, SimpleShowLayout, TextField, DateField, NumberField } from "react-admin";

const ReservationShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="date_time" showTime />
      <TextField source="id_user" label="User ID" />
      <TextField source="id_ticket" label="Ticket ID" />
      <NumberField source="quantity" />
    </SimpleShowLayout>
  </Show>
);

export default ReservationShow;
