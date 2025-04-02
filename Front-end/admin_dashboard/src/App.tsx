// App.tsx
import { Admin, Resource, radiantLightTheme, radiantDarkTheme } from 'react-admin';
import { EventList } from './events/EventLists';
import { EventCreate } from './events/EventCreate';
import { EventEdit } from './events/EventUpdate';
import { dataProvider } from './events/DataProvider';
import { Layout } from 'react-admin';
import { ReactNode } from 'react';
import './App.css';
import UserList from './users/user-list';
import mydataProvider from './dataProvider';

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