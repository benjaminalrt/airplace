import { Ticket } from "@/types";
import { buyTicketUri, getNextTicketIdUri, getTicketUri } from "./ticketApi";

export const buyTicket = async (id : number, body : any) : Promise<Ticket> => {
    const res = await fetch(buyTicketUri(id).end, {
        method: "POST",
        body: JSON.stringify(body)
    });
    const { ticket } = await res.json();
    return ticket;
}