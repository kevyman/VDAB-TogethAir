import {Component, OnInit, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Flight} from 'src/app/models/flight';
import {Booking} from "../../models/booking";
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";
import {BookingService} from "../../services/booking.service";
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @ViewChild('encasUnPwModal') public modal: ;

  @Input() bookFlight!: Flight;
  adultPrice: number;
  childPrice: number;
  totalPrice: number = 0;
  bookingFee: number;
  kids: number;
  grownups: number;
  randBookers: number = 8;



  public userObj !: any;
  public person: Person = {id: 0, emailAddress: "", role: ""};
  booking: Booking = {
    bookingDate: new Date(),
    flight: this.bookFlight,
    id: 0,
    person: this.person,
    totalPrice: this.totalPrice
  };

  constructor(public personService: PersonService,
              public bookingService: BookingService,
              public auth: AuthService,
              public router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.whenChanges();
  }

  whenChanges(): void {
    this.adultPrice = this.bookFlight.adults * this.bookFlight.price;
    this.childPrice = this.bookFlight.children * this.bookFlight.price * .8; //kids get 20% discount
    this.bookingFee = (this.adultPrice + this.childPrice) * .05;
    this.totalPrice = Number((this.adultPrice + this.childPrice + this.bookingFee).toFixed(2));
    this.kids = this.bookFlight.children;
    this.grownups = this.bookFlight.adults;
    this.randBookers =( Math.floor(Math.random() * 15)) + 3;
  }

  didItChange(){
    console.log("Kids: " + this.kids);
    console.log("Adults: " + this.grownups);
  }

  onNumberChange(){
    this.bookFlight.children = this.kids;
    this.bookFlight.adults = this.grownups;
    this.adultPrice = this.bookFlight.adults * this.bookFlight.price;
    this.childPrice = this.bookFlight.children * this.bookFlight.price * .8; //kids get 20% discount
    this.bookingFee = (this.adultPrice+this.childPrice)*.05;
    this.totalPrice = Number((this.adultPrice + this.childPrice + this.bookingFee).toFixed(2));
  }

  childInc(){
    this.kids++;
    this.onNumberChange();
  }

  childDec(){
    if(this.kids>0){
      this.kids--;
      this.onNumberChange();
    }
  }

  adultInc(){
    this.grownups++;
    this.onNumberChange();
  }

  adultDec(){
    if(this.grownups>0){
      this.grownups--;
      this.onNumberChange();
    }

  }

  processPayment() {
    this.booking.bookingDate = new Date();
    this.booking.totalPrice = this.totalPrice;
      this.addFunctionTemp()

  }

  private addFunctionTemp() {
    this.tempFunc().subscribe(userObj => {
        this.personService.findPersonByEmailAddress(userObj.email).subscribe(person => {
              if(!person) {
                console.log(userObj.email)
                this.person.emailAddress = userObj.email;
                this.person.role = "CLIENT";

                this.personService.addPerson(this.person).subscribe(
                  (response: Person) => {
                    },
                  (error: HttpErrorResponse) => {
                    alert(error.message);
                  });
              }
            this.person = person
            this.booking.person = this.person;
            this.booking.flight = this.bookFlight;
            this.bookingService.addBooking(this.booking).subscribe(() => {
              this.router.navigate(['/overview'])
            });
          }
        );
      }
    )
  }

  private tempFunc() {
    return this.auth.user$;
  }
}
