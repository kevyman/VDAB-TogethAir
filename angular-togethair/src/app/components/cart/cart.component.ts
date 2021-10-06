import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() bookFlight!: Flight;
  adultPrice: number;
  childPrice: number;
  totalPrice: number;
  bookingFee: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.whenChanges();
  }

  whenChanges():void{
    this.adultPrice = this.bookFlight.adults * this.bookFlight.price;
    this.childPrice = this.bookFlight.children * this.bookFlight.price * .8; //kids get 20% discount
    this.bookingFee = (this.adultPrice+this.childPrice)*.05;
    this.totalPrice = this.adultPrice + this.childPrice + this.bookingFee;
  }

}
