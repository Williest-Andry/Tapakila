import { Create, SimpleForm, TextInput, DateInput, SelectInput } from 'react-admin';

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" label="Titre" required />
      <DateInput source="date" label="Date" required />
      <SelectInput source="status" label="Statut" choices={[
        { id: 'draft', name: 'Brouillon' },
        { id: 'published', name: 'Publié' },
        { id: 'canceled', name: 'Annulé' },
      ]} required />
    </SimpleForm>
  </Create>
);
