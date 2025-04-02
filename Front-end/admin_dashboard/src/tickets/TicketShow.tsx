import { Show, SimpleShowLayout, TextField, NumberField } from "react-admin";

const TicketShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="idEvent" label="Event ID" />
      <NumberField source="price" />
      <NumberField source="availableQuantity" label="Available Quantity" />
      <TextField source="type" />
    </SimpleShowLayout>
  </Show>
);

export default TicketShow;
