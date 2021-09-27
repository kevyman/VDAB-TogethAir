import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {



  public airportPair = new BehaviorSubject('default message');
    currentMessage = this.airportPair.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.airportPair.next(message);
  }

}
