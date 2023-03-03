import { Ticket } from "@/types";
import { getNextTicketIdUri, getTicketUri } from "./ticketApi";

export const sellTicket = async (id : number, body : any) : Promise<Ticket> => {
    const res = await fetch(getTicketUri(id).end, {
        method: "POST",
        body: JSON.stringify(body)
    });
    const { ticket } = await res.json();
    return ticket;
}