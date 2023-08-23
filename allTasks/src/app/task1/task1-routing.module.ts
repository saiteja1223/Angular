import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagedComponent } from './paged/paged.component';

const routes: Routes = [
  {path:"",component:PagedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task1RoutingModule { }
