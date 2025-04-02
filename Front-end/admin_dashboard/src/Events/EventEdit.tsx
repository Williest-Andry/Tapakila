import { Edit, SimpleForm, TextInput, DateTimeInput, NumberInput, ImageInput, ImageField } from "react-admin";

const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <DateTimeInput source="dateTime" />
      <TextInput source="location" />
      <TextInput source="category" />
      <NumberInput source="availablePlace" />
    </SimpleForm>
  </Edit>
);

export default EventEdit;
