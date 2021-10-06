import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userObj : any = this.auth.user$.subscribe(userObj => this.userObj = userObj);
  public person: Person = {emailAddress: "", role: ""};

  constructor(public auth: AuthService,
              @Inject(DOCUMENT) private doc : Document,
              private personService:PersonService) { }


  ngOnInit(): void {
    if (this.userObj?.email) {
      this.personService.findPersonByEmailAddress(this.userObj.email).subscribe(person => {
      this.person = person;
      console.log(this.person.role);
     });
    }
  }

  logout():void{
    this.auth.logout({returnTo: this.doc.location.origin})
  }

  loginWithRedirect():void{
    this.auth.loginWithRedirect();
  }

  private tempFunc() {
    return this.auth.user$;
  }
}
