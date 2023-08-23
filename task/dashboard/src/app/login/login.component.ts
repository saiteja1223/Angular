import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private route : Router,private service:AuthService){

  }
  isLogged(data : any){
    let user:any = localStorage.getItem(data.email);
    this.service.autser(data,JSON.parse(user).password,JSON.parse(user).isChecked);
    
    if(user === null)
    this.route.navigate(['/pagenotfound']);
    else{
      // if(JSON.parse(user).password === data.password && JSON.parse(user).isChecked === true)
      //     {this.route.navigate(['/dashboard']); }
       if(JSON.parse(user).password === data.password && JSON.parse(user).isChecked === "")
          this.route.navigate(['/pagenotfound']);
    
    }
    

  }
  isRegister(){
    this.route.navigate(['/register']);
  }
  

}

