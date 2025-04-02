import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";

const TicketCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="idEvent" label="Event ID" />
      <NumberInput source="price" />
      <NumberInput source="availableQuantity" label="Available Quantity" />
      <TextInput source="type" />
    </SimpleForm>
  </Create>
);

export default TicketCreate;
