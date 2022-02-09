import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TriggerService } from './Trigger.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(
    private http: HttpClient,
    private triggerService: TriggerService
  ) {}

  requestToParticipate(participantName: string) {
    this.http
      .post('http://localhost:8080/participants', { name: participantName })
      .subscribe((data) => {
        this.triggerService.newEvent('new participant');
        // alert('participant created ' + JSON.stringify(data));
      });
  }

  groupAvailableParticipant(): Observable<any> {
    return this.http.get('http://localhost:8080/groups');
  }

  createMatches() {
    return this.http.get('http://localhost:8080/matches');
  }
}
