import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {Airport} from "../models/airport";

@Injectable({
  providedIn: 'root'
})
export class AirportService{
  private apiServerUrl =  environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getAirports(): Observable<Airport[]>{
    return this.http.get<Airport[]>(`${this.apiServerUrl}/allAirports`)
  }
