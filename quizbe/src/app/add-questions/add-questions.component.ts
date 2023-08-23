
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent  {
  constructor(private http:HttpClient,private service:DataserviceService,private route:Router){}
 
  form=new FormGroup(
    { 
      id:new FormControl(),
      questionTitle:new FormControl(),
      option1:new FormControl(),
      option2:new FormControl(),
      option3:new FormControl(),
      option4:new FormControl(),
      rightAnswer:new FormControl(),
      difficultylevel:new FormControl(),
      category:new FormControl(),
    }
  )
 
  onsubmit(){
  //  console.log(this.form.value)
  //  console.log(this.form.controls["option1"].value)
  //  this.http.post("http://localhost:8090/ques/add",this.form.controls["option1"].value).subscribe(responce=>{
  //   console.log(responce)
    
  //  })
     const user=this.form.value;
     this.service.addQuestion(user).subscribe(res=>{
      console.log(res);
     })
    
    this.route.navigate(["/pool"])
  }
  
}
