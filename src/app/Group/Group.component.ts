import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { TriggerService } from '../services/Trigger.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-Group',
  templateUrl: './Group.component.html',
  styleUrls: ['./Group.component.css'],
})
export class GroupComponent implements OnInit , AfterViewInit{
  constructor(
    private service: MainService,
    private triggerService: TriggerService
  ) {

  }
  ngAfterViewInit(): void {

    this.group();
    // $(document).ready(function() {
    //   (<any>$('.treeview')).mdbTreeview();
    // });
    //throw new Error('Method not implemented.');
  }




  ngOnInit() {
    console.log('init');
    this.group();
    this.triggerService.events$.forEach((event) => {
     // this.group();
    });
  }
  groups:  any[] = [];
  group() {
    this.service.groupAvailableParticipant().subscribe((data) => {
      this.groups = data;
      console.log(JSON.stringify(data));
    });
  }





}
