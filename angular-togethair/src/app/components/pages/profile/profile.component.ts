
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {PersonService} from "../../../services/person.service";
import {Person} from "../../../models/person";
import {BookingService} from "../../../services/booking.service";
import {Booking} from "../../../models/booking";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  public userObj !: any;

  public person: Person = {id: 0, emailAddress: "", role: ""};

  public bookings : Booking[];


  constructor(public auth: AuthService,
              public personService: PersonService,
              public bookingService: BookingService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(userObj => {
      this.userObj = userObj
      if (userObj) {
        this.personService.findPersonByEmailAddress(this.userObj.email).subscribe(person => {
          this.person = person;
          this.bookingService.getBookingsOfPerson(person).subscribe(
            (response : Booking[]) =>{
            this.bookings = response;
            console.log(this.bookings);
                      })
        });
      }
    });
  }
}
