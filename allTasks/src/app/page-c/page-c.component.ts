import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})
export class PageCComponent implements OnChanges,OnInit {
  constructor(){
    
  }
  ngOnInit(): void {
    

  }
  ngOnChanges(changes: SimpleChanges): void {
      this.array1.push(this.info);
      console.log(this.array1)
      console.log(this.array1.length);
  }
  @Input()  info:any
   array1:any=[];
  

}
