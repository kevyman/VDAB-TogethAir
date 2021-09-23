import { Component, OnInit } from '@angular/core';
import {Flight} from "../../models/flight";
import {HttpErrorResponse} from "@angular/common/http";
import {AirportService} from "../../services/airport.service";
import {Airport} from "../../models/airport";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private airports!: Airport[];

  constructor(private airportService: AirportService) { }

  public getAirports(): void {
    this.airportService.getAirports().subscribe(
      (response: Airport[]) => {
        this.airports = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getAirports();
  }

}
