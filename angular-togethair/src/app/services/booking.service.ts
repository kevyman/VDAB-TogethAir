import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {Booking} from "../models/booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService{

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiServerUrl}/allBookings`);
  }

  public addBooking(booking: Booking): Observable<Booking>{
    return this.http.post<Booking>(`${this.apiServerUrl}/addbooking` , booking);
  }

}
