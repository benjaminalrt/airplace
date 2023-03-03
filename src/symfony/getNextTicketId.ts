import { getNextTicketIdUri } from "./ticketApi";

export const getNextTicketId = async () : Promise<number> => {
    const res = await fetch(getNextTicketIdUri.end);
    const { id } = await res.json();
    return id;
}