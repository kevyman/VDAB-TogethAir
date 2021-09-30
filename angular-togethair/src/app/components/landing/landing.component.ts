import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { AirportService } from "../../services/airport.service";
import { Airport } from "../../models/airport";
import { NgForm } from "@angular/forms";
import { FlightService } from "../../services/flight.service";
import { Flight } from "../../models/flight";
import{ DataService } from "../../services/data.service";
import { Airline } from "../../models/airline";

import { Subscription } from "rxjs";
import { Router } from '@angular/router';
import {AuthService} from "@auth0/auth0-angular";
import { AirlineService } from 'src/app/services/airline.service';


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
  airlines: Airline[] =[];


  public airportPair: string="";

  public subscription!: Subscription;

  constructor(private airportService: AirportService,
    private dataService: DataService,
    private flightService: FlightService,
    private router: Router,
    public  auth: AuthService,
    private airlineService: AirlineService
              ) { }


  ngOnInit(): void {
    this.getAirports();
    this.getAirlines();
    this.subscription = this.dataService.airportPair.subscribe(airportPair => this.airportPair = airportPair);

  }

   ngOnDestroy(): void{

    this.subscription.unsubscribe();

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

  public getAirlines(): void{
    this.airlineService.getAirlines().subscribe(
      (response: Airline[]) => {
        this.airlines = response;
        // console.log(this.airlines);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public searchAirport(event: any, box: string): void {
    let results: Airport[] = [];
    for (let airport of this.airports) {
      if (
        airport.code.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        || airport.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        || airport.cityName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        || airport.countryName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) {
        results.push(airport);
      }
    }


    if (box == "departure") {
      this.departAirports = results.slice(0, 10);
    } else {
      this.arrivalAirports = results.slice(0, 10);
    }

  //  console.log("Departure List: " + JSON.stringify(this.departAirports));

  //  console.log("Arrival List: " + JSON.stringify(this.arrivalAirports));


    if (results.length == 0 || !event.target.value) {
      if (box == "departure") {
        this.departAirports = [];
      } else {
        this.arrivalAirports = [];
      }
    }
  }

  public onSubmit(form: NgForm): void {

    let newFlight = this.buildFlight(form.value);

    this.dataService.changeMessage(newFlight.departureAirport.name + "/" + newFlight.destinationAirport.name);

    this.flightService.addFlight(newFlight).subscribe(
      (response: Flight) => {
        console.log(response);
        form.reset();
        this.router.navigate(['/general'])
      },
      (error: HttpErrorResponse) => {
        alert(error.message + " Please fill in the form correctly");

      }

    );
  }

  public buildFlight(inputFlight: Flight): Flight{

    let tempFlight: Flight = inputFlight;

    tempFlight.departureAirport = this.findAirportByName(String(inputFlight.departureAirport));

    tempFlight.destinationAirport = this.findAirportByName(String(inputFlight.destinationAirport));
 
    tempFlight.flightDuration = this.calculateDuration(tempFlight.departureAirport, tempFlight.destinationAirport);

    let tempPrice: number = this.priceCalculation(tempFlight.destinationAirport,tempFlight.departureAirport);

    if(tempFlight.roundtrip){
      tempPrice *= 2;
    }

    tempFlight.price = tempPrice;
    tempFlight.airline = this.airlines[Math.floor(Math.random() * (this.airlines.length))];

    return tempFlight;
  }



  public findAirportByName(name: string) {

    let found = this.airports.filter(x => x.name == name);

    return found[0];

  }

  public calculateDuration(airport1: Airport, airport2: Airport) {
    const R = 6371e3; // metres

    let lat1 = Number(airport1.lat);
    let lat2 = Number(airport2.lat);
    let lon1 = Number(airport1.lon);
    let lon2 = Number(airport2.lon);

    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres

    return (d/1000)/750 + .8;

  }

  public priceCalculation(airport1: Airport, airport2: Airport) {
    const R = 6371e3; // metres

    let lat1 = Number(airport1.lat);
    let lat2 = Number(airport2.lat);
    let lon1 = Number(airport1.lon);
    let lon2 = Number(airport2.lon);

    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    let newNumber =(d / 1000) * 0.05 + Math.random() * 8;
   return Number(newNumber.toFixed(2));
  }

}
