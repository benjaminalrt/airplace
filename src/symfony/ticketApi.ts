const endpoint : string = 'https://benjami.fr/';

export const [
    getTicketsUri,
    getTicketUri,
    sellTicketUri,
    buyTicketUri,
    getNextTicketIdUri,
    createTicketUri,
    getOnSaleTicketsUri
  ] = [
    {end : `${endpoint}tickets`, meth : "get"},
    (id : number) => ({end : `${endpoint}ticket/${id}`, meth : "get"}),
    (id : number) => ({end : `${endpoint}ticket/${id}`, meth : "post"}),
    (id : number) => ({end : `${endpoint}ticket-buy/${id}`, meth : "post"}),
    {end : `${endpoint}ticket-nextid`, meth : "get"},
    {end : `${endpoint}ticket-new`, meth : "get"},
    {end : `${endpoint}tickets-onsale`, meth : "get"},
]