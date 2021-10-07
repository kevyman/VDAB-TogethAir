
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {PersonService} from "../../../services/person.service";
import {Person} from "../../../models/person";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  public userObj !: any;

  public person: Person = {id: 0, emailAddress: "", role: ""};


  constructor(public auth: AuthService,
              public personService: PersonService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(userObj => {
      this.userObj = userObj
      if (userObj) {
        this.personService.findPersonByEmailAddress(this.userObj.email).subscribe(person => {
          this.person = person;
        });
      }
    });
  }
}
