// App.tsx
import { Admin, Resource, radiantLightTheme, radiantDarkTheme } from 'react-admin';
import { EventList } from './Events/EventLists';
import { EventCreate } from './Events/EventCreate';
import { EventEdit } from './Events/EventUpdate';
import { dataProvider } from './Events/DataProvider';
import { Layout } from 'react-admin';
import { ReactNode } from 'react';
import './App.css';
import UserList from './Users/user-list';
import mydataProvider from './data-provider';

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