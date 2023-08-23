import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent {
  constructor(private service:DataserviceService,private http:HttpClient,private route:Router){}
  data:any;
  display(){
    this.service.displayQuestions().subscribe(
      res=>{
        this.data=res;
        console.log(res);
      
      }
    )

  }
  add(){
    this.route.navigate(["/add"]);
  }
  create(){
    this.route.navigate(["/create"])
    console.log("dsfuik")
  }

}
