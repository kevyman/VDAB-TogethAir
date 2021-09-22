import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public flights!: Flight[];
  public roles : string[] = ["Admin" , "TogethAir Employee" , "Airline Employee" ]

  constructor(private flightService: FlightService ,
              private personService : PersonService) { }

  ngOnInit(): void {
  }

  public getFlights(): void{
    this.flightService.getFlights().subscribe(
      (response: Flight[]) =>{
        this.flights = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddFlight(addForm: NgForm):void{
    document.getElementById('addFlightCloseBtn')?.click();
    this.flightService.addFlight(addForm.value).subscribe(
      (response: Flight) => {
        console.log(response);
        this.getFlights();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPerson(addForm: NgForm):void{
    document.getElementById('addPersonCloseBtn')?.click();
    this.personService.addPerson(addForm.value).subscribe(
      (response: Person) => {
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
