import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private userObj: any;
  public person: Person = {id: 0, emailAddress: "", role: ""};

  constructor(public auth: AuthService,
              @Inject(DOCUMENT) private doc: Document,
              private personService: PersonService) {
  }


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

  logout(): void {
    this.auth.logout()
  }

  loginWithPopup(): void {
    this.auth.loginWithPopup();
  }
}
