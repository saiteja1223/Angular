import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit{
  name:any;
  data:String="";
  data1:number=0;
  a:boolean=true;
  b:boolean=false;
  constructor(private serv:ServiceService,private route:Router){}
  showWarning:boolean=true;
  register=new FormGroup({
    name1:new FormControl(),
    age:new FormControl()
  })

  submit(){
    console.log(this.register.value)
    this.data=this.register.controls['name1'].value;
   // console.log(this.data);
  
    this.serv.sendDataTo(this.data);
    
    this.register.reset();
  }
    // SendDataToService(){
    //   return this.data;
    // }
    nav(){
     this.route.navigate(['/pageb'])
    }
    ngOnInit(): void {
     
     
    }
    increament(){
      this.data1++;
    }
    startQuiz(){
      this.showWarning=!this.showWarning;
      

    }
    run(){
      this.showWarning=!this.showWarning;
    }
    @Output() messge=new EventEmitter();
    sendMessege(){
      this.messge.emit(this.name);
    }
    
 }
