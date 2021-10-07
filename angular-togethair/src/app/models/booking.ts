import {Person} from "./person";
import {Flight} from "./flight";

export interface Booking {
  id: number;
  totalPrice: number;
  person: Person;
  bookingDate: Date;
  flight: Flight;
}
