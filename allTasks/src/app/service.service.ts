import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  arr:any=[];
  private arrSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  sendDataTo(array:any){
    this.arr.push(array);
    this.arrSubject.next(this.arr);
    console.log(this.arr);
  }
  
  getDataComp() : Observable<any[]>{
    return this.arrSubject.asObservable();

  }
  

}
