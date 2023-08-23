import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  title(title: any) {

    throw new Error('Method not implemented.');

  }

  frmRegister:FormGroup;

  constructor(public http:HttpClient){

    this.frmRegister=this.createFormGroup();

  }

  createFormGroup(){

    return new FormGroup({

      name :new FormControl('',[Validators.required,Validators.pattern('^([A-Z][a-z]*((\\s[A-Za-z])?[a-z]*)*)$')],),

      email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],),

      password:new FormControl('',Validators.required),

      pone_no:new FormControl('',Validators.required),

    })

  }

  OnSubmit():void{

    console.log(this.frmRegister.value);
    this.http.post('http://localhost:8080/api/post', this.frmRegister.value)
    .subscribe(response=>{console.log(response)
   this.frmRegister.reset();




                                





    });

  }

  ngOnInit(): void {

   

  }

}
