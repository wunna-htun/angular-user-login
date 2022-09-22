import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [

  {
    path:'dashboard',component:UserlistComponent,canActivate: [AuthGuard]
  },
  {
   path:'register',component:UserAddComponent 
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',redirectTo :'/dashboard',pathMatch:'full',
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
