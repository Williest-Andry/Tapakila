import { Create, SimpleForm, DateTimeInput, NumberInput, TextInput } from "react-admin";

const ReservationCreate = () => (
  <Create>
    <SimpleForm>
      <DateTimeInput source="date_time" label="Date & Time" />
      <TextInput source="id_user" label="User ID" />
      <TextInput source="id_ticket" label="Ticket ID" />
      <NumberInput source="quantity" />
    </SimpleForm>
  </Create>
);

export default ReservationCreate;
