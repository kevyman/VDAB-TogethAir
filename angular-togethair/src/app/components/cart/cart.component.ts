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
  kids: number;
  grownups: number;


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
    this.kids = this.bookFlight.children;
    this.grownups = this.bookFlight.adults;
  }

  didItChange(){
    console.log("Kids: " + this.kids);
    console.log("Adults: " + this.grownups);
  }

  onNumberChange(){
    this.bookFlight.children = this.kids;
    this.bookFlight.adults = this.grownups;
    this.adultPrice = this.bookFlight.adults * this.bookFlight.price;
    this.childPrice = this.bookFlight.children * this.bookFlight.price * .8; //kids get 20% discount
    this.bookingFee = (this.adultPrice+this.childPrice)*.05;
    this.totalPrice = this.adultPrice + this.childPrice + this.bookingFee;
  }

  childInc(){
    this.kids++;
    this.onNumberChange();
  }

  childDec(){
    if(this.kids>0){
      this.kids--;
      this.onNumberChange();
    }
  }

  adultInc(){
    this.grownups++;
    this.onNumberChange();
  }

  adultDec(){
    if(this.grownups>0){
      this.grownups--;
      this.onNumberChange();
    }
    
  }

}
