import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Flight} from 'src/app/models/flight';
import {FlightService} from 'src/app/services/flight.service';
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";
import {DataService} from "../../services/data.service";
import {Observable, Subscription} from "rxjs";
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

  public flights!: Flight[];

  public filteredFlights: Flight[] = [];

  public airportPair: string = "";

  public subscription!: Subscription;

  public destinationAirport!: string;

  public departureAirport!: string;

  public userObj !: any;

  public person: Person = {id: 0, emailAddress: "", role: ""};

  public updateFlight !: Flight;

  public bookFlight: Flight = {
    "id": 0,
    "roundtrip": false,
    "departureAirport": {
      "id": 2357,
      "code": "MSU",
      "name": "Moshoeshoe Intl Arpt",
      "cityCode": "MSU",
      "cityName": "Maseru",
      "countryName": "LESOTHO",
      "countryCode": "LS",
      "timezone": "2",
      "lat": "-29.462256",
      "lon": "27.552503",
      "numAirports": 1,
      "city": "true"
    },
    "destinationAirport": {
      "id": 1503,
      "code": "ICT",
      "name": "Mid Continent Arpt",
      "cityCode": "ICT",
      "cityName": "Wichita",
      "countryName": "UNITED STATES",
      "countryCode": "US",
      "timezone": "-6",
      "lat": "37.649944",
      "lon": "-97.433056",
      "numAirports": 1,
      "city": "true"
    },
    "departureTime": new Date(),
    "adults": 1,
    "children": 2,
    "flightClass": "BUSINESS_CLASS",
    "flightDuration": 20.679160273192934,
    "price": 750.86,
    "airline": {"name": "lufthansa", "imageUrl": "assets/logo2.png"}
  };


  public roles: string[] = ["ADMIN", "TOGETHAIR_EMPLOYEE", "AIRLINE_EMPLOYEE", "CLIENT"];


  // public values:string[] = Object.keys(Role).map(key => Role[key]).filter(k => !(parseInt(k) >= 0))
  private profileJson!: string;

  constructor(private flightService: FlightService,
              private personService: PersonService,
              private dataService: DataService,
              private auth: AuthService,
              private router: Router) {
  }


  ngOnInit(): void {
    // this.personService.findPersonByEmailAddress("tototonique@gmail.com").subscribe((response: Person) => {
    //     console.log(response);
    //     this.person = response;
    //     console.log(this.person)
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   });
    this.auth.user$.subscribe(userObj => {
      this.userObj = userObj
      if (userObj) {
        this.personService.findPersonByEmailAddress(this.userObj.email).subscribe(person => {
          this.person = person;
        });
      }
    });
    this.tempFunc().subscribe(userObj =>
      this.userObj = userObj
    );
    this.personService.addPerson(this.person);
    this.subscription = this.dataService.airportPair.subscribe(airportPair => this.airportPair = airportPair);
    const array = this.airportPair.split("/");
    console.log(array);
    this.destinationAirport = array[1];
    this.departureAirport = array[0];
    this.getFlights();
  }

  bookFlightSaveUser(flight: Flight): void {
    let isAuth: boolean = false;
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      isAuth = isAuthenticated
      if (!isAuth) {
        this.auth.loginWithPopup()
      }
      this.bookFlight = flight;
      console.log(this.bookFlight);
    })
  }



  tempFunc() {
    return this.auth.user$;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  public getFlights(): void {
    this.flightService.getFlights().subscribe(
      (response: Flight[]) => {
        this.flights = response;
        for (let i = 0; i < this.flights.length; i++) {
          let flight = this.flights[i];
          if (
            flight.destinationAirport.name == this.destinationAirport && flight.departureAirport.name == this.departureAirport
          ) {
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

  public deleteFlight(id: number): void {
    this.flightService.deleteFlight(id).subscribe(() => {
      this.filteredFlights = [];
      this.getFlights()
    });

  }

  public editFlight(flight: Flight): void{
    this.updateFlight = flight;
  }

  public onEditFlight(editForm: NgForm): void {
    console.log(editForm.value.destinationAirport)
    document.getElementById('editFlightCloseBtn')?.click();
    editForm.value.destinationAirport = this.updateFlight.destinationAirport;
    editForm.value.departureAirport = this.updateFlight.departureAirport;
    editForm.value.flightClass = this.updateFlight.flightClass;
    editForm.value.roundtrip = this.updateFlight.roundtrip;
    editForm.value.children = this.updateFlight.children;
    editForm.value.adults = this.updateFlight.adults;
    editForm.value.airline = this.updateFlight.airline;

    this.flightService.updateFlight(editForm.value).subscribe(
      (response: Flight) => {
        console.log(response);
        editForm.reset();
        this.filteredFlights = [];
        this.getFlights()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
