import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService  { 
  constructor(private route:Router){}
  auth=false;
  autser(data:any,password: any,isChecked: boolean){
  var user= localStorage.getItem(data.email)
  if(password === data.password && isChecked === true){
    this.auth=true;
  this.route.navigate(['/dashboard']); }
  else{
    this.route.navigate(['/pagenotfound'])
  }
  }
  authientication(){
    return this.auth;
  }
 
}
