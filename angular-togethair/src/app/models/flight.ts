export interface Flight{
  departureAirport: string;
  destinationAirport: string;
  departureTime: Date;
  destinationTime: Date;
  flightDuration: number;
  price: number;
}