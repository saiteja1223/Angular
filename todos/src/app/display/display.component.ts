import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../getapi.service';
import { User } from '../user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  user:any=[];
  constructor(private service:GetapiService){

  }
  ngOnInit(): void {

    this.getEmployee();


    }

    private getEmployee(){

      this.service.getEmployeeList().subscribe(data => {

        this.user.push(data) 

      });


}}
