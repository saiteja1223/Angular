import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http :HttpClient ) { }
  public getapi(){
    return this.http.get("/assets/data.json");
  }
}
