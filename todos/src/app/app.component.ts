import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  value: string="";
  value2: string="";
  value3: number= 0;
  rangeDates: Date[] | undefined;
}
