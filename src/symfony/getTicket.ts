import { Ticket } from "@/types";
import { getNextTicketIdUri, getTicketUri } from "./ticketApi";

export const getTicket = async (id : number) : Promise<Ticket> => {
    console.log(getTicketUri(id).end)
    const res = await fetch(getTicketUri(id).end);
    const { ticket } = await res.json();
    return ticket;
}