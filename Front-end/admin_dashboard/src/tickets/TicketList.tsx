import { List, Datagrid, TextField, NumberField } from "react-admin";

const TicketList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="idEvent" label="Event ID" />
      <NumberField source="price" />
      <NumberField source="availableQuantity" label="Available Quantity" />
      <TextField source="type" />
    </Datagrid>
  </List>
);

export default TicketList;
