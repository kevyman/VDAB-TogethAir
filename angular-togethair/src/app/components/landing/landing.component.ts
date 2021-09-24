import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {AirportService} from "../../services/airport.service";
import {Airport} from "../../models/airport";
import {NgForm} from "@angular/forms";
import {FlightService} from "../../services/flight.service";
import {Flight} from "../../models/flight";
import {Subscription} from "rxjs";
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  airports!: Airport[];
  departAirports!: Airport[];
  arrivalAirports!: Airport[];
  options: Boolean = true;

  constructor(private airportService: AirportService,
              private flightService: FlightService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAirports();

  }

  public getAirports(): void {
    this.airportService.getAirports().subscribe(
      (response: Airport[]) => {
        this.airports = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public searchAirport(event:any, box: string):void{
    let results: Airport[] = [];
    for (let airport of this.airports){
      if(
        airport.code.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        ||airport.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        ||airport.cityName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        ||airport.countryName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1){
        results.push(airport);
      }
    }


    if(box=="departure"){
        this.departAirports = results.slice(0,10);
    }else{
        this.arrivalAirports = results.slice(0,10);
    }

    console.log("Departure List: " + JSON.stringify(this.departAirports));

    console.log("Arrival List: " + JSON.stringify(this.arrivalAirports));




    // console.log(JSON.stringify(results));

    if(results.length == 0 || !event.target.value){
      if(box=="departure"){
        this.departAirports = [];
      }else{
        this.arrivalAirports = [];
      }
    }
  }

  public onSubmit(form: NgForm):void {
    console.log(form.value)

    this.flightService.addFlight(form.value).subscribe(
      (response: Flight) => {
        console.log(response);
        form.reset();
        this.router.navigate(['/general'])
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        form.reset();
      }

    );
  }

}
