import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1RoutingModule } from './task1-routing.module';
import { PagedComponent } from './paged/paged.component';


@NgModule({
  declarations: [
    PagedComponent
  ],
  imports: [
    CommonModule,
    Task1RoutingModule
  ]
})
export class Task1Module { }
