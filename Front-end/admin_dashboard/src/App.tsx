import { Admin, Resource } from 'react-admin';
import localStorageDataProvider from 'ra-data-local-storage';
import { EventList } from './Events/EventLists';
import { EventCreate } from './Events/EventCreate';
import { EventEdit } from './Events/EventUpdate';

export interface Event {
  id: number;
  title: string;
  date: string;
  status: 'draft' | 'published' | 'canceled';
}


const dataProvider = localStorageDataProvider({
  defaultData: {
    events: [
      { id: 1, title: 'Conférence React', date: '2025-04-01', status: 'published' },
      { id: 2, title: 'Atelier UX Design', date: '2025-04-10', status: 'draft' },
    ] as Event[],
  },
});

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="events" list={EventList} create={EventCreate} edit={EventEdit} />
  </Admin>
);

export default App;
