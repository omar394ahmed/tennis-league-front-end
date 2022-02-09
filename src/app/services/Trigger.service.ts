import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  constructor() { }
  private _subject = new Subject<any>();

  newEvent(event : any) {
    this._subject.next(event);

  }

  get events$() {
    return this._subject.asObservable();
  }
}
