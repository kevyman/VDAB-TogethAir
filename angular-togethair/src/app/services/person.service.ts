import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../models/person";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PersonService{
    private apiServerUrl =  environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public findPersonById(id:number): Observable<Person>{
        return this.http.get<Person>(`${this.apiServerUrl}/findPerson/${id}`)
    }

    public addPerson(person : Person): Observable<Person>{
      console.log("got here")
      return this.http.post<Person>(`${this.apiServerUrl}/addPerson`, person)
    }

    public updatePerson(person: Person): Observable<Person>{
        return this.http.put<Person>(`${this.apiServerUrl}/updatePerson`, person)
    }

    public deletePerson(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/deletePerson/${id}`)
    }
}

