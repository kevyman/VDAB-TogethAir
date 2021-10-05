import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {


  constructor(public auth : AuthService,
              public personService: PersonService){}

  ngOnInit(): void {
  }

}
