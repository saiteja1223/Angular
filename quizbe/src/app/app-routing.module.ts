import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PoolComponent } from './pool/pool.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:"login" ,component:WelcomeComponent},
  {path:"pool",component:PoolComponent},
  {path:"add",component:AddQuestionsComponent},
  {path:"create",component:CreateQuizComponent},
  {path:"display",component:DisplayQuizComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
