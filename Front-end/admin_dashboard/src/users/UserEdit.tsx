import { Edit, SimpleForm, TextInput, DateInput, PasswordInput } from "react-admin";

const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="username" />
      <TextInput source="email" type="email" />
      <PasswordInput source="password" />
      <DateInput source="birthday" label="Date of Birth" />
      <TextInput source="phone" />
      <TextInput source="country" />
      <TextInput source="city" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
