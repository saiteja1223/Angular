import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private url="http://localhost:8090";
  constructor(private http:HttpClient) { }
  displayQuestions() {
    const url=`${this.url}/ques/allQuestions`;
    return this.http.get(url);
    
   
  }
  public addQuestion(data: any): Observable<any> {
    const url = `${this.url}/ques/add`;
    return this.http.post(url, data);
  }

  createQuiz(category:any,numQ:any,title:any){
    
     const url=`${this.url}/quiz/create?category=${category}&numQ=${numQ}&title=${title} `;
     console.log(url);
     return this.http.post(url,null)
    
  }
  conductQuizService(){
    const url=`${this.url}/quiz/get/2`
    return this.http.get(url);
  }
  
}
