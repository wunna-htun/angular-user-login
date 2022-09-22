import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

const routes: Routes = [

  {
    path:'task-list',component:TaskListComponent
  },
  {
   path:'task-create',component:TaskCreateComponent 
  },
  {
    path:'task-update',component:TaskUpdateComponent
  },
  {
    path:'',redirectTo :'/task-list',pathMatch:'full',
  },
  {
    path:'**',component:PageNotFoundComponent
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
