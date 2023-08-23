import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {
  
  constructor(private service:DataserviceService,private route:Router){}
  ques=new FormGroup(
    {
      
      category:new FormControl(),
      numQ:new FormControl(),
      title: new FormControl()

    })
    launchQuiz(){
      this.route.navigate(["/display"]);
      return this.service.createQuiz(this.ques.controls["category"].value,this.ques.controls["numQ"].value,this.ques.controls["title"].value)
    }
   
  

}
