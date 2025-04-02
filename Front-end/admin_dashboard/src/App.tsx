// App.tsx
import { Admin, Resource, radiantLightTheme, radiantDarkTheme } from 'react-admin';
import { Layout } from 'react-admin';
import { ReactNode } from 'react';
import './App.css';
import dataProvider from './dataProvider';
import EventCreate from './events/EventCreate';
import EventEdit from './events/EventEdit';
import EventList from './events/EventList';

const CustomLayout = (props: { children: ReactNode }) => (
  <Layout {...props} className="custom-layout" />
);

const App = () => (
  <Admin dataProvider={dataProvider} layout={CustomLayout} theme={radiantLightTheme} darkTheme={radiantDarkTheme}>
    <Resource name="events" list={EventList} create={EventCreate} edit={EventEdit} show={EventShow} options={{ label: "Events" }} />
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}show={UserShow} />
    <Resource name="tickets" list={TicketList} create={TicketCreate} edit={TicketEdit} show={TicketShow} />
    <Resource name="reservations" list={ReservationList} create={ReservationCreate} edit={ReservationEdit} show={ReservationShow} />
  </Admin>
);

export default App;