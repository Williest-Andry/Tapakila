// App.tsx
import { Admin, Resource, radiantLightTheme, radiantDarkTheme } from 'react-admin';
import { EventList } from './events/EventList';
import { EventCreate } from './events/EventCreate';
import { EventEdit } from './events/EventEdit';
import { dataProvider } from './dataProvider';
import { Layout } from 'react-admin';
import { ReactNode } from 'react';
import './App.css';
import UserList from './users/user-list';

const CustomLayout = (props: { children: ReactNode }) => (
  <Layout {...props} className="custom-layout" />
);

const App = () => (
  <Admin
    dataProvider={dataProvider}
    layout={CustomLayout}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
    <Resource
      name="events"
      list={EventList}
      create={EventCreate}
      edit={EventEdit}
      options={{ label: "Events" }}
    />

    <Resource
      name="users"
      list={UserList}
    />
  </Admin>
);

export default App;