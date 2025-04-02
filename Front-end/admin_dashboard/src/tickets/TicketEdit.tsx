import { Edit, SimpleForm, NumberInput, TextInput } from "react-admin";

const TicketEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="idEvent" label="Event ID" />
      <NumberInput source="price" />
      <NumberInput source="availableQuantity" label="Available Quantity" />
      <TextInput source="type" />
    </SimpleForm>
  </Edit>
);

export default TicketEdit;
