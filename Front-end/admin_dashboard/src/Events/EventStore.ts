import { create } from 'zustand';

// Définition du type d'un événement
export interface Event {
  id: number;
  title: string;
  date: string;
  status: 'draft' | 'published' | 'canceled';
}

// Définition du type du store
interface EventStore {
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (id: number) => void;
}


export const useEventStore = create<EventStore>((set) => ({
  events: [
    { id: 1, title: 'Conférence React', date: '2025-04-01', status: 'published' },
    { id: 2, title: 'Atelier UX Design', date: '2025-04-10', status: 'draft' },
  ],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  updateEvent: (updatedEvent) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      ),
    })),
  deleteEvent: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    })),
}));
