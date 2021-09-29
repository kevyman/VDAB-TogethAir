import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(public auth : AuthService){}

  ngOnInit(): void {
  }

}
