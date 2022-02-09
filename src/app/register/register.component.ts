import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { TriggerService } from '../services/Trigger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  participantName: String = '';
  constructor(private service : MainService ) { }


  ngOnInit() {
  }

  addParticipant(name: string) {
  //  console.log('name is ' + name);
    this.service.requestToParticipate(name);
    this.participantName = '';
  }


}
