import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: [
  ]
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

  loginWithRedirect():void{
    this.auth.loginWithRedirect();

  }

}
