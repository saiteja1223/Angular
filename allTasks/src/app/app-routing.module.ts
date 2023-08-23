import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

const routes: Routes = [
  {path:'',redirectTo:'/pagea' ,pathMatch:'full'},
  {path:'pagea' ,component:PageAComponent },
  {path:'pageb', component:PageBComponent},
  {path:'task', loadChildren: () => import('./task1/task1.module').then(m => m.Task1Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
