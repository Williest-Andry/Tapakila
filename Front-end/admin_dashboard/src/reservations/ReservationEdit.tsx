import { Edit, SimpleForm, DateTimeInput, NumberInput, TextInput } from "react-admin";

const ReservationEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateTimeInput source="date_time" label="Date & Time" />
      <TextInput source="id_user" label="User ID" />
      <TextInput source="id_ticket" label="Ticket ID" />
      <NumberInput source="quantity" />
    </SimpleForm>
  </Edit>
);

export default ReservationEdit;
