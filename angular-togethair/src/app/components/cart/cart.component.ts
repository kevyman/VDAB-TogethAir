import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() bookFlight!: Flight;

  constructor() { }

  ngOnInit(): void {
  }

  didItPass(): void{
    console.log(this.bookFlight);
  }

}
