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
    this.totalPrice = this.adultPrice + this.childPrice + this.bookingFee;
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
