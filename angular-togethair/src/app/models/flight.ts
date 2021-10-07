import {Airport} from "./airport";
import {Airline} from "./airline";


export interface Flight{
  id: number;
  departureAirport: Airport;
  destinationAirport: Airport;
  departureTime: Date;
  destinationTime?: Date;
  flightDuration: number;
  price: number;
  flightClass : string;
  roundtrip : boolean;
  children : number;
  adults: number;
  airline: Airline;
}
