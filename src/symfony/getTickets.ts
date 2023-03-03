import { Ticket } from "@/types";
import { getNextTicketIdUri, getTicketsUri, getTicketUri } from "./ticketApi";

export const getTickets = async () : Promise<Ticket[]> => {
    const res = await fetch(getTicketsUri.end);
    const { tickets } = await res.json();
    return tickets;
}