import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Flight} from 'src/app/models/flight';
import {FlightService} from 'src/app/services/flight.service';
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";
import{DataService} from "../../services/data.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {
  public flights!: Flight[];

  public filteredFlights: Flight[]=[];

  public airportPair: string="";

  public subscription!: Subscription;

  public destinationAirport!: string;

  public departureAirport!: string;



  public roles: string[] = ["ADMIN" , "TOGETHAIR_EMPLOYEE"  , "AIRLINE_EMPLOYEE" , "CLIENT"];


  // public values:string[] = Object.keys(Role).map(key => Role[key]).filter(k => !(parseInt(k) >= 0))

  constructor(private flightService: FlightService,
              private personService: PersonService,
              private dataService: DataService) {
  }


  ngOnInit(): void {

    this.subscription = this.dataService.airportPair.subscribe(airportPair => this.airportPair = airportPair);
    console.log(this.airportPair);
    const array = this.airportPair.split("/");
    console.log(array)
    this.destinationAirport = array[1];
    this.departureAirport = array[0];
    this.getFlights();

  }


 ngOnDestroy(): void{

  this.subscription.unsubscribe();
 }



  public getFlights(): void {
    this.flightService.getFlights().subscribe(
      (response: Flight[]) => {
        this.flights = response;
        for(let i = 0;i < this.flights.length; i++){
          let flight = this.flights[i];
          if(
            flight.destinationAirport.name==this.destinationAirport && flight.departureAirport.name==this.departureAirport
          ){
            this.filteredFlights.push(flight);
          }
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddFlight(addForm: NgForm): void {
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

  public onAddPerson(addFormPerson: NgForm): void {
    document.getElementById('addPersonCloseBtn')?.click();
    this.personService.addPerson(addFormPerson.value).subscribe(
      (response: Person) => {
        console.log(response);
        addFormPerson.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
