import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit,OnChanges {
  @Input() data:any;
  dt:any=[]
  constructor(private se:ServiceService){
      
  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes)
   
  }
    ngOnInit(){
      this.se.getDataComp().subscribe(response=>{
        this.dt.push(response);
        console.log(this.dt)
      });
      // console.log(this.se.sendDataComp())
      // console.log(this.se.sendNum());

    }

}
