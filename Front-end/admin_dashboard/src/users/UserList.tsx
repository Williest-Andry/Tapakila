import { List, Datagrid, TextField, EmailField, DateField } from "react-admin";

const UserList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
      <DateField source="birthday" label="Date of Birth" />
      <TextField source="phone" />
      <TextField source="country" />
      <TextField source="city" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export default UserList
