import { Create, SimpleForm, TextInput, DateInput, SelectInput, NumberInput, FileInput, FileField } from 'react-admin';

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" label="Titre" required />
      <TextInput source="description" label="Description" multiline required />
      <DateInput source="dateTime" label="Date et Heure" required />
      <FileInput source="image" label="Image" accept="image/*" required>
        <FileField source="src" title="title" />
      </FileInput>
      <TextInput source="location" label="Lieu" required />
      <TextInput source="category" label="Catégorie" required />
      <NumberInput source="availablePlace" label="Places disponibles" required min={0} />
      <SelectInput
        source="status"
        label="Statut"
        choices={[
          { id: 'draft', name: 'Brouillon' },
          { id: 'published', name: 'Publié' },
          { id: 'canceled', name: 'Annulé' },
        ]}
        required
      />
    </SimpleForm>
  </Create>
);
