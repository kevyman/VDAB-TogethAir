import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: []
})

export class LoginButtonComponent implements OnInit {

  private userObj: Person = {emailAddress: "", id: 0, role: ""};
  public person: Person = {id: 0, emailAddress: "", role: ""};


  constructor(public auth: AuthService,
              public personService: PersonService) {
  }

  ngOnInit(): void {
  }

  loginWithPopup(): void {
    this.auth.loginWithPopup().subscribe(() => {
        this.tempFunc().subscribe(userObj => {
          console.log(userObj)
          this.personService.findPersonByEmailAddress(userObj.email).subscribe(person => {
            if (!person) {
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
          });
        });
      }
    );
  }

  public tempFunc() {
    return this.auth.user$
  }
}
