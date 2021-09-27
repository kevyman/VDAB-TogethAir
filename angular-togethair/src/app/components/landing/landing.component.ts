import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {AirportService} from "../../services/airport.service";
import {Airport} from "../../models/airport";
import {NgForm} from "@angular/forms";
import {FlightService} from "../../services/flight.service";
import {Flight} from "../../models/flight";


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
  newFlight !: Flight;


  constructor(private airportService: AirportService,
              private flightService: FlightService) { }


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


    if(results.length == 0 || !event.target.value){
      if(box=="departure"){
        this.departAirports = [];
      }else{
        this.arrivalAirports = [];
      }
    }
  }

  public onSubmit(form: NgForm):void {

    console.log(form.value.departureAirport , form.value.destinationAirport)

    this.newFlight = form.value;

    this.newFlight.departureAirport = this.findAirportByName(form.value.departureAirport);
     console.log(this.newFlight.departureAirport.id)
    this.newFlight.destinationAirport = this.findAirportByName(form.value.destinationAirport);
    console.log(this.newFlight.destinationAirport.id)



    this.flightService.addFlight(this.newFlight).subscribe(
      (response: Flight) => {
        console.log(response);
        form.reset();

      },
      (error: HttpErrorResponse) => {
        alert(error.message + " Please fill in the form correctly");

      }
    );
  }


  public findAirportByName(name:string){

    let found = this.airports.filter(x => x.name == name);

    return found[0];

  }

}
