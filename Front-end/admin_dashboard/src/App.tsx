import { Admin, Resource } from 'react-admin';
import { EventList } from './Events/EventLists';
import { EventCreate } from './Events/EventCreate';
import { EventEdit } from './Events/EventUpdate';
import { dataProvider } from './Events/DataProvider';



const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="events" list={EventList} create={EventCreate} edit={EventEdit} />
  </Admin>
);

export default App;
