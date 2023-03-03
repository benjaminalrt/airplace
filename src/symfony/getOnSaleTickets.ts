import { Ticket } from "@/types";
import { getNextTicketIdUri, getOnSaleTicketsUri, getTicketsUri, getTicketUri } from "./ticketApi";

export const getOnSaleTickets = async () : Promise<Ticket[]> => {
    const res = await fetch(getOnSaleTicketsUri.end);
    const { tickets } = await res.json();
    return tickets;
}