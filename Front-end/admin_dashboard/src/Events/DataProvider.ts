import { DataProvider, GetListParams, GetOneParams, CreateParams, UpdateParams, DeleteParams } from 'react-admin';
import { useEventStore } from './EventStore';

export const dataProvider: DataProvider = {
  getList: async (resource: string, params: GetListParams) => ({
    data: useEventStore.getState().events,
    total: useEventStore.getState().events.length,
  }),
  getOne: async (resource: string, params: GetOneParams) => {
    const event = useEventStore.getState().events.find((event) => event.id === (params.id as number));
    return { data: event || null };
  },
  create: async (resource: string, params: CreateParams) => {
    const newEvent = { id: Date.now(), ...params.data };
    useEventStore.getState().addEvent(newEvent);
    return { data: newEvent };
  },
  update: async (resource: string, params: UpdateParams) => {
    const updatedEvent = { id: params.id as number, ...params.data };
    useEventStore.getState().updateEvent(updatedEvent);
    return { data: updatedEvent };
  },
  delete: async (resource: string, params: DeleteParams) => {
    useEventStore.getState().deleteEvent(params.id as number);
    return { data: { id: params.id } };
  },
};
