import { Injectable } from "@angular/core";
 import { Observable } from "rxjs";
 import { HttpClient } from "@angular/common/http";
 import { environment } from "src/environments/environment";
 import {Airline} from "../models/airline";

 @Injectable({
   providedIn: 'root'
 })
 export class AirlineService {
   private apiServerUrl = environment.apiBaseUrl;

   constructor(private http: HttpClient) {
   }

   public getAirlines(): Observable<Airline[]> {
     return this.http.get<Airline[]>(`${this.apiServerUrl}/allAirlines`)
   }

 }

