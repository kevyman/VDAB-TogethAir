import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {



  public airportPair = new BehaviorSubject('Antwerp Brussels North/Barcelona Arpt');
    currentMessage = this.airportPair.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.airportPair.next(message);
  }

}
