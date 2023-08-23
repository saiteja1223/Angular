import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.css']
})
export class DisplayQuizComponent {
  data:any;
  questionlist:any[]=[];
  currentQuestionNumber:any=0;
  constructor(private service:DataserviceService){}
  conductQuiz(){
    this.service.conductQuizService().subscribe((res:any)=>
     {
      this.data=res;
      this.questionlist=res
     });
  }
}
