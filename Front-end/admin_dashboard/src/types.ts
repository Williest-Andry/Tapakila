export type Event = {
    id: string;
    title: string;
    organizer: string;
    description: string;
    image: string;
    dateTime: string;
    location: string;
    category: string;
    availablePlace: number;
};

export type User = {
    id: string;
    userame: string;
    email: string;
    password: string;
    birthday: string;
    phone: string;
    country: string;
    city: string;
    role: "admin" | "user";
    authToken: string;
};

export type Ticket = {
    id: string;
    idEvent: string;
    price: number;
    availableQuantity: number;
    type: string;
};

export type Reservation = {
    id: number;
    dateTime: string;
    idUser: number;
    idTicket: number;
    quantity: number;
};