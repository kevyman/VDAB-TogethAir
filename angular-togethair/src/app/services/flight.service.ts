import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {Flight} from "../models/flight";

@Injectable({
  providedIn: 'root'
})
export class FlightService{
  private apiServerUrl =  environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getFlights(): Observable<Flight[]>{
    return this.http.get<Flight[]>(`${this.apiServerUrl}/allFlights`)
  }

  public findFlightById(id:number): Observable<Flight>{
    return this.http.get<Flight>(`${this.apiServerUrl}/findFlight/${id}`)
  }

  public addFlight(flight: Flight): Observable<Flight>{
    return this.http.post<Flight>(`${this.apiServerUrl}/addFlight`, flight)
  }

  public updateFlight(flight:Flight): Observable<Flight>{
    return this.http.put<Flight>(`${this.apiServerUrl}/updateFlight`, flight)
  }

  public deleteFlight(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteFlight/${id}`)
  }
}
