import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const EventList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" label="Titre" />
      <DateField source="date" label="Date" />
      <TextField source="status" label="Statut" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
