import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private route: Router){}
  isfin(data: any){
    const userData = {
      email : data.email,
      password : data.password,
      isChecked : data.isChecked

    }
    localStorage.setItem(data.email,JSON.stringify(userData));
    this.route.navigate(['/login']);
  }

}
