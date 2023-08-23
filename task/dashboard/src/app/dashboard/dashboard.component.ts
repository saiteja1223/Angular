import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
export class USERS {
 
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList:any;
  constructor(private service:ServiceService){
 

  }
 ngOnInit(): void {
  this.getuserdata();
     
 }
 getuserdata(){
  this.service.getapi().subscribe(data =>
    {
      this.userList=data;
      console.log(this.userList)
    })
 
 
 }
}
