export interface Flight {
  id: number;
  origin: string,
  city: string,
  originCountry: string,
  destination: string,
  destinationCountry: string,
  departureTime: string,
  arrivalTime: string,
  seats: number,
  price: number
}

export interface Ticket {
  id: number,
  flightId: number,
  seat: number,
  firstName: string,
  lastName: string,
  contract: string,
  toSell: boolean
}