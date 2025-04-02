import { Create, SimpleForm, TextInput, DateInput, PasswordInput } from "react-admin";

const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" type="email" />
      <PasswordInput source="password" />
      <DateInput source="birthday" label="Date of Birth" />
      <TextInput source="phone" />
      <TextInput source="country" />
      <TextInput source="city" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);

export default UserCreate;
