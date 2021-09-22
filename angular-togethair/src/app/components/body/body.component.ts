import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/services/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public flights!: Flight[];

  constructor(private flightService: FlightService) { }

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

}
