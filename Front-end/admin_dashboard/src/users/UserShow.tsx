import { Show, SimpleShowLayout, TextField, EmailField, DateField } from "react-admin";

const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
      <DateField source="birthday" label="Date of Birth" />
      <TextField source="phone" />
      <TextField source="country" />
      <TextField source="city" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);

export default UserShow;
