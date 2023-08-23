import { HttpClient } from '@angular/common/http';


import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

      password:new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*[0-9][a-z]*[@]')],),

      pone_no:new FormControl('',[Validators.required,Validators.pattern('[89][0-9]{9}')]),

    })

  }

  OnSubmit():void{

    console.log(this.frmRegister.value);
    this.http.post('http://localhost:8080/api/post',
    this.frmRegister.value)
    .subscribe(response=>{console.log(response)
      this.frmRegister.reset();




    });

  }

  ngOnInit(): void {


   

  }
  isdelete(){
    Swal.fire({
      title:'Do you want to exit?',
      text:'think once again',
      icon: 'question',
      showCancelButton:true,
      confirmButtonText:'sure',
      cancelButtonText:'No',

    }).then((result) =>{
      if(result.value){
      Swal.fire('cancel','you ending the process','success');
      this.frmRegister.reset();

      }
      else if(result.dismiss===Swal.DismissReason.cancel){
        Swal.fire('continue','please fill the details','error');
      }
    });

  }

}



