import { Ticket } from "@/types";
import { createTicketUri, getNextTicketIdUri, getTicketUri } from "./ticketApi";

export const createTicket = async ( body : any) : Promise<Ticket> => {
    const res = await fetch(createTicketUri.end, {
        method: "POST",
        body: JSON.stringify(body)
    });
    const { ticket } = await res.json();
    return ticket;
}