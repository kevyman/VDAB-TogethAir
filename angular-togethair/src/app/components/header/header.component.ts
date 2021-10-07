import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private userObj: Person = {emailAddress: "", id: 0, role: ""};
  public person: Person = {id: 0, emailAddress: "", role: ""};

  constructor(public auth: AuthService,
              @Inject(DOCUMENT) private doc: Document,
              private personService: PersonService,
              public router: Router) {
  }


  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout()
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


  public goToProfilePage() {
    this.router.navigate(['/profile'])
  }

  tempFunc() {
    return this.auth.user$;
  }
}


