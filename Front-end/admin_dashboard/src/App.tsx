// App.tsx
import { Admin, Resource, radiantLightTheme, radiantDarkTheme } from 'react-admin';
import { Layout } from 'react-admin';
import { ReactNode } from 'react';
import './App.css';
import dataProvider from './dataProvider';
import EventCreate from './events/EventCreate';
import EventEdit from './events/EventEdit';
import EventList from './events/EventList';
import EventShow from './events/EventShow';
import ReservationCreate from './reservations/ReservationCreate';
import ReservationEdit from './reservations/ReservationEdit';
import ReservationList from './reservations/ReservationList';
import ReservationShow from './reservations/ReservationShow';
import TicketCreate from './tickets/TicketCreate';
import TicketEdit from './tickets/TicketEdit';
import TicketList from './tickets/TicketList';
import TicketShow from './tickets/TicketShow';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import UserList from './users/UserList';
import UserShow from './users/UserShow';
import authProvider from './authProvider';
import LoginPage from './LoginPage';

const CustomLayout = (props: { children: ReactNode }) => (
  <Layout {...props} className="custom-layout" />
);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} layout={CustomLayout} theme={radiantLightTheme} darkTheme={radiantDarkTheme} loginPage={LoginPage}>
    <Resource name="events" list={EventList} create={EventCreate} edit={EventEdit} show={EventShow} options={{ label: "Events" }} />
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}show={UserShow} />
    <Resource name="tickets" list={TicketList} create={TicketCreate} edit={TicketEdit} show={TicketShow} />
    <Resource name="reservations" list={ReservationList} create={ReservationCreate} edit={ReservationEdit} show={ReservationShow} />
  </Admin>
);

export default App;