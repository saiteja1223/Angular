import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { PoolComponent } from './pool/pool.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { ResultsComponent } from './results/results.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AddQuestionsComponent,
    CreateQuizComponent,
    PoolComponent,
    DisplayQuizComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
