export interface Flight{
  id: number;
  departureAirport: string;
  destinationAirport: string;
  departureTime: Date;
  destinationTime: Date;
  flightDuration: number;
  price: number;
}
