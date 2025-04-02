import { Edit, SimpleForm, TextInput, DateInput, SelectInput, NumberInput } from 'react-admin';

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" label="Titre" required />
      <TextInput source="description" label="Description" multiline required />
      <DateInput source="dateTime" label="Date et Heure" required />
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
  </Edit>
);
