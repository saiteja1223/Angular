import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(private http:HttpClient) { 

  }
  private baseUrl = "https://www.boredapi.com/api/activity";

  getEmployeeList(){

    return this.http.get(this.baseUrl);

  }
}
