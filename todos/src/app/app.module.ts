import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { InputNumberModule } from 'primeng/inputnumber';
import { DisplayComponent } from './display/display.component';
import{HttpClientModule}from '@angular/common/http';
import { GetapiService } from './getapi.service';
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    KnobModule,
    InputNumberModule,
    HttpClientModule
  
  ],
  providers: [GetapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
